# Gemini 3.8 Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemini-3.8-flash`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash (High effort tier)
- **Short description:** Google's cost-efficient reasoning model (Gemini 3 family) with native multimodal input (text, image, audio, video), 1M context, and strong agentic coding performance at competitive pricing.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-3.8-flash` via `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash`), Google Cloud Vertex AI, OpenCode Zen (`opencode/gemini-3.8-flash` via `https://opencode.ai/inference/google/v1beta/models/gemini-3.8-flash`), Google Antigravity. Google GenAI API (not OpenAI-compatible).
- **Release / knowledge:** 2026-09-02 release; knowledge cutoff March 2026 (some domains January 2025).
- **IDs:** `google/gemini-3.8-flash` (Google AI Studio/Vertex), `opencode/gemini-3.8-flash` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,000,000 tokens input; 65,536 tokens max output (64K).
- **Modalities:** Text, image, audio, video in; text out; reasoning yes (customizable effort levels); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** Cached: $0.75/M in, $3.75/M out (Google AI Studio / AA). Regular: $1.50/M in, $7.50/M out (OpenCode Zen). Cache discount 90%. Blended 7:2:1 ≈ $0.58/M (AA). Cost per Intelligence Index task: $1.24 (AA).
- **Architecture:** Proprietary (Google DeepMind); based on Gemini 3.7 Flash; parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (Google DeepMind model card / Google harness)
- Terminal-Bench 2.1: **87.6%** (Artificial Analysis / AA leaderboard)
- Terminal-Bench 2.1 (Vals): **81.3%** (Vals AI leaderboard)
- Terminal-Bench 4.0: **19.1%** (Google DeepMind model card / Google harness)
- Terminal-Bench 4.0: **19.7%** (Artificial Analysis / AA leaderboard)
- GDPval-AA v2: **1545 Elo** (Google DeepMind model card / Google harness)
- GDPval-AA normalized: **46.8%** (Artificial Analysis)
- Finance Agent v2: **61.4%** (Google DeepMind model card)
- OSWorld 2.0: **59.0%** partial (Google DeepMind model card)
- AA Agentic Index: **41.1%** (Artificial Analysis)
- AA Briefcase Elo: **1203** (Artificial Analysis)
- AA AutomationBench: **59.9%** (Artificial Analysis)
- AA ITBench: **52.5%** (Artificial Analysis)
- AA Tau3 Banking: **44.9%** (Artificial Analysis)
- ApprenticeBench: **24%** (NeoCognition)
- Harvey Legal Agent Benchmark: **10.0%** all-pass (Google DeepMind model card)
- GDP.PDF: **35.0%** all-pass (Google DeepMind model card)
- Hermes Index: **38.1%** / Hermes Bench: **62.2%** (Nous Research)
- MazeBench: **4%** (ASCII mode, tools)

Reasoning / knowledge:

