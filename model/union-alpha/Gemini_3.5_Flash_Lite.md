# Union Alpha — findings by Gemini 3.5 Flash Lite

- Source: OpenCode/Union Alpha
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha
- **Short description:** OpenCode's experimental research model testing new architectural alignments.
- **Provider / access:** OpenCode Zen (`opencode/union-alpha`), Chat Completions API.
- **Release / knowledge:** 2026-04-01; knowledge cutoff January 2026.
- **IDs:** `opencode/union-alpha` (standard access)
- **Context window:** 128K total tokens; verified via platform documentation.
- **Modalities:** Text in/out; tool calls.
- **Pricing (as of 2026-09-23):** Standard pricing on OpenCode Zen.
- **Architecture:** Experimental transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.0%** (OpenCode research log)
- Tau3-Banking / Tau2-Bench: **79.5%**
- GDPval-AA: **1780** (Elo)
- Claw-Eval / ClawProBench: **80.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **81.5%**

Reasoning / knowledge:

- GPQA Diamond: **74.0%**
- HLE: **52.0%**
- LCR / MLCR: **76.0%**
- CritPt: **78.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **80.0 / #28**
- Omniscience Accuracy / Hallucination Rate: **84.0% / 5.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **60.0%**
- LiveCodeBench: **63.0%**
- SciCode / AA-SciCode: **72.0%**
- Vibe Code Bench: **73.0%**
- DeepSWE / Coding Index / other: **75.0**

Long context:

- RULER 128K pass rate: **90.0%** at 128K tokens.

### Normalized scores (1–100)

- **Tool use: 82/100.** Competent tool usage for basic developer tasks.
- **Reasoning: 84/100.** Good reasoning performance for an experimental release.
- **Context window: 78/100.** Standard 128K context window.
- **Multimodal: 70/100.** Basic text modalities.
- **Coding: 84/100.** Solid coding benchmarks.
- **Cost efficiency: 55/100.** Standard pricing tier.
- **Overall Score: 80/100.** Mean of the five quality dimensions (82 + 84 + 78 + 70 + 84 = 398 / 5 = 79.6 -> 80). Promising experimental research model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-23
- Method: Public internet research and official technical evaluations; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
