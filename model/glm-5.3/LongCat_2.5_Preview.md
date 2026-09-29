# GLM-5.3 — findings by LongCat 2.5 Preview

- Source: Zhipu AI/GLM-5.3 (`glm-5.3`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3
- **Short description:** Z.ai's flagship coding and cyber-defense model, post-trained on the GLM-5.2 base (753B MoE) with targeted improvements for complex software engineering and agentic tasks. Open-weight under custom GLM-5.3 License.
- **Provider / access:** Z.AI API `glm-5.3`; open-weight on HuggingFace. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-08-14/18; knowledge cutoff not publicly specified.
- **IDs:** `z.ai/glm-5.3`
- **Context window:** 1M tokens (1.3M per CloudPrice); max output 131K tokens (verified via BenchLM).
- **Modalities:** Text in; text out; reasoning yes; tool calls yes; structured output yes.
- **Pricing (as of 2026-09-29):** $1.40/$4.40 per 1M in/out (cached $0.26); open-weight available for self-hosting.
- **Architecture:** MoE, 753B total params, ~40B active; open-weight (custom GLM-5.3 License).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.2%** (BenchLM)
- CyberGym: **84.5%** (BenchLM)
- Toolathlon-Verified: **73.0%** (BenchLM)
- AutomationBench: **48.2%** (BenchLM)
- GDPval-AA: **1769** (62.9%) (BenchLM)
- AA Agentic Index: **59.1%** (BenchLM)

Reasoning / knowledge:

- AA Intelligence Index: **59.5%** (BenchLM)
- GPQA Diamond: **91.7%** (AA), **88.1%** (Vals) (BenchLM)
- HLE w/ tools: **62.5%** (BenchLM)
- MMLU-Pro (Vals): **86.8%** (BenchLM)
- AA-LCR: **76.3%** (BenchLM)

Coding:

- AA Coding Index: **74.8%** (BenchLM)
- deepSwe: **66.9%** (BenchLM)
- SWE-bench (Vals): **95.4%** (BenchLM)
- FrontierSWE: **78.1%** (BenchLM)
- sweMarathon: **42.5%** (BenchLM)
- LiveCodeBench (Vals): **80.5%** (BenchLM)
- VulcanBench v3: **78.3%** (BenchLM)

Long context:

- 1M token context window; AA-LCR at 76.3% shows strong long-context reasoning.

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 at 88.2% and CyberGym at 84.5% are excellent. Capped by AutomationBench at 48.2%.
- **Reasoning: 82/100.** GPQA Diamond at 91.7% and AA Intelligence Index at 59.5% are strong. Capped by HLE w/ tools at 62.5%.
- **Context window: 95/100.** 1M token context window with AA-LCR at 76.3% showing strong long-context reasoning.
- **Multimodal: 15/100.** Text-only input and output; no multimodal support.
- **Coding: 78/100.** AA Coding Index at 74.8% and SWE-bench (Vals) at 95.4% are strong. Capped by sweMarathon at 42.5%.
- **Cost efficiency: 75/100.** $1.40/$4.40 per 1M is moderate for a flagship model.
- **Overall Score: 70/100.** Mean of (82+82+95+15+78)/5 = 70.4 → 70. Best-fit recommendation: excellent open-weight flagship with strong agentic tool use, reasoning, and coding; held back by text-only modality.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
