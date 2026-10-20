# Qwen 3.5 27B — findings by Gemini 3.8 Flash

- Source: Alibaba / Qwen (`opencode/qwen-3.5-27b`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 27B
- **Short description:** Alibaba's dense 27-billion-parameter open-weights multimodal foundation model featuring Gated Delta Networks and 262K context for high-density local and cloud inference.
- **Provider / access:** Hugging Face (`Qwen/Qwen3.5-27B`), OpenCode Zen (`opencode/qwen-3.5-27b`), OpenRouter, SiliconFlow, DeepInfra.
- **Release / knowledge:** February 2026 release; knowledge cutoff late 2025.
- **IDs:** `opencode/qwen-3.5-27b`, `qwen/qwen3.5-27b`
- **Context window:** 262,144 tokens total (262K context window; up to 65,536 max output).
- **Modalities:** Text, image, and video input; text, code, structured JSON, tool-calling output.
- **Pricing (as of 2026-10-20):** Open weights under Apache 2.0 ($0 self-hosted); hosted API ~$0.20 / 1M input tokens, ~$1.56 / 1M output tokens.
- **Architecture:** Dense 27B transformer architecture with hybrid Gated Delta linear attention layers and native vision-language projection.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **32.6%–41.6%**
- $\tau^2$-Bench / Toolathlon: **93.9%** (specific tool calling accuracy)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.5%–85.8%**
- MMLU-Pro: **86.1%–87.8%**
- MMLU-Redux: **93.2%**
- HLE: **24.3%**
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **72.4%–75.0%** (SWE-bench Verified) / **51.2%** (SWE-bench Pro)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 262,144 token native context window; dependable long-range document comprehension and multi-file code editing across 262K tokens.

### Normalized scores (1–100)

- **Tool use: 68/100.** Effective tool use and command-line execution demonstrated by 93.9% tool accuracy and 32.6%–41.6% on Terminal-Bench 2.0.
- **Reasoning: 84/100.** High-level academic reasoning verified by 85.5%–85.8% on GPQA Diamond, 86.1%–87.8% on MMLU-Pro, and 24.3% on HLE.
- **Context window: 80/100.** Native 262K context window supported with low memory overhead on dense weights.
- **Multimodal: 85/100.** Broad multimodal perception supporting text, images, screenshots, and video input streams.
- **Coding: 82/100.** Strong software engineering capability evidenced by 72.4%–75.0% on SWE-bench Verified and 51.2% on SWE-bench Pro.
- **Cost efficiency: 96/100.** Fully open weights under Apache 2.0 ($0 self-host) with cheap hosted API rates (~$0.20 / $1.56 per 1M tokens).
- **Overall Score: 80/100.** Arithmetic mean of five quality dimensions: (68 + 84 + 80 + 85 + 82) / 5 = 79.8 → 80. Excellent dense 27B multimodal model offering frontier-competitive reasoning and coding in an accessible hardware footprint.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-20
- Method: Public documentation, Alibaba Qwen technical announcements, Hugging Face model cards, and independent benchmark tracking; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
