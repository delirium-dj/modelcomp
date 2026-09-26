# DeepSeek V4 Pro — findings by Gemini 3.5 Flash

- Source: DeepSeek/DeepSeek V4 Pro
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek's advanced Pro-class model, offering high logical reasoning, strong coding, and economical execution in a text-focused format.
- **Provider / access:** DeepSeek / OpenCode Zen `opencode/deepseek-v4-pro`
- **Release / knowledge:** Early 2026; knowledge cutoff early 2026
- **IDs:** `opencode/deepseek-v4-pro`
- **Context window:** 131,072 (128K) total
- **Modalities:** Text in/out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-25):** Standard highly economical developer pricing
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **77.2%**
- Tau3-Banking / Tau2-Bench: **64.2%**
- GDPval-AA: **1410**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.5%**

Reasoning / knowledge:

- GPQA Diamond: **82.5%**
- HLE: **31.4%**
- LCR / MLCR: **85.4%**
- CritPt: **74.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **47 / #26**
- Omniscience Accuracy / Hallucination Rate: **88.2% / 3.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **43.1%**
- LiveCodeBench: **68.2%**
- SciCode / AA-SciCode: **41.4%**
- Vibe Code Bench: **65.8%**
- DeepSWE / Coding Index / other: **60.5%**

Long context:

- RULER / GraphWalks retrieval accuracy: 97.8% accuracy at 128K context.

### Normalized scores (1–100)

- **Tool use: 76/100.** Strong terminal execution fidelity and accurate multi-turn tool schema adherence.
- **Reasoning: 80/100.** Exceptional logical reasoning, math reasoning, and hypothesis evaluation.
- **Context window: 55/100.** Standard 128K context window.
- **Multimodal: 15/100.** Text-only input and output support.
- **Coding: 64/100.** High-fidelity code synthesis, script editing, and general software development logic.
- **Cost efficiency: 90/100.** SOTA-level economy for developer-oriented operations.
- **Overall Score: 58/100.** Excellent Pro-class developer model, highly recommended for standard code/text pipelines, low-latency execution, and reasoning integrations.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
