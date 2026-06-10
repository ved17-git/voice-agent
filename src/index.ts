import {
  type JobContext,
  type JobProcess,
  ServerOptions,
  cli,
  defineAgent,
  inference,
  voice,
} from '@livekit/agents';
import * as livekit from '@livekit/agents-plugin-livekit';
import * as silero from '@livekit/agents-plugin-silero';
import * as aiCoustics from '@livekit/plugins-ai-coustics';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import { Agent } from './agents.js';
import knowledge from '../knowledge.json' with {type:"json"}
import { Collections, upsertData } from './db.js';


dotenv.config({ path: '.env' });

export default defineAgent({
  prewarm: async (proc: JobProcess) => {
    proc.userData.vad = await silero.VAD.load();   // vad -> sp to tx -> llm -> tx to sp -> res
  },
  entry: async (ctx: JobContext) => {
    const vad = ctx.proc.userData.vad! as silero.VAD;
    
    const initCollection=await Collections('my-collection') // from db.ts
    await upsertData(initCollection, knowledge)

    const session = new voice.AgentSession({
      vad,
      stt: new inference.STT({ model: 'deepgram/nova-3', language: 'multi' }),
      llm: new inference.LLM({ model: 'openai/gpt-5.2-chat-latest' }),
      tts: new inference.TTS({
        model: 'cartesia/sonic-3',
        voice: '9626c31c-bec5-4cca-baa8-f8ba9e84c8bc',
      }),
      turnHandling: {
        turnDetection: new livekit.turnDetector.MultilingualModel(),
      },
    },
  );

    await session.start({
      agent: new Agent(initCollection),
      room: ctx.room,
      inputOptions: {
        noiseCancellation: aiCoustics.audioEnhancement({ model: 'quailVfS' }),
      },
    });

    await ctx.connect();

    void session.generateReply({
      instructions: 'Greet the user and offer your assistance.',
    });
  },
});


cli.runApp(new ServerOptions({ agent: fileURLToPath(import.meta.url), agentName: 'demo-agent' }));