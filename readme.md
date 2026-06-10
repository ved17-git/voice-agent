# Real Estate Brokerage Voice Agent (LiveKit + ChromaDB)

An intelligent, real-time voice-activated assistant built for real estate investment firms. The agent acts as an automated "voice broker," answering complex questions about confidential off-market pocket listings, underwriting financial models, client CRM data, zoning updates, and preferred vendor SLAs by pulling real-time context from a Vector Database.

## 🚀 Key Features
* **Conversational Voice Interface**: Powered by **LiveKit Agents** with integrated Voice Activity Detection (VAD) and Turn Detection to ensure natural, bidirectional voice communication.
* **Retrieval-Augmented Generation (RAG)**: Integrates directly with a localized **ChromaDB** instance to dynamically parse and query structural real estate intelligence documentation.
* **Deep Tech Stack Integration**: Combines highly responsive speech-to-text (**Deepgram Nova-3**), advanced reasoning (**OpenAI GPT-4o-level LLM**), and ultra-low latency vocal synthesis (**Cartesia Sonic-3**).
* **Next.js Web Frontend**: Features a clean web portal utilizing Next.js script extensions to initialize seamless connections with the cloud-deployed AI broker.

---

## 🛠️ Tech Stack
* **AI Agent Core**: `LiveKit Agents SDK` (Node.js/TypeScript)
* **Vector Database**: `ChromaDB` (For semantic data storage and multi-document retrieval)
* **STT**: `Deepgram (Nova-3 Multi)`
* **LLM**: `OpenAI Chat Inference Pipeline`
* **TTS**: `Cartesia (Sonic-3)`
* **VAD / Turn Detection**: `Silero VAD` & `LiveKit Multilingual Model`
* **Frontend**: `Next.js 14+` (App Router)

---

## 🧠 Knowledge Base Schema
The agent is primed with high-value, domain-specific multi-structured data mimicking an enterprise real estate firm's private database. The embedded documents fall into 5 distinct categories:

| Document Source File | Category | Core Content Summary / Use Case |
| :--- | :--- | :--- |
| `pocket_listings_q2_2026.json` | `off_market_listing` | Confidential details on a 24-unit complex with distressed debt at 880 Westheimer Rd. |
| `salesforce_crm_export_active_buyers.csv` | `client_intelligence` | VIP Investor (Harrison Capital Group) executing a time-critical $3.8M 1031 Exchange. |
| `investment_committee_proformas_2026.xlsx` | `investment_underwriting` | Financial metrics (6.2% Entry Cap Rate, $775k NOI) for Pinnacle Heights. |
| `municipal_lobbying_updates_may.pdf` | `market_intelligence` | Leaked municipal up-zoning data regarding the Transit-Oriented Ordinance (District 4). |
| `preferred_vendor_pricing_slas_2026.md` | `operations_and_vendors` | SLA pricing tables ($9,500 heavy unit turns) and penalty terms for Apex Commercial Builders. |

---

## 🔧 Installation & Local Setup

### 1. Agent Service Configuration
Navigate to your agent directory and create a `.env` file containing your deployment credentials:
```env
LIVEKIT_URL=your_livekit_url
LIVEKIT_API_KEY=your_api_key
LIVEKIT_API_SECRET=your_api_secret
CHROMA_TENANT=default
CHROMA_DATABASE=default
CHROMA_API_KEY=your_chroma_key
CHROMA_HOST=chroma_host

### Install Dependencies & Build

Install dependencies and run the build script. This compiles the TypeScript source code and securely bundles the required `.onnx` machine learning models into the runtime build.

```bash
pnpm install
pnpm run build
pnpm run dev

The agent service will now start and connect to your configured LiveKit deployment.

2. Next.js Web Frontend Configuration

Navigate to the frontend application directory:

cd frontend
pnpm install
pnpm run dev

Once the development server is running, open:

http://localhost:3000

This web interface allows you to communicate directly with the deployed voice agent using your browser microphone.

🎤 Sample Prompts to Try

After connecting through the web interface, test the agent's Retrieval-Augmented Generation (RAG) capabilities using the following prompts.

Querying Off-Market Deals

Prompt

Are there any off-market multifamily listings available with highly motivated sellers right now?

Expected Response

The agent should retrieve the confidential pocket listing located at 880 Westheimer Rd and reference:

90-day debt maturity crisis
Current occupancy of 65%
Estimated $250,000 CapEx requirement
Distressed seller situation creating acquisition opportunity