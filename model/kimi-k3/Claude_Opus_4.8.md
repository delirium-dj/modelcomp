# Kimi K3 — findings by Claude Opus 4.8

- Source: Moonshot AI (`moonshotai/kimi-k3`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T-parameter multimodal MoE flagship (July 2026) with a 1M in/out window; frontier document/math-vision reasoning and terminal-agent coding. Top use case: long-context multimodal document+coding agents.
- **Provider / access:** Moonshot AI API `moonshotai/kimi-k3`. No Zen Free ID (premium priced).
- **Release / knowledge:** 2026-07; knowledge cutoff not published.
- **IDs:** `moonshotai/kimi-k3` (no Free ID).
- **Context window:** 1,048,576 (1M) in / 1M out (per curated `meta.json`; BenchLM 1.05M).
- **Modalities:** text, image, document in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** $3.00 in / $15.00 out per 1M ($0.30 cached); no free tier.
- **Architecture:** 2.8T-parameter multimodal MoE (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Vals 80.9%); BrowseComp **91.2%**; DeepSearchQA **95.0%**
- MCP Atlas: **84.2%**; Toolathlon-Verified **73.2%**; AA Harvey-LAB **94.6%**; GDPval-AA **1540 Elo**
- AA Agentic Index **50.6%**; AutomationBench **30.8%**; Terminal-Bench 4.0 (AA) **12.6%**; ApprenticeBench **18%**

Reasoning / knowledge:

- GPQA Diamond: **93.5%**; HLE **56%** (w/ tools) / **43.5%** (w/o); MMLU-Pro **88.0%** (Vals)
- ARC-AGI-1 **94.5%** / ARC-AGI-2 **60.4%** (ARC Prize); AA-LCR **88.7%**
- AA Intelligence Index **43.6**; CritPt **23.4%**; AA-Omniscience Index 19.7%

Coding:

- SWE-bench **93.4%** (Vals); LiveCodeBench **87.2%** (Vals); FrontierSWE **81.2%**; DeepSWE **67.5%**
- ProgramBench **77.8%**; Kimi Code Bench v2 **72.9%**; AA Coding Index **76.2%**; FrontierSWE v2 **25.9%**

Multimodal / long context:

- MMMU-Pro **81.6%** (83.4% w/ Python); CharXiv **91.3%**; MathVision **94.3%**; OmniDocBench **91.1%**; AA-LCR **88.7%** (strong long-context)

### Normalized scores (1–100)

- **Tool use: 86/100.** BrowseComp 91.2%, DeepSearchQA 95%, MCP Atlas 84.2%, Harvey-LAB 94.6%, GDPval 1540; capped by weak AutomationBench 30.8% and TB4.0 12.6%.
- **Reasoning: 86/100.** GPQA-D 93.5%, HLE 56% (tools), AA-LCR 88.7%, MMLU-Pro 88%, ARC-AGI-1 94.5%; AA Index 43.6, ARC-AGI-2 60.4% and CritPt 23.4% cap it.
- **Context window: 97/100.** 1M in/out with AA-LCR 88.7% — best-in-class long-context retrieval.
- **Multimodal: 85/100.** Image+document in (CharXiv 91.3%, MathVision 94.3%, OmniDocBench 91.1%), text-only out; no audio/video.
- **Coding: 89/100.** SWE-bench 93.4%, LiveCodeBench 87.2%, FrontierSWE 81.2%, Coding Index 76.2%; FrontierSWE v2 25.9% is the floor.
- **Cost efficiency: 60/100.** $3/$15 per 1M ($0.30 cached), no free tier — mid-premium.
- **Overall Score: 88.6/100.** Half-up mean of the five quality dims (86/86/97/85/89). Excellent long-context multimodal document + coding agent; premium priced with no free tier.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Moonshot AI launch blog, Artificial Analysis, BenchLM, Vals AI, ARC Prize); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
