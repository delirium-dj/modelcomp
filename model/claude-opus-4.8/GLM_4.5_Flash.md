# Claude Opus 4.8 — findings by GLM 4.5 Flash

- Source: Anthropic (claude-opus-4-8)
- Date: 2026-10-21
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's flagship model for complex reasoning, long-horizon agentic coding, and high-autonomy work. Released in May 2026 as the most capable Opus-tier model with adaptive thinking and 1M token context window.
- **Provider / access:** Anthropic API (proprietary, `claude-opus-4-8`), available through https://api.anthropic.com/v1/messages
- **Release / knowledge:** Released May 28, 2026; knowledge cutoff January 2026
- **IDs:** `claude-opus-4-8` (proprietary API)
- **Context window:** 1M tokens with 128K maximum output (300K with Batch API)
- **Modalities:** Text, image input; text output; reasoning yes (adaptive thinking); tool calls supported; streaming, web search, structured output, prompt caching supported
- **Pricing (as of 2026-10):** $5 per 1M tokens input, $25 per 1M tokens output, $0.50 per 1M tokens cache hit; available on Pro, Team, and Enterprise plans
- **Architecture:** Not publicly disclosed (proprietary)

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

- Terminal-Bench 2.1: **74.6%** (BenchLM, ranked #4/134)
- Terminal-Bench 4.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Online-Mind2Web: **84%** (Anthropic official)

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (Vals AI benchmark)
- GPQA: **93.6%** (BenchLM)
- HLE: **57.9%** (BenchLM)
- HLE w/o tools: **49.8%** (BenchLM)
- HLE w/ tools: **57.9%** (BenchLM)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **60.7 / no verified public score found** (BenchLM, ranked #19/155)
- Omniscience Accuracy / Hallucination Rate: **~4× lower than Opus 4.7** (Anthropic official)

Coding:

- SWE-bench Verified: **88.6%** (Anthropic official)
- SWE-bench Pro: **69.2%** (Anthropic official)
- SWE-bench Pro (vs GPT-5.5): **+10.6 points** (Anthropic official)
- SWE-bench Pro (vs Gemini 3.1 Pro): **+15 points** (Anthropic official)
- LiveCodeBench: **87.8%** (Vals AI benchmark)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **82.72%** (Vals AI benchmark)
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no verified public score found**

### Additional benchmark data from independent sources:

- **MMLU-Pro:** **89.58%** (Vals AI benchmark)
- **MMMU:** **86.59%** (Vals AI benchmark)
- **LegalBench:** **83.57%** (Vals AI benchmark)
- **Legal Agent Benchmark:** **>10%** (first LLM to exceed this threshold)
- **BrowseComp:** **84.3%** (BenchLM)
- **DeepSearchQA:** **93.1%** (BenchLM)
- **OSWorld-Verified:** **83.4%** (BenchLM)
- **Finance Agent v2:** **53.9%** (BenchLM)
- **MazeBench:** **0%** (BenchLM)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 85/100.** Strong agentic capabilities with 74.6% on Terminal-Bench 2.1 and 84% on Online-Mind2Web; excellent tool triggering and reduced skipped tool calls compared to Opus 4.7.
- **Reasoning: 92/100.** Outstanding reasoning performance with 92.4% on GPQA Diamond, 89.58% on MMLU-Pro, and 57.9% on HLE; significantly improved factual honesty with ~4× lower hallucination rate than Opus 4.7.
- **Context window: 98/100.** Exceptional 1M token context window with 128K maximum output; superior for long-form reasoning and document processing with fewer compactions.
- **Multimodal: 95/100.** Excellent multimodal capabilities with high-resolution image input (up to 2576px/3.75MP); native support for visual analysis and document understanding.
- **Coding: 93/100.** Elite coding performance with 88.6% on SWE-bench Verified and 69.2% on SWE-bench Pro; industry-leading in real-world software engineering tasks and multi-module development.
- **Cost efficiency: 60/100.** Premium pricing at $5/$25 per 1M tokens input/output; high cost for exceptional performance but still competitive within the frontier model tier.
- **Overall Score: 93/100.** Exceptional flagship model with outstanding reasoning capabilities, elite coding performance, and strong agentic skills; represents the pinnacle of Anthropic's Opus-tier models.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-21
- Method: Independent research from multiple benchmark sources including Anthropic official data, BenchLM, Vals AI, and published technical reports; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---