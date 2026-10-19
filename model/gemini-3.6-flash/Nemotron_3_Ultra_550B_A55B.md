# Gemini 3.6 Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemini-3.6-flash`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash (High effort tier)
- **Short description:** Google's mid-Gemini 3 series Flash model with native multimodal input (text, image, audio, video), fast 200 tok/s output, 1M context, and introductory $0.75/$3.75 pricing; succeeded by 3.7/3.8 Flash.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-3.6-flash` via `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash`), Google Cloud Vertex AI, OpenCode Zen (`opencode/gemini-3.6-flash` via `https://opencode.ai/inference/google/v1beta/models/gemini-3.6-flash`). Google GenAI API (not OpenAI-compatible).
- **Release / knowledge:** 2026-07-21 release; knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3.6-flash` (Google AI Studio/Vertex), `opencode/gemini-3.6-flash` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,000,000 tokens input; 65,536 tokens max output (64K).
- **Modalities:** Text, image, audio, video in; text out; reasoning yes (extended thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $0.75/M in, $3.75/M out (Google AI Studio / AA). 80% cache discount (AA). Blended 7:2:1 ≈ $0.63/M (AA). Cost per Intelligence Index task: $1.60 (AA).
- **Architecture:** Proprietary (Google DeepMind); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- OSWorld-Verified: **83%** (Google blog)
- GDPval-AA v2: **1423 Elo** (Google blog) / **39.2%** normalized (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **73.8%** (Vals AI leaderboard)
- AA Agentic Index: **30.1%** (Artificial Analysis)
- MazeBench: **0%** (ASCII mode, tools)

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (Artificial Analysis) / **93.4%** (Vals AI)
- HLE: **40.8%** (Artificial Analysis)
- AA Intelligence Index: **34** (rank #79/217) (Artificial Analysis)
- AA LCR: **80.0%** (Artificial Analysis)
- CritPt: **10.6%** (Artificial Analysis)
- ARC-AGI-1: **91.17%** (ARC Prize semi-private)
- ARC-AGI-2: **60.4%** (ARC Prize semi-private)
- AA GPQA Diamond: **92.8%** (Artificial Analysis)
- AA HLE: **40.8%** (Artificial Analysis)
- AA Omniscience Accuracy: **50.0%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **55.6%** (Artificial Analysis)
- AA Omniscience Index: **22.1%** (Artificial Analysis)
- MMLU-Pro (Vals): **89.3%** (Vals AI)
- FrontierMath v2 Tiers 1-3: **58.947%** (Epoch AI)
- FrontierMath v2 Tier 4: **21.951%** (Epoch AI)

Coding:

- DeepSWE: **49.0%** (Google blog)
- CursorBench 3.2: **53.5%** (Cursor evals)
- AA-SciCode: **53.4%** (Artificial Analysis)
- LiveCodeBench (Vals): **88.1%** (Vals AI leaderboard)
- SWE-bench (Vals): **79.6%** (Vals AI leaderboard)
- AA Coding Index: **69.2%** (Artificial Analysis)

Multimodal:

- AA MMMU-Pro: **83.2%** (Artificial Analysis)
- Design Arena Website: **1300** (OpenRouter)

Long context:

- AA LCR: **80.0%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 65/100.** OSWorld-Verified 83% (strong), GDPval 1423 Elo (below 1750+ frontier), TB 2.1 Vals 73.8%, AA Agentic Index 30.1%. No TB 2.1 direct, TB 4.0, MCP Atlas, Toolathlon, BrowseComp, Tau2 data. Capped by MazeBench 0%, limited agentic benchmark coverage.
- **Reasoning: 65/100.** GPQA Diamond 92.8% (exceeds 90%+ frontier), HLE 40.8% (meets 40%+ frontier), ARC-AGI-1 91.17% / ARC-AGI-2 60.4%, AA LCR 80.0%. Capped by AA Intelligence Index 34 (<60 frontier), CritPt 10.6%, AA Omniscience Index 22.1%, FrontierMath Tier 4 22.0%.
- **Context window: 95/100.** 1M native context; AA LCR 80.0% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: ≥1M = 95-100.
- **Multimodal: 90/100.** Native text/image/audio/video input; AA MMMU-Pro 83.2%. Methodology: +audio/video in = 90-100.
- **Coding: 70/100.** LiveCodeBench 88.1% (Vals), SWE-bench 79.6% (Vals), AA Coding Index 69.2% (near 70%+), AA-SciCode 53.4% (near 55%+), CursorBench 3.2 53.5%. Capped by DeepSWE 49.0% (well below 74%+ frontier), no SWE-bench Pro/Verified.
- **Cost efficiency: 95/100.** $0.75/$3.75 per 1M, blended ~$0.63/M, 80% cache discount, cost/task $1.60. Methodology: ~$0.10/$0.20 = 97-99; introductory pricing very competitive → 95.
- **Overall Score: 77/100.** Half-up mean of (65 + 65 + 95 + 90 + 70) / 5 = 77.0 → 77. Best-fit: fast, cost-efficient multimodal model with native audio/video; agentic autonomy (GDPval, AA Index) and DeepSWE lag 3.7/3.8 Flash.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official blog (Google Gemini 3.6 Flash blog), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Epoch AI, Vals AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.