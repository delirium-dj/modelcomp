# MiMo-V2.5-Pro — findings by GPT 6 Sol

- Source: Xiaomi MiMo (`XiaomiMiMo/MiMo-V2.5-Pro`; `mimo-v2.5-pro`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.5-Pro.
- **Short description:** Xiaomi's open-weight, long-context text MoE for agentic coding and complex workflows. The separately published `MiMo-V2.5-Pro-Base` is a pre-trained base checkpoint, not the instruction-tuned model scored here ([official weights card](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)).
- **Provider / access:** Xiaomi API model tag `mimo-v2.5-pro` and downloadable `XiaomiMiMo/MiMo-V2.5-Pro` weights; third-party hosts may offer OpenAI-compatible Chat Completions. Xiaomi's [announcement](https://mimo.xiaomi.com/mimo-v2-5-pro) explicitly supplies the API tag; verify host-specific prices and whether the now-deprecated deployment still serves that checkpoint.
- **Release / knowledge:** Xiaomi announced the release April 27, 2026; training knowledge cutoff not verified. An [Artificial Analysis profile](https://artificialanalysis.ai/models/mimo-v2-5-pro) records April 22 as its release date; the two dates are not the same source convention.
- **IDs:** `XiaomiMiMo/MiMo-V2.5-Pro` (weights), `mimo-v2.5-pro` (Xiaomi API); no separately established Free-tier model ID.
- **Context window:** Up to **1,048,576 tokens** in Xiaomi's SGLang recipe; 1M advertised for the instruction-tuned checkpoint, unlike the 256K **base** release ([weights card](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)). [Vals](https://www.vals.ai/models/xiaomi_mimo-v2.5-pro) lists 128K maximum output, subject to provider settings.
- **Modalities:** Text in/out, reasoning and model-specific tool-call parser; **no image/audio/video input** for this Pro checkpoint ([Artificial Analysis specifications](https://artificialanalysis.ai/models/mimo-v2-5-pro)).
- **Pricing (as of 2026-11-01):** [Artificial Analysis provider median](https://artificialanalysis.ai/models/mimo-v2-5-pro) **$0.413 input / $1.02 output per million tokens**, 97% cache discount in its snapshot; [Vals' Xiaomi listing](https://www.vals.ai/models/xiaomi_mimo-v2.5-pro) instead shows **$0.43/$0.87**. Different vendors/snapshots, not a single guaranteed live tariff; local hosting of 1.02T weights is costly.
- **Architecture:** **1.02T total / 42B active**, MIT-licensed open weights, hybrid sliding-window/global attention and three MTP layers ([Xiaomi model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)).

### Raw benchmarks found

- **Agent / tool use:** Xiaomi [τ³-Bench **72.9%**, Terminal-Bench **2.0 68.4%**](https://mimo.xiaomi.com/mimo-v2-5-pro). Independent [Claw-Eval **63.8%**](https://benchlm.ai/models/mimo-v2-5-pro) and [Vals Terminal-Bench **2.1 57.3%**](https://benchlm.ai/models/mimo-v2-5-pro) are different suites. [Vals Terminal-Bench **4.0 0.51% ±0.51**](https://www.vals.ai/models/xiaomi_mimo-v2.5-pro) shows a sharp generation/harness contrast; do not substitute 2.0 results for 4.0.
- **Reasoning:** Independently [AA-GPQA Diamond **86.6%** and AA-HLE **35.7%**](https://benchlm.ai/models/mimo-v2-5-pro); [Vals GPQA **82.58% ±2.47**](https://www.vals.ai/models/xiaomi_mimo-v2.5-pro). Xiaomi HLE without tools **34%** versus with tools **48%** ([Xiaomi announcement](https://mimo.xiaomi.com/mimo-v2-5-pro)); keep tool settings distinct.
- **Coding:** Vendor [SWE-bench Pro **57.2%**](https://mimo.xiaomi.com/mimo-v2-5-pro); [Vals SWE-bench **74.00% ±1.96**, LiveCodeBench **81.35% ±1.07**, Vibe Code Bench v1.1 **34.11% ±4.53**](https://www.vals.ai/models/xiaomi_mimo-v2.5-pro). SWE-Pro, SWE-bench and full-app generation have different tasks, so these are not replications of one percentage.
- **Long context:** Xiaomi's [GraphWalks at 512K: BFS **0.56**, Parents **0.92**; at 1M: BFS **0.37**, Parents **0.62**](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro/raw/main/README.md); independent historical [AA-LCR **79.7%**](https://benchlm.ai/models/mimo-v2-5-pro) uses another protocol. Long-window capacity is meaningful but 1M graph reasoning degrades.
- **Other independent checks:** [Vals MMLU-Pro **84.59% ±0.45**](https://www.vals.ai/models/xiaomi_mimo-v2.5-pro). No exact-model vision benchmark applies to this text-only checkpoint.

### Normalized scores (1–100)

- **Tool use: 77/100.** Vendor τ³ 72.9 and independent Claw-Eval 63.8, capped by divergent newer terminal evaluation.
- **Reasoning: 82/100.** Independent GPQA 82.6–86.6 and HLE 35.7, with protocol and effort uncertainty.
- **Context window: 90/100.** 1M with reported GraphWalks results near the limit, though BFS falls to 0.37.
- **Multimodal: 15/100.** Text-only input and output; coding a video editor does not mean the model processes video.
- **Coding: 79/100.** Vendor SWE-Pro 57.2 and Vals SWE 74/LCB 81.35; Vibe 34.11 cautions against overgeneralizing.
- **Cost efficiency: 86/100.** Reasonably priced hosted inference and MIT weights, tempered by 1.02T memory and changing provider rates.
- **Overall Score: 69/100.** Half-up mean (77 + 82 + 90 + 15 + 79) / 5 = 68.6; strong text-only long-context/coding model when a verified route is available.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Three independent model/full-text/dataset searches; official Xiaomi weights and release checked against Vals and source-linked independent benchmarks. Scores are normalized interpretations, not official percentages.
- Reference URLs:
  - [Xiaomi official MiMo-V2.5-Pro launch and benchmark table](https://mimo.xiaomi.com/mimo-v2-5-pro)
  - [Xiaomi official instruction-tuned weights and long-context evaluation](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)
  - [Vals exact-model independently run benchmark results](https://www.vals.ai/models/xiaomi_mimo-v2.5-pro)
  - [BenchLM source-linked independent model benchmark archive](https://benchlm.ai/models/mimo-v2-5-pro)
  - [Artificial Analysis price, status and model characteristics](https://artificialanalysis.ai/models/mimo-v2-5-pro)
- Future sources: add a new file next to this one using the same headings.
