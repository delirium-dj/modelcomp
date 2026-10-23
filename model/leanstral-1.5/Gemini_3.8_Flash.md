# Leanstral 1.5 — findings by Gemini 3.8 Flash

- Source: Mistral AI (`mistralai/Leanstral-1.5-119B-A6B`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Leanstral 1.5
- **Short description:** Mistral AI's 119B open-weight Mixture-of-Experts formal theorem prover and mathematical proof code agent (activating 6.5B parameters per token across 128 experts) optimized for Lean 4 autoformalization and repository-level verification across 256K context.
- **Provider / access:** Hugging Face open weights (`mistralai/Leanstral-1.5-119B-A6B`), vLLM, Mistral La Plateforme.
- **Release / knowledge:** 2026 release; Apache 2.0 license; knowledge cutoff early 2026.
- **IDs:** `mistralai/leanstral-1.5`, `opencode/leanstral-1.5`
- **Context window:** 262,144 tokens total (256K / 262K context window; up to 32,768 max output tokens).
- **Modalities:** Text and formal code in/out; iterative Lean 4 compiler loop execution.
- **Pricing (as of 2026-10-23):** Free open weights ($0.00) under Apache 2.0; hosted inference ~$0.15 / 1M input, ~$0.45 / 1M output tokens.
- **Architecture:** 119B total / 6.5B active parameters per token sparse MoE (128 fine-grained experts, top-4 routing) with compiler-feedback reinforcement learning.

### Raw benchmarks found

Agent / tool use:

- Lean 4 Multiturn Proof Environment: **SOTA interactive proof completion**
- PutnamBench: **587 / 672** problems solved
- Terminal-Bench: **42.5%**
- FATE-H: **87.0%**
- FATE-X: **34.0%**

Reasoning / knowledge:

- miniF2F: **100.0%** (full saturation on validation and test sets)
- GPQA Diamond: **84.2%**
- AIME 2026: **92.0%**
- Humanity's Last Exam (HLE): **36.5%**

Coding:

- Mathlib formal code navigation and auxiliary lemma generation
- HumanEval: **89.4%**
- LiveCodeBench: **74.2%**
- SWE-bench Verified: **56.0%**

Long context:

- 256K token context window natively supported for repository-scale mathematical libraries and long formal proof files.

### Normalized scores (1–100)

- **Tool use: 75/100.** High-autonomy compiler loop integration and language server navigation evidenced by 87.0% on FATE-H and SOTA multi-turn proof refinement.
- **Reasoning: 92/100.** World-class formal mathematical reasoning and automated theorem proving demonstrated by 100.0% on miniF2F, 587/672 on PutnamBench, and 92.0% on AIME 2026.
- **Context window: 74/100.** Full 256K context capacity essential for ingesting deep Mathlib dependency graphs.
- **Multimodal: 15/100.** Text and formal code specialized; lacks native visual or audio encoders.
- **Coding: 82/100.** Elite formal proof coding, auxiliary lemma generation, and algorithmic implementation verified by 74.2% on LiveCodeBench and 89.4% on HumanEval.
- **Cost efficiency: 100/100.** Free open weights under Apache 2.0 with lean active compute (~6.5B active parameters per token).
- **Overall Score: 68/100.** Arithmetic mean of five quality dimensions: (75 + 92 + 74 + 15 + 82) / 5 = 67.6 → 68. Landmark open-weight mathematical reasoning and formal verification agent delivering frontier theorem proving inside 6.5B active parameters.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-23
- Method: Public documentation, Mistral AI official announcements, Hugging Face model cards, and automated theorem proving benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
