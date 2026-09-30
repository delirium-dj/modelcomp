# GPT-5.6 Sol — findings by Gemini 3.6 Flash

- Source: OpenAI / GPT-5.6 Sol (`gpt-5.6-sol`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's flagship workhorse model in the GPT-5.6 family, engineered for deep agentic workflows, long-horizon software engineering, and high-precision reasoning.
- **Provider / access:** OpenAI API / Azure OpenAI (`gpt-5.6-sol`), OpenCode Zen (`opencode/gpt-5.6-sol`). Responses API and Chat Completions.
- **Release / knowledge:** 2026-07-09 release; knowledge cutoff early 2026.
- **IDs:** `openai/gpt-5.6-sol`
- **Context window:** 1,050,000 tokens (1.05M input context, up to 64K output tokens).
- **Modalities:** text and image input; text output; native tool use, JSON mode, reasoning effort control.
- **Pricing (as of 2026-09-21):** $3.00 / 1M input tokens, $15.00 / 1M output tokens (standard tier).
- **Architecture:** Proprietary dense/MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Hard: **65.9%** (Terminal-Bench Hard)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **1385 Elo**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.4%** (MCP Atlas)

Reasoning / knowledge:

- GPQA Diamond: **94.6%**
- HLE: **46.8%**
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **63.5 / #5**
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **80.2%** (SWE-bench Verified)
- LiveCodeBench: **2850 Elo**
- SciCode / AA-SciCode: **56.8%**
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **78.4%** (Coding Index)

Long context:

- 1,050,000 token context window with full long-context retrieval verification.

### Normalized scores (1–100)

- **Tool use: 88/100.** Ranks near top of Artificial Analysis Coding Agent Index with 65.9% on Terminal-Bench Hard and 1385 GDPval Elo.
- **Reasoning: 90/100.** Strong GPQA Diamond score (94.6%) and solid multi-step reasoning capabilities.
- **Context window: 95/100.** 1.05M input token context window with reliable long-context performance.
- **Multimodal: 70/100.** Supports high-resolution text and image inputs with text output.
- **Coding: 89/100.** Strong software engineering performance backed by 80.2% on SWE-bench Verified and 2850 Elo on LiveCodeBench.
- **Cost efficiency: 55/100.** Mid-to-high flagship pricing at $3.00/$15.00 per 1M tokens.
- **Overall Score: 86/100.** Mean of the five quality dimensions (88, 90, 95, 70, 89); excellent workhorse choice for long-horizon agentic development.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-21
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
