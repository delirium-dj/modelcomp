# <Model Name> — findings by <Agent Name>

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and delete this block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: <Publisher>/<Model>, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: <YYYY-MM-DD> (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** <Model Name, incl. "Free"-tier wording>
- **Short description:** 1–2 sentences: what it is, who makes it, top use case. Flag if it is a variant/alias of another entry.
- **Provider / access:** <Host(s) with exact API ID, e.g. OpenCode Zen `opencode/<id>` or `https://<host>/v1/...`>. Note whether it is Chat Completions or Responses API.
- **Release / knowledge:** <YYYY-MM-DD release; knowledge cutoff if known>
- **IDs:** `<provider>/<model-id>` (state explicitly if no Free ID exists on Zen)
- **Context window:** <total tokens; input / max output if known — say how verified>
- **Modalities:** <text/image/audio/video/PDF in; text out; reasoning yes/no; tool calls; JSON mode>
- **Pricing (as of <date>):** <in / out / cached per 1M; mark Free or paid with $; note data-usage/privacy caveats for free tiers>
- **Architecture:** <params total / active, MoE, open-weights license, or "proprietary">

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID — every row below would read "no verified public score
> found" and all normalized dims would be guesses — do NOT save a scored `.md`
> file. Save `model/<slug>/<Source_Name>.md.excluded` instead (same headings,
> your negative-findings notes; scores inside are ignored). `pnpm sync` skips
> `.excluded` files loudly so they never poison the average. Never invent
> placeholder scores (0, 10, …) to fill a `.md` file — one fabricated number
> drags the mean for every reader. (`pnpm sync` enforces this automatically:
> 8+ "not found" rows with zero measured numbers, any 0-scored quality dim, or
> flat-identical dims with zero cited numbers = renamed to `.excluded`.)

Agent / tool use:

- <Benchmark> (**group**): <value> <(source / rank / note)>
- Terminal-Bench 2.1: **<value>%**
- Tau3-Banking / Tau2-Bench: **<value>%** <(harness)>
- GDPval-AA: **<Elo>**
- Claw-Eval / ClawProBench: **<value>** <or: no verified public score found>
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **<value>**

Reasoning / knowledge:

- GPQA Diamond: **<value>%**
- HLE: **<value>%**
- LCR / MLCR: **<value>%**
- CritPt: **<value>%**
- Artificial Analysis Intelligence Index / BenchLM overall: **<value> / <#rank>**
- Omniscience Accuracy / Hallucination Rate: **<value>% / <value>%**

Coding:

- SWE-bench Verified / SWE-Pro: **<value>%**
- LiveCodeBench: **<value>%**
- SciCode / AA-SciCode: **<value>%**
- Vibe Code Bench: **<value>%**
- DeepSWE / Coding Index / other: **<value>**

Long context:

- <MRCR / RULER / GraphWalks value at window length, or "no long-context retrieval reported">

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. 
> 
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)` (half-up rounding to nearest integer or 1 decimal).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: <N>/100.** <evidence + what caps it>
- **Reasoning: <N>/100.** <evidence + what caps it>
- **Context window: <N>/100.** <per tier mapping + actual measured limit>
- **Multimodal: <N>/100.** <input/output coverage; 15 if text-only>
- **Coding: <N>/100.** <evidence + what caps it>
- **Cost efficiency: <N>/100.** <$0 = 100; paid value at price point>
- **Overall Score: <N>/100.** <mean of the five non-cost dims + one-line best-fit recommendation>

---

## Signature

- Provided by: **<Agent Full Name> (<openai/open-...-id>)** — <YYYY-MM-DD>
- Method: <how you researched, e.g. public internet research>; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model → file saved as `<Source_Name>.md.excluded`, not `.md` (see SELF-EXCLUSION above).