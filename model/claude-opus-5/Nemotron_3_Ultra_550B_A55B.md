# Claude Opus 5 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5 (Max effort tier)
- **Short description:** Anthropic's high-performance reasoning model (Opus 5 family) delivering near-Fable intelligence at half the cost, with exceptional coding (SWE-bench Verified 96%), agentic autonomy, and strong safety alignment.
- **Provider / access:** Anthropic API (`claude-opus-5` via `https://api.anthropic.com/v1/messages`), OpenCode Zen (`opencode/claude-opus-5` via `https://opencode.ai/inference/anthropic/v1/messages`), AWS Bedrock, Google Cloud Vertex AI, Microsoft Azure. Anthropic Messages API (not Chat Completions).
- **Release / knowledge:** 2026-07-24 release; knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-opus-5` (Anthropic API), `opencode/claude-opus-5` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,000,000 tokens total (1M per AA); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (adaptive thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $5.00/M in, $0.50/M cache read, $6.25/M cache write, $25.00/M out (Anthropic API & OpenCode Zen). Fast mode: 2.5x speed at 2x price. Blended 7:2:1 ≈ $3.85/M (AA). Cost per Intelligence Index task: $5.86 (AA).
- **Architecture:** Proprietary (Anthropic); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **84.6%** (Vals AI leaderboard)
- Terminal-Bench 3.0: **42.7%** (Frontier-Bench leaderboard)
- GDPval-AA: **1862 Elo** (Anthropic System Card)
- GDPval-AA normalized: **61.1%** (Artificial Analysis)
- BrowseComp: **90.8%** (Anthropic System Card) / **93.6%** (10-agent prerelease)
- DeepSearchQA: **95.0%** (Anthropic blog)
- OSWorld 2.0: **70.6%** (Anthropic System Card)
- MCP Atlas: **85.8%** (Anthropic System Card)
- MCP-Atlas claim coverage: **89.1%** (Anthropic System Card)
- AutomationBench: **26.0%** (Anthropic System Card)
- AA Agentic Index: **56.2%** (Artificial Analysis)
- AA Briefcase Elo: **1720** (Anthropic System Card)
- AA Harvey LAB v1.0: **93.5%** (Artificial Analysis)
- LAB criterion-pass (Harvey held-out): **94.1%** (Anthropic System Card)
- Toolathlon Verified: **80.6%** (Anthropic System Card)
- Toolathlon Verified Pass@3: **87.0%** (Anthropic System Card)
- Toolathlon avg turns: **23.5** (Anthropic System Card)
- AA AnalystAgent: **53.8%** (Artificial Analysis)
- ApprenticeBench: **36%** (NeoCognition)
- MazeBench: **12%** (ASCII mode, tools)
- DRACO: **88.6%** (Anthropic System Card)

Reasoning / knowledge:

- GPQA Diamond: **93.2%** (Artificial Analysis) / **93.4%** (Vals AI)
- HLE with tools: **64.7%** (Anthropic System Card)
- HLE without tools: **56.3%** (Anthropic System Card)
- HLE Verified: **54.4%** (Google DeepMind Gemini 3.8 Flash card)
- AA Intelligence Index: **51** (rank #17/217) (Artificial Analysis)
- AA HLE: **54.9%** (Artificial Analysis)
- AA LCR: **79.3%** (Artificial Analysis)
- CritPt: **29.1%** (Artificial Analysis)
- ARC-AGI-1: **97.50%** (ARC Prize semi-private)
- ARC-AGI-2: **90.4%** (ARC Prize semi-private)
- ARC-AGI-3: **30.2%** (ARC Prize semi-private)
- MLCR-AA: **55.6%** (Artificial Analysis)
- AA Omniscience Index: **37.1%** (Artificial Analysis)
- AA Omniscience Accuracy: **60.9%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **60.8%** (Artificial Analysis)
- LABBench2: **84.2%** (Google DeepMind Gemini 3.8 Flash card)
- BioMysteryBench solvable: **90.1%** / difficult: **49.4%** (Anthropic System Card)
- HealthBench raw: **67.1%** / length-adjusted **57.8%** / Professional **59.8%** / Professional raw **73.4%** (Anthropic System Card)
- FrontierMath v2 Tiers 1-3: **85.614%** (Epoch AI)
- FrontierMath v2 Tier 4: **73.171%** (Epoch AI)
- IMO 2026: **42/42** (Anthropic System Card)
- RiemannBench: **60.0%** no tools / **79.0%** with tools (Anthropic System Card)
- ArXivMath Jun 2026: **90.8%** no tools / **91.3%** with tools (Anthropic System Card)
- Gray Swan IPI: **4.6%** (Google Gemini 4 Argon chart)
- GMMLU: **92.5%** / MILU: **92.1%** / INCLUDE: **89.8%** (Anthropic System Card)

Coding:

- SWE-bench Verified: **96%** (Anthropic System Card)
- SWE-bench Pro: **79.2%** (Anthropic System Card)
- SWE Multilingual: **89.5%** (Anthropic System Card)
- SWE Multimodal: **59.4%** (Anthropic System Card)
- SWE-bench (Vals): **97.0%** (Vals AI leaderboard)
- DeepSWE: **68.8%** (Anthropic System Card)
- FrontierCode v1.1 Main: **53.4%** (Anthropic System Card)
- FrontierCode v1.1 Extended: **63.6%** (Anthropic System Card)
- FrontierSWE v2: **52.0%** (Proximal leaderboard)
- ProgramBench: **93.0%** (Anthropic System Card)
- CursorBench 3.2: **70.0%** (Cursor evals)
- CursorBench 4.0: **46.6%** (Cursor evals)
- VulcanBench v3: **87.0%** (VulcanBench report)
- VulcanBench CII v1: **96.4%** (VulcanBench report)
- AA Coding Index: **78.0%** (Anthropic blog)
- AA-SciCode: **56.4%** (Artificial Analysis)
- LiveCodeBench (Vals): **89.0%** (Vals AI leaderboard)
- Bug Hunt Bench: **27.0 fixes** (public data)
- PostTrainBench v1.1: **35.0%** (PostTrainBench leaderboard)

Multimodal:

- MMMU-Pro: **84.7%** (Artificial Analysis)
- Chartography: **29.6%** no tools / **83.0%** with tools (Anthropic System Card)
- BenchCAD Vision2Code: **0.366** no tools / **0.821** with tools (Anthropic System Card)
- GDP.pdf: **83.4%** no tools / **85.5%** with tools (Anthropic System Card)
- OfficeQA: **78.1%** / Pro: **66.9%** (Anthropic System Card)
- Design Arena Website: **1309** (OpenRouter)

Long context:

- AA LCR: **79.3%** (Artificial Analysis)
- MLCR-AA: **55.6%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 88/100.** GDPval 1862 Elo (exceeds 1750+ frontier), TB 2.1 84.6%, MCP Atlas 85.8%, BrowseComp 90.8%, Toolathlon 80.6%, AA Agentic Index 56.2%, DeepSearchQA 95.0%. Capped by AutomationBench 26.0%, TB 3.0 42.7%, MazeBench 12%.
- **Reasoning: 89/100.** GPQA Diamond 93.2% (exceeds 90%+ frontier), HLE 64.7% with tools (exceeds 40%+), ARC-AGI-1 97.5% / ARC-AGI-2 90.4% / ARC-AGI-3 30.2% (exceptional), FrontierMath Tiers 1-3 85.6% / Tier 4 73.2%, IMO 42/42, AA LCR 79.3%. Capped by AA Intelligence Index 51 (<60 frontier), CritPt 29.1%.
- **Context window: 95/100.** 1M native context; AA LCR 79.3%, MLCR 55.6% — no public MRCR ≥98% at 512K+ found for 100 tier. Methodology: ≥1M = 95–100.
- **Multimodal: 70/100.** Text + image input only; MMMU-Pro 84.7%, Chartography 83.0% with tools, GDP.pdf 85.5% with tools. No video, audio, PDF input. Methodology: +image in = 60–70.
- **Coding: 96/100.** SWE-bench Verified 96% (frontier ref 80%+), SWE-bench Pro 79.2%, LiveCodeBench 89.0% (Vals), AA Coding Index 78.0% (exceeds 70%+), ProgramBench 93.0%, VulcanBench CII 96.4%, FrontierCode Extended 63.6%. All at/above frontier thresholds.
- **Cost efficiency: 50/100.** $5/$25 per 1M, blended ~$3.85/M, cost/task $5.86. Methodology: $3/$15 ≈ 60, $10/$50 ≈ 30 → $5/$25 interpolates to ~50.
- **Overall Score: 88/100.** Half-up mean of (88 + 89 + 95 + 70 + 96) / 5 = 87.6 → 88. Best-fit: best value-for-money near-frontier model; unmatched SWE-bench Verified 96% and GDPval 1862 Elo at half Fable cost.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (Anthropic blog, System Card), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Epoch AI, Vals AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.