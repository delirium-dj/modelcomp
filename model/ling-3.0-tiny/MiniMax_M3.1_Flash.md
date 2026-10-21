# Ling 3.0 Tiny — findings by MiniMax M3.1 Flash

- Source: inclusionAI (Ling 3.0 Tiny), `inclusionAI/Ling-3.0-tiny`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Tiny
- **Short description:** InclusionAI's August 2026 open-weight (MIT) reasoning MoE built for **efficient deployment** — 7.9B total but only **1.3B active** per token, 128K native (256K via YaRN), a native hybrid KDA/MLA architecture, and a **free** hosted API plus an 8.34 GiB local footprint that runs at ~100 tok/s on a DGX Spark.
- **Provider / access:** Hugging Face `inclusionAI/Ling-3.0-tiny` (MIT), Requesty `ling-3.0-tiny` (**$0/$0**), the retired OpenCode slot `ling-3.0-tiny-free` (free; now deprecated and gone from the live catalogue). The OpenRouter page exists but has **no live endpoints**; ZenMux does not list it.
- **Release / knowledge:** **2026-08-06** (AA, models.dev); the HF repo was created 2026-08-10. Knowledge cutoff not published.
- **IDs:** `inclusionAI/Ling-3.0-tiny` (HF), `ling-3.0-tiny` (Requesty).
- **Context window:** **131,072** native, extended to **262,144** with YaRN (factor 2.0) — AA lists 262k.
- **Modalities:** text in / text out only; hybrid thinking/non-thinking via `enable_thinking`; `ling3` reasoning and tool parsers; recommended sampling temperature 1.0 / top_p 0.95 / top_k 20.
- **Pricing (as of 2026-10-20):** **$0 / $0** (free hosted API); self-host $0 (MIT).
- **Architecture:** `BailingMoeV3ForCausalLM`, 24 layers = 3 Kimi Delta Attention + 1 MLA per 4-layer block (3:1), hidden 1536, 128 routed + 1 shared expert (top-8), vocab 157,184; **no MTP weights shipped** (the card's low-latency recipe still passes `--speculative-algorithm NEXTN` — an inconsistency worth flagging).

### Raw benchmarks found

> The model card's table (image) plus the Artificial Analysis rows mirrored by BenchLM; one
> AA-LCR row conflicts with the card.

Reasoning / knowledge:

- GPQA Diamond: **73.40%** (card) / **73.43%** (AA) · HLE: **9.30%** (card) / **9.31%** (AA) · HMMT-Feb26: **70.31%** · IMO-AnswerBench: **71.03%**
- AA-LCR: **58.70%** (card) vs **60.3%** (AA) — conflict flagged · AA-Omniscience Accuracy **8.52%** / non-hallucination **69.54%** (card) vs AA hallucination rate **30.5%** · CritPt **0%** · Artificial Analysis Intelligence Index: **11** (card claims the older v4.1.1 value of 25) · Omniscience Index −19.3%
- AIME (any year) / MMLU-Pro / LiveCodeBench / FrontierMath: **no verified public score found**

Agent / tool use:

- Terminal-Bench 2.1: **27.70%** (card, AA protocol, Terminus 2, 2 h timeout, 3 runs) / **27.72%** (AA) · TAU3-Banking-AA: **20.80%** (card) / **20.82%** (AA) · BFCL-v4: **62.72%** (card) · GDPval v2-AA: **772.00** (card) / **561.44** (AA, 3.1% normalized) · Terminal-Bench 4.0: **0%** (AA) · AutomationBench: **0.28%** (AA) · Tau2-bench: no verified public score found

Coding:

- SciCode: **24.20%** (card) / **24.19%** (AA) · ArtifactsBench: **47.93%** (card) · SWE-bench / DeepSWE / LiveCodeBench: **no verified public score found**
- Instruction following: IFBench **63.61%** · LIFEBench **62.30%** · Multi-IF **83.15%** (card)

Local deployment (vendor): FP8 at ~**100–105 tok/s on a DGX Spark** and ~86–90 tok/s on an M4 Pro MacBook, ≈**8.34 GiB** peak memory at 8K context; validated on DGX Spark, Apple Silicon MacBook and Mac mini, with Ollama/MLX and SGLang support.

### Normalized scores (1–100)

- **Tool use: 40/100.** Terminal-Bench 2.1 27.7%, TAU3-Banking 20.8% and AutomationBench 0.28% are low, with GDPval-AA at 772 Elo (3.1% normalized) confirming a thin agentic profile.
- **Reasoning: 62/100.** GPQA 73.4%, HMMT-Feb26 70.3% and IMO-AnswerBench 71.0% are decent for a 1.3B-active model, capped by HLE 9.3%, CritPt 0% and an Intelligence Index of 11.
- **Context window: 72/100.** 262,144 (YaRN over 128K native) with AA-LCR at 58.7–60.3% and no MRCR figure.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 38/100.** SciCode 24.2% is the only code-facing row, with no SWE-bench, LiveCodeBench or DeepSWE figure.
- **Cost efficiency: 100/100.** **$0 / $0** on the hosted API, MIT weights, and a local footprint of 8.34 GiB at ~100 tok/s.
- **Overall Score: 45/100.** Mean of the five quality dims = (40 + 62 + 72 + 15 + 38) / 5 = 45.4 → **45**. Best fit: free on-device reasoning and light tool use on a MacBook or DGX Spark — the efficiency story, not the capability story.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (inclusionAI Ling 3.0 Tiny Hugging Face model card, config.json and rendered benchmark table, Artificial Analysis, BenchLM, models.dev, OpenRouter API, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Ling_3.1_Flash.md`, using the same headings.
