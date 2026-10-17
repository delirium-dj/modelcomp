# Qwen 3.8 Max — findings by Beam

- Source: Alibaba/Qwen 3.8 Max, `alibaba/qwen-3.8-max`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba's largest flagship (Aug 3, 2026): 2.4T params (95B active), 1M context, multimodal; ranks #5 Text Arena, #2 Vision Arena, #4 Frontend Code Arena. Strong long-horizon autonomous coding (16-day project).
- **Provider / access:** Alibaba Cloud Model Studio `qwen-3.8-max`; QwenWork. Open weights scheduled (released next week per announcement).
- **Release / knowledge:** Released 2026-08-03; knowledge cutoff not stated.
- **IDs:** `alibaba/qwen-3.8-max`
- **Context window:** 1,000,000 tokens; max output 128,000.
- **Modalities:** text, image, video in; text out; reasoning yes; tool calling yes; structured output yes. Open weights (MoE).
- **Pricing (as of 2026-10-17):** $2.00 / 1M input, $6.00 / 1M output; paid.
- **Architecture:** 2.4T total / 95B active, sparse MoE + hybrid attention.

### Raw benchmarks found

Agent / tool use:

- Vals Index: **48.27%** (#35/49)
- Terminal-Bench 4.0: **34.34%**
- Terminal-Bench 2.1: not individually reported for Max (58.43% for 27B)
- Vibe Code Bench v1.1: **64.70%**
- SWE-bench: **85.60%**
- SWE-bench Multimodal: **42.50%**
- LiveCodeBench: **87.85%**
- IOI: **68.89%**
- Agentic lane (BenchLM): not individually reported (BenchLM overall 69.65)

Reasoning / knowledge:

- GPQA Diamond: **93.69%**
- MMLU-Pro: **88.60%**
- MMLU Pro (Vals): **88.60%**
- LiveCodeBench: **87.85%**
- ARC-AGI / HLE: not individually reported
- AA Intelligence Index: not reported

Coding:

- SWE-bench: **85.60%**
- LiveCodeBench: **87.85%**
- Vibe Code Bench v1.1: **64.70%**
- Vibe Code Bench 1-100: **12.83%**
- IOI: **68.89%**
- Coding lane (BenchLM): not individually reported

Long context:

- 1M window; MRCR: not reported.

Multimodal:

- MMMU-Pro: **88.03%**
- Vision Arena: #2 globally
- Text Arena: #5
- Frontend Code Arena: #4

### Normalized scores (1–100)

- **Tool use: 70/100.** Vals Index 48.27%, Terminal-Bench 4.0 34.34%, Vibe Code 64.70%; caps at unverified agentic benchmarks (Arena text #5).
- **Reasoning: 84/100.** GPQA 93.69%, MMLU-Pro 88.60%, LiveCodeBench 87.85%; caps at no published HLE/ARC-AGI.
- **Context window: 88/100.** 1M window; caps at no published MRCR retrieval.
- **Multimodal: 88/100.** Text/image/video in; MMMU-Pro 88.03%, Vision Arena #2.
- **Coding: 78/100.** SWE-bench 85.60%, LiveCodeBench 87.85%, Vibe Code 64.70%; caps at Vibe Code 1-100 12.83%.
- **Cost efficiency: 80/100.** Mid-tier $2/$6 per 1M.
- **Overall Score: 82/100.** Mean of five quality dims (BenchLM aggregate 69.65); best-fit for long-horizon autonomous coding + multimodal at mid cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Alibaba announcement, Vals AI, Arena, Daily Star, RTHK); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.