# Fledge Alpha — findings by GPT 5.6 Terra

- Source: OpenCode Zen (`fledge-alpha-free`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha Free
- **Short description:** An anonymous free preview on OpenCode Zen, with evidence suggesting a routed service rather than a stable disclosed base model.
- **Provider / access:** OpenCode Zen `opencode/fledge-alpha-free`.
- **Release / knowledge:** Listed from 2026-10-01; knowledge cutoff not disclosed.
- **IDs:** `opencode/fledge-alpha-free`
- **Context window:** 1,048,576 tokens; 131,072 maximum output.
- **Modalities:** Text and image input, text output, low/high/max reasoning, and tool calls.
- **Pricing (as of 2026-10-05):** $0 input and output on the listed OpenCode Zen preview route.
- **Architecture:** Unknown; tokenization variation and uneven behavior support a router hypothesis, not an identified architecture.

### Raw benchmarks found

Agent / tool use:

- No verified public agent benchmark score found.

Reasoning / knowledge:

- StealthMark Raccoon scene: **74.0/100** at max reasoning (Stealth Models, 2026-10-02), a narrow SVG spatial/creative evaluation rather than a general benchmark.

Coding:

- No verified public coding benchmark score found.

Long context:

- **1,048,576-token** listed context window; no verified retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 62/100.** Tool calls are listed, but no repeatable tool-use benchmark is public.
- **Reasoning: 70/100.** The 74/100 narrow spatial result shows capability, tempered by route variability and lack of standard reasoning results.
- **Context window: 92/100.** A listed 1M-token window is strong, capped without a retrieval evaluation.
- **Multimodal: 70/100.** Text and image input are documented, but output is text only.
- **Coding: 65/100.** It is presented for coding-agent use, but no verified coding result supports a higher score.
- **Cost efficiency: 100/100.** The active preview route lists zero token prices.
- **Overall Score: 72/100.** Half-up mean of the five quality dimensions: 71.8; use experimentally because the underlying model and routing are not stable or disclosed.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-05
- Method: fresh public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
