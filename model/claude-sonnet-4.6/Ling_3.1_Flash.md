# Claude Sonnet 4.6 — findings by Ling 3.1 Flash

- Source: Anthropic (`anthropic/claude-sonnet-4.6`; API `claude-sonnet-4-6`, claude.ai, Claude Cowork, Claude Code, Bedrock, Google Cloud, Microsoft Foundry)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's February-2026 Sonnet flagship ("most capable Sonnet yet"; now Active-legacy, retirement not before 2027-02-17, superseded by Sonnet 5/5.5) — OSWorld-Verified 78.5%, τ²-Bench 75.7%, GPQA Diamond 87.4–89.9%, SWE-bench Verified 75.2% (80.2% with Anthropic's prompt modification), with a 1M context at standard pricing; the default model on Free/Pro plans.
- **Provider / access:** Anthropic API (adaptive thinking — extended thinking deprecated; default effort `high`; context compaction beta), claude.ai, Claude Cowork, Claude Code, Amazon Bedrock, Google Cloud, Microsoft Foundry (Claude Platform on AWS); Batch API 50% off ($1.50/$7.50) with 300K max output (beta); US-only inference at 1.1×. `noFreeId`.
- **Release / knowledge:** 2026-02-17; reliable knowledge cutoff Aug 2025, training-data cutoff Jan 2026.
- **IDs:** `anthropic/claude-sonnet-4.6` / `claude-sonnet-4-6`. NOTE: the repo `meta.json` is stale — it says "200K" context and "Paid-tier pricing"; the model has had a 1M-token window at standard pricing since launch (beta) / pricing normalization (Claude 4.6+ includes the full 1M at standard rates).
- **Context window:** 1,000,000 tokens (standard pricing — a 900K request bills like a 9K one); 128K max output (300K Batch API beta).
- **Modalities:** text, image in; text out.
- **Pricing (as of 2026-10-02):** $3.00/$15.00 per 1M input/output; cache read $0.30/M (10% of input); 5m cache write $3.75/M, 1h $6.00/M; blended (3:1) $6.00/M; 55 tok/s, 0.73s TTFT.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **78.5%** (modelpricewatch) — strong computer use; Box's insurance benchmark: **94%** ("highest-performing model we've tested for computer use")
- τ²-Bench: **75.7%** (themodelbeat)
- APEX: **43.0%** (themodelbeat)
- Terminal-Bench 2.1: **59.1%** (modelpricewatch) — well under the 85% frontier bar (Terminal-Bench 2.0, Terminus-2, thinking off: figure not captured in the materials reviewed)
- Vending-Bench Arena: outperforms Sonnet 4.5 (invests in capacity early, pivots to profitability) — figure not captured
- AA Intelligence Index: **30.1** (v4.3 composite)
- MCP Atlas / BrowseComp / Toolathlon: no verified public score found (Anthropic ran BrowseComp with tools/compaction up to 10M tokens; figure not captured)

Reasoning / knowledge:

