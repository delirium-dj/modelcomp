# Ling 3.0 Flash VL — findings by MiniMax M3.1 Flash

- Source: inclusionAI (Ling 3.0 Flash VL), `inclusionAI/Ling-3.0-flash-VL`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** InclusionAI's September 2026 open-weight (MIT) vision-language sibling of Ling 3.0 Flash — a 124B sparse MoE with 5.5B active parameters plus a ViT projector, built for GUI agents and visual search: WebVoyager 90.8, MMSearch 79.0, MMMU-Pro 79.0 at $0.06/$0.18 per 1M.
- **Provider / access:** Hugging Face `inclusionAI/Ling-3.0-flash-VL` (plus `-fp8`, `-fp4`, `-int4` quants), OpenRouter `inclusionai/ling-3.0-flash-vl` (snapshot `20260910`, DeepInfra fp16 endpoint), SGLang / vLLM local serving. **Not on OpenCode Zen** — Zen's catalogue has no Ling 3.0 VL route.
- **Release / knowledge:** HF repo created **2026-09-04**, public release **2026-09-10**. Knowledge cutoff not published.
- **IDs:** `inclusionAI/Ling-3.0-flash-VL` (HF), `inclusionai/ling-3.0-flash-vl` (OpenRouter, models.dev).
- **Context window:** **262,144** per the model card and models.dev, but the config's `max_position_embeddings` is **131,072** and SGLang states the native window is 128K with 256K reached via YaRN (`rope_scaling factor 2.0`); OpenRouter serves 131,072 — conflict flagged.
- **Modalities:** text, image and video input; text out. **Audio is not supported** (the processor rejects audio parts).
- **Pricing (as of 2026-10-20):** **$0.06/M in, $0.18/M out**, cache read $0.012 (OpenRouter / DeepInfra fp16 — the only endpoint). Self-host $0 (MIT).
- **Architecture:** sparse MoE, 42 layers, 512 routed experts with top-8, hidden 2560, 27-layer ViT (patch 16, spatial merge 2) + 2-layer MLP projector + VideoRoPE; no MTP draft layer (the text base has one).

### Raw benchmarks found

> Vendor card figure (multimodal comparison table) plus Artificial Analysis and BenchLM readings.

Agent / tool use:

- MMSearch: **79.0%** (vendor) · ClawEval-MM: **59.9%** (vendor) · WebVoyager: **90.83%** (vendor) · Vision2Web: **57.69%** (vendor) · CountBench: **97.33%** (vendor) · WorldVQA: **45.67%** (vendor)
- GDPval-AA: **33.1%** normalized (AA) · Terminal-Bench / Tau2 / OSWorld: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.2%** (AA) · HLE: **22.0%** (AA) · AA-LCR: **78.3%** (AA) · CritPt: **2.0%** (AA)
- Artificial Analysis Intelligence Index: **25** (v4.3.2, #2 of 67 in the medium open-weight class) — the vendor card cites the older **v4.1.1 = 42**, an index-version conflict
- Omniscience Index / Accuracy / Hallucination: **−4.5 / 14.4% / 22.0%** (AA) · MMLU-Pro: no verified public score found

Coding:

- AA-SciCode: **44.2%** (AA) · LiveCodeBench / SWE-bench / DeepSWE: no verified public score found for the VL checkpoint (the figures published for the text-only Ling 3.0 Flash base do not transfer)

Multimodal:

- MMMU-Pro: **79.0%** (vendor and AA) · MathVision: **84.87%** (vendor) · HLE-MM: **19.88%** (vendor) · OmniDocBench 1.5: **91.35%** (vendor) · CharXiv RQ: **81.30%** (vendor) · AntBench-Medical: **0.96 / 0.93** (vendor)

Long context:

- No MRCR / RULER measurement published; the 256K figure is the YaRN extension of a 128K native window.

### Normalized scores (1–100)

- **Tool use: 60/100.** WebVoyager 90.8%, MMSearch 79.0% and ClawEval-MM 59.9% show real GUI/search agent behaviour, but GDPval-AA normalizes to just 33.1% and no Terminal-Bench or τ² figure exists, so the score stays mid.
- **Reasoning: 68/100.** GPQA 86.2% and AA-LCR 78.3% are solid, capped by HLE 22.0%, CritPt 2.0%, no published MMLU-Pro and an AA Intelligence Index of 25 on the current index version.
- **Context window: 70/100.** 131,072 native (262,144 via YaRN) sits in the 100K–200K band at its core and the 200K–500K band only through the extension, with no retrieval measurement published — the tier midpoint is used.
- **Multimodal: 80/100.** Text, image and video input with text out — MMMU-Pro 79.0%, OmniDocBench 91.35%, MathVision 84.87% and CharXiv 81.3% — the video-in band without audio.
- **Coding: 45/100.** SciCode 44.2% is the only code-facing number published for this checkpoint, and no SWE-bench, LiveCodeBench or DeepSWE figure exists for the VL build.
- **Cost efficiency: 97/100.** $0.06/M in and $0.18/M out is among the cheapest multimodal routes available, and MIT weights are free to self-host.
- **Overall Score: 65/100.** Mean of the five quality dims = (60 + 68 + 70 + 80 + 45) / 5 = 64.6 → **65**. Best fit: cheap open-weight GUI and visual-search agents — pair it with a text model for coding.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (inclusionAI Hugging Face model card and config, SGLang cookbook, Artificial Analysis, BenchLM, models.dev, OpenRouter API); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Ling_3.1_Flash_VL.md`, using the same headings.
