# Muse Spark 1.3 — findings by DeepSeek 4.1 Flash

- Source: Meta / Muse Spark 1.3 (API IDs `muse-spark-1.3` and `muse-spark-1.3-contributor`; Contributor/Free/Max are the same weights)
- Date: 2026-10-09 (UTC) — deep second pass (previous Signature 2026-09-29)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass re-verification — 2026-10-09** (≥3 independent sources).
> Newly confirmed independent data: Artificial Analysis Terminal-Bench 2.1 **85% (xhigh) / 86% (max)**, Tau3-Banking **47% / 52% (max, #1)**, GDPval-AA v2 **1709 / 1754 Elo**, HLE **47% / 49%** — a real independent tool/reasoning picture where the prior file had mostly vendor or unverified rows. Vals Finance Agent v2 is **58.90% (1.3) / 59.96% (1.3 Max)**, *slightly below* Muse Spark 1.2's 60.60% (an independent regression Meta's "improvement" framing omits).
> **Conflicts surfaced:** (1) AA Intelligence Index reads **62 (launch, xhigh/max on v4.1.1)** but **48 (max) on the current v4.3.2 page** — an index-basket rebase, not a model change; do not compare across versions. (2) **Audio input** is listed by Meta but flagged "not fully supported / degraded" and omitted by AA/LLM Stats — 1.3 is effectively not an audio model. (3) llm-stats GPQA 87% / HLE 41% vs the prior file's GPQA 93.5% / HLE 48.7% — measurement spread.
> Sources: https://research.meta.ai/blog/introducing-muse-spark-1-3 · https://dev.meta.ai/models/muse-spark · https://artificialanalysis.ai/articles/muse-spark-1-3 · https://artificialanalysis.ai/models/muse-spark-1-3 · https://www.vals.ai/benchmarks/fabv2 · https://llm-stats.com/models/muse-spark-1.3

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta Superintelligence Labs' closed, API-only multimodal reasoning model for long-running agentic, multi-agent and coding workflows. Defined less by its specs than by a second SKU up to ~21× cheaper because Meta trains on your prompts and completions.
- **Provider / access:** Meta Model API (`https://api.meta.ai/v1`), IDs `muse-spark-1.3` and `muse-spark-1.3-contributor`. No downloadable weights.
- **Release / knowledge:** 2026-09-02. No knowledge cutoff published.
- **IDs:** as above; no Zen Free ID.
- **Context window:** 1,048,576 input tokens; **max completion 943,718 tokens**.
- **Modalities:** text, image, video, PDF, audio* input; text output. *Audio is explicitly degraded in 1.3 (Meta recommends 1.2 / Muse Voice Transcribe).
- **Reasoning:** mandatory, effort minimal→xhigh (default medium); forced tool calls; JSON-schema output; automatic prefix caching.
- **Pricing (as of 2026-10-09):** standard **$1.25 in / $0.15 cached / $4.25 out** per 1M; **contributor $0.10 in / $0.002 cached / $0.20 out** (Meta trains on prompts/completions; 100 vs 3,000 RPM).
- **Architecture:** proprietary and undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85% (xhigh) / 86% (max)** — independent, Artificial Analysis
- Tau3-Banking: **47% (xhigh) / 52% (max, #1)** — independent, AA
- GDPval-AA v2: **1709 / 1754 Elo** — independent, AA; AutomationBench 32.0% (vendor)
- OSWorld 2.0: 66.9% partial (vendor); Vals Finance Agent v2 **58.90% / 59.96%** (independent, below 1.2's 60.60%)

Reasoning / knowledge:

- GPQA Diamond: **94%** (Meta via AA) / 87% (llm-stats)
- HLE: **47% (xhigh) / 49% (max)** (independent AA) / 41% (llm-stats); ARC-AGI-2 89.2% (self)
- SciCode: **59%** (AA); MMLU-Pro ~89%; AIME 2025 ~67%
- AA Intelligence Index: **62** (launch v4.1.1) vs **48** (current v4.3.2) — conflict/version

Coding:

- DeepSWE v1.1: **75.4** (self); Terminal-Bench 2.1 88.8, SWEAtlas CodeBase QA 59.4 (self)
- SWE-Bench Verified 79%, LiveCodeBench 76%, Aider Polyglot 73%, SciCode 52–59% (mixed)

Long context:

- 1M window; no MRCR/RULER published — no verified public score found.

### Normalized scores (1–100)

- **Tool use: 92/100.** Independent AA TB2.1 85–86%, Tau3 47–52% (max #1) and GDPval-AA 1709–1754 confirm frontier-class tool use; capped by Vals Finance Agent slipping just below Muse 1.2.
- **Reasoning: 91/100.** GPQA 94% and HLE 47–49% are frontier-level; the rebased AA Index (48 on v4.3.2 vs 62 at launch) and a low HLE reading on llm-stats (41%) hold it below 95.
- **Context window: 96/100.** 1,048,576 input with a 943,718-token max completion (≥1M band) and no recall-at-depth benchmark.
- **Multimodal: 83/100.** Text + image + video + PDF input (video band) with text out; audio is documented as degraded, so not credited.
- **Coding: 93/100.** DeepSWE 75.4, TB2.1 88.8 and SciCode 59 clear the frontier refs; partly self-reported and no SWE-bench Pro/Verified from an independent harness.
- **Cost efficiency: 98/100.** $0.10/$0.20 per 1M on the contributor tier (~97–99 band); the price is training-data consent.
- **Overall Score: 91/100.** (92 + 91 + 96 + 83 + 93) / 5 = 91.0 → 91. Best fit: top-end agentic coding/multi-agent on the contributor SKU, accepting that prompts train Meta models.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: deep second-pass public internet research (Meta dev model page and launch blog, Artificial Analysis launch article + current model page, Vals Finance Agent v2, LLM Stats, Codersera). Independent AA rows were promoted over vendor-only rows; the AA index rebase and the Muse 1.2→1.3 finance regression are surfaced rather than hidden. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_5.5.md`, using the same headings.
