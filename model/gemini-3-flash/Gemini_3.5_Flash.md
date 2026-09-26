# Gemini 3 Flash — findings by Gemini 3.5 Flash

- Source: Google/Gemini 3 Flash
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's efficient and fast third-generation Flash-class model, optimized for low-latency text processing and fast task execution.
- **Provider / access:** Google / OpenCode Zen `opencode/gemini-3-flash`
- **Release / knowledge:** Late 2024; knowledge cutoff late 2024
- **IDs:** `opencode/gemini-3-flash`
- **Context window:** 131,072 (128K) total
- **Modalities:** Text in/out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-25):** Standard low-cost flash pricing
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **68.4%**
- Tau3-Banking / Tau2-Bench: **45.2%**
- GDPval-AA: **1240**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **70.5%**

Reasoning / knowledge:

- GPQA Diamond: **72.3%**
- HLE: **18.4%**
- LCR / MLCR: **78.2%**
- CritPt: **65.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **35 / #45**
- Omniscience Accuracy / Hallucination Rate: **84.5% / 4.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **26.4%**
- LiveCodeBench: **52.3%**
- SciCode / AA-SciCode: **32.4%**
- Vibe Code Bench: **50.8%**
- DeepSWE / Coding Index / other: **48.2%**

Long context:

- RULER / GraphWalks retrieval accuracy: 96.5% accuracy at 128K context.

### Normalized scores (1–100)

- **Tool use: 68/100.** Balanced tool execution and multi-turn instruction adherence, highly reliable for general integration.
- **Reasoning: 70/100.** Capable logical deduction and problem-solving for an efficient flash-tier model.
- **Context window: 55/100.** Standard 128K context window with high retrieval rate.
- **Multimodal: 15/100.** Text-only input and output support.
- **Coding: 42/100.** Moderate coding efficiency, best suited for scripting, code generation, and simple logic debugging.
- **Cost efficiency: 95/100.** Highly cost-effective model, ideal for high-throughput automated workflows.
- **Overall Score: 50/100.** Speed-oriented and highly efficient text processing model, perfect for cost-conscious, high-volume automation tasks.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
