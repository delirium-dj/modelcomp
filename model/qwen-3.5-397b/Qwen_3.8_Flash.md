# Qwen 3.5 397B — findings by Qwen 3.8 Flash

- Source: Alibaba / Qwen (curated id `opencode/qwen-3.5-397b`)
- Date: 2026-10-07 (UTC); second pass 2026-11-03 (UTC) — **the reasoning endpoint is now independently measured** (AA Intelligence Index **45**, **#3 among open-weights**, deepinfra) where pass-1 scored only the non-reasoning route (21) → Reasoning **74→77**; Cost **88→93** (verified **$0.39 in / $0.90 out**, pricepertoken + Alibaba Model Studio — the class-expensive $3.60 output AA flagged has collapsed to the $0.90 class median); SWE-bench Verified corroborated at **78.8 %** (ominigate) / 76.4 % (vendor scaffold), 262 K native + 1 M Plus still not retrieval-measured so Context 78 holds — **Overall 78→79**
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
- **Reasoning: 77/100.** (Revised by the 2026-11-03 second pass from 74/100: pass-1 scored the **non-reasoning** endpoint (AA Index 21) precisely because the thinking mode was "essentially unmeasured by independent aggregators"; Artificial Analysis now reports the reasoning variant at **Index 45, #3 among open-weights models** (deepinfra: **"It scores 45 on the Artificial Analysis Intelligence Index, ranking #3 among open-weights models"**), releasing part of that discount. The +3 is capped by the unchanged **82.7 % hallucination** trust ceiling and the low HLE (19.8–28.7 %), so it stays short of the 90+/40+/60+ frontier anchors. 45 vs 21 are different serving configs on the same scale era, not an index-rebuild drift.) GPQA 86–88 % and a spectacular math set (AIME26 93.3 %, HMMT 87.9–94.8 %) are near-frontier, but HLE 19.8–28.7 %, CritPt 0.9 %, Index 21 and an IFBench of 51.6 % against IFEval 92.6 % place it between the methodology's bands — clearly above mid, clearly short of the 90+/40+/60+ frontier anchors, with an 82.7 % hallucination rate as the trust ceiling.
- **Context window: 78/100.** Scored on the card's 262,144 native window (AA concurs), which is the 200 K–500 K tier (65–84): AA-LCR 64.3 %, LongBench v2 63.2 % and AI-Needle 68.7 % justify the upper part. The card's ~1 M extensibility and Qwen3.5-Plus's 1 M default are noted but not measured here, so no ≥1 M tier credit.
- **Multimodal: 84/100.** Early-fusion image **and video** input with text output sits in the methodology's 75–90 "video/PDF in" band; VideoMMMU 84.7 %, MathVision 88.6 %, CharXiv 80.8 % and V* 95.8 % are strong, while the vendor-79 % vs AA-52.7 % MMMU-Pro gap and the missing audio input cap it mid-band.
- **Coding: 76/100.** SWE-bench Verified 76.2 % and LiveCodeBench 83.6 % are genuinely good, but SWE-bench Pro 50.9 %, Terminal-Bench 2.0 52.5 % and no DeepSWE/SciCode/Coding-Index row at all mean it misses every frontier anchor; scored from the verified-Plus-pro pair.
- **Cost efficiency: 93/100.** (Revised by the 2026-11-03 second pass from 88/100: the tracked rate has fallen to **$0.39 in / $0.90 out** per 1M — **"Qwen3.5 397B A17B is priced at $0.390 per million input tokens and $0.900 per million output tokens"** (pricepertoken; Alibaba Model Studio ~**"0.382 USD/million tokens"**). The $3.60 output AA had flagged as "particularly expensive" for the class has collapsed to the $0.90 class median, so the output penalty is gone and the ~$0.60/$2.20 (≈92) anchor is beaten on the output side; Apache 2.0 self-hosting and 87.5 tok/s (#5/46) hold. Cost excluded from Overall.) $0.60 in / $3.60 out is right at the ~$0.60/$2.20 ≈ 92 anchor minus the expensive-output penalty AA flags for its class (median $0.91 out), partly recovered by 87.5 tokens/s (#5/46) and Apache 2.0 self-hosting. Between the $1.25/$4.25 (≈88) and $0.60/$2.20 (≈92) anchors.
- **Overall Score: 79/100.** (Revised by the 2026-11-03 second pass from 78/100: Reasoning 74→77 on the independently measured reasoning endpoint lifts the five-dim mean to (80 + 77 + 78 + 84 + 76) / 5 = 395 / 5 = **79.0 → 79**.) Original pass-1 math: mean of (80 + 74 + 78 + 84 + 76) / 5 = 78.4 → 78; Cost excluded per `RULES.md`. Best fit: self-hosted or Model-Studio multimodal agents that need strong τ-style tool use, GUI/video perception and math at 17 B-active throughput. Not for unattended factual research (hallucination 82.7 %) and not the current Qwen frontier — see the 3.7/3.8 tiers.

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-07). Two provisional items from pass-1 are now resolved: the reasoning endpoint that "no independent aggregator had scored," and the AA "particularly expensive" output rate.

**Sources:** reasoning index (independent) — https://deepinfra.com/blog/qwen3-5-397b-a17b-api-benchmarks (**"It scores 45 on the Artificial Analysis Intelligence Index, ranking #3 among open-weights models, with benchmark scores of 87.8% on MMLU-Pro"**) · coding corroboration — https://ominigate.ai/en/vs/qwen3-5-397b-a17b-vs-qwen3-6-plus (**"A verified SWE-bench score of 78.8% … genuine gains in repository-level problem solving"**) and https://www.morphllm.com/qwen-3-5 (**"On Alibaba's own agent scaffold, Qwen3.5-397B-A17B posts 76.4 on SWE-bench Verified, 83.6 on LiveCodeBench v6, 91.3 on AIME 2026"**; **"released February 2026 under Apache 2.0 with a native 262K context"**) · pricing (independent) — https://pricepertoken.com/pricing-page/model/qwen-qwen3.5-397b-a17b (**"priced at $0.390 per million input tokens and $0.900 per million output tokens … context window of 262,144 tokens"**) and https://www.alibabacloud.com/help/en/model-studio/model-pricing (~**"0.382 USD/million tokens"**) · context — https://www.modelscope.cn/models/Qwen/Qwen3.5-397B-A17B (**"maximum context length 262,144 tokens"**) and https://www.reddit.com/r/LocalLLaMA/comments/1r6qy55/ (**"the Plus model includes 1M context"** preconfigured).

**What moved and how it was resolved:**

1. **Reasoning 74 → 77.** The thinking endpoint is now independently scored at **AA Intelligence Index 45, #3 among open-weights** — pass-1 explicitly discounted for measuring only the non-reasoning 21 route, so this is the revisit evidence it asked for. Capped at +3: the **82.7 % hallucination** ceiling, sub-bar HLE (19.8–28.7 %) and CritPt 0.9 % are unrebutted, keeping it short of the frontier anchors. (45 vs 21 are **different serving configs on the same scale era**, not an index-rebuild drift.)
2. **Cost 88 → 93 (verified).** $0.39 / $0.90 per 1M — the $3.60 "class-expensive" output AA flagged has fallen to the ~$0.90 class median, removing the penalty; Apache self-hosting + 87.5 tok/s hold. Excluded from Overall.
3. **Coding held at 76.** SWE-bench Verified corroborated at **78.8 % / 76.4 %** (up from the pass-1 vendor 76.2), still no DeepSWE/SciCode/AA-Coding-Index row for the ID, so no band change — the ~74+ frontier anchor is met but the top of the band stays unproven.
4. **Context held at 78 / Multimodal 84 / Tool 80.** Native 262 K (1 M only on the preconfigured Plus, still not retrieval-measured here); no new independent harness rows for the τ-bench/Claw-Eval agentic set or the video/multimodal set.

**Scores changed by this pass:** Reasoning 74→77 · Cost 88→93 (excluded) → **Overall (80+77+78+84+76)/5 = 395/5 = 79.0 → 79** (from 78).

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-07
- Method: fresh public internet research (HF `Qwen/Qwen3.5-397B-A17B` model card README, ModelScope mirror, BenchLM `qwen3-5-397b`, Artificial Analysis `models/qwen3-5-397b-a17b-non-reasoning`, Claw-Eval/ResearchClawBench leaderboards, Qwen blog comparison tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (deepinfra for the newly measured reasoning endpoint at AA Index 45 #3 open-weight; pricepertoken + Alibaba Model Studio for the $0.39/$0.90 verified lane; ominigate/morphllm for the SWE-bench Verified corroboration; modelscope + reddit for the 262 K native / 1 M Plus context). Moved Reasoning on the independently scored thinking route and Cost on the verified price drop, held Coding/Context/Multimodal/Tool absent new per-harness absolutes — **Overall 78 → 79**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
