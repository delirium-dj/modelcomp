# MAI-Thinking-1 — findings by Step 5 Preview

- Source: Microsoft AI / MAI-Thinking-1 (`microsoft/mai-thinking-1`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft AI's first in-house reasoning model — a 35B-active / ~1T-total sparse MoE trained from scratch (no third-party distillation) on 8K GB200s, with AIME 2025 97%, GPQA 84.2%, SWE-bench Verified 73.5% and GraphWalks 128K 90%; public preview on Microsoft Foundry with no published rate card.
- **Provider / access:** Microsoft Foundry (public preview since 2026-08-12); Chat Completions API compatible; function calling; enterprise-grade security/compliance via Foundry. No OpenCode Zen route.
- **Release / knowledge:** announced 2026-06-02 (mer.vin); public preview 2026-08-12 (Microsoft official page); knowledge cutoff not published.
- **IDs:** `microsoft/mai-thinking-1` (Foundry catalog style); no separate gateway ID published.
- **Context window:** 256K total (256,000 per the Foundry catalog; "after mid-training, MAI-Thinking-1 achieves a maximum context length of 256K" — technical report); 64,000 max output (Foundry catalog via aiwiki).
- **Modalities:** text in/out; reasoning (thinking); function calling; multi-layer instruction following.
- **Pricing (as of 2026-10-21):** no published per-token rate card — Microsoft positions it at a "mid-weight price" and reports per-token pricing as TBD; the folder's $2.00 in / $8–$10 out remains unverified.
- **Architecture:** sparse MoE, 35B active of ~1T total; trained from scratch on clean, traceable, commercially licensed data (no distillation); RL with executable, test-graded coding environments.

### Raw benchmarks found

Microsoft AI MAI-Thinking-1 technical report + June/August 2026 announcements (via BenchLM and microsoft.ai):

Agent / tool use:

- Terminal-Bench 2.0: **46.0%** (Microsoft technical report via BenchLM)
- Tau2 / Tau3 / GDPval-AA / OSWorld / Claw-Eval / MCP-Atlas / Toolathlon: no verified public score found

Reasoning / knowledge:

- AIME 2025: **97.0%** (Microsoft announcement + technical report); AIME 2026: **94.5%**; HMMT Feb 2026: **84.9%** (technical report via BenchLM)
- GPQA Diamond: **84.2%** (technical report via BenchLM — matches the folder's claim)
- MMLU-Pro: **85.0%** (technical report via BenchLM)
- HLE / AA Intelligence Index / CritPt / Omniscience: no verified public score found
- Blind human side-by-side (Surge, 1,276 tasks): **users preferred MAI-Thinking-1 over Claude Sonnet 4.6** (Microsoft announcement)

Coding:

- SWE-bench Verified: **73.5%** (technical report via BenchLM — matches the folder's claim)
- SWE-bench Pro: **52.8%** (technical report via BenchLM; Microsoft: "toe-to-toe with Claude Opus 4.6" and "leads Claude Haiku 4.5 while using up to 60% fewer tokens" — Microsoft's own evaluations)
- LiveCodeBench v6: **87.7%** (technical report via BenchLM)
- DeepSWE / SciCode / Vibe Code Bench: no verified public score found

Long context:

- GraphWalks BFS 128K: **90%** (technical report via BenchLM) — strong graph traversal at depth; 256K window (a 600-page document per Microsoft); no MRCR/RULER retrieval-at-length figure published.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.0 46.0% is a mid-band agentic-terminal result and function calling is first-class on the Chat Completions API; capped by no Tau/GDPval/OSWorld/Claw/MCP numbers in any harness and all figures being Microsoft's own.
- **Reasoning: 90/100.** AIME 2025 97.0% / AIME 2026 94.5% / HMMT 84.9% are frontier-class competition math, GPQA Diamond 84.2% and MMLU-Pro 85.0% are strong knowledge, and the Surge blind eval (preferred over Claude Sonnet 4.6 across 1,276 tasks) backs real-world helpfulness; capped by no HLE/CritPt/Omniscience rows and no independent replication.
- **Context window: 78/100.** 256K with 64K max output lands in the 200K–500K tier (65–84, above the 200K=70 floor); GraphWalks BFS 90% at 128K is excellent traversal for the tier but no ≥512K retrieval evidence exists.
- **Multimodal: 15/100.** Text-only — text in, text out (no vision encoder documented); the text-only tier (10–20) applies.
- **Coding: 80/100.** SWE-bench Verified 73.5% and LiveCodeBench v6 87.7% are strong upper-mid results with Real-test-graded RL environments behind them; capped by SWE-bench Pro 52.8%, Terminal-Bench 2.0 46.0% and no SciCode/DeepSWE numbers.
- **Cost efficiency: 82/100.** No published rate card exists — Microsoft positions the 35B-active model at a "mid-weight price" and claims up to 60% fewer tokens than Claude Haiku 4.5 on its own eval; scored provisionally mid-band until Foundry pricing is published.
- **Overall Score: 67/100.** Mean of (72 + 90 + 78 + 15 + 80) / 5 = 67.0 → 67. Best fit: enterprise Foundry deployments wanting frontier-class math/knowledge reasoning at a 35B-active serving footprint, with enterprise-grade data provenance — the vision-free, price-unpublished profile keeps it off the general leaderboard.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (Microsoft AI official announcement + technical-report figures via BenchLM, aiwiki, gradually.ai, mer.vin); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
