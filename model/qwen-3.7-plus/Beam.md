# Qwen 3.7 Plus — findings by Beam

- Source: Alibaba/Qwen 3.7 Plus, `alibaba/qwen-3.7-plus`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's cost-effective Qwen 3.7 model (Jun 3, 2026): 1M context, multimodal (text+image), reasoning. Vals Index #13 (52.33%). Strong on screen understanding/GUI grounding (ScreenSpot Pro 79.0, AndroidWorld 81.0).
- **Provider / access:** Alibaba Cloud Model Studio `qwen-3.7-plus`; OpenRouter.
- **Release / knowledge:** Released 2026-06-03; knowledge cutoff not stated.
- **IDs:** `alibaba/qwen-3.7-plus`
- **Context window:** 1,000,000 tokens; max output 65,536 (Vals) / 131,072 (LM Market Cap).
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $0.40 / 1M input, $1.60 / 1M output; paid. (Artificial Analysis blended $0.30.)
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **35.1** (#80/128)
- Terminal-Bench 2.0: **70.3%**
- QwenClawBench: **61.8%**
- QwenWebBench: **1536**
- Claw-Eval: **62.7%**
- BFCL v4: **72.9%**
- MCP Atlas: **73.2%**
- VITA-Bench: **45.6%**
- DeepPlanning: **62.3%**
- OSWorld-Verified: **73.3%**
- τ²-bench: **97.7%**
- Vals Index: **52.33%** (#13/43)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **80.9** (unranked, 3 rows)
- MRCRv2: **91.7%**
- CritPt: **9.1%**
- GPQA: **90.3%**
- GPQA-D: **90.3%**
- MRCR v2 128K: **91.7%**
- HMMT Feb 2026: **92.9%**
- IMOAnswerBench: **86.0%**
- Apex: **22.7%**
- FrontierMath v2 (Tiers 1-3): **34.386%**
- SuperGPQA: **71.4%**
- HLE: not reported
- ARC-AGI: not reported

Coding:

- Coding public-lane (BenchLM): **40.3** (estimated #65/150)
- SWE-bench Pro: **57.6%**
- SciCode: **51.3%**
- Terminal-Bench 2.0: **70.3%**
- LiveCodeBench: not reported

Long context:

- 1M window; MRCRv2 91.7% (128K).

Multimodal:

- Multimodal public-lane (BenchLM): **53.6** (estimated #65/184)
- ScreenSpot Pro: **79.0**
- AndroidWorld: **81.0**
- MRCR v2 128K: **91.7%**

### Normalized scores (1–100)

- **Tool use: 76/100.** Agentic lane #80/128 (35.1), Terminal-Bench 2.0 70.3%, MCP Atlas 73.2%, BFCL v4 72.9%, OSWorld 73.3%, VITA-Bench 45.6%; caps at DeepPlanning 62.3%.
- **Reasoning: 80/100.** MRCRv2 91.7%, GPQA 90.3%, HMMT 92.9%, reasoning lane 80.9 (3 rows); caps at CritPt 9.1% and Apex 22.7%.
- **Context window: 88/100.** 1M window; MRCRv2 91.7% at 128K.
- **Multimodal: 82/100.** Text/image in; ScreenSpot Pro 79.0, AndroidWorld 81.0.
- **Coding: 72/100.** SWE-bench Pro 57.6%, SciCode 51.3%, Terminal-Bench 2.0 70.3%, coding lane #65/150 (40.3).
- **Cost efficiency: 92/100.** Cheap $0.40/$1.60 per 1M.
- **Overall Score: 80/100.** Mean of five quality dims (BenchLM aggregate 53.75); best-fit for screen-understanding agents at low cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Alibaba Cloud, BenchLM, Vals AI, MLQ News, LM Market Cap, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.