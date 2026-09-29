# Google Gemini 2.5 Flash Lite (provider-qualified route) — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind (`gemini-2.5-flash-lite`; provider-qualified `opencode/google-gemini-2.5-flash-lite`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Folder note (flagging, not acting).** This folder is `google-gemini-2.5-flash-lite`, the
> provider-qualified form of the same underlying model as the sibling `gemini-2.5-flash-lite/`
> folder, where my full research report already lives. I have **not** moved, merged or
> deleted anything — folders are permanent under `RULES.md` — and I have deliberately **not**
> re-researched the model, because a second independent pass would double-count the same
> rater against the same model. The dimension scores below are therefore **identical to my
> `gemini-2.5-flash-lite/DeepSeek_4.1_Flash.md` report** (Overall 63.6), so the two folders
> cannot disagree. A prior commit (`962c54e`, "Merge google-gemini-2.5-flash-lite into
> gemini-2.5-flash-lite, newer-wins") already resolved this collision for another rater by
> dropping the duplicate copy; the orchestrator should apply the same rule here rather than
> have two DeepSeek 4.1 Flash reports carry the same model.
>
> **`meta.json` is also wrong in this folder** and is curated infrastructure I must not edit:
> it records `contextWindow: "128K total"`, `modalities: "Text in/out"` and
> `id: opencode/google-gemini-2.5-flash-lite`. The real model is **1,048,576 tokens** with
> text, image, video, audio and PDF input, and **no `google-gemini-2.5-flash-lite` ID exists
> in the live OpenCode Zen catalogue** (checked 2026-09-29 — Zen lists `gemini-3.5-flash-lite`,
> `gemini-3.6-flash`, `gemini-3.7-flash`, `gemini-3.8-flash`, `gemini-3.1-pro` and
> `gemini-3-flash`, but no 2.5 Flash Lite). Flagged for orchestrator curation.

## Model card

- **Name:** Gemini 2.5 Flash Lite
- **Short description:** Google's smallest and cheapest 2.5-family model, built for at-scale, high-frequency, low-complexity work — classification, extraction and summarization — where latency and unit cost dominate. It is genuinely multimodal at a 1M context, but sits near the bottom of the field on reasoning, agentic work and coding.
- **Provider / access:** Google Gemini API; Vertex; OpenCode Zen historically; aggregator routes. The folder's own `opencode/` id is not in the live Zen catalogue.
- **Release / knowledge:** Released 2025-07-22 (Google deprecations page). The `preview-09-2025` snapshot was shut down 2026-03-31; the **stable** model has **no announced shutdown date** — Google withdrew the previously published 2026-10-16 date.
- **Context window:** **1,048,576 tokens (1M)** with a ~65K max output.
- **Modalities:** text, image, video, audio and PDF input; text output only (no audio/image generation, no Live API).
- **Pricing (as of 2026-09-29):** **$0.10 / 1M input, $0.40 / 1M output**, 90% cached-input discount to $0.01, ~$0.07 / 1M blended. No free tier.
- **Architecture:** proprietary/undisclosed.

### Raw benchmarks found

Agent / tool use:

- Agentic readings sit at the floor of the field: **0th-percentile agentic placement** on the consolidated evaluators, with no separately published Terminal-Bench / Tau3 / GDPval-AA / OSWorld / AutomationBench row found. **No above-floor agentic benchmark found.**

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index 3.0** place this model near the bottom of the tracked field; LisanBench is **21st percentile**.
- No GPQA Diamond, HLE, AIME or CritPt figure was published — **no verified public score found** beyond the composite.

Coding:

- SWE-bench Verified **31.6%**, SciCode **19.3%** (24th pct), Aider Polyglot **26.7%**, Terminal-Bench Hard **4.5%**, Epoch Coding Index **6.0** (6th percentile).
- LiveCodeBench is contested across sources at **59.3% vs 33.7%**; even the higher figure does not lift the dimension above the mid-30s.

Long context:

- The 1M-token window is confirmed by Google's own documentation and sits in the ≥1M tier (95–100); **no MRCR / RULER / GraphWalks retrieval measurement exists**, so the methodology's "100 if ≥98% retrieval at 512K+" condition cannot be satisfied.

Serving / cost behaviour:

- Output speed ~**267.5 tokens/s** with **0.31 s TTFT** on the current reading (previous pass: 283.6 t/s / 0.30 s) — among the fastest and cheapest routes tracked.

### Normalized scores (1–100)

> **Identical to my `gemini-2.5-flash-lite/DeepSeek_4.1_Flash.md` report** (see the folder note above). If the orchestrator merges these folders, this file is the redundant copy.

- **Tool use: 38/100.** Floor-adjacent agentic placement with no above-floor agentic benchmark published; the model is a router/extractor, not an agent.
- **Reasoning: 52/100.** AA Intelligence Index 3.0 with LisanBench at the 21st percentile is a weak composite reading for a 2.5-family model; no GPQA/HLE number exists to argue upward.
- **Context window: 95/100.** 1,048,576 tokens confirmed by Google's own docs puts it in the top tier (95–100); docked below 100 because no retrieval-at-length measurement exists and capacity on a 3.0-index model is not competence.
- **Multimodal: 88/100.** Text, image, video, audio and PDF in with text out is the "+audio in" tier (90–100), held just below it because output is text-only and no video/audio-input benchmark row was published.
- **Coding: 45/100.** SWE-bench Verified 31.6%, SciCode 19.3% and a 6th-percentile Epoch Coding Index are floor-adjacent; the contested LiveCodeBench reading does not change the picture.
- **Cost efficiency: 98/100.** $0.10 / $0.40 per 1M with a 90% cache discount to $0.01 and ~$0.07/1M blended maps to the "~$0.10/$0.20 = 97–99" band; only a genuine $0 tier would score higher, and there is no free tier here.
- **Overall Score: 63.6/100.** Mean of the five quality dims (38 + 52 + 95 + 88 + 45) / 5 = 63.6; Cost excluded per `RULES.md`. Best fit: high-volume classification, extraction, routing and summarization at ~268 tok/s — never the model that plans or writes code.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-29
- Method: carries forward my verified research from `model/gemini-2.5-flash-lite/DeepSeek_4.1_Flash.md` (Google Gemini API model documentation and deprecations page, Artificial Analysis model page and Intelligence Index v4.3.2, BenchmarkList and Epoch AI standardized evaluations, aggregator SWE-bench/LiveCodeBench/Aider readings) plus the 2026-09-29 live OpenCode Zen catalogue check showing no `google-gemini-2.5-flash-lite` id, and the sibling folder's own peer reports for the duplicate-folder finding. **No new primary research was performed for this folder, by design, to avoid double-counting one rater against one model.** Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_2_5_FL_Recheck.md`, using the same headings.
