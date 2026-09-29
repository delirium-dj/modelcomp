# Claude Opus 5.5 — findings by Grok 4.6

- Source: Anthropic / Claude Opus 5.5
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic’s 22 Sep 2026 Opus-tier daily driver: Fable-class work on most tasks at lower token cost than Opus 5, aimed at long-running coding agents, computer use, and professional knowledge work. Not Fable 5.1 (harder/longest runs) and not Mythos (higher-risk capability tier).
- **Provider / access:** Claude Messages API `claude-opus-5-5`; Amazon Bedrock `anthropic.claude-opus-5-5`; Vertex / Microsoft Foundry same ID. Pro/Max/Team/Enterprise apps. Fast mode research preview via `fast-mode-2026-02-01` beta.
- **Release / knowledge:** 2026-09-22. Knowledge / training cutoff June 2026 (Claude Platform overview).
- **IDs:** `anthropic/claude-opus-5-5` / API `claude-opus-5-5`. No OpenCode Zen Free ID found.
- **Context window:** 1M tokens default+ceiling; max output 128K (Messages API), 300K Batch API with `output-300k-2026-03-24` beta — https://platform.claude.com/docs/en/models/opus-5-5/overview
- **Modalities:** Text, image, and PDF (Files/document API) in; text + tool calls out. Adaptive thinking always on (effort: low–max; default medium). Computer use via `computer_toolset_20260801`. No native audio/video in or image out.
- **Pricing (as of 2026-09-29):** $4 in / $20 out per 1M; cache write $5 (5m TTL) / $8 (1h); cache read $0.20; Batch 50% ($2/$10); Fast mode $8/$40. US-only inference 1.1×. Anthropic: typical billed work ~40% cheaper than Opus 5. Paid.
- **Architecture:** Proprietary closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic, xhigh effort, ±2.6; Claude Code harness; production safeguards on — cyber tasks fell back to Opus 4.8, bio/LLM-dev to Opus 5) — https://www.anthropic.com/news/claude-opus-5-5 and https://www.anthropic.com/claude-opus-5-5
- Terminal-Bench 2.1 / 2.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA v2.1: **1846 Elo** (Anthropic citing Artificial Analysis)
- AutomationBench (Zapier, no fallback; safeguard fails count as fail): **40.0%** (Anthropic table)
- OSWorld 2.0: **81.8% partial** (Anthropic)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- Humanity’s Last Exam (with tools): **67.7%** (Anthropic vs Fable 5.1 65.6% / Opus 5 63.6%)
- GPQA Diamond / HLE no-tools / ARC-AGI-2 / AIME: **no verified public score found** (HokAI notes the 2026-09-22 system card omitted these vs Opus 5)
- Artificial Analysis Intelligence Index v4.3.2: **58** (https://artificialanalysis.ai/models/claude-opus-5-5 — max effort + default fallback)
- CritPt / LCR named splits: **no verified public score found** (included inside AA Index; per-bench numbers not on the AA page snippet)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- Chartography (charts, with tools): **89.0%** (Anthropic)

Coding:

- SWE-bench Pro: **89.9%** (Anthropic capability table via HokAI 2026-09-23 check of vendor/system-card figures; vs Opus 5 79.2%, Fable 5.1 81.2%) — https://hokai.io/hub/models/claude-opus-5.5
- SWE-bench Multilingual / Multimodal: **93.9% / 61.4%** (same HokAI/system-card summary)
- SWE-bench Verified: **no verified public score found**
- FrontierCode v1.1 (main): **54.4%** max-effort table; Anthropic also cites **54.6%** at default (medium) effort
- CursorBench 4.0: **57.8%** (max-effort table); **52.5%** at default medium
- Terminal-Bench-Science 0.1: **58.7%** (±3.5–5)
- LiveCodeBench / SciCode / DeepSWE / Vibe: **no verified public score found** as named public leaderboard rows for this ID

Long context:

- Native 1M window; Anthropic ProgramBench said to run across the full 1M — **no verified public MRCR/RULER/GraphWalks percentage found**.

### Normalized scores (1–100)

- **Tool use: 91/100.** GDPval-AA v2.1 1846 Elo clears the ~1750+ frontier reference; OSWorld 2.0 81.8% partial is strong computer-use. Caps: Terminal-Bench 4.0 66.4% leads Anthropic’s peer table but is not TB2.1 ~88%; AutomationBench 40% is safeguard-penalized; no Tau3/Claw-Eval.
- **Reasoning: 91/100.** HLE-with-tools 67.7% and AA Intelligence Index 58 (well above the AA median ~26 on v4.3.2) are top-tier on the 2026 agentic suite. Caps: no published GPQA Diamond / no-tools HLE / ARC-AGI-2 for this snapshot.
- **Context window: 96/100.** 1M default maps to 95–100. Not 100: no ≥98% retrieval-at-512K+ public number; ProgramBench is qualitative coverage, not a published retrieval %.
- **Multimodal: 68/100.** Image + PDF in, text out sits in the +image (60–70) band; Chartography 89% and computer-use vision are strong *within* that. Caps: no native video/audio in or non-text out.
- **Coding: 92/100.** SWE-bench Pro 89.9% plus FrontierCode/CursorBench leadership vs Astra/Sol in Anthropic’s tables. Caps: SWE-Verified unpublished; TB 4.0 still mid-60s vs older 85%+ TB2.1 agent-coding refs; SciCode/DeepSWE not posted.
- **Cost efficiency: 58/100.** $4/$20 is slightly worse than the ~$3/$15 ≈60 reference and far from $0; cache reads at $0.20 and ~40% lower typical spend vs Opus 5 help agent loops. Fast mode doubles list price. No free API tier.
- **Overall Score: 88/100.** Mean of 91, 91, 96, 68, 92 = 87.6 → 88 half-up. Best-fit: paid Opus daily driver for long coding/computer-use agents when 1M context and GDPval-class knowledge work matter more than native A/V.

---

## Signature

- Provided by: **Grok 4.6 (xAI/grok-4.6)** — 2026-09-29
- Method: Public internet research (Anthropic launch/docs, Claude Platform overview, Artificial Analysis, HokAI vendor-checked summary); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
