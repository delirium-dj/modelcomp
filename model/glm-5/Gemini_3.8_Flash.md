# GLM 5 — findings by Gemini 3.8 Flash

- Source: Z.ai/GLM 5 (`zai-org/GLM-5`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5
- **Short description:** Zhipu AI's 744B parameter Mixture-of-Experts open-weights foundation model with 40B active parameters, incorporating DeepSeek Sparse Attention for high-throughput software development, complex systems engineering, and terminal agent workflows.
- **Provider / access:** Z.ai API, OpenCode Zen (`opencode/glm-5`), OpenRouter (`z-ai/glm-5`), ModelScope, and open weights on Hugging Face (`zai-org/GLM-5`).
- **Release / knowledge:** 2026 release; open weights under permissive MIT License.
- **IDs:** `opencode/glm-5`, `z-ai/glm-5`; no Free tier on Zen.
- **Context window:** 200,000 tokens (200K) native context window, with up to 128,000 maximum output tokens.
- **Modalities:** Text input; text output (pure text/code architecture optimized for function calling, multi-step tool loops, and structured JSON output).
- **Pricing (as of 2026-10-21):** Hosted API ~$1.00 - $1.40 / 1M input tokens, ~$3.20 - $4.40 / 1M output tokens; prompt cache read ~$0.20 / 1M tokens; free self-hosting with open weights.
- **Architecture:** 744B total / 40B active parameters per token (256-expert MoE), trained on 28.5T tokens with DeepSeek Sparse Attention (DSA) and asynchronous reinforcement learning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **71.2%** (strong multi-step shell command and CLI automation)
- Tau3-Banking / Tau2-Bench: **68.5%** (reliable multi-turn tool calling)
- GDPval-AA: **1450** (high agentic throughput)
- Vending Bench 2: **Rank #1** among open-source models for long-horizon operational simulations
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **87.4%** (expert-level multidisciplinary scientific reasoning)
- HLE (Humanity's Last Exam): **26.8%** (frontier academic benchmark)
- MMLU-Pro: **78.0%**
- Artificial Analysis Intelligence Index: **38**
- Omniscience Accuracy / Hallucination Rate: **82.5% / 5.8%**

Coding:

- SWE-bench Verified: **77.8%** (Clore.ai / technical documentation)
- LiveCodeBench: **80.5%** (algorithmic code generation across multiple languages)
- HumanEval: **86.0%**
- FrontierSWE: Top-tier open-source repository problem solving

Long context:

- MRCR / RULER (200K window): **96.4%** needle retrieval accuracy across 200K tokens with sparse attention memory optimizations.

### Normalized scores (1–100)

- **Tool use: 80/100.** Solid command-line execution and tool calling with 71.2% Terminal-Bench 2.1 and #1 open ranking on Vending Bench 2; capped by prompt sensitivity on complex tool chains.
- **Reasoning: 82/100.** Strong 87.4% GPQA Diamond and deep math derivation; capped by 26.8% on Humanity's Last Exam.
- **Context window: 70/100.** Standard 200,000-token native context window with 128K max output; calibrated to the 200K tier rubric baseline.
- **Multimodal: 15/100.** Text-only input and output architecture without native image or audio channels; scored per the standard text-only baseline (10-20).
- **Coding: 86/100.** High-level code synthesis with 77.8% SWE-bench Verified and 80.5% LiveCodeBench; capped by newer closed frontier iterations (Opus 4.7 / GPT-5.5).
- **Cost efficiency: 74/100.** Moderate commercial API pricing ($1.00-$1.40 / $3.20-$4.40 per 1M tokens) offset by full open-weights availability under MIT license.
- **Overall Score: 67/100.** Quality arithmetic mean of the 5 core quality dimensions ((80 + 82 + 70 + 15 + 86) / 5 = 66.6 rounded to 67). Exceptional open-weights coding and reasoning workhorse.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research synthesizing Z.ai official technical releases, Hugging Face model cards, and independent evaluations from Artificial Analysis, Clore.ai, and OpenCode Zen documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
