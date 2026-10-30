# Qwen3.8 Max — findings by GPT 5.6 Luna

- Source: Alibaba / Qwen3.8 Max
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Max
- **Short description:** Alibaba's Max-class Qwen model for autonomous coding, professional work, long-horizon execution, and multimodal agents. This report covers the exact `qwen3.8-max` API ID, not the separately named `qwen3.8-max-0902` snapshot.
- **Provider / access:** QwenCloud / Alibaba Cloud Model Studio with OpenAI-compatible Chat Completions and Responses APIs and an Anthropic-compatible interface. The exact API model ID is `qwen3.8-max`; function calling, structured output, reasoning effort, and context caching are documented.
- **Release / knowledge:** 2026-08-03 launch; knowledge cutoff not disclosed. Alibaba later published a `qwen3.8-max-0902` post-training snapshot; third-party measurements of that snapshot are kept separate below.
- **IDs:** `qwen3.8-max` (QwenCloud/Model Studio); the `-0902` snapshot alias is not silently merged into this base-ID report.
- **Context window:** 1,000,000 total tokens; the Model Studio page lists 991,808 maximum input, 131,072 maximum output, 983,616 maximum input in thinking mode, and 262,144 maximum chain-of-thought length.
- **Modalities:** Text, image, and video input; text output; reasoning mode; function calling, structured outputs, web search where the region supports it, and context caching.
- **Pricing (as of 2026-10-30):** International/Singapore and US standard route: $2 per 1M input tokens and $6 per 1M output tokens, with $0.25 per 1M implicit-cache input. Several Alibaba regions list $1.65/$4.951 with $0.206 cache hits; pricing and web-search availability are region-dependent. No free ID was verified.
- **Architecture:** Alibaba describes a 2.4T-parameter sparse MoE with approximately 95B active parameters. The launch announced a first Max-class open-weight release; BenchLM labels the base as open weight and links the Qwen HF model card, but the final license/serving parity should be checked before self-hosting.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** and OSWorld-Verified: **86.1%** (Qwen's published comparison table, independently transcribed by DataCamp and BenchLM).
- CoWorkBench: **74.8%**, JobBench: **53.4%**, and Toolathlon-Verified: **72.5%** (Qwen table as transcribed by BenchLM).
- Independent Vals Terminal-Bench 2.1 result: **67.4%** (BenchLM links the Vals model result; materially below the vendor-harness 86.6%).
- BenchLM aggregate: **64.86/100**, rank **#33/1004**, with 67 benchmarks covered (partial coverage; not a replacement for the individual scores).

Reasoning / knowledge:

- GPQA Diamond: **92.6%**, Humanity's Last Exam: **43.6%**, and MRCRv2: **92.9%** (Qwen published table as transcribed by BenchLM/DataCamp).
- LongBench v2: **66.3%** and HLE with tools: **56.2%** (BenchLM's exact-model benchmark entries).
- Independent Vals GPQA Diamond: **93.7%** (BenchLM's linked Vals result).

Coding:

- SWE-bench Pro: **67.7%**, DeepSWE 1.1: **56.6%**, FrontierSWE: **73.5%**, and PaperBench: **93.0%** (Qwen comparison table as transcribed by DataCamp/BenchLM).
- LiveCodeBench (Vals): **87.9%** and SWE-bench (Vals): **85.6%** (BenchLM's independent leaderboard-linked entries; these are not directly comparable to the vendor's SWE-Pro figure).
- QwenReactBench: **1,724** (Qwen comparison table, as transcribed by DataCamp).

Long context:

- MRCRv2: **92.9%** and LongBench v2: **66.3%** (BenchLM; exact model, but the public rows do not state a full 1M-token retrieval curve).
- Declared window: **1,000,000 tokens** (Alibaba Model Studio).

Multimodal:

- MMMU-Pro: **82.3%**, MathVision: **95.2%**, VideoMMMU: **88.7%**, and LVBench: **81.8%** (Qwen comparison table as transcribed by BenchLM/DataCamp).
- Alibaba's Model Studio documentation independently lists image and video input, text output, and region-specific function/web-search support.

Version conflict:

- Artificial Analysis's current page is explicitly for **Qwen3.8 Max (0902)** and reports Intelligence Index **34**, 984K effective context, and $2/$6 pricing. That is a later snapshot, not evidence that the base `qwen3.8-max` benchmark table scores 34; the two IDs/snapshots are kept separate.

### Normalized scores (1–100)

- **Tool use: 89/100.** Vendor Terminal-Bench 2.1 at 86.6%, OSWorld-Verified at 86.1%, CoWorkBench 74.8%, and Toolathlon 72.5% show strong execution; the independent Vals Terminal-Bench 67.4% and partial aggregate coverage cap confidence.
- **Reasoning: 89/100.** GPQA Diamond 92.6%, HLE 43.6%, MRCRv2 92.9%, and independent Vals GPQA 93.7% support a frontier-level reasoning score, while the 43.6% HLE result and the later 0902 AA Index 34 prevent a maximum.
- **Context window: 98/100.** Alibaba documents a 1M total window with 991,808 input and 131,072 output limits, and MRCRv2 is strong; no full-window retrieval curve was published, so this remains just below 100.
- **Multimodal: 92/100.** Image and video input are documented, and MMMU-Pro, MathVision, VideoMMMU, and LVBench are strong; output remains text-only and no audio support was verified.
- **Coding: 88/100.** Terminal-Bench 86.6%, PaperBench 93.0%, FrontierSWE 73.5%, and independent LiveCodeBench 87.9% are strong, but SWE-Pro 67.7%, DeepSWE 56.6%, and the mixed Vals/official harnesses cap the score.
- **Cost efficiency: 90/100.** $2/$6 pricing with $0.25 cache hits is low for a 1M-context multimodal agent, though regional variation and the absence of a free route prevent a near-perfect score.
- **Overall Score: 91/100.** Half-up mean of the five quality dimensions `(89 + 89 + 98 + 92 + 88) / 5 = 91.2 → 91`; especially attractive for computer-use, research reproduction, and long-horizon multimodal workflows.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-30
- Method: Three independent search tracks (Alibaba/Qwen official launch and API documentation, Artificial Analysis snapshot data, and independent DataCamp/BenchLM/Vals reporting), with the base ID and `-0902` snapshot kept separate and conflicting harness results shown; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
