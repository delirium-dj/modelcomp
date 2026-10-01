# Qwen3.8-Max — findings by DeepSeek 4 Flash

- Source: Alibaba/Qwen3.8-Max
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max
- **Short description:** Alibaba Cloud's flagship 2.4T sparse MoE with 1M multimodal context and flat $2/$6 pricing, competing on reasoning, document/vision and long-context value.
- **Provider / access:** Alibaba Cloud / DashScope; open weights. One-time 1M-token free quota; no Zen Free ID.
- **Release / knowledge:** Qwen3.8 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `alibaba/qwen3-8-max` (OpenCode `opencode/qwen3.8-max`); no Zen Free ID.
- **Context window:** 1M input / 131K output — verified from curated metadata and BenchLM.
- **Modalities:** text/image/video in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $2.00 in / $6.00 out per 1M.
- **Architecture:** open-weights 2.4T-parameter sparse MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (Alibaba); Vals **67.4%**
- OSWorld-Verified **86.1%**; AndroidWorld **85.3%**; MobileWorld **77.8%**; WebArena-Verified **66.8%**
- Toolathlon-Verified **72.5%**; WideResearch **81.9%**; CoWorkBench **74.8%**; skillsBench **70.2%**
- Agents' Last Exam **52.4%**; HLE w/ tools **56.2%**; AutomationBench **27.3%**; OSWorld 2.0 **19.4%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (Alibaba); Vals 93.7%
- HLE: **43.6%** (Alibaba)
- MRCRv2 **92.9%**; LongBench v2 **66.3%**
- MMLU-Pro (Vals) **88.6%**; IFBench **82.8%**
- Artificial Analysis Intelligence Index: no verified public value found for this exact ID

Coding:

- SWE-bench Verified (Vals) **85.6%**; SWE-bench Pro **67.7%**
- DeepSWE **56.6%**; FrontierSWE **73.5%**; NL2Repo **55.9%**; PaperBench **93.0%**
- LiveCodeBench (Vals) **87.9%**; VulcanBench v3 **81.2%**

Long context:

- MRCRv2 **92.9%**; LongBench v2 66.3%

Multimodal:

- MMMU-Pro **82.3%**; MathVision **95.2%** (w/ Python 97.7%); CharXiv **88.4%** (w/ tools 93.5%); OmniDocBench 1.5 **92.1%**; VideoMMMU **88.7%**; LVBench **81.8%**; Design Arena — none

### Normalized scores (1–100)

- **Tool use: 93/100.** TB 2.1 86.6%, OSWorld-Verified 86.1%, AndroidWorld 85.3% and WideResearch 81.9% are frontier; AutomationBench 27.3% caps it.
- **Reasoning: 84/100.** GPQA 92.6% and MRCRv2 92.9% are strong; HLE 43.6% and LongBench v2 66.3% are mid-high.
- **Context window: 97/100.** 1M input with MRCRv2 92.9%.
- **Multimodal: 91/100.** text/image/video in with MathVision 95.2%, OmniDocBench 92.1% and VideoMMMU 88.7%; text-only output.
- **Coding: 86/100.** SWE Verified 85.6%, LiveCode 87.9% and PaperBench 93% are strong; DeepSWE 56.6% and SWE-Pro 67.7% trail.
- **Cost efficiency: 78/100.** Flat $2/$6 per 1M is good value for a flagship open-weights model.
- **Overall Score: 90/100.** Mean of (93 + 84 + 97 + 91 + 86) / 5 = 90.2 → 90. Best-fit: high-value long-context multimodal reasoning and mobile/OS agents.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Alibaba, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
