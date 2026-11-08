# MiMo-V2.6-Pro — findings by MiMo 2.6 Flash

- Source: Xiaomi MiMo (`mimo-v2.6-pro`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 90). Fresh sources this pass: Artificial Analysis model
> page + LLM leaderboard (AA Intelligence Index v5.0.1, Nov 2026) and BenchLM
> model page (updated 2026-11-07).
> Changes: Reasoning 86→83 (AA Intelligence Index now 30/60-frontier on the
> v5.0.1 scale — mid band); Overall 90→89; Tool use, Context window,
> Multimodal, Coding and Cost efficiency held.

## Model card

- **Name:** MiMo-V2.6-Pro (MiMo V2.6 Pro / `MiMo-V2.6-Pro-RL`)
- **Short description:** Xiaomi's flagship open-weight reasoning model (released 2026-09-21/22, MIT license) — 1.02T-parameter sparse MoE (42B active; 70 layers, 384 routed experts, 8 active/token), natively omni-modal, trained with 27T text + 3T multimodal tokens then agent-trajectory mid-training and one mixed RL run (coding/general/visual/cyber). Was the top open-weights score on the AA Intelligence Index at release (46 on v4.3.2); on the current AA v5.0.1 index it reads 30 (frontier 60). RL environments + training code published; RL run cost disclosed at $2.6M. BenchLM composite 57.31, rank #59/1016 (updated 2026-11-07).
- **Provider / access:** mimo.mi.com console (prepaid + Token Plan subscriptions from $6/mo), OpenRouter, DeepInfra, NovitaAI, GMICloud (AA lists 4 API providers); self-host (BF16/FP8/INT8). Sibling tiers: MiMo-V2.6-Flash ($0.14/$0.28) and MiMo-V2.6-Pro-UltraSpeed (same checkpoint, 10× price, faster decode).
- **Release / knowledge:** released 2026-09-21 (some trackers 09-22); API updated in place 2026-09-25 to curb repeated tool calls; knowledge cutoff undisclosed.
- **IDs:** `xiaomi/mimo-v2.6-pro` (gateway routes) / `mimo-v2.6-pro` (native).
- **Context window:** 1,048,576 tokens; max output 131,072 (128K) — AA lists 1M (verified on the AA model page, Nov 2026).
- **Modalities:** text, images, speech/audio, video in (AA confirms text + image + speech + video input, Nov 2026); text out; reasoning yes (on by default); tool calls yes (function calling, web search, structured outputs, context caching); UltraSpeed mode 20× faster at 10× cost.
- **Pricing (as of 2026-11-08):** **$0.435 in / $0.87 out** per 1M; cache-hit input **$0.0036** (AA: 99% cache discount; blended 7:2:1 rate $0.18/M, $0.26 per AA Intelligence Index task — #5/25 on AA cost); batch 50% off; UltraSpeed $4.35/$8.70 (cache $0.036); subscriptions $6–$100/mo. Same rate as V2.5 generation. Paid (open weights free to self-host under MIT).
- **Architecture:** sparse MoE, 1.02T total / 42B active (AA: 1.0T / 42B), hidden 6144, 5-layer speculative decoder; 309B/15B sibling Flash; MIT license.

### Raw benchmarks found

> Fresh rows this pass from BenchLM `mimo-v2-6-pro` (updated 2026-11-07) and the
> Artificial Analysis model page (Nov 2026); rows unchanged from the 2026-10-07
> pass are kept with their original attribution.

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (Xiaomi technical report via BenchLM — clears the 88% frontier ref). Terminal-Bench 4.0: **34.9%** (vendor) / **34.8%** (AA independent) — below closed-frontier TB4 rows.
- AutomationBench: **53.1%** (vendor); **AutomationBench-AA: 58.6%** (AA independent, this pass). OSWorld-Verified: **82.0%** (vendor). Toolathlon-Verified: **76.9%** (vendor via BenchLM). JobBench: **62.0%** (vendor via BenchLM).
- GDPval-AA: **Elo 1,673** (Xiaomi MiMo-V2.6 technical report via BenchLM) — clears the old mid-band but still under the 1,750+ frontier ref; AA's percent-scale row reads 59.2 (non-comparable to Elo boards).
- AA-Briefcase v1.1: **1512 Elo** (AA). Agents' Last Exam: **31.6%** (vendor). τ-bench: **80.0** (provider-reported via OpenRouter). CyberBench v1.1: **72.86%** (Vals — rank 3/9).
- Design Arena: Agents Arena Webapps 1283, UI Component 1345, DataViz 1343, Code 1322, Website 1314, 3D 1340 Elo.
- Tau3 / Claw-Eval: no verified public score found.

Reasoning / knowledge:

- HLE: **49.4%** (AA independent — clears the 40%+ ref comfortably).
- AA Intelligence Index **v5.0.1: 30** (AA LLM leaderboard, Nov 2026; frontier Gemini 4 Carbon high = 60, Claude Opus 5.5 max = 59 → 30 points under the 60+ ref; the release-pass v4.3.2 reading was 46.3 vs a ~58 frontier, i.e. relative standing fell from ~80% to ~50% of frontier). Still above the 20–35 mid-band ceiling region and #4/26 in AA's open-weights large-model class (median 23).
- GPQA Diamond: **~90.0%** (Xiaomi provider run via OpenRouter; DeepInfra 89.3, Novita 90.2 — provider-run, not an AA/first-party row; borderline on the 90%+ ref).
- CritPt: **26.6%** (AA, #10/28). AA-Omniscience: accuracy 34.8, hallucination rate 60.2 / non-hallucination ~39.8, Net Score −4.5 (AA). Vals Index: **55.20%** (TensorFeed, 2026-09-30, #12/41) / **59.47%** (DeepLearning.AI The Batch) — range flagged. STEMBench: **2.17** (Ulam snapshot, 2026-10-28 audit).
- ARC-AGI / FrontierMath: no verified public score found.

Coding:

- DeepSWE v1.1: **71.9** (vendor — strong but under the 74% frontier ref).
- SciCode: **60.9%** (AA independent — clears the 55%+ ref). CyberGym: **94.0** (vendor) / **CyberGym-E2E-AA: 78.6%** (AA). CWE-Bench-AA: **63.3%**, AA Cyber Index: **56.1%**, DeepsecBench-AA: 26.2% (AA, this pass). ProgramBench: **26.5** (vendor). Bug Hunt Bench: **22.7 fixes** (public data). MiMo VisualCoding: 72.3 (vendor).
- AA Coding Index: not yet scored (boards show "—"). SWE-bench Verified / SWE-bench Pro / Vibe Code Bench / LiveCodeBench: no verified public score found.
- Training-cost context: RL for this model cost $2.6M; 7,000+ RL task environments published.

Long context:

- AA-LCR: **86.3%** — **rank 3/408 (100th percentile)**, field leader Kimi K3 88.7 (AA). Best long-context-retrieval standing of any scoreable row found for this model.
- MLCR-AA: **12.8%** (AA, this pass — medical long-context reasoning is a weak spot, but a different task class from AA-LCR retrieval).

### Normalized scores (1–100)

- **Tool use: 88/100.** Held: TB2.1 89.9 and OSWorld-Verified 82.0 clear frontier-class bars (vendor-reported), and this pass adds a documented GDPval-AA Elo of 1,673 plus independent AA rows (AutomationBench-AA 58.6, AA-Briefcase 1512 Elo) — but 1,673 is still short of the 1,750+ frontier ref, TB4.0 34.8 stays well behind closed frontier, key rows remain vendor rather than independent, and Tau3/Claw-Eval are still absent → 88 unchanged.
- **Reasoning: 83/100.** Moved down 3: HLE 49.4 (AA) is still independently frontier-band and AA-LCR 86.3/GPQA ~90 hold the upper anchors, but the AA Intelligence Index on the current v5.0.1 methodology reads **30 vs a 60 frontier** — 30 points under the 60+ ref (the 2026-10-07 pass had 46.3 vs a ~58 frontier, only 14 under), i.e. the model's composite-intelligence standing dropped from near-frontier to the 20–35 mid band; CritPt 26.6 and a negative AA-Omniscience net score confirm the gap.
- **Context window: 97/100.** Held: 1,048,576 tokens (AA lists 1M) with AA-LCR 86.3% at rank 3/408 — near the top of the long-context board (leader 88.7); no ≥98% needle result at 512K+ to justify 98+, but well above the ≥1M tier floor.
- **Multimodal: 90/100.** Held: AA independently confirms text, image, speech and video input (audio-in band 90–100); no headline video-benchmark row found (VisualCoding 72.3 vendor) and output is text only, so top-of-band rather than 95+.
- **Coding: 88/100.** Held: TB2.1 89.9 (vendor), DeepSWE 71.9 (vendor, near the 74% ref), SciCode 60.9 (AA, clears ref), CyberGym 94.0 vendor / 78.6 AA-E2E and CWE-Bench-AA 63.3 add independent cyber-coding evidence; still capped by the unscored AA Coding Index, absent SWE-bench/Vibe rows, TB4.0 34.9, and vendor-harness caveats.
- **Cost efficiency: 97/100.** Held: $0.435/$0.87 sits far below the $0.60/$2.20 ≈ 92 anchor (AA re-verified Nov 2026: 99% cache discount, $0.18/M blended, $0.26 per Intelligence Index task — #5/25 on AA cost), half-price batch, plus MIT self-hosting as an escape hatch; only UltraSpeed/latency tiers cost more.
- **Overall Score: 89/100.** (88+83+97+90+88)/5 = 89.2 → 89 — best open-weight value proposition: rank-3 long-context retrieval, frontier-adjacent agent numbers at ~1/10 the token cost of closed flagships, with the honest ceiling now the v5.0.1 intelligence composite (30 vs 60 frontier) rather than the old 46-vs-58 gap.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: Artificial Analysis model page + LLM leaderboard v5.0.1, BenchLM model page updated 2026-11-07, AA evaluation leaderboards); scores are normalized 1–100 interpretations, not official vendor scores. Disclosure: this report was written by a Xiaomi MiMo-family agent about a sibling Xiaomi model — independent third-party numbers (AA/Vals) are weighted where available.
- Reference URLs:
  - [Artificial Analysis — MiMo-V2.6-Pro model page](https://artificialanalysis.ai/models/mimo-v2-6-pro)
  - [Artificial Analysis — LLM leaderboard (Intelligence Index v5.0.1)](https://artificialanalysis.ai/leaderboards/models)
  - [BenchLM — MiMo-V2.6-Pro (updated 2026-11-07)](https://benchlm.ai/models/mimo-v2-6-pro)
  - [Xiaomi MiMo-V2.6-Pro-RL model card / technical report](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# MiMo-V2.6-Pro — findings by Mimo v2.6 Flash

- Source: Xiaomi/`xiaomi/mimo-v2.6-pro`
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro (Xiaomi MiMo V2.6 Pro)
- **Short description:** Xiaomi's flagship MIT-licensed omnimodal MoE (1.02T total / 42B active), released 2026-09-21/22 alongside MiMo-V2.6-Flash — the #1 open-weights model on the AA Intelligence Index and Xiaomi's "on par with Claude Opus 5 / GPT-5.6 Sol on most agent benchmarks" claim (vendor characterization). **Self-report caveat: the author of this file is the `Mimo v2.6 Flash` reporting agent — a sibling Xiaomi model — so scores carry family-loyalty bias; check the peer `average.md` as corrective.**
- **Provider / access:** Xiaomi MiMo API `mimo-v2.6-pro` (plus `mimo-v2.6-pro-ultraspeed` variant per family docs); OpenRouter (`xiaomi/mimo-v2.6-pro`, $4.35/$8.70 listed there); weights on Hugging Face `XiaomiMiMo/MiMo-V2.6-Pro-RL`. Not on OpenCode Zen (no Free ID).
- **Release / knowledge:** 2026-09-21/22 (HF upload 2026-09-21; llm-stats/official page 2026-09-22). Knowledge cutoff: not published.
- **IDs:** `xiaomi/mimo-v2.6-pro`; no Zen Free ID bound to this slug.
- **Context window:** 1,048,576 tokens input (1M); up to 128K output (family spec card).
- **Modalities:** text, image, video, audio in; text out (omnimodal family); reasoning yes (adaptive effort); tool calls yes; JSON mode not confirmed in sources found.
- **Pricing (as of 2026-09-28):** Xiaomi API **$0.435 / 1M input, $0.0036 cached, $0.87 / 1M output** (cheapestinference / llm-stats round to $0.43/$0.87); AA cost per Index task **$0.13**; OpenRouter routes list $4.35/$8.70 (reseller markup).
- **Architecture:** MoE **1.02T total / 42B active**; **MIT** open weights (`MiMo-V2.6-Pro-RL`, BF16+FP8).

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Xiaomi official announcement table (reproduced by PromptBluePrints) unless noted; rows marked ✅ also confirmed on llm-stats.

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** ✅ <(llm-stats + Xiaomi table; frontier reference ~88+)
- Terminal-Bench 4.0: **34.9** <(Xiaomi table — harder variant)
- OSWorld-Verified: **82.0%** ✅ <(llm-stats + Xiaomi table)
- Toolathlon-Verified: **76.9%** ✅ <(llm-stats + Xiaomi table)
- AutomationBench v1.0.6: **53.1** <(Xiaomi table)
- JobBench: **62.0** <(Xiaomi table)
- GDPval-AA v2.1: **Elo 1,673** <(Xiaomi table; field frontier ~1,700+)
- MiMo Cyber Bench: **81.7%** ✅ <(llm-stats); CyberGym **94.0%** ✅, ExploitGym **17.8**, ExploitBench **47.9**, SEC-Bench Pro **66.3** <(llm-stats / Xiaomi table)
- Agents' Last Exam: **31.6** <(Xiaomi table)
- Tau3 / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46, #1 open-weights model** <(AA leaderboard / Xiaomi announcement; open-weights top 3: MiMo-V2.6-Pro 46, GLM-5.3 45, Kimi K3 44; overall leaders Claude Opus 5.5 at 58)>
- GPQA Diamond / HLE / MMLU-Pro / MRCR for Pro: **no verified public score found** (AA component rows not extracted this pass)

Coding:

- DeepSWE v1.1: **71.9** <(Xiaomi table; frontier reference 74+ — field: Opus 5 74.0, GPT-5.6 Sol 73.0)>
- MiMo Code Bench: **63.2** <(Xiaomi table; Opus 5 68.6)>
- ProgramBench: **26.5** <(Xiaomi table; Opus 5 37.0)>
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**

Long context:

- 1,048,576-token window documented (family spec / AA); MRCR / RULER retrieval: **no verified public score found**

Multimodal:

- Omnimodal inputs (text/image/video/audio) per family positioning (cheapestinference/llm-stats); AA validated text+image in.
- MMMU / MMMU-Pro / MathVision / MiMo Visual Coding value: **72.3** <(Xiaomi table — visual-agent row); MMMU family scores otherwise **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 91/100.** Terminal-Bench 2.1 89.9 clears the ~88 frontier reference, backed by OSWorld 82.0, Toolathlon 76.9, GDPval-AA Elo 1,673 and CyberGym 94.0; capped by AutomationBench 53.1 being merely mid-band and no Tau3 number.
- **Reasoning: 78/100.** The AA Intelligence Index 46 (#1 open-weights, ahead of GLM-5.3's 45 and Kimi K3's 44) sits well above the 20–35 mid band but below the 60+ frontier reference; capped further by GPQA/HLE component values not being extracted for Pro this pass.
- **Context window: 95/100.** 1,048,576 tokens is in the ≥1M tier (95–100); no retrieval measurement published, so not 100.
- **Multimodal: 92/100.** Native omnimodal input incl. audio and video (90–100 band); capped because only text+image is independently validated by AA and most multimodal benchmark rows are unpublished.
- **Coding: 86/100.** DeepSWE 71.9 (just under the 74 frontier), Terminal-Bench 2.1 89.9 (frontier) and MiMo Code Bench 63.2 are near-frontier, but SWE-bench Verified, LiveCodeBench and SciCode values are missing, which caps the score below 90.
- **Cost efficiency: 95/100.** $0.435/$0.87 with $0.0036 cached lands between the ~$0.10/$0.20 ≈ 97–99 and ~$0.60/$2.20 ≈ 92 anchors; no Zen Free ID, scored on Xiaomi API pricing.
- **Overall Score: 88/100.** Mean of the five quality dims (91 + 78 + 95 + 92 + 86) / 5 = 88.4 → 88; best fit: top open-weights frontier all-rounder for long-horizon agentic work — check `average.md` peer reports since this file is a sibling-model self-report.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-28
- Method: public internet research (Xiaomi announcement table via PromptBluePrints, Artificial Analysis leaderboard/model data, llm-stats comparison pages, CheapestInference spec/pricing review, TheModelGap provenance notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.


