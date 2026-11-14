- Source: MiniMax/MiniMax M2.7
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's 2026-03-18 Agent flagship that demonstrated "model self-evolution" — an Agent Harness system participating in its own training/optimisation, handling 30–50% of some R&D workloads over 100+ analyse→improve→verify cycles. Open-sourced globally 2026-04-12. A distinct model; `minimax-m2.5`, `minimax-m3` and `minimax-m3.1-flash` are separate.
- **Provider / access:** MiniMax Agent and open platform (global), MiniMax API, OpenRouter; Moore Threads S5000 Day-0 adaptation (2026-04-12); dynamic peak-hour rate limiting from 2026-03-20 due to demand.
- **Release / knowledge:** 2026-03-18 (open-sourced 2026-04-12); knowledge cutoff: no verified public score found.
- **IDs:** `minimax-m2.7`. No free Zen ID verified.
- **Context window:** **~1,000,000 tokens** (secondary Tencent Cloud API guide describes million-token-class); no vendor-verified figure in the retrieved Baike excerpt — reported with provenance.
- **Modalities:** text in, text/code out; multi-agent collaboration, office/knowledge work, coding agents. No verified image/audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** no rate card in the retrieved pages — no verified public price found.
- **Architecture:** Sparse MoE, **230B total / ~10B active** (secondary 什么值得买 analysis, labelled); open weights; self-evolution Agent Harness.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA (office scenarios): **1495 Elo** — highest among Chinese models at launch
- SWE-bench Pro: **56.22%** — matching GPT-5.3-Codex (comparison row, labelled)
- VIBE-Pro: **55.6%** — on par with Claude Opus 4.6 (comparison row, labelled)
- Terminal-Bench 2: **57.0%**
- Kaggle MLE Lite: 22 problems solved in 24h, **9 gold / 5 silver / 1 bronze**, **66.6% medal rate** (behind Opus 4.6 and GPT-5.4, tied with Gemini 3.1)
- Self-evolution: >100 consecutive analyse→improve→verify loops, ~30% improvement on internal evals (vendor-reported, relative)
- Tau3-Banking / Tau2-Bench / OSWorld / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Maths reasoning is a documented weak point (5–6 points behind GLM-5.1 / Qwen3.6-Plus in a secondary comparison)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- SWE-bench Pro **56.22%**, VIBE-Pro **55.6%**, Terminal-Bench 2 **57.0%** as above
- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE / FrontierSWE: no verified public score found

Long context:

- Million-token-class context (secondary); no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 89/100.** GDPval-AA 1495 (#1 Chinese), a 66.6% Kaggle medal rate, 100+ self-improvement loops and multi-agent collaboration; capped by vendor-internal self-evolution figures and no τ-bench/OSWorld result.
- **Reasoning: 84/100.** Strong agentic/Kaggle reasoning; capped by a documented 5–6 point maths gap and no GPQA/HLE figure.
- **Context window: 89/100.** Million-token-class context (secondary) with long self-evolution loops; capped by no vendor-verified window and no retrieval benchmark.
- **Multimodal: 72/100.** Scored conservatively: no verified image/audio/video input was documented for this exact ID.
- **Coding: 87/100.** SWE-bench Pro 56.22% (matching GPT-5.3-Codex), VIBE-Pro 55.6% and Terminal-Bench 2 57.0%; capped by no SWE-bench Verified / LiveCodeBench figure.
- **Cost efficiency: 92/100.** Free open weights with only ~10B active params (secondary) and high agent throughput; capped by peak-hour rate limiting and no verifiable rate card. Excluded from Overall.
- **Overall Score: 84/100.** Half-up mean of 89, 84, 89, 72, 87 = 84.2 → 84. Best fit: long-running office/knowledge-work and coding agents with self-improvement loops; not maths-heavy workloads.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike MiniMax M2.7 article retrieved via public web search excerpt (release, self-evolution Agent Harness, SWE-bench Pro 56.22%, VIBE-Pro 55.6%, Terminal-Bench 2 57.0%, GDPval-AA 1495, Kaggle MLE Lite medals, open source, rate limiting), plus secondary Tencent Cloud / 什么值得买 coverage for the million-token context, 230B/10B MoE and the maths gap — labelled secondary. Comparison rows for GPT-5.3-Codex, Claude Opus 4.6, Gemini 3.1, GLM-5.1 and Qwen3.6-Plus are labelled by ID/harness and never merged. `minimax-m2.5`, `minimax-m3` and `minimax-m3.1-flash` are separate folders. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [MiniMax M2.7 — 百度百科 (retrieved via search excerpt; benchmarks, self-evolution, release)](https://baike.baidu.com/item/MiniMax%20M2.7/67501420)
  - [MiniMax M2.7 API 完全指南 — 腾讯云 (retrieved via search excerpt; secondary context)](https://cloud.tencent.com/developer/article/2656054)
