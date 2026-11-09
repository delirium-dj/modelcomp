# MiMo-V2.6-Flash — findings by MiMo 2.6 Flash

- Source: Xiaomi / MiMo (`mimo-v2.6-flash`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 87). Fresh sources this pass: BenchLM snapshot 2026-11-07
> and the Artificial Analysis model page. Changes: Multimodal 93→91 (first
> third-party vision row — AA-MMMU-Pro 73.1% — lands mid-pack, ~9–13 pts below
> image-band peers, so the audio-in band's upper half isn't supported); Overall
> 87→86.6. Tool use 86, Reasoning 77, Context 95, Coding 84 and Cost efficiency
> 97 held.

## Model card

- **Name:** MiMo-V2.6-Flash
- **Short description:** Xiaomi's efficiency-tier entry in the MiMo-V2.6 series (released 2026-09-21/22 alongside V2.6-Pro; **MIT-licensed open weights**) — a 309B-total/15B-active sparse MoE (256 routed experts, 8 active, 48 layers = 39 sliding-window + 9 global attention) with a 681M vision encoder, dedicated audio tokenizer, and MTP speculative decoding (vendor claim: 2.5–3.7× faster than standard decoding). Native fully multimodal (text/image/video/audio in). Trained with a publicly streamed RL run (2026-09-15 start, live dashboard at mimo.xiaomi.com/rl; final RL stage ~6 days, ~$850K, 30 steps, ~750K trajectories shared with Pro) — a transparency practice most closed labs don't match. Positioned for high-frequency/large-scale professional workloads; per opencode usage data it ranked **#4 by tokens** (22T tokens, 416K unique users, 94.1% cache-hit rate, 77.8% weekly retention).
- **Provider / access:** Xiaomi MiMo Open Platform (OpenAI + Anthropic protocol compatible, all-lowercase id), OpenRouter (`xiaomi/mimo-v2.6-flash`, first-party endpoint), Vercel AI Gateway, opencode; Token Plan subscriptions; MiMo Desktop Client; self-host from Hugging Face (`XiaomiMiMo/MiMo-V2.6-Flash` collection, + RL envs/tech report). AA lists 4 API providers.
- **Release / knowledge:** released 2026-09-21/22 (AA: September 21, 2026); API model updated 2026-09-25 (reduced repeated tool calls); knowledge cutoff not published.
- **IDs:** `mimo-v2.6-flash` (native, lowercase) / `xiaomi/mimo-v2.6-flash` (gateways).
- **Context window:** **1,048,576 tokens** native (AA confirms 1M, 2026-11-08); max output 131,072 (128K).
- **Modalities:** **text, images, video, audio in; text out**; reasoning yes (deep-thinking mode; AA tracks the reasoning version); tool calls yes (JSON mode, web search, agent workflows); structured output. AA's independent modality validation lists text + image in, text out.
- **Pricing (as of 2026-11-08):** **$0.14 in / $0.28 out** per 1M (AA-confirmed), cache hit **$0.0028** (98% discount), blended ≈ $0.058/M on 7:2:1; **$0.13 per AA Intelligence-Index task (AA cost rank #3/25)**; ¥1/¥2 CNY; opencode lists $0.16/$0.32 gateway-inclusive. Weights free under MIT — self-host FP8 ≈ 173 GB / 65 shards, needs multi-GPU (vLLM TP4/TP8, SGLang TP8–16).
- **Architecture:** sparse MoE 309B/15B active (AA-confirmed); training cost for Flash's RL stage reported at ~$850K.

> **Affiliation flag:** this report is written by MiMo 2.6 Flash — a Xiaomi model evaluating a Xiaomi model (same vendor). Treat scores and framing with that self-affiliation in mind.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.6** (Xiaomi tech report, re-listed on BenchLM 2026-11-07; BenchmarkList: 93rd pct, rank 15/194, field leader Fable 5.1 91.4) — **clears the 85% ref, at the 88-frontier band's edge**
- AutomationBench v1.0.6: **52.3** (vendor table — above Opus 5's 50.3, Fable 5's 46.2, GPT-5.6 Sol's 45.8)
- OSWorld-Verified: **80.8** (77th pct, rank 17/70; leader Kimi K3 84.8)
- Toolathlon-Verified: 73.6; JobBench: **61.2** (8th/48, leader 67.8); Agents' Last Exam: Pass **27.6** (leader GPT-6 Astra 59.3); **GDPval-AA normalized: 55.4%** (AA via BenchLM — NEW row this pass, replacing "GDPval: no public score found"; normalized %, not an Elo, so the 1750-Elo frontier ref doesn't map directly)
- Terminal-Bench 4.0: **28.8** (17/29; leader Opus 5.5 66.4 — a clear weak spot); ProgramBench 26.0 (31/37)
- Security-agentic (Xiaomi custom): CyberGym 95.1; MiMo Cyber Bench 77.2; SEC-Bench Pro 47.5; ExploitBench 25.3; ExploitGym 6 (closed leaders 70–78 on ExploitBench)
- MCP-Atlas / Tau3 / Claw-Eval: no verified public score found.

Reasoning / knowledge:

- Humanity's Last Exam: **35.1** (BenchmarkList/AA, 88th pct, rank 58/478; leader Opus 5.5 67.7) — **under the 40%+ ref**
- Artificial Analysis Intelligence Index: **27 on current v5.0.1** (AA model page 2026-11-08, #10/26 in class, above its 23 median) — the index was rescaled since the previous report (v4.3.2 showed 37.9); not comparable across versions, still **under the 60+ ref** on either scale.
- **AA-Omniscience (now published as exact rows): accuracy 27.2%, hallucination rate 52.2%, net score −10.8** — NEW this pass (confirms a knowledge-reliability weakness).
- GPQA Diamond / MMLU / ARC-AGI: **not published** (no standard third-party reasoning suite on the model card).
- AIIQ composite: 122 (45/147, 70th pct, independent). CritPt: 12.0 (AA).

Coding (Xiaomi-run unless noted):

- DeepSWE v1.1: **67.9** table / **65.7** launch post (documented inconsistency) — **under the 74%+ ref** (leader Opus 5.5 74.2); RL run improved it ~17 points from 48.8
- Terminal-Bench 2.1: 87.6 as above; Terminal-Bench 4.0: 28.8
- SciCode: **51.3** (AA-SciCode, independent; BenchmarkList 85th pct; leader Opus 5.5 66.9) — **under the 55% ref**
- MiMo Code Bench 61.2 (custom); ProgramBench 26.0; MiMo VisualCoding 71.5 (custom)
- SWE-bench Verified: not on Xiaomi's card; RankLLMs cites **67.2** (attribution uncertain — possibly conflated with the distill-9B RL result of 66.2)
- Hands-on independent (ComputingForGeeks, 2026-09-25, same DevOps prompts as GPT-6 Sol): 0/3 K8s manifests served HTTP 200, 2/3 bash correct, 2/3 tofu validate — "fine for drafts and not for merges".

Long context:

- **AA-LCR: 74.3%** (independent, 78th pct, rank 92/408; leader Kimi K3 88.7) — real retrieval evidence, but a 14-point gap to the field leader; no needle/MRCR at ≥512K found (re-confirmed absent on BenchLM 2026-11-07).

Multimodal:

- **AA-MMMU-Pro: 73.1%** (Artificial Analysis, independent — NEW this pass; was "no third-party vision rows found"). For the same row: Qwen3.8-Max 82.3, GPT-6 Sol 82.9, GLM-5.3-Flash 86 — Flash sits ~9–13 points below those image-band peers.
- Native full-modality input (text/image/video/audio via 681M vision encoder + audio tokenizer); MiMo VisualCoding 71.5 (custom). No audio/video-out or third-party video/audio benchmark rows found.

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 87.6 at the 93rd percentile, AutomationBench 52.3 beating the closed field in Xiaomi's table, OSWorld 80.8, JobBench 61.2 (top-8), AA-Briefcase 86th pct; held down by TB4.0 28.8 (mid-pack), ALE pass 27.6 (half the leader), ProgramBench 26.0, no MCP-Atlas/Tau3/Claw, and vendor-only harnesses flagged by reviewers — held at 86 (the new GDPval-AA normalized 55.4% row is a %, not an Elo, so it cannot clear the 1750 frontier ref either way).
- **Reasoning: 77/100.** HLE 35.1 (88th pct) and the AA Intelligence Index reading are respectable mid-tier but **miss both headline refs** (40+, 60+); no GPQA/ARC/MMLU row exists; AIIQ 122 (70th pct) supports the band. Held at 77: the new AA v5.0.1 index value (27, above its class median) and the newly published Omniscience rows (accuracy 27.2%, hallucination 52.2%, net −10.8) confirm rather than change the mid-tier placement.
- **Context window: 95/100.** 1M native clears the ≥1M tier floor; AA-LCR 74.3% proves real retrieval but sits 14 points below the leader and no ≥512K needle row exists → floor, not top (held).
- **Multimodal: 91/100.** **Audio in** (plus video + image) keeps it in the 90–100 band per methodology — one of the few full-modality entries in this comparison; moved 93→91 because the first third-party vision row (**AA-MMMU-Pro 73.1%**) lands mid-pack, ~9–13 points below image-band peers (Qwen3.8-Max 82.3, GPT-6 Sol 82.9, GLM-5.3-Flash 86), and no third-party video/audio row exists to support the band's upper half.
- **Coding: 84/100.** TB2.1 87.6 clears the 85% ref at the frontier band's edge and RL lifted DeepSWE ~17 points; but DeepSWE 67.9 and SciCode 51.3 both miss their refs, TB4.0 28.8 and ProgramBench 26.0 are mid/lower-pack, SWE-V evidence is uncertain, and the independent DevOps runtime test failed 2-of-3 checks — held at 84.
- **Cost efficiency: 97/100.** $0.14/$0.28 with 98%-off cache hits and MIT weights — the cheapest usable frontier-adjacent tier in this comparison (AA: **$0.13 per Index task, cost rank #3/25**, blended $0.058/M); only the multi-GPU self-host footprint (173 GB), absence of a documented free tier, and very slow serving (AA: 62.2 min/Index task, 35 tok/s) keep it below 98 — pricing unchanged → held at 97.
- **Overall Score: 86.6/100.** (86+77+95+91+84)/5 = 86.6 → a full-modality 1M open model with TB2.1-at-frontier agentic coding at pennies per million tokens, honest about its gaps: mid-tier independent reasoning (AA HLE 35.1, index under 60), mid-pack third-party vision (MMMU-Pro 73.1), SciCode/DeepSWE refs missed, and thin independent verification of its custom tables.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- **Affiliation:** reporter and subject are both Xiaomi MiMo models — self-evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Method: second-pass enrichment re-research (public internet research: BenchLM 2026-11-07 snapshot, Artificial Analysis model page + MMMU-Pro/Omniscience/GDPval rows, Xiaomi V2.6 tech report listing); sources dated 2026-09-21 through 2026-11-08.
- Reference URLs:
  - [BenchLM — MiMo-V2.6-Flash (updated 2026-11-07)](https://benchlm.ai/models/mimo-v2-6-flash)
  - [Artificial Analysis — MiMo-V2.6-Flash](https://artificialanalysis.ai/models/mimo-v2-6-flash)
  - [Hugging Face — Xiaomi MiMo-V2.6-Flash-RL model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block). Preserved verbatim during the 2026-11-08 second-pass enrichment (archive not re-scored).

# MiMo-V2.6-Flash — findings by Mimo v2.6 Flash

- Source: Xiaomi/`xiaomi/mimo-v2.6-flash`
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash (Xiaomi MiMo V2.6 Flash)
- **Short description:** Xiaomi's MIT-licensed omnimodal sparse-MoE workhorse (309B total / 15B active) released Sept 2026 as the cost-efficient sibling of MiMo-V2.6-Pro, aimed at long-horizon agentic coding, visual, general and research tasks. **Self-report caveat: the author of this file is the `Mimo v2.6 Flash` reporting agent — i.e. this very model — so the scores below are self-attribution-biased; treat the peer `average.md` as the corrective check.** Sibling entry: `../mimo-v2.6-free/` is the OpenCode Zen free tier of the same weights (do not double-count as a different model).
- **Provider / access:** Xiaomi MiMo API `mimo-v2.6-flash` (Chat Completions); aggregated on OpenRouter (`xiaomi/mimo-v2.6-flash`, avg $0.12/$1.28, providers vary). **No paid OpenCode Zen ID for this slug** (`noFreeId`); Zen's `opencode/mimo-v2-6-free` free tier lives in the sibling folder.
- **Release / knowledge:** 2026-09-21/22 (OpenRouter lists Sep 21, 2026; llm-stats Sep 22, 2026). Knowledge cutoff: not published in sources found.
- **IDs:** `xiaomi/mimo-v2.6-flash` (Xiaomi API, all-lowercase); no Zen Free ID bound to this slug.
- **Context window:** 1,048,576 tokens input (1.0M); max output not published (llm-stats output row "—"); technical report: `XiaomiMiMo/MiMo-V2.6-Flash-RL` repo (`MiMo_V2_6_technical_report.pdf`).
- **Modalities:** text, image, video, audio in; text out; reasoning yes (hybrid thinking; Artificial Analysis tracks the reasoning variant); tool calls yes (agentic-workflow positioning); JSON mode: not confirmed in sources found.
- **Pricing (as of 2026-09-28):** Xiaomi API **$0.14 / 1M input, $0.0028 / 1M cached input (98% cache discount), $0.28 / 1M output** (llm-stats, Artificial Analysis); OpenRouter blended avg $0.12/$1.28; AA cost rank **#6/116** at **$0.06 per Intelligence-Index task**. No $0 tier under this slug — free inference is the sibling `mimo-v2.6-free` entry.
- **Architecture:** sparse MoE **309B total / 15B active** per token, hybrid attention (OpenRouter/Xiaomi description); **MIT open weights** (llm-stats; Hugging Face `XiaomiMiMo/MiMo-V2.6-Flash`).

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = "no verified public score found"; llm-stats tracks 16 individual rows for this model, values not all extractable this pass.

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** <(llm-stats; Xiaomi harness; sibling Pro 89.9)>
- Terminal-Bench 4.0: **no verified public score found** (tracked row on llm-stats; value not extracted this pass)
- OSWorld-Verified: **80.8%** <(llm-stats)>
- Toolathlon-Verified: **73.6%** <(llm-stats; Pro 76.9)>
- MiMo Cyber Bench: **77.2%** <(llm-stats)>
- CyberGym: **95.1%** <(llm-stats — the one shared row Flash beats Pro on; Pro 94.0)>
- GDPval-AA: **55.0%** <(Artificial Analysis GDPval-AA v2.1 via OpenRouter; Index component)>
- AutomationBench v1.0.6 / JobBench / Program Bench / SEC-bench Pro / ExploitBench / ExploitGym / Agents' Last Exam / MiMo Coding Bench / MiMo Visual Coding / DeepSWE 1.1: **no verified public score found** (rows tracked on llm-stats vs Pro; individual values not extracted this pass)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **37.9 (displayed 38), #8 / 116** <(AA v4.3.2: AA-Briefcase, GDPval-AA, AutomationBench, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR — Artificial Analysis, via OpenRouter)>
- HLE: **35.1%** <(Artificial Analysis via OpenRouter)>
- AA-LCR v1.1: **74.3%** <(Artificial Analysis via OpenRouter)>
- CritPt: **12.0%** <(Artificial Analysis via OpenRouter)>
- AA-Omniscience Accuracy / Non-Hallucination Rate: **27.0% / 45.6%** <(Artificial Analysis via OpenRouter)>
- GPQA Diamond: **no verified public score found**
- MMLU-Pro / AIME: **no verified public score found**
- BenchLM overall: **no verified public score found** (BenchLM tracks the model; row not retrieved this pass)
- llm-stats Reasoning index: **43.1, #45 (5 evals)** — composite TrueSkill-style rating, not a raw %

Coding:

- SciCode (AA): **51.3%** <(Artificial Analysis via OpenRouter)>
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE 1.1: **no verified public score found** (shared llm-stats row; value not extracted)
- llm-stats Coding index: **36.3, #22 (9 evals)** — composite rating, not a raw %

Long context:

- 1,048,576-token window documented (llm-stats / models.dev); MRCR / RULER / GraphWalks retrieval quality: **no verified public score found**

Multimodal:

- Omnimodal inputs (text/image/video/audio) per llm-stats modality row + Xiaomi "omnimodal" positioning; Artificial Analysis validated text+image in.
- MMMU / MathVision / CharXiv / MiMo Visual Coding values: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 87.6 sits just under the ~88 frontier reference, backed by OSWorld-Verified 80.8, Toolathlon 73.6 and CyberGym 95.1; capped by the missing Tau3/GDPval-style numbers and the composite tool-use rank (#29 of the llm-stats leaderboard).
- **Reasoning: 72/100.** HLE 35.1 approaches the 40%+ frontier band, AA-LCR 74.3 is well above the mid band, and the AA Intelligence Index 37.9 (#8/116) tops the 20–35 mid tier; capped by GPQA/MMLU-Pro being absent, CritPt only 12.0, and Index raw value still far below the 60+ frontier reference.
- **Context window: 95/100.** 1,048,576 tokens lands in the ≥1M tier (95–100); not 100 because no long-context retrieval measurement (MRCR/RULER) has been published for this checkpoint.
- **Multimodal: 92/100.** Native omnimodal input including audio and video puts it in the 90–100 band (+audio in); capped because only text+image input is independently validated (AA) and no multimodal benchmark value (MMMU/CharXiv) was retrievable.
- **Coding: 82/100.** Terminal-Bench 2.1 87.6 is frontier-adjacent and SciCode 51.3 nearly reaches the 55%+ frontier reference, but SWE-bench Verified, LiveCodeBench and DeepSWE 1.1 values were not found, which caps the score below the 90–100 tier.
- **Cost efficiency: 97/100.** $0.14/$0.28 per 1M with a 98% cache discount ($0.0028) and AA cost rank #6/116 ($0.06 per Index task) maps to the ~$0.10/$0.20 ≈ 97–99 methodology band; scored on paid Xiaomi pricing (no Zen Free ID for this slug).
- **Overall Score: 85/100.** Mean of the five quality dims (85 + 72 + 95 + 92 + 82) / 5 = 85.2 → 85; best fit: cheap, always-on long-horizon agentic coding driver with vision/audio input — cross-check `average.md` peer reports since this file is self-reported.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-28
- Method: public internet research (llm-stats model + comparison pages, Artificial Analysis model page, OpenRouter model page, models.dev catalogue); scores are normalized 1–100 interpretations, not official vendor scores. Self-report: this reporting agent IS the model being scored.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
