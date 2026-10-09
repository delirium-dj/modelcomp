# Solar Open 2 — findings by DeepSeek 4.1 Flash

- Source: Upstage / Solar Open 2 (250B) (`upstage/Solar-Open2-250B`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2 (Solar-Open2-250B)
- **Short description:** Upstage's (South Korea) open-weight flagship MoE text model (released 2026-07-22) with a 1M-token context, strong math/coding and Korean-language coverage. The strongest publicly open Korean-origin frontier model of mid-2026.
- **Provider / access:** Open weights self-host only (min 4×H200 BF16 or 2×H200 quantized; official INT4/NVFP4 by NotaAI); no first-party per-token API. "Upstage Solar License" (commercial use OK, naming/attribution required) — not OSI-open.
- **Release / knowledge:** 2026-07-22 (Upstage; AA lists 2026-08-12); knowledge cutoff not published.
- **IDs:** `upstage/Solar-Open2-250B`.
- **Context window:** **1,000,000 tokens** (HF card + Upstage blog + AA). Max output not separately published.
- **Modalities:** text in; text out. Reasoning (`reasoning_effort` none/high, trace up to 131,072 tok); tool calling + MCP, parallel tools; EN/KO/JA.
- **Pricing (as of 2026-10-09):** open weights (self-host); no per-token price.
- **Architecture:** MoE, **250B total / 15B active** (250,287,794,944 params); 48 layers; 320 routed + 1 shared expert (top-8 + shared); hybrid attention (GQA softmax + linear, `[softmax, linear×3]×12`, linear on 75% of layers), NoPE; vocab 196,608; ~12T pretraining tokens; warm-started from Solar Open 100B.

### Raw benchmarks found

> Essentially all rows are Upstage self-reported; the only third-party number is an Artificial Analysis **estimated** Intelligence Index.

Reasoning / knowledge:

- MMLU-Pro **86.2**; GPQA-Diamond **86.3**; HLE (no tools) **28.8**; AA-LCR 62.3
- AIME 2026 **95.7**; HMMT2602 93.9; IFBench 80.0 (self)
- Artificial Analysis Intelligence Index: **25** (estimated; "independent evaluation forthcoming")

Coding / agent:

- LiveCodeBench v6 **92.4**; SWE-bench Verified **70.4**; Terminal-Bench Hard 28.3
- MCP-Atlas 58.2; τ³ (banking) 19.6; APEX-Agents 16.6; GDPval-AA v2 1128 (self)

Korean:

- KMMLU-Pro 78.4; CLIcK 90.7; HAE-RAE 73.8; Ko-AIME'25 97.7; HRM8K 92.2; KorMedMCQA 93.0 (self)

Long context:

- 1M window; **no MRCR/RULER published — no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 75/100.** MCP-Atlas 58.2, τ³ 19.6 (low) and GDPval-AA 1128 are mid; APEX-Agents 16.6 caps agentic depth.
- **Reasoning: 80/100.** GPQA 86.3%, MMLU-Pro 86.2% and AIME 95.7% are high; HLE 28.8% and a low estimated AA Index 25 hold it back.
- **Context window: 95/100.** 1,000,000-token window (≥1M band); no ≥98%-at-512K retrieval benchmark, so not 100.
- **Multimodal: 15/100.** Text-only (no image/audio/video input) despite the "frontier" positioning.
- **Coding: 76/100.** LiveCodeBench 92.4%, SWE-bench Verified 70.4% are strong; Terminal-Bench Hard 28.3% and self-reported-only status cap it.
- **Cost efficiency: 96/100.** Open weights (self-host, commercial license); no per-token fee, but hardware overhead applies.
- **Overall Score: 68/100.** (75 + 80 + 95 + 15 + 76) / 5 = 68.2 → 68. Best fit: self-hosted long-context reasoning/math and Korean-language work; pair with a multimodal model for vision.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: public internet research, cross-checked across the Upstage Hugging Face card/blog and the Artificial Analysis model page. Nearly all capability numbers are Upstage self-reported; the only third-party result is an estimated AA Intelligence Index, and this is stated. Normalized 1–100 interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
