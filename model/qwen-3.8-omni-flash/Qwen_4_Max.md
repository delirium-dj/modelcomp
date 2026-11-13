# Qwen3.8-Omni-Flash — findings by Qwen 4 Max

- Source: Vendor (Alibaba Qwen team) + independent trackers; subject slug `qwen-3.8-omni-flash`
- Date: 2026-11-13 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) · [../../model-findings.md](../../model-findings.md)

## Model card

- **Name:** Qwen3.8-Omni-Flash (`qwen3.8-omni-flash`)
- **Short description:** Alibaba's hosted native omni-modal "any-to-text" model — text/image/audio/video in, text out — built for real-time multimodal agents; vendor claims overall audio understanding exceeding Gemini 3.8 Flash and audio-video near-parity, avg +25% across 29 benchmarks vs Qwen3.5-Omni-Plus.
- **Provider/access:** Qianwen AI Platform + Alibaba Cloud Model Studio (Beijing, Singapore, HK, Tokyo, Frankfurt, Virginia); OpenAI-compatible Chat Completions + Responses API; function calling, web search (`web_search`), implicit context cache + Responses session caching. **Hosted only — no open weights** (BenchLM). A distinct sibling `qwen3.8-omni-flash-realtime` (WebSocket/WebRTC, text+audio out, non-thinking) exists — not this model.
- **Release/knowledge:** Launch blog Sept 18 2026; OpenCode Data lists release **2026-09-17**; tech report Sept 22 (dates labelled, not averaged). Knowledge cutoff not published.
- **IDs:** `qwen3.8-omni-flash`; distinct from `qwen3.8-omni-flash-realtime`, Qwen3.8-Flash (VL text-out SKU), Qwen3.8-Flash-Next (open checkpoint), Qwen3.5-Omni-Plus.
- **Context window:** **1,000,000 tokens**; max input 991,808 non-thinking / 983,616 thinking; **max output 131,072** (Model Studio doc). Native pretrain 262K → 1M post-train (Flowtivity body; FAQ says 256K — rounding label). Thinking on by default; `reasoning_effort` low/medium/xhigh (default xhigh, BenchLM).
- **Modalities:** **Text + image + audio + video in; text out.** 113 audio input languages/dialects (doc, same as Qwen3.5-Omni) vs BigGo "ASR 74 languages / TTS 29" — different metric scope, labelled. Multichannel/spatial audio (`use_multichannel`).
- **Pricing (as of 2026-11-13, per 1M tokens):** **$0.15 in / $0.47 out; cached read $0.02** (no cache-write fee; OpenCode Data). Vendor: audio input −98%/hour, audio+video −93%/hour vs Qwen3.5-Omni-Plus (BigGo/Flowtivity).
- **Architecture:** Thinker-Talker (tech report via Flowtivity). Thinker = hybrid sparse MoE inherited from **Qwen3.8-Next**: Gated DeltaNet recurrent state + interleaved Qwen Sparse Attention (learned indexer). Talker = streaming speech 24→48 kHz. Three encoders: vision, audio **6.25 Hz (160 ms/token)**, **Spatial AuT** (ambisonics multichannel — claimed first auditory localization); explicit timestamps on all A/V. Pretrain 2.5T tokens (text 1.1T, audio 0.7T, image 0.35T, video 0.15T, paired AV 0.3T); multi-teacher distillation (coding/agents/vision/audio specialists) + unified outcome-reward RL. Ecosystem: Qwen-MM-Plugins (Omni-Caption/Video2Note/Memory/Skill Creator) + Qwen-Live-Harness (realtime async tools, sub-agent delegation, persistent memory; GitHub 404 at announcement).

### Raw benchmarks found

Vendor-reported (Qwen-run harnesses — labelled; competitor media settings Gemini 3.8 Flash `media_resolution=high` / Seed 2.0 Lite `max_frame_tokens=384` not independently reproducible; via BenchLM/Flowtivity/BigGo):
- Omni agentic: **WildClawBench-MM 71.0** (Claude Code harness; +36.5 vs predecessor; Gemini 3.8 Flash 58.9), UniClawBench 69.6 (OpenClaw; Gemini 69.0), OmniVideoBench 63.4 static / **67.8 agentic** (Qwen Code; tokens 145,736→79,117, −45.7%), Video-MME-v2 65.0 static / 71.3 agentic (Gemini static 71.0), LVOmniBench 63.3 static / **73.6 agentic** (Gemini agentic 70.7), StreamingBench **80.8** (RTC 82.3; Gemini 79.9), OmniVChat-Bench realtime **82.3** (Gemini 65.6), AgenticVBench **36.8** (Gemini 45.0 — loses), OmniGAIA **74.0** (Gemini 78.6 — loses).
- Audio/speech: AliMeeting **DER 3.4 / cpWER 17.2** (predecessor 88.1/89.6; BigGo "AliMeeting 89.7" is a different metric — labelled), OmniLingua-MultiSpeaker 100% success, LongAudioSpan 82.7, OmniCap-IF 28.2, VoiceBench **91.6**, FLEURS WER 9.3 (regressed from 7.2). Realtime TTFA ~1s audio / 1.2–1.35s video; generation ~6.5× realtime.
- Agentic/coding: CoWorkBench **75.3**, AndroidWorld **87.1**, SWE-Pro **63.3**, SWE Multilingual 80.5, NL2Repo 48.9, DeepSWE **57.8**, LiveCodeBench v6 **92.6** (best listed vs Qwen3.8-Flash text), Vision2Web 62.9.
- Vision/reasoning: ERQA 71.0, LVBench 76.9, RealWorldQA **87.7**, MathVision **91.8 / 96.2 (Python)**, CharXiv **83.5 no-tools / 91.4 tools**, GPQA **91.0**, HLE **36.5**, IFBench **81.5**.

