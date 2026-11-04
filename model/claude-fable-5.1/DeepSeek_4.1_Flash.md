# Claude Fable 5.1 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Fable 5.1 (`anthropic/claude-fable-5.1`)
- Date: 2026-10-16 (UTC) — rewrite; re-verified 2026-10-18; enriched 2026-10-24; re-researched 2026-11-04
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-research pass — 2026-11-04** (second pass, user-requested). Fresh sources this pass: BenchLM (`claude-fable-5-1`, **64 rows**, **81.08/100, #7 of 1008** — was 58 rows, 83.07, #4 of 992), Artificial Analysis model page, Anthropic system card, Vals AI, Epoch AI, Cognition.
> **Refreshed values:** **AA Intelligence Index 49.0** (was 53.4); AA-Omniscience **index 46.3 / accuracy 68.4% / hallucination 70.0%** (was 43.5 / 67.2 / 72.6 — accuracy up, hallucination still very high); GDPval-AA Elo **1764** (was 1754 / 1853 across earlier reads); AA-Briefcase **1669** (was 1672).
> **Corrected:** **MLCR-AA 15.6%** — the 71.1% previously recorded is superseded (medical long-context is a weak row); general long-context AA-LCR 85.3% stands.
> **Newly captured rows:** FrontierCode 2.0 **32.4%** (Cognition); AA-AnalystAgent **57.5%**; GDP.pdf 26.2%; OSWorld 2.1 **80.7%** (fallback-config row via the Opus 5.5 system card); ParseBench 78.12%; Gray Swan IPI **1.0%** (tied lowest); cyber rows (AA Cyber Index 25.0, CWE-Bench-AA 50.8, DeepsecBench-AA 23.5, CyberGym-E2E-AA 0.8%); Toolathlon Pass³ 73.1% / avg 23.7 turns; Design Arena 1312.
> **Context:** the Mythos-class line has since been expanded by the tracked `claude-mythos-5` (cyber-defense flagship, queue 89.6) while Opus 5.5 (86.29 BenchLM) leads Anthropic's general-purpose tier.
> **No score change:** the refreshed evidence reconfirms the maximum-reliability agentic/coding profile at premium pricing; scores held at 90.
> Sources this pass: https://benchlm.ai/models/claude-fable-5-1 · https://artificialanalysis.ai/models/claude-fable-5-1 · https://www.vals.ai/models/anthropic_claude-fable-5-1 · https://epoch.ai/benchmarks/frontiermath-tier-4-v2 · https://cognition.com/blog/frontier-code-2.0

> **Enrichment pass — 2026-10-24** (second pass, user-approved). BenchLM (`claude-fable-5-1`) re-read on 2026-10-23 carried **58 source-displayable rows** (was 34 on 2026-10-18) and computed **83.07/100, #4 of 992** (was #4 of 228). Newly captured then: AA Agentic Index 58.0%, AA Harvey LAB v1.0 93.0%, GDPval-AA 1754 Elo / 62.7%, AA-Briefcase 1672, aaTerminalBench21 91.4% / AA TB4.0 52.0%, AA Tau3-Banking 47.2%, AA AutomationBench 59.4%, ApprenticeBench 72%, AA ITBench 49.5%, Toolathlon 77.8%, CWE-bench 58.0%, MazeBench 10%; Coding: SWE-bench Pro 81.2%, SWE Multilingual 89.1%, SWE Multimodal 54.7%, DeepSWE 67.4%, FrontierSWE v2 56.3%, ProgramBench 87.6%, CursorBench 3.2 73.4% / 4.0 51.8%, SciCode 63.1%, LiveCodeBench 90.5%, AA Coding Index 81.6%, Bug Hunt 43.0 fixes, PostTrainBench 40.2%; Reasoning: ARC-AGI-2 90%, AA-LCR 85.3%, CritPt 29.7%, GraphWalks 65.0%; Knowledge: HLE 65% (60.9% w/o tools), AA Intelligence Index 53.4%, AA-GPQA 93.7%, AA-HLE 59.1%, AA-Omniscience 43.5/67.2/72.6, MMLU-Pro 92.4%; FrontierMath v2 T1–3 90.175% / Tier-4 87.805%.

> **Re-verified 2026-10-18.** BenchLM (`claude-fable-5-1`, 34 rows) computed an overall **83.09/100 (#4 of 228)** and re-confirmed the prior pass. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources). Independently re-sourced: GPQA Diamond 93.4% (Vals), MMLU-Pro 92.4% (Vals), HLE 65% w/ tools / 60.9% w/o tools, ARC-AGI-1 97.5%, ARC-AGI-2 90%, GraphWalks BFS 256K–1M 65.0%, MMMU-Pro 90.64%; SWE-bench Pro 81.2%, SWE Multilingual 89.1%, SWE Multimodal 54.7%, LiveCodeBench 90.5% (Vals), DeepSWE 67.4%, FrontierSWE v2 56.3%, ProgramBench 87.6%, CursorBench 3.2 73.4%, Terminal-Bench 2.1 85.0% (Vals), Terminal-Bench 4.0 55.8%, Terminal-Bench-Science 0.1 52.6%, OSWorld 2.0 41.7% strict / 77.9% partial, Toolathlon-Verified 77.8% Pass@1 / 81.5% Pass@3, ApprenticeBench 72%, GDPval-AA v2 1853 Elo, Vals Index 67.9%, BenchLM overall 82.64. Conflicts surfaced: AA Index 53–53.4 vs 65.7 (BenchmarkList — inconsistent with AA's own page); OSWorld safeguard-zero caveat; SWE-bench Verified 95.0% third-party-only; modalities PDF caveat.

## Model card

- **Name:** Claude Fable 5.1 (GA; no Free tier)
- **Short description:** Anthropic's generally-available Mythos-class model (2026-09-01), above the Opus models for the most demanding reasoning and long-horizon agentic work; shares weights with Claude Mythos 5.1 but with production safeguards.
- **Provider / access:** Claude API (`claude-fable-5-1`), Bedrock, Vertex AI, Microsoft Foundry, Claude.ai, Claude Code. Closed; retirement not before 2027-09-01.
- **Release / knowledge:** 2026-09-01; knowledge/training cutoff June 2026.
- **IDs:** `anthropic/claude-fable-5-1`. No Zen Free ID.
- **Context window:** 1,048,576 (1M) tokens; 128,000 max output.
- **Modalities:** text + image in; text + tool-call output; adaptive thinking always on (default effort high on API/Claude Code, medium on Cowork/Claude.ai).
- **Pricing (as of 2026-11-04):** $10 in / $50 out per 1M; cache read **$0.25** (75% cut); cache writes $12.50 / $20; Batch $5/$25.
- **Architecture:** proprietary; undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **85.0%** (Vals) / 91.4% (AA xhigh, BenchLM row); Terminal-Bench 4.0 **55.8% (vendor) / 52.0% (AA)**; Terminal-Bench-Science 0.1 **52.6%**
- OSWorld 2.0 **41.7% strict / 77.9% partial**; OSWorld 2.1 **80.7%** (fallback-config row); Toolathlon-Verified 77.8% Pass@1 / 81.5% Pass@3 / **73.1% Pass³, 23.7 turns**; CursorBench 3.2 73.4%
- ApprenticeBench 72% (Vals); AutomationBench 31.4%; CWE-bench v1 58.0%; GDPval-AA v2 **1764 Elo / 62.7%**; AA-Briefcase 1669; AA Agentic Index 58.0%; AA Harvey LAB v1.0 93.0%; AA Tau3-Banking 47.2%; AA ITBench 49.5%; **AA-AnalystAgent 57.5%**; GDP.pdf 26.2%
- MazeBench 10%; cyber: AA Cyber Index 25.0, CWE-Bench-AA 50.8, DeepsecBench-AA 23.5, CyberGym-E2E-AA 0.8%

Reasoning / knowledge:

- GPQA Diamond **93.4%** (Vals) / 93.7% (AA); HLE **65%** w/ tools / **60.9%** w/o tools (AA-HLE 59.1%); MMLU-Pro **92.4%** (Vals)
- ARC-AGI-1 97.5%; ARC-AGI-2 **90%**; AA-LCR **85.3%**; **MLCR-AA 15.6% (corrected)**; GraphWalks BFS 256K–1M 65.0%; MMMU-Pro 90.64%
- Artificial Analysis Intelligence Index **49.0** (refreshed; the 65.7 BenchmarkList aggregation stays inconsistent with AA's own page)
- AA-Omniscience **index 46.3 / accuracy 68.4% / hallucination 70.0%**; FrontierMath v2 T1–3 90.175% / Tier-4 87.805%
- Gray Swan IPI 1.0% (tied lowest); CritPt 29.7%; BenchLM overall **81.08 (#7/1008)**

Coding:

- SWE-bench Pro **81.2%**; SWE Multilingual 89.1%; SWE Multimodal 54.7%; SWE-bench Verified 95.0% (third-party only)
- LiveCodeBench **90.5%** (Vals); DeepSWE 67.4%; FrontierSWE v2 56.3%; ProgramBench 87.6%; **FrontierCode 2.0 32.4%** (Cognition)
- CursorBench 4.0 51.8%; Bug Hunt Bench 43 fixes; PostTrainBench v1.1 40.2%; ParseBench 78.12%; Design Arena 1312

Long context:

- 1M window; AA-LCR 85.3%; GraphWalks BFS 256K–1M 65.0%; no MRCR/RULER published.

### Normalized scores (1–100)

- **Tool use: 92/100.** TB2.1 85.0%, Toolathlon-Verified 77.8%, ApprenticeBench 72% and GDPval-AA 1764 keep it in the top agent tier; capped by a safeguard-suppressed OSWorld (41.7% strict) and TB4.0 52–55.8%.
- **Reasoning: 91/100.** GPQA 93.4%, MMLU-Pro 92.4%, HLE 65% and ARC-AGI-2 90% are frontier; the refreshed AA Index of 49.0 (<60), the unresolved 53/49-vs-65.7 conflict and MLCR-AA 15.6% hold it below 95.
- **Context window: 95/100.** 1M input with 128K output (≥1M band), a 75%-cheaper cache read and AA-LCR 85.3%; GraphWalks 65% at depth and no full-depth MRCR/RULER row.
- **Multimodal: 82/100.** Text + image in (+PDF caveated), MMMU-Pro 90.64%; no audio/video and text-only output.
- **Coding: 92/100.** SWE-bench Pro 81.2%, LiveCodeBench 90.5% and SWE Multilingual 89.1% are elite; Opus 5.5 has overtaken SWE-bench Pro (89.9%), DeepSWE is 67.4% and FrontierCode 2.0 32.4%.
- **Cost efficiency: 30/100.** $10/$50 per 1M is among the most expensive tracked; the 75% cache-read cut and batch discount are the only relief.
- **Overall Score: 90/100.** (92 + 91 + 95 + 82 + 92) / 5 = 90.4 → 90. Best fit: maximum-reliability long-horizon coding/research agents where price is secondary.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-04
- Method: re-research pass (user-requested second pass) over public internet research (Anthropic Fable/Mythos 5.1 system card, BenchLM re-read 2026-11-04 with 64 rows, Artificial Analysis, Vals AI, Epoch AI, Cognition FrontierCode 2.0). Refreshed AA rows (Index 49.0, Omniscience 46.3/68.4/70.0), corrected the MLCR-AA reading, captured the new FrontierCode 2.0 / AA-AnalystAgent / OSWorld 2.1 / cyber / Gray Swan rows; scores held. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Fable 5.1 launch](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [Claude Fable 5.1 & Mythos 5.1 system card](https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf)
  - [BenchLM — Claude Fable 5.1 benchmark scores](https://benchlm.ai/models/claude-fable-5-1)
  - [Artificial Analysis — Claude Fable 5.1](https://artificialanalysis.ai/models/claude-fable-5-1)
  - [Vals AI — Claude Fable 5.1](https://www.vals.ai/models/anthropic_claude-fable-5-1)
  - [Cognition — FrontierCode 2.0](https://cognition.com/blog/frontier-code-2.0)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
