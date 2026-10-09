# GLM 5.3 Free — findings by Mimo v2.6 Flash

- Source: Zhipu AI / Z.AI/`glm-5.3` (Free Zen tier)
- Date: 2026-10-09 (UTC; original research 2026-09-22, re-researched 2026-10-09)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Free (free capped tier for Z.AI GLM-5.3)
- **Short description:** Zhipu/Z.AI's flagship coding-agent model (2026-08-14) — same ~750B MoE base as GLM-5.2 with scaled post-training only — free promotional tier on OpenCode Zen for agentic coding and tool calls; text-only, always-on thinking.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-free` (Chat Completions); Z.AI API `glm-5.3` (OpenAI-compatible + Anthropic-compatible coding endpoint); GLM Coding Plan (points quota, 50% off-peak); TokenRouter `z-ai/glm-5.3-free`.
- **Release / knowledge:** 2026-08-14 (Z.AI blog); knowledge cutoff **March 2026** (same pretrain as GLM-5.2). **Open weights confirmed shipped 2026-08-27** (Grokipedia fact-check ~2026-10-01) — the delayed-publication/safety-review question from the first pass is now resolved.
- **IDs:** `opencode/glm-5.3-free` (Zen free); `zai/glm-5.3` / `zhipuai/glm-5.3` paid.
- **Context window:** Full API **1,048,576** in / 131,072 out; **Zen free tier capped at 204K** (repo meta).
- **Modalities:** text in; text out (**no vision**); thinking always enabled (`low`/`high`/`max`, default max — `thinking.type: "disabled"` removed vs 5.2); tool calls yes; structured outputs yes.
- **Pricing (as of 2026-09-22):** Free Zen tier (primary entry); Z.AI list **$1.40 in / $4.40 out per 1M**, cache read $0.26; Coding Plan from ~$12.60/mo annual. AA measured ~$0.68 per Intelligence Index task (lowest in frontier cluster at launch).
- **Architecture:** MoE **753B total / 40B active** (confirmed 2026-10-09 by AA + Grokipedia; earlier 743B estimates superseded; same base as GLM-5.2); all gains post-training (Z.ai Code Bench +50% vs 5.2); text-only; emergent multi-stage cyber exploitation reasoning noted by Z.AI.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Primary source: Z.AI launch blog 2026-08-14 unless noted.

Agent / tool use:

- Terminal-Bench 2.1: **88.2%** (Z.AI; vs Kimi K3 88.3, Opus 4.8 85.0, GPT-5.6 Sol 88.8)
- Terminal-Bench 3.0: **28.3%** (Z.AI; open-source SOTA at launch; vs GLM-5.2 4.6, Fable 5 33.7, Sol 34.6)
- Toolathlon-Verified: **73.0%** (Z.AI; vs K3 76.5, Opus 4.8 76.2)
- AutomationBench v1.0.6: **48.2%** (Z.AI; beats K3 46.7, Sol 45.8)
- Agents' Last Exam (ALE-CLI): **28.5** (Z.AI; open-SOTA claim; vs K3 27.6, Sol 28.6)
- GDPval-AA v2: **1769 Elo** (Z.AI/AA; beats K3 1682, Opus 4.8 1588, Sol 1730)
- HLE with tools: **62.5%** (Z.AI; trails Sol 64.5, Fable 63.9)
- Z.ai Code Bench (max effort): **34.5%** @ ~75K out tokens/task (Z.AI in-house; beats Opus 4.8 29.5 @ 120K; trails Fable 5 39.5)

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (ModelBeat/Epoch AI tracking)
- Humanity's Last Exam (no tools): **42.3%** (ModelBeat/Epoch)
- Artificial Analysis Intelligence Index: **60** at launch (max effort; 1 behind Grok 4.6/Sol 61, 3 behind Opus 5 63) — later re-based v4.3 shows **45**, and the current v4.3.2 page (re-checked 2026-10-09) reads **45, #2/117 open-weights class** with $2.01 per Index task and a "very verbose" 210M-token profile (launch-era ~$0.68/task was on the old index scale — not comparable); CritPt **19.1%**, AA-LCR **79.7%**, Omniscience accuracy 33.9% / hallucination 29.6% (AA, 2026-10-09)
- CritPt / FrontierMath / Omniscience: no verified public score found

Coding:

