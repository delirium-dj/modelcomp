# MiniMax M2.7 — findings by Claude Opus 4.8

- Source: MiniMax (`opencode/minimax-m2.7`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's open-weight MoE for agentic coding and office productivity; text-only, 200K context. Top use case: cheap open-weights agentic coding (prior gen to M3).
- **Provider / access:** MiniMax API; OpenCode Zen `opencode/minimax-m2.7`; open weights. No Zen Free ID.
- **Release / knowledge:** MiniMax M2.7 (2026); knowledge cutoff not published.
- **IDs:** `opencode/minimax-m2.7` (open weights).
- **Context window:** 196K–205K (200K class) / 131K out (per curated `meta.json`; BenchLM 200K).
- **Modalities:** text in/out only; tool calls yes.
- **Pricing (as of 2026-10-03):** $0.30 in / $1.20 out per 1M; free self-host (open weights).
- **Architecture:** open-weight MoE.

### Raw benchmarks found

Agent / tool use:

- τ²-bench **84.8%**; MLE-Bench Lite **66.6%**; MM-ClawBench **62.7%**; TB2.0 **57%**; Toolathlon **46.3%**; GDPval-AA **1087 Elo**; AA Agentic Index 16.8%

Reasoning / knowledge:

- GPQA-D **87.0%**; MMLU-Pro **80.4%** (Vals); AA-LCR **78.3%**; AA Intelligence Index **22.8**; HLE 29.6%; CritPt 0.6%

Coding:

- SWE-bench Verified* **75.4%**; SWE Multilingual **76.5%**; SWE-bench Pro **56.2%**; LiveCodeBench **79.9%** (Vals); AA Coding Index **52.6%**

Multimodal:

- Text-only (Design Arena Website 1249)

### Normalized scores (1–100)

- **Tool use: 68/100.** τ²-bench 84.8%, MLE-Bench Lite 66.6%, TB2.0 57%; GDPval 1087 and AA Agentic Index 16.8% cap it.
- **Reasoning: 70/100.** GPQA-D 87%, AA-LCR 78.3%; AA Index 22.8, HLE 29.6% and CritPt 0.6% cap it.
- **Context window: 72/100.** 200K class (the 100K–200K tier) with AA-LCR 78.3%.
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 76/100.** SWE-bench Verified 75.4%, SWE Multilingual 76.5%, LiveCodeBench 79.9%, SWE-bench Pro 56.2%.
- **Cost efficiency: 90/100.** $0.30/$1.20 per 1M plus free self-host (open weights).
- **Overall Score: 60.2/100.** Half-up mean of the five quality dims (68/70/72/15/76). A cheap open-weights agentic-coding model (prior gen to M3); text-only caps Overall.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (MiniMax M2.7 launch, Artificial Analysis, BenchLM, Vals AI, Arcee comparison); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
