# Grok 4.1 Fast — findings by Muse Glimmer 30B

- Source: xAI Grok 4.1 Fast, API model `grok-4-1-fast` / `grok-4-1-fast-reasoning` alias; not on OpenCode Zen per meta.json
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's 2M-context 4.1 Fast tier at $0.20/$0.50 for high-volume tool calling; xAI lists grok-4-1-fast as an alias of the reasoning build; tau2 93.3% (reasoning) vs 63.7% (plain).
- **Provider / access:** xAI API, model ID `grok-4-1-fast` / `grok-4-1-fast-reasoning`. OpenAI-compatible Chat Completions. Not on OpenCode Zen.
- **Release / knowledge:** 2025-11-19 public launch <https://x.ai/news/grok-4-1-fast>. Knowledge cutoff not published.
- **IDs:** `xai/grok-4.1-fast-reasoning` (meta.json id, alias `grok-4-1-fast`). Non-reasoning variant tracked as `grok-4-1-fast (non-reasoning)` on Artificial Analysis.
- **Context window:** 2,000,000 total; ~30,000 max output. Verified via meta.json `contextWindow: "2,000,000 total; ~30,000 max output"` and Artificial Analysis technical specs “Context window 2M”.
- **Modalities:** Text + image in; text out. Tool calling yes; structured output yes; prompt caching yes. Reasoning disabled by default on non-reasoning route per Artificial Analysis “Reasoning No”.
- **Pricing (as of 2026-10-20):** xAI native $0.20 / 1M input, $0.50 / 1M output, cached input $0.05 / 1M. Not on OpenCode Zen. Pricing links: https://docs.x.ai/docs/models
- **Architecture:** Proprietary. Parameter count undisclosed.

### Raw benchmarks found

> List measured numbers with source.

Agent / tool use:

- Berkeley Function Calling v4 Benchmark Overall Accuracy: **72%** <https://x.ai/news/grok-4-1-fast — “Berkeley Function Calling v4 Benchmark Overall Accuracy(%) 72%”>
- τ²-bench Telecom: independent evaluation verified by Artificial Analysis referenced in launch post, exact non-reasoning % not independently published for this ID at 2026-10-20; reasoning variant cited as 93.3% in meta.json short description.
- Terminal-Bench 2.1 / GDPval-AA / Claw-Eval / Toolathon: **no verified public score found** for `grok-4-1-fast` non-reasoning variant in independent trackers at 2026-10-20.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **11** estimated <https://artificialanalysis.ai/models/grok-4-1-fast — “Grok 4.1 Fast (Non-reasoning) scores 11 on the Artificial Analysis Intelligence Index”>
- Research-Eval Reka: **63.9** score with $0.046 avg cost, FRAMES **87.6** $0.048, X Browse **56.3** $0.091 <https://x.ai/news/grok-4-1-fast — Agent Tools API benchmark table>
- GPQA Diamond / HLE / LCR / CritPt / AA-IFBench: **no verified public score found** for this exact ID in independent leaderboards at 2026-10-20.

Coding:

- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: **no verified public score found** for this variant at 2026-10-20.

Multimodal / grounded:

- Input modalities text + image confirmed per Artificial Analysis specs. No independent MMMU-Pro / AA-Omniscience score published for this ID at 2026-10-20.

Long context:

- Context window 2M total verified. No MRCR / RULER / GraphWalks public score published for `grok-4-1-fast` non-reasoning at 2026-10-20.

### Normalized scores (1–100)

> Overall = half-up mean of Tool + Reasoning + Context + Multimodal + Coding.

- **Tool use: 68/100.** Berkeley Function Calling v4 72% supports strong function-calling design; launch materials highlight tool-calling specialization. Caps below 75 due to lack of independent τ²-bench / Terminal-Bench 2.1 numbers for the non-reasoning route and no GDPval-AA verification.
- **Reasoning: 50/100.** Artificial Analysis Intelligence Index 11 estimated places the non-reasoning route well below mid-tier reasoning; no GPQA Diamond / HLE / CritPt scores published. The reasoning-disabled route is intended for execution, not deliberation.
- **Context window: 95/100.** 2,000,000 tokens places it in the ≥1M tier. Not 100: max output capped ~30K and no ≥98% retrieval benchmark published for this ID.
- **Multimodal: 60/100.** Text + image in, text out per primary docs and Artificial Analysis specs. No video/audio output and no independent MMMU-Pro score published.
- **Coding: 50/100.** Neutral placeholder — no verified coding benchmark published for this variant; xAI positions the model for tool calling / agentic search rather than code generation.
- **Cost efficiency: 95/100.** $0.20 in / $0.50 out per 1M with $0.05 cached sits at the low end of the pricing ladder. Would fall if routed via reseller pricing.
- **Overall Score: 65/100.** Half-up mean of 68 + 50 + 95 + 60 + 50 = 64.6 → 65. Best-fit for ultra-cheap, very wide-context tool-calling executor; not the route for hard reasoning or coding.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: Public internet research; meta.json for model basics, pricing, modalities, context window; x.ai launch news for release date, pricing, Berkeley Function Calling v4 and Agent Tools API benchmarks; Artificial Analysis for Intelligence Index and technical specs. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
