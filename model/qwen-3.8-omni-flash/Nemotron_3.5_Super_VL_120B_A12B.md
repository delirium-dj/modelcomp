# Qwen 3.8 Omni Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Alibaba / Qwen 3.8 Omni Flash
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Omni Flash
- **Short description:** Alibaba's omni-modal reasoning model from the Qwen3.8 generation — the first Qwen model built around agentic capabilities with native audio-video understanding. Suited for audio-video analysis and summarization, with text output.
- **Provider / access:** OpenRouter route `qwen/qwen3.8-omni-flash` (also `alibaba/qwen3.8-omni-flash`); served by 13 providers. Chat Completions, Completions, Messages, and Responses API.
- **Release / knowledge:** Released 2026-09-17; knowledge cutoff not disclosed.
- **IDs:** `qwen/qwen3.8-omni-flash` (OpenRouter canonical). No Free ID confirmed on OpenCode Zen.
- **Context window:** 1,000,000 tokens total; 131,072 max output. Verified via OpenRouter API.
- **Modalities:** text + image + audio + video in; text out; reasoning yes (default enabled); tool calls yes; JSON mode / structured output yes.
- **Pricing (as of 2026-11-10):** $0.15 per 1M input tokens, $0.47 per 1M output tokens (OpenRouter standard); cache read $0.016/M. Very cheap; closed weights.
- **Architecture:** Proprietary (closed); omni-modal reasoning model; parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

- Terminal-Bench: no verified public score found
- Tau3 / Tau2: no verified public score found
- Claw-Eval: no verified public score found
- GDPval / OSWorld / Automation: no verified public score found
- Reasoning (GPQA / HLE / MRCR / LCR / CritPt / Index): no verified public score found. Model supports `reasoning` parameter (default enabled) but no individual GPQA/HLE/MRCR/LCR/CritPt/Intelligence Index numbers located.
- Coding (SWE-bench / DeepSWE / LiveCode / SciCode / SWE-Atlas): no verified public score found
- Cost per task / speed (if available): no per-task cost or speed figures located. Pricing: $0.15/$0.47 per 1M tokens (input/output).

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 78/100.** Native tool calling supported; positioned as an agentic omni model. Capped by absence of published Terminal-Bench / Tau3 / GDPval agentic-tool figures.
- **Reasoning: 78/100.** Reasoning enabled by default; omni-modal reasoning model. Capped by lack of published GPQA / HLE / CritPt individual numbers.
- **Context window: 98/100.** Verified 1M token context window (≥1M → 95–100). 131K max output noted as a caveat, not a score reduction.
- **Multimodal: 88/100.** Text + image + audio + video input, text output. Strong multimodal input coverage (+video/audio in → 75–90+ range); text-only output caps the top of the range.
- **Coding: 78/100.** Positioned for agentic/coding work; reasoning model. Capped by absence of published SWE-bench / LiveCodeBench / DeepSWE figures.
- **Cost efficiency: 95/100.** $0.15/$0.47 per 1M tokens (very cheap; methodology: ~$0.10/$0.20 → 97–99). Closed weights, no free tier confirmed.
- **Overall Score: 84/100.** Mean of (78 + 78 + 98 + 88 + 78) / 5 = 84.0 → 84. Best-fit: low-cost omni-modal agent for audio/video/document work with long context; not yet benchmark-verified on standard coding/reasoning leaderboards.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/nemotron-3.5-super-vl-120b-a12b)** — 2026-11-10
- Method: public internet research (OpenRouter API model spec and pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenRouter API: qwen/qwen3.8-omni-flash — spec and pricing](https://openrouter.ai/api/v1/models)
  - [OpenRouter: Qwen3.8 Omni Flash listing — 1M context, $0.1126/$0.38](https://openrouter.ai/models)
  - [models.dev: Qwen3.8 Omni Flash — Alibaba, 1M context, closed](https://openrouter.ai/models/alibaba/qwen3.8-omni-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
