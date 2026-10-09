# MiMo-V2.6-Flash — findings by MiMo 2.6 Flash

- Source: Xiaomi / MiMo (`mimo-v2.6-flash`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash
- **Short description:** Xiaomi's efficiency-tier entry in the MiMo-V2.6 series (released 2026-09-21/22 alongside V2.6-Pro; **MIT-licensed open weights**) — a 309B-total/15B-active sparse MoE (256 routed experts, 8 active, 48 layers = 39 sliding-window + 9 global attention) with a 681M vision encoder, dedicated audio tokenizer, and MTP speculative decoding (vendor claim: 2.5–3.7× faster than standard decoding). Native fully multimodal (text/image/video/audio in). Trained with a publicly streamed RL run (2026-09-15 start, live dashboard at mimo.xiaomi.com/rl; final RL stage ~6 days, ~$850K, 30 steps, ~750K trajectories shared with Pro) — a transparency practice most closed labs don't match. Positioned for high-frequency/large-scale professional workloads; per opencode usage data it ranked **#4 by tokens** (22T tokens, 416K unique users, 94.1% cache-hit rate, 77.8% weekly retention).
- **Provider / access:** Xiaomi MiMo Open Platform (OpenAI + Anthropic protocol compatible, all-lowercase id), OpenRouter (`xiaomi/mimo-v2.6-flash`, first-party endpoint), Vercel AI Gateway, opencode; Token Plan subscriptions; MiMo Desktop Client; self-host from Hugging Face (`XiaomiMiMo/MiMo-V2.6-Flash` collection, + RL envs/tech report).
- **Release / knowledge:** released 2026-09-22 (weights + tech report open-sourced with 7K+ RL task environments); API model updated 2026-09-25 (reduced repeated tool calls); knowledge cutoff not published.
- **IDs:** `mimo-v2.6-flash` (native, lowercase) / `xiaomi/mimo-v2.6-flash` (gateways).
- **Context window:** **1,048,576 tokens** native; max output 131,072 (128K).
- **Modalities:** **text, images, video, audio in; text out**; reasoning yes (deep-thinking mode); tool calls yes (JSON mode, web search, agent workflows); structured output.
- **Pricing (as of 2026-10-07):** **$0.14 in (cache miss) / $0.28 out** per 1M, cache hit **$0.0028** (98% discount; ¥1/¥2 CNY; opencode lists $0.16/$0.32 gateway-inclusive); same price as V2.5 series (intelligence up, price flat). Weights free under MIT — self-host FP8 ≈ 173 GB / 65 shards, needs multi-GPU (vLLM TP4/TP8, SGLang TP8–16).
- **Architecture:** sparse MoE as above; training cost for Flash's RL stage reported at ~$850K.

> **Affiliation flag:** this report is written by MiMo 2.6 Flash — a Xiaomi model evaluating a Xiaomi model (same vendor). Treat scores and framing with that self-affiliation in mind.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.6** (Xiaomi launch table; BenchmarkList: 93rd pct, rank 15/194, field leader Fable 5.1 91.4) — **clears the 85% ref, at the 88-frontier band's edge**
- AutomationBench v1.0.6: **52.3** (vendor table — above Opus 5's 50.3, Fable 5's 46.2, GPT-5.6 Sol's 45.8)
- OSWorld-Verified: **80.8** (77th pct, rank 17/70; leader Kimi K3 84.8)
- Toolathlon-Verified: 73.6; JobBench: **61.2** (8th/48, leader 67.8); Agents' Last Exam: Pass **27.6** (leader GPT-6 Astra 59.3); AA-Briefcase: **1495 Elo** (21/145, 86th pct)
- Terminal-Bench 4.0: **28.8** (17/29; leader Opus 5.5 66.4 — a clear weak spot); ProgramBench 26.0 (31/37)
- Security-agentic (Xiaomi custom): CyberGym 95.1; MiMo Cyber Bench 77.2; SEC-Bench Pro 47.5; ExploitBench 25.3; ExploitGym 6 (closed leaders 70–78 on ExploitBench)
- GDPval / MCP-Atlas: no public score found

Reasoning / knowledge:

- Humanity's Last Exam: **35.1** (BenchmarkList, 88th pct, rank 58/478; leader Opus 5.5 67.7) — **under the 40%+ ref**
- Artificial Analysis Intelligence Index: **37.9** (v4.3.2, independent, 85th pct; leader Fable 5.1 65.7) — **under the 60+ ref** (Pro sibling is 46; Flash is not Pro's score)
- GPQA Diamond / MMLU / ARC-AGI: **not published** at release (HokAI explicitly notes no standard third-party reasoning suite on the model card)
- AIIQ composite: 122 (45/147, 70th pct, independent)

Coding (Xiaomi-run unless noted):

- DeepSWE v1.1: **67.9** table / **65.7** launch post (documented inconsistency) — **under the 74%+ ref** (leader Opus 5.5 74.2); RL run improved it ~17 points from 48.8
- Terminal-Bench 2.1: 87.6 as above; Terminal-Bench 4.0: 28.8
- SciCode: **51.3** (BenchmarkList, 85th pct; leader Opus 5.5 66.9) — **under the 55% ref**
- MiMo Code Bench 61.2 (custom); ProgramBench 26.0; MiMo VisualCoding 71.5 (custom)
- SWE-bench Verified: not on Xiaomi's card; RankLLMs cites **67.2** (attribution uncertain — possibly conflated with the distill-9B RL result of 66.2)
- Hands-on independent (ComputingForGeeks, 2026-09-25, same DevOps prompts as GPT-6 Sol): 0/3 K8s manifests served HTTP 200, 2/3 bash correct, 2/3 tofu validate — linters passed but runtime checks failed twice of three; "fine for drafts and not for merges"

Long context:

- **AA-LCR: 74.3%** (independent, 78th pct, rank 92/408; leader Kimi K3 88.7) — real retrieval evidence, but a 14-point gap to the field leader; no needle/MRCR at ≥512K found

Multimodal:

- Native full-modality input (text/image/video/audio via 681M vision encoder + audio tokenizer); MiMo VisualCoding 71.5 (custom); no MMMU/OMNI-style third-party vision rows found

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 87.6 at the 93rd percentile, AutomationBench 52.3 beating the closed field in Xiaomi's table, OSWorld 80.8, JobBench 61.2 (top-8), AA-Briefcase 86th pct; held down by TB4.0 28.8 (mid-pack), ALE pass 27.6 (half the leader), ProgramBench 26.0, no GDPval/MCP-Atlas, and vendor-only harnesses flagged by reviewers.
- **Reasoning: 77/100.** HLE 35.1 (88th pct) and AA Index 37.9 (85th pct) are respectable mid-tier independent readings but **miss both headline refs** (40+, 60+); no GPQA/ARC/MMLU row exists; AIIQ 122 (70th pct) supports the band.
- **Context window: 95/100.** 1M native clears the ≥1M tier floor; AA-LCR 74.3% proves real retrieval but sits 14 points below the leader and no ≥512K needle row exists → floor, not top.
- **Multimodal: 93/100.** **Audio in** (plus video + image) puts it in the 90–100 band per methodology — one of the few full-modality entries in this comparison; discounted slightly because third-party vision/audio benchmark rows are absent (only the custom VisualCoding 71.5).
- **Coding: 84/100.** TB2.1 87.6 clears the 85% ref at the frontier band's edge and RL lifted DeepSWE ~17 points; but DeepSWE 67.9 and SciCode 51.3 both miss their refs, TB4.0 28.8 and ProgramBench 26.0 are mid/lower-pack, SWE-V evidence is uncertain, and the independent DevOps runtime test failed 2-of-3 checks.
- **Cost efficiency: 97/100.** $0.14/$0.28 with 98%-off cache hits and MIT weights — the cheapest usable frontier-adjacent tier in this comparison (API avg cost per opencode session: $0.0028); only the multi-GPU self-host footprint (173 GB) and absence of a documented free tier keep it below 98.
- **Overall Score: 87/100.** (86+77+95+93+84)/5 = 87.0 → 87 — a full-modality 1M open model with TB2.1-at-frontier agentic coding at pennies per million tokens, honest about its gaps: mid-tier independent reasoning (AA 37.9), SciCode/DeepSWE refs missed, and thin third-party verification of its custom tables.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- **Affiliation:** reporter and subject are both Xiaomi MiMo models — self-evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Method: fresh public internet research (mimo.mi.com model page + V2.6 release post, opencode data page, OpenTools, HokAI, RankLLMs, BenchmarkList, ComputingForGeeks independent DevOps test); sources dated 2026-09-21 through 2026-10-07.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

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


