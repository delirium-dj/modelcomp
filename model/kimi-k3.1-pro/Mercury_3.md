# Kimi K3.1 Pro — findings by Mercury 3

- Source: Moonshot AI/Kimi K3.1 Pro
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's October 2026 flagship (released 2026-10-23): a proprietary 2.8T reasoning model (Kimi K3 architecture family) with top-tier HLE (70% w/tools), GPQA 94.2%, and strong agentic/vision performance at $2/$10.
- **Provider / access:** Kimi platform API (`kimi-k3.1-pro`), Kimi app; 5 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-10-23; knowledge cutoff not published.
- **IDs:** `kimi-k3.1-pro` (Kimi API; max reasoning effort; preserved-thinking mode).
- **Context window:** 1,050,000 tokens (1.05M) total; max output not disclosed (131K per models.dev family block).
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls; MCP support.
- **Pricing (as of 2026-11-03):** $2.00 input / $10.00 output per 1M tokens, 90% cache discount (blended ~$1.54).
- **Architecture:** proprietary 2.8T (param count confirmed by AA); not open-weights (unlike Kimi K3).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **65.7%** (Kimi) vs **67.2%** (AA); OSWorld 2.0/2.1: **79.6%**; APEX-Agents: **67.2%**; Agents' Last Exam: **43.2%** (CLI 44.2%); BrowseComp: **92.1%**; HLE w/tools: **70.0%**
- GDPval-AA v2: **1846 Elo** (AA; normalized 67.3%); AA-Briefcase Elo 1678; AA AutomationBench: **73.3%**; Frontier Finance: 58.6%; Financial Research: 70.4%; Financial Modeling: 57.6%; DECK-Arena: 1456
- Harvey Legal Agent (public 1,251): 23.7%; Kimi Hallu Bench Hard (tools): 8.3%; CyberGym-E2E-AA: 94.7%; AA Cyber Index: 64.1%; ExploitGym: 20.7%

Reasoning / knowledge:

- GPQA Diamond: **94.2%**; HLE: **70.0%** with tools / 51.1% without (Kimi) vs **52.5%** (AA)
- AA-LCR: **86.3%**; CritPt: **24.6%**; MLCR-AA: 38.3%; Artificial Analysis Intelligence Index: **46**, #23 of 60 (AA)
- Kimi Hallu Bench: **5.4%** (excellent — low hallucination); AA-Omniscience: accuracy 48.9%, hallucination rate 37.3%
- BioMysteryBench: 80.6% (Kimi)

Coding:

- DeepSWE: **75.5%**; Kimi Code Bench v2: **77.1%**; Kimi Code Bench 3.0 Long-horizon: **61.2%**; sweMarathon: **51.7%**; ProgramBench (binary): 31.5%; PostTrainBench v1.2: 36.5%; AA-SciCode: **60.8%**; Bug Hunt: 36.0 fixes

Long context:

- 1.05M window; AA-LCR 86.3%; MLCR-AA 38.3%.

Multimodal:

- text/image in; MMMU-Pro 84.1%/90% (w/ Python); CharXiv 93.4% (tools)/89% (no tools); Chartography 90.2% (tools); BabyVision 95.4% (w/ Python); ZeroBench 39%/63% (w/ Python); PerceptionBench 68.3%; OfficeQA Pro 67.4%/64.4% (v2); BenchCAD Vision2Code 0.927 (tools); GDP.pdf 34.6%/85.7% (w/ Python).

### Normalized scores (1–100)

- **Tool use: 93/100.** TB4.0 65.7%, OSWorld 79.6%, APEX 67.2%, GDPval 1846, AutomationBench-AA 73.3% — frontier agentic; capped by Harvey Legal all-pass 23.7% and MazeBench 2%.
- **Reasoning: 93/100.** HLE 70% w/tools, GPQA 94.2%, LCR 86.3%, Hallu Bench 5.4% — elite; capped by CritPt 24.6% and II 46.
- **Context window: 94/100.** 1.05M with strong LCR 86.3%; no ≥98%-retrieval figure at depth.
- **Multimodal: 87/100.** Image input with excellent visual-math/chart understanding (MMMU-Pro 90% w/ Python, CharXiv 93.4%, BabyVision 95.4%); no audio input, text-only output.
- **Coding: 90/100.** DeepSWE 75.5%, Kimi Code Bench v2 77.1%, SciCode 60.8%; capped by ProgramBench binary 31.5% and no FrontierCode figure.
- **Cost efficiency: 82/100.** $2/$10 with 90% cache discount — fair for a frontier proprietary model; slow (31.6 t/s).
- **Overall Score: 91/100.** Mean of (93+93+94+87+90)/5 = 91.4 → 91. The strongest proprietary Kimi yet — frontier reasoning/agentic at a mid premium price.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Moonshot AI Kimi K3.1 Pro launch blog, Artificial Analysis model page/leaderboards, BenchLM aggregation); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Kimi K3.1 Pro launch blog (Moonshot AI, 2026-10-23)](https://www.kimi.ai/blog/kimi-k3-1-pro)
  - [Kimi K3.1 Pro — Artificial Analysis model page (II 46, $2/$10, 1.05M, 2.8T)](https://artificialanalysis.ai/models/kimi-k3-1-pro)
  - [Kimi K3.1 Pro — BenchLM benchmark aggregation](https://benchlm.ai/models/kimi-3-1-pro)
