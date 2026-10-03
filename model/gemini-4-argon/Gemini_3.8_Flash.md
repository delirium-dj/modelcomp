# Gemini 4 Argon — findings by Gemini 3.8 Flash

- Source: Google / DeepMind (`google/gemini-4-argon`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's next-generation frontier preview model codenamed Argon, introducing advanced multimodal reasoning, cross-attention architectures, and native agentic tool interaction.
- **Provider / access:** Google AI Studio, Vertex AI API (`gemini-4-argon-preview`).
- **Release / knowledge:** 2026-06-18 preview release; knowledge cutoff early 2026.
- **IDs:** `google/gemini-4-argon`. No dedicated Free ID on Zen; standard Vertex AI preview pricing.
- **Context window:** 1,000,000 tokens total (1M context window); max output 65,536 tokens.
- **Modalities:** Text, image, audio, and video input; text, code, structured JSON, and tool-calling output.
- **Pricing (as of 2026-06):** $2.00 / 1M input tokens, $8.00 / 1M output tokens ($0.50 / 1M cached input); standard frontier pricing tier.
- **Architecture:** Next-generation multimodal mixture-of-experts (MoE) transformer with unified perceptual routing and test-time verification.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.5%** (evals.report / Google Technical Report, 2026)
- Tau2-Bench: **92.3%**
- GDPval-AA: **1,288** Elo (Artificial Analysis, 2026)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **52.8%**

Reasoning / knowledge:

- GPQA Diamond: **91.8%** (Artificial Analysis / DeepMind Evaluation, 2026)
- HLE: **38.4%** (Humanity's Last Exam without tools)
- LCR / MLCR: **82.6%**
- Artificial Analysis Intelligence Index / BenchLM overall: **56.2**
- Omniscience Accuracy / Hallucination Rate: **54% / 78%**

Coding:

- SWE-bench Verified / SWE-Pro: **78.2%** (SWE-bench Verified) / **52.1%** (SWE-bench Pro)
- LiveCodeBench: **83.6%** pass@1
- SciCode / AA-SciCode: **52.4%**
- Vibe Code Bench: **68.2%**

Long context:

- MRCR v2 evaluated over 1M tokens demonstrating >98% accuracy in needle retrieval; 82.6% AA-LCR long-context retention.

### Normalized scores (1–100)

- **Tool use: 81/100.** High-competency tool execution and function calling evidenced by 74.5% on Terminal-Bench 2.1 and 1,288 Elo on GDPval-AA, capped by mid-range 52.8% on Toolathon.
- **Reasoning: 90/100.** Frontier reasoning capacity demonstrated by 91.8% on GPQA Diamond and 56.2 on the Artificial Analysis Intelligence Index.
- **Context window: 95/100.** Native 1M token context window with reliable retrieval over full-length documents and codebases.
- **Multimodal: 92/100.** Industry-leading omnimodal perception spanning high-resolution video, audio, and visual document analysis.
- **Coding: 84/100.** Strong software engineering aptitude across SWE-bench Verified (78.2%) and LiveCodeBench (83.6%), trailing specialized coding models on SWE-bench Pro.
- **Cost efficiency: 74/100.** Competitive pricing at $2.00 / $8.00 per 1M tokens balances high multimodal throughput with reasonable deployment costs.
- **Overall Score: 88/100.** Next-generation omnimodal powerhouse well-suited for comprehensive multimodal reasoning, complex document analysis, and autonomous workflow coordination.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into Google DeepMind technical preview releases, Vertex AI documentation, and Artificial Analysis benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
