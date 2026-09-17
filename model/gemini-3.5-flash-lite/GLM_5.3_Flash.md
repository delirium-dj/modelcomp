# Gemini 3.5 Flash-Lite — findings by GLM 5.3 Flash

- Source: Google (`gemini-3.5-flash-lite`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite (cheapest Gemini 3 tier; released alongside 3.6 Flash and the limited-access 3.5 Flash Cyber)
- **Short description:** Google's July 2026 budget tier: natively multimodal (text/image/audio/video/PDF), 1M context, ~350 tok/s — and notably the first Flash-Lite that is genuinely usable for terminal-style agents, beating the older, larger Gemini 3 Flash on SWE-Bench Pro and OSWorld-Verified.
- **Provider / access:** Google — Gemini API / Vertex AI ID `gemini-3.5-flash-lite`; also AI Studio, Gemini app, Search AI Overviews. `generateContent` API; model card PDF on storage.googleapis.com.
- **Release / knowledge:** released 2026-07-21 (succeeds Gemini 3.1 Flash-Lite). Knowledge cutoff **March 2026** — the freshest in the Flash-Lite line.
- **IDs:** `gemini-3.5-flash-lite` (Google). Free tier available with usage limits.
- **Context window:** 1,000,000-token input, 64,000-token max output (ai-tldr spec block).
- **Modalities:** text, image, audio, video, PDF in; text out. Reasoning yes (natively multimodal Gemini 3 model); tool calling yes.
- **Pricing (as of 2026-09-18):** $0.30 in / $2.50 out per 1M (output includes thinking tokens), cached input $0.03/1M, context-cache storage $1.00/1M/hr; free tier with usage limits. Roughly 2.5× the 3.1 Flash-Lite list price but still near the repo's cheapest paid band.
- **Architecture:** proprietary, parameters undisclosed; ~350 output tok/s on AA's index (median for its price tier ≈107 t/s).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (agentic terminal coding): **54%** — vs 31% for Gemini 3.1 Flash-Lite (Google launch table, 2026-07-21, via ai-tldr)
- OSWorld-Verified (agentic computer use): **74%** — vs 65.1% for the larger Gemini 3 Flash (same source)
- GDPval-AA v2 (economically valuable knowledge work): **1140 Elo** — vs 642 Elo for 3.1 Flash-Lite (same source)
- Tau2/Tau3/BFCL/Claw: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **36** — well above the median for reasoning models in its price tier (AA via ai-tldr)
- GPQA / HLE / MMMLU / ARC-AGI: no verified public score found

Coding:

- SWE-Bench Pro (Public): **54.2%** — beats the older, larger Gemini 3 Flash (49.6%) (Google launch table)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found

Long context:

- GDM-MRCR v2 (long-context retrieval): **72.2%** — vs 60.1% for 3.1 Flash-Lite (Google launch table)
- Window: **1M tokens** in / 64K out

### Normalized scores (1–100)

> Independent derivation per the methodology in `../../model-comparison.md`; Overall = mean of the six.

- **Tool use: 76/100.** TB2.1 54 + OSWorld-Verified 74 (computer use) + GDPval-AA v2 1140 — a real jump that makes budget agent loops viable; still clearly below the 3.5/3.6 Flash agentic flagships (TB2.1 76.2).
- **Reasoning: 72/100.** AA Intelligence Index 36 is a generational jump for a Lite tier, but with no published GPQA/HLE the score stays provisional and mid-tier.
- **Context window: 98/100.** 1M input with measured long-context retrieval (GDM-MRCR v2 72.2%) — the best-evidenced 1M package among the cheap tiers; 64K output cap.
- **Multimodal: 85/100.** Full omni input (text/image/audio/video/PDF) but text-only output and no published vision benchmark.
- **Coding: 76/100.** SWE-Pro 54.2 (beats Gemini 3 Flash) and TB2.1 54 — strong for the price, short of the 60s club.
- **Cost efficiency: 92/100.** Free tier + $0.30/$2.50 with a $0.03 cache rate; docked for costing ~2.5× its 3.1 Flash-Lite predecessor at list.
- **Overall Score: 83/100.** Mean: (76 + 72 + 98 + 85 + 76 + 92) / 6 = 499/6 = 83.2 → **83**. Best fit: default cheap 2026 workhorse — high-volume multimodal ingestion and now viable budget agent loops.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-09-18
- Method: fresh public internet research from zero (ai-tldr.dev Gemini 3.5 Flash-Lite page quoting Google's model card PDF, launch comparison table, Gemini API pricing and the 2026-07-21 launch blog; Artificial Analysis speed/index figures as quoted there); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
