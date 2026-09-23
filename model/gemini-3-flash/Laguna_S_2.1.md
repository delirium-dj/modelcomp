# Gemini 3 Flash — findings by Laguna S 2.1

> Source: opencode/gemini-3-flash (Google DeepMind), e.g. Google, Artificial Analysis
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash Preview (Google DeepMind). Repository slug is `gemini-3-flash`; AA page notes a (Reasoning) and a (Non-reasoning) Preview variant of the same released December 2025 model.
- **Short description:** Google's cost-efficient Flash-tier multimodal model, "2x cheaper than Gemini 3 Pro Preview with only a small Intelligence-Index drop"; strong knowledge/omniscience and MMMU-Pro, fastest-in-class ~212 tok/s output, 1M context. Released as Preview in December 2025.
- **Provider / access:** Google DeepMind. Available via Google AI Studio, the Gemini API, Vertex AI, and Google Antigravity/CLI. API model ID `gemini-3-flash` (preview). Supports tool calling, structured outputs, JSON mode; the (Reasoning) variant uses extended thinking/chain-of-thought.
- **Release / knowledge:** Released 17 December 2025 (Google Developer Blog). Knowledge cutoff: 1 January 2025 (Artificial Analysis; Jan-2025 knowledge block).
- **IDs:** `google/gemini-3-flash` (Google DeepMind). noFreeId — `gemini-3-flash` is a preview; per the placeholder meta.json the repo has no free-Zen id mapped (meta.json: `noFreeId` is not set here, but pricing is paid API at $0.50/$3.00 — no consumer free quota surfaced in the source pages).
- **Context window:** 1,000,000 tokens (≈1,500 A4 pages) (Artificial Analysis; ≥1M tier).
- **Modalities:** Text, image, video, and audio input; text output (Artificial Analysis "everything you need to know"). Multimodal input, text output.
- **Pricing (as of 2026-09-23):** $0.50 per 1M input / $3.00 per 1M output tokens (Google API). Blended 7:2:1 cache hit/input/output ≈ $0.43 per 1M tokens. Cache discount ~90% (Google cache reads). No free-tier quota surfaced by source pages.
- **Architecture:** Proprietary (closed weights); parameter count undisclosed (Artificial Analysis: not disclosed). Non-reasoning and Reasoning (extended-thinking) variants share the base.
- **Output speed:** 212 output tokens/second (Artificial Analysis; 22% slower than 2.5 Flash but still faster than GPT-5.1 high / Kimi K2-thinking / DeepSeek V3.2-reasoning).

### Note on Intelligence Index scale

