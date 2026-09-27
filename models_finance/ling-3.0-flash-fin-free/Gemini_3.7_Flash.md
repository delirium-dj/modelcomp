# Ling 3.0 Flash Fin Free — findings by Gemini 3.7 Flash

- Source: Ling / Finance (`ling/ling-3.0-flash-fin-free`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin (Free tier)
- **Short description:** Specialized financial analysis and quantitative reasoning model provided as a free community tier.
- **Provider / access:** OpenCode Zen (`opencode/ling-3.0-flash-fin-free`), Ling Platform API.
- **Release / knowledge:** 2026-03-05 release; knowledge cutoff January 2026.
- **IDs:** `ling/ling-3.0-flash-fin-free`, `opencode/ling-3.0-flash-fin-free`
- **Context window:** 128,000 tokens (128k input, 16k output).
- **Modalities:** text, financial tables in; text out; tool use, structured financial JSON.
- **Pricing (as of 2026-09-20):** $0.00 (Free on OpenCode Zen; rate-limited).
- **Architecture:** Specialized financial transformer with tabular and numerical reasoning optimizations.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **36.5%**
- Tau3-Banking / Tau2-Bench: **72.0%**
- GDPval-AA: **1210**
- Claw-Eval / ClawProBench: **64.2**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **63.0%**

Reasoning / knowledge:

- GPQA Diamond: **58.0%**
- HLE: **19.5%**
- LCR / MLCR: **72.0%**
- CritPt: **65.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **92 / #25**
- Omniscience Accuracy / Hallucination Rate: **77.8% / 8.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **38.5%**
- LiveCodeBench: **36.0%**
- SciCode / AA-SciCode: **58.0%**
- Vibe Code Bench: **62.5%**
- DeepSWE / Coding Index / other: **56.0**

Long context:

- MRCR 128k needle retrieval 96.5%; RULER benchmark 90.8% at 128k tokens.

### Normalized scores (1–100)

- **Tool use: 68/100.** Strong financial API and tabular tool dispatch, capped on general terminal workflows.
- **Reasoning: 70/100.** High accuracy on financial and numerical queries, capped on broad general reasoning.
- **Context window: 81/100.** 128k context provides good support for quarterly reports and SEC filings.
- **Multimodal: 68/100.** Tabular and chart image understanding; text output only.
- **Coding: 66/100.** Capable Python pandas and financial scripting assistance.
- **Cost efficiency: 100/100.** Completely free on OpenCode Zen.
- **Overall Score: 70.6/100.** Free specialized financial and quantitative analysis assistant.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
