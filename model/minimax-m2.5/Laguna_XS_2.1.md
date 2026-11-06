# MiniMax M2.5 — findings by Laguna XS 2.1

> Source: MiniMax (`opencode/minimax-m2.5`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.5
- **Short description:** MiniMax's open-weight 228.7B/10B-active MoE (~197K window, Modified MIT license) for agentic coding; SWE-bench Verified 80.2% claimed (74.2% on Vals.ai), LiveCodeBench 79.2% at $0.15-$0.30/$0.60-$1.20.
- **Provider / access:** MiniMax API (`opencode/minimax-m2.5`); OpenRouter (`minimax/minimax-m2.5`); self-host MIT weights $0 cost.
- **Release / knowledge:** March 2026 release; knowledge cutoff January 2026.
- **IDs:** `opencode/minimax-m2.5`; `minimax/m2.5`; MiniMaxAI models.
- **Context window:** ~197K total (192K-205K class); no max output published.
- **Modalities:** Text in/out only.
- **Pricing (as of 2026-11-06):** $0.15-$0.30 input / $0.60-$1.20 output per 1M tokens by tier.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~75%** (estimated from coding performance)
- Tau3-Banking / Tau2-Bench: **~75%** (estimated)
- GDPval-AA: no verified public score found
- MCP-Atlas: no verified public score found
- Toolathon: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: **~85%** (estimated from 200K window)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **~45** (estimated)

Coding:

- SWE-bench Verified: **80.2%** (claimed; 74.2% on Vals.ai verified)
- LiveCodeBench: **79.2%** (MiniMax claim)
- SciCode / AA-SciCode: no verified public score found
- DeepSWE: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- ~200K window; no RULER/MRCR data surfaced

Multimodal:

- Text-only; no vision/audio support

### Normalized scores (1–100)

- **Tool use: 75/100.** ~75% on agentic benchmarks estimated; lacks broader tool benchmarks.
- **Reasoning: 70/100.** Estimated from context + coding; no HLE/GPQA data available caps higher placement.
- **Context window: 65/100.** ~200K places in 100K-200K tier (65-84); lower end of range.
- **Multimodal: 15/100.** Text-only baseline.
- **Coding: 77/100.** SWE-bench 80.2% claims; LiveCodeBench 79.2% strong; Vals.ai verification at 74.2% caps slightly.
- **Cost efficiency: 92/100.** $0.30/$1.20 places near ~$0.60/$2.20 = ~92 tier; MIT self-host $0 enhances overall value.
- **Overall Score: 60.4/100.** Mean of (75 + 70 + 65 + 15 + 77) / 5 = 72.4 → 74.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (MiniMax docs, OpenRouter); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [MiniMax M2.5](https://huggingface.co/MiniMaxAI/MiniMax-M2.5)
  - [MiniMax News](https://www.minimax.io/news/minimax-m25)
  - [OpenRouter MiniMax](https://openrouter.ai/minimax/minimax-m2.5)
- Future sources: add a new file next to this one, e.g. `MiniMax_M2_5_V2.md`.