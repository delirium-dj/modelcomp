# Gemini 3.1 Flash-Lite — findings by Kimi K3

- Source: Google / Gemini 3.1 Flash-Lite (`gemini-3.1-flash-lite`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's cheapest Gemini 3.1 tier — 1M context, non-reasoning; decent static QA (MMLU-Pro 86.2%) and competitive LiveCodeBench (80.1%), but weak agentic scores and a 0% Vibe Code Bench row.
- **Provider / access:** Google Gemini API (`gemini-3.1-flash-lite`), AI Studio.
- **Release / knowledge:** Released 2026-05-07 (OpenCode Data, newly verified); knowledge cutoff 2025-01 (OpenCode Data; noted as likely base-generation carryover).
- **IDs:** `google/gemini-3.1-flash-lite` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (OpenCode Data confirms); max output **66K** (OpenCode Data — previously unverified).
- **Modalities:** text/image/video/audio/PDF in (OpenCode Data — full input coverage confirmed); text out; tool calls; JSON mode. (benchlm classified base as non-reasoning; catalog lists Reasoning: Yes — conflict noted.)
- **Pricing (as of 2026-10-11):** $0.25/M input, $1.50/M output, $0.03/M cached (OpenCode Data catalog — verified now; cheapest Gemini 3.1 tier confirmed).
- **Architecture:** proprietary (Google DeepMind).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **34.1%**; Gert Labs: **38.5%** (benchlm.ai)
- All other agentic rows: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (Vals): **81.1%** (benchlm.ai)
- MMLU-Pro (Vals): **86.2%** (benchlm.ai)
- HLE / LCR / CritPt / AA indices: no verified public score found
- BenchLM overall: **48.51/100, #82 of 507**

Coding:

- SWE-bench (Vals): **62.8%** (benchlm.ai)
- LiveCodeBench (Vals): **80.1%** (benchlm.ai)
- Vibe Code Bench: **0.0%** (benchlm.ai)
- SciCode / DeepSWE: no verified public score found

Long context:

- 1M window by spec (catalog-confirmed, 66K output); no retrieval measurement (no MRCR/RULER/LCR row) found.

Multimodal:

- CharXiv: **73.2%** (benchlm.ai); no MMMU row; full image/video/audio/PDF input confirmed by catalog.

### Normalized scores (1–100)

- **Tool use: 52/100.** Unchanged: TB 2.1 (Vals) 34.1% and Gert Labs 38.5% weak; chat-first lite tier; capped by missing everything else.
- **Reasoning: 66/100.** Unchanged: GPQA 81.1% / MMLU-Pro 86.2% respectable for a lite; non-reasoning classification and zero hard-reasoning rows cap it.
- **Context window: 76/100.** Unchanged: 1M window verified (66K output); no retrieval evidence supports full-window usability.
- **Multimodal: 68/100.** Unchanged: CharXiv 73.2% plus familial input breadth now confirmed; text-only output caps it.
- **Coding: 68/100.** Unchanged: LiveCodeBench 80.1% genuinely good; capped by Vibe Code Bench 0.0% and SWE-bench 62.8%.
- **Cost efficiency: 93/100.** Verified now: $0.25/$1.50 ($0.03 cached) — among the cheapest entries in the dataset.
- **Overall Score: 66/100.** Mean of the five quality dims (52+66+76+68+68)/5 = 66.0 → 66 (unchanged). Best fit: cheap high-volume chat/extraction with occasional light coding.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (OpenCode Data `google/gemini-3-1-flash-lite` — verified release 2026-05-07, cutoff, 1M/66K, pricing $0.25/$1.50); benchlm.ai scorecard from first pass. Second pass: no score-changing deltas. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
