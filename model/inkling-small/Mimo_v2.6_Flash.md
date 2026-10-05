# Inkling-Small — findings by Mimo v2.6 Flash

- Source: Thinking Machines Lab (`inkling-small`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling-Small
- **Short description:** Efficient open-weights multimodal reasoning model from Thinking Machines Lab — the 276B-total/12B-active MoE sibling of the 975B Inkling, built for agentic tool use, coding assistants, and chat at a quarter of the inference compute.
- **Provider / access:** Thinking Machines Lab API (AA-measured $0.30/$1.20 per 1M); Tinker fine-tuning platform API (limited-time launch discount); 14 hosts in the models.dev catalog (Baseten, Deep Infra, Hugging Face, OpenRouter, Vercel AI Gateway, NanoGPT, Kilo Gateway, Arcee, LLMTR, Eden AI, Pioneer). OpenAI-compatible Chat Completions (temperature / structured-output / tool-call flags on models.dev provider rows); no Responses API documented.
- **Release / knowledge:** Released 2026-07-30 (launch post + model card); knowledge cutoff not disclosed (models.dev knowledge field "-").
- **IDs:** `thinkingmachines/inkling-small` (aliases `thinkingmachines/Inkling-Small` on Deep Infra / HF / NanoGPT, `:thinking` on NanoGPT). **No OpenCode Zen Free ID** — no `opencode/inkling-small*` row on models.dev as of 2026-10-05; free $0/$0 routing exists as `thinkingmachines/inkling-small:free` on OpenRouter and Kilo Gateway.
- **Context window:** 1,048,576 tokens (1M) total — official "up to 1M" plus models.dev header; max output host-dependent: 32,768 (Baseten, NanoGPT) … 1,048,576 (Deep Infra, Vercel AI Gateway); verified 2026-10-05 via models.dev provider table.
- **Modalities:** text / image / audio (WAV 16 kHz) in; text out; reasoning yes (variable effort minimal→xhigh); tool calls yes; structured/JSON output yes (most hosts); temperature yes.
- **Pricing (as of 2026-10-05):** paid — TM API $0.30 in / $1.20 out per 1M (Artificial Analysis, 80% cache discount, $0.09 per Intelligence-Index task); typical hosts $0.45–$0.50 in / $1.20 out; $0/$0 `:free` variants on OpenRouter and Kilo Gateway; Tinker billed at limited-time launch discount. No Zen Free ID → cost scored on paid pricing.
- **Architecture:** 276B total / 12B active MoE — 42-layer decoder-only transformer, 6-of-256 routed experts + 2 shared, hybrid local/global attention, native hierarchical image patch encoder + discrete audio token encoding; BF16/MXFP8/NVFP4; Apache 2.0 open weights (Artificial Analysis lists 266B total — official model card says 276B).

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.1: **64.7%** <(launch post, best reported harness, effort 0.99; BenchmarkList default-harness figure 55.1%, rank 71/194)>
- Tau3-Banking: **18.8%** <(BenchmarkList, 67th pct, rank 59/176)>
- GDPval-AA: **1269** <(BenchmarkList, 84th pct, rank 58/352)>
- AA-Briefcase: **917** <(58th pct, rank 62/145)>
- MCP Atlas: **79.6%** <(66th pct, rank 17/48)>
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.5%** <(BenchmarkList, 91st pct, rank 45/468)>
- HLE: **33.3%** <text-only, no tools (BenchmarkList); **47.8%** with tools (launch post)>
- Artificial Analysis Intelligence Index: **25.7 / #26 of 118** <(BenchmarkList 25.7; AA page 26, v4.3.2)>
- CritPt: **8.3%** <(launch post, 22nd pct among 28 fields)>
- AA-LCR: **75.7%** <(80th pct, rank 84/408)>
- SimpleQA / AA Omniscience: **20.6% / -9 index** <(SimpleQA 21/30 pct; Omniscience 27/30 pct)>
- AIME 2026: 95.5% · HMMT Feb 2026: 90.2% <(launch post)>
- ARC-AGI-1 / ARC-AGI-2: **84.0% / 40.1%** <(launch post)>
- Global-MMLU-Lite: 86.7% · IFBench: 82.2% <(IFBench 92nd pct, rank 4/39)>
- LCR / MLCR: AA-LCR 75.7% above; MLCR no verified public score found

Coding:

- SWE-bench Verified: **80.2%** <(launch post bash-only harness; BenchmarkList rank 16/50)>
- SWE-bench Pro: **55.9%** <(rank 42/58)>
- SciCode: **49.7%** <(81st pct, rank 57/296)>
- LiveCodeBench: no verified public score found
- Vibe Code Bench: no verified public score found
- ReactBench: 6.7% <(rank 24/24)> · WebDev Arena: 1404.64 <(rank 60/105)>

Long context:

- 1M window; AA-LCR **75.7%** (80th pct). Context Arena GDM-MRCRv2 (625 runs, low effort): average 22.9%, AUC@128K 20.4%, AUC@1M 4.5% — multi-needle retrieval degrades sharply past 128K (field leader GLM-5.3 62.7, per BenchmarkList/Context Arena).

### Normalized scores (1–100)

- **Tool use: 70/100.** GDPval-AA 1269, MCP Atlas 79.6% and TB2.1 55.1–64.7% sit in the mid-to-upper band, but Tau3-Banking 18.8% is far below the frontier reference (Tau3 ~50%+, TB2.1 ~88%+ → 90–100); weak tau3 reliability caps it at 70.
- **Reasoning: 82/100.** GPQA 89.5% is a point off the frontier band and HLE 33.3% (47.8% with tools) is far above mid, but AA Intelligence Index 25.7 (#26/118) and CritPt 8.3% keep the composite below 90.
- **Context window: 95/100.** 1M window lands the ≥1M tier (95–100); no 100 because Context Arena multi-needle AUC@1M is only 4.5% (no ≥98% retrieval at 512K+ evidence).
- **Multimodal: 92/100.** Native text+image+audio input (audio-in tier 90–100): MMAU 77.0% (94th pct), VoiceBench 90.1%, MMMU-Pro 74.0%, CharXiv 77.4%; text-only output and no video/PDF input keep it below the band top.
- **Coding: 85/100.** SWE-bench Verified 80.2% is frontier-tier, but SWE-bench Pro 55.9%, SciCode 49.7% (<55% frontier ref) and TB2.1 64.7% (<85% frontier ref) cap it at 85.
- **Cost efficiency: 90/100.** No Zen Free ID → paid scoring: $0.30/$1.20 per 1M matches the $0.30/$1.20 paid reference point used for MiniMax M2.7 (90); $0/$0 `:free` routes exist on OpenRouter/Kilo; $0.09 per Index task (#11/118 on cost).
- **Overall Score: 85/100.** (70+82+95+92+85)/5 = 84.8 → 85 — best fit: fast 1M-context open-weights multimodal coder/agent runner with near-frontier GPQA and 80.2% SWE-bench Verified; not a frontier tau3/tool-use or top-tier reasoning pick.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-05
- Method: public internet research (Thinking Machines launch post + model card, Artificial Analysis model page, BenchmarkList compilation, models.dev provider catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.