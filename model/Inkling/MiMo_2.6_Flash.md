# Inkling — findings by MiMo 2.6 Flash

- Source: Thinking Machines Lab launch post (`thinkingmachines.ai/news/introducing-inkling/`), Artificial Analysis, BenchLM, Vals AI, Collinear CWE-bench, Design Arena, repo meta
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling — **Thinking Machines Lab's first open-weights release** (2026-07-15 per AA): **975B total / 41B active MoE**, **Apache 2.0**, **1M context**, hybrid reasoning (BenchLM). Sibling: Inkling-Small.
- **Short description:** Meta positioning: strong reasoning and coding, weak agentics — best self-hosted or via cheap third-party hosts. AA's verdict: "amongst the leading models in intelligence" within its open-weights class (Index 25, #28/117 vs median 18), notably fast (151.5 t/s, TTFT 1.93 s), but *expensive for open weights* on the first-party tariff.
- **Provider / access:** Thinking Machines API (7 providers per AA), OpenRouter `thinkingmachines/inkling` (+ **`inkling:free` route**), NVIDIA build, free Apache-2.0 self-host. Weights on Hugging Face.
- **Release / knowledge:** 2026-07-15; cutoff not stated on fetched pages.
- **Context window:** **1,000,000 total** (weights; hosts serve 64K–1M — meta; AA confirms 1M on first-party API).
- **Modalities:** **text, image, speech in; text out** (AA spec + meta — native audio input).
- **Pricing:** hosted **~$1.00 in / $4.05 out per 1M** (AA; **83% cache discount**, blended $0.72), third-party/free: OpenRouter `inkling:free`, NVIDIA build, $0 self-host (meta). "Expensive vs open-weights median ($0.44/$1.68)" per AA.

### Raw benchmarks found

> Primary: Thinking Machines launch post (vendor-run rows) + AA (independent rows) +
> BenchLM aggregate (per-row provenance, updated 2026-10-07). Harness spread on
> Terminal-Bench 2.1 (vendor 63.8 / AA 55.1 / Vals 47.6) flagged.

Reasoning & knowledge:

- **HLE: 46% with tools / 30% without** (launch) — clears the 40+ reference only in the with-tools setting; **AA-HLE: 31.9** (independent) — under 40, flagged.
- **GPQA Diamond: 87.9** (launch), **87.2** (AA), 87.1 (Vals) — just under the 90 reference.
- **AIME 2026: 97.1** (launch) — elite math. MMLU-Pro 86.3 (Vals); IFBench 79.8.
- **AA Intelligence Index (v4.3.2): 25** — well above the open-weights-class median (18), though equal to GPT-5.1's absolute value.
- AA-Omniscience Index 2.0 (accuracy 41.6, hallucination 67.7 — poor knowledge reliability); CritPt 5.4; MLCR-AA 12.2.

