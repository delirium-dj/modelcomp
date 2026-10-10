# Muse Spark 1.2 — findings by DeepSeek 4.1 Flash

- Source: Meta / Muse Spark 1.2 (`muse-spark-1.2`; Contributor/Free/Max are the same weights)
- Date: 2026-10-09 (UTC) — deep second pass (previous Signature 2026-10-06)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass re-verification — 2026-10-09** (≥3 independent sources).
> Independent Vals AI: SWE-bench **86.60% (#14/88)**, Finance Agent v2 **60.60% (#3/76)**, Harvey Legal Agent Bench **25.42% (#1/76)**, MMMU-Pro 86.13%, MMLU-Pro 88.28%, Vibe Code Bench 79.10%, **Terminal-Bench 4.0 6.06%**, Code Migration 29.95%, **Vals Index 49.29% (#31/45)**. Artificial Analysis Intelligence Index **40 (#58/227)**, 325.2 t/s (#1), $0.97/index task. LMArena 1492 (#11); BenchLM 66.48 (#28).
> **Conflicts surfaced:** (1) Meta's near-1.3 vendor framing vs independent composite indices (AA 40, Vals Index #31); (2) coding is bimodal — SWE-bench 86.6% (Vals) vs Terminal-Bench 4.0 6.06% / ProgramBench 0.5% (harness sensitivity); (3) modality: AA adds speech input while LLM Stats/Vals list text+image+video only; (4) AA now marks 1.2 deprecated in favour of 1.3.
> Sources: https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2 · https://artificialanalysis.ai/models/muse-spark-1-2 · https://www.vals.ai/models/meta_muse_spark_1_2 · https://llm-stats.com/models/muse-spark-1.2 · https://arena.ai/leaderboard/chat/text

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's August 2026 reasoning model for complex agentic tasks, predecessor of Muse Spark 1.3. Contributor/Free/Standard/Max are the same weights — only billing/rate-limit/data-use terms differ.
- **Provider / access:** Meta Model API (`muse-spark-1.2`); OpenCode Zen contributor tier. Proprietary.
- **Release / knowledge:** 2026-08-05; knowledge cutoff not published.
- **IDs:** `meta/muse-spark-1.2`; Zen contributor tier. Contributor rate $0.10/$0.20; standard $1.25/$4.25.
- **Context window:** 1,048,576 (1M) tokens.
- **Modalities:** text, image, video (+speech per AA) input; text out; reasoning; tool calls.
- **Pricing (as of 2026-10-09):** standard **$1.25 / $0.15 cached / $4.25** per 1M; contributor **$0.10 / $0.20** (token-rate-limited; prompts may train Meta products).
- **Architecture:** proprietary API-only; no open weights.

### Raw benchmarks found

Agent / tool use:

- Finance Agent v2 **60.60% (#3/76)** (Vals); Harvey Legal Agent Bench **25.42% (#1/76)** (Vals)
- Terminal-Bench 2.1 82.9% (Meta via BenchLM) / 69.7% (Vals); **Terminal-Bench 4.0 6.06%** (Vals)
- GDPval-AA 1631 (Meta) / 48.9% normalized (AA); AA Agentic Index 44.0%

Reasoning / knowledge:

- GPQA Diamond 90.4% (AA); HLE 45.5% (AA); MMLU-Pro 88.28% (Vals); AA-LCR 79.0%
- SimpleBench 74.5%; SimpleQA Verified 60.3%; AA-Omniscience Accuracy 45.4% / Hallucination 33.3%
- Artificial Analysis Intelligence Index **40 (#58/227)** — independent

Coding:

- SWE-bench **86.60% (#14, Vals)**; DeepSWE 59.3% (Meta); Vibe Code Bench 79.10% (Vals)
- SciCode 57.4% (AA); AA Coding Index 72.2%; FrontierSWE v2 12.0%; Code Migration 29.95% (Vals)

Long context:

- 1M window; AA-LCR 79.0% is the only published long-context reasoning value; no MRCR/RULER.

### Normalized scores (1–100)

- **Tool use: 83/100.** Finance Agent #3 and Harvey #1 (Vals) plus TB2.1 69.7–82.9% are strong; capped by TB4.0 6.06% and GDPval-AA below the 1750 ref.
- **Reasoning: 83/100.** GPQA 90.4%, HLE 45.5%, MMLU-Pro 88.28% are strong; the independent AA Index of 40 (v4.3.2) and CritPt 17.7% hold it below the frontier.
- **Context window: 95/100.** 1,000,000 tokens (≥1M band); no recall-at-depth evidence.
- **Multimodal: 86/100.** Text, image, video (+speech per AA) in, text out (video band); no media generation, no own vision benchmark.
- **Coding: 82/100.** Vals SWE-bench 86.6%, SciCode 57.4% and Vibe 79.1% are good; FrontierSWE v2 12.0% and TB4.0 6.06% are the weak spots.
- **Cost efficiency: 100/100.** $0.10/$0.20 on the contributor tier (the $0 Zen free tier where available); the real cost is training-data terms.
- **Overall Score: 86/100.** (83 + 83 + 95 + 86 + 82) / 5 = 85.8 → 86. Best fit: agentic/reasoning workloads that tolerate contributor data terms and need a 1M multimodal window; prefer 1.3 if available.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: deep second-pass public internet research (Meta research/developer blogs, Vals AI model page, Artificial Analysis model page, LLM Stats, LMArena). Independent Vals/AA rows were separated from Meta's vendor charts; the bimodal coding split and index conflicts are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
