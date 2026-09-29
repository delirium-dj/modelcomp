# Claude Sonnet 5 — findings by Muse Spark 1.3 Contributor

- Source: Anthropic/Claude Sonnet 5, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: catalog absolutes added, scores recomputed 83 → 84); re-verified 2026-09-29 (UTC, user-signed-off re-research: TB2.1 80.4 + OSWorld 81.2 + GDPval 1618 + SWE-Pro 63.2 + HLE 43.2/57.4 + CursorBench added; Tool 84 → 88, Reasoning 89 → 90, Coding 86 → 87, Overall 84 → 85)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5 (Anthropic agentic Sonnet)
- **Short description:** Anthropic's most capable Sonnet-class model, built for the agentic era with adaptive thinking and 1M context at a lower cost than Opus; close to Opus 4.8 at lower prices.
- **Provider / access:** Anthropic via API `claude-sonnet-5` + Claude Code (default on Free/Pro plans); no Zen Free ID (Messages API, browsers/terminals, MCP).
- **Release / knowledge:** 2026-06-30 release; knowledge cutoff Jan 2026 (platform docs, amended 2026-09-27).
- **IDs:** `anthropic/claude-sonnet-5` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1M / 128K out — verified via curated repo metadata + Anthropic announcement (tokenizer note: 1.0–1.35x token mapping vs 4.6)
- **Modalities:** text, image, file in; text out; reasoning yes (adaptive thinking, effort levels); tool calls yes; computer use yes
- **Pricing (as of 2026-09-18):** Paid $2 in / $10 out per 1M introductory made permanent (announcement; charts show $3/$15 standard-time pricing)
- **Architecture:** proprietary, updated tokenizer (undisclosed params)

### Raw benchmarks found

Agent / tool use:

- BrowseComp (agentic search): **improvement curve over Sonnet 4.6, approaching Opus 4.8 at higher effort** (Anthropic cost-performance charts; exact % not stated in announcement text)
- OSWorld-Verified (computer use): **81.2%** (Anthropic launch; vs 4.6 78.5%, Opus 4.8 81.7–83.4 — replaces chart-only row, re-verified 2026-09-29)
- Terminal-Bench 4.0: **12.4%** (tbench.ai board — weak tail)
- Terminal-Bench 2.1: **80.4%** (Anthropic launch; vs 4.6 67.0%, Opus 4.8 ~79–82.7 — re-verified 2026-09-29)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA v2: **1618 Elo** (Anthropic launch; vs 4.6 1395, Opus 4.8 1615 — first Sonnet to outscore the concurrent Opus on any benchmark — re-verified 2026-09-29)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.1%** (Requesty/AA catalog row)
- HLE: **43.2% no tools / 57.4% with tools** (Anthropic launch; vs 4.6 34.6%/46.8% — re-verified 2026-09-29)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **55.3%** (Requesty/AA catalog row)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** (safety: lower undesirable-behavior rate than 4.6 per announcement)

Coding:

- SWE-bench Pro: **63.2%** (Anthropic launch; vs 4.6 58.1%, Opus 4.8 69.2 — harder Pro variant, not Verified — re-verified 2026-09-29); SWE-bench Verified: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- Coding Index: **71.5%** (Requesty/AA catalog composite of LiveCodeBench, SciCode, Terminal-Bench)
- CursorBench (Cursor internal): **57%** (vs 4.6 49% — Cursor public statement, re-verified 2026-09-29); ProgramBench long-context coding 76–86% band (launch)

Long context:

- **1M window verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 80.4% plus OSWorld-Verified 81.2% and GDPval 1618 (outscoring Opus 4.8) show near-Opus agency; capped by the TB4.0 12.4% tail and no Tau numbers.
- **Reasoning: 90/100.** GPQA 91.1% plus HLE 43.2%/57.4% and AA Index 55.3% show near-frontier reasoning; capped by no LCR/CritPt numbers.
- **Context window: 100/100.** 1M / 128K out verified; top tier.
- **Multimodal: 62/100.** Text/image/file in, text out; capped below video/audio omni models.
- **Coding: 87/100.** SWE-Pro 63.2% plus Coding Index 71.5% and CursorBench 57% with near-Opus-4.8 positioning; capped by no SWE-Verified/LiveCodeBench absolutes.
- **Cost efficiency: 55/100.** Paid $2/$10 permanent intro pricing is good Sonnet value; no $0 tier caps below free models.
- **Overall Score: 85/100.** Mean of the five non-cost dims (88+90+100+62+87)/5 = 85.4 → 85; best-fit premium-efficient agentic Sonnet near Opus capability.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Anthropic Sonnet 5 announcement + charts + system-card references); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
