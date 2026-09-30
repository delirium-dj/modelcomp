# Omen Alpha — findings by Space Bunny Alpha

- Source: TokenRa / `omen-alpha` (vendor unconfirmed; widely reported as the 2.0 successor to Ox Alpha)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha
- **Short description:** A low-cost reasoning model for coding and agentic work, widely reported as the 2.0 successor to Ox Alpha — though neither Omen's vendor nor that lineage has been officially confirmed. It is positioned as a cheap, privacy-first, OpenAI-compatible route for production coding agents. Not a variant of another tracked entry, but the Ox Alpha relationship is a live, unverified claim.
- **Provider / access:** Served through the **TokenRa** route under the model ID `omen-alpha` on an **OpenAI-compatible Chat Completions** endpoint (`zen/go/v1/chat/completions`; base URL per TokenRa docs). Keys are issued from `tokenra.io`. OpenCode Data also tracks the model and attributes it to **Zhipu** on one comparison page while labelling the author "unknown" on others — the vendor attribution is unresolved.
- **Release / knowledge:** No official release date and no knowledge cutoff have been published. The first dated public evaluation is the **2026-09-04** OpenCode leaderboard snapshot. OpenCode usage data places sustained traffic from early July 2026 onward.
- **IDs:** `omen-alpha` (TokenRa). The repository `meta.json` records the Zen-facing id as `opencode/omen-alpha`. No free tier exists; this is a paid route.
- **Context window:** **Not publicly disclosed.** omenalpha.io states plainly that "model parameters, including the context window, are not yet publicly disclosed", and OpenCode Data renders the context length as *Unknown*. Nothing verified to score against.
- **Modalities:** Text in / text out. OpenCode Data lists input and output modalities as *Unknown*; no image, audio or video capability has ever been shown for this model. Reasoning is claimed by the vendor's own marketing ("low-cost reasoning model") but no reasoning benchmark exists. OpenAI-compatible Chat Completions implies tool calling and JSON mode.
- **Pricing (as of 2026-09-27):** **$0.20 input / $0.66 output / $0.04 cached-read per 1M tokens** (omenalpha.io, official rate card; a 60%-off promotional route at $0.08/$0.26 is also advertised). **0-day data retention, prompts not used for training.** Measured average cost per prompt in the dated benchmark snapshot: **$0.03**.
- **Architecture:** Proprietary and undisclosed. No parameter count, no open weights, no architecture family has been published.

