# Inkling — findings by Mercury 3

- Source: Thinking Machines Lab/Inkling
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's flagship open-weights (Apache 2.0) multimodal model (released 2026-07-15): 975B total/41B active MoE (66 layers, 6/256 + 2 shared experts), text/image/audio input, 1M context, very fast (211 t/s), with top-tier math (AIME 2026 97.1%) and solid agentic coding (SWE-bench Verified 77.6%).
- **Provider / access:** Thinking Machines Tinker API (`inkling`), 7 API providers tracked by Artificial Analysis; Apache 2.0 open weights on Hugging Face.
- **Release / knowledge:** Released 2026-07-15; knowledge cutoff not published.
- **IDs:** `thinkingmachines/Inkling` (HF; `inkling` API; effort variable up to 0.99).
- **Context window:** 1,000,000 tokens (1M) total; max output 1M (models.dev).
- **Modalities:** text + image + audio input (hierarchical patch image encoder, discrete-token audio encoder), text output; reasoning; tool calls.
- **Pricing (as of 2026-11-03):** $1.00 input / $4.05 output per 1M tokens (Tinker), 83% cache discount; Apache 2.0 open weights.
- **Architecture:** 975B total / 41B active MoE; Apache 2.0, open weights.

### Raw benchmarks found

Agent / tool use (TML card table / BenchLM):

- Terminal-Bench 2.1: **63.8%** (TML) vs **55.1%** (AA) vs **47.6%** (Vals — conflicting harnesses); TB4.0 (AA): 1.0%
- MCP Atlas: **74.1%**; BrowseComp: **77.1%**; GDPval-AA v2: **1233 Elo** (AA; normalized 28.6%); AA Briefcase: 833 Elo; Agentic Index: 24.3%; AutomationBench-AA: 5.0%; CWE-bench v1: 37.0%; Tau3-Banking: 23.7%

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (AA) / 87.9% (TML); HLE: **46.0%** with tools / 29.7% text-only; AIME 2026: **97.1%**; IFBench: 79.8%; Global-MMLU-Lite: 88.7%
- AA II: **12** (AA v5 composite); AA-LCR: **77.3%**; CritPt: **5.4%**; MLCR-AA: 6.1%; FrontierMath v2 Tiers 1–3 33.33%, Tier 4 4.88% (Epoch AI)
- AA-Omniscience: accuracy 39.3%, hallucination rate 67.2%; SimpleQA Verified: 43.9%

Coding:

- SWE-bench Verified: **77.6%**; SWE-bench Pro (Public): **54.3%**; Terminal-Bench 2.1 63.8%; LiveCodeBench: **85.5%** (Vals); SWE-bench: 77.6% (Vals); AA Coding Index: **52.1%**; AA-SciCode: 47.0%; FrontierSWE v2: 4.1%

Long context:

- 1M window; AA-LCR 77.3%; no MRCR/GraphWalks figure verified in sources reviewed.

Multimodal:

- text/image/audio in; MMMU-Pro 73.5%; CharXiv 78.1% (82.0% w/ python); Audio MC 56.6%; MMAU 77.2%; VoiceBench 91.4%; Design Arena 1223–1257 Elo.

### Normalized scores (1–100)

- **Tool use: 76/100.** MCP Atlas 74.1%, BrowseComp 77.1%, GDPval 1233 — decent; capped by AutomationBench 5%, Briefcase 833, TB4.0 1%, and Vals TB2.1 47.6%.
- **Reasoning: 80/100.** GPQA 87.2%, AIME 97.1%, HLE 46% w/tools; capped by II 12, CritPt 5.4%, FrontierMath 33.3%, and MLCR 6.1%.
- **Context window: 90/100.** 1M with solid LCR 77.3%; no ≥98%-retrieval figure at depth.
- **Multimodal: 88/100.** Text/image/audio input with strong vision/audio (MMMU-Pro 73.5%, VoiceBench 91.4%, MMAU 77.2%); text-only output caps it.
- **Coding: 79/100.** SWE Verified 77.6%, LiveCodeBench 85.5%, SWE Pro 54.3%; capped by FrontierSWE v2 4.1%, Agentic Index 24.3%, and coding index 52.1%.
- **Cost efficiency: 82/100.** $1.00/$4.05 with 83% cache discount — fair for a 975B open model; 211 t/s (#9) notable; Apache 2.0 adds openness value.
- **Overall Score: 83/100.** Mean of (76+80+90+88+79)/5 = 82.6 → 83. A strong open multimodal flagship; the low AA II and weak frontier-agentic rows are the main caveats.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Thinking Machines Lab model card, Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (TB2.1) listed side by side.
- Reference URLs:
  - [Inkling model card (Hugging Face)](https://huggingface.co/thinkingmachines/Inkling)
  - [Introducing Inkling (Thinking Machines Lab)](https://thinkingmachines.ai/news/introducing-inkling/)
  - [Inkling — Artificial Analysis model page ($1.00/$4.05, 1M, 975B/41B, Apache 2.0)](https://artificialanalysis.ai/models/inkling)
  - [Inkling — BenchLM benchmark aggregation](https://benchlm.ai/models/inkling)
  - [Inkling — Vals AI model page](https://www.vals.ai/models/thinkingmachines_inkling)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
