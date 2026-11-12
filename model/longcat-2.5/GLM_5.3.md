# LongCat-2.5-Preview — findings by GLM 5.3

- Source: Meituan LongCat (`meituan/longcat-2.5-preview`, native `LongCat-2.5-Preview`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.5-Preview
- **Short description:** Meituan's preview multimodal agent model (September 2026): the 1.6T-total / ~48B-active MoE skeleton of LongCat-2.0 with image understanding bolted on, a 1M-token context window, and deep optimization for agentic coding environments (Claude Code, OpenCode). Top use case: a cheap experimental second model for long-horizon, screenshot-driven coding agents.
- **Provider / access:** Meituan LongCat API Platform, OpenAI-style `https://api.longcat.chat/openai` and Anthropic-style `https://api.longcat.chat/anthropic`, model name `LongCat-2.5-Preview`; 5 hosted providers under models.dev canonical `meituan/longcat-2.5-preview`; OpenCode Zen free lane `longcat-2.5-preview-free` (two-week free run from 2026-09-26, no end date published).
- **Release / knowledge:** released 2026-09-25 on the LongCat API Platform (official X announcement); knowledge cutoff not stated.
- **IDs:** `meituan/longcat-2.5-preview` (models.dev canonical), `LongCat-2.5-Preview` (native API), `longcat-2.5-preview-free` (OpenCode Zen free lane, time-limited).
- **Context window:** 1,000,000 tokens with 131,072 max output — verified on the official docs and models.dev (a 256K figure in one catalog is wrong per the official docs).
- **Modalities:** text + image in (video accepted per docs), text out; reasoning yes (long-horizon agent flow); tool calls yes (Claude Code/OpenCode integrations); JSON mode not documented; the model-info API still reports text-only input — docs may be stale, a real image request is the only reliable check.
- **Pricing (as of 2026-10-21):** limited-time discounted price $0.30 in / $1.20 out / $0.006 cached per 1M (¥2/¥8/¥0.04); 5M free tokens for existing users; OpenCode free lane; reference pre-discount price estimated near $0.75 in / $2.95 out (third-party listing) — the real list price is undisclosed.
- **Architecture:** mixture-of-experts, 1.6T total / ~48B active parameters (official X; a "16T" headline is a tenfold error), natively multimodal; weights NOT released (closed, unlike LongCat-2.0's MIT license) — no param breakdown, license, or model card published.

### Raw benchmarks found

> No official benchmark exists for this preview. The ONLY verified public measured number is one independent coding-composite leaderboard; every other standardized row reads "no verified public score found". LongCat-2.0's vendor numbers (SWE-bench Pro 59.5, Terminal-Bench 2.1 70.8, SWE-bench Multilingual 77.3) are 2.0-only and must NOT be copied over as 2.5-Preview scores.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Indirect (provisional): the sole independent agentic-coding run (AI Coding Daily, OpenCode harness, 2026-10-02) scored project-style tasks 10.6/20 (~53%) and bug-finding 2.4/20 — weak tool-use signals, single run, non-standard harness

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no page (both 404 on 2026-10-21)
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- Unverified claim noted and rejected: one third-party guide shows "88.6% SWE-bench Lite" — Meituan never published it, source unclear, treated as a rumor

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench / DeepSWE / Coding Index: no verified public score found
- AI Coding Daily LLM coding leaderboard (independent, OpenCode harness, measured 2026-10-02): **46.65/80, 36th place** — Laravel code quality 16.98/20, React-TS code quality 16.67/20, bug finding 2.4/20, four project tasks 10.6/20, average 16m 50s per prompt. Same-table anchors: Opus 5.5 (High) 67.41 (2nd, Claude Code harness), Qwen 3.8 27B (Xhigh) 47.76 (33rd), GLM-5.3-Flash (Max) 47.51 (34th), Gemini-3.1-Pro 42.36 (38th)

Long context:

- 1M-token window (spec-verified, no retrieval score reported): no MRCR / RULER / GraphWalks score published — no long-context retrieval verification beyond the headline window.

### Normalized scores (1–100)

- **Tool use: 45/100.** No verified public tool benchmark exists; the only evidence is one independent OpenCode-harness run in which agentic project tasks scored 10.6/20 and bug finding 2.4/20 — the vendor's long-horizon terminal/browser/GUI positioning remains marketing until measured. Heavily provisional, capped by absence of evidence.
- **Reasoning: 45/100.** No verified public reasoning benchmark exists (GPQA/HLE all absent); indirect signals split — everyday code quality near 84% on the two code-quality sub-scores, but 12% bug-finding accuracy — so this score is a conservative placeholder, not a measurement.
- **Context window: 95/100.** 1,000,000-token window with 131,072 output is spec-verified on the official docs (≥1M tier = 95–100); held at 95 because no ≥98% retrieval-at-512K score or any long-context recall number is published.
- **Multimodal: 65/100.** Image input is the headline addition (base64/URL, both API styles), video accepted per docs; scored in the image-in band (60–70) — capped by text-only output, no audio, and a model-info API that still reports text-only input.
- **Coding: 55/100.** The one verified number (AI Coding Daily 46.65/80 = 58%) sits mid-table: strong code-quality sub-scores (16.98 + 16.67 of 40) but weak bug finding (2.4/20) and project completion (10.6/20) at 16m 50s per prompt; capped by zero official benchmarks and a single-run, single-site, mixed-harness methodology.
- **Cost efficiency: 95/100.** $0.30/$1.20 promo with $0.006 cached input is near the value frontier, plus 5M free tokens and a free OpenCode lane; capped because it is a disclosed limited-time discount (reference price likely 2–3×) with no published list price.
- **Overall Score: 61/100.** Half-up mean of the five quality dims (45 + 45 + 95 + 65 + 55 = 305, 305/5 = 61.0 → 61); best fit: a cheap 1M-context experimental second model for screenshot-driven agentic coding — wait for official benchmarks and a final release before foundation use.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-21
- Method: public internet research (LongCat API Platform docs and pricing via the 2026-10-08 Gardenee/agmazon deep-dive with its sources list, models.dev catalog, AI Coding Daily leaderboard, Artificial Analysis/BenchLM absence checks); scores are normalized 1–100 interpretations, not official vendor scores — this preview has no official benchmark set, so Tool/Reasoning scores are explicitly provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
