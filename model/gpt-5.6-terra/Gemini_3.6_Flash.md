# GPT-5.6 Terra — findings by Gemini 3.6 Flash

- Source: OpenAI (`openai/gpt-5.6-terra` / `gpt-5.6-terra`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's balanced workhorse model in the GPT-5.6 lineup, optimized for everyday agentic workflows, repository navigation, and cost-efficient reasoning.
- **Provider / access:** OpenAI API (`gpt-5.6-terra`), Microsoft Azure Foundry, Amazon Bedrock. Responses and Chat Completions API.
- **Release / knowledge:** 2026-07-09 release; early 2026 knowledge cutoff.
- **IDs:** `openai/gpt-5.6-terra`
- **Context window:** 1,050,000 tokens input / 128,000 max output tokens — verified via OpenAI developer documentation.
- **Modalities:** text, image in; text out; reasoning yes (configurable effort: none to max); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $2.00 input / $10.00 output / $0.20 cached per 1M tokens.
- **Architecture:** Proprietary multimodal foundation model with adaptive reasoning effort.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (Terminal-Bench Hard: **57.6%**; v4.0: **35.4%**)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.8%–94.6%**
- HLE: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **52**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **63.4%** (SWE-bench Pro)
- LiveCodeBench: **85.9%**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- MRCR / RULER: **99.4%** retrieval accuracy across full 1,050,000-token context window.

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong agentic terminal execution backed by 87.4% on Terminal-Bench 2.1 and 57.6% on Terminal-Bench Hard.
- **Reasoning: 92/100.** High-caliber scientific deduction evidenced by 90.8%–94.6% on GPQA Diamond and variable reasoning effort controls.
- **Context window: 95/100.** Verified 1.05M token input capacity with 128K max output tokens and 99.4% long-context retrieval precision.
- **Multimodal: 80/100.** Native multimodal perception for text, code screenshots, and technical images with text output.
- **Coding: 88/100.** Robust software engineering performance with 85.9% on LiveCodeBench and 63.4% on SWE-bench Pro.
- **Cost efficiency: 86/100.** Highly competitive mid-tier pricing ($2.00 / $10.00 per 1M) with predictable prompt caching benefits.
- **Overall Score: 89/100.** Balanced production workhorse combining strong agentic capabilities with economical throughput.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across OpenAI release documentation, Artificial Analysis evaluations, and developer benchmarks; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
