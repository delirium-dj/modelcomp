# Gemini 3.5 Flash — findings by Step 5 Preview

- Source: Google (DeepMind) `gemini-3.5-flash`
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash (`gemini-3.5-flash`; speed/cost-optimized tier of the Gemini 3.5 family)
- **Short description:** Google DeepMind's Flash-tier multimodal model for agentic coding and high-volume multimodal workloads — the highest MCP Atlas tool-orchestration score recorded as of June 2026, outputting ~4× faster than GPT-5.5. Trades some abstract-reasoning strength (vs Gemini 3.1 Pro) for speed.
- **Provider / access:** Gemini API, Google AI Studio (free tier with rate limits), Vertex AI. Function calling + structured output + combined tool use (Google Search grounding + code execution + custom schemas in one request). Free AI Studio tier available.
- **Release / knowledge:** Released 2026-05-19 (GA, Google I/O). Succeeds Gemini 3 Flash (2025-12-17). Knowledge cutoff not explicitly disclosed.
- **IDs:** `gemini-3.5-flash` (+ `-minimal/-medium/-high`; default thinking_level medium). Free AI Studio tier available.
- **Context window:** 1,048,576 (1M) input; 65,536 (64K) max output.
- **Modalities:** Text, image, audio, video, PDF in; text + tool-calls out. No image/audio/video output. Reasoning yes (configurable thinking levels); tool calls yes; JSON yes.
- **Pricing (as of 2026-10-08):** $1.50/M in · $9.00/M out · $0.15/M cached in (90% off) — ~3× Gemini 3 Flash's prior rate, still under Claude Opus 4.7. Free AI Studio tier $0.
- **Architecture:** Natively multimodal Transformer; built on Gemini 3 Flash's reasoning foundation with configurable thinking levels. Parameter count undisclosed (proprietary).

### Raw benchmarks found

> Cross-referenced hokai.io (Google + Artificial Analysis) and vectorwire.ai (132 results/75 benchmarks, 29 independent, capability profile). Independent runs noted where available.

Agent / tool use:

- MCP Atlas (multi-step MCP workflows): **83.6%** (Google; the highest recorded as of June 2026 — leads tool orchestration)
- τ²-Bench Telecom: **95.32%** (high) / **95.61%** (medium) (Artificial Analysis)
- Output speed: **289 tok/s** (rank #7/49; ~4× faster than GPT-5.5 and Claude Opus 4.7)
- Terminal-Bench 2.1: not surfaced live for 3.5 Flash — treated as provisional
- Vector Wire capability: **Agentic "Capable"** (−18.5% vs leader, 6/7)

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (rank #18/50)
- Artificial Analysis Intelligence Index: **55** (trails GPT-5.5's 60)
- ARC-AGI-2: **72.1%** (behind Gemini 3.1 Pro's 77.1% — the hardest abstract reasoning still favors the Pro tier)
- Vector Wire capability: **Reasoning "Capable"** (−13.6% vs leader, 6/6); **Factuality "Strong"** (−7.8%); **Math "Limited"** (−46.0%)
- HLE / AIME exact rows: not surfaced live for 3.5 Flash — treated as provisional

Coding:

- SWE-bench Verified: **78%** (rank #16/32 — mid-pack)
- SWE-bench Pro: behind Claude Opus 4.7's 64.3% lead (3.5 Flash's exact value not surfaced live)
- Vector Wire capability: **Coding "Limited"** (−25.1% vs leader, 7/10) — a clear weakness despite the headline SWE-bench Verified
- LiveCodeBench / DeepSWE exact rows: not surfaced live for 3.5 Flash — treated as provisional

Multimodal:

- Text + image + audio + video + PDF in; text out.
- MMMU-Pro: **84.2%** (the highest multimodal reasoning result Artificial Analysis had recorded at launch)
- Vector Wire: **Multimodal "Capable"** (−15.3% vs leader, 3/6)

Long context:

- **Tool use: 84/100.** MCP Atlas 83.6% (the highest recorded as of June 2026 — leads tool orchestration) and τ²-Bench Telecom 95.3% are strong, with combined built-in + custom tool use and 289 tok/s output. Capped by Vector Wire's Agentic "Capable" (−18.5%) and no live Terminal-Bench/OSWorld row — tool orchestration leads but long-horizon agentic breadth lags.
- **Reasoning: 84/100.** GPQA Diamond 90.4% and AA Intelligence Index 55 with Factuality "Strong" (−7.8%). Capped by ARC-AGI-2 72.1% (behind Gemini 3.1 Pro), Reasoning "Capable" (−13.6%), and Math "Limited" (−46.0%) — a fast Flash-tier reasoner, not a frontier one.
- **Context window: 78/100.** 1M input / 64K output, but long-context recall above 100K has NOT been independently published for the 3.5 generation and Vector Wire rates Long Context "Limited" (−25.7%, 2/3). A nominal 1M window with unverified top-end recall plus a 64K output cap.
- **Multimodal: 90/100.** Full input coverage (text/image/audio/video/PDF) with MMMU-Pro 84.2% (the highest recorded at launch) — hits the 90–100 input band; held to 90 by text-only output and Multimodal "Capable" (−15.3%, not "Strong"/"Frontier").
- **Coding: 76/100.** SWE-bench Verified 78% (rank #16/32) is mid-pack, SWE-bench Pro trails Claude Opus 4.7's lead, and Vector Wire rates Coding "Limited" (−25.1%, 7/10) — coding is a clear weakness despite the headline SWE-bench Verified score. Strong at MCP tool orchestration, weaker at deep agentic coding.
- **Cost efficiency: 82/100.** $1.50/$9 paid (rubric ~$1.25/$4.25=88, nudged down for the higher output rate) plus a free Google AI Studio tier (rate-limited, training-data caveat); cached input $0.15/M (90% off). ~3× Gemini 3 Flash's prior rate.
- **Overall Score: 82/100.** Mean of the five non-cost dims (84+84+78+90+76)/5 = 82.4. Best fit for MCP-based coding agents, tool-orchestration pipelines, and high-volume multimodal ingestion at ~4× the output speed and a lower per-token cost; pick GPT-5.5/Gemini 3.1 Pro for pure reasoning and Claude Opus 4.7 for the hardest SWE-bench Pro coding.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-08
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Cross-referenced Google + Artificial Analysis (via hokai.io) and vectorwire.ai (132 results, 29 independently verified, capability profile).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

- 1M input / 64K output. Long-context recall above 100K has NOT yet been independently published for the 3.5 generation (Gemini 3.1 Pro is the lineage reference point).
- Vector Wire: Long Context **"Limited"** (−25.7% vs leader, 2/3)

### Normalized scores (1–100)
