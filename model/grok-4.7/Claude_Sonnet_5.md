# Grok 4.7 — findings by Claude Sonnet 5

- Source: xAI (now operating as SpaceXAI)/Grok 4.7 (`grok-4.7`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7 (no free-tier wording found in vendor materials; standard paid API model)
- **Short description:** xAI's (rebranded in recent coverage as SpaceXAI) flagship model for coding, agentic tool-use, and professional knowledge work, released 2026-09-21 as the successor to Grok 4.6. Top use case per vendor: long-running agentic coding and knowledge-work tasks.
- **Provider / access:** xAI API as `grok-4.7` (also served on a US regional endpoint); also available via GitHub Copilot, Cursor, Grok Build, and OpenRouter. Available on both Chat Completions-style and Responses API (Responses API always returns `reasoning.encrypted_content`). No OpenCode Zen listing found in sources checked — no Free ID confirmed.
- **Release / knowledge:** 2026-09-21 release (confirmed via xAI docs and multiple outlets); training knowledge cutoff not stated in any source reviewed.
- **IDs:** `xai/grok-4.7` (native API); `grok-4.7-fast` exists only inside Cursor/Grok Build, not on the public API.
- **Context window:** 500K tokens total, verified via xAI's own release notes/docs (no independent MRCR/RULER retrieval score found to confirm effective long-context recall).
- **Modalities:** text + image input; text-only output. Reasoning: yes, with four selectable effort levels (low/medium/high/xhigh, high is default). Tool calls: yes (agentic tool-use is a headline capability). JSON mode: not stated in sources found.
- **Pricing (as of 2026-09-25):** $2 / $0.50 / $6 per 1M tokens (input / cached input / output) for prompts ≤200K tokens; $4 / $1 / $12 above 200K tokens. Paid only; no free-tier privacy caveat found. "Grok 4.7 Fast" variant runs at 2x these token rates but only inside Cursor/Grok Build.
- **Architecture:** Reported as ~2.1 trillion parameters, but this figure comes from Elon Musk's own social-media statements rather than a confirmed vendor spec sheet — one third-party tracker (DataLearner) separately and inconsistently labels it a "dense" model. Proprietary/closed weights; no license published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.0%** (BenchLM, citing Vals AI harness)
- Tau3-Banking / Tau2-Bench: no verified public score found (Grok 4.6, the prior version, scored 50.7% on Artificial Analysis's Tau3-Banking leaderboard, but no Grok 4.7 entry was found there)
- GDPval-AA: **1695 Elo** (Artificial Analysis, "Benchmarking Grok 4.7," +90 Elo over Grok 4.6); a separate BenchLM listing normalizes this same eval to **59.8%**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **63%** SWE-Atlas-QnA, measured by Artificial Analysis inside the Grok Build agent harness (up from 58% for Grok 4.6)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found (xAI's own launch materials explicitly omit GPQA; no independent GPQA number for Grok 4.7 located)
- HLE: **43.1%** (BenchLM, listed as "AA-HLE" — note this is notably higher than typical published Humanity's Last Exam scores for frontier models in this period, and xAI's own launch page does not report an HLE figure, so treat this number as unconfirmed/possibly a distinct AA-internal variant)
- LCR / MLCR: **76.7%** (BenchLM, "AA-LCR")
- CritPt: **17.7%** (BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: **46** (Artificial Analysis; consistently reported across Artificial Analysis, the-decoder.com, and codersera.com), placing it behind Claude Fable 5.1 and GPT-6 Astra (53 each), Claude Opus 5 (51), Claude Fable 5 (50), Muse Spark 1.3 (48), and GPT-5.6 Sol (47)
- Omniscience Accuracy / Hallucination Rate: partial data only — AA-Omniscience Index **32.0%** (BenchLM); no separate hallucination-rate figure found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found (xAI has moved away from reporting this suite for the 4.7 launch)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **57.4%** (BenchLM)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE v1.1 self-claim range **65.2%–71.0%** (kie.ai launch summary) vs. **73%** independently measured by Artificial Analysis inside Grok Build (up from 65% for Grok 4.6); Artificial Analysis Coding Agent Index (Grok Build harness, xhigh): **56** (up from 47 for Grok 4.6), ranking 4th among models tested in their native harnesses behind Claude Fable 5.1, GPT-6 Astra, and Claude Opus 5

Long context:

- no long-context retrieval reported (no MRCR/RULER/GraphWalks score found for Grok 4.7 at its 500K window)

### Normalized scores (1-100)

- **Tool use: 76/100.** Terminal-Bench 2.1 at 76.0% sits well above the mid-tier band (45-60%) but short of the ~88%+ frontier bar; GDPval-AA's 1695 Elo is close to but under the 1750 frontier threshold. Capped by the complete absence of a Tau3-Banking or OSWorld/AutomationBench score for this exact model.
- **Reasoning: 58/100.** Pulled down by a missing GPQA Diamond score and a low CritPt result (17.7%); the AA Intelligence Index of 46 is solidly mid-pack (well under the 60+ frontier bar), and the unusually high 43.1% HLE figure is treated cautiously since it isn't corroborated by xAI's own materials.
- **Context window: 85/100.** Verified 500K total context places it at the bottom of the 500K-1M tier (85-94); no independent retrieval benchmark (MRCR/RULER) was found to justify scoring higher within that band.
- **Multimodal: 65/100.** Confirmed text + image input with text-only output maps to the "+image in" band (60-70); no audio input or non-text output found.
- **Coding: 76/100.** DeepSWE v1.1 (71-73%) sits just under the 74%+ frontier bar while AA-SciCode (57.4%) clears the 55%+ frontier bar; no SWE-bench Verified or LiveCodeBench figure exists to corroborate further, so scored just below frontier.
- **Cost efficiency: 80/100.** At $2/$6 per 1M tokens (below 200K context), pricing sits between the ~$1.25/$4.25 (~88) and ~$3/$15 (~60) reference points on the given scale, interpolated roughly toward the cheaper end.
- **Overall Score: 72.0/100.** Mean of Tool use (76), Reasoning (58), Context window (85), Multimodal (65), and Coding (76) = 360/5 = 72.0. Best fit: agentic coding and long-running tool-use workflows at a lower price point, not a choice for tasks requiring top-tier general reasoning or verified science/knowledge benchmarks.

---

## Signature

- Provided by: **Claude Sonnet 5 (anthropic/claude-sonnet-5)** — 2026-09-25
- Method: fresh public web research via search engine queries against Artificial Analysis, BenchLM, DataLearner, xAI's own docs/release notes, and independent tech press (MindStudio, the-decoder.com, codersera.com, kie.ai, iweaver.ai); scores are normalized 1-100 interpretations per the stated methodology, not official vendor scores. Several headline benchmarks (SWE-bench Verified, GPQA Diamond, LiveCodeBench, Tau3-Banking) were explicitly not published by xAI for this model and are marked accordingly rather than estimated.
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
