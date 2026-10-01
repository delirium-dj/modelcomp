# Grok 4.6 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's flagship frontier model released August 2026 for coding, agentic tasks, and knowledge work with optional reasoning modes.
- **Provider / access:** xAI API `grok-4.6`; Vercel AI Gateway `spacexai/grok-4.6`; OpenAI-compatible chat API with priority processing.
- **Release / knowledge:** Released 2026-08-12; knowledge cutoff 2026-02-01 per xAI documentation.
- **IDs:** `xai/grok-4.6`, `spacexai/grok-4.6` (no Free tier ID verified).
- **Context window:** 500,000 tokens native; max output 500,000 tokens per Vercel docs.
- **Modalities:** Text and image in; text out; reasoning support (`high` default, `xhigh` on 4.6); tool calling enabled for agentic workflows.
- **Pricing (as of 2026-10-01):** $2 in / $6 out per 1M tokens under 200K prompt; $4 in / $12 out for ≥200K; cached input $0.50. Paid API model.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.4%** (Artificial Analysis / eesel; independent 2026-08-20)
- Tau3-Banking: **50.7%** (eesel / AA)
- GDPval-AA v2: **1753 Elo** (eesel / xAI High / AA)
- AA Briefcase: **1577** Elo (eesel)
- Terminal-Bench v3.0: **26.0%** (xAI High table via CodingFleet)
- APEX-Agents: **57.5%** (xAI High)
- CursorBench v3.2: **69.9%** (xAI High)
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.9%** #1 of 246 (AA / eesel; Vals 94.7%)
- HLE: **42.9%** (AA 2026-08-17, no tools)
- Artificial Analysis Intelligence Index: **61** (CodingFleet / Vercel); eesel **60.92**
- SciCode: **53.6%** (eesel)
- AA-LCR: **75.0%** (eesel)

Coding:

- LiveCodeBench: **88.2%** (Vals.ai, The Model Gap)
- DeepSWE v1.1: **67.0%** (The Model Gap / DataCurve)
- FrontierCode v1.1 Ext: **61.3%**; APEX-SWE: **56.4%** (xAI High)
- SWE-bench Verified: Vals.ai **95.6%** (saturated; not used as unsaturated score)

Long context:

- 500K native; AA-LCR 75% (not ≥98% at 512K+); no public MRCR/RULER scores.

### Normalized scores (1-100)

Derived from benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 92/100.** Terminal-Bench 88.4% and Tau3 50.7% hit frontier refs; GDPval 1753 Elo (~51% normalized) strong; capped by TB v3.0 26% and missing Claw-Eval.
- **Reasoning: 92/100.** Index 61 meets 60+; GPQA 94.9% excellent; HLE 42.9% and LCR 75% cap the top of the 90-100 tier.
- **Context window: 88/100.** 500K maps to 85-94 range; LCR 75% blocks 95-100 (≥1M or 98%+ retrieval required). 200K price doubling noted as cost caveat.
- **Multimodal: 65/100.** Official text + image in, text out; 60-70 range for image input capability; no audio/video support caps it.
- **Coding: 88/100.** LiveCode 88.2% high; DeepSWE ~67% average; TB 88.4% strong; capped by TB v3.0 26% showing gaps.
- **Cost efficiency: 78/100.** $2/$6 better than higher-cost rivals like Sonnet 4.6; but far from free tiers; cache $0.50 worse than 4.5's $0.30; 200K+ pricing doubling affects long jobs.
- **Overall Score: 85/100.** (92 + 92 + 88 + 65 + 88) / 5 = 85.0. Best fit: xAI's long-agent / knowledge-work model at $2/$6; verify DeepSWE score on your codebase before relying.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (Artificial Analysis, eesel, CodingFleet, The Model Gap, Vercel AI Gateway); scores normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.