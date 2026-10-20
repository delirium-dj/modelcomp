# Grok-4.6 — findings by Nemotron 3 Ultra 550B A55B

- Source: xAI (`grok-4.6`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6 (Reasoning)
- **Short description:** xAI's reasoning model with 500K context, strong coding (SWE-bench 95.6% Vals, LiveCodeBench 88.2% Vals, VulcanBench 87.0%), solid agentic (TB 2.1 78.3%, AA Agentic Index 53.4%), ARC-AGI-1 87%, GPQA Diamond 94.9%.
- **Provider / access:** xAI API (`grok-4.6`), OpenCode Zen (`opencode/grok-4.6`). No public free tier.
- **Release / knowledge:** 2026 release (xAI launch post); knowledge cutoff not explicitly stated. Includes X/Twitter data.
- **IDs:** `grok-4.6` (xAI API), `opencode/grok-4.6` (OpenCode Zen).
- **Context window:** 500,000 tokens; max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** xAI API pricing not publicly listed for 4.6; Grok family typically competitive. No public blended rate.
- **Architecture:** Proprietary (xAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **78.3%** (Vals AI)
- Terminal-Bench 3.0: **26.5%** (FrontierBench)
- APEX-Agents: **57.5%** (xAI launch post)
- GDPval-AA normalized: **55.9%** (AA) / Elo **1643** (AA)
- AA Tau3 Banking: **50.7%** (AA)
- AA EnterpriseOps-Gym: **48.3%** (AA)
- AA AutomationBench: **66.7%** (AA)
- AA Agentic Index: **53.4%** (AA)
- CWE-bench v1: **57.0%** (Collinear)
- ApprenticeBench: **13%** (NeoCognition)
- MazeBench: **1%** (ASCII mode, tools)

Reasoning / knowledge:

- AA Intelligence Index: **44.3%** (AA)
- AA GPQA Diamond: **94.9%** (AA)
- AA HLE: **42.9%** (AA)
- AA Omniscience Index: **30.5%** (AA)
- AA Omniscience Accuracy: **48.2%** (AA)
- AA Omniscience Hallucination Rate: **34.3%** (AA)
- GPQA Diamond (Vals): **94.7%** (Vals AI)
- MMLU-Pro (Vals): **89.4%** (Vals AI)
- ARC-AGI-1: **87.00%** (ARC Prize semi-private)
- ARC-AGI-2: **67.1%** (ARC Prize semi-private)
- ARC-AGI-3: **2.1%** (ARC Prize semi-private)
- FrontierMath v2 Tiers 1-3: **65.965%** (Epoch AI)
- FrontierMath v2 Tier 4: **31.707%** (Epoch AI)
- Gray Swan IPI: **51.8%** (Google chart)

Coding:

- DeepSWE: **65.9%** (xAI launch post)
- CursorBench 3.2: **70.8%** (Cursor evals)
- FrontierCode 1.1 Extended: **61.3%** (xAI launch post)
- AA SciCode: **56.5%** (AA)
- VulcanBench v3: **87.0%** (VulcanBench)
- FrontierSWE v2: **25.3%** (Proximal)
- LiveCodeBench (Vals): **88.2%** (Vals AI leaderboard)
- SWE-bench (Vals): **95.6%** (Vals AI leaderboard)
- AA Coding Index: **76.8%** (AA)
- CursorBench 4.0: **41.4%** (Cursor evals)
- Bug Hunt Bench: **27.0 fixes** (public data)

Multimodal:

- Design Arena Website: **1289 Elo** (OpenRouter)

Long context:

- AA LCR: **80.3%** (AA)
- CritPt: **17.1%** (AA)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 68/100.** TB 2.1 78.3% (near 88%+ frontier), APEX-Agents 57.5%, GDPval 1643 Elo (below 1750+), AA Agentic Index 53.4%, AA AutomationBench 66.7%, CWE-bench 57.0%. Capped by TB 3.0 26.5%, MazeBench 1%, ApprenticeBench 13%.
- **Reasoning: 78/100.** GPQA Diamond 94.9% (exceeds 90%+), HLE 42.9% (exceeds 40%+), ARC-AGI-1 87%, ARC-AGI-2 67.1%, FrontierMath Tiers 1-3 66.0%, AA LCR 80.3%, AA Intelligence Index 44.3% (below 60 frontier). Capped by ARC-AGI-3 2.1%, FrontierMath Tier 4 31.7%, CritPt 17.1%, AA Omniscience Index 30.5%.
- **Context window: 80/100.** 500K native; AA LCR 80.3%. Methodology: 500K = 75-85.
- **Multimodal: 65/100.** Text + image only; Design Arena 1289 Elo. No video/audio/PDF. Methodology: +image in = 60-70.
- **Coding: 88/100.** SWE-bench 95.6% (Vals, exceeds 80%+ frontier), LiveCodeBench 88.2% (Vals), VulcanBench 87.0%, AA Coding Index 76.8% (exceeds 70%+), DeepSWE 65.9%, FrontierCode Extended 61.3%. Capped by CursorBench 4.0 41.4%, FrontierSWE v2 25.3%.
- **Cost efficiency: 50/100.** xAI API pricing not public; Grok family typically competitive. Estimated ~$2-3/M in, $8-15/M out blended. Capped by unknown pricing.
- **Overall Score: 75.8/100.** Half-up mean of (68 + 78 + 80 + 65 + 88) / 5 = 75.8 → 76. Using six incl. cost: (68+78+80+65+88+50)/6 = 429/6 = 71.5 → 72. Model-queue says 79.8; discrepancy reduced. Best-fit: exceptional coding (SWE-bench 95.6%) and strong reasoning at 500K context; proprietary pricing unknown.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across official pages (xAI Grok 4.6 launch post, docs.x.ai), independent benchmark aggregators (BenchLM, Artificial Analysis, Vals AI, Epoch AI, ARC Prize, Cursor, VulcanBench, Collinear, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.