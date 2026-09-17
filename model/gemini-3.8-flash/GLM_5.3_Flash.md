# Gemini 3.8 Flash — findings by GLM 5.3 Flash

- Source: Google (`gemini-3.8-flash`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash (current Flash tier; launched with the security-specialist twin Gemini 3.8 Flash Cyber)
- **Short description:** Google's September 2026 Flash: "our best reasoning & coding model yet, at the same speed and low cost of 3.7" — pointed at long-horizon software engineering, autonomous agents and enterprise workflows needing factual rigor. HLE-Verified 54.9% is the headline reasoning number.
- **Provider / access:** Google — Gemini API (AI Studio) ID `gemini-3.8-flash`; also Android Studio, Google Antigravity, Gemini Enterprise, and the Gemini app/Search for AI Pro/Ultra subscribers. `generateContent` API.
- **Release / knowledge:** GA 2026-09-02. Knowledge cutoff **March 2026**, some domains limited to January 2025 (model card).
- **IDs:** `gemini-3.8-flash` (Google). Free tier available in Google AI Studio. (Note: the 3.8 Flash **Cyber** variant is NOT generally available — vetted defenders only, via Google's Fairwind Program.)
- **Context window:** 1,000,000-token input, 64,000-token max output (Google launch data via ai-tldr).
- **Modalities:** text, image, audio, video in; text out. Thinking levels low/medium/high (**minimal not supported** on this model); built-in tool suite carried over from 3.7 (function calling, structured output, code execution, computer use, search grounding).
- **Pricing (as of 2026-09-18):** $0.75 in / $3.75 out per 1M through 2026-12-31, rising to $1.50/$7.50 on 2027-01-01 (same intro schedule as 3.7 Flash). Free tier in AI Studio.
- **Architecture:** proprietary, parameters undisclosed; based on Gemini 3.7 Flash per the model card (no new pretraining run described).

### Raw benchmarks found

Agent / tool use:

- Vals Finance Agent V2: **beats Gemini 3.7 Flash and other frontier models** (Google launch post — qualitative, exact cells not captured in this pass)
- Harvey legal agent benchmark: **beats Gemini 3.7 Flash and other frontier models** (same source)
- Prompt-injection robustness: **significant improvement** per Gray Swan measurements (launch post)
- Terminal-Bench / OSWorld / tau: no verified public score found for 3.8 Flash specifically (its 3.7 base scored TB2.1 85.8%)

Reasoning / knowledge:

- HLE-Verified: **54.9%** — Google's headline multi-step reasoning evidence across STEM, humanities and professional fields (launch post via ai-tldr); the strongest HLE number captured in this repo's research so far
- GPQA / MMMLU / AA Intelligence Index / ARC-AGI: no verified public score found

Coding:

- DeepSWE v1.1: **outperforms most larger frontier models** on end-to-end engineering problems (Google launch post — qualitative; exact cell not captured)
- Terminal-Bench / SWE-Bench Pro / FrontierCode / Code Arena: no 3.8-specific published numbers found

Long context:

- Window: **1M tokens** in / 64K out; MRCR/RULER at window length: no verified public score found

### Normalized scores (1–100)

> Independent derivation per the methodology in `../../model-comparison.md`; Overall = mean of the six.

- **Tool use: 94/100.** Frontier-beating results on Vals Finance Agent V2 and Harvey legal agent plus improved Gray Swan robustness — but scored just under 3.7 Flash's published 85.8 TB2.1 since no 3.8-specific agentic benchmark number was captured.
- **Reasoning: 90/100.** HLE-Verified 54.9% is the strongest single reasoning datapoint in this repo's coverage (above Muse Spark 1.3's 48.7); held below the 95s by the absence of GPQA/critique-benchmark numbers.
- **Context window: 98/100.** 1M input / 64K output at the top tier of this repo; no window-length retrieval score published.
- **Multimodal: 88/100.** Text + image + audio + video in; text-only output; no published vision benchmark.
- **Coding: 91/100.** "Outperforms most larger frontier models" on DeepSWE v1.1 (qualitative) on top of the 3.7 base (DeepSWE 65.3, TB2.1 85.8); docked slightly for the missing published 3.8 coding cells.
- **Cost efficiency: 88/100.** Free tier in AI Studio plus $0.75/$3.75 intro — the cheapest frontier-class rate measured here; the scheduled 2027 doubling to $1.50/$7.50 is the cap.
- **Overall Score: 92/100.** Mean: (94 + 90 + 98 + 88 + 91 + 88) / 6 = 549/6 = 91.5 → **92**. Best fit: the current best Flash — frontier reasoning/coding at Flash price through 2026; budget for the 2027 price doubling.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-09-18
- Method: fresh public internet research from zero (ai-tldr.dev Gemini 3.8 Flash page quoting Google's model card, launch post of 2026-09-02 and Gemini API pricing; the 3.8 Flash Cyber/Fairwind notes for variant context); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
