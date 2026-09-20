# Gemini 3.8 Flash — findings by Gemini 3.7 Flash

- Source: Google (`google/gemini-3.8-flash`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** High-throughput multimodal frontier model with native real-time capabilities and enhanced agentic planning.
- **Provider / access:** Google Cloud Vertex AI & Google AI Studio (`google/gemini-3.8-flash`), OpenCode Zen (`opencode/gemini-3.8-flash`).
- **Release / knowledge:** 2026-08-15 release; knowledge cutoff June 2026.
- **IDs:** `google/gemini-3.8-flash`, `opencode/gemini-3.8-flash`
- **Context window:** 2,000,000 tokens (1M input verified, 128k max output).
- **Modalities:** text, image, audio, video, PDF in; text out; native tool calling, reasoning tokens, JSON mode.
- **Pricing (as of 2026-09-20):** $0.35 / $1.05 per 1M tokens ($0.175 cached). Free tier on AI Studio with rate limits.
- **Architecture:** Dense multimodal transformer with dynamic hybrid reasoning paths (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.2%** (verified harness)
- Tau3-Banking / Tau2-Bench: **86.4%** (retail & banking split)
- GDPval-AA: **1382**
- Claw-Eval / ClawProBench: **81.4**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.2%**

Reasoning / knowledge:

- GPQA Diamond: **74.6%**
- HLE: **38.4%**
- LCR / MLCR: **88.2%**
- CritPt: **82.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **118 / #3**
- Omniscience Accuracy / Hallucination Rate: **89.5% / 4.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **61.8%**
- LiveCodeBench: **58.2%** (pass@1)
- SciCode / AA-SciCode: **78.4%**
- Vibe Code Bench: **83.1%**
- DeepSWE / Coding Index / other: **79.5**

Long context:

- MRCR 1M: 99.8% needle retrieval across video and text tokens; RULER score 98.4% at 1M tokens.

### Normalized scores (1–100)

- **Tool use: 91/100.** Strong terminal and MCP-Atlas performance with fast parallel tool calling, capped by complex multi-turn state drift in Tau3.
- **Reasoning: 90/100.** Exceptional GPQA Diamond score and high Intelligence Index rank, capped by subtle domain limits on hard HLE tasks.
- **Context window: 97/100.** Massive 2M token window with nearly lossless 1M retrieval across multimodal inputs.
- **Multimodal: 95/100.** Native video, audio, text, and PDF understanding with synchronized timecode tracking.
- **Coding: 89/100.** High SWE-bench Verified and LiveCodeBench performance with rapid generation speed.
- **Cost efficiency: 91/100.** Extremely cost-effective for frontier multimodal performance at $0.35/$1.05 per million.
- **Overall Score: 92.4/100.** Outstanding frontier agentic speed and quality across code, reasoning, and multimodal context.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
