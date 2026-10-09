# Big Pickle — findings by Step 5 Preview

- Source: OpenCode Zen stealth model (`big-pickle`; lab unknown)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (OpenCode's long-running stealth model)
- **Short description:** The mystery model of OpenCode Zen — listed **2025-10-17** and still nominally live and free twelve months later, though usage data now shows it effectively dormant (0 tokens, 0 unique users in the latest 2-month window, 1,203 lifetime completed sessions). Its identity was confirmed once and then rotated away: an OpenCode collaborator answered "Yes it is" when asked directly if it was Zhipu's GLM-4.6 (2025-11-13), with the maintainer noting "if a new oss model comes out thats way better wed prolly switch to it" — and community forensics has since tracked leaks pointing to DeepSeek-V4-Flash (May–June 2026) and most recently Ox Alpha (Oct 2026), leading some users to conclude it is "just a router to a new stealth or test models." Official description: "a reasoning model for deliberate analysis, multi-step problem solving, and tool use," free "for a limited time" so the team can "collect feedback and improve the model" — and OpenCode's own docs carry a privacy exception: "During its free period, collected data may be used to improve the model."
- **Provider / access:** OpenCode Zen only (`https://opencode.ai/zen/v1/chat/completions`); no weights; community notes it supports chat/completions but not `/v1/responses`.
- **Release / listing:** 2025-10-17 (models.dev catalog; first commit "Update zen model").
- **Context window:** 200,000 tokens (160,000 input limit); max output 32,000 — the catalog entry said 128,000 from launch until mid-2026.
- **Modalities:** Text in → text out; interleaved reasoning (`reasoning_content`), tool calling, structured outputs.
- **Pricing (as of 2026-10-09):** $0/$0 free, rate-limited, with the data-collection caveat.

### Raw benchmarks found

Third-party / community (no vendor, no AA):

- **SWE Atlas Codebase QnA: 50.81% (63/124)** — mini-swe-agent 2.4.6 on Harbor v0.18.0, single trial, self-reported, $0 cost; ranked below Opus 5 (63.17) and Opus 4.8 (57.26), above GLM 5.2 (48.12) and GPT-5.6-Sol (46.00); by language TS 58.1 / Python 55.2 / Go 50.0 / C 38.5 (single-trial SE ≈ ±4.5, not Scale-verified)
- **ORPT-Bench: composite 0.615, 67% task success, 15.39 requests per solved task, $0** — below gpt-5.4-nano (0.789) and kimi-k2.5 (0.785), above gpt-5.4 (0.609), claude-sonnet-4-6 (0.593) and glm-5.1 (0.547)
- GPQA, SWE-bench Verified, Terminal-Bench, MMLU, Artificial Analysis: **no verified public score found** (figures circulating for "Big Pickle" on some wikis are misattributed GLM-5 numbers)
- SMF Clearinghouse Official A board: no coverage for this model

### Normalized scores (1–100)

- **Tool use: 48/100.** The ORPT-Bench composite (0.615, 67% success) and SWE-Atlas 50.8% show functional multi-step tool use — mid-low, and both runs predate the current (possibly Ox Alpha) endpoint, so they may not describe what is served today.
- **Reasoning: 48/100.** No GPQA/HLE/AIME figure exists for the model itself; inherited reasoning is whatever the current backend provides (GLM-4.6-era at launch, DeepSeek/Ox-Alpha-era now), scored mid-low on evidence.
- **Context window: 66/100.** 200K nominal with a 160K input cap is the 100K–200K band's top (50–64) — the shrink from the original 128K-output listing suggests the route has been constrained, not expanded.
- **Multimodal: 12/100.** Text-only — the methodology's text-only band (10–20).
- **Coding: 48/100.** SWE-Atlas Codebase QnA 50.8% is the only coding datapoint — real repository-comprehension ability a notch above GLM-5.2's mini-swe-agent result, from a single unverified trial.
- **Cost efficiency: 95/100.** Free ($0/$0) — the methodology's $0 tier docked five points for the explicit data-collection terms and rate limiting.
- **Overall Score: 44/100.** Best-fit recommendation: a free stealth experiment — intermittent history as GLM-4.6 / DeepSeek-V4-Flash / possibly Ox Alpha, competent mid-tier tool use at zero price; treat every number as describing a backend that has since been swapped.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (OpenCode Zen docs + usage-data JSON, models.dev catalog entry and commit history, GitHub issue #4276 maintainer confirmation, community SWE-Atlas/ORPT-Bench runs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Big_Pickle_2.md`, using the same headings.
