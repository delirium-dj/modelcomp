# GLM-4.6V-Flash — Research findings

- **Source**: Z.ai / Zhipu AI — Hugging Face `zai-org/GLM-4.6V-Flash` (official card); Z.AI developer docs; independent measurements via Models.dev and llm-bench.io
- **Researched by**: MiniMax M3.1 Flash — 2026-11-03 (UTC)

## Model card

- **Name**: GLM-4.6V-Flash (`zai-org/GLM-4.6V-Flash`; API ids `glm-4.6v-flash`, `glm-4-6v-flash`, `z-ai/glm-4.6v-flash`)
- **Short description**: the 9B "Flash" member of Z.ai's GLM-4.6V multimodal family (the sibling GLM-4.6V is 106B) — an open-weight, natively multimodal reasoning model optimised for local deployment and low-latency use, and the first GLM-V generation with **native multimodal function calling** (images, screenshots and document pages can be passed directly as tool arguments).
- **Provider / access**: Hugging Face (open weights), Z.AI Open Platform (`docs.z.ai/guides/vlm/glm-4.6v`), online demo at chat.z.ai. Models.dev tracks **7 providers**: Zhipu AI, Z.AI, Tempr Gateway and EmpirioLabs all serve it, ZenMux serves both a free alias (`z-ai/glm-4.6v-flash-free`) and a paid alias, and Hugging Face Inference serves `zai-org/GLM-4.6V-Flash`.
- **Release date**: **2025-12-08** (blog + model card release; models.dev "Release 2025-12-08", "Updated 2025-12-08").
- **Architecture**: GLM-V family (see paper arXiv:2507.01006, "GLM-4.5V and GLM-4.1V-Thinking"); 9B dense variant; served with vLLM (text) and SGLang (video tasks) — recommended decoding: `top_p 0.6`, `top_k 2`, `temperature 0.8`, `repetition_penalty 1.1`, `max_generate_tokens 16K`.
- **Context window**: **128,000** tokens (128K in training; the docs state it can process up to 128K tokens of multi-document / long-document input rendered as images). Output limit 32,768 (Models.dev); EmpirioLabs lists a 131,072-token context, ZenMux's route advertises 200,000.
- **Modalities**: image + video + text in → text out, **plus interleaved image-text content generation** (text, charts, rendered pages can be produced or retrieved via search tools during generation).
- **Capabilities**: native multimodal function calling, MCP tool invocation (screenshot capture, embedding), full-page object detection/recognition without OCR pre-processing, pixel-accurate HTML/CSS reconstruction from UI screenshots with natural-language visual editing.
- **Vendor-stated limitations** (official card): "Pure text QA capabilities still have significant room for improvement"; the model "may still overthink or even repeat itself" on complex prompts; may restate the answer at the end; perception limits remain on **counting accuracy and identifying specific individuals**.

## Raw benchmarks found

### Vendor (official card / docs)

- Evaluated on **20+ mainstream multimodal benchmarks** (MMBench, MathVista, OCRBench named) — *"SOTA performance among open-source models of comparable scale in key capabilities such as multimodal interaction, logical reasoning, and long-context understanding"* (the per-model numbers ship as an image chart, so no text-verifiable cell values for the Flash variant).
- Vendor comparison baseline: **GLM-4.6V (106B)** is the high-performance tier; **GLM-4.6V-Flash (9B)** is the local / low-latency tier.

### Independent measurements

- **llm-bench.io** (community runs, LM Studio, 4 runs across 3 GPUs, data as of August 2026) — LLM-judged quality 0–100:
  - **Overall 36.3** (P5 19.6 / P95 61.0)
  - **Agent Workflow 68.5** (P5 37.5 / P95 84.6)
  - **Code Generation 14.8** (P5 0.9 / P95 39.8)
  - Role Play & Narrative 35.8 (P5 18.2 / P95 63.2)
  - Research & Analysis 26.1 (P5 11.1 / P95 57.6)
  - Throughput: average **23.3 tok/s**, peak **54.5 tok/s** (RTX 4070 Ti SUPER), 20.6 tok/s on Apple M5, 13.2/9.1 tok/s on Radeon 890M; average output 10,742 tokens per run; average runtime 9m 47s; max context exercised only 16,384 tokens.
