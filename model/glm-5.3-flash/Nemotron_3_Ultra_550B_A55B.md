# GLM-5.3-Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: Z.AI (`glm-5.3-flash`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash
- **Short description:** Z.AI's cost-efficient open-weights MoE model (320B total / 18B active) with strong coding (SWE-bench 92% Vals), agentic performance (GDPval 1773 Elo), and ultra-low $0.15/$0.50 pricing under MIT license.
- **Provider / access:** Z.AI Platform, OpenCode Zen (`opencode/glm-5.3-flash` via `https://opencode.ai/inference/openai/v1/chat/completions`), Hugging Face (`zai-org/GLM-5.3-Flash`), 26 API providers. OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026-08-26 release; knowledge cutoff not publicly disclosed.
- **IDs:** `zai-org/GLM-5.3-Flash` (Hugging Face), `opencode/glm-5.3-flash` (OpenCode Zen). Open weights available for self-hosting (MIT license).
- **Context window:** 1,000,000 tokens total (1M); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (chain-of-thought); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $0.15/M in, $0.50/M out (Z.AI API / AA). 80% cache discount (AA). Blended 7:2:1 ≈ $0.10/M (AA). Cost per Intelligence Index task: $0.28 (AA).
- **Architecture:** MoE (Mixture of Experts), 320 billion total parameters, 18 billion active parameters per token; open weights (MIT license).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.AI launch post) / **62.9%** (Vals AI) / **84.3%** (Artificial Analysis)
- Toolathlon Verified: **78.4%** (Z.AI launch post)
- AutomationBench: **48.8%** (Z.AI launch post)
- Agents' Last Exam: **26.3%** (Z.AI launch post)
- HLE with tools: **55.3%** (Z.AI launch post)
- GDPval-AA v2: **1773 Elo** (Z.AI launch post)
- AA Tau3 Banking: **47.2%** (Artificial Analysis)
- AA Briefcase Elo: **1453** (Artificial Analysis)
- AA AutomationBench: **60.4%** (Artificial Analysis)
- AA EnterpriseOps-Gym: **33.2%** (Artificial Analysis)
- AA ITBench: **51.2%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **32.8%** (Artificial Analysis)
- GDP.pdf: **15.4%** (Artificial Analysis)
- AA AnalystAgent: **25.0%** (Artificial Analysis)
- Hermes Index: **35.0%** / Hermes Bench: **68.9%** (Nous Research)
- MazeBench: **0%** (ASCII mode, tools)

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (Artificial Analysis) / **86.4%** (Vals AI)
- HLE: **39.9%** (Artificial Analysis)
- AA Intelligence Index: **42** (rank #6/121 open weights) (Artificial Analysis)
- AA LCR: **80.0%** (Artificial Analysis)
- CritPt: **15.4%** (Artificial Analysis)
- MLCR-AA: **51.1%** (Artificial Analysis)
- AA HLE: **39.9%** (Artificial Analysis)
- AA Omniscience Index: **7.5%** (Artificial Analysis)
- MMLU-Pro (Vals): **86.1%** (Vals AI)
- FrontierMath v2 Tiers 1-3: **55.789%** (Epoch AI)
- FrontierMath v2 Tier 4: **17.073%** (Epoch AI)

Coding:

- SWE-bench (Vals): **92.0%** (Vals AI leaderboard)
- LiveCodeBench (Vals): **80.5%** (Vals AI leaderboard)
- DeepSWE: **63.4%** (Z.AI launch post)
- NL2Repo: **56.3%** (Z.AI launch post)
- OpenHarmony Bench: **57.3%** (OpenHarmony Bench leaderboard)
- Terminal-Bench 2.1: **84.3%** (Z.AI launch post)
- AA-SciCode: **51.6%** (Artificial Analysis)
- FrontierSWE v2: **18.1%** (Proximal leaderboard)
- Bug Hunt Bench: **17.7 fixes** (public data)

Multimodal:

- CharXiv: **89.4%** (Z.AI launch post)
- Chartography (tools): **78.0%** (Z.AI launch post)
- OfficeQA Pro: **62.4%** (Z.AI launch post)
- BabyVision: **53.4%** (Z.AI launch post)
- MMVU: **80.5%** (Z.AI launch post)
- Design Arena Website: **1272** (OpenRouter)

Long context:

- AA LCR: **80.0%** (Artificial Analysis)
- MLCR-AA: **51.1%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 80/100.** TB 2.1 84.3% (near 88%+ frontier), GDPval 1773 Elo (exceeds 1750+ frontier, #2 behind Opus 5.5's 1846), Toolathlon 78.4%, AutomationBench 48.8%, HLE with tools 55.3%, AA AutomationBench 60.4%, Tau3 47.2%. Capped by TB 4.0 32.8%, Agents' Last Exam 26.3%, MazeBench 0%.
- **Reasoning: 70/100.** GPQA Diamond 91.2% (exceeds 90%+ frontier), HLE 39.9% (near 40%+ frontier), AA LCR 80.0%, MLCR 51.1%, AA Intelligence Index 42 (<60 frontier). Capped by CritPt 15.4%, AA Omniscience Index 7.5%, FrontierMath Tier 4 17.1%.
- **Context window: 95/100.** 1M native context; AA LCR 80.0%, MLCR 51.1% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: ≥1M = 95-100.
- **Multimodal: 60/100.** Text + image input only; CharXiv 89.4%, Chartography 78.0%, MMVU 80.5%. No video, audio, PDF input reported. Methodology: +image in = 60-70.
- **Coding: 85/100.** SWE-bench 92.0% (Vals, exceeds 80%+ frontier), LiveCodeBench 80.5% (Vals), DeepSWE 63.4% (near 74%+ frontier), NL2Repo 56.3%, AA-SciCode 51.6% (near 55%+), Terminal-Bench 2.1 84.3%. Capped by DeepSWE 63.4%, FrontierSWE v2 18.1%.
- **Cost efficiency: 99/100.** $0.15/$0.50 per 1M, blended ~$0.10/M, 80% cache discount, cost/task $0.28. Methodology: ~$0.10/$0.20 = 97-99; ultra-low open-weights pricing → 99.
- **Overall Score: 78/100.** Half-up mean of (80 + 70 + 95 + 60 + 85) / 5 = 78.0 → 78. Best-fit: exceptional value open-weights MoE for coding and agentic tasks; SWE-bench 92%, GDPval 1773 Elo, and $0.15/$0.50 pricing are unmatched; reasoning depth (CritPt, Omniscience) lags proprietary.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official launch post (Z.AI blog), independent benchmark aggregators (Artificial Analysis, BenchLM, Epoch AI, Vals AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.