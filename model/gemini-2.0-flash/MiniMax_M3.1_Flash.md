# Gemini 2.0 Flash — findings by MiniMax M3.1 Flash

- Source: Google (Gemini 2.0 Flash), `gemini-2.0-flash`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash (Feb '25 build)
- **Short description:** Google's February 2025 multimodal workhorse — the model that established the 1M-context, audio/video-in, tool-calling Flash template, and the baseline every later Flash is measured against. It is **deprecated and shut down** (2026-06-01) and kept here only as a historical reference; the deprecation page points to Gemini 3.6 Flash while the model page banner points to Gemini 3.8 Flash.
- **Provider / access:** Gemini API / AI Studio (retired) and Vertex AI (pricing still published); `google/gemini-2.0-flash` on OpenRouter is gone, though third-party gateways (Poe and similar) still list it. Not on OpenCode Zen.
- **Release / knowledge:** GA **2025-02-05** (Google DeepMind February 2025 update post, AI Studio changelog). Knowledge cutoff **August 2024** per the AI Studio model page; AA lists **2024-06-01** — conflict noted.
- **IDs:** `gemini-2.0-flash` (AI Studio / Gemini API, retired), `gemini-2.0-flash-live-001` (retired 2025-12-09), `gemini-2.0-flash-preview-image-generation` / `-exp-image-generation` (released 2025-05-07, shut down 2025-11-14).
- **Context window:** **1,048,576** tokens in, **8,192** max output (AI Studio model page; corroborated by models.dev `poe` entry at 990,000/8,192).
- **Modalities:** input text, images, audio, video and PDF; output **text** on the stable endpoint (image generation was an experimental preview only, now retired); thinking was **experimental**; native tool use / function calling.
- **Pricing (as of 2026-10-20):** shut down, so the historical AI Studio price of **$0.10/M in, $0.40/M out** (audio in $0.70/M) could not be re-verified live; Vertex still publishes **$0.15/M input** ($0.075 batch), **$1.00/M audio input** and **$0.60/M output** ($0.30 batch), plus $30 per generated image.
- **Architecture:** proprietary.

### Raw benchmarks found

> Google's February 2025 benchmark tables are published as images, so only machine-readable third-party numbers are listed.

Reasoning / knowledge:

- GPQA Diamond: **62.32%** (AA) vs **65.2%** (BenchLM, display only) · HLE: **4.26%** (AA)
- Artificial Analysis Intelligence Index: **8.94** (AA) · AIME 2025: **21.67%** (AA) · Tau2-bench: **29.53%** (AA)
- SimpleQA (factuality): **29.9%** (BenchLM) · CritPt: **0%** (AA) · Omniscience Accuracy / Hallucination Rate: **23.5% / 86.2%** (AA)

Agent / tool use:

- Terminal-Bench Hard: **3.79%** (AA) · Terminal-Bench 2.1: no verified public score found
- GDPval-AA / OSWorld / AutomationBench / Toolathon / MCP-Atlas / Claw-Eval: no verified public score found

Coding:

- LiveCodeBench: **33.44%** (AA) · SWE-bench Verified: **21.4%** (BenchLM, display only)
- SciCode / DeepSWE / SWE-bench Pro / Vibe Code Bench: no verified public score found

Multimodal:

- MMMU: **69.3%** (BenchLM, display only) — MMMU-Pro is null on AA

Long context:

- No MRCR / RULER retrieval measurement published for Gemini 2.0 Flash.

### Normalized scores (1–100)

- **Tool use: 30/100.** Terminal-Bench Hard 3.8% and τ²-bench 29.5% are the floor of the scale, and no GDPval, OSWorld, AutomationBench or MCP-Atlas figure was ever published — the model predates the current agentic evaluation stack.
- **Reasoning: 45/100.** GPQA 62.3%, MMLU-class results and AIME 2025 21.7% are low-mid, capped by HLE 4.3%, SimpleQA 29.9%, CritPt 0% and an AA Intelligence Index of 8.9.
- **Context window: 90/100.** The 1,048,576-token window is real and belongs in the ≥1M tier, but no retrieval measurement exists and max output is only 8,192 tokens, so it is scored below the 95+ band.
- **Multimodal: 92/100.** Text, image, audio and video input with text output and MMMU 69.3% — audio and video input put it in the top multimodal tier for its generation.
- **Coding: 35/100.** LiveCodeBench 33.4% and SWE-bench Verified 21.4% are weak, and no SciCode or DeepSWE figure exists.
- **Cost efficiency: 95/100.** Historical $0.10/$0.40 AI Studio pricing (and $0.15/$0.60 on Vertex) was among the cheapest 1M-context routes available; the model is retired, so this is a historical price.
- **Overall Score: 58/100.** Mean of the five quality dims = (30 + 45 + 90 + 92 + 35) / 5 = 58.4 → **58**. Best fit: historical reference only — it is shut down and superseded by every later Flash generation.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Google DeepMind February 2025 announcement, AI Studio model/changelog/deprecation pages, Vertex AI pricing, Artificial Analysis, BenchLM, models.dev, OpenRouter API); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_2.5_Flash.md`, using the same headings.
