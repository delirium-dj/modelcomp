# Qwen 3.5 0.8B — findings by Inkling 2 Small

- Source: Alibaba Cloud / Qwen Team (`Qwen/Qwen3.5-0.8B`; Zen route `opencode/qwen-3.5-0.8b`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 0.8B (Qwen3.5-0.8B)
- **Short description:** Alibaba's smallest Qwen 3.5 — a dense ~0.8B-parameter early-fusion multimodal model for edge, on-device and embedded assistants; Apache-2.0. The bottom of the Qwen 3.5 ladder; capability is limited by physics, not by training effort.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-0.8B`; free hosted lanes (Zen `opencode/qwen-3.5-0.8b`, Ollama `qwen3.5:0.8b`); self-host via vLLM / SGLang / Transformers (OpenAI-compatible Chat Completions).
- **Release / knowledge:** Qwen 3.5 generation launched February 2026 (HF citation: Qwen Team, February 2026). Knowledge cutoff not stated.
- **IDs:** `Qwen/Qwen3.5-0.8B` (HF); `qwen3.5:0.8b` (Ollama); `opencode/qwen-3.5-0.8b` (Zen)
- **Context window:** 262,144 native (81,920 max output per provider rows) — HF model card, verified 2026-11-10
- **Modalities:** Text, image, video in; text out; reasoning yes (non-thinking by default; thinking mode supported but prone to thinking loops at this size per vendor warning); tool calling; JSON mode
- **Pricing (as of 2026-11-10):** **$0** — Apache-2.0 open weights; free hosted routes; no official metered API price
- **Architecture:** ~0.8B dense causal LM with vision encoder (early-fusion multimodal); Gated DeltaNet linear attention hybrid (6×(3×Gated DeltaNet → FFN + 1×Gated Attention → FFN)); 248,320-token vocabulary; tied embeddings; MTP-trained; Apache-2.0

### Raw benchmarks found

(Official Qwen3.5-0.8B model card; Thinking / Non-thinking, checked 2026-11-10)

Agent / tool use:

- BFCL-V4 (Thinking): **25.3**
- TAU2-Bench (Thinking): **11.6**
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (Thinking): **11.9** (vs Qwen3-1.7B: 40.1; Qwen3.5-2B: 51.6)
- MMLU-Pro: **29.7** (Non-thinking) / **42.3** (Thinking); MMLU-Redux: 48.5 / 59.5; C-Eval: 46.4 / 50.5
- SuperGPQA: **16.9** / 21.3; MMMLU: 34.1 / 44.3
- IFEval: **52.1** (Non-thinking) / 44.0 (Thinking); IFBench (Thinking): 21.0; MultiChallenge (Thinking): 18.9

Multimodal / vision:

- MMMU: **49.0** / 47.4; MMMU-Pro: 31.2 / 31.4; MathVista (mini): 62.2 / 58.6; MMBenchEN-DEV: 69.9 / 68.0; OCRBench: **74.5** / 79.1
- VideoMME (w/o sub.): 57.7; MLVU: 65.6

Coding:

- No LiveCodeBench / SWE-bench / SciCode published for this exact model — no verified public score found

Long context:

- AA-LCR (Thinking): **4.7**; LongBench v2 (Thinking): **26.1**

### Normalized scores (1–100)

- **Tool use: 18/100.** BFCL-V4 25.3 and TAU2-Bench 11.6 — tool calling exists but is unreliable at this scale; usable only for toy agent loops with strict schemas.
- **Reasoning: 26/100.** GPQA 11.9, SuperGPQA 16.9 — barely above chance-adjacent territory; MMLU-Pro 42.3 (Thinking) is the ceiling signal. Vendor itself warns of thinking loops at this size.
- **Context window: 35/100.** 262,144 native window is nominally huge, but AA-LCR 4.7 / LongBench v2 26.1 show effective retrieval is near the floor — do not rely on the long window.
- **Multimodal: 46/100.** Surprisingly real vision coverage for 0.8B — MMMU 49.0, MathVista 62.2, OCRBench 74.5 — the strongest dimension relative to peers.
- **Coding: 12/100.** Zero published coding benchmarks; math-reasoning proxies are far below frontier; treat as no usable coding ability beyond autocomplete of trivial snippets.
- **Cost efficiency: 100/100.** Apache-2.0 weights — $0 to self-host; free hosted routes.
- **Overall Score: 27/100.** Mean of (18 + 26 + 35 + 46 + 12) / 5 = 137/5 = 27.4 → 27. A $0 edge-class multimodal toy — fine for classification, OCR-at-the-edge and demos; never for reasoning, agents or coding you care about.

---

## Signature

- Provided by: **Inkling 2 Small (opencode/inkling-2-small)** — 2026-11-10
- Method: public internet research (official model card, vendor docs); scores are normalized 1–100 interpretations, not official vendor scores. Best fit: on-device OCR/VQA demos and hobby fine-tuning; any real task should escalate to Qwen 3.5 2B or larger.
- Reference URLs:
  - [Qwen/Qwen3.5-0.8B — Hugging Face model card (benchmarks, specs, license)](https://huggingface.co/Qwen/Qwen3.5-0.8B)
  - [llm-stats.com — Qwen3.5-2B family benchmarks & pricing](https://llm-stats.com/models/qwen3.5-2b)
  - [Qualcomm AI Hub — Qwen3.5 family on-device](https://aihub.qualcomm.com/compute/models/qwen3_5_2b)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
