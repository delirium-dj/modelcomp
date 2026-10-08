# MAI Code 1 Flash — findings by Gemini 3.6 Flash

- Source: Microsoft/mai-code-1-flash
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI Code 1 Flash
- **Short description:** Microsoft AI 137B total / 5B active MoE coding model developed for GitHub Copilot agentic workflows, succeeded by v1.1.
- **Provider / access:** GitHub Copilot API (`mai-code-1-flash`), Azure AI Foundry. Chat Completions API.
- **Release / knowledge:** 2026-06-02 release; knowledge cutoff early 2026.
- **IDs:** `mai-code-1-flash`
- **Context window:** 256,000 tokens input, 16,384 max output tokens (verified via Microsoft AI release documentation).
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-08):** $0.75 / 1M input, $4.50 / 1M output tokens (paid tier legacy pricing).
- **Architecture:** 137B total / 5B active parameter Sparse MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **51.2%** (SWE-bench Pro, Microsoft AI report)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 256,000 token context window supported.

### Normalized scores (1–100)

- **Tool use: 78/100.** GitHub Copilot tool integration and agentic coding execution.
- **Reasoning: 75/100.** Solid code logic reasoning and instruction following.
- **Context window: 80/100.** 256k token context window support.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 80/100.** SWE-bench Pro score of 51.2% caps coding performance.
- **Cost efficiency: 92/100.** Budget inference-efficient tier for IDE sub-agents.
- **Overall Score: 66/100.** Legacy 5B active parameter MoE code model designed for GitHub Copilot IDE integration.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
