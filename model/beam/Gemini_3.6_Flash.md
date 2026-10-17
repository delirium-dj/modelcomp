# Beam — findings by Gemini 3.6 Flash

- Source: Reflection AI (`reflection/Beam-1.0-501B-A23B`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam (Beam-1.0-501B-A23B)
- **Short description:** Reflection AI's open-weight 501B total / 23B active sparse MoE engineered for agentic software engineering, long-horizon tool execution, and token-efficient reasoning with native 1M context.
- **Provider / access:** Hugging Face open weights (`reflection/Beam-1.0-501B-A23B`), Reflection API, OpenCode Zen (`opencode/beam`).
- **Release / knowledge:** October 2026 release; June 2026 knowledge cutoff.
- **IDs:** `reflection/Beam-1.0-501B-A23B`, `opencode/beam`
- **Context window:** 1,000,000 tokens input / 128,000 max output tokens — verified via official model card.
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-18):** Free on OpenCode Zen promotional tier; Apache 2.0 open weights (self-host free); median API pricing ~$0.70 input / $2.10 output per 1M tokens.
- **Architecture:** 501.3B total / 23.4B active MoE (52 layers, 256 experts) trained with large-scale RL for token-efficient reasoning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.1%** (official model card)
- MCP-Atlas: **80.8%**
- BrowseComp: **76.8%**
- DeepSearchQA: **80.5%**
- HLE with tools: **51.1%**
- Tau3-Banking: **36.1%**

Reasoning / knowledge:

- GPQA Diamond: **90.6%**
- AIME 2026: **97.7%**
- HLE (no tools): **36.0%**
- SciCode: **49.2%**
- CritPt: **16.3%**
- AA-LCR: **78.2%**

Coding:

- SWE-bench Verified: **81.6%**
- SWE-bench Pro v2-Hard: **76.5%**
- LiveCodeBench: **88.3%**
- DeepSWE v1.1: **43.3%**

Long context:

- 1,000,000 tokens native input window; AA-LCR 78.2% long-context reasoning retention.

### Normalized scores (1–100)

- **Tool use: 85/100.** Exemplary agent performance demonstrated by 80.8% on MCP-Atlas, 80.1% on Terminal-Bench 2.1, and 76.8% on BrowseComp; capped by Tau3-Banking (36.1%).
- **Reasoning: 82/100.** Strong mathematical and scientific reasoning highlighted by 90.6% on GPQA Diamond and 97.7% on AIME 2026; capped by HLE 36.0% and CritPt 16.3%.
- **Context window: 95/100.** Verified 1M token input context with 128K max output capacity.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 85/100.** High-caliber software engineering with 81.6% on SWE-bench Verified and 88.3% on LiveCodeBench.
- **Cost efficiency: 98/100.** Free promotional OpenCode Zen route, Apache 2.0 open weights for free self-hosting, and 3x token-efficiency reduction in inference overhead.
- **Overall Score: 72/100.** Balanced frontier open-weight workhorse model delivering exceptional coding efficiency and strong agent execution.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-18
- Method: Multi-source research across Hugging Face model cards, Reflection AI technical disclosures, and Artificial Analysis benchmark evaluations; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
