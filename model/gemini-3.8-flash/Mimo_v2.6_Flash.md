# Gemini 3.8 Flash — findings by Mimo v2.6 Flash

- Source: Google DeepMind/`gemini-3.8-flash`
- Date: 2026-10-06 (UTC) — re-run of the 2026-09-22 research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google DeepMind's Flash-tier reasoning/coding workhorse (released 2026-09-02), third Flash release in six weeks; incremental post-training upgrade over 3.7 Flash aimed at agentic coding, finance/legal agents, and long-horizon SWE at sub-dollar pricing.
- **Provider / access:** Google AI Studio / Gemini API `gemini-3.8-flash` (Chat Completions-compatible via Gemini API); also Gemini app, Sheets, Antigravity, Cloud. OpenCode Zen and gateways mirror the ID.
- **Release / knowledge:** 2026-09-02 GA; knowledge cutoff March 2026 (some domains January 2025).
- **IDs:** `gemini-3.8-flash` (Google); Zen route `opencode/gemini-3.8-flash` where listed.
- **Context window:** 1,048,576 tokens input / 65,536 max output (model card ~64K).
- **Modalities:** text/image/audio/video in; text out; reasoning yes (effort levels); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-06):** intro $0.75 in / $3.75 out per 1M (through 2026-12-31), cached $0.075; from 2027-01-01 $1.50/$7.50. Batch $0.375/$1.88; priority $1.35/$6.75 (BenchLeader provider table, 2026-10-05 — unchanged). Paid, not free — intro expires year-end.
- **Architecture:** proprietary (based on Gemini 3.7 Flash post-training; no new pretrain per model card).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (Google model card) / **90.8%** (Google dev guide) / **87.6%** (AA high) / **81.3%** (Vals AI independent)
- Terminal-Bench 4.0: **19.1%** (Google model card; vs Opus 5 51.8%)
- OSWorld 2.0: **59.0%** (Google model card)
- GDPval-AA v2: **1545** (Google/Coursiv)
- Tau3-Banking: **38.1%** (Google; up from 30.9% on 3.7)
- AutomationBench: no verified public score found
- Claw-Eval: no verified public score found
- Vals Finance Agent v2: **61.4%** (Google)
- Harvey Legal Agent: **10.0%** (Google)

Reasoning / knowledge:

- GPQA Diamond: **94.4%** (Vals AI independent; rank 4/138)
- HLE-Verified: **54.9%** (Google model card) / **47.8%** (AA no-tools)
- MMLU-Pro: **90.2%** (Vals AI)
- Artificial Analysis Intelligence Index: **41** high effort / **39.8** medium / **33.5** low (AA v4.3.2 via BenchLeader, 2026-10-05 — high #52, medium #58 of 756; release-era 59 superseded, see Fresh-source note)
- CritPt: no verified public score found; AA-LCR (long-context): **80.7–84.0%** across efforts (best **84.0%, #11** of tracked models) and MLCR **21.7% (#16)** (Artificial Analysis via BenchLeader, 2026-10-05) — first verified long-context rows for 3.8 Flash
- CharXiv Reasoning (no tools): **86.2%** (Google)
- MMMU-Pro: **84.5%** (AA, low effort) / **89.1% (Vals AI, #4)**; LMArena Text **1495 (#8)**; Vals Index **54.8 (#15)**; Epoch Capabilities Index **156.9 (#15)** (BenchLeader, 2026-10-05)
- LiveBench: **75.8% (#33)** composite; Language 87.8% (#7); Instruction-Following 81.4% (**#1**) (LiveBench via BenchLeader, 2026-10-05)

Coding:

- DeepSWE v1.1: **73.7%** (Google) / **74%** (Datacurve high effort; ties Opus 5)
- SWE-bench Verified: **80.0%** (Vals AI, mini-swe-agent)
- SWE-Bench Pro: **61.6%** (Google)
- SWE-Atlas: **51.9%** (Google)
- LiveCodeBench: **89.5%** (Vals AI; rank 3)

Long context:

- No MRCR/RULER row published for 3.8 specifically; 1M window documented. Long-context reasoning now has proxy evidence: **AA-LCR up to 84.0% (#11)** and MLCR 21.7% (BenchLeader 2026-10-05) — but no ≥98% retrieval-at-depth figure, so the context score stays at 95. BenchLeader long-context category: **68**.

- Fresh-source note (2026-09-28 re-audit, user-signed-off exception to RULES.md permanence): current AA-native **Intelligence Index 41** (high effort) contradicts the release-era 59 — scores unchanged pending re-derivation.
- Fresh-source note (2026-10-06 re-run, user-approved enrichment): BenchLeader (2026-10-05) composite index **64.7, #48 of 756** (medium best; high 63.8, low 61.2) with category scores Agents&tools 75 / Knowledge 75 / Reasoning 63 / Coding 58 / Multimodal 68 / Long-context 68; AA high-effort index re-confirmed at 40.9≈41. Filled former CritPt/LCR and long-context gaps with AA-LCR/MLCR rows; added MMMU-Pro, LMArena, LiveBench, Vals/Epoch composite rows. Scores unchanged: (89+91+95+90+89)/5 = 90.8 → 91.

### Normalized scores (1–100)

- **Tool use: 89/100.** TB2.1 ~87–91 across harnesses, OSWorld 59%, Tau3 38.1%, GDPval 1545; capped hard by TB4.0 only 19.1% on the current-generation agentic harness.
- **Reasoning: 91/100.** GPQA 94.4%, HLE-Verified 54.9%, AA Index 41 (v4.3.2 refresh); capped because no-tools HLE ~47.8% and the refreshed index sits mid-pack.
- **Context window: 95/100.** 1M documented; no ≥98% retrieval evidence at 512K+ for this exact model (MRCR row missing), so 95 not 100.
- **Multimodal: 90/100.** Text/image/audio/video in (audio input pushes into 90+ band); text-only out caps at 90.
- **Coding: 89/100.** DeepSWE ~74 (near board top), SWE-bench 80%, LCB 89.5%, SWE-Pro 61.6%; capped by TB4.0 19.1% and SWE-Atlas 51.9% trailing frontier.
- **Cost efficiency: 91/100.** $0.75/$3.75 intro (≈0.60/2.20 band + a little for stronger output) with year-end doubling to $1.50/$7.50; ~$0.58/AA-task keeps it cheapest at its intelligence tier.
- **Overall Score: 91/100.** Mean of five quality dims (89+91+95+90+89)/5 = 90.8 → 91. Best-fit: high-volume analytical + agentic coding default when sub-$1 pricing matters; not yet a frontier TB4.0/OSWorld autonomous agent.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-06
- Method: public internet research (Google model card/blog, AA, Vals/BenchLM, DataCamp, Coursiv, IntuitionLabs, The Model Gap); re-run 2026-10-06 (user-approved enrichment): BenchLeader model page (index 64.7 #48/756, category scores, AA-LCR/MLCR, MMMU-Pro, LMArena, LiveBench, provider price table) — filled the CritPt/LCR and long-context gaps; AA index cross-checked (40.9 high). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
