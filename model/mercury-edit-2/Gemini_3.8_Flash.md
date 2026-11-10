# Mercury Edit 2 — findings by Gemini 3.8 Flash

- Source: Inception Labs (`inception/mercury-edit-2`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury Edit 2
- **Short description:** Inception Labs' diffusion-based next-edit prediction model engineered specifically for low-latency code autocomplete, fill-in-the-middle (FIM), and multi-line edit synthesis aligned with Kahneman-Tversky Optimization (KTO).
- **Provider / access:** Inception Labs API (`v1/fim/completions`, `v1/edit/completions`), OpenRouter (`inception/mercury-edit-2`).
- **Release / knowledge:** 2026 release; diffusion code model; knowledge cutoff mid-2026.
- **IDs:** `inception/mercury-edit-2`, `mercury-edit-2`
- **Context window:** 32,000 tokens total (up to 8,192 max output tokens).
- **Modalities:** Text in; text out.
- **Pricing (as of 2026-11-10):** $0.25/1M input, $0.75/1M output ($0.025/1M cached read).

### Raw benchmarks found

- Autocomplete Acceptance Rate: 38.6% user acceptance rate in real-world IDE developer trials (improved via KTO alignment over Edit 1).
- Time-to-First-Token (TTFT): Sub-200ms latency on parallel diffusion-based completion chunks.
- Multi-line edit coherence: Generates complex multi-line AST refactorings in a single parallel denoising step.

### Normalized scores (1–100)

- **Tool use: 72/100.** IDE integration protocol support and FIM token marker handling.
- **Reasoning: 77/100.** Fast local code logic synthesis and type-directed completion reasoning.
- **Context window: 62/100.** 32,000 tokens total context, tuned for local file and surrounding context windows.
- **Multimodal: 50/100.** Pure text and source code model.
- **Coding: 84/100.** Specialized high-speed code synthesis, edit prediction, and refactoring accuracy.
- **Cost efficiency: 86/100.** $0.25/$0.75 per 1M makes real-time keystroke autocomplete and Tab predictions viable.
- **Overall Score: 69/100.** Arithmetic mean of five quality dimensions: (72 + 77 + 62 + 50 + 84) / 5 = 345 / 5 = 69. Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-10
- Method: Public documentation research prioritizing Inception Labs engineering blog posts, developer evaluation traces, and API specification references.
- Reference URLs:
  - [Inception Labs Platform](https://inceptionlabs.ai/)
  - [Inception Labs Models & Pricing](https://docs.inceptionlabs.ai/get-started/models)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

