# Qwen3.8-Omni-Flash — findings by DeepSeek 4.1 Flash

- Source: Alibaba / Qwen — `qwen/qwen-3.8-omni-flash`
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Omni-Flash
- **Short description:** Alibaba's native omnimodal Flash-tier agent model — text, image, audio and video in, text out — built for audio-video understanding and content analysis, with a 1M-token context window and agentic tool use (plan tasks, call tools, deliver finished video/localization work).
- **Provider / access:** Alibaba Cloud Model Studio + Qianwen AI Platform (OpenAI-compatible Chat Completions and Responses APIs; regions include Beijing, Singapore, Hong Kong, Tokyo, Frankfurt, US Virginia); a streaming sibling `qwen3.8-omni-flash-realtime` is served over WebSocket/WebRTC for continuous audio-visual interaction (<1.4 s to first audio packet reported). Proprietary — hosted only, no weights published as of 2026-11-10 (an early review reported Alibaba "plans to open source"; unconfirmed and not reflected in current listings).
- **Release / knowledge:** 2026-09-18 (official launch post; one aggregator listed Sep 14, outlier vs official materials). Knowledge cutoff not disclosed.
- **IDs:** API `qwen3.8-omni-flash` (+ `-realtime`); dataset route `qwen/qwen-3.8-omni-flash`.
- **Context window:** **1,000,000 in / 131,072 max output** — long-form video/audio up to ~2 hours of film input per official demos.
- **Modalities:** text + image + audio + video in; text out. Multichannel/spatial audio supported on the Realtime variant. Speech recognition across 74 languages + 39 Chinese dialects; speech generation 29 languages + 7 dialects (official docs quote 113 audio languages total incl. dialects).
- **Pricing (as of 2026-11-10):** ≈**$0.15 input / $0.47 output per 1M text tokens**, prompt-cache reads $0.016/1M. Audio and audio-visual input carry a premium over text, but per-hour audio input cost dropped >98% vs Qwen3.5-Omni-Plus and audio-visual input >93%.
- **Architecture:** built on the Qwen3.8-Flash-Next architecture (proprietary, no published size); vision encoder + audio-text module feeding a central planning agent; `reasoning_effort` low / medium / **xhigh (default)**; tool calling, web search, and the Qwen-MM-Plugins / Qwen-Live harness layers for Codex, Claude Code, Qwen Code and Gemini CLI.

### Raw benchmarks found

