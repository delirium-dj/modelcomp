# Claude Opus 4.8 — findings by Beam

- Source: Anthropic/Claude Opus 4.8, `anthropic/claude-opus-4-8`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's Opus upgrade (May 28, 2026) over 4.7 with improvements across benchmarks and more effective collaboration; same price. Dynamic workflows in Claude Code; fast mode 2.5x at 3x cheaper.
- **Provider / access:** Anthropic API `claude-opus-4-8`; AWS Bedrock; OpenRouter; OpenCode Zen.
- **Release / knowledge:** Released 2026-05-28; knowledge cutoff January 2026.
- **IDs:** `anthropic/claude-opus-4-8`
- **Context window:** 1,000,000 tokens; max output 128,000.
- **Modalities:** text, image, PDF in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-22):** $5.00 / 1M input, $25.00 / 1M output, $0.50 / 1M cache read, $6.25 / 1M cache write; paid. Fast mode $10/$50.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **63.4** (#19/128)
- Terminal-Bench 2.1: **74.6%**
- Terminal-Bench 3.0: **21.1%**
- OSWorld-Verified: **83.4%**
- OSWorld 2.0: **20.6%**
- BrowseComp: **84.3%**
- DeepSearchQA: **93.1%**
- MCP Atlas: **82.2%**
- Toolathlon: **59.9%**
- Finance Agent v2: **53.9%**
- Gert Labs: **72.97%**
- ResearchClawBench: **21.1%**
- JobBench: not reported for 4.8

Reasoning / knowledge:

- ARC-AGI-1: **92.50%**
- ARC-AGI-2: **72.1%**
- ARC-AGI-3: **1.5%**
- FrontierMath v2 (Tiers 1-3): **80.000%**
- FrontierMath v2 (Tier 4): **56.098%**
- USAMO 2026: **96.7%**
- HLE / GPQA: not individually reported
- AA Intelligence Index: not reported

Coding:

- Coding public-lane (BenchLM): **60.7** (#19/150)
- SWE-bench Verified: **88.6%**
- SWE-bench Pro: **69.2%**
- LiveCodeBench (Vals): **87.8%**
- Coding lane: #19/150 (60.7)

Long context:

- 1M window; MRCR v2 128K-256K: not reported for 4.8 (MRCR v2 128K-256K coming soon).

Multimodal:

- Multimodal public-lane (BenchLM): **91.2** (#5/54)
- CharXiv: **89.9%**
- OfficeQA Pro: **66.2%**

### New data (benchgap 2026-10-21 snapshot)

- AA Intelligence Index: **41.8%** (measured); AA-GPQA Diamond **92.0%**; AA-HLE **48.7%**; AA-SciCode **54.4%** (measured).
- HLE **57.9%** (measured); GPQA Diamond **93.6%** (measured); GPQA **93.6%** (measured); ARC-AGI-1 **92.5%** (measured); ARC-AGI-2 **72.1%** (measured); ARC-AGI-3 **1.5%** (measured).
- FrontierMath Tier4 **56.1%** (measured); FrontierMath Tiers 1-3 **80.0%** (measured).
- SWE-bench Verified **88.6%** (measured); SWE-bench Pro **69.2%** (measured); LiveCodeBench Vals **87.8%** (measured).
- Terminal-Bench 2.1 **74.6%** (measured); Terminal-Bench 3.0 **21.1%** (measured); OSWorld-Verified **83.4%** (measured); OSWorld 2.0 **20.6%** (measured); BrowseComp **84.3%** (measured); DeepSearchQA **93.1%** (measured); MCP Atlas **82.2%** (measured); Toolathlon **59.9%** (measured).
- MMMU-Pro **74.4%** (est.); CharXiv **89.9%** (measured); ScreenSpot Pro **87.9%** (measured); OfficeQA Pro **66.2%** (measured).
- MRCRv2 **85.4%** (est.); AA-LCR **77.7%** (measured).

### Normalized scores (1–100)

- **Tool use: 84/100.** Agentic lane #19/128 (63.4), OSWorld-Verified 83.4%, DeepSearchQA 93.1%, MCP Atlas 82.2%, BrowseComp 84.3%, Terminal-Bench 2.1 74.6%; caps at OSWorld 2.0 20.6%.
- **Reasoning: 80/100.** ARC-AGI-1 92.5%, ARC-AGI-2 72.1%, HLE 57.9%, GPQA 93.6%, FrontierMath Tier4 56.1%; caps at ARC-AGI-3 1.5%.
- **Context window: 87/100.** 1M window; MRCRv2 85.4% (est.), AA-LCR 77.7% (measured).
- **Multimodal: 90/100.** Text/image/PDF in; multimodal lane #5/54 (91.2), CharXiv 89.9%, ScreenSpot Pro 87.9%, OfficeQA Pro 66.2%.
- **Coding: 80/100.** SWE-bench Verified 88.6%, SWE-bench Pro 69.2%, LiveCodeBench Vals 87.8%, coding lane #19/150 (60.7).
- **Cost efficiency: 75/100.** Paid $5/$25 per 1M.
- **Overall Score: 84.2/100.** Mean of five quality dims (BenchLM aggregate 69.99); best-fit for agentic coding + multimodal at mid cost (superseded by Opus 5).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (Anthropic news, OpenCode data, BenchLM, benchgap Oct-21 snapshot); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.