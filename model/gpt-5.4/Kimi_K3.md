# GPT-5.4 — findings by Kimi K3

- Source: OpenAI / GPT-5.4 (`gpt-5.4`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's GPT-5.4-generation reasoning flagship (siblings Pro/mini/nano) — standout τ²-bench 98.9% tool use and LiveCodeBench Pro 87.5%; typical flagships of its cohort released ahead of GPT-5.5/5.6.
- **Provider / access:** OpenAI API (`gpt-5.4`, OpenAI-compatible).
- **Release / knowledge:** Released 2026-03-05 (OpenCode Data, newly verified — my 2026-09-24 pass had "date not verified"); knowledge cutoff 2025-08-31 (OpenCode Data, new).
- **IDs:** `openai/gpt-5.4` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1.1M tokens (OpenCode Data catalog; benchlm.ai listed 1.05M); max output **128K** (OpenCode Data — previously unverified).
- **Modalities:** text/image/PDF in (OpenCode Data; MMMU-Pro, CharXiv, ScreenSpot Pro measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** $2.50/M input, $15.00/M output, $0.25/M cached, $2.50/M cache write (OpenCode Data catalog — verified now; between GPT-5.6 Terra's $2/$12 and Sol's $4/$20).
- **Architecture:** proprietary (OpenAI); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **98.9%** — highest measured in the cohort surveyed (benchlm.ai)
- Claw-Eval: **60.3%**; ResearchClawBench: **15.3%** (benchlm.ai)
- Terminal-Bench 2.0: **75.1%** (benchlm.ai; official introducing-gpt-5-5 cross-card via OpenCode Data confirms 75.1); AA coding-agents pass@1: **69.8 / 64.7** across scaffolds (new this pass)
- GDPval: **83%** wins-or-ties (official cross-card — new metric row; benchlm.ai's AA-Elo variant: 1307 Elo / 36.6%)
- OSWorld-Verified: **75.0%** (official cross-card; matches benchlm.ai); CyberGym: **79.0%**; MCP Atlas: **70.6%**; Toolathlon: **54.6%**; DeepSearchQA: **73.6%** (benchlm.ai)
- BrowseComp: **82.7%** (official cross-card — new this pass)
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (official cross-card; GPQA-D 92.8; AA 92.0)
- HLE: **52.1%** w/ tools, **39.8%** no tools (official cross-card; matches benchlm.ai; AA-HLE 43.7%)
- AA-LCR: **82.0%**; CritPt: **23.4%** (benchlm.ai)
- ARC-AGI-2: **73.3%** (official cross-card; benchlm.ai had 74.0%); ARC-AGI-3: **0.2%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **39.0**; BenchLM overall **68.51/100, #18 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **50.8% / 91.7%** (benchlm.ai)
- HealthBench Hard: **40.1%**; FrontierMath v2: **47.6%** T1–3 / **27.1%** T4 (official cross-card; matches benchlm.ai); AA-IFBench: **73.9%** (benchlm.ai)

Coding:

- LiveCodeBench Pro: **87.5%** (benchlm.ai); LiveCodeBench (Vals): no verified public score found
- SWE-bench Pro: **57.7%** (benchlm.ai) / **59.1%** resolve rate (Scale leaderboard via OpenCode Data, new) / **18.4–18.9%** pass@1 (AA coding-agents — scaffold-sensitive; conflict noted); SWE-bench Verified: no verified public score found
- SWE-Atlas (Scale leaderboards, new): Codebase QnA **72.4/72.9** pass@1 / 40.8–36.3 score; Refactoring **44.29**; Test Writing **44.36/40**
- AA Coding Agent Index: **53.6 / 52.2** average pass@1 (artificialanalysis.ai — new)
- Vibe Code Bench: **67.4%**; React Native Evals: **85.3%**; AA Coding Index: **71.0** (benchlm.ai)

Long context:

- AA-LCR 82.0% at the ~1.1M window (benchlm.ai); 128K output verified; no MRCR/RULER public score found.

Multimodal:

- CharXiv: **82.8%**; MMMU-Pro: **81.2%** (official cross-card; w/ Python 82.1%; AA 78.4%); ScreenSpot Pro: **85.4%**; ZeroBench: **41.0%**; MedXpertQA-MM: **77.1%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 84/100.** Unchanged: τ²-bench 98.9% elite plus Claw-Eval 60.3%, CyberGym 79.0%, MCP Atlas 70.6% (TB now official-confirmed at 75.1%); capped by GDPval-AA 1307 (36.6%) and ExploitGym 6%.
- **Reasoning: 81/100.** Unchanged: GPQA 92.8%, HLE 52.1%, LCR 82.0%, ARC-AGI-2 ~73–74% (official-confirmed); capped by hallucination 91.7% and ARC-AGI-3 0.2%.
- **Context window: 88/100.** Unchanged: 1.1M window with LCR 82.0%; 128K output verified; capped by missing max-window retrieval probes.
- **Multimodal: 82/100.** Unchanged: ScreenSpot Pro 85.4%, CharXiv 82.8%, official MMMU-Pro 81.2%; text-only output caps it.
- **Coding: 82/100.** Unchanged: LiveCodeBench Pro 87.5%, React Native Evals 85.3%; capped by SWE-bench Pro scaffold spread (18–59%).
- **Cost efficiency: 66/100.** Adjusted from provisional 62: verified $2.50/$15 undercuts 5.6 Sol while keeping the Pro-class stack.
- **Overall Score: 83/100.** Mean of the five quality dims (84+81+88+82+82)/5 = 83.4 → 83. Best fit: mature-agentic OpenAI deployments (τ²-class tool use + 1M context) at prior-generation pricing.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (official openai.com/index/introducing-gpt-5-5 cross-card transcribed by OpenCode Data `openai/gpt-5-4`; Scale SWE-Bench-Pro/SWE-Atlas leaderboards + artificialanalysis.ai coding-agents; benchlm.ai scorecard from first pass). Second pass over my 2026-09-24 file: verified release (2026-03-05), cutoff (2025-08-31), 128K output and $2.50/$15 pricing; added BrowseComp/GDPval-WT/SWE-Atlas rows; flagged the SWE-Bench Pro scaffold conflict. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
