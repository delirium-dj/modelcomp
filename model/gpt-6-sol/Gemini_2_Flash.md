# GPT-6 Sol — findings by Gemini 2 (google/gemini-2.0-flash-exp)
- Source: OpenAI/`gpt-6-sol`
- Date: 2026-10-04
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GPT-6 Sol (incl. ChatGPT Work/Codex tiers)
- **Short description:** OpenAI’s mid-tier reasoning model designed for complex coding, agentic workflows, and professional automation. It serves as a cost-efficient alternative to GPT-6 Astra.
- **Provider / access:** OpenAI `openai/gpt-6-sol` (also available via OpenRouter, Venice.ai, and EvoLink). Accessed via Responses API for tools or Chat Completions.
- **Release / knowledge:** 2026-09-22; knowledge cutoff 2026-04-30.
- **IDs:** `gpt-6-sol`, `gpt-6-sol-2026-09-22` (No specific "Free" ID; accessible via Plus/Work plans).
- **Context window:** 1,050,000 tokens (Vendor verified); 128,000 max output tokens.
- **Modalities:** text/image in; text out; reasoning yes (configurable effort); tool calls; JSON mode.
- **Pricing (as of 2026-10-04):** $2.00 input / $10.00 output per 1M tokens; $0.20 cached input. (Standard API pricing; 2x multiplier for prompts >272K).
- **Architecture:** Proprietary; trained with similar methods to GPT-6 Astra.

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **88%** (Artificial Analysis/OpenAI)
- Tau3-Banking / Tau2-Bench: **68.7%** (TAU-Bench / OpenRouter)
- GDPval-AA: **49.3%** (Artificial Analysis v2.1)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:
- GPQA Diamond: **91.8%** (OpenRouter/OpenAI)
- HLE: **47.9%** (Humanity's Last Exam / Artificial Analysis)
- LCR / MLCR: **83.7%** (AA-LCR v1.1)
- CritPt: **30.9%** (Artificial Analysis / CritPt Physics)
- Artificial Analysis Intelligence Index / BenchLM overall: **48 / #12 rank** (v4.3.2, Max effort)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **68.8%** (DeepSWE v1.1)

Long context:
- MRCR / RULER / GraphWalks: **no long-context retrieval reported** (1.05M total context advertised)

### Normalized scores (1-100)
- **Tool use: 95/100.** Reaches Frontier levels on Terminal-Bench 2.1 (88%) and Tau3-Banking (68.7%), though capped by lower GDPval-AA results compared to Astra.
- **Reasoning: 95/100.** Frontier performance in GPQA Diamond (>90%) and HLE (>40%), positioning it at the top of the mid-tier class.
- **Context window: 95/100.** Tier 1 (>1M tokens) based on official 1.05M limit; lacks independent RULER verification for a perfect 100.
- **Multimodal: 65/100.** Supports text and image inputs with structured text output; lacks video or native audio modalities.
- **Coding: 88/100.** Exceptional Terminal-Bench performance (88%) but slightly below the 74% Frontier threshold on DeepSWE (68.8%).
- **Cost efficiency: 75/100.** Priced at $2/$10 per 1M tokens; highly efficient for agentic work but carries a 2x long-context penalty.
- **Overall Score: 87.6/100.** High-performance mid-tier model recommended for cost-sensitive coding agents and professional automation.

---
## Signature
- Provided by: **Gemini 2 (google/gemini-2.0-flash-exp)** — 2026-10-04
- Method: Public internet research across vendor docs, Artificial Analysis, and benchmark aggregators; scores are normalized 1-100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_6_1_Sol.md`, using the same headings.