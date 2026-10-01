# Claude Fable 5.1 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's generally available safeguarded deployment with same weights as Mythos 5.1, optimized for long-horizon agentic coding, knowledge work and research.
- **Provider / access:** Anthropic Claude API `claude-fable-5-1`; Messages API; Amazon Bedrock, Google Cloud, Microsoft Azure; OpenRouter.
- **Release / knowledge:** Released 2026-09-01; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-fable-5-1` (no Free-tier ID on OpenCode Zen).
- **Context window:** 1,000,000 tokens (1M) / 128,000 max output.
- **Modalities:** Text and image in; text out; text/PDF/document understanding; reasoning support with adaptive thinking.
- **Pricing (as of 2026-10-01):** $10 input / $50 output per 1M tokens; cached read $0.25. Paid-tier only.
- **Architecture:** Proprietary; same weights as Mythos 5.1; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (Anthropic uses TB 4.0)
- Terminal-Bench 4.0: **55.8%** (Anthropic vendor-run; Mythos 5.1 scores 60.9%)
- GDPval-AA v2: **1853 Elo** (AA + Anthropic, launch-day scale)
- OSWorld 2.0: **77.9%** partial score
- AutomationBench: **31.4%** (Anthropic)
- Terminal-Bench-Science 0.1: **52.6%**

Reasoning / knowledge:

- GPQA Diamond: **93.7%** (third-party DataCamp citation; not vendor-published)
- HLE: **60.9%** no-tools / **65.0%** with tools (Anthropic)
- AA-LCR: **80.0%** (BenchmarkList, rank 9/409)
- Artificial Analysis Intelligence Index: **53** (#5 of 222, max effort)
- BenchLM BenchAlign: **82.5** (#3)

Coding:

- SWE-bench Pro: **81.2%** (Anthropic system card via secondary reporting)
- CursorBench 3.2.0: **73.4%** (Anthropic, max effort)
- SciCode: **63%** (AA, under review)
- AA Coding Agent Index: **70**

Long context:

- AA-LCR 80.0% at 512K+; no MRCR/RULER scores at 512K+.

### Normalized scores (1-100)

Derived from benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 92/100.** GDPval 1853 Elo (>1750 frontier); OSWorld 77.9%; TB4.0 55.8%; capped by missing TB2.1/Tau3, low AutomationBench 31.4%.
- **Reasoning: 93/100.** GPQA 93.7% + HLE 60.9% + AA Index 53 #5 global; capped by CritPt missing, AA Index tied with GPT-6 Astra (53 vs 60+ tier threshold).
- **Context window: 95/100.** Full 1M verified; no ≥98% retrieval at 512K+ means capped from 100.
- **Multimodal: 80/100.** Text/image/PDF in; text-only out; solid document understanding; no audio/video.
- **Coding: 92/100.** SWE-Pro 81.2%, SciCode 63%, CursorBench 73.4%, AA Index 70; frontier coding ability.
- **Cost efficiency: 30/100.** $10/$50 per 1M matches ~$30 tier anchor; $0.25 cache helps but not free tier.
- **Overall Score: 90/100.** Mean of (92 + 93 + 95 + 80 + 92) / 5 = 90.4 → 90. Best fit: long-running agentic coding and knowledge work where quality paramounts price.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (Anthropic docs, Artificial Analysis, BenchmarkList, BenchLM); scores normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.