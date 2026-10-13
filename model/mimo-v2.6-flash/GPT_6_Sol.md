# MiMo V2.6 Flash — findings by GPT 6 Sol

- Source: Xiaomi MiMo (`XiaomiMiMo/MiMo-V2.6-Flash-RL`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi's September 2026 efficiency-balanced open-weight MiMo V2.6 reasoning/agent model, published as the Flash-RL checkpoint; Pro-RL is a separate tier and should not lend it scores ([official Hugging Face card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)).
- **Provider / access:** Xiaomi MiMo Open Platform API and downloadable `XiaomiMiMo/MiMo-V2.6-Flash-RL` under MIT; [Xiaomi card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) documents vLLM/SGLang serving via **OpenAI-compatible Chat Completions**. The exact hosted Xiaomi endpoint/model route and a free OpenCode Zen ID were not independently confirmed; do not substitute Pro or `mimo-v2.6-free`.
- **Release / knowledge:** September 21, 2026 ([Vals](https://www.vals.ai/models/xiaomi_mimo-v2.6-flash), [AA](https://artificialanalysis.ai/models/mimo-v2-6-flash)); reliable knowledge cutoff **not published** on the reviewed official card.
- **IDs:** Weights `XiaomiMiMo/MiMo-V2.6-Flash-RL`; hosted listing `xiaomi/mimo-v2.6-flash`. No verified free Zen ID for Flash.
- **Context window:** **1M native capacity** ([Xiaomi card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)); [Vals](https://www.vals.ai/models/xiaomi_mimo-v2.6-flash) reports hosted **128K max output**. Native 1M capacity is distinct from independently tested 1M retrieval.
- **Modalities:** Open weights natively accept **text/image/video/audio** input → text output ([Xiaomi card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)); [Vals](https://www.vals.ai/models/xiaomi_mimo-v2.6-flash) and [AA](https://artificialanalysis.ai/models/mimo-v2-6-flash) tested hosted **text/image** only. Tool-call/reasoning parsers supported in Xiaomi's self-host instructions; hosted video/audio support requires verification.
- **Pricing (as of 2026-10-13):** [Vals](https://www.vals.ai/models/xiaomi_mimo-v2.6-flash) and [AA](https://artificialanalysis.ai/models/mimo-v2-6-flash) quote Xiaomi API **$0.14 input / $0.28 output per 1M**, with AA reporting 98% cache-read discount (implied ~$0.0028 cached input). Self-hosting costs vary; open weights do not imply free hosted API.
- **Architecture:** Open-weight MIT **sparse MoE 309B total / 15B active**, separate 681M vision encoder and audio encoders; native long-context and 5-layer speculative drafter ([Xiaomi card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)).

### Raw benchmarks found

Read Xiaomi's [Flash-specific column and posted HF eval results](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL), independent [Vals](https://www.vals.ai/models/xiaomi_mimo-v2.6-flash) and [AA](https://artificialanalysis.ai/models/mimo-v2-6-flash). Xiaomi/third parties use different harnesses; only Flash-column figures below, never adjacent Pro-column values.

Agent / tool use:

- [Xiaomi Terminal-Bench 2.1 **87.6%**, TB4.0 **28.8%**, Toolathlon-Verified **73.6%**, AutomationBench v1.0.6 **52.3%**, OSWorld-Verified **80.8%**, Agents' Last Exam **27.6%**, JobBench **61.2%**](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL). Xiaomi's **GDPval-AA 2.1 entry is a dash for Flash**, not Pro's Elo.
- [Vals TB4.0 **24.24% ±1.51**, Finance Agent v2 **56.28% ±0.46**, Code Migration **40.93% ±4.35**, SRE Bench **4.20% ±1.24**, Harvey Legal Agent **11.25% ±2.54**](https://www.vals.ai/models/xiaomi_mimo-v2.6-flash); tough workflows remain inconsistent.

Reasoning / knowledge:

- [AA Intelligence Index v4.3.2 **38**, HLE **35.1%**, AA-LCR **74.3%**, CritPt **12.0%**, AA-Omniscience Accuracy **27.0%** with Omniscience Index **−12.7**](https://benchlm.ai/models/mimo-v2-6-flash) (AA-attributed metrics); low knowledge calibration should not be hidden behind its tool performance.
- [Vals ProofBench v1.1 **63.00% ±4.85**, MedScribe **85.28% ±1.99**, CyberBench v1.1 **75.36% ±5.42**](https://www.vals.ai/models/xiaomi_mimo-v2.6-flash); independently verified exact-model GPQA Diamond numeric result: **no verified public score found**.

Coding:

- [Xiaomi DeepSWE v1.1 **67.9%**, ProgramBench **26.0%**, MiMo Code Bench **61.2%** and TB2.1 **87.6%**](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL); [Vals Vibe Code Bench v1.1 **78.96% ±4.04** and ProgramBench **0.50% ±0.50**](https://www.vals.ai/models/xiaomi_mimo-v2.6-flash). ProgramBench's large gap reflects different evaluation configuration/coverage; do not average those figures.
- [AA SciCode **51.3%**](https://benchlm.ai/models/mimo-v2-6-flash); SWE-bench Verified for this exact Flash checkpoint: **no verified public score found** in sources reviewed.

Long context / multimodal:

- [Xiaomi 1M architecture claim](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL); **no verified public 1M MRCR/GraphWalks retrieval score found** for this Flash checkpoint. Hardware/provider support at maximum context must be tested independently.
- [Xiaomi MiMo VisualCoding **71.5%**](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL); [AA MMMU-Pro **73.1%**](https://benchlm.ai/models/mimo-v2-6-flash). Vendor reports native audio/video input, but the independent hosted evaluations advertise only text/image; no verified native audio/video benchmark numeric result found.

### Normalized scores (1–100)

- **Tool use: 83/100.** TB2.1 87.6%, Toolathlon 73.6% and OSWorld-Verified 80.8% show agent strength; TB4 24–29% and SRE 4.2% cap difficult operations.
- **Reasoning: 80/100.** HLE 35.1%, ProofBench 63% and AA Index 38 support reasoning, tempered by CritPt 12%, Omniscience Accuracy 27% and weak calibration.
- **Context window: 91/100.** Native 1M capacity / hosted 128K output, without a verified full-window retrieval result.
- **Multimodal: 91/100.** Open checkpoint includes image/video/audio and useful visual-coding evidence; hosted services tested only text/image, and native output remains text.
- **Coding: 86/100.** DeepSWE 67.9%, TB2.1 87.6%, Vibe Code 79% and SciCode 51.3%; independent TB4 and ProgramBench results are materially weaker.
- **Cost efficiency: 96/100.** $0.14/$0.28 Xiaomi API, cache-read discount and MIT weights are compelling, though verbose inference and self-host expense remain.
- **Overall Score: 86/100.** (83 + 80 + 91 + 91 + 86) / 5 = 86.2, half-up 86; strong inexpensive open-weight agent when API modality limits and harder tasks are verified.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-13
- Method: Fresh Xiaomi checkpoint card and HF eval postings compared with Vals and AA; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
