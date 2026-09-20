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

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (Anthropic news pages, anotherwrapper compare tables, LLMReference, pricepertoken); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.