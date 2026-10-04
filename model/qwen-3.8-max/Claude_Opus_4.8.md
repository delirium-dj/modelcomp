# Qwen 3.8 Max — findings by Claude Opus 4.8

- Source: Alibaba (`alibaba/qwen3-8-max`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba's flagship 2.4T sparse MoE (A95B active) with 1M multimodal context, strong vision/video and agentic coding at flat $2/$6 pricing. Top use case: cheap multimodal long-context agentic/coding.
- **Provider / access:** Alibaba Cloud (`qwen3.8-max`); open weights (`Qwen/Qwen3.8-2.4T-A95B`). No Zen Free ID (one-time 1M free quota).
- **Release / knowledge:** Qwen 3.8 generation (2026); knowledge cutoff not published.
- **IDs:** `alibaba/qwen3-8-max` (open weights).
- **Context window:** 1M total / 131K max output (per curated `meta.json`; BenchLM 1M).
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** $2 in / $6 out per 1M (one-time 1M-token free quota); free self-host via open weights.
- **Architecture:** 2.4T total / A95B active sparse MoE, open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **86.6%** (Vals 67.4%); OSWorld-Verified **86.1%**; CoWorkBench **74.8%**; Toolathlon-Verified **72.5%**
- WideResearch **81.9%**; AndroidWorld **85.3%**; Agents' Last Exam **52.4%**; HLE w/ tools **56.2%**; AutomationBench **27.3%**

Reasoning / knowledge:

- GPQA Diamond **92.6%**; MMLU-Pro **88.6%** (Vals); HLE **43.6%**; MRCRv2 **92.9%**; LongBench v2 **66.3%**

Coding:

- SWE-bench **85.6%** (Vals); SWE-bench Pro **67.7%**; LiveCodeBench **87.9%** (Vals); FrontierSWE **73.5%**; PaperBench **93.0%**; DeepSWE **56.6%**; FrontierSWE v2 **15.8%**

Multimodal:

- MMMU-Pro **82.3%**; MathVision **95.2%**; Video-MME **90.4%**; VideoMMMU **88.7%**; CharXiv **93.5%**; OmniDocBench 1.5 **92.1%**; ScreenSpot Pro **84.5%**

### Normalized scores (1–100)

- **Tool use: 85/100.** OSWorld-Verified 86.1%, TB2.1 86.6%, AndroidWorld 85.3%, WideResearch 81.9%; AutomationBench 27.3% and OSWorld 2.0 19.4% cap it.
- **Reasoning: 83/100.** GPQA-D 92.6%, MMLU-Pro 88.6%, MRCRv2 92.9%; HLE 43.6% and no strong frontier-reasoning index cap the top.
- **Context window: 95/100.** 1M total with MRCRv2 92.9% long-context retrieval.
- **Multimodal: 89/100.** Image+video in with top-tier vision/video (Video-MME 90.4%, VideoMMMU 88.7%, CharXiv 93.5%), text out.
- **Coding: 85/100.** SWE-bench 85.6%, LiveCodeBench 87.9%, FrontierSWE 73.5%, SWE-bench Pro 67.7%; FrontierSWE v2 15.8% is the floor.
- **Cost efficiency: 85/100.** $2/$6 per 1M plus free self-host (open weights) and a one-time 1M-token free quota.
- **Overall Score: 87.4/100.** Half-up mean of the five quality dims (85/83/95/89/85). An excellent-value open-weights multimodal long-context agentic/coding flagship.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Qwen 3.8 release benchmarks + HF card, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
