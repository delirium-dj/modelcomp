# MiniMax-M3 — findings by MiMo 2.6 Flash

- Source: MiniMax (`minimax-m3`)
- Date: 2026-11-10 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-10** (user-approved). Previous Signature
> 2026-10-07 (Overall 86). Fresh sources this pass: BenchLM model page
> (snapshot 2026-11-10, overall 48.95, rank #103/1020, 55/804 rows) and its
> cited leaderboards (Vals AI, AA, OSWorld paper, ResearchClawBench).
> Changes: Tool use 82→81 (independent Vals TB2.1 **53.6%** vs the vendor's
> 66.0, plus new weak rows OSWorld 2.0 4.6%, ResearchClawBench 19.8% —
> offset by MCP Atlas 74.2, AA Harvey LAB 88.4, Claw-Eval 74.5 now
> documented); Reasoning 85→84 (AA Intelligence Index re-measured **18.9**,
> down from 29, and AA-Omniscience index **-5.5** with 91.4% hallucination
> — partially offset by new USAMO 2026 85.7% and Vals GPQA 92.7%).
> Held: Context 95 (AA-LCR 83.0 now documented), Multimodal 87, Coding 81
> (SciCode 47.1 and Coding Index 58.6 now published but both miss refs),
> Cost 95; Overall 86 (mean 85.6 → 86).

## Model card

- **Name:** MiniMax-M3
- **Short description:** MiniMax's native-multimodal open-weights flagship (released ~2026-06-01; technical report arXiv:2606.13392) — **428B total / 23B active MoE** trained mixed-modality from step one (text, image, video), with **MiniMax Sparse Attention** delivering 9× prefill and 15× decode speedups vs M2 at 1M context (per-token compute down to 1/20). Vendor positions it at "frontier-level long-horizon agentic" performance; independent AA put it at Index **44** on the launch-era v4.1 scale (with 23B active — the highest of its size class at the time), re-based to **29** on v4.3.2 and now re-measured at **18.9** on the current scale (2026-11-10). Distributed under the MiniMax Community License (commercial use with restrictions); 15 API providers.
- **Provider / access:** Hugging Face (`MiniMaxAI/MiniMax-M3`), MiniMax API / MiniMax Agent, OpenRouter (`minimax/minimax-m3`), Novita and 13 others, SGLang/vLLM/Transformers/KTransformers/unsloth/ROCm ATOM; 57 community quantizations.
- **Release / knowledge:** released 2026-06-01 (catalog-added 2026-05-31); knowledge cutoff not published.
- **IDs:** `minimax-m3` / `MiniMaxAI/MiniMax-M3`.
- **Context window:** **1,048,576 tokens**, max output **512,000** (Writingmate catalog); MSA makes 1M economically servable.
- **Modalities:** **text + image + video in**, text out; reasoning yes (`thinking`: enabled / adaptive / disabled); tool calls yes (provider accepts tool parameters; agentic/cowork focus — Claw-Eval, MiniMax Agent product).
- **Pricing (as of 2026-10-07):** **$0.30 in / $1.20 out** per 1M, cached input **$0.06** (80% off); AA measures **$0.51 per Intelligence-Index task**; blended (7:2:1) ≈ $0.22/M; 94 t/s median (above its class's 73).
- **Architecture:** MoE 428B/23B active; MSA sparse attention; minimax-community license.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **75.2** (OSWorld benchmark owner, 2026-06-07, 358 tasks, 100-step) — **clears the 75% ref**; BenchLM's MiniMax-sourced row reads **70.1%**; **OSWorld 2.0: 4.6%** (OSWorld 2.0 paper, arXiv:2606.29537 — new, much harder harness)
- APEX-Agents: **27.7** (Mercor benchmark owner, vendor-submitted); LHTB (Long-Horizon Terminal-Bench): 38.5 mean / **3 of 46 solved** (official Harbor harness); Claw-Eval: **74.5%** (vendor, via BenchLM)
- Terminal-Bench 2.1: **66.0** (vendor) / **53.6%** (Vals AI independent — new); MCP Atlas: **74.2%** (vendor); GDPval-AA: **1304 Elo** / 37.1% normalized (AA — new); AA Harvey LAB v1.0: **88.4%** (AA leaderboard — new); ResearchClawBench **19.8%** (official leaderboard — new); AA Agentic Index **30.8**; τ²-Bench **88.9** (AA); BankerToolBench 76.1, GDPval rubrics 74.7 (HF model card); MazeBench 0%
- ALE: no rows found

Reasoning / knowledge:

- GPQA Diamond: **92.9** (Artificial Analysis, independent) — **clears the 90%+ ref**; **92.7%** independently re-confirmed by Vals AI (new)
- HLE text-only: **39.0** (AA independent, 2,158-question subset) — **misses the 40%+ ref by 1.0**
- AA Intelligence Index: **44** (v4.1 launch-era) → **29** (v4.3.2) → **18.9** (current AA row via BenchLM 2026-11-10 — re-measured down again) — **under the 60+ ref on every scale**
- AA-Omniscience: index **-5.5**, accuracy **44.9%**, hallucination rate **91.4%** (current AA rows — new); CritPt **3.7**; AA-LCR **83.0**; AA-IFBench 82.9; MMLU-Pro **84.2** (Vals — new); **USAMO 2026: 85.7%** (MiniMax — new)
- LiveBench (2026-06-25): 67.3 overall; Arena Text: 1,440 (#96, 58.8K votes); Arena WebDev: 1,482 (#58)

Coding (vendor, HF eval results, unless noted):

- SWE-bench Verified: **80.5** (internal infra, Claude Code scaffold, 4-run average) — strong; **75.0%** independently (Vals AI SWE-bench — new)
- SWE-bench Pro: **59.0** (Claude Code scaffold, aligned with official logic) — strong
- AA-SciCode: **47.1** (AA leaderboard — new, under the 55% ref); AA Coding Index: **58.6** (AA — new, under the 70% ref); LiveCodeBench **82.2%** (Vals — new)
- VIBE V2 50.1, NL2Repo 42.1, SVG-Bench 63.7, KernelBench Hard 28.8, OpenHarmony Bench 48.4 (model card / official leaderboards)
- DeepSWE / TB4.0 / FrontierCode rows: not published
- YC-Bench: $2.1M final assets (monetary metric)

Long context:

- 1M window via MSA; **AA-LCR: 83.0** (AA — new this pass, a genuine long-context reasoning signal); **no needle/MRCR/GraphWalks figure found** → capacity + efficiency story plus the LCR row.

Multimodal:

- **Video-MME (w/ sub): 85.4**, **MMMU-Pro: 78.1** (vendor), **VideoMMMU 84.6**, **OmniDocBench 1.5: 91.6**, OfficeQA Pro 45.1, AA-MMMU-Pro **78.6%** (AA — new), Design Arena Website 1253 (OpenRouter) — solid video+vision rows; no audio input, no PDF rows.

### Normalized scores (1–100)

- **Tool use: 81/100.** OSWorld-Verified 75.2 clears the ref (benchmark-owner run) and Claw-Eval 74.5 / MCP Atlas 74.2 / AA Harvey LAB 88.4 are solid independent-or-documented rows now; but the independent Vals TB2.1 run reads **53.6%** (vs the vendor's 66.0), OSWorld 2.0 collapses to 4.6%, ResearchClawBench 19.8%, and ALE remains absent, with LHTB's 3-of-46 solve rate showing the long-horizon gap → 81 (was 82).
- **Reasoning: 84/100.** GPQA 92.9 (independently re-confirmed 92.7 by Vals) clears comfortably and the new USAMO 2026 85.7% is a strong math row; but HLE still lands a point under its ref, the AA Index re-measured down to **18.9** (never near 60), and AA-Omniscience now reads index -5.5 with a 91.4% hallucination rate → 84 (was 85).
- **Context window: 95/100.** 1M → ≥1M floor, with MSA making the window genuinely cheap to serve and the new AA-LCR 83.0 as a real long-context reasoning signal; no needle/MRCR row at window length to score higher.
- **Multimodal: 87/100.** Text + image + **video** in → video band (75–90); Video-MME 85.4, VideoMMMU 84.6, MMMU-Pro 78.1/78.6 and OmniDocBench 1.5 91.6 are all solid, held below 90 by no audio, no PDF, and vendor-only provenance on the headline rows.
- **Coding: 81/100.** SWE-bench Verified 80.5 (Vals independent 75.0) and SWE-Pro 59.0 remain legitimately strong; the methodology's coding refs are now all published and all miss: AA-SciCode 47.1 (<55), AA Coding Index 58.6 (<70), TB2.1 66.0/53.6 (<85), DeepSWE unpublished — LiveCodeBench 82.2% (Vals) is the one bright new row.
- **Cost efficiency: 95/100.** $0.30/$1.20 with 80% cache, $0.51 per Index task, plus free self-hosting under a community license — near the floor of frontier-capable pricing; docking only for the commercial-use restriction and multi-provider price variance.
- **Overall Score: 86/100.** (81+84+95+87+81)/5 = 428/5 = 85.6 → 86 — the open-weights efficiency standout: ref-clearing GPQA and OSWorld, real video understanding, 80+ SWE scores from 23B active parameters, at a tenth of flagship prices — discounted for an HLE one point short, an Index that fell to 18.9, an LHTB solve-rate in the single digits, and coding refs that are now visible and all missed.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-10
- Method: second-pass enrichment re-research (public internet research: BenchLM model page snapshot 2026-11-10 with its cited sources — Vals AI, Artificial Analysis, OSWorld 2.0 paper, ResearchClawBench, OpenHarmony Bench — plus the HF model card and MiniMax launch post rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [MiniMax M3 (BenchLM, snapshot 2026-11-10)](https://benchlm.ai/models/minimax-m3)
  - [MiniMax M3 (Artificial Analysis)](https://artificialanalysis.ai/models/minimax-m3)
  - [MiniMax M3 (Vals AI, independent runs)](https://www.vals.ai/models/minimax_MiniMax-M3)
  - [MiniMax M3 launch post (MiniMax)](https://www.minimax.io/blog/minimax-m3)
  - [MiniMaxAI/MiniMax-M3 model card (Hugging Face)](https://huggingface.co/MiniMaxAI/MiniMax-M3)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# MiniMax M3 — findings by Mimo v2.6 Flash

- Source: MiniMax/`minimax-m3`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax flagship (released 2026-06-01; OpenRouter lists 2026-05-31): first open-weight model combining frontier coding/agentic scores, **1M context via MSA (MiniMax Sparse Attention)**, and **native image+video understanding** — plus desktop-computer operation. MSA cuts 1M-context per-token compute to ½₀ of prior gen (9× prefill / 15× decode speedups).
- **Provider / access:** MiniMax API + Token Plans + MiniMax Code; open weights (tech report/weights promised within ~10 days of launch); hosted on OpenRouter, DeepInfra, Fireworks, Together, Novita, etc. Paid API + subscription tiers.
- **Release / knowledge:** 2026-06-01; knowledge cutoff not isolated in sources read.
- **IDs:** `minimax/minimax-m3` (OpenRouter); MiniMax API `MiniMax-M3`.
- **Context window:** **1,048,576 tokens** (guaranteed minimum 512K per felloai); max output ~131K–524K depending on host (OpenRouter 262,144 completion; MiniMax 524.3K).
- **Modalities:** **text + image + video in**; text out; thinking toggle (same price); tool calls yes; desktop/computer operation supported; standard + priority service tiers.
- **Pricing (as of 2026-09-22):** MiniMax list **$0.30 in / $1.20 out per 1M**; cached ~$0.06; **≤512K standard rate, >512K higher long-context rate**. Hosts cheaper: DeepInfra $0.28/$1.10; OpenRouter **$0.23/$0.96**; blended ~$0.06 with cache optimization. Token plans: Plus $20 (~1.7B M3 tokens/mo), Max $50 (~5.1B), Ultra $120 (~9.8B). Paid.
- **Architecture:** proprietary/open MSA sparse-attention transformer (params not isolated in launch coverage; weights on HF post-launch).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found. Many launch rows are MiniMax-infrastructure + agent-scaffolding runs — independent replication pending per launch coverage.

Agent / tool use:

- Terminal-Bench 2.1: **66.0%** (MiniMax launch; mid-pack vs frontier 78–90 class)
- MCP Atlas: **74.2%** (MiniMax)
- BrowseComp: **83.5** (MiniMax; claimed > Opus 4.7's 79.3)
- Claw-Eval: **top spot claimed** (MiniMax — end-to-end autonomous agent; no numeric score isolated)
- τ²-Bench Telecom: **88.9** (AA via OpenRouter)
- GDPval-AA: **40.2%** (AA — percent metric, not Elo; different scale from Elo tables)
- AA Agentic Index: **30.8** (AA via OpenRouter)
- OSWorld / Toolathlon / Tau3: no verified public score found
- AA Terminal-Bench Hard: **42.4 / 42.0** (AA / SWEN)

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (Epoch via themodelbeat) / **92.9%** (AA) / **93.0%** (SWEN) — range across evaluators
- Humanity's Last Exam: **39.0%** (Epoch; improved from 37.1 on 2026-08-06) / **37.0%** (SWEN)
- AA Intelligence Index: **29.6** (OpenRouter/AA listing) / **45.4** (SWEN) — large evaluator/version spread; cite both
- CritPt: **3.7%** (AA — very low)
- SciCode: **45.4 / 47.1 / 45.0** (themodelbeat / AA / SWEN)
- AA-Omniscience accuracy: **16.7%** (non-hallucination 81.6%) (AA)
- IFBench: **82.9–83.0** (AA/SWEN)
- AA-LCR: **74.0** (SWEN) / **83.0** (AA) — spread
- ARC-AGI / FrontierMath: no verified public score found

Coding:

- SWE-Bench Pro: **59.0%** (MiniMax; beats GPT-5.5 & Gemini 3.1 Pro, approaches Opus 4.7 — vendor claim)
- Terminal-Bench 2.1: **66.0%** (see agent row)
- SWE-fficiency: **34.8%** (MiniMax)
- KernelBench Hard: **28.8%** (MiniMax)
- AA Coding Index: **58.6** (AA)
- LiveBench Coding: **68.2** (SWEN/LiveBench)
- DeepSWE / SWE-bench Verified: no verified public score found for M3

Long context:

- 1M via MSA (efficiency story strong: 1/20 compute at 1M); **AA-LCR 74–83** as long-context proxy (spread above)
- MRCR / GraphWalks: no verified public score found

Multimodal:

- **Native image + video input** (first open-weight to combine coding frontier + 1M + native multimodal — vendor framing)
- OmniDocBench: claimed > Gemini 3.1 Pro (no numeric score isolated)
- SVG-Bench: claimed > Opus 4.7 (no numeric score isolated)
- WebDev Arena: **1528** (Epoch/themodelbeat); LMArena Elo: **1443** (SWEN)
- MMMU / CharXiv: no verified public score found for M3

### Normalized scores (1–100)

- **Tool use: 80/100.** MCP Atlas 74.2, BrowseComp 83.5, τ²-Telecom 88.9, Claw-Eval #1 claim; capped hard by TB2.1 66.0 (mid), AA Agentic Index 30.8, GDPval 40.2% (not Elo-class), missing OSWorld/Toolathlon/Tau3.
- **Reasoning: 82/100.** GPQA 90.9–93 solid; capped by HLE 37–39, CritPt 3.7 (very weak), AA Intelligence Index 29.6–45.4 spread (well below Sol/Fable 57–60+), Omniscience 16.7% accuracy.
- **Context window: 90/100.** 1M documented with MSA efficiency (guaranteed ≥512K); AA-LCR 74–83 mid-strong but no MRCR ≥98% row → 90 (not 95).
- **Multimodal: 90/100.** **Native text+image+video in** (audio not mentioned → not 95); OmniDocBench/SVG-Bench claims + WebDev Arena 1528; no MMMU row → 90.
- **Coding: 80/100.** SWE-Pro 59.0 (solid, not top), TB2.1 66.0 (clearly mid), SWE-fficiency 34.8, KernelBench 28.8, AA Coding Index 58.6, LiveBench Coding 68.2 — good open-weight coding, not frontier-terminal class.
- **Cost efficiency: 98/100.** $0.30/$1.20 list (hosts to $0.23/$0.96), blended ~$0.06 cache, token plans down to ~$0.012/1M effective on Ultra, open weights — extreme value.
- **Overall Score: 84/100.** Mean of five quality dims (80+82+90+90+80)/5 = 84.4 → 84. Best-fit: cheap native video/image long-context agent and coding workloads where TB2.1 isn't the bottleneck; not the pick for HLE/CritPt-grade science or terminal-SOTA coding.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (MiniMax M3 blog, themodelbeat, felloai, OpenRouter, llm-stats, SWEN.AI); scores are normalized 1–100 interpretations, not official vendor scores; several headline rows are vendor-run with agent scaffolding.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

