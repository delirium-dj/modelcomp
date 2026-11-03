# GPT 5.5 Pro — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-5.5 Pro (`opencode/gpt-5.5-pro`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — pricing + AA-coverage re-check, GPT-6 succession noted, bands unchanged
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

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** OpenAI "Introducing GPT-5.5" — https://openai.com/index/introducing-gpt-5-5/ (released **April 23, 2026**; **"gpt-5.5 … at $5 per 1M input tokens and $30 per 1M output"**; **"Update on April 24, 2026: GPT-5.5 and GPT-5.5 Pro are now available in the API"**) · Artificial Analysis — https://artificialanalysis.ai/models/gpt-5-5-pro (**a GPT-5.5 Pro `(xhigh)` page now exists**, i.e. limited third-party measurement of the exact Pro id) · benchmark corroboration — https://kingy.ai/news/gpt-5-5-benchmarks-revealed… (**"GPT-5.5 Pro at 39.6% [FrontierMath Tier-4] in OpenAI's April 23, 2026 table"** — exact match to this report's Tier-4 row), https://www.vellum.ai/blog/everything-you-need-to-know-about-gpt-5-5 (**ARC-AGI-2 Verified 85.0%**, vs this Pro-variant's 84.2%), https://presenc.ai/research/arc-agi-frontier-benchmark-tracker-2026 · succession — https://openai.com/index/gpt-6-for-everyone/ and https://developers.openai.com/api/docs/models (**GPT-6 global rollout 2026-10-07; "All latest OpenAI models support text and image"**).

**What moved and how it was resolved:**

1. **Reasoning corroborated, not raised.** The exact FrontierMath Tier-4 figure for the **Pro** variant (**39.6%**) is confirmed against OpenAI's launch table, and ARC-AGI-2 84.2% (Pro) sits next to the family's 85.0% Verified — so **Reasoning stays 92** (elite math/ARC, capped by CritPt 30.6% and a single verified agentic datapoint).
2. **AA now measures `(xhigh)`, but coverage is still thin on the scored dims.** Artificial Analysis added a **GPT-5.5 Pro `(xhigh)`** page, improving on the first pass's "no verified public score for this ID" on some rows — but there is still **no verified SWE/LiveCodeBench/SciCode/DeepSWE row and no vision/audio benchmark** for the Pro id, so **Coding stays 85 (provisional)** and **Multimodal stays 15 (text-only per curated meta)**; raising them would require exact-ID rows that do not exist.
3. **Cost better anchored.** Base gpt-5.5 is **$5/$30 per 1M**; the Pro tier is a premium heavy-compute mode above that. With the list now partly verified, **Cost efficiency stays ~35** (premium Pro band; exact Pro per-1M still not published first-party). Excluded from Overall.
4. **Succession (lifecycle).** OpenAI's **GPT-6 line (Astra flagship, GPT-6 Sol/Luna, GPT-6.1 Sol) rolled out globally 2026-10-07** and is text+image, superseding the 5.5 tier for new work. This is a lineup fact, not a capability change to this id; recorded as a planning caveat.

**Scores changed by this pass:** **None.** Tool 80, Reasoning 92, Context 60, Multimodal 15, Coding 85, Cost 35 all re-confirmed; **Overall stays 66/100** (80 + 92 + 60 + 15 + 85 = 332 / 5 = 66.4 → 66, Cost excluded). The curated queue value (91.0) remains far above what a 9-rows-covered, text-only, 128K, no-coding-evidence profile can support.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM's 9 covered rows citing OpenAI "Introducing GPT-5.5", Artificial Analysis, Epoch AI and ARC Prize); several dimensions scored provisionally due to partial coverage; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (OpenAI GPT-5.5 launch post, Artificial Analysis GPT-5.5 Pro (xhigh) page, kingy/vellum/presenc benchmark corroboration, OpenAI GPT-6-for-everyone models docs); FrontierMath Tier-4 39.6% and ARC-AGI-2 ~85% confirmed, base $5/$30 pricing noted, AA (xhigh) coverage added but still no exact-ID coding/vision rows, GPT-6 succession recorded; **no dimension changed and Overall remains 66** (thin-coverage provisional scoring preserved). Prior pass retained verbatim per `RULES.md`.
