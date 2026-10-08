# Gemini 3.6 Flash — findings by GLM 5.3 Flash

- Source: Google (`gemini-3.6-flash`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash (Google's Flash-tier workhorse; successor to 3.5 Flash, superseded by 3.7 Flash on 2026-08-13)
- **Short description:** July 2026 Flash workhorse: same 1M multimodal window as 3.5 Flash but with stronger agentic, coding, computer-use and long-context scores while using ~17% fewer output tokens (up to 65% fewer on DeepSWE) — the token-efficiency win compounds on scaled agent loops.
- **Provider / access:** Google — Gemini API / Vertex AI ID `gemini-3.6-flash`; also AI Studio, Gemini app, Search AI Mode, Antigravity IDE. `generateContent` API; model card PDF on storage.googleapis.com.
- **Release / knowledge:** released 2026-07-21 (with 3.5 Flash-Lite and limited-access 3.5 Flash Cyber). Knowledge cutoff **March 2026**; search grounding recommended for newer info.
- **IDs:** `gemini-3.6-flash` (Google). Free tier available with usage limits.
- **Context window:** 1,000,000-token input, 64,000-token max output (ai-tldr spec block).
- **Modalities:** text, image, audio, video, PDF in; text out. Reasoning yes; built-in function calling, structured output, code execution, computer use, search grounding.
- **Pricing (as of 2026-09-18):** $1.50 in / $7.50 out per 1M (paid tier), cached input $0.15/1M, context-cache storage $1.00/1M/hr; free tier with usage limits. Cheaper output than 3.5 Flash ($9.00) and fewer tokens per task.
- **Architecture:** proprietary, parameters undisclosed; natively multimodal Flash-tier Gemini positioned for scaled agentic and knowledge work.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (agentic terminal coding): **78%** — vs 3.5 Flash 76.2%, 3.1 Pro 73.8% (Google launch table, 2026-07-21, via ai-tldr)
- OSWorld-Verified (agentic computer use): **83%** — vs 3.5 Flash 78.4% (same source)
- GDPval-AA v2 (economically valuable knowledge work): **1421 Elo** — vs 3.5 Flash 1349, 3.1 Pro 965 (same source)
- Tau2/Tau3/BFCL/Claw: no verified public score found

Reasoning / knowledge:

- GPQA / HLE / MMMLU / AA Intelligence Index / ARC-AGI: no verified public score found (launch table is coding/agentic/long-context focused)

Coding:

- SWE-Bench Pro (agentic coding): **58.7%** — vs 3.5 Flash 55.1%, 3.1 Pro 54.2% (Google launch table)
- DeepSWE v1.1: **49%** — vs 3.5 Flash 37%, 3.1 Pro 12% (same source)
- MLE-Bench: **63.9%** — vs 3.5 Flash 49.7%, 3.1 Pro 42.6% (same source)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found

Long context:

- GDM-MRCR v2 at full 1M-token depth: **54%** — roughly double 3.5 Flash and 3.1 Pro at the same depth (Google launch table)
- Window: **1M tokens** in / 64K out

### Normalized scores (1–100)

> Independent derivation per the methodology in `../../model-comparison.md`; Overall = mean of the six.

- **Tool use: 93/100.** TB2.1 78 + OSWorld-Verified 83 (computer use) + GDPval-AA v2 1421 Elo — near-frontier agentic package with native computer use; only unpublished tau/BFCL evidence keeps it under 95.
- **Reasoning: 76/100.** No published GPQA/HLE — provisionally strong on its measured MLE-Bench 63.9 and 1M-depth MRCR 54, capped by missing classic reasoning numbers.
- **Context window: 98/100.** 1M input with the deepest measured retrieval evidence in the Flash line (MRCR v2 54% at full 1M depth); 64K output cap.
- **Multimodal: 88/100.** Full omni input incl. PDF and computer-use vision; text-only output; no published vision benchmark.
- **Coding: 89/100.** SWE-Pro 58.7 + DeepSWE 49 (2.6× its predecessor) + MLE-Bench 63.9 + TB2.1 78 — the strongest coding package seen at Flash tier.
- **Cost efficiency: 80/100.** Free tier plus $1.50/$7.50; the 17–65% output-token reduction and $0.15 cache take real edge off the bill, but paid list is still well above open-weights tiers.
- **Overall Score: 89/100.** Mean: (93 + 76 + 98 + 88 + 89 + 80) / 6 = 524/6 = 87.3 → **87**. Best fit: current-generation default for scaled agents and coding — check 3.7/3.8 first, but this is the value pick of the 3.x Flash line.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-09-18
- Method: fresh public internet research from zero (ai-tldr.dev Gemini 3.6 Flash page quoting Google's model card PDF, launch comparison table of 2026-07-21, Gemini API pricing and the launch blog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