- GPQA Diamond: **95.3%** (Artificial Analysis / AA leaderboard)
- GPQA Diamond (Vals): **94.4%** (Vals AI leaderboard)
- HLE-Verified: **54.9%** (Google DeepMind model card)
- AA-HLE: **47.8%** (Artificial Analysis)
- HLE (Vals): not directly reported
- AA Intelligence Index: **41** (rank #51/217) (Artificial Analysis)
- AA LCR: **81.3%** (Artificial Analysis)
- CritPt: **18.3%** (Artificial Analysis)
- ARC-AGI-1: **98.50%** (ARC Prize semi-private)
- ARC-AGI-2: **89.2%** (ARC Prize semi-private)
- ARC-AGI-3: **10.4%** (ARC Prize semi-private)
- ARC-AGI-3 Provider Adapter: **35.0%** (ARC Prize)
- MLCR-AA: **21.7%** (Artificial Analysis)
- AA Omniscience Index: **29.6%** (Artificial Analysis)
- AA Omniscience Accuracy: **54.6%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **55.2%** (Artificial Analysis)
- MMLU-Pro (Vals): **90.2%** (Vals AI)
- LABBench2: **86.2%** (Google DeepMind model card)
- BioMysteryBench: **88.8%** solvable / **56.5%** difficult (Google DeepMind model card)
- CharXiv (no tools): **86.2%** (Google DeepMind model card)
- LVBench: **87.8%** agentic / **87.1%** static (Google DeepMind model card)
- FrontierMath v2 Tiers 1-3: **68.421%** (Epoch AI)
- FrontierMath v2 Tier 4: **21.951%** (Epoch AI)
- Gray Swan IPI: **5.5%** (Google Gemini 4 Argon chart)

Coding:

- DeepSWE v1.1: **73.7%** (Google DeepMind model card) / **73.8%** (DeepSWE leaderboard)
- AA-SciCode: **56.6%** (Artificial Analysis)
- AA Coding Index: **76.3%** (Artificial Analysis)
- CursorBench 3.2: **69.2%** (Cursor evals)
- CursorBench 4.0: **39.6%** (Cursor evals)
- LiveCodeBench (Vals): **89.5%** (Vals AI)
- SWE-bench (Vals): **80.0%** (Vals AI)
- Terminal-Bench 2.1: **89.4%** (Google DeepMind model card)
- FrontierSWE v2: **19.6%** (Proximal)
- Bug Hunt Bench: **18.0 fixes** (public data)

Multimodal:

- MMMU-Pro: **85.6%** (Artificial Analysis)
- CharXiv: **86.2%** no tools (Google DeepMind model card)
- LVBench: **87.8%** agentic / **87.1%** static (Google DeepMind model card)
- Design Arena Website: **1300** (OpenRouter)

Long context:

- AA LCR: **81.3%** (Artificial Analysis)
- MLCR-AA: **21.7%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 82/100.** TB 2.1 89.4% (frontier ref ~88%+), Tau3 44.9% (below 50% frontier), GDPval 1545 Elo (below 1750+ frontier), AA Agentic Index 41.1%, Finance Agent 61.4%. Strong on TB 2.1 but capped by weak TB 4.0 (19.1%), Tau3, and GDPval vs frontier leaders.
- **Reasoning: 78/100.** GPQA Diamond 95.3% (exceeds 90%+ frontier), HLE 54.9% verified (exceeds 40%+ frontier), ARC-AGI-1 98.5% / ARC-AGI-2 89.2% (near-perfect), AA LCR 81.3%. Capped by AA Intelligence Index 41 (below 60 frontier), CritPt 18.3%, ARC-AGI-3 10.4%.
- **Context window: 95/100.** 1M native context with 64K output; AA LCR 81.3% shows good long-context reasoning but no public MRCR/needle retrieval at 512K+ found for 100 tier. Methodology: ≥1M = 95–100 (100 if ≥98% retrieval at 512K+).
- **Multimodal: 90/100.** Native text/image/audio/video input, text output. MMMU-Pro 85.6%, LVBench 87.8% agentic video, CharXiv 86.2% charts. Methodology: +video/PDF in = 75–90; +audio in = 90–100. Audio input present → 90.
- **Coding: 85/100.** DeepSWE 73.7% (near 74%+ frontier), LiveCodeBench 89.5% (Vals), SWE-bench 80.0% (Vals), AA Coding Index 76.3% (ref 70%+), AA-SciCode 56.6% (ref 55%+). Capped by TB 4.0 19.1%, CursorBench 4.0 39.6%, FrontierSWE 19.6%.
- **Cost efficiency: 95/100.** Cached $0.75/$3.75 per 1M (blended ~$0.58/M, cost/task $1.24). Methodology: ~$0.10/$0.20 = 97–99; $0.75/$3.75 is very competitive → 95. No free tier.
- **Overall Score: 86/100.** Half-up mean of (82 + 78 + 95 + 90 + 85) / 5 = 86.0 → 86. Best-fit: best value-for-money frontier model; unmatched multimodal breadth (audio+video) and pricing for agentic workloads.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official model cards (Google DeepMind model card), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Epoch AI, Vals AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.