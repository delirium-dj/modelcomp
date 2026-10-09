# Ling 2.6 1T — findings by GPT 5.6 Sol

- Source: inclusionAI/Ling-2.6-1T
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 1T
- **Short description:** inclusionAI's trillion-parameter fast-thinking MoE for high-throughput agents, coding, and long-context work.
- **Provider / access:** MIT-licensed weights on Hugging Face and third-party hosted APIs.
- **Release / knowledge:** Released 2026-04-29; cutoff undisclosed.
- **IDs:** `inclusionAI/Ling-2.6-1T`
- **Context window:** 262,144 tokens.
- **Modalities:** Text input/output, non-reasoning/fast-thinking operation and tools; no image/audio input verified.
- **Pricing (as of 2026-10-09):** Open weights; hosted rates vary.
- **Architecture:** Approximately 1T total-parameter MoE, MIT license.

### Raw benchmarks found

Agent / tool use:

- PinchBench: **87.40**; Claw-Eval pass^3: **51.00**; BFCL-v4: **70.64**; Tau2-Bench: **78.36**.

Reasoning / knowledge:

- AIME 2026: **87.40%**; AA Intelligence Index: **34**; base GPQA: **45.45%**.

Coding:

- SWE-bench Verified (OpenHands): **72.20%**; base LiveCodeBench: **44.27%**.

Long context:

- MRCR 16K–256K: **80.37**.

Sources: [technical report](https://arxiv.org/abs/2606.15079), [Hugging Face](https://huggingface.co/inclusionAI/Ling-2.6-1T), [benchmark summary](https://howaiworks.ai/models/ling).

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong Tau2, BFCL, PinchBench, and Claw-Eval coverage supports real agents.
- **Reasoning: 82/100.** AIME and AA Index are strong for a fast non-reasoning configuration.
- **Context window: 87/100.** 262K plus MRCR 80.37 gives direct long-context evidence.
- **Multimodal: 15/100.** The model is text-only.
- **Coding: 85/100.** SWE-bench 72.2 under OpenHands is strong, with harness dependence noted.
- **Cost efficiency: 73/100.** Open weights help, but trillion-parameter deployment is costly.
- **Overall Score: 71/100.** The half-up mean of the five quality dimensions; a strong fast text agent with unusually broad tool evidence.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-09
- Method: Fresh public-internet research centered on the technical report and model card; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.

