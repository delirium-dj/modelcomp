# Kimi K2.5 — findings by Ling 3.1 Flash

- Source: Moonshot AI / Kimi K2.5
- Date: 2026-02-02 release; researched 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's open-weights "visual agentic intelligence" model: a 1T-total/32B-active MoE (61 layers, 384 experts, 8 routed + 1 shared per token, MLA attention) with a 400M MoonViT vision encoder. Ships in Instant / Thinking / Agent / Agent Swarm (beta) modes; first open-weight model to top SWE-bench Verified and Terminal-Bench 2.0 in its class per Vals AI.
- **Provider / access:** Moonshot API `moonshotai/kimi-k2.5`; OpenRouter; SiliconFlow, AtlasCloud, Venice, NovitaAI, Amazon Bedrock; Kimi.ai / Kimi App / Kimi Code.
- **Release / knowledge:** 2026-02-02; knowledge cutoff not published.
- **IDs:** `moonshotai/Kimi-K2.5` (Hugging Face, open weights); `moonshotai/kimi-k2.5` (OpenRouter).
- **Context window:** 256K tokens (native); 128K max completion (Vals AI).
- **Modalities:** text + image + video in (native multimodal); text out; thinking toggle; tool calls (search, code-interpreter, web browsing); Agent Swarm multi-agent mode (beta).
- **Pricing (as of 2026-10-08):** Moonshot $0.60 / 1M input, $3.00 / 1M output; cheapest resellers (SiliconFlow/Bedrock) $0.45 / $2.25; cache read $0.07.
- **Architecture:** 1T MoE, 32B active, 384 experts (8 active + 1 shared), MLA, SwiGLU, 160K vocab; MoonViT 400M vision encoder; open weights.

### Raw benchmarks found

Moonshot tech blog (thinking mode, temp 1.0, top-p 0.95, 256K context) unless noted; AA rows are the reasoning variant.

Agent / tool use:

- τ²-bench Telecom: **95.9%** (AA) / 95.9% (Epoch)
- BrowseComp: **60.6%**; with context management: **74.9%**; Agent Swarm: **78.4%**
- WideSearch (item-f1): **72.7%**; Agent Swarm: **79.0%**; DeepSearchQA: **77.1%**; FinSearchComp T2&T3: **67.8%**; Seal-0: **57.4%**
- Terminal-Bench 2.0: **50.8%** (Terminus-2, non-thinking); AA Terminal-Bench 2.1: **45.7%**; Hard: **34.8%**
- τ-Bench Banking (AA): **14.2%**

Reasoning / knowledge:

- HLE-Full: **30.1%** (text 31.5 / image 21.3); with tools: **50.2%** (text 51.8 / image 39.8) — beats Gemini 3 Pro (45.8%) and GPT-5.2 (45.5%) with tools
- AIME 2025: **96.1%** (avg@32); HMMT 2025 (Feb): **95.4%**; IMO-AnswerBench: **81.8%**
- GPQA Diamond: **87.6%** (avg@8; AA 87.9%); MMLU-Pro: **87.1%**; SimpleQA Verified: **36.9%**; AdvancedIF: **75.6%**
- AA Intelligence Index: **23.5** (Coding Index 46.8); AA-Omniscience: accuracy 35.2%, non-hallucination 34.3%; CritPt: **3.1%**

Coding:

- SWE-bench Verified: **76.8%** (internal framework, non-thinking, avg of 5 runs; Vals AI 70.0%)
- SWE-bench Pro (public): **50.7%**; SWE-bench Multilingual: **73.0%**
- LiveCodeBench v6: **85.0%** (Vals AI 83.9%)
- PaperBench: **63.5%**; SciCode: **48.7%**; OJBench (cpp): **57.4%**; CyberGym: **41.3%**

Multimodal:

- MMMU-Pro: **78.5%**; MathVista (mini): **90.1%**; MathVision: **84.2%**; CharXiv RQ: **77.5%**; OCRBench: **92.3%**; OmniDocBench 1.5: **88.8%**; InfoVQA: **92.6%**; VideoMMMU: **86.6%**; VideoMME: **87.4%**; LongVideoBench: **79.8%**; LVBench: **75.9%**; MMVU: **80.4%**; MotionBench: **70.4%**; SimpleVQA: **71.2%**; WorldVQA: **46.3%**; ZeroBench: **9%** (11 w/ tools)

Long context:

- LongBench v2: **61.0%**; AA-LCR: **70.0%** (AA 78.0%)

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-bench Telecom 95.9% and BrowseComp 74.9–78.4% (Swarm) are elite agentic rows, capped by τ-Bench Banking 14.2% and Terminal-Bench 2.0 50.8%.
- **Reasoning: 75/100.** AIME 96.1%, HMMT 95.4% and GPQA 87.6% are competition-tier, but HLE-Full 30.1% (50.2% w/ tools), SimpleQA 36.9% and AA Index 23.5 hold it below frontier reasoning.
- **Context window: 70/100.** 256K native window with LongBench v2 61.0% and AA-LCR 70–78%; no 1M-class serving.
- **Multimodal: 85/100.** Native MoonViT vision with MathVista 90.1%, OCRBench 92.3%, InfoVQA 92.6% and strong video rows (VideoMME 87.4%, LVBench 75.9%); WorldVQA 46.3% is the weak row.
- **Coding: 78/100.** SWE-bench Verified 76.8%, LiveCodeBench v6 85.0% and SWE-bench Multilingual 73.0% lead the open-weights field; SWE-bench Pro 50.7% and CyberGym 41.3% cap it.
- **Cost efficiency: 90/100.** $0.45–$0.60 in / $2.25–$3.00 out per 1M for open weights — the cheapest model in the top 10 of both Vals indices per Vals AI.
- **Overall Score: 77/100.** Mean of the five quality dims (78+75+70+85+78)/5 = 77.2 → 77; best fit for open-weights visual agentic workloads — search-augmented agents and coding fleets — at flash-tier prices.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-08
- Method: public internet research (Moonshot tech blog, HF/GitHub model card, arXiv paper, Artificial Analysis, Vals AI, OpenRouter, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
