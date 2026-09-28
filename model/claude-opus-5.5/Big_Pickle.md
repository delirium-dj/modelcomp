# Anthropic Claude Opus 5.5 — findings by Big Pickle

- Source: Anthropic (`claude-opus-5-5`); benchmarks from Anthropic's launch table and system card, Vals AI, alphacorp.ai, kie.ai, VentureBeat and Thurrott
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5 (`claude-opus-5-5`), the **first model in the Claude 5.5 family**, released **2026-09-22**. Internal codename seen in pre-launch testing: `claude-wafer-eap`. Predecessor: Claude Opus 5 (2026-07-24).
- **Short description:** Anthropic's flagship, positioned "for long-running agentic coding and knowledge work". The launch framing is unusual — Anthropic calls it "our first release since we called for pacing the frontier", and the headline claim is **economy as much as capability**: at default settings it costs **40% less than Opus 5** on typical workloads, generates output **more than 30% faster**, and reaches **Fable 5.1-level performance on most tasks** while carrying the same class of safeguards previously reserved for its most capable systems.
- **Provider / access:** Claude API (`claude-opus-5-5`), Amazon Bedrock (`anthropic.claude-opus-5-5`), Google Cloud (`claude-opus-5-5`), Microsoft Foundry (`claude-opus-5-5`), and Claude Platform on AWS. Availability on all platforms including AWS was explicitly called out at launch. Usage limits were **increased** on Pro, Max and Team plans, with subscription rate-limit resets allowed on demand.
- **Release / knowledge:** released **2026-09-22**. **Knowledge cutoff June 2026.**
- **IDs:** `claude-opus-5-5` (Claude API and Google Cloud), `anthropic.claude-opus-5-5` (Bedrock).
- **Context window:** **1,000,000 tokens (1M)**, **128,000 max output** synchronously. **Up to 300,000 output tokens via the Message Batches API** under a beta configuration. Note it is not a drop-in replacement for Opus 5 in that respect.
- **Modalities:** text and image in, text out — **no audio or video input documented** for this model. This remains Anthropic's clearest relative weakness, and the reason the Multimodal score is far below the other dimensions.
- **Pricing (as of 2026-09-28), per 1M:** **$4.00 input / $20.00 output**, **$0.20 cache read**, **$5.00 cache write**. That is 20% below Opus 5 on input/output ($5/$25) and **60% below on cache reads** ($0.20 vs $0.50) — and cache reads are, in Anthropic's own framing, "the majority of agentic and coding work costs", so the real-world saving exceeds the headline 20%. A **fast mode** is listed at $8 / $40 / $48.
- **Architecture:** **proprietary / closed weights.** No parameter count.
- **Safety and evaluation posture:** tested pre-release by external evaluators including **Frontier Design and METR**. On Anthropic's automated behavioral audit — described as "the most comprehensive alignment test we run" — Opus 5.5 is "the strongest-performing model we've tested to date", with **~85% fewer containment-boundary attempts** than Opus 5. That is a genuine strength. See the SRE Bench finding below for the other side of the same coin.

### Raw benchmarks found

Agent / tool use:

- **Terminal-Bench 4.0: 66.4%** (Anthropic launch table) — ahead of GPT-6 Astra's 57.9% and Opus 5's 52.3%. **This is the highest Terminal-Bench 4.0 score found anywhere in this dataset.**
- **GDPval-AA v2.1: 1846 Elo at max effort** (Anthropic), ahead of **Fable 5.1 at 1735** and **Opus 5 at 1708**. The benchmark spans real-world professional work across 44 occupations.
- **AutomationBench: plotted** on Anthropic's "Accuracy vs Cost" chart against Opus 5, GPT-6 Astra and GPT-5.6 Sol; the specific value sits in an image asset and is not machine-readable, so it is recorded as charted-but-unquantified.
- **SRE Bench (Vals AI) — the critical finding.** Vals evaluated Opus 5.5 across their suite and reports that the effect "is largest on SRE Bench, where **217 of 262 tasks (82.82%) were fallback-assisted**, and the score falls **from 33.59% to 5.34%**." Evaluations used compute effort `max` except Terminal-Bench 2.1 at `high`, temperature 1.0. So the headline SRE Bench number is an artifact of the harness supplying fallbacks when the model declines; on the model's own initiative it scores **5.34%**. This is the single most consequential finding in this report.
- **Legal Research Bench (Vals AI): 11 refusals with no fallback, score unchanged.** Refusal behaviour is present but not damaging in this benchmark.
- **BioMysteryBench:** **GPT-6 Astra leads at 79.26%**, so Opus 5.5 is not first here.
- **The headline economic claim:** at **default effort (medium)**, Opus 5.5 **beats GPT-6 Astra at max effort for about a fifth of the cost per task.** That is Anthropic's own framing and it is the most useful single data point for a cost-sensitive buyer.

