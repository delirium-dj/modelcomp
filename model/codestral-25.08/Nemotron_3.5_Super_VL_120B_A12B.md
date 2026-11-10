# Codestral 25.08 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Mistral AI / Codestral 25.08
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral 25.08
- **Short description:** Mistral AI's cutting-edge language model for code completion, released end of July 2025. Codestral specializes in low-latency, high-frequency tasks such as fill-in-the-middle (FIM) and code generation. Part of the Mistral coding stack (Codestral, Codestral Embed, Devstral, Mistral Code IDE extension).
- **Provider / access:** Mistral AI route `mistralai/codestral-2508`; served via Mistral API (console.mistral.ai) and OpenRouter. Premier (commercial) model. Deployable across cloud, VPC, or on-prem.
- **Release / knowledge:** Released July 30, 2025; knowledge cutoff not disclosed.
- **IDs:** `mistralai/codestral-2508` (OpenRouter / Mistral API). Codestral family version v25.08.
- **Context window:** 128,000 tokens. Verified via Mistral Docs model page.
- **Modalities:** Text in; text out. Code-focused (FIM, code generation, chat). Function calling and structured outputs supported. No vision/audio.
- **Pricing (as of 2026-11-11):** $0.30 per 1M input tokens, $0.90 per 1M output tokens (Mistral via OpenRouter); $0.33/$0.99 in EU. Paid Premier model.
- **Architecture:** Proprietary (Premier, not open weights); code-specialized LLM; optimized for latency-sensitive fill-in-the-middle completion and multi-line code editing.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

- Terminal-Bench: no verified public score found
- Tau3 / Tau2: no verified public score found
- Claw-Eval: no verified public score found
- GDPval / OSWorld / Automation: no verified public score found
- Reasoning (GPQA / HLE / MRCR / LCR / CritPt / Index): no verified public score found. Mistral's announcement cites "improved performance on academic benchmarks for short and long-context FIM completion" and instruction following +5% on IF eval v8, but publishes no GPQA/HLE/MRCR/LCR/CritPt/Intelligence Index figures.
- Coding (SWE-bench / DeepSWE / LiveCode / SciCode / SWE-Atlas): no verified public score found. Announcement cites code abilities +5% on average MultiplE, but no SWE-bench/LiveCodeBench/DeepSWE figures.
- Cost per task / speed (if available): no per-task cost or speed figures located. Announcement cites +30% accepted completions, +10% retained code, 50% fewer runaway generations in live IDE usage.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 70/100.** Function calling and structured outputs supported; code-agent workflows via Mistral Code/Devstral. Capped by absence of published Terminal-Bench / Tau3 / GDPval agentic-tool figures.
- **Reasoning: 55/100.** Code-specialized model, not a reasoning-specialized model; no published GPQA / HLE / CritPt numbers. Capped by absence of verified general-reasoning benchmarks.
- **Context window: 58/100.** Verified 128K-token context window (100K–200K tier → 50–64; closer to 200K end).
- **Multimodal: 15/100.** Text in, text out only — text-only = 10–20 per methodology; no vision/audio.
- **Coding: 82/100.** Purpose-built FIM and code-generation model; +30% accepted completions, +10% retained code, code abilities +5% MultiplE (Mistral announcement). Capped by absence of published SWE-bench / LiveCodeBench figures.
- **Cost efficiency: 90/100.** $0.30/$0.90 per 1M tokens (paid Premier; methodology ~$0.60/$2.20 → ~92, this is cheaper on output). Not free.
- **Overall Score: 56/100.** Mean of (70 + 55 + 58 + 15 + 82) / 5 = 56.0 → 56. Best-fit: enterprise code completion and FIM editing agent; strong coding but narrow scope, no public general-reasoning or multimodal evidence.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/nemotron-3.5-super-vl-120b-a12b)** — 2026-11-11
- Method: public internet research via webfetch (Mistral AI official blog, Mistral Docs models overview and Codestral page, OpenRouter API page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral AI: Announcing Codestral 25.08 and the Complete Mistral Coding Stack for Enterprise (July 30, 2025)](https://mistral.ai/news/codestral-25-08/)
  - [Mistral Docs: Models Overview — Codestral v25.08](https://docs.mistral.ai/models/)
  - [Mistral Docs: Codestral model page — codestral-2508, 128k context, $0.3/$0.9 per 1M](https://docs.mistral.ai/models/codestral-25-08/)
  - [OpenRouter: mistralai/codestral-2508 — pricing and API specs](https://openrouter.ai/mistralai/codestral-2508)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
