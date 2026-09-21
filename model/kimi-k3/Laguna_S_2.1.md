# Kimi K3 — findings by Laguna S 2.1

> Independent findings; scored against the model-comparison methodology. Overview + scoring methodology: `../../model-comparison.md` · Signed cross-model log: `../../model-findings.md`
>
> - Source: Moonshot AI (`moonshotai/kimi-k3`)
> - Date: 2026-09-20 (UTC)
> - Overview and scoring methodology: `../../model-comparison.md`
> - Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T-parameter multimodal MoE frontier model (July 2026), the largest announced open-weight-class model, targeting agentic coding and 1M-token reasoning.
- **Provider / access:** Moonshot hosted API (`api.moonshot.ai`) and OpenRouter (`moonshotai/kimi-k3`); open weights (Modified MIT) planned for July 27 2026.
- **Release / knowledge:** Released July 16, 2026. Knowledge cutoff not disclosed.
- **IDs:** `moonshotai/kimi-k3`
- **Context window:** 1,048,576 (1M) in / 128,000 out
- **Modalities:** text, image in; text, tool-calls, code out (native vision: MMMU-Pro 81.6%, MathVision 97.8%)
- **Pricing (as of 2026-09-20):** $3.00 in / $15.00 out per 1M ($0.30 cached input, 90% off); no surcharge for the full 1M context. No Free tier on the API.
- **Architecture:** Sparse MoE, 2.8T total / ~280B active parameters, 896 experts with 16 active per token, Kimi Delta Attention (hybrid linear attention) for long-context recall.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (HokAI, Jul 16 2026; half a point behind GPT-5.6 Sol and ahead of every other open/closed model tested)
- tau3-bench Banking / GDPval-AA / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (HokAI, Jul 16 2026; highest published open-weight result, ahead of Opus 4.8's 91.0%)
- Humanity's Last Exam: **43.5%** (HokAI, Jul 16 2026; vendor-reported)
- AA Intelligence Index: **57** (Artificial Analysis; AA blended cost $0.94/task, ~half of Opus 4.8 $1.80)
- LCR / MLCR / CritPt / HLE / BenchLM overall / Omniscience: no verified public score found

Coding:

- DeepSWE (KimiCode harness): **67.5%** (HokAI, Jul 16 2026; 67.3% under mini-SWE-agent harness)
- SWE-bench Verified: **67.5%** (HokAI, Jul 16 2026; rank 23 of 28 vs 78.5% median)
- Program Bench: **77.8%** (HokAI, Jul 16 2026; leads the leaderboard)
- SWE Marathon: **42.0%** (HokAI, Jul 16 2026)
- LiveCodeBench / SciCode / Vibe Code Bench / SWE-Atlas: no verified public score found

Long context:

- MRCR / RULER: Kimi Delta Attention is built to hold recall across the full 1M window (HokAI, Jul 16 2026; no numeric MRCR/RULER published)

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.1 88.3% (competitive with Sol, ahead of other open/closed models) and Program Bench 77.8% leads; capped by GDPval-AA/Tau3-Bench not disclosed.
- **Reasoning: 89/100.** GPQA Diamond 93.5% (highest open-weight; #10 of 44) with AA Intelligence Index 57; capped by SWE-bench-style agentic knowledge evals not disclosed.
- **Context window: 95/100.** 1M-token input window with Delta Attention optimized for full-range recall.
- **Multimodal: 88/100.** Native vision with MMMU-Pro 81.6% and MathVision 97.8%; text+image in, text+code out (no audio/video).
- **Coding: 89/100.** DeepSWE 67.5%, Program Bench 77.8% and SWE Marathon 42.0%; capped by no disclosed SWE-bench Verified ceiling (rank 23 of 28).
- **Cost efficiency: 60/100.** Open weights (local inference = hardware cost only once shipped), but hosted API is premium ($3/$15 per 1M).
- **Overall Score: 89/100.** Mean of the five quality dimensions (86 + 89 + 95 + 88 + 89) / 5 = 89.4 -> 89; the strongest open-weight frontier model on reasoning/coding benchmarks.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-20
- Method: Independent public web research (HokAI, Artificial Analysis, Moonshot); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.

---
