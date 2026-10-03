# Qwen 3.5 Plus — findings by Laguna S 2.1

- Source: Alibaba (`qwen-3.5-plus` on Alibaba Cloud Model Studio)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba Cloud's hosted flagship Qwen 3.5 model (397B total params, 17B active, MoE), with native multimodal input (text, image, video) and a ~991K context window.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen/qwen-3.5-plus`), also available via DeepInfra
- **Release / knowledge:** 2026-02-15 release; knowledge cutoff 2026-01
- **IDs:** `opencode/qwen-3.5-plus` (per `meta.json`); `alibaba_qwen3.5-plus-thinking` (Vals AI slug)
- **Context window:** 991K total (Vals AI, verified 2026-10-03); extensible to 1M in hosted version per DeepInfra
- **Modalities:** text, image, video in; text out (verified Vals AI)
- **Pricing (as of 2026-10-03):** $0.40 / $2.40 / $0.08 cached per 1M tokens (Vals AI, Alibaba Cloud Model Studio)
- **Architecture:** 397B total parameters, 17B active per inference, MoE with 512 experts (DeepInfra)

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.0: **41.57%** (rank 31/67, Vals AI)
- Finance Agent v1.1: #8 overall, #1 among open-weight models (Vals AI update notes, percentage not published)
- no verified public score found for Tau3-Banking, GDPval-AA, Claw-Eval, ClawProBench, Toolathon, MCP-Atlas, SWE Atlas Codebase QnA

Reasoning / knowledge:

- GPQA Diamond: **87.37%** (rank 38/138, #6 overall, #1 among open-weight, Vals AI)
- MMLU Pro: **87.18%** (rank 34/138, #9 overall, Vals AI)
- LegalBench: **85.10%** (rank 24/149, best result for this model, Vals AI)
- Artificial Analysis Intelligence Index: **45** (rank #3 among open-weights, DeepInfra blog)
- no verified public score found for HLE, LCR/MRCR, CritPt, Omniscience Accuracy/Hallucination Rate

Coding:

- SWE-bench Verified: **71.20%** (rank 59/88, Vals AI)
- LiveCodeBench: **85.33%** (rank 34/143, Vals AI)
- Vibe Code Bench v1.1: **15.74%** (rank 82/108, Vals AI)
- no verified public score found for DeepSWE, SciCode, AA-SciCode
- Artificial Analysis composite SWE-bench Verified: **76.4%** (DeepInfra blog, for the 397B open-weight base)

Long context:

- no verified public score found for MRCR / RULER / GraphWalks

### Normalized scores (1–100)

- **Tool use: 46/100.** Terminal-Bench 2.0 at 41.57% (rank 31/67) falls below frontier mid-range; Finance Agent v1.1 ranks #8 overall and #1 among open-weight models but its percentage was not published. Absence of Tau3-Banking and GDPval-AA benchmarks caps the score.
- **Reasoning: 88/100.** GPQA Diamond 87.37% (#6 overall, #1 among open-weight), MMLU-Pro 87.18% (#9), LegalBench 85.10%, and AA Intelligence Index 45 (#3 open-weights) all indicate strong reasoning. GPQA just below the 90% frontier threshold; no HLE or LCR data recorded.
- **Context window: 93/100.** Verified 991K total context window (Vals AI) — effectively 1M, just shy of the ≥1M = 95–100 bracket; firmly in the 500K–1M band.
- **Multimodal: 75/100.** Supports text, image, and video input with text output (verified on Vals AI). Vision-specific performance is weak: MMMU Pro only 22.77% (rank 93/93) due to sensitive content filter and output-formatting issues.
- **Coding: 76/100.** Solid SWE-bench Verified (71.20%, rank 59/88) and LiveCodeBench (85.33%, rank 34/143). Vibe Code Bench at 15.74% and lack of DeepSWE/SciCode data cap the score. AA reports 76.4% SWE-bench Verified for the 397B base (DeepInfra).
- **Cost efficiency: 94/100.** $0.40/$2.40 per 1M tokens on Alibaba Cloud Model Studio — very competitive, well below frontier paid-model pricing.
- **Overall Score: 76/100.** Half-up mean of five quality dims: (46+88+93+75+76)/5 = 75.6 → 76. Strong reasoning and context for a hosted open-weight-tier model; tool-use and coding-vision gaps are the main constraints.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-03
- Method: public internet research via Vals AI, DeepInfra blog, and Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---