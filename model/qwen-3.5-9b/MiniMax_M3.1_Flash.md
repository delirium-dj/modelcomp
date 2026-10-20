# Qwen 3.5 9B — findings by MiniMax M3.1 Flash

- Source: Alibaba (Qwen3.5-9B), `Qwen/Qwen3.5-9B`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 9B
- **Short description:** Alibaba's smallest open-weight multimodal checkpoint (Apache 2.0) — a dense 9.65B model with a 262K native window extensible to ~1.01M, text/image/video input, that still reaches τ²-bench 86.8% and LiveCodeBench v6 65.6% at roughly $0.10/$0.15 per 1M.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-9B` (post-trained; `Qwen/Qwen3.5-9B-Base` for the base), OpenRouter `qwen/qwen3.5-9b` ($0.10/$0.15), Hugging Face router, Together AI, SiliconFlow. **Not on OpenCode Zen** and not in Model Studio's `alibaba` provider list.
- **Release / knowledge:** **2026-03-02** (AA) vs HF repo created **2026-02-27** vs OpenRouter listing 2026-03-10 — conflicting dates, all cited. Knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.5-9B` (HF), `qwen/qwen3.5-9b` (OpenRouter), `qwen3.5-9b` (models.dev `huggingface`/`togetherai`/`siliconflow`).
- **Context window:** **262,144** native, extensible to **1,010,000**; hosts serve 262,144 with 32,768–65,536 max output.
- **Modalities:** text, image and video input; text output; 32 layers, hidden 4096, Gated DeltaNet + Gated Attention, vocab 248,320, vision encoder (27 layers, patch 16). AA is the only source that explicitly lists video input for this size.
- **Pricing (as of 2026-10-20):** **$0.10/M in, $0.15/M out** (OpenRouter); $0.135/$0.20 (AA); $0.17/$0.25 (HF router, Together). Self-host $0 (Apache 2.0).
- **Architecture:** dense transformer, 9,653,104,368 parameters (HF safetensors), no MoE.

### Raw benchmarks found

> Vendor model card with Artificial Analysis readings; BenchLM tracks no Qwen3.5 9B profile at all.

Agent / tool use:

- Tau2-bench: **86.84%** (AA) · TAU2-Bench (vendor): **79.1%** · Tau3-Banking: **7.0%** (AA)
- Terminal-Bench 2.1: **29.2%** (AA) · Terminal-Bench Hard: **24.2%** (AA) · Terminal-Bench 4.0: **0.51%** (AA)
- BFCL-V4: **66.1%** (vendor) · GDPval-AA: **419.52** (AA) · AutomationBench partial: **1.0%** (AA)
- The vendor card publishes no Terminal-Bench, GDPval or OSWorld row

Reasoning / knowledge:

- GPQA Diamond: **81.7%** (vendor) vs **80.61%** (AA) · MMLU-Pro: **82.5%** (vendor) · SuperGPQA: **58.2%** (vendor)
- HLE: **14.9%** (AA) · AA-LCR: **63.0%** (vendor) / **70.0%** (AA) · CritPt: **0.29%** (AA) · IFBench: **64.5%** (vendor) / **66.7%** (AA)
- Artificial Analysis Intelligence Index: **11 (estimated)** · Omniscience Accuracy / Hallucination Rate: **16.4% / 83.6%** (AA)
- HMMT Feb 2025: **83.2%** / Nov 2025: **82.9%** (vendor) · MMLU-ProX: **76.3%** (vendor) · LongBench v2: **55.2%** (vendor)

Coding:

- LiveCodeBench v6: **65.6%** (vendor) · OJBench: **29.2%** (vendor) · SciCode: **29.5%** (AA)
- SWE-bench Verified: not reported in the 9B card → no verified public score found · DeepSWE / Vibe Code Bench: no verified public score found

Multimodal:

- MMMU-Pro: **70.1%** (vendor) / **69.2%** (AA) · MMMU: **78.4%** (vendor) · VideoMME (w/ sub): **84.5%** · VideoMMMU: **78.9%** · MLVU: **84.4%** (vendor)

Long context:

- LongBench v2 55.2% is the only retrieval evidence; MRCR v2 / RULER at 128k or 1M: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 52/100.** τ²-bench 86.8% and BFCL-V4 66.1% show competent tool calling, but Terminal-Bench 2.1 is 29.2%, AutomationBench 1.0% and GDPval-AA 419.5 are the floor of the band.
- **Reasoning: 64/100.** GPQA 80.6–81.7%, MMLU-Pro 82.5% and HMMT 83.2% are solid mid-band results for a 9B model, capped by HLE 14.9%, CritPt 0.29%, an AA Intelligence Index of 11 and an 83.6% hallucination rate.
- **Context window: 70/100.** 262,144 native (1,010,000 extensible) with LongBench v2 55.2% as the only retrieval evidence; no MRCR/RULER figure exists.
- **Multimodal: 80/100.** Text, image and video input with text out — MMMU-Pro 70.1%, VideoMME 84.5%, VideoMMMU 78.9%, MLVU 84.4% — the video-in band without audio.
- **Coding: 52/100.** LiveCodeBench v6 65.6% is a mid number for the size, but SciCode 29.5% and the complete absence of a SWE-bench figure cap the score.
- **Cost efficiency: 98/100.** $0.10/M in and $0.15/M out is among the cheapest routes for a multimodal model, and Apache 2.0 weights are free to self-host.
- **Overall Score: 64/100.** Mean of the five quality dims = (52 + 64 + 70 + 80 + 52) / 5 = 63.6 → **64**. Best fit: cheap local multimodal perception and lightweight tool use on a phone-class or laptop-class GPU — the 9B sibling of a much stronger family.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Qwen Hugging Face model card and config, Artificial Analysis, BenchLM absence check, models.dev, OpenRouter API); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_27B.md`, using the same headings.
