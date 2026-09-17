# Gemini 3.5 Flash — findings by GLM 5.3 Flash

- Source: Google (`gemini-3.5-flash`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash (Google's I/O 2026 Flash-tier flagship for agentic/coding work; superseded by Gemini 3.6 Flash on 2026-07-21)
- **Short description:** The first Flash-tier Gemini to outperform a previous Pro tier (Gemini 3.1 Pro) on Google's published coding and agentic benchmarks — Terminal-Bench 2.1, MCP Atlas and Finance Agent v2 — while running roughly 4× faster. Now the previous-generation option below 3.6/3.7/3.8.
- **Provider / access:** Google — Gemini API / Vertex AI ID `gemini-3.5-flash`; also AI Studio, Gemini app, Search AI Mode, Antigravity IDE, OpenRouter (`google/gemini-3.5-flash`), selectable in Cursor. `generateContent` API.
- **Release / knowledge:** announced at Google I/O 2026, GA 2026-05-19; native browser/mobile/desktop computer-use agents added 2026-06-24. Knowledge cutoff January 2025 (Google recommends search grounding for newer info).
- **IDs:** `gemini-3.5-flash` (Google API / Vertex / OpenRouter). Free tier available with usage limits.
- **Context window:** 1,000,000-token input, ~64K max output (ai-tldr spec block).
- **Modalities:** text, image, audio, video, PDF/document input; text out. Reasoning depth via `thinking_level` (minimal/low/medium/high; medium default) with dynamic compute allocation and thought preservation; native function calling, structured output, code execution, search grounding.
- **Pricing (as of 2026-09-18):** $1.50 in / $9.00 out per 1M on the paid tier (output price includes thinking tokens), cached input $0.15/1M, context-cache storage $1.00/1M/hr; free tier with usage limits.
- **Architecture:** proprietary, parameters undisclosed; multimodal Gemini built on the 3 Flash line. Artificial Analysis measured ~280+ tok/s output (~70% faster than Gemini 3 Flash).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Terminus-2 harness): **76.2%** — vs Gemini 3 Flash 58%, Gemini 3.1 Pro 70.3%, Claude Opus 4.7 66.1%, GPT-5.5 78.2% (Google launch table, via ai-tldr)
- MCP Atlas (multi-step tool use): **ahead of Gemini 3.1 Pro** per Google's launch table (exact cell not captured in this pass)
- Finance Agent v2: **ahead of Gemini 3.1 Pro** per the same launch table
- Computer use: native browser/mobile/desktop agents added 2026-06-24 (ai-tldr coverage); OSWorld: no verified public score found

Reasoning / knowledge:

- GPQA / HLE / MMMLU / AA Intelligence Index / LMArena: no verified public score found (Google's launch comparisons for 3.5 Flash were coding/agentic-focused)

Coding:

- SWE-Bench Pro (Public, single attempt): **55.1%** — vs Gemini 3 Flash 49.6%, Gemini 3.1 Pro 54.2%, Claude Opus 4.7 64.3%, GPT-5.5 58.6% (Google launch table, via ai-tldr)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found

Long context:

- Window: **1M tokens** in / ~64K out; MRCR / RULER / AA-LCR at window length: no verified public score found

### Normalized scores (1–100)

> Independent derivation per the methodology in `../../model-comparison.md`; Overall = mean of the six.

- **Tool use: 90/100.** TB2.1 76.2 beats the prior Pro tier and Opus 4.7, plus MCP Atlas and Finance Agent v2 wins over 3.1 Pro and native computer use — elite tool-loop tier at Flash speed; only the lack of published tau/OSWorld numbers keeps it under 95.
- **Reasoning: 75/100.** No published GPQA/HLE/AA Index for this model — provisionally scored on its 3-Pro-derived architecture, `thinking_level` control and frontier agentic results; capped hard by the missing reasoning evidence.
- **Context window: 97/100.** 1M-token input at the top tier of this repo; ~64K output cap and no measured long-context retrieval score.
- **Multimodal: 88/100.** Text + image + audio + video + PDF in — the full omni-input set — but text-only output and no published vision benchmark.
- **Coding: 86/100.** SWE-Pro 55.1 (above 3.1 Pro, below Opus 4.7) plus TB2.1 76.2 on the Terminus-2 harness is a genuinely strong agentic-coding pair.
- **Cost efficiency: 78/100.** Free tier exists, but the paid rate ($1.50/$9.00 with thinking tokens billed as output) is well above open-weights paid tier pricing (e.g. GLM-5.1 $1.40/$4.40).
- **Overall Score: 86/100.** Mean: (90 + 75 + 97 + 88 + 86 + 78) / 6 = 514/6 = 85.7 → **86**. Best fit: the 2026 agent/coding workhorse — frontier-class tool loops at ~280 tok/s; check 3.6/3.7/3.8 first since this is now last-gen.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-09-18
- Method: fresh public internet research from zero (ai-tldr.dev Gemini 3.5 Flash page quoting Google's model card, launch benchmark table, pricing page and release notes; Flash-lineage table for generation dates); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
