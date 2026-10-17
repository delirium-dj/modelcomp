# Qwen 3.7 Max — findings by Beam

- Source: Alibaba/Qwen 3.7 Max, `qwen/qwen3.7-max`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Max
- **Short description:** Alibaba's proprietary flagship (May 20, 2026): 984K context, 66K output. Text-only. BenchLM 62.57 (#46 of 954). GPQA Diamond 92.4% (BenchLM). HLE 41.4%. MMLU-Pro 89.6%. MRCRv2 90.4%. CritPt 13.4%. AA Intelligence Index 44.5% (DeepLearning.AI). Vals Index 55.44%. $2.50/$7.50 per 1M.
- **Provider / access:** Alibaba Cloud Model Studio; OpenRouter.
- **Release / knowledge:** Released 2026-05-20; knowledge cutoff not stated.
- **IDs:** `qwen/qwen3.7-max`
- **Context window:** 984,000 tokens; max output 65,536.
- **Modalities:** text in; text out; reasoning yes; tool calling yes. Proprietary (closed).
- **Pricing (as of 2026-10-17):** $2.50 / 1M input, $7.50 / 1M output; paid.
- **Architecture:** proprietary; params not published. 35-hour autonomous kernel optimization (1,158 tool calls).

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **40.7** (Supported · #65/128)
- Terminal-Bench 2.0: **69.7%** (BenchLM)
- QwenClawBench: **64.3%** (BenchLM)
- QwenWebBench: **1568** (BenchLM)
- Claw-Eval: **65.2%** (BenchLM)
- BFCL v4: **75.0%** (BenchLM)
- MCP Atlas: **76.4%** (BenchLM)
- VITA-Bench: **47.9%** (BenchLM)
- τ²-bench: not reported
- OSWorld 2.0: **2.8%** (BenchLM)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **82.3** (Unranked · 3 rankable rows)
- GPQA: **92.4%** (BenchLM)
- GPQA-D: **92.4%** (BenchLM)
- HLE: **41.4%** (BenchLM)
- MMLU-Pro: **89.6%** (BenchLM)
- MMLU-Redux: **95%** (BenchLM)
- SuperGPQA: **73.6%** (BenchLM)
- MMMLU: **90.3%** (BenchLM)
- MRCRv2: **90.4%** (BenchLM)
- CritPt: **13.4%** (BenchLM)
- AA Intelligence Index: **44.5%** (DeepLearning.AI)
- AA-IFBench: **80.5%** (Artificial Analysis)
- AA-LCR: not reported
- FrontierMath v2 (Tiers 1-3): **64.561%** (Epoch AI)
- FrontierMath v2 (Tier 4): **34.146%** (Epoch AI)

Coding:

- Coding public-lane (BenchLM): **44.1** (Supported · #?/150)
- Terminal-Bench 2.0: **69.7%** (BenchLM)
- SWE-bench Verified: **68.8%** (Vals AI)
- Vibe Code Bench v1.1: **47.67%** (Vals AI)
- SciCode: **53.5%** (BenchLM)
- SWE-bench (Vals): **68.80%** (Vals AI)
- Terminal-Bench 2.1 (Vals): **61.05%** (Vals AI)

Long context:

- 984K window; MRCRv2 **90.4%** (BenchLM); MRCR 1M: not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 66/100.** Agentic lane #65/128 (40.7), Terminal-Bench 2.0 69.7%, QwenClawBench 64.3%, Claw-Eval 65.2%, BFCL 75.0%, MCP Atlas 76.4%, VITA-Bench 47.9%, OSWorld 2.0 2.8%; caps at OSWorld 2.0 2.8%.
- **Reasoning: 76/100.** GPQA 92.4%, MMLU-Pro 89.6%, HLE 41.4%, AA Intelligence 44.5%, MRCRv2 90.4%, CritPt 13.4%, FrontierMath 64.561%; caps at CritPt 13.4%.
- **Context window: 80/100.** 984K window; MRCRv2 90.4%; caps at no published MRCR 1M.
- **Multimodal: 40/100.** Text-only.
- **Coding: 68/100.** SWE-bench 68.8%, Terminal-Bench 2.0 69.7%, SciCode 53.5%, Vibe Code 47.67%, coding lane #?/150; caps at no published SWE-bench Pro.
- **Cost efficiency: 82/100.** Mid $2.50/$7.50 per 1M.
- **Overall Score: 66/100.** Mean of five quality dims (BenchLM 62.57, Vals Index 55.44); best-fit for mid-cost reasoning at mid cost. (Superseded by Qwen3.8 Max.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Alibaba official, BenchLM, Vals AI, DeepLearning.AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Qwen 3.7 Max is superseded by Qwen 3.8 Max (Aug 3, 2026). Text-only. AA Intelligence 44.5% (smartest Chinese LLM per DeepLearning.AI). 35-hour autonomous kernel optimization (1,158 tool calls). Vals Index 55.44%.<|end|>>2><rfl:parameter name="filePath">
E:\qwik\modelcomp\model\qwen-3.7-max\Beam.md