# Qwen3-Max — findings by GPT 6 Astra

- Source: Alibaba / Qwen3-Max Instruct
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** Qwen3-Max, September 2025 non-thinking release.
- **Short description:** Proprietary text MoE model for general assistance and agentic software tasks.
- **Provider / access:** Alibaba Model Studio and OpenRouter; OpenAI-compatible Chat Completions, function calling and structured responses.
- **Release / knowledge:** September 23, 2025 API listing, September 24 announcement; gateway lists June 30, 2025 knowledge cutoff.
- **IDs:** OpenRouter `qwen/qwen3-max`; original DashScope `qwen3-max`. No verified free Zen ID.
- **Context window:** 262,144 tokens; maximum output 65,536. Training at longer context is not the deployed context limit.
- **Modalities:** Text input/output; no verified native image, video or audio support.
- **Pricing (as of 2026-10-08):** Gateway starts $0.78 input / $3.90 output per million tokens. Vals evaluation records $1.20/$6.00; this is a different provider/evaluation tariff.
- **Architecture:** Vendor describes over one trillion total parameters, MoE, trained on 36T tokens; active parameter count unverified. Private weights.

Sources: [official launch](https://qwen.ai/blog?from=research.latest-advancements-list&id=241398b9cd6353de490b0f82806c7848c5d2777d), [gateway specifications/pricing](https://openrouter.ai/qwen/qwen3-max/pricing), [text model configuration](https://qwenlm.github.io/Qwen-Agent/en/guide/get_started/configuration/).

**Version boundary:** Alibaba later released the hybrid `qwen3-max-2026-01-23` snapshot. This report evaluates the original non-thinking model, not Max Preview or Max Thinking; current aliases do not guarantee an immutable September checkpoint. [Release history](https://www.alibabacloud.com/help/en/model-studio/newly-released-models).

### Raw benchmarks found

- **Vendor tools/coding:** Tau2-Bench **74.8%**, SWE-bench Verified **69.6%**. These launch results are harness-specific and not Tau3 or SWE-Pro. [Official announcement](https://qwen.ai/blog?from=research.latest-advancements-list&id=241398b9cd6353de490b0f82806c7848c5d2777d).
- **Independent:** Vals exact Qwen 3 Max page reports GPQA Diamond **79.55%**, MMLU Pro **84.36%**, LiveCodeBench **78.22%**, Vibe Code Bench v1.1 **3.51%**, Terminal-Bench 2.0 **24.72%**. Default provider Alibaba, temperature 0.7, max output 65,536; individual benchmark settings can differ. [Evaluator model/results](https://www.vals.ai/models/alibaba_qwen3-max).
- **Reasoning methodology:** Vals uses GPQA's 198-question Diamond subset with chain-of-thought prompting. Its archived September 1, 2026 table confirms the non-thinking model's 79.55%, separately from Thinking and Preview. [GPQA methodology](https://www.vals.ai/benchmarks/gpqa).
- **Interpretation:** Vendor agent scores are stronger than independent terminal and application-building results; benchmark/harness differences prevent averaging the raw percentages.
- **Missing:** HLE, LCR, CritPt, Omniscience, GDPval-AA, Claw-Eval, Tau3, SciCode and full-window retrieval: no verified public score found for this exact release in inspected sources. Later Thinking results are not transferred.

### Normalized scores (1–100)

- **Tool use: 65/100.** Good vendor Tau2 result, constrained by much weaker independent terminal performance.
- **Reasoning: 65/100.** GPQA and MMLU support competent academic reasoning; difficult open-ended reasoning remains unverified.
- **Context window: 74/100.** Verified 262k capacity, without demonstrated full-window retrieval.
- **Multimodal: 15/100.** Text-only.
- **Coding: 70/100.** Solid LiveCodeBench and vendor SWE evidence, tempered by weak Vibe Code Bench and terminal results.
- **Cost efficiency: 90/100.** Current gateway tariff is inexpensive relative to premium models; no free route verified.
- **Overall Score: 58/100.** Half-up mean: (65 + 65 + 74 + 15 + 70) / 5 = 57.8. Best suited to economical text workflows with bounded agent tasks.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Fresh primary vendor and evaluator research; normalized scores are interpretations, not official scores.
- Future sources: Add a separate signed report alongside this file.

