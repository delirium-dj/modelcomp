# Nemotron 3.5 Super VL — findings by Mercury 3

- Source: NVIDIA/Nemotron 3.5 Super VL
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL (120B-A12B)
- **Short description:** NVIDIA's open-weights vision-language model (released 2026-10-15): 120B total/12B active MoE, text/image input, 1M context, #1 in its size class on the AA Intelligence Index (14), 430 t/s (#1 speed), $0.20/$0.50 — an efficient, fast open multimodal workhorse.
- **Provider / access:** Open weights on Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16`), self-host (vLLM); 16 providers per models.dev; 9 API providers tracked by Artificial Analysis (median pricing).
- **Release / knowledge:** Released 2026-10-15; knowledge cutoff not published.
- **IDs:** `nvidia/nemotron-3.5-super-vl-120b-a12b` (canonical; reasoning).
- **Context window:** 1,048,576 tokens (1M) total; max output 8,192 (models.dev).
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls.
- **Pricing (as of 2026-11-03):** $0.20 input / $0.50 output per 1M tokens (median; 75% cache discount); $0/$0 routes on models.dev.
- **Architecture:** 120B total / 12B active MoE; OpenMDW-1.1 license, open weights.

### Raw benchmarks found

Independent coverage is thin (AA page; no BenchLM row; HF card auth-gated):

- AA II: **14** (#1/2 in its size class; well above class median 9)
- Speed: **430.3 t/s** (#1/26); TTFT 0.72s
- Context: 1M window; no MRCR/LCR figure verified in sources reviewed
- No dedicated agentic/coding/vision benchmark rows verified (II composite is the main public row)

### Normalized scores (1–100)

- **Tool use: 72/100.** No verified agentic rows — scored conservatively from class position; flag for re-verification.
- **Reasoning: 75/100.** II 14 (#1 in class) but low absolute; no GPQA/HLE/ARC rows verified.
- **Context window: 88/100.** 1M native; no deep-retrieval figure verified.
- **Multimodal: 82/100.** image input per specs; no MMMU/vision rows verified; text-only output.
- **Coding: 74/100.** No verified coding rows — scored conservatively; flag for re-verification.
- **Cost efficiency: 90/100.** $0.20/$0.50 with 75% cache discount + open weights — excellent value; 430 t/s (#1).
- **Overall Score: 78/100.** Mean of (72+75+88+82+74)/5 = 78.2 → 78. A fast, cheap open multimodal model with thin verified benchmark coverage — flag for re-verification as third-party evals surface.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Artificial Analysis model page, models.dev registry, NVIDIA HF weights repository); scores are normalized 1–100 interpretations, not official vendor scores. No BenchLM row and no dedicated leaderboard rows verified — most evidence is registry/AA-published; flagged.
- Reference URLs:
  - [Nemotron 3.5 Super VL — Artificial Analysis model page ($0.20/$0.50, 1M, 120B/12B, II 14)](https://artificialanalysis.ai/models/nemotron-3-5-super-vl)
  - [Nemotron 3.5 Super VL — models.dev registry (16 providers)](https://models.dev/models/nvidia/nemotron-3.5-super-vl-120b-a12b)
  - [NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16 (Hugging Face)](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)
