# Claude Opus 5.5 — findings by Kimi K3

- Source: Anthropic / Claude Opus 5.5 (`claude-opus-5-5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's newest Opus — BenchLM's #2 model overall (86.98/100), and Anthropic's own recommended default ("start with Opus 5.5", per docs since 22 Sept 2026). Best-in-class on terminal science, SWE-bench Pro, and instrumented tool use.
- **Provider / access:** Claude API (`claude-opus-5-5`); system card: anthropic.com/claude-opus-5-5-system-card.
- **Release / knowledge:** September 2026 (docs reference from 2026-09-22); knowledge cutoff not verified in my sources.
- **IDs:** `anthropic/claude-opus-5.5` (no Zen Free ID verified).
- **Context window:** 1M tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image in (MMMU-Pro, Chartography, BenchCAD measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources; Opus-tier (below Fable's $10/$50) — provisional.
- **Architecture:** proprietary (Anthropic).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** — highest measured; Terminal-Bench-Science 0.1: **58.7%** (benchlm.ai)
- GDPval-AA: **1846 Elo** (67.3% normalized) (benchlm.ai)
- Toolathlon-Verified: **77.8%** (Pass@3 82.4%, avg 26.9 turns) (benchlm.ai)
- AA Briefcase: **1822**; AA AutomationBench: **69.5%**; AA Harvey LAB: **91.2%**; HLE w/ tools: **67.7%** (benchlm.ai)
- OSWorld 2.0: **48.7%**; AutomationBench: **40.0%**; GDP.pdf (all-pass): **26.2%** (benchlm.ai)
- Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- HLE (no tools): **64.4%**; AA-HLE: **61.4%** (benchlm.ai)
- AA-LCR: **84.7%**; CritPt: **31.7%** (benchlm.ai)
- ARC-AGI-1: **97.5%**; ARC-AGI-2: **91.7%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **57.6**; BenchLM overall **86.98/100, #2 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **66.2% / 58.6%** (benchlm.ai)
- ArXivMath Aug 2026: **91.2%** (no tools) / **96.9%** (tools) (benchlm.ai)
- GMMLU: **94.3%**; MILU: **93.1%** (benchlm.ai)
- Bio rows: BioMysteryBench human-solvable **89.3%**, De novo protein-binder design **82.6%** (benchlm.ai)

Coding:

- SWE-bench Pro: **89.9%** — best measured in cohort (benchlm.ai)
- SWE Multilingual: **93.9%**; SWE Multimodal: **61.4%** (benchlm.ai)
- DeepSWE: **74.2%**; FrontierSWE v2: **62.3%**; FrontierCode 1.1 Main: **54.4%** / Extended: **63.6%** (benchlm.ai)
- ProgramBench: **91.2%**; CursorBench 4.0: **57.8%**; AA-SciCode: **66.9%** (benchlm.ai)
- SWE-bench Verified / LiveCodeBench: no separate rows at this ID

Long context:

- AA-LCR 84.7% at the 1M window (benchlm.ai); no MRCR/RULER rows.

Multimodal:

- AA-MMMU-Pro: **87.7%**; Chartography (tools): **89.0%**; BenchCAD Vision2Code (tools): **0.962**; Biomedical image analysis: **71.4%**; OfficeQA: **78.9%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 93/100.** TB 4.0 66.4% + TB-Science 58.7% + GDPval 1846 (67.3%) + Toolathlon 77.8% — the most complete agentic sheet measured.
- **Reasoning: 92/100.** HLE 64.4% no-tools, ARC-AGI-2 91.7%, ArXivMath 96.9% w/ tools, AA Index 57.6; mildly capped by CritPt 31.7%.
- **Context window: 90/100.** 1M window with LCR 84.7%; capped by missing MRCR/RULER probes.
- **Multimodal: 88/100.** MMMU-Pro 87.7%, Chartography 89%, biomedicine imaging — top chart/doc grounding; text-only output caps it.
- **Coding: 90/100.** SWE-bench Pro 89.9% + SWE-Multilingual 93.9% + ProgramBench 91.2%: best-coding model in this cohort.
- **Cost efficiency: 48/100.** Opus-tier flagship pricing (provisional — no public price found) with AA-measured cost-per-task trends rising vs Opus 5.
- **Overall Score: 91/100.** Mean of the five quality dims (93+92+90+88+90)/5 = 90.6 → 91. Best fit: the 2026H2 Claude flagship — default for deep research, science agents, and production coding.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, anthropic.com system card reference, felloai.com docs note); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
