# Qwen3.8-Omni-Flash — findings by MiMo 2.6 Flash

- Source: Alibaba (Qwen team) `qwen3.8-omni-flash`
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Omni-Flash
- **Short description:** Alibaba's proprietary API-only omnimodal model (Sep 2026) — text, image, audio and video in with text out, 1M context. Strong coding/instruction-following (LiveCodeBench v6 92.6%) and audio understanding; a closed QwenCloud tier, not open weights.
- **Provider / access:** Qianwen AI Platform / Alibaba Cloud Model Studio — OpenAI-compatible Chat Completions and Responses APIs (`qwen3.8-omni-flash`); a streaming sibling `qwen3.8-omni-flash-realtime` is served over WebSocket/WebRTC.
- **Release / knowledge:** launched 2026-09-18 (Qwen launch post + arXiv technical paper); knowledge cutoff not announced.
- **IDs:** `qwen/qwen3.8-omni-flash` (Alibaba Cloud Model Studio); no OpenCode Zen Free ID found.
- **Context window:** 1,000,000 tokens (1M) total — per Qwen launch post / BenchLM model details; max output not announced.
- **Modalities:** text, image, audio, video in; text out; reasoning yes (`reasoning_effort`: low / medium / xhigh, default xhigh); tool calls yes; JSON mode not verified.
- **Pricing (as of 2026-11-12, Alibaba Cloud Model Studio Singapore/international listing):** $0.43 / 1M text input; $3.81 / 1M audio input; $0.78 / 1M image-or-video input; $1.66 / 1M text output after text-only input; $3.06 / 1M text output after multimodal input. Paid only — no free tier found; taxes/credits vary by account.
- **Architecture:** proprietary (API-only, no published weights); multimodal MoE details not disclosed.

### Raw benchmarks found

> All rows below are self-reported by Alibaba's Qwen3.8-Omni-Flash launch post / technical paper (2026-09-18) unless noted; no independent reruns found as of 2026-11-12.

Agent / tool use:

- AndroidWorld: **87.1%** (Qwen launch post)
- CoWorkBench: **75.3%** (Qwen launch post)
- WildClawBench-MM: **71.0** (Qwen launch, Claude Code harness; multimodal subset only)
- UniClawBench: **69.6** (Qwen launch, OpenClaw harness)
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.0%** (Qwen technical paper)
- Humanity's Last Exam: **36.5%** (Qwen technical paper)
- IFBench: **81.5%** (Qwen technical paper)
- Artificial Analysis Intelligence Index / MMLU-Pro / LCR: no verified public score found

Coding:

- SWE-bench Pro: **63.3%** (Qwen technical paper)
- SWE-bench Multilingual: **80.5%** (Qwen technical paper)
- LiveCodeBench v6: **92.6%** (Qwen technical paper)
- DeepSWE: **57.8%** (Qwen launch post)
- NL2Repo-Bench: **48.9%** (Qwen technical paper)
- SWE-bench Verified / SciCode / Vibe Code Bench: no verified public score found

Multimodal / speech (Qwen launch snapshot, 2026-09-18):

- MathVision: **91.8%** (96.2% with Python tools)
- CharXiv: **91.4%** (83.5% without tools)
- RealWorldQA: **87.7%**
- LVBench: **76.9%**
- ERQA: **71.0%**
- Vision2Web: **62.9%**
- OmniVideoBench: **63.4** static / **67.8** with Qwen Code agent
- VoiceBench: **91.6**
- StreamingBench: **80.8**
- AliMeeting DER / cpWER: **3.4 / 17.2** (lower is better)

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval reported (1M window advertised; no measured retrieval score found)

### Normalized scores (1–100)

- **Tool use: 86/100.** AndroidWorld 87.1% and CoWorkBench 75.3% are strong agentic results, but no Terminal-Bench / Tau3 / GDPval / Claw-Eval numbers exist for this ID (slight penalty per methodology); capped below frontier 90+ without those harnesses.
- **Reasoning: 88/100.** GPQA Diamond 91.0% hits the frontier ref (90%+) while HLE 36.5% sits just under the 40% frontier bar and no Intelligence Index / MRCR data exists; that mix caps it at 88.
- **Context window: 95/100.** 1M total matches the ≥1M tier (95–100); no ≥98%-retrieval-at-512K evidence, so the low end of the tier applies.
- **Multimodal: 94/100.** Text/image/audio/video in with text out plus audio-first scores (VoiceBench 91.6, StreamingBench 80.8, MathVision 91.8, CharXiv 91.4) puts it in the +audio tier (90–100); video-reasoning rows (OmniVideoBench ~64–68) keep it below the mid-90s.
- **Coding: 85/100.** LiveCodeBench v6 92.6% and SWE-bench Multilingual 80.5% are near-frontier, but SWE-bench Pro 63.3% and DeepSWE 57.8% trail the frontier refs (DeepSWE 74%+); repo-scale NL2Repo 48.9% caps the score.
- **Cost efficiency: 92/100.** Text $0.43/$1.66 per 1M lands just better than the ~$0.60/$2.20 ≈ 92 reference; audio input ($3.81/M) and multimodal-output ($3.06/M) surcharges pull it down from the mid-90s.
- **Overall Score: 90/100.** (86 + 88 + 95 + 94 + 85) / 5 = 89.6 → 90 — best-fit: a paid omnimodal workhorse for audio/video-heavy agentic and coding pipelines that need a 1M window.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-11-12
- Method: public internet research (vendor launch post, technical paper, aggregator benchmark pages, cloud pricing docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen3.8-Omni-Flash launch post (Qwen)](https://qwen.ai/blog?id=qwen3.8-omni-flash)
  - [Benchgen model card — Qwen3.8-Omni-Flash](https://benchgen.com/models/alibaba/qwen3-8-omni-flash)
  - [BenchLM model page — Qwen3.8-Omni-Flash](https://benchlm.ai/models/qwen3-8-omni-flash)
  - [AIReiter — Qwen3.8-Omni-Flash API pricing (Alibaba Cloud Model Studio rate card)](https://aireiter.com/blog/qwen3-8-omni-flash-api-pricing)
  - [DataCamp — Qwen3.8-Omni-Flash: Features and Benchmarks](https://www.datacamp.com/blog/qwen3-8-omni-flash)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
