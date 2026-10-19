# Claude Opus 4.7 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-opus-4-7`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7 (Max effort tier)
- **Short description:** Anthropic's non-reasoning Opus 4.7 variant with strong coding (LiveCodeBench 85.1% Vals), good instruction following, and $5/$25 pricing; succeeded by Opus 4.8 with reasoning support.
- **Provider / access:** Anthropic API (`claude-opus-4-7` via `https://api.anthropic.com/v1/messages`), OpenCode Zen (`opencode/claude-opus-4-7` via `https://opencode.ai/inference/anthropic/v1/messages`), AWS Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Anthropic Messages API (not Chat Completions).
- **Release / knowledge:** 2026-04-16 release; knowledge cutoff January 2026.
- **IDs:** `anthropic/claude-opus-4-7` (Anthropic API), `opencode/claude-opus-4-7` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,000,000 tokens total (1M); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning no (non-reasoning per BenchLM); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $5.00/M in, $25.00/M out (Anthropic API & OpenCode Zen). 90% cache discount (AA). Blended 7:2:1 ≈ $3.85/M (AA).
- **Architecture:** Proprietary (Anthropic); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Tau2-bench: **74%** (Artificial Analysis)
- Gert Labs: **65.59%** (Gert Labs rankings)
- ResearchClawBench: **20.7%** (ResearchClawBench leaderboard)
- OSWorld 2.0: **13.9%** (OSWorld 2.0 paper)
- Terminal-Bench 2.1 (Vals): **68.5%** (Vals AI leaderboard)
- ApprenticeBench: **7%** (NeoCognition)

Reasoning / knowledge:

- GPQA Diamond: **88.5%** (Artificial Analysis) / **90.2%** (Vals AI)
- HLE: **33.3%** (Artificial Analysis)
- AA Intelligence Index: **41** (estimated) (Artificial Analysis)
- AA LCR: **75.7%** (Artificial Analysis)
- CritPt: **5.1%** (Artificial Analysis)
- ARC-AGI-3: **0.2%** (ARC Prize leaderboard)
- AA HLE: **33.3%** (Artificial Analysis)
- AA Omniscience Index: **14.8%** (Artificial Analysis)
- AA Omniscience Accuracy: **44.7%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **54.1%** (Artificial Analysis)
- MMLU-Pro (Vals): **89.9%** (Vals AI)
- FrontierMath v2 Tiers 1-3: **70.175%** (Epoch AI)
- FrontierMath v2 Tier 4: **31.707%** (Epoch AI)
- AA IFBench: **43.6%** (Artificial Analysis)

Coding:

- LiveCodeBench (Vals): **85.1%** (Vals AI leaderboard)
- SWE-bench (Vals): **82.0%** (Vals AI leaderboard)
- Vibe Code Bench: **71.00%** (Vals AI)
- React Native Evals: **82.8%** (React Native Evals leaderboard)
- FrontierCode 1.1 Main: **38.5%** (Cognition)
- PostTrainBench v1.1: **28.6%** (PostTrainBench leaderboard)

Multimodal:

- AA MMMU-Pro: **76.4%** (Artificial Analysis)

Long context:

- AA LCR: **75.7%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 55/100.** TB 2.1 68.5% (Vals, below 88%+ frontier), Tau2 74%, Gert Labs 65.6%, OSWorld 13.9%, ApprenticeBench 7%. No GDPval, MCP Atlas, Toolathlon, BrowseComp data. Capped by minimal agentic benchmark coverage and weak OSWorld.
- **Reasoning: 55/100.** GPQA Diamond 88.5% (near 90%+ frontier), MMLU-Pro 89.9%, FrontierMath Tiers 1-3 70.2%. Capped by HLE 33.3% (below 40%+ frontier), AA Intelligence Index 41 (est., <60 frontier), CritPt 5.1%, ARC-AGI-3 0.2%, AA Omniscience Index 14.8%.
- **Context window: 95/100.** 1M native context; AA LCR 75.7% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: ≥1M = 95-100.
- **Multimodal: 65/100.** Text + image input only; MMMU-Pro 76.4%. No video, audio, PDF input. Methodology: +image in = 60-70.
- **Coding: 80/100.** LiveCodeBench 85.1% (Vals), SWE-bench 82.0% (Vals), Vibe Code 71.0%, React Native 82.8%. Capped by no SWE-bench Verified/Pro, FrontierCode 38.5%, PostTrainBench 28.6%.
- **Cost efficiency: 45/100.** $5/$25 per 1M, blended ~$3.85/M, 90% cache discount. Methodology: $3/$15 ≈ 60, $10/$50 ≈ 30 → $5/$25 interpolates to ~45.
- **Overall Score: 70/100.** Half-up mean of (55 + 55 + 95 + 65 + 80) / 5 = 70.0 → 70. Best-fit: non-reasoning Opus for coding and instruction following at Opus pricing; succeeded by Opus 4.8 with reasoning and better agentic scores.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across independent benchmark aggregators (Artificial Analysis, BenchLM, Epoch AI, Vals AI, ARC Prize), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores. Note: AA Intelligence Index is estimated.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.