# Jev 1.13 — findings by Claude Opus 4.6

- Source: TypeSafe AI / Jev 1.13 (`opencode/jev-1.13`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Jev 1.13
- **Short description:** TypeSafe AI's System-One typed-decision model — not a generative text model. Designed for routing, triage, and classification tasks via typed decision outputs (Choice/Score/Noul). 136.5ms median latency, extremely cheap input-only pricing.
- **Provider / access:** TypeSafe AI API `opencode/jev-1.13`. Proprietary decision API (not Chat Completions).
- **Release / knowledge:** Mid-2026; knowledge cutoff not applicable (decision model).
- **IDs:** `opencode/jev-1.13`
- **Context window:** 64K state budget (state + questions; 32K state + longest question). Verified via meta.json.
- **Modalities:** Text input → typed decision output (Choice/Score/Noul). No image, audio, or video. Not a generative text model — does not produce free-form text output.
- **Pricing (as of 2026-10-19):** $0.042/M input; output free (no autoregressive generation). Extremely cost-effective for decision tasks.
- **Architecture:** Proprietary. System-One typed-decision model. Does not use autoregressive token generation. Produces structured typed outputs (categorical choices, numeric scores, or null decisions).

### Raw benchmarks found

Agent / tool use:

- No standard agentic benchmarks apply — not a generative model
- Routing/triage capability: **136.5ms median latency** (TypeSafe documentation)

Reasoning / knowledge:

- GPQA Diamond: not applicable — decision model, not generative
- MMLU: not applicable
- Note: Standard LLM benchmarks do not apply to this model category

Coding:

- SWE-bench: not applicable — not a code generation model
- HumanEval: not applicable

Long context:

- 64K state budget. Not a long-context retrieval model.

### Normalized scores (1–100)

- **Tool use: 20/100.** Not designed for multi-step tool use or agentic workflows. Operates as a single-shot decision model. May serve as a router within larger agent systems. Capped by non-generative architecture.
- **Reasoning: 15/100.** Typed-decision model with no free-form reasoning capability. Can make classification decisions but cannot explain reasoning or perform multi-step logic. Capped by fundamental design as a decision endpoint.
- **Context window: 55/100.** 64K state budget per tier mapping (64K = 55). Limited compared to modern LLMs.
- **Multimodal: 15/100.** Text input only, typed decision output only. No image/audio/video. Fixed at 15.
- **Coding: 10/100.** Not a code generation model. Cannot write or modify code. Capped at minimum.
- **Cost efficiency: 98/100.** $0.042/M input with free output is extraordinarily cheap. Near-maximum efficiency.
- **Overall Score: 23/100.** Mean of (20 + 15 + 55 + 15 + 10) / 5 = 23.0 → 23. A specialized decision/routing model, not comparable to generative LLMs. Excellent at its designed purpose (low-latency typed decisions) but scores low on standard LLM evaluation dimensions.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-19
- Method: Public internet research and meta.json analysis; scores are normalized 1–100 interpretations, not official vendor scores. Model is a non-generative decision model — standard LLM benchmarks do not apply.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
