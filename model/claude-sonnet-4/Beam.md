# Claude Sonnet 4 — findings by Beam

- Source: Anthropic/Claude Sonnet 4, `anthropic/claude-sonnet-4`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's Sonnet (May 22, 2025): improved coding over 3.7, hybrid reasoning, 200K context, 64K output. Superseded by Sonnet 4.5/4.6/5/5.5.
- **Provider / access:** Anthropic API `claude-sonnet-4`; AWS Bedrock; OpenRouter; Databricks.
- **Release / knowledge:** Released 2025-05-22; knowledge cutoff March 2025.
- **IDs:** `anthropic/claude-sonnet-4`
- **Context window:** 200,000 tokens; max output 64,000.
- **Modalities:** text, image, PDF in; text out; reasoning yes (hybrid); tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $3.00 / 1M input, $15.00 / 1M output, $0.30 / 1M cache read, $3.75 / 1M cache write; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported (BenchLM overall 75.7? no, that's different)
- Terminal-Bench 2.0: not reported for Sonnet 4
- OSWorld-Verified: not reported for Sonnet 4 (72.1% for 4.6)
- OSWorld 2.0: not reported

Reasoning / knowledge:

- GPQA Diamond: **79.6%** (Puter/AA for Sonnet 4.6; Sonnet 4 not reported)
- HLE: not reported
- ARC-AGI: not reported
- AA Intelligence Index: not reported

Coding:

- SWE-bench Verified: **79.6%** (Sonnet 4.6; Sonnet 4 not separately reported)
- LiveCodeBench: not reported for Sonnet 4

Long context:

- 200K window; MRCR: not reported.

Multimodal:

- Not separately reported.

### Normalized scores (1–100)

- **Tool use: 70/100.** No verified agentic benchmarks for Sonnet 4 specifically; caps pending verification.
- **Reasoning: 70/100.** No verified reasoning benchmarks; caps pending verification.
- **Context window: 68/100.** 200K window; caps at no published MRCR.
- **Multimodal: 72/100.** Text/image/PDF in; caps at no verified multimodal benchmarks.
- **Coding: 72/100.** No verified coding benchmarks for Sonnet 4 specifically; caps pending verification.
- **Cost efficiency: 78/100.** Mid $3/$15 per 1M.
- **Overall Score: 70.4/100.** Mean of five quality dims (BenchLM not computed for Sonnet 4); best-fit for mid-tier coding at mid cost (superseded by 4.5/4.6/5/5.5).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Anthropic docs, BenchLM, Puter); scores are normalized 1–100 interpretations, not official vendor scores. No verified public benchmarks for Sonnet 4 specifically; scores are provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|><|start|>2>