# GPT-5.2 Codex — findings by GLM 5.3

- Source: OpenAI (`openai/gpt-5.2-codex`, official id `gpt-5.2-codex`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Codex
- **Short description:** OpenAI's most intelligent coding model of the GPT-5.2 generation (December 2025), optimized for long-horizon, agentic coding tasks in Codex or similar environments; succeeded by GPT-5.3 Codex (2026-02-05), which AA flags as the replacement.
- **Provider / access:** OpenAI API — **Responses API only** (Chat Completions not supported); OpenCode Zen `gpt-5.2-codex` (live endpoint 2026-10-23). Reasoning efforts `low`/`medium`/`high`/`xhigh`.
- **Release / knowledge:** released 2025-12-11 (AA, models.dev); knowledge cutoff 2025-08-31 (official docs).
- **IDs:** `gpt-5.2-codex` (Responses API); `opencode/gpt-5.2-codex`. No free lane.
- **Context window:** 400,000 total; 272,000 max input; 128,000 max output (official docs; AA, BenchLM, models.dev agree). Native context compaction for long-horizon work (curated meta).
- **Modalities:** text + image in; text out; reasoning tokens; function calling, web_search, hosted_shell, skills tools; structured outputs; prompt caching (official feature list).
- **Pricing (as of 2026-10-23):** $1.75 in / $14.00 out per 1M; cached input $0.175 (official pricing page + AA agree).
- **Architecture:** proprietary (params undisclosed).

### Raw benchmarks found

> Independent-harness rows dominate (AA, Vals AI, Gert Labs, JobBench paper) — no vendor marketing table relied upon. Conflicting estimates are listed side by side.

Agent / tool use:

- τ²-Bench: **92.1%** (AA, via BenchLM) — near the top of the tau2 distribution
- Gert Labs: **51.79%** (Gert Labs rankings)
- JobBench: **26.0%** (JobBench paper, arXiv 2605.26329) — a hard real-world-jobs agentic bench; low absolute score
- GDPval-AA / Terminal-Bench: no verified public score found (AA page deprecated before its current suite completed)

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (AA)
- HLE: **35.7%** (AA)
- AA-LCR: **82.3%** (AA)
- CritPt: **8.7%** (AA) — weak physics-reasoning signal
- AA-Omniscience: Accuracy **41.1%** / Index **-2.2%** / Hallucination Rate **73.4%** (AA) — weak knowledge-reliability signal
- Artificial Analysis Intelligence Index: **28.5 (BenchLM) vs 29 (AA page) — both flagged ESTIMATED, "independent evaluation forthcoming"** (page deprecated since GPT-5.3 Codex); #100/215 in price class at release
- BenchLM overall: **55.28, #67 of 991** (16/705 benchmarks covered)

Coding:

- SWE-bench Verified: **72.4%** (Vals AI, independent)
- LiveCodeBench: **88.0%** (Vals AI)
- Vibe Code Bench v1.1: **37.91%** (Vals AI) — moderate real-world vibe-coding score

Long context / multimodal:

- AA-LCR **82.3%** (long-context reasoning at 400K window)
- AA-MMMU-Pro: **76.3%** (AA) — image understanding
- AA-IFBench: **77.6%** (AA) — instruction following

Speed (AA, deprecated page): 78.6 tok/s output; TTFT **134.16s** at xhigh (very slow first token — deep reasoning profile).

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-Bench 92.1% is top-tier tool-use performance, with native hosted_shell/skills support; capped by JobBench 26.0% and Gert Labs 51.79% (harder real-world agentic rows sit mid) and a 134s TTFT at xhigh.
- **Reasoning: 72/100.** GPQA-D 89.9% and HLE 35.7% are near the frontier references; capped by CritPt 8.7%, a negative Omniscience Index (-2.2%), and an AA Intelligence Index still only estimated (~29 vs frontier 60+).
- **Context window: 79/100.** Verified 400K total / 272K in / 128K out — upper half of the 200K–500K tier; AA-LCR 82.3% confirms solid long-context reasoning.
- **Multimodal: 66/100.** Text + image in, text out (60–70 band); MMMU-Pro 76.3% is a solid mid-field vision score; no video/audio/PDF.
- **Coding: 84/100.** SWE-bench Verified 72.4% (Vals, independent) sits just under the 74% frontier reference; LiveCodeBench 88.0% is strong; capped by Vibe Code Bench 37.91% on real-world tasks.
- **Cost efficiency: 65/100.** $1.75/$14 — input cheaper than the $3/$15 ≈ 60 tier, output at that tier; cached input $0.175 (90% discount) helps long-horizon agent loops.
- **Overall Score: 76/100.** (78+72+79+66+84)/5 = 75.8 → 76. Best-fit recommendation: a strong paid agentic-coding specialist (near-frontier SWE-bench, top-tier tool calls) — prefer the successor GPT-5.3 Codex for new deployments; watch the slow TTFT at xhigh.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-23
- Method: public internet research (official OpenAI model docs + pricing, BenchLM 16-row tracker, Artificial Analysis model page, Vals AI leaderboards via BenchLM, Gert Labs, JobBench paper, models.dev, live Zen endpoint); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting AA Index estimates (28.5 vs 29) are both listed as estimates.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
