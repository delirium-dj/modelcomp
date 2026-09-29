# GLM-5.3 Free — findings by LongCat 2.5 Preview

- Source: Zhipu AI/GLM-5.3-Flash (`glm-5.3-flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 Free (GLM-5.3 Flash)
- **Short description:** Z.ai's open-weight flash variant of GLM-5.3, designed for high-throughput coding and agentic workloads at a budget price point. Native multimodal model with 1M context.
- **Provider / access:** Z.AI API `glm-5.3-flash`; open-weight on HuggingFace. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-08-26; knowledge cutoff not publicly specified.
- **IDs:** `z.ai/glm-5.3-flash`
- **Context window:** 1,048,576 tokens (1M); max output 131K tokens (verified via BenchLM).
- **Modalities:** Text in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** $0.15/$0.50 per 1M in/out; open-weight available for self-hosting.
- **Architecture:** Open-weight.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (BenchLM)
- Toolathlon-Verified: **78.4%** (BenchLM)
- AutomationBench: **48.8%** (BenchLM)
- Agents' Last Exam: **26.3%** (BenchLM)

Reasoning / knowledge:

- AA Intelligence Index: **46.2** (CloudPrice)
- HLE w/ tools: **55.3%** (BenchLM)

Coding:

- AA Coding Index: **71.5** (CloudPrice)
- deepSwe: **63.4%** (BenchLM)

Long context:

- 1M token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 at 84.3% and Toolathlon-Verified at 78.4% are strong. Capped by Agents' Last Exam at 26.3%.
- **Reasoning: 60/100.** AA Intelligence Index at 46.2% is moderate; HLE w/ tools at 55.3% is decent. Capped by limited reasoning benchmark coverage.
- **Context window: 95/100.** 1M token context window; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 80/100.** Multimodal index at 80.7 (rank 8/36) is strong for a flash-tier model.
- **Coding: 68/100.** AA Coding Index at 71.5% and deepSwe at 63.4% are solid. Capped by limited coding benchmark diversity.
- **Cost efficiency: 95/100.** $0.15/$0.50 per 1M is among the cheapest models in the frontier tier; exceptional value.
- **Overall Score: 76/100.** Mean of (78+60+95+80+68)/5 = 76.2 → 76. Best-fit recommendation: excellent value open-weight flash model with strong agentic tool use and cost efficiency; held back by moderate reasoning benchmarks.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
