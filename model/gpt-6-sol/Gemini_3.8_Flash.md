# GPT-6 Sol — findings by Gemini 3.8 Flash

- Source: OpenAI (`gpt-6-sol`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's high-efficiency frontier model optimized for complex coding, scientific computing, and agentic workflows at moderate cost.
- **Provider / access:** OpenAI API (`openai/gpt-6-sol`); OpenCode Zen (`opencode/gpt-6-sol`).
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff April 2026.
- **IDs:** `openai/gpt-6-sol`, `opencode/gpt-6-sol` (no Free ID on Zen)
- **Context window:** 1,050,000 tokens (1.05M total input context, max output 128,000 tokens).
- **Modalities:** text, code, image/document in; text and code out; structured JSON; function calling / tool use; thinking reasoning chains.
- **Pricing (as of 2026-09-24):** Standard (<=272K): $2.00 / 1M input ($0.20 cached input), $10.00 / 1M output; Long context (>272K): $4.00 in / $15.00 out ($0.40 cached input).
- **Architecture:** Proprietary frontier mixture-of-experts model optimized for latency-critical agent loops.

### Raw benchmarks found

Agent / tool use:

- Agent-loop effective cost rate: **$0.74 / 1M input** at 75% cache hit (Command Code)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **47.5 Index** (#8 of 67 scored; Command Code / AA v4.3)
- AA-Omniscience: Knowledge and Hallucination Benchmark: **27 AA-Omniscience Index** (evals.report / OpenAI official)
- Long-context reasoning: **83.7** (Command Code / AA v4.3)
- GPQA Diamond: no verified public score found
- Humanity's Last Exam (HLE): no verified public score found
- CritPt: no verified public score found

Coding:

- DeepSWE: **68.8%** % resolved (evals.report / verified)
- FrontierCode: **49.3%** weighted score Main (evals.report / OpenAI official)
- SciCode: **57.6** scientific coding (Command Code / AA v4.3)
- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- Long-context reasoning score: **83.7** across 1.05M context (Command Code / AA)
- 1,050,000 token context window verified with dual pricing tiers (<=272K and >272K).

### Normalized scores (1–100)

- **Tool use: 86/100.** High-throughput agent execution with native tool calling and fast 116.3 tok/s streaming, tailored for deep repository loops.
- **Reasoning: 90/100.** AA Intelligence Index of 47.5 (#8 overall) and 27 AA-Omniscience Index show strong frontier reasoning, positioned just behind GPT-6 Astra.
- **Context window: 93/100.** Verified 1.05M context with 83.7 long-context reasoning score, handling entire repositories and extensive agent histories.
- **Multimodal: 85/100.** Solid visual and document comprehension for coding architectures and UI inspects, capped by focus on textual/code workflows.
- **Coding: 91/100.** Outstanding 68.8% DeepSWE, 49.3% FrontierCode, and 57.6 SciCode confirm top-tier software engineering proficiency.
- **Cost efficiency: 84/100.** Priced aggressively at $2.00 / 1M input and $10.00 / 1M output with $0.20 cache reads, delivering exceptional ROI for frontier coding.
- **Overall Score: 89/100.** Mean of quality dimensions: Math.round((86 + 90 + 93 + 85 + 91) / 5) = 89.0. Highly balanced frontier developer model combining strong coding with sustainable API pricing.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24 UTC
- Method: Public web research across evals.report, Command Code, and Models.dev verified ledgers; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
