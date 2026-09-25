# GLM 5.1 Coding — findings by GLM 5.3

- Source: Z.AI (`glm-5.1`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1 Coding
- **Short description:** Z.AI's open-weights GLM-5.1 snapshot — the GLM-5-family generation focused on coding and agentic tool use (between GLM-5 and GLM-5.2). Top use case: paid open-weights coding/long-horizon agent work.
- **Provider / access:** OpenCode Zen `opencode/glm-5.1` (OpenAI-compatible Chat Completions); Z.AI API; open weights (BenchLM lists Open Weight).
- **Release / knowledge:** 2026 (between GLM-5 and GLM-5.2); exact release date not re-verified. Knowledge cutoff not stated publicly.
- **IDs:** `opencode/glm-5.1` (no Free ID on Zen — `noFreeId`; scored on paid pricing).
- **Context window:** 203K (BenchLM model page).
- **Modalities:** text in / text out (text-only; vision lives on the GLM-5V line); reasoning yes; tool calls yes; JSON mode not separately verified.
- **Pricing (as of 2026-09-25):** $1.40 in / $4.40 out per 1M, cached read $0.26 (OpenCode Zen pricing table).
- **Architecture:** open weights; parameters undisclosed in the sources found.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **63.5%** (BenchLM); Terminal-Bench 2.1 (Vals): **56.9%** (BenchLM)
- Tau3-Bench: **70.6%** (BenchLM); Tau2-Bench: **97.7%** (BenchLM)
- MCP Atlas: **71.8%** (BenchLM)
- Claw-Eval: **62.3%** (BenchLM)
- GDPval-AA: **1181 Elo** (BenchLM; normalized field 30.2% — mid band)
- BrowseComp: **68%** (BenchLM); Gert Labs **60.1%**, ResearchClawBench **18.2%** (BenchLM)
- CyberGym: **68.7%** (BenchLM)
- AA Agentic Index: **25.2%** (BenchLM)
- Toolathlon / SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **86.2%** (BenchLM; AA-GPQA 86.8%, Vals 84.5%)
- HLE: **52.3% with tools** (BenchLM; AA-HLE 30.1% without tools — the with-tools figure clears the 40% frontier reference)
- LCR / MLCR: AA-LCR **73.7%** (BenchLM); MLCR no verified public score found
- CritPt: **4.6%** (BenchLM)
- AIME26 **95.3%**, HMMT Nov 2025 **94.0%**, HMMT Feb 2026 **82.6%**, FrontierMath v2 (T1–3) **33.4%** (BenchLM)
- Artificial Analysis Intelligence Index: **26.1** (BenchLM)
- Omniscience: Index **0.9**, Accuracy **23.7%**, hallucination-rate field **29.9%** (BenchLM; label ambiguous vs AA's "Non-Hallucination Rate" — flagged, not double-counted)
- MMLU-Pro (Vals) **86.9%**, AA-IFBench **76.3%** (BenchLM)

Coding:

- SWE-bench (Vals): **76.4%** (BenchLM); SWE-bench Verified official: **no verified public score found**
- SWE-bench Pro: **58.4%** (BenchLM)
- LiveCodeBench (Vals): **81.4%** (BenchLM)
- SWE-Rebench **62.7%**, NL2Repo **42.7%**, AA-SciCode **44.8%**, OpenHarmony **52.3%** (BenchLM)
- Vibe Code Bench: **31.5%** (BenchLM)
- AA Coding Index: **55.8%** (BenchLM)
- Design Arena Website Elo: **1290** (BenchLM)
- DeepSWE: **no verified public score found**

Long context:

- AA-LCR 73.7% (BenchLM) at the 203K window; no MRCR/RULER per-length data — no long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 74/100.** τ³-bench 70.6%, τ² 97.7%, MCP Atlas 71.8% and Claw-Eval 62.3% are strong, but GDPval-AA 1181 is mid-band and the AA Agentic Index 25.2% with modest TB 2.1 (Vals) 56.9% cap it below the frontier agents.
- **Reasoning: 76/100.** GPQA 86.2% and HLE-with-tools 52.3% are near/above the frontier lines with AIME26 95.3% elite; CritPt 4.6%, an AA Index of 26.1 and near-zero Omniscience hold it back.
- **Context window: 70/100.** 203K verified (200K anchor = 70 in the 200K–500K tier); no retrieval-at-length data.
- **Multimodal: 15/100.** Text in/out only (per template: 15 if text-only).
- **Coding: 72/100.** SWE-bench (Vals) 76.4% and LiveCodeBench 81.4% are solid, but SWE Pro 58.4%, AA Coding Index 55.8% and Vibe Code Bench 31.5% sit below the family's 5.2/5.3 generation and the frontier.
- **Cost efficiency: 88/100.** $1.40/$4.40 per 1M with $0.26 cached reads sits at the ~$1.25/$4.25 (~88) anchor; open weights add a self-host path.
- **Overall Score: 61/100.** Half-up mean of the five quality dims (74+76+70+15+72)/5 = 61.4 — a solid paid open-weights coding agent, but the 5.2/5.3 generation supersedes it at the same price; the text-only I/O is the biggest drag.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (BenchLM, OpenCode Zen pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
