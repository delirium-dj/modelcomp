# Muse Glimmer 30B — findings by Claude Opus 4.8

- Source: Meta (`meta/muse-glimmer-30b`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta Superintelligence Labs' Apache-2.0 30B dense multimodal agent model, distilled from Muse Spark, built for always-on local agent workflows on a single consumer GPU. Top use case: free local agentic/multimodal.
- **Provider / access:** Open weights (Apache-2.0); OpenRouter/Fireworks/Together/Vercel/NVIDIA NIM. No Zen Free ID.
- **Release / knowledge:** Meta Muse Glimmer launch (2026); knowledge cutoff not published.
- **IDs:** `meta/muse-glimmer-30b` (open weights, Apache-2.0).
- **Context window:** 131,072 (128K default per Meta docs) (per curated `meta.json`).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** open weights (self-host free); OpenRouter $0.30/$1.10 per 1M; Fireworks/Together/Vercel $0.35/$1.50; NVIDIA NIM $0.
- **Architecture:** 30B dense, distilled from Muse Spark, Apache-2.0 open weights.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas **75.5%**; DeepSearchQA **74.6%**; OSWorld-Verified **65.9%**; GDPval-AA **774 Elo**
- AA AutomationBench **6.8%**; AA Tau3-Banking 23.5%; AA Agentic Index 10.5%; TB4.0 0.5%

Reasoning / knowledge:

- AA-GPQA Diamond **83.5%**; AIME26 **94.7%**; AA-LCR **83.3%**; AA-HLE **22.0%**; AA Intelligence Index **17.5**; CritPt 2.6%; AA-Omniscience Index -32.8%

Coding:

- SWE-bench Verified **76%**; SWE-bench Pro **51.2%**; Terminal-Bench 2.1 **51.7%**; AA Coding Index **49.0%**

Multimodal:

- CharXiv **78.8%**; ScreenSpot Pro **75.4%**; MMMU-Pro **74%**; OmniDocBench 1.5 **75.8%**

### Normalized scores (1–100)

- **Tool use: 64/100.** MCP Atlas 75.5%, DeepSearchQA 74.6%, OSWorld-Verified 65.9%; GDPval 774, AutomationBench 6.8% and TB4.0 0.5% cap it hard.
- **Reasoning: 66/100.** AIME26 94.7%, GPQA-D 83.5%, AA-LCR 83.3%; AA Index 17.5, HLE 22% and CritPt 2.6% cap it.
- **Context window: 78/100.** 128K (per Meta docs) with AA-LCR 83.3%.
- **Multimodal: 78/100.** Image-in (CharXiv 78.8%, MMMU-Pro 74%, OmniDocBench 75.8%), text out.
- **Coding: 72/100.** SWE-bench Verified 76%, TB2.1 51.7%, Coding Index 49%.
- **Cost efficiency: 96/100.** Free self-host (Apache-2.0) and cheap hosted ($0.30/$1.10).
- **Overall Score: 71.2/100.** Half-up mean of the five quality dims (64/66/78/78/72). A free local agentic multimodal model (distilled from Muse Spark); weak general reasoning/automation caps it.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Meta Muse Glimmer launch, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