- **LM Studio community review (YouTube)** — *"GLM 4.6V Flash looks like an appealing local VLM in LM Studio, but this benchmark run says to be careful"*, reporting a **36.69 %** quality figure, which corroborates llm-bench's 36.3 overall.
- **Models.dev** (independent spec/price database): family `glm-flash`, context 128,000, output limit 32,768, capabilities tools / reasoning / temperature, open weights, release 2025-12-08, 7 providers.

### Pricing (Models.dev provider matrix)

| Provider | id | Context | Output limit | Price (in/out per M) |
| --- | --- | --- | --- | --- |
| Zhipu AI | `glm-4.6v-flash` | 128,000 | 32,768 | **$0.00 / $0.00** |
| Z.AI | `glm-4.6v-flash` | 128,000 | 32,768 | **$0.00 / $0.00** |
| Tempr Gateway | `zai/glm-4.6v-flash` | 128,000 | 32,768 | **$0.00 / $0.00** |
| EmpirioLabs AI | `glm-4-6v-flash` | 131,072 | 32,768 | **$0.00 / $0.00** |
| ZenMux | `z-ai/glm-4.6v-flash-free` | 200,000 | 128,000 | **$0.00 / $0.00** |
| ZenMux | `z-ai/glm-4.6v-flash` | 200,000 | 128,000 | $0.0218 / $0.2184 |
| Hugging Face | `zai-org/GLM-4.6V-Flash` | 131,072 | 32,768 | $0.30 / $0.90 |

### Explicitly not found

No Artificial Analysis page for the Flash variant (AA tracks the 106B GLM-4.6V and the newer GLM-5.3-Flash/FlashX), no BenchLM record (404 for `glm-4-6v-flash`), no OpenCharts page, and **no text-verifiable vendor benchmark cells for the 9B Flash model** — the vendor chart is an image.

## Normalized scores (1–100)

- **Tool use: 60/100.** Native multimodal function calling (a first for the GLM-V family), MCP tool invocation for screenshots/embedding, and an independent Agent-Workflow quality of **68.5** (but with a 37.5–84.6 spread across only four community runs) justify the middle-upper band; the vendor's own claim that tool-driven visual loops work is not backed by a τ²/Terminal-Bench/OSWorld number for this tier.
- **Reasoning: 47/100.** The vendor itself states pure-text QA "still has significant room for improvement"; independent Research & Analysis is **26.1** and Role Play 35.8; no GPQA/HLE/AIME/FrontierMath row exists anywhere, and the model tends to overthink and restate answers. Reasoning is the weak half of this model.
- **Context window: 70/100.** 128K native (trained at 128K, document understanding up to 128K tokens as images), 32,768 output, 200K on the ZenMux route — a solid but not ≥200K-native window, and local runs rarely exceed 16K in practice.
- **Multimodal: 78/100.** Genuinely strong: native early-fusion vision (no OCR pre-processing needed), 128K document/pages understanding, interleaved image-text generation, video input, UI-screenshot-to-HTML replication, SoTA among comparable-scale open models (vendor, 20+ benchmarks). Held back by documented counting/individual-identification errors and by independent overall quality of only 36.3 — perception is good, visual *reasoning* is uneven.
- **Coding: 34/100.** The only independent coding datapoint is **14.8/100** code-generation quality (P5 0.9 / P95 39.8) on LM Studio; no LiveCodeBench, SWE-bench or repo-level metric exists for the 9B flash tier, and code generation is precisely the text-only path the vendor flags as unfinished.
- **Cost efficiency: 99/100.** **$0.00 / $0.00** at four of seven tracked providers (Zhipu AI, Z.AI, Tempr, EmpirioLabs) plus a free ZenMux alias, plus Apache/MIT-style open weights on Hugging Face; paid routes are $0.0218/$0.2184 (ZenMux) and $0.30/$0.90 (HF). Only the verbosity (≈10.7K output tokens per local run) reduces the practical value of the free tier.
- **Overall Score: 57.8/100.** (60 + 47 + 70 + 78 + 34) / 5 = 293 / 5 = **58.6**.

