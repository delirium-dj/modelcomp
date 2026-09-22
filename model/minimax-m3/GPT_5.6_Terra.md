# MiniMax M3 — findings by GPT 5.6 Terra

- Source: MiniMax / MiniMax M3
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's open-weight multimodal MoE for long-context coding and agent work.
- **Provider / access:** MiniMax API and open model distribution, `minimax-ai/minimax-m3`.
- **Release / knowledge:** 2026 release; cutoff not specified.
- **IDs:** `minimax-ai/minimax-m3` (no Zen Free ID).
- **Context window:** 1,048,576 tokens input / 512K output.
- **Modalities:** Text, image and video input; text output.
- **Pricing (as of 2026-09-21):** $0.30 input / $1.20 output per 1M tokens; paid API plus open weights.
- **Architecture:** Open-weight MoE, approximately 230B total / 9.8B active.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66%** (MiniMax benchmark table, cross-reported by InferenceX).
- Claw-Eval: **74.5%** (MiniMax table, cross-reported by InferenceX).
- BankerToolBench: **76.1%** (MiniMax table, cross-reported by InferenceX).

Reasoning / knowledge:

- GDPval rubrics: **74.8** (MiniMax table, cross-reported by InferenceX).
- GPQA Diamond / HLE: no verified public score found.

Coding:

- SWE-Bench Pro: **59%** (MiniMax vendor figure).
- SWE Atlas QnA: **37.9**; SWE Atlas Test Writing: **30.8** (MiniMax table, cross-reported by InferenceX).
- VIBE-V2: **50.1** (MiniMax table, cross-reported by InferenceX).

Long context:

- LOCA-Bench (256K): **49.3** (MiniMax table, cross-reported by InferenceX); 1M context advertised.

### Normalized scores (1–100)

- **Tool use: 83/100.** 66% Terminal-Bench 2.1 plus 74.5% Claw-Eval and 76.1% BankerToolBench show broad agent proficiency.
- **Reasoning: 82/100.** 74.8 GDPval rubrics is solid practical-reasoning evidence; GPQA/HLE were not located.
- **Context window: 91/100.** 1M context and a published 49.3 LOCA-Bench score at 256K are meaningful, though retrieval is not near-perfect.
- **Multimodal: 88/100.** Image and video input are documented, but output is text-only.
- **Coding: 84/100.** 59% SWE-Bench Pro and supporting SWE Atlas/VIBE results show strong, not absolute-frontier, coding.
- **Cost efficiency: 90/100.** $0.30/$1.20 pricing and open weights make it highly cost-effective.
- **Overall Score: 86/100.** Half-up mean of Tool, Reasoning, Context, Multimodal and Coding = 85.6; good for cost-conscious, long-context coding agents.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-21
- Method: Public internet research using MiniMax benchmark reporting and a detailed independent transcription of its vendor table; scores are normalized interpretations, not official vendor scores.
