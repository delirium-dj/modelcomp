# Claude Fable 5.1 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Fable 5.1 (`anthropic/claude-fable-5.1`)
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-09); re-verified 2026-10-18; enriched 2026-10-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Enrichment pass — 2026-10-24** (second pass, user-approved). BenchLM (`claude-fable-5-1`) re-read on 2026-10-23 carries **58 source-displayable rows** (was 34 on 2026-10-18) and computes **83.07/100, #4 of 992** (was #4 of 228). Newly captured: **AA Agentic Index 58.0%**, **AA Harvey LAB v1.0 93.0%**, GDPval-AA **1754 Elo / 62.7%**, AA-Briefcase 1672, aaTerminalBench21 **91.4%** / AA TB4.0 52.0%, AA Tau3-Banking 47.2%, AA AutomationBench 59.4%, ApprenticeBench 72%, AA ITBench 49.5%, OSWorld 2.0 41.7% strict, Toolathlon 77.8%, CWE-bench 58.0%, MazeBench 10%; Coding SWE-bench Pro 81.2%, SWE Multilingual 89.1%, SWE Multimodal 54.7%, DeepSWE 67.4%, FrontierSWE v2 56.3%, ProgramBench 87.6%, CursorBench 3.2 73.4% / 4.0 51.8%, SciCode 63.1%, LiveCodeBench 90.5%, AA Coding Index 81.6%, Bug Hunt 43.0 fixes, PostTrainBench 40.2%; Reasoning **ARC-AGI-2 90%**, **AA-LCR 85.3%**, CritPt 29.7%, MLCR-AA 71.1%, GraphWalks 65.0%; Knowledge HLE 65% (60.9% w/o tools), **AA Intelligence Index 53.4%**, **AA-GPQA 93.7%**, AA-HLE 59.1%, **AA-Omniscience index 43.5 / accuracy 67.2% / hallucination 72.6%**, MMLU-Pro 92.4%; FrontierMath v2 T1–3 90.175% / Tier-4 87.805%.
> **Refreshed / conflicts:** the AA Index conflict is now anchored at **53.4** (BenchLM/AA) vs the 65.7 BenchmarkList aggregation, which remains inconsistent with AA's own page. **Hallucination rate 72.6%** is high. The OSWorld 2.0 safeguard-zero caveat and the third-party-only Verified row stand.
> **No material score change:** the added rows confirm the top-tier agentic/coding profile, so scores are held.
> Sources this pass: https://benchlm.ai/models/claude-fable-5-1 · https://artificialanalysis.ai/models/claude-fable-5-1 · https://www.vals.ai/models/anthropic_claude-fable-5-1 · https://epoch.ai/benchmarks/frontiermath-tier-4-v2 · https://www.anthropic.com/system-cards

