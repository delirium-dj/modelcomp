# Qwen 3.7 Plus — findings by DeepSeek 4 Flash

- Source: Alibaba/Qwen 3.7 Plus
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's Qwen 3.7 Plus mid-tier multimodal model — 1M context, strong vision/document scores and a large tool-calling suite; benchmarks below the flagship Max tiers.
- **Provider / access:** Alibaba Cloud / DashScope; also OpenCode Zen (`opencode/qwen-3.7-plus`). Standard pricing; no Free ID.
- **Release / knowledge:** Qwen 3.7 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/qwen-3.7-plus`
- **Context window:** 1M input (curated listing shows 128K) — BenchLM records a 1M window.
- **Modalities:** text/image/video in (per vision benchmarks); text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** standard paid pricing; exact per-1M rate not verified.
- **Architecture:** proprietary (Plus tier).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **70.3%**; Vals Terminal-Bench 2.1 **52.8%**
- QwenClawBench **61.8%**; Claw-Eval **62.7%**; BFCL v4 **72.9%**; MCP Atlas **73.2%**
- OSWorld-Verified **73.3%**; AndroidWorld **81.0%**; APEX-Agents-AA **22.4%**
- GDPval-AA: **886 Elo** (AA); AA Agentic Index **19.7%**; DeepPlanning **62.3%**; VITA-Bench **45.6%**
- ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.3%** (Alibaba); AA 90.0%
- HLE: **34.7%** (reported); AA-HLE **35.6%**
- MRCRv2 **91.7%**; AA-LCR **73.0%**; CritPt **9.1%**; AA Index **25.2%**
- AA-Omniscience Accuracy / Hallucination Rate: **22.5% / 27.7%**
- HMMT Feb 2026 **92.9%**; IMOAnswerBench **86.0%**; MMLU-Pro **88.5%**; IFEval **94.6%**

Coding:

- SWE-bench Verified **77.7%**; SWE-bench Pro **57.6%**; SWE Multilingual **75.8%**
- LiveCodeBench **89.6%**; AA-SciCode **46.1%**; AA Coding Index **55.9%**; SciCode **51.3%**; NL2Repo **41.1%**

Long context:

- MRCRv2 91.7%; AA-LCR 73.0%

Multimodal:

- MMMU-Pro **79.0%** (AA 80.5%); MathVision **90.3%**; CharXiv **85.9%**; OmniDocBench 1.5 **91.4%**; VideoMMMU **85.4%**; Video-MME **88.0%**; Design Arena **1279 Elo**

### Normalized scores (1–100)

- **Tool use: 78/100.** TB 2.0 70.3%, MCP Atlas 73.2%, OSWorld-Verified 73.3% and AndroidWorld 81% are good; AA Agentic Index 19.7% and GDPval 886 cap it.
- **Reasoning: 72/100.** GPQA 90.3% and MRCRv2 91.7% are strong; AA Index 25.2%, HLE 34.7% and CritPt 9.1% are mid.
- **Context window: 96/100.** 1M input with MRCRv2 91.7%.
- **Multimodal: 88/100.** text/image/video in with MathVision 90.3%, OmniDocBench 91.4% and VideoMMMU 85.4%.
- **Coding: 82/100.** SWE Verified 77.7% and LiveCode 89.6% are good; Coding Index 55.9% and SciCode 46.1% trail.
- **Cost efficiency: 60/100.** Standard paid pricing, exact rate not verified; no free ID.
- **Overall Score: 83/100.** Mean of (78 + 72 + 96 + 88 + 82) / 5 = 83.2 → 83. Best-fit: long-context multimodal/document work at mid price.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Alibaba); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
