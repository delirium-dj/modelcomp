# GPT-5.6 Luna — findings by Laguna S 2.1

> Source: openai/gpt-5.6-luna (OpenAI), e.g. OpenAI GPT-5.6 launch + API docs, Artificial Analysis, LLM Stats
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: GPT-5.6 Luna (max). OpenAI's fastest and most affordable GPT-5.6 tier (nano-class) for cost-sensitive high-volume workloads.
- Short description: OpenAI's cost-optimized GPT-5.6 nano-tier — 80% price cut July 2026 → $0.20/$1.20; top use case is extraction, classification, and routed high-throughput automation with tool use.
- Provider / access: OpenAI API + ChatGPT Work + Codex (`gpt-5.6-luna`); Responses API; effort levels none/low/medium (default)/high/xhigh/max.
- Release / knowledge: preview 2026-06-26, GA 2026-07-09; price cut 2026-07-30. Knowledge cutoff 2026-02-16 (API docs).
- IDs: `openai/gpt-5.6-luna` (paid-only tier; no free Zen ID).
- Context window: 1,000,000 tokens (1.1M reported by trackers), 128K max output (≥1M tier; clears 64K caveat). Verified via API docs + LLM Stats.
- Modalities: text + image input → text output (+image-in); reasoning yes (effort none→max); tool calls yes; JSON/structured outputs yes. No video/audio/PDF.
- Pricing (as of 2026-09-23): $0.20 / $1.20 per 1M in/out, cached input $0.02, cache-write 1.25x input (launched $1/$6, cut 80% on 2026-07-30). Paid tier only.
- Architecture: proprietary (token-efficiency training with Sol-assisted kernels; no params/license published).

### Raw benchmarks found

> Verified public numbers from the OpenAI GPT-5.6 launch table (2026-07-09) + AA/LLM Stats July–Sept 2026. Benchmarks not located are NOT fabricated.

Agent / tool use:
- Terminal-Bench 2.1: **84.7%** (OpenAI launch table; vs GPT-5.5 85.6%, Sol 88.8%)
- GDPval-AA v2: **1591.8 Elo** (OpenAI launch table; vs GPT-5.5 1493.7, Fable 5 1759.6)
- Agents' Last Exam: **50.3%** (OpenAI launch table; vs Fable 5 40.5%, GPT-5.5 46.9%)
- BrowseComp: **83.3%** (OpenAI launch table; vs 5.5 84.4%)
- OSWorld 2.0: **45.6%** (OpenAI launch table; vs 5.5 47.5%)
- Toolathlon: **53.4%** (vs GPT-5.5 55.6%); AutomationBench **14.9%**; Management Consulting Tasks 35.4%

Reasoning / knowledge:
- GPQA Diamond: **92.3%** (OpenAI launch table; vs 5.5 93.6%)
- HLE: no verified public score found (closest proxy: Agents' Exam 50.3% above)
- Artificial Analysis Intelligence Index: **51.2 v4.1** / 51 max (AA pre-release) / 38 v4.3 max (OpenAI + AA July-Sept; vs GPT-5.5 54.8)
- FrontierMath: Tier 1-3 v2 **78.6%**, Tier 4 v2 **58.5%**; Big Finance Bench **36%** (vs 5.5 49%)

Coding:
- SWE-bench Pro: **62.7%** (OpenAI launch table; vs GPT-5.5 59.4%, Sol 64.6%); Verified: no figure (Pro used as primary)
- DeepSWE v1.1: **67.2%** (OpenAI launch table); AA Coding Agent Index **74.6** (vs 5.5 76.4, Opus 4.8 72.5)
- LiveCodeBench / SciCode / Vibe: no verified public score found

Long context:
- OpenAI MRCR v2 8-needle: **41.3%** at 256K-512K and 41.3% at 512K-1M (vs GPT-5.5 81.5%/74.0% — marked weakness); GraphWalks BFS 1M F1 **51.2%** (vs 5.5 45.4%); no RULER found.

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded. Independent re-normalization of OpenAI launch-table / AA figures per methodology bands.

- **Tool use: 78/100.** TB 2.1 84.7% (near the ~88%+ frontier threshold) + GDPval-AA 1591.8 (near-frontier) + Agents' Exam 50.3% (beats Fable); capped by OSWorld 45.6%, Toolathlon 53.4% and AutomationBench 14.9% below 5.5.
- **Reasoning: 79/100.** GPQA 92.3% (frontier 90%+ bar) + FrontierMath 78.6%/58.5%; capped by Big Finance 36% well below GPT-5.5 49% and no HLE figure.
- **Context window: 72/100.** 1M window retained, but MRCR 41.3% at 256K+ is a marked drop from GPT-5.5 81.5%/74.0% — real measured long-recall weakness; GraphWalks 51.2% at 1M is the only bright spot.
- **Multimodal: 76/100.** Text + image in, text out (+image-in); capped by text-only output and no verified MMMU/CharXiv figure for Luna.
- **Coding: 80/100.** SWE-Pro 62.7% (beats GPT-5.5 59.4%) + DeepSWE 67.2% + AA Coding Index 74.6 (beats Opus 4.8 72.5); capped by TB 84.7% below Sol 88.8% and no Verified/LiveCodeBench figure.
- **Cost efficiency: 95/100.** $0.20/$1.20 (~$0.17/MTok blended, ~$0.065/index-task) is elite paid value (~6 cents/task vs frontier, ~99% cheaper than Fable per Agents' Exam); capped below the $0 free tier (100 only).
- **Overall Score: 77/100.** (78 + 79 + 72 + 76 + 80) / 5 = 385 / 5 = 77.0 → 77. Nano-class value pick: best fit where throughput and cost-per-success dominate and the MRCR long-recall weakness is acceptable. Independent re-normalization of the OpenAI launch table; tracks the repo Muse Spark 1.3 rater (77).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (OpenAI GPT-5.6 launch + price-update July 2026, API docs; Artificial Analysis July 2026; LLM Stats). Re-normalized via model-comparison.md v4. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.