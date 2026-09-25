# Gemini 3.1 Flash — findings by Kimi K3

- Source: Google / Gemini 3.1 Flash (`gemini-3.1-flash`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** Google's budget model of the Gemini 3.1 generation — high-volume everyday work where speed and cost both matter. Sits above Gemini 3.1 Flash-Lite and below Gemini 3.1 Pro in the 2026 lineup.
- **Provider / access:** Google Gemini API (`https://ai.google.dev/`, Chat Completions-compatible + native generateContent), also via Gemini app (Free tier, limited access) and Google One AI Premium ($19.99/mo).
- **Release / knowledge:** ~May 2026 (independent price tracker has logged its API pricing daily since 2026-05-08); knowledge cutoff not publicly verified.
- **IDs:** `google/gemini-3.1-flash` (Gemini API). No OpenCode Zen Free ID found.
- **Context window:** 1,000,000 tokens (per independent tracker userightai model page, verified 2026-09-25; consistent with Google's 2026 documentation that the whole 3.x line ships 1M).
- **Modalities:** text/image/audio/video in; text out; tool/function calling; JSON mode; reasoning supported (family feature). Per tracker's "strong multimodal support across text, images, audio, and video".
- **Pricing (as of 2026-09-25):** $0.50/1M input, $3.00/1M output (userightai, tracked daily, flat since May 2026). Free-tier access exists via Gemini app with limited quota.
- **Architecture:** proprietary (Google); parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Chatbot Arena Elo: **1,265** (userightai model page, 2026-09-25; mid-tier overall — provisional proxy for broad task competence)

Reasoning / knowledge:

- GPQA Diamond: **51%** (userightai, 2026-09-25)
- MMLU: **84%** (userightai, 2026-09-25)
- MATH: **78.4%** (userightai, 2026-09-25)
- HLE: **no verified public score found**
- LCR / MRCR / CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found** (AA model page for this exact ID returned 404 at research time)

Coding:

- SWE-bench Verified: **35%** (userightai, 2026-09-25; tracker label "SWE-bench")
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- MRCR / RULER at 1M: **no long-context retrieval score reported** for this exact ID; 1M window verified by tracker + Google's line-wide 1M documentation.

### Normalized scores (1–100)

> Methodology: `../../model-comparison.md`. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 55/100.** No verified agentic benchmark (TB2.1/Tau3/GDPval all missing); only an Arena Elo 1265 mid-tier proxy plus standard Gemini function-calling support. Capped by absence of any measured tool-use number.
- **Reasoning: 52/100.** GPQA Diamond 51% is below the mid band (60–80% → 55–65); MMLU 84% and MATH 78.4% are solid but the frontier-relevant GPQA/HLE pair is weak/absent. Capped by GPQA 51% and missing HLE.
- **Context window: 95/100.** 1M token tier (95–100 band); no verified ≥98% retrieval at 512K+ (would be needed for 100), so scored at the band floor.
- **Multimodal: 90/100.** Text/image/audio/**video** input verified by tracker — audio-in coverage lands in the 90–100 band; no non-text output (image-gen) confirmed for this ID, holding it at the band floor.
- **Coding: 53/100.** SWE-bench 35% is far below frontier (70%+ → 90–100) and below the mid band; no LiveCodeBench/SciCode to offset. Capped by the single low verified number.
- **Cost efficiency: 93/100.** $0.50/$3.00 per 1M sits between the "~$0.60/$2.20 ≈ 92" and "~$0.10/$0.20 ≈ 97–99" reference points; excellent value for a 1M-context multimodal model.
- **Overall Score: 69/100.** Half-up mean of (55 + 52 + 95 + 90 + 53)/5 = 69.0. Best fit: high-volume everyday pipelines (summarization, classification, support automation) where 1M context and multimodal input matter more than peak reasoning or coding depth.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-25
- Method: public internet research (userightai.com model page with daily price tracking + published benchmarks; Google's Gemini documentation ecosystem). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
