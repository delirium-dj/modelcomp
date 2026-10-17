# Inkling — findings by GPT 5.6 Sol

- Source: Thinking Machines Lab (`thinkingmachines/Inkling`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's open-weight, controllable-reasoning multimodal MoE, designed as a broad base for agentic work and fine-tuning rather than a single-benchmark specialist.
- **Provider / access:** Open weights on Hugging Face; Tinker Playground/API and third-party OpenAI-compatible APIs including Together, Fireworks, Modal, Databricks, and Baseten ([official launch](https://thinkingmachines.ai/news/introducing-inkling/), [model card](https://huggingface.co/thinkingmachines/Inkling)).
- **Release / knowledge:** Released 2026-07-15; training/knowledge cutoff is not published.
- **IDs:** `thinkingmachines/Inkling` for weights and `thinkingmachines/inkling` on common hosted routes; no verified OpenCode Zen Free ID.
- **Context window:** Native weights support up to 1M tokens. Tinker offers 64K and 256K configurations, and the independently evaluated hosted endpoint exposed 256K, so deployment limits vary ([official overview](https://thinkingmachines.ai/inkling/), [Vals](https://www.vals.ai/models/thinkingmachines_inkling)).
- **Modalities:** Text, image, and audio input; text output; controllable reasoning and tool/function calling. The weights were trained with video data, but the model card does not advertise video as an inference input.
- **Pricing (as of 2026-10-17):** Representative hosted price is $1.00/M input and $4.05/M output; self-host cost depends on hardware. Tinker advertised a temporary 50% discount without a permanent free tier ([Artificial Analysis](https://artificialanalysis.ai/models/inkling), [official launch](https://thinkingmachines.ai/news/introducing-inkling/)).
- **Architecture:** Apache-2.0 open weights; 66-layer decoder-only MoE with 975B total/41B active parameters, six of 256 routed experts plus two shared experts active per token, and hybrid local/global attention ([official model card](https://huggingface.co/thinkingmachines/Inkling)).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **63.8%** in Thinking Machines' best internal harness, with contaminated web-search solutions assigned zero; independent runs report **55.1%** (Artificial Analysis) and **47.57%** across three Vals trials ([official launch](https://thinkingmachines.ai/news/introducing-inkling/), [BenchLM source index](https://benchlm.ai/models/inkling), [Vals](https://www.vals.ai/models/thinkingmachines_inkling)).
- MCP Atlas: **74.1%**; Tau 3 Banking: **23.7%** vendor table versus **29.1%** Artificial Analysis; GDPval-AA v2: **1238** in the launch table versus **1076** in a later Artificial Analysis run ([official launch](https://thinkingmachines.ai/news/introducing-inkling/), [BenchLM](https://benchlm.ai/models/inkling)).
- Toolathlon Verified: **45.5%**; Design Arena Agentic Web Dev: **1257 Elo** ([BenchLM](https://benchlm.ai/models/inkling), [official launch](https://thinkingmachines.ai/news/introducing-inkling/)).

Reasoning / knowledge:

- GPQA Diamond: **87.2%** official/Artificial Analysis and **87.12%** Vals; BenchLM's 87.9% headline conflicts with its own underlying AA row, so 87.2% is used ([model card](https://huggingface.co/thinkingmachines/Inkling), [Vals](https://www.vals.ai/models/thinkingmachines_inkling), [BenchLM](https://benchlm.ai/models/inkling)).
- Humanity's Last Exam: **29.7% text-only** and **46.0% with tools** in the official release; later Artificial Analysis text-only result is **31.9%** ([official launch](https://thinkingmachines.ai/news/introducing-inkling/), [BenchLM](https://benchlm.ai/models/inkling)).
- Artificial Analysis Intelligence Index: **25**; AA-LCR: **77.3%**; CritPt: **5.4%**; AA Omniscience Accuracy / Hallucination Rate: **41.6% / 67.7%** ([Artificial Analysis](https://artificialanalysis.ai/models/inkling), [BenchLM](https://benchlm.ai/models/inkling)).
- AIME 2026: **97.1%**; IFBench: **79.8%** ([official model card](https://huggingface.co/thinkingmachines/Inkling)).

Coding:

- SWE-bench Verified: **77.6%** with a bash-only harness; SWE-bench Pro Public: **54.3%** ([official model card](https://huggingface.co/thinkingmachines/Inkling)).
- LiveCodeBench: **85.52%**; Vibe Code Bench v1.1: **19.21%**; Code Migration: **11.79%** ([Vals](https://www.vals.ai/models/thinkingmachines_inkling)).
- AA-SciCode: **47.0%** and AA Coding Index: **52.1%** ([BenchLM](https://benchlm.ai/models/inkling)).

Long context:

- AA-LCR: **77.3%**. The native model supports 1M tokens, but the public result does not establish near-perfect retrieval at 512K+, and hosted Tinker/Vals configurations are capped at 256K.

Multimodal:

- MMMU-Pro: **73.5%** official/AA versus **78.50%** Vals; CharXiv RQ: **78.1%** without tools and **82.0%** with Python ([official launch](https://thinkingmachines.ai/news/introducing-inkling/), [Vals](https://www.vals.ai/models/thinkingmachines_inkling)).
- AudioMC: **56.6%**, MMAU: **77.2%**, and VoiceBench: **91.4%** at effort 0.99 ([official launch](https://thinkingmachines.ai/news/introducing-inkling/)).

Conflicting evidence:

- Terminal-Bench varies from 47.57% to 63.8% because the vendor uses a best internal harness while Vals reports three full independent trials; the normalization uses the range, not the top number alone. GPQA is stable near 87.2%. MMMU-Pro differs by about five points across settings. Context is 1M for the downloadable model but only 64K/256K on Tinker, so the capacity score describes the native weights and explicitly records the hosted cap.

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong MCP Atlas and useful GDPval/Tau results are tempered by the 47.57–63.8% Terminal-Bench spread and weak newer AutomationBench evidence.
- **Reasoning: 83/100.** GPQA 87.2%, AIME 97.1%, and HLE-with-tools 46% are strong, while AA Index 25, CritPt 5.4%, and high hallucination rate cap the score below frontier.
- **Context window: 95/100.** Native 1M capacity reaches the top size tier, but no 98% retrieval result supports 100 and common hosted configurations stop at 256K.
- **Multimodal: 95/100.** Native text, image, and audio input plus strong VoiceBench/MMAU and credible vision results reach the audio-enabled tier; output remains text-only.
- **Coding: 82/100.** SWE-bench Verified 77.6% and LiveCodeBench 85.52% are strong, offset by SWE-Pro 54.3%, SciCode 47%, and weak Vibe Code/Terminal-Bench independent runs.
- **Cost efficiency: 88/100.** $1.00/M input and $4.05/M output is reasonable for a 975B open-weight multimodal model but is neither free nor the cheapest open-model route.
- **Overall Score: 87/100.** Half-up mean of the five quality dimensions `(80 + 83 + 95 + 95 + 82) / 5 = 87.0`; best for customizable multimodal agents when operators can absorb substantial hosting requirements.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-17
- Method: Three independent web searches plus direct review of the official launch/model card and independent Artificial Analysis, Vals, and BenchLM measurements; conflicting harness and endpoint limits are reported explicitly.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
