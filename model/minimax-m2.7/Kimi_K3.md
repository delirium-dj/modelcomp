# MiniMax M2.7 — findings by Kimi K3

- Source: MiniMax / MiniMax M2.7 (`minimax-m2.7`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's open-weight M2.7 — dependable mid-tier coding (SWE-bench Verified* 75.4%) and τ²-bench 84.8% tool use at 200K context; non-reasoning base per BenchLM. Succeeded by M3.
- **Provider / access:** MiniMax API (OpenAI-compatible); open weights; OpenRouter.
- **Release / knowledge:** 2026 (exact date not verified in my sources); cutoff not verified.
- **IDs:** `minimax/minimax-m2.7` (no Zen Free ID verified).
- **Context window:** 200K tokens (benchlm.ai).
- **Modalities:** text in (Design Arena row only for vision); text out; reasoning: no (benchlm.ai classification); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price in my sources; open weights → cheap hosting (provisional).
- **Architecture:** open weights (benchlm.ai); params undisclosed here.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **84.8%** (benchlm.ai)
- Terminal-Bench 2.0: **57.0%**; TB 2.1 (Vals): **48.7%** (benchlm.ai)
- Claw-Eval: **48.7%**; MM-ClawBench: **62.7%** (benchlm.ai)
- MLE-Bench Lite: **66.6%**; Toolathlon: **46.3%** (benchlm.ai)
- GDPval-AA: **1087 Elo** (24.9% normalized); APEX-Agents-AA: **10.6%**; AA Agentic Index: **16.8%** (benchlm.ai)
- Tau3: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (GPQA-D); 87.4% (AA); 86.6% (Vals) (benchlm.ai)
- HLE (AA-HLE): **29.6%** (benchlm.ai)
- AA-LCR: **78.3%**; CritPt: **0.6%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **22.8**; BenchLM overall **48.08/100, #83 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **26.8% / 35.6%** (benchlm.ai)
- AIME 2025 (Arcee): **80.0%**; MMLU-Pro: **80.4–80.8%**; AA-IFBench: **75.7%** (benchlm.ai)

Coding:

- SWE-bench Verified*: **75.4%** (Arcee harness); SWE-bench (Vals): **73.8%**; SWE-bench Pro: **56.2%**; SWE-Rebench: **51.9%**; SWE Multilingual: **76.5%**; Multi-SWE Bench: **52.7%** (benchlm.ai)
- LiveCodeBench (Vals): **79.9%** (benchlm.ai)
- Vibe Code Bench: **27.0%**; NL2Repo: **39.8%**; AA-SciCode: **50.1%**; AA Coding Index: **52.6**; VIBE-Pro: **55.6%**; React Native Evals: **71.4%** (benchlm.ai)

Long context:

- AA-LCR 78.3% within the 200K window (benchlm.ai); no MRCR rows.

Multimodal:

- Design Arena Website: **1254 Elo** (benchlm.ai); effectively text-primary.

### Normalized scores (1–100)

- **Tool use: 70/100.** τ² 84.8% and MLE-Bench Lite 66.6% good; capped by GDPval 1087, APEX 10.6%, Agentic Index 16.8%.
- **Reasoning: 68/100.** GPQA ~87% consistent across harnesses, AIME 80%; capped by HLE 29.6% and CritPt 0.6%.
- **Context window: 62/100.** 200K window with decent LCR 78.3%; below the 1M tier.
- **Multimodal: 55/100.** Essentially text-model with one Design Arena row; text-only output.
- **Coding: 70/100.** Broad SWE coverage (~74% verified-ish); capped by NL2Repo 39.8% and Coding Index 52.6.
- **Cost efficiency: 84/100.** Open weights; MiniMax pricing historically aggressive (provisional).
- **Overall Score: 65/100.** Mean of the five quality dims (70+68+62+55+70)/5 = 65.0 → 65. Best fit: budget open-weights tool calling and mid-difficulty coding.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
