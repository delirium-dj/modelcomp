# Gemini 3.1 Pro — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemini-3.1-pro`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (Thinking High effort tier)
- **Short description:** Google's advanced reasoning model (Gemini 3 series) with native multimodal input (text, audio, images, video), 1M context, strong coding and agentic performance, and competitive pricing.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-3.1-pro` via `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-pro`), Google Cloud Vertex AI, OpenCode Zen (`opencode/gemini-3.1-pro` via `https://opencode.ai/inference/google/v1beta/models/gemini-3.1-pro`), Google Antigravity, NotebookLM. Google GenAI API (not OpenAI-compatible).
- **Release / knowledge:** 2026-02-19 release; knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3.1-pro` (Google AI Studio/Vertex), `opencode/gemini-3.1-pro` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,000,000 tokens input; 65,536 tokens max output (64K).
- **Modalities:** Text, image, audio, video in; text out; reasoning yes (Thinking mode with High effort); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** ≤200K tokens: $2.00/M in, $0.20/M cache read, $12.00/M out. >200K tokens: $4.00/M in, $0.40/M cache read, $18.00/M out (OpenCode Zen). No cache discount reported on AA.
- **Architecture:** Proprietary (Google DeepMind); based on Gemini 3 Pro; parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.0: **68.5%** (Google DeepMind model card / Terminus-2 harness)
- Terminal-Bench 2.1 (Vals): **70.8%** (Vals AI leaderboard)
- APEX-Agents: **33.5%** (Google DeepMind model card)
- GDPval-AA: **1317 Elo** (Google DeepMind model card)
- GDPval-AA normalized: **14.6%** (Artificial Analysis)
- BrowseComp: **85.9%** (Google DeepMind model card)
- Tau2-bench Retail: **90.8%** / Telecom: **99.3%** (Google DeepMind model card)
- MCP Atlas: **69.2%** (Google DeepMind model card)
- DeepSearchQA: **69.7%** (Meta Muse Spark chart)
- Claw-Eval: **57.8%** (Claw-Eval leaderboard)
- AA Agentic Index: **10.3%** (Artificial Analysis)
- MazeBench: **1%** (ASCII mode, tools)
- Gert Labs: **56.87%** (Gert Labs rankings)
- ResearchClawBench: **13.3%** (ResearchClawBench leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (Google DeepMind model card) / **94.1%** (Artificial Analysis) / **95.5%** (Vals AI)
- HLE (no tools): **44.4%** (Google DeepMind model card) / **45.4%** (Meta Muse Spark chart) / **47.0%** (Artificial Analysis)
- HLE (Search + Code): **51.4%** (Google DeepMind model card)
- ARC-AGI-2: **77.1%** (Google DeepMind model card / ARC Prize Verified)
- ARC-AGI-3: **0.4%** (ARC Prize leaderboard)
- AA LCR: **82.0%** (Artificial Analysis)
- CritPt: **17.7%** (Artificial Analysis)
- AA Intelligence Index: **29.7%** (Artificial Analysis)
- AA Omniscience Index: **31.9%** (Artificial Analysis)
- AA Omniscience Accuracy: **54.9%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **50.9%** (Artificial Analysis)
- MMLU-Pro (Vals): **91.0%** (Vals AI)
- MMMLU: **92.6%** (Google DeepMind model card)
- HealthBench Hard: **20.6%** (Meta Muse Spark chart)
- MedXpertQA Text: **71.5%** / MM: **81.3%** (Meta Muse Spark chart)
- FrontierMath v2 Tiers 1-3: **59.649%** (Epoch AI)
- FrontierMath v2 Tier 4: **26.829%** (Epoch AI)
- AA IFBench: **77.1%** (Artificial Analysis)
- AA Global-MMLU-Lite: **93.2%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **80.6%** (Google DeepMind model card)
- SWE-bench Pro: **54.2%** (Google DeepMind model card)
- LiveCodeBench Pro: **2887 Elo** (Google DeepMind model card)
- LiveCodeBench (Vals): **88.5%** (Vals AI leaderboard)
- SWE-bench (Vals): **78.8%** (Vals AI leaderboard)
- SciCode: **59%** (Google DeepMind model card)
- AA-SciCode: **58.7%** (Artificial Analysis)
- AA Coding Index: **68.8%** (Artificial Analysis)
- React Native Evals: **78.9%** (React Native Evals leaderboard)
- Vibe Code Bench: **32.03%** (Vals AI)
- PostTrainBench v1.1: **22.0%** (PostTrainBench leaderboard)

Multimodal:

- MMMU-Pro: **80.5%** (Google DeepMind model card) / **82.4%** (Artificial Analysis) / **83.9%** (Meta Muse Spark chart)
- CharXiv: **80.2%** (Meta Muse Spark chart)
- ERQA: **69.4%** (Meta Muse Spark chart)
- SimpleVQA: **72.4%** (Meta Muse Spark chart)
- ScreenSpot Pro: **84.4%** (Meta Muse Spark chart)
- ZeroBench: **29.0%** (Meta Muse Spark chart)
- MedXpertQA MM: **81.3%** (Meta Muse Spark chart)
- Design Arena Website: **1254** (OpenRouter)

Long context:

- MRCR v2 (8-needle) 128K: **84.9%** (Google DeepMind model card)
- MRCR v2 1M (pointwise): **26.3%** (Google DeepMind model card)
- AA LCR: **82.0%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 70/100.** TB 2.0 68.5% / TB 2.1 70.8% (below 88%+ frontier), BrowseComp 85.9%, Tau2 90.8%/99.3%, MCP Atlas 69.2%, APEX-Agents 33.5%, GDPval 1317 Elo (well below 1750+ frontier). Strong on structured tool use (Tau2), weak on open-ended agentic (APEX, GDPval).
- **Reasoning: 78/100.** GPQA Diamond 94.3% (near 90%+ frontier), HLE 44.4%/51.4% (exceeds 40%+ frontier), ARC-AGI-2 77.1% (strong), MRCR 84.9% at 128K, AA LCR 82.0%. Capped by ARC-AGI-3 0.4%, AA Intelligence Index 29.7% (<60 frontier), CritPt 17.7%, FrontierMath Tier 4 26.8%.
- **Context window: 85/100.** 1M native context but MRCR only 26.3% at 1M pointwise (far below 98% threshold for 100); 84.9% at 128K. Methodology: 200K–500K = 65–84; 1M with weak retrieval = 85.
- **Multimodal: 90/100.** Native text/image/audio/video input; MMMU-Pro 80.5–83.9%, ScreenSpot Pro 84.4%, MedXpertQA MM 81.3%. Methodology: +audio/video in = 90–100.
- **Coding: 82/100.** SWE-bench Verified 80.6% (frontier ref 80%+), LiveCodeBench Pro 2887 Elo / 88.5% (Vals), SciCode 59% (exceeds 55%+ ref), AA Coding Index 68.8% (near 70%+), React Native 78.9%. Capped by SWE-bench Pro 54.2%, Vibe Code 32%, PostTrainBench 22%.
- **Cost efficiency: 75/100.** $2/$12 per 1M (≤200K), $4/$18 (>200K). Methodology: $1.25/$4.25 ≈ 88, $3/$15 ≈ 60 → $2/$12 interpolates to ~75. No free tier.
- **Overall Score: 81/100.** Half-up mean of (70 + 78 + 85 + 90 + 82) / 5 = 81.0 → 81. Best-fit: strong multimodal reasoning model for complex knowledge work; native audio/video and Tau2 tool use are differentiators; agentic autonomy (APEX, GDPval) lags frontier.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official model cards (Google DeepMind), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Epoch AI, Vals AI, Claw-Eval), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.