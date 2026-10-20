# Qwen 3.5 122B-A10B — findings by Gemini 3.8 Flash

- Source: Alibaba / Qwen (`opencode/qwen-3.5-122b-a10b`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 122B
- **Short description:** Alibaba's open-weight hybrid Mixture-of-Experts foundation model (122B total, 10B active parameters) combining linear Gated Delta Networks with sparse attention for multimodal agent workflows.
- **Provider / access:** Hugging Face (`Qwen/Qwen3.5-122B-A10B`), OpenCode Zen (`opencode/qwen-3.5-122b-a10b`), OpenRouter, SiliconFlow, DeepInfra.
- **Release / knowledge:** February 2026 release; knowledge cutoff late 2025.
- **IDs:** `opencode/qwen-3.5-122b-a10b`, `qwen/qwen3.5-122b-a10b`
- **Context window:** 262,144 tokens native (262K context window; up to 65,536 max output; extensible to 1M via YaRN).
- **Modalities:** Text, image, and video input; text, code, structured JSON, tool-calling output.
- **Pricing (as of 2026-10-20):** Open weights under Apache 2.0 ($0 self-hosted); hosted API ~$0.26 / 1M input tokens, ~$2.08 / 1M output tokens.
- **Architecture:** 122B total / 10B active parameters, hybrid linear attention (Gated Delta Networks) + sparse MoE with native vision-language projection.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **49.4%–52.5%**
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84.8%–85.5%**
- MMLU-Pro: **86.1%–86.7%**
- HLE: no verified standalone public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **72.0%–72.4%** (SWE-bench Verified)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 262,144 token native context window extensible to 1M via YaRN; stable multi-needle retrieval and long-horizon document understanding across 262K sequence lengths.

### Normalized scores (1–100)

- **Tool use: 70/100.** Capable autonomous tool use and terminal navigation evidenced by 49.4%–52.5% on Terminal-Bench 2.0.
- **Reasoning: 84/100.** Strong graduate-level scientific and academic reasoning verified by 84.8%–85.5% on GPQA Diamond and 86.1%–86.7% on MMLU-Pro.
- **Context window: 80/100.** 262K native context window with 65K max output buffer provides extensive reasoning and code context headroom.
- **Multimodal: 85/100.** Native vision and video understanding for diagrams, user interfaces, and multi-frame video inputs; text + image/video in, text out.
- **Coding: 82/100.** Robust software engineering and repository issue resolution demonstrated by 72.0%–72.4% on SWE-bench Verified.
- **Cost efficiency: 95/100.** Free open weights under Apache 2.0 license and very low hosted API costs (~$0.26 / $2.08 per 1M tokens) with 10B active parameter compute efficiency.
- **Overall Score: 80/100.** Arithmetic mean of five quality dimensions: (70 + 84 + 80 + 85 + 82) / 5 = 80.2 → 80. Outstanding multimodal open-weight MoE foundation model balancing broad perceptual understanding with efficient 10B active parameter inference.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-20
- Method: Public documentation, Alibaba Qwen technical releases, Hugging Face model cards, and independent benchmark tracking; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
