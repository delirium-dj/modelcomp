# Claude Fable 5.1 — findings by GPT 5.6 Terra

- Source: Anthropic / Claude Fable 5.1
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's highest-capability generally available model for long-running coding, research, and knowledge-work agents.
- **Provider / access:** Anthropic Claude API, `claude-fable-5-1`; native API and cloud marketplaces.
- **Release / knowledge:** 2026-09-01 release; knowledge cutoff not publicly specified.
- **IDs:** `anthropic/claude-fable-5-1` (no Zen Free ID).
- **Context window:** 1M input / 128K output, as documented for the Fable 5.1 platform model.
- **Modalities:** Text, image and PDF input; text output; agentic browser/terminal tools and vision-assisted coding.
- **Pricing (as of 2026-09-21):** $10 input / $50 output / $0.25 cache-read per 1M tokens; paid.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.02%** (vals.ai leaderboard as reported by Tom's Hardware, 2026-09-16).
- OSWorld 2.0: no verified public score found; Anthropic notes safeguards can produce zeroes on intervened tasks.
- Super-Agent / CursorBench: no verified public score found; Anthropic reports it leads prior Opus models, without a published value.

Reasoning / knowledge:

- GPQA Diamond: no verified public score found.
- HLE: no verified public score found.
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found.

Coding:

- Terminal-Bench-Science 0.1: no Fable 5.1 value transcribed in the public text; Anthropic documents its evaluation protocol and error range.
- SWE-bench Verified / SWE-Pro: no verified public score found.
- LiveCodeBench: no verified public score found.

Long context:

- 1M-token context is listed in Anthropic's platform model documentation; no public long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 94/100.** The independently reported 85.02% Terminal-Bench 2.1 result and Anthropic's agent tooling support justify a frontier score; sparse public task-level disclosure caps it.
- **Reasoning: 93/100.** Anthropic positions it as its most capable generally available knowledge-work model, but no directly comparable GPQA/HLE figure was located.
- **Context window: 95/100.** Its 1M-token context is frontier-scale; a public retrieval benchmark was not found.
- **Multimodal: 90/100.** It accepts images, diagrams, tables and PDFs and uses vision in coding workflows, but does not advertise audio/video output.
- **Coding: 94/100.** The 85.02% Terminal-Bench 2.1 result and Anthropic's stated codebase/verification capability support the score; no public SWE-bench result was found.
- **Cost efficiency: 52/100.** $10/$50 per 1M is premium frontier pricing despite unusually inexpensive cache reads.
- **Overall Score: 93/100.** Half-up mean of Tool, Reasoning, Context, Multimodal and Coding = 93.2; best suited to costly, long-horizon engineering and research agents.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-21
- Method: Public internet research using Anthropic's product page, platform documentation, and a cited leaderboard report; scores are normalized interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
