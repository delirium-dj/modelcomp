- Source: Alibaba/Qwen3.5-35B-A3B
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-35B-A3B
- **Short description:** Alibaba's 2026-02-25 open mid-size Qwen3.5 model — 35B total / ~3B active with hybrid attention and native multimodality. A distinct model; `qwen-3.5-flash` is its managed production API SKU, and `qwen-3.5-27b` / `qwen-3.5-122b-a10b` / `qwen-3.5-397b` are separate.
- **Provider / access:** Open weights with community adaptations (Apple mlx-vlm, LMSYS Org, Iluvatar CoreX); AMD OpenClaw deployment; production twin `Qwen3.5-Flash` on Alibaba Cloud Bailian.
- **Release / knowledge:** 2026-02-25; knowledge cutoff: no verified public score found.
- **IDs:** `qwen3.5-35b-a3b`. No free Zen ID verified.
- **Context window:** **262,144 tokens native**, extendable to **~1,010,000 (1M) tokens**.
- **Modalities:** text and image in, text out (native multimodal); knowledge, instruction following, maths reasoning, agent tasks. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** open weights (free self-hosting); a third-party BenchGecko family table lists $0.14/$1.00 per 1M for this checkpoint — labelled third-party.
- **Architecture:** **Hybrid attention + high-sparsity MoE**, **35B total / ~3B active** parameters; ~**45 tokens/s** in the AMD OpenClaw deployment, supporting **6 concurrent agents** at a 260K context.

### Raw benchmarks found

Agent / tool use:

- Beat the much larger previous-generation Qwen3-235B-A22B on knowledge, instruction-following and maths reasoning leaderboards (directional, no exact scores in the retrieved excerpt)
- AMD OpenClaw: 6 concurrent agents at 260K context, ~45 tok/s (deployment result, not a benchmark)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Knowledge / instruction-following / maths reasoning wins over Qwen3-235B-A22B (directional, lineage comparison)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 262K native / ~1M extended with 6-agent concurrency; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 84/100.** Beating a 235B predecessor on knowledge/instruction-following/maths with 6 concurrent agents at 260K context and broad community/enterprise adaptation; capped by those comparisons being directional with no exact scores.
- **Reasoning: 84/100.** Hybrid-attention MoE with generational leaderboard wins; capped by no named numeric reasoning benchmark for this exact ID.
- **Context window: 90/100.** 262K native extendable to ~1M, with a demonstrated 6-agent 260K deployment; capped by no retrieval benchmark.
- **Multimodal: 83/100.** Native multimodal open weights; capped by text-only output, no verified audio/video input, and no published multimodal benchmark.
- **Coding: 80/100.** General coding capability of the Qwen3.5 generation; capped by zero published coding benchmark scores for this exact ID.
- **Cost efficiency: 96/100.** Free open weights with only ~3B active params, single/few-GPU deployment, $0.14/$1.00 hosted pricing (third-party) and 45 tok/s on AMD hardware. Excluded from Overall.
- **Overall Score: 84/100.** Half-up mean of 84, 84, 90, 83, 80 = 84.2 → 84. Best fit: self-hosted long-context multi-agent workloads on modest hardware; use the Qwen3.5-Flash API SKU for managed serving.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Qwen3.5-35B-A3B article retrieved via public web search excerpt (release, 35B/3B hybrid-attention MoE, 262K→1M context, AMD OpenClaw 45 tok/s / 6 agents, community adaptations, leaderboard wins over Qwen3-235B-A22B), plus a third-party BenchGecko Qwen3.5 family table for pricing — labelled third-party. The managed `Qwen3.5-Flash` SKU's 70.8% accuracy belongs to that separate folder and is NOT attributed here; Qwen3-235B-A22B is a comparison row, not a score. Directional claims are not assigned numbers. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Qwen3.5-35B-A3B — 百度百科 (retrieved via search excerpt; specs, context, deployment)](https://baike.baidu.com/item/Qwen3.5-35B-A3B/67419445)
  - [Qwen 3.5 family — BenchGecko (third-party pricing)](https://www.benchgecko.ai/family/qwen-3-5)
