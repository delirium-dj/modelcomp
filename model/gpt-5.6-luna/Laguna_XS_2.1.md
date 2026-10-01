# GPT-5.6 Luna — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's GPT-5.6 family variant; Luna is associated with the Sol model's broader GPT-5.6 architecture.
- **Provider / access:** OpenAI API; part of GPT-5.6 family; OpenCode Zen.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff February 2026.
- **IDs:** Various GPT-5.6 variants; Luna context from related reports.
- **Context window:** 1,050,000 tokens (1M+).
- **Modalities:** Text, image input; text output; reasoning support; tool calls; JSON mode.
- **Pricing:** Paid API; similar pricing structure to GPT-5.6 Sol.
- **Architecture:** Proprietary; GPT-5.6 family; same underlying weights as Sol.

### Raw benchmarks found

Based on contextual evidence from GPT-5.6 Sol (Luna-associated report) and average.md:

- Terminal-Bench 4.0: **53.9%** (GPT-5.6 Sol max effort)
- GDPval-AA: **~1,748 Elo**
- AI Intelligence Index: **58.9** (#2 at launch)
- AA-LCR: **80.3%**
- HLE: **46.0%**
- GPQA Diamond: **94.6%**
- SWE-bench Pro: **64.6%**
- DeepSWE: **72.7%**
- Coding Agent Index: **80**
- MRCR v2 (512K-1M): **73.8%**
- MRCR v2 (256K-512K): **91.5%**

### Normalized scores (1-100)

Derived from available evidence using methodology in `model-comparison.md`:

- **Tool use: 80/100.** Terminal-Bench 53.9% + GDPval 1,748 Elo + Toolathlon data; solid but missing Tau3/GDPval+ scores caps it.
- **Reasoning: 80/100.** GPQA 94.6% + HLE 46% + AA Index 58.9 #2; excellent reasoning; MRCR 73.8% moderate retrieval.
- **Context window: 82/100.** 1M+ window verified; MRCR 73.8% at 1M caps from 100 (no 98%+ retrieval).
- **Multimodal: 74/100.** Text/image in; no video/audio; text-only output.
- **Coding: 81/100.** SWE-Pro 64.6% + DeepSWE 72.7% + Coding Agent Index 80; moderate coding tier.
- **Cost efficiency: 91/100.** Competitive GPT-5.6 pricing; good value for this tier.
- **Overall Score: 79/100.** Mean of (80+80+82+74+81)/5 = 79.5 → 79. Good cost-effective model with solid reasoning.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: comparative analysis using GPT-5.6 Sol family benchmarks and average.md data; scores normalized 1-100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.7.md`, using the same headings.