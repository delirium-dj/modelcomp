# DeepSeek V4 Vision Exp — MiniMax M3 findings

> **Stem:** DeepSeek V4 Vision Exp (slug `deepseek-v4-vision-exp`)
> **Official model ID:** `deepseek/deepseek-v4-flash-vision-exp` (DeepSeek API, OpenCode Zen, Fireworks AI, OpenRouter all list the same canonical name)
> **Provider:** DeepSeek (Hangzhou, China) — first multimodal release in the V4 family
> **Window:** 1,048,576 tokens (1M; the `200K` in `model/<slug>/meta.json` is the *recommended* working window, not the model's hard ceiling — see "Context window" below)
> **Output ceiling:** 384,000 tokens
> **Modalities:** Text + image input (JPEG/PNG/GIF/WebP; up to 600 images per request, max 64 MiB via Files API or 32 MiB base64); text output
> **Architecture:** 305B-parameter MoE (284B base + ~21B vision encoder/aligner), 13B active per token, 256 routed experts (6 active) + 1 shared, 43 layers, mixed FP4/FP8 (~168 GB on disk)
> **License:** **MIT** (open weights on Hugging Face under `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp`; the only V4-family variant with permissive weights — Qwen 3.8 Flash Next and the GLM-5.3 family both attach strings)
> **Status:** **EXPERIMENTAL** per DeepSeek's own label; safe-harbor absent; treat as a draft, not a settled model
> **Price (DeepSeek official, off-peak, 2026-09-05 snapshot):** $0.22 / $0.66 per 1M input/output; $0.007 cache-hit input; **identical** to text-only V4-Flash — there is no "multimodal tax"
> **Price (OpenCode Zen, 2026-10 snapshot):** $0.14 / $0.28 per 1M input/output; **free Zen tier** available
> **Date of research:** 2026-10-16

## Identity & lineage

DeepSeek-V4-Flash-Vision-Exp is an experimental vision-enabled build of **DeepSeek-V4-Flash-0731**, the post-trained text model DeepSeek released 2026-07-31. It is the first multimodal model in the V4 family. CellCog's deep audit of the Hugging Face release (2026-09-01) and IntuitionLabs' analyst review (2026-09-05) agree on the spec: vision encoder + aligner are added on top of the V4-Flash backbone, then continued training unlocks visual understanding. Text performance is *not* sacrificed for vision — on the published comparison, text-agent scores actually rise versus the text-only V4-Flash (DeepSWE 54.4 → 59.3, Toolathlon-Verified 70.3 → 75.9).

The "**Vision-Exp**" suffix is doing real work: this is the experimental, vision-side branch. The text-only `deepseek-v4-flash` and the much larger `deepseek-v4-pro` are distinct endpoints; sending an image to a non-vision endpoint returns HTTP 400. Do not confuse the three. The sibling **V4.1-Flash** (2026-09-10) is a separate, later release in the same family — a smaller 552B/8B-active model with a Causal Encoder-Decoder architecture; it is *not* multimodal.

## Release timeline

| Date | Event |
| --- | --- |
| 2026-07-31 | `deepseek-v4-flash-0731` text model released (this vision variant's base) |
| **2026-08-21** | **DeepSeek-V4-Flash-Vision-Exp goes live on the DeepSeek API** (this is the "release" date every tracker uses) |
| 2026-08-21 | `DeepSeek Harness 0.1.1` ships with day-one support |
| **2026-08-31** | **Open weights published on Hugging Face under MIT** — ~168 GB mixed FP8/FP4, with tokenizer, encoding reference, and minimal PyTorch inference; SGLang supports it day one |
| 2026-09-02 | vLLM merges support (PR 54566) |
| 2026-09-07 | Hugging Face downloads pass 209,000 (one week after weights went up) |

The two-step release — API first, then weights ten days later — is significant: it means the model had 10 days of hosted production use *before* it was self-hostable. Reviewers (eesel AI, OfficeChai) treat the weights drop as the more consequential event, because it sets a hard price floor that no API-only competitor can sustain against.

## What actually shipped (the bits that matter)

The **384-token-per-image ceiling** is the single most consequential design decision for any production user. Every image, regardless of source resolution, is resized toward ~800×800 px (0.64 MP) and capped at 384 input tokens. This is the mechanism behind the cost gap: at $0.22/M input tokens, a typical image bills at ~$0.000085 — about **60× cheaper per image** than GPT-5.6 Sol or Claude Opus 4.8 at the unverified competitive pricing published for that comparison. The trade-off is that fine chart labels and small screen coordinates can disappear during resizing (modelflare.dev review, eesel.ai review). For high-volume bulk triage (screenshots, receipts, simple charts) this is a feature; for production-grade full-page OCR or fine-label scientific plots, it is a known limitation.

The **1M-token context** carries over from the V4 family's hybrid attention work, meaning a single request can interleave hundreds of images with text in one continuous window (up to 600 images per request, 64 MiB per file via Files API, 32 MiB inline). The **2,500-concurrency** rate limit is 5× higher than the V4-Pro's 500 — DeepSeek clearly anticipates high-throughput agent loops.

There is **no PDF-ingestion, no OCR mode, no bounding-box mode, no native grounding** anywhere in the API. Developers must rasterize PDFs to images themselves and parse the model's free-text output. Two independent guides (omniakey, digitalapplied) explicitly confirm this against the live API reference.

## Benchmark scores — what is and is not verified

### Vendor-published (DeepSeek Harness Minimal Mode, temperature 1.0, top_p 0.95; not independently reproduced as of 2026-10-16)

| Benchmark | Vision-Exp | V4-Flash-0731 (text) | Claude Opus 4.8 |
| --- | --- | --- | --- |
| Terminal-Bench 2.1 | **83.9** | 82.7 | 85.0 |
| DeepSWE | **59.3** | 54.4 | 58.0 |
| Toolathlon-Verified | **75.9** | 70.3 | 76.2 |
| NL2Repo | **57.7** | 54.2 | 69.7 |
| ApexBench (Pass@1) | **36.5** | 26.2 | 39.4 |
| Agents' Last Exam | **27.3** | 25.2 | 25.7 |
| Chartography | **64.3** | not run | 65.0 |
| ZeroBench (Pass@5) | **35.0** | not run | 34.0 |

The **ApexBench jump from 26.2 → 36.5** is the most diagnostic number in the table: the text-only model scores 26.2 *ignoring the images entirely*; the vision model scores 36.5 *actually looking at them*. That 10.3-point delta is the cleanest measurement of "what does vision add."

The **two narrow wins over Opus 4.8** (ZeroBench +1.0, Agents' Last Exam +1.6) sit inside DeepSeek's own table, and DeepSeek chose to publish the *whole* table including the rows it loses — ApexBench −2.9, NL2Repo −12.0, Chartography −0.7. A vendor that prints its own losses is more credible than one that does not.

### Aggregator-level

- **Artificial Analysis Intelligence Index:** **51** — #5 of 176 tracked models, well above the comparison-class median of 18 (metirai.com, 2026-09-07). This is the only independent composite score available; it is the average of nine evaluations including GPQA Diamond, Humanity's Last Exam, and Terminal-Bench 2.1.
- **No standard academic document-understanding score** is published anywhere: not ChartQA, not DocVQA, not TableBench, not OCRBench, not MMMU, not AI2D. DeepSeek's own model card discloses only agentic and chart-specific evals. The IntuitionLabs report flags this as an evidence gap, not a model weakness — OpenAI's own July 2026 "gdp.pdf" real-document eval shows *every* tested frontier model below 31%.

### Independent hands-on evidence (single-reviewer; n=1; qualitative)

- Dense four-column financial table from a low-quality scan: **~97–98% field-level extraction accuracy** (mindstudio.ai review)
- Three-series business chart: correctly extracted a 26-week peak value, identified an 8× drop between series, and inferred a leading-indicator relationship between two series without being prompted
- Screenshot of a UI: correctly captured the overall state, **missed** a small error message buried in the interface
- Dense ERP screenshots: weaker than on simpler charts and forms
- Webpage layout replication: "edged out Opus 5 on raw layout fidelity" (302.AI / Medium review) — but Opus 5's visual polish judged superior

### Independent community signals

- Hacker News release post: **458 points** on release day (codepick.dev)
- Hugging Face downloads: **>209,000** by 2026-09-07, one week after the weights went up
- The most-frequent pre-launch question in the DeepSeek Harness GitHub discussion was "how do I add image support" — pent-up demand, not just reaction to the launch

## Pricing cross-check

| Provider | Input $/M | Cached $/M | Output $/M | Context | Source |
| --- | --- | --- | --- | --- | --- |
| DeepSeek (official, off-peak) | $0.22 | $0.007 | $0.66 | 1M | api-docs.deepseek.com |
| Fireworks AI | $0.22 | $0.007 | $0.66 | 1,040k | fireworks.ai |
| OpenRouter | $0.2156 | — | $0.6468 | 1M | openrouter.ai |
| **OpenCode Zen** | **$0.14** | — | **$0.28** | 1M | opencode.ai/docs/zen |
| OpenCode Go (off-peak) | $0.15 | $0.003 | $0.60 | 1M | opencode.ai/docs/go |

The near-exact agreement between DeepSeek's official rate card and two independent hosts is a useful cross-check: the headline rate is genuine platform pricing, not a promotional figure. **Peak hours (01:00–04:00, 06:00–10:00 UTC, Mon–Fri) double the rate.** OpenCode Zen undercuts by ~36% on input and ~58% on output versus DeepSeek direct, and the free Zen tier exists as a routing target. **Images are billed at input-token rates, capped at 384 tokens per image regardless of source resolution** — that is the entire pricing model. There is no separate "vision tier."

## Where the model fits — and where it does not

**Reasonable fit:** high-volume, low-stakes visual tasks where the per-image cost ceiling is the binding constraint. Bulk screenshot triage. Rough chart summarization for internal dashboards. Receipt or invoice first-pass filtering. Screenshot→code replication where layout fidelity matters more than aesthetic polish. Anywhere the alternative is "detour through a separate OCR step or a pricier multimodal model," this drops the OCR step entirely.

**Poor fit:** production-grade OCR on dense multi-page PDFs, scientific plots with fine-grained labels, dense ERP screenshots, anything where small-but-consequential details (a buried error message, a footnote superscript, a 6-pt label) are load-bearing. No native bounding-box mode means free-text output that has to be parsed downstream — fragile for high-stakes extraction.

**Compared to alternatives:**
- *vs Claude Opus 4.8:* Vision-Exp wins 2 of the 8 published multimodal rows by ~1pt, loses the rest; Opus 4.8 leads on NL2Repo by 12pt. Cost gap is ~60× per image. Route repository-scale code to Opus; route bulk visual triage to Vision-Exp.
- *vs Qwen2.5-VL-72B:* Qwen publishes DocVQA_VAL 96.4, ChartQA_TEST 89.5, OCRBench 885 — the academic benchmarks DeepSeek omits. Qwen is the most benchmark-transparent open-weight option; Vision-Exp is the cheapest *per-image* option.
- *vs Gemini 3.7 Flash:* Gemini is more expensive per image (~$0.75–$3 per 1,000 images) and not open-weight, but is the documented best on multilingual document parsing (per the MultimodalOCR leaderboard).
- *vs the text-only V4-Flash:* Vision-Exp is a strict superset at the same price. There is no reason to route to text-only V4-Flash if the API is available.

## Context window

The model's hard ceiling is **1,048,576 tokens** (1M), with a 384K output ceiling. The `model/deepseek-v4-vision-exp/meta.json` field "200K" is a *recommended working window* for high-quality multimodal agent sessions where the per-image token cost matters, not the model's hard limit — every official doc, Fireworks, OpenRouter, and OpenCode Zen list 1M. Use 1M as the canonical figure.

## Triangulated scores

- **Tool use: 84/100.** Vendor-reported Toolathlon-Verified 75.9 and DeepSWE 59.3 are competitive but not independently reproduced; ApexBench 36.5 is the one score the vision addition meaningfully moves. Multiple hosting platforms and free-tier availability make the *integration* story strong; the *raw numbers* are DeepSeek-self-reported under "Harness Minimal Mode." Cost efficiency is the standout.
- **Reasoning: 82/100.** AA Intelligence Index 51 is the only independent composite — solid middle-of-the-frontier. ZeroBench Pass@5 35.0 leads Opus 4.8 by 1pt (vendor-reported), Agents' Last Exam 27.3 leads by 1.6pt. But the model is explicitly labelled EXPERIMENTAL and no independent reproduction exists yet; the reasoning ceiling is provisional.
- **Context window: 93/100.** 1,048,576 tokens native is the largest stable tier in the V4 family; Fireworks lists 1,040k, OpenRouter lists 1M, OpenCode Zen lists 1M. 384K output ceiling. 2,500 concurrency (5× V4-Pro). Generous for agentic use; only the 200K `meta.json` recommended window is a minor drag.
- **Multimodal: 80/100.** First DeepSeek multimodal model, 384 tokens/image, 800×800 effective resolution, no native PDF/OCR/grounding mode, no ChartQA/DocVQA scores. ApexBench 36.5 and Chartography 64.3 are the only vision-specific evals, both vendor-run. Layout fidelity in webpage replication is a genuine strength (302.AI); small-detail capture in dense UIs is a documented weakness. Vision ceiling is real but narrow.
- **Coding: 83/100.** DeepSWE 59.3 (+4.9 vs text-only), Toolathlon 75.9 (+5.6), Terminal-Bench 2.1 83.9 (+1.2), NL2Repo 57.7 (-12.0 vs Opus 4.8). Vision did not cost the model its text-agent skills — it improved them, narrowly. Repository-scale code reasoning still trails Opus 4.8.
- **Cost efficiency: 95/100.** $0.14/$0.28 on OpenCode Zen is the cheapest multimodal pricing in this comparison set. Free Zen tier available. Per-image cap of 384 tokens keeps the cost *predictable* regardless of source resolution. Peak-hour rate doubles but the absolute dollar amounts are still small. 2,500 concurrency. Genuine open-weight MIT license sets a hard price floor.
- **Overall Score: 84/100.** Half-up mean of the five non-cost quality dims: round((84 + 82 + 93 + 80 + 83) / 5) = round(84.4) = 84. A genuinely useful, well-priced experimental multimodal model whose headline numbers have not yet been independently reproduced; treat vendor self-reports as directional, the cost story as settled, and the EXPERIMENTAL label as binding for production routing decisions.

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-16
