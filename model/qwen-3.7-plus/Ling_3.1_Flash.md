# Qwen 3.7 Plus — findings by Ling 3.1 Flash

- Source: Alibaba (`opencode/qwen-3.7-plus`; Alibaba Cloud Model Studio / DashScope, snapshot `qwen3.7-plus-2026-05-26`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's low-cost multimodal agent model (announced 2026-06-02, GA 2026-06-01/03) — the Qwen 3.7 backbone plus image/video understanding, built for GUI agents (screen reading, pixel-coordinate grounding, end-to-end mobile-app navigation); roughly one-sixth the per-token price of the text-only Qwen3.7-Max.
- **Provider / access:** Alibaba Cloud Model Studio (DashScope) — Beijing, Singapore, US-Virginia endpoints; OpenAI-compatible chat-completions/responses APIs; resold via OpenRouter. Proprietary, API-only (no weights; an open-weight variant was floated for Q3 2026, unconfirmed). 35-hour autonomous-run ceiling.
- **Release / knowledge:** 2026-06-02 (snapshot 2026-05-26); knowledge cutoff not disclosed.
- **IDs:** `opencode/qwen-3.7-plus`.
- **Context window:** 1M tokens (shared across text, image and video tokens); max output 32,768 tokens. NOTE: the repo `meta.json` stub says "128K total" — stale; Alibaba docs and all trackers report 1M.
- **Modalities:** text, image, video in; text out (no image generation). NOTE: `meta.json` says "Text in/out" — stale; image/video input is documented.
- **Pricing (as of 2026-10-02):** $0.40/$1.60 per 1M input/output for ≤256K requests (international list; currently 20% off → $0.32/$1.28), $1.20/$4.80 for 256K–1M; cached input $0.08/M (implicit), explicit cache read $0.04/M; batch file $0.143/$0.574; China-region rate $0.276/$1.101 (≤256K).
- **Architecture:** proprietary multimodal vision-language agent extending the Qwen 3.7 text backbone; parameters undisclosed.

### Raw benchmarks found

Agent / tool use (vendor-reported unless noted):

- τ²-bench: **93.0%** (Epoch AI via Model Beat) — frontier-tier tool use
- AndroidWorld (mobile agent): **81%**
- ScreenSpot Pro (GUI grounding): **79.0** — frontier-tier; Qwen3.7-Max cannot run it (text-only)
- MCP Atlas: **76.4** (tie with Qwen3.7-Max)
- Terminal-Bench 2.0: **70.3%** (vs Qwen3.7-Max 69.7%)
- Claw-Eval / ClawProBench / GDPval-AA / Agents' Last Exam: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.3%** (AI/TLDR, vendor) / **87.9%** (Model Beat) — two figures, conflict noted
- Humanity's Last Exam: **35.6%** (Epoch AI via Model Beat)
- AIME 2024/2025: **93.3%**
- AA Intelligence Index: **39** (AI/TLDR); Model Beat composite 62.0 (62nd percentile), Agentic Index 69th percentile, Reasoning & Knowledge 53.0 (top 37%), Math top 38%
- LMArena: text #15, coding #12 (vs Max #13/#10)

Coding:

- SWE-bench Pro: **~60%** (vs Qwen3.7-Max 60.6%)
- SciCode: **46.1%**
- Terminal-Bench 2.0: **70.3%** (above)
- DeepSWE / LiveCodeBench / SWE-bench Verified / Vibe Code Bench: no verified public score found

Long context / multimodal:

- 1M-token window (32,768-token output cap); no MRCR / RULER / LCR score published
- ScreenSpot Pro 79.0 and AndroidWorld 81% (above) are the vision-agent results; no MMMU/Video-MMMU figure captured

### Normalized scores (1–100)

- **Tool use: 79/100.** τ²-bench 93.0% is frontier-tier and AndroidWorld 81% / ScreenSpot Pro 79.0 / MCP Atlas 76.4 are strong agentic results, but Terminal-Bench 2.1 reads 61.0% (AA) / 52.8% (vals.ai) — below Terminal-Bench 2.0's 70.3% — and Terminal-Bench 4.0 1.0%, AutomationBench-AA 17%, the Agentic Index of 17.5 and Harvey's Legal Agent 0.0% (vals.ai) cap the score.
- **Reasoning: 71/100.** GPQA Diamond 87.9–90.3% is near the 90%+ frontier bar and MMLU-Pro 88.5% (rank 8 of 312, 98th pct) and AIME 93.3% are strong, but HLE 33.4–35.6% (under the 40% bar) and AA's current Intelligence Index of 25 (v4.3.2, Max — the 39 this file previously carried is an older index version; BenchmarkList's verified 38.98 read is likewise version-dependent) cap the score; CritPt 9.1% and AA-Omniscience 1 are very weak.
- **Context window: 95/100.** 1M-token window shared across text/image/video; the 32,768-token output cap is a limitation, and no ≥98% retrieval-at-512K+ figure exists, so 100 is not justified.
- **Multimodal: 84/100.** text/image/video in with text out — the +video/PDF band (75–90), with frontier-tier GUI results (ScreenSpot Pro 79.0, AndroidWorld 81%) pushing it toward the top of the band.
- **Coding: 70/100.** Terminal-Bench 2.0 70.3% and SWE-bench Pro ~60% are mid-tier, and SciCode 46.1% sits under the 55% frontier reference; DeepSWE/LiveCodeBench/SWE-bench Verified unpublished.
- **Cost efficiency: 94/100.** $0.40/$1.60 per 1M (≤256K, list; $0.32/$1.28 with the 20% promo) interpolates to ~94 between the ~97 ($0.10/$0.20) and ~88 ($1.25/$4.25) anchors; the 256K–1M tier ($1.20/$4.80) and vision tokens sharing the 1M budget are the caveats.
- **Overall Score: 80/100.** (79+71+95+84+70)/5 = 79.8 → 80 — the budget multimodal agent pick: frontier GUI grounding (ScreenSpot Pro 79.0) and τ²-bench 93.0% at $0.40/$1.60, with mid-tier coding (SWE-bench Pro ~60%, SciCode 46.1%), a weak current composite intelligence index (25 on AA v4.3.2) and Terminal-Bench 4.0 at 1.0% as the gaps.

