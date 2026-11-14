- Source: ByteDance/Doubao-Seed-Evolving
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao-Seed-Evolving (豆包 Seed-Evolving)
- **Short description:** ByteDance's continuously-evolving deep-thinking model: a **fixed model ID `doubao-seed-evolving`** whose backend always serves the currently strongest version, with at least one update per week. Designed for Agent and Coding scenarios. A distinct model; `seed-2.0-pro`, `doubao-seed-2.1-pro-260915` and the Doubao 1.5/1.6 deep-thinking lineage are separate.
- **Provider / access:** Volcano Engine / 火山方舟 API with a single stable model ID; TRAE integration; Token Plan.
- **Release / knowledge:** lineage from the 2025-04-17 Doubao 1.5 deep-thinking model; Seed-Evolving iterated with the 2026-06-23 Seed 2.1 series; knowledge cutoff: no verified public score found.
- **IDs:** `doubao-seed-evolving` (fixed rolling ID). No free Zen ID verified.
- **Context window:** **1,000,000 tokens** (secondary Zhihu coverage of the July 2026 upgrade; the 1.6-series deep-thinking model had 256K — a lineage figure, reported separately).
- **Modalities:** text in, text/code out; deep thinking, coding and agent tasks. No verified image/audio/video input for this exact ID.
- **Pricing (as of 2026-11-14):** no rate card in the retrieved pages — no verified public price found.
- **Architecture:** Built on the Doubao 1.5 base with RL algorithm breakthroughs and engineering optimisation; dynamic iteration mechanism shipping ≥1 version update per week; the fixed API endpoint decouples capability upgrades from integration churn ("stability + freshness + zero migration cost").

### Raw benchmarks found

Agent / tool use:

- Fixed model ID with weekly-or-faster rolling upgrades; development teams avoid re-integration (product design result, not a benchmark)
- Focus on Coding and Agent scenarios (directional)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Deep-thinking model lineage from Doubao 1.5 (2025-04-17) and 1.6 (June 2025, 256K context) — qualitative
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Coding/Agent focus with a "fast, stable, cheap" design goal (secondary Tencent Cloud developer analysis, qualitative)
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M context (secondary) / 256K in the 1.6 lineage; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 83/100.** A genuinely differentiated rolling-version agent model with a fixed ID and zero-migration upgrades; capped by no scored agent harness and by non-deterministic version behaviour complicating reproducibility.
- **Reasoning: 81/100.** Dedicated deep-thinking lineage with weekly capability gains; capped by no published numeric reasoning benchmark for this exact ID.
- **Context window: 88/100.** 1M context (secondary) with a 256K lineage figure; capped by conflicting figures and no retrieval benchmark.
- **Multimodal: 72/100.** Scored conservatively: no verified image/audio/video input was documented for this exact ID in the retrieved sources.
- **Coding: 81/100.** Coding-first positioning with weekly upgrades and TRAE integration; capped by no published coding benchmark score.
- **Cost efficiency: 86/100.** Zero migration/integration cost from the rolling ID and weekly free upgrades; capped by no verifiable rate card. Excluded from Overall.
- **Overall Score: 81/100.** Half-up mean of 83, 81, 88, 72, 81 = 81.0 → 81. Best fit: production coding/agent pipelines that want automatic capability upgrades behind a stable endpoint — but pin a version for reproducibility-sensitive evaluation.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike 豆包Seed-Evolving模型 and 豆包 Seed 2.1系列 articles retrieved via public web search excerpt (deep-thinking lineage, weekly dynamic iteration, fixed model ID, Agent/Coding focus, 1.6-series 256K context), plus secondary Zhihu / Tencent Cloud developer / CSDN coverage for the 1M context and the "fast, stable, cheap" design framing — all explicitly labelled secondary. No benchmark numbers were published for this exact rolling ID in the retrieved sources, so every raw benchmark row is honestly marked "no verified public score found". `seed-2.0-pro`, `doubao-seed-2.1-pro-260915` and the Doubao 1.5/1.6 deep-thinking models are separate identities, never merged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [豆包Seed-Evolving模型 — 百度百科 (retrieved via search excerpt; lineage, weekly updates, focus)](https://baike.baidu.com/item/%E8%B1%86%E5%8C%85Seed-Evolving%E6%A8%A1%E5%9E%8B/68083927)
  - [「持续进化」的模型 — 腾讯云开发者社区 (retrieved via search excerpt; fixed ID design)](https://cloud.tencent.com/developer/article/2716249)
  - [Doubao-Seed-Evolving 升级:1M 上下文 — 知乎 (retrieved via search excerpt; secondary 1M context)](https://zhuanlan.zhihu.com/p/2060789063779620845)
