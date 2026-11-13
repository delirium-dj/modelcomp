# Qwen3.8-Omni-Flash — findings by GPT 6 Astra

- Source: Alibaba / Qwen `qwen3.8-omni-flash`
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Omni-Flash
- **Short description:** Alibaba's API-only multimodal reasoning model for analysis and tool-driven audio/video workflows. This report covers the text-output HTTP model; the distinct Realtime voice variant's speech generation and latency are not attributed to it.
- **Provider / access:** Alibaba Cloud Model Studio, region/workspace-specific OpenAI-compatible Chat Completions and Responses APIs. [Official Qwen-Omni documentation](https://www.alibabacloud.com/help/en/model-studio/qwen-omni), updated 2026-11-12.
- **Release / knowledge:** 2026-09-18 launch, corroborated by [DataCamp's release coverage](https://www.datacamp.com/blog/qwen3-8-omni-flash) and [BenchmarkList's source-linked record](https://benchmarklist.com/models/qwen-qwen3.8-omni-flash/). Knowledge cutoff not verified.
- **IDs:** `qwen3.8-omni-flash`; no Zen Free ID verified. Do not substitute `qwen3.8-flash-next` or `qwen3.8-omni-flash-realtime`.
- **Context window:** **1M tokens**, explicitly documented by Alibaba; separate maximum output not verified. The live documentation permits up to **3 hours of audio** or **2 hours of video**, subject to file and token limits.
- **Modalities:** Text, image, audio and video input; **text output only**. Thinking, function calling and web search are documented. Native speech/video generation is not a capability of this HTTP route.
- **Pricing (as of 2026-11-13):** Secondary source-linked listings report approximately **$0.15 input / $0.47 output per 1M text tokens**; BenchmarkList also lists **$0.016 cached input**. These are provisional text rates, not a verified all-modality tariff; audio/video billing differs and the official guide directs current pricing checks to the console. [Pricing claimant](https://benchmarklist.com/models/qwen-qwen3.8-omni-flash/).
- **Architecture:** API-only; exact parameter count and weight license not verified. No architecture of a similarly named text model is assumed.

### Raw benchmarks found

The official [launch URL](https://qwen.ai/blog?id=qwen3.8-omni-flash) returned no readable body in this run. The following are **Qwen-reported launch measurements transcribed by secondary sources**, not independent reproductions. [DataCamp](https://www.datacamp.com/blog/qwen3-8-omni-flash) and [BenchmarkList](https://benchmarklist.com/models/qwen-qwen3.8-omni-flash/) agree on the shared GPQA, SWE-Pro, LiveCodeBench, OmniGAIA and AgenticVBench figures. Harness details are limited, so confidence is lower than for a directly readable model card.

Agent / tool use:

- WildClawBench-MM: **71.0%**, vendor multimodal-agent evaluation, as transcribed by DataCamp; not Claw-Eval.
- OmniGAIA: **74.0%**; AgenticVBench: **36.8%**, both vendor launch figures reproduced by the two sources.
- ClawEval-MM: **60.4%**, BenchmarkList's source-labelled record; not a general Claw-Eval result.
- Terminal-Bench 2.1, Tau3-Banking/Tau2-Bench, GDPval-AA, ClawProBench, Toolathon/MCP-Atlas/SWE Atlas Codebase QnA: no verified public score found in the consulted sources.

Reasoning / knowledge:

- GPQA Diamond: **91.0%**, vendor launch figure, reproduced by both sources.
- HLE: **36.5%**, BenchmarkList record; tool configuration is not established by the fetched record, so no no-tools/with-tools label is inferred.
- LCR/MLCR, CritPt, Artificial Analysis Intelligence Index, and Omniscience accuracy/hallucination rate: no verified public score found.

Coding:

- SWE-bench Pro: **63.3%**; LiveCodeBench **v6: 92.6%**, reproduced by both sources, exact-model labels.
- NL2Repo: **48.9%**, vendor launch result reproduced by both sources.
- SWE-bench Verified, SciCode and Vibe Code Bench: no verified public score found in the consulted sources.

Long context:

- Official **1M-token** limit; no verified MRCR/RULER/GraphWalks retrieval result.
- OmniVideoBench: **63.4% static / 67.8% with the Qwen Code agent harness**, as reported by DataCamp. These measure video understanding, not full-window text retrieval.

Additional multimodal evidence:

- Video-MME-v2: **65.0% static**; JointAVBench: **75.9%**, vendor launch results reproduced by DataCamp.
- AliMeeting diarization error rate: **3.4%**; AISHELL-4 diarization error rate: **2.8%**, lower is better, reproduced by DataCamp. These are not word-error rates or general reasoning scores.

### Normalized scores (1–100)

- **Tool use: 84/100.** OmniGAIA 74.0% and WildClawBench-MM 71.0% support useful multimodal agents; AgenticVBench 36.8% and secondary-source harness uncertainty cap the score.
- **Reasoning: 89/100.** GPQA 91.0% and HLE 36.5% support strong reasoning, but the HLE configuration and independent broad-index evidence remain unresolved.
- **Context window: 95/100.** Alibaba verifies 1M capacity; no measured full-window retrieval result warrants 100.
- **Multimodal: 93/100.** Official audio/video/image inputs plus audio-visual evaluations support broad perception; this route has only text output and all cited quality measurements are vendor-originated.
- **Coding: 86/100.** LiveCodeBench v6 92.6% and SWE-Pro 63.3% support coding use; NL2Repo 48.9%, version sensitivity and incomplete harness details limit the rating.
- **Cost efficiency: 96/100.** The reported $0.15/$0.47 text tariff is inexpensive; this provisional rating is capped by unverified current primary pricing and higher media-input charges.
- **Overall Score: 89/100.** Half-up mean: (84 + 89 + 95 + 93 + 86) / 5 = 89.4 → 89. Best fit is multimodal analysis and tool-driven media workflows; cost is excluded.

---

## Signature

- Provided by: **GPT 6 Astra (agentrouter/gpt-6-astra)** — 2026-11-13
- Method: Fresh public search, live Alibaba API documentation, and cross-checking exact-model vendor benchmark transcriptions in two secondary sources. Direct launch-page extraction was unavailable and is not represented as a primary benchmark verification. No peer findings were used. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Alibaba Cloud: Qwen-Omni specifications and API](https://www.alibabacloud.com/help/en/model-studio/qwen-omni)
  - [Qwen: official launch URL](https://qwen.ai/blog?id=qwen3.8-omni-flash)
  - [DataCamp: launch benchmark transcription](https://www.datacamp.com/blog/qwen3-8-omni-flash)
  - [BenchmarkList: source-linked exact-model results and pricing](https://benchmarklist.com/models/qwen-qwen3.8-omni-flash/)
- Future sources: add a separate signed findings file using the same headings.
