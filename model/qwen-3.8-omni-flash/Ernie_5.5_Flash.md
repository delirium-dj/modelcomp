# Qwen3.8 Omni Flash — findings by Ernie 5.5 Flash

- Source: Alibaba Cloud/Qwen3.8 Omni Flash (`qwen-3.8-omni-flash`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Omni Flash
- **Short description:** Alibaba's native omni-modal API model (released 2026-09-17/18) for agentic audio-visual work: text, image, audio and video in, text out, with a 1M context and adjustable reasoning effort.
- **Provider / access:** Alibaba Cloud Model Studio / Qianwen AI Platform (`qwen3.8-omni-flash`, Chat Completions and Responses APIs), OpenRouter, Vercel, LLM Gateway, CrossModel, Empirio Labs, plus ~12 routes. Hosted only — no open weights.
- **Release / knowledge:** 2026-09-17 (models.dev) / 2026-09-18 (launch post); knowledge cutoff not published.
- **IDs:** `qwen3.8-omni-flash`, `alibaba/qwen3.8-omni-flash`, `qwen/qwen3.8-omni-flash`, `opencode-go/qwen3.8-omni-flash`.
- **Context window:** 1,000,000 tokens (983,616 on LLM Gateway); max output 131,072.
- **Modalities:** text, image, audio and video in; text out; reasoning_effort low/medium/xhigh (default xhigh), tool calls and web search.
- **Pricing (as of 2026-11-11):** $0.15 / $0.47 per 1M input/output; cache read $0.016 (CrossModel $0.13/$0.43, Empirio $0.30/$0.94).
- **Architecture:** proprietary omni-modal model (Alibaba does not publish sizes for the Omni Flash tier).

### Raw benchmarks found

Agent / tool use:

- AndroidWorld: **87.1**; CoWorkBench: **75.3**; Vision2Web: **62.9**
- Terminal-Bench / OSWorld / MCP-Atlas / Toolathlon: no verified public rows published

Reasoning / knowledge:

- GPQA / GPQA-Diamond: **91% / 91.0%** (best verified GPQA row in this dataset)
- HLE: **36.5%**; MathVision: **91.8%** (96.2% with Python); CharXiv Reasoning: **91.4%** (83.5% without tools)
- ERQA: **71.0%**; RealWorldQA: **87.7%**; LVBench: **76.9%** (long video)

Coding:

- LiveCodeBench v6: **92.6%** (best verified LCB row in this dataset)
- SWE Multilingual: **80.5%**; SWE-bench Pro: **63.3%**; DeepSWE: **57.8%**; NL2Repo: **48.9%**
- SWE-bench Verified / FrontierCode: no verified public rows published

Long context:

- 1M context with a 32-row audio/audio-visual vendor table (per BenchLM's voice-benchmark index); no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 80/100.** AndroidWorld 87.1 and CoWorkBench 75.3 are strong, but no Terminal-Bench/OSWorld/MCP-Atlas row was published for this model.
- **Reasoning: 88/100.** GPQA 91.0% is the best verified GPQA figure here and CharXiv 91.4% strong; HLE 36.5% and the absence of ARC-AGI/FrontierMath rows cap it.
- **Context window: 100/100.** 1,000,000 tokens with 131,072 max output.
- **Multimodal: 90/100.** Text, image, audio and video in with MathVision 91.8% (96.2% with Python), CharXiv 91.4%, RealWorldQA 87.7% and LVBench 76.9% — the strongest verified omni-modal evidence in this dataset.
- **Coding: 85/100.** LiveCodeBench v6 92.6% is the best verified LCB row here and SWE Multilingual 80.5% is strong, but DeepSWE 57.8% and SWE-bench Pro 63.3% are mid and no SWE-bench Verified row exists.
- **Cost efficiency: 95/100.** $0.15/$0.47 per 1M with $0.016 cache reads — omni-modal capability at Flash pricing.
- **Overall Score: 88.6/100.** Best fit for audio-visual agent work, document/chart reasoning and cost-sensitive multimodal pipelines; the best omni-modal value in this dataset.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Qwen3.8-Omni-Flash launch post and Alibaba Cloud docs, BenchLM model + voice-benchmark profiles, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen3.8-Omni-Flash — Alibaba Cloud Model Studio](https://www.alibabacloud.com/help/en/model-studio/models)
  - [Qwen3.8-Omni-Flash benchmarks — BenchLM](https://benchlm.ai/models/qwen3-8-omni-flash)
  - [Qwen3.8-Omni-Flash audio/voice benchmark scope — BenchLM](https://benchlm.ai/voice-benchmarks/qwen3-8-omni-flash-evaluation)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Omni_Flash_v2.md`, using the same headings.