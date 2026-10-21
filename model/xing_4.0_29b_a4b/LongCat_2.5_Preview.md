# Xing 4.0 29B A4B — findings by LongCat 2.5 Preview

- Source: China Telecom TeleAI/Xing4.0-29B-A4B
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing 4.0 29B A4B
- **Short description:** China Telecom TeleAI's open-weight (Apache 2.0) 29B total / 4B active MoE agentic model (Sep 2026), part of the Xing series (formerly TeleChat) — the first model of its scale trained end-to-end on Ascend NPUs with MindSpore, built for complex engineering tasks. Text-only.
- **Provider / access:** Open weights on Hugging Face `XingChen-AGI/Xing4.0-29B-A4B` (plus FP8 and GGUF); free OpenRouter route `xingchen-agi/xing4.0-29b-a4b:free`; OpenAI-compatible API via vLLM/SGLang/KTransformers. Free promotional OpenCode Zen tier.
- **Release / knowledge:** Weights published 2026-09-17 (press release 2026-09-24); knowledge cutoff not published.
- **IDs:** `XingChen-AGI/Xing4.0-29B-A4B` (Hugging Face); `xingchen-agi/xing4.0-29b-a4b:free` (OpenRouter).
- **Context window:** 262,144 native (256K), extensible to 512,000 via YaRN.
- **Modalities:** text in / text out only. Reasoning (thinking toggle), tool calling, JSON/structured output.
- **Pricing (as of 2026-10-21):** Apache 2.0 open weights — self-host $0 (bf16 ~15 GB quantized single-GPU); OpenRouter `:free` route $0/$0 (262,144 ctx); free promotional Zen tier.
- **Architecture:** MoE with mHC + MLA + MTP, 29B total / 4B active, 40 layers, hidden 3584, 64 routed experts (4 active) + 1 shared expert; trained on Ascend 910C / MindSpore; Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **57.5%** (vendor model card; vs Qwen3.6-35B-A3B 51.5, Gemma4-26B-A4B 30.0)
- Tau3-Bench: **64.63%**; Claw-Eval: **76.55%** (vendor)
- DeepresearchBII: **60.80%** (vendor)
- GDPval-AA / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- AIME 2026: **90.00%** (vendor)
- AA-LCR: **61.00%**; IFBench: **69.67%** (vendor)
- GPQA Diamond / HLE / CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found

Coding:

- SWE-bench Verified: **75.0%** (vendor model card; approaches Qwen3.6-35B-A3B 76.0, well ahead of Gemma4-26B-A4B 53.0)
- SWE-bench Multilingual: **66.0%** (vendor)
- LiveCodeBench / SciCode / DeepSWE: no verified public score found

Multimodal:

- None — text-in / text-out model.

Long context:

- AA-LCR: **61.00%**; 256K native window (512K via YaRN); no RULER/MRCR figure reported.

### Normalized scores (1–100)

- **Tool use: 74/100.** Terminal-Bench 2.1 57.5% is mid-band, but Tau3-Bench 64.63% (above the 50%+ frontier reference), Claw-Eval 76.55% and DeepresearchBII 60.80% make it a strong small agent model; capped by the absence of GDPval-AA/MCP-Atlas and the all-vendor provenance.
- **Reasoning: 68/100.** AIME 2026 90.0% and IFBench 69.67% are solid, but no GPQA Diamond, HLE or AA Intelligence Index is published, so the reasoning profile is only partially evidenced.
- **Context window: 74/100.** 262,144 native sits in the 200K–500K band (200K = 70), nudged up for 512K YaRN extensibility; no measured retrieval accuracy at long context.
- **Multimodal: 15/100.** Text-only input and output — fixed at 15 per the methodology's text-only band (10–20).
- **Coding: 73/100.** SWE-bench Verified 75.0% and SWE-bench Multilingual 66.0% are strong for a 4B-active MoE, but the missing LiveCodeBench/SciCode figures and the all-vendor sourcing hold it below the frontier anchors.
- **Cost efficiency: 100/100.** Apache-2.0 open weights with a $0 self-host path and a $0 OpenRouter `:free` route — the methodology's $0 = 100 anchor (free tier flagged as promotional).
- **Overall Score: 61/100.** Half-up mean of Tool use (74), Reasoning (68), Context window (74), Multimodal (15), Coding (73) = 304/5 = 60.8 → 61. Best fit: a cheap, locally runnable agentic coder; the text-only multimodal floor and thin reasoning evidence cap its Overall.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-21
- Method: public internet research (Hugging Face `XingChen-AGI/Xing4.0-29B-A4B` + raw README, GitHub `XingChen-AGI/Xing4.0-29B-A4B`, ModelScope GGUF card, GlobeNewswire press release, OpenRouter, LocalClaw, OrcaRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
