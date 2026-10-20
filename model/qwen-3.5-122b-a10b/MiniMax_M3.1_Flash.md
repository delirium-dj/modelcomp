# Qwen 3.5 122B A10B — findings by MiniMax M3.1 Flash

- Source: Alibaba (Qwen3.5-122B-A10B), `Qwen/Qwen3.5-122B-A10B`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 122B A10B
- **Short description:** Alibaba's February 2026 open-weight (Apache 2.0) MoE for local multimodal agents — 125B total with 10B active per token, 262K native context extensible to ~1.01M, text/image/video input, and a 256-expert sparse design that keeps latency low.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-122B-A10B` (BF16 + FP8/GPTQ-Int4 quants), OpenRouter `qwen/qwen3.5-122b-a10b` ($0.26/$2.08), Alibaba Cloud Model Studio ($0.40/$3.20), SiliconFlow. **Not on OpenCode Zen.**
- **Release / knowledge:** **2026-02-24** (AA; HF repo created 2026-02-24; BenchLM's hosted listing says "Mar 4, 2026" — conflict noted). Knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.5-122B-A10B` (HF), `qwen/qwen3.5-122b-a10b` (OpenRouter), `qwen3.5-122b-a10b` (models.dev `alibaba`/`siliconflow`).
- **Context window:** **262,144** native, extensible to **1,010,000**; hosts serve 262,144 with 65,536 max output.
- **Modalities:** text, image and video input; text output; hybrid Gated DeltaNet + Gated Attention, 48 layers, 256 routed experts with 8 active + 1 shared, vocab 248,320.
- **Pricing (as of 2026-10-20):** **$0.26/M in, $2.08/M out** (OpenRouter / SiliconFlow); $0.40/$3.20 (Model Studio, AA). Self-host $0 (Apache 2.0).
- **Architecture:** sparse MoE, 125,086,497,008 parameters (HF safetensors; the card says "122B total / 10B activated" — a card-vs-weight-count conflict worth noting).

### Raw benchmarks found

> Vendor model card (HF) with Artificial Analysis and BenchLM readings; the AA composite (16) sits well below the vendor's card numbers.

Agent / tool use:

- TAU2-Bench: **79.5%** (vendor) · Tau2-bench: **93.57%** (AA) · Tau3-Banking: **15.3%** (AA)
- Terminal-Bench 2.0: **49.4%** (vendor, mirrored by BenchLM) · Terminal-Bench 2.1: **47.6%** (AA) · Terminal-Bench 4.0: **0%** (AA) · Terminal-Bench Hard: **31.1%** (AA)
- OSWorld-Verified: **58.0%** (BenchLM) · BrowseComp: **63.8%** (BenchLM) · BFCL-V4: **72.2%** (vendor)
- GDPval-AA: **814.01** (AA) · AutomationBench partial: **5.5%** (AA) · APEX-Agents: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.6%** (vendor) vs **85.66%** (AA)
- MMLU-Pro: **86.7%** (vendor) · MMLU-ProX: **82.2%** (vendor) · SuperGPQA: **67.1%** (vendor)
- HLE (w/ CoT): **25.3%** (vendor) vs **25.21%** (AA) · AA-LCR: **66.9%** (vendor) / **76.3%** (AA) · CritPt: **0.57%** (AA)
- Artificial Analysis Intelligence Index: **16 (estimated)** — the lowest of the Qwen3.5 open family on AA despite the strongest card numbers
- Omniscience Accuracy / Hallucination Rate: **24.4% / 87.1%** (AA) · IFBench: **76.1%** (vendor) / **75.7%** (AA)

Coding:

- SWE-bench Verified: **72.0%** (vendor) · LiveCodeBench v6: **78.9%** (vendor) · Codeforces ELO: **2100** (vendor)
- DeepSWE / SciCode / Vibe Code Bench: no verified public score found · SciCode: **39.7%** (AA)

Long context:

- LongBench v2: **60.2%** (vendor) · MRCR v2 / RULER at 128k or 1M: no verified public score found

### Normalized scores (1–100)

- **Tool use: 60/100.** τ²-bench 93.6% and TAU2 79.5% are strong, but Terminal-Bench 2.0 49.4% / 2.1 47.6%, Terminal-Bench 4.0 at **0%**, GDPval-AA 814 and AutomationBench 5.5% keep the agentic evidence in the mid band.
- **Reasoning: 70/100.** GPQA 85.7–86.6%, MMLU-Pro 86.7% and IFBench 76% are good mid-band results, capped by HLE 25%, CritPt 0.57%, an AA Intelligence Index of only 16 and an 87.1% hallucination rate.
- **Context window: 70/100.** 262,144 native (1,010,000 extensible) is the 200K–500K tier; LongBench v2 60.2% is the only retrieval evidence and no MRCR/RULER figure exists.
- **Multimodal: 80/100.** Text, image and video input with text out — MMMU-Pro 76.9%, MMMU 83.9%, VideoMME 87.3% and MathVision 86.2% — the video-in band without audio.
- **Coding: 70/100.** SWE-bench Verified 72.0%, LiveCodeBench v6 78.9% and Codeforces 2100 are mid-band coding numbers, with no DeepSWE or Vibe Code Bench measurement to lift them.
- **Cost efficiency: 95/100.** $0.26/M in and $2.08/M out for a 125B MoE is cheap on hosted routes, and Apache 2.0 weights are free to self-host.
- **Overall Score: 70/100.** Mean of the five quality dims = (60 + 70 + 70 + 80 + 70) / 5 = 70.0 → **70**. Best fit: local multimodal agents with a strong knowledge/coding base — but note the vendor card and the AA composite disagree sharply, so benchmark it yourself before committing.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Qwen Hugging Face model cards and configs, Artificial Analysis, BenchLM, models.dev, OpenRouter API); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.6_27B.md`, using the same headings.