---

## Update 2026-10-08 (6-day re-research)

**Score revisions: Tool use 82→79, Reasoning 73→71, Overall 81→80** — AA's current page and the Vals/AA component reads filled the missing agentic rows, mostly with caps. Context 95 / Multimodal 84 / Coding 70 / Cost 94 unchanged:

- **AA Intelligence Index: 25 (Max) on v4.3.2** (AA's own page, #26 of 223; OpenRouter carries 25.2) — the 39 this file previously carried (AI/TLDR) is an older index version; BenchmarkList's verified read of 38.98 (rank 61 of 427, 2026-07-21) is likewise version-dependent. Components (AA, vs Qwen3.7 Max): AA-Briefcase 915 (Max: 915), GDPval-AA v2.1 770 (1131), AutomationBench-AA 17% (23%), Terminal-Bench 4.0 1% (2%), SciCode 46% (50%), HLE 36% (41%), GDP.pdf 12% (9%), CritPt 9% (13%), AA-Omniscience 1 (13), AA-LCR 73% (79%).
- New agentic rows: Terminal-Bench 2.1 **61.0%** (AA) / **52.8%** (vals.ai) — below the Terminal-Bench 2.0 70.3% the score previously leaned on; Terminal-Bench Hard **47.0%**; Terminal-Bench 4.0 **1.0%**; AutomationBench-AA **17%**; Agentic Index **17.5**; τ-Bench Banking **17.5%**; Harvey's Legal Agent Benchmark **0.0%** (vals.ai); Finance Agent v2 **38.2%**, SAGE **39.3%**, Tax Agent Bench **38.7%**, Legal Research Bench **16.3%**, MortgageTax **66.2%**, EMB **49.3%**, SkillsBench **54.3%**, Code Migration **12.9%** (all vals.ai); Vals Index **52.3%**, Vals Multimodal Index **53.9%**.
- Reasoning/knowledge fills: MMLU-Pro **88.5%** (rank 8 of 312, 98th pct), SuperGPQA **71.4%** (rank 4 of 22), RealWorldQA **86.9%** (rank 3 of 31), ERQA **69.8%** (rank 7 of 20), Global PIQA **90.3%** (rank 3 of 3), ObviousBench **97.2%** (rank 67 of 254), AIIQ Composite IQ **112** (rank 71 of 147), AA-Omniscience accuracy **22.5%** / non-hallucination rate **72.3%**, IFBench **78.0%**, AA-LCR **73.0%** (AA) / **65.0%** (BenchmarkList component).
- Design Arena per-category Elos: Data Visualization 1283, Website 1276, Game Development 1271, Code Categories 1273, UI Component 1266, 3D 1245, SVG 1209, Asciiart 1152.
- Score impact: Tool use 82→79 (TB 2.1 52.8–61.0%, TB 4.0 1.0%, Agentic Index 17.5 and Harvey Legal 0.0% are new caps against τ²-bench 93.0%); Reasoning 73→71 (AA Index 25 on v4.3.2 replaces the older-version 39); Overall 81→80 ((79+71+95+84+70)/5 = 79.8).

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08)
- Method: public internet research (Alibaba Cloud Model Studio docs, AI/TLDR, ApiDog, Model Beat, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3_7_Plus.md`, using the same headings.
