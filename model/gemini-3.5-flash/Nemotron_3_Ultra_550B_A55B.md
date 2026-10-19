# Gemini 3.5 Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemini-3.5-flash`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash (High effort tier)
- **Short description:** Google's early Gemini 3 series Flash model with native multimodal input (text, image, audio, video), fast 195 tok/s output, 1M context, at $1.50/$9.00 pricing; succeeded by 3.6/3.7/3.8 Flash.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-3.5-flash` via `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash`), Google Cloud Vertex AI, OpenCode Zen (`opencode/gemini-3.5-flash` via `https://opencode.ai/inference/google/v1beta/models/gemini-3.5-flash`). Google GenAI API (not OpenAI-compatible).
- **Release / knowledge:** 2026-05-19 release; knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3.5-flash` (Google AI Studio/Vertex), `opencode/gemini-3.5-flash` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,000,000 tokens input; 65,536 tokens max output (64K).
- **Modalities:** Text, image, audio, video in; text out; reasoning yes (extended thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $1.50/M in, $9.00/M out (Google AI Studio / AA). 90% cache discount (AA). Blended 7:2:1 ≈ $1.31/M (AA). Cost per Intelligence Index task: $3.69 (AA).
- **Architecture:** Proprietary (Google DeepMind); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **76.2%** (Google DeepMind launch screenshots) / **74.2%** (Vals AI)
- MCP Atlas: **83.6%** (Google DeepMind launch screenshots)
- Toolathlon: **56.5%** (Google DeepMind launch screenshots)
- OSWorld-Verified: **78.4%** (Google DeepMind launch screenshots)
- Finance Agent v2: **57.9%** (Vals AI)
- GDPval-AA v2: **1345 Elo** (Google DeepMind launch screenshots)
- GDPval-AA normalized: **42.2%** (Artificial Analysis)
- Tau2-bench: **95.3%** (Artificial Analysis)
- APEX-Agents: **47.1%** (Artificial Analysis)
- Gert Labs: **61.85%** (Gert Labs rankings)
- ResearchClawBench: **18.0%** (ResearchClawBench leaderboard)
- AA EnterpriseOps-Gym: **50.1%** (Artificial Analysis)
- AA Agentic Index: **27.3%** (Artificial Analysis)
- MazeBench: **0%** (ASCII mode, no tools)

Reasoning / knowledge:

- GPQA Diamond: **92.7%** (Vals AI) / **92.2%** (Artificial Analysis)
- HLE: **40.2%** (Google DeepMind launch screenshots)
- AA Intelligence Index: **33** (rank #87/217) (Artificial Analysis)
- AA LCR: **69.3%** (Artificial Analysis)
- CritPt: **13.1%** (Artificial Analysis)
- ARC-AGI-1: **92.50%** (ARC Prize verified)
- ARC-AGI-2: **72.1%** (Google DeepMind launch screenshots)
- MRCRv2: **77.3%** (Google DeepMind launch screenshots)
- MRCR 1M: **26.6%** (Google DeepMind launch screenshots)
- AA GPQA Diamond: **92.2%** (Artificial Analysis)
- AA HLE: **42.7%** (Artificial Analysis)
- AA Omniscience Accuracy: **51.9%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **60.7%** (Artificial Analysis)
- AA Omniscience Index: **21.2%** (Artificial Analysis)
- MMLU-Pro (Vals): **89.5%** (Vals AI)
- IFBench: **76.3%** (Artificial Analysis)
- FrontierMath v2 Tiers 1-3: **62.807%** (Epoch AI)
- FrontierMath v2 Tier 4: **26.829%** (Epoch AI)

Coding:

- SWE-bench Pro: **55.1%** (Google DeepMind launch screenshots)
- SWE-bench (Vals): **78.8%** (Vals AI leaderboard)
- LiveCodeBench (Vals): **87.6%** (Vals AI leaderboard)
- CursorBench 3.1: **49.8%** (Cursor evals)
- CursorBench 3.2: **48.8%** (Cursor evals)
- SciCode: **53.1%** (Artificial Analysis)
- AA-SciCode: **53.9%** (Artificial Analysis)
- AA Coding Index: **70.1%** (Artificial Analysis)
- Terminal-Bench 2.1: **76.2%** (Google DeepMind launch screenshots)
- Vibe Code Bench: **48.68%** (Vals AI)

Multimodal:

- CharXiv: **84.2%** (Google DeepMind launch screenshots)
- MMMU-Pro: **83.6%** (Google DeepMind launch screenshots) / **84.3%** (Artificial Analysis)
- Blueprint-Bench 2: **33.6%** (Google DeepMind launch screenshots)
- Design Arena Website: **1268** (OpenRouter)

Long context:

- MRCRv2: **77.3%** (Google DeepMind launch screenshots)
- MRCR 1M: **26.6%** (Google DeepMind launch screenshots)
- AA LCR: **69.3%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 70/100.** TB 2.1 76.2% (below 88%+ frontier), MCP Atlas 83.6%, OSWorld-Verified 78.4%, Toolathlon 56.5%, Tau2 95.3%, GDPval 1345 Elo (below 1750+ frontier), AA Agentic Index 27.3%. Capped by TB 2.1 Vals 74.2%, MazeBench 0%, no TB 4.0/4.0/GDPval-AA deep data.
- **Reasoning: 65/100.** GPQA Diamond 92.7% (exceeds 90%+ frontier), HLE 40.2% (meets 40%+ frontier), ARC-AGI-1 92.5% / ARC-AGI-2 72.1%, MRCRv2 77.3%, AA LCR 69.3%. Capped by AA Intelligence Index 33 (<60 frontier), CritPt 13.1%, MRCR 1M 26.6%, FrontierMath Tier 4 26.8%.
- **Context window: 95/100.** 1M native context; MRCR 1M 26.6% (far below 98% for 100 tier), AA LCR 69.3%. Methodology: ≥1M = 95-100.
- **Multimodal: 90/100.** Native text/image/audio/video input; CharXiv 84.2%, MMMU-Pro 83.6-84.3%. Methodology: +audio/video in = 90-100.
- **Coding: 72/100.** LiveCodeBench 87.6% (Vals), SWE-bench 78.8% (Vals), AA Coding Index 70.1% (exceeds 70%+), AA-SciCode 53.9% (near 55%+), CursorBench 3.2 48.8%. Capped by SWE-bench Pro 55.1%, Vibe Code 48.7%, no DeepSWE/SWE-bench Verified.
- **Cost efficiency: 75/100.** $1.50/$9.00 per 1M, blended ~$1.31/M, 90% cache discount, cost/task $3.69. Methodology: $1.25/$4.25 ≈ 88, $3/$15 ≈ 60 → $1.50/$9 interpolates to ~75.
- **Overall Score: 78/100.** Half-up mean of (70 + 65 + 95 + 90 + 72) / 5 = 78.4 → 78. Best-fit: early multimodal Flash with native audio/video at competitive pricing; agentic and long-context retrieval lag 3.7/3.8 Flash successors.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Epoch AI, Vals AI, Google DeepMind launch screenshots), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.