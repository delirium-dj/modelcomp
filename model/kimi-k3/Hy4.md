- Source: Moonshot AI/Kimi K3
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2026-07-16 open-weight flagship — at launch the world's largest open model (2.8T MoE parameters), built on Kimi Delta Attention (hybrid linear attention) and Attention Residuals. A distinct model; Kimi K3.1 Pro is its later post-training upgrade, not an alias.
- **Provider / access:** Kimi API (OpenAI- and Anthropic-compatible endpoints), kimi.com / Kimi App; National Supercomputing Internet API service from 2026-07-21; Alibaba Cloud / Qwen / Bailian and Moore Threads MTT S5000 Day-0 adaptations. Full weights, technical report and the MoonEP / FlashKDA / AgentEnv infrastructure stack open-sourced 2026-07-27/28. Consumer new-subscription signups were paused 2026-07-19 due to compute shortages.
- **Release / knowledge:** 2026-07-16 (some sources 2026-07-17); knowledge cutoff: no verified public score found.
- **IDs:** `kimi-k3` family ID as cited. No free Zen ID verified.
- **Context window:** **1,000,000 tokens**; Moonshot noted that fully opening 1M context to all consumer users was undecided because of serving cost.
- **Modalities:** text and image in, text out (**native visual understanding**); front-end programming, physical simulation, procedural modelling, complex dynamic-system simulation; extended reasoning and agent tasks. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **$3 / 1M input tokens (cache miss), $15 / 1M output tokens** — approximately ¥20 / ¥100 per 1M (Baidu Baike). The Kimi K3.1 Pro rate card lists the older K3 at ¥20 input / ¥100 output / ¥2 cache hit, consistent with those USD figures.
- **Architecture:** Mixture-of-Experts with **2.8 trillion total parameters**, **896 experts of which 16 are activated per inference**; Kimi Delta Attention (KDA) hybrid linear attention with NoPE, plus Attention Residuals (AttnRes); ~**2.5x** overall scaling efficiency over K2. Open weights (licence terms not specified in the retrieved page).

### Raw benchmarks found

Agent / tool use:

- Code Arena front-end programming blind leaderboard: **1679 Elo, #1**
- Code Arena full-stack development leaderboard (2026-07-29): **1664 Elo, #1**
- APPSO hands-on: completed physical simulation, procedural modelling, complex dynamic-system simulation and an Eastern-fantasy ink-wash scene front-end task; built an interactive prototype "云驰 Aeris" (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **60**, **#5 globally** (August 2026 evaluation)
- Fields Medal laureate Timothy Gowers-level math: not applicable here (that result belongs to GPT-5.5 Pro, not this model)
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: no verified public score found

Coding:

- Code Arena front-end **1679 (#1)** and full-stack **1664 (#1)** as above
- Kimi Code Bench 3.0 Long-horizon: **55.95%** (reported as the K3 baseline in the K3.1 Pro comparison — lineage figure)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 1M-token window with KDA hybrid linear attention designed for efficient long-sequence recurrent memory, but no MRCR / RULER / GraphWalks figure found — no verified public score found

Adoption (context, not scored): Elon Musk commented "Impressive" on an evaluation post; Harvey built its first internal model, Harvey Tenet, on Kimi K3 (2026-08-20).

### Normalized scores (1–100)

- **Tool use: 87/100.** Top-ranked Code Arena agentic front-end/full-stack results and demonstrated complex simulation workflows; capped by no scored τ-bench/OSWorld/GDPval/Terminal-Bench figure for this exact ID.
- **Reasoning: 90/100.** AA Intelligence Index 60 at #5 globally was frontier for July 2026, with architecture-level long-sequence reasoning; capped by no GPQA/HLE numbers and by K3.1 Pro later raising the index to 55 in a different index version (reported separately, not merged).
- **Context window: 93/100.** A verified 1M-token window purpose-built with KDA/NoPE hybrid linear attention for cheap long-sequence memory; capped by no published retrieval benchmark and by Moonshot's own uncertainty about universally opening 1M context.
- **Multimodal: 85/100.** Native visual understanding plus strong visual/front-end code generation; capped by text-only output, no verified audio/video input, and no published multimodal benchmark score.
- **Coding: 91/100.** #1 on both Code Arena front-end (1679) and full-stack (1664) leaderboards; capped by no SWE-bench/Terminal-Bench figure and a 55.95% long-horizon internal bench that K3.1 Pro later improved to 61.2%.
- **Cost efficiency: 82/100.** $3/$15 per 1M plus free open weights for self-hosting and cheap cache hits; capped by no free API lane and by the consumer subscription pause from capacity pressure. Excluded from Overall.
- **Overall Score: 89/100.** Half-up mean of 87, 90, 93, 85, 91 = 89.2 → 89. Best fit: self-hosted open-weight agentic coding and long-context work, especially where weights access and a 1M window matter; superseded in capability by Kimi K3.1 Pro.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Kimi K3 article (architecture, pricing, 1M context, Code Arena scores, AA index 60, open-source timeline) and the Baidu Baike Kimi K3.1 Pro article (the K3 CNY rate card and Kimi Code Bench 55.95% lineage baseline). The K3.1 Pro AA figure of 55 and K3's 60 come from different index versions/dates and are kept separate, not merged or averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Kimi K3 — 百度百科 (2.8T MoE/KDA architecture, pricing, Code Arena, AA index, open weights)](https://baike.baidu.com/item/Kimi%20K3/67522238)
  - [Kimi K3.1 Pro — 百度百科 (K3 rate card and long-horizon baseline, lineage)](https://baike.baidu.com/item/Kimi%20K3.1%20Pro/69478066)
