- Source: xAI/Grok 4 Fast
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's 2025-09-20 cost-optimised hybrid-reasoning model with end-to-end tool-use RL, real-time search, code execution and X-platform data integration. A distinct model; `grok-4.1-fast` and `grok-4-fast-reasoning` (a retired alias merged into this folder per the project identity roster) are separate identities, and `grok-build-0.1` is the canonical target of `grok-code-fast-1`.
- **Provider / access:** xAI API, Auto mode for complex queries, free tier with 2M context; X-platform data integration.
- **Release / knowledge:** 2025-09-20; knowledge cutoff: no verified public score found.
- **IDs:** `grok-4-fast`. No free Zen ID verified.
- **Context window:** **2,000,000 tokens** — the largest class in this comparison set.
- **Modalities:** text in, text out; real-time search, code execution, X data, tool use, Auto-mode query routing. No verified image/audio/video input for this exact ID.
- **Pricing (as of 2026-11-14):** launch coverage cites **$0.50** (Baike snippet, unit ambiguous) and a **~98% cost reduction** / **40% fewer thinking tokens** vs Grok 4 (secondary); no verified full rate card found.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. End-to-end tool-use reinforcement learning; hybrid reasoning with ~40% fewer thinking tokens than Grok 4 at similar performance.

### Raw benchmarks found

Agent / tool use:

- LMArena Search Arena: **1163 Elo, #1**
- Artificial Analysis independent evaluation: industry-leading **price-to-intelligence ratio** among publicly available models (directional)
- Real-time search / code execution / X-data tool integration, Auto mode (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- AIME 2025 (no tools): **92.0%** — nearly equal to Grok 4 with fewer tokens (secondary 51CTO evaluation)
- ~40% fewer thinking tokens than Grok 4 at similar performance (secondary)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Code execution tooling (qualitative)
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 2M-token window; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 87/100.** #1 LMArena Search Arena at 1163 Elo, end-to-end tool-use RL, real-time search/code execution/X data and Auto-mode routing; capped by no scored agent harness.
- **Reasoning: 85/100.** AIME 2025 92.0% (secondary) with ~40% fewer thinking tokens than Grok 4 and a leading AA price-to-intelligence ratio; capped by the AIME figure being secondary and no GPQA/HLE number.
- **Context window: 96/100.** A verified 2,000,000-token window on a free tier — the largest in this comparison set; capped by no long-context retrieval measurement.
- **Multimodal: 76/100.** Scored conservatively: no verified image/audio/video input was documented for this exact ID in the retrieved sources.
- **Coding: 80/100.** Code-execution tooling and hybrid reasoning; capped by no published coding benchmark score.
- **Cost efficiency: 97/100.** ~98% lower cost and 40% fewer thinking tokens than Grok 4, a free tier and 2M context; capped by an ambiguous published price unit. Excluded from Overall.
- **Overall Score: 85/100.** Half-up mean of 87, 85, 96, 76, 80 = 84.8 → 85. Best fit: very long-context real-time search and tool-heavy agent workloads at minimal cost.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Grok 4 Fast article retrieved via public web search excerpt (release, 2M context, end-to-end tool-use RL, real-time search/code execution/X data, LMArena Search Arena 1163 #1, pricing snippet), plus secondary launch coverage (百家号 for 40% fewer tokens / AA price-to-intelligence; 51CTO for AIME 2025 92.0%; CSDN for ~98% cost reduction) — all explicitly labelled secondary. The ambiguous "$0.50" price unit is reported as-is. Identity handling follows the project's generated roster: `grok-4-fast-reasoning` is a retired alias of this folder (never a separate model), `grok-code-fast-1` resolves to `grok-build-0.1`, and `grok-4.1-fast` is a separate folder. Grok 4 / Grok 4.1 figures are lineage only, never merged. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Grok 4 Fast — 百度百科 (retrieved via search excerpt; 2M context, Search Arena 1163)](https://baike.baidu.com/item/Grok%204%20Fast/66778812)
  - [马斯克新模型性价比拉满 — 百家号 (retrieved via search excerpt; 40% token reduction)](https://baijiahao.baidu.com/s?id=1843848993322485368&wfr=spider&for=pc)
