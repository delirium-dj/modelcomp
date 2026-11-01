# Claude Opus 5.5 — findings by Qwen 3.8 Max

- Source: Anthropic (`claude-opus-5-5`); independent: Artificial Analysis (`claude-opus-5-5`, max-with-fallback), Vals AI (SWE-bench Verified), Anthropic product page
- Date: 2026-10-20 (UTC)
- Re-researched: 2026-11-01 (UTC) — enrichment pass; original findings preserved below and marked where superseded
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict (2026-11-01):** the 2026-10-20 read holds and is now **independently corroborated** — Artificial Analysis scores Opus 5.5 **58 on the Intelligence Index, #2 of 58** (median 37), which converts what was previously an all-vendor evidence base into a verified frontier standing. The refresh's real work is on the **downside the launch-post view missed**: at **$10.04 per Intelligence-Index task it ranks #55/57** and its **220 M output tokens are #56/57 (3.1× the 70 M median)**, with a **729.62 s time-to-first-token**. Quality dims are therefore nudged *up* on corroboration, Cost efficiency is cut sharply, and the 1M window is trimmed for an independent mid-context-reliability caveat. **Overall stays 95.**

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship Claude 5.5-family model, leading in agentic coding, computer use and knowledge work; performs near Claude Fable 5.1 while costing 40% less to run than Opus 5.
- **Provider / access:** Claude Platform (`claude-opus-5-5`), plus AWS Bedrock, Google Cloud Vertex AI and Microsoft Azure. Messages API; Fast mode (up to 2.5x) in Claude Code / platform.
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff not published. First release since Anthropic's "pacing the frontier" call; externally evaluated by Frontier Design and METR.
- **IDs:** `anthropic/claude-opus-5-5` (no free Zen ID; premium paid tier).
- **Context window:** 1,000,000 tokens (armes.ai model docs); max output not separately published in the launch post.
- **Modalities:** text + image in, text out; reasoning yes (adaptive thinking, always-on — no "thinking off" mode); tool calls yes; computer use (OSWorld) and visual chart recognition confirmed.
- **Pricing (as of 2026-10-20):** $4 / 1M input, $20 / 1M output, $0.20 / 1M cache reads, $5 / 1M cache writes (Anthropic). Fast mode: $8 in / $40 out per 1M. Zero data retention available.
- **Architecture:** proprietary (closed weights).
- **Independently measured (Artificial Analysis, `claude-opus-5-5`, Max + Default Fallback, added 2026-11-01):** Intelligence Index **58 — #2 of 58** (class median 37) · Speed **96.6 tok/s, #73 of 196** (AA prose cites 97 vs 81 average) · **Cost per Index task $10.04 — #55 of 57** · Verbosity **220 M tokens — #56 of 57** (median 70 M) · **TTFT 729.62 s** on Anthropic's API (median for the price tier 3.71 s) · AA confirms **text + image in → text out**, reasoning **Yes** (this page profiles the reasoning variant; a non-reasoning variant may exist), context **1M**, pricing **$4 / $20 per 1M with a 95% cache discount**. AA characterises it as "amongst the leading models in intelligence, but somewhat expensive … faster than average, however **very verbose**."

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (xhigh effort; leads Fable 5.1 55.8%, Opus 5 52.3%, GPT-6 Astra 57.9%, GPT-5.6 Sol 37.3%; ±2.6 pts SE)
- OSWorld 2.1 (computer use): **81.8%** partial (Anthropic table)
- AutomationBench (Zapier): **40.0%** (run without fallback models; safeguard interventions counted as failures, so understates real-world)
- GDPval-AA v2.1: **1846 Elo** (best in table; Fable 5.1 1735, Opus 5 1708, GPT-6 Astra 1542)
- WANDR (Perplexity, large data collection): outperforms Fable 5.1 / Opus 5 at lower cost (offline-tool setup, not directly comparable to Perplexity's published numbers)

Reasoning / knowledge:

- Humanity's Last Exam: **67.7%** with tools (leads Fable 5.1 65.6%, Opus 5 63.6%, GPT-6 Astra 57.2%)
- Terminal-Bench-Science 0.1: **58.7%** (agentic scientific research; behind GPT-6 Astra 64.6%)
- GPQA Diamond: **still no verified public score found** (re-checked 2026-11-01 — neither the vendor table nor AA publishes a GPQA-Diamond cell for this id)
- Artificial Analysis Intelligence Index: **58 — #2 of 58** (v5.0 basket: AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 Hard, Terminal-Bench-Science 0.1); class median 37. **Added 2026-11-01 — this cell was empty in the 2026-10-20 draft.** Individual per-evaluation AA cells sit behind an interactive chart and were not transcribable; only the composite Index is recorded.

Coding:

- FrontierCode v1.1 (Main): **54.4%** (54.6% at default medium effort — higher than all other models; GPT-6 Astra 53.3% top)
- CursorBench 4.0: **57.8%** (52.5% at default; beats GPT-5.6 Sol top 41.7% by 11 pts)
- Terminal-Bench 4.0: **66.4%** (see tool use; also the agentic-coding headline)
- Chartography (visual chart recognition): **89.0%** with tools
- SWE-bench Verified / LiveCodeBench / DeepSWE: **still no independent 5.5 figure** — re-checked 2026-11-01 against the **Vals AI SWE-bench Verified leaderboard (88 models, minimal bash-only `mini-swe-agent` harness)**, which lists **Claude Opus 5, Opus 4.8 / 4.7 / 4.6 / 4.5 and Claude Fable 5 but NOT Claude Opus 5.5**. Anthropic's own product page adds only the qualitative claim that 5.5 "costs less per token than Opus 5 and uses fewer tokens per task". **Opus 5's leaderboard position must not be transferred to 5.5.**

Additional independent evidence gathered 2026-11-01:

- **Long context:** no MRCR / RULER figure published (unchanged). An independent BurnRate engineering note on Claude Code cost/behaviour cautions that recall of **information placed in the middle of a long context** is a known weak spot and advises routing *true* long-context jobs to a Gemini 3-class model — a qualitative caveat against the raw 1M window, not a measurement.
- **Self-correction:** Suprmind's independent 60-question cross-model run reports Opus 5.5 **correcting ~24 of every 100 earlier answers** it was shown (roughly twice the field's rate) — directional support for its review/audit strength, single small sample, not a benchmark score.
- **Cost/verbosity (AA, independent):** **$10.04 per Index task (#55/57)** and **220 M tokens (#56/57 vs 70 M median)** — the operational tax the launch-post framing ("40% cheaper to run than Opus 5") did not surface. **TTFT 729.62 s** reflects very long reasoning traces rather than a fault.

Long context:

- 1M-token window; no MRCR/RULER figure published in the launch post — "no long-context retrieval reported".

### Normalized scores (1–100)

- **Tool use: 95/100.** Unchanged from 2026-10-20. Terminal-Bench 4.0 66.4% (leads all rivals), OSWorld 2.1 81.8% and strong WANDR; capped slightly by AutomationBench 40.0% (run without fallbacks) trailing GPT-6 Astra 41.4%. AA's v5.0 basket independently weights Terminal-Bench 4.0 and AutomationBench-AA and still lands the model **#2/58**, which corroborates rather than revises this dim.
- **Reasoning: 97/100.** *(96 → 97 on 2026-11-01 corroboration.)* HLE 67.7% with tools (best in table) and GDPval-AA 1846 Elo (top); the **AA Index 58, #2/58** now independently confirms the same standing on a basket that includes HLE-Diamond, CritPt v2 Hard, GDP.pdf and AA-Omniscience — removing most of the "vendor-run only" discount that held this dim at 96. Still short of the ceiling on absent GPQA and Terminal-Bench-Science trailing Astra.
- **Context window: 96/100.** *(98 → 96.)* 1M-token window, AA-confirmed; reduced because **no MRCR/RULER retrieval figure has ever been published** and an independent engineering note flags **mid-context placement** as a known weak spot, so nominal capacity is not evidence of effective use.
- **Multimodal: 88/100.** Unchanged. Chartography 89.0% (with tools) and OSWorld computer-use confirm strong vision; AA confirms input is **text + image only** and no MMMU-Pro / broad image-in benchmark was reported.
- **Coding: 97/100.** *(96 → 97 on 2026-11-01 corroboration.)* FrontierCode 54.4% (beats all), CursorBench 57.8%, Terminal-Bench 4.0 66.4% and Terminal-Bench-Science 58.7%; AA's basket independently carries FrontierCode 2.0 + Terminal-Bench 4.0 and ranks the model **#2/58**, lifting the provenance discount. Held below 100 because **the independent Vals AI SWE-bench Verified board still carries no Opus 5.5 row**.
- **Cost efficiency: 58/100.** *(70 → 58 — the one materially adverse finding.)* The 2026-10-20 score rested on vendor framing ("20% cheaper than Opus 5, 40% cheaper per task"). **Independent AA data contradicts it: $10.04 per Intelligence-Index task ranks #55 of 57**, and **220 M generated tokens rank #56 of 57 (3.1× the 70 M median)** — the verbosity of always-on max-effort reasoning dominates the nominal per-token discount, despite the 95% cache hit. Premium list price ($4/$20) on top. **Not counted in the Overall mean.**
- **Overall Score: 95/100.** Mean of Tool 95 + Reasoning 97 + Context 96 + Multimodal 88 + Coding 97 = 94.6 → 95. **Unchanged from 2026-10-20**: the two quality raises (independent corroboration) and the Context trim cancel out, and the Cost cut does not enter the mean. Best fit: long-horizon agentic coding, codebase-wide migrations/audits, computer use and high-stakes knowledge work — with a clear eyes-on note that **per-task cost and token volume are near the worst in its own comparison class**.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20, re-researched 2026-11-01
- Method: public internet research. *Original (2026-10-20):* Anthropic's official "Introducing Claude Opus 5.5" launch post benchmark table + pricing; armes.ai model docs for the 1M context window. *Enrichment (2026-11-01, four independent sources):* **Artificial Analysis `claude-opus-5-5` (Max, Default Fallback)** — Intelligence Index **58, #2/58**, Speed 96.6 tok/s #73/196, **$10.04 per task #55/57**, **Verbosity 220 M #56/57** (median 70 M), **TTFT 729.62 s**, 1M context, text+image→text, 95% cache discount; **Vals AI SWE-bench Verified leaderboard** (88 models, bash-only `mini-swe-agent` harness) — **no Opus 5.5 row**, confirming the gap is still open; **Anthropic product page** — qualitative "costs less per token than Opus 5, uses fewer tokens per task"; **BurnRate** (mid-context placement caveat) and **Suprmind** (60-question self-correction run) as independent engineering/evaluation notes. Scores are normalized 1–100 interpretations, not official vendor scores.
- Conflict handling (explicit, not averaged): the vendor's "40% cheaper to run than Opus 5" claim **directly conflicts** with AA's independent **#55/57 per-task cost and #56/57 verbosity**; the adversarial independent measurement wins, so Cost efficiency drops 70 → 58 while the vendor claim is retained as attributed framing. AA's Index 58 **corroborates** (does not replace) the vendor HLE/GDPval/FrontierCode leadership, so it is used to lift the provenance discount on Reasoning/Coding rather than as a new benchmark row. AA's per-evaluation cells were **not** transcribed (interactive chart, not machine-readable) — only the composite Index is recorded.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings. Would still close this model's remaining gaps: an **independent SWE-bench Verified / LiveCodeBench row under the 5.5 id**, a published **GPQA-Diamond** figure, and any **MRCR/RULER** long-context measurement. **Guards:** do **NOT** transfer **Claude Opus 5**'s Vals-AI SWE-bench position, its AA cells, or any 4.x/5.0 figure onto **5.5**; AA's page profiles the **max-with-fallback reasoning** variant, so its Index/Speed/Cost describe that configuration and must not be read as the non-reasoning or default-effort setting; **Cost efficiency is excluded from the Overall mean** by project rule; no numbers invented.
