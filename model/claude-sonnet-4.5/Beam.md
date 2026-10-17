# Claude Sonnet 4.5 — findings by Beam

- Source: Anthropic/Claude Sonnet 4.5, `anthropic/claude-sonnet-4-5`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's Sonnet (Sep 29, 2025): strong coding (SWE-bench Verified 77.2%), computer use (OSWorld 61.4%), agent planning. 200K context, 64K output. Superseded by Sonnet 4.6/5/5.5.
- **Provider / access:** Anthropic API `claude-sonnet-4-5`; AWS Bedrock; OpenRouter; Kilo.
- **Release / knowledge:** Released 2025-09-29; knowledge cutoff July 2025.
- **IDs:** `anthropic/claude-sonnet-4-5`
- **Context window:** 200,000 tokens; max output 64,000.
- **Modalities:** text, image, PDF in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $3.00 / 1M input, $15.00 / 1M output, $0.30 / 1M cache read, $3.75 / 1M cache write; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **35.1** (estimated #81/128)
- Terminal-Bench 2.0: **50%**
- OSWorld-Verified: **61.4%**
- VITA-Bench: **17.0%**
- DeepPlanning: not reported
- Toolathlon: **43.5%**
- MCP Atlas: **42.3%**
- JobBench: **27.7%**
- Claw-Eval: not reported
- CyberGym: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **22.9** (unranked, 1 row)
- ARC-AGI-2: **13.6%**
- HLE: not reported
- GPQA: **83.4%**
- MMLU-Pro: not reported
- AA Intelligence Index: not reported

Coding:

- Coding public-lane (BenchLM): not individually reported
- SWE-bench Verified: **77.2%**
- Terminal-Bench 2.0: **50.0%**
- LiveCodeBench: **71.4%** (Kilo/AA)
- SciCode: **45.7%**
- LCR: **72.3%** (Kilo/AA)
- IFBench: **57.3%**
- AA Coding Index: **52.1%**

Long context:

- 200K window; MRCR: not reported.

Multimodal:

- Multimodal: not separately reported (text/image/PDF in).

### Normalized scores (1–100)

- **Tool use: 70/100.** Agentic lane #81/128 (35.1), Terminal-Bench 2.0 50%, OSWorld 61.4%, Toolathlon 43.5%, MCP Atlas 42.3%; caps at VITA-Bench 17.0%.
- **Reasoning: 68/100.** GPQA 83.4%, ARC-AGI-2 13.6%; caps at no published HLE/ARC-AGI-1.
- **Context window: 68/100.** 200K window; caps at no published MRCR.
- **Multimodal: 72/100.** Text/image/PDF in; caps at no verified multimodal benchmarks.
- **Coding: 70/100.** SWE-bench Verified 77.2%, LiveCodeBench 71.4%, SciCode 45.7%, LCR 72.3%, coding lane not reported.
- **Cost efficiency: 78/100.** Mid $3/$15 per 1M.
- **Overall Score: 70/100.** Mean of five quality dims (BenchLM aggregate 47.95); best-fit for mid-tier coding at mid cost (superseded by Sonnet 4.6/5/5.5).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Anthropic docs, BenchLM, Kilo); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.