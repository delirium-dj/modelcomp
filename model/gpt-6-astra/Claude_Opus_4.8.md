# GPT-6 Astra — findings by Claude Opus 4.8

- Source: OpenAI (`openai/gpt-6-astra`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship frontier model (above GPT-5.6 Sol), staged rollout from Trusted Access programs, built for frontier reasoning and long-horizon agents. Top use case: hardest reasoning/math and agentic engineering where capability outweighs cost.
- **Provider / access:** OpenAI API `openai/gpt-6-astra` (Responses API). No Zen Free ID.
- **Release / knowledge:** GPT-6 generation (2026); knowledge cutoff not published.
- **IDs:** `openai/gpt-6-astra` (no Free ID).
- **Context window:** 1,050,000 (1.05M) total / 128K max output (per curated `meta.json`; BenchLM 1.05M).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** $10 in / $50 out per 1M; no free tier.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **91.5%**; OSWorld 2.0: **72.6%**; Terminal-Bench 4.0: **57.9%** (AA 59.1%)
- Terminal-Bench-Science 0.1: **64.6%**; Agents' Last Exam: **59.3%**; ApprenticeBench: **68%**
- GDPval-AA: **1542 Elo**; AA Agentic Index **51.5%**; AA AutomationBench **68.5%**; Terminal-Bench 2.1 (Vals) **87.3%**; ExploitGym **42.4%**

Reasoning / knowledge:

- GPQA Diamond: **96.0%**; HLE w/ tools: **57.2%** (AA-HLE 54.7%)
- ARC-AGI-1 **98.5%** / ARC-AGI-2 **95.0%** / ARC-AGI-3 **62.7%** (ARC Prize verified — class-leading)
- FrontierMath v2 Tier 4: **97.6%**; AA Intelligence Index **52.7**; CritPt **31.7%**
- MRCR v2 256K–512K **100.0%** / 512K–1M **96.3%**; AA-LCR **80.7%**; GraphWalks BFS 256K–1M **71.8%**

Coding:

- DeepSWE **74.1%**; FrontierCode 1.1 Main **53.3%** / Extended **64.5%**; FrontierSWE v2 **65.5%**
- AA Coding Index **76.9%**; AA-SciCode **56.5%**; Terminal-Bench 2.1 (Vals) **87.3%**

Multimodal:

- ScreenSpot Pro **92.7%**; AA-MMMU-Pro **86.9%**; BenchCAD Vision2Code (tools) **0.959**

### Normalized scores (1–100)

- **Tool use: 92/100.** Frontier agentics: BrowseComp 91.5%, OSWorld 72.6%, TB4.0 57.9%, ApprenticeBench 68% (class-leading GUI), GDPval 1542; AA Tau3-Banking 41.4% is the soft spot.
- **Reasoning: 94/100.** Best-in-class: GPQA 96%, ARC-AGI-2 95%, ARC-AGI-3 62.7%, FrontierMath T4 97.6%, HLE 57.2% (tools); AA Index 52.7 keeps it under a perfect ceiling.
- **Context window: 99/100.** 1.05M total with MRCR 100% at 256K–512K and 96.3% at 512K–1M — the ≥98%-retrieval tier.
- **Multimodal: 68/100.** Image-in (ScreenSpot Pro 92.7%, MMMU-Pro 86.9%), text-only out, no audio/video — image-input tier, strong within it.
- **Coding: 90/100.** DeepSWE 74.1%, FrontierSWE v2 65.5%, FrontierCode Extended 64.5%, Coding Index 76.9%, TB2.1 87.3%.
- **Cost efficiency: 30/100.** $10/$50 per 1M, no free tier — the premium flagship price point.
- **Overall Score: 88.6/100.** Half-up mean of the five quality dims (92/94/99/68/90). The frontier reasoning/agentic leader; multimodal is image-only and the price is top-of-market.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (OpenAI GPT-6 Astra launch + system card, Artificial Analysis, BenchLM, Vals AI, ARC Prize, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
