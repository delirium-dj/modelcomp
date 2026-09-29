# Gemini 3.1 Flash Lite — findings by Pixel Canary

- Source: Google (`google/gemini-3.1-flash-lite`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite (Google; OpenCode ID `google/gemini-3.1-flash-lite`; free tier on Google AI Studio and OpenCode Zen)
- **Short description:** Google's lightweight, ultra-low-latency tier engineered for high-frequency lightweight tasks at the lowest unit cost in the Gemini line — the predecessor of Gemini 3.5 Flash-Lite. BenchLM composite 50.03/100, rank #86 of 512, but on only **8 of 486** benchmarks (Vals-harness rows), so the composite is explicitly conservative.
- **Provider / access:** Google AI Studio / Gemini API, Vertex AI, Databricks and nano-gpt mirrors; native Gemini API plus OpenAI-compatible endpoint with function calling and structured output.
- **Release / knowledge:** 2026-05-07 (models.dev `release_date`); knowledge cutoff not published.
- **Context window:** 1,048,576 input / 65,536 max output (models.dev; `meta.json` agrees on 1M).
- **Modalities:** Text, image, audio and PDF in; text out. Reasoning: BenchLM classifies this ID as **Non-Reasoning** (thinking budgets exist on the Flash line but the measured rows are non-thinking). Tool calling and JSON mode: yes.
- **Pricing (as of 2026-09-29):** **$0.25 / 1M input, $1.50 / 1M output, $0.025 cached reads**; **$0 free tier** with rate limits on Google AI Studio and OpenCode Zen.
- **Architecture:** Proprietary; no parameter count published for Flash-Lite tiers.

### Raw benchmarks found

BenchLM (updated 2026-09-28, 8 rows only, Vals harness):

- Terminal-Bench 2.1 (Vals): **34.1%**
- LiveCodeBench (Vals): **80.1%**; SWE-bench (Vals): **62.8%**; Vibe Code Bench: **0.00%**
- GPQA Diamond (Vals): **81.1%**; MMLU-Pro (Vals): **86.2%**
- CharXiv: **73.2%**

Missing for this exact ID: SWE-bench Verified/Pro, GDPval-AA Elo, τ-bench, AutomationBench, HLE, CritPt, the AA Omniscience/hallucination pair, MRCR/AA-LCR long-context rows, MMMU/video/audio suites — i.e. almost the whole agentic and long-context evidence base.

### Normalized scores (1–100)

- **Tool use: 44/100.** The API surface is complete (function calling, JSON mode, 1M window) and Terminal-Bench 2.1 at 34.1% shows it can drive a shell in a scaffold, but no τ-bench, Toolathlon, AutomationBench or GDPval row exists, and 34.1% is bottom-half on the one agentic suite that is published.
- **Reasoning: 50/100.** GPQA Diamond 81.1% and MMLU-Pro 86.2% are respectable for the cheapest Gemini tier, yet BenchLM records it as Non-Reasoning and there is no HLE, CritPt or Omniscience measurement — no evidence it can sustain multi-step reasoning or abstain safely.
- **Context window: 72/100.** 1M input with 65K output is the headline feature and is verified in two independent catalogues; capped hard because not a single retrieval-depth row (MRCR, RULER, AA-LCR) is published for this ID.
- **Multimodal: 62/100.** Text + image + audio + PDF input is broad for the price, but the only published visual-quality row is CharXiv 73.2%, and output is text-only; video and audio quality are unmeasured.
- **Coding: 58/100.** LiveCodeBench 80.1% and SWE-bench (Vals) 62.8% support snippet generation and small patches, but Vibe Code Bench 0.00% is a outright failure on app-building from a prompt, which is what most coding agents actually ask of it.
- **Cost efficiency: 97/100.** A genuine $0 tier on two entry points plus $0.25/$1.50 with $0.025 cache reads — the cheapest credible 1M-context multimodal endpoint in this repo.
- **Overall Score: 57.2/100.** (44 + 50 + 72 + 62 + 58) / 5 = 286 / 5 = 57.2 — a price/latency tier for extraction, classification and cheap preprocessing; evidence is too thin to trust it for autonomous work.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (BenchLM profile `gemini-3-1-flash-lite` refreshed 2026-09-28 covering only 8 benchmarks, models.dev provider/pricing index, OpenCode/Google AI Studio listings); scores are normalized 1–100 interpretations built on thin public evidence, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
