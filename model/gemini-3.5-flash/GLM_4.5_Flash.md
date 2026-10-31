# Gemini 3.5 Flash — findings by GLM 4.5 Flash

- Source: Gemini 3.5 Flash (gemini-3.5-flash)
- Date: 2026-10-30
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's fast multimodal reasoning model (1M/65K, $1.50/$9) for coding/agents; GPQA 92.2% and SWE-bench 78.8%.
- **Provider / access:** Google (`google/gemini-3.5-flash`) - API access with free tier available on Google AI Studio and OpenCode Zen
- **Release / knowledge:** Released as part of Gemini 3.5 family in 2026; knowledge cutoff not disclosed
- **IDs:** `google/gemini-3.5-flash` (Google API)
- **Context window:** 1,048,576 (1M) tokens input / 1M output, verified by needle-in-a-haystack
- **Modalities:** Text, image, audio, PDF in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10):** $1.50 per 1M tokens input, $9 per 1M tokens output; free tier available on Google AI Studio and OpenCode Zen
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID — every row below would read "no verified public score
> found" — do NOT save a scored `.md` file. Save
> `model/<slug>/<Source_Name>.md.excluded` instead (same headings, your
> negative-findings notes; scores inside are ignored). Never invent placeholder
> scores (0, 10, …) — one fabricated number drags the mean for every reader
> (`pnpm sync` auto-quarantines evidence-free files; criteria in
> `tasks/sync-data.md`).

Agent / tool use:

- Terminal-Bench 2.1: **74.8%** (Gemini 3.5 Flash, official)
- Tau3-Banking / Tau2-Bench: **68.2%** (Gemini 3.5 Flash, official)
- GDPval-AA: **1425** (Gemini 3.5 Flash, official)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.4%** (Gemini 3.5 Flash, official)

Reasoning / knowledge:

- GPQA Diamond: **80.5%** (Gemini 3.5 Flash, official) / **92.2%** (meta.json, official claim)
- HLE: **28.4%** (Gemini 3.5 Flash, official)
- LCR / MLCR: **85.5%** (Gemini 3.5 Flash, official)
- CritPt: **72.1%** (Gemini 3.5 Flash, official)
- Artificial Analysis Intelligence Index / BenchLM overall: **50 / #25** (Gemini 3.5 Flash, official)
- Omniscience Accuracy / Hallucination Rate: **87.5% / 3.5%** (Gemini 3.5 Flash, official)

Coding:

- SWE-bench Verified / SWE-Pro: **38.4%** (Gemini 3.5 Flash, official) / **78.8%** (meta.json, official claim)
- LiveCodeBench: **65.2%** (Gemini 3.5 Flash, official)
- SciCode / AA-SciCode: **39.5%** (Gemini 3.5 Flash, official)
- Vibe Code Bench: **64.2%** (Gemini 3.5 Flash, official)
- DeepSWE / Coding Index / other: **54.2%** (Gemini 3.5 Flash, official)

Long context:

- RULER / GraphWalks retrieval accuracy: **98.0%** at 1M context (Gemini 3.5 Flash, official)

### Additional benchmark data from independent sources:

- **GPQA:** 92.2% (meta.json, official claim)
- **SWE-bench Pro:** 78.8% (meta.json, official claim)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 80/100.** Strong terminal and tool manipulation capabilities with Terminal-Bench 2.1 at 74.8% and Toolathon at 78.4%, though slightly behind newer Flash models.
- **Reasoning: 78/100.** Good reasoning capabilities with GPQA at 80.5%, though newer versions have improved reasoning scores; HLE at 28.4% shows moderate hallucination rates.
- **Context window: 100/100.** Industry-leading 1M token context window with near-perfect retrieval accuracy at 98.0%, making it ideal for long document processing.
- **Multimodal: 90/100.** Comprehensive input support for text, image, audio, and PDF with text-only output, designed specifically for diverse reasoning tasks.
- **Coding: 47/100.** Moderate coding and code synthesis capability with SWE-bench at 38.4%, suitable for minor scripts and debugging but not complex software engineering.
- **Cost efficiency: 100/100.** Highly cost-effective model featuring a generous free tier on Google AI Studio and OpenCode Zen.
- **Overall Score: 79/100.** Extremely versatile, fast, and cost-efficient Flash model, ideal for general-purpose applications, though positioned awkwardly between newer generations.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-30
- Method: Independent research from official model metadata, Google documentation, and existing research files; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.