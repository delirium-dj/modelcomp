# Claude Opus 5 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's Opus-tier hybrid-reasoning flagship (released 2026-07-24) for long-running agentic coding, computer use, and knowledge work — positioned as near-Claude-Fable-5 intelligence at half the price. Not a variant/alias; separate from Opus 4.8 and Opus 5.5.
- **Provider / access:** Claude API (`claude-opus-5`), Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude apps/Platform. Messages API (Anthropic format).
- **Release / knowledge:** released 2026-07-24; knowledge cutoff not disclosed in retrieved sources.
- **IDs:** `anthropic/claude-opus-5` (gateway routes) / `claude-opus-5` (native).
- **Context window:** 1,000,000 tokens (default and maximum); max output 128K class (per Claude platform conventions; batch output up to 300K beta on the platform).
- **Modalities:** text + images in; text out; reasoning yes (extended thinking on by default, per-request effort low/medium/high/xhigh/max); tool calls yes (computer use, code execution, web/batch tools); PDF input supported via the platform Files API on Claude models (not separately benchmarked for Opus 5).
- **Pricing (as of 2026-10-07):** $5 in / $25 out per 1M (same as Opus 4.8); prompt caching up to 90% savings on reads, Batch API 50% off; Fast mode $10/$50 at ~2.5× speed. Paid, no free tier.
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.64%** (vals.ai independent, 2026-07-25); 86.7% (Meta's cross-vendor chart — vendor claim vs vendor claim); **not on the verified tbench.ai board** as of Aug 2026.
- Terminal-Bench 3.0: **42.7%** (±3.1, official leaderboard, max effort, mini-SWE-agent); Terminal-Bench 4.0: **53.9%** (±3.2, official leaderboard, xhigh, Claude Code harness) — vendor-reported 52.3%.
- GDPval-AA v2: **1861** Elo (Anthropic system card; vs Fable 5 1747, GPT-5.6 Sol 1736). AA-Briefcase: 1720 Elo.
- OSWorld 2.0 (computer use): **70.6%** (vendor). Toolathlon Verified: **80.6%** (vendor). AutomationBench (Zapier): **26.0%** (vendor). BrowseComp: **90.8%** (vendor).
- Tau3-Banking / Tau2 / Claw-Eval / Toolathon-2 / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **93.43%** (vals.ai independent, 2026-07-25).
- HLE: **52.6%** no tools (Artificial Analysis, adaptive reasoning max effort; xhigh 52.5%) / **64.7%** with tools (vendor).
- ARC-AGI-3: **30.2%** at high effort (vendor — reported ~3× the next-best model). MMLU-Pro: 91.59% (vals.ai).
- AA Intelligence Index / LCR / CritPt / Omniscience: no verified public score found.

Coding:

- SWE-bench Verified: **96.0%** (Anthropic, avg of 5 trials) / **97.0%** (vals.ai independent).
- SWE-bench Pro: **79.2%** (vendor). SWE-bench Multilingual: **89.5%** (vendor).
- DeepSWE v1.1: **68.8%** (vendor); Frontier-Bench v0.1: **43.3%** (vendor, mini-SWE-agent, mean reward 5 attempts — beats Fable 5's 33.7%); FrontierCode v1.1 Main: **53.4%** (vendor, medium effort).
- CursorBench 3.2: within 0.5 pts of Fable 5's peak at max effort (no exact value published).
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found.

Long context:

- No MRCR / RULER / ProgramBench retrieval number found for Opus 5 — "no long-context retrieval reported" beyond the 1M window spec.

### Normalized scores (1–100)

- **Tool use: 91/100.** GDPval-AA v2 1861 tops the field (well above the 1750+ frontier ref), TB2.1 84.6–86.7 and TB4.0 53.9 (official board) are top-tier, OSWorld 70.6% and Toolathlon 80.6% are strong; capped below 94 by AutomationBench 26% and no Tau3/Claw-Eval number.
- **Reasoning: 91/100.** GPQA 93.43 (90+ frontier ref) and HLE 52.6 no-tools (40+ ref) both clear, with ARC-AGI-3 at 3× the field; capped by no AA Intelligence Index/LCR row for cross-check.
- **Context window: 95/100.** 1M window sits in the ≥1M tier floor — no published needle-retrieval score at 512K+ to justify anything above the tier minimum.
- **Multimodal: 65/100.** Text + image input with text out = the 60–70 band; no video/audio input, no non-text output, and no published PDF-input evidence for this specific release.
- **Coding: 93/100.** SWE-bench Verified 96–97% and SWE-bench Multilingual 89.5% are field-leading, SWE-bench Pro 79.2% near the top, Frontier-Bench 43.3% SOTA per Anthropic; capped below 95 by DeepSWE 68.8% (below the 74% frontier ref) and missing LiveCodeBench/SciCode rows.
- **Cost efficiency: 50/100.** $5/$25 sits halfway between the $3/$15 ≈ 60 and $10/$50 ≈ 30 anchors; up-to-90% cache reads and 50% batch discount soften agentic workloads, and Fast mode doubles price.
- **Overall Score: 87/100.** (91+91+95+65+93)/5 = 87.0 → 87 — near-frontier paid daily driver for SWE-bench-class coding, GDPval knowledge work, and computer use at mid-tier flagship cost.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Anthropic announcement + system card tables via DataCamp/Choosemodel/Codersera/AI-Model-Timeline, vals.ai, Artificial Analysis, official Terminal-Bench leaderboard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
