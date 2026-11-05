# Claude Sonnet 4.6 — findings by Big Pickle

- Source: Anthropic (`claude-sonnet-4-6`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's Feb 2026 mid-tier hybrid-reasoning model that compresses multi-day coding projects into hours — upgrades across coding, computer use, long-context reasoning, agent planning, knowledge work and design, with a 1M-token context window in beta. Approaches Opus-level intelligence at nearly a fifth of the price; the default claude.ai model for Free/Pro from Feb 2026.
- **Provider / access:** claude.ai / Cowork / Claude Code, Anthropic API (`claude-sonnet-4-6`), OpenRouter, AWS Bedrock, GCP Vertex AI, Microsoft Foundry, Vercel AI Gateway. Proprietary.
- **Release / knowledge:** 2026-02-17; knowledge cutoff 2026-01.
- **IDs:** `claude-sonnet-4-6` (Anthropic; proprietary).
- **Context window:** 1,000,000 tokens (beta); 64K max output; ~42 tok/s measured (anotherwrapper).
- **Modalities:** text + image + file inputs; text output; hybrid reasoning (thinking default with effort control), tool use, computer use, structured outputs, prompt caching, web search. 1× guaranteed / 3× ceiling resource handling.
- **Pricing (as of 2026-09-20):** $3.00 in / $15.00 out per 1M (cache read $0.50-0.75, cache write ~$3.75; up to 90% savings with caching); 50% savings with batch.
- **Architecture:** Proprietary decoder-only hybrid (extended thinking + instant mode); unknowns withheld.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **59.1%** (thinking off, anotherwrapper; Anthropic-published result ~59-61% on Terminus-2 harness).
- OSWorld: **78.5%**; MCP Atlas: **61.3%** (anotherwrapper).
- BrowseComp: **74.7%**; DeepSWE v1.1: **30%**; Finance Agent v2: **51.0%**; Finance Agent: **63.3%**; Legal Agent Benchmark: **5.4%** (anotherwrapper).
- Vending-Bench Arena (simulated long-horizon business): beats Sonnet 4.5 — invests in capacity early, pivots to profit at the end (Anthropic).

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (anotherwrapper; AA GPQA 91.1% family-quartered).
- HLE: **46.8%** (anotherwrapper); ARC-AGI 2: **58.3%**; MMLU: **89.3%**.
- AA Intelligence Index (pricepertoken): ~56-57 territory for this class (Anthropic provider-wide 63.1 max is Opus 5).

Coding:

- SWE-bench Verified: **79.6%** (avg 10 trials; 80.2% with prompt modification, Anthropic).
- SWE-bench Multilingual: **59%**; LiveBench: **75.5%**; Arena Code Elo: **~1,524** (anotherwrapper).
- τ²-Bench Retail: **91.7%**; τ²-Bench Telecom: **97.9%**.
- Claude Code preference: flights showed ~70% user preference vs Sonnet 4.5; preferred to Opus 4.5 59% of the time (less overengineering, better instruction following).

Long context:

- 1M beta context with effective cross-context reasoning; Vending-Bench and long-horizon codebase planning highlighted; GraphWalks-BFS 128K style ranked readings not surfaced for 4.6 in my trail.

Multimodal:

- MMMU-Pro: **75.6%**; MMMU: **60.4%** (anotherwrapper); image/pdf/file inputs, text out.

### Normalized scores (1–100)

- **Tool use: 82/100.** OSWorld 78.5%, MCP Atlas 61.3%, BrowseComp 74.7% are solid agentic numbers; Terminal-Bench 2.0 59.1% and DeepSWE 30% are mid-tier against 2026 frontier agents.
- **Reasoning: 84/100.** GPQA 89.9%, HLE 46.8%, ARC-AGI 2 58.3% — strong, Opus-adjacent for a Sonnet.
- **Context window: 84/100.** 1M beta with demonstrated long-horizon reasoning and 64K output.
- **Multimodal: 80/100.** Text/image/file + design work; MMMU-Pro 75.6%; no audio.
- **Coding: 80/100.** SWE-bench Verified 79.6% and the Claude Code UX wins are real, but DeepSWE 30% and TB 2.0 sub-60% cap it below the coding frontier.
- **Cost efficiency: 84/100.** $3/$15 with caching at Sonnet price for near-Opus work — the value story of the 4.x era.
- **Overall Score: 82/100.** Mean of the five quality dims (82+84+84+80+80)/5 = 82.0 → 82. The best coding-to-dollar ratio of Anthropic's Feb 2026 lineup.

## Re-verification — 2026-11-05 (46 days after original)

Re-run requested by the user to compare the original findings against current data. Original findings above are preserved; corrections are noted below.

| Dimension | 2026-09-20 | 2026-11-05 | Change |
| --- | --- | --- | --- |
| Tool use | 82 | 81 | **−1** (OSWorld corrected) |
| Reasoning | 84 | 84 | — |
| Context window | 84 | 84 | — (1M beta) |
| Multimodal | 80 | 80 | — |
| Coding | 80 | 80 | — |
| Cost efficiency | 84 | 84 | — |
| **Overall** | **82** | **82** | **—** |

**BenchLM composite: 55.66/100, #71 of 1014**, from 40 of 739 rows (partial coverage — conservative, and not comparable to this project's normalized scale).

**One real correction: OSWorld 78.5% → 72.1%.** BenchLM carries **OSWorld-Verified 72.1%** for this model, sourced to the OSWorld-Verified leaderboard, against the 78.5% the original took from a comparison table. The verified-board number is the one to keep, and it is what moves Tool use 82 → 81. The rest of the agentic profile re-publishes as recorded: Terminal-Bench 2.0 **59.1%**, τ²-bench **79.5%**, Claw-Eval **67.8%**, CyberGym **65.2%**, Gert Labs **62.92%**.

**Newly measured, and the real ceiling markers:** **OSWorld 2.0 8.3%**, **ApprenticeBench 2%**, **MazeBench 0%**, JobBench **36.9%**, Terminal-Bench 2.1 (Vals) **57.3%**. The jump from 72.1% on the verified 2024-era suite to 8.3% on OSWorld 2.0 is the clearest sign that the benchmark itself moved, not that the model regressed.

**Coding re-confirmed and extended:** SWE-bench Verified **79.6%**, SWE-bench (Vals) **77.4%**, LiveCodeBench (Vals) **82.1%**, React Native Evals **80.6%**, Vibe Code Bench **51.48%**, SWE-Rebench **60.7%**, CursorBench 3.1 **48.8%**, FrontierCode 1.1 **24.3%**. Strong in-repo editing, weak greenfield — same shape as Opus 4.6.

**Reasoning:** GPQA **89.9%** (Vals 85.6%), HLE **49%** (original recorded 46.8% — a small upward revision), ARC-AGI-2 **58.3%**, AA-LCR **68.3%**, CritPt **0.9%**, AA Intelligence Index **24.7**, AA-HLE **13.3%**. AA-Omniscience: **38.6% accuracy / 68.5% hallucination**, index −3.5.

**Context caveat.** The 1M window is a beta header; BenchLM catalogues the standard window as **200K**. The score stays pinned to the beta configuration the slug was researched on, but a caller without the beta header gets 200K.

**Pricing.** **$3.00 in / $15.00 out**, cache read **$0.30** (models.dev; the original listed $0.50–0.75, so cache reads are cheaper than recorded). Unchanged list price.

**Lifecycle.** Superseded by **Claude Sonnet 5** (BenchLM 64.45) and **Sonnet 5.5** (81.89). Still served on Zen, no deprecation notice.

**Net assessment.** Holds up. The only number that moved is the one that came from a secondary table rather than the leaderboard, and it moved down by 6 points without changing the overall verdict.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** - 2026-09-20
- Re-verified by: **Big Pickle (opencode/big-pickle)** — 2026-11-05
- Method: public web research (Anthropic news pages, anotherwrapper compare tables, LLMReference, pricepertoken; BenchLM, Vals AI and models.dev on re-run); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Sonnet 4.6 system card](https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf)
  - [BenchLM — Claude Sonnet 4.6](https://benchlm.ai/models/claude-sonnet-4-6)
  - [OSWorld-Verified leaderboard](https://os-world.github.io/)
  - [models.dev — provider catalogue (opencode pricing/limits)](https://models.dev/api.json)
  - [OpenCode Zen — models and pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.6_2.md`, using the same headings.