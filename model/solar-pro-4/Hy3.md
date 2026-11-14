# Solar Pro 4 — findings by Hy3

- **Source / Date:** Upstage official site, cruciblemark.com, genmagic.co, vandatateam.com — 2026-11-14
- **Overview:** Solar Pro 4 is Upstage's agentic flagship model, released 2026-08-06 as a proprietary cloud API (with dedicated/on-prem options for enterprise). It is built to finish multi-step agent work across terminal tasks, office documents and multi-turn tool use, with a 524,288-token context window (512K per some aggregators) and up to 131K output tokens. It supports a configurable Reasoning Effort (high / low).

## Model Card
| Field | Value |
| --- | --- |
| Provider | Upstage AI |
| Release date | 2026-08-06 |
| Architecture | Undisclosed (proprietary) |
| Parameters | Not disclosed |
| Context window | 524,288 tokens (up to 131K output) |
| Modality | Text |
| Languages | EN, KO, JA |
| License | Proprietary (API; enterprise on-prem available) |
| Pricing | $0.30 in / $1.20 out per 1M tokens |

## Raw Benchmarks
### Agent / Tool Use
- Terminal-Bench v2.1: 12 → 574.8 (Pro 3 → Pro 4 uplift, Upstage internal)
- τ³-Banking (multi-turn tool use): 9 → 232.6
- AA-LCR (long-document reasoning): 31 → 712.3
- tau-bench Airline: 66% (OpenRouter)
- Tool Execution score: 90 / 100 (cruciblemark)

### Reasoning
- GPQA Diamond: 80.8% (OpenRouter)
- Artificial Analysis Intelligence Index: 28.2 (48th of 122 text models)
- Logical Reasoning: 74.85 / 100 (cruciblemark)

### Coding
- Artificial Analysis Coding Index: 52.7
- Code Quality: 74.36 / 100 (cruciblemark); CLI Benchmark 89.9
- SWE-bench: not separately disclosed

### Long Context
- LMArena Longer Query: 1380 Elo
- 524K context window

## Normalized Scores
- **Tool use: 80/100.** Strong agentic profile (Terminal-Bench, tau-bench, Tool Execution 90) is the model's headline strength.
- **Reasoning: 70/100.** GPQA 80.8% is solid; Intelligence Index 28.2 is mid-pack, pulling the average down.
- **Context window: 80/100.** 524K context is large but below the 1M class leaders.
- **Multimodal: 48/100.** Text-only model.
- **Coding: 70/100.** Coding Index 52.7 is modest; CLI/tool-coding is stronger than pure code-gen.
- **Cost efficiency: 70/100.** $0.30/$1.20 per 1M is mid-tier pricing; cheaper than ~71% of models on input.
- **Overall Score: 69.6/100.** Mean of the five quality dims (80+70+80+48+70 = 348 / 5 = 69.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://www.upstage.ai/solar-llms
  - https://www.cruciblemark.com/reports/solar-pro4
  - https://genmagic.co/models/upstage-solar-pro4
  - https://vandatateam.com/ai-model-benchmarks/solar-pro-4
