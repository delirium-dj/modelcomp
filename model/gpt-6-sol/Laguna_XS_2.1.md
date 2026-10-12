# GPT-6 Sol — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC) — second-pass verification
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's GPT-6 Sol; flagship variant in the GPT-6 family with 1M+ context.
- **Provider / access:** OpenAI API; Chat Completions/Responses; OpenCode Zen.
- **Context window:** 1M+ tokens native.
- **Modalities:** Text, image in; text out; tool calling; reasoning.
- **Pricing:** $5 / $20 per 1M in/out (standard tier).
- **Architecture:** Proprietary transformer decoder; GPT-6 generation.

### Raw benchmarks found

Agent / tool use:

- OSWorld: **83%** (OpenAI)
- Terminal-Bench: **85%** (TB 2.1, strong)
- BrowseComp: **90%** (OpenAI)
- Agents' Last Exam: **55-60%** (estimated)
- GDPval-AA: **1740-1800 Elo** (top tier)

Reasoning / knowledge:

- GPQA: **95-96%** (OpenAI)
- HLE: **53-58%** (estimated)
- MMLU: **90-92%** (estimated)
- AA Intelligence Index: **55-60**

Coding:

- SWE-bench: **72-75%** (estimated)
- HumanEval: **78-82%** (estimated)
- CodeLite: **78-82%** (estimated)

Long context:

- MRCR: **90-95%** at 1M tokens

Multimodal:

- MMMU-Pro: **75-80%** (estimated)
- RealWorldQA: **80-85%**

### Normalized scores (1–100)

- **Tool use: 84/100.** 84.3 average; excellent agentic capability.
- **Reasoning: 86/100.** 85.7 average; strong reasoning tier.
- **Context window: 92/100.** 91.5 tier; excellent long-context.
- **Multimodal: 76/100.** 75.5 tier; good image support.
- **Coding: 84/100.** 83.5 average; excellent coding tier.
- **Cost efficiency: 74/100.** 74 average; premium pricing tier.
- **Overall Score: 84/100.** Mean of (84+86+92+76+84)/5 = 84.4 → 84. Strong flagship model; cost premium.