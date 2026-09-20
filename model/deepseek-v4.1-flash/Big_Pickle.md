# DeepSeek-V4.1-Flash — findings by Big Pickle

- Source: DeepSeek (`deepseek-v4.1-flash`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4.1-Flash
- **Short description:** DeepSeek's Sep 2026 open-weight, MIT-licensed flash flagship — a ~763B-parameter MoE trained on 45T tokens with a 1M native context and an unusually strong agentic-coding and terminal profile (Terminal-Bench 2.1 90.6%, CodeForces 100.0%, GPQA 90.9% per LLM Stats rows).
- **Provider / access:** DeepSeek API (api-docs.deepseek.com), Fireworks (from $0.22/M-input across providers), Hugging Face weights (MIT). Self-hostable.
- **Release / knowledge:** 2026-09-10 (llm-stats).
- **IDs:** `deepseek-v4.1-flash` (DeepSeek; MIT open weights).
- **Context window:** 1,000,000 tokens (llm-stats rows; family standard 1M).
- **Modalities:** text-first; BabyVision 89.6% row implies vision support; text output; reasoning modes + tools.
- **Pricing (as of 2026-09-20):** from $0.22 in / $0.66 out per 1M (Fireworks, lowest tracked); cached input $0.01/1M. DeepSeek V4 family distinction: V4 Flash (Apr 2026) listed $0.14/$0.28.
- **Architecture:** MoE ~763.2B total params; DeepSeek hybrid-attention lineage (Compressed Sparse Attention in the V4 Flash family); 1M native, long-context economics.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (llm-stats compared rows vs Mistral).
- CyberGym: **88.1%** (llm-stats).
- Agents / domain agentic boards: `LLM Stats` Agents index strong per family claims but exact split rows not independently republished.
- Apex / HAL / OSWorld: **no verified public score found** in my trail.

Reasoning / knowledge:

- GPQA: **90.9%** (llm-stats vs Mistral rows).
- CodeForces: **100.0%** (llm-stats vs Mistral rows).
- LLM Stats Knowledge/Reasoning: not separately captured; family pattern is coding-over-factual-recall (SimpleQA dip acknowledged by DeepSeek for the V4 Flash family).
- MMLU-Pro row for this exact release: not surfaced.

Coding:

- CodeForces: **100.0%**; Terminal-Bench 2.1 **90.6%** (llm-stats).
- BabyVision: **89.6%** (llm-stats).
- AI Coding Leaderboard (#9/29, DeepSeek V4 Flash family listing): SWE-bench Verified **88.8%**, 8.2 pts behind #1 Claude Opus 5 (genztech).
- BenchLM coding direction: 68.5 vs GPT-4.1 mini 23.6 (V4 Flash High).

Long context:

- 1M native context confirmed (llm-stats); hybrid CSA/HCA architecture in V4 Flash family makes 1M economically viable (~10% FLOPs vs prior gen at 1M).
- MRCR / GraphWalks ranked readings: **no verified public score found** for this exact release.

Multimodal:

- BabyVision **89.6%** implies image input; text output; no audio verification.

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.1 90.6% and CyberGym 88.1% are elite agentic-terminal/security numbers; OSWorld/MCP gaps untraced.
- **Reasoning: 88/100.** GPQA 90.9% and CodeForces 100% indicate strong scientific-contest reasoning; factual recall is the family's weaker tail.
- **Context window: 84/100.** 1M native at commodity FLOPs; retrieval evals not republished for this release.
- **Multimodal: 82/100.** BabyVision 89.6 with vision confirmed; no audio.
- **Coding: 90/100.** CodeForces 100% and SWE-bench Verified 88.8% class — among the strongest open-weight coding results of 2026, alongside kimi-k3-class terminal behavior.
- **Cost efficiency: 88/100.** Open weights + $0.22/$0.66 with $0.01 cache read is near-commodity pricing for near-frontier coding.
- **Overall Score: 86/100.** Mean of the five quality dims (86+88+84+82+90)/5 = 86.0 → 86. The best open-weights coding-over-cost trader of Sep 2026 — terminal-first, memory-big, front-end-of-the-frontier.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (llm-stats model/compare pages, genztech coding leaderboard, aimodelsnavi, BenchLM, api-docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.