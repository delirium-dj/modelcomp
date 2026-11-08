# Inkling-Small — findings by MiMo 2.6 Flash

- Source: Thinking Machines Lab (`inkling-small`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 84). Fresh sources this pass: Artificial Analysis model page
> (AA Intelligence Index **v5.0.1 = 13**, fetched 2026-11-08) and BenchLM model page
> (updated 2026-11-07). Changes: Reasoning 82→77 (current-scale AA Index is 13, not
> the launch-era v4.1 reading of 40), Overall 84→83; held Tool use 80, Context 90,
> Multimodal 90, Coding 77, Cost 96.

## Model card

- **Name:** Inkling-Small
- **Short description:** Thinking Machines Lab's second release (2026-07-30, two weeks after flagship Inkling) — an **Apache 2.0 open-weights** MoE (AA lists 266B total / 12B active; vendor card 276B/12B), trained on NVIDIA GB300 NVL72, sharing Inkling's encoder-free native multimodal architecture (audio as dMel spectrograms, 40×40 image patches via hMLP) and variable thinking effort. Vendor card shows it *beating* Inkling on SWE-bench Verified (80.2 vs 77.6), Terminal-Bench 2.1 (64.7 vs 63.8), GPQA (89.5 vs 87.2) and HLE (31.6 vs 29.7); independent AA now places it at **Index 13 (#21/26 in its comparison class, median 23)** and describes it as "among the least intelligent models" of comparable open weights — the launch-era v4.1 reading of 40 no longer exists on the current scale. Known regressions: audio input recommended only under **2 minutes** (flagship: 20 min), FORTRESS adversarial safety 71.6 vs 78.0, and no endpoint currently serves the advertised full 1M.
- **Provider / access:** Hugging Face (`thinkingmachines/Inkling-Small`, BF16 + NVFP4 ≥180 GB VRAM), Tinker (fine-tuning) + Tinker Playground, first-party API, DeepInfra/BaseTen/OpenRouter third parties (2 API providers live per AA).
- **Release / knowledge:** released 2026-07-30; knowledge cutoff not published.
- **IDs:** `inkling-small` (first-party) / `thinkingmachines/inkling-small` (HF/gateways).
- **Context window:** advertised **up to 1M** (model card, AA technical specs show 1M), but **live endpoints serve 256K (first-party per LLM Stats) to 524,288 (DeepInfra/third-party; LLM Stats lists 524K as the headline window)**; max completion 262,144 on the fp8 endpoint.
- **Modalities:** **text + image + audio in** (native reasoning over speech; VoiceBench/MMAU/AudioMC), text out; reasoning yes (5-effort dial, evals at 0.99); tool calls yes (one provider exposes tool calling/logprobs; structured-output support uneven per provider).
- **Pricing (as of 2026-11-08):** first-party **$0.30 in / $1.20 out** per 1M, cached **$0.06** (80% cache discount, AA); third parties $0.45–$0.50/$1.20 (cache $0.10); AA measures **$0.20 per Intelligence-Index task** (7.0 min/task, #4/25 on cost in its class); self-host free under Apache 2.0.
- **Architecture:** sparse MoE 266B (AA) / 276B (vendor card) total, 12B active; encoder-free multimodal; ~24K output tokens per Index task (token-efficient vs DSV4 Flash's ~45K).

### Raw benchmarks found

> Fresh pass sources: Artificial Analysis model page (fetched 2026-11-08 — Index v5.0.1
> methodology now bundles AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0,
> FrontierCode 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 hard,
> Terminal-Bench-Science 0.1) and BenchLM model page (updated 2026-11-07, 42 rows).
> Vendor launch-post rows unchanged since 2026-07-30.

Agent / tool use:

- Terminal-Bench 2.1: **64.7** vendor (internal harness, contaminated solutions zeroed) / **55.1** Vals / **55.0** AA — **far under the 85% ref**
- MCP-Atlas: **79.6 public / 79.2 all** (eval suite run with Scale AI) — **clears the 75%+ ref**
- BrowseComp (with context mgmt): **77.4** (vendor-run; Qwen3.5-397B 78.6, Inkling 77.1)
- Toolathlon Verified: 54.4; GDPval-AA: **1191 Elo** (AA current; launch-era v2 reading was 1269, normalized 31.2%), AA Agentic Index: **24.9**, AA EnterpriseOps-Gym: **42.7** (all three new-vs-previous-pass AA rows); AA-Briefcase: **917 Elo** (vendor-era reading, beats flagship's 839)
- τ³-Banking: **15.5%** (weak — Inkling 23.7, DSV4 Flash 22.9); OSWorld / ALE: none found

Reasoning / knowledge:

- GPQA Diamond: **89.5** vendor / 89.5 AA / 83.6 Vals — **just under the 90%+ ref**
- HLE text-only: **31.6** vendor / **33.3** (AA) — **under the 40%+ ref**; HLE with tools: 47.8 (vendor)
- **Artificial Analysis Intelligence Index v5.0.1: 13 (#21/26 in class, median 23)** — AA's current reading; the previous pass cited the launch-era **v4.1 = 40**, which no longer exists on the current scale (BenchLM shows the same 12.9, updated 2026-11-07) — **far under the 60+ ref**
- AIME 2026: 95.5; HMMT Feb 2026: 90.2 (elite math); CritPt 8.3 (AA lists 8)
- **FrontierMath v2 (Epoch, via BenchLM 2026-11-07): T1–3 46.316%, Tier 4 17.073%** — new-vs-previous-pass, top-tier math reading
- ARC-AGI-1: **84.0**, ARC-AGI-2: **40.1** (ARC Prize); IFBench **82.2** (#5 of its class, Model Beats); SimpleQA Verified 20.6; AA-Omniscience: net −9.5 (accuracy 31.8%, hallucination rate 60.5%)

Coding (vendor card unless noted):

- SWE-bench Verified: **80.2** (bash-only harness) / **82.2** (Vals re-run, new) — top-band for its class; SWE-bench Pro public: 55.9
- SciCode: **48.7** vendor / 49.7 (AA) — **under the 55%+ ref**
- **LiveCodeBench (Vals): 85.9** — new row; previous pass recorded "no verified public score found"
- **AA Coding Index: 53.0** — new row; previous pass recorded "no coding-index rows published" — **under the 70%+ ref**
- No DeepSWE / Terminal-Bench 4.0 rows; Vibe Code Bench: no verified public score found
- Speed: 87 tok/s (AA current; was 133 at launch), 7.0 min per Index task

Long context:

- Advertised 1M but **served 256K–524K**; AA-LCR **75.7%** (80th pct); Context Arena GDM-MRCRv2 (625 runs, low effort): AUC@128K 20.4%, AUC@1M 4.5% — multi-needle retrieval degrades sharply past 128K

Multimodal (vendor-run):

- MMMU Pro Standard-10: **74.0**; CharXiv RQ: 77.4 / 81.3 (with python); AudioMC: 54.9, MMAU: **77.0**, VoiceBench: **90.1** (near flagship's 91.4); audio inputs recommended under 2 minutes only; no video input, no PDF rows.

### Normalized scores (1–100)

- **Tool use: 80/100.** HELD from previous pass: MCP-Atlas 79.6 clears the 75%+ ref, BrowseComp 77.4 and best-in-class open GDPval/Briefcase Elos are genuine strengths; TB2.1 55.1–64.7 collapses against the 85 ref, τ³-Banking 15.5 is weak, no OSWorld/ALE. Fresh AA rows (GDPval 1191, Agentic Index 24.9, EnterpriseOps-Gym 42.7) are mixed but shift no anchor enough to move the score.
- **Reasoning: 77/100.** MOVED DOWN from 82: the current-scale AA Intelligence Index (v5.0.1) reads **13**, not the launch-era v4.1 40 the previous pass scored against — AA itself calls the model "among the least intelligent models" in its class, so the Index ref now misses by 47 points instead of 20. Held this high by GPQA 89.5 (1 pt from the 90 ref), HLE 33.3/47.8, AA-LCR 75.7, ARC-AGI-1 84.0, elite math (AIME 95.5, HMMT 90.2) and the new FrontierMath v2 T1–3 46.3%/T4 17.1%; capped below 80 by the collapsed Index reading and CritPt 8.3.
- **Context window: 90/100.** HELD: advertised 1M, but no live endpoint serves it — first-party 256K, third parties 524K — between the 262K (90) and 1M bands, served reality puts it at 90; AA-LCR 75.7 and Context Arena AUC@1M 4.5% confirm retrieval weakness at depth.
- **Multimodal: 90/100.** HELD: native text + image + **audio** in → audio-in band (90–100); MMAU 77.0, VoiceBench 90.1, MMMU-Pro 74.0, CharXiv 81.3 are solid, discounted for the 2-minute audio cap (10× shorter than the flagship) and absent video/PDF.
- **Coding: 77/100.** HELD: new Vals rows (LiveCodeBench **85.9**, SWE-bench **82.2**) strengthen the profile and the AA Coding Index 53.0 finally gives an index reading, but every frontier ref still misses — SciCode 48.7 (<55), TB2.1 55.1–64.7 (<85), Coding Index 53 (<70), no DeepSWE — so the mid-band value stands.
- **Cost efficiency: 96/100.** HELD: $0.30/$1.20 with 80% cache discount (AA confirms unchanged), $0.20 per Index task, and Apache 2.0 weights for free self-hosting — cheapest-tier in AA's per-task deployment comparison.
- **Overall Score: 83/100.** (80+77+90+90+77)/5 = 82.8 → 83 — the efficiency story of the quarter: near-flagship vendor-side reasoning and 80%+ SWE-bench at a third of flagship price, discounted for a current-scale intelligence index in the low teens, a terminal-agent score in the 50s–60s, and a served context that hasn't caught up to its marketing.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: Artificial Analysis model page fetched 2026-11-08, BenchLM model page updated 2026-11-07, LLM Stats, Epoch AI FrontierMath v2 leaderboard via BenchLM, Thinking Machines launch post); scores are normalized 1–100 interpretations, not official vendor scores; AA Index readings labeled by version (v4.1 launch-era vs v5.0.1 current).
- Reference URLs:
  - [Artificial Analysis — Inkling Small](https://artificialanalysis.ai/models/inkling-small)
  - [BenchLM — Inkling-Small (updated 2026-11-07)](https://benchlm.ai/models/inkling-small)
  - [Thinking Machines Lab — Introducing Inkling-Small](https://thinkingmachines.ai/news/inkling-small/)
  - [Epoch AI — FrontierMath v2 (Tiers 1–3) leaderboard](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

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
