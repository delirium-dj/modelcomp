# Qwen 3.5 35B A3B — findings by MiniMax M3.1 Flash

- Source: Alibaba (Qwen3.5-35B-A3B), `Qwen/Qwen3.5-35B-A3B`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 35B A3B
- **Short description:** Alibaba's February 2026 open-weight (Apache 2.0) sparse MoE — 35.9B total with only 3B active per token, 262K native context extensible to ~1.01M, text/image/video input — the open-weights checkpoint behind the hosted **Qwen3.5-Flash** tier, and the cheapest strong multimodal option in the family.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-35B-A3B` (BF16 + FP8/GPTQ quants), OpenRouter `qwen/qwen3.5-35b-a3b` ($0.14/$1.00), Alibaba Cloud Model Studio ($0.25/$2.00), Kilo, SiliconFlow. **Not on OpenCode Zen.**
- **Release / knowledge:** **2026-02-24** (AA; HF repo created 2026-02-24; BenchLM's hosted listing says "Mar 4, 2026" — conflict noted). Knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.5-35B-A3B` (HF), `qwen/qwen3.5-35b-a3b` (OpenRouter), `qwen3.5-35b-a3b` (models.dev).
- **Context window:** **262,144** native, extensible to **1,010,000**; hosts serve 262,144 with 65,536–81,920 max output.
- **Modalities:** text, image and video input; text output; 40 layers, 256 routed experts with 8 active + 1 shared, vocab 248,320, vision encoder (27 layers, patch 16).
- **Pricing (as of 2026-10-20):** **$0.14/M in, $1.00/M out** (OpenRouter); $0.25/$2.00 (Model Studio, AA). Self-host $0 (Apache 2.0).
- **Architecture:** sparse MoE, 35,951,822,704 parameters (HF safetensors; the card says "35B total / 3B activated" — a card-vs-weight-count conflict worth noting).

### Raw benchmarks found

> Vendor model card (HF) with Artificial Analysis and BenchLM readings.

Agent / tool use:

- TAU2-Bench: **81.2%** (vendor) · Tau2-bench: **89.18%** (AA) · Tau3-Banking: no verified public score found
- Terminal-Bench 2.0: **40.5%** (vendor, mirrored by BenchLM) · Terminal-Bench Hard: **26.5%** (AA) · Terminal-Bench 4.0: no verified public score found
- OSWorld-Verified: **54.5%** (BenchLM) · BrowseComp: **61%** (BenchLM) · BFCL-V4: **67.3%** (vendor) · IT-Bench-SRE: **21.5%** (AA)
- GDPval-AA: no verified public score found (AA field null) · Gert Labs Composite Game Benchmark: **28.96%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **84.2%** (vendor) vs **84.55%** (AA)
- MMLU-Pro: **85.3%** (vendor) · MMLU-ProX: **81.0%** (vendor) · SuperGPQA: **63.4%** (vendor) · MathVision: **83.9%** (BenchLM)
- HLE (w/ CoT): **22.4%** (vendor) vs **21.04%** (AA) · AA-LCR: **58.5%** (vendor) / **72.0%** (AA) · CritPt: **0.86%** (AA)
- Artificial Analysis Intelligence Index: **19 (estimated)** · Omniscience Accuracy / Hallucination Rate: **20.1% / 85.4%** (AA) · IFBench: **70.2%** (vendor) / **72.5%** (AA)

Coding:

- SWE-bench Verified: **69.2%** (vendor) · SWE-Rebench: **53.7%** (swe-rebench.com, via BenchLM)
- LiveCodeBench v6: **74.6%** (vendor) · Codeforces ELO: **2028** (vendor)
- DeepSWE / SciCode / Vibe Code Bench: no verified public score found

Long context:

- LongBench v2: **59.0%** (vendor) · MRCR v2 / RULER at 128k or 1M: no verified public score found

### Normalized scores (1–100)

- **Tool use: 58/100.** τ²-bench 89.2% and TAU2 81.2% show good tool orchestration, but Terminal-Bench 2.0 is only 40.5%, Terminal-Bench Hard 26.5%, Gert Labs 29.0% and no GDPval-AA exists, so the agentic band stays mid.
- **Reasoning: 70/100.** GPQA 84.2–84.6%, MMLU-Pro 85.3% and MathVision 83.9% are solid mid-band results, capped by HLE 22%, CritPt 0.86%, an AA Intelligence Index of 19 and an 85.4% hallucination rate.
- **Context window: 70/100.** 262,144 native (1,010,000 extensible) is the 200K–500K tier; LongBench v2 59.0% is the only retrieval evidence and no MRCR/RULER figure exists.
- **Multimodal: 80/100.** Text, image and video input with text out — MMMU-Pro 75.1%, MMMU 81.4%, MathVision 83.9% — the video-in band without audio.
- **Coding: 68/100.** SWE-bench Verified 69.2%, LiveCodeBench v6 74.6% and Codeforces 2028 are respectable for a 3B-active model, but Terminal-Bench 2.0 at 40.5% and the absence of any DeepSWE or SciCode figure cap the score.
- **Cost efficiency: 97/100.** $0.14/M in and $1.00/M out for a 3B-active multimodal MoE is exceptionally cheap, and Apache 2.0 weights are free to self-host.
- **Overall Score: 69/100.** Mean of the five quality dims = (58 + 70 + 70 + 80 + 68) / 5 = 69.2 → **69**. Best fit: high-throughput local multimodal agents and visual pipelines on a single GPU — the same weights serve the hosted Qwen3.5-Flash tier.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Qwen Hugging Face model cards and configs, Artificial Analysis, BenchLM, models.dev, OpenRouter API); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_27B.md`, using the same headings.
