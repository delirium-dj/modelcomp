# Agnes 2.5 Flash — findings by DeepSeek 4.1 Flash 1017

- Source: Agnes AI (`agnes-2.5-flash`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 2.5 Flash (released checkpoint: Agnes 2.5 Flash Base)
- **Short description:** A 202B-parameter sparse mixture-of-experts open-weights model from Agnes AI, built for long-context, high-throughput inference and published as an FP8 checkpoint that can be served out of the box with SGLang.
- **Provider / access:** Self-host only — weights at `Agnes-AI/Agnes-2.5-Flash-Base` on Hugging Face; the card states the model "isn't deployed by any Inference Provider", so no hosted API id is published.
- **Release / knowledge:** Hugging Face repository created 2026-08-29; knowledge cutoff not stated.
- **IDs:** `Agnes-AI/Agnes-2.5-Flash-Base`
- **Context window:** 1,048,576 tokens (model card `max_position_embeddings`; YaRN factor 16 over a 64K base window).
- **Modalities:** text in → text out; no image/audio/video input; base (pre-trained) checkpoint with no SFT/RLHF, so instruction-following and tool use are not aligned out of the box.
- **Pricing (as of 2026-11-14):** no published per-token API pricing — open weights under Apache 2.0, self-hosting only (FP8 checkpoint ~190 GB, needs ~8× H100/H200 for the default TP=8 layout).
- **Architecture:** 202B total parameters, ~16B active; 48 layers, 160 routed experts (6 active) + 1 shared expert, MLA with KV compression, hyper-connections; FP8 e4m3 block-quantised; Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: no verified public score found (no AA model page; the AA URL 404s)
- Terminal-Bench 4.0 / GDPval-AA / AutomationBench-AA: no verified public score found

Reasoning / knowledge:

- AA-Omniscience Accuracy / Non-Hallucination Rate: no verified public score found
- HLE-Diamond: no verified public score found
- CritPt v2 (Hard Subset): no verified public score found

Coding:

- FrontierCode-AA 2.0 / Terminal-Bench 4.0: no verified public score found
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- 1,048,576-token context window stated in the model card (YaRN factor 16 over 64K base, sparse top-512 token indexer, per-layer KV compression); no retrieval/needle benchmark reported.

### Normalized scores (1–100)

- **Tool use: 40/100.** No Intelligence Index or agentic eval exists, and the published checkpoint is a pre-trained base model explicitly described as unreliable at chat-style instruction following — no tool-calling evidence at all.
- **Reasoning: 45/100.** No HLE-Diamond, CritPt v2, GDP.pdf or Omniscience result is published; scored low-mid purely on architecture class (202B MoE) with no measured reasoning evidence behind it.
- **Context window: 96/100.** 1,048,576 tokens is in the ≥1M tier (95–100), though the figure is a vendor card claim rather than an independently measured retrieval result.
- **Multimodal: 15/100.** Text-only input and text-only output (pipeline tag `text-generation`, no vision tower in the architecture table).
- **Coding: 42/100.** No FrontierCode-AA 2.0, Terminal-Bench 4.0 or SWE-bench result, and an unaligned base checkpoint caps agentic coding well below the 55 mark.
- **Cost efficiency: 90/100.** No published per-token price; weights are Apache 2.0 so marginal API cost is zero, but the ~190 GB FP8 checkpoint needs multi-GPU serving, which keeps real cost above the free-tier band.
- **Overall Score: 48/100.** Mean of 40, 45, 96, 15, 42 = 47.6 → 48; best fit is research and fine-tuning work on very long documents, not production chat.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash 1017 (deepseek/deepseek-v4.1-flash-1017)** — 2026-11-14
- Method: public internet research via direct `webfetch` — the Artificial Analysis model page returned HTTP 404, so the Hugging Face model card was fetched instead (web search returned HTTP 402, so the direct-fetch fallback was used); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources)
  - [Agnes-AI/Agnes-2.5-Flash-Base — Hugging Face model card](https://huggingface.co/Agnes-AI/Agnes-2.5-Flash-Base)
  - [Hugging Face model search API (`search=agnes-flash`)](https://huggingface.co/api/models?search=agnes-flash)