Agentic / tool use (meta's "weak agentics" confirmed):

- **BrowseComp: 77.1** and **MCP Atlas: 74.1** (launch) — actually strong browsing/tool rows.
- Weak workflow rows: **AA Agentic Index 24.3**, GDPval-AA **Elo 1079 / 28.9%**, AA AutomationBench **5.0**, Tau3-Banking 29.1, AnalystAgent 23.8, Briefcase Elo 832, EnterpriseOps 38.0, GDP.pdf 12.8, TB4.0 1.0.
- **Terminal-Bench 2.1: 63.8 (launch) / 55.1 (AA) / 47.6 (Vals)** — harness-dependent.
- Design Arena Agentic Web Dev: 1257; CWE-bench v1: 37.0 (Collinear).

Coding:

- **SWE-bench Verified: 77.6** (launch; Vals 77.6) — solid. **SWE-bench Pro: 54.3** — weak.
- LiveCodeBench (Vals) 85.5; **AA Coding Index 52.1** (under 70); **AA-SciCode 47.0** (under 55); FrontierSWE v2 4.1 (frontier-new, low everywhere).

Multimodal:

- **MMMU-Pro: 73.5** (launch + AA); **CharXiv: 82 / 78.1 without tools** (launch); Design Arena Website 1228. Speech input is spec'd but no audio benchmark row found (flagged).

Long context:

- 1M weights / host variance 64K–1M; **AA-LCR: 77.3**; no retrieval row.

### Normalized scores (1–100)

- **Tool use: 76/100.** BrowseComp 77.1 and MCP Atlas 74.1 show real browsing/tool chops, but the entire workflow side is weak (AA Agentic 24.3, AutomationBench 5.0, GDPval 1079, TB2.1 down to 47.6 on independent harnesses) — matching the meta's "weak agentics."
- **Reasoning: 84/100.** AIME26 97.1 is elite and HLE-46 (with tools) clears the reference; GPQA 87.9/87.2 sits just below 90, AA-HLE 31.9 disagrees with the vendor row, and Omniscience is poor.
- **Context window: 93/100.** 1M on weights/first-party (qualifies for the tier) but host caps as low as 64K and LCR 77.3 with no retrieval row keep it below the 95 floor.
- **Multimodal: 89/100.** Text + image + **speech** input — the audio-capable band — with MMMU-Pro 73.5 and CharXiv 82 as image-side evidence; no audio benchmark row found, so it stays under 90.
- **Coding: 82/100.** SWE-V 77.6 and LCB 85.5 are respectable; SWE Pro 54.3, Coding Index 52.1 and SciCode 47.0 are all well under references.
- **Cost efficiency: 90/100** (excluded from Overall). $1.00/$4.05 beats the $1.25/$4.25 ≈ 88 anchor outright, 83% cache discount, plus **free routes** (OpenRouter `inkling:free`, NVIDIA) and $0 Apache self-host; first-party tariff is expensive *for open weights* (AA) — that's the only ding.
- **Overall Score: 85/100.** (76+84+93+89+82)/5 = 84.8 → 85 — Thinking Machines' open-weights flagship: elite math (AIME26 97.1), near-reference GPQA, native speech input, 1M weights and free hosting paths — held back by genuinely weak agentic workflows and under-reference coding depth.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — TML launch post rows (via BenchLM provenance links), AA model page (spec/params/license/index/speed/cost + independent GPQA/HLE/LCR/MMMU-Pro/agentic rows), BenchLM aggregate (47 rows with per-row sources, updated 2026-10-07), Vals/Collinear/Design Arena/ARC-class leaderboards as cited, repo meta (host-cap variance, free routes). Scores are normalized 1–100 interpretations, not official vendor scores; vendor vs independent disagreements flagged (HLE, TB2.1).
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Inkling — findings by Mimo v2.6 Flash

- Source: Thinking Machines Lab/Inkling
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling (Thinking Machines Lab open-weights model)
- **Short description:** general-purpose multimodal MoE (975B total / 41B active) from Thinking Machines Lab, their first production model and first open-weights release — aimed at fine-tuning, coding assistants, agentic/tool-use apps and multimodal chat. Not a variant/alias of another entry.
- **Provider / access:** OpenCode Zen gateway ID `opencode/inkling` (Chat Completions; standard paid pricing — Zen row not independently re-verifiable this session, models.dev OpenCode list truncated before it); canonical API `thinkingmachines/inkling` across ~30 inference providers (Baseten, Fireworks, Together, Hugging Face, OpenRouter, Nvidia — some $0 rows), plus Thinking Machines' own Tinker API (fine-tuning). Open weights on Hugging Face (BF16 / MXFP8 / NVFP4).
- **Release / knowledge:** 2026-07-15 (model card); knowledge cutoff not published ("as of its training cutoff" only).
- **IDs:** `thinkingmachines/inkling` (canonical), `opencode/inkling` on Zen (no Free ID found in the Zen models list visible this session; Nvidia/OpenRouter list $0 rows).
- **Context window:** 1,048,576 tokens (model card: "up to 1M tokens"; models.dev canonical 1,048,576 in / 1,048,576 out). Provider rows vary sharply: 65,536 on Thinking Machines' own default API row → 1,048,576 on Baseten/Fireworks/HF/OpenRouter (models.dev provider table). This repo's Zen entry documents a 128K serving cap — treat 1M as native, 128K as the Zen channel limit.
- **Modalities:** text, image, audio in (WAV 16 kHz ≤ 20 min; images 40–4096 px); text out; reasoning ("thinking effort" setting); tool calls; structured outputs; temperature (models.dev capabilities row).
- **Pricing (as of 2026-09-25):** paid, no Free ID verified — market rate $0.95–$1.87 in / $4.05–$4.68 out per 1M (models.dev provider table; Thinking Machines' own row $1.87/$4.68, cached $0.374 per BenchmarkList); Nvidia row and `openrouter … inkling:free` are $0; Zen "standard pricing" per this repo's `meta.json`.
- **Architecture:** 975B total / 41B active, 66-layer decoder-only sparse MoE (6 of 256 routed experts + 2 shared per token), hybrid local/global attention, native multimodal (hierarchical patch image encoder, discrete audio tokens), trained on 45T tokens of text/image/audio/video; Apache 2.0 open weights.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows say "no verified public score found".

Agent / tool use:

- Terminal-Bench 2.1: **55.1%** (BenchmarkList, rank 60/182; **63.8%** best-reported-harness, rank 25/27)
- Tau3-Banking: **29.1%** (BenchmarkList, 81st pct, rank 34/174)
- GDPval-AA: **1238** (BenchmarkList, 85th pct, rank 52/340)
- MCP Atlas: **76.0%** (BenchmarkList, rank 19/44); Toolathlon: **45.5%** (BenchmarkList, 11th pct, rank 33/37); BrowseComp: **77.1%** (rank 26/44)
- OSWorld / AutomationBench: no verified public score found; Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **87.1%** (BenchmarkList, 74th pct, rank 31/117)
- HLE: **31.9%** (BenchmarkList, 88th pct, rank 56/466); HLE w/ tools: **46.0%** (rank 25/27)
- MMLU Pro: **86.3%** (rank 34/116); AIME 2026: **97.1%** (rank 6/36); SimpleQA: **43.9%** (rank 9/30)
- Artificial Analysis Intelligence Index: **42.3** (BenchmarkList, rank 46/418; earlier AA snapshot read 2026-08-02: 41 — vs Claude Opus 5 61, GPT-5.6 Sol 59, Kimi K3 57 via AI Trend wiki)
- LCR / MLCR / CritPt: no verified public score found; AA-Omniscience: 2.1 (44th pct, rank 16/28, BenchmarkList)

Coding:

- SWE-bench Verified: **77.6%** (BenchmarkList, 72nd pct, rank 21/72)
- SWE-bench Pro: **54.3%** (BenchmarkList, 19th pct, rank 40/49)
- LiveCodeBench: **85.5%** (BenchmarkList, 81st pct, rank 24/123)
- SciCode: **46.1%** (BenchmarkList, 88th pct, rank 55/458)
- Vibe Code Bench v1.1: **19.2%** (BenchmarkList, 36th pct, rank 46/71)
- DeepSWE: no verified public score found; WebDev Arena: **1408.45** (rank 58/105, BenchmarkList)

Long context:

- 1,048,576-token window documented (model card); MRCR / RULER / GraphWalks retrieval figures: **no verified public score found** (no long-context retrieval reported)

Multimodal:

- MMAU: **77.2%** (BenchmarkList, 97th pct, **rank 2/33**); MMMU-Pro: **73.5%** (rank 24/74); MMMU Pro (Intelligence section): **78.5%** (rank 42/79); CharXiv-R: **78.1%** (rank 20/32)
- VoiceBench: **91.4%** (98th pct, rank 2/42); AudioMC: **56.6%** (97th pct, rank 2/39)
- Chartography: **10.0%** (3rd pct, rank 31/32) — chart-to-code weakness (BenchmarkList)

### Normalized scores (1–100)

- **Tool use: 71/100.** TB2.1 55.1% sits mid-band (methodology mid = 45–60 → 50–70) but Tau3-Banking 29.1% and GDPval-AA 1238 both exceed the mid reference (10–25 / 900–1200), lifted further by MCP Atlas 76%; capped by TB2.1 far below the ~88%+ frontier and Toolathlon's 11th-percentile 45.5%.
- **Reasoning: 84/100.** GPQA 87.1%, HLE 31.9% (46.0 w/ tools), AIME 2026 97.1% and MMLU Pro 86.3% are near-frontier (frontier refs: GPQA 90+, HLE 40+), but AA Intelligence Index 42.3 trails frontier 59–61 (mid ref 20–35) — that gap is what caps it.
- **Context window: 95/100.** Native 1M tokens = top tier per methodology (≥1M = 95–100); held off 100 because no ≥512K retrieval result (MRCR/RULER) was verified and provider rows ship as low as 65K (Zen entry 128K).
- **Multimodal: 93/100.** Text/image/audio in + text out is the 90–100 band, and the evidence backs it: MMAU 77.2 and VoiceBench 91.4 are both rank 2 in their leaderboards; capped below 95 by Chartography 10% and the lack of video input.
- **Coding: 83/100.** SWE-bench Verified 77.6% is frontier-adjacent (ref DeepSWE 74%+ → 90–100 band) and LiveCodeBench 85.5% is strong; but TB2.1 55.1% (frontier 85%+), SciCode 46.1% (frontier 55%+) and Vibe 19.2% pull it out of the 90s — SWE-Pro 54.3% also below GLM-5.1's 58.4.
- **Cost efficiency: 88/100.** Paid-only for the evaluated channels: $0.95–$1.87 in / $4.05–$4.68 out per 1M lands right at the methodology's ~$1.25/$4.25 ≈ 88 anchor; $0 rows (Nvidia, OpenRouter free) exist but are channel-specific promos, not the Zen tier; would reach 100 on a verified $0 Zen Free ID.
- **Overall Score: 85/100.** (71 + 84 + 95 + 93 + 83) / 5 = 85.2 → 85 — best-fit: a fast, genuinely multimodal open-weights workhorse for fine-tuning and mid-frontier coding/agentic work (SWE-V 77.6%, 86 tok/s median per AA), when you want open weights or audio input without paying frontier prices.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-25
- Method: public internet research (Thinking Machines model card, BenchmarkList, models.dev / models.opencode.ai provider tables, AI Trend wiki snapshot of the AA leaderboard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.


