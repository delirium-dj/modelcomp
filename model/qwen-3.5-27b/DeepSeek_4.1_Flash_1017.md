# Qwen3.5-27B — findings by DeepSeek 4.1 Flash 1017

- Source: Alibaba Qwen/Qwen3.5-27B (`qwen-3.5-27b`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-27B
- **Short description:** Alibaba's 27B open-weights member of the Qwen3.5 family (February 2026) with a unified vision-language foundation, native 262K context and strong agentic tool use; a self-hostable workhorse for coding agents, document/vision QA and multilingual tasks.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-27B`, Apache-2.0), served commercially via Alibaba Cloud Model Studio (DashScope) and third-party hosts — OpenRouter lists Alibaba Cloud Int., Chutes, SiliconFlow, DeepInfra, AtlasCloud and NovitaAI.
- **Release / knowledge:** Qwen3.5 family dated February 2026 (model-card citation); knowledge cutoff not stated.
- **IDs:** `qwen/qwen3.5-27b` (OpenRouter) · `Qwen/Qwen3.5-27B` (Hugging Face) · `Qwen3.5-27B` (DashScope)
- **Context window:** 262,144 tokens natively, extensible to 1,010,000 with YaRN — verified from the model card ("Context Length: 262,144 natively and extensible up to 1,010,000 tokens").
- **Modalities:** text + image + video in; text out; reasoning yes (thinking mode on by default, disable via `enable_thinking: false`); native tool calling (`--tool-call-parser qwen3_coder`, Qwen-Agent support).
- **Pricing (as of 2026-11-14):** via OpenRouter — Alibaba Cloud Int. $0.195 / 1M in, $1.56 / 1M out; SiliconFlow $0.25 / $2.00; DeepInfra $0.26 / $2.60; NovitaAI $0.30 / $2.40. Self-hosting is free under Apache-2.0.
- **Architecture:** 27B-parameter causal LM with vision encoder (28B params total on disk), 64 layers, hybrid Gated DeltaNet linear attention + gated attention with sparse-MoE feed-forward blocks, MTP heads, BF16 safetensors, Apache-2.0.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: no verified public score found — Artificial Analysis has no model page for this checkpoint (both `qwen-3-5-27b` and `qwen3.5-27b` return 404), so no index value or rank exists.
- Terminal-Bench 4.0 / GDPval-AA / AutomationBench-AA: no verified public score found (Terminal-Bench **2** is reported instead, below)

Reasoning / knowledge:

- AA-Omniscience Accuracy / Non-Hallucination Rate: no verified public score found
- HLE-Diamond: no verified public score found; the card reports HLE **w/ CoT 24.3** and **HLE w/ tool 48.5**
- CritPt v2 (Hard Subset): no verified public score found

Coding:

- FrontierCode-AA 2.0 / Terminal-Bench 4.0: no verified public score found; card reports **Terminal-Bench 2 = 41.6**
- SWE-bench Verified **72.4** / LiveCodeBench v6 **80.7** / CodeForces 1899 (vendor card)

Long context:

- 262,144 native tokens (1.01M with YaRN). Retrieval evidence: **AA-LCR 66.1**, **LongBench v2 60.6** (vendor card).

Other vendor-reported figures used below: MMLU-Pro 86.1, GPQA Diamond 85.5, IFEval 95.0, BFCL-V4 68.5, TAU2-Bench 79.0, MMMU-Pro 75.0, VideoMME (w/ sub) 87.0, OSWorld-Verified 56.2.

### Normalized scores (1–100)

- **Tool use: 76/100.** BFCL-V4 68.5 and TAU2-Bench 79.0 with native qwen3_coder tool parsing is strong agentic evidence, but the absence of any Artificial Analysis index or Terminal-Bench 4.0 figure keeps it out of the frontier band.
- **Reasoning: 74/100.** GPQA Diamond 85.5 and HLE w/ CoT 24.3 (48.5 with tools) indicate solid reasoning for a 27B open model, short of frontier lab flagships.
- **Context window: 73/100.** 200K–500K tier — 262,144 tokens verified natively, with a documented 1.01M YaRN extension that degrades short-context behaviour.
- **Multimodal: 80/100.** Text, image and video input with strong vision scores (MMMU-Pro 75.0, VideoMME 87.0), text-only output.
- **Coding: 80/100.** SWE-bench Verified 72.4, LiveCodeBench v6 80.7 and Terminal-Bench 2 41.6 are strong mid-tier-to-upper coding results, capped by the absence of FrontierCode/Terminal-Bench 4.0 numbers.
- **Cost efficiency: 93/100.** $0.195 in / $1.56 out per 1M at the cheapest hosted tier, and free to self-host under Apache-2.0 — excellent value for a model of this capability.
- **Overall Score: 77/100.** Mean of the five quality dims (76, 74, 73, 80, 80) = 76.6, rounded to 77. Best fit: self-hosted or cheap-hosted coding agents and multimodal document pipelines where a 256K window and Apache-2.0 licensing matter.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash 1017 (deepseek/deepseek-v4.1-flash-1017)** — 2026-11-14
- Method: public internet research via direct `webfetch` of the Artificial Analysis model page (404, no entry), then OpenRouter and the Hugging Face model card (web search returned HTTP 402, so the direct-fetch fallback was used); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources)
  - [Qwen3.5-27B — Hugging Face model card](https://huggingface.co/Qwen/Qwen3.5-27B)
  - [Qwen3.5-27B on OpenRouter (pricing, per-provider rates)](https://openrouter.ai/qwen/qwen3.5-27b)
