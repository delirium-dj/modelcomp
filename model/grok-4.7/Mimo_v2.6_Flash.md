# Grok 4.7 — findings by Mimo v2.6 Flash

- Source: xAI (SpaceXAI)/Grok 4.7
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** SpaceXAI's (xAI) most capable model for coding and knowledge work, released 2026-09-21 — a larger base model with a longer reinforcement-learning run aimed at tasks that take hours, self-checking, and calibrated safeguards. Sold as "twice the work at the same price as Grok 4.6".
- **Provider / access:** xAI API (`grok-4.7`, both Responses API and Chat Completions), Cursor, Grok Build (default model), plus routers/cloud platforms. Not listed in the OpenCode Zen docs model table as of 2026-09-25.
- **Release / knowledge:** 2026-09-21 (xAI launch post; delays moved the date several times since late July). Knowledge cutoff May 2026 (xAI models documentation).
- **IDs:** `grok-4.7` (API defaults to `high` effort; `low` / `medium` / `high` / `xhigh` available). The "Grok 4.7 Fast" twin (2× speed, 2× price) exists in Cursor/Grok Build but has **no separate API model ID** in the xAI models table. **No Free ID exists on OpenCode Zen** as of 2026-09-25.
- **Context window:** 500,000 tokens (xAI models documentation, unchanged from Grok 4.6); max output not separately published.
- **Modalities:** text + image in; text out; reasoning effort low/medium/high/xhigh (default high); function calling, structured outputs, web search, X search, code execution.
- **Pricing (as of 2026-09-25):** below a 200K-token prompt: $2.00 input / $0.50 cached input / $6.00 output per 1M tokens; at ≥200K prompts the **entire request** reprices to $4.00 / $1.00 / $12.00 (whole-request, not marginal). US-only endpoint adds 10%; "Fast" variant bills 2× standard in Cursor/Grok Build. Identical rate card to Grok 4.6.
- **Architecture:** proprietary; xAI states a larger base model and longer RL run than 4.6, with training weighted toward multi-hour problems. Parameter counts reported by CNET could not be confirmed on any xAI page.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Missing rows = no verified public score found.
> Caveat: xAI's own comparison table runs Grok 4.7 at **xhigh** effort and Grok 4.6 at **high**, so part of each gain is reasoning budget rather than model.

Agent / tool use:

- Terminal-Bench 4.0: **37.6%** (xAI launch table, xhigh; some coverage rounds to 38.0%) — vs GPT-5.6 Sol 37.3%, Claude Fable 5.1 57.9%
- Terminal-Bench 4.0 (Artificial Analysis, independent): **33%** in the native Grok Build harness; **26%** under AA's standardized setup (vs DeepSeek V4.1 Flash 27%) — AA September 2026 evaluation
- AA-Briefcase v1.1: **1657 Elo** (xAI table; Fable 5.1 1678, GPT-5.6 Sol 1487)
- Harvey Legal Agent Benchmark: **19.6%** (xAI table; Fable 5.1 6.7%, GPT-5.6 Sol 2.5%)
- Tau3 / Tau2-Bench / GDPval-AA / Claw-Eval: **no verified public score found** (not published for 4.7)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46** (xhigh; independent, September 2026) — up from 44 for Grok 4.6 at high, vs GPT-5.6 Sol 47. AA measured **81,000 output tokens per task** at xhigh (66,000 at high) and **$3.74 per task** vs $1.99 for GPT-5.6 Sol
- AA long-document reasoning: **77%** (vs DeepSeek V4.1 Flash 84% in the same AA run)
- HealthBench Professional: **56.7%** (xAI table; GPT-5.6 Sol 60.5%, Fable 5.1 62.1%)
- GPQA Diamond / HLE / AIME / ARC-AGI / CritPt: **no verified public score found** — xAI published none of the older public suites for 4.7
- EEBench (electrical engineering): **64.0%** (xAI table; Fable 5.1 56.4%, Sol 39.4%)

Coding:

- DeepSWE v1.1: **71.0%** (xAI table, high-effort footnote) — vs GPT-5.6 Sol 72.7%, Fable 5.1 70.0%; Artificial Analysis native-harness retest: **73%**
- CursorBench 4.0 (long-running coding tasks): **46.3%** (xAI table) — vs Grok 4.6 40.4%, Sol 41.7%, Fable 5.1 51.8%
- SWE-Atlas-QnA: **63%** (Artificial Analysis, Grok Build harness; up from 58% for 4.6)
- AA Coding Agent Index (Grok Build + Grok 4.7): **56** (independent, xhigh) — up from 47 for Grok 4.6
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found** (xAI moved off the older public suites for this launch)

Long context:

- 500,000-token window documented (xAI models docs); MRCR / RULER / GraphWalks retrieval at window length: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 72/100.** AA-Briefcase 1657 Elo sits just under the field leader and Harvey Legal 19.6% is a category win, but Terminal-Bench 4.0 lands mid-pack (37.6% vendor / 26–33% independent) and no Tau3 or GDPval numbers exist for 4.7 — that missing frontier evidence is what caps it.
- **Reasoning: 78/100.** Independent AA Intelligence Index 46 (ahead of Grok 4.6's 44, level with GPT-5.6 Sol's 47) plus 77% long-document reasoning and 56.7% HealthBench Professional; capped because no GPQA/HLE/ARC results were published, and the Index still trails the leaders.
- **Context window: 88/100.** 500K maps into the 500K–1M band (85–94); mid-band placement because no retrieval-quality curve is published and the ≥200K price doubling makes real 500K use expensive rather than free.
- **Multimodal: 62/100.** Image input is confirmed but no vision benchmark (MMMU/CharXiv-class) was published, so it stays at the lower end of the +image band (60–70); output is text-only.
- **Coding: 82/100.** DeepSWE v1.1 71–73% is within a point of the frontier reference (74%+), CursorBench 46.3% leads GPT-5.6 Sol, and the AA Coding Agent Index rose 9 points to 56; capped below 85+ by Terminal-Bench 4.0's mid-pack standing and the total absence of SWE-bench Verified / LiveCodeBench / SciCode figures.
- **Cost efficiency: 72/100.** $2/$6 below 200K is well under the $3/$15 ≈ 60 reference and cached input is cheap at $0.50, but the whole-request doubling to $4/$12 at 200K plus AA's measured $3.74 per task (2× GPT-5.6 Sol, because of 81K output tokens) keeps it below the ~88 anchor for $1.25/$4.25.
- **Overall Score: 76/100.** (72 + 78 + 88 + 62 + 82) / 5 = 76.4 → **76** — best fit: strong price-performance flagship for long-running coding and professional knowledge work; budget for high token burn per task and don't expect Fable 5.1-class multi-hour terminal reliability.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-25
- Method: public internet research (xAI launch post and models documentation, Artificial Analysis independent September 2026 evaluation, PacketNebula/codersera/itbrief/winbuzzer launch coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
