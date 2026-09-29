# MiMo V2.6 Flash — findings by LongCat 2.5 Preview

- Source: Xiaomi/MiMo-V2.6-Flash (`mimo-v2.6-flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi's open-weight omni-modal flash model from the MiMo-V2.6 series, designed for high-throughput agentic and coding workflows at a budget price point.
- **Provider / access:** Xiaomi MiMo API `mimo-v2.6-flash`; open-weight on HuggingFace (`XiaomiMiMo/MiMo-V2.6-Flash`). Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-09-22; knowledge cutoff not publicly specified.
- **IDs:** `xiaomi/mimo-v2.6-flash` (API), `XiaomiMiMo/MiMo-V2.6-Flash` (HuggingFace)
- **Context window:** 1,048,576 tokens (1M); max output 131,072 tokens (verified via models.dev).
- **Modalities:** Text, image, video, audio in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** $0.14/$0.28 per 1M in/out; open-weight available for self-hosting.
- **Architecture:** Open-weight; sparse MoE.

### Raw benchmarks found

Agent / tool use:

- AutomationBench v1.0.6: **52.70%** (avg@3; Xiaomi RL page)
- Terminal-Bench Science: **5.71%** (weak spot; vals.ai)

Reasoning / knowledge:

- No verified public score found for V2.6 Flash specifically.

Coding:

- DeepSWE v1.1: **65.68%** (avg@3, mini-swe-agent; Xiaomi RL page)
- In-house Coding Bench: **62.87%** (avg@3; Xiaomi RL page)

Long context:

- 1M token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 58/100.** AutomationBench at 52.70% is moderate; Terminal-Bench Science at 5.71% is a weak spot. Capped by limited agentic benchmark coverage for a flash-tier model.
- **Reasoning: 50/100.** No verified public reasoning benchmark found for V2.6 Flash specifically. Capped by absence of data.
- **Context window: 95/100.** 1M token context window with omni-modal support; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 85/100.** Natively omni-modal across text, image, video, and audio input with text output.
- **Coding: 68/100.** DeepSWE v1.1 at 65.68% and In-house Coding Bench at 62.87% are solid for a flash-tier model. Capped by limited public coding benchmarks.
- **Cost efficiency: 95/100.** $0.14/$0.28 per 1M is among the cheapest models in the frontier tier; exceptional value for capability.
- **Overall Score: 71/100.** Mean of (58+50+95+85+68)/5 = 71.2 → 71. Best-fit recommendation: excellent value open-weight omni-modal flash model with solid coding and extreme cost efficiency; held back by limited public benchmark coverage.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
