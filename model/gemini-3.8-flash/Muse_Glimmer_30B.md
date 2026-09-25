# Gemini 3.8 Flash — findings by Muse Glimmer 30B

- Source: Google (`google/gemini-3.8-flash`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Next iteration in the Gemini 3 family, building on Gemini 3.7 Flash with performance advancements across software engineering and agentic knowledge workflows. Supports customizable effort levels to control quality, cost and latency.
- **Provider / access:** Google AI Studio / Vertex AI / Gemini API / Gemini Enterprise Agent Platform (`google/gemini-3.8-flash`). Chat Completions / Responses API.
- **Release / knowledge:** Model card published September 2026; knowledge cutoff March 2026, some domains limited to January 2025 per Gemini 3 Model Family.
- **IDs:** `google/gemini-3.8-flash`
- **Context window:** 1,048,576 tokens input / 64K tokens output. Verified via DeepMind model card and benchlm.ai.
- **Modalities:** Text, image, audio, video in; text out; reasoning enabled; tool calls supported; structured outputs.
- **Pricing (as of 2026-09-25):** $0.75 / 1M input tokens, $3.75 / 1M output tokens introductory; introductory pricing expires 31 Dec 2026, then $1.50/$7.50 per 1M. Paid tier with introductory rate.
- **Architecture:** Proprietary multimodal transformer based on Gemini 3.7 Flash; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (benchlm.ai/models/gemini-3-8-flash; DeepMind Model Card Sep 2026)
- Terminal-Bench 4.0: **19.1%** (benchlm.ai/models/gemini-3-8-flash)
- GDPval-AA v2: **1545** Elo (benchlm.ai; DeepMind Model Card)
- GDPval-AA normalized: **45.6%** (benchlm.ai)
- AA Tau3 Banking: **44.9%** (benchlm.ai)
- OSWorld 2.0: **59.0%** (benchlm.ai; DeepMind Model Card)
- AA AutomationBench: **59.9%** (benchlm.ai)
- Finance Agent v2: **61.4%** (benchlm.ai; DeepMind Model Card)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **95.3%** AA (benchlm.ai); GPQA Diamond Vals **94.4%** (benchlm.ai)
- HLE-Verified: **54.9%** (benchlm.ai; DeepMind Model Card)
- AA-HLE: **47.8%** (benchlm.ai)
- AA-LCR: **81.3%** (benchlm.ai)
- MLCR-AA: **21.7%** (benchlm.ai)
- CritPt: **18.3%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **40.9%** (benchlm.ai)
- BenchLM Overall: **73.43 / #8 of 507** (benchlm.ai, updated 2026-09-24)
- AA-Omniscience Accuracy / Hallucination Rate: **54.6% / 55.2%** (benchlm.ai)

Coding:

- DeepSWE v1.1: **73.7%** (DeepMind Model Card); DeepSWE benchlm **73.8%** (benchlm.ai)
- SWE-bench Vals: **80.0%** (benchlm.ai)
- LiveCodeBench Vals: **89.5%** (benchlm.ai)
- AA-SciCode: **56.6%** (benchlm.ai)
- AA Coding Index: **76.3%** (benchlm.ai)
- CursorBench 3.2: **69.2%** (benchlm.ai)
- Vibe Code Bench: no verified public score found

Long context:

- MRCR / RULER / GraphWalks at 1M: no verified public score found
- LVBench Long video understanding: **87.1%** static / **87.8%** agentic (DeepMind Model Card)

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 89.4% and GDPval Elo 1545 show strong agentic tool use; capped by Terminal-Bench 4.0 19.1% and AA Tau3 Banking 44.9%.
- **Reasoning: 83/100.** GPQA Diamond 95.3% and AA-LCR 81.3% indicate frontier knowledge reasoning; capped by HLE-Verified 54.9%, CritPt 18.3% and MLCR-AA 21.7%.
- **Context window: 92/100.** Per tier mapping ≥1M =95-100; verified 1M input /64K output; capped at 92 due to no verified public long-context retrieval % reported for 512K+.
- **Multimodal: 90/100.** Text, image, audio, video input with text output and agentic video understanding; +video in tier with strong LVBench 87.1%.
- **Coding: 84/100.** DeepSWE 73.7%, LiveCodeBench Vals 89.5% and SWE-bench Vals 80.0% with AA Coding Index 76.3% are strong; capped by AA-SciCode 56.6% and FrontierSWE v2 19.6%.
- **Cost efficiency: 88/100.** $0.75/$3.75 per 1M introductory pricing is competitive for frontier-class throughput per methodology.
- **Overall Score: 87/100.** Mean of Tool 88 + Reasoning 83 + Context 92 + Multimodal 90 + Coding 84 = 87.4 → 87. Best-fit for cost-effective agentic coding and multimodal knowledge workflows.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
