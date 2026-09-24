# Hy3 — findings by Muse Spark 1.2

- Source: Tencent/Hy3 (`tencent/hy3`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3
- **Short description:** Tencent's open-weight flagship Hunyuan MoE (295B total / 21B active, 192 experts top-8) with hybrid fast-and-slow thinking, production-grade tool-call stability, and 256K context. Successor to Hy3 Preview (late April 2026); rivals open models 2–5× its active size.
- **Provider / access:** Tencent Hy Team via HuggingFace `tencent/Hy3` (open-weights Apache 2.0), ModelScope, AtomGit; API via TokenHub preview. No OpenCode Zen Free ID.
- **Release / knowledge:** 2026-09-16 (Hy3), Hy3 Preview 2026-04-23; knowledge cutoff undisclosed (HuggingFace release 2026-09-16)
- **IDs:** `tencent/hy3` (also `tencent/Hy3-FP8` FP8 quantized) — no Free ID on Zen
- **Context window:** 256,000 total (256K in / 32K out max) — verified via HuggingFace README (80 layers, 4096 hidden, GQA 64 heads/8 KV), Tencent release docs
- **Modalities:** text + image in; text out; reasoning yes (hybrid fast-and-slow thinking with configurable effort); tool calls yes (production-grade stability across scaffolds); JSON/structured outputs yes; no audio/video generation via API
- **Pricing (as of 2026-09-16):** TokenHub preview ~$0.18 in / $0.59 out per 1M — paid only, no Zen Free ID (verified via curated meta)
- **Architecture:** MoE 295B total, 21B active + 3.8B MTP layer, 192 experts top-8 activated, 80 layers, GQA 8 KV heads, head dim 128, BF16; Apache 2.0 open-weights

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **71.7%** vendor-reported (Traictory, Tencent appendix) / **64.4%** verified Artificial Analysis (BenchmarkList 2026-07-21, 40/158 rank, field leader 89.5%)
- Terminal-Bench Hard: **34.1%** (BenchmarkList Verified 2026-06-10, 75th pct)
- Toolathon: **48.5%** vendor-reported (Traictory/Tencent appendix)
- MCP Atlas Public Set: **79.1%** vendor-reported (Traictory)
- APEX-Agents: **25.6%** pass@1 vendor-reported (Traictory)
- Claw-Eval (pass^3): **68.5%** vendor-reported (Traictory)
- Tau3-Banking: **20.8%** Pass@1 (BenchmarkList Verified 2026-07-21, 76th pct, vs K3 33.4%)
- GDPval-AA: **1,214 Elo** (35.7% normalized, BenchmarkList Verified 2026-07-21)
- Widely-cited hard subset gap: Long-Horizon Terminal-Bench **0.29** mean reward (14/21, field leader 0.49 Fable 5) — shows long-horizon limits
- Tau3-Banking / Tau2-Bench: see Tau3 above
- ClawProBench / Toolathon: see above

Reasoning / knowledge:

- GPQA Diamond: **90.4%** vendor-reported (Traictory/Tencent 2026-09-16) / **89.7%** verified Artificial Analysis (BenchmarkList 2026-07-21, 92nd pct vs G-5.6 Sol 94.1%)
- Humanity's Last Exam: **47.0%** no-tools text-only, **53.2%** with tools text-only vendor-reported (Traictory) / **31.6%** verified Artificial Analysis (49/447, field leader O-5 64.7% — reflects without-tools single setting)
- CritPt: **4.9%** (BenchmarkList Verified, 81st pct vs 32.3% G-5.6 Sol) / vendor frontier physics composite undisclosed
- FrontierScience Olympiad: **74.8%** vendor-reported
- IMO-AnswerBench: **90.0%** vendor-reported; USAMO 2026 **72.0%** vendor
- AA-LCR (Agent Arena Long Context Reasoning): **73.4%** vendor / **66.7%** verified BenchmarkList (83rd pct)
- AIIQ Composite IQ: **103** (BenchmarkList 59/109, vs G-5.6 Sol 136)
- Artificial Analysis Intelligence Index: **41.23–41.85** points (BenchmarkList Verified, 44/468, 91st pct; components: GDPval 1213.87, SciCode 47.6%, AA-LCR 66.7%, GPQA 89.7%, HLE 31.6%, CritPt 4.9%, Terminal 64.4%)
- Omniscience: **-18.5 points, 31.5% accuracy, 73.0% hallucination rate** (BenchmarkList Verified AA-Omniscience Index — weak factual reliability sub-score)
- LCR / MLCR: see AA-LCR above

Coding:

- SWE-bench Verified: **78.0%** vendor-reported (Traictory/Tencent appendix, self-reported) — accuracy variance <4% across CodeBuddy/Cline/KiloCode scaffolds per Tencent
- SWE-bench Multilingual: **75.8%** vendor-reported
- SWE-Bench Pro: **57.9%** vendor-reported (Traictory)
- DeepSWE: **~28.x%** vendor-reported (Traictory truncated 28.x)
- SciCode: **47.6%** Accuracy (BenchmarkList Verified 2026-07-21, 88th pct vs Fable 5 60.2%)
- SkillsBench: **55.3%** text-only 79-task vendor-reported
- LiveCodeBench: **no verified public score found** in current launch appendix (closest proxies Front/SciCode above)
- Vibe Code Bench: **no verified public score found**
- Arena AI WebDevArena: **1518 Elo** (28/44, 37th pct, vs Fable 5 1626) — front-end web dev proxy

Long context:

- AA-LCR **66.7%** verified / 73.4% vendor at 256K; Tencent claims marked MRCR improvement (issue rate 17.4%→7.9% on internal multi-turn) — **no independent MRCR/RULER needle 256K pointwise number found** beyond AA-LCR

### Normalized scores (1–100)

- **Tool use: 80/100.** MCP Atlas 79.1%, Terminal-Bench 2.1 71.7% (64.4% verified), Toolathon 48.5%, ClawEval 68.5% with production-grade stability (<4% scaffold variance) and 270-expert blind win (2.67/4 vs GLM-5.1 2.51) — strong open-weight agentic tool use; capped below 90 by sub-35% Terminal Hard and low Tau3-Banking 20.8%.
- **Reasoning: 84/100.** GPQA 90.4% (89.7% verified), HLE 47–53.2% vendor (31.6% verified single-setting), FrontierScience 74.8%, IMO 90% place it near frontier reasoning for open-weight; AA Index 41.23 and CritPt 4.9% cap it below 90 frontier closed models.
- **Context window: 75/100.** 256K verified (32K out) in 200K–500K tier; AA-LCR 66.7–73.4% and internal multi-turn gains confirm good retention but no independent 256K MRCR/RULER pointwise keeps it below 1M-tier; 256K=75 anchor fits.
- **Multimodal: 60/100.** Text + image in, text out (no video/audio in via open-weights API per meta) covers basic vision band (60–70); capped below full omni multimodal (video/audio) models.
- **Coding: 84/100.** SWE-bench Verified 78.0%, Multilingual 75.8%, Pro 57.9%, SciCode 47.6% and stable cross-scaffold variance support strong coding; capped below 90 by sub-30 DeepSWE and mid-tier WebDevArena 1518.
- **Cost efficiency: 70/100.** Open-weights Apache 2.0 with cheap TokenHub preview ~$0.18/$0.59 (far below $3/$15 frontier) — high openness value; capped at 70 due to no free tier and preview-only pricing, below pure free-tier models.
- **Overall Score: 77/100.** Mean of the five non-cost dims (80+84+75+60+84)/5 = 76.6 → 77; best-fit as cost-effective open-weight reasoning/coding pick where 256K suffices — escalate to flagship closed models for maximal hallucination reliability and 1M context.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-24
- Method: public internet research (Tencent Hy Team hy.tencent.com release 2026-09-16, HuggingFace tencent/Hy3 README, BenchmarkList 2026-07-21 Verified, Traictory aggregation of Tencent appendix, GitHub Tencent-Hunyuan/Hy3); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
