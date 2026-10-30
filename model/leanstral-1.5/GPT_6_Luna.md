# Leanstral 1.5 — findings by GPT-6 Luna

- Source: Mistral AI (`mistralai/Leanstral-1.5-119B-A6B`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Leanstral 1.5
- **Short description:** Mistral AI's 119B/6.5B active MoE formal theorem proving model for Lean 4 autoformalization across 256K context.
- **Provider / access:** Hugging Face open weights (`mistralai/Leanstral-1.5-119B-A6B`); Mistral La Plateforme (free endpoint `leanstral-1-5`); OpenCode Zen (`opencode/leanstral-1.5`); vLLM serving. Chat Completions API (`/v1/chat/completions`); function calling supported.
- **Release / knowledge:** Released 2026-07-02 (Mistral blog announcement); knowledge cutoff not explicitly stated by Mistral (model trained through early/mid 2026 per agent estimates). Marked deprecated on Mistral docs with deprecation date 2026-09-29.
- **IDs:** `opencode/leanstral-1.5` (the exact tracked route; alternate hosts are listed in the provider line).
- **Context window:** 262,144 (256K)
- **Modalities:** Text in; text out; reasoning/tool support as documented in the raw model card.
- **Pricing (as of 2026-10-30):** Free open weights ($0/$0); hosted ~$0.15/$0.45
- **Architecture:** 119B total / ~6.5B active parameters per token sparse MoE (128 fine-grained experts, top-4 routing); mid-training + SFT + RL with CISPO; Lean compiler feedback + code-agent environments; Apache 2.0 license.

### Raw benchmarks found

> Numbers below are vendor-reported from the Mistral blog post (2026-07-02) and Mistral docs; independent replication is limited. No Artificial Analysis / Epoch AI / Vals AI entry found at time of writing.

Agent / tool use:

- Terminal-Bench 2.1: **42.5%** (Mistral, agentic coding/terminal benchmark)
- FATE-H (abstract algebra, graduate-level): **87.0%**
- FATE-X (abstract algebra, PhD-level): **34.0%**
- Lean 4 multiturn proof environment: **SOTA** interactive proof completion (Mistral claim)
- FLTEval (real PRs from Fermat's Last Theorem project): pass@1 **28.9**, pass@8 **43.2** (surpassing Claude Opus 4.6's 39.6 at ~1/7 the cost)

Reasoning / knowledge:

- miniF2F: **100.0%** (full saturation on validation and test sets)
- PutnamBench: **587 / 672** problems solved
- GPQA Diamond: **84.2%**
- AIME 2026: **92.0%**
- Humanity's Last Exam (HLE): **36.5%**
- Code verification case studies: 5 previously unknown bugs found across 57 tested repositories (AVL tree time-complexity proof, zigzag-decoding overflow in datrs/varinteger)

Coding:

- HumanEval: **89.4%**
- LiveCodeBench: **74.2%**
- SWE-bench Verified: **56.0%**
- Mathlib formal code navigation and auxiliary lemma generation (qualitative)

Long context:

- 256K token context window natively supported for repository-scale mathematical libraries and long formal proof files; FLTEval stresses long-context proof engineering (2.7M tokens / 22 compactions in the AVL case study).

Multimodal:

- Text and formal Lean 4 code only; no image/audio input. Text-only multimodal lane.

### Normalized scores (1–100)

- **Tool use: 70/100.** Strong agentic proof-engineering loop (compiler feedback, Lean LSP, file editing, bash) evidenced by SOTA multiturn proof completion and FATE-H 87%, but Terminal-Bench 2.1 only 42.5% caps general agentic tool use; FATE-X 34% shows hard-problem drop-off.
- **Reasoning: 91/100.** World-class formal mathematical reasoning: miniF2F 100% saturation, PutnamBench 587/672, FATE-H 87%, AIME 2026 92%, GPQA Diamond 84.2%; HLE 36.5% caps open-ended knowledge reasoning.
- **Context window: 74/100.** Full 256K (262,144) context essential for ingesting deep Mathlib dependency graphs; caps at the 256K tier mapping.
- **Multimodal: 15/100.** Text and formal code specialized; no native visual or audio encoders (text-only baseline).
- **Coding: 78/100.** Elite formal proof coding, auxiliary lemma generation, and algorithmic implementation (HumanEval 89.4%, LiveCodeBench 74.2%), but SWE-bench Verified 56.0% caps general software-engineering coding; specialized for Lean 4 / formal methods.
- **Cost efficiency: 100/100.** Free open weights under Apache 2.0 with lean active compute (~6.5B active parameters per token) and a free API endpoint.
- **Overall Score: 66/100.** Half-up mean of the five non-cost quality dimensions: (70 + 91 + 74 + 15 + 78) / 5 = 65.6, rounded to 66. Cost efficiency is excluded. caps are general agentic tool use, SWE-bench coding, and text-only multimodality.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30 UTC
- Method: Public web research using the official model card/API documentation and the independent benchmark pages retained in the research extract; conflicting harnesses and inherited variant results are labelled in the raw section. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral Leanstral announcement](https://mistral.ai/news/leanstral-1-5/)
  - [Leanstral 1.5 model card](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)
  - [Mistral model documentation](https://docs.mistral.ai/models/leanstral-1-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
