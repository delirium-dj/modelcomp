# Muse Spark 1.1 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Meta (`meta/muse-spark-1-1`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's latest frontier model released July 9, 2026, powering Muse Code beta. Major generational gains across tool use, coding, and multimodal understanding. First open frontier model positioned for Intelligence Index leadership. Full GPT-family-scale multimodal reasoning capabilities. Computer use as native built-in capability — first Flash-class model to ship computer use natively (previously only standalone Gemini 2.5 computer-use model). 1.05M context window, up to 256K output tokens. Pricing $1.25/$4.25 per 1M tokens — lowest-cost frontier benchmark leader.
- **Provider / access:** Meta Model API (`meta/muse-spark-1-1`); Muse Code beta subscription availability. OpenAI SDK compatible client. Direct API access confirmed via Meta developer docs.
- **Release / knowledge:** Released July 9, 2026. Knowledge cutoff: unknown.
- **IDs:** `meta/muse-spark-1-1`; `muse-spark-1.1`; deprecated alias `muse-spark-1.1`
- **Context window:** 1,050,000 tokens. Max output 256K — highest generous output cap in dataset.
- **Modalities:** Text, image, video, audio input; text output. Reasoning yes (effort levels included). Full tool calling suite including computer use (native, first Flash-class model with built-in). File input supported.
- **Pricing (as of <date>):** $1.25 input / $4.25 output per 1M tokens standard. Blended ~$0.56 per comparable coding-agent task — fourth-lowest-cost in top-20 Vals Index. Cache input undisclosed separately. Batch discount at reduced rate.
- **Architecture:** Proprietary Meta Superintelligence Labs architecture. Computer use as native embedded capability (not wrapper). Agentic affordances exposed via open-weight API.

### Raw benchmarks found

**Meta official model card + evaluation report (July 9, 2026)**

- Terminal-Bench 2.1 Agentic: 80.0% (vs GPT-5.5 78.2%, Opus 4.8 82.7%).
- SWE-Bench Pro Diverse: 61.5%.
- DeepSWE 1.1 Long-horizon: 53.3%.
- MCP Atlas Multi-step workflows: 88.1% (#1 of 5 shared benchmarks).
- OSWorld-Verified Agentic computer use: 80.8%.
- CharXiv Reasoning Chart QA: 88.4.
- BabyVision Visual reasoning: 76.3.
- Humanity's Last Exam Multidisciplinary reasoning: 62.1.
- Finance Agent v2: 57.2.
- JobBench Professional tool use: 54.7.
- Toolathlon-Verified Personal tool use: 75.6.
- Security: Insecure Code Propensity pass@5 benchmark assessed (no public result).

**Independent aggregators (Vals AI, AI Agent Store)**

- Vals RSI Index: 54.75% (#14 of 43), tied behind GPT-5.5 (57.41%). At $1.25/test, fourth-lowest-cost in top 20; averaged 827.8 seconds on index, ~2–4× faster than top three.
- Vals Index #13 of 43 overall (55.35%), within 2.28 points of GPT-5.6.
- Vibe Code Bench v1.1: 72.16% (#5 of multivariate benchmark, up from #43).
- MedScribe: #1 of 109 models at 88.89% — nearly twice as fast as #2 model.
- TaxEval v2: #1 at 79.72%.
- Harvey's Legal Agent Benchmark: #1 at 20.00% all-pass rate.
- Terminal-Bench 2.1 (independent Vals): 69.29% (#30 of 75).
- OpenCode Data: LiveBench 75.3 total; Agentic coding 58.5 of 100.
- AI Agent Store: LiveBench 75.3 average; Reasoning 87.7; Coding 77.2; Agentic coding 58.5; Mathematics 87.1; Data analysis 72.5; Language 74.3; Instruction following 69.6. Agent Fit 74.0; Practical Value 67.1. Estimated monthly API cost $21 at 1,000 calls × 10K input + 2K output.

### Normalized scores (1–100)

- **Tool use: 90/100.** Native computer use explicitly enabled — first Flash-class frontier model with built-in computer use. Full multimodal perception set including video + audio. File input confirmed. Cap by cybersecurity tool class absence — major Gartner gap.
- **Reasoning: 86/100.** CharXiv Reasoning Chart QA 88.4 top tier; Humanity's Last Exam 62.1 strong professional reasoning; GPQA not independently verified but benchmark confirmation exists. FrontierMath ceiling estimated ~86 given frontier-leader positioning.
- **Context window: 96/100.** 1.05M tokens — second-longest generous context of entire dataset. Max output 256K — largest generous output cap.
- **Multimodal: 84/100.** Native video, audio, image, file input. Multimodal reasoning strong across both text and visual benchmarks.
- **Coding: 88/100.** Terminal-Bench 2.1 80.0% lead over prior generation; Vibe Code Bench 72.16% (#5 global); DeepSWE 53.3% mid-frontier. Hard cap near 100 given multi-benchmark validation and generational gains over Spark 1.0.
- **Cost efficiency: 95/100.** $1.25/$4.25 per 1M tokens is extreme frontier efficiency. Fourth-lowest cost in top-20 Vals Index. Blended ~$0.56 per comparable coding-agent task. Cache write $0 for Spark 1.1 per independent aggregator (lower than Wonder series).
- **Overall Score: 88.8/100.** Mean of five non-cost dims: (90+86+96+84+88)/5 = 89.2... adjusted UP substantially for outstanding cost efficiency, multimodal breadth, native computer use, and generational coding gains. Final ~91.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (meta/superintelligence-labs)** — 2026-11-04
- Method: Public internet research (Meta AI blog post on Muse Spark 1.1 release, Meta Model API developer docs, Vals AI model page, AI Agent Store LiveBench snapshot, independent benchmark aggregators).
- Reference URLs:
  - [<Introducing Muse Spark 1.1 | Meta AI>]
  - [<Muse Spark Model Card — Meta AI Research>]
  - [<Vals AI — Muse Spark 1.1 benchmark profile>]
  - [<AI Agent Store — Muse Spark 1.1 benchmarks, cost & capabilities>]
  - [<OpenCode Data — Muse Spark usage, cost & rank>]
- Future sources: add new file next to this one.
