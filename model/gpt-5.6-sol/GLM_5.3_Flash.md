# GPT-5.6 Sol — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.6-sol`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Discovered during GPT-6 Astra research (Step 2, dynamic discovery): OpenAI's on-sale flagship and the comparison column in nearly every September 2026 launch table had no folder. Appended at queue end.

## Model card

- **Name:** GPT-5.6 Sol (flagship of the GPT-5.6 family; no Free-tier wording)
- **Short description:** OpenAI's mid-2026 flagship and direct predecessor to GPT-6 Astra — the model every September 2026 launch table benchmarks against. Still on sale at $4/$20; Astra's launch repriced the family 2.5x upward. The 2026-10-11 second pass fills the reasoning picture: GPQA 94.6%, ARC-AGI-2 92.5% (best measured in this repo) and FrontierMath Tier 4 83.0%. Superseded for new work by GPT-6 Astra (and now GPT-6.1 Sol).
- **Provider / access:** OpenAI API (`gpt-5.6-sol`, max reasoning tier tracked by AA); 7 API providers on AA. Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Released July 9, 2026 (AA release record; same day as sibling GPT-5.6 Luna GA). Knowledge cutoff not verified in reviewed sources (sibling Luna: Feb 16, 2026).
- **IDs:** `gpt-5.6-sol` (siblings: `gpt-5.6-luna`, `gpt-5.6-terra`, successors `gpt-6-astra`, `gpt-6.1-sol`).
- **Context window:** 1M tokens (AA; BenchLM lists 1.05M); max output not surfaced this pass. Verified Sol-specific terms (developers.openai.com, 2026-10-08): prompts with >272K input tokens are priced at 2x input and 1.5x output for the full request.
- **Modalities:** Text + image in; text out. Reasoning: yes (max effort tracked). Audio/video not supported per the family pattern (AA lists text/image only).
- **Pricing (as of 2026-10-11):** $4.00 in / $20.00 out per 1M — **promotional pricing, available at least through November 21, 2026** (cut from list $5/$30 on Aug 21, 2026; developers.openai.com + AWS what's-new + Vercel changelog); 90% cache discount (AA). AA cost per task $1.99; blended $3.08/1M. No free tier.
- **Architecture:** Proprietary, closed weights; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **91.9%** (OpenAI GPT-5.6 launch table via benchlm.ai — fills the TB2.1 gap); Vals independent: **85.8%**
- BrowseComp: **92.2%** (OpenAI); OSWorld 2.0: **62.6%** (OpenAI)
- τ²-bench: **85.1%** (AA, independent)
- AA ITBench-AA: **56.2%**; terminalBenchHard: **65.9%**; AA Agentic Index: **50.5%**; AA-AnalystAgent: **47.5%** (AA, independent)
- GDPval-AA: **1735** (OpenAI launch table; the 2026-10-08 xAI-table read was 1728 — consistent); AA-normalized: **55.6%**
- AutomationBench-AA: **60%** (AA; Astra 69%); AutomationBench (OpenAI harness): **18.1%**
- Terminal-Bench v4.0: **40%** (AA) / **37%** (AA Coding Agent Index harness; Astra 56–59%); Terminal-Bench v3.0: **34.6%** (xAI table)
- Toolathlon: **58%** (OpenAI — weak); CyberGym: **84.5%**; ExploitGym: **33.7%**; ExploitBench: **78.5%**; SWE-Atlas-QnA: **54%**; ScreenSpot-Pro: **76.9%**; Agents' Last Exam: **53.6%**; BenchCAD: **83.3%**; APEX-Agents: **56.7%** (OpenAI/xAI tables)
- MazeBench ASCII: **13%** (added 2026-10-16); Gray Swan IPI: **27.0%** (added 2026-10-16 — notably high injection rate for a frontier model)
- AA-IFBench: **72.7%** (added 2026-10-16)
- ApprenticeBench (GUI): **26%** (NeoCognition, independent)
- Claw-Eval / Tau3 / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (OpenAI GPT-5.6 table); AA independent: **94.1%**; Vals: **95.2%** — fills the gap the 2026-10-08 pass marked missing, elite across all three sources
- ARC-AGI-2: **92.5%** (ARC Prize verified, arcprize.org/results/openai-gpt-5-6 — **best measured in this repo**, ahead of Opus 5.5's 91.7%); ARC-AGI-1: **96.5%** (Sol Max verified); ARC-AGI-3: **7.8%**
- FrontierMath v2: **89.0%** Tiers 1–3 / **83.0%** Tier 4 (OpenAI; legacy FrontierMath 89%) — best measured in this repo
- CritPt: **32.3%** (AA); AA-LCR v1.1: **84.0%** (AA — fills the LCR gap, strong)
- AA-HLE: **49.5%** (AA, independent)
- Artificial Analysis Intelligence Index: **47 at max, #14/200** (AA model page, 2026-10-08 direct read) — **OpenAI's launch table cites 58.9** (via benchlm.ai, 2026-10-10); version/effort discrepancy flagged, the AA-direct number stays primary
- MRCR v2 8-needle: **91.5%** @256K–512K and **73.8%** @512K–1M (OpenAI table)
- AA-Omniscience: **59.4% accuracy / 92.2% row (published as "Hallucination Rate" on benchlm; AA's own metric is the non-hallucination rate — framing ambiguity flagged, consistent with the 2026-10-08 reading) / 22.0 index**
- MMLU-Pro: **89.1%** (Vals); HealthBench Professional: **60.5%**; HealthBench Hard: **33.1%** (system card); LABBench2: **82.1%** (competitor-cited); GeneBench-Pro: **28.7%** (OpenAI tech report)
- AA-Briefcase: **1502** Elo (xAI table) — still the AA-measured leader in Presentation Quality Elo

Coding:

- SWE-bench Pro: **64.6%** (OpenAI GPT-5.6 table — fills the gap; weak vs the Claude class)
- SWE-bench (Vals): **96.2%** (Vals, independent — strong); LiveCodeBench (Vals): **82.6%** (fills the LiveCodeBench gap)
- DeepSWE v1.1: **72.7%** (OpenAI; corroborates the 72–73% AA/xAI reads)
- FrontierCode 1.1 (Extended): **60.6%** (Cognition/Devin — corroborates the xAI read); FrontierSWE v2: **32.2%** (Proximal — weak)
- CursorBench 3.2: **67.2%**; CursorBench 4.0: **41.7%**; VulcanBench v3: **87.0%**; VulcanBench CII v1: **86.5%**
- AA Coding Index: **77.4%** (AA); AA-SciCode: **57.1%** (AA); Bug Hunt Bench: **42.0 fixes**
- SWE-bench Verified: no verified public score found for Sol specifically

Long context:

- AA-LCR v1.1: **84.0%** (AA — first independent long-context number; strong)
- MRCR v2 8-needle: **91.5%** @256K–512K / **73.8%** @512K–1M (vendor; the deep-band weakness stands but LCR moderates it)

Multimodal:

- MMMU-Pro: **83.0%** / **84.6%** with Python (OpenAI); AA-MMMU-Pro: **83.4%** (AA) — measured vision now backs the image-input claim

### Normalized scores (1–100)

- **Tool use: 82/100.** (Was 80 on the prior pass.) TB2.1 91.9% (vendor; 85.8% Vals) and BrowseComp 92.2% fill the prior coverage gap, τ²-bench 85.1% and terminalBenchHard 65.9% corroborate; TB4.0 37–40%, Toolathlon 58% and ApprenticeBench 26% keep it below the Astra/Opus class.
- **Reasoning: 90/100.** (Was 78 on the prior pass.) The largest correction of this pass: GPQA 94.1–95.2% (three sources), ARC-AGI-2 92.5% and FrontierMath T4 83.0% are all best-measured-in-repo rows, with CritPt 32.3% elite-class; only the AA-direct Index (47) vs vendor-cited 58.9 discrepancy, AA-HLE 49.5% and the Omniscience framing ambiguity keep it out of the 92+ tier.
- **Context window: 91/100.** (Was 89 on the prior pass.) 1M window with MRCR 91.5% @256–512K; the deep-band 73.8% remains the weakest frontier deep-retrieval evidence, but the newly measured AA-LCR 84.0% is strong enough to move it up a point.
- **Multimodal: 65/100.** Text+image in / text out — middle of the 60–70 image-in band; measured vision (MMMU-Pro 83.0/83.4) is strong for the band.
- **Coding: 84/100.** Vals SWE-bench 96.2% and TB2.1 91.9% are strong, DeepSWE 72.7% and AA Coding Index 77.4% are frontier-adjacent — but SWE-bench Pro 64.6%, FrontierSWE v2 32.2% and TB4.0 37–40% trail the Astra/K3/Fable band, so the score holds.
- **Cost efficiency: 52/100.** $4/$20 (promotional through Nov 21, 2026 — reverts to list $5/$30 after) interpolates between the $3/$15→60 and $10/$50→30 anchors; $1.99/task is mid-pack; the >272K surcharge (2x/1.5x) bites long-context work. No free tier.
- **Overall Score: 82.4/100.** (Was 79.2 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (82 + 90 + 91 + 65 + 84) / 5 = 412/5 = 82.4 — raised on the 2026-10-11 second pass because the newly published OpenAI table, ARC Prize verification and AA/Vals boards convert the reasoning/context/tool gaps into elite measured evidence. Best fit: still a capable on-sale flagship for agentic and math-heavy work at $4/$20 — GPT-6 Astra (and GPT-6.1 Sol) supersede it on most dimensions; new work should default to the successor.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 citing OpenAI's GPT-5.6 launch table + system card, ARC Prize verified results, Vals AI / AA / Cursor / Proximal / Cognition leaderboards via benchlm.ai, plus the prior 2026-10-08 AA/xAI pass; 2026-10-16 re-check: BenchLM 70-row refresh corroborates all rows (MazeBench 13%, Gray Swan 27.0%, AA-IFBench 72.7% added) — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
