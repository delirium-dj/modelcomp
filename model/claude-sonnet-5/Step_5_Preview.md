# Claude Sonnet 5 — findings by Step 5 Preview

- Source: Anthropic (`claude-sonnet-5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's most agentic Sonnet-class model (released 2026-06-30), built to run autonomously at a level that a few months earlier required Opus-class models — plans, browser/terminal tool use, self-checking — at Sonnet speed and price. Default model on Claude.ai Free/Pro plans; succeeded by Sonnet 5.5 (2026-09-28), which is 30%+ faster and beats it on most evals.
- **Provider / access:** Claude API (Messages API) `claude-sonnet-5`; Amazon Bedrock (`anthropic.claude-sonnet-53`), Google Cloud, Microsoft Foundry, Claude Code/Claude.ai. No OpenCode Zen Free ID found — paid API only (free access only inside Claude.ai plan usage).
- **Release / knowledge:** 2026-06-30; reliable knowledge cutoff Jan 2026, training data cutoff Jan 2026.
- **IDs:** `claude-sonnet-5` (Claude API alias and Bedrock/Vertex).
- **Context window:** 1,000,000 tokens default (no beta header, standard pricing); 128K max output (300K max output in Batch API beta).
- **Modalities:** Text, image and file inputs → text out. Adaptive thinking with effort levels low / medium / high / max / x-high (default `high`); tool use; real-time cyber safeguards block certain high-risk dual-use activity.
- **Pricing (as of 2026-10-09):** $2.00 / MTok input, $10.00 output (introductory price made permanent 2026-08-10); cache reads $0.20; 5m cache write $2.50 / 1h cache write $4; Batch API $1 / $5. Note: the updated tokenizer inflates tokens ~1.0–1.35x vs Sonnet 4.6 for the same text.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (Anthropic system card — beats Opus 4.8's 74.6% on the same Terminus-2 harness; Sonnet 4.6 67.0%); AA (max) 80.5%; Vals 74.5%
- Terminal-Bench 4.0: **10.3%** (Anthropic's own Sonnet 5.5 comparison table); other trackers 12.42% (high+tools) / AA 14.1% (max) — new hard suite, low field-wide
- BrowseComp: **84.7%** (system card)
- OSWorld-Verified: **81.2%** (system card; vs Opus 4.8 83.4%); OSWorld 2.1: 57.0% partial (5.5-generation table)
- GDPval-AA: **1603** (system card; v2 reads 1618 — slightly above Opus 4.8's 1615); AA (max) 48.3%
- AA Agentic Index: **44.3%** (AA)
- Claw-Eval / ClawProBench / Toolathon: **no verified public score found**
- Cost per task: cheapest at low/medium effort; at xhigh effort, thinking-token burn makes per-task cost approach Opus 4.8 (Tabbit/Vellum analysis)

Reasoning / knowledge:

- HLE: **57.4% with tools / 43.2% without tools** (system card; vs Opus 4.8 57.9%); AA (max) 41.3%
- GPQA Diamond: **91.1%** (AA, max); Vals 88.9%; 90.53% (xhigh, DataLearner)
- AA-LCR: **82.0%** (AA, max)
- AA Intelligence Index: **38.2** (AA, max); 53.4 on the older scale (August 2026 reading)
- MMLU-Pro: **87.5%** (Vals); AA-Omniscience accuracy 40.1%, non-hallucination rate 60.6% (AA, max)
- CritPt: **16.9%** (AA, max)

Coding:

- SWE-bench Verified: **85.2%** (system card, xhigh+tools); Vals 79.6% (independent); RankLLMs 75.8%
- SWE-bench Pro: **63.2%** (system card; vs Opus 4.8 69.2%, Sonnet 4.6 58.1%)
- LiveCodeBench: **82.4%** (Vals)
- SciCode: **54.3%** (AA, max); AA Coding Index: **71.5%** (AA, max)
- FrontierCode 1.1 Main: **42.7%**; CursorBench 3.2: **61.5%**; CursorBench 4.0: **34.1%**
- DeepSWE v1.1: **54.0%** (deep thinking + tools); SWE Multilingual 78.3%, SWE Multimodal 28.1% (system card)

Multimodal:

- MMMU-Pro: **83.0%** (Vals AI); Vals Multimodal Index 68.8%; Chartography **15.6% no tools** (weak chart reasoning per the 5.5-generation table)

Long context:

- 1M-token window at standard pricing; AA-LCR 82.0% (max) is the only public long-context reasoning figure found; **no public MRCR/RULER number for Sonnet 5**

### Normalized scores (1–100)

- **Tool use: 84/100.** TB2.1 80.4% (above Opus 4.8 on the same harness), BrowseComp 84.7%, OSWorld-Verified 81.2% and GDPval-AA 1603 sit just under the frontier band's TB2.1 ~85% / GDPval ~1750+ bar; capped by Terminal-Bench 4.0 at 10.3–14.1%, τ-Bench Banking 37.3% and no public Claw-Eval/Toolathlon.
- **Reasoning: 87/100.** HLE 57.4% with tools (43.2% without), GPQA 91.1% and AA-LCR 82.0% clear the frontier reference, with the AA Intelligence Index at 38.2 (max); capped by CritPt 16.9% and AA-Omniscience accuracy 40.1% — a notch below Fable 5/GPT-5.5-class depth.
- **Context window: 94/100.** 1M-token default at standard pricing with 128K output (300K in batch) is the ≥1M tier; AA-LCR 82.0% (max) supports it, and the 100 tier's ≥98% retrieval-at-512K requirement is unverifiable — no public MRCR number exists for Sonnet 5.
- **Multimodal: 70/100.** Text + image + file in → text out is the 60–70 band, placed at its top by MMMU-Pro 83.0% and Vals Multimodal Index 68.8%; Chartography 15.6% no-tools shows chart reasoning still lags, and no video/audio input or non-text output exists.
- **Coding: 84/100.** SWE-bench Verified 85.2% (85.2 system card / 79.6 Vals), SWE-bench Pro 63.2%, LiveCodeBench 82.4% and Coding Index 71.5% are frontier-band; capped by DeepSWE 54.0%, CursorBench 4.0 34.1% and FrontierCode 42.7% on long-horizon agentic coding, and by the tokenizer's 1.0–1.35x token inflation on cost-per-task.
- **Cost efficiency: 62/100.** $2/$10 per MTok sits between the methodology's $3/$15 ≈ 60 and $0.60/$2.20 ≈ 92 tiers (closer to the former), with $0.20 cache reads and 50%-off batch softening it; the tokenizer inflation and xhigh thinking-token burn erode the list-price advantage.
- **Overall Score: 84/100.** Best-fit recommendation: the default production agent — near-Opus tool use, coding and reasoning at Sonnet pricing for most workloads; reserve Opus/Fable for the hardest long-horizon autonomous work.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Anthropic Sonnet 5 model page, pricing page, launch post and system-card-derived tables, Artificial Analysis via OpenRouter, Vals AI, BenchLM, Vellum/Tabbit analyses, ThePlanetTools); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
