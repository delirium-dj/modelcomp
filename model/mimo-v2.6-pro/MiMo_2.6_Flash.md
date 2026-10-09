# MiMo-V2.6-Pro — findings by MiMo 2.6 Flash

- Source: Xiaomi MiMo (`mimo-v2.6-pro`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro (MiMo V2.6 Pro / `MiMo-V2.6-Pro-RL`)
- **Short description:** Xiaomi's flagship open-weight reasoning model (released 2026-09-21/22, MIT license) — 1.02T-parameter sparse MoE (42B active; 70 layers, 384 routed experts, 8 active/token), natively omni-modal, trained with 27T text + 3T multimodal tokens then agent-trajectory mid-training and one mixed RL run (coding/general/visual/cyber). Top open-weights score on AA Intelligence Index at release (46); RL environments + training code published; RL run cost disclosed at $2.6M. Lead researcher Fuli Luo (ex-DeepSeek).
- **Provider / access:** mimo.mi.com console (prepaid + Token Plan subscriptions from $6/mo), OpenRouter, DeepInfra, NovitaAI, GMICloud; self-host (BF16/FP8/INT8). Sibling tiers: MiMo-V2.6-Flash ($0.14/$0.28) and MiMo-V2.6-Pro-UltraSpeed (same checkpoint, 10× price, faster decode).
- **Release / knowledge:** released 2026-09-21 (some trackers 09-22); API updated in place 2026-09-25 to curb repeated tool calls; knowledge cutoff undisclosed.
- **IDs:** `xiaomi/mimo-v2.6-pro` (gateway routes) / `mimo-v2.6-pro` (native).
- **Context window:** 1,048,576 tokens; max output 131,072 (128K).
- **Modalities:** text, images, video, audio in; text out; reasoning yes (on by default); tool calls yes (function calling, web search, structured outputs, context caching); UltraSpeed mode 20× faster at 10× cost.
- **Pricing (as of 2026-10-07):** **$0.435 in / $0.87 out** per 1M; cache-hit input **$0.0036** (99% off); batch 50% off; UltraSpeed $4.35/$8.70 (cache $0.036); subscriptions $6–$100/mo. Same rate as V2.5 generation. Paid (open weights free to self-host under MIT).
- **Architecture:** sparse MoE, 1.02T total / 42B active, hidden 6144, 5-layer speculative decoder; 309B/15B sibling Flash.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.9** (Xiaomi vendor — clears the 88% frontier ref). Terminal-Bench 4.0: **34.8–34.9** (AA independent + TensorFeed) — below closed-frontier TB4 rows.
- AutomationBench: **53.1** (vendor — Xiaomi's chart puts it ahead of the Claude Opus 5 row). OSWorld-Verified: **82.0** (vendor; distinct task set from OSWorld 2.0).
- τ-bench: **80.0** (provider-reported via OpenRouter). CyberBench v1.1: **72.86%** (Vals — rank 3/9, ahead of Muse Spark 1.3 Max 72.74 and Claude Fable 5.1 70.42).
- Design Arena: Agents Arena Webapps 1283, UI Component 1345, DataViz 1343, Code 1322, Website 1314, 3D 1340 Elo.
- GDPval-AA: AA lists 59.3% (percent-scale row, non-comparable to Elo boards) → no comparable GDPval Elo found. Tau3 / Claw-Eval: no verified public score found.

Reasoning / knowledge:

- HLE: **49.4%** (AA independent — clears the 40%+ ref comfortably).
- GPQA Diamond: **~90.0%** (Xiaomi provider run via OpenRouter; DeepInfra 89.3, Novita 90.2 — provider-run, not an AA/first-party row; borderline on the 90%+ ref).
- AA Intelligence Index v4.3.2: **46.3** (#1 open weights at release; ties Grok 4.7 high; behind Fable 5.1 65.7 and other proprietary leaders — well below the 60+ ref).
- CritPt: **26.6%** (AA, #10/28). AA-Omniscience: accuracy 34.8, non-hallucination 59.4 (AA). Vals Index: **55.20%** (TensorFeed, 2026-09-30, #12/41) / **59.47%** (DeepLearning.AI The Batch) — range flagged.
- ARC-AGI / FrontierMath: no verified public score found.

Coding:

- DeepSWE v1.1: **71.9** (vendor — strong but under the 74% frontier ref).
- SciCode: **60.9%** (AA independent — clears the 55%+ ref). CyberGym: **94.0** (vendor, cybersecurity). MiMo VisualCoding: 72.3 (vendor).
- AA Coding Index: not yet scored (boards show "—"). SWE-bench Verified / SWE-bench Pro / Vibe Code Bench / LiveCodeBench: no verified public score found.
- Training-cost context: RL for this model cost $2.6M; 7,000+ RL task environments published.

Long context:

- AA-LCR: **86.3%** — **rank 3/408 (100th percentile)**, field leader Kimi K3 88.7 (AA, 2026-10-03). Best long-context-retrieval standing of any scoreable row found for this model.

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 89.9 and OSWorld-Verified 82.0 clear frontier-class bars (vendor-reported), AutomationBench 53.1 and τ-bench 80 are solid, CyberBench #3 beats Fable 5.1 — but TB4.0 34.8 is well behind closed frontier, there is no GDPval Elo, and key rows are vendor rather than independent → 88.
- **Reasoning: 86/100.** HLE 49.4 (AA) is independently frontier-band; GPQA ~90 is borderline and provider-run; AA Index 46.3 is 14 points under the 60+ ref — the clearest capability gap to proprietary leaders.
- **Context window: 97/100.** 1,048,576 tokens with AA-LCR 86.3% at rank 3/408 — near the top of the long-context board (leader 88.7); no ≥98% needle result at 512K+ to justify 98+, but well above the ≥1M tier floor.
- **Multimodal: 90/100.** Text, image, video, and audio in — audio-in band (90–100); video/audio understanding claimed in training but no headline video-benchmark row found (VisualCoding 72.3 vendor), so top-of-band rather than 95+.
- **Coding: 88/100.** TB2.1 89.9 (vendor), DeepSWE 71.9 (vendor, near the 74% ref), SciCode 60.9 (AA, clears ref), CyberGym 94.0; held at 88 by the unscored AA Coding Index, absent SWE-bench/Vibe rows, TB4.0 34.9, and vendor-harness caveats (Xiaomi's own comparability warning).
- **Cost efficiency: 97/100.** $0.435/$0.87 sits far below the $0.60/$2.20 ≈ 92 anchor — roughly a tenth of Opus-class input and a twenty-third of output; 99%-off cache reads, half-price batch, $0.13/M effective agent-loop input, plus MIT self-hosting as an escape hatch. Only UltraSpeed/latency tiers cost more.
- **Overall Score: 90/100.** (88+86+97+90+88)/5 = 89.8 → 90 — the best open-weight value proposition found: top open AA Index, rank-3 long-context retrieval, and frontier-adjacent agent numbers at ~1/10 the token cost of closed flagships; intelligence-composite gap to Fable 5.1-class (46 vs 66) is the honest ceiling.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (mimo.mi.com model card, OpenRouter, DeepLearning.AI The Batch, TensorFeed, BenchmarkList, LLM Stats, Command Code, HokAI); scores are normalized 1–100 interpretations, not official vendor scores. Disclosure: this report was written by a Xiaomi MiMo-family agent about a sibling Xiaomi model — independent third-party numbers (AA/Vals) are weighted where available.
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


