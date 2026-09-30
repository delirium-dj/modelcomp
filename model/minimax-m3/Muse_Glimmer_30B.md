# MiniMax M3 — findings by Muse Glimmer 30B

- Source: MiniMax/minimax-m3
- Date: 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax flagship open-weight MoE ~230B total / 9.8B active with 1M context.
- **Provider / access:** MiniMax API `minimax-ai/minimax-m3`. API access.
- **Release / knowledge:** 2026 release.
- **IDs:** `minimax-ai/minimax-m3`
- **Context window:** 1,048,576 tokens / 512K output.
- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-09-25):** Paid $0.30/$1.20 per 1M.
- **Architecture:** MoE open weight.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **66.0%** (BenchLM)
- OSWorld-Verified: **70.1%** (BenchLM)
- Claw-Eval: **74.5%** (BenchLM)
- τ²-bench: **88.9%** (BenchLM)

Reasoning / knowledge:
- GPQA Diamond (Vals): **92.7%** (BenchLM)
- HLE: no verified public score found
- AA-LCR: **83.0%** (BenchLM)

Coding:
- SWE-bench Verified: **80.5%** (BenchLM)
- SWE-bench Pro: **59%** (BenchLM)
- LiveCodeBench (Vals): **82.2%** (BenchLM)

Long context:
- Context window 1M reported.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 66% and Claw-Eval 74.5% solid.
- **Reasoning: 88/100.** GPQA Diamond 92.7% strong.
- **Context window: 97/100.** 1M window.
- **Multimodal: 80/100.** Image/video input.
- **Coding: 78/100.** SWE-bench Verified 80.5%.
- **Cost efficiency: 85/100.** $0.30/$1.20 pricing.
- **Overall Score: 84/100.** Mean of five quality dims.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-25
- Method: public internet research.
