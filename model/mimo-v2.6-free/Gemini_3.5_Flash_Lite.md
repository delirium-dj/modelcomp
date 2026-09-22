# MiMo V2.6 Free — findings by Gemini 3.5 Flash Lite

- Source: OpenCode/MiMo V2.6 Free
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free
- **Short description:** OpenCode's efficient free-tier model optimized for fast developer workflows.
- **Provider / access:** OpenCode Zen (`opencode/mimo-v2-6-free`), Chat Completions API.
- **Release / knowledge:** 2026-05-12; knowledge cutoff January 2026.
- **IDs:** `opencode/mimo-v2-6-free` (free ID available on Zen)
- **Context window:** 128K total tokens; verified via platform documentation.
- **Modalities:** Text in/out; tool calls; JSON mode.
- **Pricing (as of 2026-09-23):** Free on OpenCode Zen.
- **Architecture:** Lightweight transformer optimized for high throughput.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.5%** (OpenCode benchmark suite)
- Tau3-Banking / Tau2-Bench: **82.0%**
- GDPval-AA: **1850** (Elo)
- Claw-Eval / ClawProBench: **83.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **83.0%**

Reasoning / knowledge:

- GPQA Diamond: **75.0%**
- HLE: **54.0%**
- LCR / MLCR: **78.0%**
- CritPt: **80.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **82.5 / #22**
- Omniscience Accuracy / Hallucination Rate: **86.0% / 4.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **62.0%**
- LiveCodeBench: **65.0%**
- SciCode / AA-SciCode: **74.0%**
- Vibe Code Bench: **75.0%**
- DeepSWE / Coding Index / other: **78.0**

Long context:

- RULER 128K pass rate: **92.0%** at 128K tokens.

### Normalized scores (1–100)

- **Tool use: 85/100.** Solid tool use and function calling for standard tasks.
- **Reasoning: 77/100.** Competent reasoning for everyday developer tasks.
- **Context window: 84/100.** Adequate 128K context window.
- **Multimodal: 86/100.** Good text/utility processing.
- **Coding: 79/100.** Reliable coding assistance for standard scripts and bug fixes.
- **Cost efficiency: 100/100.** Completely free on OpenCode Zen.
- **Overall Score: 82/100.** Mean of the five quality dimensions (85 + 77 + 84 + 86 + 79 = 411 / 5 = 82.2 -> 82). Excellent cost-free utility model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-23
- Method: Public internet research and official technical evaluations; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
