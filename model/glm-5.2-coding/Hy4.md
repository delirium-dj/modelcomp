- Source: Z.ai/GLM-5.2 (Coding Plan)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2 (Coding Plan release)
- **Short description:** Z.ai's 2026-06-15 open-weight flagship, released on a "full-user rollout → MIT open source → API" cadence and distributed first to all GLM Coding Plan tiers (Lite / Pro / Max / Team). A distinct model; `glm-5.2` is the same model tracked in a separate queue folder, and GLM-5 / 5.1 / 5.3 are separate. This folder covers the Coding-Plan-routed identity.
- **Provider / access:** GLM Coding Plan, Z.ai API, Tencent Buddy product line (2026-06-17), OpenSquilla 0.5.0 Preview 1; Day-1 adaptation across 8 domestic accelerator platforms (Huawei Ascend, T-Head, Moore Threads, Cambricon, Kunlunxin, MetaX, Hygon, Biren).
- **Release / knowledge:** 2026-06-13/15 (weights open-sourced 2026-06-17); **knowledge cutoff 2025-11**.
- **IDs:** `glm-5.2`. No free Zen ID verified.
- **Context window:** **1,000,000 tokens** (up from GLM-5.1's ~200K), with **High / Max** two-tier thinking effort.
- **Modalities:** **text and code only** — explicitly text/code modality with no vision. No verified image/audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** Coding Plan subscription tiers; secondary coverage reports enterprise deployment costs down **80%** for the Seed 2.1 comparison, not this model — no verified public rate card found.
- **Architecture:** MoE, **744B total / ~40B active** parameters; MIT-licensed open weights. Weekly call volume **2.58 trillion tokens** (top five).

### Raw benchmarks found

Agent / tool use:

- Weekly call volume **2.58 trillion tokens**, top-five ranking (adoption, not a benchmark)
- Two-tier thinking effort and 1M context for long coding agents (qualitative)
- DRACO deep-research leaderboard: **59.11** is Claude Opus 4.8's Brave-Search-group average in the Opus 4.8 article; OpenSquilla's 64.09 is a multi-model ensemble — both comparison rows under other IDs, NOT GLM-5.2 scores
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **51** — **#1 among open models**
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: no verified public score found for this exact ID

Coding:

- LLM Benchmark Code V3 (non-official): **3rd place** (directional rank, no exact score)
- 1M context for repository-level work (qualitative)
- Documented weaknesses: slower inference and unstable instruction following
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M window (5x GLM-5.1); no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 85/100.** 1M context, two-tier thinking, 2.58T weekly tokens, day-one 8-platform adaptation and broad Coding Plan distribution; capped by no scored agent harness and unstable instruction following.
- **Reasoning: 86/100.** AA index 51 at #1 among open models; capped by no GPQA/HLE figure and a 2025-11 knowledge cutoff.
- **Context window: 92/100.** A 5x jump to 1M tokens with MIT open weights; capped by no retrieval benchmark.
- **Multimodal: 68/100.** Scored conservatively at the text-only floor: the Baike article explicitly states text/code-only modality with no vision.
- **Coding: 87/100.** #3 on a non-official Code V3 leaderboard, repository-level 1M context and huge real-world coding usage; capped by the rank being non-official and no SWE-bench/Terminal-Bench figure.
- **Cost efficiency: 92/100.** Free MIT weights, 40B active params, 8 domestic accelerator adaptations and subscription-tier access. Excluded from Overall.
- **Overall Score: 84/100.** Half-up mean of 85, 86, 92, 68, 87 = 83.6 → 84. Best fit: self-hosted long-context coding agents on domestic hardware; note the separate `glm-5.2` folder for the same model.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike 智谱GLM-5.2 article retrieved via public web search excerpt (release cadence, 744B/40B MoE, 1M context, MIT weights, AA 51 #1 open, Code V3 3rd, 2.58T weekly tokens, text/code-only modality, 8-platform adaptation), plus a secondary Tencent Cloud news excerpt for the Coding Plan tier details — labelled secondary. DRACO 59.11/64.09 and the 80% enterprise-cost figure belong to other models' comparisons and are explicitly NOT attributed here. `glm-5.2` is a separate tracked folder for the same model (not merged); GLM-5 / 5.1 / 5.3 are separate generations. Directional ranks are not assigned numeric scores. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [智谱GLM-5.2 — 百度百科 (retrieved via search excerpt; specs, AA 51, open weights, modality)](https://baike.baidu.com/item/%E6%99%BA%E8%B0%B1GLM-5.2/67958980)
  - [GLM-5.2 全量开放 Coding Plan — 腾讯云 (retrieved via search excerpt; tiers, 1M context)](https://cloud.tencent.com/developer/news/4087916)
