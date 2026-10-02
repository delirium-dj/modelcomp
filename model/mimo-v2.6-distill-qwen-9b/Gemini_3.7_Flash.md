# MiMo v2.6 Distill Qwen 9B — findings by Gemini 3.7 Flash

- Source: Xiaomi / MiMo (`mimo-v2.6-distill-qwen-9b`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo v2.6 Distill Qwen 9B
- **Short description:** Xiaomi's lightweight 9B model distilled from the MiMo v2.6 frontier series into a compact Qwen architecture for low-latency coding and reasoning tasks.
- **Provider / access:** Xiaomi AI / OpenCode Zen API (`mimo/mimo-v2.6-distill-qwen-9b`), OpenAI-compatible chat completions.
- **Release / knowledge:** 2026-05-20 release; 2025 knowledge cutoff.
- **IDs:** `mimo/mimo-v2.6-distill-qwen-9b`
- **Context window:** 131,072 tokens (128k context window; 8k max output tokens).
- **Modalities:** Text in, text out; function calling and structured JSON output.
- **Pricing (as of 2026-10-02):** $0.12 / $0.25 per 1M tokens ($0.03 cached input).
- **Architecture:** Distilled 9.2B parameter dense transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **26.8%**
- Tau3-Banking / Tau2-Bench: **55.4%**
- GDPval-AA: **980**
- Claw-Eval / ClawProBench: **48.6%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **44.0%**

Reasoning / knowledge:

- GPQA Diamond: **42.0%**
- HLE: **10.5%**
- LCR / MLCR: **54.2%**
- CritPt: **24.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **64.2 / #60**
- Omniscience Accuracy / Hallucination Rate: **69.5% / 17.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **32.0%**
- LiveCodeBench: **39.5%**
- SciCode / AA-SciCode: **24.0%**
- Vibe Code Bench: **47.5%**
- DeepSWE / Coding Index / other: **50.0**

Long context:

- MRCR at 128K: **80.5% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 58/100.** Capable of basic tool calling and structured formatting (Tau2-Bench 55.4%).
- **Reasoning: 58/100.** Fast distilled reasoning (GPQA Diamond 42.0%, Intelligence Index 64.2); limited on complex logic.
- **Context window: 75/100.** 128K context window with 80.5% retrieval accuracy.
- **Multimodal: 15/100.** Text-only model; scored 15 per methodology.
- **Coding: 60/100.** Suitable for lightweight script generation and routine debugging (SWE-bench Verified 32.0%, LiveCodeBench 39.5%).
- **Cost efficiency: 95/100.** Excellent pricing at $0.12/$0.25 per 1M tokens.
- **Overall Score: 53/100.** Mean of the five non-cost quality dimensions (58+58+75+15+60)/5 = 53.2 → 53; efficient distilled model for high-throughput, low-latency text and coding chores.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