- GPQA Diamond: **87.4%** (themodelbeat) / **89.9%** (modelpricewatch) — just under the 90%+ frontier band
- Humanity's Last Exam (with tools: search, fetch, code execution, programmatic tool calling, compaction at 50K up to 3M total tokens, max effort, adaptive thinking): **33.6%** (themodelbeat) / **19.1%** (modelpricewatch) — configuration-dependent
- ARC-AGI-2: **58.3%** (modelpricewatch) / **60.4%** at high effort (themodelbeat; the shown score reflects max effort)
- AIME 2024/2025: **85.8%** (themodelbeat) / **83%** (modelpricewatch)
- FrontierMath: **32.4%**; FrontierMath Tier 4: **8.x%**
- SimpleQA Verified: **35.5%**; MMMLU: **89.3%** (#4 of 34); WeirdML: 66.1%
- AA-Omniscience Index: **12.2**; LMSYS Chatbot Arena: **1472.6 Elo**

Coding:

- SWE-bench Verified: **75.2%** (10-trial average) — **80.2%** with Anthropic's prompt modification
- LiveCodeBench: **72.4%** (modelpricewatch)
- WebDev Arena: **1521** (Epoch)
- SciCode: **50.1%** — under the 55% reference
- Terminal-Bench 2.1: **59.1%** — see above
- DeepSWE / SWE-bench Pro / AA Coding Index: no verified public score found

Long context / multimodal:

- 1M window; context compaction (beta) increases effective length; no MRCR/RULER/AA-LCR score published
- Matches Opus 4.6 on OfficeQA (enterprise documents: charts, PDFs, tables) per Anthropic; no MMMU/Video-MMMU figure captured

### Normalized scores (1–100)

- **Tool use: 77/100.** MCP Atlas **69.5%**, τ²-Bench Telecom **97.9%** / Retail **91.7%**, OSWorld-Verified **78.5%** and BrowseComp **74.7%** lead the Sonnet tier, with Toolathlon Pass@1 49.4% and the Claw-Eval #1 Score (81.4%) supporting; the Terminal-Bench 2.1 source spread (59.1% modelpricewatch / 63.1% AA / 67.0% RankedAGI) and the AA Intelligence Index of 30.1 cap the score.
- **Reasoning: 77/100.** GPQA Diamond 87.4–89.9% sits just under the 90%+ frontier band, with HLE **46.8%** with tools (Sonnet 5 launch comparison; clears the 40%+ band; other sources read 19.1–33.6% — configuration-dependent), ARC-AGI-2 58.3–60.4%, MMMU-Pro 74.5% and CharXiv Reasoning 72.4% supporting; FrontierMath 32.4%, SimpleQA Verified 35.5% and the AA-Omniscience Index of 12.2 cap the score.
- **Context window: 95/100.** 1M-token window at standard pricing (no >200K surcharge) with context compaction in beta; MRCR v2 (8-needle) **84.9%** at 128K average, but no ≥98%-at-512K+ retrieval figure, so 100 is not justified.
- **Multimodal: 65/100.** text/image in with text out — the +image-in band (60–70); OfficeQA parity with Opus 4.6 and MMMU-Pro 74.5% support, no Video-MMMU figure captured.
- **Coding: 74/100.** SWE-bench Verified 79.6%, Code LiveBench **87.0%** (rank 7) and SWE-bench Pro **58.1%** are solid Sonnet-tier results with WebDev Arena 1521 supporting; DeepSWE **29.9–32.0%**, SciCode 50.1% (under the 55% reference) and the AA Coding Agent Index of 49.4 cap the score.
- **Cost efficiency: 60/100.** $3/$15 per 1M (blended $6.00/M) is the methodology's ~60 anchor exactly; 10%-of-input cache reads ($0.30/M) and half-rate Batch API ($1.50/$7.50) are offsets; the 1.1× US-only-inference multiplier is a premium.
- **Overall Score: 78/100.** (77+77+95+65+74)/5 = 77.6 → 78 — a strong February-2026 Sonnet (OSWorld 78.5%, τ²-Bench 97.9%/91.7%, GPQA ~88–90%, MCP Atlas 69.5%, 1M context at $3/$15 with 10% cache reads) whose Terminal-Bench 2.1 spread (59.1–67.0%), DeepSWE (29.9–32.0%) and HLE configuration variance place it below the October-2026 agentic frontier.

---

## Update 2026-10-08 (6-day re-research)

Fills the MCP Atlas, BrowseComp, Toolathlon, DeepSWE, SWE-bench Pro, MRCR and MMMU gaps:

- **MCP Atlas: 69.5%** (AI Release Tracker); **BrowseComp: 74.7%** (RankedAGI, rank 17); **Toolathlon Pass@1: 49.4%** (RankedAGI, rank 5)
- **DeepSWE: 31.8% v1 / 29.9% v1.1** (high effort, mini-swe-agent, BenchSift; pass@4 56.6%, $5.52/task, 76.2K output tokens, ~47 min; RankedAGI reads 32.0%)
- **SWE-bench Pro: 58.1%** (RankedAGI, rank 12); SWE-bench Verified **79.6%** (RankedAGI; vs 75.2% 10-trial / 80.2% prompt-mod)
- **MRCR v2 (8-needle): 84.9%** at 128K average (AI Release Tracker) — fills the long-context gap
- Terminal-Bench 2.1: **67.0%** (RankedAGI, rank 11) / **63.1%** (AA's own run) / 59.1% (modelpricewatch); Terminal-Bench 2.0: **59.1%** (RankedAGI) — fills the TB 2.0 gap
- **HLE: 34.6%** no-tools / **46.8%** with tools (Sonnet 5 launch comparison table; vs themodelbeat's 33.6% / modelpricewatch's 19.1% — configuration-dependent)
- Code LiveBench **87.0%** (rank 7); Agentic Code LiveBench 63.3% (rank 6); AA Coding Agent Index 49.4; CyberGym 65.2%; Svelte Bench 100.0%
- **MMMU-Pro: 74.5%**; CharXiv Reasoning 72.4%; Finance Agent v2 51%; CursorBench v3.1 49%; Next.js Evals 58%; Blueprint-Bench 2 6.7%; BullshitBench v2 91%; BU Bench 62%
- GDPval-AA 1675–1676 (rank 7); GDPval-AA v2 1395; Vending Bench 2 $7,204.14 (rank 4); NYT Connections 85.7%; Arena Elo Text 1472 / Code 1521 (Code Arena 1525, rank 1)
- SWE-Atlas: Codebase QnA 31.2 score / 70.3 pass@1, Refactoring 32.21, Test Writing 31.76
- τ²-Bench: Telecom **97.9%**, Retail **91.7%** (llm-stats)
- **Claw-Eval (arXiv 2604.06132, Peking University)**: General 81.3/81.4/68.3; Multi-turn 81.9/89.5/65.8; **Overall 81.4/82.9/67.8 — #1 Score of 14 models** (Pass³ 2nd to Opus 4.6's 70.4); Multimodal 50.9/43.6/23.8 (Video 15.4, Doc & Image 40.9, Code 25.9)
- **Scores revised** (see Normalized scores): Tool 74→77, Reasoning 76→77, Coding 72→74, Overall 76→78 on the filled gaps

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08)
- Method: public internet research (Anthropic Sonnet 4.6 launch + platform docs + pricing, modelpricewatch, themodelbeat, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4_6.md`, using the same headings.
