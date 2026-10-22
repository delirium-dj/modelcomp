# Claude Opus 5 — findings by Beam

- Source: Anthropic/Claude Opus 5, `anthropic/claude-opus-5`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's daily-driver Opus (Jul 24, 2026): close to Fable 5 frontier intelligence at half the price; SOTA on Frontier-Bench and GDPval-AA; efficient multi-step agent. Default on Claude Max, strongest on Claude Pro.
- **Provider / access:** Anthropic API `claude-opus-5`; OpenRouter; AWS Bedrock.
- **Release / knowledge:** Released 2026-07-24; knowledge cutoff not stated.
- **IDs:** `anthropic/claude-opus-5`
- **Context window:** not published in sources (BenchLM lists null); max output not stated. (Treat as 200K-class pending verification.)
- **Modalities:** text, image, file in; text out; reasoning yes (adaptive thinking); tool calling yes; structured output yes.
- **Pricing (as of 2026-10-22):** $5.00 / 1M input, $25.00 / 1M output; paid. Fast mode 2.5x speed at 2x price.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **78.5** (#3/128)
- Terminal-Bench 2.1 (Vals): **84.6%**
- OSWorld 2.0: **70.6%**
- BrowseComp: **90.8%**; DeepSearchQA: **95.0%**
- MCP Atlas: **85.8%**; MCP-Atlas claim coverage: **89.1%**
- Toolathlon-Verified: **80.6%**; Pass@3 87.0%
- AutomationBench: **26.0%**
- ApprenticeBench: **36%**; MazeBench: **12%**
- GDPval-AA: **1708 Elo** (Opus 5.5 cites Opus 5 1708)

Reasoning / knowledge:

- HLE w/ tools: **64.7%**
- FrontierMath v2 (Tiers 1-3): **85.614%**; Tier 4: **73.171%**
- MMLU-Pro (Vals): **91.6%**
- ARC-AGI / GPQA: no verified public score found
- Artificial Analysis Intelligence Index: no verified figure found

Coding:

- SWE-bench Verified: **96%**
- SWE-bench Pro: **79.2%**
- CursorBench 3.2: **70.0%**
- LiveCodeBench (Vals): **89.0%**
- Vibe Code Bench: not individually reported (coding lane 70.7)
- Bug Hunt Bench: **27.0 fixes**

Long context:

- Context window not published in sources; MRCR: no verified public score found.

### New data (benchgap 2026-10-21 snapshot)

- AA Intelligence Index: **50.8%** (measured); AA-GPQA Diamond **93.2%**; AA-HLE **54.9%**; AA-SciCode **56.4%** (measured).
- HLE **64.7%** (measured); HLE w/ tools **64.7%** (measured); HLE w/o tools **56.3%** (measured); GPQA Diamond **94.0%** (est.); GPQA **94.0%** (est.).
- ARC-AGI-1 **97.5%** (measured); ARC-AGI-2 **90.4%** (measured); ARC-AGI-3 **30.2%** (measured).
- FrontierMath v2 (Tiers 1-3) **85.6%** (measured); Tier 4 **73.2%** (measured).
- MMLU-Pro **86.0%** (est.); MMLU **90.3%** (est.).
- SWE-bench Verified **96.0%** (measured); SWE-bench Pro **79.2%** (measured); LiveCodeBench Vals **89.0%** (measured); CursorBench 3.2 **70.0%** (measured); Bug Hunt Bench **27.0** (measured).
- Terminal-Bench 2.1 Vals **84.6%** (measured); BrowseComp **90.8%** (measured); DeepSearchQA **95.0%** (measured); MCP Atlas **85.8%** (measured); Toolathlon-Verified **80.6%** (measured); AutomationBench **26.0%** (measured); ApprenticeBench **36.0%** (measured); MazeBench **12.0%** (measured); OSWorld 2.0 **70.6%** (measured).
- AA-MMMU-Pro **84.7%** (measured); CharXiv **88.1%** (est.).
- MRCRv2 **85.7%** (est.); AA-LCR **79.3%** (measured).
- GDPval-AA **61.1%** (measured); AA Coding Index **78.0%** (measured); AA Agentic Index **56.2%** (measured).

### Normalized scores (1–100)

- **Tool use: 90/100.** Agentic lane #3/128 (78.5), BrowseComp 90.8%, DeepSearchQA 95%, MCP Atlas 85.8%, Terminal-Bench 2.1 Vals 84.6%, Toolathlon-Verified 80.6%; caps at AutomationBench 26% and ApprenticeBench 36%.
- **Reasoning: 90/100.** HLE 64.7%, ARC-AGI-2 90.4%, FrontierMath Tier4 73.2%, MMLU-Pro 86.0%; (GPQA 94.0% est.); caps at no published GPQA Diamond official.
- **Context window: 80/100.** Context size not published in sources; MRCRv2 85.7% (est.), AA-LCR 79.3% (measured).
- **Multimodal: 86/100.** Text/image/file in; AA-MMMU-Pro 84.7% (measured), CharXiv 88.1% (est.).
- **Coding: 88/100.** SWE-bench Verified 96%, SWE-bench Pro 79.2%, LiveCodeBench Vals 89.0%, CursorBench 70.0%; coding lane #9/150 (70.7).
- **Cost efficiency: 75/100.** Paid at $5/$25 per 1M.
- **Overall Score: 86.8/100.** Mean of five quality dims (BenchLM aggregate 79.61); best-fit for daily agentic coding + knowledge work.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (Anthropic news, iThome, Vals AI, BenchLM, benchgap Oct-21 snapshot); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.