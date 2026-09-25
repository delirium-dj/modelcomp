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

