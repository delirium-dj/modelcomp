# Claude Sonnet 5.5 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-sonnet-5-5`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5 (Max effort tier with fallback)
- **Short description:** Anthropic's high-throughput Sonnet 5.5 family model delivering near-Opus 5.5 performance on coding and knowledge work at $2/$10 pricing, with 30%+ speed improvement over Sonnet 5 and cyber safeguards.
- **Provider / access:** Anthropic API (`claude-sonnet-5-5` via `https://api.anthropic.com/v1/messages`), OpenCode Zen (`opencode/claude-sonnet-5-5` via `https://opencode.ai/inference/anthropic/v1/messages`), AWS Bedrock, Google Cloud Vertex AI, Microsoft Azure. Anthropic Messages API (not Chat Completions).
- **Release / knowledge:** 2026-09-28 release; knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-sonnet-5-5` (Anthropic API), `opencode/claude-sonnet-5-5` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,000,000 tokens total (1M); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (adaptive thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $2.00/M in, $0.10/M cache read, $2.50/M cache write, $10.00/M out (Anthropic API & OpenCode Zen). 95% cache discount (AA). Blended 7:2:1 ≈ $1.47/M (AA). Cost per Intelligence Index task: $5.46 (AA).
- **Architecture:** Proprietary (Anthropic); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (Anthropic blog) / **63.6%** (Artificial Analysis)
- GDPval-AA v2.1: **1844 Elo** (Anthropic blog) / **66.9%** normalized (Artificial Analysis)
- AA Briefcase Elo: **1811** (Anthropic System Card)
- HLE with tools: **64.5%** (Anthropic blog)
- OSWorld 2.1: **80.1%** partial (Anthropic blog)
- DRACO: **87.0%** (Anthropic System Card)
- Terminal-Bench-Science 0.1: **59.9%** (Anthropic System Card)
- Toolathlon Verified: **77.8%** (Anthropic System Card)
- Toolathlon Verified Pass@3: **85.2%** (Anthropic System Card)
- Toolathlon avg turns: **31.6** (Anthropic System Card)
- AA AutomationBench: **71.8%** (Artificial Analysis)
- AA Agentic Index: **56.0%** (Artificial Analysis)
- AA AnalystAgent: **57.5%** (Artificial Analysis)
- LAB criterion-pass (Harvey held-out): **93.1%** (Anthropic System Card)
- Hermes Index: **53.1%** / Hermes Bench: **73.5%** (Nous Research)
- AutomationBench (Zapier 1.0.6): **44.7%** (Anthropic System Card)
- AA Terminal-Bench 4.0: **63.6%** (Artificial Analysis)
- GDP.pdf: **25.8%** (Artificial Analysis)
- MazeBench: **8%** (ASCII mode, tools)

Reasoning / knowledge:

- HLE without tools: **56.9%** (Anthropic System Card)
- AA Intelligence Index: **56** (rank #2/217) (Artificial Analysis)
- AA HLE: **55.0%** (Artificial Analysis)
- AA LCR: **82.7%** (Artificial Analysis)
- CritPt: **31.4%** (Artificial Analysis)
- MLCR-AA: **75.0%** (Artificial Analysis)
- AA Omniscience Index: **32.3%** (Artificial Analysis)
- AA Omniscience Accuracy: **54.0%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **47.0%** (Artificial Analysis)
- FrontierMath v2 Tiers 1-3: **88.772%** (Epoch AI)
- FrontierMath v2 Tier 4: **80.488%** (Epoch AI)
- ArXivMath Aug 2026: **86.8%** no tools / **95.2%** with tools (Anthropic System Card)
- HealthBench raw: **69.4%** / length-adjusted **65.4%** / Professional raw **77.1%** / Professional **69.2%** (Anthropic System Card)
- BioMysteryBench solvable: **89.2%** / difficult: **44.7%** (Anthropic System Card)
- SpatialBench Verified: **72.5%** (Anthropic System Card)
- GMMLU: **92.1%** / MILU: **91.6%** (Anthropic System Card)
- Chartography: **61.6%** no tools / **90.2%** with tools (Anthropic blog / System Card)

Coding:

- SWE-bench Pro: **81.3%** (Anthropic System Card)
- SWE Multilingual: **90.3%** (Anthropic System Card)
- SWE Multimodal: **54.3%** (Anthropic System Card)
- DeepSWE: **71.0%** (Anthropic System Card)
- FrontierCode v1.1 Main: **46.2%** (Anthropic System Card)
- FrontierCode v1.1 Extended: **59.1%** (Anthropic System Card)
- FrontierSWE v2: **61.9%** (Anthropic System Card)
- ProgramBench: **79.7%** (Anthropic System Card)
- CursorBench 4.0: **55.5%** (Cursor evals)
- AA-SciCode: **61.0%** (Artificial Analysis)
- Bug Hunt Bench: **51.3 fixes** (public data)
- AA Coding Index: not directly reported (AA)

Multimodal:

- MMMU-Pro: not directly reported (AA)
- Chartography: **61.6%** no tools / **90.2%** with tools (Anthropic)
- BenchCAD Vision2Code: **0.747** no tools / **0.963** with tools (Anthropic System Card)
- Biomedical image analysis: **72.2%** (Anthropic System Card)
- OfficeQA: **76.9%** / Pro: **65.6%** (Anthropic System Card)
- Design Arena Website: **1324** (OpenRouter)

Long context:

- AA LCR: **82.7%** (Artificial Analysis)
- MLCR-AA: **75.0%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 85/100.** TB 4.0 70.6% (exceeds Opus 5.5's 66.4%), GDPval 1844 Elo (near Opus 5.5's 1846), Toolathlon 77.8%, AA AutomationBench 71.8%, DRACO 87.0%, AA Agentic Index 56.0%. Capped by AutomationBench Zapier 44.7%, MazeBench 8%.
- **Reasoning: 87/100.** HLE 64.5% with tools (near Opus 5.5's 67.7%), FrontierMath Tiers 1-3 88.8% / Tier 4 80.5% (exceptional), AA LCR 82.7%, MLCR 75.0%, AA Intelligence Index 56 (rank #2). Capped by CritPt 31.4%, AA Omniscience Index 32.3%.
- **Context window: 95/100.** 1M native context; AA LCR 82.7%, MLCR 75.0% — no public MRCR ≥98% at 512K+ found for 100 tier. Methodology: ≥1M = 95–100.
- **Multimodal: 70/100.** Text + image input only; Chartography 90.2% with tools, BenchCAD 0.963 with tools. No video, audio, PDF input. Methodology: +image in = 60–70.
- **Coding: 90/100.** SWE-bench Pro 81.3%, DeepSWE 71.0% (near 74%+ frontier), FrontierSWE v2 61.9%, CursorBench 55.5%, AA-SciCode 61.0% (exceeds 55%+), ProgramBench 79.7%, FrontierCode Extended 59.1%. Capped by FrontierCode Main 46.2%.
- **Cost efficiency: 70/100.** $2/$10 per 1M, blended ~$1.47/M, 95% cache discount, cost/task $5.46. Methodology: $1.25/$4.25 ≈ 88, $3/$15 ≈ 60 → $2/$10 interpolates to ~70.
- **Overall Score: 85/100.** Half-up mean of (85 + 87 + 95 + 70 + 90) / 5 = 85.4 → 85. Best-fit: exceptional price/performance for everyday agentic coding and knowledge work; near-Opus 5.5 TB 4.0 and GDPval at 1/5 the cost.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (Anthropic blog, System Card), independent benchmark aggregators (Artificial Analysis, BenchLM, Epoch AI, Nous Research), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.