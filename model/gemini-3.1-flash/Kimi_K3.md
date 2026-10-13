# Gemini 3.1 Flash — findings by Kimi K3

- Source: Google / Gemini 3.1 Flash (`gemini-3.1-flash`)
- Date: 2026-10-13 (UTC) — second-pass audit (first pass 2026-09-25; **availability resolved: `gemini-3.1-flash` IS now listed on OpenCode Zen** (absent in the first pass); Artificial Analysis still does not index this ID (404 both passes); no new benchmark coverage — scores unchanged)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** Google's budget model of the Gemini 3.1 generation — high-volume everyday work where speed and cost both matter. Sits above Gemini 3.1 Flash-Lite and below Gemini 3.1 Pro in the 2026 lineup.
- **Provider / access:** Google Gemini API (Chat Completions-compatible + native generateContent); Gemini app (Free tier). **OpenCode Zen now lists `gemini-3.1-flash`** (verified in the 2026-10-13 `/zen/v1/models` listing alongside `gemini-3.1-pro` and `gemini-3.1-flash-lite` — new; first pass found none).
- **Release / knowledge:** ~May 2026 (independent price tracker has logged its API pricing daily since 2026-05-08); knowledge cutoff not publicly verified.
- **IDs:** `google/gemini-3.1-flash`; Zen ID `gemini-3.1-flash`.
- **Context window:** 1,000,000 tokens (independent tracker userightai, 2026-09-25; consistent with Google's line-wide 1M spec).
- **Modalities:** text/image/audio/video in; text out; tool/function calling; JSON mode; reasoning supported (family feature).
- **Pricing (as of 2026-10-13):** $0.50/M input, $3.00/M output (userightai daily-tracked, flat since May 2026 — the same price point now verified for Gemini 3 Flash on AA this session, so the figure is in-family consistent).
- **Architecture:** proprietary (Google); parameter count undisclosed.

### Raw benchmarks found (userightai snapshot 2026-09-25 — no tracker has added rows since)

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found — Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval: no verified public score found (unchanged)
- Chatbot Arena Elo: **1,265** (mid-tier proxy)

Reasoning / knowledge:

- GPQA Diamond: **51%**; MMLU: **84%**; MATH: **78.4%**
- HLE / LCR / MRCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index: none — **AA model page still 404s on 2026-10-13** (both passes; AA promoted successor 3.5-Flash-era coverage instead)

Coding:

- SWE-bench Verified: **35%** (tracker label "SWE-bench")
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- 1M window; no retrieval measurement.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. **All unchanged — second pass resolved availability only.**

- **Tool use: 55/100.** No verified agentic benchmark; only an Arena Elo 1265 mid-tier proxy plus standard Gemini function-calling support.
- **Reasoning: 52/100.** GPQA Diamond 51% below the mid band; MMLU 84% and MATH 78.4% solid; capped by missing HLE.
- **Context window: 95/100.** 1M token tier; no verified ≥98% retrieval at 512K+, so band floor.
- **Multimodal: 90/100.** Text/image/audio/video input; no non-text output.
- **Coding: 53/100.** SWE-bench 35% far below frontier; no LiveCodeBench/SciCode to offset.
- **Cost efficiency: 93/100.** $0.50/$3.00 per 1M — excellent for a 1M-context multimodal model; now also reachable via Zen.
- **Overall Score: 69/100.** Half-up mean of (55 + 52 + 95 + 90 + 53)/5 = 69.0 (unchanged). Best fit: high-volume everyday pipelines (summarization, classification, support automation) where 1M context and multimodal input matter more than peak reasoning or coding depth.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: second-pass public web research (OpenCode Zen `/zen/v1/models` 2026-10-13 — `gemini-3.1-flash` now listed; artificialanalysis.ai `gemini-3-1-flash` checked again — still 404; benchmark snapshot from userightai 2026-09-25 retained unchanged). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
