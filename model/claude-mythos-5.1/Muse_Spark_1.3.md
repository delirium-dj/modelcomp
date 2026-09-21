# Claude Mythos 5.1 — findings by Muse Spark 1.3

- Source: Anthropic/Claude Mythos 5.1 (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1 (Anthropic, restricted Mythos tier)
- **Short description:** Anthropic's restricted Mythos-class flagship sharing weights with Claude Fable 5.1, with cybersecurity and life-sciences safeguards relaxed for vetted cyberdefender and infrastructure users via Project Glasswing.
- **Provider / access:** Anthropic via Claude API / Bedrock (Chat Completions + tool use); restricted Glasswing deployment, no open Zen Free route (Responses-style agent harnesses supported).
- **Release / knowledge:** 2026-06-09 Fable 5 / Mythos 5 launch with 2026-07-01 redeploy; 5.1 revision tracked September 2026; knowledge cutoff undisclosed
- **IDs:** `anthropic/claude-mythos-5.1` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1M total / 128K out — verified via llm-stats HLE leaderboard listing (1.0M context for Fable 5.1 / Opus 5 family) and curated repo metadata
- **Modalities:** text, image in; text out; reasoning yes (max reasoning with fallback routing); tool calls yes; computer/browser use yes; vision SOTA on scientific figures and screenshot-to-app rebuilds
- **Pricing (as of 2026-09-21):** Paid $10 in / $50 out per 1M, 90% prompt-caching discount (Fable-class pricing published June 2026; no $0 tier)
- **Architecture:** proprietary (parameter count undisclosed; Mythos-class tier above Opus)

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Mythos 5.1 shares underlying weights with Fable 5.1 (Anthropic: same model, differing only in safeguards and fallbacks); Fable 5.1 numbers are cited as same-weights proxies where Mythos-5.1-labeled runs are not published.

Agent / tool use:

- GDPval-AA v2 (economically useful knowledge work): **1764 Elo** (Artificial Analysis Intelligence Index component via DeepLearning.ai report, Sep 2026, Fable 5.1 max-reasoning with fallback, leads index)
- AA-Briefcase (multi-week knowledge work): **1662 Elo** (same source, leads hardest component)
- Terminal-Bench 2.1: **no verified public score found** (closest same-weights proxy: Terminal-Bench **84.3%** for Fable 5, lmmarketcap system-card summary, Jun 2026)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA (v1): **no verified public v1 score found** (v2 1764 above is the tracked successor)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (lmmarketcap Fable 5 system-card summary, same-weights proxy; Mythos Preview system lineage reports 94.5%)
- HLE: **65.0% HLE no-tools text** (llm-stats HLE leaderboard, Claude Fable 5.1 #1 at 0.650; Mythos Preview 0.647 second; Fable 5 system card 59.0% on earlier harness)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **53 AA Intelligence Index v4.3** (DeepLearning.ai / Artificial Analysis, Sep 2026, tied #1 with GPT-6 Astra)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **95.0% SWE-bench Verified** (lmmarketcap Fable 5 system-card summary, SOTA, +14 over Opus 4.8); **81.2% SWE-bench Pro** (BenchLM SWE-bench Pro leaderboard, Sep 2026, Claude Fable 5.1 #1 of 67; June launch table 80.3% same family)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **63.1% SciCode** (DeepLearning.ai / Artificial Analysis report, Sep 2026, leads index component)
- Vibe Code Bench: **no verified public score found** (closest proxy: ViBench end-to-end vibe-coding lead per Anthropic launch notes, no percentage published)
- DeepSWE / Coding Index / other: **top FrontierCode score among frontier models** (Anthropic launch notes via claude5.ai, Jun 2026, no percentage published); **CursorBench SOTA** per Cursor CEO statement (no percentage published)

Long context:

- **Millions of tokens supported with file-based memory: Slay the Spire 3x better than Opus 4.8** (Anthropic launch notes, Jun 2026); no verified MRCR v2 / RULER percentage found

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 94/100.** GDPval-AA v2 1764 and AA-Briefcase 1662 leads plus TB 84.3% proxy show frontier long-horizon tool orchestration; capped by missing TB2.1/Tau3 same-harness absolutes.
- **Reasoning: 95/100.** GPQA 94.1% plus HLE 65.0% (#1) and AA Index 53 (tied #1) place it at the reasoning frontier; capped by absent LCR/CritPt confirmation.
- **Context window: 100/100.** 1M verified with multi-million-token file-memory behavior (3x Slay the Spire gain) maps to the top tier.
- **Multimodal: 75/100.** SOTA vision (figure-number extraction, screenshot-to-app rebuilds, vision-only game completion) with text/image in; capped by text-only output with no video/audio synthesis.
- **Coding: 97/100.** SWE-Verified 95% and SWE-Pro 81.2% (#1) plus SciCode 63.1% lead and FrontierCode top mark show best-in-class engineering; capped only by missing LiveCodeBench absolute.
- **Cost efficiency: 30/100.** Paid $10/$50 per 1M with no $0 tier maps to the ~$10/$50 band.
- **Overall Score: 92/100.** Mean of the five non-cost dims (94+95+100+75+97)/5 = 92.2; best-fit restricted long-horizon engineering and knowledge-work flagship where vetting and budget allow.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-09-21
- Method: public internet research (Anthropic launch announcement, system-card summaries, Artificial Analysis Index via DeepLearning.ai, BenchLM SWE-Pro leaderboard, llm-stats HLE leaderboard); Fable 5.1 numbers cited as same-weights proxies per Anthropic same-model statement; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
