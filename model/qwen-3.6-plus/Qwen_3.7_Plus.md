# Qwen 3.6 Plus — findings by Qwen 3.7 Plus

- Source: Alibaba/Qwen3.6-Plus (`opencode/qwen-3.6-plus`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba's April 2026 hosted Qwen flagship tilted toward real-world agents: repository-level coding, front-end/vibe coding, and agentic tasks at low cost. AA Intelligence Index 27 (AA). Strong math: AIME 2026 95.3%, HMMT Feb 2025 96.7%. Strong coding: SWE-bench Verified 78.8%, LiveCodeBench v6 87.1%, SWE Multilingual 73.8%. Strong agentic: τ²-bench 97.7%, τ³-bench 70.7%, MCP-Tasks 74.1%, WideResearch 74.3%. Strong multimodal: V* 96.9%, MathVision 88%, VideoMMMU 84%, MMMU 86%, MMMU-Pro 78.8%. Supports text, image, AND video input. GPQA Diamond 88.2% (AA) / 90.4% (Qwen). IFEval 94.3% is excellent (instruction following). HLE 28.8% is low. AA-Omniscience Index 0.9% is very low. 1M context / 65K out. Very affordable at $0.50/$3.00 per 1M (≤256K).
- **Provider / access:** Alibaba Cloud, DashScope, OpenRouter. Proprietary hosted model (not open-weight).
- **Release / knowledge:** Released 2026-04-01; knowledge cutoff not precisely documented.
- **IDs:** `opencode/qwen-3.6-plus` (OpenCode/OpenRouter); `qwen/qwen3.6-plus` (DashScope).
- **Context window:** 1,000,000 tokens (1M); 65K output. Pricing doubles above 256K input.
- **Modalities:** Text, image, video in; text out. One of few models supporting video input at this price tier.
- **Pricing (as of 2026-10-10):** $0.50 in / $3.00 out per 1M (≤256K); $2/$6 (256K–1M); $0.325/$1.95 via OpenRouter. Very affordable.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **97.7%** (AA — near-perfect)
- τ³-bench: **70.7%** (Qwen — strong)
- MCP-Tasks: **74.1%** (Qwen — strong MCP tool use)
- WideResearch: **74.3%** (Qwen — strong wide research)
- Terminal-Bench 2.0: **61.6%** (Qwen — moderate)
- Claw-Eval: **58.8%** (Claw-Eval leaderboard — moderate)
- QwenClawBench: **57.2%** (Qwen — moderate)
- MCP Atlas: **48.2%** (Qwen — moderate)
- VITA-Bench: **44.3%** (Qwen — moderate)
- DeepPlanning: **41.5%** (Qwen — moderate)
- Toolathlon: **39.8%** (Qwen — moderate-low)
- GDPval-AA: **1066 Elo** (AA; normalized: 24.7%)
- Terminal-Bench 2.1 (Vals): **53.2%** (Vals AI — moderate)
- Gert Labs: **50.60%** (Gert Labs — moderate)
- ResearchClawBench: **18.0%** (ResearchClawBench — low)

Coding:

- LiveCodeBench v6: **87.1%** (Qwen — excellent)
- LiveCodeBench (Vals): **86.0%** (Vals AI — excellent)
- SWE-bench Verified: **78.8%** (Qwen — strong)
- SWE-bench (Vals): **73.4%** (Vals AI — strong)
- SWE Multilingual: **73.8%** (Qwen — strong multilingual coding)
- SWE-bench Pro: **56.6%** (Qwen — moderate)
- Terminal-Bench 2.0: **61.6%** (Qwen — moderate)
- AA Coding Index: **54.5** (AA — moderate)
- NL2Repo: **37.9%** (GLM-5.1 comparison — low)
- Vibe Code Bench: **25.56%** (Vals AI — low)

Multimodal:

- V*: **96.9%** (Qwen — exceptional visual reasoning)
- MathVision: **88.0%** (Qwen — excellent math vision)
- MMMU: **86.0%** (Qwen — strong)
- VideoMMMU: **84.0%** (Qwen — strong video understanding)
- CharXiv: **81.5%** (Qwen — strong chart understanding)
- MMAnswerBench: **83.8%** (Qwen — strong)
- MMMU-Pro: **78.8%** (Qwen; AA: 78.0% — strong)
- ScreenSpot Pro: **68.2%** (Qwen — moderate GUI grounding)
- Design Arena Website: **1247 Elo** (OpenRouter — moderate)

Reasoning / knowledge:

- AA-LCR: **78.3%** (AA — strong long-context reasoning)
- IFBench: **75.2%** (AA; Qwen: 75.8% — moderate instruction following)
- IFEval: **94.3%** (Qwen — excellent instruction following)
- GPQA: **90.4%** (Qwen — strong)
- GPQA Diamond (AA): **88.2%** (AA — strong)
- MMLU-Pro: **88.5%** (Qwen; Vals: 87.7% — strong)
- MMLU-Redux: **94.5%** (Qwen — excellent)
- C-Eval: **93.3%** (Qwen — excellent Chinese evaluation)
- SuperGPQA: **71.6%** (Qwen — moderate)
- AI-Needle: **68.3%** (Qwen — moderate long-context retrieval)
- LongBench v2: **62%** (Qwen — moderate)
- HLE: **28.8%** (Qwen; AA: 27.8% — low)
- CritPt: **2.9%** (AA — very low)
- AIME 2026: **95.3%** (Qwen — exceptional math)
- HMMT Feb 2025: **96.7%** (Qwen — exceptional)
- HMMT Nov 2025: **94.6%** (Qwen — exceptional)
- HMMT Feb 2026: **87.8%** (Qwen — strong)
- FrontierMath v2 (Tiers 1–3): **26.21%** (Epoch AI — low)
- FrontierMath v2 (Tier 4): **8.33%** (Epoch AI — very low)
- AA-Omniscience Index: **0.9%** (AA — very low)
- AA-Omniscience Accuracy: **26.4%** (AA — low)
- AA-Omniscience Hallucination Rate: **34.6%** (AA — moderate)

### Normalized scores (1–100)

- **Tool use: 60/100.** τ²-bench 97.7% is near-perfect. τ³-bench 70.7% is strong. MCP-Tasks 74.1% is strong. WideResearch 74.3% is strong. However, Toolathlon 39.8% is moderate-low. VITA-Bench 44.3% is moderate. DeepPlanning 41.5% is moderate. GDPval-AA 1066 Elo is modest. ResearchClawBench 18% is low. The model excels at τ-bench and MCP tool use but struggles on broader agentic composites.
- **Reasoning: 51/100.** IFEval 94.3% is excellent (instruction following). GPQA 90.4% is strong. MMLU-Pro 88.5% is strong. MMLU-Redux 94.5% is excellent. C-Eval 93.3% is excellent. AIME 2026 95.3% is exceptional (math). AA-LCR 78.3% is strong. However, HLE 28.8% is low. CritPt 2.9% is very low. AA-Omniscience Index 0.9% is very low. FrontierMath v2 Tier 4 8.33% is very low. The reasoning profile is mathematically exceptional and strong on structured knowledge but weak on open-ended and frontier tasks.
- **Context window: 92/100.** 1M tokens with 65K output. AA-LCR 78.3% confirms effective long-context reasoning. AI-Needle 68.3% demonstrates functional retrieval. LongBench v2 62% is moderate. Pricing doubles above 256K but remains affordable. The 1M context is a key differentiator at this price tier.
- **Multimodal: 83/100.** V* 96.9% is exceptional. MathVision 88% is excellent. MMMU 86% is strong. VideoMMMU 84% is strong (video understanding). CharXiv 81.5% is strong. MMMU-Pro 78.8% is strong. Supports text + image + VIDEO input — one of few models at this price tier with video. ScreenSpot Pro 68.2% is moderate (GUI grounding). The multimodal profile is excellent, especially with video support.
- **Coding: 65/100.** LiveCodeBench v6 87.1% is excellent. LiveCodeBench (Vals) 86% is excellent. SWE-bench Verified 78.8% is strong. SWE Multilingual 73.8% is strong. However, SWE-bench Pro 56.6% is moderate. Vibe Code Bench 25.56% is low. NL2Repo 37.9% is low. AA Coding Index 54.5 is moderate. The coding profile is strong for competitive/live coding and SWE-bench, weak for vibe coding and repo generation.
- **Cost efficiency: 92/100.** $0.50/$3.00 per 1M (≤256K) is very affordable for a model with 1M context, video input, and strong coding/math. OpenRouter pricing at $0.325/$1.95 is even cheaper. The combination of 1M context, video support, strong coding (SWE-bench 78.8%), exceptional math (AIME 95.3%), and low cost makes this an outstanding value proposition.
- **Overall Score: 70.2/100.** Mean of five quality dims: (60 + 51 + 92 + 83 + 65) / 5 = 70.2. Qwen 3.6 Plus is Alibaba's agent-oriented Qwen flagship. Key strengths: τ²-bench 97.7% (near-perfect), V* 96.9% (exceptional visual reasoning), AIME 2026 95.3% (exceptional math), HMMT Feb 2025 96.7% (exceptional), IFEval 94.3% (excellent instruction following), MMLU-Redux 94.5% (excellent), LiveCodeBench v6 87.1% (excellent), MathVision 88% (excellent), MMMU 86% (strong), VideoMMMU 84% (strong video), SWE-bench Verified 78.8% (strong), 1M context with video input, very affordable ($0.50/$3.00), τ³-bench 70.7% (strong), C-Eval 93.3% (excellent Chinese). Key weaknesses: AA Intelligence Index 27 (low), HLE 28.8% (low), AA-Omniscience Index 0.9% (very low), CritPt 2.9% (very low), Vibe Code Bench 25.56% (low), NL2Repo 37.9% (low), FrontierMath v2 Tier 4 8.33% (very low), 65K output limit (smaller than peers), AA-Omniscience Accuracy 26.4% (low), pricing doubles above 256K. Best fit for: mathematical reasoning (AIME 95.3%, HMMT 96.7%), live coding assistance (LiveCodeBench 87.1%), multimodal tasks with video input (VideoMMMU 84%), long-context work at low cost (1M, $0.50/M), Chinese-language tasks (C-Eval 93.3%), instruction-following applications (IFEval 94.3%). Not ideal for: frontier math research (FrontierMath v2 Tier 4 8.33%), open-ended knowledge tasks (HLE 28.8%), vibe coding (Vibe Code Bench 25.56%), tasks requiring high knowledge recall without hallucination (AA-Omniscience Accuracy 26.4%), large-output workloads (only 65K output).

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Qwen official blog, BenchLM, Vals AI, Artificial Analysis, OpenRouter, Epoch AI, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
