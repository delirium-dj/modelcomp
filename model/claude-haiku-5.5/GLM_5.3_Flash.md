# Claude Haiku 5.5 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-haiku-5-5`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's smallest and fastest Claude 5.5-family model, launched 2026-10-07 to replace Haiku 4.5. Built for high-volume, latency-sensitive work (extraction, routing, subagents) with the family toolkit — adaptive thinking with effort, 1M context, computer/browser use — at the bottom of the price ladder. BenchLM ranks it #27 of 889 (66.78).
- **Provider / access:** Anthropic Claude API `claude-haiku-5-5` (Messages API, adaptive thinking on by default); Amazon Bedrock `anthropic.claude-haiku-5-5`; Google Cloud, Microsoft Foundry, Claude Platform on AWS `claude-haiku-5-5`. OpenCode Zen lists `opencode/claude-haiku-5.5`.
- **Release / knowledge:** Released 2026-10-07 (verified via DataCamp launch coverage and Anthropic availability pages); knowledge cutoff Jun 2026 per the Anthropic 5.5-family lineup table (retirement commitment: not before 2027-10-07).
- **IDs:** `claude-haiku-5-5` (Claude API); Zen `opencode/claude-haiku-5.5` (no Free ID confirmed — standard pricing).
- **Context window:** 1M tokens total (BenchLM concurs); 128K max output (shared across the 5.5 family; verified via Anthropic model comparison table and meta).
- **Modalities:** Text, image, PDF in → text out; reasoning yes (adaptive, effort `low`–`max`, default `medium`); tool calls yes (computer use needs `computer_toolset_20260801`); browser use tool; JSON/structured output supported. Breaking changes vs 4.5: no `budget_tokens`, no prefill, no custom temperature/top_p/top_k.
- **Pricing (as of 2026-10-11):** Tiered by prompt size — prompts ≤100K: $0.10 in / $0.50 out; >100K: $0.50 / $2.50; cache read $0.01 / $0.05; 5m cache write $0.125 / $0.625; Batch API 50% off. A new tokenizer turns the same text into ~30% more tokens than Haiku 4.5; Anthropic's realized average saving is "75% cheaper" vs the 90% sticker cut. Paid only.
- **Architecture:** Proprietary, closed weights; Haiku tier of the Claude 5.5 family.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1: **1620 Elo** (Anthropic launch post via benchlm.ai — corroborated); AA-Briefcase v1.1: **1578 Elo** (corroborated)
- AA Harvey LAB-AA v1.0: **89.9%** (AA, independent — fills the gap; strong for the class)
- AA AutomationBench-AA: **35.4%** (AA — weak); AA GDP.pdf: **20.8%** (weak)
- OSWorld 2.1: **72.4%** (Anthropic; vs Haiku 4.5 15.7%, Sonnet 5.5 83.9%)
- Terminal-Bench 4.0: **39.2%** (Anthropic; AA independent: **32.8%**; vs Haiku 4.5 0.0%)
- Tau3-Banking / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- HLE: **45.9%** no tools / **57.4%** with tools (Anthropic; vs Haiku 4.5 10.2%/18.7%); AA-HLE: **44.4%** (AA — fills the AA gap, above the 40% bar)
- AA-LCR v1.1: **82.7%** (AA — fills the long-context gap; excellent for the class, matching Sonnet 5.5's 82.7%)
- Artificial Analysis Intelligence Index: **43.4** (AA current board — corroborates the 43); Nov 5 refresh reads **36.5%** — an AA Index **version rebase** (v4.3.2→v5.0-class scale), documented per RULES, never averaged across scales
- CritPt: **18.9%** (AA); AA-Omniscience: index **10.7** (AA — weak)
- FrontierMath v2: Tiers 1–3 **75.1%**, Tier 4 **46.3%** (Epoch AI leaderboard — added 2026-10-16, previously unmeasured; strong for the class)
- MLCR-AA: **63.3%** (AA — added 2026-10-16); Nov 5 refresh re-reads **35.0%** — large downward drift on re-measurement, both cited
- NEW (BenchLM Nov 5): **ARC-AGI-1 89.00% / ARC-AGI-2 61.3% / ARC-AGI-3 0.5% / adapter 2.82%** (ARC Prize published semi-private results — first ARC rows for this model, strong); AA-AnalystAgent **53.8%**; Hermes Index **37.0%** / Hermes Bench **71.0%**; FrontierCode 2.0 **27.7%** (weak, vs the 1.1 Main 46.4% system-card row); ParseBench **56.02%**; MazeBench (tools-on) **1%**; Design Arena Website **1261**
- GPQA Diamond: no verified public score found
- Chartography (no tools): **46.4%** (Anthropic; vs Haiku 4.5 6.4%)

Coding:

- AA-SciCode: **55.0%** (AA, independent — fills the SciCode gap; decent)
- FrontierCode 1.1 (Main): **46.4%** (system card via benchlm.ai — corroborated; Sonnet 5.5 52.1%)
- FrontierSWE v2: **43.8%** (Proximal — added 2026-10-16, the first SWE-family row for this model)
- Bug Hunt Bench: **21.5 fixes** (public data)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 82.7% is the first measured long-context number (excellent); no MRCR/RULER at length

### Normalized scores (1–100)

- **Tool use: 78/100.** AA Harvey LAB 89.9% is a strong independent addition alongside GDPval 1620 and AA-Briefcase 1578 (both corroborated), with OSWorld 2.1 72.4% making desktop automation usable; AA AutomationBench 35.4% and TB4.0 32.8% (AA) cap it.
- **Reasoning: 80/100.** CHANGED from 78 — AA-HLE 44.4%, AA-LCR 82.7% and the AA Index 43.4 stand corroborated, the newly measured FrontierMath v2 75.1%/46.3% (Epoch) and MLCR-AA 63.3% added two solid pillars, and the Nov 5 ARC-AGI-2 61.3% (ARC Prize verified) adds a third — offsetting the MLCR re-read down to 35.0% and the AA Index v5.0 rebase (36.5); CritPt 18.9% and the weak Omniscience index keep it under 85.
- **Context window: 95/100.** Documented 1M tokens (BenchLM concurs; tier ≥1M = 95–100); AA-LCR 82.7% is the first measured long-context evidence (strong) — no ≥98%-retrieval at length to reach 100.
- **Multimodal: 78/100.** Text, image and PDF input with text output maps to the +PDF-in 75–90 band; Chartography 46.4% shows real chart-reading; no audio/video input documented.
- **Coding: 68/100.** CHANGED from 66 — AA-SciCode 55.0%, Bug Hunt 21.5 and the newly surfaced FrontierSWE v2 43.8% (first SWE-family row) add independent evidence to FrontierCode 46.4%; still no SWE-bench Verified/SWE-Pro rows, so the score rests on mid-tier agent results.
- **Cost efficiency: 96/100.** $0.10/$0.50 per MTok (≤100K prompts) maps to the ~$0.10/$0.20 ≈ 97–99 band, shaved slightly for the $0.50 output rate and the tiered >100K rate ($0.50/$2.50); a ~25× cost cut over Haiku 4.5 was measured in independent hands-on testing.
- **Overall Score: 80/100.** CHANGED from 79 — mean of the five quality dims per `RULES.md` (Cost excluded): (78 + 80 + 95 + 78 + 68) / 5 = 399/5 = 79.8 → 80. Best fit: high-volume classification/extraction, routing, and cheap subagent work under a Sonnet 5.5 or Opus 5.5 orchestrator — not the hardest coding or reasoning tasks.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-06 (re-research pass; prior 2026-10-19)
- Method: public internet re-research via direct page fetch (web-search quota exhausted): BenchLM Claude Haiku 5.5 page fetched 2026-11-05 (Nov 5 data, 37 rows) — all prior rows re-confirmed; ARC-AGI 1/2/3 suite, AA AnalystAgent, Hermes and FrontierCode 2.0 rows added; drifts cited (MLCR 63.3→35.0% re-measured, AA Index 36.5 = v5.0-class rebase of 43.4); ARC-2 offsets the MLCR drop — no score changes; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
