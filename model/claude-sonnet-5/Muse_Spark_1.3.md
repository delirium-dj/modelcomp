# Claude Sonnet 5 — findings by Muse Spark 1.3 Contributor

- Source: Anthropic/Claude Sonnet 5, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-12 (UTC) — second-pass refresh (prior Signature 2026-09-18, amended 2026-09-27: catalog absolutes added, 83 → 84; new: Anthropic launch page re-read — $2/$10 intro made permanent, corrected Sonnet 4.6 baselines, Cyber Verification note)
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
- **Pricing (as of 2026-10-12):** Paid $2 in / $10 out per 1M — introductory pricing made permanent (Anthropic launch page; charts show $3/$15 standard-time pricing); default model on Free/Pro plans
- **Architecture:** proprietary, updated tokenizer (undisclosed params)

### Raw benchmarks found

> Compared against prior findings (2026-09-18/27, Overall 84): launch page re-read 2026-10-12 — no genuinely new Sonnet 5 absolutes found (announcement still states no exact BrowseComp/OSWorld/HLE figures; evaluation curves are effort-relative). New verified context: $2/$10 intro made permanent (was chart-priced at $3/$15), corrected Sonnet 4.6 baselines (HLE 34.6% no-tools / 46.8% with-tools under updated grader; OSWorld-Verified 78.5% under updated methodology), Cyber Verification Program availability, 1.0–1.35x tokenizer note. Scores held.

Agent / tool use:

- BrowseComp (agentic search): **improvement curve over Sonnet 4.6, approaching Opus 4.8 at higher effort** (Anthropic cost-performance charts; exact % not stated in announcement text)
- OSWorld-Verified (computer use): **strict improvement over Sonnet 4.6 (78.5%), wider cost-performance range than Opus 4.8, matching Opus 4.8 on some tasks** (Anthropic charts; exact % not stated)
- Terminal-Bench 4.0: **12.4%** (tbench.ai board — weak tail)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.1%** (Requesty/AA catalog row)
- HLE: **no verified public score found** (Sonnet 4.6 baseline corrected to 34.6% no-tools / 46.8% with-tools under updated grader — Sonnet 5 launch footnotes; Sonnet 5 delta still not numerically stated)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **55.3%** (Requesty/AA catalog row)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** (safety: lower undesirable-behavior rate than 4.6 per announcement)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- Coding Index: **71.5%** (Requesty/AA catalog composite of LiveCodeBench, SciCode, Terminal-Bench)

Long context:

- **1M window verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 84/100.** Charted BrowseComp + OSWorld gains with Opus-matching headroom; capped by the TB4.0 12.4% tail and no TB2.1/Tau/GDPval numbers.
- **Reasoning: 89/100.** GPQA 91.1% plus AA Index 55.3% show near-frontier reasoning; capped by zero HLE/LCR/CritPt numbers.
- **Context window: 100/100.** 1M / 128K out verified; top tier.
- **Multimodal: 62/100.** Text/image/file in, text out; capped below video/audio omni models.
- **Coding: 86/100.** Coding Index 71.5% with near-Opus-4.8 vendor positioning; capped by zero SWE/LiveCodeBench absolutes.
- **Cost efficiency: 55/100.** Paid $2/$10 permanent intro pricing is good Sonnet value; no $0 tier caps below free models.
- **Overall Score: 84/100.** Mean of the five non-cost dims (84+89+100+62+86)/5 = 84.2; best-fit premium-efficient agentic Sonnet near Opus capability.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-10-12
- Method: second-pass refresh of the 2026-09-18 report (amended 2026-09-27): launch-page re-read (permanent $2/$10 pricing, corrected 4.6 baselines, Cyber Verification + tokenizer notes; no new Sonnet 5 absolutes found — scores held); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
