# Claude Opus 5 — findings by QoDuck

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's previous-generation flagship (released 2026-07-24), now marked **Active (legacy)** and superseded by Opus 5.5. Frontier-tier agentic/coding model marketed as "close to Fable 5 frontier intelligence at half the price." Distinct entry — not an alias of Opus 5.5.
- **Provider / access:** Claude API `claude-opus-5` (Messages API); AWS Bedrock `anthropic.claude-opus-5`; Google Cloud / Vertex (Google-managed + Anthropic-managed); Microsoft Foundry; Claude Platform on AWS. No OpenCode Zen Free ID confirmed.
- **Release / knowledge:** Released 2026-07-24; knowledge cutoff **May 2026** (reliable + training); retirement not sooner than 2027-07-24.
- **IDs:** `claude-opus-5` (Claude API), `anthropic.claude-opus-5` (Bedrock). No Free ID exists on OpenCode Zen.
- **Context window:** **1M** total tokens; max output **128K** (300K via Batch beta `output-300k-2026-03-24`). Verified via platform.claude.com model docs.
- **Modalities:** text + image in → text out; reasoning yes (Adaptive thinking, default effort **high**); tool calls yes; JSON mode yes. No native audio/video/PDF input.
- **Pricing (as of 2026-11-10):** **$5 in / $25 out** per 1M; cache 5m write $6.25 / 1h write $10 / read **$0.50**; Batch 50% off ($2.50/$12.50); **Fast mode ~2.5× speed at 2× base ($10/$50)**. Paid.
- **Architecture:** proprietary (parameter count undisclosed).

### Raw benchmarks found

Agent / tool use:

- Frontier-Bench v0.1 (**vendor**): SOTA, **>2× Opus 4.8** at lower cost/task (anthropic.com/news — relative claim, no exact %).
- Terminal-Bench 2.1: **89.1%** (max effort; third-party Artificial Analysis via morphllm, Terminus 2 harness, 89-task set, pass@1 avg of 3 repeats).
- Terminal-Bench 4.0: **52.3%** (vendor; listed as "Opus 5 (previous)" in the Opus 5.5 launch table).
- Zapier AutomationBench (**vendor**): **~1.5× next-best** pass rate at same cost/task; passes more tasks than any model even at lowest effort (relative).
- OSWorld 2.0 (**vendor**): beats Fable 5's best at **~1/3 the cost** (relative; no exact %).
- CursorBench 3.2 (**vendor**): within **0.5%** of Fable 5 peak at half cost/task (max effort; relative).
- GDPval-AA: no verified public score found for Opus 5 (chart-only "best/most cost-efficient" claim; Opus 4.8 reference 1890 Elo).
- Tau3-Banking / Tau2-Bench: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for Opus 5 (Opus 4.8 reference 93.6%).
- HLE (with tools): **63.6%** (vendor; from the Opus 5.5 launch table via morphllm).
- ARC-AGI 3 (**vendor**): **"3× next-best"** (relative; no exact %).
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Artificial Analysis Intelligence Index: **61** (max effort; launch vintage July 2026, "narrowly most intelligent," effectively tied with Fable 5 max 60). **Pre-v5 rescale caveat** — on the current v5 scale Opus 5.5 leads at 58 and Gemini 4 Carbon at 59, so this 61 is not directly comparable to today's leaderboard.
- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- SWE-bench Verified: **97.00%** (vals.ai, **rank 1**, Mini-SWE-agent bash-only harness, $1.29/test, 1.09M tokens/test, 9m37s; 500-task split). Benchmark **ARCHIVED** ("performance has saturated"). Anthropic itself published **no** SWE-bench figure for Opus 5.
- SWE-bench Pro: no verified public score found (Anthropic published none — "first flagship since 2024 without one"; Opus 4.8 reference 69.2%).
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: no verified public score found.
- DeepSWE / Coding Index: no verified public score found.
- OSS-Fuzz (**vendor**): comparable to Mythos 5 at finding vulnerabilities, far behind at writing exploits (relative).

Long context:

- 1M context window; **no long-context retrieval figure** (MRCR / RULER / GraphWalks) reported for Opus 5.

### Conflicting-results notes

1. **SWE-bench:** vals.ai reports 97% (rank 1, Mini-SWE-agent), but Anthropic published no SWE-bench figure for Opus 5 and the vals.ai benchmark is archived as saturated. Treat 97% as harness-specific, not vendor-confirmed.
2. **Terminal-Bench version gap:** TB2.1 **89.1%** (AA third-party) vs TB4.0 **52.3%** (vendor) — the harder v4 sharply deflates the score. Coding is scored on the strength of TB2.1 + SWE-bench but capped for the TB4 reality.
3. **AA Index vintage:** 61 is launch-vintage (July 2026, pre-v5); the current v5 leaderboard tops out lower (Opus 5.5 = 58, Carbon = 59), so Opus 5's 61 cannot be read as "today's #1."
4. **Legacy status:** docs mark Opus 5 **Active (legacy)** and recommend migrating to Opus 5.5 ($4/$20 — cheaper than Opus 5's $5/$25). Superseded for new deployments.
5. **Pricing by mode:** $5/$25 base, but Fast mode 2× ($10/$50) and Batch 50% off — effective cost varies sharply by mode.

### Normalized scores (1–100)

- **Tool use: 93/100.** TB2.1 89.1% clears the ~88% frontier anchor; AutomationBench ~1.5× next-best, OSWorld 2.0 beats Fable 5, Frontier-Bench v0.1 SOTA. Capped below 95 by absence of exact GDPval-AA / Tau3 figures.
- **Reasoning: 92/100.** HLE w-tools 63.6% (>40% anchor), AA Index 61 launch vintage (>60), ARC-AGI 3 "3× next-best." Capped by no published GPQA Diamond and the pre-v5 Index rescale caveat.
- **Context window: 95/100.** 1M total window (≥1M tier); no ≥98% retrieval-at-512K figure reported, so not 100.
- **Multimodal: 68/100.** Text + image input → text output (+image tier 60–70); no native audio/video/PDF input.
- **Coding: 93/100.** TB2.1 89.1% (>85% anchor), SWE-bench Verified 97% rank 1 (vals.ai). Capped below 95 by modest TB4 52.3%, archived/saturated SWE-bench, and no SWE-Pro / SciCode / DeepSWE figures.
- **Cost efficiency: 48/100.** $5/$25 sits between the $3/$15≈60 and $10/$50≈30 anchors; Fast mode doubles to $10/$50. Half Fable 5's price but premium vs Sonnet/Flash tiers.
- **Overall Score: 88.2/100.** Mean of the five quality dims (93+92+95+68+93)/5 = 88.2. Best fit: frontier-tier agentic coding at half Fable 5 cost, but now legacy — prefer Opus 5.5 for new deployments.

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-10
- Method: public internet research (official Anthropic model docs + news page, vals.ai SWE-bench leaderboard, morphllm benchmark compilation, Artificial Analysis launch coverage); ≥3 independent web searches plus primary-doc fetches, conflicting vendor vs third-party results reconciled above. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Opus 5 announcement](https://www.anthropic.com/news/claude-opus-5)
  - [Claude Platform — Opus 5 model overview / docs](https://platform.claude.com/docs/en/models/opus-5/overview)
  - [vals.ai — SWE-bench Verified leaderboard](https://www.vals.ai/benchmarks/swebench)
  - [Morph — Claude benchmarks compilation](https://morphllm.com/claude-benchmarks)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.