# Omen Alpha — findings by MiniMax M3.1 Flash

- Source: OpenCode Go (stealth, vendor unconfirmed) — `omen-alpha`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha
- **Short description:** An anonymous stealth reasoning model served on OpenCode Go since early September 2026 at $0.20/$0.66 per 1M with zero-day retention — no vendor, no model card, no public benchmark suite. The strongest public evidence for its origin points to **Z.ai / Zhipu** (OpenCode's own data namespace `zhipu/omen-alpha`, and the fact that the earlier "Ox Alpha" stealth slot was confirmed by Z.AI as GLM-5.3-Flash), but that attribution is **not vendor-confirmed**.
- **Provider / access:** OpenCode Go subscription endpoint (`https://opencode.ai/inference/go/v1/models` lists `omen-alpha`; it is **absent** from the Go docs model list, pricing table and privacy table, and from models.dev), plus the TokenRa OpenAI-compatible route (`model: "omen-alpha"`, $0.08/$0.26 promo). **Not on OpenCode Zen, not on OpenRouter.**
- **Release / knowledge:** first spotted **2026-09-04** (OpenCode post; secondary coverage dated the same day). Knowledge cutoff unknown.
- **IDs:** `omen-alpha` (OpenCode Go endpoint id, `owned_by: opencode`).
- **Context window:** **~500,000** tokens with 128,000 max output (third-party listing, not vendor-confirmed).
- **Modalities:** text and image input, text out; reasoning; tool use.
- **Pricing (as of 2026-10-20):** **$0.20/M in, $0.66/M out, $0.04/M cached**; TokenRa promo $0.08/$0.26. **Zero-day retention**, not used for training.
- **Architecture:** undisclosed — the vendor states that parameters and context are not published.

### Raw benchmarks found

> There is no standard benchmark for this model. The only published performance data is
> OpenCode's own coding-benchmark snapshot, captured by a third-party site on the day
> the model surfaced.

Agent / tool use:

- OpenCode coding leaderboard snapshot (2026-09-04): **23.14 / 40** overall, rank **#15**, average **$0.03/prompt**, average **01:51/prompt** — with per-task sub-scores: code quality **9.94/20**, CSV import (PHP) **4/5**, offline sync (PHP) **3.5/5**, bank feed (Dart/Flutter) **2.7/5**, shipping quotes (Go) **3/5**
- Terminal-Bench / Tau2 / Tau3 / GDPval-AA / OSWorld / AutomationBench / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA / HLE / MMLU-Pro / AIME / FrontierMath / LCR: **no verified public score found** — the model has published no general-reasoning numbers
- Artificial Analysis: **no page** (404) · BenchLM: **no page**

Coding:

- The OpenCode snapshot above is the only coding evidence; SWE-bench / SWE-bench Pro / LiveCodeBench / DeepSWE / SciCode: no verified public score found

Long context:

- No MRCR / RULER measurement published; the ~500K figure is a third-party listing.

### Normalized scores (1–100)

- **Tool use: 40/100.** The OpenCode snapshot shows real agentic behaviour (23.14/40, ~$0.03 and ~1m51s per prompt), but there is no Terminal-Bench, τ², GDPval or OSWorld number to place it on a standard scale.
- **Reasoning: 40/100.** Not one general-reasoning benchmark has ever been published for this model — the dimension is scored as unmeasured with a penalty.
- **Context window: 78/100.** A reported ~500,000-token window with 128,000 max output is the 200K–500K tier; the figure is third-party, not vendor-confirmed, and no retrieval test exists.
- **Multimodal: 65/100.** Text and image input with text output — the "+image in" band.
- **Coding: 55/100.** The OpenCode snapshot's code-quality component (9.94/20, ~50%) and the overall 23.14/40 (58%) are mid-band, with no standard coding benchmark to confirm.
- **Cost efficiency: 92/100.** $0.20/M in and $0.66/M out with a $0.04/M cache read, ~$0.03 per coding prompt on the leaderboard, and zero-day retention.
- **Overall Score: 56/100.** Mean of the five quality dims = (40 + 40 + 78 + 65 + 55) / 5 = 55.6 → **56** — best fit: cheap, private agentic coding on OpenCode Go, bought on trust in an undisclosed vendor rather than on evidence.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (OpenCode Go models endpoint and docs, models.dev, TokenRa route, operator and secondary coverage of the 2026-09-04 leaderboard snapshot, Artificial Analysis and BenchLM absence checks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Omen_Alpha_Reveal.md`, using the same headings.
