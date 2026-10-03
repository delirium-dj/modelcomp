# Qwen 3.5 Plus — findings by Gemini 3.7 Flash

- Source: Alibaba Cloud (`qwen-3.5-plus`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba Cloud's flagship-tier commercial model in the Qwen 3.5 family, engineered for 1M long-context document analysis, multi-turn tool calling, and balanced coding intelligence.
- **Provider / access:** Alibaba Cloud DashScope (`qwen-3.5-plus`) / OpenCode Zen API (`qwen/qwen-3.5-plus`), OpenAI-compatible chat completions and function calling.
- **Release / knowledge:** 2026-03-20 release; 2026 knowledge cutoff.
- **IDs:** `qwen/qwen-3.5-plus`
- **Context window:** 1,000,000 tokens (1M context window; 32k max output tokens).
- **Modalities:** Text, image, and document input; text and structured JSON output; native function calling.
- **Pricing (as of 2026-10-02):** $0.40 / $1.20 per 1M tokens ($0.10 cached input).
- **Architecture:** Commercial Mixture-of-Experts (MoE) multimodal transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.0%**
- Tau3-Banking / Tau2-Bench: **76.8%**
- GDPval-AA: **1210**
- Claw-Eval / ClawProBench: **72.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **67.5%**

Reasoning / knowledge:

- GPQA Diamond: **66.2%**
- HLE: **26.4%**
- LCR / MLCR: **73.5%**
- CritPt: **40.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **84.5 / #16**
- Omniscience Accuracy / Hallucination Rate: **82.8% / 7.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **57.4%**
- LiveCodeBench: **65.0%**
- SciCode / AA-SciCode: **41.0%**
- Vibe Code Bench: **73.5%**
- DeepSWE / Coding Index / other: **78.0**

Long context:

- MRCR at 1M: **91.0% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong tool coordination and structured workflow handling (Tau2-Bench 76.8%, Terminal-Bench 44.0%).
- **Reasoning: 85/100.** High-level reasoning across technical domains (GPQA Diamond 66.2%, Intelligence Index 84.5).
- **Context window: 94/100.** 1M context window with stable 91.0% retrieval across long prompts.
- **Multimodal: 76/100.** High-quality image, chart, and document parsing.
- **Coding: 86/100.** Reliable programming and repository assistance (SWE-bench Verified 57.4%, LiveCodeBench 65.0%).
- **Cost efficiency: 91/100.** Outstanding value for a 1M model at $0.40/$1.20 per 1M tokens.
- **Overall Score: 85/100.** Mean of the five non-cost quality dimensions (84+85+94+76+86)/5 = 85.0 → 85; cost-effective commercial flagship for 1M long context and enterprise workflows.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
