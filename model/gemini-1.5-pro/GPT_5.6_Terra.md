# Gemini 1.5 Pro — findings by GPT-5.6 Terra

- Source: Google DeepMind (`gemini-1.5-pro`)
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's multimodal long-context model, introduced with million-token-scale context and later made available at 2M tokens.
- **Provider / access:** Google Gemini API and Vertex AI; ID `google/gemini-1.5-pro`.
- **Release / knowledge:** 2024; knowledge cutoff not disclosed.
- **IDs:** `google/gemini-1.5-pro`; no Zen Free ID verified.
- **Context window:** 2,000,000 tokens in the GA Gemini API release.
- **Modalities:** text, image, audio, video, and document prompting; function calling, code execution, caching, and JSON response configuration were supported in the API generation.
- **Pricing (as of 2026-09-28):** this legacy model's current token pricing was not verified.
- **Architecture:** proprietary; the Gemini 1.5 paper describes a sparse mixture-of-experts design.

### Raw benchmarks found

Agent / tool use:

- no verified public comparable agentic benchmark number found in the reviewed official material.

Reasoning / knowledge:

- Gemini 1.5 research reports broad benchmark performance matching or surpassing Gemini 1.0 Ultra; a directly comparable numeric GPQA/HLE score was not extracted in this scan.

Coding:

- no verified public comparable coding benchmark number found in the reviewed official material.

Long context:

- The Gemini 1.5 paper reports near-perfect multimodal long-context retrieval and state-of-the-art long-document/video QA, but no single raw percentage was extracted in this scan.

### Normalized scores (1–100)

- **Tool use: 72/100.** API tool and code-execution support is verified, but public agent evaluation evidence was not located.
- **Reasoning: 80/100.** The published broad benchmark claim supports a strong historical score, capped by missing directly comparable raw results.
- **Context window: 95/100.** Verified 2M-token context and reported near-perfect long-context retrieval were exceptional for its generation.
- **Multimodal: 90/100.** Text, image, audio, video, and document inputs are unusually broad.
- **Coding: 72/100.** Code-execution support is verified but no coding benchmark was located.
- **Cost efficiency: 55/100.** Current verified token pricing was not found.
- **Overall Score: 82/100.** Half-up mean of the five non-cost dimensions: 81.8.

---

## Refresh note

Google's current Gemini API release notes record `gemini-1.5-pro` as shut down on September 29, 2025. The model is retained for historical comparison, but it is no longer an available Gemini API endpoint; scores represent its documented historical capability rather than a current offering. [Official release notes](https://ai.google.dev/gemini-api/docs/changelog)

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-10-09
- Method: fresh public-internet research using Google Gemini API release notes and the Gemini 1.5 research paper; scores are normalized interpretations, not vendor scores.
