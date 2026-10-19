# Big Pickle — findings by Step 5 Preview

- Source: OpenCode Zen stealth model (`big-pickle`; lab unknown)
- Date: 2026-10-19 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (OpenCode's long-running stealth model)
- **Short description:** The mystery model of OpenCode Zen — listed **2025-10-17** and still nominally live and free twelve months later, though usage data showed it effectively dormant (0 tokens, 0 unique users in the latest 2-month window as of 2026-10-09, 1,203 lifetime completed sessions). Its identity was confirmed once and then rotated away: an OpenCode collaborator answered "Yes it is" when asked directly if it was Zhipu's GLM-4.6 (2025-11-13), with the maintainer noting "if a new oss model comes out thats way better wed prolly switch to it" — and community forensics has since tracked leaks pointing to DeepSeek-V4-Flash (May–June 2026) and most recently Ox Alpha (Oct 2026), leading some users to conclude it is "just a router to a new stealth or test models." Official description: "a reasoning model for deliberate analysis, multi-step problem solving, and tool use," free "for a limited time" so the team can "collect feedback and improve the model" — and OpenCode's own docs carry a privacy exception: "During its free period, collected data may be used to improve the model."
- **Provider / access:** OpenCode Zen only (`https://opencode.ai/zen/v1/chat/completions`); no weights; community notes it supports chat/completions but not `/v1/responses`. **Re-verified 2026-10-19: still listed live on the Zen models endpoint.**
- **Release / listing:** 2025-10-17 (models.dev catalog; `last_updated` still 2025-10-17 — the entry has never been revised).
- **Context window:** 200,000 tokens (160,000 input limit); max output 32,000 — **re-verified 2026-10-19 against the models.dev catalog JSON** (unchanged; the entry said 128,000 from launch until mid-2026).
- **Modalities:** Text in → text out; interleaved reasoning (`reasoning_content`), tool calling, structured outputs.
- **Pricing (as of 2026-10-19):** $0/$0 free, rate-limited, with the data-collection caveat.

### Raw benchmarks found

Third-party / community (no vendor, no AA). **Re-verified 2026-10-19 against the source repos: no new benchmark data has appeared since 2026-10-09.**

- **SWE Atlas Codebase QnA: 50.81% (63/124)** — run 2026-08-11, mini-swe-agent 2.4.6 on Harbor v0.18.0, single trial, self-reported, $0 cost (674M input / 4.3M output tokens consumed); ranked below Opus 5 (63.17) and Opus 4.8 (57.26), above GLM 5.2 (48.12) and GPT-5.6-Sol (46.00); by language TS 58.1 / Python 55.2 / Go 50.0 / C 38.5 (single-trial SE ≈ ±4.5, not Scale-verified). The repo documents two scoring conventions: the standard 50.81% and a **strict lower bound of 61/124 = 49.2%** when two tasks with unscored rubrics are treated as failures. It also records that leaked provider errors and API response signatures **suggest DeepSeek infrastructure** behind the alias at run time.
- **ORPT-Bench: composite 0.615, 67% task success, 15.39 requests per solved task, $0** — below gpt-5.4-nano (0.789) and kimi-k2.5 (0.785), above gpt-5.4 (0.609), claude-sonnet-4-6 (0.593) and glm-5.1 (0.547)
- GPQA, SWE-bench Verified, Terminal-Bench, MMLU, Artificial Analysis: **no verified public score found** (figures circulating for "Big Pickle" on some wikis are misattributed GLM-5 numbers)
- SMF Clearinghouse Official A board: no coverage for this model

### Normalized scores (1–100)

Re-run verdict 2026-10-19: **scores unchanged** — the three sources re-checked today (models.dev catalog, live Zen models endpoint, SWE-Atlas eval repository) confirm the previous evidence and add no new measurements, so no recalculation is supported.

- **Tool use: 48/100.** The ORPT-Bench composite (0.615, 67% success) and SWE-Atlas 50.8% show functional multi-step tool use — mid-low, and both runs predate the current (possibly Ox Alpha) endpoint, so they may not describe what is served today.
- **Reasoning: 48/100.** No GPQA/HLE/AIME figure exists for the model itself; inherited reasoning is whatever the current backend provides (GLM-4.6-era at launch, DeepSeek/Ox-Alpha-era now), scored mid-low on evidence.
- **Context window: 66/100.** 200K nominal with a 160K input cap is the 100K–200K band's top (50–64) — the shrink from the original 128K-output listing suggests the route has been constrained, not expanded.
- **Multimodal: 12/100.** Text-only — the methodology's text-only band (10–20).
- **Coding: 48/100.** SWE-Atlas Codebase QnA 50.8% (49.2% strict) is the only coding datapoint — real repository-comprehension ability a notch above GLM-5.2's mini-swe-agent result, from a single unverified trial.
- **Cost efficiency: 95/100.** Free ($0/$0) — the methodology's $0 tier docked five points for the explicit data-collection terms and rate limiting.
- **Overall Score: 44/100.** Best-fit recommendation: a free stealth experiment — intermittent history as GLM-4.6 / DeepSeek-V4-Flash / possibly Ox Alpha, competent mid-tier tool use at zero price; treat every number as describing a backend that has since been swapped.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-10-19
- Method: public internet research, re-run 2026-10-19 — models.dev catalog JSON (specs/pricing/status), the live OpenCode Zen models endpoint (route still listed), and the community SWE-Atlas eval repository (full result set and caveats); original run used OpenCode Zen docs + usage-data JSON, models.dev commit history, GitHub issue #4276 maintainer confirmation, and community SWE-Atlas/ORPT-Bench runs. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Big_Pickle_2.md`, using the same headings.
