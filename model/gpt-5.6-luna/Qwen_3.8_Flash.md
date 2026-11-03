# GPT-5.6 Luna — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-5.6 Luna (`openai/gpt-5.6-luna`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — Cost 90 provisional→**92 verified** ($0.20/$1.20 + $0.02 cache-read reconfirmed on OpenRouter; AA: **"~80% lower Cost per Task than Sol"**); AA independently reconfirms **Index 51, hallucination 92.6%, accuracy 42.7%** — exact match to pass 1, no band move; **GPT-6 Luna successor** (hallucination falls to 77%) is a separate folder per exact-ID rule; bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's cost-sensitive, high-volume GPT-5.6 tier — and it punches far above its price. BenchLM ranks it #29 of 645 (66.2/100; 46/618 rows, Reasoning type) with an outstanding coding/agentic core — SWE-bench (Vals) **93.0%**, Terminal-Bench 2.1 **84.7%**, BrowseComp 83.3%, AA Coding Index 71.5% — top-tier math (FrontierMath v2 Tier 4 58.5%) and strong GPQA (91–92%), plus a 1.05M window at $0.20/$1.20 per 1M. The main caveats are a severe 92.6% hallucination rate (Accuracy 42.7%), a sub-bar AA-HLE (39.5%) and near-floor novel-reasoning (ARC-AGI-3 0.2%, ApprenticeBench 7%).
- **Provider / access:** OpenAI API (`gpt-5.6-luna`); OpenRouter. Reasoning + tool calls; image input; `noFreeId`.
- **Release / knowledge:** 2026 (GPT-5.6 family); cutoff not disclosed.
- **IDs:** `openai/gpt-5.6-luna`.
- **Context window:** BenchLM and curated `meta.json` agree at **1.05M** (128K out).
- **Modalities:** Text + image in; text out (BenchLM and curated meta agree).
- **Pricing (as of 2026-10-02):** $0.20 input / $1.20 output per 1M (very cheap for the tier).
- **Architecture:** proprietary, hosted only; sibling of Sol/Terra/Cyber in the GPT-5.6 family.

### Raw benchmarks found

