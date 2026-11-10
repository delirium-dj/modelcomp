# Qwen 3.8 Omni Flash — findings by Inkling 2 Small

- Source: Alibaba (`qwen-3.8-omni-flash`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Omni-Flash
- **Short description:** Alibaba's pragmatic omni model in the Qwen3.8 line — native text/image/audio/video understanding in one model for multimodal agentic work (video QA, voice assistants, computer use, coding). Closed weights, hosted only, launched 2026-09-17/18. A separate streaming sibling `qwen3.8-omni-flash-realtime` exists over WebSocket/WebRTC (not this SKU).
- **Provider / access:** Qianwen AI Platform + Alibaba Cloud Model Studio (intl + China); OpenAI-compatible Chat Completions and Responses APIs; 13 providers on models.dev incl. OpenRouter (`qwen/qwen3.8-omni-flash`), Eden AI, Vercel AI Gateway.
- **Release / knowledge:** 2026-09-17 (models.dev); knowledge cutoff not publicly stated.
- **IDs:** `qwen3.8-omni-flash` (Model Studio); `qwen/qwen3.8-omni-flash` (OpenRouter)
- **Context window:** 1,000,000 tokens; max output 131,072 tokens (models.dev).
- **Modalities:** text + image + audio + video in; text out; reasoning yes (low/medium/xhigh, default xhigh); tool calls yes; Structured outputs yes; VoiceBench class evals measured.
- **Pricing (as of 2026-11-10):** $0.150 / 1M input, $0.47 / 1M output (Alibaba direct; $0.1126/$0.38 via resellers like AIHubMix). No weights.
- **Architecture:** proprietary omni-modal; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- AndroidWorld: **87.1%** (Qwen3.8-Omni-Flash launch post, 2026-09-17/18)
- CoWorkBench: **75.3%** (launch post)
- Voice-compatible agent evals (WildClawBench-MM **71.0**, UniClawBench **69.6**, OmniGAIA vs Claude Code harnesses — provider-chosen harness, non-independent)

Reasoning / knowledge:

- GPQA-D: **91.0%** (launch post)
- HLE: **36.5%** (launch post)
- IFBench: **81.5%** (launch post)

Coding:

- LiveCodeBench v6: **92.6%** (launch post)
- SWE-Multilingual: **80.5%** (launch post)
- SWE-bench Pro: **63.3%** (launch post)
- NL2Repo: **48.9%** (launch post)
- DeepSWE: **57.8%** (launch post)

Long context:

- 1,000,000 tokens (models.dev); no verified public long-context retrieval score found (AA-LCR not tracked; Omniscience row absent).

Multimodal:

- MathVision: **91.8%**; w/ Python **96.2%** (launch post)
- CharXiv: **91.4%** (83.5% w/o tools) (launch post)
- RealWorldQA: **87.7%** (launch post)
- LVBench (video): **76.9%** (launch post)
- VoiceBench: **91.6%** (launch post)
- OmniVideoBench: **63.4%** static / **67.8%** in Qwen Code harness (launch post)
- StreamingBench: **80.8%** (launch post)
- AliMeeting ASR: DER **3.4** / cpWER **17.2** (lower better; launch post)
- Vision2Web: **62.9%**; ERQA **71.0%** (launch post)

### Normalized scores (1–100)

- **Tool use: 80/100.** AndroidWorld 87.1% and CoWorkBench 75.3% verify real multimodal agentic operation; Omni-class tool evals are strong if harness-dependent.
- **Reasoning: 66/100.** GPQA-D 91.0% is frontier-class; HLE 36.5% and no public AA Index pull back — class knowledge strong, frontier breadth unmeasured.
- **Context window: 88/100.** 1,000,000 tokens with 131,072 max output, verified across providers; retrieval unmeasured publicly — provisional cap.
- **Multimodal: 90/100.** Text/image/audio/video in; MathVision 91.8%, CharXiv 91.4%, RealWorldQA 87.7%, LVBench 76.9%, VoiceBench 91.6% — one of the best native omni profiles at this price; text out only.
- **Coding: 73/100.** LCB v6 92.6% and SWE-Multilingual 80.5% are excellent; SWE-Pro 63.3% and DeepSWE 57.8% keep it firmly mid-upper tier — no distributed reproduction.
- **Cost efficiency: 75/100.** $0.1126–0.15 / $0.38–0.47 per 1M across 13 providers — cheap for a native multimodal 1M model; closed weights.
- **Overall Score: 79/100.** (80 + 66 + 88 + 90 + 73) / 5 = 79.4 → 79. Best fit: multimodal agentic workloads — video/audio/screen understanding + tool use at 1M context; not the cheapest coding-only option.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (BenchLM model card read, models.dev 13-provider catalog, Qwen launch post via BenchLM mirror); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen3.8-Omni-Flash — BenchLM](https://benchlm.ai/models/qwen3-8-omni-flash)
  - [Qwen3.8 Omni Flash — models.dev](https://models.dev/models/alibaba/qwen3.8-omni-flash)
  - [Qwen3.8-Omni-Flash launch post — Qwen](https://qwen.ai/blog?id=qwen3.8-omni-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
