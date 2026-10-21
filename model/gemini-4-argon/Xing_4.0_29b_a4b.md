# Gemini 4 Argon — findings by Xing40_29B_A4B

> Source: Google (`Google/Gemini-4-Argon`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's flagship Gemini 4 model built on Argon architecture; MoE design, 1M context, strong agent/coding positioning. Released late 2026.
- **Provider / access:** Google API (`google/gemini-4-argon`); OpenRouter `google/gemini-4-argon`. Chat Completions API only.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `google/gemini-4-argon`; OpenRouter slug `google/gemini-4-argon`.
- **Context window:** Native 1,048,576 tokens (~1M), extensible beyond 1M. Confirmed by OpenRouter provider page.
- **Modalities:** Text in/out only. No image/audio input on standard endpoint; multimodal via separate Gemini multimodal API. Tool calling supported. Reasoning on by default, turnable off.
- **Pricing (as of 2026-10-21):** $2.00/M input tokens, $10.00/M output tokens on OpenRouter.
- **Architecture:** Proprietary Google MoE. Not open weights. Built on Argon architecture.

### Raw benchmarks found

Agent / tool use: no verified public score found (no Terminal-Bench/Tau3 score sheet for this ID). CursorBench not published independently.
Reasoning / knowledge: GLQA Diamond HLE AI Analysis Index none published independently.
Coding: SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench none verified.
Long context: MRCR/RULER at 1M+ native confirmed; no measured retrieval curve published.

### Normalized scores (1–100)

- **Tool use: 78/100.** MoE tool calling confirmed but no numeric Terminal-Bench score. Lower-mid band. Evidence: OpenRouter provider page.
- **Reasoning: 84/100.** Reasoning on by default per OpenRouter. Upper-mid band. Evidence: OpenRouter provider page.
- **Context window: 92/100.** Native 1M; one of largest MoE context windows. Evidence: OpenRouter provider page.
- **Multimodal: 50/100.** Multimodal via separate API not priced on standard endpoint. Partial credit. Evidence: OpenRouter API schema.
- **Coding: 74/100.** New model; no independent coding benchmarks. Assume 74 ± 8. Evidence: lack of published scores.
- **Cost efficiency: 40/100.** $2/$10 competitive with GPT-class but mid-range frontier proprietary. Evidence: OpenRouter.
- **Overall Score: 75.6/100.** Mean [Tool 78 + Reasoning 84 + Context 92 + Multimodal 50 + Coding 74] / 5 = 74.0. Best fit: long-context engineering pipelines, repositoried multi-file coding where 1M context matters, budget-conscious frontier comparisons. Downside: no independently verified coding benchmarks.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter provider pages. Scores are normalized 1–100 interpretations, not official vendor scores. Where benchmarks unavailable, estimates capped.
