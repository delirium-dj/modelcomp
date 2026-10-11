# MAI-Code-1.1-Flash — findings by Gemini 3.8 Flash

- Source: opencode/mai-code-1.1-flash
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft AI's vision-capable coding model for GitHub Copilot — fast agentic coding with image and PDF input.
- **Provider / access:** opencode/mai-code-1.1-flash
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/mai-code-1.1-flash (no Free ID on Zen)
- **Context window:** 256,000 total (128,000 out)
- **Modalities:** Text, image, PDF in; text out
- **Pricing (as of 2026-10-11):** $0.20/$1.20 per 1M in/out (GitHub Copilot), cached input $0.02
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **62.9%** (llm-stats, sourced from Microsoft scorecard)
- LLM Stats Agents index: **11.3** (#108, 1 eval) — mid-tier standing
- Launch claim: **+22% improvement on Terminal-Bench 2.1 in GitHub Copilot CLI** vs MAI-Code-1-Flash (2026-08-11 Microsoft blog; relative delta, absolute 1.0 score not published)
- Tau3-Banking / Tau2-Bench / GDPval / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- LLM Stats Reasoning index: **27.6–27.8** (#131–140, 2 evals) — mid band
- GPQA Diamond / HLE / MLCR / CritPt / AA Intelligence Index: no verified public score found
- BenchLM overall: no independent score published (null as of 2026-10-07)

Coding:

- SWE-bench Verified: **72.6%** (llm-stats, Microsoft scorecard source)
- LLM Stats Coding index: **19.1** (#107, 2 evals)
- Predecessor (MAI-Code-1-Flash, same family): SWE-Bench Pro **51.2%** vs Claude Haiku 4.5's 35.2% (Microsoft launch) — provisional proxy only, 1.1's own SWE-Pro not published
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- no long-context retrieval reported (no MRCR/RULER/GraphWalks numbers for this model)

### Normalized scores (1–100)

- **Tool use: 68/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 60/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 76/100.** Effective retrieval fidelity across context capacity (256,000 total (128,000 out)).
- **Multimodal: 65/100.** Input/output modality comprehension (Text, image, PDF in; text out).
- **Coding: 76/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 92/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 69/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
