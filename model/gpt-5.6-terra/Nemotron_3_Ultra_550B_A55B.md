# GPT-5.6 Terra — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra (Max effort tier)
- **Short description:** OpenAI's balanced GPT-5.6 variant with strong coding (SWE-bench 95.4% Vals, DeepSWE 69.6%), fast 135 tok/s output, 1.05M context, at competitive $2/$12 pricing.
- **Provider / access:** OpenAI API (`gpt-5.6-terra` via `https://api.openai.com/v1/responses`), OpenCode Zen (`opencode/gpt-5.6-terra` via `https://opencode.ai/inference/openai/v1/responses`), Azure OpenAI, 7 total providers. Responses API (not Chat Completions).
- **Release / knowledge:** 2026-07-09 release; knowledge cutoff not publicly disclosed.
- **IDs:** `openai/gpt-5.6-terra` (OpenAI API), `opencode/gpt-5.6-terra` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,050,000 tokens total (1.05M per BenchLM); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (extended thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** ≤272K tokens: $2.00/M in, $0.20/M cache read, $2.50/M cache write, $12.00/M out. >272K tokens: $4.00/M in, $0.40/M cache read, $5.00/M cache write, $18.00/M out (OpenAI API & OpenCode Zen). Blended 7:2:1 ≈ $1.74/M (AA). Cost per Intelligence Index task: $1.40 (AA).
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (OpenAI GPT-5.6 blog) / **77.5%** (Vals AI)
- BrowseComp: **87.5%** (OpenAI GPT-5.6 blog)
- OSWorld 2.0: **50.2%** (OpenAI GPT-5.6 blog)
- GDPval-AA v2: **1583 Elo** (OpenAI GPT-5.6 blog) / **47.6%** normalized (Artificial Analysis)
- CyberGym: **81.8%** (OpenAI GPT-5.6 blog)
- ExploitGym: **23.2%** (OpenAI GPT-5.6 blog)
- Toolathlon: **53.1%** (OpenAI GPT-5.6 blog)
- Tau2-bench: **86.3%** (Artificial Analysis)
- AA ITBench: **51.0%** (Artificial Analysis)
- APEX-Agents: **38.9%** (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **77.5%** (Vals AI leaderboard)
- AA Agentic Index: **43.7%** (Artificial Analysis)
- ApprenticeBench: **16%** (NeoCognition)
- Terminal-Bench 3.0: **20.8%** (Frontier-Bench leaderboard)
- MazeBench: **6%** (ASCII mode, tools)

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (OpenAI GPT-5.6 blog) / **92.5%** (Artificial Analysis) / **90.9%** (Vals AI)
- HLE-Verified: **51.1%** (Google DeepMind Gemini 3.8 Flash card)
- LABBench2: **81.2%** (Google DeepMind Gemini 3.8 Flash card)
- HealthBench Professional: **57.7%** (OpenAI GPT-5.6 blog)
- HealthBench Hard: **32.7%** (OpenAI System Card)
- ARC-AGI-1: **96.50%** (ARC Prize semi-private)
- ARC-AGI-2: **83.9%** (ARC Prize semi-private)
- ARC-AGI-3: **0.8%** (ARC Prize semi-private)
- AA Intelligence Index: **55.0%** (OpenAI GPT-5.6 blog) / rank #49/217 (Artificial Analysis)
- AA LCR: **83.0%** (Artificial Analysis)
- CritPt: **30.0%** (Artificial Analysis)
- AA HLE: **42.9%** (Artificial Analysis)
- AA Omniscience Index: **0.1%** (Artificial Analysis)
- AA Omniscience Accuracy: **46.8%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **87.9%** (Artificial Analysis)
- MMLU-Pro (Vals): **86.7%** (Vals AI)
- FrontierMath v2 Tiers 1-3: **84.900%** (OpenAI GPT-5.6 blog)
- FrontierMath v2 Tier 4: **68.300%** (OpenAI GPT-5.6 blog)
- GPQA Diamond (Vals): **90.9%** (Vals AI)
- MMLU-Pro (Vals): **86.7%** (Vals AI)

Coding:

- SWE-bench Pro: **63.4%** (OpenAI GPT-5.6 blog)
- SWE-bench (Vals): **95.4%** (Vals AI leaderboard)
- DeepSWE: **69.6%** (OpenAI GPT-5.6 blog)
- LiveCodeBench (Vals): **85.9%** (Vals AI leaderboard)
- VulcanBench v3: **87.0%** (VulcanBench Eval Suite 3)
- FrontierCode 1.1 Extended: **55.8%** (Cognition Devin blog)
- CursorBench 3.2: **64.9%** (Cursor evals)
- AA Coding Index: **76.7%** (Artificial Analysis)
- AA-SciCode: **55.0%** (Artificial Analysis)
- CursorBench 4.0: **41.3%** (Cursor evals)
- Terminal-Bench 2.1: **87.4%** (OpenAI GPT-5.6 blog)

Multimodal:

- MMMU-Pro: **80.7%** (OpenAI GPT-5.6 blog) / **82%** with Python / **80.7%** (Artificial Analysis)

Long context:

- AA LCR: **83.0%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 78/100.** TB 2.1 87.4% (near 88%+ frontier), BrowseComp 87.5%, OSWorld 50.2%, GDPval 1583 Elo (below 1750+ frontier), CyberGym 81.8%, Tau2 86.3%, Toolathlon 53.1%, AA Agentic Index 43.7%. Capped by TB 3.0 20.8%, ExploitGym 23.2%, MazeBench 6%.
- **Reasoning: 80/100.** GPQA Diamond 92.9% (exceeds 90%+ frontier), HLE 51.1% (exceeds 40%+ frontier), ARC-AGI-1 96.5% / ARC-AGI-2 83.9%, AA LCR 83.0%, FrontierMath Tiers 1-3 84.9% / Tier 4 68.3%, AA Intelligence Index 42 (<60 frontier). Capped by ARC-AGI-3 0.8%, AA Omniscience Index 0.1%, Hallucination Rate 87.9%.
- **Context window: 95/100.** 1.05M native context; AA LCR 83.0% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: ≥1M = 95-100.
- **Multimodal: 70/100.** Text + image input only; MMMU-Pro 80.7-82%. No video, audio, PDF input. Methodology: +image in = 60-70.
- **Coding: 88/100.** SWE-bench 95.4% (Vals, exceeds 80%+ frontier), DeepSWE 69.6% (near 74%+ frontier), LiveCodeBench 85.9% (Vals), AA Coding Index 76.7% (exceeds 70%+), VulcanBench 87.0%, CursorBench 3.2 64.9%, FrontierCode Extended 55.8%. Capped by SWE-bench Pro 63.4%, CursorBench 4.0 41.3%.
- **Cost efficiency: 75/100.** $2/$12 per 1M (≤272K), $4/$18 (>272K), blended ~$1.74/M, 90% cache discount, cost/task $1.40. Methodology: $1.25/$4.25 ≈ 88, $3/$15 ≈ 60 → $2/$12 interpolates to ~75.
- **Overall Score: 82/100.** Half-up mean of (78 + 80 + 95 + 70 + 88) / 5 = 82.2 → 82. Best-fit: strong all-rounder with exceptional SWE-bench 95.4% at Terra-tier pricing; fast 135 tok/s; balanced coding/agentic/reasoning; succeeded by GPT-6 Sol/Astra.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (OpenAI GPT-5.6 blog, System Card), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Epoch AI, Vals AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.