> Independently verified against BenchLM (46 of 618 rows; 66.2/100, #29 of 645, Reasoning type), citing the OpenAI GPT-5.6 announcement/system card, Artificial Analysis, Vals AI, ARC Prize, Cursor, Cognition/Devin, VulcanBench, FrontierBench, NeoCognition and Gert (fetched 2026-10-02). Coverage is partial; BenchLM flags the overall score conservative.

Agent / tool use:

- Terminal-Bench 2.1 **84.7%** (Vals 79.0); BrowseComp **83.3%**; CyberGym 77.9%; OSWorld 2.0 45.6%; GDPval-AA **1582 / 47.5%** (mid); AA Agentic Index 42.7%; APEX-Agents-AA 35.8%; Toolathlon 53.4%
- weak newest/frontier tiers: Terminal-Bench 3.0 14.3%, ExploitGym 12.4%, ApprenticeBench 7%

Coding:

- SWE-bench (Vals) **93.0%** (excellent); AA Coding Index **71.5%** (over 70 bar); DeepSWE 67.2%; VulcanBench v3 85.5%; SWE-bench Pro 62.7%; FrontierCode 1.1 Extended 55.1%; CursorBench 3.2 61.1 / 4.0 35.9; AA-SciCode 53.6%

Reasoning / knowledge:

- GPQA **92.3%** (AA-GPQA Diamond 91.1, Vals 91.7 — over 90 bar); AA-HLE **39.5%** (just under 40 bar); AA Intelligence Index **51.2** (high); MMLU-Pro (Vals) 86.0
- ARC-AGI-2 59.5% but ARC-AGI-3 **0.2%** (near-floor); CritPt 20.6%; AA-LCR 83.7; HealthBench Professional 55.7% / Hard 32.0%
- AA-Omniscience Index -10.3 / Accuracy 42.7% / **Hallucination 92.6%** (severe)

Mathematics:

- FrontierMath v2 Tiers 1-3 **78.6%** / Tier 4 **58.5%** (top-tier); FrontierMath (legacy) 78.6%

Multimodal / long context:

- MMMU-Pro 78.4 (79.5 w/ Python) / AA-MMMU-Pro 78.6
- 1.05M window; AA-LCR 83.7 supportive (no ≥98% MRCR at 512K+ reported)

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 80/100.** Terminal-Bench 2.1 84.7%, BrowseComp 83.3% and CyberGym 77.9% are strong real-agent signals with mid-band GDPval-AA autonomy (1582 / 47.5%) and AA Agentic Index 42.7%; the newest hardest tiers remain weak (TB 3.0 14.3%, ExploitGym 12.4%, ApprenticeBench 7%).
- **Reasoning: 76/100.** GPQA 91–92% clears the bar and Intelligence Index 51.2 is high with top-tier FrontierMath, but AA-HLE 39.5% sits just under the 40 bar, ARC-AGI-3 is 0.2%, and a severe 92.6% hallucination rate (Accuracy 42.7%) undermines unaided factual reliability.
- **Context window: 92/100.** A 1.05M window is the top band, backed by a strong AA-LCR 83.7 for long-context reasoning; no ≥98% MRCR at 512K+ is published, so an upper (not maximum) placement.
- **Multimodal: 68/100.** Text+image in with strong vision reads (MMMU-Pro 78.4, AA-MMMU-Pro 78.6), but coverage is image-only with text output — no audio/video/document rows — so it stays in the upper +image band.
- **Coding: 85/100.** SWE-bench (Vals) 93.0% and an AA Coding Index of 71.5% (over 70), plus DeepSWE 67.2% and VulcanBench 85.5%, are frontier-grade; SWE-bench Pro 62.7%, SciCode 53.6% and the harder CursorBench tiers temper the long-horizon end.
- **Cost efficiency: 92/100.** (Revised by the 2026-11-03 second pass from 90/100: list now verified — **"GPT-5.6 Luna costs $0.20/M input tokens and $1.20/M output tokens, with separate rates for Cache Read at $0.02/M"** (OpenRouter) and OpenAI's own **"Starting July 30, API pricing is … $0.20 per million input"** (Luna) and techjack **"Luna at $0.20 and $1.20"** — $0.20/$1.20 is ~15% of the $1.25/$4.25≈88 anchor, and AA independently crowns the value thesis (**"Luna … at ~50% and ~80% lower Cost per Task than Sol"**); lifted 90→92 for the extreme-cheap input + $0.02 cache, trimmed only by noFreeId. Cost is excluded from Overall.
- **Overall Score: 80/100.** Mean of Tool 80, Reasoning 76, Context 92, Multimodal 68, Coding 85 = 80.2 → 80. Best fit: an outstanding value autonomous-coding model — elite SWE-bench/Terminal-Bench/BrowseComp and math with a 1.05M window at near-floor pricing; the two watch-outs are a severe factual-hallucination rate (use retrieval/verification) and weak novel-abstract reasoning (ARC-AGI-3), and it is image-only on multimodal.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Pricing — https://openrouter.ai/openai/gpt-5.6-luna (**"GPT-5.6 Luna costs $0.20/M input tokens and $1.20/M output tokens, with separate rates for Cache Read at $0.02/M tokens and Cache Write at $0.25/M"**) and https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6/ (2026-07-30: **"Starting July 30, API pricing is $2 per million input tokens and $12 per million output tokens for Terra, and $0.20 per million input"** [Luna]) and https://techjacksolutions.com/ai-tools/chatgpt/gpt-5-6-pricing/ (**"Sol at $5.00 … Terra at $2.00 and $12.00, and Luna at $0.20 and $1.20"**) and https://pricepertoken.com/pricing-page/model/openai-gpt-5.6-luna (**"$0.200 per million input … $1.20 per million output … context window of 1,050,000"**) · benchmarks (independent) — https://artificialanalysis.ai/articles/gpt-5-6-has-landed (**"Luna (max) score … 51 respectively in the Intelligence Index, at ~50% and ~80% lower Cost per Task than Sol"** — Index 51 vs pass 1's 51.2, a match) and https://suprmind.ai/hub/ai-hallucination-rates-and-benchmarks/ (**"GPT-5.6 Luna: 42.7% accuracy, 92.6% hallucination, Index -10.3"** — exact match to pass 1) · successor — https://tess.im/blog/gpt-6-sol-luna-half-the-bill (2026-09-22: **"GPT-6 Sol and Luna match GPT-5.6 on the Intelligence Index at about half the price … Luna's … hallucination rate falls from 93% to 77%"**) and https://x.com/ArtificialAnlys/status/2102462968084758810 (**"GPT-6 Sol and Luna both hallucinate less than their predecessors"**) — GPT-6 Luna is a distinct id scored in its own folder.

**What moved and how it was resolved:**

1. **Cost 90→92 (provisional→verified):** $0.20/$1.20 + $0.02 cache reconfirmed across four lanes and AA's "~80% lower cost/task than Sol" crowns the value placement; small lift to 92 for the extreme-cheap input, held from the 100 band by noFreeId. Overall unaffected (Cost excluded).
2. **Independent reconfirmation, zero band movement:** AA's Index 51 and Suprmind's 92.6% hallucination / 42.7% accuracy / Index −10.3 match pass 1 exactly — the first fully third-party re-read of this id since 2026-10-02, and it validates every contested number. Tool 80, Reasoning 76, Context 92 (1.05M), Multimodal 68, Coding 85 unchanged. 80+76+92+68+85 = 401/5 = 80.2 → **Overall 80**.
3. **Successor boundary:** GPT-6 Luna (hallucination down to 77%, half the price) is the next-gen id and is scored in its own folder (it is queue slot f9's sibling) — per exact-ID rule no GPT-6 row is merged here; this 5.6 Luna row stays a legacy-still-listed value option.

**Scores changed by this pass:** Cost efficiency 90→92 (excluded from Overall). **Overall remains 80.** Curation note: superseded by GPT-6 Luna (own folder), still listed/cheap.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the OpenAI GPT-5.6 announcement/system card, Artificial Analysis, Vals AI, ARC Prize, Cursor, Cognition/Devin, VulcanBench, FrontierBench, NeoCognition and Gert); partial coverage (46/618, Reasoning). Scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (OpenRouter, OpenAI price-performance announcement, techjack, pricepertoken, AA launch article, Suprmind hallucination table, tess/X for the GPT-6 successor); Cost 90→92 on the verified $0.20/$1.20 + $0.02 cache lane; AA independently reconfirms Index 51 / 92.6% hallucination (exact match); GPT-6 Luna quarantined per exact-ID rule — **no quality dim changed and Overall remains 80**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
