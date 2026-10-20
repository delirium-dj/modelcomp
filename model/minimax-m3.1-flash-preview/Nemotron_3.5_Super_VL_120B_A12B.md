# MiniMax M3.1 Flash Preview — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchgap.net (`benchgap.net/model/minimax-m3-1-flash`, 21 measured benchmarks as of 2026-10-19), benchlm.ai (`benchlm.ai/compare/minimax-m3-1-flash-preview-vs-muse-spark`), gradually.ai (`www.gradually.ai/en/ai-models/minimax-m3.1-flash-preview/`), MiniMax Agent Tools and API (`api.minimaxi.com`), OpenRouter (`openrouter.ai/models/minimax/minimax-m3.1-flash-preview`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash Preview
- **Short description:** MiniMax's MoE reasoning model in the Flash line, released October 2026; positioned as an everyday coding and agent tier below MiniMax M3; text+image+video input, text output; reasoning always on with adjustable Low/Max effort; available via MiniMax API and OpenRouter, not open weights.
- **Provider / access:** MiniMax API (`MiniMax-M3.1-Flash-Preview`, Chat Completions); OpenRouter route (`minimax/minimax-m3.1-flash-preview`).
- **Release / knowledge:** Released October 2026; knowledge cutoff not stated by provider.
- **IDs:** `MiniMax-M3.1-Flash-Preview` (MiniMax API), `minimax/minimax-m3.1-flash-preview` (OpenRouter). No Free ID confirmed on OpenCode Zen.
- **Context window:** 1,000,000 tokens declared by provider (gradually.ai, MiniMax guide); no public long-context retrieval score beyond AA-LCR 79.7%.
- **Modalities:** Text, images, and video in; text out; reasoning yes (always enabled, effort Low→Max); tool calling yes; structured output/JSON not explicitly advertised.
- **Pricing (as of 2026-10-20):** Not publicly listed as pay-per-token on MiniMax site; OpenRouter pricing not independently confirmed at time of research; treat as paid API, no Free tier confirmed.
- **Architecture:** MoE; 428 billion total parameters, ~23 billion active parameters (gradually.ai); proprietary (weights not public).

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **90.0% estimated ±2.2 pp, high confidence** (benchgap.net)
- Terminal-Bench 2.1: **86.6% estimated ±4.6 pp, high confidence** (benchgap.net)
- Terminal-Bench 2.1 (Vals AI): **76.9% estimated ±5.4 pp, low confidence** (benchgap.net)
- AA Terminal-Bench 2.1: **86.0% estimated ±3.9 pp, high confidence** (benchgap.net)
- OSWorld 2.0: **61.7% measured** (benchgap.net)
- AutomationBench: **62.2% measured** (benchgap.net)
- Toolathlon-Verified: **79.5% estimated ±1.0 pp, medium confidence** (benchgap.net)
- MCP Atlas: **85.3% estimated ±4.7 pp, low confidence** (benchgap.net)
- BFCL v4: **76.6% estimated ±2.7 pp, medium confidence** (benchgap.net)
- GDPval-AA: **47.9% measured** (benchgap.net)
- AA Agentic Index: **42.2% estimated ±2.9 pp, high confidence** (benchgap.net)
Reasoning / knowledge:

- GPQA Diamond: **93.0% estimated ±1.7 pp, high confidence** (benchgap.net)
- AA-GPQA Diamond: **90.9% estimated ±2.7 pp, high confidence** (benchgap.net)
- GPQA: **93.1% estimated ±2.0 pp, high confidence** (benchgap.net)
- MMLU: **90.2% estimated ±3.6 pp, medium confidence** (benchgap.net)
- MMLU-Pro: **85.7% estimated ±2.5 pp, low confidence** (benchgap.net)
- ARC-AGI-1: **94.0% estimated ±4.0 pp, high confidence** (benchgap.net)
- ARC-AGI-2: **73.2% estimated ±13.6 pp, low confidence** (benchgap.net)
- HLE: **51.3% estimated ±6.4 pp, medium confidence** (benchgap.net)
- HLE w/ tools: **65.1% estimated ±4.8 pp, low confidence** (benchgap.net)
- CritPt: **22.3% measured** (benchgap.net)
- Artificial Analysis Intelligence Index: **42.4% measured** (benchgap.net)
- Vals GPQA Diamond: **90.8% estimated ±3.0 pp, high confidence** (benchgap.net)
Coding:

- LiveCodeBench v6: **95.3% estimated ±1.9 pp, medium confidence** (benchgap.net)
- SWE-bench Verified: **82.0% estimated ±2.3 pp, high confidence** (benchgap.net)
- SWE-bench Pro: **62.4% estimated ±3.5 pp, high confidence** (benchgap.net)
- DeepSWE: **73.7% measured** (benchgap.net)
- AA Coding Index: **77.3% estimated ±2.5 pp, high confidence** (benchgap.net)
- FrontierCode 1.1 Main: **53.8% estimated ±2.8 pp, medium confidence** (benchgap.net)
- FrontierSWE v2: **50.8% estimated ±10.4 pp, low confidence** (benchgap.net)
- SciCode: **53.1% estimated ±3.1 pp, high confidence** (benchgap.net)
Long context:

- AA-LCR: **79.7% measured** (benchgap.net)
- LongBench v2: **62.6% estimated ±5.8 pp, low confidence** (benchgap.net)
- MRCRv2: **85.7% estimated ±11.3 pp, low confidence** (benchgap.net)
### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 80/100.** Strong agent/tool profile: BrowseComp 90.0%, Terminal-Bench 2.1 86.6%, MCP Atlas 85.3%, Toolathlon-Verified 79.5%, OSWorld 2.0 61.7%; capped by moderate AutomationBench 62.2% and low Agentic Index 42.2%. Top-tier web-browsing and terminal agent.
- **Reasoning: 78/100.** Excellent knowledge reasoning: GPQA Diamond 93.0%, MMLU 90.2%, ARC-AGI-1 94.0%; held down by weak hardest-reasoning marks — HLE 51.3%, CritPt 22.3%, AA Intelligence Index 42.4%. Knowledge-rich but not elite on novel reasoning.
- **Context window: 78/100.** Declared 1M-token context (provider); AA-LCR 79.7% measured, LongBench v2 62.6% estimated; solid long-context but no MRCR/RULER curve at full window.
- **Multimodal: 80/100.** Text+image+video in, text out; AA-MMMU-Pro 79.1% measured, MMMU 85.3% estimated; solid vision coverage but no video/audio understanding scores published.
- **Coding: 82/100.** Very strong coding: LiveCodeBench v6 95.3%, SWE-bench Verified 82.0%, DeepSWE 73.7%, AA Coding Index 77.3%; capped by FrontierCode Main 53.8% and FrontierSWE v2 50.8%. Leading competitive/agentic coder.
- **Cost efficiency: 25/100.** Paid API only, no Free tier confirmed; pricing not independently confirmed; among the pricier agent/coding models when confirmed.
- **Overall Score: 80/100.** Half-up mean of (80 + 78 + 78 + 80 + 82) / 5 = 79.6 → 80. Best-fit recommendation: strong coding + web-agent model for production agentic workloads; 1M context suits long-document research; weakest on novel reasoning (HLE, CritPt).

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-20
- Method: public internet research (benchgap.net 21-benchmark dataset + benchlm.ai + gradually.ai + MiniMax API docs + OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.