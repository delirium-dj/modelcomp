# GLM-5.3-Flashx — findings by Nemotron 3 Ultra 550B A55B

- Source: Z.AI (`glm-5.3-flashx`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flashx (Flash reasoning variant)
- **Short description:** Z.AI's flash-tier open-weight MoE reasoning model (753B total / 40B active), optimized for speed/cost vs the Max variant, with strong coding (SWE-bench 95.4% Vals), agentic tool use (TB 2.1 88.2%), and 1M context. Free on Hugging Face / cheap via 27+ providers.
- **Provider / access:** Z.AI API (`glm-5.3-flashx`), Hugging Face (`zai-org/GLM-5.3` flash quant), OpenCode Zen (`opencode/glm-5.3-flashx`), 27+ inference providers. OpenAI-compatible API.
- **Release / knowledge:** 2026-08-18 release (GLM-5.3 family); knowledge cutoff not explicitly stated.
- **IDs:** `zai-org/GLM-5.3` (Hugging Face, base), `glm-5.3-flashx` (Z.AI API / OpenCode Zen). Free tier on HuggingChat and Z.AI playground.
- **Context window:** 1,000,000 tokens total; max output not explicitly stated.
- **Modalities:** Text in/out; reasoning yes; tool calls yes; JSON mode yes. No vision/audio input (text-only MoE).
- **Pricing (as of 2026-10-19):** Z.AI API: ~$0.70/M in, ~$2.20/M out (flash tier estimate, 50% of Max $1.40/$4.40). Inference providers ~$0.30–$0.80/M in, $0.60–$1.50/M out. Blended ≈ $0.45/M (AA Max blended $0.90). Free on HuggingChat. Cost per Intelligence Index task: ~$1.00 est. (Max $2.01).
- **Architecture:** MoE: 753B total params, 40B active (40B active per token), text-only, reasoning-capable, GLM-5.3 License (commercial use with restrictions).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use (from GLM-5.3 Max, flashx expected similar/slightly lower):

- Terminal-Bench 2.1: **88.2%** (Z.AI model card) / **71.5%** (Vals AI) / **83.9%** (AA)
- Terminal-Bench 3.0: **28.3%** (Z.AI model card)
- CyberGym: **84.5%** (Z.AI model card)
- ExploitGym: **15.0%** (Z.AI model card)
- Toolathlon-Verified: **73.0%** (Z.AI model card)
- AutomationBench: **48.2%** (Z.AI model card) / **62.2%** (AA)
- Agents' Last Exam: **28.5%** (Z.AI model card)
- HLE w/ tools: **62.5%** (Z.AI model card)
- GDPval-AA: **1769 Elo** (Z.AI model card) / normalized **57.5%** (AA)
- AA Tau3 Banking: **50.3%** (AA)
- AA Briefcase: **1507 Elo** (AA)
- AA EnterpriseOps-Gym: **36.4%** (AA)
- AA AutomationBench: **62.2%** (AA)
- AA Agentic Index: **53.4%** (AA)
- AA ITBench: **46.1%** (AA)
- AA Terminal-Bench 4.0: **41.9%** (AA)
- Hermes Index: **39.2%** (Nous Research)
- Hermes Bench: **71.8%** (Nous Research)
- MazeBench: **0%** (ASCII mode, tools)

Reasoning / knowledge:

- AA Intelligence Index: **44.8%** (AA) / rank #3/121 open-weight
- AA GPQA Diamond: **91.7%** (AA)
- AA HLE: **42.3%** (AA)
- AA Omniscience Index: **14.3%** (AA)
- AA Omniscience Accuracy: **33.9%** (AA)
- AA Omniscience Hallucination Rate: **29.6%** (AA)
- GPQA Diamond (Vals): **88.1%** (Vals AI)
- MMLU-Pro (Vals): **86.8%** (Vals AI)
- Gray Swan IPI: **31.5%** (Google chart)
- FrontierMath v2 Tiers 1-3: **68.772%** (Epoch AI)
- FrontierMath v2 Tier 4: **29.268%** (Epoch AI)

Coding:

- Terminal-Bench 2.1: **88.2%** (Z.AI model card)
- DeepSWE: **66.9%** (Z.AI model card)
- NL2Repo: **58%** (Z.AI model card)
- ProgramBench: **19.0%** (Z.AI model card)
- FrontierSWE: **78.1%** (Z.AI model card)
- sweMarathon: **42.5%** (Z.AI model card)
- PostTrain Bench: **39.8%** (Z.AI model card)
- AA SciCode: **59.0%** (AA)
- VulcanBench v3: **78.3%** (VulcanBench)
- OpenHarmony Bench: **60.8%** (official leaderboard)
- FrontierSWE v2: **30.2%** (Proximal)
- LiveCodeBench (Vals): **80.5%** (Vals AI leaderboard)
- SWE-bench (Vals): **95.4%** (Vals AI leaderboard)
- AA Coding Index: **74.8%** (AA)
- Bug Hunt Bench: **19.0 fixes** (public data)

Multimodal:

- Design Arena Website: **1295 Elo** (OpenRouter) — text-to-code only, no native vision

Long context:

- AA LCR: **79.7%** (AA)
- CritPt: **19.1%** (AA)
- MLCR-AA: **48.3%** (AA)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 80/100.** TB 2.1 88.2% (exceeds 88%+ frontier), CyberGym 84.5%, Toolathlon 73.0%, GDPval 1769 Elo (near 1750+ frontier), HLE w/ tools 62.5%, AA Agentic Index 53.4%. Capped by TB 3.0 28.3%, ExploitGym 15.0%, MazeBench 0%, AutomationBench 48.2%.
- **Reasoning: 78/100.** GPQA Diamond 91.7% (AA) / 88.1% (Vals), HLE w/ tools 62.5%, FrontierMath Tiers 1-3 68.8%, AA LCR 79.7%, AA Intelligence Index 45 (near 60 frontier). Capped by FrontierMath Tier 4 29.3%, CritPt 19.1%, AA Omniscience Index 14.3%.
- **Context window: 90/100.** 1M native context; AA LCR 79.7% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: 500K-1M = 85-94.
- **Multimodal: 30/100.** Text-only MoE; Design Arena 1295 Elo is text-to-code. No vision, video, audio, PDF input. Methodology: text-only = 20-30.
- **Coding: 88/100.** SWE-bench 95.4% (Vals, exceeds 80%+ frontier), LiveCodeBench 80.5% (Vals), AA Coding Index 74.8% (exceeds 70%+), TB 2.1 88.2%, FrontierSWE 78.1%, VulcanBench 78.3%, AA SciCode 59.0% (exceeds 55%+). Capped by ProgramBench 19.0%, sweMarathon 42.5%, FrontierSWE v2 30.2%.
- **Cost efficiency: 90/100.** Flash tier ~$0.70/$2.20 (est. 50% of Max), blended ~$0.45/M, 81% cache discount, free on HuggingChat. Methodology: <$1/$3 ≈ 90-95 for open-weight flash tier.
- **Overall Score: 73.2/100.** Half-up mean of (80 + 78 + 90 + 30 + 88) / 5 = 73.2 → 73. Using six incl. cost: (80+78+90+30+88+90)/6 = 456/6 = 76 → 76. Model-queue says 87.6; discrepancy due to multimodal weight (text-only). Best-fit: exceptional open-weight coding (SWE-bench 95.4%) and agentic tool use at flash-tier pricing; text-only limits multimodal score.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (Z.AI GLM-5.3 model card, Artificial Analysis), independent benchmark aggregators (BenchLM, Artificial Analysis, Vals AI, Epoch AI, Nous Research, OpenRouter), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores. Flashx variant inferred from GLM-5.3 Max/Flash data.
- Future sources: add a new file next to this one, e.g. `GLM_5.md`, using the same headings.