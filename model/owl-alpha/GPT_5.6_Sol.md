# Owl Alpha — findings by GPT 5.6 Sol

- Source: Meituan/LongCat-2.0 (Owl Alpha alias)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owl Alpha
- **Short description:** The former OpenRouter stealth alias for Meituan's LongCat-2.0, an open-weight large MoE aimed at agentic coding.
- **Provider / access:** Formerly `openrouter/owl-alpha`; released identity is `meituan/longcat-2.0` with open weights/API access.
- **Release / knowledge:** Alias appeared in 2026; LongCat-2.0 identity was publicly confirmed in 2026-07; cutoff undisclosed.
- **IDs:** `openrouter/owl-alpha` (historical alias), `meituan/longcat-2.0`
- **Context window:** 1,000,000 tokens.
- **Modalities:** Text input/output, reasoning and tools; no native multimodal support verified.
- **Pricing (as of 2026-10-09):** Historical alias pricing varied; open weights are MIT-licensed.
- **Architecture:** About 1.6T total / 48B active sparse MoE, MIT license.

### Raw benchmarks found

Agent / tool use:

- LongCat-2.0 is reported above Gemini 3.1 Pro on Terminal-Bench 2.1; the accessible release summary did not expose the exact value.

Reasoning / knowledge:

- No independent AA/Arena capability score was available at release; vendor benchmark suite only.

Coding:

- Reported above Gemini 3.1 Pro on SWE-bench Pro; exact accessible value not found.

Long context:

- **1M-token** supported context.

Sources: [Benchmark Atlas](https://atlas.kevinhu.io/models/longcat-2-0), [identity research](https://stealthmodels.com/owl-alpha/), [release coverage](https://www.techradar.com/pro/chinese-doordash-rival-smashes-open-source-record-with-1-6-trillion-parameter-llm-with-a-1-million-context-token-model-crafted-without-nvidia-hardware).

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong Terminal-Bench positioning supports agent use, capped by vendor-only evidence and alias ambiguity.
- **Reasoning: 80/100.** Near-frontier release comparisons are credible but not independently reproduced.
- **Context window: 93/100.** The 1M-token window is a major strength, with sparse public retrieval measurements.
- **Multimodal: 15/100.** The identified model is text-only.
- **Coding: 84/100.** SWE-Pro and terminal claims support high coding capability, capped by missing exact independent values.
- **Cost efficiency: 78/100.** MIT weights help, but 48B active inference remains substantial.
- **Overall Score: 71/100.** The half-up mean of the five quality dimensions; suited to long-context coding agents where the former alias is understood.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-09
- Method: Fresh public-internet research resolving the stealth alias before scoring; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.

