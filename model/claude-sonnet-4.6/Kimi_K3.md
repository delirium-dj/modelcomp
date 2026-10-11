# Claude Sonnet 4.6 — findings by Kimi K3

- Source: Anthropic / Claude Sonnet 4.6 (`claude-sonnet-4-6`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's Sonnet of the Claude 4.6 line — a balanced mid-tier coding model (SWE-bench Verified 79.6%) with a 1M-token window per the current catalog.
- **Provider / access:** Claude API (`claude-sonnet-4-6`), Amazon Bedrock, Vertex AI.
- **Release / knowledge:** Released 2026-02-17 (OpenCode Data, newly verified — my 2026-09-24 pass had "exact date not verified"); knowledge cutoff 2025-08-31 (OpenCode Data, new).
- **IDs:** `anthropic/claude-sonnet-4-6` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** **1M tokens / 64K max output** (OpenCode Data catalog — CORRECTION: my first pass trusted benchlm.ai's 200K listing; the catalog's 1M figure governs).
- **Modalities:** text/image/PDF in (OpenCode Data; CharXiv, MMMU-Pro measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** $3/M input, $15/M output, cached input $0.30/M, cache write $3.75/M (OpenCode Data catalog — verified now).
- **Architecture:** proprietary (Anthropic); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Claw-Eval: **67.8%**; CyberGym: **65.2%** (benchlm.ai)
- τ²-bench (Tau2-Bench): **79.5%** (benchlm.ai)
- Terminal-Bench 2.0: **59.1%** (benchlm.ai); TB pass@1: **63.1%** (AA coding-agents via OpenCode Data, new); **67%** success rate (anthropic.com/news/claude-sonnet-5 cross-card, new); TB 2.1 (Vals): **57.3%**
- OSWorld-Verified: **72.1%** (benchlm.ai); **78.5%** (sonnet-5 cross-card — conflict between harness versions, both retained); note OSWorld 2.0: **8.3%**; Gert Labs: **62.9%**; JobBench: **36.9%**; ApprenticeBench: **2%** (benchlm.ai)
- HLE: **34.6% / 46.8%** (sonnet-5 cross-card rows, new)
- GDPval-AA / Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (GPQA); 79.9% (AA); 85.6% (Vals); SuperGPQA: **95%** (benchlm.ai)
- HLE: **49.0%**; AA-HLE: **13.3%** — large harness divergence (benchlm.ai)
- AA-LCR: **68.3%**; CritPt: **0.9%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **24.7**; BenchLM overall **56.35/100, #49 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **38.6% / 68.5%** (benchlm.ai)
- MMLU-Pro (Vals): **87.3%**; FrontierMath v2: **32.4%** T1–3 / **8.3%** T4; AA-IFBench: **41.2%** (benchlm.ai)

Coding:

- SWE-bench Verified: **79.6%**; SWE-bench (Vals): **77.4%**; SWE-Rebench: **60.7%** (benchlm.ai); SWE-Bench Pro pass@1: **14.9%** (AA coding-agents via OpenCode Data, new — scaffold variant)
- SWE-Atlas (Scale leaderboards, new): Codebase QnA **70.3** pass@1 / 31.2 score; Refactoring **32.21**; Test Writing **31.76**
- AA Coding Agent Index: **49.4** average pass@1 (artificialanalysis.ai — new)
- LiveCodeBench (Vals): **82.1%** (benchlm.ai)
- React Native Evals: **80.6%**; Vibe Code Bench: **51.5%**; cursorBench31: **48.8%**; FrontierCode 1.1 Main: **24.3%** (benchlm.ai)

Long context:

- AA-LCR 68.3% at the (now verified 1M) window (benchlm.ai); no MRCR/RULER public score found.

Multimodal:

- CharXiv: **77.4%**; AA-MMMU-Pro: **70.6%**; Design Arena Website: **1295 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 76/100.** Unchanged: Claw-Eval 67.8%, τ² 79.5%, OSWorld-Verified 72.1–78.5%; capped by OSWorld 2.0 8.3%, ApprenticeBench 2% and no GDPval row.
- **Reasoning: 66/100.** Unchanged: GPQA up to 89.9% keeps knowledge decent; capped by AA-HLE 13.3%, CritPt 0.9%, AA Index 24.7.
- **Context window: 80/100.** Raised from 62: the 1M window is now catalog-verified (correcting a mistaken 200K first-pass reading); capped by middling LCR 68.3%.
- **Multimodal: 74/100.** Unchanged: CharXiv 77.4%, MMMU-Pro 70.6%; text-only output caps it.
- **Coding: 78/100.** Unchanged: SWE-bench Verified 79.6%, LiveCodeBench 82.1%; new SWE-Atlas/AA Coding Agent Index rows are consistent; capped by FrontierCode 24.3%.
- **Cost efficiency: 74/100.** Verified $3/$15 (Sonnet-tier above Sonnet 5's $2/$10 — consistent with generational pricing); provisional flag removed.
- **Overall Score: 75/100.** Mean of the five quality dims (76+66+80+74+78)/5 = 74.8 → 75 (raised from 71). Best fit: 1M-capable Claude 4.6-series coding assistants when Sonnet 5's price/speed profile doesn't fit.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (OpenCode Data `anthropic/claude-sonnet-4-6` — catalog facts + Scale/AA coding-agent rows transcribed; anthropic.com/news/claude-sonnet-5 cross-card; benchlm.ai scorecard from first pass). Second pass over my 2026-09-24 file: corrected context window 200K → 1M (catalog-verified), verified release/cutoff/pricing, added TB/HLE/OSWorld cross-card + SWE-Atlas rows. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
