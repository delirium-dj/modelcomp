# Qwen 3.8 Omni Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Alibaba / Qwen 3.8 Omni Flash
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Omni Flash
- **Short description:** Alibaba's omni-modal reasoning model from the Qwen3.8 generation — the first Qwen model built around agentic capabilities with native audio-video understanding. Suited for audio-video analysis and summarization, with text output.
- **Provider / access:** OpenRouter route `qwen/qwen3.8-omni-flash` (also `alibaba/qwen3.8-omni-flash`). Chat Completions, Completions, Messages, and Responses API.
- **Release / knowledge:** Release date not confirmed via public webfetch source; knowledge cutoff not disclosed.
- **IDs:** `qwen/qwen3.8-omni-flash` (OpenRouter canonical). No Free ID confirmed on OpenCode Zen.
- **Context window:** not publicly confirmed via webfetch (OpenRouter model page did not publish a context-window figure).
- **Modalities:** text + image + audio + video in; text out; reasoning yes (`reasoning` parameter supported, default enabled); tool calls yes; JSON mode / structured output yes.
- **Pricing (as of 2026-11-11):** $0.15 per 1M input tokens, $0.47 per 1M output tokens (Alibaba Cloud International via OpenRouter); cache read $0.016/M. Very cheap; closed weights.
- **Architecture:** Proprietary (closed); omni-modal reasoning model; parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

- Terminal-Bench: no verified public score found
- Tau3 / Tau2: no verified public score found
- Claw-Eval: no verified public score found
- GDPval / OSWorld / Automation: no verified public score found
- Reasoning (GPQA / HLE / MRCR / LCR / CritPt / Index): no verified public score found. Model supports `reasoning` parameter (default enabled) but no individual GPQA / HLE / MRCR / LCR / CritPt / Intelligence Index numbers located via webfetch.
- Coding (SWE-bench / DeepSWE / LiveCode / SciCode / SWE-Atlas): no verified public score found
- Cost per task / speed (if available): no per-task cost or speed figures located via webfetch. Pricing: $0.15/$0.47 per 1M tokens (input/output).

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 70/100.** Native tool calling supported; positioned as an agentic omni model. Capped by absence of published Terminal-Bench / Tau3 / GDPval agentic-tool figures and unverified context window.
- **Reasoning: 70/100.** Reasoning enabled by default; omni-modal reasoning model. Capped by lack of published GPQA / HLE / CritPt individual numbers.
- **Context window: 50/100.** Not publicly confirmed via webfetch; scored at the low end of the 100K–200K tier pending a verified source.
- **Multimodal: 88/100.** Text + image + audio + video input, text output. Strong multimodal input coverage (+video/audio in → 75–90+ range); text-only output caps the top of the range.
- **Coding: 70/100.** Positioned for agentic/coding work; reasoning model. Capped by absence of published SWE-bench / LiveCodeBench / DeepSWE figures.
- **Cost efficiency: 95/100.** $0.15/$0.47 per 1M tokens (very cheap; methodology: ~$0.10/$0.20 → 97–99). Closed weights, no free tier confirmed.
- **Overall Score: 69.6/100.** Mean of (70 + 70 + 50 + 88 + 70) / 5 = 69.6 → 70. Best-fit: low-cost omni-modal agent for audio/video/document work; context window and benchmarks not yet publicly verified.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/nemotron-3.5-super-vl-120b-a12b)** — 2026-11-11
- Method: public internet research (OpenRouter API model spec and pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenRouter API: qwen/qwen3.8-omni-flash — spec and pricing](https://openrouter.ai/api/v1/models)
  - [OpenRouter: Qwen3.8 Omni Flash — pricing](https://openrouter.ai/qwen/qwen3.8-omni-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
