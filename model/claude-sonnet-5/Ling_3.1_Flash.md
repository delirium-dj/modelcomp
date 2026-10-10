# Claude Sonnet 5 — findings by Ling 3.1 Flash

- Source: Anthropic (`anthropic/claude-sonnet-5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's most agentic Sonnet model (launched 2026-06-30) — within ~2–3 points of Opus 4.8 on coding and computer use at a much lower price; the price-performance pick for agents, and the default model on Free and Pro plans.
- **Provider / access:** Anthropic API (`claude-sonnet-5`), Claude Code, Claude Platform, all ChatGPT-equivalent Claude plans (Free/Pro/Max/Team/Enterprise); adaptive effort levels; US-only inference at 1.1x pricing. No Zen Free ID (`noFreeId`).
- **Release / knowledge:** 2026-06-30; knowledge cutoff **January 2026** (platform docs; reliable-knowledge and training-data cutoffs both Jan 2026). **Status: Legacy (active)** — Anthropic's docs now say "consider migrating to Claude Sonnet 5.5"; retirement not sooner than 2027-06-30.
- **IDs:** `anthropic/claude-sonnet-5`.
- **Context window:** 1M tokens input / 128K output.
- **Modalities:** text, image, file in; text out.
- **Pricing (as of 2026-10-02):** $2.00/$10.00 per 1M input/output — the introductory rate made permanent (2026-08-10; the planned $3/$15 standard rate no longer applies); prompt caching up to 90% savings, Batch 50% off. Note: new tokenizer maps the same text to ~1.0–1.35x more tokens, raising effective per-request cost.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (card harness; vs Sonnet 4.6 67.0%, Opus 4.8 82.7%, GPT-5.5 83.4%)
- SWE-bench Pro: **63.2%** (vs Sonnet 4.6 58.1%, Opus 4.8 69.2%)
- SWE-bench Verified: **75.8%** (RankLLMs)
- OSWorld-Verified (computer use): **81.2%** (highest effort; vs Sonnet 4.6 78.5%, Opus 4.8 83.4%)
- GDPval-AA v2 (knowledge work): **1618 Elo** — an outright win vs Opus 4.8's 1615 (Sonnet 4.6: 1395)
- BrowseComp, AutomationBench, Legal Agent Benchmark: reported on the model card charts but figures not captured in the sources reviewed
- Claw-Eval / ClawProBench / Agents' Last Exam: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (no tools): **43.2%** (vs Sonnet 4.6 34.6%, Opus 4.8 49.8%)
- Humanity's Last Exam (with tools): **57.4%** (vs Sonnet 4.6 46.8%, Opus 4.8 57.9%)
- CharXiv Reasoning: **77.0%** no tools / **88.3%** with tools
- HealthBench Professional: **57.8%** (edges Opus 4.8's 56.9%)
- GPQA Diamond: no official figure; RankLLMs reports 58.6% — inconsistent with the HLE results, treated as unreliable and excluded from scoring

Coding:

- SWE-bench Pro: **63.2%** (above)
- Terminal-Bench 2.1: **80.4%** (above)
- SWE-bench Verified: **75.8%** (above)
- DeepSWE / SciCode / LiveCodeBench / AA Coding Index / Vibe Code Bench: no verified public score found

Long context:

- 1M-token window (128K output); no MRCR / RULER / GraphWalks score published

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1 80.4% sits between the mid band (45–60% → 50–70) and the 88%+ frontier bar, with GDPval-AA v2 1618 Elo and OSWorld-Verified 81.2% corroborating; the ~2–3 point gap to Opus 4.8 caps the score.
- **Reasoning: 85/100.** HLE with tools 57.4% (nearly Opus 4.8's 57.9%) clears the 40%+ frontier bar comfortably and no-tools 43.2% clears it narrowly; CharXiv Reasoning 88.3% (with tools) and HealthBench Professional 57.8% support; no official GPQA figure.
- **Context window: 95/100.** 1M-token window with 128K output; no ≥98% retrieval-at-512K+ figure, so 100 is not justified.
- **Multimodal: 65/100.** text/image/file in with text out — the +image-in band (60–70); no audio/video/PDF input.
- **Coding: 85/100.** SWE-bench Pro 63.2% (within ~6 points of Opus 4.8's 69.2% and near GPT-5.6 Sol's 64.6%), Terminal-Bench 2.1 80.4% (just under the 85% bar) and SWE-bench Verified 75.8%; DeepSWE/SciCode/Coding-Index unpublished.
- **Cost efficiency: 72/100.** $2/$10 per 1M (permanent) interpolates to ~74 between the ~88 ($1.25/$4.25) and ~60 ($3/$15) references; the new tokenizer's 1.0–1.35x token inflation trims effective value to ~72.
- **Overall Score: 83/100.** (84+85+95+65+85)/5 = 82.8 → 83 — near-Opus agentics (TB2.1 80.4%, GDPval-AA v2 1618) at 40% of Opus 4.8's price, with text-only multimodal as the main compromise.

---

## Update 2026-10-08 (6-day re-research)

Independent runs found (The Model Gap, all external evaluators) — fills every coding/reasoning gap:

- **GPQA Diamond: 88.9%** (vals.ai, 2026-08-17) — the report excluded RankLLMs' 58.6% as unreliable; vals.ai's independent 88.9% is consistent with the HLE results and now anchors the reasoning score
- **LiveCodeBench: 82.4%** ±1.09 (vals.ai v6, rank 50/138, 2026-08-15) — fills the gap
- **DeepSWE v1.1: 54.0%** ±4 (Datacurve, mini-swe-agent harness, rank 13/17, $26.40 avg cost/task) — fills the gap
- **Toolathlon-Verified: 71.6%** ±9.7 (toolathlon.xyz's own board, 2026-08-20) — fills the gap
- SWE-bench Verified **79.6%** (vals.ai, 2026-08-17; vs 75.8% RankLLMs); HLE no-tools **41.3%** (AA, 2026-08-17; vs 43.2% card); Terminal-Bench 2.1 **74.6%** (tbench.ai, 2026-09-03, ±10.6 — 5.8pp under the card's 80.4%; harness-dependent); LiveBench **76.0** (2026-08-24); AA-AnalystAgent 46.3 (2026-09-29)
- AnotherWrapper corroborates: SWE-bench Verified 85.2% (xhigh), DeepSWE 53.9%, LiveCodeBench 82.4%
- Still unpublished: Vibe Code Bench, SciCode, AA Coding Index, MRCR/RULER/GraphWalks, official GPQA

---

## Update 2026-10-10 (deep second pass, 3 independent searches)

**Scores unchanged: Tool 84 / Reasoning 85 / Context 95 / Multimodal 65 / Coding 85 / Cost 72 / Overall 83.** New data and flags this pass:

- **Legacy status (operational flag):** Anthropic's platform docs mark Sonnet 5 **"Legacy"** — "Although Claude Sonnet 5 is still available, you should consider migrating to Claude Sonnet 5.5" (Sonnet 5.5 launched at the same $2/$10). Retirement: not sooner than **2027-06-30**; still served on Claude API, Amazon Bedrock, Google Cloud, Microsoft Foundry and Claude Platform on AWS. Batch API beta now supports **300K max output** (vs 128K standard).
- **AA Intelligence Index, full scale history:** **53 at launch** (v4.1, 2026-06-30 — the **#5 model on the Index**, only 2–3 points behind GPT-5.5 xhigh and Opus 4.8 max; 300M tokens per run, "very verbose" vs the 63M median) → **38 (Max)** on the current v4.3.2 scale (Xhigh 34 / High 32 / Medium 28 / Low 24 / Non-reasoning 23; 79 t/s at Max, $1.50 blended). Another large benchmark-revision effect, not a regression.
- **Cost-per-task nuance (AA launch article):** at the then-standard $3/$15 pricing, Sonnet 5 cost **$2.29 per Intelligence Index task — ~2× Sonnet 4.6 and ~15% MORE than Opus 4.8**, "driven entirely by increased token usage" (AA's results used standard pricing; the $2/$10 introductory rate ran until Sept 1 and was made permanent on 2026-08-10, so the current effective per-task cost is ~30% lower than AA's launch measurement). The verbosity tax is the standing caveat on the Cost 72 rationale.
- **Migration/API behavior detail (Anthropic "What's new" page):** Sonnet 5 is a drop-in replacement for Sonnet 4.6 with three behavior changes — adaptive thinking on by default (manual extended thinking `budget_tokens` now returns a 400 error), non-default `temperature`/`top_p`/`top_k` return 400 errors (use system-prompt instructions instead), and the new tokenizer produces **~30% more tokens for the same text** (per-request cost does not fall in proportion to the per-token price). **Priority Tier is NOT available on Sonnet 5**; the browser-use tool and the stable `computer_toolset_20260801` are supported on the Claude API and Google Cloud (not on 4.6).
- **Launch-post detail recovered:** the most agentic Sonnet yet — better at refusing malicious requests and resisting prompt-injection hijacks than 4.6, lower hallucination and sycophancy, lower misaligned-behavior scores overall (though somewhat higher than Opus 4.8 and Claude Mythos Preview); real-time cyber safeguards enabled by default (same as Opus 4.7/4.8, less strict than Fable 5); part of the Cyber Verification Program; default model for Free and Pro plans; rate limits increased across Chat, Cowork, Claude Code and the Platform for higher effort levels.
- **Score impact:** none — the new reads (Index scale history, legacy status, cost-per-task nuance, API behavior changes) all land inside the existing bands or are operational notes; the 10-08 independent fills (GPQA 88.9% vals, LiveCodeBench 82.4%, DeepSWE 54.0%, Toolathlon 71.6%) remain the evidence base.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-10)
- Method: public internet research (Anthropic Sonnet 5 announcement, platform docs and "What's new" page, Artificial Analysis, ApiDog, The Model Gap, vals.ai, Datacurve, toolathlon.xyz); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Sonnet_5.md`, using the same headings.
