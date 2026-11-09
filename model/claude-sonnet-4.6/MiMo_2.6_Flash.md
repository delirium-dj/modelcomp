# Claude Sonnet 4.6 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-sonnet-4-6`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 80). Fresh sources this pass: BenchLM model page (updated
> 2026-11-07, 40 benchmarks with per-row source links) and the Artificial
> Analysis model page (pricing/context/modalities re-verified).
> Changes: Reasoning 73→83 (GPQA 89.9 + HLE 49 rows now sourced to Anthropic's
> system card via BenchLM, AA Index 24.7 / LCR 68.3 filled in), Tool use 84→86
> (Claw-Eval 67.8 and Terminal-Bench 2.1 57.3 rows now found), Coding 80→82
> (LiveCodeBench 82.1 via Vals, Vibe Code Bench 51.48, FrontierCode 24.3
> filled in), Multimodal 66→68 (CharXiv 77.4, AA-MMMU-Pro 70.6);
> Context 95, Cost efficiency 63 held (1M and $3/$15 re-confirmed by AA).

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's most capable Sonnet at release (2026-02-17), formerly the default model on claude.ai Free/Pro and Claude Cowork. Anthropic's pitch: "approaches Opus-level intelligence" — near-parity with Opus 4.6 on computer use (OSWorld-Verified 72.5 vs 72.7) and coding (SWE-bench Verified 79.6 vs 80.8), with best-in-table office work (GDPval-AA Office 1633 Elo, above Opus 4.6's 1559). Superseded by Claude Sonnet 5 ($2/$10) on 2026-06-30; still GA at $3/$15. Artificial Analysis now marks it **deprecated** (benchmarked every 18h instead of 6h) and suggests Sonnet 5.
- **Provider / access:** Claude API (`claude-sonnet-4-6`), claude.ai, Claude Code/Cowork, Amazon Bedrock (`anthropic.claude-sonnet-4-6`), Google Vertex AI, Microsoft Foundry; AA lists 4 API providers.
- **Release / knowledge:** released 2026-02-17; knowledge cutoff not stated in sources reviewed (Anthropic system card governs).
- **IDs:** `claude-sonnet-4-6` / `anthropic.claude-sonnet-4-6` (Bedrock).
- **Context window:** **1,000,000 tokens** (Artificial Analysis model page and llm-stats both state 1M; 200K standard / 1M beta at launch per Anthropic docs of the era — BenchLM's row still reads 200K, conflict noted), with context compaction (beta) auto-summarizing older context; >200K input = premium pricing on the whole request ($6 in / $22.50 out per 1M). Max output 64K standard (128K with the long-context beta flag).
- **Modalities:** text + images in, text out (AA-verified); reasoning yes (adaptive + extended thinking, `effort` parameter; thinking tokens bill as output); tool calls yes (function calling, structured outputs, connectors, skills).
- **Pricing (as of 2026-11-08):** **$3.00 in / $15.00 out** per 1M (unchanged — re-confirmed on the Artificial Analysis page and llm-stats, 2026-11-08); cache discount 90% (read $0.30), Batch 50% off; >200K premium tier doubles the entire request as above.
- **Architecture:** proprietary hybrid-reasoning (Claude Sonnet 4.6); parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **72.5** (Anthropic system card) / **72.1** (OSWorld-Verified leaderboard via BenchLM, 2026-11-07) — just under the 75% ref
- Claw-Eval: **67.8** (Claw-Eval leaderboard via BenchLM) — **new this pass** (previous pass: no row → N/A penalty now lifted)
- Terminal-Bench 2.1 (Vals): **57.3** (Vals AI leaderboard via BenchLM) — **new**; Terminal-Bench 2.0: **59.1** (system card, thinking off)
- τ²-bench: **79.5** aggregate (Artificial Analysis via BenchLM); vendor rows Retail **91.7** / Telecom **97.9**
- GDPval-AA (Office): **1633 Elo** (vendor table; beats Opus 4.6 1559, GPT-5.2 1524)
- MCP-Atlas: **61.3** (vendor) — under the 75% ref
- Terminal-Bench 4.0 / ALE: no rows found

Reasoning / knowledge:

- GPQA Diamond: **89.9** (Anthropic system card via BenchLM) — corroborated by Vals **85.6**; AA-GPQA Diamond **79.9** — spread noted (previous pass cited 74.1; three sources now put it 79.9–89.9)
- Humanity's Last Exam: **49** (Anthropic system card via BenchLM) vs **AA-HLE 13.3** — harness spread noted (previous pass cited 19.1)
- Artificial Analysis Intelligence Index: **24.7** (AA via BenchLM) — **new** (previous pass: no row); mid band (20–35)
- AA-LCR: **68.3** (AA via BenchLM) — **new**
- ARC-AGI-2 (Verified): **58.3** (ARC Prize leaderboard); ARC-AGI-1: 86.0
- CritPt: **0.9** (AA) — very low; Omniscience Accuracy 38.6 / Hallucination Rate 68.5 (AA)
- MATH-500: 97.8; MMLU-Pro: 79.2 (Qwen3.6 comparison table via BenchLM)

Coding:

- SWE-bench Verified: **79.6** (system card, 10-trial avg; 80.2 with prompt modification); SWE-bench (Vals): 77.4; SWE-Rebench: **60.7**
- LiveCodeBench (Vals): **82.1** — **new** (previous pass: no row)
- Vibe Code Bench (Vals): **51.48** — **new**; FrontierCode 1.1 Main: **24.3** (Cognition) — **new**; cursorBench31: 48.8
- Terminal-Bench 2.0: 59.1; Terminal-Bench 2.1 (Vals): 57.3; DeepSWE / SciCode / SWE-Pro: no verified public score found

Long context:

- 1M window (AA + llm-stats re-confirmed 2026-11-08) + compaction; **no needle/MRCR/LCR figure** → capacity only.

Multimodal:

- CharXiv: **77.4** (Anthropic system card via BenchLM) — **new**; AA-MMMU-Pro: **70.6** (AA) — **new**; Design Arena Website: 1283 (OpenRouter)
- Text + image in, text out; no video/audio/PDF rows.

### Normalized scores (1–100)

- **Tool use: 86/100.** Claw-Eval 67.8 and TB2.1 57.3 rows now found (previous pass had neither → lifted the N/A penalty), alongside best-in-table GDPval Office Elo 1633, τ² Retail 91.7 / Telecom 97.9 and OSWorld 72.5; still capped by OSWorld <75, MCP-Atlas 61.3 <75, TB2.1 57.3 deep in the mid band, and no TB4.0/ALE rows.
- **Reasoning: 83/100.** GPQA Diamond 89.9 (system card; Vals 85.6 corroborates) and HLE 49 (system card) are near/frontier-class — a large correction vs the previous pass's 74.1/19.1 reading — with LCR 68.3 solid; capped by AA Intelligence Index 24.7 (mid band 20–35), AA-HLE 13.3, CritPt 0.9, and the GPQA/HLE harness spread (AA-GPQA 79.9).
- **Context window: 95/100.** 1M re-verified on AA and llm-stats (2026-11-08) → ≥1M floor; no retrieval benchmark at any length, so 100 unreachable; BenchLM's 200K row conflicts but two sources say 1M.
- **Multimodal: 68/100.** Text + image in, text out → image band (60–70); now backed by concrete rows CharXiv 77.4 and AA-MMMU-Pro 70.6 (previous pass had only MMMB 76.1); no video/audio/PDF, no non-text out, caps at 70.
- **Coding: 82/100.** SWE-bench Verified 79.6 (Vals 77.4 corroborates) plus newly found LiveCodeBench 82.1 lift it above the previous pass; capped by FrontierCode 1.1 at 24.3, Vibe Code Bench 51.48, TB2.0 59.1 / TB2.1 57.3 far under the TB-85 frontier ref, and still no DeepSWE/SciCode/SWE-Pro rows.
- **Cost efficiency: 63/100.** Held: $3/$15 re-confirmed on AA and llm-stats (exactly the methodology's $3/$15 anchor), softened by 90% cache reads and 50% batch, penalized by the >200K whole-request premium and thinking tokens billing as output; now also undercut by Sonnet 5 at $2/$10.
- **Overall Score: 83/100.** (86+83+95+68+82)/5 = 82.8 → 83 — the near-Opus Sonnet workhorse of early 2026: best-in-table office agents, 79.6 SWE-bench, 1M context and now a verified Claw-Eval/TB2.1/LCB row set, held out of the top band by a mid AA Intelligence Index (24.7) and agent scores that sit just under the frontier refs.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM model page updated 2026-11-07 with per-row source links, Artificial Analysis model page, llm-stats model page, plus Anthropic system-card rows via those aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Claude Sonnet 4.6](https://benchlm.ai/models/claude-sonnet-4-6)
  - [Artificial Analysis — Claude Sonnet 4.6](https://artificialanalysis.ai/models/claude-sonnet-4-6)
  - [llm-stats — Claude Sonnet 4.6](https://www.llm-stats.com/models/claude-sonnet-4-6)
  - [Anthropic Claude Sonnet 4.6 system card (PDF)](https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
