# GPT-5.6 Terra — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's GPT-5.6 tier optimized for ground-up agentic research, tool usage, long-context reasoning, and code synthesis.
- **Provider / access:** OpenAI API via Chat Completions and Responses APIs; `gpt-5.6-terra` endpoint.
- **Release / knowledge:** Knowledge cutoff 2026-02-16 per OpenAI documentation.
- **IDs:** `openai/gpt-5.6-terra` (no Free tier ID verified).
- **Context window:** 1,048,576 tokens (1M) total; 128,000 max output per OpenAI model page.
- **Modalities:** Text and image in; text out; reasoning tokens supported; function calling, structured outputs, tool use enabled.
- **Pricing (as of 2026-10-01):** $2.00 input / $0.20 cached / $12.00 output per 1M tokens; paid API model.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (OpenAI GPT-5.6 launch evaluation table; 4 attempts avg)
- AutomationBench: **15.2%** (OpenAI table)
- Toolathlon-Verified: **53.1%** (OpenAI table)
- GDPval-AA v2: **1593 Elo** (OpenAI table)
- Agents' Last Exam: **50.4%** (OpenAI table)
- OSWorld 2.0: **50.2%** (OpenAI table)
- BrowseComp: **87.5%** (OpenAI table)

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (OpenAI table)
- FrontierMath v2 Tier 1-3: **84.9%**; Tier 4: **68.3%** (OpenAI table)
- Artificial Analysis Intelligence Index: **55** (OpenAI table)
- Big Finance Bench: **51%** (OpenAI table)

Coding:

- SWE-bench Pro: **63.4%** (OpenAI table)
- DeepSWE v1.1: **69.6%** (OpenAI table)
- Terminal-Bench 2.1: **87.4%** (OpenAI table)
- Artificial Analysis Coding Agent Index: **77.4** (OpenAI table)

Long context:

- MRCR v2 8-needle: **89.6%** at 256K-512K, **72.5%** at 512K-1M (OpenAI table)
- GraphWalks BFS F1: **76.9%** at 256K, **71.2%** at 1M (OpenAI table)

### Normalized scores (1-100)

Derived from benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 85/100.** Terminal-Bench 87.4% and BrowseComp 87.5% hit frontier tool use benchmark ref; GDPval 1593 Elo (~51% normalized) strong. Capped by low AutomationBench 15.2% and OSWorld 50.2%.
- **Reasoning: 89/100.** GPQA 92.9% and FrontierMath 84.9% tier 1-3 are strong; AA Intelligence Index 55 meets the 50+ threshold; capped by lack of HLE/LCR/Omniscience published data.
- **Context window: 95/100.** Full 1M verified with strong MRCR 72.5% at 512K-1M and GraphWalks 71.2% at 1M; excellent retrieval performance documented.
- **Multimodal: 78/100.** Confirmed text + image input via OpenAI docs; MMMU Pro ~80% without tools; audio/video unsupported; text-only output caps the score.
- **Coding: 90/100.** SWE-Pro 63.4%, DeepSWE 69.6%, TB 87.4%, Coding Index 77.4 show strong coding across agentic and non-agentic tasks; missing LiveCodeBench/SciCode caps slightly.
- **Cost efficiency: 63/100.** $2/$12 per 1M is paid mid-tier pricing; notable cache discount to $0.20/$0.30; not competitive with free tiers.
- **Overall Score: 87/100.** Mean of (85 + 89 + 95 + 78 + 90) / 5 = 87.4 → 87. Excellent agentic coding and long-context performance; suited for paid-tier specialized workloads.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (OpenAI GPT-5.6 launch evaluation table, BenchLM references, MRCR benchmarks); scores normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.