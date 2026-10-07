# Qwen 3.5 397B — findings by Qwen 3.8 Flash

- Source: Alibaba / Qwen (curated id `opencode/qwen-3.5-397b`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-397B-A17B (open weights); hosted twin is **Qwen3.5-Plus**
- **Short description:** Alibaba's early-2026 flagship open-weights MoE — 397 B total / 17 B active, an **early-fusion vision-language** backbone (Gated Delta Networks + sparse MoE) that the card claims reaches cross-generational parity with Qwen3 and beats the Qwen3-VL line on reasoning, coding, agent and visual benchmarks. Trained with RL "scaled across million-agent environments".
- **Provider / access:** Apache 2.0 weights at `Qwen/Qwen3.5-397B-A17B` (HF + ModelScope); API via Alibaba Cloud Model Studio as `Qwen3.5-Plus`, plus every major open-weight host. **Variant flag:** Artificial Analysis and BenchLM track a **non-reasoning** endpoint (`qwen3-5-397b-a17b-non-reasoning`, Index 21) and list a separate `Qwen3.5 397B (Reasoning)` page with **no computed score** — the thinking mode of this checkpoint is essentially unmeasured by independent aggregators, so the numbers below describe the fast/non-thinking route.
- **Release / knowledge:** card dated 2026-03-09 (HF); superseded in the family by Qwen3.6-Plus / 3.7 / 3.8 tiers. Knowledge cutoff not stated on the card.
- **IDs:** `Qwen/Qwen3.5-397B-A17B` (HF), `Qwen3.5-Plus` (Model Studio hosted), curated site id `opencode/qwen-3.5-397b`.
- **Context window:** **262,144 tokens natively, extensible up to ~1,010,000** (card); the hosted Qwen3.5-Plus ships **1 M by default**. AA's tracked endpoint lists 262 K. **Conflict flag:** this folder's curated `meta.json` says "128K total / Text in/out / Standard pricing" — scaffold placeholders that contradict both the card (262 K native, image-text-to-text pipeline) and AA (262 K). BenchLM also shows 128 K for the non-reasoning page; I scored the vendor/AA-agreeing 262 K.
- **Modalities:** text + image in (AA-verified), **video** in per the card's VideoMMMU/ScreenSpot results, text out; `pipeline_tag: image-text-to-text`. No audio input and no image/audio output on this ID. Hidden dim 4096, 60 layers, 248,320 padded vocab, multi-step MTP training.
- **Pricing (as of 2026-10-07):** AA: **$0.60 in / $3.60 out** per 1M on the tracked open-weight route ("particularly expensive" vs similar open-weight non-reasoning models: medians $0.29 / $0.91); 87.5 output tokens/s, **#5 of 46** for speed. Apache 2.0 weights make self-hosting the realistic cost path.
- **Architecture:** 397 B total / 17 B active MoE + Gated Delta Net hybrid linear attention, early-fusion multimodal pre-training, MTP drafters.

### Raw benchmarks found

Vendor rows from the HF card and the Qwen3.6-Plus comparison table; independent rows from Artificial Analysis and BenchLM `qwen3-5-397b` (overall **53.97/100, #68 of 887**, 49 of 623 benchmarks covered, coverage flagged partial/conservative; AA Intelligence Index **21**, median 12 for the class).

Agent / tool use:

- τ²-bench: **83.9 %** (Artificial Analysis — the strongest independent agentic row here) / **68.4 %** τ³-bench (vendor)
- **Claw-Eval: 56.8 %** (Claw-Eval leaderboard) — a rare verified Claw-Eval row in this registry
- Terminal-Bench 2.0: **52.5 %** (vendor); MCP-Tasks **74.2 %**; MCP Atlas **46.1 %**; BrowseComp **62 %** (card)
- Toolathlon **36.3 %**; VITA-Bench **43.7 %**; DeepPlanning **37.6 %**; WideResearch **74.0 %**; QwenClawBench 51.8 %; ResearchClawBench **14.2 %**; Gert Labs 46.76 %
- GDPval-AA: **no verified public score found for this ID**

Reasoning / knowledge:

- GPQA: **88.4 %** (vendor) / **86.1 %** (AA); SuperGPQA **70.4 %**; MMLU-Pro **87.8 %**; MMLU-Redux **94.9 %**; C-Eval **93 %**
- HLE: **28.7 %** (vendor) / **19.8 %** (AA); CritPt: **0.9 %** (AA)
- Math: AIME26 **93.3 %**; HMMT Feb-2025 **94.8 %**, Nov-2025 **92.7 %**, Feb-2026 **87.9 %**
- AA Intelligence Index: **21**; AA-LCR **64.3 %**; LongBench v2 **63.2 %**; AI-Needle **68.7 %**
- AA-Omniscience: accuracy **24.5 %**, hallucination rate **82.7 %**, index **−37.9** — strong math, weak factual self-knowledge
- Instruction following: IFEval **92.6 %** (vendor) vs AA-IFBench **51.6 %** (independent) — another harness gap

Coding:

- SWE-bench Verified: **76.2 %** (vendor); SWE-bench Pro: **50.9 %** (vendor)
- LiveCodeBench v6: **83.6 %** (comparison table; the card's own table lists 87.7 for the thinking setting)
- DeepSWE, SciCode, SWE-Atlas, NL2Repo, AA Coding Index: **no verified public score found for this ID**

Multimodal:

- MMMU-Pro: **79 %** (vendor) vs **52.7 %** (AA) — a 26-point discrepancy, the largest vision gap in this scan
- MathVision **88.6 %**; CharXiv **80.8 %**; MMAnswerBench **80.9 %**; **VideoMMMU 84.7 %**; ScreenSpot Pro **65.6 %**; V* **95.8 %** (spatial/GUI grounding)

### Normalized scores (1–100)

- **Tool use: 80/100.** τ²-bench 83.9 % on Artificial Analysis's harness clears the methodology's ~50 % frontier reference outright, τ³ 68.4 % and a verified Claw-Eval 56.8 % corroborate it, and MCP-Tasks 74.2 % plus BrowseComp 62 % show real tool/graph breadth. Held back from 85+ by Terminal-Bench 2.0 52.5 %, Toolathlon 36.3 %, DeepPlanning 37.6 % and ResearchClawBench 14.2 %, and by the absence of any GDPval row.
- **Reasoning: 74/100.** GPQA 86–88 % and a spectacular math set (AIME26 93.3 %, HMMT 87.9–94.8 %) are near-frontier, but HLE 19.8–28.7 %, CritPt 0.9 %, Index 21 and an IFBench of 51.6 % against IFEval 92.6 % place it between the methodology's bands — clearly above mid, clearly short of the 90+/40+/60+ frontier anchors, with an 82.7 % hallucination rate as the trust ceiling.
- **Context window: 78/100.** Scored on the card's 262,144 native window (AA concurs), which is the 200 K–500 K tier (65–84): AA-LCR 64.3 %, LongBench v2 63.2 % and AI-Needle 68.7 % justify the upper part. The card's ~1 M extensibility and Qwen3.5-Plus's 1 M default are noted but not measured here, so no ≥1 M tier credit.
- **Multimodal: 84/100.** Early-fusion image **and video** input with text output sits in the methodology's 75–90 "video/PDF in" band; VideoMMMU 84.7 %, MathVision 88.6 %, CharXiv 80.8 % and V* 95.8 % are strong, while the vendor-79 % vs AA-52.7 % MMMU-Pro gap and the missing audio input cap it mid-band.
- **Coding: 76/100.** SWE-bench Verified 76.2 % and LiveCodeBench 83.6 % are genuinely good, but SWE-bench Pro 50.9 %, Terminal-Bench 2.0 52.5 % and no DeepSWE/SciCode/Coding-Index row at all mean it misses every frontier anchor; scored from the verified-Plus-pro pair.
- **Cost efficiency: 88/100.** $0.60 in / $3.60 out is right at the ~$0.60/$2.20 ≈ 92 anchor minus the expensive-output penalty AA flags for its class (median $0.91 out), partly recovered by 87.5 tokens/s (#5/46) and Apache 2.0 self-hosting. Between the $1.25/$4.25 (≈88) and $0.60/$2.20 (≈92) anchors.
- **Overall Score: 78/100.** Mean of the five quality dimensions (80 + 74 + 78 + 84 + 76) / 5 = 78.4 → 78; Cost excluded per `RULES.md`. Best fit: self-hosted or Model-Studio multimodal agents that need strong τ-style tool use, GUI/video perception and math at 17 B-active throughput. Not for unattended factual research (hallucination 82.7 %) and not the current Qwen frontier — see the 3.7/3.8 tiers.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-07
- Method: fresh public internet research (HF `Qwen/Qwen3.5-397B-A17B` model card README, ModelScope mirror, BenchLM `qwen3-5-397b`, Artificial Analysis `models/qwen3-5-397b-a17b-non-reasoning`, Claw-Eval/ResearchClawBench leaderboards, Qwen blog comparison tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
