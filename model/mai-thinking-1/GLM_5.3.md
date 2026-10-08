# MAI-Thinking-1 — findings by GLM 5.3

- Source: Microsoft AI (`mai-thinking-1`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft AI's first reasoning model — a medium-weight MoE (35B active, ~1T total) built from scratch for serious math, coding and enterprise deployment; competitive with its weight class on software engineering and advanced math, preferred over Claude Sonnet 4.6 by blind human raters on Surge.
- **Provider / access:** Microsoft Foundry (public preview, `aka.ms/mai-thinking-1-foundrycard`); MAI Playground (`mai-thinking-1-latest`). Project meta lists Zen ID `opencode/mai-thinking-1` (absent from the live Zen models list when re-checked 2026-10-08 — no Free ID).
- **Release / knowledge:** 2026 (technical report dated 2026-06-02); knowledge cutoff not stated.
- **IDs:** `opencode/mai-thinking-1` (project meta).
- **Context window:** 131,072 total, 32,768 max output (project meta; BenchLM lists 256K — unverified which is native vs extended).
- **Modalities:** text in/out only; reasoning yes (purpose-built thinking model); tool calls not verified; JSON mode not verified.
- **Pricing (as of 2026-10-08):** $2.00 in / $10.00 out per 1M (Microsoft AI, project meta).
- **Architecture:** 35B active / ~1T total MoE, proprietary, trained on clean traceable enterprise-grade data with no third-party distillation (microsoft.ai model page).

### Raw benchmarks found

> All numbers are vendor-run from the MAI-Thinking-1 technical report (tracked by BenchLM; 14 rows, unranked composite). No independent aggregator (Artificial Analysis/AA leaderboards) has published numbers for this ID.

Agent / tool use:

- Terminal-Bench 2.0: **46%** (Microsoft AI technical report via BenchLM)
- GDPval / Tau3 / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- AIME 2025: **97%** / AIME26: **94.5%** (technical report via BenchLM)
- HMMT Feb 2026: **84.9%** (technical report via BenchLM)
- GPQA Diamond: **84.2%** (technical report via BenchLM)
- MMLU-Pro: **85%** (technical report via BenchLM)
- SimpleQA: **31%** (technical report via BenchLM) — weak open-domain factuality
- HLE / AA Intelligence Index / Omniscience: **no verified public score found**

Coding:

- LiveCodeBench v6: **87.7%** (technical report via BenchLM)
- SWE-bench Verified: **73.5%** (technical report via BenchLM)
- SWE-bench Pro: **52.8%** (technical report via BenchLM)
- Terminal-Bench 2.0 (coding-side view): **46%** (via BenchLM)

Multimodal:

- **no verified public score found** — text-only model.

Long context:

- Graphwalks BFS 128K: **90%** (technical report via BenchLM) — strong graph-reasoning at the 128K scale; no MRCR/RULER at larger windows.

Instruction following:

- IFBench: **85%** (technical report via BenchLM)

Human preference (not a score-bearing benchmark):

- Preferred over Claude Sonnet 4.6 for overall quality in blind side-by-side single/multi-turn ratings on Surge (microsoft.ai model page).

### Normalized scores (1–100)

- **Tool use: 50/100.** Terminal-Bench 2.0 at 46% is the only agentic measurement, sitting at the mid-band floor; no GDPval/Tau3/tool-call evidence and no verified agentic product surface.
- **Reasoning: 78/100.** AIME26 94.5%, GPQA 84.2%, MMLU-Pro 85% and HMMT 84.9% are strong for the class; capped by SimpleQA 31% factuality, zero HLE/AA independent coverage and vendor-only sourcing.
- **Context window: 58/100.** 131K (project meta) lands mid-tier (100K–200K band), with Graphwalks BFS 128K at 90% showing high-quality reasoning at that scale but no evidence beyond it.
- **Multimodal: 15/100.** Text-only input and output — text-only band.
- **Coding: 72/100.** LiveCodeBench v6 87.7% is excellent with SWE-bench Verified 73.5% solid; capped by SWE-bench Pro 52.8% and Terminal-Bench 2.0 46% on agentic coding.
- **Cost efficiency: 68/100.** $2.00/$10.00 per 1M sits between the ~$1.25/$4.25 (~88) and ~$3/$15 (~60) classes, nearer the expensive end — the mid-weight inference footprint is the offsetting pitch.
- **Overall Score: 55/100.** (50 + 78 + 58 + 15 + 72) / 5 = 54.6 → 55. Best-fit recommendation: math-heavy reasoning and clean-room enterprise coding with provenance requirements (Foundry-native); text-only, weak open-domain facts, and unproven agentic tooling.

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-08
- Method: public internet research (Microsoft AI technical report via BenchLM, microsoft.ai model page, project pricing meta); scores are normalized 1–100 interpretations, not official vendor scores. All capability numbers are vendor-run.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