- DeepSWE v1.1: **66.9%** (Z.AI; vs GLM-5.2 46.2, K3 67.5, Opus 4.8 58.0, Sol 72.7)
- NL2Repo: **58.0%** (Z.AI; ties K3; trails Opus 4.8 69.7)
- SWE-Marathon v1.1: **42.5%** (Z.AI; beats Sol 42.5 tie, trails K3 48.1)
- FrontierSWE: **78.1** dominance (Z.AI/Proximal; trails Fable 5 88.2)
- SciCode: **56.5%** (ModelBeat/Epoch)
- CyberGym: **84.5%** (Z.AI; best in their comparison table vs Mythos 5 83.8, Sol 83.6)
- SWE-bench Verified: **95.4%** (Vals AI independent, Mini-SWE-agent harness, rank 6/86, board 2026-08-19) — fills the gap flagged by the first pass (Z.AI published none; same weights as this free tier)
- LiveCodeBench: **80.53%** (Vals AI, 2026-08-20); AA-SciCode **59.0%**; AA Coding Index **74.8** (AA, 2026-10-09)
- Terminal-Bench 2.1: **83.9%** independent (AA Terminus 2, 2026-08-19) — below the vendor 88.2 above; harness spread 71.5 (Vals) – 88.2 (Z.AI)
- Terminal-Bench 4.0: **41.8%** #16/26 (Laude Institute, Claude Code · Max, 2026-08-14); Tau3-Banking **50.3%** (AA); DeepSWE v1.1: **69.0%** #4/18 (deepswe.datacurve.ai independent, 2026-08-26)

Long context:

- 1M window on full API; Zen free **204K**; MRCR/RULER retrieval scores: no verified public score found

Multimodal:

- **Text-only** — no image/video/audio input (explicit Z.AI/model-card limitation)

### Normalized scores (1–100)

- **Tool use: 88/100.** Vendor launch stack is elite (TB2.1 88.2, TB3.0 28.3 open-SOTA, GDPval-AA 1769) but the 2026-10-09 independent re-check trims confidence: AA Terminus-2 TB2.1 83.9 (spread 71.5–88.2 across harnesses), Tau3-Banking 50.3, LMArena Agent 3.1% (#18/46) — aligned with the paid sibling's 88 (was 90 on vendor-only evidence).
- **Reasoning: 84/100.** GPQA 91.7, HLE 42.3 (tools 62.5) are frontier-grade, but the current AA Index is 45 (v4.3.2, #2/117 open-weights — not the launch-era 60), with CritPt 19.1 and 29.6% hallucination rate as further drags (was 86 anchored on the launch-scale 60).
- **Context window: 68/100.** Full API is true 1M, but this Free entry is Zen-capped at **204K** per meta — effective free window is mid-large; no public long-context retrieval curve.
- **Multimodal: 15/100.** Text-only product surface (template rule: 15).
- **Coding: 91/100.** The missing-row caveat is gone: independent SWE-bench Verified **95.4%** (Vals), LCB 80.53, AA-SciCode 59.0, Coding Index 74.8, FrontierSWE 78.1, CyberGym 84.5 — DeepSWE 66.9–69.0 (still short of the 74+ frontier ref) and the vendor-only Toolathlon/Vibe rows remain the caps; +1 vs first pass (was 90), aligned with the paid sibling.
- **Cost efficiency: 100/100.** Free Zen tier (no delisting found in the 2026-10-09 re-check; Zen docs page current to 2026-10-08) with frontier-class coding agents; even paid $1.40/$4.40 undercuts Opus/Sol heavily — free-tier anchor = 100.
- **Overall Score: 69/100.** Mean of five quality dims (88+84+68+15+91)/5 = 69.2 → 69 (was 70 on 2026-09-22 — the trim comes from replacing vendor-launch evidence with the current independent record, not from any product change).

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-09 (original: 2026-09-22; user-approved second pass)
- Method: public internet research (Z.AI GLM-5.3 blog, models.dev, ModelBeat, Benchgen, The AI Rankings, modelcompare.dev); second pass 2026-10-09 re-checked [Artificial Analysis GLM-5.3](https://artificialanalysis.ai/models/glm-5-3), [Grokipedia GLM-5.3](https://grokipedia.com/page/GLM-5.3) (weights-ships confirmation) and the Vals/datacurve/Laude independent rows first documented in the paid sibling's re-research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

### Deep-research addendum (2026-10-09)

- **Gap closed:** SWE-bench Verified **95.4%** (Vals AI, Mini-SWE-agent, rank 6/86) — the exact row the first pass reported as missing; plus independent LCB 80.53, SciCode 59.0, Coding Index 74.8, TB2.1 83.9 (AA), DeepSWE 69.0 #4 (datacurve), TB4.0 41.8, Tau3-Banking 50.3.
- **Conflict resolved:** vendor TB2.1 88.2 vs independent 71.5–83.9 spread → both kept, harness spread noted; AA Index launch-scale 60 vs current v4.3.2 **45 (#2/117 open-weights)** → current adopted for scoring.
- **Resolved question:** open weights did ship 2026-08-27 (753B/40B confirmed).
- **Scores:** Tool 90→88, Reasoning 86→84, Coding 90→91; Context (68), Multimodal (15), Cost (100) unchanged; **Overall 70→69** — evidence-weighting update, not a product change; now consistent with the paid `glm-5.3` sibling apart from the 204K Zen cap.
