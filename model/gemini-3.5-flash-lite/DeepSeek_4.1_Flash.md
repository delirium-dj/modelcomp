# Gemini 3.5 Flash-Lite — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.5 Flash-Lite (`gemini-3.5-flash-lite`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite (no "Free" wording; a free Google AI Studio tier exists)
- **Short description:** The cheapest and fastest tier of the Gemini 3.5 line, released 2026-07-21 alongside Gemini 3.6 Flash and Gemini 3.5 Flash Cyber. Google positions it for high-volume subagent calls, document parsing and agentic search rather than frontier reasoning, and it explicitly replaces Gemini 2.5 Flash and simpler Gemini 3 Flash workloads.
- **Provider / access:** Google — Gemini API, Google AI Studio, Vertex AI on the Gemini Enterprise Agent Platform. Proprietary, closed; no self-hosting or open weights.
- **Release / knowledge:** 2026-07-21. Knowledge cutoff not stated; the model builds on the Gemini 3.1 Flash-Lite base, whose card documents training-data and retention detail.
- **IDs:** `gemini-3.5-flash-lite` (Gemini API / Vertex). No OpenCode Zen Free ID.
- **Context window:** 1,048,576 tokens; max output 65,536 tokens. Verified from Google's page as compiled by HokAI (checked 2026-09-09).
- **Modalities:** text, image, video, audio and PDF input; text output; function calling, structured output and remote MCP tool calls; reasoning yes (minimal thinking by default, tunable to medium/high).
- **Pricing (as of 2026-09-18):** $0.30 / 1M in and $2.50 / 1M out at launch — a flat rate that undercuts every other model in the Gemini 3.5 family. No batch or cached-input discount has been published for this tier, unlike the full Flash tiers.
- **Architecture:** proprietary, closed; Google has not disclosed parameter count or dense-vs-MoE. There is no standalone system card for the tier — safety and data handling are documented under the older Gemini 3.1 Flash-Lite release.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54%** (vendor, 2026-09-09) — up from 31% for the prior Flash-Lite generation
- OSWorld-Verified (computer use): **74.0%** (vendor) — versus 65.1% for Gemini 3 Flash
- GDPval-AA v2 (real knowledge-work deliverables): **1,140** (vendor)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Cost-per-task: a coding-agent loop of 1M input + 200K output at this tier's rates runs about $0.80 (≈4× cheaper than Gemini 3.5 Flash's $3.30 in the same vendor example)

Reasoning / knowledge:

- GPQA Diamond: **86.9%** (vendor) — ranked 24th of 44 tracked models on HokAI
- MMLU-Pro: **83%** (vendor)
- MMLU: **83%** (vendor)
- HLE: **no verified public score found**
- LCR / MLCR / CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **23** — well behind Gemini 3.5 Flash and Gemini 3.5 Pro
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Pro: **54.2%** (vendor) — ahead of Gemini 3 Flash's 49.6%
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: **no verified public score found**
- Output speed: **363 tok/s** median, ranked 3rd of 36 tracked models (Artificial Analysis)

Long context:

- GDM-MRCR v2 (Google's internal long-context recall test): **72.2%**, versus 60.1% for the predecessor. Depth at which this was measured was not disclosed, so it is a direction-of-travel number rather than a full-window guarantee.

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 2.1 at 54% and OSWorld-Verified at 74.0% show real agentic capability for a lite tier, but τ²-bench/Tau3 and Claw/GDPval-AA agent scores are missing and the default thinking level is minimal.
- **Reasoning: 72/100.** GPQA Diamond 86.9% and MMLU-Pro 83% are strong for the price, but an AA Intelligence Index of 23 exposes how much reasoning depth the tier trades away.
- **Context window: 93/100.** 1,048,576 tokens with 65,536 output and a 72.2% GDM-MRCR v2 recall figure — one of the few lite tiers with any published recall evidence; the undisclosed measurement depth keeps it below 95.
- **Multimodal: 82/100.** Text, image, video, audio and PDF input with text output; no generation and no separate vision benchmark published for the tier.
- **Coding: 68/100.** SWE-bench Pro 54.2% is a real improvement on the previous generation, but there is no SWE-bench Verified number and no third-party agentic coding harness result.
- **Cost efficiency: 92/100.** $0.30/$2.50 per 1M is the cheapest tier in its own family and 4× cheaper per task than Gemini 3.5 Flash in the vendor's own example; the absence of published cache/batch discounts and a free-tier data-usage caveat are the only drags.
- **Overall Score: 75/100.** (62 + 72 + 93 + 82 + 68 + 92) / 6 = 78.2 → **78**. Best fit: high-volume subagents, document parsing and agentic search where per-call cost and speed matter more than frontier reasoning.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Google model page and Artificial Analysis figures as compiled by HokAI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.