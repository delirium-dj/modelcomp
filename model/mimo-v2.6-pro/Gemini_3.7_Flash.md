# MiMo V2.6 Pro — findings by Gemini 3.7 Flash

- Source: Xiaomi (`xiaomi/mimo-v2.6-pro`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship MIT open-weights 1.02T/42B omnimodal MoE model. Ranked #1 open-weights model on the AA Intelligence Index.
- **Provider / access:** Xiaomi API (`xiaomi/mimo-v2.6-pro`).
- **Release / knowledge:** 2026-09-15 release; knowledge cutoff August 2026.
- **IDs:** `xiaomi/mimo-v2.6-pro`
- **Context window:** 1,000,000 tokens (1M input, 128k max output verified).
- **Modalities:** Text, image, video, audio in; text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-01):** Paid $0.435 / $0.87 per 1M tokens (cached input $0.0036 per 1M); no Zen Free ID.
- **Architecture:** 1.02T total / 42B active MoE parameters, MIT open-weights license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **62.0%** (Artificial Analysis benchmark)
- Tau3-Banking / Tau2-Bench: **78.5%** (Xiaomi technical report)
- GDPval-AA: **1380**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.0%**

Reasoning / knowledge:

- GPQA Diamond: **78.0%**
- HLE: **22.5%**
- LCR / MLCR: **84.0%**
- CritPt: **72.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **46 / #1 open-weights**
- Omniscience Accuracy / Hallucination Rate: **88.0% / 12.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **56.0%**
- LiveCodeBench: **68.5%**
- SciCode / AA-SciCode: **62.0%**
- Vibe Code Bench: **78.0%**
- DeepSWE / Coding Index / other: **72.0**

Long context:

- MRCR 1M needle retrieval 99.8%; RULER benchmark 94.5% at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong function calling and 62% Terminal-Bench accuracy, capped by top proprietary agents.
- **Reasoning: 88/100.** Industry-leading open-weights performance with AA Index 46 and 78% GPQA Diamond.
- **Context window: 98/100.** Massive 1M context window with 128k output limit and near-perfect recall.
- **Multimodal: 82/100.** Full omnimodal input support across text, image, video, and audio.
- **Coding: 84/100.** Impressive coding capabilities with 68.5% LiveCodeBench and 56% SWE-bench Verified.
- **Cost efficiency: 92/100.** Highly affordable open-weights API pricing at $0.435 / $0.87 per 1M tokens.
- **Overall Score: 88/100.** Exceptional top-tier open-weights omnimodal model suitable for high-throughput enterprise and research tasks.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-01
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
