- Source: Xiaomi/Xiaomi MiMo-V2.6-Flash
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xiaomi MiMo-V2.6-Flash
- **Short description:** Xiaomi's 2026-09-22 open-sourced efficient-reasoning sibling of MiMo-V2.6-Pro, retaining full omni-modal input and strong agent benchmarks at roughly a third of Pro's price. A distinct model; Pro and Pro-Ultraspeed are separate SKUs/serving profiles.
- **Provider / access:** Xiaomi MiMo Open Platform, MiMo Desktop, Xiaomi MiMo Batch API (Flash and Pro); weights and RL research/resources open-sourced. Used inside Xiaomi for new-materials R&D (PFAS-adsorbing MOF candidate screening).
- **Release / knowledge:** 2026-09-22 (RL livestream 2026-09-17); knowledge cutoff: no verified public score found.
- **IDs:** `mimo-v2.6-flash`. No free Zen ID verified.
- **Context window:** RL training supports **1M context length** (series-level, from the Pro article); no Flash-specific production window verified — no verified public score found.
- **Modalities:** **text, image, video and audio in; text out** (full omni-modal input shared with Pro); professional-office high-frequency workloads and scaled inference; tool calling and AI-agent workflows. No verified non-text output.
- **Pricing (as of 2026-11-14):** **¥1 / 1M input tokens, ¥2 / 1M output tokens**, with a **99% cache discount** (V2.5-series rate card retained). Flash RL training cost ~**$0.85M** (Pro ~$2.62M; ~$3.47M combined).
- **Architecture:** Pretraining architecture/parameter scale unchanged from V2.5 (exact figures not published); open weights. ~6 days of RL post-training over ~750,000 trajectories with 1,568 samples per update and 1M-context training; frozen router and reward-hacking defences shared with Pro.

### Raw benchmarks found

Agent / tool use:

- Long-horizon software engineering (DeepSWE v1.1): **48.8 → 65.68**, with a best **67.86** under the `avg@3` protocol
- Most agent benchmarks reported as approaching Claude Opus 5 and GPT-5.6 Sol (launch coverage, directional; no per-benchmark numbers in the retrieved pages)
- Real scientific use: MOF material screening for PFAS adsorption in Xiaomi's internal materials research (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis composite index: **46** belongs to the **Pro** version — cited as lineage, not a Flash score
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: no verified public score found for this exact ID

Coding:

- DeepSWE v1.1 **65.68** (best 67.86 avg@3) as above; the Pro version reached **72.57** (lineage, different ID)
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / FrontierSWE: no verified public score found

Long context:

- 1M-context RL training with 3.5–3.7B tokens/step (series-level from the Pro article); no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 88/100.** A big DeepSWE v1.1 jump (48.8→65.68, 67.86 avg@3) with reported near-frontier agent benchmarks and real materials-research use; capped by no scored τ-bench/OSWorld/GDPval figure for this exact ID.
- **Reasoning: 85/100.** Large-scale multi-task RL with 750K trajectories and a frozen router; capped by no published numeric reasoning benchmark for Flash (the AA 46 belongs to Pro).
- **Context window: 90/100.** 1M-context RL training with 3.5–3.7B tokens/step; capped by no Flash-specific production window and no retrieval benchmark.
- **Multimodal: 95/100.** Native text + image + video + audio omni-modal input — among the broadest input sets in this comparison set; capped only by text-centric output documentation.
- **Coding: 88/100.** 65.68 DeepSWE (67.86 avg@3) at a third of Pro's price; capped by no SWE-bench/Terminal-Bench figure and Pro's higher 72.57.
- **Cost efficiency: 97/100.** ¥1/¥2 per 1M with a 99% cache discount, open weights, batch API and only ~$0.85M RL training cost — outstanding economics. Excluded from Overall.
- **Overall Score: 89/100.** Half-up mean of 88, 85, 90, 95, 88 = 89.2 → 89. Best fit: very high-volume omni-modal agent and office workloads plus self-hosted deployments where cost dominates.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Xiaomi MiMo-V2.6-Flash article retrieved via public web search excerpt (release, modalities, ¥1/¥2 pricing with 99% cache discount, DeepSWE 48.8→65.68 / 67.86 avg@3, $0.85M training cost, open weights), plus the Baidu Baike Xiaomi MiMo-V2.6-Pro article for series-level RL/1M-context details and the Pro-only AA 46 / long-horizon 72.57 figures — all explicitly labelled lineage under different IDs, never merged into Flash's own rows. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved/fetched this pass.
  - [Xiaomi MiMo-V2.6-Flash — 百度百科 (retrieved via search excerpt; pricing, DeepSWE, modalities)](https://baike.baidu.com/item/Xiaomi%20MiMo-V2.6-Flash/69122561)
  - [Xiaomi MiMo-V2.6-Pro — 百度百科 (series RL, 1M training context, Pro lineage figures)](https://baike.baidu.com/item/Xiaomi%20MiMo-V2.6-Pro/69122572)
