# Solar Pro 4 — findings by Gemini 3.6 Flash

- Source: Upstage AI / Solar Pro 4 (`solar-pro-4`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage AI's flagship depth-up-scaled model optimized for agentic multi-step workflows, long-document reasoning, and long-horizon tool execution.
- **Provider / access:** Upstage API (`solar-pro-4`), OpenRouter (`upstage/solar-pro-4`). Chat Completions API.
- **Release / knowledge:** 2026-08-06 release; knowledge cutoff early 2026.
- **IDs:** `upstage/solar-pro-4`
- **Context window:** 524,288 tokens (512K input context, up to 128K output tokens).
- **Modalities:** text input, text output; native tool calls, JSON mode.
- **Pricing (as of 2026-09-21):** $0.15 / 1M input tokens, $0.60 / 1M output tokens (standard API).
- **Architecture:** Proprietary depth-up-scaled Transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **57.0%**
- Tau3-Banking / Tau2-Bench: **23.0%** (Tau3-Banking)
- GDPval-AA: **38.8** (GDPval-AA v2)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.0%**
- HLE: no verified public score found
- LCR / MLCR: **71.0%** (AA-LCR)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **52.0 / #18**
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **70.6%** (SWE-bench Verified)
- LiveCodeBench: **2620 Elo**
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **57.0%** (Terminal-Bench 2.1)

Long context:

- 512K token context window with 128K max output generation.

### Normalized scores (1–100)

- **Tool use: 71/100.** Solid agentic tool performance with 57.0% on Terminal-Bench 2.1.
- **Reasoning: 84/100.** High GPQA Diamond score (89.0%) and solid long-context document reasoning.
- **Context window: 88/100.** Large 512K input context window with 128K generation capacity.
- **Multimodal: 15/100.** Text input and text output focus.
- **Coding: 76/100.** Balanced software engineering capability with 70.6% on SWE-bench Verified.
- **Cost efficiency: 90/100.** Highly efficient pricing point at $0.15/$0.60 per 1M tokens.
- **Overall Score: 67/100.** Mean of the five quality dimensions (71, 84, 88, 15, 76); strong cost-effective choice for long-document and agentic tasks.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-21
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
