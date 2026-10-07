# GPT-5.6 Terra — findings by MiMo 2.6 Flash

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's balanced GPT-5.6 tier — the successor to the "mini" slot of earlier families (preview 2026-06-26, GA 2026-07-09). Positioned as price-performance: roughly GPT-5.5-class results at half the token price, beating Fable 5 on some agentic suites at ~1/16 the cost per OpenAI. Price cut 20% on 2026-07-30 ($2.50/$15 → $2/$12).
- **Provider / access:** OpenAI API (Responses/Chat, `gpt-5.6-terra`), ChatGPT Work (Free/Go tier model), Codex, Azure ($2/$12; EU/US $2.20/$13.20), Amazon Bedrock ($2.20/$13.20), OpenRouter.
- **Release / knowledge:** released 2026-06-26 (preview) / 2026-07-09 (GA); knowledge cutoff 2026-02-16.
- **IDs:** `openai/gpt-5.6-terra` (gateway routes) / `gpt-5.6-terra` (native; snapshots available).
- **Context window:** 1,050,000 tokens; max output 128,000.
- **Modalities:** text + images in (aggregators list text primary); text out; reasoning yes — `effort`: none/low/medium (default)/high/xhigh/max; `ultra` multi-agent mode is Sol-only. Tool calls yes (function calling, structured outputs, web search/computer use fee-per-call, explicit cache breakpoints, 30-min min cache life).
- **Pricing (as of 2026-10-07):** **$2.00 in / $12.00 out** per 1M (≤272K tier, post-2026-07-30 cut); cached input $0.20, cache write $2.50 (1.25× input); prompts >272K input → **2× input / 1.5× output for the whole request** (effective $4/$18 above 272K). Batch discounts apply. Paid.
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (OpenAI launch table) / **84.3%** (preview system card) / AA independent **88.0% at max effort**, 72.3% at default medium.
- Terminal-Bench 4.0 (AA): 1.0% medium, 10.1% xhigh, **35.4% max**; Vals harness 22.7% — weak on the newest terminal generation.
- Agents' Last Exam: **50.4%** (OpenAI; beats Fable 5's 40.5 and GPT-5.5's 46.9). OSWorld 2.0: **50.2%** (OpenAI). BrowseComp: **87.5%** (OpenAI; Sol Ultra 87.5 vs base 83.3 — Terra listed 87.5).
- τ²-Bench Telecom: 72.8 (AA medium); τ-Bench Banking: 25.6 (AA); GDPval-AA: AA lists 38.5 (percent-scale, non-comparable to Elo boards) → no comparable GDPval Elo found.
- CursorBench v3.2: 64.9 (OpenAI/aireleasetracker); Frontier-Bench v0.1: 20.8; AutomationBench/Tau3/Claw-Eval: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **88.0%** (OpenAI system card) / **87.2%** (AA independent, medium) — just under the 90%+ ref.
- HLE: **33.3%** (AA, medium) — under the 40%+ ref.
- AA Intelligence Index v4.1: **55.0** at launch (vs GPT-5.5 54.8, Fable 5 59.9); live AA feed at default effort 30.1 (effort-sensitive). CritPt 17.4, SciCode 50.5, AA-Omniscience non-hallucination 10.2 (AA, medium).
- Chartography: no verified public score found for Terra.

Coding:

- SWE-bench Verified: **85.2%** (OpenAI system card; Vals' own harness reports 77.4%, their "SWE-bench" 95.4 — harness variance, flagged).
- SWE-bench Pro: **63.4%** (OpenAI); DeepSWE v1.1: **69.6%** (OpenAI).
- AA Coding Agent Index v1.1: **77.4** (vs Fable 5 77.2, GPT-5.5 76.4 — above Fable per OpenAI's claim).
- Vibe Code Bench v1.1: 74.6 (Vals); ProofBench v1.1 74.0; TaxEval v2 76.2; SkillsBench 58.9 (Vals).
- LiveCodeBench/SciCode-at-high-effort: SciCode 50.5 (AA medium); no LiveCodeBench row.

Long context:

- OpenAI MRCR v2 8-needle: **89.6%** at 256K–512K; **72.5%** at 512K–1M. GraphWalks BFS: 76.9 f1 (256K), 71.2 f1 (1M). AA-LCR: **74.0%** (medium).

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 87.4–88% is at the 88% frontier ref, Agents' Last Exam 50.4% beats frontier peers, but OSWorld 50.2% is mid, TB4.0 collapses to 35.4% even at max, and there is no GDPval Elo/Tau3/Claw-Eval row.
- **Reasoning: 83/100.** GPQA 87–88 and HLE 33.3 both miss their frontier refs (90+/40+), AA Index 55.0 sits below the 60+ ref — three misses, though near-misses with strong ALE/CritPt-tier evidence keep it at 83.
- **Context window: 95/100.** 1.05M window = ≥1M tier floor; MRCR 89.6% at 256–512K and 72.5% at 512K–1M plus GraphWalks 71.2 show real long-context use but no ≥98% retrieval anywhere → floor, no uplift.
- **Multimodal: 64/100.** Text + image in, text out = image band (60–70); no video/audio/PDF-specific scores, no non-text output.
- **Coding: 89/100.** SWE-bench Verified 85.2%, TB2.1 87.4%, Coding Agent Index 77.4 (above Fable 5), DeepSWE 69.6% — frontier-adjacent; held below 90 by SWE-Pro 63.4% (Fable-class is ~80), Vibe 74.6, harness-variance on SWE-bench, and weak TB4.0.
- **Cost efficiency: 77/100.** $2/$12 with $0.20 cache reads (90% off) and 50%-class batch sits between the $1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors (~77); penalized by the >272K 2×/1.5× long-prompt surcharge that bites exactly where the 1.05M window matters.
- **Overall Score: 83/100.** (86+83+95+64+89)/5 = 83.4 → 83 — the family's value pick: near-5.5-frontier coding and strong agentic results at $2/$12, with reasoning (GPQA/HLE/Index) the clear gap versus premium tiers.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (OpenAI API model page, GPT-5.6 launch + pricing posts, OpenRouter, benchr, RankLLMs, AI Release Tracker, Agents Directory); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
