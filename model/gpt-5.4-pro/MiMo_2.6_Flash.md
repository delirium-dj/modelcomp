# GPT-5.4 Pro — findings by MiMo 2.6 Flash

- Source: OpenAI (`gpt-5.4-pro`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** The heavy-compute "maximum performance" tier of the GPT-5.4 generation (released 2026-03-05 alongside GPT-5.4/5.4 Thinking) — spends more compute to "think harder" with Responses-API-only reasoning loops that can run minutes; ChatGPT Pro/Enterprise only, `gpt-5.4-pro-2026-03-05` snapshot. Its 5.4 sibling set claimed a 33% factual-error reduction vs 5.2, OSWorld 75.0% (above human 72.4), built-in computer use and a 47% token reduction from MCP-Atlas tool search; Pro inherits the platform features and adds the top benchmark deltas. Superseded in the lineup by GPT-5.5/5.5 Pro (Apr 2026) and GPT-5.6 tiers.
- **Provider / access:** OpenAI API (Responses API only; Batch/Flex at 50%, Priority at 200%), ChatGPT Pro/Enterprise plans; OpenRouter third-party routes.
- **Release / knowledge:** released 2026-03-05; knowledge cutoff **31 Aug 2025**.
- **IDs:** `openai/gpt-5.4-pro` (gateway routes) / `gpt-5.4-pro` (native; snapshot `gpt-5.4-pro-2026-03-05`).
- **Context window:** 1.05M/1.1M nominal (OpenRouter lists 922K input / 128K output usable) — prompts >272K input tokens are billed at 2× input and 1.5× output for the whole session (standard, batch and flex).
- **Modalities:** text + images in; text out; reasoning yes (efforts up to xhigh; some problems take minutes); tool calls yes (search/computer-use billed per call).
- **Pricing (as of 2026-10-07):** **$30.00 in / $180.00 out** per 1M — Batch/Flex $15/$90, Priority $360; no cache discount listed; web search $10/1K calls. BenchLeader blended ≈ $67.50/M. Paid (no free tier).
- **Architecture:** proprietary unified GPT-5.4 architecture (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- No agentic rows (TB/SWE/GDPval/OSWorld-at-Pro-effort) found in public sources — the launch agentic numbers belong to the base GPT-5.4: OSWorld-Verified **75.0** (vs GPT-5.2 47.3, human 72.4), MCP-Atlas tool search cutting token use 47%, computer use built in. τ²-bench Telecom at `none` effort (base 5.4): 64.3 vs 5.2's 57.2.
- Anthropic's later comparison tables list "TCP-IF 97.1" against GPT-5.4 (base, function-calling row). No Pro-specific tool-use score verified.

Reasoning / knowledge (third-party unless noted):

- GPQA Diamond: **94.6** (Epoch AI, xhigh, rank #6) / **92.8** (BenchGecko aggregate) — clears the 90%+ ref either way.
- HLE: **44.3** (Scale AI/CAIS set, rank #5) — clears the 40%+ ref.
- ARC-AGI-1: **94.5** (#35); ARC-AGI-2: **83.3** (#34) — very strong abstract reasoning. SimpleBench 74.1; CritPt 30.0 (#15).
- BenchLeader Index: **64.0** best config (#58 of 758; xhigh 62.1) — their scale, roughly AA-Index-class for that era. Artificial Analysis Intelligence Index: no Pro row found (base GPT-5.4's launch-era AA position was mid-60s territory per launch coverage of prior gens; not scored).
- SimpleQA Verified 46.3; MultiNRC 62.3 (#4); MultiChallenge 69.2 (#4); TutorBench 56.6 (#2); VISTA 53.9 (#2).

Coding:

- **No public SWE-bench/Terminal-Bench/LiveCodeBench row for gpt-5.4-pro** was found; BenchGecko's 12-benchmark aggregate lands at 80.7 (rank #20 on their scale) but its top rows are reasoning tests (ARC-AGI, GPQA). BenchLeader's coding category reads 55 (no-reasoning config only). Base GPT-5.4's coding figures circulate in vendor tables (e.g., Anthropic comparison rows: SWE-bench Pro-class rows under GPT-5.5) but were not verified for Pro at its own effort.
- Context-budget note: 5.4's Responses-API-only design and minutes-long xhigh runs make it a poor fit for fast agent loops — corroborated by 5–6 output tok/s measured.

Long context:

- 1.05M window with the >272K price premium; no MRCR/RULER/needle score found for this model. → capacity only.

### Normalized scores (1–100)

- **Tool use: 78/100.** Inherited platform capability is real (base 5.4's OSWorld 75.0, built-in computer use, MCP-Atlas token efficiency, TCP-IF-class function calling), but zero Pro-specific agentic benchmark rows (no TB, SWE, GDPval, AutomationBench) make this the weakest-evidenced category — scored on platform inheritance, flagged.
- **Reasoning: 90/100.** Both hard refs cleared comfortably — GPQA 94.6 (Epoch, 90+ ref) and HLE 44.3 (40+ ref) — plus ARC-AGI-2 83.3 and a #58 BenchLeader overall rank; no AA Index row and CritPt 30 keep it under 92.
- **Context window: 95/100.** 1.05M/1.1M nominal ≥1M tier floor; no retrieval benchmark found and the >272K input premium (2× in / 1.5× out for the session) is a practical deterrent → floor.
- **Multimodal: 68/100.** Text + image in, text out = image band (60–70); MMMU-Pro 81.2 and OmniDocBench 0.109 are base-5.4 figures, BenchLeader multimodal category 70; no video/audio/PDF-specific or non-text output.
- **Coding: 76/100.** Essentially unverified for the Pro tier — BenchGecko's aggregate 80.7 and BenchLeader coding 55 (no-reasoning) are all that exist publicly; positioned by OpenAI as reasoning/complexity-first rather than a coding flagship, with 5–6 tok/s throughput hostile to agent loops. Flagged as evidence-thin.
- **Cost efficiency: 14/100.** $30/$180 is 3× past the $10/$50 ≈ 30 anchor (12–15 range), softened only by Batch/Flex halves; plus the 272K+ context premium and 5 tok/s latency. One of the most expensive production API tiers measured in this batch.
- **Overall Score: 81/100.** (78+90+95+68+76)/5 = 81.4 → 81 — a deliberate "throw compute at it" reasoning tier whose GPQA/ARC strength is undeniable, dragged by a price-performance ratio near the floor of the batch and an agentic/coding evidence base that is thin to nonexistent for the Pro SKU specifically.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (OpenAI launch post + API docs, OpenRouter, BenchGecko, BenchLeader, Benchable, OpenAI community deep-dive, Wikipedia); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
