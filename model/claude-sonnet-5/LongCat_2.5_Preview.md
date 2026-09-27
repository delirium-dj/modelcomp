# Claude Sonnet 5 — findings by LongCat 2.5 Preview

- Source: Anthropic (`claude-sonnet-5`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's most agentic Sonnet — near-Opus-4.8 intelligence for coding, agents, and everyday professional work at Sonnet speed and price; default model on Free and Pro plans.
- **Provider / access:** Anthropic Claude API — `claude-sonnet-5` (Chat Completions-style messages API; adaptive thinking on by default, `effort` steers depth). Also AWS Bedrock, Google Vertex, Azure Foundry. Released 2026-06-30.
- **Release / knowledge:** Released 2026-06-30; reliable knowledge cutoff January 2026.
- **IDs:** `anthropic/claude-sonnet-5` (Bedrock/Vertex/Foundry), `claude-sonnet-5` (Claude API). No Zen Free ID — paid only.
- **Context window:** 1M tokens; 128K max output (300K with the output-300k beta header on Batches API).
- **Modalities:** Text and image in; text out; reasoning yes (adaptive, always on); tool calls yes (function calling, computer use, code execution); structured outputs; prompt caching.
- **Pricing (as of 2026-09-27):** $2.00/M in, $10.00/M out (introductory $2/$10 ended 2026-08-31; standard $3/$15 now applies — the $2/$10 rate was still the published list price on anthropic.com at verification); cache read $0.20/M; Batch API 50% off; US-only inference 1.1x. Paid only.
- **Architecture:** Proprietary; no public parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **80.4%**; Terminal-Bench 2.1 (Vals): **74.53%**; Terminal-Bench 3.0: **14.6%**
- BrowseComp: **84.7%** (rank 7/54)
- OSWorld-Verified: **81.2%**; Vibe Code Bench: **86.90%** (Vals)

Reasoning / knowledge:

- GPQA Diamond: **90.53%** (extra-high; 80.3% at max — rank 39/270)
- HLE: **43.2%** no tools / **57.4%** with tools (rank 9/185)
- SimpleBench: **57.9%**

Coding:

- SWE-bench Verified: **85.2%** (rank 7/114)
- SWE-bench Pro: **63.2%** (rank 15/70)
- SWE-bench (Vals): **79.6%**; LiveCodeBench (Vals): **82.4%**
- DeepSWE: **54%**; FrontierCode 1.1 Main: **42.7%**; cursorBench32: **61.5%**
- Text Arena (Coding) Elo: **1544.16**; Creative Writing Elo: **1787.60**

Long context:

- BrowseComp uses a 10M-token limit with context compaction (system card); no MRCR/RULER absolute published for this exact model ID.

Multimodal extras:

- CharXiv: **88.3%** (BenchLM)

### Normalized scores (1–100)

- **Tool use: 85/100.** TB2.0 80.4%, BrowseComp 84.7% and OSWorld 81.2% are near-frontier; TB2.1 (Vals) 74.53% and TB3.0 14.6% keep the dimension just under 90.
- **Reasoning: 85/100.** GPQA 90.53% (extra-high) and HLE 57.4% with tools are frontier-tier; SimpleBench 57.9% and the split between max/extra-high GPQA settings hold it at the band floor.
- **Context window: 95/100.** 1M tokens with 128K output earns the ≥1M tier; no published 512K+ retrieval result to confirm the top of the band.
- **Multimodal: 70/100.** Text/image input lands in the +image-in 60–70 band; no audio/video input and text-only output cap it there.
- **Coding: 82/100.** SWE-bench Verified 85.2%, Vibe Code Bench 86.9% and TB2.0 80.4% are strong; SWE-bench Pro 63.2% and DeepSWE 54% keep it out of the frontier band.
- **Cost efficiency: 60/100.** $3/$15 standard pricing matches the methodology's $3/$15 ≈ 60 reference point (the $2/$10 intro rate scored ~75 during its window).
- **Overall Score: 83/100.** Mean of the five quality dims (85+85+95+70+82)/5 = 83.4 → 83. Best-fit: default Sonnet-tier driver for agentic coding and everyday professional work — most of the capability at roughly half the Opus price.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (Anthropic announcement + system card, DataLearner, BenchLM, Vals.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
