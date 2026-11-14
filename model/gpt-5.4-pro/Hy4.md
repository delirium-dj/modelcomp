- Source: OpenAI/GPT-5.4 Pro
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's 2026-03-05 high-performance tier of GPT-5.4, built for long-context, large-scale professional work. It was **OpenAI's first general model with native Computer Use** and set a BrowseComp record. A distinct SKU; GPT-5.4 (base), Mini, Nano and batch variants are separate.
- **Provider / access:** ChatGPT, OpenAI API and Codex; **ChatGPT Pro / Business / Enterprise / Edu plans only**. Replaced GPT-5.2 Thinking in ChatGPT. Usage quota: requests exceeding **272K tokens** count as double usage.
- **Release / knowledge:** 2026-03-05; knowledge cutoff: no verified public score found.
- **IDs:** `gpt-5.4-pro` family ID as cited; batch variant `gpt-5-4-pro-batch` is a serving profile, not a separate model. No free Zen ID verified.
- **Context window:** **1,000,000 tokens** (a third-party tracker lists 1.1M total ≈ 922K input + 128K output); the Baike article states up to 1M and can process a whole book, a full codebase or long contracts in one pass.
- **Modalities:** text and image in, text out (native computer use reads software UIs visually and drives mouse/keyboard across applications); deep "extreme thinking" / thinking-path preview with mid-reasoning user steering; **tool search** (fetch tool definitions only when needed to cut token use). No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** usage-based billing, no rate card in the Baike article. A third-party tracker (BenchGecko, data as of 2026-11-13) lists **$30 / 1M input, $180 / 1M output** for the standard variant and **$15 / $90** for batch, with ~$0.24/message — reported as third-party, not a vendor quote.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. First OpenAI general model with native computer use.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **89.3%** — a new record at launch
- OSWorld-Verified (desktop operation): **~75%** task success
- GDPval (44 occupations): **~83%** of tasks at or above industry-expert level (the Baike article attributes the 83% figure to "GPT-5.4"; cited as the family/generation figure, not silently merged as a Pro-only score)
- Native Computer Use across applications, with tool search and steerable thinking paths
- Tau3-Banking / Tau2-Bench / Terminal-Bench / AutomationBench / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found
- Third-party BenchGecko (12 benchmarks, avg **77.2**, rank **#25**): ARC-AGI **94.5%**, ARC-AGI-2 **83.3%**, GPQA Diamond **92.8%**, FrontierMath Tiers 1-3 v2 **86.8%**, FrontierMath Tier 4 v2 **58.5%**, FrontierMath 2025-02-28 **50.0%**, SimpleBench **68.9%**, WeirdML **57.4%** — labelled third-party aggregator

Reasoning / knowledge:

- GPQA Diamond **92.8%**, ARC-AGI **94.5%**, ARC-AGI-2 **83.3%** (third-party aggregator)
- Researcher Liam Price used GPT-5.4 Pro to solve **Erdős problem #1196**; the AI proof was hard for humans to read, so mathematicians including Terence Tao decoded the method and turned it into a human-readable paper (AI as "mining machine", humans as "jewellery designers")
- HLE / LCR / CritPt / Omniscience: no verified public score found

Coding:

- BenchGecko coding subscore **57.4** (third-party aggregator, #61 globally)
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M-token window with a 272K double-usage quota boundary; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 93/100.** A record 89.3% BrowseComp, ~75% OSWorld-Verified and ~83% GDPval expert-level tasks, plus the first native Computer Use in an OpenAI general model with steerable thinking and token-saving tool search; capped by no τ-bench/Terminal-Bench figure and by the double-quota penalty above 272K.
- **Reasoning: 91/100.** ARC-AGI 94.5%, ARC-AGI-2 83.3%, GPQA Diamond 92.8% and a genuine Erdős-problem solution; capped by weaker FrontierMath Tier 4 (58.5%) and by those figures coming from a third-party aggregator rather than a vendor card.
- **Context window: 93/100.** A verified 1M-token window that handles whole books/codebases/contracts; capped by the 272K double-usage quota and no published retrieval benchmark.
- **Multimodal: 84/100.** Visual UI understanding for native Computer Use (image input) with strong desktop results; capped by text-only output, no verified audio/video input, and no general multimodal benchmark score.
- **Coding: 88/100.** Codex integration and a 57.4 coding subscore with long-context codebase handling; capped by no SWE-bench / Terminal-Bench figure and a modest #61 coding rank in the aggregator.
- **Cost efficiency: 42/100.** $30/$180 per 1M (standard) is the most expensive tier in this comparison set, with premium-plan-only access and a 2x quota charge for long contexts; the $15/$90 batch variant helps. Excluded from Overall.
- **Overall Score: 90/100.** Half-up mean of 93, 91, 93, 84, 88 = 89.8 → 90. Best fit: high-stakes long-document professional work, deep web research and desktop automation where the cost is justified.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike GPT-5.4 Pro article (release, 1M context, 272K quota, native Computer Use, BrowseComp 89.3%, OSWorld-Verified 75%, GDPval 83%, Erdős #1196), with a third-party aggregator (BenchGecko) used only for the per-token price and its 12-benchmark score list — explicitly labelled third-party. The GDPval 83% figure is attributed to the GPT-5.4 family wording in the source, not silently merged as a Pro-only result. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [GPT-5.4 Pro — 百度百科 (release, 1M context, BrowseComp, OSWorld, GDPval, pricing access)](https://baike.baidu.com/item/GPT-5.4%20Pro/67451275)
  - [GPT-5.4 Pro — BenchGecko (third-party price + 12-benchmark scores)](https://www.benchgecko.ai/model/gpt-5-4-pro)
