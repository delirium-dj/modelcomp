# GPT-6 Astra — findings by Qwen 3.8 Max

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship GPT-6 model for demanding end-to-end work — its most intelligent and aligned model at release, with state-of-the-art computer use, coding and cybersecurity capability. The premium tier above GPT-6 Sol (paid plans) and GPT-6 Luna (Free/Go).
- **Provider / access:** OpenAI API (`gpt-6-astra`, plus a `:batch` route), ChatGPT. Responses API. OpenRouter `openai/gpt-6-astra`.
- **Release / knowledge:** Shipped 2026-09-03; knowledge cutoff not published.
- **IDs:** `openai/gpt-6-astra` (no free Zen ID — Astra is the paid flagship; Luna is the free GPT-6 tier).
- **Context window:** 1,050,000 tokens (largest of the frontier trio); a surcharge applies above 272,000 tokens (input rebilled at ~2x past that point, per CodeToDeploy). Max output 128,000 tokens (per Anthropic/NeuralTrust comparison tables).
- **Modalities:** text + image + audio in, text out; reasoning yes; tool calls yes; state-of-the-art computer use (OpenAI).
- **Pricing (as of 2026-10-20):** $10 / 1M input, $50 / 1M output (VentureBeat / OpenRouter); batch route $5 / $25. Above-272K-token surcharge effectively doubles long-context input cost.
- **Architecture:** proprietary (closed weights).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **58.2%** (OpenAI-reported, per Anthropic's Opus 5.5 table at high effort; behind Opus 5.5 66.4%)
- AutomationBench (Zapier): **41.4%** (leads Opus 5.5 40.0% in Anthropic's table)
- Terminal-Bench-Science 0.1: **64.6%** (leads — Opus 5.5 58.7%, Fable 5.1 52.6%)
- OSWorld 2.1 (computer use): OpenAI claims state-of-the-art; no verified public % found in accessible sources
- GDPval-AA v2.1: **1542 Elo** (behind Opus 5.5 1846, Fable 5.1 1735)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **52.7** (≈ Argon 52.6; behind Opus 5.5 57.6)
- Humanity's Last Exam: **57.2%** with tools (OpenAI-reported, Anthropic table); AA independent **54.7%**
- Vals Index: **63.1%** (behind Argon 68.9%, Opus 5.5 67.0%)
- Hallucination rate **51%** / factual accuracy **63%** (The Decoder — high accuracy but the highest hallucination rate of the trio)
- GPQA Diamond: no verified public score found

Coding:

- FrontierSWE v2: **65.5%** (leads — Opus 5.5 62.3%, Argon 55.0%)
- DeepSWE v1.1: **74.1%** (behind Argon 77.9%, ≈ Opus 5.5 74.2%)
- FrontierCode v1.1 (Main): **53.3%** (top score in Anthropic's table before Opus 5.5's default-effort 54.6%)
- CWE-bench v1 (patching): **68.0%** (ties Argon)
- SWE-bench Verified / LiveCodeBench: no verified public score found in accessible sources

Long context:

- 1.05M-token window; GraphWalks (256K–1M): **71.8%** (behind Argon 84.2%, ahead of Opus 5.5 66.8% — per NeuralTrust/Google table).

> Provenance: OpenAI's own page was inaccessible (403); figures are cross-referenced from Anthropic's Opus 5.5 launch table, NeuralTrust's Argon analysis (compiling Google/DataCamp/Artificial Analysis/Vals/The Decoder) and OpenRouter/CodeToDeploy. Vendor- vs independent-run rows are labelled; not silently merged.

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench-Science 64.6% (leads), AutomationBench 41.4% (leads) and claimed SOTA computer use; capped by Terminal-Bench 4.0 58.2% trailing Opus 5.5's 66.4% and no verified OSWorld percentage.
- **Reasoning: 89/100.** HLE 57.2% with tools and AA Index 52.7 are solid, factual accuracy is the trio's best (63%), but a 51% hallucination rate and Vals/GDPval behind rivals hold it down.
- **Context window: 96/100.** Largest window at 1.05M tokens; discounted for the >272K-token surcharge that doubles effective long-context input cost and GraphWalks 71.8% behind Argon.
- **Multimodal: 90/100.** Text/image/audio input with state-of-the-art computer use; capped by the absence of a verified vision benchmark (MMMU-Pro / Chartography) in accessible sources.
- **Coding: 93/100.** FrontierSWE v2 65.5% (best), DeepSWE 74.1%, FrontierCode 53.3% and CWE-bench 68.0% — frontier coding across the board; held just below the top by vendor-run provenance.
- **Cost efficiency: 55/100.** $10/$50 is the most expensive of the frontier trio (2.5x Opus 5.5 input, 2.5x output) plus a long-context surcharge; batch mode ($5/$25) helps but it remains a premium priced model.
- **Overall Score: 92/100.** Mean of Tool 92 + Reasoning 89 + Context 96 + Multimodal 90 + Coding 93 = 92.0. Best fit: demanding end-to-end coding, computer-use and cybersecurity agents where raw capability matters more than price; cost-sensitive pipelines favor Opus 5.5 or Argon.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20
- Method: public internet research (cross-referenced from Anthropic's Opus 5.5 launch table, NeuralTrust's Gemini 4 Argon analysis, OpenRouter and CodeToDeploy; OpenAI's own page returned 403); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
