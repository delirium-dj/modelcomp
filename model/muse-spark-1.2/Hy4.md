- Source: Meta/Muse Spark 1.2
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's 2026-08-05 coding-focused model, released alongside the Muse Code terminal coding agent beta and trained on Muse Code task trajectories. It is the base for the open-weight **Muse Glimmer** (30B distillate). A distinct model version; 1.1 and 1.3 are separate releases, and the Muse Spark 1.2 tier names are one model per the project identity roster.
- **Provider / access:** Meta developer platform (API key application required), primarily developer-facing; powers Muse Code. Two pricing tiers: **Standard** and **Contributor** (the latter lets Meta use your work/code traces to improve models). Muse Spark 1.3 later continued the same pricing standard.
- **Release / knowledge:** 2026-08-05; knowledge cutoff: no verified public score found.
- **IDs:** `muse-spark-1.2` family ID as cited. No free Zen ID verified.
- **Context window:** **1,000,000 tokens** with **active compression and retrieval of historical information** — a distinctive long-horizon mechanism.
- **Modalities:** text in, text out (coding-agent focus); tool use, context compression, goal setting and sub-agent coordination were explicitly optimised in training. The wider Muse Spark family is multimodal (1.1 supports text/image/video/document in) but the 1.2 article documents a coding-agent model — no verified audio/video input or non-text output for this exact ID.
- **Pricing (as of 2026-11-14):** two-tier Standard / Contributor structure; launch coverage reports the **Contributor tier at $0.20 / 1M output tokens** ("near cost"), with the trade-off that Meta trains future models on your code traces. No full rate card was verifiable this pass.
- **Architecture:** Proprietary, closed weights at launch; Meta promised to open Muse Spark 1.2's weights later and did release **Muse Glimmer**, a **30B-parameter distilled** version runnable on a single GPU, on 2026-08-10. Parameter count of 1.2 itself not disclosed. Training used Muse Code task trajectories and distillation techniques with third-party open models.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (real-world development): **82.9%**
- DeepSWE v1.1: **59.3%**
- Official demo: optimised a **Kimi Delta Attention kernel** in a long-running task, achieving a measured speedup
- Optimised specifically for goal setting, context compression, tool calling and sub-agent coordination
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / AutomationBench / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Muse Spark 1.1 lineage (different ID): **58%** on Humanity's Last Exam, strong in science/math/health but weak in coding — cited as lineage, not a 1.2 score
- Artificial Analysis Intelligence Index: no verified 1.2-specific figure found in the retrieved pages — no verified public score found
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: no verified public score found

Coding:

- Terminal-Bench 2.1 **82.9%** and DeepSWE v1.1 **59.3%** as above
- Muse Code terminal agent handles large-codebase software engineering (plan changes → write code → verify output), with 6,000+ Meta employees using it by August 2026
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / FrontierSWE: no verified public score found

Long context:

- 1M-token window with active compression and retrieval of historical information across long tasks; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 89/100.** 82.9% Terminal-Bench 2.1, explicit optimisation for tool calling/sub-agent coordination/context compression, and a real kernel-optimisation demo; capped by no τ-bench/OSWorld/GDPval figure and no scored computer-use row.
- **Reasoning: 85/100.** Long-horizon goal-setting and self-recovery design with a 1M window; capped by no published numeric reasoning benchmark for this exact ID (the 58% HLE belongs to 1.1).
- **Context window: 92/100.** A verified 1M-token window with active compression plus retrieval of historical information — a genuinely differentiated long-horizon mechanism; capped by no published retrieval benchmark.
- **Multimodal: 76/100.** Scored conservatively: the 1.2 primary source documents a text-based coding agent. The family's 1.1 multimodal support is lineage, not a verified 1.2 capability, so no higher score is justified.
- **Coding: 89/100.** 82.9% Terminal-Bench 2.1 and 59.3% DeepSWE v1.1 with a purpose-built coding agent; capped by no SWE-bench Verified figure and by 1.3 later improving agent efficiency by ~20% fewer tool calls / ~25% fewer tokens.
- **Cost efficiency: 90/100.** A reported $0.20 / 1M output Contributor tier near cost, plus a free 30B open-weight distillate for single-GPU use; capped by the data-use trade-off and no full rate card. Excluded from Overall.
- **Overall Score: 86/100.** Half-up mean of 89, 85, 92, 76, 89 = 86.2 → 86. Best fit: high-volume terminal-based agentic coding on large codebases where a 1M window with active compression and near-cost pricing matter more than multimodal breadth.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Muse Spark 1.2 article retrieved via public web search excerpt (release, 1M context, active compression, Terminal-Bench 2.1 82.9%, DeepSWE v1.1 59.3%, two-tier pricing, Muse Glimmer), the Baidu Baike Muse series article (Muse Code, Glimmer 30B open weights, 1.1 HLE 58%), and launch coverage for the Contributor-tier $0.20/1M output price. A direct re-fetch of the 1.2 Baike page returned a Baidu security-verification interstitial, so its content is cited from the retrieved search excerpt with the URL named; no local repository file was substituted. The 1.1 HLE figure is labelled lineage, not a 1.2 score. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Muse Spark 1.2 — 百度百科 (retrieved via search excerpt; specs + benchmarks)](https://baike.baidu.com/item/Muse%20Spark%201.2/68635101)
  - [Muse系列 — 百度百科 (Muse Code, Glimmer 30B open weights, 1.1 lineage)](https://baike.baidu.com/item/Muse系列/67601348)
  - [Meta Muse Code 发布：低价杀入编程 — 百家号 (Contributor-tier $0.20/1M output)](https://baijiahao.baidu.com/s?id=1872866520626155958&wfr=spider&for=pc)
