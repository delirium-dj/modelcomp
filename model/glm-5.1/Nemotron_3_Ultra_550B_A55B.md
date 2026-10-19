# GLM-5.1 — findings by Nemotron 3 Ultra 550B A55B

- Source: Z.AI (`glm-5.1`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.1 (Reasoning)
- **Short description:** Z.AI's open-weights MoE reasoning model (744B total / 40B active) with strong coding (SWE-bench Pro 58.4%, LiveCodeBench 81.4% Vals), math (AIME 95.3%), and agentic (Tau3 70.6%) capabilities, at $1.28/$4.07 pricing under MIT license.
- **Provider / access:** Z.AI Platform, OpenCode Zen (`opencode/glm-5.1` via `https://opencode.ai/inference/openai/v1/chat/completions`), Hugging Face (`zai-org/GLM-5.1`), 6 API providers. OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026-04-07 release; knowledge cutoff not publicly disclosed.
- **IDs:** `zai-org/GLM-5.1` (Hugging Face), `opencode/glm-5.1` (OpenCode Zen). Open weights available for self-hosting (MIT license).
- **Context window:** 200,000 tokens total (200K per AA/BenchLM); max output not explicitly stated.
- **Modalities:** Text in; text out; reasoning yes (chain-of-thought); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $1.285/M in, $4.07/M out (Z.AI API / AA). 80% cache discount (AA). Blended 7:2:1 ≈ $0.85/M (AA). Cost per Intelligence Index task: $1.02 (AA).
- **Architecture:** MoE (Mixture of Experts), 744 billion total parameters, 40 billion active parameters per token; open weights (MIT license).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.0: **63.5%** (Z.AI GLM-5.1 blog)
- BrowseComp: **68%** (Z.AI GLM-5.1 blog)
- Tau3-bench: **70.6%** (Z.AI GLM-5.1 blog)
- MCP Atlas: **71.8%** (Z.AI GLM-5.1 blog)
- CyberGym: **68.7%** (CyberGym leaderboard)
- Claw-Eval: **62.3%** (Claw-Eval leaderboard)
- Tau2-bench: **97.7%** (Artificial Analysis)
- GDPval-AA v2: **1181 Elo** (Artificial Analysis) / **30.8%** normalized (Artificial Analysis)
- Gert Labs: **60.11%** (Gert Labs rankings)
- ResearchClawBench: **18.2%** (ResearchClawBench leaderboard)
- Terminal-Bench 2.1 (Vals): **56.9%** (Vals AI leaderboard)
- AA Agentic Index: **25.2%** (Artificial Analysis)
- HLE with tools: **52.3%** (GLM-5.1 model card)

Reasoning / knowledge:

- GPQA Diamond: **86.2%** (Z.AI GLM-5.1 blog) / **86.8%** (Artificial Analysis) / **84.5%** (Vals AI)
- HLE: **31%** (GLM-5.1 model card)
- HLE with tools: **52.3%** (GLM-5.1 model card)
- AA Intelligence Index: **26** (rank #27/121 open weights) (Artificial Analysis)
- AA LCR: **73.7%** (Artificial Analysis)
- CritPt: **4.6%** (Artificial Analysis)
- AA HLE: **30.1%** (Artificial Analysis)
- AA Omniscience Index: **0.9%** (Artificial Analysis)
- AA Omniscience Accuracy: **23.7%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **29.9%** (Artificial Analysis)
- MMLU-Pro (Vals): **86.9%** (Vals AI)
- GPQA Diamond (Vals): **84.5%** (Vals AI)
- AIME 2026: **95.3%** (Z.AI GLM-5.1 blog)
- HMMT Nov 2025: **94.0%** (Z.AI GLM-5.1 blog)
- HMMT Feb 2026: **82.6%** (Z.AI GLM-5.1 blog)
- MMAnswerBench: **83.8%** (Z.AI GLM-5.1 blog)
- FrontierMath v2 Tiers 1-3: **36.842%** (Epoch AI)
- AA IFBench: **76.3%** (Artificial Analysis)

Coding:

- SWE-bench Pro: **58.4%** (Z.AI GLM-5.1 blog)
- NL2Repo: **42.7%** (Z.AI GLM-5.1 blog)
- SWE-Rebench: **62.7%** (SWE-Rebench leaderboard)
- Terminal-Bench 2.0: **63.5%** (Z.AI GLM-5.1 blog)
- Vibe Code Bench: **31.46%** (Vals AI)
- AA-SciCode: **44.8%** (Artificial Analysis)
- OpenHarmony Bench: **52.3%** (OpenHarmony Bench leaderboard)
- LiveCodeBench (Vals): **81.4%** (Vals AI leaderboard)
- SWE-bench (Vals): **76.4%** (Vals AI leaderboard)
- AA Coding Index: **55.8%** (Artificial Analysis)

Multimodal:

- Design Arena Website: **1290** (OpenRouter)

Long context:

- AA LCR: **73.7%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 65/100.** TB 2.0 63.5%, BrowseComp 68%, Tau3 70.6%, MCP Atlas 71.8%, CyberGym 68.7%, Claw-Eval 62.3%, Tau2 97.7%, HLE with tools 52.3%. Capped by TB 2.1 Vals 56.9%, GDPval 1181 Elo (well below 1750+ frontier), AA Agentic Index 25.2%.
- **Reasoning: 60/100.** GPQA Diamond 86.2% (near 90%+ frontier), HLE 52.3% with tools (exceeds 40%+ frontier), AIME 95.3%, HMMT 94.0%, AA LCR 73.7%, Tau2 97.7%. Capped by AA Intelligence Index 26 (<60 frontier), CritPt 4.6%, AA Omniscience Index 0.9%, FrontierMath Tiers 1-3 36.8%.
- **Context window: 65/100.** 200K native context; AA LCR 73.7% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: 200K = ~65-84 (at lower end).
- **Multimodal: 15/100.** Text only (no multimodal benchmarks reported). Methodology: text-only = 10-20.
- **Coding: 72/100.** SWE-bench (Vals) 76.4%, LiveCodeBench 81.4% (Vals), SWE-Rebench 62.7%, SWE-bench Pro 58.4%, LiveCodeBench (Vals) 81.4%. Capped by AA Coding Index 55.8% (below 70%+), Vibe Code 31.46%, OpenHarmony 52.3%.
- **Cost efficiency: 75/100.** $1.285/$4.07 per 1M, blended ~$0.85/M, 80% cache discount, cost/task $1.02. Methodology: $1.25/$4.25 ≈ 88, $3/$15 ≈ 60 → $1.285/$4.07 interpolates to ~75. MIT license enables free self-hosting.
- **Overall Score: 55.4/100.** Half-up mean of (65 + 60 + 65 + 15 + 72) / 5 = 55.4 → 55. Best-fit: strong open-weights MoE for coding and math with excellent math (AIME 95.3%); limited context (200K), text-only, and weak HLE/GDPval/CritPt limit general reasoning.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (Z.AI GLM-5.1 blog, Hugging Face model card), independent benchmark aggregators (Artificial Analysis, BenchLM, Epoch AI, Vals AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.