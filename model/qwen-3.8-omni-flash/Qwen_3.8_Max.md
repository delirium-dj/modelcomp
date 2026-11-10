- Source: Alibaba Qwen (`qwen-3.8-omni-flash`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Omni Flash
- **Short description:** Alibaba's native end-to-end omnimodal "flash" model — processes text, image, audio (incl. spatial/multichannel), and video streams in a 1M-token window and generates real-time text OR speech. Built for agentic productivity (voice/video dialogue, audio-visual tool use) at flash pricing rather than peak reasoning depth.
- **Provider / access:** Alibaba Qwen. Hosted-only (proprietary, no released weights) via the Qianwen AI Platform and Alibaba Cloud Model Studio, exposed through OpenAI-compatible Chat Completions + Responses APIs. `reasoning_effort` = low / medium / xhigh (default). A `qwen3.8-omni-flash-realtime` sibling serves continuous audio-visual streaming over WebSocket / WebRTC.
- **Release / knowledge:** Released ~September 2026 (arXiv 2609.25611v1; provider launch snapshot 2026-09-18). Knowledge cutoff not separately published.
- **IDs:** `qwen/qwen-3.8-omni-flash` (dataset id). Official hub: qwenlm.github.io.
- **Context window:** 1,000,000 tokens total / 131,072 max output. Native 256K (262,144) pretraining window extended to 1M in post-training.
- **Modalities:** Text + image + audio + video in → text out (standard hosted endpoint); the Thinker-Talker architecture natively generates real-time **speech** output as well (29 languages + 7 Chinese dialects). **DISCREPANCY:** `meta.json` lists "text out" only — the paper confirms native text-or-speech generation, so audio output is a real capability surfaced via the Talker / `-realtime` sibling.
- **Pricing (as of 2026-11-10):** $0.15 / 1M input, $0.47 / 1M output; prompt-cache read $0.016/1M. Paper reports API input cost per hour of audio reduced >98% and audiovisual >93% vs Qwen3.5-Omni-Plus.
- **Architecture:** Thinker-Talker. Thinker = hybrid sparse MoE on the Qwen3.8-Next backbone (Gated DeltaNet recurrent state + Qwen Sparse Attention with a block-selecting indexer); three perception encoders (vision from Qwen3.8-Next, general AuT at 6.25 Hz, Spatial AuT for directional/multichannel cues) project into a shared space with explicit timing. ~2.5T pretraining tokens (text 1.1T / audio 0.7T / image 0.35T / video 0.15T / video-audio 0.3T); post-training = Multi-Teacher Distillation + RL. Talker streams speech. Speech input 74 languages + 39 dialects; text 201 varieties.

### Raw benchmarks found

> Provider launch snapshot (Qwen, 2026-09-18) aggregated by BenchLM, plus arXiv 2609.25611v1. Numbers are Qwen-reported; no independent re-run located. Paper claims >25% average gain over Qwen3.5-Omni-Plus across 29 audio / audio-visual / AV-agent evaluations.

Agent / tool use:

- AndroidWorld (computer/GUI use): **87.1%**
- CoWorkBench (agentic collaboration): **75.3%**
- OmniVideoBench (Qwen Code, AV agentic): **67.8%** (static 63.4%)
- Vision2Web: **62.9%**; UniClawBench **69.6%**, WildClawBench-MM **71.0%**
- Paper's headline contribution: native audio-visual tool use and streaming AV agents (no OSWorld / Terminal-Bench / GDPval figure published)

Reasoning / knowledge:

- GPQA: **91%**; GPQA-Diamond: **91.0%** (frontier-tier, provider-reported)
- Humanity's Last Exam: **36.5%**; IFBench (instruction following): **81.5%**
- No Artificial Analysis Intelligence Index / HLE-with-tools figure published

Coding:

- LiveCodeBench v6: **92.6%** (frontier-tier)
- SWE Multilingual: **80.5%**; SWE-bench Pro: **63.3%**
- DeepSWE: **57.8%**; NL2Repo: **48.9%**
- No SciCode / Terminal-Bench 2.1 / Coding Index figure published

Multimodal (vision / audio / video):

- MathVision **91.8%** (w/ Python **96.2%**); CharXiv **91.4%** (w/o tools **83.5%**); RealWorldQA **87.7%**
- LVBench (long video) **76.9%**; ERQA **71.0%**
- VoiceBench **91.6**; StreamingBench **80.8**; AliMeeting DER / cpWER **3.4 / 17.2** (lower better)

Long context:

- 1M-token window (native 256K → 1M extension); no MRCR / RULER retrieval figure published

### Normalized scores (1–100)

> Derived from the raw numbers above via `model-comparison.md`. Overall = half-up mean of the five quality dims; Cost efficiency scored independently, never counted.

- **Tool use: 82/100.** Strong GUI/computer use (AndroidWorld 87.1%) and agentic collaboration (CoWorkBench 75.3%), plus the model's native audio-visual tool-use path; held in the low-80s because the measured agentic set is mid-tier (OmniVideoBench-Qwen-Code 67.8%, Vision2Web 62.9%) and no OSWorld / Terminal-Bench / GDPval frontier figure is published.
- **Reasoning: 84/100.** Frontier-tier GPQA-Diamond 91.0% and solid HLE 36.5% / IFBench 81.5% (all provider-reported) put it well above mid; capped below 90 because it is a flash-tier model that explicitly trades peak reasoning depth for streaming throughput and lacks an Intelligence Index / HLE-with-tools number.
- **Context window: 96/100.** 1M-token window (top ≥1M tier) with 131K max output and a native 256K→1M extension — exceptional for an omni model; a few points off the ceiling as no long-context retrieval (MRCR/RULER) score is published.
- **Multimodal: 94/100.** The headline strength — native text/image/audio/video ingestion with spatial-audio cues AND real-time speech output (29 langs), backed by strong vision (MathVision 91.8%, CharXiv 91.4%), audio (VoiceBench 91.6, AliMeeting DER 3.4) and video (LVBench 76.9%) results; top of the audio/non-text-output band, held just under the ceiling because a few video-agentic benchmarks are mid-tier (OmniVideoBench static 63.4%, ERQA 71.0%).
- **Coding: 82/100.** Frontier-tier LiveCodeBench v6 92.6% and SWE Multilingual 80.5%, but weaker agentic software engineering (SWE-bench Pro 63.3%, DeepSWE 57.8%, NL2Repo 48.9%) and no SciCode / Terminal-Bench 2.1 figure keep it in the low-80s rather than the 90+ frontier band.
- **Cost efficiency: 96/100.** $0.15/$0.47 per MTok ($0.016 cached) is highly competitive for a native-omni 1M model, and the paper reports >98% (audio) / >93% (audiovisual) input-cost-per-hour reductions vs the prior omni generation. Excluded from Overall.
- **Overall Score: 87.6/100.** Mean of the five quality dims (82+84+96+94+82)/5 = 87.6. Divergence note: my independent read sits ~0.8 above the peer cohort (86.8), crediting the frontier GPQA-Diamond 91.0% and the 1M native-omni context/multimodal combination. Best fit: real-time voice/video agents, audio-visual tool use, and long-stream multimodal productivity at flash pricing — not maximal single-shot reasoning depth.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-10
- Method: public internet research (arXiv 2609.25611v1 + BenchLM provider launch snapshot + Alibaba Cloud Model Studio docs); scores are normalized 1–100 interpretations, not official vendor scores. Researched independently of the peer findings in this folder.
- Reference URLs:
  - [Qwen3.8-Omni: Towards Native Omni-Modal Agents (arXiv 2609.25611v1)](https://arxiv.org/abs/2609.25611)
  - [Qwen3.8-Omni-Flash launch blog (Qwen)](https://qwen.ai/blog?id=qwen3.8-omni-flash)
  - [Qwen 3.8 Omni Flash benchmarks & pricing (BenchLM)](https://benchlm.ai/models/qwen3.8-omni-flash)
  - [Alibaba Cloud Model Studio — models & pricing](https://www.alibabacloud.com/help/en/model-studio/models)
  - [Qwen official hub](https://qwenlm.github.io/)
