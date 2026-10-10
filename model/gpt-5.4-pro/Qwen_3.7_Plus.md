# GPT-5.4 Pro — findings by Qwen 3.7 Plus

- Source: OpenAI/GPT-5.4-Pro (`opencode/gpt-5.4-pro`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's top-performance Pro compute tier of the GPT-5.4 family, released March 5, 2026. Designed for expert reasoning, math generalization, and deep research. IPhO 2025 (Theory) 93.5% and FrontierMath v2 Tier 4 37.5% demonstrate exceptional mathematical reasoning. ARC-AGI-2 83.3% and ARC-AGI-1 94.5% are strong. BrowseComp 89.3% is excellent for web research. OSWorld 75% exceeds the 72.4% human expert baseline for desktop navigation. HLE 58.7% is competitive. However, the model is now deprecated (superseded by GPT-5.5 Pro). AA Intelligence Index is not publicly available. BenchLM coverage is extremely sparse (12 of 625 benchmarks). At $30/$180 per 1M, it is among the most expensive models in the dataset — 15x the cost of GPT-6.1 Sol for comparable or lower general intelligence. Coding benchmarks actually regressed vs. GPT-5.3-Codex (SWE-bench Pro 57.7% vs. 56.8%).
- **Provider / access:** OpenAI API (`gpt-5.4-pro`). No free tier. Deprecated — OpenAI recommends GPT-5.5 Pro instead.
- **Release / knowledge:** 2026-03-05 release; knowledge cutoff August 2025.
- **IDs:** `opencode/gpt-5.4-pro` (OpenCode Zen); `gpt-5.4-pro` (OpenAI API).
- **Context window:** 1,050,000 tokens (1.05M) total, 128K output.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-10-10):** $30.00/$180.00 per 1M in/out. 2x/1.5x over 272K. Blended rate (7:2:1 cache hit/input/output): $45.00/1M. Among the most expensive models in the dataset.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **89.3%** (OpenAI — excellent for web browsing/research)

Coding:

- SWE-bench Pro: **57.7%** (OpenAI; vs. GPT-5.3-Codex 56.8% — slight improvement but blog notes regression on Terminal-Bench 2.0)
- OSWorld-Verified: **75.0%** (OpenAI; exceeds 72.4% human expert baseline)

Multimodal:

- OSWorld-Verified: **75.0%** (OpenAI — computer use, exceeds human expert baseline of 72.4%)

Reasoning / knowledge:

- ARC-AGI-1: **94.5%** (ARC Prize — strong)
- ARC-AGI-2: **83.3%** (OpenAI — strong)
- HLE: **58.7%** (OpenAI) / HLE w/o tools: **42.7%** (OpenAI)
- FrontierMath (legacy): **50%** (OpenAI)
- FrontierMath v2 (Tiers 1-3): **50.0%** (Epoch AI)
- FrontierMath v2 (Tier 4): **37.5%** (Epoch AI — strong for highest difficulty tier)
- FrontierScience: **36.7%** (OpenAI)
- IPhO 2025 (Theory): **93.5%** (Meta AI comparison — exceptional)
- CritPt (Physics): **30.0%** (AA)

### Normalized scores (1–100)

- **Tool use: 65/100.** BrowseComp 89.3% is excellent for web browsing and research tasks. However, BenchLM covers only 12 of 625 benchmarks — the agentic/tool use profile is extremely sparse. No Terminal-Bench, no AutomationBench, no GDPval-AA data available. The Pro tier appears optimized for deep research (BrowseComp) rather than broad agentic workflows. Score is moderate due to the single strong data point but very limited coverage.
- **Reasoning: 66/100.** ARC-AGI-1 94.5% is strong. ARC-AGI-2 83.3% is solid. HLE 58.7% is competitive. IPhO 2025 (Theory) 93.5% is exceptional for mathematical physics. FrontierMath v2 Tier 4 37.5% is strong for the highest difficulty tier. However, CritPt 30.0% is modest. FrontierScience 36.7% is moderate. The AA Intelligence Index is not publicly available (deprecated model). The reasoning profile is specialized: exceptional on mathematical/physics reasoning (IPhO, FrontierMath Tier 4) but with limited general intelligence data.
- **Context window: 85/100.** 1.05M tokens total with 128K output — same as GPT-6 family. Large context window suitable for deep research workflows involving long documents and multi-step reasoning chains. No specific long-context reasoning benchmark data available (AA-LCR not reported).
- **Multimodal: 76/100.** OSWorld 75.0% exceeds the 72.4% human expert baseline for desktop navigation — a notable achievement. Image input supported. The multimodal capability is focused on computer use (desktop automation) rather than broad vision tasks. No MMMU-Pro or other visual reasoning benchmarks reported.
- **Coding: 56/100.** SWE-bench Pro 57.7% is moderate. An independent analysis noted that coding benchmarks are essentially flat vs. GPT-5.3-Codex (56.8%), with Terminal-Bench 2.0 actually regressing. OSWorld 75.0% exceeds human expert baseline but is primarily a computer use benchmark. The Pro tier is not optimized for coding — it's designed for expert reasoning and math. For coding tasks, the standard GPT-5.4 or GPT-5.3-Codex offer comparable performance at a fraction of the cost.
- **Cost efficiency: 15/100.** $30/$180 per 1M is among the most expensive in the dataset — 15x the cost of GPT-6.1 Sol ($2/$10) and 6x the cost of Claude Opus 5.5 ($5/$25). No free tier. The model is now deprecated in favor of GPT-5.5 Pro. For the same budget, users could run 15x more GPT-6.1 Sol tasks with comparable or superior general intelligence. The Pro tier's value is limited to niche scenarios requiring maximum mathematical reasoning depth (IPhO, FrontierMath Tier 4) where no cheaper alternative suffices. For virtually all other use cases, the cost is unjustifiable.
- **Overall Score: 69.6/100.** Mean of five quality dims: (65 + 66 + 85 + 76 + 56) / 5 = 69.6. OpenAI's deprecated Pro compute tier. Key strengths: IPhO 93.5% (exceptional math), FrontierMath v2 Tier 4 37.5% (strong), ARC-AGI-1 94.5% (strong), BrowseComp 89.3% (excellent research), OSWorld 75% (exceeds human expert), 1.05M context, 128K output. Key weaknesses: $30/$180 per 1M (extremely expensive), deprecated (superseded by GPT-5.5 Pro), AA Intelligence Index not available, extremely sparse benchmark coverage (12 of 625), coding regressed vs. GPT-5.3-Codex, no free tier. Best fit for: niche mathematical reasoning tasks requiring maximum depth (IPhO-level physics, FrontierMath Tier 4), deep research workflows where BrowseComp capability is critical, and legacy deployments already built on GPT-5.4 Pro. Not ideal for: virtually all other use cases — the model is deprecated, extremely expensive, and outperformed on general intelligence by newer, cheaper models (GPT-6.1 Sol, GPT-5.5 Pro).

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across OpenAI official blog, BenchLM, Artificial Analysis, ARC Prize, Epoch AI, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
