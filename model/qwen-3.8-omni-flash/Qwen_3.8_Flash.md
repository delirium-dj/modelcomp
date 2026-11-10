# Qwen 3.8 Omni Flash — findings by Qwen 3.8 Flash

- Source: Alibaba / Qwen Team (`qwen3-8-omni-flash`), launched 2026-09-18 (tech report 2026-09-22)
- Date: 2026-11-10 (UTC) — deep research pass (4 successful independent web searches + 6 source fetches: the-decoder, BenchLM omni-evaluation, the flowtivity analysis of the arXiv report, and the Qwen/arXiv primary pages; qwen.ai and gmicloud/apxml returned JS shells)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Omni Flash (Alibaba's first omni-modal model built around agentic work, not just perception — the Thinker-Talker line extended to audio + video + spatial audio).
- **Short description:** A natively end-to-end omnimodal MoE that ingests text, image, audio, video and spatial (ambisonic) audio and answers with text or realtime speech, aimed at long-horizon productivity agents (meeting minutes, video editing, drama dubbing, movie commentary). It is a **Flash-tier** model — optimized for throughput and cost, trading some frontier reasoning depth for streaming speed. Flag: distinct from the text `qwen-3.8` and `qwen-3.8-max-prime` entries in this corpus.
- **Provider / access:** Qwen Studio / Qwen Cloud / API; ids `qwen/qwen3-8-omni-flash` (also surfaced as `alibaba/qwen3-8-omni-flash` on OpenCode data and via GMICloud etc.). Open-source integration layer **Qwen-MM-Plugins** and **Qwen-Live-Harness** (github.com/QwenLM) bolt audio/video onto harnesses like Qwen Code, OpenClaw and Claude Code. Chat-completions + a realtime variant.
- **Release / knowledge:** launch 2026-09-18; technical report arXiv:2609.25611 on 2026-09-22; knowledge cutoff not separately published.
- **IDs:** `qwen/qwen3-8-omni-flash` (+ `-realtime` variant). A free/cheap tier is implicit in the Flash pricing, not a Zen `…-free` id.
- **Context window:** **1,000,000 total / 131,072 max output** (verified via meta + report; pretrained native 256–262K, extended to 1M in post-training).
- **Modalities:** **text + image + audio + video + spatial audio IN; text + realtime speech OUT.** Hybrid sparse-MoE Thinker (Gated DeltaNet + Qwen Sparse Attention) + Talker (24→48 kHz streaming speech); vision encoder + 6.25 Hz audio encoder + new Spatial AuT encoder; explicit timestamps on every AV representation. Tool calls, agentic multi-step planning.
- **Pricing (as of 2026-11-10):** **$0.15 / $0.47 per 1M in/out**, prompt-cache read **$0.016/1M** (meta + the-decoder). Qwen's own estimates: **< $0.01 per hour of audio**, ~**$0.20** for 720p video with audio at 1 fps (response cost separate). Reported >98% (audio) / >93% (video) input-cost cut vs the prior generation.
- **Architecture:** proprietary API (open weights "historically" in this family but not stated for this release); 2.5T-token native multimodal co-training (1.1T text / 0.7T audio / 0.35T image / 0.15T video / 0.3T paired AV), multi-teacher distillation + outcome-reward RL. Latency: time-to-first-audio ~1s (audio), 1.2–1.35s (video), ~6.5× realtime generation.

### Raw benchmarks found

Exact-ID rows from the Qwen Team report (Tables 5–10) reproduced via the flowtivity analysis and BenchLM's omni-evaluation; comparators are Gemini 3.8 Flash unless noted. ⚠️ Provenance caveat: **the vendor ran every row itself and chose each agent harness** (competitor runs use provider-specific media settings), so these are **not independently reproducible** — a limitation the sources state explicitly. Agentic rows pair the model with the named harness.

Agent / tool use:

- WildClawBench-MM (multimodal agent, via Claude Code): **71.0** (Gemini 3.8 Flash 58.9) — **vendor-run**
- UniClawBench (agent, via OpenClaw): **69.6** (Gemini 69.0) · AgenticVBench (post-production): **36.8** (Gemini 45.0) — Gemini leads
- OmniGAIA (web-search agent, no harness): **74.0** (Gemini 78.6) — Gemini leads
- LVOmniBench **agentic** 73.6 vs Gemini 70.7 (static mode 63.3, 7.4 behind — the harness flips it) · tokens/query **−45.7%** on OmniVideoBench (145,736→79,117)
- Autoresearch (no human loop): improved Qwen2.5-Omni-3B Sichuan ASR CER **25.79%→15.30%** (~40.7% relative) in 12h
- With the Qwen Code harness an omni-agent aggregate reaches **73.6** vs Gemini 70.7 (BenchLM)

Reasoning / knowledge:

- **No independent GPQA / HLE / Artificial Analysis Intelligence-Index row found for this exact ID** (it is not in AA's text ranking; the voice eval is kept separate from text rankings). Evidence is agentic-research (Omni-Deep Research claim extraction + web cross-check) and text-capability retention rather than static knowledge benchmarks — the main reason Reasoning is capped below the frontier models.

Coding:

- **SWE-bench Pro 63.3** · **LiveCodeBench v6 92.6** — the report lists these as the best scores in their rows versus the text Qwen3.8-Flash model, i.e. text coding held despite multimodal scope.

Long context / multimodal understanding (the model's home turf):

- DailyOmni **85.1** (best-equal) · OmniVideoBench **63.4→67.8** (static→agentic) · Video-MME-v2 **65.0→71.3** (Gemini 71.0 static, still ahead) · LVOmniBench 63.3→73.6
- OmniVChat-Bench (realtime) **82.3** (Gemini 65.6) · StreamingBench **80.8** (82.3 RTC) vs 79.9
- Audio: AliMeeting diarisation **DER 88.1→3.4**, cpWER 89.6→17.2 · OmniLingua-MultiSpeaker **100%** success · regression noted: FLEURS multilingual **9.3 WER** (was 7.2)

Conflicts logged rather than smoothed: the-decoder/apxml headline "on par with / matches Gemini 3.8 Flash" is a vendor framing — the report's own tables show Gemini still leads **static** video reasoning (Video-MME-v2 71.0 vs 65.0), OmniGAIA web search and AgenticVBench, while Qwen wins the agentic/realtime rows; the 262K vs 256K native-context figure differs between the report body and FAQ; all rows are vendor-run and non-reproducible.

### Normalized scores (1–100)

- **Tool use: 84/100.** Genuinely strong omni-agentic execution — leads Gemini on multimodal agent benchmarks (WildClawBench-MM 71.0, UniClawBench 69.6) and flips long-video retrieval when agentic (LVOmniBench 73.6), plus a credible self-improvement autoresearch demo. Held under the frontier tier by AgenticVBench 36.8 and OmniGAIA 74.0 (both below Gemini) and by all rows being vendor-run/unverified.
- **Reasoning: 78/100.** Text reasoning "held" (LiveCodeBench 92.6, Omni-Deep Research cross-checking) but this is an explicit Flash-tier trade of depth for throughput, and there is **no independent static-reasoning/knowledge row (GPQA/HLE/AA index) for the exact ID** — the absence caps the score as much as the modest numbers. Provisional pending AA coverage.
- **Context window: 86/100.** 1M total / 131K out with native 262K→1M extension; effective long-AV via Gated DeltaNet state compression + Omni-Memory lazy loading and 45.7% token/query savings. Not 90+ because the very long multimodal context leans on agentic retrieval rather than pure in-attention recall (no dedicated MRCR-style needle row found).
- **Multimodal: 91/100.** The defining strength: native text + image + audio + video + **spatial audio** in, text + realtime speech out — full-modality coverage almost nothing else here has. DailyOmni 85.1, realtime OmniVChat 82.3, near-fixed multi-speaker diarisation. Held just shy of higher because Gemini 3.8 Flash still beats it on static video reasoning.
- **Coding: 80/100.** LiveCodeBench v6 92.6 is excellent and SWE-bench Pro 63.3 is solid for a Flash omni model, but real-repo agentic coding (63.3) is mid-tier versus frontier (Fable 5.2 93). Capped by the SWE row.
- **Cost efficiency: 92/100.** $0.15 / $0.47 per 1M (cache $0.016), audio < $0.01/hr, ~$0.20 per 720p-video-hour — the whole point of the Flash tier; exceptional price/performance for AV workloads. Scored independently.
- **Overall Score: 83.8/100.** Half-up mean of the five quality dims (84+78+86+91+80)/5 = **83.8** (Cost excluded). Best fit: high-throughput omnimodal agents over audio/video — meeting minutes, dubbing, movie commentary, realtime speech — where cost and full-modality input dominate; choose Gemini 3.8 Flash for the highest static video-reasoning accuracy and a frontier text model (Fable/Opus/GPT-6) for deep reasoning or heavy coding.

> Note vs corpus: this rater lands at **83.8**, below the `model-queue.md` group average of 86.8 for this slug, because I cap Reasoning for the missing independent static-reasoning rows and treat the vendor-run agentic rows as provisional. That is recorded deliberately rather than averaged toward the group.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-10 (new report; folder had `meta.json` + `average.md` + a `Gemini_3.8_Flash.md` but no `Qwen_3.8_Flash.md`, so this slug **was in `model-queue.md`** at Overall 86.8 and this file adds one more independent rater)
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Every exact-ID number is from the Qwen Team report (arXiv:2609.25611) / launch post as reproduced by BenchLM's omni-evaluation and the flowtivity analysis — flagged as vendor-run and not independently reproducible; comparators are Gemini 3.8 Flash.
- Reference URLs:
  - [Qwen — Qwen3.8-Omni-Flash: Omni Senses. Agentic Delivery. (launch post)](https://qwen.ai/blog?id=qwen3.8-omni-flash)
  - [arXiv 2609.25611 — Qwen3.8-Omni: Towards Native Omni-Modal Agents (technical report)](https://arxiv.org/html/2609.25611v1)
  - [BenchLM — Qwen3.8-Omni-Flash omni evaluation (voice-benchmark profile)](https://benchlm.ai/voice-benchmarks/qwen3-8-omni-flash-evaluation)
  - [the-decoder — Qwen3.8-Omni-Flash undercuts Gemini Flash pricing](https://the-decoder.com/qwen3-8-omni-flash-undercuts-gemini-flash-pricing-while-matching-its-multimodal-benchmarks/)
  - [Flowtivity — Qwen3.8-Omni explained (report Tables 5–10 breakdown)](https://flowtivity.ai/blog/qwen3-8-omni-native-omni-modal-agents/)
  - [GMICloud — Qwen 3.8 Omni Flash listens, watches, searches in one call](https://www.gmicloud.ai/en/blog/qwen-38-omni-flash-listens-watches-and-searches-in-one-call)
  - [OpenCode data — Qwen 3.8 Max Prime vs Qwen3.8 Omni Flash](https://opencode.ai/data/compare/alibaba/qwen3-8-max-prime/alibaba/qwen3-8-omni-flash)
  - [QwenLM/Qwen-MM-Plugins (open-source integration)](https://github.com/QwenLM/Qwen-MM-Plugins)
- Future sources: an **independent** (non-vendor) run of Video-MME-v2 / OmniGAIA / AgenticVBench, and AA Intelligence-Index coverage for this id, would let Reasoning and Tool use be scored above provisional. Add a new file next to this one using the same headings.
