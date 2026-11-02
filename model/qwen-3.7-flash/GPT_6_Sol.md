# Qwen3.7 Flash — findings by GPT 6 Sol

- Source: Alibaba Cloud Model Studio (`qwen3.7-flash-2026-07-15`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7 Flash.
- **Short description:** Alibaba's proprietary Flash-tier native vision-language reasoning model for low-cost image/video analysis, text agents and coding. This report pins **`qwen3.7-flash-2026-07-15`**; `qwen3.7-flash` currently points to that snapshot but remains a mutable alias. Do not borrow Qwen3.7 Plus/Max evaluations ([official specification](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-flash), [pricing](https://www.alibabacloud.com/help/en/model-studio/model-pricing)).
- **Provider / access:** Alibaba Cloud Model Studio via DashScope OpenAI-compatible Chat Completions (region-dependent API base); Vercel AI Gateway `alibaba/qwen3.7-flash` and other gateways have provider-specific terms. No public weights or verified unconditional OpenCode Zen Free endpoint ([official spec](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-flash), [Vercel listing](https://vercel.com/ai-gateway/models/qwen3.7-flash/status)).
- **Release / knowledge:** Snapshot labeled **2026-07-15**, public gateway listings late July 2026; date of named snapshot is not evidence of a distinct July 28 training revision. Training cutoff/parameter count not disclosed ([Alibaba snapshot section](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-flash)).
- **IDs:** Fixed `qwen3.7-flash-2026-07-15`; alias `qwen3.7-flash`; Vercel `alibaba/qwen3.7-flash`, whose routed version should be confirmed before comparing exact-checkpoint benchmarks ([Alibaba](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-flash)).
- **Context window:** **1,000,000** tokens combined; at most **991,808 input** (thinking input cap **983,616**) and **131,072 output** subject to the combined cap. Some batch pathways cap at 256K and hosts may advertise ~991K; do not assume every endpoint offers full-window access ([official limits](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-flash), [batch limits](https://www.alibabacloud.com/help/en/model-studio/batch-inference)).
- **Modalities:** Text/image/video input and text output; tools, structured outputs and reasoning. Video support is visual understanding, **not audio understanding**; web-search built-in differs by region and native tool calls require host support ([Alibaba model page](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-flash), [visual model matrix](https://www.alibabacloud.com/help/en/model-studio/vision-model)).
- **Pricing (as of 2026-11-02):** Official Singapore International tariff per million input/output: **$0.03/$0.13 for input ≤32K**, **$0.10/$0.40 for 32K–256K**, and **$0.20/$0.80 above 256K**; implicit cache read at these tiers **$0.006/$0.02/$0.04**. Global routing starts **$0.028/$0.11** and rises to **$0.165/$0.66**. These are whole-request context tiers, not one flat $0.03/$0.13 1M rate; region and explicit cache pricing differ ([Alibaba rates](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-flash)).
- **Architecture:** Proprietary; no verified parameter count or weight-license grant. Do not infer from open-weight Qwen siblings ([official model page](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-flash)).

### Raw benchmarks found

- **Agent / tool use:** Function calls and region-specific built-in search are documented, but no independent exact-snapshot τ³, Terminal-Bench or MCP-Atlas task-success result was located ([official capabilities](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-flash), [coverage inventory](https://llmbenchmark.ai/models/qwen3-7-flash)). Do not treat low API price as evidence of agent success.
- **Reasoning / knowledge:** Independent-source inventory [Epoch AI GPQA Diamond **82.3%**, OTIS Mock AIME **86.7%**, FrontierMath v2 tiers 1–3 **19.3%**](https://llmbenchmark.ai/models/qwen3-7-flash), with a separately listed no-reasoning GPQA **80.8%**. These results do not establish a comparable AA v5 Intelligence Index, which is unavailable in that inventory; effort settings matter.
- **Coding:** No reliably verified independent exact-Flash SWE-bench or LiveCodeBench result located. Some search snippets attributing **80.4 SWE-bench** or **87.7 LiveCodeBench** to Flash conflict with source-labeled [Qwen3.7 Max](https://benchlm.ai/compare/qwen3-7-flash-vs-qwen3-7-max) and must not be transferred. The coverage inventory marks coding index unbenchmarked ([inventory](https://llmbenchmark.ai/models/qwen3-7-flash)).
- **Vision / long context:** Official input support includes video up to **two hours / 2GB** according to the [visual model matrix](https://www.alibabacloud.com/help/en/model-studio/vision-model); no pinned-snapshot independent MMMU-Pro, Video-MME or 1M-token retrieval score established. Advertised capacity is not measured comprehension at the far end.

### Normalized scores (1–100)

- **Tool use: 57/100.** Tools and search supported, no verified exact-snapshot agent benchmark.
- **Reasoning: 74/100.** Independent-source GPQA/AIME solid, FrontierMath moderate; sparse coverage.
- **Context window: 77/100.** 1M advertised, but tier/host constraints and missing retrieval validation.
- **Multimodal: 63/100.** Image/video visual input with no independent exact-Flash visual benchmark; text-only output.
- **Coding: 51/100.** No sound Flash-specific coding measurement; explicitly provisional rather than borrowing Max.
- **Cost efficiency: 87/100.** Very cheap for short requests and caching; long-context tier increases sharply.
- **Overall Score: 64/100.** Half-up mean (57 + 74 + 77 + 63 + 51) / 5 = 64.4; attractive multimodal/long-text value, with coding/agent claims still unmeasured.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-02 UTC
- Method: At least three successful vendor capabilities/pricing, independent exact-model benchmark coverage and Max/Flash identity searches; fixed snapshot, reasoning effort and region tiers distinguished. Scores are normalized interpretations.
- Reference URLs:
  - [Alibaba Qwen3.7 Flash snapshot, capabilities and tiered rates](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-flash)
  - [Alibaba video and regional tool matrix](https://www.alibabacloud.com/help/en/model-studio/vision-model)
  - [Independent-source benchmark coverage and missing coding evaluations](https://llmbenchmark.ai/models/qwen3-7-flash)
  - [Qwen3.7 Max comparison demonstrating identity risk](https://benchlm.ai/compare/qwen3-7-flash-vs-qwen3-7-max)
- Future sources: add a new file next to this one using the same headings.
