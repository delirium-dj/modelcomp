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

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# GPT-5.6 Terra — findings by Mimo v2.6 Flash

- Source: OpenAI/`openai/gpt-5.6-terra`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's **workhorse** 5.6 tier (GA 2026-07-09) — roughly GPT-5.5-class capability at ~60% lower token price; TB2.1 **87.4%** (1.4 pts behind Sol), SWE-Pro 63.4, no max-effort/ultra exclusives (Sol-only); default Codex starting point.
- **Provider / access:** OpenAI API `gpt-5.6-terra`; Codex; OpenRouter `openai/gpt-5.6-terra` (+batch); reasoning.effort: none/low/medium(default)/high/xhigh/**max not for Terra** (max is Sol). **No Zen Free ID** (`noFreeId: true`).
- **Release / knowledge:** GA **2026-07-09** (aidenapp/benchlm); pricing cut **2026-07-30** (launch $2.50/$15 → **$2/$12**). Knowledge cutoff not published.
- **IDs:** `openai/gpt-5.6-terra`.
- **Context window:** meta **1,048,576 (1M)**; trackers show **1.05M** / "1.1M" with **128K out**; >272K input → 2× in / 1.5× out surcharge (OpenAI docs).
- **Modalities:** **text, image, audio, video, PDF in; text out** (meta — full multimodal input on 5.6 family).
- **Pricing (as of 2026-09-22):** **$2.00 in / $12.00 out per 1M**; cache read **$0.20**, cache write $2.50; batch **$1 / $6** (AI Atlas observed 2026-09-11/12 — batch halved); web search $10/1K calls. No Free ID.
- **Architecture:** proprietary reasoning MoE (undisclosed); tier between Sol (flagship) and Luna (budget).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Prefer OpenAI launch / AA independent / BenchLM composite; flag vendor vs independent where they diverge.

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** OpenAI launch (aidenapp/tabbit/benchlm); **AA independent 88.0%** max effort (AI Atlas); Meta table Codex+Terra **81.8%** (Meta's harness, third-party-tuned caveat); Vals Terminus-2 **77.5%** (BenchLM); official tbench.ai: GPT-5.6 Terra+Codex **78.4% ± 1.3** (rank ~#6)
- Terminal-Bench 4.0: **35.4%** (AA/BenchLM — harder variant)
- Terminal-Bench Hard (AA): **57.6–62.9%** by effort (AA/OpenRouter)
- GDPval-AA v2: **1593 / 1578 / 1583 Elo** (Tabbit OpenAI / RankLLMs / BenchLM — ~#high board; Opus 4.8-class)
- Toolathlon: **53.1%** (BenchLM)
- BrowseComp: **87.5%** (BenchLM)
- OSWorld 2.0: **50.2%** (BenchLM/RankLLMs — computer use)
- τ³/τ²-Bench: Telecom **78.4%** high-effort (AA); Banking **40.2%** (AA); τ² **86.3%** (BenchLM)
- AutomationBench: **59.6%** (AA); AA Briefcase **1330**; APEX-Agents **38.9%**; EnterpriseOps **38.5%** (BenchLM/AA)
- Agents' Last Exam: **50.4%** (Tabbit/OpenAI vendor table vs GPT-5.5 46.9)
- MCP Atlas: no verified public score found for Terra in this pass

Reasoning / knowledge:

- GPQA Diamond: **89.6%** high effort (AA/OpenRouter); **92.9%** (UseRightAI — likely max/xhigh row; cite AA 89.6 as independent anchor)
- Humanity's Last Exam: **38.5%** high effort (AA/OpenRouter); non-reasoning tier only **11.4%** (AA — effort-sensitive)
- AA Intelligence Index: **v4.1 = 55** (Tabbit citing AA page — high); OpenRouter also lists non-reasoning Index **21.2** (low effort floor)
- AA Coding Agent Index v1.1: **77.4** (Tabbit/AA); high-effort Coding Index **67.1**, Agentic **37.6** (OpenRouter AA rows — version/config drift noted)
- CritPt: **22.9%** high / 2.0% non-reasoning (AA)
- SciCode: **52.3–55.0%** by effort (AA); AA-LCR **77.7%** high (AA — strong long-context quality)
- IFBench: **64.4%** high (AA)

Coding:

- SWE-bench Pro: **63.4%** (OpenAI/Tabbit/BenchLM)
- SWE-bench Verified: **77.4%** (RankLLMs)
- DeepSWE v1.1: **69.6%** (OpenAI/BenchLM/RankLLMs — Meta table also 64.8 in Meta harness)
- FrontierCode 1.1 Extended: **55.8%** (BenchLM); CursorBench 3.2: **64.9%**; LiveCodeBench (Vals): **85.9%**; SWE-bench (Vals): **95.4%** (Vals platform rows via BenchLM — harness-specific)
- AA Coding Index: **76.7** (BenchLM)

Long context:

- **~1.05M** window / 128K out; AA-LCR **77.7%** (high) / 58.7% (non-reasoning) — solid mid-high long-context retrieval; >272K priced 2× (OpenAI)

Multimodal:

- **text/image/audio/video/PDF in** (meta) — full multimodal input (upper band)

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 **87.4–88** (launch/AA), GDPval ~1580–1593, BrowseComp 87.5, OSWorld 50.2, Toolathlon 53 — elite multi-domain agentic stack; Vals TB 77.5 and Meta-harness 81.8 show scaffold sensitivity but still top-tier.
- **Reasoning: 90/100.** AA Intelligence Index **55** (v4.1) is frontier-adjacent; GPQA ~89.6 and HLE 38.5 (high effort) excellent; CritPt/LCR strong — effort setting matters a lot (non-reasoning floor is weak).
- **Context window: 96/100.** **~1.05M / 1M-class** with LCR 77.7% at high effort — top band; 128K out and >272K price surcharge are minor dents.
- **Multimodal: 90/100.** Text+image+audio+video+PDF in (meta) — full multimodal input surface.
- **Coding: 89/100.** SWE-Pro 63.4, SWE-V 77.4, DeepSWE 69.6, Coding Index ~77 — strong coding; trails Opus 5 (SWE-Pro 79.2) and Fable on repo-level SWE-Pro, but beats mid-tier handily; no max-effort/ultra (Sol exclusives).
- **Cost efficiency: 68/100.** **$2/$12** with batch **$1/$6** and cache **$0.20** is strong frontier value (60% under GPT-5.5 flag pricing per OpenAI); no Free ID, premium vs Luna ($0.2/$1.2) and vs free Zen tiers → not 80+, well above Opus-5-tier 46.
- **Overall Score: 91/100.** Mean of five quality dims (90+90+96+90+89)/5 = 91 → 91.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (developers.openai.com gpt-5.6-terra docs, Tabbit OpenAI official benchmarks summary, OpenRouter AA effort rows, aidenapp Sol/Terra/Luna tier guide, BenchLM composite, AI Atlas pricing history, RankLLMs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

