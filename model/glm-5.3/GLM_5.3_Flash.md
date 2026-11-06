# GLM-5.3 — findings by GLM 5.3 Flash

- Source: Z.ai / Zhipu AI (`glm-5.3`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3
- **Short description:** Z.ai's August 2026 flagship — the same ~750B MoE base as GLM-5.2 with every gain from scaled-up post-training (no new pretraining); built for long-horizon coding agents, with a standout offensive-security capability (ExploitBench more than doubling). Flagship weights published on Hugging Face Aug 28, 2026 under a custom glm-5.3 license. BenchLM ranks it #20 of 889 (68.64).
- **Provider / access:** Z.ai API (`glm-5.3`, OpenAI-compatible at `https://api.z.ai/api/coding/paas/v4`, plus Anthropic-compatible endpoint `/api/anthropic`); GLM Coding Plan flat rate (from ~$12.60/mo Lite annual); open weights `zai-org/GLM-5.3` on HF. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-08-14; knowledge cutoff not verified.
- **IDs:** `glm-5.3` (Z.ai API). No Free ID on Zen.
- **Context window:** 1,000,000 total tokens (BenchLM concurs); 131,072 max output (verified via Z.ai docs and theairankings).
- **Modalities:** text input; text output; multilingual; reasoning always on (cannot disable — `thinking.type: "enabled"` with `reasoning_effort`: low/high/max, default max); tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** $1.40 / $4.40 per 1M in/out; cached input $0.26 per 1M — unchanged from GLM-5.2/5.1. China-hosted API; Zhipu is on the US Entity List (data-residency/compliance caveat).
- **Architecture:** Mixture-of-Experts ~750B total / ~40B active — same base as GLM-5.2; full weights published Aug 28, 2026 (the MIT-licensed GLM-5.3-Flash is a separately trained sibling).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1769** (Z.AI model card via benchlm.ai, updated 2026-10-10 — fills the gap the 2026-10-08 pass marked missing; AA-normalized **57.6%**)
- Terminal-Bench 2.1: **88.2%** (vendor; AA independent: **83.9%**; Vals: **71.5%** — wide spread, all three listed)
- AA Terminal-Bench 4.0: **41.9%** (AA — much better than the TB3.0 28.3% weakness; new)
- Toolathlon-Verified: **73.0%** (model card — fills the gap); AA AutomationBench-AA: **62.2%** (corroborates the vendor 48.2 on a different harness); AA Agentic Index: **53.4%** (AA)
- AA Tau3-Banking: **50.3%** (AA — fills the Tau3 gap); AA-Briefcase: **1510 Elo** (Nov 6 re-read 1503); AA EnterpriseOps-Gym: **36.4%**; AA ITBench: **46.1%**; AA GDP.pdf: **11.2%**; **AA-AnalystAgent: 38.8%** (NEW, BenchLM Nov 6); **AA Cyber Index 36.4% / CWE-Bench-AA 55.8% / DeepsecBench-AA 24.3% / CyberGym-E2E-AA 29.0%** (NEW AA cyber suite); **Finch 65.1% / b3 Agent Security 93.0% / Cyber Misuse Refusal 87.0%** (NEW, Mistral Large 4 comparison table)
- Terminal-Bench 3.0: **28.3%** (vendor — corroborated); AutomationBench: **48.2%**; Agents' Last Exam: **28.5%** (corroborated)
- CyberGym: **84.5%**; ExploitGym: **15.0%**; ExploitBench: **54.4%** (security suite, corroborated)
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (AA, independent — fills the gap the prior pass marked missing; elite); Vals: **88.1%**
- AA-HLE: **42.3%** (AA — above the 40% bar; corroborates the vendor HLE-with-tools 62.5% on a different setting)
- Artificial Analysis Intelligence Index: **44.8** (AA current board — corroborates the re-based 45 reading); Nov 6 refresh reads **31.6%** — an AA Index **version rebase** (v4.3.2→v5.0-class scale), documented per RULES, never averaged across scales
- AA-LCR v1.1: **79.7%** (AA — fills the long-context gap); MLCR-AA: **48.3%** (fills the MLCR gap; Nov 6 re-read **17.2%** — large downward re-measurement, same instability as claude-haiku-5.5, both cited); CritPt: **19.1%** (fills the CritPt gap)
- MMLU-Pro: **86.8%** (Vals)
- AA-Omniscience: **33.9% accuracy / 29.6% non-hallucination row / 14.3 index** (AA — weak); Nov 6 re-read **32.3% accuracy / 38.9% hallucination / 6.0 index** — re-measured, both cited
- FrontierMath v2: Tiers 1–3 **68.8%**, Tier 4 **29.3%** (Epoch AI leaderboard — added 2026-10-16, previously unmeasured; solid)
- MazeBench ASCII: **0%**; Hermes Bench: **71.8%** / Hermes Index: **39.2%**; AA-Briefcase: **Elo 1508** (all added 2026-10-16)
- Gray Swan IPI (15 attempts): **31.5%** (competitor-reported — Google's Gemini 4 Argon launch chart; weak injection resistance)
- HLE (with tools): **62.5%** (vendor — corroborated); Output speed: 84.7 tok/s; verbosity 170M index tokens

Coding:

- FrontierSWE: **78.1%** (model card via benchlm.ai — new, strong); Vals SWE-bench: **95.4%** (Vals, independent — fills the SWE gap, strong); LiveCodeBench (Vals): **80.5%** (fills the gap)
- AA Coding Index: **74.8%** (AA — new, frontier-adjacent); AA-SciCode: **59.0%** (AA — fills the SciCode gap)
- DeepSWE v1.1: **66.9%** (corroborated); SWE-Marathon v1.1: **42.5%** (corroborated); NL2Repo: **58%** (new); FrontierSWE v2: **30.2%** (Proximal — weak); ProgramBench: **19.0%** (weak); VulcanBench v3: **78.3%**; OpenHarmony: **60.8%**; PostTrain: **39.8%**
- SWE-bench Verified / SWE-bench Pro (vendor harness): still no verified public score — but the Vals SWE-bench 95.4% row now provides independent coding corroboration
- Bug Hunt Bench: **19.0 fixes**; Z.ai Code Bench: **34.5%** (in-house, prior pass)

Long context:

- AA-LCR 79.7% is the first measured long-context number (solid); 1M window; no MRCR/RULER value found

Multimodal:

- Design Arena Website: **1306** (OpenRouter; Nov 6 re-read 1288 — minor drift); text-only in/out — no vision path, the clearest capability gap vs the 2026 frontier

### Normalized scores (1–100)

> Scores unchanged on the 2026-10-11 second pass: the AA/Vals boards fill nearly every prior gap (GPQA 91.7, GDPval 1769, FrontierSWE 78.1, LiveCodeBench 80.5, SciCode 59.0, LCR 79.7) with evidence landing inside the existing bands; the SWE-bench absence is now offset by independent corroboration.

- **Tool use: 90/100.** GDPval-AA 1769 (normalized 57.6%) now fills the missing headline row and sits near the ~1750+ frontier ref, with Toolathlon 73.0%, AA AutomationBench 62.2%, Tau3 50.3% and AA TB4.0 41.9% rounding out a strong profile; the Vals TB2.1 gap (71.5 vs 88.2) keeps it under 95.
- **Reasoning: 88/100.** AA-GPQA 91.7% (elite) and AA-HLE 42.3% (above bar) fill the knowledge gaps, AA-LCR 79.7% is solid and CritPt 19.1%/MLCR 48.3% are reasonable — the AA Index of 44.8 keeps it under 90, now with balanced rather than thin evidence.
- **Context window: 95/100.** 1M tokens (BenchLM concurs) maps to the ≥1M tier; AA-LCR 79.7% is the first measured evidence; no ≥98% retrieval at 512K+ keeps it off the maximum.
- **Multimodal: 15/100.** Text-only in/out — no vision path, the clearest capability gap vs Sol/Fable 5/Grok 4.6/Kimi K3.
- **Coding: 87/100.** FrontierSWE 78.1% and Vals SWE-bench 95.4% are new strong rows, LiveCodeBench 80.5% and AA Coding Index 74.8% fill the gaps, and TB2.1 88.2% stays elite; FrontierSWE v2 30.2% and ProgramBench 19.0% keep it under 90.
- **Cost efficiency: 92/100.** $1.40/$4.40 per 1M (cached $0.26) sits just above the ~$1.25/$4.25 = ~88 methodology reference; $0.68/task was the lowest in the frontier cluster; open weights add a free self-hosting lever — docked on verbosity (170M tokens vs 72M median).
- **Overall Score: 75.0/100.** Mean of the five quality dims per `RULES.md` (Cost excluded): (90 + 88 + 95 + 15 + 87) / 5 = 375/5 = 75.0 — unchanged; the evidence base matured from thin to comprehensive without moving the bands. Best-fit: long-horizon coding agents at frontier-cluster quality and open-model prices — best avoided where vision, Western data residency, or injection-sensitive deployments are required.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-06 (re-research pass; prior 2026-10-16)
- Method: public internet re-research via direct page fetch (web-search quota exhausted): BenchLM GLM-5.3 page fetched 2026-11-06 (Nov 6 data, 63 rows) — all prior rows re-confirmed; Finch/b3/Cyber-Refusal and four AA cyber rows added; notable re-reads cited (MLCR 48.3→17.2% re-measured, Omniscience index 14.3→6.0, AA Index 31.6% = v5.0-class rebase of 44.8, GDPval 57.6→57.5%); composite 61.34 #49/1016 — no score changes; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_5.md`, using the same headings.
