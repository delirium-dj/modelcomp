# Gemini 3.7 Flash — findings by GLM 5.3 Flash

- Source: Google (`gemini-3.7-flash`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash (August 2026 Flash tier — coding/agent workhorse at half the usual Flash price)
- **Short description:** Google's 2026-08-13 Flash release: built on 3.6 Flash with algorithmic improvements to the core reasoning foundation (not a new pretrain). Big gains in software engineering and agents — Terminal-Bench 2.1 85.8%, DeepSWE 65.3% — at an introductory $0.75/$3.75 through 2026.
- **Provider / access:** Google — Gemini API (AI Studio) ID `gemini-3.7-flash`; also Vertex-adjacent enterprise surfaces (Gemini Enterprise app, Agent Platform), Google Antigravity, Android Studio, and the Gemini app's Spark experience for AI Pro/Ultra. `generateContent` API.
- **Release / knowledge:** GA 2026-08-13. Knowledge cutoff **March 2026**, with some domains limited to January 2025 (Google model card).
- **IDs:** `gemini-3.7-flash` (Google). Free tier available on AI Studio/Zen with standard rate limits (repo catalog).
- **Context window:** 1,000,000-token input, 64,000-token max output (Google launch data via ai-tldr).
- **Modalities:** text, image, audio, video in (repo catalog also lists PDF); text out. Three thinking levels (low/medium default/high); same built-in tool suite as 3.6 Flash (function calling, structured output, code execution, computer use, search grounding).
- **Pricing (as of 2026-09-18):** introductory $0.75 in / $3.75 out per 1M (thinking tokens included) through 2026-12-31, rising to $1.50/$7.50 on 2027-01-01; context caching $0.075/1M through 2026 ($0.15 after), cache storage $0.50/1M/hr ($1.00 after).
- **Architecture:** proprietary, parameters undisclosed; Gemini 3.6 Flash-derived reasoning core with selectable thinking levels.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** — up from 78.0% for 3.6 Flash (Google launch table, 2026-08-13, via ai-tldr)
- AutomationBench (private enterprise-automation set): **30.4%** — vs 17.0% for 3.6 Flash (Google launch table)
- GDP.pdf (expert PDF comprehension): **34.0%** (Google launch table)
- OSWorld / Tau / BFCL: no verified public score found

Reasoning / knowledge:

- GDM-MRCR v2 (8-needle, 128k average): **97.0%** — vs 91.8% for 3.6 Flash (long-context retrieval, Google launch table)
- GPQA / HLE / MMMLU / AA Intelligence Index: no verified public score found

Coding:

- DeepSWE v1.1: **65.3%** — up from 48.6% for 3.6 Flash (Google launch table)
- FrontierCode 1.1 Main: **43.6%** — up from 34.4% (Google launch table)
- Code Arena (web development): **1588 Elo** (Google launch table)
- SWE-Bench Pro / SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- Window: **1M tokens** in / 64K out; MRCR v2 97.0% is the measured retrieval evidence (at 128k average depth)

### Normalized scores (1–100)

> Independent derivation per the methodology in `../../model-comparison.md`; Overall = mean of the six.

- **Tool use: 94/100.** TB2.1 85.8 is near the best published agentic-terminal result of 2026 (Muse Spark 1.3's 88.8 class), with AutomationBench nearly doubling its predecessor; capped only by missing OSWorld/tau evidence.
- **Reasoning: 78/100.** "Algorithmic improvements to the core reasoning foundation" plus MRCR v2 97 evidence stronger retrieval/reasoning, but with no published GPQA/HLE the score stays provisional below the 80s.
- **Context window: 98/100.** 1M input with excellent measured retrieval (MRCR v2 97%, 8-needle @128k avg); 64K output cap.
- **Multimodal: 88/100.** Text + image + audio + video (+ PDF per repo catalog) in; text-only output; no published vision benchmark.
- **Coding: 90/100.** DeepSWE 65.3 + TB2.1 85.8 + Code Arena 1588 — a top-tier coding package for a Flash; missing SWE-Pro/Verified rows keep it out of the 95s.
- **Cost efficiency: 88/100.** Free tier plus the cheapest paid Flash rate so far ($0.75/$3.75 intro, $0.075 cache) — but it is promotional through 2026, doubling on 2027-01-01.
- **Overall Score: 89/100.** Mean: (94 + 78 + 98 + 88 + 90 + 88) / 6 = 536/6 = 89.3 → **89**. Best fit: the 2026 coding/agent Flash pick — near-frontier tool loops at half-price intro rates; note the price doubles in 2027.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-09-18
- Method: fresh public internet research from zero (ai-tldr.dev Gemini 3.7 Flash page quoting Google's model card, the 2026-08-13 launch evaluation table, Gemini API pricing and release notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
