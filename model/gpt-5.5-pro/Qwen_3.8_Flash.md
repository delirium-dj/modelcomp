# GPT 5.5 Pro — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-5.5 Pro (`opencode/gpt-5.5-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.5 Pro
- **Short description:** The "Pro" heavy-reasoning variant of OpenAI's GPT-5.5 family — a slower, pricier, higher-compute mode aimed at the hardest math/analysis problems. Text-only and shorter-context than the base sibling, so it trades breadth (multimodal, long window) for peak reasoning depth.
- **Provider / access:** OpenAI Responses API (`gpt-5.5-pro`); listed on OpenCode Zen as `opencode/gpt-5.5-pro`. Reasoning/"pro" compute tier.
- **Release / knowledge:** 2026 (GPT-5.5 family, "Introducing GPT-5.5"); knowledge cutoff not disclosed.
- **IDs:** `openai/gpt-5.5-pro` / `opencode/gpt-5.5-pro`.
- **Context window:** 128,000 total (curated model meta). Note: some trackers show a generic "1M" family default; the curated 128K is used here and no long-context retrieval evidence was verified.
- **Modalities:** text in / text out (curated meta); reasoning on; tool calls available but no verified vision/audio benchmarks found for this exact ID.
- **Pricing (as of 2026-10-02):** Premium "Pro" compute tier ("standard pricing" per meta, exact rate unverified in fetched sources); Pro modes historically sit at high per-1M rates.
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (9 of 618 rows covered for this ID), citing OpenAI "Introducing GPT-5.5", Artificial Analysis, Epoch AI and ARC Prize (fetched 2026-10-02). Coverage is partial, so several dimensions are scored provisionally.

Agent / tool use:

- BrowseComp: **90.1%** (OpenAI) — the only verified agentic/tool benchmark for this exact ID
- Terminal-Bench / Tau3 / Toolathon / GDPval / Claw-Eval / MCP-Atlas: **no verified public score found** for `gpt-5.5-pro`

Reasoning / knowledge:

- ARC-AGI-1 / ARC-AGI-2: **95.0% / 84.2%** (ARC Prize leaderboard)
- HLE (w tools / no tools): **57.2% / 43.1%** (OpenAI)
- FrontierMath (legacy / v2 Tiers1-3 / v2 Tier-4): **52.4% / 51.0% / 39.6%** (OpenAI; Epoch AI)
- CritPt: **30.6%** (Artificial Analysis)
- GPQA Diamond: no verified public score found for this exact ID

Coding:

- SWE-bench / LiveCodeBench / SciCode / DeepSWE / Terminal-Bench: **no verified public score found** for `gpt-5.5-pro` (scored provisionally from reasoning proxies only)

Long context:

- No long-context retrieval reported for this ID (128K text window).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Thin benchmark coverage drives several provisional scores — flagged inline.

- **Tool use: 80/100.** BrowseComp 90.1% is frontier web-agent performance, but no verified Terminal-Bench/Tau3/Toolathon/GDPval exist for this exact ID, so breadth of tool-calling is unproven — provisional within the strong band.
- **Reasoning: 92/100.** ARC-AGI-2 84.2%, HLE 57.2% and FrontierMath 52.4% (Tier-4 39.6%) are elite deep-reasoning marks; capped only by CritPt 30.6% and a single verified agentic datapoint.
- **Context window: 60/100.** 128K total window lands in the 100K–200K band (50–64); no ≥98% long-context retrieval evidence, so mid-band. (Trackers showing "1M" reflect a family default, not a verified pro spec.)
- **Multimodal: 15/100.** Text-only in/out per curated meta and no verified vision/audio benchmarks found — text-only band (10–20).
- **Coding: 85/100.** Provisional: no verified SWE/LiveCodeBench/SciCode for this exact ID; inferred from elite math/ARC reasoning and the GPT-5.5 family, which is a known-strong coding line. Not an official number.
- **Cost efficiency: 35/100.** Premium Pro compute tier (exact per-1M unverified in fetched sources; scored provisionally against historical Pro-tier $10/$50-class pricing). Cost is excluded from Overall.
- **Overall Score: 66/100.** Mean of Tool 80, Reasoning 92, Context 60, Multimodal 15, Coding 85 = 66.4 → 66. Best fit: deep single-shot reasoning/math on text where accuracy outweighs cost, breadth and long window; the thin public harness coverage and text-only 128K profile keep its holistic score well below its raw reasoning strength — re-verify with coding/tool benchmarks before trusting it as an agentic or multimodal generalist.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM's 9 covered rows citing OpenAI "Introducing GPT-5.5", Artificial Analysis, Epoch AI and ARC Prize); several dimensions scored provisionally due to partial coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
