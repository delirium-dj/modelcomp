# GPT-5.5 Pro — findings by Laguna XS 2.1

- Source: OpenAI (`gpt-5.5-pro`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's premium extra-compute deployment of GPT-5.5 (2026-04-23) — same underlying weights with additional parallel test-time compute for higher accuracy on hard queries, at 6x the standard price.
- **Provider / access:** OpenAI API (`gpt-5.5-pro`, Responses API), ChatGPT (Pro/Business/Enterprise), OpenRouter. Batch at $10/$45; Flex $15/$90.
- **Release / knowledge:** 2026-04-23; knowledge cutoff December 2025 (shared with GPT-5.5).
- **IDs:** `gpt-5.5-pro` (OpenAI API); `openai/gpt-5.5-pro` (OpenRouter). No Zen Free ID found.
- **Context window:** 1,050,000 tokens (922K usable input per OpenRouter); 128K max output. >272K input: $60/$270.
- **Modalities:** text + image in; text out; reasoning yes (effort control, xhigh research environment for Pro compute rows); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-04):** $30 / $180 per 1M in/out; Batch $10 / $45; Flex $15 / $90; web search tool $10/1K calls; no native cached-input discount listed.
- **Architecture:** proprietary; same weights as GPT-5.5 with extra parallel test-time compute.

### Raw benchmarks found

Agent / tool use:

- BrowseComp (Pro compute, xhigh): **90.1%** (OpenAI; vs GPT-5.5 standard 84.4, rank 6/48 per BenchmarkList)
- GDPval: **82.3%** wins/ties (OpenAI launch; rank 3/18)
- GDPval-AA: **1785 Elo** (Artificial Analysis independent — leads GPT-5.5's 1769)
- OSWorld-Verified: **78.7%** (standard-weights row, shared with GPT-5.5)
- MCP Atlas: **75.3%** (shared); Tau2-bench Telecom **98.0%** (shared launch row)
- TaxBench: **29.3% mean pass^5** (rank 1/16, BenchmarkList)
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- HLE: **57.2% with tools / 43.1% no tools** (Pro compute; rank 10/478 per BenchmarkList; field leader Opus 5.5 67.7)
- GPQA Diamond: **93.6%** (shared standard-weights row)
- ARC-AGI-1: **96.5%** (rank 9/97); ARC-AGI-2: **84.6%** (rank 10/99, $10.51/task)
- FrontierMath (2025-02 private): **52.4%**; Tier 4: **39.6%** (Pro compute)
- AA Intelligence Index: **55.0** (xhigh compute, AA)
- CritPt: **30.6% xhigh** (AA via OpenRouter)
- SimpleBench: **76.9%** (rank 3/36)

Coding:

- Terminal-Bench 2.0: **82.7%**; Terminal-Bench 2.1: **78.2%** (shared standard-weights rows)
- SWE-bench Verified: **82.6%** (Vals.ai, standard weights); SWE-bench Pro: **58.6%** (shared)
- LiveCodeBench: **91.0%** (approximate standard score via llmreference)
- GeneBench: **33.2%** (rank 1/16); GeneBench-Pro: **20.5%** (Pro extended)
- BLXBench: **44.5%** (rank 14/25)

Long context:

- 1.05M window shared with GPT-5.5 (MRCR v2 94.8% at 128K on the standard card); no separate Pro long-context number published

### Normalized scores (1–100)

- **Tool use: 91/100.** BrowseComp 90.1%, GDPval 82.3%, GDPval-AA 1785 (leader among the 5.5 pair) and TaxBench #1 are frontier-grade; capped by shared-harness rows for OSWorld/MCP Atlas and no fresh agentic numbers since April.
- **Reasoning: 90/100.** HLE 57.2% with tools, ARC-AGI-2 84.6%, FrontierMath T4 39.6% and AA Index 55 (xhigh) beat standard GPT-5.5 across the board; capped by Opus 5.5's 67.7% HLE leading the field and CritPt 30.6%.
- **Context window: 95/100.** 1.05M window (95–100 tier) shared with GPT-5.5; no ≥98%-at-512K+ evidence and the 272K billing step is a caveat.
- **Multimodal: 65/100.** Text + image in, text out only (image-in band); no audio/video input found.
- **Coding: 89/100.** TB 2.0 82.7%, SWE-bench Verified 82.6%, LiveCodeBench 91.0% and GeneBench #1 — but every coding row is the shared standard-weights measurement, not Pro compute; capped for that plus BLXBench 44.5%.
- **Cost efficiency: 15/100.** $30/$180 is double the methodology's $10/$50 (~30) anchor — the most expensive mainstream API tier found; Batch ($10/$45) and Flex ($15/$90) soften it only somewhat.
- **Overall Score: 86/100.** Mean of (91, 90, 95, 65, 89) = 86 — worth it only for high-stakes reasoning where the extra compute's accuracy edge (HLE +5, BrowseComp +5.7) justifies 6x GPT-5.5's price.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (OpenAI launch post + developer docs, BenchmarkList, Robots Atlas, llmreference, o-mega, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
