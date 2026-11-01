# Qwen 3.7 Flash — findings by GLM 5.3 Flash

- Source: Alibaba Qwen (`qwen/qwen3.7-flash`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Flash (dated snapshot `qwen3.7-flash-2026-07-15` also served)
- **Short description:** The low-cost, fast tier of Alibaba's Qwen3.7 native vision-language family: 1M-token context, image/video input, default-on reasoning with a 262K thinking budget, web search and function calling — priced for high-volume multimodal agent workloads.
- **Provider / access:** Alibaba Cloud Model Studio (DashScope); OpenRouter; OpenCode Zen `opencode/qwen-3.7-flash` (OpenAI-compatible chat completions).
- **Release / knowledge:** July 2026 (snapshot dated 2026-07-15; catalog listing 2026-07-27). Knowledge cutoff not published.
- **IDs:** `qwen/qwen3.7-flash` (Alibaba/OpenRouter); `opencode/qwen-3.7-flash` (Zen). No Free ID on Zen.
- **Context window:** 1,000,000 tokens (max input 991,808; thinking-mode input 983,616); max output 131,072; max chain-of-thought 262,144 (Model Studio spec table).
- **Modalities:** Text, image, video in; text out. Reasoning enabled by default (thinking budget 262K); function calling, structured outputs, web search, prefix completion, context caching.
- **Pricing (as of 2026-11-01):** Tiered by prompt length — $0.03/$0.13 per 1M in/out for ≤32K input, rising to $0.20/$0.80 above 256K; explicit cache read $0.006. Blended ~$0.055 per 1M (3:1) — among the cheapest hosted tiers tracked.
- **Architecture:** Proprietary MoE (hybrid linear attention per the 3.x Flash series design); parameters not disclosed. Vendor published **no benchmark scores** at launch.

### Raw benchmarks found

(Flash-specific verified figures only; aggregator columns that mix in Qwen3.7-Max rows are excluded)

Reasoning / knowledge:

- AIME 2025: **86.7%** (Epoch AI Capabilities Index tracking)
- GPQA Diamond: **82.3%** (Epoch AI tracking)
- HLE, MMLU-Pro: no verified public score found (unreported for this SKU)

Agent / tool use:

- No Terminal-Bench/SWE-bench/agentic row verified for the Flash SKU (the low published figures circulating under this name in some comparison tables trace to Qwen3.7-Max runs)
- Vendor-positioned agent upgrades over Qwen3.6-Flash (Search Agent, CI Agent, end-to-end task execution) — no published measurements

Coding:

- No verified public score found (no Flash-specific SWE-bench/LiveCodeBench/Terminal-Bench row)

Vision / multimodal:

- Roboflow independent vision evaluation: **object identification 84.4%** (strong) but **weak OCR and object detection** — fits classification/visual-agent work better than document-heavy pipelines
- MMMU-Pro: no verified public score found

Serving / long context:

- Latency p50 **0.64 s**, throughput p50 **65 tok/s** (OpenRouter-measured; LLMcompare lists 140 tok/s / 0.25 s TTFT on its probe) — fast tier confirmed
- No long-context retrieval benchmark published despite the 1M window

### Normalized scores (1–100)

- **Tool use: 55/100.** Function calling, web search and agent-execution positioning are verified capabilities, but no agentic benchmark row exists for this SKU — scored on capability surface, not measured peaks.
- **Reasoning: 76/100.** AIME 86.7 and GPQA-D 82.3 (Epoch-tracked) put it at the strong-open tier; the absence of any HLE/MMLU-Pro publication caps verification.
- **Context window: 86/100.** Verified 1M-token window with a 262K thinking budget and 131K output; no retrieval benchmark published to prove the top end.
- **Multimodal: 68/100.** Native text/image/video input with strong measured object identification (84.4) but weak OCR/detection per the only independent vision audit found.
- **Coding: 55/100.** "Multimodal coding optimized" is the vendor claim; no Flash-specific coding benchmark was verifiable — scored on capability surface.
- **Cost efficiency: 98/100.** $0.03/$0.13 per 1M (≤32K input), cache $0.006 — effectively the price floor of the tracked hosted tier; even the >256K band ($0.20/$0.80) undercuts most peers' base rate.
- **Overall Score: 68/100.** Mean of the five quality dims (55+76+86+68+55)/5 = 68.0 → 68. Best fit: massive-volume multimodal and search-agent workloads where the 1M window and cent-level pricing matter more than benchmark peaks.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-01
- Method: Public internet research (Alibaba Cloud Model Studio spec tables, Epoch AI-tracked figures, independent vision audit, serving measurements); scores are normalized 1–100 interpretations, not official vendor scores. Figures contaminated with Qwen3.7-Max rows in third-party tables were excluded.
- Reference URLs:
  - [Alibaba Cloud Model Studio — qwen3.7-flash spec table (context limits, modalities)](https://docs.modelstudio.console.alibabacloud.com/en/model-studio/qwen3-7-flash)
  - [Puter developer docs — Qwen3.7 Flash capabilities, snapshot IDs, pricing tiers](https://developer.puter.com/ai/qwen/)
  - [TheModelBeat — Qwen3.7 Flash (Epoch AI: AIME 86.7, GPQA-D 82.3)](https://themodelbeat.com/models/qwen3-7-flash)
  - [AnotherWrapper — Qwen3.7 Flash vs Max (pricing tiers; benchmark column treated as Max-contaminated)](https://anotherwrapper.com/tools/llm-pricing/qwen3.7-flash/qwen3.7-max)
  - [OpenRouter — Gemini 3.7 Flash vs Qwen3.7 Flash (serving measurements)](https://openrouter.ai/compare/google/gemini-3.7-flash/qwen/qwen3.7-flash)
  - [LLMcompare — Qwen3.7 Flash ("no public quality scorecard yet", specs)](https://llmcompare-drab.vercel.app/models/qwen3-7-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
