# Claude Opus 4.5 — findings by DeepSeek 4 Flash

- Source: Anthropic/Claude Opus 4.5
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's November 2025 Opus flagship that cut Opus-tier pricing 67% to $5/$25 while reaching SOTA real-world software engineering; superseded by Opus 4.6–5.5.
- **Provider / access:** Anthropic API / OpenRouter (`anthropic/claude-opus-4.5`); no Free ID.
- **Release / knowledge:** released November 2025; knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-opus-4.5`
- **Context window:** 200,000 tokens — verified from OpenRouter and curated metadata.
- **Modalities:** text/image in; text out; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $5.00 in / $25.00 out per 1M.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 **59.3%**; OSWorld-Verified **66.3%**
- Claw-Eval **59.6%**; MCP Atlas **42.3%**; MCP-Tasks **71.8%**; WideResearch **76.4%**; Toolathlon **43.5%**
- Gert Labs **64.23%**; JobBench **32.3%**; VITA-Bench **23.3%**; DeepPlanning **26.4%**; CyberGym **50.6%**
- GDPval / Tau3: no verified public score found for this ID

Reasoning / knowledge:

- GPQA **87%**; SuperGPQA **70.6%**; MMLU-Pro **89.5%**
- HLE **30.8%** (AA 13.2%); AR 3-bench 70.2%
- AA-LCR **70.7%**; CritPt **0.3%**; AA Index **23.7%**
- AA-Omniscience Accuracy / Hallucination Rate: **40.9% / 76.2%**
- AIME26 **95.1%**; HMMT Feb 2026 **85.3%**; FrontierMath v2 Tier 4 **4.17%**

Coding:

- SWE-bench Verified **80.9%**; SWE-bench Pro **57.1%**; SWE Multilingual **77.5%**
- LiveCodeBench v6 **84.8%**; NL2Repo **43.2%**

Long context:

- AA-LCR 70.7%; LongBench v2 64.4%; AI-Needle 74%

Multimodal:

- MMMU-Pro **70.6%** (AA 71.2%); MathVision **74.3%**; VideoMMMU **84.4%**; ScreenSpot Pro **45.7%**; Design Arena **1255 Elo**

### Normalized scores (1–100)

- **Tool use: 72/100.** TB 2.0 59.3%, OSWorld-Verified 66.3% and WideResearch 76.4% are okay; MCP Atlas 42.3% and JobBench 32.3% drag.
- **Reasoning: 62/100.** GPQA 87% is good but HLE 30.8%, AA Index 23.7% and CritPt 0.3% are well behind 2026 models.
- **Context window: 70/100.** 200K window with AA-LCR 70.7%.
- **Multimodal: 72/100.** Text + image in with MMMU-Pro 70.6%; text-only output.
- **Coding: 82/100.** SWE Verified 80.9% and LiveCode 84.8% remain strong; SWE-Pro 57.1% and NL2Repo 43.2% trail.
- **Cost efficiency: 48/100.** $5/$25 per 1M is premium for an older generation.
- **Overall Score: 72/100.** Mean of (72 + 62 + 70 + 72 + 82) / 5 = 71.6 → 72. Best-fit: legacy real-world software engineering at moderate cost.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Anthropic, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
