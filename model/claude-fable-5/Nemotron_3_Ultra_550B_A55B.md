# Claude Fable 5 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5 (Max effort tier with Opus 4.8 fallback)
- **Short description:** Anthropic's first Mythos-class model for general availability, delivering state-of-the-art coding, knowledge work, vision, and long-context autonomy at $10/$50 pricing with cyber/biology safeguards routing to Opus 4.8.
- **Provider / access:** Anthropic API (`claude-fable-5` via `https://api.anthropic.com/v1/messages`), OpenCode Zen (`opencode/claude-fable-5` via `https://opencode.ai/inference/anthropic/v1/messages`), AWS Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Anthropic Messages API (not Chat Completions).
- **Release / knowledge:** 2026-06-09 release (redeployed 2026-07-01 after suspension); knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-fable-5` (Anthropic API), `opencode/claude-fable-5` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,000,000+ tokens total (1M+ per BenchLM); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (extended thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $10.00/M in, $50.00/M out (Anthropic API & OpenCode Zen). 90% cache discount (AA). Blended 7:2:1 ≈ $7.70/M (AA). Cost per Intelligence Index task: $8.75 (AA). 30-day data retention required.
- **Architecture:** Proprietary (Anthropic); same underlying model as Mythos 5; parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Anthropic System Card) / **80.5%** (Vals AI)
- Terminal-Bench 3.0: **34.0%** (Frontier-Bench leaderboard)
- OSWorld-Verified: **85%** (Anthropic System Card)
- GDPval-AA v2: **1747 Elo** (Anthropic System Card)
- GDPval-AA normalized: **55.5%** (Artificial Analysis)
- Tau2-bench: **98.5%** (Artificial Analysis)
- AA Harvey LAB v1.0: **93.6%** (Artificial Analysis)
- AA EnterpriseOps-Gym: **51.1%** (Artificial Analysis)
- Terminal-Bench Hard: **62.9%** (Artificial Analysis)
- AA Agentic Index: **51.0%** (Artificial Analysis)
- AA AnalystAgent: **48.8%** (Artificial Analysis)
- ApprenticeBench: **34%** (NeoCognition)
- MazeBench: **11%** (ASCII mode, tools)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (Artificial Analysis) / **93.2%** (Vals AI)
- HLE: **55.5%** (Artificial Analysis)
- AA Intelligence Index: **50** (rank #20/217) (Artificial Analysis)
- AA LCR: **82.3%** (Artificial Analysis)
- CritPt: **28.6%** (Artificial Analysis)
- MLCR-AA: **64.4%** (Artificial Analysis)
- ARC-AGI-1: **98.50%** (ARC Prize semi-private)
- ARC-AGI-2: **89.2%** (ARC Prize semi-private)
- AA Omniscience Index: **43.3%** (Artificial Analysis)
- AA Omniscience Accuracy: **65.4%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **63.6%** (Artificial Analysis)
- MMLU-Pro (Vals): **91.5%** (Vals AI)
- FrontierMath v2 Tiers 1-3: **87.018%** (Epoch AI)
- FrontierMath v2 Tier 4: **90.200%** (Epoch AI)
- AA IFBench: **63.5%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **95%** (Anthropic System Card) / **95.0%** (Vals AI)
- SWE-bench Pro: **80%** (Anthropic System Card)
- FrontierSWE v2: **47.0%** (Proximal leaderboard)
- FrontierCode v1.1 Main: **53.5%** (Cognition)
- CursorBench 3.1: **70.6%** (Cursor evals)
- CursorBench 3.2: **70.5%** (Cursor evals)
- VulcanBench v3: **89.5%** (VulcanBench report)
- AA-SciCode: **61.0%** (Artificial Analysis)
- LiveCodeBench (Vals): **89.8%** (Vals AI leaderboard)
- AA Coding Index: **76.5%** (Artificial Analysis)
- Terminal-Bench 2.1: **84.3%** (Anthropic System Card)

Multimodal:

- Blueprint-Bench 2: **38.6%** (Anthropic System Card)
- OfficeQA Pro: **57.9%** (Anthropic System Card)
- Design Arena Website: **1297** (OpenRouter)

Long context:

- AA LCR: **82.3%** (Artificial Analysis)
- MLCR-AA: **64.4%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 85/100.** TB 2.1 84.3%, GDPval 1747 Elo (near 1750+ frontier), OSWorld-Verified 85%, Tau2 98.5%, TB Hard 62.9%, AA Harvey LAB 93.6%, AA Agentic Index 51.0%. Capped by TB 3.0 34.0%, MazeBench 11%.
- **Reasoning: 88/100.** GPQA Diamond 92.6% (exceeds 90%+ frontier), HLE 55.5% (exceeds 40%+ frontier), ARC-AGI-1 98.5% / ARC-AGI-2 89.2%, FrontierMath Tiers 1-3 87.0% / Tier 4 90.2% (exceptional), AA LCR 82.3%, MLCR 64.4%. Capped by AA Intelligence Index 50 (<60 frontier), CritPt 28.6%.
- **Context window: 95/100.** 1M+ native context; AA LCR 82.3%, MLCR 64.4% — no public MRCR ≥98% at 512K+ found for 100 tier. Methodology: ≥1M = 95–100.
- **Multimodal: 70/100.** Text + image input only; Blueprint-Bench 38.6%, OfficeQA Pro 57.9%, Design Arena 1297. No video, audio, PDF input. Methodology: +image in = 60–70.
- **Coding: 95/100.** SWE-bench Verified 95% (frontier ref 80%+), LiveCodeBench 89.8% (Vals), SWE-bench Pro 80%, VulcanBench 89.5%, CursorBench 3.2 70.5%, AA Coding Index 76.5% (exceeds 70%+), FrontierCode 53.5%. All at/above frontier thresholds.
- **Cost efficiency: 25/100.** $10/$50 per 1M, blended ~$7.70/M, 90% cache discount, cost/task $8.75. Methodology: $10/$50 ≈ 30, $3/$15 ≈ 60 → premium pricing yields low score.
- **Overall Score: 87/100.** Half-up mean of (85 + 88 + 95 + 70 + 95) / 5 = 86.6 → 87. Best-fit: original Mythos-class general availability model; unmatched SWE-bench Verified 95% and FrontierMath Tier 4 90.2%; succeeded by Fable 5.1 with better safeguards and cache pricing.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (Anthropic Fable/Mythos blog, System Card), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Epoch AI, Vals AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.