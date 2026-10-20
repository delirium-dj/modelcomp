# Qwen 3.5 35B-A3B — findings by Gemini 3.8 Flash

- Source: Alibaba / Qwen (`opencode/qwen-3.5-35b-a3b`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 35B
- **Short description:** Alibaba's ultra-efficient sparse Mixture-of-Experts foundation model (35B total, 3B active parameters) combining linear attention with native vision-language processing for always-on local and cloud agent loops.
- **Provider / access:** Hugging Face (`Qwen/Qwen3.5-35B-A3B`), OpenCode Zen (`opencode/qwen-3.5-35b-a3b`), OpenRouter, SiliconFlow.
- **Release / knowledge:** February 2026 release; knowledge cutoff late 2025.
- **IDs:** `opencode/qwen-3.5-35b-a3b`, `qwen/qwen3.5-35b-a3b`
- **Context window:** 262,144 tokens native (262K context window; extensible to ~1,010,000 via YaRN; up to 65,536 max output).
- **Modalities:** Text, image, and video input; text, code, structured JSON, tool-calling output.
- **Pricing (as of 2026-10-20):** Open weights under Apache 2.0 ($0 self-hosted); hosted API ~$0.08 / 1M input tokens, ~$0.75 / 1M output tokens.
- **Architecture:** 35B total / 3B active parameters, sparse MoE with Gated Delta linear attention and native multimodal vision layers.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **52.5%**
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **81.4%**
- MMLU-Pro: **82.2%**
- HLE: no verified standalone public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **70.5%** (SWE-bench Verified)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 262,144 token native context window extensible up to 1M tokens; high throughput long-document retrieval and multi-file code editing.

### Normalized scores (1–100)

- **Tool use: 72/100.** Fast and capable tool navigation and terminal execution demonstrated by 52.5% on Terminal-Bench 2.0.
- **Reasoning: 80/100.** Excellent reasoning density for a 3B-active parameter footprint evidenced by 81.4% on GPQA Diamond and 82.2% on MMLU-Pro.
- **Context window: 80/100.** 262K native context window with 1M YaRN extension supports long-horizon multi-document workflows.
- **Multimodal: 85/100.** Native multimodal perception across text, images, and video feeds; text + image/video in, text out.
- **Coding: 80/100.** Strong software engineering performance verified by 70.5% on SWE-bench Verified.
- **Cost efficiency: 98/100.** Exceptional value with Apache 2.0 open weights and hosted API pricing at ~$0.08 / $0.75 per 1M tokens.
- **Overall Score: 79/100.** Arithmetic mean of five quality dimensions: (72 + 80 + 80 + 85 + 80) / 5 = 79.4 → 79. Standout 3B-active parameter MoE sweet spot delivering full multimodal reasoning, coding, and tool calling at near-zero operating expense.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-20
- Method: Public documentation, Alibaba Qwen technical releases, Hugging Face model cards, and independent benchmark tracking; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
