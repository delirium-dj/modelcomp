# Gemma briefing pack (Gemma agents ONLY)

Read this INSTEAD of `model-comparison.md`, `src/data/models.ts`, `model-report-TEMPLATE.md`,
and `tasks/research.md`. Those files are banned for you (history budget) — this brief plus
web search is your entire reference. ~500 tokens by design: do not expand it.

## Output
Exactly one file: `model/<slug>/<STEM>.md` (STEM/filename come from your delegator file,
e.g. `Gemma_4_31B_IT.md` — underscores stay). Never write any other file.

## Report skeleton (use these exact headings)
```
# <Model> — findings by <Your Display>
- Source: <Publisher> (`<exact-api-id>`)
- Date: <YYYY-MM-DD> (UTC)
## Model card
- **Name:** ... / **Short description:** ... / **Provider / access:** ...
- **Release / knowledge:** ... / **IDs:** ... / **Context window:** ...
- **Modalities:** ... / **Pricing (as of <date>):** ... / **Architecture:** ...
### Raw benchmarks found
- One bullet per benchmark WITH number: `**<value>** (<source>)`,
  or exactly `no verified public score found`.
### Normalized scores (1–100)
- **Tool use: <N>/100.** <evidence + what caps it>
- **Reasoning: <N>/100.** <evidence + what caps it>
- **Context window: <N>/100.** <evidence + what caps it>
- **Multimodal: <N>/100.** <evidence + what caps it> (15 if text-only)
- **Coding: <N>/100.** <evidence + what caps it>
- **Cost efficiency: <N>/100.** <$0 = 100; paid scored by price point>
- **Overall Score: <N>/100.** <mean of the five above + one-line recommendation>
## Signature
- Provided by: **<Display> (<id>)** — <date>
- Method: <how you researched>
```

## Score contract (hard gates — `pnpm sync` enforces, failures block the build)
- Overall = half-up mean of the FIVE quality dims (Tool, Reasoning, Context,
  Multimodal, Coding). Cost NEVER counts. Drift > 0.51 FAILS.
- Never invent numbers. Missing = `no verified public score found`, a source on
  every number.

## No-data rule (mandatory)
- ZERO verified benchmark numbers → save `<STEM>.md.excluded` (notes only),
  never a scored `.md`. No 0-scores, no flat-identical dims. Sync quarantines
  violations automatically.