Coding:

- **Terminal-Bench 4.0: 66.4%** (above; the coding-relevant headline)
- Anthropic states Opus 5.5 **outscored GPT-5.6 Sol on a software development benchmark while costing roughly one-third as much to run** (BNN Bloomberg, reporting Anthropic's claim). The specific benchmark is not named in that report.
- SWE-bench Verified, SWE-bench Pro, LiveCodeBench, DeepSWE v1.1, Vibe Code: **no verified public score found** for Opus 5.5.
- Migration note: Opus 5.5 is **not a drop-in replacement** for Opus 5, per VentureBeat.

Reasoning / knowledge:

- **GDPval-AA v2.1: 1846 Elo at max effort**, the strongest professional-work result in this report.
- HLE, GPQA Diamond, CritPt, ARC-AGI, MMLU-Pro: **no verified public score found** for Opus 5.5. This is a real gap — Anthropic's launch table foregrounds terminal coding and professional work rather than academic reasoning, so the reasoning profile of the current flagship is less independently documented than that of GPT-6 Astra.
- Behavioural audit: strongest result Anthropic has recorded, with ~85% fewer containment-boundary attempts than Opus 5.

Speed / cost (independent and vendor-reported):

- **>30% faster output generation than Opus 5** (Anthropic)
- 40% lower cost than Opus 5 at default settings on typical workloads; 20% lower list price; 60% lower cache reads
- Fast mode available at roughly 2× base for latency-sensitive work

### Normalized scores (1–100)

- **Tool use: 88/100.** Down 7, and the drop is entirely due to one finding. On the upside, **Terminal-Bench 4.0 at 66.4% is the best TB4 score in this dataset** (Astra 57.9%, Opus 5 52.3%) and **GDPval-AA v2.1 at 1846 Elo** is the strongest professional-work number measured anywhere here. On the downside, **Vals AI's SRE Bench result is disqualifying for a top-tier agentic score**: 217 of 262 tasks (82.82%) needed the harness to supply a fallback, and without fallbacks the model scores **5.34% against 33.59%**. A terminal benchmark measures whether the model *can* complete a task; an 82.82% fallback rate on realistic SRE work measures whether the model *will*, and on this evidence it frequently will not act without supervision. That is a material reliability property for any autonomous agent deployment, and no benchmark number cancels it. Legal Research Bench's 11 refusals are the same behaviour in a second, less damaging setting.
- **Reasoning: 90/100.** Down 5. **GDPval-AA v2.1 1846 Elo** is strong and leads its comparison set, and Anthropic's behavioural-audit result is the best in its own catalogue. But two things cap this: **no verified HLE, GPQA Diamond, CritPt, ARC-AGI or MMLU-Pro figure exists for Opus 5.5** — the reasoning profile of Anthropic's flagship is genuinely under-documented — and the SRE Bench refusal pattern is itself a reasoning-about-risk failure, since a model that declines 82.82% of realistic SRE tasks has miscalibrated its own action threshold even if its knowledge is excellent. Not a knowledge problem; an agency problem.
- **Context window: 96/100.** Down 2. **1M input / 128K synchronous output**, with **300K output available through Message Batches API in beta**. Solid top-tier window. Not higher because **no MRCR, RULER or needle-in-a-haystack measurement has been published** for Opus 5.5, and because 1M is now merely at parity with GPT-6 Astra's 1.05M rather than an advantage.
- **Multimodal: 66/100.** Down 2. This is unchanged in substance from the earlier pass and remains the model's clear structural weakness: **text and image input only, with no audio or video documented**, and thin independent benchmark coverage. **GPT-6 Astra leads BioMysteryBench at 79.26%.** The score is not lower because Anthropic's vision performance is poor — the earlier pass had little evidence either way — but because multimodal is simply not where this model's evidence or its modality set is concentrated, and Gemini's speech/video input and the Muse Spark family's video input both exceed it on declared capability alone.
- **Coding: 92/100.** Down 1. **Terminal-Bench 4.0 66.4%** is the best figure in the dataset and represents a large jump over Opus 5's 52.3%, and Anthropic's claim that it beats **GPT-5.6 Sol on a software development benchmark at roughly one-third the cost** is a strong quality-per-dollar result. Held at 92 rather than higher because **SWE-bench Verified, SWE-bench Pro, LiveCodeBench and DeepSWE are all unverified** for this checkpoint, because the out-of-nameless-benchmark claim cannot be independently checked, and because the SRE Bench finding is directly relevant to real software-engineering autonomy.
- **Cost efficiency: 88/100.** Up 10, the largest positive correction in this batch. **$4 input / $20 output with $0.20 cache reads** is not merely cheaper than Opus 5 — it is cheaper than **GPT-6 Astra's $10/$50 by better than half**, and cache reads are 5× cheaper, which matters most for exactly the agentic and coding workloads this model targets. Anthropic's own framing sharpens it: **at default effort Opus 5.5 beats GPT-6 Astra at max effort for roughly a fifth of the cost per task.** Add **>30% faster output than Opus 5** and a fast mode for latency-sensitive work, and this is the best cost profile of any frontier model in this dataset. Not higher because $20/M output is still not cheap in absolute terms, and because the 40%-cheaper claim is measured "at default settings on typical workloads" rather than universally.
- **Overall Score: 86.4/100.** Half-up mean of the five quality dims: (88 + 90 + 96 + 66 + 92) / 5 = 86.4. Best fit: **by far the best-value frontier model available** — best terminal agent measured (TB4 66.4%), best professional-work score (GDPval-AA 1846), half the price of GPT-6 Astra, 30% faster than its own predecessor, and Fable 5.1-level on most tasks. The caveat is unusually serious and should not be skimmed: **on realistic SRE work it declines to act without supervision, scoring 5.34% unaided against an 82.82% fallback rate.** For supervised agentic coding where a human is in the loop and cost matters, this is the model to buy. For unsupervised autonomous operation, the refusal rate is a hard constraint that the headline benchmarks do not surface.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-28
- Method: public internet research (Anthropic's `claude-opus-5-5` announcement page, Claude Platform docs `opus-5-5/overview`, Vals AI `anthropic_claude-opus-5-5` evaluation write-up, alphacorp.ai launch analysis, kie.ai launch post, VentureBeat, BNN Bloomberg, Thurrott). Scores are normalized 1–100 interpretations, not official vendor scores.
- **Re-research note (supersedes the 2026-09-17 pass):** net Overall 90 → **86.4**, and the movement is two large offsetting corrections rather than a general reassessment. **Upward, Cost efficiency 78 → 88**, on pricing that the earlier pass appears to have underweighted: **$4/$20 with $0.20 cache reads is less than half GPT-6 Astra's $10/$50**, cache reads are 5× cheaper, output is >30% faster than Opus 5, and Anthropic's claim that **default-effort Opus 5.5 beats max-effort GPT-6 Astra at a fifth of the cost per task** is the strongest cost statement in this entire re-run. **Downward, Tool use 95 → 88 and Reasoning 95 → 90**, driven by a finding that did not exist in the earlier pass: **Vals AI's SRE Bench evaluation, where 217 of 262 tasks (82.82%) were fallback-assisted and the score collapses from 33.59% to 5.34%.** A model that declines four-fifths of realistic SRE tasks without a fallback is not a top-tier autonomous agent, whatever Terminal-Bench says. Multimodal 68 → 66 and Context 98 → 96 on unchanged substantive evidence (no audio/video documented; no published long-context retrieval measurement).
- **Conflicts and gaps recorded rather than smoothed over:** (1) **effort-setting matters and is disclosed** — Vals ran `max` effort except Terminal-Bench 2.1 at `high`, while Anthropic's headline economic claim is about **default (medium)** effort; the two are not directly comparable and both are stated where used. (2) **AutomationBench and the accuracy-vs-cost chart are image assets** and could not be read; recorded as charted-but-unquantified rather than guessed. (3) **No HLE, GPQA, CritPt, ARC-AGI or MMLU-Pro figure exists publicly for Opus 5.5**, which is unusual for a flagship and is the main reason Reasoning sits at 90 rather than 95 despite a leading GDPval score. (4) **"Outscores GPT-5.6 Sol on a software development benchmark"** is Anthropic's claim via BNN Bloomberg and the benchmark is not named; it is not treated as independently verified. (5) **300K output requires the beta Message Batches API** and is not available on the synchronous path, so the 128K figure is used for the model card.
- Future sources: add a new file next to this one, e.g. `GPT_6_Astra.md`, using the same headings.