Independent runs:
- BenchLM: **unranked, 19/815 rows** — no aggregate computed; carries the vendor tables above.
- OpenCode Data: usage unranked (0 tokens, 1 session) — effectively no independent adoption signal yet.
- Self-R&D demo (vendor): improved Qwen2.5-Omni-3B Sichuanese CER 25.79→15.30 (−40.7%) in 12h, 3,413 data points, 4 rounds, no human intervention.
- No Artificial Analysis page or LCR/MRCR long-context eval found for this SKU.

### Normalized scores (1–100)

- **Tool use: 80/100.** WildClawBench-MM 71.0 beats Gemini 3.8 Flash (58.9) decisively, UniClawBench 69.6 near-parity, CoWorkBench 75.3 + AndroidWorld 87.1 strong computer/phone use; capped by AgenticVBench 36.8 and OmniGAIA 74.0 (both lose to Gemini), no GDPval/BrowseComp/τ-bench evidence, and vendor-harness-only provenance.
- **Reasoning: 78/100.** GPQA 91.0, IFBench 81.5, MathVision 91.8 (96.2 with Python tool) are strong; HLE 36.5 mid-tier; no AIME/HMMT/CritPt/AA-index evidence — omni specialization trades away some frontier text reasoning depth vs Qwen3.8-Flash/Max.
- **Context window: 82/100.** 1M (native 262K → 1M post-train, same recipe as Qwen3.8-27B/Flash) with 131,072 output and no long-context surcharge listed; agentic token efficiency −45.7% on OmniVideoBench is a real retrieval-economy signal; deducted for **no LCR/MRCR eval** and unverified >262K retrieval quality.
- **Multimodal: 86/100.** Native omni audio+video+spatial-audio input is the headline: VoiceBench 91.6, StreamingBench 80.8, OmniVChat realtime 82.3 (vs Gemini 65.6), AliMeeting DER 3.4/cpWER 17.2, LongAudioSpan 82.7, MathVision 96.2 CI, CharXiv 91.4 tools, RealWorldQA 87.7; above Muse Spark Open's 84 on audio depth (113 languages, spatial AuT); deducted for FLEURS WER regression (7.2→9.3), static video trailing Gemini (Video-MME-v2 65.0 vs 71.0), OmniCap-IF 28.2, and no MMMU-Pro row.
- **Coding: 82/100.** LCB v6 92.6 (best in its listed comparison), SWE-Pro 63.3, DeepSWE 57.8, SWE Multilingual 80.5, AndroidWorld 87.1; NL2Repo 48.9 and Vision2Web 62.9 moderate; solid but below text-flagship coding tiers (no SWE-V row).
- **Cost efficiency: 95/100.** $0.15/$0.47 with cached read $0.02 (87% discount) matches Qwen3.8-Flash pricing at omni capability; vendor audio −98%/hour and AV −93%/hour vs Qwen3.5-Omni-Plus make long audio/video dramatically cheaper; ~6.5× realtime generation; no independent $/task data (deducted from 97+).
- **Overall Score: 81.6/100.** Mean of the five quality dimensions (Cost excluded): (80+78+82+86+82)/5 = 81.6. The strongest omni-specialist in the dataset on audio (above Inkling-Small 78.4 overall on coding/agentic/video breadth), priced like a Flash tier — below text flagships Qwen3.8-Flash (83.8) and Qwen3.8-Max (84.2) on pure reasoning/coding, above them on anything involving hearing or watching.

---

## Signature
- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-13
- Method: public internet research (Alibaba Cloud Model Studio official doc, BenchLM vendor-table carriage, Flowtivity tech-report deep-dive, BigGo launch coverage, OpenCode Data pricing/usage page); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: audio languages (113 doc languages+dialects vs BigGo 74 ASR/29 TTS — different scopes); AliMeeting (DER 3.4/cpWER 17.2 vs BigGo "89.7" — different metrics); native context (262K body vs 256K FAQ — rounding); release dates (Sept 17 OpenCode vs Sept 18 blog vs Sept 22 tech report); vendor competitor settings (Gemini media_resolution=high, Seed max_frame_tokens=384) not independently reproducible; identity (hosted text-out SKU ≠ realtime WebSocket sibling ≠ Qwen3.8-Flash ≠ Flash-Next checkpoint).
- Reference URLs:
  - [Qwen3.8-Omni-Flash launch — Qwen blog](https://qwen.ai/blog?id=qwen3.8-omni-flash)
  - [qwen3.8-omni-flash Model Info — Alibaba Cloud Model Studio docs](https://www.alibabacloud.com/help/en/model-studio/qwen3-8-omni-flash)
  - [qwen3.8-omni-flash-realtime — Model Studio docs](https://www.alibabacloud.com/help/en/model-studio/qwen3-8-omni-flash-realtime)
  - [Qwen3.8-Omni-Flash Benchmark Scores — BenchLM](https://benchlm.ai/models/qwen3-8-omni-flash)
  - [Qwen3.8-Omni: native omni-modal agents — Flowtivity](https://flowtivity.ai/blog/qwen3-8-omni-native-omni-modal-agents/)
  - [Qwen3.8-Omni-Flash launch — BigGo Finance](https://finance.biggo.com/news/238d8bfc-3cf7-4e18-aecd-80e24151c172)
  - [Qwen3.8-Omni-Flash — OpenCode Data](https://opencode.ai/data/alibaba/qwen3-8-omni-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.