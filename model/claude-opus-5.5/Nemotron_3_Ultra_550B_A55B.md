# Claude Opus 5.5 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship reasoning model (Claude 5.5 family), delivering frontier agentic coding, knowledge work, and computer-use performance at 40% lower cost than Opus 5, with improved communication style and strongest-to-date alignment scores.
- **Provider / access:** Anthropic API (`claude-opus-5-5` via `https://api.anthropic.com/v1/messages`), OpenCode Zen (`opencode/claude-opus-5-5` via `https://opencode.ai/inference/anthropic/v1/messages`), AWS Bedrock, Google Cloud Vertex AI, Microsoft Azure. Anthropic Messages API (not Chat Completions).
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-opus-5-5` (Anthropic API), `opencode/claude-opus-5-5` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,000,000 tokens total (1M); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (adaptive thinking, cannot be disabled); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $4.00/M input, $0.20/M cache read, $5.00/M cache write, $20.00/M output (Anthropic API & OpenCode Zen). Fast mode: $8/$40. Blended 7:2:1 ≈ $2.94/M. Cost per Intelligence Index task: $5.98 (Artificial Analysis).
- **Architecture:** Proprietary (Anthropic); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (xhigh effort) (Anthropic blog / Anthropic harness)
- Terminal-Bench 4.0: **59.6%** (Artificial Analysis / AA leaderboard)
- FrontierCode v1.1 Main: **54.4%** (Anthropic blog / Anthropic harness)
- CursorBench 4.0: **57.8%** (Anthropic blog / Cursor evals)
- GDPval-AA v2.1: **1846 Elo** (Anthropic blog / Anthropic harness)
- GDPval-AA normalized: **68.3%** (Artificial Analysis)
- AA Briefcase Elo: **1803** (Artificial Analysis)
- AutomationBench: **40.0%** (Anthropic blog / Zapier harness)
- AA AutomationBench: **69.5%** (Artificial Analysis)
- OSWorld 2.1: **81.8%** partial (Anthropic System Card)
- Toolathlon Verified: **77.8%** (Anthropic System Card)
- Toolathlon Verified Pass@3: **82.4%** (Anthropic System Card)
- Toolathlon Verified avg turns: **26.9** (Anthropic System Card)
- AA ITBench: **38.2%** (Artificial Analysis)
- CWE-bench v1: **67.0%** (Collinear leaderboard)
- Hermes Index: **63.3%** (Nous Research)
- Hermes Bench: **76.7%** (Nous Research)
- MazeBench (ASCII, tools): **13%** (MazeBench leaderboard)

Reasoning / knowledge:

- HLE (with tools): **67.7%** (Anthropic blog / Anthropic harness)
- HLE (without tools): **64.4%** (Anthropic System Card)
- AA Intelligence Index: **58** (rank #1/217) (Artificial Analysis)
- AA LCR: **84.7%** (Artificial Analysis / BenchLM)
- CritPt: **31.7%** (Artificial Analysis / BenchLM)
- ARC-AGI-1: **97.50%** (ARC Prize semi-private)
- ARC-AGI-2: **91.7%** (ARC Prize semi-private)
- AA Omniscience Accuracy: **66.2%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **58.6%** (Artificial Analysis)
- AA Omniscience Index: **46.4%** (Artificial Analysis)
- MLCR-AA: **66.7%** (Artificial Analysis)
- GraphWalks BFS 256K–1M: **66.8%** (Google Gemini 4 Argon chart)
- STEMBench: **2.62** (Ulam audit)
- GMMLU: **94.3%** (Anthropic System Card)
- MILU: **93.1%** (Anthropic System Card)
- HealthBench raw: **68.1%** / length-adjusted **60.6%** / Professional **65.6%** / Professional raw **77.1%** (Anthropic System Card)
- BioMysteryBench human-solvable: **89.3%** / human-difficult: **50.0%** (Anthropic System Card)

Coding:

- SWE-bench Pro: **89.9%** (Anthropic System Card)
- SWE Multilingual: **93.9%** (Anthropic System Card)
- SWE Multimodal: **61.4%** (Anthropic System Card)
- DeepSWE: **74.2%** (Anthropic System Card)
- FrontierCode v1.1 Extended: **63.6%** (Anthropic System Card)
- FrontierSWE v2: **62.3%** (Proximal leaderboard)
- ProgramBench: **91.2%** (Anthropic System Card)
- PostTrainBench v1.1: **49.3%** (Google Gemini 4 Argon chart)
- Bug Hunt Bench: **41.7 fixes** (public data)
- AA-SciCode: **66.9%** (Artificial Analysis)

Multimodal:

- Chartography (with tools): **89.0%** (Anthropic blog)
- Chartography (no tools): **64.4%** (Anthropic System Card)
- AA MMMU-Pro: **87.7%** (Artificial Analysis)
- BenchCAD Vision2Code: **0.730** no tools / **0.962** with tools (Anthropic System Card)
- Biomedical image analysis: **71.4%** (Anthropic System Card)
- OfficeQA: **78.9%** / Pro: **67.7%** (Anthropic System Card)
- Design Arena Website: **1335** (OpenRouter)

Long context:

- AA LCR: **84.7%** (Artificial Analysis)
- MLCR-AA: **66.7%** (Artificial Analysis)
- GraphWalks BFS 256K–1M: **66.8%** (Google chart)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 95/100.** GDPval-AA 1846 Elo (highest reported), TB 4.0 66.4% xhigh, Toolathlon 77.8%, AutomationBench 40% (Zapier, no fallbacks) — exceeds frontier reference thresholds for agentic work (GDPval ~1750+, TB 4.0 strong). Capped by AutomationBench 40% and MazeBench 13%.
- **Reasoning: 96/100.** HLE 67.7% with tools (far above 40% frontier ref), ARC-AGI-1 97.5% / ARC-AGI-2 91.7% (near-perfect), AA Intelligence Index 58 (near 60 frontier), AA LCR 84.7%, CritPt 31.7%. Capped by AA Index 58 < 60 and CritPt below frontier.
- **Context window: 95/100.** 1M native context window; no public MRCR/needle retrieval scores at 512K+ found to verify ≥98% retrieval for the 100 tier. Methodology: ≥1M = 95–100 (100 if ≥98% retrieval at 512K+).
- **Multimodal: 70/100.** Text + image input only; no video, PDF, audio input or non-text output. Chartography 89% with tools, MMMU-Pro 87.7% show strong visual reasoning. Methodology: +image in = 60–70.
- **Coding: 96/100.** SWE-bench Pro 89.9%, DeepSWE 74.2% (frontier ref 74%+), AA-SciCode 66.9% (ref 55%+), FrontierSWE v2 62.3%, ProgramBench 91.2%, FrontierCode 54.4% — all at/above frontier coding thresholds. Capped by CursorBench 57.8% and Bug Hunt 41.7 fixes.
- **Cost efficiency: 65/100.** $4.00/$20.00 per 1M (blended ~$2.94/M, cost/task $5.98 on Intelligence Index). Methodology: $3/$15 ≈ 60, $10/$50 ≈ 30 → $4/$20 interpolates to ~65. No free tier.
- **Overall Score: 90/100.** Half-up mean of (95 + 96 + 95 + 70 + 96) / 5 = 90.4 → 90. Best-fit: premium choice for highest-stakes agentic coding and research where cost is secondary; unmatched HLE/ARC reasoning and SWE-bench dominance.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official model cards (Anthropic blog, System Card), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Epoch AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.