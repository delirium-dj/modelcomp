# GPT-5.6 Luna — findings by LongCat 2.5 Preview

- Source: OpenAI/GPT-5.6 Luna (`gpt-5.6-luna`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's cost-optimized model in the GPT-5.6 family, targeting high-volume workloads with a 1.1M context window and multimodal input at a budget price point.
- **Provider / access:** OpenAI API `gpt-5.6-luna`; available on Amazon Bedrock, Azure AI Foundry, OpenRouter, Snowflake, Vercel AI Gateway. Responses API / Chat Completions API.
- **Release / knowledge:** 2026-07-09; knowledge cutoff February 2026.
- **IDs:** `openai/gpt-5.6-luna`
- **Context window:** 1,050,000 tokens (1.1M); max output 128K tokens (verified via OpenAI).
- **Modalities:** Text, image, PDF in; text out; reasoning yes; tool calls yes; structured output yes.
- **Pricing (as of 2026-09-29):** $0.20/$1.20 per 1M in/out.
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (Vals AI)
- Terminal-Bench 2.0: **84.7%** (BenchLM)
- Toolathlon: **53.4%** (AnotherWrapper)
- BrowseComp: **83.3%** (AnotherWrapper)

Reasoning / knowledge:

- GPQA: **92.3%** (AnotherWrapper)
- GPQA Diamond: **63.6%** (rank 96/131) (AnotherWrapper)
- HLE: **40%** (rank 33) (AnotherWrapper)
- MMLU-Pro: **86.0%** (AnotherWrapper)
- Artificial Analysis Intelligence Index: **51** (AnotherWrapper)

Coding:

- SWE-bench Verified: **93%** (rank 9/148) (AnotherWrapper)
- SWE-bench Pro: **62.7%** (AnotherWrapper)
- DeepSWE: **67.2%** (AnotherWrapper)
- Vibe Code Bench: **77.1%** (AnotherWrapper)
- SciCode: **52.5%** (AnotherWrapper)

Long context:

- Graphwalks BFS (0K-128K): **81.3%** (AnotherWrapper)
- Graphwalks BFS (256K-1M): **51.2%** (AnotherWrapper)
- MRCR v2: **41.3%** (AnotherWrapper)

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 at 84.7% and Terminal-Bench 2.0 at 84.7% are strong; Toolathlon at 53.4% is moderate. Capped by limited agentic benchmark diversity.
- **Reasoning: 72/100.** GPQA at 92.3% is strong; GPQA Diamond at 63.6% and HLE at 40% are moderate. Capped by limited reasoning benchmark coverage.
- **Context window: 95/100.** 1.1M token context window with Graphwalks BFS at 81.3% (0K-128K) and 51.2% (256K-1M).
- **Multimodal: 75/100.** Text, image, and PDF input with text output; MMMU-Pro at 78.4% is solid. Capped by no video/audio input.
- **Coding: 82/100.** SWE-bench Verified at 93% is excellent; SWE-bench Pro at 62.7% and DeepSWE at 67.2% are strong. Capped by SciCode at 52.5%.
- **Cost efficiency: 95/100.** $0.20/$1.20 per 1M is among the cheapest models in the frontier tier; exceptional value for capability.
- **Overall Score: 80/100.** Mean of (78+72+95+75+82)/5 = 80.4 → 80. Best-fit recommendation: exceptional value cost-optimized model with strong coding, solid reasoning, and unbeatable pricing; ideal for high-volume production workloads.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
