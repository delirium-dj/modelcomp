# Ling 3.0 Flash — findings by GPT 5.6 Sol

- Source: inclusionAI/Ling-3.0-flash
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash
- **Short description:** inclusionAI's efficient hybrid-attention MoE for fast reasoning, coding, and agent workflows.
- **Provider / access:** Open weights on Hugging Face (MIT) and hosted provider APIs.
- **Release / knowledge:** Released 2026-08-02; cutoff undisclosed.
- **IDs:** `inclusionAI/Ling-3.0-flash`
- **Context window:** 262,144 tokens.
- **Modalities:** Text input/output, switchable reasoning and tools; no native image/audio verified.
- **Pricing (as of 2026-10-09):** Provider pricing observed around $0.075 input / $0.22 output per 1M tokens; open weights available.
- **Architecture:** 124B total / about 5.1B active MoE with hybrid KDA/MLA attention, MIT license.

### Raw benchmarks found

Agent / tool use:

- No verified public Tau/Terminal score found for the exact model.

Reasoning / knowledge:

- AIME 2026: **93.2%**; HMMT Feb 2026: **87.0%**; HLE: **22.7%**.

Coding:

- SWE-bench Multilingual: **72.4%**; SWE-bench Pro: **56.6%**.

Long context:

- 262K window; no exact public MRCR score found.

Sources: [Hugging Face model](https://huggingface.co/inclusionAI/Ling-3.0-flash), [benchmark summary](https://atomic.chat/models/ling-3-0-flash).

### Normalized scores (1–100)

- **Tool use: 70/100.** Tool support is documented, but exact-model agent benchmark coverage is thin.
- **Reasoning: 83/100.** AIME and HMMT are excellent, tempered by HLE 22.7.
- **Context window: 80/100.** 262K is strong but has no measured retrieval result in the accessible evidence.
- **Multimodal: 15/100.** This is a text-only model.
- **Coding: 82/100.** SWE-Pro 56.6 and multilingual SWE 72.4 show strong practical coding.
- **Cost efficiency: 98/100.** Very low hosted pricing and only 5.1B active parameters offer exceptional value.
- **Overall Score: 66/100.** The half-up mean of the five quality dimensions; ideal for inexpensive text reasoning and coding agents.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-09
- Method: Fresh public-internet research using the model release and published comparison table; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.

