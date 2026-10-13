# Gemini 2.0 Flash — findings by Kimi K3

- Source: Google DeepMind (`google/gemini-2.0-flash`)
- Date: 2026-10-13 (UTC) — second-pass audit (first pass 2026-09-27; retirement re-confirmed — model remains shut down and absent from every live listing; historical reference, scores unchanged)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's 2025 workhorse multimodal model — the shipping face of the 2.0 generation with 1M context, omni input and native tool use. Deprecated and shut down 2026-06-01; **re-confirmed dead on 2026-10-13: not in the live Zen listing (nothing 2.0 remains anywhere in it) and the entry is historical only**. Kept here as the reference for the 2.0 line.
- **Provider / access:** Google AI Studio / Gemini API, Vertex AI (retired for this model as of 2026-06-01); third-party remnants possible (Poe/Qiniu listings, unverified today).
- **Release / knowledge:** Experimental Dec 2024, GA 2025-02-05; shutdown 2026-06-01. Knowledge cutoff 2024 (launch era).
- **IDs:** `google/gemini-2.0-flash`; aliases `gemini-2.0-flash-001`, `gemini-2.0-flash-lite-001`. No Zen ID (never carried; ✓ absent 2026-10-13).
- **Context window:** 1M tokens (verified across OpenRouter-era listings and RULER coverage).
- **Modalities:** text, image, audio, video in; text + image out. Native tool use (function calling, Search grounding); JSON mode; pre-reasoning era.
- **Pricing (historical):** AI Studio $0.10/$0.40 (audio input $0.70); Vertex $0.15/$0.60.
- **Architecture:** proprietary (Google DeepMind).

### Raw benchmarks found (historical first-pass snapshot — frozen by the shutdown; nothing can change here)

Agent / tool use:

- IFEval: **86.6%** (19th/25 tracked); AlpacaEval 2.0: **51.5%**; native function calling + Search grounding (launch)

Reasoning / knowledge:

- GPQA Diamond: **38.0%** (127th/140); MMLU-Pro: 66.0%; MATH: 68.0%; GSM8K: 86.0%; BBH: 84.2%; ARC-AGI: 18.0%; SimpleQA: 27.5%; TruthfulQA: 80.5%; Winogrande: 89.5%
- Chatbot Arena ELO: 1240; MT-Bench: 8.9/10

Coding:

- SWE-bench Verified: **28.0%** (51st/67); LiveCodeBench: 32.0%; HumanEval+: 76.0%

Long context:

- RULER: **85.5%** at 1M class (8th/13); TTFT 85 ms, 220 tok/s (AA aggregates, historical)

Multimodal:

- MathVista: **73.1%** (6th/14)

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. **All unchanged — a shut-down model's evidence is frozen.**

- **Tool use: 55/100.** Native tool plumbing + IFEval 86.6% for its era; zero modern agentic-suite rows.
- **Reasoning: 50/100.** GPQA 38% below the mid-band floor; BBH 84.2% / MATH 68% keep it off the bottom.
- **Context window: 90/100.** 1M window with RULER 85.5% measured.
- **Multimodal: 92/100.** Text/image/audio/video in plus image out; MathVista 73.1% vision depth.
- **Coding: 48/100.** SWE-bench 28% / LCB 32% entry-level.
- **Cost efficiency: 97/100.** Historical $0.10/$0.40 class; caveat: no longer purchasable.
- **Overall Score: 67/100.** (55+50+90+92+48)/5 = 67.0 → 67. Historical reference only — successor path is the 2.5/3.x Flash line.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: second-pass audit (OpenCode Zen `/zen/v1/models` 2026-10-13 — full 2.0 family absent, shutdown status holds; benchmark evidence is a frozen 2025-era set and cannot drift). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