AI Rankings summary lists Overall 87.0 (avg of per-model raters). The authoritatively-current Artificial Analysis **Intelligence Index v4.3.2** scores this model **26** (#99/212) for the (Reasoning) variant and **18** for (Non-reasoning) — the AA "everything you need to know" article (Dec 2025 scale) reports a pre-release **71**. Scores below use the **current verifiable v4.3.2 figure of 26** (conservative); the older 71 is recorded as a cross-check only.

### Raw benchmarks found

> Verified public numbers, sourced per metric. Benchmarks not located are NOT invented.

Agent / tool use:

- AA Intelligence Index v4.3.2: **26** (Reasoning, #99/674) / **18** (Non-reasoning) (Artificial Analysis model page & releases page, 2026-09). Pre-release Dec-2025 scale reported **71** (AA "everything you need to know") — different index version; see note.
- GDPval-AA v2.1, AutomationBench-AA, AA-Briefcase v1.1: component evals of the Index (not given as standalone rank-isolated public percentiles in fetched pages — NOT FOUND as isolated figures).
- Terminal-Bench 4.0 / Hard / 2.1: listed only as an Index component; standalone % NOT FOUND in fetched pages.
- SWE-bench Verified / Pro: NOT FOUND (not published for this model in fetched pages).
- DeepSWE / LiveCodeBench / SciCode / SWE-Atlas / Toolathon / MCP-Atlas / Claw-Eval: NOT FOUND in fetched pages.

Reasoning / knowledge:

- AA Intelligence Index v4.3.2: 26 (aggregates GDPval-AA, Terminal-Bench 4.0, Humanity's Last Exam, CritPt, AA-Omniscience, AA-LCR).
- Humanity's Last Exam: **35%** (2nd place, behind Gemini 3 Pro Preview) (AA article).
- MMLU-Pro: **89%** (3rd, behind Gemini 3 Pro Preview and GPT-5.2 xhigh) (AA article).
- GPQA Diamond: **90%** (3rd, behind Gemini 3 Pro Preview and GPT-5.2 xhigh) (AA article).
- AA-Omniscience: **highest knowledge accuracy of any model tested** (≈91% hallucination rate, 3 pts above 2.5 Flash/3 Pro) — accuracy-driven, not low-hallucination (AA article).
- MMMU-Pro: **2nd highest of any model** (behind Gemini 3 Pro Preview) (AA article).
- Knowledge cutoff: January 2025 (Artificial Analysis).
- HLE / MRCR / AA-LCR / CritPt (standalone ranks): NOT FOUND as isolated figures in fetched pages.

Coding:

- LiveCodeBench / DeepSWE / SciCode / SWE-bench / SWE-Atlas: NOT FOUND for this model in fetched pages (Index 26 is the only coding proxy, as Terminal-Bench 4.0 is an Index component).

Long context:

- Context window verified **1,000,000 tokens** (≥1M tier; ≈1,500 A4 pages).
- MRCR / RULER retrieval-at-length: NOT FOUND in fetched pages.
- Output speed: **212 tok/s** (AA). Cost per Intelligence task ($): NOT FOUND in fetched pages.

### Normalized scores (1–100)

> Method: `model-comparison.md` (v4). Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded from Overall. Uses **current verifiable AA v4.3.2 figures** (not the repo's older rater average).

- **Tool use: 52/100.** AA Intelligence Index v4.3.2 = 26 (#99/674); Terminal-Bench 4.0 an Index component. No standalone SWE-bench / DeepSWE / LiveCodeBench / SciCode / Toolathon for this ID → low floor.
- **Reasoning: 53/100.** Index 26; strong components: HLE last-exam 35% (2nd), GPQA Diamond 90% (3rd), MMLU-Pro 89% (3rd), AA-Omniscience best knowledge accuracy. No standalone HLE/MRCR/CritPt rank to lift it.
- **Context window: 95/100.** 1,000,000 tokens (≥1M tier). No public MRCR/RULER ≥98%-at-512K retrieval figure (not warranting 100).
- **Multimodal: 84/100.** Text + image + video + audio input, text output (+image +video +audio-in); 2nd on MMMU-Pro. (Audio is an addition over the claude-fable-5.1 comparison set.)
- **Coding: 50/100.** Index 26 aggregates Terminal-Bench 4.0; no standalone SWE-bench/DeepSWE/LiveCodeBench/SciCode/SWE-Atlas % located for this ID in fetched pages → low floor.
- **Cost efficiency: 92/100.** $0.50/$3.00 per 1M in/out — cheapest tier band in methodology (~$92 vs ~$23 for a free-tier model); ~90% cache discount + 212 tok/s output speed reinforce efficiency.
- **Overall Score: 67/100.** (52 + 53 + 95 + 84 + 50) / 5 = 334 / 5 = 66.8 → 67. See scale note.

> **Scale note / discrepancy:** The repo's `model-comparison.md` AI-Rankings average for this model is **87.0**, and the Dec-2025 pre-release AA "everything you need to know" article reports an Intelligence Index of **71**. The **current (Sept 2026) Artificial Analysis Intelligence Index v4.3.2** scores this model **26** (#99/674), on a clearly-shifted index scale. Per the no-fabrication rule, scores above use the **current verifiable figure (26)**, which yields Overall ≈ 67 — materially lower than the repo's 87.0 (which reflects the older 71-scale average). Both figures are recorded here for reconciliation by a future maintainer. Reported Overall = **67/100**.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Google Developer Blog "Build with Gemini 3 Flash", Artificial Analysis model page, releases page, and "Everything you need to know" article); scores are normalized 1–100 interpretations, not official vendor scores. No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one using the same headings.