> **Conflicting source claims, unresolved.** A second host and a materially different spec sheet for the same model ID circulate in the aggregator layer: **OpenCode Go** (`opencode-go/omen-alpha`, a cheaper host distinct from Zen) with a **500K context / 128K max output** window and **text + image in, text out** (modelbenchmark.io's most-agreed spec page), versus the TokenRa route documented above with **no disclosed context** and no image support shown anywhere. The model ID, the release date neighbourhood and the $0.20/$0.66/$0.04 rate card are identical across both, so these are very likely the same underlying model on two hosts — but the disagreement on context window and image input is unresolved, and it is the direct cause of the conservative Context window and Multimodal scores below. Neither claim is treated as verified here.

### Raw benchmarks found

> **Evidence caveat, stated up front:** exactly one dated public evaluation exists for this model — a single OpenCode leaderboard snapshot from 2026-09-04 covering four implementation projects on a five-point project rubric. It is a genuine agentic coding measurement, but it is **not** a standard academic suite, and no other evaluator has published a number. Every score below that is not on that snapshot is a real gap, not an oversight.

Agent / tool use:

- OpenCode leaderboard **rank #15** (OpenCode, snapshot 2026-09-04, Omen Alpha **High** configuration)
- OpenCode leaderboard overall coding score: **23.14 / 40** (OpenCode, snapshot 2026-09-04)
- Per-project implementation scores on that snapshot: CSV import (PHP) **4/5**; Offline sync (PHP) **3.5/5**; Bank feed (Dart/Flutter) **2.7/5**; Shipping quotes (Go) **3/5** (OpenCode, snapshot 2026-09-04)
- Code-quality component (expanded leaderboard view): **9.94 / 20** (OpenCode, snapshot 2026-09-04)
- Average time per prompt: **01:51**; average cost per prompt: **$0.03** (same snapshot)
- Terminal-Bench 2.1, Tau3-Banking / Tau2-Bench, GDPval-AA, Claw-Eval / ClawProBench, Toolathon, MCP-Atlas, SWE Atlas Codebase QnA: **no verified public score found**
- Artificial Analysis Intelligence Index: **not listed** for this model

Reasoning / knowledge:

- GPQA Diamond, HLE, LCR/MLCR, CritPt, Artificial Analysis Intelligence Index / BenchLM overall, Omniscience Accuracy / Hallucination Rate: **no verified public score found** in any reviewed source
- The single proxy available is the coding snapshot above; the OpenCode coding component is a weak stand-in for reasoning and is labelled provisional here.

Coding:

- OpenCode leaderboard coding score: **23.14 / 40** = 57.9% of the visible maximum (OpenCode, snapshot 2026-09-04; the four project rows and the total are transcribed from the snapshot, and the site's own methodology note says the code-quality component uses a different scale and must not be summed into the 23.14)
- SWE-bench Verified / SWE-Pro, LiveCodeBench, SciCode / AA-SciCode, Vibe Code Bench, DeepSWE / Coding Index: **no verified public score found**

Long context:

- **No long-context retrieval reported.** No MRCR, RULER or GraphWalks result exists, and the context window itself is undisclosed, so the 1M-vs-128k question cannot even be asked for this model.

Sources consulted: [Omen Alpha benchmarks (snapshot 01)](https://omenalpha.io/benchmarks.html) and [Omen Alpha official site / API docs](https://omenalpha.io/), both accessed 2026-09-27; [OpenCode Data — Omen Alpha comparison page](https://opencode.ai/data/compare/zhipu/omen-alpha/zhipu/test) and [OpenCode Data — omen-alpha usage](http://opencode.ai/data/unknown/omen-alpha), accessed 2026-09-27. The Ox Alpha comparison on the benchmarks page is explicitly marked as having no same-run source data, so no Ox Alpha figure is used here.

### Normalized scores (1–100)

- **Tool use: 62/100.** The one real measurement is an agentic one: a #15 finish on OpenCode's coding-agent leaderboard with 4/5 and 3.5/5 on two of four implementation projects. That is credible agent behaviour, but a single small four-project snapshot with no Terminal-Bench, Tau or Toolathon figure cannot support a higher score.
- **Reasoning: 45/100.** Deliberately conservative. The vendor markets a "reasoning model" and there is not one published GPQA, HLE, MMLU or Index number anywhere — the coding snapshot is the only proxy and it is labelled provisional. This is a floor, not a measurement.
- **Context window: 45/100.** The window is **undisclosed**, so no tier can be credited. The score reflects an unresolved 128K-or-larger question rather than a measured 128K; it must not be read as a verified limit.
- **Multimodal: 15/100.** Text-only in every respect that can be established. No image, audio or video input has ever been shown, and OpenCode Data lists the modalities as unknown. 15 is the text-only floor.
- **Coding: 60/100.** 23.14/40 on the OpenCode snapshot, with a 49.7% code-quality component (9.94/20) and a weak 2.7/5 on the Dart/Flutter project — solid working-agent behaviour, well short of the dedicated coding models on the same leaderboard.
- **Cost efficiency: 92/100.** $0.20/$0.66 per 1M with a $0.04 cached-read rate is genuinely frontier-cheap, and the measured $0.03 average per prompt is the lowest cost figure in this report. It loses the last points only because there is no free tier and the headline rate is above the sub-$0.10 tier.
- **Overall Score: 45.4/100.** (62 + 45 + 45 + 15 + 60) / 5 = 45.4. Best fit: budget-constrained production coding agents that need an OpenAI-compatible drop-in and a zero-retention policy, and that can live with a 128K-or-smaller unstated window. Not a fit for anything needing verified multimodal input, published reasoning quality, or a documented context limit — on this model, none of those three can be established from public evidence at all.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-27
- Method: Public web research of the vendor's own site and benchmark page, the dated OpenCode leaderboard snapshot, and OpenCode's public usage/attribution data. This is a re-research that supersedes an earlier negative finding for this folder: a dated, source-attributed OpenCode coding measurement now exists, so the model is scored rather than excluded. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `Omen_Alpha_2.md`, using the same headings.
