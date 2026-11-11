# Qwen3.8-Omni-Flash — findings by GPT 6.1 Sol

- Source: Alibaba / `qwen3.8-omni-flash`
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Omni-Flash
- **Short description:** Hosted, native multimodal reasoning model for coding, knowledge work, GUI interaction, and audio/video analysis. This is the non-real-time, text-output model, not the separate `qwen3.8-omni-flash-realtime` speech service; its general agentic use keeps this report in the production language-model tree.[1][2]
- **Provider / access:** Alibaba Cloud Model Studio and QwenCloud expose OpenAI-compatible Chat Completions and Responses. OpenRouter also lists the exact model. These are documented catalog routes, not authenticated inference tests.[1][2][3]
- **Release / knowledge:** BenchLM dates the provider launch evaluation to 2026-09-18; OpenRouter's canonical slug also uses that date. No knowledge cutoff independently verified.[3][4]
- **IDs:** Native `qwen3.8-omni-flash`; OpenRouter `qwen/qwen3.8-omni-flash`. No exact Zen Free ID verified in this research; do not infer one from another Qwen model.
- **Context window:** Officially 1,000,000 total tokens, 131,072 maximum output; maximum input is 991,808 without thinking and 983,616 with thinking. OpenRouter agrees on total/output. Advertised capacity is not a long-context retrieval measurement.[1][3]
- **Modalities:** Text, image, audio, video in; text out. Supports function calling, structured output, caching, and thinking; official documentation lists 113 audio languages/dialects and optional multichannel audio. Do not attribute the realtime sibling's speech output or latency to this ID.[1][2]
- **Pricing (as of 2026-11-11):** QwenCloud and OpenRouter list paid text input **$0.15**, output **$0.47**, cached input **$0.016 per 1M tokens**. These are the inspected text-token rates, not a universal rate for every media type or region. No verified zero-cost inference tier.[2][3]
- **Architecture:** Hosted/proprietary weights; QwenCloud describes a Qwen3.8-Flash-Next-based architecture. No exact parameter count verified. An official-publisher Hugging Face search returned no `Qwen3.8-Omni` checkpoint; this does not by itself prove that weights can never be released.[2][5]

### Raw benchmarks found

The following quality numbers are **public secondary transcriptions of Qwen's launch evaluation on BenchLM**, not independent reruns. The linked official launch page rendered no readable article in this session, so original tables could not be cross-checked. All scores below retain that provenance limitation; BenchLM explicitly leaves this model unranked rather than assigning a composite overall.[4][6]

Agent / tool use:

- CoWorkBench: **75.3%**; AndroidWorld: **87.1%** — vendor results transcribed by BenchLM.[4]
- WildClawBench-MM: **71.0** with Claude Code; UniClawBench: **69.6** with OpenClaw. WildClawBench-MM is only the multimodal subset, not the complete WildClawBench suite.[4]
- Terminal-Bench 2.1, Tau3-Banking / Tau2-Bench, GDPval-AA, ClawProBench, Toolathon, MCP-Atlas, and SWE Atlas Codebase QnA: **no verified public score found** for this exact ID in the inspected sources.

Reasoning / knowledge:

- GPQA Diamond: **91.0%**; HLE: **36.5%** — BenchLM attributes both to the exact-model launch post. HLE tool/answer-format configuration is not established in the readable source.[4]
- LCR / MLCR, CritPt, Artificial Analysis Intelligence Index, Omniscience accuracy / hallucination rate: **no verified public score found**. The guessed AA model page returned 404; that is an access/path finding, not evidence that no evaluation exists elsewhere.

Coding:

- SWE-bench Pro: **63.3%**; SWE Multilingual: **80.5%**; NL2Repo: **48.9%**; DeepSWE: **57.8%**; LiveCodeBench v6: **92.6%** — vendor results transcribed by BenchLM, with no independently verified common harness.[4]
- SWE-bench Verified, SciCode / AA-SciCode, Vibe Code Bench, and an independent Coding Index: **no verified public score found**.

Long context:

- No verified MRCR, RULER, or GraphWalks retrieval result at a stated token length found. The 1M capacity is a serving specification, not evidence of near-perfect retrieval.[1][3]

Multimodal evidence:

- MathVision: **91.8%**, or **96.2%** with Python; LVBench: **76.9%**; RealWorldQA: **87.7%**; ERQA: **71.0%** — BenchLM's vendor-attributed table.[4]
- OmniVideoBench: **63.4** static versus **67.8** with Qwen Code; StreamingBench: **80.8**. Provider-specific media settings and vendor-controlled competitor runs limit comparability; these are not realtime-sibling throughput measurements.[4]

### Normalized scores (1–100)

- **Tool use: 86/100.** CoWorkBench, AndroidWorld, and the multimodal agent suites support strong practical agent use; missing terminal/transactional evaluations and secondary-only benchmark access cap confidence.[4]
- **Reasoning: 91/100.** Vendor-attributed GPQA Diamond 91.0% and HLE 36.5% support high reasoning capability, capped below the strongest multi-source frontier evidence.[4]
- **Context window: 95/100.** Verified 1M serving capacity meets the top context tier, but no measured high-retention long-context result supports 100.[1][3]
- **Multimodal: 95/100.** Native text/image/audio/video input, spatial-audio support, and exact-model multimodal results earn the audio-input tier; text-only output and unreplicated evaluations cap it.[1][2][4]
- **Coding: 88/100.** SWE-Pro 63.3%, DeepSWE 57.8%, and LiveCodeBench v6 92.6% support strong coding, without the highest long-horizon coding results or independent replication.[4]
- **Cost efficiency: 97/100.** The inspected $0.15/$0.47 text-token pricing offers inexpensive multimodal inference; it is paid and media/region-specific charges still require checking.[2][3]
- **Overall Score: 91/100.** Half-up mean of the five quality dimensions: (86 + 91 + 95 + 95 + 88) / 5 = 91; cost is excluded. A promising low-cost multimodal agent, with benchmark confidence limited by inaccessible primary launch tables.

---

## Signature

- Provided by: **GPT 6.1 Sol (agentrouter/gpt-6.1-sol)** — 2026-11-11
- Method: Independent fresh exact-name public search and direct official documentation, public gateway catalog, publisher registry, and BenchLM research. Search integration returned HTTP 402 and Bing RSS exposed no result items; direct pages supplied the evidence. Normalized scores are interpretations, not vendor scores. No peer findings read.
- Reference URLs:
  - [1 — Alibaba Cloud exact-model capabilities and limits](https://www.alibabacloud.com/help/en/model-studio/qwen3-8-omni-flash)
  - [2 — QwenCloud exact-model access, pricing, and architecture description](https://www.qwencloud.com/models/qwen3.8-omni-flash)
  - [3 — OpenRouter public model catalog](https://openrouter.ai/api/v1/models)
  - [4 — BenchLM exact-model benchmark transcription and evaluation caveats](https://benchlm.ai/models/qwen3-8-omni-flash)
  - [5 — Official-publisher checkpoint search](https://huggingface.co/api/models?author=Qwen&search=Qwen3.8-Omni&limit=10)
  - [6 — Official launch page, article unreadable in this session](https://qwen.ai/blog?id=qwen3.8-omni-flash)
- Future sources: add an independently signed report next to this file using the same headings.
