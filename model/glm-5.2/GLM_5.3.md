# GLM 5.2 — findings by GLM 5.3

- Source: Z.AI (`glm-5.2`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2
- **Short description:** Z.AI's open-weights flagship of the GLM-5 family (generation before GLM-5.3): strong agentic coding, tool use, and math/reasoning with a 1M window. Top use case: long-horizon agentic coding at flagship-level quality.
- **Provider / access:** OpenCode Zen `opencode/glm-5.2` (OpenAI-compatible Chat Completions); Z.AI official API; open weights (BenchLM lists Open Weight).
- **Release / knowledge:** 2026, between GLM-5.1 and GLM-5.3; exact release date not re-verified publicly. Knowledge cutoff not stated.
- **IDs:** `opencode/glm-5.2` (no Free ID on Zen; paid tier).
- **Context window:** 1M tokens (BenchLM model page).
- **Modalities:** text in / text out (no image rows on BenchLM; Z.AI ships vision on the separate GLM-5V-Turbo line); reasoning yes; tool calls yes (MCP/agent-oriented); JSON mode not separately verified.
- **Pricing (as of 2026-09-25):** $1.40 in / $4.40 out per 1M, cached read $0.26 (OpenCode Zen pricing table).
- **Architecture:** open weights; parameters undisclosed in the sources found.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.0%** (BenchLM; Inkling vendor table lists 82.7% best-harness; Vals variant 67.8%)
- Terminal-Bench 3.0: **4.6%** (BenchLM — weak on the newest/hardest terminal suite)
- Tau2-Bench: **99.1%** (BenchLM); Tau3-Banking: **26.8%** (Inkling vendor table)
- GDPval-AA: **1418 Elo** (BenchLM; normalized field 42.9%; Inkling vendor table lists 1514)
- MCP Atlas: **76.8%** (BenchLM; 77.8% in Inkling vendor table)
- Toolathlon: **48.2%** (BenchLM; 59.9% in Inkling vendor table)
- AA Agentic Index **39.4%**, APEX-Agents-AA **33.7%**, ResearchClawBench **20.7%**, AA ITBench **42.7%** (BenchLM)
- Claw-Eval / SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (BenchLM; AA-GPQA 89.5%, Vals 85.6%, Inkling vendor table 89.5%)
- HLE: **54.7% with tools / 40.5% without** (BenchLM; AA-HLE 41.1%; Inkling vendor table: 54.7% w/tools, 40.1% text-only)
- LCR / MLCR: AA-LCR **78.3%** (BenchLM); MLCR no verified public score found
- CritPt: **20.9%** (BenchLM)
- AIME26 **99.2%**, HMMT Nov 2025 **94.4%**, HMMT Feb 2026 **92.5%**, MMAnswerBench **91.0%** (BenchLM)
- Artificial Analysis Intelligence Index: **33.7** (BenchLM)
- Omniscience: Index **4.4**, Accuracy **24.3%**, hallucination-rate field **26.3%** (BenchLM; label ambiguous vs AA's "Non-Hallucination Rate" — flagged, not double-counted)
- MMLU-Pro (Vals) **86.7%**, Global-MMLU-Lite **89.2%** (BenchLM / Inkling vendor table), SimpleQA Verified **38.1%** (Inkling vendor table)
- AA-IFBench: **73.3%** (BenchLM)

Coding:

- SWE-bench Verified: **80.0%** (Inkling vendor table, self-reported); SWE-bench (Vals): **82.8%** (BenchLM)
- SWE-bench Pro: **62.1%** (BenchLM; confirmed in Inkling vendor table)
- Terminal-Bench 2.1: **81.0%** (BenchLM)
- ProgramBench **63.7%**, CursorBench 3.2 **55.0%**, NL2Repo **48.9%**, AA-SciCode **51.2%**, OpenHarmony Bench **58.4%** (BenchLM)
- LiveCodeBench (Vals): **69.5%** (BenchLM); AA Coding Index **68.8%** (BenchLM)
- Design Arena Website Elo: **1302** (BenchLM; 1275 on the Agentic Web Dev leaderboard via Inkling announcement)
- Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- AA-LCR 78.3% (BenchLM) at the 1M window; no MRCR/RULER per-length data — no long-context retrieval score found.

Safety (context):

- FORTRESS Adversarial **71.3%** / Benign **90.0%**, StrongREJECT **98.5%** (Inkling vendor table)

### Normalized scores (1–100)

- **Tool use: 84/100.** TB 2.1 81%, τ² 99.1%, MCP Atlas 76.8% and GDPval-AA 1418–1514 approach frontier agent territory, with a solid AA Agentic Index 39.4%; the weak TB 3.0 4.6% and mid Toolathlon 48–60% cap it below the very top.
- **Reasoning: 87/100.** GPQA Diamond 91.2% clears the 90% frontier line, HLE-with-tools 54.7% is elite, AIME26 99.2% near-perfect; CritPt 20.9%, AA Index 33.7 and a weak Omniscience Index (4.4) hold it under 90.
- **Context window: 96/100.** 1M verified = ≥1M tier; AA-LCR 78.3% solid but not ≥98%-retrieval grade.
- **Multimodal: 15/100.** Text in/out only (per template: 15 if text-only; vision lives on the separate GLM-5V line).
- **Coding: 80/100.** SWE-bench Verified 80% / Vals 82.8% and TB 2.1 81% are top open-weights agentic-coding results; SWE Pro 62.1%, LiveCodeBench 69.5% and AA Coding Index 68.8% keep it a step behind the frontier.
- **Cost efficiency: 88/100.** $1.40/$4.40 per 1M with $0.26 cached reads sits at the ~$1.25/$4.25 (~88) anchor; open weights add a self-host path.
- **Overall Score: 72/100.** Half-up mean of the five quality dims (84+87+96+15+80)/5 = 72.4 → 72 — a top open-weights text agent at fair flagship pricing; the text-only I/O is the single biggest score drag.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (BenchLM, Thinking Machines Lab Inkling vendor comparison tables, OpenCode Zen pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
