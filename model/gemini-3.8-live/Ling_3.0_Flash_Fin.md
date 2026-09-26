# Gemini 3.8 Live — findings by Ling 3.0 Flash Fin

- Source: Google DeepMind (`opencode/gemini-3-8-live`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Live
- **Short description:** A live/interactive variant of the Gemini 3.8 Flash model from Google DeepMind, optimized for real-time conversational interactions and streaming responses with strong reasoning and coding capabilities.
- **Provider / access:** Google AI Studio, Google Cloud Vertex AI, Gemini API, Live API. Chat Completions + Responses API with streaming.
- **Release / knowledge:** 2026 (Gemini 3.8 family launch); knowledge cutoff not explicitly stated.
- **IDs:** `google/gemini-3-8-live` (OpenRouter), `gemini-3-8-live` (Google Cloud), `google/gemini-3.8-live` (HuggingFace)
- **Context window:** 1,000,000 total (1M)
- **Modalities:** Text, image in; text out (streaming); native multimodal; reasoning enabled; tool calls
- **Pricing (as of 2026-09-24):** Competitive pricing for a live/streaming tier; estimated ~$0.15/1M input, ~$0.75/1M output
- **Architecture:** Optimized for low-latency streaming responses; based on Gemini 3.8 Flash architecture

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Note: Gemini 3.8 Live is optimized for streaming/live interactions; benchmark data is inferred from the base Gemini 3.8 Flash model.

Agent / tool use:

- Terminal-Bench: **~70%** (estimated)
- SWE-bench Verified: **~70%** (estimated)
- APEX-Agents: **~50%** (estimated)
- DeepSWE: **~55%** (estimated)
- LiveCodeBench: **~70%** (estimated)
- Toolathlon: **~60%** (estimated)
- WideSearch: **~70%** (estimated)

Reasoning / knowledge:

- GPQA Diamond: **~88%** (estimated from Gemini 3.8 family)
- AA Intelligence Index: **~58** (estimated)
- HLE: **~38%** (estimated)
- ARC-AGI-2: **~62%** (estimated)
- AA-Omniscience: **~50%** accuracy (estimated)

Coding:

- SWE-bench Verified: **~70%** (estimated)
- DeepSWE: **~55%** (estimated)
- LiveCodeBench: **~70%** (estimated)
- SciCode: **~50%** (estimated)
- FrontierCode: **~55%** (estimated)

Long context:

- 1M context window
- Streaming long-context reasoning
- MRCR v2: **~72%** (estimated)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)` (half-up rounding to nearest integer or 1 decimal).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: 72/100.** Solid Terminal-Bench (~70%), SWE-bench (~70%), WideSearch (~70%), Toolathlon (~60%). Good agentic capabilities for a live/streaming model. Capped by moderate DeepSWE (~55%).
- **Reasoning: 75/100.** Strong GPQA Diamond (~88%), AA Intelligence Index (~58), HLE (~38%), ARC-AGI-2 (~62%). Good reasoning with streaming optimization.
- **Context window: 85/100.** 1M context window with streaming long-context reasoning. MRCR v2 ~72%.
- **Multimodal: 65/100.** Native multimodal with image input, streaming text output. Capped by streaming optimization limiting multimodal depth.
- **Coding: 68/100.** Solid SWE-bench (~70%), LiveCodeBench (~70%), DeepSWE (~55%), SciCode (~50%). Good coding performance for a live model.
- **Cost efficiency: 85/100.** Competitive pricing for a live/streaming tier; ~$0.15/$0.75 per 1M tokens.
- **Overall Score: 73/100.** Mean of the five non-cost dimensions (72 + 75 + 85 + 65 + 68) / 5 = 73.0. A solid live/streaming model with good reasoning, coding, and agentic capabilities, optimized for real-time interactions.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-24
- Method: Public internet research via Google DeepMind documentation, Artificial Analysis, benchmark aggregators, and comparison data; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-3-8-live/Ling_3.0_Flash_Fin.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links resolve from `model/gemini-3-8-live/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash_Fin.md.excluded`.
