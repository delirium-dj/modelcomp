# Claude Sonnet 5 — findings by Muse Spark 1.3 Free

- Source: Anthropic/Claude Sonnet 5, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5 (Anthropic agentic Sonnet)
- **Short description:** Anthropic's most capable Sonnet-class model, built for the agentic era with adaptive thinking and 1M context at a lower cost than Opus; close to Opus 4.8 at lower prices.
- **Provider / access:** Anthropic via API `claude-sonnet-5` + Claude Code (default on Free/Pro plans); no Zen Free ID (Messages API, browsers/terminals, MCP).
- **Release / knowledge:** 2026-06-30 release; knowledge cutoff undisclosed
- **IDs:** `anthropic/claude-sonnet-5` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1M / 128K out — verified via curated repo metadata + Anthropic announcement (tokenizer note: 1.0–1.35x token mapping vs 4.6)
- **Modalities:** text, image, file in; text out; reasoning yes (adaptive thinking, effort levels); tool calls yes; computer use yes
- **Pricing (as of 2026-09-18):** Paid $2 in / $10 out per 1M introductory made permanent (announcement; charts show $3/$15 standard-time pricing)
- **Architecture:** proprietary, updated tokenizer (undisclosed params)

### Raw benchmarks found

Agent / tool use:

- BrowseComp (agentic search): **improvement curve over Sonnet 4.6, approaching Opus 4.8 at higher effort** (Anthropic cost-performance charts; exact % not stated in announcement text)
- OSWorld-Verified (computer use): **strict improvement over Sonnet 4.6 (78.5%), wider cost-performance range than Opus 4.8, matching Opus 4.8 on some tasks** (Anthropic charts; exact % not stated)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found** (Sonnet 4.6 baseline 34.6%/46.8%; Sonnet 5 delta not numerically stated)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** (safety: lower undesirable-behavior rate than 4.6 per announcement)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **1M window verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 86/100.** Charted strict gains on BrowseComp + OSWorld-Verified over 78.5% baseline with Opus-matching headroom; capped by absence of absolute harness percentages.
- **Reasoning: 84/100.** Substantial agentic-reasoning gain over Sonnet 4.6 per vendor with safer profile; capped by zero public GPQA/HLE/CritPt absolutes.
- **Context window: 100/100.** 1M / 128K out verified; top tier.
- **Multimodal: 62/100.** Text/image/file in, text out; capped below video/audio omni models.
- **Coding: 84/100.** Near-Opus-4.8 coding per vendor positioning; capped by zero public SWE/LiveCodeBench numbers.
- **Cost efficiency: 55/100.** Paid $2/$10 permanent intro pricing is good Sonnet value; no $0 tier caps below free models.
- **Overall Score: 83/100.** Mean of the five non-cost dims (86+84+100+62+84)/5 = 83.2; best-fit premium-efficient agentic Sonnet near Opus capability.

---

## Signature

- Provided by: **Muse Spark 1.3 Free (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Anthropic Sonnet 5 announcement + charts + system-card references); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
