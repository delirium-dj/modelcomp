# Gemini 3.7 Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemini-3.7-flash`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash (High effort tier)
- **Short description:** Google's cost-efficient reasoning model (Gemini 3 family) with native multimodal input (text, image, audio, video), agentic video understanding, 1M context, and strong coding performance at introductory pricing.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-3.7-flash` via `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.7-flash`), Google Cloud Vertex AI, OpenCode Zen (`opencode/gemini-3.7-flash` via `https://opencode.ai/inference/google/v1beta/models/gemini-3.7-flash`), Google Antigravity. Google GenAI API (not OpenAI-compatible).
- **Release / knowledge:** 2026-08-13 release; knowledge cutoff March 2026 (some domains January 2025).
- **IDs:** `google/gemini-3.7-flash` (Google AI Studio/Vertex), `opencode/gemini-3.7-flash` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,000,000 tokens input; 65,536 tokens max output (64K).
- **Modalities:** Text, image, audio, video in; text out; reasoning yes (customizable thinking configurations); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** Introductory (expires 2026-12-31): $0.75/M in, $3.75/M out (Google AI Studio / AA). Regular from 2027-01-01: $1.50/M in, $7.50/M out. 90% cache discount (AA). Blended 7:2:1 ≈ $0.58/M (AA). Cost per Intelligence Index task: $0.93 (AA).
- **Architecture:** Proprietary (Google DeepMind); based on Gemini 3.6 Flash; parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (Google DeepMind model card / Google harness)
- Terminal-Bench 2.1 (Vals): **77.5%** (Vals AI leaderboard)
- Terminal-Bench 3.0: **14.9%** (Google DeepMind model card)
- AutomationBench: **30.4%** (Google DeepMind model card)
- OSWorld 2.0: **47.9%** (Google DeepMind model card)
- Agents' Last Exam: **26.3%** (Google DeepMind model card)
- GDPval-AA v2: **1525 Elo** (Google DeepMind model card)
- GDPval-AA normalized: **44.6%** (Artificial Analysis)
- AA Harvey LAB v1.0: **90.7%** (Google DeepMind model card)
- AA Agentic Index: **36.4%** (Artificial Analysis)
- AA AnalystAgent: **60.0%** (Artificial Analysis)
- ApprenticeBench: **16%** (NeoCognition)
- MazeBench: **1%** (ASCII mode, tools)

Reasoning / knowledge:

- GPQA Diamond: **94.5%** (Artificial Analysis) / **93.9%** (Vals AI)
- HLE-Verified: **53.6%** (Google DeepMind model card)
- AA HLE: **47.9%** (Artificial Analysis)
- AA Intelligence Index: **39** (rank #62/217) (Artificial Analysis)
- AA LCR: **81.7%** (Artificial Analysis)
- CritPt: **14.3%** (Artificial Analysis)
- ARC-AGI-1: **95.50%** (ARC Prize semi-private)
- ARC-AGI-2: **84.6%** (ARC Prize semi-private)
- AA Omniscience Index: **26.5%** (Artificial Analysis)
- AA Omniscience Accuracy: **55.3%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **64.5%** (Artificial Analysis)
- MMLU-Pro (Vals): **90.1%** (Vals AI)
- LABBench2: **82.1%** (Google DeepMind model card)
- BioMysteryBench solvable: **87.1%** / difficult: **43.5%** (Google DeepMind model card)
- CharXiv: **84.5%** no tools / **88.7%** with tools (Google DeepMind model card)
- LVBench: **85.4%** (Google DeepMind model card)
- GDP.pdf: **34.0%** (Google DeepMind model card)
- FrontierMath v2 Tiers 1-3: **71.579%** (Epoch AI)
- FrontierMath v2 Tier 4: **36.585%** (Epoch AI)

Coding:

- FrontierCode v1.1 Main: **43.6%** (Google DeepMind model card)
- DeepSWE v1.1: **65.3%** (Google DeepMind model card)
- AA-SciCode: **57.2%** (Artificial Analysis)
- AA Coding Index: **76.1%** (Artificial Analysis)
- LiveCodeBench (Vals): **88.7%** (Vals AI leaderboard)
- SWE-bench (Vals): **80.8%** (Vals AI leaderboard)
- Terminal-Bench 2.1: **85.8%** (Google DeepMind model card)
- FrontierSWE v2: **20.3%** (Proximal leaderboard)
- Code Arena: **1588 Elo** (Google DeepMind model card)

Multimodal:

- MMMU-Pro: **85.5%** (Artificial Analysis)
- CharXiv: **84.5%** no tools / **88.7%** with tools (Google DeepMind model card)
- LVBench: **85.4%** (Google DeepMind model card)
- Design Arena Website: **1304** (OpenRouter)

Long context:

- MRCR v2 (8-needle) 128K: **97.0%** (Google DeepMind model card)
- AA LCR: **81.7%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 75/100.** TB 2.1 85.8% (near 88%+ frontier), GDPval 1525 Elo (below 1750+ frontier), AutomationBench 30.4%, OSWorld 47.9%, AA Agentic Index 36.4%, AA Harvey LAB 90.7%. Capped by TB 3.0 14.9%, Agents' Last Exam 26.3%, MazeBench 1%.
- **Reasoning: 75/100.** GPQA Diamond 94.5% (exceeds 90%+ frontier), HLE-Verified 53.6% (exceeds 40%+ frontier), ARC-AGI-1 95.5% / ARC-AGI-2 84.6%, MRCR 97.0% at 128K, AA LCR 81.7%. Capped by AA Intelligence Index 39 (<60 frontier), CritPt 14.3%, AA Omniscience Index 26.5%, FrontierMath Tier 4 36.6%.
- **Context window: 95/100.** 1M native context; MRCR 97.0% at 128K (strong but only at 128K), AA LCR 81.7% — no public MRCR ≥98% at 512K+ found for 100 tier. Methodology: ≥1M = 95–100.
- **Multimodal: 90/100.** Native text/image/audio/video input; LVBench 85.4% video, CharXiv 88.7% charts with tools, MMMU-Pro 85.5%. Methodology: +video/PDF in = 75–90; +audio in = 90–100.
- **Coding: 80/100.** DeepSWE 65.3% (below 74%+ frontier), LiveCodeBench 88.7% (Vals), SWE-bench 80.8% (Vals), AA Coding Index 76.1% (exceeds 70%+), Code Arena 1588 Elo, FrontierCode 43.6%. Capped by DeepSWE 65.3%, FrontierSWE v2 20.3%.
- **Cost efficiency: 95/100.** Introductory $0.75/$3.75 per 1M (blended ~$0.58/M, cost/task $0.93). Methodology: ~$0.10/$0.20 = 97–99; introductory pricing is very competitive → 95. No free tier; regular pricing from 2027 doubles cost.
- **Overall Score: 83/100.** Half-up mean of (75 + 75 + 95 + 90 + 80) / 5 = 83.0 → 83. Best-fit: exceptional value-for-money multimodal reasoning model; native audio/video and intro pricing make it ideal for agentic video workflows; agentic autonomy (TB 3.0, GDPval) lags 3.8 Flash.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official model cards (Google DeepMind), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Epoch AI, Vals AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.