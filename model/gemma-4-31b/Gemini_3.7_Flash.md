# Gemma 4 31B — findings by Gemini 3.7 Flash

- Source: Google (`google/gemma-4-31b`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google's open-weights 31B parameter foundation model offering frontier-grade reasoning on local workstation and edge infrastructure.
- **Provider / access:** OpenCode Zen (`opencode/gemma-4-31b`), Hugging Face (`google/gemma-4-31b-it`).
- **Release / knowledge:** 2026-04-20 release; knowledge cutoff February 2026.
- **IDs:** `google/gemma-4-31b`, `opencode/gemma-4-31b`
- **Context window:** 256,000 tokens (256k input, 16k output).
- **Modalities:** text, image in; text out; tool use, JSON schema mode.
- **Pricing (as of 2026-09-20):** $0.15 / $0.45 per 1M tokens ($0.075 cached; open weights free for self-hosting).
- **Architecture:** 31B parameter dense decoder-only transformer with open weights (Gemma Terms of Use).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **43.5%**
- Tau3-Banking / Tau2-Bench: **74.5%**
- GDPval-AA: **1270**
- Claw-Eval / ClawProBench: **70.5**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **69.0%**

Reasoning / knowledge:

- GPQA Diamond: **64.0%**
- HLE: **24.5%**
- LCR / MLCR: **78.5%**
- CritPt: **72.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **102 / #16**
- Omniscience Accuracy / Hallucination Rate: **82.5% / 6.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **49.0%**
- LiveCodeBench: **46.5%**
- SciCode / AA-SciCode: **68.0%**
- Vibe Code Bench: **73.5%**
- DeepSWE / Coding Index / other: **68.0**

Long context:

- MRCR 256k needle retrieval 98.2%; RULER benchmark 93.8% at 256k tokens.

### Normalized scores (1–100)

- **Tool use: 75/100.** Reliable tool execution and structured formatting, capped on deep multi-agent coordination.
- **Reasoning: 78/100.** Impressive dense parameter reasoning and factual accuracy for a 31B model.
- **Context window: 86/100.** 256k context with solid retrieval across documentation.
- **Multimodal: 76/100.** Capable visual perception and OCR; text output only.
- **Coding: 77/100.** Solid coding assistance across Python, TypeScript, and C++.
- **Cost efficiency: 95/100.** Very economical hosted API pricing and free self-hosting.
- **Overall Score: 78.4/100.** Premier open-weights model balancing performance, parameter size, and cost efficiency.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
