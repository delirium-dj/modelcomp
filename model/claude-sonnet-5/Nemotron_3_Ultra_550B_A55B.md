# Claude Sonnet 5 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-sonnet-5`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5 (Max reasoning tier)
- **Short description:** Anthropic's mid-tier reasoning model with strong coding (SWE-bench Verified 85.2%), solid HLE (57.4%), and 1M context at $2/$10 pricing. Deprecated in favor of Sonnet 5.5.
- **Provider / access:** Anthropic API (`claude-sonnet-5` via `https://api.anthropic.com`), OpenCode Zen (`opencode/claude-sonnet-5`), AWS Bedrock, Google Vertex AI, 9 total providers. Messages API.
- **Release / knowledge:** 2026-06-30 release; knowledge cutoff not publicly disclosed.
- **IDs:** `claude-sonnet-5` (Anthropic API), `opencode/claude-sonnet-5` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,000,000 tokens total; max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (extended thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $2.00/M in, $0.20/M cache read, $10.00/M out (Anthropic API & OpenCode Zen). Blended 7:2:1 ≈ $1.54/M (AA). Cost per Intelligence Index task: $5.09 (AA).
- **Architecture:** Proprietary (Anthropic); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (Anthropic System Card) / **74.5%** (Vals AI)
- BrowseComp: **84.7%** (Anthropic System Card)
- HLE w/ tools: **57.4%** (Anthropic System Card)
- OSWorld-Verified: **81.2%** (Anthropic System Card)
- GDPval-AA: **1603 Elo** (Anthropic System Card) / normalized **48.2%** (AA)
- AA Agentic Index: **44.3%** (Artificial Analysis)
- Terminal-Bench 3.0: **14.6%** (FrontierBench)
- ApprenticeBench: **16%** (NeoCognition)
- MazeBench: **0%** (ASCII mode, no tools)

Reasoning / knowledge:

- HLE: **57.4%** (Anthropic System Card) / **43.2%** w/o tools
- HLE-Verified: **31.0%** (Google DeepMind)
- LABBench2: **80.1%** (Google DeepMind)
- AA Intelligence Index: **38.2%** (Artificial Analysis) / rank #68/217
- AA GPQA Diamond: **91.1%** (Artificial Analysis)
- AA HLE: **41.3%** (Artificial Analysis)
- AA Omniscience Index: **16.5%** (Artificial Analysis)
- AA Omniscience Accuracy: **40.1%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **39.4%** (Artificial Analysis)
- GPQA Diamond (Vals): **88.9%** (Vals AI)
- MMLU-Pro (Vals): **87.5%** (Vals AI)
- FrontierMath v2 Tiers 1-3: **65.614%** (Epoch AI)
- FrontierMath v2 Tier 4: **29.268%** (Epoch AI)

Coding:

- SWE-bench Verified: **85.2%** (Anthropic System Card)
- SWE-bench Pro: **63.2%** (Anthropic System Card)
- SWE Multilingual: **78.3%** (Anthropic System Card)
- SWE Multimodal: **28.1%** (Anthropic System Card)
- Terminal-Bench 2.1: **80.4%** (Anthropic System Card)
- FrontierCode 1.1 Main: **42.7%** (Cognition)
- CursorBench 3.2: **61.5%** (Cursor evals)
- AA SciCode: **54.3%** (Artificial Analysis)
- VulcanBench CII v1: **89.2%** (VulcanBench)
- LiveCodeBench (Vals): **82.4%** (Vals AI leaderboard)
- SWE-bench (Vals): **79.6%** (Vals AI leaderboard)
- AA Coding Index: **71.5%** (Artificial Analysis)
- CursorBench 4.0: **34.1%** (Cursor evals)

Multimodal:

- CharXiv: **88.3%** / **77%** w/o tools (Anthropic System Card)
- AA MMMU-Pro: **77.3%** (Artificial Analysis)
- Design Arena Website: **1274 Elo** (OpenRouter)

Long context:

- AA LCR: **82.0%** (Artificial Analysis)
- CritPt: **16.9%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 75/100.** TB 2.1 80.4% (near 88%+ frontier), BrowseComp 84.7%, OSWorld-Verified 81.2%, GDPval 1603 Elo (below 1750+ frontier), HLE w/ tools 57.4%. Capped by TB 3.0 14.6%, MazeBench 0%, AA Agentic Index 44.3%.
- **Reasoning: 72/100.** HLE 57.4% (exceeds 40%+ frontier), HLE w/o tools 43.2%, AA GPQA Diamond 91.1%, MMLU-Pro 87.5% (Vals), FrontierMath Tiers 1-3 65.6%. Capped by FrontierMath Tier 4 29.3%, AA Intelligence Index 38 (<60 frontier), CritPt 16.9%, AA Omniscience Index 16.5%.
- **Context window: 90/100.** 1M native context; AA LCR 82.0% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: 500K-1M = 85-94.
- **Multimodal: 70/100.** Text + image input only; CharXiv 88.3%, MMMU-Pro 77.3%. No video, audio, PDF input. Methodology: +image in = 60-70.
- **Coding: 80/100.** SWE-bench Verified 85.2% (exceeds 80%+ frontier), LiveCodeBench 82.4% (Vals), SWE-bench 79.6% (Vals), VulcanBench CII 89.2%, AA Coding Index 71.5% (exceeds 70%+), AA SciCode 54.3% (near 55%+). Capped by SWE-bench Pro 63.2%, FrontierCode 1.1 42.7%, CursorBench 4.0 34.1%.
- **Cost efficiency: 70/100.** $2/$10 per 1M, blended ~$1.54/M, 90% cache discount, cost/task $5.09. Methodology: $1.25/$4.25 ≈ 88, $3/$15 ≈ 60 → $2/$10 interpolates to ~70.
- **Overall Score: 77.4/100.** Half-up mean of (75 + 72 + 90 + 70 + 80) / 5 = 77.4 → 77. Using six incl. cost: (75+72+90+70+80+70)/6 = 457/6 = 76.2 → 76. Model-queue says 87.8; discrepancy suggests queue Overall uses different weighting. Best-fit: strong coding (SWE-bench Verified 85.2%) and solid HLE (57.4%) at competitive pricing; succeeded by Sonnet 5.5 with better agentic breadth.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (Anthropic System Card), independent benchmark aggregators (BenchLM, Artificial Analysis, Vals AI, Epoch AI, OpenRouter), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.md`, using the same headings.