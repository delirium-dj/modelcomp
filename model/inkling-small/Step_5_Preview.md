# Inkling Small — findings by Step 5 Preview

- Source: Thinking Machines Lab / Inkling Small (`opencode/inkling-small`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines Lab's compact open-weight multimodal MoE (276B total / 12B active) with native text/image/audio input, variable thinking effort and a 1M context, built for cost-efficient agentic coding; the smaller sibling of Inkling, matching its per-task terminal-coding results at ~1/5 the cost per the vendor.
- **Provider / access:** Open weights on Hugging Face; served via Tinker serverless inference (`$0.30/$1.20`), Together AI (`thinkingmachines/Inkling-Small`, serverless currently "launching soon"), OpenRouter (`thinkingmachines/inkling-small`, `$0.45/$1.20` per ModelCap/AgenticMarket), AIMLAPI; an AgenticMarket-listed `inkling-small-free` route shows `$0.00/$0.00`. Chat Completions API with native function calling.
- **Release / knowledge:** released 2026-07-29/30 (Together "Released July 29, 2026"; AgenticMarket 2026-07-30); knowledge cutoff not published.
- **IDs:** `thinkingmachines/Inkling-Small` (Together), `thinkingmachines/inkling-small` (OpenRouter); self-host from the HF weights repo. A `$0/$0` route is listed by one aggregator — treat as provisional.
- **Context window:** 1M native per the Thinking Machines card (Together); AgenticMarket lists 1,048,576 context / 262,144 max output. Aggregators disagree — ModelMatchBook and ModelCap list 524,288, ModelPriceWatch lists 262K; the vendor card's 1M is used for scoring, served rollout unverified.
- **Modalities:** text, image and audio in; text out; reasoning (variable thinking effort), tool calls (function calling), prompt caching supported.
- **Pricing (as of 2026-10-21):** OpenRouter/AgenticMarket `$0.45/$1.20` per 1M (cache read `$0.10`); Tinker serverless `$0.30/$1.20` per ModelPriceWatch; free `$0/$0` aggregator route (provisional). Self-hosting free.
- **Architecture:** 42-layer decoder-only MoE, 276B total / 12B active (6-of-256 routed + 2 shared experts per token), hybrid local/global attention, FP8 quantization available; images via hierarchical patch encoder, audio via discrete token encoding into a shared hidden space; open weights.

### Raw benchmarks found

Thinking Machines Lab model card (via Together AI model page, 2026-10-21):

Agent / tool use:

- Terminal-Bench 2.1: **64.69** (vendor card via Together AI; Together's summary table separately shows 55%) <(harness: vendor-reported; two figures published)>
- MCP Atlas: **79.2%** (vendor card, agent tasks across many tools)
- BrowseComp (with context management): **77.4%** (vendor card, web research)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / SWE Atlas Codebase QnA: no verified public score found
- Artificial Analysis Agentic Index: **25.0** (AgenticMarket-cited AA)

Reasoning / knowledge:

- GPQA Diamond: **89.5%** (vendor card)
- HLE: **31.6%** text-only; **47.8%** multimodal with tools (vendor card)
- AIME 2026: **95.5%** / HMMT Feb 2026: **90.2%** (vendor card)
- ARC-AGI-1: **84.0%** / ARC-AGI-2: **40.1%** (vendor card, abstract reasoning)
- Global-MMLU-Lite: **86.7%** (vendor card, multilingual knowledge)
- IFBench: **82.2%** (vendor card, instruction following)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **26.1** (AgenticMarket-cited AA)

Coding:

- SWE-bench Verified: **80.2%** (vendor card, real GitHub issues)
- SWE-bench Pro (Public): **55.9%** (vendor card)
- SciCode: **49%** (Together AI benchmark table + vendor card)
- FrontierMath Tier 4: no verified public score found (blank in Together's table)
- LiveCodeBench: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: Artificial Analysis Coding Index **52.9/100** (AgenticMarket-cited AA)
- FrontierCode: no verified public score found (blank in Together's table)

Long context:

- 1M-token window advertised (vendor card, Together); no MRCR / RULER / GraphWalks retrieval-at-length figure published — long-context retrieval performance unverified.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 64.69% sits between the mid (45–60%) and frontier (88%+) reference bands and MCP Atlas 79.2% / BrowseComp 77.4% show solid multi-tool capability; capped by no Tau3/GDPval/Claw-Eval numbers and a weak AA Agentic Index (25.0).
- **Reasoning: 82/100.** GPQA Diamond 89.5%, AIME 95.5% and HMMT 90.2% are near-frontier science/math results and HLE 31.6% text-only clears the mid band; capped by the low AA Intelligence Index (26.1) and no LCR/CritPt data.
- **Context window: 95/100.** ≥1M native window (vendor card; AgenticMarket 1,048,576/262,144 out) lands in the ≥1M tier; 100 would require ≥98% retrieval evidence at 512K+, which is not published — aggregator conflicts (524K/262K listings) noted.
- **Multimodal: 95/100.** Text, image and audio input natively in a shared hidden space (MMMU-Pro 74.0%, CharXiv RQ 77.4%, VoiceBench 90.1%, MMAU 77.0%) with text-only output; the "+audio in" tier (90–100) applies.
- **Coding: 79/100.** SWE-bench Verified 80.2% is close to the frontier band (DeepSWE 74%+ reference) and Terminal-Bench 64.69% is well above mid, but SWE-bench Pro 55.9% and SciCode 49% are mid-band and no LiveCodeBench/Vibe Code Bench numbers exist — below the 85%+ TB2.1 frontier cut.
- **Cost efficiency: 88/100.** Paid routes $0.45/$1.20 (cache $0.10) sit near the ~$0.60/$2.20 ≈ 92 band and slightly above; open weights + a provisional $0/$0 aggregator route keep the floor low, but a 12B-active-serving-cost claim and a verified free lane are unconfirmed — 88 on the main paid rate.
- **Overall Score: 86/100.** Mean of (78 + 82 + 95 + 95 + 79) / 5 = 85.8 → 86. Best fit: the cheap open-weight multimodal pick for high-volume agentic coding at small-model serving cost — escalate to frontier closed models on the hardest SWE-Pro/SciCode tasks.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (Thinking Machines model card via Together AI, AgenticMarket, OpenRouter, ModelPriceWatch/ModelCap/ModelMatchBook listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
