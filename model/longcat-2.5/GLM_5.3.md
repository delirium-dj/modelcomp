# LongCat 2.5 — findings by GLM 5.3

- Source: Meituan LongCat (`meituan/longcat-2.5-preview` — see identity note; no bare `longcat-2.5` vendor ID exists)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 (bare family name — resolves to LongCat-2.5-Preview)
- **Short description:** IDENTITY NOTE: Meituan ships no bare "LongCat 2.5" SKU. Verified 2026-10-21: the models.dev Meituan catalog lists exactly `meituan/longcat-2.0` and `meituan/longcat-2.5-preview`, and every public hit for "LongCat 2.5" resolves to LongCat-2.5-Preview (the only 2.5-line checkpoint, released 2026-09-25). This file therefore scores the resolved checkpoint — 1.6T-total / ~48B-active MoE with image understanding, a 1M-token context window, positioned for long-horizon agentic coding — and flags the folder name as family shorthand (candidate for the same parking treatment as `gemini-2.5`/`qwen-3.5`, user sign-off required).
- **Provider / access:** Meituan LongCat API Platform, OpenAI-style `https://api.longcat.chat/openai` and Anthropic-style `https://api.longcat.chat/anthropic`, model name `LongCat-2.5-Preview`; 5 hosted providers under models.dev canonical `meituan/longcat-2.5-preview`; OpenCode Zen free lane `longcat-2.5-preview-free` (two-week free run from 2026-09-26, no end date published).
- **Release / knowledge:** 2026-09-25 (the Preview's launch); knowledge cutoff not stated.
- **IDs:** `meituan/longcat-2.5-preview` (models.dev canonical), `LongCat-2.5-Preview` (native API), `longcat-2.5-preview-free` (OpenCode Zen free lane, time-limited).
- **Context window:** 1,000,000 tokens with 131,072 max output — verified on the official docs and models.dev.
- **Modalities:** text + image in (video accepted per docs), text out; reasoning yes; tool calls yes; the model-info API still reports text-only input — docs may be stale.
- **Pricing (as of 2026-10-21):** limited-time discounted $0.30 in / $1.20 out / $0.006 cached per 1M; 5M free tokens for existing users; OpenCode free lane; list price undisclosed (reference ~$0.75/$2.95 estimated).
- **Architecture:** mixture-of-experts, 1.6T total / ~48B active parameters, natively multimodal; weights NOT released (closed, unlike LongCat-2.0's MIT license).

### Raw benchmarks found

> Scores below measure the resolved checkpoint `LongCat-2.5-Preview` — no bare-"LongCat 2.5" benchmark exists anywhere. No official benchmark exists for the checkpoint either; the ONLY verified public measured number is one independent coding-composite leaderboard. Every other standardized row reads "no verified public score found". LongCat-2.0's vendor numbers (SWE-bench Pro 59.5, Terminal-Bench 2.1 70.8, SWE-bench Multilingual 77.3) belong to 2.0 and must NOT be copied over.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Artificial Analysis / BenchLM: no page for either slug (404 on 2026-10-21)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR / CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- Unverified claim noted and rejected: a third-party guide's "88.6% SWE-bench Lite" for this line — Meituan never published it

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found
- AI Coding Daily LLM coding leaderboard (independent, OpenCode harness, measured 2026-10-02, `LongCat-2.5-Preview`): **46.65/80, 36th place** — Laravel code quality 16.98/20, React-TS 16.67/20, bug finding 2.4/20, four project tasks 10.6/20, average 16m 50s per prompt. Same-table anchors: Opus 5.5 (High) 67.41 (2nd), Qwen 3.8 27B (Xhigh) 47.76 (33rd), GLM-5.3-Flash (Max) 47.51 (34th), Gemini-3.1-Pro 42.36 (38th)

Long context:

- 1M-token window (spec-verified on the official docs); no MRCR / RULER / GraphWalks retrieval score published.

### Normalized scores (1–100)

- **Tool use: 45/100.** No verified tool benchmark for the resolved checkpoint; the only evidence is the independent OpenCode-harness run (project tasks 10.6/20, bug finding 2.4/20) — the vendor's long-horizon positioning is unproven. Provisional, capped by absence of evidence.
- **Reasoning: 45/100.** No verified reasoning benchmark exists; indirect signals split (code-quality sub-scores near 84%, bug finding 12%) — a conservative placeholder, not a measurement.
- **Context window: 95/100.** 1,000,000-token window with 131,072 output is spec-verified (≥1M tier); held at 95 because no long-context retrieval score is published.
- **Multimodal: 65/100.** Image input is the checkpoint's headline addition (video per docs); image-in band score, capped by text-only output and no audio.
- **Coding: 55/100.** The one verified number (AI Coding Daily 46.65/80 = 58%) is mid-table: strong code quality, weak bug finding and project completion at 16m 50s per prompt; capped by zero official benchmarks and single-run methodology.
- **Cost efficiency: 95/100.** $0.30/$1.20 promo with $0.006 cached input, 5M free tokens and a free OpenCode lane; capped because it is a disclosed limited-time discount with no published list price.
- **Overall Score: 61/100.** Half-up mean of the five quality dims (45 + 45 + 95 + 65 + 55 = 305, 305/5 = 61.0 → 61); best fit: the resolved Preview is a cheap 1M-context experimental agentic-coding second model — this folder's bare name adds nothing beyond `model/longcat-2.5-preview/` and is surfaced for user-directed parking.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-21
- Method: public internet research (models.dev Meituan catalog, LongCat API Platform docs/pricing via the 2026-10-08 deep-dive, AI Coding Daily leaderboard, Artificial Analysis/BenchLM absence checks; identity resolution verified 2026-10-21 — every "LongCat 2.5" ID resolves to LongCat-2.5-Preview). Scores are normalized 1–100 interpretations, not official vendor scores; Tool/Reasoning are explicitly provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
