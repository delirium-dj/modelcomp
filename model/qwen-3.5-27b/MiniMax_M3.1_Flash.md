# Qwen 3.5 27B — findings by MiniMax M3.1 Flash

- Source: Alibaba (Qwen3.5-27B), `Qwen/Qwen3.5-27B`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 27B
- **Short description:** Alibaba's February 2026 dense open-weight multimodal model (Apache 2.0) — 27.8B parameters, 262K native context extensible to ~1.01M, text/image/video input — a strong all-rounder for local multimodal agents, now a legacy tier behind Qwen 3.6/3.8.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-27B` (BF16, 11 shards, 55.6 GB; FP8 and GPTQ-Int4 quants exist), OpenRouter `qwen/qwen3.5-27b` ($0.27/$2.16), Alibaba Cloud Model Studio ($0.30/$2.40), SiliconFlow, Together, Hugging Face router. **Not on OpenCode Zen.**
- **Release / knowledge:** **2026-02-24** (AA release date; HF repo created 2026-02-24; BenchLM labels the hosted listing "Mar 4, 2026" — conflict noted). Knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.5-27B` (HF), `qwen/qwen3.5-27b` (OpenRouter), `qwen3.5-27b` (models.dev `alibaba`/`huggingface`).
- **Context window:** **262,144** native (`max_position_embeddings: 262144`), extensible to **1,010,000** via the model card's YaRN note; hosts serve 262,144 with 65,536 max output.
- **Modalities:** text, image and video input; text output; hybrid Gated DeltaNet + Gated Attention (3:1 linear:full), vocab 248,320, vision encoder (27 layers, patch 16).
- **Pricing (as of 2026-10-20):** **$0.27/M in, $2.16/M out** (OpenRouter); $0.30/$2.40 (Model Studio, AA). Self-host $0 (Apache 2.0).
- **Architecture:** dense transformer, 27,781,427,952 parameters (HF safetensors), 64 layers, hidden 5120.

### Raw benchmarks found

> Vendor model card (HF) with Artificial Analysis and BenchLM independent readings; the vendor and AA figures land close, the BenchLM composite does not.

Agent / tool use:

- Tau2-bench: **93.86%** (AA) · TAU2-Bench (vendor): **79.0%**
- Terminal-Bench 2.0: **41.6%** (vendor card, mirrored by BenchLM)
- OSWorld-Verified: **56.2%** (BenchLM) · BrowseComp: **61%** (BenchLM)
- BFCL-V4: **68.5%** (vendor) · IT-Bench-SRE: **35.5%** (AA) · Terminal-Bench Hard: **32.6%** (AA)
- GDPval-AA: no verified public score found (AA field null) · AutomationBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.5%** (vendor) vs **85.76%** (AA)
- MMLU-Pro: **86.1%** (vendor) · MMLU-ProX: **82.2%** (vendor) · SuperGPQA: **65.6%** (vendor)
- HLE (w/ CoT): **24.3%** (vendor) vs **23.91%** (AA) · AA-LCR: **66.1%** (vendor) / **77.7%** (AA)
- Artificial Analysis Intelligence Index: **23 (estimated)** · CritPt: **0.85%** (AA) · Omniscience Accuracy / Hallucination Rate: **20.7% / 81.5%** (AA)
- IFEval: **95.0%** · IFBench: **76.5%** (vendor) / **75.6%** (AA) · MathVision: **86.0%** (BenchLM)

Coding:

- SWE-bench Verified: **72.4%** (vendor) · SWE-Rebench: **58.9%** (swe-rebench.com, via BenchLM)
- LiveCodeBench v6: **80.7%** (vendor) · Codeforces ELO: **1899** (vendor)
- Terminal-Bench 2.0: 41.6% · DeepSWE / SciCode / Vibe Code Bench: no verified public score found

Long context:

- LongBench v2: **60.6%** (vendor) · MRCR v2 / RULER at 128k or 1M: no verified public score found

### Normalized scores (1–100)

- **Tool use: 60/100.** τ²-bench 93.9% and TAU2 79.0% show solid tool orchestration, but Terminal-Bench 2.0 is only 41.6%, Terminal-Bench Hard 32.6% and no GDPval-AA was ever published, so the agentic band stays mid.
- **Reasoning: 72/100.** GPQA 85.5–85.8%, MMLU-Pro 86.1%, MathVision 86.0% and IFEval 95% are strong mid-band results, capped by HLE 24%, CritPt 0.85%, an AA Intelligence Index of 23 and an 81.5% hallucination rate.
- **Context window: 70/100.** 262,144 native (1,010,000 extensible) lands in the 200K–500K tier; LongBench v2 60.6% is the only retrieval evidence and no MRCR/RULER figure exists, so the tier midpoint applies.
- **Multimodal: 80/100.** Text, image and video input with text output — MMMU-Pro 75.0%, MMMU 82.3%, VideoMME 87.0% and MathVision 86.0% — the video-in band without audio.
- **Coding: 70/100.** SWE-bench Verified 72.4%, LiveCodeBench v6 80.7% and Codeforces 1899 are solid mid-band coding numbers; the low Terminal-Bench 2.0 (41.6%) and the absence of any DeepSWE or SciCode figure cap it.
- **Cost efficiency: 91/100.** $0.27/M in and $2.16/M out for a 27.8B multimodal model is cheap, and Apache 2.0 weights make self-hosting free.
- **Overall Score: 70/100.** Mean of the five quality dims = (60 + 72 + 70 + 80 + 70) / 5 = 70.4 → **70**. Best fit: local multimodal agents and bulk visual/text reasoning on one GPU — but Qwen 3.6/3.8 have superseded it.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Qwen Hugging Face model cards and configs, Artificial Analysis, BenchLM, models.dev, OpenRouter API); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.6_27B.md`, using the same headings.
