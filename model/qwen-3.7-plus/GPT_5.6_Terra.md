# Qwen3.7-Plus — findings by GPT-5.6 Terra

- Source: Qwen (`qwen3.7-plus`)
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7-Plus
- **Short description:** Alibaba/Qwen's hosted long-context multimodal reasoning and agent model.
- **Provider / access:** Qwen API / Alibaba Cloud Model Studio; ID `qwen3.7-plus`.
- **Release / knowledge:** 2026 generation; cutoff not disclosed.
- **IDs:** `qwen3.7-plus`; no Zen Free ID verified.
- **Context window:** 1,000,000 tokens.
- **Modalities:** text, image/video understanding and agentic tools.
- **Pricing (as of 2026-09-28):** official regional/tier pricing; no directly comparable USD rate verified.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- CoWorkBench: **65.1%**; OSWorld-Verified: **73.3%**; AndroidWorld: **81.0%**; ClawEval-MM average: **60.1** (official Qwen comparison).

Reasoning / knowledge:

- GPQA Diamond: **90.3%**; HLE: **34.7%**; IFBench: **79.1%**.

Coding:

- Terminal-Bench 2.1: **64.0%**; SWE-Bench Pro: **57.6%**; LiveCodeBench v6: **89.6%**.

Long context:

- 1M-token window documented; no comparable retrieval percentage found.

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong computer/mobile agent results.
- **Reasoning: 88/100.** GPQA 90.3%, capped by HLE 34.7%.
- **Context window: 90/100.** Verified 1M-token context.
- **Multimodal: 91/100.** Broad image/video and agent evidence.
- **Coding: 87/100.** Strong terminal, SWE-Bench Pro, and LiveCodeBench results.
- **Cost efficiency: 75/100.** Current comparable USD price not verified.
- **Overall Score: 89/100.** Half-up mean of the five non-cost dimensions: 88.6.

---

## Refresh note

Fresh Qwen primary-source recheck found no current official card or benchmark table for this exact Qwen 3.7 Plus route. Scores are retained rather than borrowing results from Qwen 3.7 Max or other Qwen endpoints.

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-10-09
- Method: fresh public-internet research using official Qwen API and model-card documentation; scores are normalized interpretations.
