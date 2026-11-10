# Grok 4.1 Fast — findings by Fledge Alpha

- Source: xAI (`grok-4.1-fast`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's cost-efficient agentic tool-calling model with a 2M-token context, released November 2025; available in reasoning and non-reasoning variants.
- **Provider / access:** xAI API `grok-4-1-fast-reasoning` / `grok-4-1-fast-non-reasoning`; OpenRouter `x-ai/grok-4.1-fast`; Chat Completions + Agent Tools API (web search, X data, code execution).
- **Release / knowledge:** November 19, 2025; knowledge cutoff not published.
- **IDs:** `grok-4-1-fast`, `grok-4-1-fast-reasoning`; no Zen Free ID verified.
- **Context window:** 2,000,000 tokens (pricing tier jumps above 128K); max output 128K.
- **Modalities:** text, image in; text out; reasoning (effort-controlled); function calling; structured outputs.
- **Pricing (as of 2026-10-05):** $0.20 in / $0.50 out per 1M, cached input $0.05; live search $25/1K sources.
- **Architecture:** proprietary; RL-trained in simulated tool environments, per xAI launch post.

### Raw benchmarks found

Agent / tool use:

- τ²-bench Telecom: top-of-chart at launch (vendor-reported via xAI news, verified by AA)
- BFCL v4 overall accuracy: **72%** (vendor-reported)
- FRAMES: **87.6** (vendor-reported with Agent Tools)
- Research-Eval/Reka: **63.9** (vendor-reported)

Reasoning / knowledge:

- GPQA/LCB/MMLU-Pro: qualitatively "outperforms Grok 3 Mini on high thinking" (vendor); no verified headline numbers
- HLE / AA Intelligence Index: no verified public score found

Coding:

- LCB: referenced qualitatively by OpenRouter; no verified numeric published
- SWE-bench: no verified public score found

Long context:

- 2M-token context is the headline spec; FRAMES 87.6 with search tools; no MRCR/RULER numeric published

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 90/100.** BFCL v4 72 and τ²-bench Telecom leadership at launch make it a best-in-class fast tool caller.
- **Reasoning: 72/100.** Vendor claims strong reasoning-effort performance, but no independent headline numbers (HLE, GPQA, AA index) to verify.
- **Context window: 100/100.** 2M native is the largest verified window in this cohort; FRAMES shows usable agentic retrieval.
- **Multimodal: 65/100.** Image input supported; no audio/video; text-only out.
- **Coding: 62/100.** LCB referenced qualitatively only; no SWE-bench numeric — coding claims unverified.
- **Cost efficiency: 92/100.** $0.20/$0.50 per 1M with cached reads at $0.05 is near the floor for a frontier-tier API.
- **Overall Score: 78/100.** Mean of five non-cost dims (90+72+100+65+62)/5 = 77.8 → 78; best fit: high-volume agentic tool calling and long-context search over known coding ability.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (xAI docs and launch post, OpenRouter model pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
