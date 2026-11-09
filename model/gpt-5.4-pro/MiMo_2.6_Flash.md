# GPT-5.4 Pro — findings by MiMo 2.6 Flash

- Source: OpenAI (`gpt-5.4-pro`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08.** Previous report 2026-10-07 (Overall 81). Fresh sources: BenchLM model page (updated 2026-11-07), Artificial Analysis model page, Epoch AI FrontierMath v2 leaderboard, ARC Prize leaderboard. Changes: **Reasoning 90 → 91** — the previous report carried no FrontierMath row for the Pro SKU; Epoch's published **FrontierMath v2 Tiers 1–3 82.456% / Tier 4 58.537%** now verifies hard-math reasoning for this checkpoint (ARC-AGI-1 94.50 now also cited as ARC Prize verified XHigh results). Held: tool use (BenchLM still shows only one agentic row — BrowseComp 89.3%; OpenAI's own table still prints "—" on TB/SWE/GDPval/OSWorld), context (1.05M floor, no retrieval row), multimodal (text+image in only), coding (still 0 coding rows among BenchLM's 12 covered benchmarks), cost ($30/$180 re-verified on AA; blended $45/M on AA's 7:2:1 vs BenchLeader's $67.50 — anchor position unchanged). AA now hosts a Pro model page but shows the Intelligence Index as **N/A ("no publicly available API")** — the previous report's "no AA Index row" cap stands. Overall 81 → 82. Model marked **deprecated by AA in favor of GPT-5.5 Pro**.

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** The heavy-compute "maximum performance" tier of the GPT-5.4 generation (released 2026-03-05 alongside GPT-5.4/5.4 Thinking) — spends more compute to "think harder" with Responses-API-only reasoning loops that can run minutes; ChatGPT Pro/Enterprise only, `gpt-5.4-pro-2026-03-05` snapshot. Its 5.4 sibling set claimed a 33% factual-error reduction vs 5.2, OSWorld 75.0% (above human 72.4), built-in computer use and a 47% token reduction from MCP-Atlas tool search; Pro inherits the platform features and adds the top benchmark deltas. Superseded in the lineup by GPT-5.5/5.5 Pro (Apr 2026) and GPT-5.6 tiers; AA flags it deprecated (benchmarked every 18h). BenchLM ranks it **68.18, #21/1016** (12 of 759 benchmarks covered, partial/conservative; updated 2026-11-07).
- **Provider / access:** OpenAI API (Responses API only; Batch/Flex at 50%, Priority at 200%), ChatGPT Pro/Enterprise plans; OpenRouter third-party routes; AA lists 1 API provider.
- **Release / knowledge:** released 2026-03-05; knowledge cutoff **31 Aug 2025** (AA-confirmed).
- **IDs:** `openai/gpt-5.4-pro` (gateway routes) / `gpt-5.4-pro` (native; snapshot `gpt-5.4-pro-2026-03-05`).
- **Context window:** 1.05M/1.1M nominal (OpenRouter lists 922K input / 128K output usable) — prompts >272K input tokens are billed at 2× input and 1.5× output for the whole session (standard, batch and flex).
- **Modalities:** text + images in; text out; reasoning yes (efforts up to xhigh; some problems take minutes); tool calls yes (search/computer-use billed per call).
- **Pricing (re-verified 2026-11-08 on AA):** **$30.00 in / $180.00 out** per 1M (OpenAI API; AA 7:2:1 blended **$45.00/M**), no cache discount listed; Batch/Flex $15/$90, Priority $360; web search $10/1K calls. AA flags both prices as extreme vs medians ($2.00 / $10.00). Paid (no free tier).
- **Architecture:** proprietary unified GPT-5.4 architecture (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- BrowseComp (agentic web research): **89.3%** (OpenAI; BenchLM — still the model's only rankable agentic row; beats GPT-5.4 82.7% and GPT-5.5 84.4%).
- No Pro-specific TB/SWE/GDPval/OSWorld/Toolathlon/MCP-Atlas rows — OpenAI's launch table prints "—" for Pro on all of them; launch agentic numbers belong to base GPT-5.4: OSWorld-Verified **75.0** (vs GPT-5.2 47.3, human 72.4), MCP-Atlas token use −47%, computer use built in; τ²-bench Telecom (base, `none`): 64.3.
- Anthropic's later comparison tables list "TCP-IF 97.1" against GPT-5.4 (base, function-calling row). No Pro-specific tool-use score verified.

Reasoning / knowledge (third-party unless noted):

- GPQA Diamond: **94.6** (Epoch AI, xhigh, rank #6) / **92.8** (BenchGecko aggregate) — clears the 90%+ ref either way.
- HLE: **44.3** (Scale AI/CAIS set, #5); BenchLM/OpenAI table: **58.7** with tools / **42.7** w/o — clears the 40%+ ref.
- **FrontierMath v2: 82.456% (Tiers 1–3) / 58.537% (Tier 4)** — Epoch AI FrontierMath v2 leaderboard, newly verified this pass (previous report had no FrontierMath row for Pro; the older 37.5–38% Tier-4 figure on the legacy scale lives in the merged-duplicate section below).
- ARC-AGI-1: **94.50** (ARC Prize verified XHigh results, #35); ARC-AGI-2: **83.3** (#34, OpenAI) — very strong abstract reasoning. SimpleBench 74.1; CritPt 30.0 (#15, AA).
- FrontierScience 36.7; IPho 2025 (Theory) 93.5; FrontierMath legacy 50%.
- BenchLeader Index: **64.0** best config (#58 of 758; xhigh 62.1). **Artificial Analysis Intelligence Index: N/A** — AA now hosts a Pro page but shows no Index value ("No publicly available API"); still no Pro Index row.
- SimpleQA Verified 46.3; MultiNRC 62.3 (#4); MultiChallenge 69.2 (#4); TutorBench 56.6 (#2); VISTA 53.9 (#2).

Coding:

- **Still no public SWE-bench/Terminal-Bench/LiveCodeBench/SciCode row for gpt-5.4-pro** — BenchLM's 12 covered benchmarks include zero coding rows; BenchGecko's 12-benchmark aggregate lands at 80.7 (rank #20) but its top rows are reasoning tests; BenchLeader's coding category reads 55 (no-reasoning config only). Base GPT-5.4's coding figures (SWE-Bench Pro 57.7%, LiveCodeBench Pro 87.5%) remain family-lineage credit, not Pro measurements.
- Context-budget note: 5.4's Responses-API-only design and minutes-long xhigh runs make it a poor fit for fast agent loops — corroborated by 5–6 output tok/s measured.

Long context:

- 1.05M window with the >272K price premium; no MRCR/RULER/needle score found for this model. → capacity only.

Multimodal:

- Text + image in, text out; MMMU-Pro 81.2/94% and OmniDocBench figures are base-5.4/board-class; BenchLeader multimodal category 70. No video/audio/PDF-specific input or non-text output.

### Normalized scores (1–100)

- **Tool use: 78/100.** Inherited platform capability is real (base 5.4's OSWorld 75.0, built-in computer use, MCP-Atlas token efficiency, TCP-IF-class function calling), but zero Pro-specific agentic benchmark rows (BenchLM: one agentic row, BrowseComp) make this the weakest-evidenced category — scored on platform inheritance, flagged.
- **Reasoning: 91/100.** (was 90) Both hard refs cleared comfortably — GPQA 94.6 (Epoch, 90+ ref) and HLE 44.3–58.7 (40+ ref) — plus ARC-AGI-2 83.3, ARC-AGI-1 94.50 (ARC Prize verified) and now **FrontierMath v2 T1–3 82.456% / T4 58.537% (Epoch)** filling the missing hard-math row; still under 92 because AA shows no Index value for the Pro SKU and CritPt is 30.0.
- **Context window: 95/100.** 1.05M/1.1M nominal ≥1M tier floor; no retrieval benchmark found and the >272K input premium (2× in / 1.5× out for the session) is a practical deterrent → floor.
- **Multimodal: 68/100.** Text + image in, text out = image band (60–70); MMMU-Pro 81.2 and BenchLeader multimodal 70; no video/audio/PDF-specific or non-text output.
- **Coding: 76/100.** Essentially unverified for the Pro tier — BenchGecko's aggregate 80.7 and BenchLeader coding 55 (no-reasoning) are all that exist publicly; BenchLM still covers zero coding rows; positioned by OpenAI as reasoning/complexity-first rather than a coding flagship, with 5–6 tok/s throughput hostile to agent loops. Flagged as evidence-thin.
- **Cost efficiency: 14/100.** $30/$180 is 3× past the $10/$50 ≈ 30 anchor (12–15 range), softened only by Batch/Flex halves; AA's blended $45/M vs medians of $2/$10 underscores it; plus the 272K+ context premium and 5 tok/s latency. One of the most expensive production API tiers measured in this batch.
- **Overall Score: 82/100.** (78+91+95+68+76)/5 = 81.6 → 82 — a deliberate "throw compute at it" reasoning tier whose GPQA/ARC/FrontierMath strength is undeniable, dragged by a price-performance ratio near the floor of the batch and an agentic/coding evidence base that is thin to nonexistent for the Pro SKU specifically.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: fresh public internet research (BenchLM, Artificial Analysis model page, Epoch AI FrontierMath v2 leaderboard, ARC Prize leaderboard, OpenAI launch post + API docs, BenchGecko, BenchLeader); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - https://benchlm.ai/models/gpt-5-4-pro
  - https://artificialanalysis.ai/models/gpt-5-4-pro
  - https://epoch.ai/benchmarks/frontiermath-tier-4-v2
  - https://arcprize.org/leaderboard
  - https://openai.com/index/introducing-gpt-5-4/
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# GPT-5.4 Pro — findings by Mimo v2.6 Flash

- Source: OpenAI/`gpt-5.4-pro`
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's maximum-performance GPT-5.4 variant, released in ChatGPT and the API alongside GPT-5.4 (2026-03-05), for the most complex tasks requiring the highest reasoning capacity — ApX reports SOTA-level results on ARC-AGI-2, BrowseComp, GPQA Diamond and FrontierMath Tier 4. Not a variant/alias of another entry in this dataset.
- **Provider / access:** OpenAI Responses API (`https://api.openai.com/v1`) + ChatGPT; also on OpenRouter/Inworld-class routers where listed. Batch/Flex at half rate, Priority at 2× (GPT-5.4 family pricing rules).
- **Release / knowledge:** released 2026-03-05 (ApX release-date row); knowledge cutoff not published for this snapshot.
- **IDs:** `gpt-5.4-pro`. **No OpenCode Zen Free ID found** — scored on paid API pricing.
- **Context window:** **1.05M tokens** per OpenAI `gpt-5.4-pro` model documentation (BenchLM spec rows; multiple head-to-heads confirm "larger documented context window at 1.05M"). ApX's structured field shows 272K — that matches the family's long-context surcharge boundary (2× input past 272K on GPT-5.4) and is treated as the max-input/tiering figure, not the window.
- **Modalities:** text + image in; text out (ApX modality "Multimodal"; BenchLM documented inputs "text, image"); reasoning yes. No audio/video input found.
- **Pricing (as of 2026-10-01):** **$30 / 1M input, $180 / 1M output** (OpenAI pricing table via the GPT-5.4 post; ApX and BenchLM agree); no published cached-input rate (BenchLM). Paid tier only — no free API tier verified.
- **Architecture:** proprietary, closed weights, parameters undisclosed; reasoning model.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability. Missing rows = no verified public score found.
> OpenAI's own GPT-5.4 comparison table prints "—" for Pro on SWE-Bench Pro, Terminal-Bench 2.0, OSWorld-Verified, MCP Atlas, Toolathlon and τ²-Bench Telecom — Pro's published evidence is reasoning/multimodal/web-research only.

Agent / tool use:

- BrowseComp (agentic web research): **89.3%** (OpenAI GPT-5.4 post; BenchLM) — beats GPT-5.4 82.7% and GPT-5.5 84.4%
- Terminal-Bench (any version) / τ²-Bench / Tau3 / GDPval / OSWorld / Toolathlon / MCP Atlas / Claw-Eval: **no verified public score found** (OpenAI table prints "—")
- BenchLM agentic lane: **58.5**, estimated, rank #32/151 — single rankable row (BrowseComp)

Reasoning / knowledge:

- GPQA Diamond: **94.4%** (ApX model summary)
- HLE: **58.7%** with tools, **42.7%** w/o tools (BenchLM)
- ARC-AGI-2: **83.3%** (ApX; BenchLM agrees) — vs GPT-5.5 85%, GPT-5.4 74.0%
- FrontierMath Tier 4: **38.0%** (ApX) / **37.5%** (BenchLM); FrontierMath legacy 50% (BenchLM vs GPT-5.5 Pro row); IPho 2025 (Theory) 93.5%
- FrontierScience: 36.7% (BenchLM)
- BenchLM knowledge lane: 61.2, estimated, #36/181; reasoning lane 70.1 (ARC-AGI-2 + one more row); composite **61.4–61.7**, estimated, public rank #55–62

Coding:

- SWE-bench Verified / SWE-Bench Pro / LiveCodeBench / SciCode / Terminal-Bench / Vibe Code Bench: **no verified public score found** — OpenAI's table shows "—" for every coding row (Pro is not the coding lane; GPT-5.3-Codex/GPT-5.4 are)
- BenchLM coding lane: **"Not measured"** (0 rankable rows)

Long context:

- 1.05M window (OpenAI docs via BenchLM); MRCR / RULER / GraphWalks retrieval: **no verified public score found**

Multimodal:

- MMMU-Pro: **94%** (BenchLM multimodal lane 94.0) — beats GPT-5.5 81.2%
- Image input supported; no CharXiv/ScreenSpot row found

### Normalized scores (1–100)

- **Tool use: 55/100.** No Terminal-Bench, τ², GDPval, OSWorld, Toolathlon or MCP Atlas number exists for Pro (OpenAI prints "—" on all of them). BrowseComp 89.3% is elite agentic web-research evidence but is not one of the methodology's tool-use anchors, so the score is an evidence floor plus adjacent credit — BenchLM's own agentic lane (58.5, one row) agrees.
- **Reasoning: 95/100.** GPQA Diamond 94.4%, HLE 58.7% w/tools and 42.7% w/o tools all clear the frontier anchors (GPQA 90+, HLE 40+), ARC-AGI-2 83.3% is SOTA-class, FrontierMath T4 37.5–38% and IPho Theory 93.5% reinforce it — top-of-band, capped only by the absence of an AA Intelligence Index row.
- **Context window: 95/100.** 1.05M tokens is the ≥1M tier (95–100); the 100 requires ≥98% retrieval measured at 512K+, which does not exist for this model.
- **Multimodal: 70/100.** Text + image in caps at the top of the image-in band (60–70) per methodology — the 94% MMMU-Pro is exceptional but does not add input coverage (no PDF/video/audio input verified, no non-text output).
- **Coding: 65/100.** Zero verified coding rows for this checkpoint (BenchLM: coding "Not measured"); scored as an evidence gap with GPT-5.4-family lineage credit (GPT-5.4 itself: SWE-Bench Pro 57.7%, LiveCodeBench Pro 87.5%) rather than any measured Pro result — no hallucinated score.
- **Cost efficiency: 15/100.** $30/$180 per 1M is past the $10/$50 ≈ 30 anchor — 6× that on input, 3.6× on output, and the joint-highest output price seen in this queue; no cached-input rate published.
- **Overall Score: 76/100.** (55 + 95 + 95 + 70 + 65) / 5 = 76.0 → 76 — best-fit as an elite science/abstract-reasoning and vision-analyst Pro lane with 1.05M context, not a coding or agentic-tool model; capped by zero measured tool-use/coding rows and $180 output pricing.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-01
- Method: public internet research (OpenAI "Introducing GPT-5.4" post pricing/eval tables, ApX GPT-5.4 Pro model page, BenchLM head-to-head ledgers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