> **Re-verified 2026-10-18.** BenchLM (`claude-fable-5-1`, 34 rows) computed an overall **83.09/100 (#4 of 228)** and re-confirms the prior pass. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources).
> Independently re-sourced this pass: GPQA Diamond **93.4%** (Vals), MMLU-Pro **92.4%** (Vals), HLE **65%** w/ tools / **60.9%** w/o tools, ARC-AGI-1 97.5%, ARC-AGI-2 **90%**, GraphWalks BFS 256K–1M 65.0%, MMMU-Pro 90.64%; SWE-bench Pro **81.2%**, SWE Multilingual 89.1%, SWE Multimodal 54.7%, LiveCodeBench **90.5%** (Vals), DeepSWE 67.4%, FrontierSWE v2 56.3%, ProgramBench 87.6%, CursorBench 3.2 73.4%, Terminal-Bench 2.1 **85.0%** (Vals), Terminal-Bench 4.0 55.8%, Terminal-Bench-Science 0.1 52.6%, OSWorld 2.0 **41.7% strict / 77.9% partial**, Toolathlon-Verified 77.8% Pass@1 / 81.5% Pass@3, ApprenticeBench 72%, GDPval-AA v2 **1853 Elo**, Vals Index 67.9%, BenchLM overall 82.64.
> **Conflicts surfaced:** (1) AA Index **53–53.4** (AA/BenchLM/pricepertoken) vs **65.7** (BenchmarkList aggregation) — the latter is inconsistent with AA's own page. (2) **OSWorld 2.0** vendor notes safeguards forced a **zero** on intervened tasks — strict 41.7% understates raw capability; partial 77.9%. (3) SWE-bench Verified **95.0% (third-party, morphllm)** vs "never vendor-reported". (4) Vals Index **67.9%** vs earlier 65.83%. (5) Modalities: text + image in per launch; some pages add PDF — treated as text+image with PDF caveated.
> Sources: https://www.anthropic.com/claude/fable · https://llm-stats.com/blog/research/claude-fable-5-1-launch · https://docs.litellm.ai/blog/claude_fable_5_1 · https://fable51.com/benchmarks · https://benchlm.ai/benchmarks/swe-bench-pro · https://benchlm.ai/compare/claude-fable-vs-claude-fable-5-1

## Model card

- **Name:** Claude Fable 5.1 (GA; no Free tier)
- **Short description:** Anthropic's generally-available Mythos-class model (2026-09-01), above the Opus models for the most demanding reasoning and long-horizon agentic work; shares weights with Claude Mythos 5.1 but with production safeguards.
- **Provider / access:** Claude API (`claude-fable-5-1`), Bedrock, Vertex AI, Microsoft Foundry, Claude.ai, Claude Code. Closed; retirement not before 2027-09-01.
- **Release / knowledge:** 2026-09-01; knowledge/training cutoff June 2026.
- **IDs:** `anthropic/claude-fable-5-1`. No Zen Free ID.
- **Context window:** 1,048,576 (1M) tokens; 128,000 max output.
- **Modalities:** text + image in; text + tool-call output; adaptive thinking always on (default effort high on API/Claude Code, medium on Cowork/Claude.ai).
- **Pricing (as of 2026-10-16):** $10 in / $50 out per 1M; cache read **$0.25** (75% cut, 0.025×); cache writes $12.50 / $20; Batch $5/$25.
- **Architecture:** proprietary; undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **85.0%** (Vals); Terminal-Bench 4.0 **55.8%**; Terminal-Bench-Science 0.1 **52.6%** (vendor)
- OSWorld 2.0 **41.7% strict / 77.9% partial**; Toolathlon-Verified 77.8% Pass@1 / 81.5% Pass@3; CursorBench 3.2 73.4%
- ApprenticeBench 72% (Vals); AutomationBench 31.4%; CWE-bench v1 58.0%; GDPval-AA v2 **1853 Elo**

Reasoning / knowledge:

- GPQA Diamond **93.4%** (Vals) / 93.7% (AA); HLE **65%** w/ tools / **60.9%** w/o tools; MMLU-Pro **92.4%** (Vals)
- ARC-AGI-1 97.5%; ARC-AGI-2 **90%**; GraphWalks BFS 256K–1M 65.0%; MMMU-Pro 90.64%
- Artificial Analysis Intelligence Index **53–53.4** — conflict: 65.7 (BenchmarkList)

Coding:

- SWE-bench Pro **81.2%**; SWE Multilingual 89.1%; SWE Multimodal 54.7%; SWE-bench Verified 95.0% (third-party only)
- LiveCodeBench **90.5%** (Vals); DeepSWE 67.4%; FrontierSWE v2 56.3%; ProgramBench 87.6%
- CursorBench 4.0 51.8%; Bug Hunt Bench 43 fixes; PostTrainBench v1.1 40.2%

Long context:

- 1M window; GraphWalks BFS 256K–1M 65.0%; no MRCR/RULER published.

### Normalized scores (1–100)

- **Tool use: 92/100.** TB2.1 85.0%, Toolathlon-Verified 77.8%, ApprenticeBench 72% and GDPval-AA 1853 keep it in the top agent tier; capped by a safeguard-suppressed OSWorld (41.7% strict) and TB4.0 55.8%.
- **Reasoning: 91/100.** GPQA 93.4%, MMLU-Pro 92.4%, HLE 65% and ARC-AGI-2 90% are frontier; the AA Index of 53 (<60) and the unresolved 53-vs-65.7 conflict hold it below 95.
- **Context window: 95/100.** 1M input with 128K output (≥1M band), a 75%-cheaper cache read and GraphWalks 65% at 256K–1M; no full-depth recall benchmark.
- **Multimodal: 82/100.** Text + image in (+PDF caveated), MMMU-Pro 90.64%; no audio/video and text-only output.
- **Coding: 92/100.** SWE-bench Pro 81.2%, LiveCodeBench 90.5% and SWE Multilingual 89.1% are elite; Opus 5.5 has overtaken SWE-bench Pro (89.9%) and DeepSWE is 67.4%.
- **Cost efficiency: 30/100.** $10/$50 per 1M is among the most expensive tracked; the 75% cache-read cut and batch discount are the only relief.
- **Overall Score: 90/100.** (92 + 91 + 95 + 82 + 92) / 5 = 90.4 → 90. Best fit: maximum-reliability long-horizon coding/research agents where price is secondary.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-24
- Method: rewrite-pass public internet research (Anthropic Fable page, llm-stats launch analysis, LiteLLM day-0 post, fable51.com benchmark collation, BenchLM SWE-bench Pro leaderboard). The AA-vs-BenchmarkList index conflict, the OSWorld safeguard-zero caveat and the Verified third-party-only row are surfaced; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
