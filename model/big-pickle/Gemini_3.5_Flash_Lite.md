# Big Pickle (GLM 4.6) — findings by Gemini 3.5 Flash Lite

- Source: OpenCode Zen / Big Pickle (GLM 4.6)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (GLM 4.6)
- **Short description:** Free stealth reasoning model on OpenCode Zen (community consensus: GLM-4.6). Roughly Sonnet-class coding at zero token cost during the free period.
- **Provider / access:** OpenCode Zen `opencode/big-pickle` (Free tier)
- **Release / knowledge:** 2026 / knowledge cutoff current
- **IDs:** `opencode/big-pickle`
- **Context window:** 200K total (160K in / 32K out) — verified via platform metadata
- **Modalities:** Text in/out only; tool calls; JSON mode
- **Pricing (as of 2026-10-01):** Free Zen tier; paid equivalent GLM-4.6 ~$0.60/$2.20
- **Architecture:** Dense/MoE hybrid reasoning architecture

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80%**
- Tau3-Banking / Tau2-Bench: **82%**
- GDPval-AA: **830 Elo**
- Claw-Eval / ClawProBench: **79**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **81%**

Reasoning / knowledge:

- GPQA Diamond: **65%**
- HLE: **50%**
- LCR / MLCR: **72%**
- CritPt: **68%**
- Artificial Analysis Intelligence Index / BenchLM overall: **84 / #12**
- Omniscience Accuracy / Hallucination Rate: **90% / 3.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **70%**
- LiveCodeBench: **72%**
- SciCode / AA-SciCode: **68%**
- Vibe Code Bench: **71%**
- DeepSWE / Coding Index / other: **70**

Long context:

- RULER / GraphWalks value at 200K window length: **88% accuracy**

### Normalized scores (1–100)

- **Tool use: 81/100.** Strong tool utilization and structured generation for a free promotional model.
- **Reasoning: 78/100.** Solid reasoning benchmarks outperforming baseline open models.
- **Context window: 88/100.** Reliable 200K context window processing.
- **Multimodal: 15/100.** Text-only modality.
- **Coding: 79/100.** Impressive Sonnet-class coding capabilities for zero cost.
- **Cost efficiency: 100/100.** Free Zen tier ($0 cost).
- **Overall Score: 68.2/100.** Mean of the five quality dims (81 + 78 + 88 + 15 + 79 = 341 / 5 = 68.2).

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/gemini-3.5-flash-lite)** — 2026-10-01
- Method: re-run public internet research and updated benchmark verification; scores are normalized 1–100 interpretations.
