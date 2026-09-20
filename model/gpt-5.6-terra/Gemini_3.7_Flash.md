# GPT-5.6 Terra — findings by Gemini 3.7 Flash

- Source: OpenAI (`openai/gpt-5.6-terra`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's balanced frontier workhorse model optimized for low-latency coding, system operations, and agentic workflows.
- **Provider / access:** OpenAI API (`openai/gpt-5.6-terra`), OpenCode Zen (`opencode/gpt-5.6-terra`).
- **Release / knowledge:** 2026-04-12 release; knowledge cutoff February 2026.
- **IDs:** `openai/gpt-5.6-terra`, `opencode/gpt-5.6-terra`
- **Context window:** 256,000 tokens (256k input, 32k max output).
- **Modalities:** text, image in; text out; native tool calling, structured JSON output.
- **Pricing (as of 2026-09-20):** $1.50 / $6.00 per 1M tokens ($0.75 cached).
- **Architecture:** Mixture-of-Experts transformer with specialized code and agent distillation (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **53.8%**
- Tau3-Banking / Tau2-Bench: **85.6%**
- GDPval-AA: **1375**
- Claw-Eval / ClawProBench: **81.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.5%**

Reasoning / knowledge:

- GPQA Diamond: **73.9%**
- HLE: **35.7%**
- LCR / MLCR: **88.9%**
- CritPt: **82.1%**
- Artificial Analysis Intelligence Index / BenchLM overall: **116 / #5**
- Omniscience Accuracy / Hallucination Rate: **89.2% / 3.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **60.5%**
- LiveCodeBench: **58.9%**
- SciCode / AA-SciCode: **78.9%**
- Vibe Code Bench: **84.3%**
- DeepSWE / Coding Index / other: **80.1**

Long context:

- MRCR 256k needle retrieval 99.4%; RULER benchmark 96.2% at 256k tokens.

### Normalized scores (1–100)

- **Tool use: 90/100.** Crisp function call syntax adherence and consistent multi-turn tool chaining.
- **Reasoning: 90/100.** Strong mathematical problem decomposition and robust logic paths.
- **Context window: 88/100.** 256k token window with solid retrieval across complex codebases.
- **Multimodal: 85/100.** Excellent visual perception and technical diagram extraction; no native audio/video.
- **Coding: 91/100.** Top-tier coding benchmark performance and reliable patch authoring.
- **Cost efficiency: 74/100.** Solid value for frontier-grade agentic capabilities.
- **Overall Score: 88.8/100.** Highly reliable, well-rounded coding and agentic foundation model.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
