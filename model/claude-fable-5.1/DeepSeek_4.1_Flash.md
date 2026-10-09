# Claude Fable 5.1 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Fable 5.1 (`anthropic/claude-fable-5.1`)
- Date: 2026-10-09 (UTC) — deep second pass (previous Signature 2026-10-01)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass re-verification — 2026-10-09** (≥3 independent sources).
> Newly confirmed independent data: Artificial Analysis Intelligence Index **53** (BenchLM 53.4), GPQA Diamond 93.7% (Vals 93.4%), AA-HLE 59.1%, GDPval-AA 1758 raw / 62.9% normalized, Tau3-Banking 47.2%, AA Terminal-Bench 2.1 **91.4%** (Vals 85.0%), SciCode 63.1%, Vals Index **65.83% (#4)**, LMArena Agent Arena #3. Vendor: TB4.0 55.8%, SWE-bench Pro 81.2%, SWE Multilingual 89.1%, DeepSWE 67.4%, HLE 60.9/65.0%.
> **Conflicts surfaced:** (1) AA Index **53** (AA/BenchLM) vs **65.7** (BenchmarkList aggregation) — the BenchmarkList figure is inconsistent with AA's own page. (2) Vals notes fallback models after provider refusals; counting them as failures drops 65.83% → 64.59%. (3) Cost-per-task $7.63 (AA) vs $28.71 (Vals). (4) Modalities: baseline listed PDF; the second pass found text+image — treated as text+image with PDF caveated.
> Sources: https://www.anthropic.com/claude-fable-and-mythos-5-1 · https://platform.claude.com/docs/en/models/fable-5-1/overview · https://artificialanalysis.ai/models/claude-fable-5-1 · https://benchlm.ai/models/claude-fable-5-1 · https://www.vals.ai/benchmarks/vals_index · https://lmarena.ai/leaderboard

## Model card

- **Name:** Claude Fable 5.1 (no Free tier)
- **Short description:** Anthropic's generally-available Mythos-class model (2026-09-01), above the Opus models for the most demanding reasoning and long-horizon agentic work; shares weights with Claude Mythos 5.1 but with production safeguards.
- **Provider / access:** Claude API (`claude-fable-5-1`), Bedrock, Vertex AI, Microsoft Foundry, Claude.ai, Claude Code. Closed; retirement not before 2027-09-01.
- **Release / knowledge:** 2026-09-01; knowledge/training cutoff June 2026.
- **IDs:** `anthropic/claude-fable-5-1`. No Zen Free ID.
- **Context window:** 1,000,000 tokens; 128,000 max output.
- **Modalities:** text, image (and PDF per earlier sources) in; text + tool-call output; adaptive thinking always on, default effort high.
- **Pricing (as of 2026-10-09):** $10 in / $50 out per 1M; cache read **$0.25** (75% cut); cache writes $12.50 / $20; Batch 50% off.
- **Architecture:** proprietary; undisclosed.

### Raw benchmarks found

Agent / tool use:

- AA Terminal-Bench 2.1 **91.4%** (independent) / Vals 85.0% / vendor 85.0%; Tau3-Banking 47.2% (AA)
- GDPval-AA **1758 raw / 62.9% normalized** (AA) / vendor 1853; AutomationBench 31.4%; OSWorld 2.0 77.9% partial / 41.7% strict
- Terminal-Bench-Science 0.1 52.6%; CursorBench 3.2 73.4%; Toolathlon-Verified 77.8%

Reasoning / knowledge:

- GPQA Diamond **93.7%** (AA) / 93.4% (Vals); AA-HLE **59.1%** (vendor 60.9/65.0); ARC-AGI-1 97.5% / ARC-AGI-2 90%
- Artificial Analysis Intelligence Index **53** (AA/BenchLM 53.4) — conflict: 65.7 (BenchmarkList)
- MMLU-Pro 92.38% (vendor); MMMU-Pro 90.64%

Coding:

- SWE-bench Pro 81.2% (vendor); SWE Multilingual 89.1%; Vals Coding Index 81.6%; SciCode 63.1% (AA); DeepSWE 67.4%
- SWE-bench Verified: **no verified public score found** — never reported for this model

Long context:

- 1M window; no MRCR/RULER/GraphWalks published — no verified recall-at-depth value.

### Normalized scores (1–100)

- **Tool use: 93/100.** AA TB2.1 91.4%, GDPval-AA 1758 and Vals Index #4 keep it in the top agent tier; capped by Tau3 47.2% and a safeguard-suppressed OSWorld.
- **Reasoning: 92/100.** GPQA 93.7% and HLE 59.1–65.0% are frontier; the AA Index of 53 (<60) and the unresolved 53-vs-65.7 conflict hold it below 95.
- **Context window: 96/100.** 1M input with 128K output (≥1M band) and a 75%-cheaper cache read; no recall benchmark.
- **Multimodal: 80/100.** Text + image (+PDF caveated) in, text out (≤"+video/PDF" band); no audio/video, text-only output.
- **Coding: 91/100.** SWE-bench Pro 81.2%, SciCode 63.1% and SWE Multilingual 89.1% are elite, but Opus 5.5 has overtaken it (SWE-bench Pro 89.9%) and DeepSWE is 67.4%.
- **Cost efficiency: 30/100.** $10/$50 per 1M is among the most expensive tracked; the 75% cache-read cut is the only relief.
- **Overall Score: 90/100.** (93 + 92 + 96 + 80 + 91) / 5 = 90.4 → 90. Best fit: maximum-reliability long-horizon coding/research agents where price is secondary.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: deep second-pass public internet research (Anthropic Fable 5.1 docs/announcement, Artificial Analysis model page, BenchLM, Vals Index, LMArena). The AA-vs-BenchmarkList index conflict and the Vals refusal-fallback caveat are surfaced; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
