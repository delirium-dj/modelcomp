# GLM-5.2 — findings by LongCat 2.5 Preview

- Source: Zhipu AI/GLM-5.2 (`glm-5.2`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2
- **Short description:** Z.ai's flagship long-horizon autonomous LLM capable of sustained multi-hour task execution with agentic reasoning. First open-weight model to rank #1 on LMSYS Chatbot Arena with over 1 trillion parameters (predecessor). Open-weight under MIT license.
- **Provider / access:** Z.AI API `glm-5.2`; open-weight on HuggingFace. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-06-13/16; knowledge cutoff not publicly specified.
- **IDs:** `z.ai/glm-5.2`
- **Context window:** 1,000,000 tokens (1M); max output 131K tokens (verified via BenchLM).
- **Modalities:** Text in; text out; reasoning yes; tool calls yes; structured output yes.
- **Pricing (as of 2026-09-29):** $1.40/$4.40 per 1M in/out (cached $0.26-$0.28); open-weight available for self-hosting.
- **Architecture:** MoE, 753B total params, 40B active; open-weight (MIT).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.0%** (GLM-5.2 blog)
- MCP-Atlas: **76.8%** (GLM-5.2 blog)
- TAU2: **100%** (CloudPrice)

Reasoning / knowledge:

- GPQA Diamond: **91.4%** (CAISI), **89%** (GLM-5.2 blog)
- AIME 2025: **98.6%** (CAISI)
- HLE: **40%** (CloudPrice)
- AA Intelligence Index: **51** (DeepInfra comparison)

Coding:

- SWE-bench Pro: **62.1%** (beats GPT-5.5's 58.6%) (GLM-5.2 blog)
- SWE-Bench Verified: **75.3%** (CAISI), **~79-81%** (predicted)
- AA Coding Index: **68.8** (CloudPrice)
- FrontierSWE: **74.4%** (near-tie with Opus 4.8's 75.1%) (GLM-5.2 blog)
- PostTrainBench: **34.3%** (GLM-5.2 blog)
- SWE-Marathon: **13.0%** (GLM-5.2 blog)

Long context:

- 1M token context window; LCR at 80% shows strong long-context reasoning.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 at 81.0% and MCP-Atlas at 76.8% are strong. Capped by limited agentic benchmark coverage.
- **Reasoning: 78/100.** GPQA Diamond at 91.4% and AIME 2025 at 98.6% are elite. Capped by HLE at 40%.
- **Context window: 95/100.** 1M token context window with LCR at 80% showing strong long-context reasoning.
- **Multimodal: 15/100.** Text-only input and output; no multimodal support.
- **Coding: 72/100.** SWE-bench Pro at 62.1% and AA Coding Index at 68.8% are solid. Capped by SWE-Marathon at 13.0%.
- **Cost efficiency: 75/100.** $1.40/$4.40 per 1M is moderate for a flagship model.
- **Overall Score: 68/100.** Mean of (78+78+95+15+72)/5 = 67.6 → 68. Best-fit recommendation: excellent open-weight flagship with strong agentic tool use, elite math reasoning, and solid coding; held back by text-only modality and moderate SWE-Marathon.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
