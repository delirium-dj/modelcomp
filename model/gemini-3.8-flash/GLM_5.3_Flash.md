# Gemini 3.8 Flash — findings by GLM 5.3 Flash

- Source: Google (`gemini-3.8-flash`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash (current Flash tier; launched with the security-specialist twin Gemini 3.8 Flash Cyber)
- **Short description:** Google's September 2026 Flash: "our best reasoning & coding model yet, at the same speed and low cost of 3.7" — pointed at long-horizon software engineering, autonomous agents and enterprise workflows needing factual rigor. HLE-Verified 54.9% is the headline reasoning number. The 2026-10-05 enrichment pass added the vendor evaluation-report rows and an independent Terminal-Bench 4.0 corrective.
- **Provider / access:** Google — Gemini API (AI Studio) ID `gemini-3.8-flash`; also Android Studio, Google Antigravity, Gemini Enterprise, and the Gemini app/Search for AI Pro/Ultra subscribers. `generateContent` API.
- **Release / knowledge:** GA 2026-09-02. Knowledge cutoff **March 2026**, some domains limited to January 2025 (model card).
- **IDs:** `gemini-3.8-flash` (Google). Free tier available in Google AI Studio. (Note: the 3.8 Flash **Cyber** variant is NOT generally available — vetted defenders only, via Google's Fairwind Program.)
- **Context window:** 1,000,000-token input, 64,000-token max output (Google launch data via ai-tldr).
- **Modalities:** text, image, audio, video in; text out. Thinking levels low/medium/high (**minimal not supported** on this model); built-in tool suite carried over from 3.7 (function calling, structured output, code execution, computer use, search grounding).
- **Pricing (as of 2026-09-18):** $0.75 in / $3.75 out per 1M through 2026-12-31, rising to $1.50/$7.50 on 2027-01-01 (same intro schedule as 3.7 Flash). Free tier in AI Studio.
- **Architecture:** proprietary, parameters undisclosed; based on Gemini 3.7 Flash per the model card (no new pretraining run described).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (Google model evaluation report via emergent.sh, 2026-09-03) — fills the 2026-09-18 "no 3.8-specific agentic number" gap
- OSWorld-2.0: **59.0%** (same source)
- GDPval-AA v2: **1545 Elo** (same source)
- Terminal-Bench 4.0 (independent AA harness): **19.7%** — vs GPT-6 Astra 59.6 and Claude Fable 5.1 55.1 (flowtivity.ai "TB4 score crash" analysis, 2026-09-10, upd 2026-09-19) — a corrective showing severe harness dependence vs the vendor-run rows
- Vals Finance Agent V2 / Harvey legal agent: **beats Gemini 3.7 Flash and other frontier models** (Google launch post — qualitative)
- Prompt-injection robustness: **significant improvement** per Gray Swan measurements (launch post)
- Tau / Claw-Eval: no verified public score found

Reasoning / knowledge:

- HLE-Verified: **54.9%** — Google's headline multi-step reasoning evidence (launch post via ai-tldr)
- Artificial Analysis Intelligence Index: **59** (model evaluation report via emergent.sh, 2026-09-03) — fills the 2026-09-18 gap
- GPQA / MMMLU / ARC-AGI: no verified public score found

Coding:

- DeepSWE v1.1: **73.7%** (Google model evaluation report via emergent.sh, 2026-09-03) — replaces the launch post's qualitative "outperforms most larger frontier models"
- SWE-Bench Pro / FrontierCode / Code Arena: no 3.8-specific published numbers found

Long context:

- Window: **1M tokens** in / 64K out; MRCR/RULER at window length: no verified public score found

### Normalized scores (1–100)

- **Tool use: 87/100.** The vendor rows are excellent (TB2.1 89.4, OSWorld-2.0 59.0, GDPval-AA v2 1545), but the independent TB4.0 reading of 19.7% — barely a third of Fable 5.1's 55.1 on the same harness — is a serious corrective on harness dependence, so the score lands below the 2026-09-18 qualitative-only 94 despite the gap fills.
- **Reasoning: 91/100.** HLE-Verified 54.9% remains the strongest single reasoning datapoint in this repo's coverage, now corroborated by an AA Intelligence Index of 59 (top of the Flash tier); GPQA still unpublished.
- **Context window: 98/100.** 1M input / 64K output at the top tier of this repo; no window-length retrieval score published.
- **Multimodal: 88/100.** Text + image + audio + video in; text-only output; no published vision benchmark.
- **Coding: 92/100.** DeepSWE v1.1 73.7% is a concrete frontier-class agentic-coding number replacing the qualitative claim, on top of the 3.7 base (DeepSWE 65.3, TB2.1 85.8); SWE-Pro/LiveCodeBench gaps remain.
- **Cost efficiency: 88/100.** Free tier in AI Studio plus $0.75/$3.75 intro — the cheapest frontier-class rate measured here; the scheduled 2027 doubling to $1.50/$7.50 is the cap.
- **Overall Score: 91.2/100.** Five-dim mean per `RULES.md` (Cost excluded): (87 + 91 + 98 + 88 + 92) / 5 = 456/5 = 91.2. Best fit: still the current best Flash — frontier reasoning/coding at Flash price through 2026 — but buy it for vendor-harness workloads, not independent TB4.0-style terminal sweeps; budget for the 2027 price doubling.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-10-05
- Method: public internet research (2026-09-18 pass: ai-tldr.dev Gemini 3.8 Flash page quoting Google's model card, launch post of 2026-09-02 and Gemini API pricing; 2026-10-05 approved enrichment pass: Google model evaluation report via emergent.sh 2026-09-03, independent TB4.0 analysis via flowtivity.ai 2026-09-10/19); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