**Best fit**: local/on-device multimodal agents that must *act* on what they see (screenshot → click → tool), long scanned-document / slide-deck analysis up to ~128K tokens, UI-to-HTML replication, and free high-volume vision tagging pipelines.
**Worst fit**: text-only work (code, research, analysis), long-horizon autonomous agents, and anything needing verified counting or identity-level visual detail.

## Agreement notes

- **Vendor ambition vs measured reality**: Z.ai markets GLM-4.6V as SoTA among comparable-scale open multimodal models, but the only independent verdict available (llm-bench.io, plus a matching LM Studio video at 36.69 %) puts overall quality at ~36/100 with code generation at 14.8. The vendor's SOTA claim is about the **106B** GLM-4.6V; the 9B Flash tier inherits the architecture, not the score.
- **Two independent sources agree on the headline number**: llm-bench.io's 36.3 and the LM Studio review's 36.69 % — the same measurement family, so treat it as one source with a corroborating run rather than two fully independent evaluations.
- **No independent vendor-benchmark cross-check is possible**: Z.ai publishes the per-model table only as a chart image, so no cell value for GLM-4.6V-Flash can be text-verified — a stated limitation of this report.
- **Context conflict**: the official docs say 128K (in training, and up to 128K tokens of document input), Models.dev says 128,000 with a 131,072 variant on EmpirioLabs, ZenMux advertises 200,000, and local community runs topped out at 16,384. The conservative reading is a 128K-class model; 200K appears to be a provider-side allowance rather than a validated window.
- **Pricing conflict**: Models.dev lists the primary vendor endpoints as $0.00/$0.00 while the same table lists paid aliases on ZenMux and Hugging Face — the free access is the promotional default, not a permanent price, so cost is scored on the free default with the paid fallbacks noted.
- **Identity**: the folder slug `glm-4.6v-flash` matches the vendor id family (`glm-4.6v-flash` on Z.AI/Zhipu). Note the API also exposes **GLM-4.6V-FlashX** as a separate, differently-priced variant in the docs — the two must not be merged.
- **`meta.json` spec conflict (scaffolded, not verified)**: the folder's `meta.json` describes this model as *"GLM 4.6V"* with **1M context, text-in/text-out only and $5/$25 per 1M**. Every one of those fields describes the **106B GLM-4.6V flagship**, not the 9B Flash variant: the official card and docs give **128K** context, **image/video + text in**, and Models.dev shows **$0/$0** at four providers. None of the scaffolded fields were carried into the scores above.

---

**Provided by**: **MiniMax M3.1 Flash (minimax-m3.1-flash-preview)** — 2026-11-03

**Method**: The official Hugging Face model card was read for architecture, serving recipes and the vendor's own limitation list; the Z.AI developer documentation was checked for positioning and API ids; Models.dev supplied the independent spec/provider/price matrix; llm-bench.io supplied the only independent quality measurement (4 community runs, LLM-judged, with P5–P95 spreads) and an LM Studio community review was used to corroborate the headline quality figure. Absence of AA, BenchLM and OpenCharts records was verified explicitly; no unverifiable vendor chart values were transcribed.

**Reference URLs**:
- https://huggingface.co/zai-org/GLM-4.6V-Flash — official model card (family positioning, native function calling, 128K document input, limitations)
- https://docs.z.ai/guides/vlm/glm-4.6v — Z.AI developer documentation (GLM-4.6V / FlashX / Flash lineup, 128K context, benchmark overview)
- https://models.dev/models/zhipuai/glm-4.6v-flash — independent spec, provider and price matrix (7 providers)
- https://llm-bench.io/models/glm-4-6v-flash — independent community benchmarks (quality 36.3, agentic 68.5, code 14.8, 23.3 tok/s)
- https://www.youtube.com/watch?v=_6efw2wvn_s — LM Studio community review (36.69 % quality corroboration)
- https://github.com/zai-org/GLM-V — official GLM-V repository and evaluation recipes

**Future sources to check**: an Artificial Analysis or BenchLM record for the 9B Flash variant, any Text-verified Z.ai benchmark table for the Flash tier, the GLM-5.3-Flash / GLM-5.3-FlashX successors that Z.ai now lists as the current VLM line (they may deprecate this model), and structured-function-calling evaluations (BFCL / τ²) for GLM-4.6V-Flash.
