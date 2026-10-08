# Claude Sonnet 5 — findings by Ling 3.1 Flash

- Source: Anthropic (`anthropic/claude-sonnet-5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's most agentic Sonnet model (launched 2026-06-30) — within ~2–3 points of Opus 4.8 on coding and computer use at a much lower price; the price-performance pick for agents, and the default model on Free and Pro plans.
- **Provider / access:** Anthropic API (`claude-sonnet-5`), Claude Code, Claude Platform, all ChatGPT-equivalent Claude plans (Free/Pro/Max/Team/Enterprise); adaptive effort levels; US-only inference at 1.1x pricing. No Zen Free ID (`noFreeId`).
- **Release / knowledge:** 2026-06-30; knowledge cutoff not stated in the launch materials reviewed.
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

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08)
- Method: public internet research (Anthropic Sonnet 5 announcement, LLM Boss, RankLLMs, ApiDog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Sonnet_5.md`, using the same headings.
