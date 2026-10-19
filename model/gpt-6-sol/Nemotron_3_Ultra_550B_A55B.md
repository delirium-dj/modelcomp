# GPT-6 Sol — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-6-sol`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol (Max effort tier)
- **Short description:** OpenAI's balanced GPT-6 variant with strong math (FrontierMath Tier 4 90%), good coding (DeepSWE 68.8%), 1.05M context, at competitive $2/$10 pricing with 119 tok/s speed.
- **Provider / access:** OpenAI API (`gpt-6-sol` via `https://api.openai.com/v1/responses`), OpenCode Zen (`opencode/gpt-6-sol` via `https://opencode.ai/inference/openai/v1/responses`), Azure OpenAI, 7 total providers. Responses API (not Chat Completions).
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff not publicly disclosed.
- **IDs:** `openai/gpt-6-sol` (OpenAI API), `opencode/gpt-6-sol` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,050,000 tokens total (1.05M per BenchLM); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (extended thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** ≤272K tokens: $2.00/M in, $0.20/M cache read, $2.50/M cache write, $10.00/M out. >272K tokens: $4.00/M in, $0.40/M cache read, $5.00/M cache write, $15.00/M out (OpenAI API & OpenCode Zen). Blended 7:2:1 ≈ $1.54/M (AA). Cost per Intelligence Index task: $1.04 (AA).
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agents' Last Exam: **56.4%** (OpenAI GPT-6 Sol/Luna blog)
- AutomationBench: **33.2%** (OpenAI GPT-6 Sol/Luna blog)
- OSWorld 2.0: **60.5%** (OpenAI GPT-6 Sol/Luna blog)
- ExploitGym: **22.1%** (OpenAI GPT-6 Astra system card)
- GDPval-AA v2 normalized: **50.4%** (Artificial Analysis)
- AA ITBench: **49.4%** (Artificial Analysis)
- CWE-bench v1: **52.0%** (Collinear leaderboard)
- Hermes Index: **44.1%** / Hermes Bench: **73.5%** (Nous Research)
- MazeBench: **7%** (ASCII mode, tools)

Reasoning / knowledge:

- ARC-AGI-1: **95.50%** (ARC Prize semi-private)
- ARC-AGI-2: **89.6%** (ARC Prize semi-private)
- ARC-AGI-3: **4.6%** (ARC Prize semi-private)
- ARC-AGI-3 Provider Adapter: **23.03%** (ARC Prize)
- AA Intelligence Index: **48** (rank #26/217) (Artificial Analysis)
- AA HLE: **47.9%** (Artificial Analysis)
- AA LCR: **83.7%** (Artificial Analysis)
- CritPt: **30.9%** (Artificial Analysis)
- AA Omniscience Index: **27.1%** (Artificial Analysis)
- AA Omniscience Accuracy: **54.5%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **60.1%** (Artificial Analysis)
- HealthBench raw: **47.1%** / length-adjusted **53.2%** / Professional **60.8%** / Professional raw **59.5%** / Hard **30.1%** (OpenAI GPT-6 Astra system card)
- FrontierMath v2 Tiers 1-3: **89.825%** (Epoch AI)
- FrontierMath v2 Tier 4: **90.000%** (Epoch AI)
- Gray Swan IPI: **10.1%** (Google Gemini 4 Argon chart)

Coding:

- DeepSWE: **68.8%** (OpenAI GPT-6 Sol/Luna blog)
- AA-SciCode: **57.6%** (Artificial Analysis)

Multimodal:

- AA MMMU-Pro: **82.9%** (Artificial Analysis)

Long context:

- AA LCR: **83.7%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 68/100.** OSWorld 2.0 60.5%, Agents' Last Exam 56.4%, ExploitGym 22.1%, GDPval 50.4% normalized, AA ITBench 49.4%, CWE-bench 52.0%, Hermes Bench 73.5%. Capped by AutomationBench 33.2%, MazeBench 7%, no TB 2.1/4.0/BrowseComp/MCP Atlas/Toolathlon/Tau2 data.
- **Reasoning: 80/100.** ARC-AGI-1 95.5% / ARC-AGI-2 89.6%, FrontierMath Tiers 1-3 89.8% / Tier 4 90.0% (exceptional), AA LCR 83.7%, AA HLE 47.9% (exceeds 40%+ frontier), CritPt 30.9%. Capped by AA Intelligence Index 48 (<60 frontier), ARC-AGI-3 4.6%, AA Omniscience Index 27.1%, Hallucination 60.1%.
- **Context window: 95/100.** 1.05M native context; AA LCR 83.7% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: ≥1M = 95-100.
- **Multimodal: 70/100.** Text + image input only; MMMU-Pro 82.9%. No video, audio, PDF input. Methodology: +image in = 60-70.
- **Coding: 78/100.** DeepSWE 68.8% (near 74%+ frontier), AA-SciCode 57.6% (exceeds 55%+). Capped by no SWE-bench/LiveCodeBench/FrontierCode/CursorBench/TB 2.1 data.
- **Cost efficiency: 80/100.** $2/$10 per 1M (≤272K), $4/$15 (>272K), blended ~$1.54/M, 90% cache discount, cost/task $1.04. Methodology: $1.25/$4.25 ≈ 88, $3/$15 ≈ 60 → $2/$10 interpolates to ~80.
- **Overall Score: 78.2/100.** Half-up mean of (68 + 80 + 95 + 70 + 78) / 5 = 78.2 → 78. Best-fit: exceptional math reasoning (FrontierMath Tier 4 90%) at Sol-tier pricing with fast 119 tok/s; limited agentic and coding benchmark coverage.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (OpenAI GPT-6 Sol/Luna blog, GPT-6 Astra system card), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Epoch AI, Nous Research), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.