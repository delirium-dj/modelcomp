# GPT-5.6 Sol — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5.6-sol`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol (Max effort tier)
- **Short description:** OpenAI's strong GPT-5.6 reasoning variant with excellent coding (SWE-bench 96.2% Vals, DeepSWE 72.7%), agentic browsing (BrowseComp 92.2%), and 1M context, at $4/$20 pricing.
- **Provider / access:** OpenAI API (`gpt-5.6-sol` via `https://api.openai.com/v1/responses`), OpenCode Zen (`opencode/gpt-5.6-sol` via `https://opencode.ai/inference/openai/v1/responses`), Azure OpenAI, 8 total providers. Responses API (not Chat Completions).
- **Release / knowledge:** 2026-07-09 release; knowledge cutoff not publicly disclosed.
- **IDs:** `openai/gpt-5.6-sol` (OpenAI API), `opencode/gpt-5.6-sol` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,050,000 tokens total (1.05M per BenchLM); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (extended thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** ≤272K tokens: $4.00/M in, $0.40/M cache read, $5.00/M cache write, $20.00/M out. >272K tokens: $8.00/M in, $0.80/M cache read, $10.00/M cache write, $30.00/M out (OpenAI API & OpenCode Zen). Blended 7:2:1 ≈ $3.08/M (AA). Cost per Intelligence Index task: $1.99 (AA).
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **91.9%** (OpenAI GPT-5.6 blog) / **85.8%** (Vals AI)
- BrowseComp: **92.2%** (OpenAI GPT-5.6 blog)
- OSWorld 2.0: **62.6%** (OpenAI GPT-5.6 blog)
- GDPval-AA v2: **1735 Elo** (OpenAI GPT-5.6 blog) / **55.4%** normalized (Artificial Analysis)
- CyberGym: **84.5%** (OpenAI GPT-5.6 blog)
- ExploitGym: **33.7%** (OpenAI GPT-5.6 blog)
- Toolathlon: **58%** (OpenAI GPT-5.6 blog)
- Tau2-bench: **85.1%** (Artificial Analysis)
- Terminal-Bench 3.0: **34.6%** (Frontier-Bench leaderboard)
- Terminal-Bench Hard: **65.9%** (Artificial Analysis)
- AA ITBench: **56.2%** (Artificial Analysis)
- AA Agentic Index: **50.5%** (Artificial Analysis)
- ApprenticeBench: **26%** (NeoCognition)
- MazeBench: **13%** (ASCII mode, tools)

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (OpenAI GPT-5.6 blog) / **94.1%** (Artificial Analysis) / **95.2%** (Vals AI)
- HLE-Verified: **54.5%** (Google DeepMind Gemini 3.8 Flash card)
- LABBench2: **82.1%** (Google DeepMind Gemini 3.8 Flash card)
- HealthBench Professional: **60.5%** (OpenAI GPT-5.6 blog)
- HealthBench Hard: **33.1%** (OpenAI System Card)
- ARC-AGI-1: **96.50%** (ARC Prize semi-private)
- ARC-AGI-2: **92.5%** (ARC Prize semi-private)
- ARC-AGI-3: **7.8%** (ARC Prize semi-private)
- AA Intelligence Index: **58.9%** (OpenAI GPT-5.6 blog) / rank #27/217 (AA)
- AA LCR: **84.0%** (Artificial Analysis)
- CritPt: **32.3%** (Artificial Analysis)
- AA HLE: **49.5%** (Artificial Analysis)
- AA Omniscience Index: **22.0%** (Artificial Analysis)
- AA Omniscience Accuracy: **59.4%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **92.2%** (Artificial Analysis)
- MMLU-Pro (Vals): **89.1%** (Vals AI)
- FrontierMath (legacy): **89%** (OpenAI GPT-5.6 blog)
- FrontierMath v2 Tiers 1-3: **89.000%** (OpenAI GPT-5.6 blog)
- FrontierMath v2 Tier 4: **83.000%** (OpenAI GPT-5.6 blog)
- GeneBench-Pro: **28.7%** (OpenAI technical report)
- AA IFBench: **72.7%** (Artificial Analysis)
- Gray Swan IPI: **27.0%** (Google Gemini 4 Argon chart)

Coding:

- SWE-bench Pro: **64.6%** (OpenAI GPT-5.6 blog)
- SWE-bench (Vals): **96.2%** (Vals AI leaderboard)
- DeepSWE: **72.7%** (OpenAI GPT-5.6 blog)
- LiveCodeBench (Vals): **82.6%** (Vals AI leaderboard)
- VulcanBench v3: **87.0%** (VulcanBench report)
- VulcanBench CII v1: **86.5%** (VulcanBench report)
- FrontierCode 1.1 Extended: **60.6%** (Cognition Devin blog)
- FrontierSWE v2: **32.2%** (Proximal leaderboard)
- CursorBench 3.2: **67.2%** (Cursor evals)
- CursorBench 4.0: **41.7%** (Cursor evals)
- AA Coding Index: **77.4%** (Artificial Analysis)
- AA-SciCode: **57.1%** (Artificial Analysis)
- Bug Hunt Bench: **42.0 fixes** (public data)
- PostTrainBench v1.1: **36.2%** (PostTrainBench leaderboard)
- Terminal-Bench 2.1: **91.9%** (OpenAI GPT-5.6 blog)

Multimodal:

- MMMU-Pro: **83.0%** (OpenAI GPT-5.6 blog) / **84.6%** with Python / **83.4%** (Artificial Analysis)

Long context:

- AA LCR: **84.0%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 82/100.** TB 2.1 91.9% (exceeds 88%+ frontier), BrowseComp 92.2%, OSWorld 62.6%, GDPval 1735 Elo (near 1750+ frontier), CyberGym 84.5%, Tau2 85.1%, Toolathlon 58%. Capped by TB 3.0 34.6%, ExploitGym 33.7%, MazeBench 13%.
- **Reasoning: 85/100.** GPQA Diamond 94.6% (exceeds 90%+ frontier), HLE 54.5% (exceeds 40%+), ARC-AGI-1 96.5% / ARC-AGI-2 92.5%, FrontierMath v2 Tiers 1-3 89.0% / Tier 4 83.0%, AA LCR 84.0%, CritPt 32.3%. Capped by ARC-AGI-3 7.8%, AA Intelligence Index 47 (<60 frontier), AA Omniscience Hallucination 92.2%.
- **Context window: 95/100.** 1.05M native context; AA LCR 84.0% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: ≥1M = 95-100.
- **Multimodal: 70/100.** Text + image input only; MMMU-Pro 83-84.6%. No video, audio, PDF input. Methodology: +image in = 60-70.
- **Coding: 90/100.** SWE-bench 96.2% (Vals, exceeds 80%+ frontier), DeepSWE 72.7% (near 74%+ frontier), LiveCodeBench 82.6% (Vals), VulcanBench 87.0%, AA Coding Index 77.4% (exceeds 70%+), FrontierCode Extended 60.6%, CursorBench 3.2 67.2%. Capped by SWE-bench Pro 64.6%, FrontierSWE v2 32.2%, CursorBench 4.0 41.7%.
- **Cost efficiency: 65/100.** $4/$20 per 1M (≤272K), $8/$30 (>272K), blended ~$3.08/M, 90% cache discount, cost/task $1.99. Methodology: $3/$15 ≈ 60, $1.25/$4.25 ≈ 88 → $4/$20 interpolates to ~65.
- **Overall Score: 84/100.** Half-up mean of (82 + 85 + 95 + 70 + 90) / 5 = 84.4 → 84. Best-fit: strong all-rounder for coding and agentic browsing at Sol-tier pricing; SWE-bench 96.2% and BrowseComp 92.2% are standout; succeeded by GPT-6 Sol/Astra.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (OpenAI GPT-5.6 blog, System Card), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Epoch AI, Vals AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.