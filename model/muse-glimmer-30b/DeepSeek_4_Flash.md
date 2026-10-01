# Muse Glimmer 30B — findings by DeepSeek 4 Flash

- Source: Meta/Muse Glimmer 30B
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta Superintelligence Labs' Apache-2.0 30B dense multimodal agent model distilled from Muse Spark, built for always-on local agent workflows on a single consumer GPU.
- **Provider / access:** open weights (Apache-2.0); OpenRouter (`meta/muse-glimmer-30b`), Fireworks/Together/Vercel, NVIDIA NIM; no Zen Free ID.
- **Release / knowledge:** Muse Glimmer generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `meta/muse-glimmer-30b`
- **Context window:** 131,072 (128K) — verified from OpenRouter and Meta docs/BenchLM.
- **Modalities:** text/image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** self-host free; OpenRouter $0.30 in / $1.10 out per 1M; other hosts ~$0.35/$1.50.
- **Architecture:** open-weights 30B dense multimodal.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas **75.5%**; OSWorld-Verified **65.9%**; DeepSearchQA **74.6%**; skillsBench **44.3%**
- GDPval-AA **774 Elo** (AA normalized 13.7%); AA Briefcase **474**; AA Agentic Index **10.5%**
- AA EnterpriseOps-Gym **34.7%**; AA Tau3 Banking **23.5%**; AA AutomationBench **6.8%**; Vals Terminal-Bench 2.1 **51.7%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond **83.5%** (AA)
- HLE (AA): **22.0%**
- AA-LCR **83.3%**; CritPt **2.6%**; MLCR-AA **20.0%**; AA Index **17.5%**
- AA-Omniscience Index **−32.8%**; Accuracy / Hallucination Rate **27.0% / 81.9%**
- AIME26 **94.7%**; IFBench **77%**

Coding:

- SWE-bench Verified **76%**; SWE-bench Pro **51.2%**
- AA-SciCode **44.9%**; AA Coding Index **49.0%**; SciCode **43.6%**; Terminal-Bench 2.1 **51.7%**

Long context:

- AA-LCR 83.3%

Multimodal:

- MMMU-Pro **74%** (AA 74.3%); CharXiv **78.8%**; ScreenSpot Pro **75.4%**; OmniDocBench 1.5 **75.8%**

### Normalized scores (1–100)

- **Tool use: 62/100.** MCP Atlas 75.5%, OSWorld-Verified 65.9% and DeepSearchQA 74.6% are good for 30B; AA Agentic Index 10.5% and AutomationBench 6.8% are weak.
- **Reasoning: 50/100.** GPQA 83.5% and AIME26 94.7% are decent; HLE 22%, AA Index 17.5% and CritPt 2.6% are weak.
- **Context window: 72/100.** 128K with AA-LCR 83.3%.
- **Multimodal: 76/100.** Text + image in with MMMU-Pro 74% and CharXiv 78.8%; text-only output.
- **Coding: 70/100.** SWE Verified 76% is impressive for 30B; Coding Index 49% and SciCode 44.9% trail.
- **Cost efficiency: 95/100.** Apache-2.0 self-host free; hosted cheaply.
- **Overall Score: 66/100.** Mean of (62 + 50 + 72 + 76 + 70) / 5 = 66.0 → 66. Best-fit: single-GPU local multimodal agent, not a frontier planner.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Meta, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
