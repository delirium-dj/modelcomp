# Gemini 3.7 Flash — findings by GLM 5.3 Flash

- Source: Google (`gemini-3.7-flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-11-05 (prior passes 2026-09-18, 2026-10-05, 2026-10-16): the headline
> change is **deprecation** — Google retired `gemini-3.7-flash` from selection in early
> October 2026 and auto-routes its API traffic to `gemini-3.8-flash`. New independent rows
> (TB 4.0, OSWorld conflict, AutomationBench conflict, MRCR at 1M, re-verified ARC-AGI-2)
> moved Tool use 91→89; other dimensions hold; Overall recomputes to 92 (91.6).

## Model card

- **Name:** Gemini 3.7 Flash (retired August 2026 Flash tier — coding/agent workhorse, now a routed alias)
- **Short description:** Google's 2026-08-13 Flash release: built on 3.6 Flash with algorithmic improvements to the reasoning core (not a new pretrain). Terminal-Bench 2.1 85.8% (official), DeepSWE 65.3% at an introductory $0.75/$3.75. **Since early October 2026 it is a deprecated alias: requests to `gemini-3.7-flash` are silently served by `gemini-3.8-flash`.**
- **Provider / access:** Google — Gemini API. **Deprecated (October 2026):** no longer selectable in Google AI Studio; API requests auto-route to `gemini-3.8-flash`; endpoint stays up with no announced shutdown ("N/A" on the deprecations page). This contradicts Google's 2026-09-02 launch post that 3.7 Flash "remains fully supported for efficiency-first workloads." Also surfaced via Vertex AI (flex/batch tiers).
- **Release / knowledge:** GA 2026-08-13. Knowledge cutoff March 2026, some domains limited to January 2025 (Google model card).
- **IDs:** `gemini-3.7-flash` (Google; live but routed). Free tier now applies to the 3.8 Flash route, not to a 3.7 selection.
- **Context window:** 1,048,576-token input / 65,536-token output (official docs page, verified this pass).
- **Modalities:** text, image, video, audio, PDF in; text out. Thinking levels low/medium/high (`minimal` errors out); tool suite: function calling, structured outputs, code execution, computer use, search + Maps grounding, URL context, file search, caching, batch/flex/priority serving.
- **Pricing (as of 2026-11-05):** the pricing page **no longer lists 3.7 Flash** — its line was removed at retirement. The routed rate is 3.8 Flash's: $0.75/$3.75 per 1M (cached $0.075) through 2026-12-31, doubling to $1.50/$7.50/$0.15 on 2027-01-01; Vertex flex/batch runs $0.375/$1.875 (abracadabra, 2026-11-04). Pre-retention historical grid preserved below for the record.

### Raw benchmarks found

> Rows below are attributed to the 3.7 Flash checkpoint as evaluated before routing; after October 2026 the same ID is served by 3.8 Flash, so fresh runs of "3.7 Flash" are no longer obtainable.

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (Google model card; AA independent run agrees at 85.8%; Vals AI harness: **77.5%** — harness split, both cited); rank #13/105 (leader Fable 5.1 at 91.4%)
- Terminal-Bench 4.0: **13.6%** (AA independent, high thinking, #32 of 96) / **11.21%** (official TB leaderboard, mini-SWE-agent, mean of 5) / **14%** (AA comparison page) — NEW, weak
- Terminal-Bench 3.0: **14.9%** (Google model card)
- OSWorld 2.0: **47.9%** (BenchLM via Google model card) — CONFLICT: **38.1%** (aireleasetracker lab row)
- Agents' Last Exam: **26.3%** (Google model card)
- AutomationBench: **30.4%** (Google launch table) — CONFLICT: **52.3%** #3 of 48 (BenchmarkList, self-reported 2026-08-26)
- GDPval-AA: **Elo 1525–1527** (model card / BenchmarkList) with per-effort rows 1446 (low) / 1492 (medium) / 1516 (high); **44.6%** normalized (AA)
- AA Harvey LAB v1.0: **90.7%** (model card); Harvey Legal Agent Benchmark (launch table): **8.8%**
- AA Agentic Index: **36.4%**; AA-AnalystAgent: **60.0%**; AA-Briefcase v1.1: **1113 Elo** (AA comparison page — low against the 1400–1800 field)
- ApprenticeBench (GUI): **16%**; MazeBench ASCII: **1%**; RuneBench: **6** attack-XP/min profile (#8 of 61)
- GDP.pdf: **34.0%** (launch) / **23.8%** (surge.ai strict all-pass, independent)

Reasoning / knowledge:

- GPQA Diamond: **94.5%** (AA) / **93.9%** (Vals AI) — consistent
- HLE: **47.9%** (AA-HLE); HLE-Verified **53.6%** is attributed by BenchLM/aireleasetracker to the 3.8 Flash card's 3.7 Flash column — attribution caveat kept
- ARC-AGI-2: **84.6%** high (re-verified on arcprize.org 2026-10-29; medium 63.7%, low 52.9%); ARC-AGI-1: **95.5%** high
- FrontierMath v2: **71.6%** Tiers 1–3 / **36.6%** Tier 4 (Epoch AI)
- MMLU-Pro: **90.1%** (Vals AI)
- Artificial Analysis Intelligence Index: **56** at launch (AA article, v4-era; Pareto-frontier on Intelligence vs time-per-task) — the 39.1 recorded 2026-10-16 and later rescalings are not comparable across AA index versions
- CritPt: **14.3%**; AA-Omniscience: accuracy 55.3% / hallucination 64.5% / index 26.5
- BioMysteryBench: **87.1%** human-solvable / **43.5%** hard; LABBench2: **82.1%**; BioSecBench-Function: **40.1%**; LifeSci Diamond strict: **1.8%**
- GDM-MRCR v2 (8-needle): **97.0%** @128k average; **62.5%** @1M pointwise (NEW — degrades with depth)

Coding:

- SWE-bench (Verified harness): **80.80% ±1.76** (Vals AI, independent)
- LiveCodeBench: **88.7%** (Vals AI)
- AA Coding Index: **76.1%**; AA-SciCode: **57.2%**
- DeepSWE v1.1: **65.3%** (launch) — independent mini-SWE-agent run **65.49%** (mean of 4, medium effort) confirms
- FrontierCode 1.1 Main: **43.6%**; FrontierSWE v2: **20.3%** (Proximal, weak)
- Code Arena (web dev): **1588 Elo**; threejseval: **1468**; SWE-Bench Pro: no verified public score found

Multimodal:

- AA-MMMU-Pro: **85.5%**; CharXiv: **88.7%** with tools / **84.5%** without; LVBench (video): **85.4%**; Chartography: **40.4%** (surge.ai); Design Arena Website: **1305 Elo**

Long context:

- Window: 1,048,576 in / 65,536 out; retrieval: MRCR v2 **97.0%** @128k avg, **62.5%** @1M pointwise; AA-LCR **81.7%**

### Normalized scores (1–100)

- **Tool use: 89/100.** CHANGED from 91 — the new TB 4.0 rows (11.2–14% across two independent sources), the OSWorld 2.0 conflict (38.1% vs 47.9%), and the Harvey-LAB launch-table 8.8% narrow the agentic edge further; TB2.1 85.8% (double-confirmed) and GDPval ~1525 keep it elite-adjacent.
- **Reasoning: 88/100.** Unchanged — ARC-AGI-2 84.6% re-verified by ARC Prize on 2026-10-29, GPQA 94.5/93.9 and FrontierMath hold; HLE 47.9% and CritPt 14.3% cap below the 90s.
- **Context window: 98/100.** Unchanged — 1M official with 97% MRCR at 128k; the new 62.5% MRCR pointwise at 1M shows depth falloff but does not move the tier.
- **Multimodal: 90/100.** Unchanged — modality breadth plus MMMU-Pro 85.5%, CharXiv 88.7%, LVBench 85.4%; text-only output.
- **Coding: 93/100.** Unchanged — DeepSWE independently confirmed at 65.49%; LiveCodeBench 88.7% and AA Coding Index 76.1% vs FrontierSWE v2 20.3% still balance to the same band.
- **Cost efficiency: 88/100.** Unchanged rate, changed status — $0.75/$3.75 through 2026-12-31 (doubling 2027-01-01) now survives only via the 3.8 Flash route; Vertex flex at $0.375/$1.875 is the cheapest live path; the pricing page no longer lists 3.7 Flash at all.
- **Overall Score: 92/100.** (89 + 88 + 98 + 90 + 93) / 5 = 458/5 = 91.6 → 92 (was 92.0). Best fit: as a selectable SKU it no longer exists — pin `gemini-3.8-flash` instead; the scores above describe the August–September checkpoint that older integrations were benchmarked against.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research (3 web searches: Google model page + deprecations page + changelog, weneedai/S5 Labs retirement coverage, abracadabra pricing, Tokens or Towers + BenchmarkList + aireleasetracker + benchlm + agi.jetzt rows, ARC Prize re-verification, AA comparison page); conflicts resolved and documented inline (TB4.0 dual-source, OSWorld 38.1 vs 47.9, AutomationBench 30.4 vs 52.3, HLE-Verified attribution); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
