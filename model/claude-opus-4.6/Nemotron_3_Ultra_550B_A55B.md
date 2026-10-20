# Claude Opus 4.6 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-opus-4.6`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6 (Non-reasoning, High)
- **Short description:** Anthropic's non-reasoning Opus-tier model with strong knowledge (GPQA 91.3%, HLE 53%), coding (SWE-bench Verified 80.8%), and 1M context, at $5/$25 premium pricing. Deprecated in favor of Opus 4.7.
- **Provider / access:** Anthropic API (`claude-opus-4-6` via `https://api.anthropic.com`), OpenCode Zen (`opencode/claude-opus-4.6`), AWS Bedrock, Google Vertex AI, 4 total providers. Messages API (not Chat Completions).
- **Release / knowledge:** 2026-02-05 release; knowledge cutoff not publicly disclosed.
- **IDs:** `claude-opus-4-6` (Anthropic API), `opencode/claude-opus-4.6` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,000,000 tokens total; max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning no (non-reasoning model); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $5.00/M in, $0.50/M cache read, $25.00/M out (Anthropic API & OpenCode Zen). Blended 7:2:1 ≈ $3.85/M (AA). Cost per Intelligence Index task: N/A (AA).
- **Architecture:** Proprietary (Anthropic); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.0: **65.4%** (Anthropic System Card)
- BrowseComp: **83.7%** (Anthropic Mythos Preview Card)
- OSWorld-Verified: **72.7%** (Anthropic System Card)
- Tau2-bench: **84.8%** (Artificial Analysis)
- AndroidWorld: **62.0%** (Qwen3.8-27B comparison)
- Claw-Eval: **70.4%** (Claw-Eval leaderboard)
- DeepSearchQA: **73.7%** (Meta Muse Spark chart)
- CyberGym: **66.6%** (CyberGym leaderboard)
- Gert Labs: **61.85%** (Gert Labs rankings)
- ResearchClawBench: **19.9%** (ResearchClawBench leaderboard)
- JobBench: **36.7%** (JobBench paper)
- ApprenticeBench: **5%** (NeoCognition)

Reasoning / knowledge:

- GPQA: **91.3%** (Anthropic System Card)
- GPQA Diamond: **89.2%** (Arcee Trinity chart) / **84.0%** (AA)
- SuperGPQA: **95%** (Qwen3.6-Plus comparison)
- MMLU-Pro: **82%** (Qwen3.6-Plus) / **89.1%** (Arcee)
- HLE: **53%** (Anthropic System Card) / **40%** w/o tools (Meta chart)
- HealthBench Hard: **14.8%** (Meta chart)
- MedXpertQA (Text): **52.1%** (Meta chart)
- AA Intelligence Index: **26.4%** est. (Artificial Analysis)
- AA GPQA Diamond: **84.0%** (Artificial Analysis)
- AA HLE: **19.1%** (Artificial Analysis)
- AA Omniscience Index: **2.4%** (Artificial Analysis)
- AA Omniscience Accuracy: **45.8%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **80.1%** (Artificial Analysis)
- AIME25: **99.8%** (Arcee)
- FrontierMath v2 Tiers 1-3: **65.965%** (Epoch AI)
- FrontierMath v2 Tier 4: **26.829%** (Epoch AI)

Coding:

- SWE-bench Verified: **80.8%** (Anthropic System Card) / **75.6%** (Arcee)
- LiveCodeBench Pro: **70.7%** (Meta chart)
- SWE-bench Pro: **53.4%** (Meta chart)
- SWE-Rebench: **65.3%** (SWE-Rebench leaderboard)
- React Native Evals: **84.1%** (RN Evals leaderboard)
- Terminal-Bench 2.0: **65.4%** (Anthropic System Card)
- Vibe Code Bench: **57.57%** (Vals AI)
- FrontierCode 1.1 Main: **26.9%** (Cognition)

Multimodal:

- MMMU-Pro: **77.3%** (Anthropic System Card) / **72.5%** (Artificial Analysis)
- ERQA: **51.6%** (Meta chart)
- ScreenSpot Pro: **83.1%** (Meta chart)
- MedXpertQA (MM): **64.8%** (Meta chart)
- Design Arena Website: **1291 Elo** (OpenRouter)

Long context:

- AA LCR: **67.0%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 68/100.** TB 2.0 65.4%, BrowseComp 83.7%, OSWorld-Verified 72.7%, Tau2 84.8%, AndroidWorld 62.0%, CyberGym 66.6%, DeepSearchQA 73.7%. Capped by TB 2.0 (vs TB 2.1 frontier), ResearchClawBench 19.9%, ApprenticeBench 5%, JobBench 36.7%.
- **Reasoning: 72/100.** GPQA 91.3% (near 90%+), HLE 53% (exceeds 40%+), SuperGPQA 95%, MMLU-Pro 82-89%, FrontierMath Tiers 1-3 66.0%. Capped by FrontierMath Tier 4 26.8%, AA Intelligence Index 26.4% (<60 frontier), CritPt 2.8%, AA Omniscience Index 2.4%, AA HLE 19.1%.
- **Context window: 90/100.** 1M native context; AA LCR 67.0% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: 500K-1M = 85-94.
- **Multimodal: 70/100.** Text + image input only; MMMU-Pro 77.3% / 72.5%. No video, audio, PDF input. Methodology: +image in = 60-70.
- **Coding: 75/100.** SWE-bench Verified 80.8% (exceeds 80%+ frontier), React Native 84.1%, SWE-Rebench 65.3%, LiveCodeBench Pro 70.7%. Capped by SWE-bench Pro 53.4%, Vibe Code 57.6%, FrontierCode 1.1 26.9%, TB 2.0 65.4%.
- **Cost efficiency: 40/100.** $5/$25 per 1M, blended ~$3.85/M, 90% cache discount. Methodology: $3/$15 ≈ 60, $10/$50 ≈ 30 → $5/$25 interpolates to ~40.
- **Overall Score: 75/100.** Half-up mean of (68 + 72 + 90 + 70 + 75) / 5 = 75 → 75. Using six incl. cost: (68+72+90+70+75+40)/6 = 415/6 = 69.2 → 69. Model-queue says 88.1; discrepancy suggests queue Overall uses different weighting or includes deprecated high-effort tier. Best-fit: strong knowledge + coding non-reasoning model at premium pricing; HLE 53% and SWE-bench Verified 80.8% stand out; succeeded by Opus 4.7/4.8 with better agentic breadth.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (Anthropic System Card, Mythos Preview Card), independent benchmark aggregators (BenchLM, Artificial Analysis, Epoch AI, Vals AI, OpenRouter), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4.md`, using the same headings.