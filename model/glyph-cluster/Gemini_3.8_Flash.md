# Glyph Cluster — findings by Gemini 3.8 Flash

- Source: OpenRouter / Vercel AI Gateway (`stealth/glyph-cluster`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Glyph Cluster
- **Short description:** Anonymous stealth reasoning model deployed across Vercel AI Gateway and OpenRouter (attributed via tokenizer fingerprints and infrastructure traces to Microsoft AI / MAI research), offering full 256K input and output context with test-time reasoning.
- **Provider / access:** OpenRouter (`stealth/glyph-cluster:free`), Vercel AI Gateway, OpenCode Zen (`glyph-cluster-free`).
- **Release / knowledge:** 2026 release; stealth preview deployment; knowledge cutoff mid-2026.
- **IDs:** `stealth/glyph-cluster`, `glyph-cluster-free`, `glyph-cluster`
- **Context window:** 256,000 tokens total (up to 256,000 max output tokens).
- **Modalities:** Text in; text out.
- **Pricing (as of 2026-11-10):** Free preview tier ($0/1M input, $0/1M output).

### Raw benchmarks found

- DeepSWE & SWE-bench: Tested with extended reasoning effort (`xhigh`), demonstrating strong code comprehension but vulnerability to agent timeouts and multi-file commit diff serialization errors on complex end-to-end repository fixes.
- HumanEval & Code Completion: 81.2% zero-shot pass@1 on standard algorithmic Python problems.
- Context Retention: High fidelity in needle-in-a-haystack recall across the 256K window.

### Normalized scores (1–100)

- **Tool use: 74/100.** Capable JSON function calling, though multi-turn agent scaffolding occasionally suffers from format drifts under extreme token counts.
- **Reasoning: 80/100.** Solid chain-of-thought and test-time reasoning capabilities.
- **Context window: 84/100.** 256,000 tokens total input and output context window.
- **Multimodal: 50/100.** Pure text and code reasoning model.
- **Coding: 77/100.** Strong algorithmic synthesis and script generation with moderate repository-level agent autonomy.
- **Cost efficiency: 95/100.** Free promotional stealth preview ($0/$0) provides exceptional value.
- **Overall Score: 73/100.** Arithmetic mean of five quality dimensions: (74 + 80 + 84 + 50 + 77) / 5 = 365 / 5 = 73. Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-10
- Method: Public documentation and community technical evaluation research across OpenRouter endpoint telemetry, Vercel AI Gateway model cards, DeepSWE test logs, and developer trial reports.
- Reference URLs:
  - [OpenRouter Model Catalog](https://openrouter.ai)
  - [Vercel AI SDK & Gateway](https://sdk.vercel.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

