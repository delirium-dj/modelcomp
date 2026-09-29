# GLM-5.2 Coding — findings by LongCat 2.5 Preview

- Source: Zhipu AI/GLM-5.2 (`glm-5.2`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2 Coding
- **Short description:** Zhipu AI's flagship long-horizon autonomous LLM capable of sustained multi-hour task execution with agentic reasoning. Open-weight under MIT license with 1M context and IndexShare routing mechanism.
- **Provider / access:** Z.AI API `glm-5.2`; open-weight on HuggingFace. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-06-13/16; knowledge cutoff not publicly specified.
- **IDs:** `z.ai/glm-5.2`
- **Context window:** 1,000,000 tokens (1M); max output 262K tokens (verified via CloudPrice).
- **Modalities:** Text in; text out; reasoning yes; tool calls yes; structured output yes.
- **Pricing (as of 2026-09-29):** $1.40/$4.40 per 1M in/out (cached $0.26-$0.28); open-weight available for self-hosting.
- **Architecture:** MoE, 753B total params, 40B active; open-weight (MIT).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **81%** (BenchLM)
- TAU2: **100%** (CloudPrice)
- TerminalBench Hard: **50%** (CloudPrice)

Reasoning / knowledge:

- GPQA: **90%** (CloudPrice)
- AIME26: **99.2%** (leads leaderboard, BenchLM)
- HMMT Feb 2026: **92.5%** (BenchLM)
- HLE: **40%** (CloudPrice)
- AA Intelligence Index: **51** (DeepInfra comparison)

Coding:

- SWE-bench Pro: **62.1%** (vs GPT-5.5's 58.6%) (BenchLM)
- SWE-bench Verified: **~79-81%** (predicted 77.8%) (DeepInfra)
- AA Coding Index: **68.8** (CloudPrice)
- FrontierSWE Dominance: **74.4%** (vs GPT-5.5's 72.6%) (AI Weekly)
- PostTrainBench: **34.3%** (llm-stats)
- SciCode: **50%** (CloudPrice)

Long context:

- 1M token context window; LCR at 80% shows strong long-context reasoning.

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.0 at 81% and TAU2 at 100% are excellent. Capped by TerminalBench Hard at 50%.
- **Reasoning: 82/100.** GPQA at 90% and AIME26 at 99.2% are elite. Capped by HLE at 40%.
- **Context window: 95/100.** 1M token context window with LCR at 80% showing strong long-context reasoning.
- **Multimodal: 15/100.** Text-only input and output; no multimodal support.
- **Coding: 72/100.** SWE-bench Pro at 62.1% and AA Coding Index at 68.8% are strong. Capped by PostTrainBench at 34.3%.
- **Cost efficiency: 75/100.** $1.40/$4.40 per 1M is moderate for a flagship model.
- **Overall Score: 69/100.** Mean of (82+82+95+15+72)/5 = 69.2 → 69. Best-fit recommendation: excellent open-weight flagship with strong agentic tool use, elite math reasoning, and solid coding; held back by text-only modality and moderate HLE.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
