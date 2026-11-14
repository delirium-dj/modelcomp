- Source: Moonshot AI/Kimi K3.1 Pro
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's 2026-10-24 flagship, a post-training upgrade of Kimi K3 (not a new base model) with RL extended to hundreds of downstream domains. The world's largest open-weight model at launch and the top-ranked Chinese model on the 2026-11-06 Artificial Analysis intelligence index. A distinct model; the "Highspeed" variant is a serving profile of the same weights (2–3x output speed, 2x price), not a separate model.
- **Provider / access:** kimi.com, Kimi App, Kimi Work, Kimi Code and Kimi API (`platform.kimi.com`); Kimi Hosted Agents for enterprises; third-party integrations including Tencent WorkBuddy and Baidu Dazi Enterprise. OpenAI-compatible API.
- **Release / knowledge:** 2026-10-24; full weights were scheduled for release before 2026-11-04. Knowledge cutoff: no verified public score found.
- **IDs:** `kimi-k3.1-pro` (standard), `kimi-k3.1-pro-highspeed` (serving profile). No free Zen ID verified.
- **Context window:** **1,000,000 tokens**; native visual understanding.
- **Modalities:** text and image in, text out; native vision, tool use, game-engine scripting (Unity/Unreal/Godot), Blender/CAD parameterised 3D modelling, 3D Make online preview/edit with 3D-print / video export. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** official Kimi API rate card — **¥13.00 / 1M input, ¥68.00 / 1M output, ¥1.30 / 1M cache hit, ¥13.00 / 1M 5-min cache write, ¥26.00 / 1M 1h cache write**. Highspeed: ¥26 / ¥136, cache hit ¥1.30. (A third-party router lists $2 / $10 per 1M as the official USD price — a different currency/route, reported separately.) Cheaper than Kimi K3 (¥20 / ¥100).
- **Architecture:** Mixture-of-Experts, **2.8 trillion total parameters** ("3-trillion-class" per vendor), **104 billion active** parameters per token; open weights (full release announced). Heavy RL investment with rebuilt RL framework, long-context inference, training efficiency, sandbox infrastructure, rollout scheduling and environment QA.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **65.7%** — above GPT-6 Astra's 58.2%, just below Claude Opus 5.5's 66.4%
- BenchCAD (tool-assisted 3D modelling): **92.7%** (Opus 5.5 96.2%, GPT-6 Astra 95.9%)
- OfficeQA Pro v2 (finance/office workflow): **64.4** — vendor claims best result at the time
- Kimi Code Bench 3.0 Long-horizon: **61.2%** (Kimi K3 55.95%)
- Kimi Hallu Bench Hard: single-fact statement error rate **8.3%**, down from K3's **23.4%**; share of answers with at least one factual error ~**42.4%** of the previous generation's
- xdev-bench-hard: unfiltered checkpoint pass@3 **90.5%**, final released version **81.0%** (post safety-data removal)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **55**, **#4 globally**, +11 over Kimi K3; **#1 among Chinese models** on the 2026-11-06 index; AA noted it would become the highest-scoring open-weight model on the index once weights were published
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: no verified public score found

Coding:

- Terminal-Bench 4.0 **65.7%** and Kimi Code Bench 3.0 Long-horizon **61.2%** as above
- Game-engine and Blender/CAD scripting with BenchCAD 92.7%
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 1M-token window with rebuilt long-context inference and long-horizon agent benchmarks; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 93/100.** 65.7% Terminal-Bench 4.0 (beating GPT-6 Astra, ~1 point behind Opus 5.5), 92.7% BenchCAD and a best-claimed OfficeQA Pro v2 64.4; capped by no τ-bench/OSWorld/GDPval figure and by a 2026-10 membership rate-limiting incident.
- **Reasoning: 92/100.** AA Intelligence Index 55 at #4 globally and #1 in China, plus a large hallucination reduction (23.4%→8.3%); capped by no GPQA/HLE numbers and by AA scores in the 65-point frontier class from later models.
- **Context window: 93/100.** A verified 1M-token window with purpose-built long-context inference infrastructure and long-horizon coding gains; capped by no published retrieval benchmark.
- **Multimodal: 87/100.** Native vision plus tool-driven 3D/CAD generation and a 3D Make product; capped by text-only output, no verified audio/video input, and no standard multimodal benchmark score.
- **Coding: 93/100.** 65.7% Terminal-Bench 4.0, 61.2% long-horizon Kimi Code Bench and 92.7% BenchCAD; capped by no SWE-bench Verified / DeepSWE figure and by trailing Opus 5.5 on BenchCAD.
- **Cost efficiency: 84/100.** ¥13/¥68 per 1M with very cheap cache hits (¥1.30) and open weights for self-hosting, cheaper than Kimi K3; capped by the 2x Highspeed surcharge and no free API lane. Excluded from Overall.
- **Overall Score: 92/100.** Half-up mean of 93, 92, 93, 87, 93 = 91.6 → 92. Best fit: long-horizon agentic coding, 3D/CAD tool workflows and finance/office document pipelines with the option of self-hosting the open weights.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Kimi K3.1 Pro article (full official benchmark table, official CNY rate card, architecture, AA index, Highspeed variant, safety tests), plus the Baidu Baike Kimi K3.1 article and a third-party router page for the USD price variant — reported separately, never currency-merged. The Highspeed variant is treated as a serving profile of the same weights, not a separate model. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Kimi K3.1 Pro — 百度百科 (benchmarks, official pricing, MoE architecture, AA index)](https://baike.baidu.com/item/Kimi%20K3.1%20Pro/69478066)
  - [Kimi K3.1 — 百度百科 (series, 3T-class params, Highspeed variant)](https://baike.baidu.com/item/Kimi%20K3.1/69212851)