> All numeric rows are **vendor-run** (Qwen's 2026-09-18 launch post: a 32-row audio/audio-visual table vs Qwen3.5-Omni-Plus, Gemini 3.8 Flash, Seed 2.0 Lite and Muse Spark 1.2) as aggregated by BenchLM; BenchLM flags that Qwen ran every system itself with provider-specific media settings, so the comparison is **not independently reproducible**. DataCamp and MindStudio published independent reviews/lab tests (qualitative + vendor-table summaries) — labelled below.

Agent / tool use:

- CoWorkBench **75.3%**; AndroidWorld **87.1%**
- WildClawBench-MM **71.0** (Gemini 3.8 Flash 58.9; Seed 2.0 Lite 41.9; predecessor Qwen3.5-Omni-Plus 34.5 — a +36.5-point jump)
- UniClawBench **69.6** (Gemini 69.0 — effectively tied); StreamingBench **80.8** (Gemini 79.9; predecessor 57.1)
- Gemini still wins: AgenticVBench 36.8 vs 45.0 and OmniGAIA web search 74.0 vs 78.6

Reasoning / knowledge:

- GPQA / GPQA-Diamond **91.0%** (≈ text-only sibling Qwen3.8-Flash-Next's 91.7)
- HLE **36.5%**; IFBench **81.5%** (DeepSeek-V4-Flash-0731: 79.2)

Coding:

- LiveCodeBench v6 **92.6%** (sibling 91.9); SWE-bench Pro **63.3%** (sibling 62.5; DeepSeek-V4-Flash-0731 56.0); SWE Multilingual **80.5%**; DeepSWE **57.8%**; NL2Repo **48.9%** (trails DeepSeek-V4-Flash's 54.2)

Multimodal (audio is the headline):

- **Speech/meetings:** AliMeeting DER **3.4** / cpWER **17.2** (predecessor ~88 DER / ~90 cpWER per DataCamp's summary; Gemini 3.8 Flash cited at 72.6 DER); AISHELL-4 DER **2.8** (Gemini 66.4); VoiceBench **91.6**
- **Music:** MuchoMusic-RUL **72.6** (Gemini 53.7); MusTBench **50.6** (Gemini 40.3)
- **Video:** OmniVideoBench **63.4** static / **67.8** agent-harness (Gemini static 65.2) — agent mode cut token use 145,736 → 79,117 per query (−45.7%); JointAVBench **75.9** (Gemini 70.4); LVOmniBench 63.3 static but 73.6 with harness (Gemini 70.7); Video-MME-v2 65.0 static (Gemini leads 71.0)
- **Image/vision:** MathVision **91.8%** (w/ Python 96.2%); CharXiv **91.4%** (w/o tools 83.5%); RealWorldQA **87.7%**; LVBench 76.9%; ERQA 71.0%; Vision2Web 62.9%
- OmniCap-IF controllable captioning: CSR +8.5 / ISR +14.1 points vs predecessor
- Independent lab notes (MindStudio, 2026-09-18): accurate video/cultural detail, good separation of unrelated inputs, targeted reasoning traces — but final answers sometimes smoothed over uncertainty (described audio it inferred from frames), and multilingual translation showed errors in specific target languages; DataCamp notes a small multilingual regression vs the Qwen3.7 generation

Long context:

- 1M tokens supported with claimed "text performance comparable to a text-only model of the same size"; no MRCR/RULER retrieval rows published
- Agentic long-video mode works coarse-to-fine from the question → 45.7% token cut (above)

Composite:

- BenchLM: 19 source-displayable rows, **no public overall score** (unranked for now); the folder-level average comes from per-file normalized scores like this one

### Normalized scores (1–100)

- **Tool use: 85/100.** Best-in-class multimodal agent rows (WildClawBench-MM 71.0 vs Gemini's 58.9; AndroidWorld 87.1; CoWorkBench 75.3; StreamingBench 80.8) with a real harness/plugin ecosystem — but not a clean sweep (loses AgenticVBench and OmniGAIA to Gemini) and everything is vendor-run; Claude Code harness instability reported by early users.
- **Reasoning: 82/100.** GPQA-D 91.0% is near the measured frontier for a Flash-tier omni model and HLE 36.5% is mid-high; hard video reasoning is mixed vs Gemini (Video-MME-v2 65.0 vs 71.0 static, though agent mode flips other rows).
- **Context window: 92/100.** 1M in / 131K out, exercised on multi-hour video with an agentic mode that cuts tokens ~46% per query; no published retrieval-depth rows.
- **Multimodal: 92/100.** True native omni input with the strongest measured audio profile in the Flash field (meeting DER 3.4 / cpWER 17.2, VoiceBench 91.6, music understanding leads, 74 languages + 39 dialects); vision rows beat 90% on math/chart tasks; video trades blows with Gemini and output is text-only.
- **Coding: 84/100.** LiveCodeBench v6 92.6% and SWE Multilingual 80.5% rival text-only siblings; SWE-bench Pro 63.3% beats DeepSeek-V4-Flash-0731; NL2Repo 48.9% trails it; vendor-run only.
- **Cost efficiency: 90/100.** ≈$0.15/$0.47 per 1M text with $0.016 cached reads — cheapest text pricing among Flash rivals per DataCamp — and 93–98% audio/AV input cost cuts vs its predecessor, though audio/AV still carry a text premium.
- **Overall Score: 87/100.** (85 + 82 + 92 + 92 + 84) / 5 = 87.0 → 87. Best fit: high-volume audio-video agent workflows — meeting intelligence, dubbing/localization, film commentary and MV pipelines — where one omnimodal Flash model replaces a stitch-together stack.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-11
- Method: public internet research (official Qwen launch post via BenchLM aggregation, Alibaba Cloud Model Studio docs, BenchLM voice-evaluation page, DataCamp benchmark review, MindStudio hands-on lab test, LLM-Stats listing). All benchmark rows are vendor-run except the qualitative independent checks, which are labelled as such; no independent numeric harness replication found at check time. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen — Qwen3.8-Omni-Flash launch post](https://qwen.ai/blog?id=qwen3.8-omni-flash)
  - [BenchLM — Qwen3.8-Omni-Flash benchmarks](https://benchlm.ai/models/qwen3-8-omni-flash)
  - [BenchLM — omni/voice evaluation (32-row audio table)](https://benchlm.ai/voice-benchmarks/qwen3-8-omni-flash-evaluation)
  - [DataCamp — Qwen3.8-Omni-Flash: Features and Benchmarks](https://www.datacamp.com/blog/qwen3-8-omni-flash)
  - [MindStudio — Qwen3-Omni Flash tested hands-on](https://www.mindstudio.ai/blog/qwen3-8-omni-flash-multimodal-test)
  - [Alibaba Cloud Model Studio — qwen3.8-omni-flash docs](https://www.alibabacloud.com/help/en/model-studio/qwen3-8-omni-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
