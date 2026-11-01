# Kimi K3.1 Pro — findings by Muse Glimmer 30B

- Source: MoonshotAI/kimi-k3.1-pro
- Date: 2026-11-01
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI’s 3T-class MoE open-weight model with 1M token context, post-trained for coding, agentic workflows, 3D creation and financial research; weights planned for Nov 4 2026 release.
- **Provider / access:** Moonshot AI API kimi-k3.1-pro / kimi-k3.1-pro-highspeed; Kimi.ai, Kimi Work, Kimi Code.
- **Release / knowledge:** 2026-10-23; knowledge cutoff not published.
- **IDs:** moonshotai/kimi-k3.1-pro
- **Context window:** 1M total — verified on Kimi blog and Vals AI.
- **Modalities:** text + image + video in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-23):** API $2.00 / 1M input, $10.00 / 1M output — paid tier only; open weights planned.
- **Architecture:** MoE ~3T total, ~104B active per token.

### Raw benchmarks found

- Source: Moonshot Kimi K3.1 Pro tech blog, 2026-10-23
- Source: Artificial Analysis Kimi K3.1 Pro launch benchmarks, 2026-10-23
- Source: Vals AI Kimi K3.1 Pro model page, 2026-10-24

Agent / tool use:

- Terminal-Bench 4.0: 65.7% (Moonshot blog)
- GDPval-AA v2.1: 1,846 Elo (Artificial Analysis)
- AutomationBench-AA: 73.3% (Moonshot blog)
- OfficeQA Pro v2: 64.4 (Moonshot blog)
- BrowseComp: 92.1% (Moonshot blog)

Reasoning / knowledge:

- Humanity's Last Exam with tools: 70.0% (Moonshot blog)
- GPQA Diamond: 94.2% (Moonshot blog)
- AA Intelligence Index: 55 (Artificial Analysis, 4th of 215)
- CritPt: 24.6% (Artificial Analysis / Vals)
- HLE: 52.5% (Artificial Analysis)

Coding:

- Terminal-Bench 4.0: 65.7% (Moonshot)
- DeepSWE v1.1: 75.5% (Moonshot table)
- SWE Marathon v1.1: 51.7% (Moonshot blog)
- Kimi Code Bench 3.0 Long-horizon: 61.2% (Moonshot blog)
- BenchCAD with tools: 92.7% (Moonshot blog)

Long context / multimodal:

- Context window 1M verified; MRCR/GraphWalks not publicly reported.
- Image and video input supported per Vals AI.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 4.0 65.7% ahead of GPT-6 Astra 58.2% and near Claude Opus 5.5 66.4%; GDPval-AA 1,846 Elo 3rd behind Opus 5.5 and Muse Wonder Full; AutomationBench-AA 73.3% strong.
- **Reasoning: 82/100.** HLE with tools 70.0%, GPQA Diamond 94.2%, Intelligence Index 55 fourth overall; capped by CritPt 24.6% and AA-LCR 86.3%.
- **Context window: 98/100.** 1M total verified with image/video input; top-tier context size, slight deduction for max output limits not detailed.
- **Multimodal: 70/100.** Image/video in confirmed; no audio generation reported; 3D creation strength via BenchCAD.
- **Coding: 82/100.** DeepSWE 75.5%, BenchCAD 92.7%, Kimi Code Bench 3.0 Long-horizon 61.2%, SWE Marathon 51.7%; frontier open-weight coding with long-horizon gains.
- **Cost efficiency: 70/100.** $2/$10 per 1M input/output undercuts Opus 5.5 and GPT-6 Astra; paid only, no free tier.
- **Overall Score: 82/100.** Mean of Tool 78 + Reasoning 82 + Context 98 + Multimodal 70 + Coding 82 = 82.0; strong open-weight agentic coder with premium context.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-11-01
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - https://www.kimi.ai/blog/kimi-k3-1-pro
  - https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks
  - https://www.vals.ai/models/kimi_kimi-k3.1-pro
- Future sources: add a new file next to this one using the same headings.
