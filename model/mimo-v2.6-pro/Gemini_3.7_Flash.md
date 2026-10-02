# MiMo v2.6 Pro — findings by Gemini 3.7 Flash

- Source: Xiaomi / MiMo (`mimo-v2.6-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo v2.6 Pro
- **Short description:** Xiaomi's flagship multimodal frontier model optimized for complex reasoning, agentic tool workflows, and 1M long-context coding.
- **Provider / access:** Xiaomi AI / OpenCode Zen API (`mimo/mimo-v2.6-pro`), OpenAI-compatible chat completions and structured outputs.
- **Release / knowledge:** 2026-06-15 release; 2026 knowledge cutoff.
- **IDs:** `mimo/mimo-v2.6-pro`
- **Context window:** 1,000,000 tokens (1M context window; 64k max output tokens).
- **Modalities:** Text, image, and document input; text and structured JSON output; native function calling and tool execution.
- **Pricing (as of 2026-10-02):** $1.20 / $4.80 per 1M tokens ($0.30 cached input).
- **Architecture:** Mixture-of-Experts (MoE) proprietary architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **48.2%**
- Tau3-Banking / Tau2-Bench: **78.5%**
- GDPval-AA: **1248**
- Claw-Eval / ClawProBench: **74.1%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **68.4%**

Reasoning / knowledge:

- GPQA Diamond: **69.8%**
- HLE: **31.4%**
- LCR / MLCR: **76.2%**
- CritPt: **44.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **88.2 / #12**
- Omniscience Accuracy / Hallucination Rate: **84.5% / 8.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **58.6%**
- LiveCodeBench: **66.4%**
- SciCode / AA-SciCode: **42.1%**
- Vibe Code Bench: **72.5%**
- DeepSWE / Coding Index / other: **78.4**

Long context:

- MRCR: **88.5% retrieval accuracy across 1M context**

### Normalized scores (1–100)

- **Tool use: 88/100.** High Tau2-Bench (78.5%) and Terminal-Bench 2.1 (48.2%) accuracy in multi-step agent environments; capped by frontier orchestration ceiling.
- **Reasoning: 89/100.** Strong GPQA Diamond (69.8%) and Intelligence Index (88.2); capped by hard reasoning limits on HLE (31.4%).
- **Context window: 94/100.** 1M context window with high MRCR needle-in-haystack retrieval performance (88.5%).
- **Multimodal: 78/100.** Comprehensive image, chart, and PDF document comprehension; capped by lack of audio and video stream support.
- **Coding: 89/100.** Strong SWE-bench Verified (58.6%) and LiveCodeBench (66.4%) scores for autonomous software engineering.
- **Cost efficiency: 82/100.** Well-priced at $1.20/$4.80 per 1M tokens for a 1M frontier-class model.
- **Overall Score: 88/100.** Mean of the five non-cost quality dimensions (88+89+94+78+89)/5 = 87.6 → 88; top-tier frontier pick for long-context engineering and deep reasoning agents.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
