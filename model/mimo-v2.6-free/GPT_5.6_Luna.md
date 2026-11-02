# MiMo V2.6 Free — findings by GPT 5.6 Luna

- Source: Xiaomi MiMo / MiMo-V2.6-Flash free-access alias
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free
- **Short description:** Free-access presentation of Xiaomi's MiMo-V2.6-Flash. “Free” is treated as an access tier, not a separate checkpoint.
- **Provider / access:** Xiaomi MiMo free/hosted access; the canonical paid model is available through the Xiaomi API and hosted providers.
- **Release / knowledge:** MiMo-V2.6 family released 2026-09-22; knowledge cutoff is not published.
- **IDs:** Canonical API ID `mimo-v2.6-flash`; open-weight checkpoint `XiaomiMiMo/MiMo-V2.6-Flash-RL`; the free route has no independently documented checkpoint ID.
- **Context window:** 1,048,576 tokens with up to 131,072 output tokens in current catalog documentation.
- **Modalities:** Full multimodal input is advertised, with reasoning, function/tool workflows, and text output; exact free-host capabilities can vary.
- **Pricing (as of 2026-11-02):** Xiaomi overseas real-time API $0.14 input / $0.28 output / $0.0028 cached input per 1M tokens; the evaluated free alias is host- and quota-dependent.
- **Architecture:** Open-weight MiMo-V2.6-Flash RL checkpoint; the technical report and model card are the authoritative architecture sources.

## Raw benchmarks found

- BenchLM snapshot (2026-10-29): composite **54.78/100**, rank **#76/1004**, with 24 of 724 benchmarks covered; coverage is explicitly partial. ([BenchLM MiMo-V2.6-Flash](https://benchlm.ai/models/mimo-v2-6-flash))
- Toolathlon-Verified: **73.6%**; AutomationBench: **52.3%**; Terminal-Bench 2.1: **87.6%**; OSWorld-Verified: **80.8%**. ([MiMo technical report](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL/blob/main/MiMo_V2_6_technical_report.pdf))
- DeepSWE: **67.9%**; AA-SciCode: **51.3%**; AA-LCR: **74.3%**; AA-MMMU-Pro: **73.1%**. ([BenchLM MiMo-V2.6-Flash](https://benchlm.ai/models/mimo-v2-6-flash))
- Artificial Analysis Intelligence Index: **26.7%**; BenchLM lists the composite as conservative because the public benchmark coverage is incomplete. ([BenchLM MiMo-V2.6-Flash](https://benchlm.ai/models/mimo-v2-6-flash))

## Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 2.1 and OSWorld-Verified are strong, while AutomationBench, Agents' Last Exam, and GDPval show meaningful task variance. ([BenchLM MiMo-V2.6-Flash](https://benchlm.ai/models/mimo-v2-6-flash))
- **Reasoning: 72/100.** AA-LCR at 74.3% supports solid reasoning, but the Intelligence Index and CritPt results do not support a frontier score. ([BenchLM MiMo-V2.6-Flash](https://benchlm.ai/models/mimo-v2-6-flash))
- **Context window: 96/100.** The documented 1M window is frontier-sized; no independent retrieval-quality result at that length was found. ([Xiaomi pricing documentation](https://mimo.mi.com/docs/en-US/price/pay-as-you-go))
- **Multimodal: 82/100.** Xiaomi describes the V2.6 family as fully multimodal and AA-MMMU-Pro is 73.1%, supporting a strong but not top-tier normalized score. ([Xiaomi V2.6 announcement](https://mimo.mi.com/docs/en-US/news/latest/v2-6), [BenchLM MiMo-V2.6-Flash](https://benchlm.ai/models/mimo-v2-6-flash))
- **Coding: 77/100.** Terminal-Bench 2.1 at 87.6% is strong, but DeepSWE 67.9%, ProgramBench 26.0%, and AA-SciCode 51.3% show a mixed coding profile. ([BenchLM MiMo-V2.6-Flash](https://benchlm.ai/models/mimo-v2-6-flash))
- **Cost efficiency: 100/100.** The evaluated Free access tier is $0 while available; the paid Flash fallback is also unusually inexpensive at $0.14/$0.28 per 1M tokens. ([Xiaomi pricing documentation](https://mimo.mi.com/docs/en-US/price/pay-as-you-go))
- **Overall Score: 81.4/100.** Arithmetic mean of Tool use 80, Reasoning 72, Context window 96, Multimodal 82, and Coding 77; cost efficiency is excluded.

## Evidence notes

- This report scores the MiMo-V2.6-Flash checkpoint behind the `Free` access alias. Free quotas, provider routing, and data-handling terms are access-tier properties and should not be mistaken for a separate model.

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-11-02
- Method: current public web research; normalized interpretations, not official vendor scores.
