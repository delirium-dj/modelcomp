# GPT-Live-1 (Astra, medium) — findings by Qwen 3.8 Flash

- Source: OpenAI (`openai/gpt-live-1-astra`) — voice mirror tree
- Date: 2026‑11‑10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Live-1 (Astra, medium)
- **Short description:** OpenAI's **full-duplex speech-to-speech model** with **GPT‑6 Astra (medium) as the delegated reasoning backend**. Built for **tool-heavy spoken customer support**, where turn-taking quality matters as much as task completion. Reasoning is offloaded to the Astra backend; the voice layer handles duplex audio.
- **Provider / access:** OpenAI Realtime/Live API. `noFreeId` (paid). Voice layer billed per second of session; backend model + tools billed separately.
- **IDs:** `openai/gpt-live-1-astra` (meta). AA entry: "GPT-Live-1 (Astra, medium)".
- **Context window:** **128K tokens per Live session** (curated meta).
- **Modalities:** **audio + text in / audio + text out; image and video unsupported**; tool calls; reasoning delegated to backend.
- **Pricing:** **$0.05 / min of voice session ($3.00/hr)**, billed per second; backend + tools separate. AA cost ≈ $5.83/hr input audio.

### Raw benchmarks found (exact-ID, independent)

Artificial Analysis **Speech-to-Speech** leaderboard row (note: τ‑Voice based on 1 trial for this model per AA):

- **AA Speech-to-Speech Index: 83.2** (top of the OpenAI live family) · Speech Reasoning (Big Bench Audio): **90.1 %** · Conversational Dynamics (Full Duplex Bench): **94.9 %** · **Agentic (τ‑Voice): 74.5 %** (class-leading) · Arena Preference Elo: **1027** · Task Success Rate: **87.4 %** · Time to First Audio: **1.34 s**.
- Family context (not this SKU): GPT‑Live‑1 (Sol, low) = Index 80.1, conv 97.3 %.

### Normalized scores (1–100)

> Scored on independent AA S2S components. The Astra backend + 74.5 % τ‑Voice make it the strongest **agentic** voice model here. Overall = half-up mean of five quality dims, Cost excluded.

- **Tool use: 82/100.** **τ‑Voice 74.5 %** is the standout — best-in-class customer-service task completion with tools; full-duplex tool-heavy support is its design target. High.
- **Reasoning: 78/100.** Big Bench Audio 90.1 % plus a GPT‑6 Astra reasoning backend (medium effort); strong, though the AA speech-reasoning row (not raw Astra text score) is what's measured for this exact ID.
- **Context window: 58/100.** 128K per Live session → 100K–200K band (50–64); 58.
- **Multimodal: 88/100.** Audio in + audio out (native duplex), tool/JSON surface — but **no image/video** (capped below the omni tier).
- **Coding: 20/100.** Spoken-support agent; no coding benchmark; minimal code surface. Provisional.
- **Cost efficiency: mid.** $0.05/min voice + backend billed separately; real cost is session-dependent. Excluded from Overall.
- **Overall Score: 65/100.** Mean of Tool 82, Reasoning 78, Context 58, Multimodal 88, Coding 20 = 326/5 = 65.2 → **65**. Best fit: **agentic spoken customer support / tool workflows** where resolving the task (not just sounding natural) is the goal — the τ‑Voice lead is the reason it tops the voice family.

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026‑11‑10
- Method: ≥3 qualifying acquisitions (**Artificial Analysis Speech-to-Speech leaderboard** exact-ID row, OpenAI voice-intelligence launch, curated meta). Scored on independent AA components (Index 83.2, reasoning 90.1 %, conv 94.9 %, τ‑Voice **74.5 %**, Arena 1027, task 87.4 %, TTFA 1.34 s). Flagged: τ‑Voice is a **1-trial** measurement for this model per AA note; reasoning is **delegated to Astra** (no standalone text-suite row for the voice layer); no image/video; backend billed separately.
- Revisit trigger: AA adds more trials / a fresh Index row for `gpt-live-1-astra`; or a backend-decoupled reasoning benchmark is published.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.
