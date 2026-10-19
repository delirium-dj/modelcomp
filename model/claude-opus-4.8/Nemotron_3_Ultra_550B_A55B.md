# Claude Opus 4.8 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-opus-4-8`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8 (Max effort tier)
- **Short description:** Anthropic's improved Opus 4.7 successor with better honesty, judgment, and agentic reliability at same $5/$25 pricing; introduces dynamic workflows and effort control.
- **Provider / access:** Anthropic API (`claude-opus-4-8` via `https://api.anthropic.com/v1/messages`), OpenCode Zen (`opencode/claude-opus-4-8` via `https://opencode.ai/inference/anthropic/v1/messages`), AWS Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Anthropic Messages API (not Chat Completions).
- **Release / knowledge:** 2026-05-28 release; knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-opus-4-8` (Anthropic API), `opencode/claude-opus-4-8` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,000,000 tokens total (1M); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (extended thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $5.00/M in, $0.50/M cache read, $6.25/M cache write, $25.00/M out (Anthropic API & OpenCode Zen). Fast mode: $10/$50 at 2.5x speed. Blended 7:2:1 ≈ $3.85/M (AA). Cost per Intelligence Index task: $4.08 (AA).
- **Architecture:** Proprietary (Anthropic); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **74.6%** (Anthropic System Card) / **71.9%** (Vals AI)
- BrowseComp: **84.3%** (Anthropic System Card)
- DeepSearchQA: **93.1%** (Anthropic System Card)
- OSWorld-Verified: **83.4%** (Anthropic System Card)
- OSWorld 2.0: **20.6%** (OSWorld 2.0 paper)
- GDPval-AA v2: **1593 Elo** (Anthropic System Card) / **47.7%** normalized (Artificial Analysis)
- MCP Atlas: **82.2%** (Anthropic System Card)
- Toolathlon: **59.9%** (Anthropic System Card)
- Tau2-bench: **94.4%** (Artificial Analysis)
- Finance Agent v2: **53.9%** (Anthropic System Card)
- Gert Labs: **72.97%** (Gert Labs rankings)
- AA Agentic Index: **42.6%** (Artificial Analysis)
- ResearchClawBench: **21.1%** (ResearchClawBench leaderboard)
- Terminal-Bench 3.0: **21.1%** (Frontier-Bench leaderboard)
- MazeBench: **0%** (ASCII mode, no tools)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (Anthropic System Card) / **92.0%** (Artificial Analysis) / **92.4%** (Vals AI)
- HLE: **57.9%** (Anthropic System Card) / **49.8%** without tools
- AA Intelligence Index: **42** (rank #50/217) (Artificial Analysis)
- AA LCR: **77.7%** (Artificial Analysis)
- CritPt: **20.9%** (Artificial Analysis)
- ARC-AGI-1: **92.50%** (ARC Prize semi-private)
- ARC-AGI-2: **72.1%** (ARC Prize semi-private)
- ARC-AGI-3: **1.5%** (ARC Prize semi-private)
- AA HLE: **48.7%** (Artificial Analysis)
- AA Omniscience Index: **28.8%** (Artificial Analysis)
- AA Omniscience Accuracy: **48.8%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **39.3%** (Artificial Analysis)
- MMLU-Pro (Vals): **89.6%** (Vals AI)
- INCLUDE: **87.6%** (Anthropic System Card)
- USAMO 2026: **96.7%** (Anthropic System Card)
- FrontierMath v2 Tiers 1-3: **80.000%** (Epoch AI)
- FrontierMath v2 Tier 4: **56.098%** (Epoch AI)
- AA IFBench: **62.2%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **88.6%** (Anthropic System Card) / **88.6%** (Vals AI)
- SWE-bench Pro: **69.2%** (Anthropic System Card)
- SWE Multilingual: **84.4%** (Anthropic System Card)
- SWE Multimodal: **38.4%** (Anthropic System Card)
- LiveCodeBench (Vals): **87.8%** (Vals AI leaderboard)
- CursorBench 3.1: **58.4%** (Cursor evals)
- CursorBench 3.2: **62.3%** (Cursor evals)
- FrontierCode 1.1 Main: **46.5%** (Cognition)
- AA Coding Index: **74.3%** (Artificial Analysis)
- AA-SciCode: **54.4%** (Artificial Analysis)
- PostTrainBench v1.1: **32.9%** (PostTrainBench leaderboard)
- Terminal-Bench 2.1: **74.6%** (Anthropic System Card)

Multimodal:

- ScreenSpot Pro: **87.9%** (Anthropic System Card)
- CharXiv: **89.9%** (Anthropic System Card) / **80.5%** without tools
- OfficeQA Pro: **66.2%** (Anthropic System Card)
- Design Arena Website: **1258** (OpenRouter)

Long context:

- AA LCR: **77.7%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 75/100.** TB 2.1 74.6% (below 88%+ frontier), BrowseComp 84.3%, DeepSearchQA 93.1%, OSWorld-Verified 83.4%, MCP Atlas 82.2%, Tau2 94.4%, Toolathlon 59.9%, GDPval 1593 Elo (below 1750+ frontier). Capped by TB 3.0 21.1%, OSWorld 2.0 20.6%, MazeBench 0%.
- **Reasoning: 78/100.** GPQA Diamond 93.6% (exceeds 90%+ frontier), HLE 57.9% (exceeds 40%+ frontier), ARC-AGI-1 92.5% / ARC-AGI-2 72.1%, USAMO 96.7%, FrontierMath Tiers 1-3 80.0% / Tier 4 56.1%, AA LCR 77.7%. Capped by AA Intelligence Index 42 (<60 frontier), CritPt 20.9%, ARC-AGI-3 1.5%.
- **Context window: 95/100.** 1M native context; AA LCR 77.7% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: ≥1M = 95-100.
- **Multimodal: 70/100.** Text + image input only; CharXiv 89.9%, ScreenSpot Pro 87.9%, OfficeQA Pro 66.2%. No video, audio, PDF input. Methodology: +image in = 60-70.
- **Coding: 88/100.** SWE-bench Verified 88.6% (exceeds 80%+ frontier), LiveCodeBench 87.8% (Vals), SWE Multilingual 84.4%, SWE-bench Pro 69.2%, CursorBench 3.2 62.3%, AA Coding Index 74.3% (exceeds 70%+), FrontierCode 46.5%. Capped by SWE Multimodal 38.4%, PostTrainBench 32.9%.
- **Cost efficiency: 45/100.** $5/$25 per 1M, blended ~$3.85/M, 90% cache discount, cost/task $4.08. Methodology: $3/$15 ≈ 60, $10/$50 ≈ 30 → $5/$25 interpolates to ~45.
- **Overall Score: 81/100.** Half-up mean of (75 + 78 + 95 + 70 + 88) / 5 = 81.2 → 81. Best-fit: reliable Opus-tier model for coding and legal/finance work; improved honesty and judgment over 4.7; succeeded by Opus 5 with 40% cost reduction.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (Anthropic Opus 4.8 blog, System Card), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Epoch AI, Vals AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.