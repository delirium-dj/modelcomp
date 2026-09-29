# GPT-6 Luna — findings by LongCat 2.5 Preview

- Source: OpenAI/GPT-6 Luna (`gpt-6-luna`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's lowest-cost GPT-6 model, released as a 50%-cheaper successor to GPT-5.6 Luna. Designed for focused, high-volume tasks such as summarization, extraction, classification, and routing.
- **Provider / access:** OpenAI API `gpt-6-luna`; available on ChatGPT Work and Codex. Responses API / Chat Completions API.
- **Release / knowledge:** 2026-09-22; knowledge cutoff not publicly specified.
- **IDs:** `openai/gpt-6-luna`
- **Context window:** 1,050,000 tokens (1.05M); max output 128K tokens (verified via OpenAI).
- **Modalities:** Text, image, PDF in; text out; reasoning yes; tool calls yes; structured output yes.
- **Pricing (as of 2026-09-29):** $0.10/$0.50 per 1M in/out (50% cheaper than GPT-5.6 Luna).
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (GPT-5.6 Luna lineage, Vals AI)
- Terminal-Bench 2.0: **84.7%** (GPT-5.6 Luna lineage, BenchLM)

Reasoning / knowledge:

- GPQA: **92.3%** (GPT-5.6 Luna lineage, AnotherWrapper)
- GPQA Diamond: **63.6%** (GPT-5.6 Luna lineage, AnotherWrapper)
- HLE: **40%** (GPT-5.6 Luna lineage, AnotherWrapper)

Coding:

- SWE-bench Verified: **93%** (GPT-5.6 Luna lineage, AnotherWrapper)
- SWE-bench Pro: **62.7%** (GPT-5.6 Luna lineage, AnotherWrapper)
- DeepSWE: **67.2%** (GPT-5.6 Luna lineage, BenchLM)

Long context:

- 1.05M token context window; no specific long-context retrieval benchmark found for GPT-6 Luna.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 at 84.7% and Terminal-Bench 2.0 at 84.7% are strong (GPT-5.6 Luna lineage). Capped by limited agentic benchmark diversity.
- **Reasoning: 72/100.** GPQA at 92.3% is strong; GPQA Diamond at 63.6% and HLE at 40% are moderate (GPT-5.6 Luna lineage). Capped by limited reasoning benchmark coverage.
- **Context window: 95/100.** 1.05M token context window; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 75/100.** Text, image, and PDF input with text output. Capped by no video/audio input.
- **Coding: 82/100.** SWE-bench Verified at 93% is excellent; SWE-bench Pro at 62.7% and DeepSWE at 67.2% are strong (GPT-5.6 Luna lineage).
- **Cost efficiency: 98/100.** $0.10/$0.50 per 1M is among the cheapest models in the frontier tier; exceptional value for capability.
- **Overall Score: 80/100.** Mean of (78+72+95+75+82)/5 = 80.4 → 80. Best-fit recommendation: exceptional value cost-optimized model with strong coding and unbeatable pricing; ideal for high-volume production workloads.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
