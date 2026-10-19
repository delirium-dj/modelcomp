# GPT-5.6 Luna — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5.6-luna`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna (Max effort tier)
- **Short description:** OpenAI's cost-efficient GPT-5.6 variant with 1M context, fast 137 tok/s output, and ultra-low $0.20/$1.20 pricing with 90% cache discount.
- **Provider / access:** OpenAI API (`gpt-5.6-luna` via `https://api.openai.com/v1/responses`), OpenCode Zen (`opencode/gpt-5.6-luna` via `https://opencode.ai/inference/openai/v1/responses`), Azure OpenAI, 7 total providers. Responses API (not Chat Completions).
- **Release / knowledge:** 2026-07-09 release; knowledge cutoff not publicly disclosed.
- **IDs:** `openai/gpt-5.6-luna` (OpenAI API), `opencode/gpt-5.6-luna` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,050,000 tokens total (1.05M per BenchLM); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (extended thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** ≤272K tokens: $0.20/M in, $0.02/M cache read, $1.20/M out. >272K tokens: $0.40/M in, $0.04/M cache read, $1.80/M out (OpenAI API & OpenCode Zen). Blended 7:2:1 ≈ $0.17/M (AA). Cost per Intelligence Index task: $0.18 (AA).
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (OpenAI GPT-5.6 blog) / **79.0%** (Vals AI)
- BrowseComp: **83.3%** (OpenAI GPT-5.6 blog)
- OSWorld 2.0: **45.6%** (OpenAI GPT-5.6 blog)
- GDPval-AA v2: **1582 Elo** (OpenAI GPT-5.6 blog) / **48.0%** normalized (Artificial Analysis)
- CyberGym: **77.9%** (OpenAI GPT-5.6 blog)
- ExploitGym: **12.4%** (OpenAI GPT-5.6 blog)
- Toolathlon: **53.4%** (OpenAI GPT-5.6 blog)
- AA Agentic Index: **42.7%** (Artificial Analysis)
- APEX-Agents: **35.8%** (Artificial Analysis)
- Terminal-Bench 3.0: **14.3%** (Frontier-Bench leaderboard)
- Terminal-Bench 2.1 (Vals): **79.0%** (Vals AI leaderboard)
- AA Agentic Index: **42.7%** (Artificial Analysis)
- ApprenticeBench: **7%** (NeoCognition)
- MazeBench: **0%** (ASCII mode, tools)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (OpenAI GPT-5.6 blog) / **91.1%** (Artificial Analysis) / **91.7%** (Vals AI)
- HLE: **39.5%** (Artificial Analysis)
- AA Intelligence Index: **37** (rank #13/173 in price tier) (Artificial Analysis)
- AA LCR: **83.7%** (Artificial Analysis)
- CritPt: **20.6%** (Artificial Analysis)
- ARC-AGI-1: **88.00%** (ARC Prize semi-private)
- ARC-AGI-2: **59.5%** (ARC Prize semi-private)
- ARC-AGI-3: **0.2%** (ARC Prize semi-private)
- AA HLE: **39.5%** (Artificial Analysis)
- AA Omniscience Index: **-10.3%** (Artificial Analysis)
- AA Omniscience Accuracy: **42.7%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **92.6%** (Artificial Analysis)
- MMLU-Pro (Vals): **86.0%** (Vals AI)
- FrontierMath v2 Tiers 1-3: **78.600%** (OpenAI GPT-5.6 blog)
- FrontierMath v2 Tier 4: **58.500%** (OpenAI GPT-5.6 blog)
- GPQA Diamond (Vals): **91.7%** (Vals AI)
- MMLU-Pro (Vals): **86.0%** (Vals AI)
- HealthBench Professional: **55.7%** (OpenAI GPT-5.6 blog)
- HealthBench Hard: **32.0%** (OpenAI System Card)

Coding:

- SWE-bench Pro: **62.7%** (OpenAI GPT-5.6 blog)
- SWE-bench (Vals): **93.0%** (Vals AI leaderboard)
- DeepSWE: **67.2%** (OpenAI GPT-5.6 blog)
- LiveCodeBench: **87.8%** (OpenAI GPT-5.6 blog) / **82.6%** (Vals AI)
- VulcanBench v3: **85.5%** (VulcanBench)
- FrontierCode 1.1 Extended: **55.1%** (Cognition Devin blog)
- CursorBench 3.2: **61.1%** (Cursor evals)
- AA Coding Index: **71.5%** (Artificial Analysis)
- AA-SciCode: **53.6%** (Artificial Analysis)
- CursorBench 4.0: **35.9%** (Cursor evals)

Multimodal:

- MMMU-Pro: **78.4%** (OpenAI GPT-5.6 blog) / **79.5%** with Python / **78.6%** (Artificial Analysis)

Long context:

- AA LCR: **83.7%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 72/100.** TB 2.1 84.7% (near 88%+ frontier), BrowseComp 83.3%, OSWorld 45.6%, CyberGym 77.9%, GDPval 1582 Elo (below 1750+ frontier), Toolathlon 53.4%, AA Agentic Index 42.7%. Capped by TB 3.0 14.3%, ExploitGym 12.4%, MazeBench 0%.
- **Reasoning: 70/100.** GPQA Diamond 92.3% (exceeds 90%+ frontier), AA LCR 83.7%, ARC-AGI-1 88%. Capped by HLE 39.5% (below 40%+ frontier), AA Intelligence Index 37 (<60 frontier), CritPt 20.6%, ARC-AGI-2 59.5%, ARC-AGI-3 0.2%, Omniscience Index -10.3%.
- **Context window: 95/100.** 1.05M native context; AA LCR 83.7% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: ≥1M = 95-100.
- **Multimodal: 70/100.** Text + image input only; MMMU-Pro 78.4-79.5%. No video, audio, PDF input. Methodology: +image in = 60-70.
- **Coding: 78/100.** SWE-bench 93.0% (Vals), DeepSWE 67.2% (near 74%+ frontier), LiveCodeBench 87.8%, AA Coding Index 71.5% (exceeds 70%+), VulcanBench 85.5%. Capped by SWE-bench Pro 62.7%, CursorBench 4.0 35.9%.
- **Cost efficiency: 95/100.** $0.20/$1.20 per 1M, blended ~$0.17/M, 90% cache discount, cost/task $0.18. Methodology: ~$0.10/$0.20 = 97-99; ultra-low pricing → 95.
- **Overall Score: 77/100.** Half-up mean of (72 + 70 + 95 + 70 + 78) / 5 = 77.0 → 77. Best-fit: exceptional value for cost-efficient reasoning and coding; 1M context, 137 tok/s, and $0.20/$1.20 pricing are unmatched; reasoning depth (HLE, CritPt) lags Sol/Terra variants.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (OpenAI GPT-5.6 blog, System Card), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Vals AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.