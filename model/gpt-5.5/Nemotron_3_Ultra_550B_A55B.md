# GPT-5.5 — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 (Xhigh effort tier)
- **Short description:** OpenAI's GPT-5.5 reasoning model with strong long-context retrieval (MRCR 87.5% at 128K-256K), good coding (LiveCodeBench 85.3% Vals), and 922K context, at $5/$30 premium pricing.
- **Provider / access:** OpenAI API (`gpt-5.5` via `https://api.openai.com/v1/responses`), OpenCode Zen (`opencode/gpt-5.5` via `https://opencode.ai/inference/openai/v1/responses`), Azure OpenAI, 2 total providers. Responses API (not Chat Completions).
- **Release / knowledge:** 2026-04-23 release; knowledge cutoff not publicly disclosed.
- **IDs:** `openai/gpt-5.5` (OpenAI API), `opencode/gpt-5.5` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 922,000 tokens total (~920K per AA); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (extended thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** ≤272K tokens: $5.00/M in, $0.50/M cache read, $30.00/M out. >272K tokens: $10.00/M in, $1.00/M cache read, $45.00/M out (OpenAI API & OpenCode Zen). Blended 7:2:1 ≈ $4.35/M (AA). Cost per Intelligence Index task: $2.63 (AA).
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.0: **82%** (Terminal-Bench 2.0 leaderboard)
- CyberGym: **81.8%** (OpenAI GPT-5.5 blog)
- BrowseComp: **84.4%** (OpenAI GPT-5.5 blog)
- OSWorld-Verified: **78.7%** (OpenAI GPT-5.5 blog)
- MCP Atlas: **75.3%** (OpenAI GPT-5.5 blog)
- Toolathlon: **55.6%** (OpenAI GPT-5.5 blog)
- Tau2-bench: **98%** (OpenAI GPT-5.5 blog)
- APEX-Agents: **37.7%** (Artificial Analysis)
- GDPval-AA v2: **1396 Elo** (Artificial Analysis) / **42.5%** normalized (Artificial Analysis)
- Gert Labs: **72.93%** (Gert Labs rankings)
- ResearchClawBench: **17.0%** (ResearchClawBench leaderboard)
- OSWorld 2.0: **13.0%** (OSWorld 2.0 paper)
- JobBench: **42.7%** (JobBench paper)
- ExploitGym: **13.4%** (ExploitGym paper)
- Terminal-Bench 2.1 (Vals): **76.4%** (Vals AI leaderboard)
- AA Agentic Index: **37.3%** (Artificial Analysis)
- AA AnalystAgent: **50.0%** (Artificial Analysis)
- ApprenticeBench: **20%** (NeoCognition)
- MazeBench: **0%** (ASCII mode, no tools)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (OpenAI GPT-5.5 blog) / **93.5%** (Artificial Analysis) / **93.2%** (Vals AI)
- HLE: **52.2%** (OpenAI GPT-5.5 blog) / **41.4%** without tools
- MRCR v2 64K-128K: **83.1%** (OpenAI GPT-5.5 blog)
- MRCR v2 128K-256K: **87.5%** (OpenAI GPT-5.5 blog)
- ARC-AGI-1: **95.00%** (ARC Prize verified)
- ARC-AGI-2: **85%** (OpenAI GPT-5.5 blog)
- ARC-AGI-3: **0.4%** (ARC Prize leaderboard)
- AA Intelligence Index: **38** (rank #67/217) (Artificial Analysis)
- AA LCR: **84.3%** (Artificial Analysis)
- CritPt: **27.1%** (Artificial Analysis)
- AA HLE: **45.8%** (Artificial Analysis)
- AA Omniscience Index: **20.5%** (Artificial Analysis)
- AA Omniscience Accuracy: **58.0%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **89.0%** (Artificial Analysis)
- MMLU-Pro (Vals): **88.1%** (Vals AI)
- FrontierMath v2 Tiers 1-3: **85.263%** (Epoch AI)
- FrontierMath v2 Tier 4: **72.500%** (Epoch AI)
- AA IFBench: **75.9%** (Artificial Analysis)

Coding:

- SWE-bench Pro: **58.6%** (OpenAI GPT-5.5 blog)
- Terminal-Bench 2.0: **82%** (Terminal-Bench 2.0 leaderboard)
- Vibe Code Bench: **69.85%** (Vals AI)
- React Native Evals: **84.7%** (React Native Evals leaderboard)
- CursorBench 3.1: **59.2%** (Cursor evals)
- CursorBench 3.2: **58.4%** (Cursor evals)
- AA-SciCode: **55.8%** (Artificial Analysis)
- FrontierCode 1.1 Main: **43.0%** (Cognition)
- LiveCodeBench (Vals): **85.3%** (Vals AI leaderboard)
- SWE-bench (Vals): **82.6%** (Vals AI leaderboard)
- AA Coding Index: **74.9%** (Artificial Analysis)
- PostTrainBench v1.1: **27.2%** (PostTrainBench leaderboard)

Multimodal:

- MMMU-Pro: **81.2%** (OpenAI GPT-5.5 blog) / **83.2%** with Python / **79.9%** (Artificial Analysis)
- OfficeQA Pro: **54.1%** (OpenAI GPT-5.5 blog)
- Design Arena Website: **1257** (OpenRouter)

Long context:

- MRCR v2 64K-128K: **83.1%** (OpenAI GPT-5.5 blog)
- MRCR v2 128K-256K: **87.5%** (OpenAI GPT-5.5 blog)
- AA LCR: **84.3%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 72/100.** TB 2.0 82%, CyberGym 81.8%, BrowseComp 84.4%, OSWorld-Verified 78.7%, MCP Atlas 75.3%, Tau2 98%, TB 2.1 Vals 76.4%, AA Agentic Index 37.3%, GDPval 1396 Elo (below 1750+ frontier). Capped by OSWorld 2.0 13.0%, ExploitGym 13.4%, MazeBench 0%.
- **Reasoning: 75/100.** GPQA Diamond 93.6% (exceeds 90%+ frontier), HLE 52.2% (exceeds 40%+ frontier), ARC-AGI-1 95% / ARC-AGI-2 85%, MRCR 87.5% at 128K-256K, AA LCR 84.3%, FrontierMath Tiers 1-3 85.3% / Tier 4 72.5%. Capped by AA Intelligence Index 38 (<60 frontier), CritPt 27.1%, ARC-AGI-3 0.4%, Omniscience Hallucination 89%.
- **Context window: 90/100.** 922K native context; MRCR 87.5% at 128K-256K, AA LCR 84.3% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: 500K-1M = 85-94.
- **Multimodal: 70/100.** Text + image input only; MMMU-Pro 81.2-83.2%. No video, audio, PDF input. Methodology: +image in = 60-70.
- **Coding: 80/100.** LiveCodeBench 85.3% (Vals), SWE-bench 82.6% (Vals), AA Coding Index 74.9% (exceeds 70%+), AA-SciCode 55.8% (exceeds 55%+), React Native 84.7%, Vibe Code 69.85%. Capped by SWE-bench Pro 58.6%, FrontierCode 43.0%, CursorBench 3.2 58.4%.
- **Cost efficiency: 45/100.** $5/$30 per 1M (≤272K), $10/$45 (>272K), blended ~$4.35/M, 90% cache discount, cost/task $2.63. Methodology: $3/$15 ≈ 60, $10/$50 ≈ 30 → $5/$30 interpolates to ~45.
- **Overall Score: 77/100.** Half-up mean of (72 + 75 + 90 + 70 + 80) / 5 = 77.4 → 77. Best-fit: strong long-context and math model at premium pricing; MRCR 87.5% and FrontierMath Tier 4 72.5% stand out; succeeded by GPT-5.6/6.x with better agentic breadth.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (OpenAI GPT-5.5 blog), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Epoch AI, Vals AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.