# Claude Sonnet 3.5 — findings by Beam

- Source: Anthropic/Claude Sonnet 3.5, `anthropic/claude-sonnet-3.5`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.5
- **Short description:** Anthropic's model (Oct 22, 2024): 200K context, 8K output. Vals Index 65.07%. GPQA Diamond 59.34% (Vals). SWE-bench not separately reported for 3.5. Superseded by Sonnet 3.7/4/4.5/4.6/5/5.5.
- **Provider / access:** Anthropic API `claude-sonnet-3-5`; AWS Bedrock; OpenRouter.
- **Release / knowledge:** Released 2024-10-22; knowledge cutoff not stated.
- **IDs:** `anthropic/claude-sonnet-3-5`
- **Context window:** 200,000 tokens; max output 8,192.
- **Modalities:** text, image, PDF in; text out; reasoning no; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $3.00 / 1M input, $15.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported (BenchLM overall 27.72)
- TAU-bench: not reported for 3.5
- OSWorld: not reported for 3.5

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- GPQA Diamond (Vals): **59.34%** (Vals AI)
- MMLU Pro (Vals): **78.40%** (Vals AI)
- HLE: not reported
- ARC-AGI: not reported
- AA Intelligence Index: not reported

Coding:

- Coding public-lane (BenchLM): not individually reported
- SWE-bench Verified: not reported for 3.5 (64% agentic coding success per Anthropic internal tests)
- LiveCodeBench (Vals): **49.63%** (Vals AI)
- Vals Index: **65.07%** (Vals AI)

Long context:

- 200K window; MRCR: not reported.

Multimodal:

- Text/image/PDF in; MMMU Pro (Vals) **68.80%** (Vals AI).

### Normalized scores (1–100)

- **Tool use: 62/100.** 64% agentic coding success (Anthropic internal); caps at no published Terminal-Bench/OSWorld.
- **Reasoning: 62/100.** GPQA 59.34%, MMLU Pro 78.40%; caps at no published HLE/ARC-AGI.
- **Context window: 62/100.** 200K window; caps at no published MRCR.
- **Multimodal: 68/100.** Text/image/PDF in; MMMU Pro 68.80%.
- **Coding: 62/100.** 64% agentic coding (Anthropic internal), LiveCodeBench 49.63%; caps at no published SWE-bench.
- **Cost efficiency: 78/100.** Mid $3/$15 per 1M.
- **Overall Score: 63.2/100.** Mean of five quality dims (BenchLM 27.72, Vals Index 65.07); best-fit for mid-tier coding at mid cost (superseded by 3.7/4/4.5/4.6/5/5.5).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Anthropic docs, Vals AI, BenchLM, pricepertoken); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|>>