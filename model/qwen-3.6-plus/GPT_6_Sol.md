# Qwen3.6-Plus — findings by GPT 6 Sol

- Source: Qwen Cloud (`qwen3.6-plus`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.6-Plus
- **Short description:** Alibaba's April 2026 hosted multimodal Plus model for visual coding and agent workflows; [Qwen Cloud's first-party page](https://www.qwencloud.com/models/qwen3.6-plus) specifies the API but does not publish independently verifiable weights/parameter count. Do not conflate this hosted version with a separate Qwen3.6-27B checkpoint.
- **Provider / access:** Qwen Cloud `qwen3.6-plus` via OpenAI-compatible **Chat Completions/Responses** at `https://ap-southeast-1.maas.qwencloudapi.com/compatible-mode/v1` ([Qwen Cloud](https://www.qwencloud.com/models/qwen3.6-plus)); [OpenCode Console](https://opencode.ai/docs/zen/) offers paid `qwen3.6-plus` using its **Anthropic-compatible messages gateway**, a different wire protocol.
- **Release / knowledge:** April 2, 2026 according to [Vals](https://www.vals.ai/models/alibaba_qwen3.6-plus); a precise cutoff was not specified in the reviewed first-party product page.
- **IDs:** `qwen3.6-plus` (first-party/Console). No verified free Zen API tier.
- **Context window:** [Qwen Cloud](https://www.qwencloud.com/models/qwen3.6-plus) advertises **1M context / 991K maximum input (983K with thinking) / 65K maximum output**; [Vals](https://www.vals.ai/models/alibaba_qwen3.6-plus) lists its tested configuration at ~984K context / ~66K output.
- **Modalities:** Text/image/video in → text out; function calls, structured output, tools and reasoning ([Qwen Cloud](https://www.qwencloud.com/models/qwen3.6-plus)). No native audio output or open-weights availability confirmed.
- **Pricing (as of 2026-10-13):** [Qwen Cloud](https://www.qwencloud.com/models/qwen3.6-plus) <=256K input **$0.50/$3.00 per 1M**, cache read **$0.05**, cache creation **$0.625**. [OpenCode Console](https://opencode.ai/docs/zen/) lists $0.50/$3.00/$0.05 for its route; pricing for >256K must be verified per provider.
- **Architecture:** Proprietary hosted model with undisclosed parameter count in verified sources; project metadata's **397B/17B** claim lacks independent evidence for this exact Plus service ([Qwen Cloud product page](https://www.qwencloud.com/models/qwen3.6-plus)).

### Raw benchmarks found

The exact-ID independent [Vals Qwen3.6-Plus evaluation](https://www.vals.ai/models/alibaba_qwen3.6-plus) gives a reproducible source for scored dimensions; Qwen Cloud lists capabilities/specs, but the available product page has no readable numeric benchmark table. Vals' April launch-news ranks are an earlier cohort/subset, distinct from its current leaderboard rows. No results from another Qwen family member are imported.

Agent / tool use:

- [Vals Terminal-Bench 2.1 **53.18% ±1.63**, Finance Agent v2 **40.85% ±0.13**, Code Migration **11.10% ±1.31**, Harvey Legal Agent **1.25% ±0.83**, Tax Agent **7.68% ±1.81**, SAGE **44.86% ±3.43**](https://www.vals.ai/models/alibaba_qwen3.6-plus). Vendor-independent OSWorld-Verified, MCP Atlas, Toolathlon, Claw-Eval for this exact hosted ID: **no verified public score found**.

Reasoning / knowledge:

- [Vals GPQA Diamond **87.37% ±1.67**, MMLU Pro **87.67% ±0.32**, LegalBench **84.23% ±0.42**, TaxEval v2 **74.73% ±0.85**](https://www.vals.ai/models/alibaba_qwen3.6-plus). Exact-ID HLE, CritPt, ARC-AGI-2 or AA Intelligence Index: **no verified public score found** in reviewed sources.

Coding:

- [Vals SWE-bench **73.40% ±1.98**, LiveCodeBench **85.95% ±0.98**, Vibe Code Bench v1.1 **25.57% ±3.91**, ProgramBench **0.00%**, Terminal-Bench 2.1 **53.18% ±1.63**](https://www.vals.ai/models/alibaba_qwen3.6-plus); SWE-bench is not SWE-bench Pro. The project metadata's SWE-Pro 56.6% was not independently verified for this exact API ID and is not used.

Long context / multimodal:

- [Qwen Cloud 1M input capacity and 65K output](https://www.qwencloud.com/models/qwen3.6-plus); exact-ID full-1M MRCR or GraphWalks numeric retrieval score **no verified public score found**.
- [Vals MMMU-Pro **84.16% ±0.88**](https://www.vals.ai/models/alibaba_qwen3.6-plus), hosted input text/image/video per [Qwen Cloud](https://www.qwencloud.com/models/qwen3.6-plus); independent audio/video benchmark not verified.

### Normalized scores (1–100)

- **Tool use: 69/100.** Vals TB2.1 53.2% and SAGE 44.9%, with migration 11.1%, Harvey 1.25% and missing OSWorld/MCP confirmation.
- **Reasoning: 77/100.** GPQA/MMLU-Pro ~87% and broad LegalBench, but no HLE/CritPt measurement for this ID and low difficult-domain agent performance.
- **Context window: 92/100.** Hosted 1M/65K input/output capacity, without full-window retrieval evidence.
- **Multimodal: 86/100.** Native text/image/video and MMMU-Pro 84.2%; no audio in/out and hosted video benchmarks missing.
- **Coding: 72/100.** SWE 73.4% and LiveCodeBench 86% are useful, but Vibe Code 25.6% and ProgramBench 0% constrain app-building.
- **Cost efficiency: 80/100.** $0.50/$3 and $0.05 cache read are modest; >256K request rates and free Zen access not verified.
- **Overall Score: 79/100.** (69 + 77 + 92 + 86 + 72) / 5 = 79.2, half-up 79; suited to inexpensive multimodal answers and bounded coding, with challenging agents verified separately.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-13
- Method: Fresh first-party Qwen Cloud API specs/prices paired with independent exact-ID Vals results; missing benchmarks stated rather than borrowed; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
