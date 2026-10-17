# Claude Sonnet 3.7 — findings by Beam

- Source: Anthropic/Claude Sonnet 3.7, `anthropic/claude-sonnet-3.7`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7
- **Short description:** Anthropic's first hybrid reasoning model (Feb 24, 2025): 200K context, 64K output (128K beta), thinking mode. Best-in-class agentic coding at release. Superseded by Sonnet 4/4.5/4.6/5/5.5.
- **Provider / access:** Anthropic API `claude-sonnet-3-7`; AWS Bedrock; OpenRouter; Databricks.
- **Release / knowledge:** Released 2025-02-24; knowledge cutoff October 2024.
- **IDs:** `anthropic/claude-sonnet-3-7`
- **Context window:** 200,000 tokens; max output 64,000 (128K beta).
- **Modalities:** text, image, PDF in; text out; reasoning yes (hybrid thinking); tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $3.00 / 1M input, $15.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported (BenchLM overall 75.4? no, that's different)
- TAU-bench: state-of-the-art at release (Anthropic claim)
- OSWorld: not reported for 3.7

Reasoning / knowledge:

- GPQA Diamond: not individually reported for 3.7 (Sonnet 4.6 79.9%)
- HLE: not reported
- ARC-AGI: not reported
- AA Intelligence Index: not reported

Coding:

- SWE-bench Verified: not reported for 3.7 (Sonnet 4 72.5%+)
- LiveCodeBench: not reported

Long context:

- 200K window; MRCR: not reported.

Multimodal:

- Not separately reported.

### Normalized scores (1–100)

- **Tool use: 68/100.** TAU-bench SOTA at release (Anthropic claim); caps at no published Terminal-Bench/OSWorld.
- **Reasoning: 66/100.** First hybrid reasoning model; caps at no published GPQA/HLE/ARC-AGI.
- **Context window: 64/100.** 200K window; caps at no published MRCR.
- **Multimodal: 70/100.** Text/image/PDF in; caps at no verified multimodal benchmarks.
- **Coding: 68/100.** State-of-the-art coding at release (Anthropic claim); caps at no published SWE-bench.
- **Cost efficiency: 78/100.** Mid $3/$15 per 1M.
- **Overall Score: 67.2/100.** Mean of five quality dims (BenchLM not computed for Sonnet 3.7); best-fit for mid-tier coding at mid cost (superseded by Sonnet 4/4.5/4.6/5/5.5).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Anthropic docs, Simon Willison, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores. No verified public benchmarks for Sonnet 3.7 specifically; scores are provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|><|start|>2>