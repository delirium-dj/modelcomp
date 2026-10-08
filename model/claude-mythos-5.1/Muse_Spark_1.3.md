# Claude Mythos 5.1 — findings by Muse Spark 1.3

- Source: Anthropic/Claude Mythos 5.1 (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-21 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: same-weights absolutes added, scores recomputed 92 → 93)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1 (Anthropic, restricted Mythos tier)
- **Short description:** Anthropic's restricted Mythos-class flagship sharing weights with Claude Fable 5.1, with cybersecurity and life-sciences safeguards relaxed for vetted cyberdefender and infrastructure users via Project Glasswing.
- **Provider / access:** Anthropic via Claude API / Bedrock (Chat Completions + tool use); restricted Glasswing deployment, no open Zen Free route (Responses-style agent harnesses supported).
- **Release / knowledge:** 2026-09-01 release (Fable 5.1 + Mythos 5.1 joint launch); knowledge cutoff Jun 2026 (platform docs, amended 2026-09-27).
- **IDs:** `anthropic/claude-mythos-5.1` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1M total / 128K out — verified via llm-stats HLE leaderboard listing (1.0M context for Fable 5.1 / Opus 5 family) and curated repo metadata
- **Modalities:** text, image in; text out; reasoning yes (max reasoning with fallback routing); tool calls yes; computer/browser use yes; vision SOTA on scientific figures and screenshot-to-app rebuilds
- **Pricing (as of 2026-09-21, re-verified 2026-09-27):** Paid $10 in / $50 out per 1M, cache reads $0.25 (Fable-class pricing; no $0 tier)
- **Architecture:** proprietary (parameter count undisclosed; Mythos-class tier above Opus)

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Mythos 5.1 shares underlying weights with Fable 5.1 (Anthropic: same model, differing only in safeguards and fallbacks); Fable 5.1 numbers are cited as same-weights proxies where Mythos-5.1-labeled runs are not published.

Agent / tool use:

- GDPval-AA v2 (economically useful knowledge work): **1764 Elo** (Artificial Analysis Intelligence Index component via DeepLearning.ai report, Sep 2026, Fable 5.1 max-reasoning with fallback, leads index)
- AA-Briefcase (multi-week knowledge work): **1662 Elo** (same source, leads hardest component)
- Terminal-Bench 2.1: **85.0% Vals lane** (Fable 5.1 same-weights proxy, BenchLM); older proxy 84.3% (Fable 5, lmmarketcap Jun 2026)
- Terminal-Bench 4.0: **60.9% Mythos-5.1-labeled** (SaaSCity launch table, beats Fable 5.1 55.8% — same weights, classifier delta)
- Terminal-Bench-Science 0.1: **52.6%** (Fable 5.1 same-weights proxy, SaaSCity launch table)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA (v1): **no verified public v1 score found** (v2 1764 above is the tracked successor)
- Claw-Eval / ClawProBench: **no verified public score found**
- ToolAthlon (multi-step tool use): **77.8%** (Fable 5.1 same-weights proxy, shared benchmark table); no verified MCP-Atlas / SWE Atlas Codebase QnA score found

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (lmmarketcap Fable 5 system-card summary, same-weights proxy; Mythos Preview system lineage reports 94.5%)
- HLE: **65.0% HLE no-tools text** (llm-stats HLE leaderboard, Claude Fable 5.1 #1 at 0.650; Mythos Preview 0.647 second; Fable 5 system card 59.0% on earlier harness); shared table reads 65% with tools / 60.9% without — consistent band
- ARC-AGI-2: **90.0%** (Fable 5.1 same-weights proxy, shared table); **ARC-AGI-1 97.5%** (same source)
- ArXivMath: **91.3% (93.9% with tools)** (Fable 5.1 same-weights proxy, shared table)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **53 AA Intelligence Index v4.3** (DeepLearning.ai / Artificial Analysis, Sep 2026, tied #1 with GPT-6 Astra)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **95.0% SWE-bench Verified** (lmmarketcap Fable 5 system-card summary, SOTA, +14 over Opus 4.8); **81.2% SWE-bench Pro** (BenchLM SWE-bench Pro leaderboard, Sep 2026, Claude Fable 5.1 #1 of 67; June launch table 80.3% same family)
- LiveCodeBench: **90.5% Vals lane** (Fable 5.1 same-weights proxy, BenchLM)
- SciCode / AA-SciCode: **63.1% SciCode** (DeepLearning.ai / Artificial Analysis report, Sep 2026, leads index component)
- Vibe Code Bench: **no verified public score found** (closest proxy: ViBench end-to-end vibe-coding lead per Anthropic launch notes, no percentage published)
- DeepSWE / Coding Index / other: **67.4% DeepSWE 1.1** (Fable 5.1 same-weights proxy, shared table); **73.4% cursorBench32** (same source; resolves filed CursorBench SOTA without percentage); **87.6% ProgramBench** (same source); **89.1% SWE Multilingual / 54.7% SWE Multimodal** (same source); **56.3% FrontierSWE v2** (same source); top FrontierCode mark per Anthropic launch notes (Jun 2026)

Long context:

- **Millions of tokens supported with file-based memory: Slay the Spire 3x better than Opus 4.8** (Anthropic launch notes, Jun 2026); no verified MRCR v2 / RULER percentage found

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 95/100.** GDPval-AA v2 1764 plus TB4.0 60.9% (Mythos-labeled), TB2.1 85.0% and ToolAthlon 77.8% show frontier long-horizon orchestration; capped below 97 with no Tau3 same-harness absolute.
- **Reasoning: 96/100.** GPQA 94.1% plus HLE 65.0% (#1), AA Index 53 (tied #1), ARC-AGI-2 90.0% and ArXivMath 91.3% place it at the reasoning frontier; capped below 98 by absent LCR/CritPt confirmation.
- **Context window: 100/100.** 1M verified with multi-million-token file-memory behavior (3x Slay the Spire gain) maps to the top tier.
- **Multimodal: 75/100.** SOTA vision (figure-number extraction, screenshot-to-app rebuilds, vision-only game completion) with text/image in; capped by text-only output with no video/audio synthesis.
- **Coding: 98/100.** SWE-Verified 95% and SWE-Pro 81.2% (#1) plus LiveCodeBench 90.5%, SciCode 63.1%, DeepSWE 67.4% and cursorBench32 73.4% show best-in-class engineering; capped below 99 with no Vibe absolute.
- **Cost efficiency: 30/100.** Paid $10/$50 per 1M with no $0 tier maps to the ~$10/$50 band.
- **Overall Score: 93/100.** Mean of the five non-cost dims (95+96+100+75+98)/5 = 92.8; best-fit restricted long-horizon engineering and knowledge-work flagship where vetting and budget allow.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-09-21
- Method: public internet research (Anthropic launch announcement, system-card summaries, Artificial Analysis Index via DeepLearning.ai, BenchLM SWE-Pro leaderboard, llm-stats HLE leaderboard); Fable 5.1 numbers cited as same-weights proxies per Anthropic same-model statement; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
