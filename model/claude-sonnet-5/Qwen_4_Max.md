# Claude Sonnet 5 — findings by Qwen 4 Max

- Source: Anthropic/claude-sonnet-5
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's June 30, 2026 "most agentic Sonnet yet" — performance close to Opus 4.8 at lower prices, a substantial step over Sonnet 4.6 in reasoning, tool use, coding, and knowledge work. Makes plans, uses browsers/terminals, runs autonomously, checks its own output unprompted. Default model for Free and Pro plans at launch. **Deprecated** per AA — Claude Sonnet 5.5 succeeded it.
- **Provider / access:** Claude API (`claude-sonnet-5`), all Claude plans (Free/Pro default; Max/Team/Enterprise), Claude Platform on AWS, Claude in Microsoft Foundry, Vertex (coming at launch); AA lists 9 API providers. Cyber Verification Program available (native platform, AWS, Foundry). Proprietary. AA tracks the **Max** effort variant.
- **Release / knowledge:** Released 2026-06-30. Knowledge cutoff not stated in sources read. Safety: lower hallucination/sycophancy and misaligned-behavior rates than Sonnet 4.6 (but higher than Opus 4.8/Mythos Preview); **not deliberately trained on cyber tasks** — 0.0% working Firefox-147 exploits (slightly higher partial success than 4.6); launched with cyber safeguards on by default (Opus 4.7/4.8-class, less strict than Fable 5's).
- **IDs:** `claude-sonnet-5`; predecessor Sonnet 4.6, successor Sonnet 5.5; system card at anthropic.com/claude-sonnet-5-system-card.
- **Context window:** **1M tokens** (AA + vendor); no long-context surcharge documented in sources read. AA-LCR **82.0** (strong); no MRCR 1M row published. Caveat: updated tokenizer maps the same input to **1.0–1.35× more tokens** (effective capacity/cost shift). 90% cache discount.
- **Modalities:** **Text and image in; text out** (AA-confirmed). CharXiv **88.3** (77.0 no-tools), AA-MMMU-Pro 77.3, SWE-bench Multimodal 28.1, ParseBench 61.16. No audio/video input.
- **Pricing (as of 2026-11-12):** **$2 in / $10 out per 1M — permanent** (Aug 10, 2026 changelog: intro pricing made permanent; the $3/$15 standard planned for Sept 1 was cancelled; launch charts still show $3/$15). Cache hit $0.20 (90% discount, llm-stats); AA blended $1.54 (7:2:1). Performance (Max): **101 tok/s**, TTFT **132.42s** (very high — max-effort thinking; class median 13.48s). Rate limits raised for higher effort levels.
- **Architecture:** Proprietary, size undisclosed; reasoning model with selectable effort levels up to **xhigh** (extra high) — vendor cost-performance curves on BrowseComp/OSWorld-V show medium effort as the efficiency sweet spot, higher effort matching Opus 4.8 on some tasks. Updated tokenizer (same change as Opus 4.7).

### Raw benchmarks found

Vendor-reported (Claude Sonnet 5 System Card, via BenchLM attribution):

- Agent/tool: TB2.1 **80.4**, BrowseComp **84.7** (chart corrected June 30 to the standard 10M-token-budget methodology with compaction + programmatic tool calling), OSWorld-Verified **81.2**, GDPval-AA **1,603 Elo**
- Coding: SWE-bench Verified **85.2**, SWE-bench Pro **63.2**, SWE-bench Multilingual **78.3**, SWE-bench Multimodal 28.1
- Reasoning/knowledge: HLE w-tools **57.4**, HLE no-tools **43.2**
- Multimodal: CharXiv **88.3** (77.0 without tools)

Other vendors' cards (cross-model columns): Google Gemini 3.8 Flash card — DeepSWE **53.8**, TB4.0 **12.4**, OSWorld 2.0 **42.6**, GDPval-AA **1,584**, HLE-Verified 31.0, LABBench2 80.1; Anthropic Opus 5.5 card — TB4.0 **10.3**, FrontierCode 1.1 **42.4**; Anthropic Sonnet 5.5 card — OSWorld 2.1 **57.0**.

Independent runs:

- AA (Max): live index **N/A** (deprecated); BenchLM carries historical **38.2** (version unstated — never compared with v5.0.1 indices); AA-HLE **41.3**, AA-GPQA **91.1**, AA-Omniscience **16.5** (accuracy 40.1, hallucination 39.4), AA-LCR **82.0**, CritPt **16.9**, GDPval-AA normalized **48.2%**, AA Coding **71.5**, AA Agentic **44.3**, AA-SciCode 54.3, AA-MMMU-Pro 77.3, AA-TB2.1 **80.5** (matches vendor), EnterpriseOps-Gym 44.7, Tau3 Banking 37.3, AnalystAgent 46.3
- Vals AI: SWE-bench **79.6**, TB2.1 **74.5**, LiveCodeBench **82.4**, GPQA-D **88.9**, MMLU-Pro **87.5**
- Other: TB4.1 **12.1**, TB3.0 **14.6**, FrontierCode 1.1 Main **42.7** (Cognition run), CursorBench 3.2 **61.5** / 4.0 **34.1**, FrontierMath v2 **65.614** (T1-3) / **29.268** (T4), VulcanBench CII 89.2, ApprenticeBench 16, MazeBench 0, ParseBench 61.16, Design Arena 1,269; MorphLLM SWE-V 85.2 / SWE-Pro 63.2 (matches vendor); Gray Swan IPI ASR@15 **6.7** (cross-model safety table; lower = safer); BenchLM aggregate **64.23/100, #36 of 1026** (58/815 coverage, conservative)

### Normalized scores (1–100)

- **Tool use: 87/100.** BrowseComp 84.7, OSWorld-V 81.2, TB2.1 80.4/80.5 (vendor ≈ AA), GDPval 1,603 Elo / 48.2% normalized, AA Agentic 44.3, AnalystAgent 46.3, effort-scaled autonomy near Opus 4.8 — elite for its price; capped by OSWorld 2.0 **42.6** / 2.1 57.0, Tau3 Banking 37.3, ApprenticeBench 16, MazeBench 0, and Vals TB2.1 74.5.
- **Reasoning: 88/100.** HLE **57.4 w-tools** / 43.2 no-tools (vendor — above Opus 4.6's 53.0), GPQA 91.1 (AA) / 88.9 (Vals), MMLU-Pro 87.5, FrontierMath v2 65.6/29.3, LABBench2 80.1, Omniscience 16.5 with 39.4% hallucination (good factuality); capped by CritPt 16.9, AA-HLE 41.3 vs vendor 57.4 (tools/harness gap), HLE-Verified 31.0, and no ARC rows published.
- **Context window: 89/100.** 1M with no documented surcharge, AA-LCR **82.0** (well above Opus 4.6's 67.0), 90% cache discount, compaction used in agentic-search methodology; deducted for no MRCR 1M deep-retrieval evidence and the 1.0–1.35× tokenizer inflation (same text consumes more of the window).
- **Multimodal: 76/100.** Text + image in only (AA-confirmed); CharXiv **88.3** (strong chart reasoning), MMMU-Pro 77.3, SWE-Multimodal 28.1, ParseBench 61.16; capped by no audio/video input, Design Arena 1,269 (mid-pack), and modest grounded-vision coverage.
- **Coding: 86/100.** SWE-V **85.2**, SWE-Pro **63.2**, SWE-Multilingual 78.3, TB2.1 80.4, LCB 82.4, Vals SWE 79.6, AA Coding 71.5, SciCode 54.3, VulcanBench 89.2 — near-Opus-4.8 agentic coding at 40% of its price; capped by DeepSWE **53.8**, TB4.0 **10.3–12.4** / TB4.1 12.1 / TB3.0 14.6 (weak next-gen terminal), CursorBench 4.0 34.1, FrontierCode 1.1 ~42.5.
- **Cost efficiency: 80/100.** $2/$10 **permanent** with 90% cache ($0.20 hit, $1.54 blended) and Free/Pro-plan default — near-Opus-4.8 capability at $2/$10 vs $5/$25 is exceptional price-performance, with effort levels as a cost dial; deducted for tokenizer inflation (up to +35% tokens for the same input), deprecated status (5.5 succeeded it at the same price), and 132s max-effort TTFT.
- **Overall Score: 85.2/100.** Mean of the five quality dims (87+88+89+76+86)/5 = 85.2. Best-fit (historical): summer–autumn 2026 default agentic workhorse — autonomous coding, browser/terminal agents, and enterprise knowledge work where Opus-class quality was needed at Sonnet-class cost; today prefer Sonnet 5.5 — Sonnet 5 remains notable for SWE-V 85.2 / SWE-Pro 63.2 at $2/$10 and unusually strong agentic safety (Gray Swan 6.7, default cyber safeguards).

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (Anthropic's official launch post fetched in full including changelogs/footnotes, Sonnet 5 System Card rows via BenchLM's source attribution, Artificial Analysis' live Max page, Vals AI and cross-vendor card columns via BenchLM, llm-stats rate card via search); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: pricing $3/$15 (launch charts/planned standard) vs $2/$10 (intro made permanent Aug 10 — current); GDPval-AA 1,603 (vendor) vs 1,584 (Google card); TB4.0 10.3 (Anthropic Opus 5.5 card) vs 12.4 (Google card); FrontierCode 1.1 42.4 (Anthropic) vs 42.7 (Cognition run); TB2.1 80.4/80.5 (vendor/AA) vs 74.5 (Vals) — harness gap; HLE 57.4 w-tools (vendor) vs 41.3 (AA) vs 31.0 HLE-Verified (Google) — different benchmarks/tools; AA index 38.2 historical/version-unstated vs live N/A (deprecated) — never compared with v5.0.1 indices. OSWorld-Verified 81.2 ≠ OSWorld 2.0 42.6 ≠ OSWorld 2.1 57.0 (different versions; 2.1 row from the Sonnet 5.5 card). Vendor's Sonnet 4.6 comparison scores were revised (HLE 34.6/46.8, OSWorld-V 78.5) — noted, not mixed with launch figures. Identity: Sonnet 5 ≠ Sonnet 4.6 ≠ Sonnet 5.5; Max is an effort variant, not a separate model.
- Reference URLs:
  - [Introducing Claude Sonnet 5 — Anthropic](https://www.anthropic.com/news/claude-sonnet-5)
  - [Claude Sonnet 5 System Card — Anthropic](https://www.anthropic.com/claude-sonnet-5-system-card)
  - [Claude Sonnet 5 (Max) — Artificial Analysis](https://artificialanalysis.ai/models/claude-sonnet-5)
  - [Claude Sonnet 5 benchmark profile — BenchLM](https://benchlm.ai/models/claude-sonnet-5)
  - [Claude Sonnet 5 — Vals AI](https://www.vals.ai/models/anthropic_claude-sonnet-5)
  - [Gemini 3.8 Flash model card (Sonnet 5 column) — Google DeepMind](https://deepmind.google/models/model-cards/gemini-3-8-flash/)
  - [Claude Sonnet 5 — llm-stats](https://llm-stats.com/models/claude-sonnet-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.