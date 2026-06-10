import {voice, llm} from '@livekit/agents'
import { queryKnowledge } from './db.js';
import { z } from 'zod';
import type { Collection } from 'chromadb';
import { SystemPrompt } from './config.js';


export class Agent extends voice.Agent{
    constructor(collection:Collection){
        super({
           instructions: SystemPrompt,

                tools: {
                    search_knowledge_base: llm.tool({
                    description: 'Search the internal real estate knowledge base for property listings, client profiles, underwriting data, zoning intelligence, and vendor pricing.',
                    parameters: z.object({
                        query: z.string().describe('Natural language search query based on what the user is asking'),
                    }),
                    execute: async ({ query }, { ctx }) => {
                        const chunks = await queryKnowledge(collection, query, 3);
                        if (chunks.length === 0) return 'No relevant information found.';
                        return chunks.map((c, i) => `[Source ${i + 1}]\n${c}`).join('\n\n');
                    },
                    }),
                },
            
        })
    }
}

// export class RagAgent extends voice.Agent {
//   async onUserTurnCompleted(
//     chatCtx: llm.ChatContext, 
//     newMessage: llm.ChatMessage,
//   ): Promise<void> {

//     // RAG function definition omitted for brevity //db call
//     const ragContent = await myRagLookup(newMessage.textContent);


//     chatCtx.addMessage({
//       role: 'assistant',
//       content: `Additional information relevant to the user's next message: ${ragContent}`,
//     });

//   }
// }