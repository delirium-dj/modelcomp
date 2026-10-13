# Solar Pro 4 — findings by Kimi K3

- Source: Upstage / Solar Pro 4 (`solar-pro-4`)
- Date: 2026-10-13 (UTC) — second-pass audit (first pass 2026-09-24; **pricing still unverified — not on OpenRouter, not indexed by Artificial Analysis as of 2026-10-13**; benchmark snapshot unchanged, scores hold)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage's 2026 flagship — strong AIME (95.3%) and Korean-language performance (KMMLU-Pro 79.2%) with 512K context; low hallucination (24.4%) at low knowledge accuracy (18.9%).
- **Provider / access:** Upstage Solar API (`solar-pro-4`, OpenAI-compatible); launch post: upstage.ai/blog/en/solar-pro-4. **Second-pass tracker check (2026-10-13): no OpenRouter route; Artificial Analysis returns 404** — Upstage remains API-first-party-only, consistent with the first pass finding no broad gateway coverage.
- **Release / knowledge:** 2025–2026 (exact date not verified in either pass); cutoff not verified.
- **IDs:** `upstage/solar-pro-4` (not on Zen, 2026-10-13 listing).
- **Context window:** 512K tokens (benchlm.ai, first-pass snapshot).
- **Modalities:** text in/out (single Design Arena row); reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-13):** still no verified public price in my sources (both passes; first-party docs not machine-readable via my fetch path).
- **Architecture:** proprietary (Upstage).

### Raw benchmarks found (benchlm.ai, first-pass snapshot — no tracker added coverage since)

Agent / tool use:

- Terminal-Bench 2.1: **57.0%**; MCP Atlas: **61.4%**; BrowseComp: **49.2%**; APEX-Agents: **18.7%**
- Tau2/Tau3 / GDPval / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.0–89.1%** (GPQA-D / AA)
- HLE (AA-HLE): **29.2%**; AA-LCR: **71.0%**; CritPt: **5.4%**
- Artificial Analysis Intelligence Index: **28.1**; BenchLM unranked (partial coverage)
- AA-Omniscience Accuracy / Hallucination Rate: **18.9% / 24.4%**
- AIME 2026: **95.3%**; MMLU-Pro: **86.3%**; KMMLU-Pro: **79.2%**

Coding:

- SWE-bench Verified: **70.6%**; LiveCodeBench: **87.8%**; AA-SciCode: **44.6%**
- DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 71.0% within 512K; no MRCR/RULER rows.

Multimodal:

- Design Arena Website: **1187 Elo**; otherwise text-only.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. **All unchanged — zero new measurements or verifiable pricing exists since the first pass.**

- **Tool use: 64/100.** MCP Atlas 61.4%, TB 2.1 57.0%; capped by APEX 18.7% and missing τ²/GDPval rows.
- **Reasoning: 72/100.** AIME 95.3%, GPQA ~89%, MMLU-Pro 86.3%; capped by HLE 29.2%, CritPt 5.4%, AA Index 28.1.
- **Context window: 74/100.** 512K window with LCR 71.0%.
- **Multimodal: 50/100.** Effectively text-first; one Design Arena row only.
- **Coding: 74/100.** LiveCodeBench 87.8%, SWE-bench Verified 70.6%; capped by SciCode 44.6%.
- **Cost efficiency: 65/100.** Price unverified for a second consecutive pass — Solar models historically value-oriented — provisional.
- **Overall Score: 67/100.** Mean of the five quality dims (64+72+74+50+74)/5 = 66.8 → 67 (unchanged). Best fit: Korean-market + math-heavy text workloads; coding decent at 512K.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: second-pass public web research (tracker availability checks 2026-10-13 — OpenRouter route absent/empty, Artificial Analysis 404, Zen listing absent; no new benchmark rows exist). First-pass benchlm.ai rows retained as that snapshot. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
