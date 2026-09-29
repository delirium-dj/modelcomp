# Claude Sonnet 5.5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic (`anthropic/claude-sonnet-5.5`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** The second model in Anthropic's Claude 5.5 family and "the best combination of speed and intelligence" in the lineup — a faster, lower-cost complement to Claude Opus 5.5, positioned for well-scoped everyday tasks, bug fixes and polished documents/slides/spreadsheets rather than open-ended judgment work.
- **Provider / access:** Claude Platform (API id `claude-sonnet-5-5`), Amazon Bedrock (`anthropic.claude-sonnet-5-5`), Google Cloud (`claude-sonnet-5-5`), Microsoft Foundry; also OpenCode Zen (`claude-sonnet-5-5`, paid). Zero data retention available, as with Opus 5.5.
- **Release / knowledge:** Launched **2026-09-28** (vendor page date). Reliable knowledge cutoff **Jun 2026**; training data cutoff Jun 2026. Retirement commitment: **not sooner than 2027-09-28** — the strongest lifecycle guarantee of the Claude 5.5 models tracked here.
- **IDs:** `claude-sonnet-5-5` (Claude API alias, Bedrock, Vertex, Foundry, Zen). No Free ID on any route.
- **Context window:** **1M tokens**, with **128K max output** (vendor models overview). Thinking: adaptive, default effort **high** (not fully switchable off — the API moved to a `between_tools` setting for up-front thinking).
- **Modalities:** text and image input, text output, multilingual, vision, tool use — the standard current-Claude set. No audio or video input is documented.
- **Pricing (as of 2026-09-29):** **$2 / 1M input, $10 / 1M output**, **$0.20 / 1M cache reads** — identical list price to Sonnet 5, but the vendor measures **up to 30% less cost per task** because it needs far fewer tokens for the same work.
- **Architecture:** proprietary/undisclosed; same-family sibling of Opus 5.5 and Fable 5.1. No parameter or weights disclosure.

> **Note on provenance:** this file was re-created on 2026-09-29 after a concurrent external process removed it from the working tree along with the `kimi-k2.6` file. Content is unchanged from the first write of the same date.

### Raw benchmarks found

Agent / tool use (vendor-published, Sonnet 5.5 vs Sonnet 5 / Opus 5.5 / GPT-6 Sol):

- Terminal-Bench 4.0: **70.6%** (Sonnet 5 10.3%, Opus 5.5 66.4% at Xhigh)
- GDPval-AA v2.1: **1844** (Sonnet 5 1449, Opus 5.5 1846, GPT-6 Sol 1487)
- AA-Briefcase v1.1: **1811** (Sonnet 5 1359, Opus 5.5 1822)
- OSWorld 2.1: **80.1% partial** (Sonnet 5 57.0%, Opus 5.5 81.8%)
- CursorBench 4.0: **55.5%** (Sonnet 5 34.1%, Opus 5.5 57.8%)

Reasoning / knowledge:

- Humanity's Last Exam: **64.5% with tools** (Sonnet 5 54.9%, Opus 5.5 67.7%)
- GDPval-AA / AA-Briefcase are the knowledge-work reasoning anchors on the vendor's table (run by Artificial Analysis on a pre-release deployment; the vendor discloses a structured-output bug that may have *understated* its scores).
- No GPQA Diamond, AIME or AA Intelligence Index figure was published on the sources reached — **no verified public score found**.

Coding:

- Terminal-Bench 4.0 **70.6%** and CursorBench 4.0 **55.5%** are the vendor's coding anchors, both a large step over Sonnet 5 (10.3% / 34.1%).
- FrontierCode 1.1 (Main): **46.2% at Max effort** (Opus 5.5 54.4%, GPT-6 Sol 52.1%) — the vendor notes Sonnet 5.5 scores *lower* at Max than at lower effort because it over-triggered multi-subagent code review and timed out on two inspected cases.
- Vision/coding crossover: **first Sonnet model to beat Pokémon Red working only from screenshots** (vendor claim, no score).
- No SWE-bench Verified or SWE-bench Pro figure was published — **no verified public score found**.

Long context:

- 1M-token window with 128K output is vendor-documented; **no MRCR / RULER / GraphWalks retrieval percentage is published** for this model.

Serving / cost behaviour:

- Generates output **30%+ faster than Sonnet 5** — "our fastest Sonnet model to date" (vendor).
- Safety: first Sonnet to launch with Opus-5-class cyber safeguards and fallbacks; biology safeguards as Sonnet 5; first Sonnet with safety classifiers that prevent reasoning extraction, plus expanded preserved thinking.

### Normalized scores (1–100)

- **Tool use: 90/100.** GDPval-AA v2.1 at 1844 and AA-Briefcase at 1811 both clear the ~1750 frontier reference for real-world work, OSWorld 2.1 80.1% is near-frontier computer use, and Terminal-Bench 4.0 70.6% *beats* Opus 5.5 (66.4%). No τ3/Claw-Eval row exists, which keeps it short of the mid-90s.
- **Reasoning: 88/100.** HLE 64.5% with tools is well above the 40%+ frontier bar (only 3.2 pts behind Opus 5.5), with frontier-class GDPval/AA-Briefcase knowledge-work scores; capped because the tools caveat applies and no GPQA or Intelligence Index number is published.
- **Context window: 95/100.** 1M input with a healthy 128K max output is the vendor-documented top tier (95–100); 100 is withheld for the absence of a ≥98% retrieval measurement at 512K+.
- **Multimodal: 65/100.** Text and image input with text output and strong vision reasoning (Chartography 61.6% no-tools, up from 15.6%) lands squarely in the "+image in = 60–70" band; there is no audio/video input and no non-text output.
- **Coding: 90/100.** Terminal-Bench 4.0 70.6% and CursorBench 4.0 55.5% are frontier-adjacent agentic coding results that exceed Opus 5.5 on TB4.0, but the FrontierCode regression at Max effort and the complete absence of SWE-bench-class numbers prevent the mid-90s.
- **Cost efficiency: 65/100.** $2 / $10 per 1M with $0.20 cache reads sits between the ~$1.25/$4.25 ≈ 88 anchor and the $3/$15 ≈ 60 anchor — above the middle of the paid band, materially improved per task only by being *more* token-efficient (vendor: up to 30% less per task), never by price. No free tier exists.
- **Overall Score: 85.6/100.** Mean of the five quality dims (90 + 88 + 95 + 65 + 90) / 5 = 85.6; Cost excluded per `RULES.md`. Best fit: the default paid workhorse for well-scoped agentic coding and knowledge-work automation where speed and lifecycle guarantees matter more than peak multimodal breadth.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-29
- Method: public internet research (Anthropic "Introducing Claude Sonnet 5.5" launch page dated 2026-09-28 — all benchmark values, 30%+ speed gain, up-to-30% per-task saving, $0.20 cache reads, cyber/biology safeguards, Pokémon Red claim, FrontierCode Max-effort caveat; Claude Platform models-overview docs — 1M context, 128K max output, Jun 2026 knowledge cutoff, adaptive thinking with default effort high, retirement ≥2027-09-28, `claude-sonnet-5-5` IDs across Bedrock/Vertex/Foundry; OpenCode Zen live catalogue 2026-09-29 — `claude-sonnet-5-5` paid, no free variant). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
