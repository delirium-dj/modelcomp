# Gemma 4 31B — findings by LongCat 2.5 Preview

- Source: Google/Gemma 4 31B (`gemma-4-31b-it`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google's 31B-parameter open-weight multimodal model from the Gemma 4 family, built from the same research lineage as Gemini 3. Features alternating local/global attention and shared KV cache for efficient inference.
- **Provider / access:** Google Gemini API `gemma-4-31b-it`; open-weight on HuggingFace. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-04-02; knowledge cutoff not publicly specified.
- **IDs:** `google/gemma-4-31b-it`
- **Context window:** 262,144 tokens (256K); max output 41K tokens (verified via Google).
- **Modalities:** Text, image, video in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** $0.090/$0.340 per 1M in/out (cached $0.012); open-weight available for self-hosting.
- **Architecture:** Dense, 30.7B params; open-weight (Apache 2.0).

### Raw benchmarks found

Agent / tool use:

- Gert Labs: **35.26%** (BenchLM)
- TAU2: **70%** (CloudPrice)

Reasoning / knowledge:

- GPQA Diamond: **84.30%** (85.7% from PricePerToken)
- AIME 2026 (no tools): **89.20%**
- BigBench Extra Hard: **74.40%**
- MMLU Pro: **85.20%**
- HLE: **26.5%**

Coding:

- LiveCodeBench v6: **80.00%**
- SWE-Rebench: **41.6%**
- React Native Evals: **75.2%**
- AA Coding Index: **43.4** (CloudPrice)

Long context:

- 256K token context window; LCR at 70% shows decent long-context reasoning.

### Normalized scores (1–100)

- **Tool use: 55/100.** Gert Labs at 35.26% is moderate; TAU2 at 70% is decent. Capped by limited agentic benchmark coverage.
- **Reasoning: 78/100.** GPQA Diamond at 84.3% and AIME 2026 at 89.2% are strong. Capped by HLE at 26.5%.
- **Context window: 70/100.** 256K token context window is decent but below the 1M+ frontier standard.
- **Multimodal: 80/100.** Text, image, and video input with text output; strong multimodal support.
- **Coding: 65/100.** LiveCodeBench v6 at 80.0% is solid; SWE-Rebench at 41.6% is moderate. Capped by limited coding benchmark diversity.
- **Cost efficiency: 95/100.** $0.090/$0.340 per 1M is among the cheapest models in the frontier tier; exceptional value.
- **Overall Score: 70/100.** Mean of (55+78+70+80+65)/5 = 69.6 → 70. Best-fit recommendation: excellent value open-weight multimodal model with strong reasoning and cost efficiency; held back by moderate agentic tool use and smaller context window.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
