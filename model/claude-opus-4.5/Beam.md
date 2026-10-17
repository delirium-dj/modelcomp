# Claude Opus 4.5 — findings by Beam

- Source: Anthropic/Claude Opus 4.5, `anthropic/claude-opus-4.5`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's flagship (Nov 24, 2025): 200K context, 64K output. BenchLM 54.04 (#77 of 954). SWE-bench Verified 80.9%. Terminal-Bench 2.0 59.3%. OSWorld-Verified 66.3%. GPQA Diamond 87% (Anthropic). $5.00/$25.00 per 1M.
- **Provider / access:** Anthropic API `claude-opus-4-5`; AWS Bedrock; OpenRouter.
- **Release / knowledge:** Released 2025-11-24; knowledge cutoff Mar 2025.
- **IDs:** `anthropic/claude-opus-4-5`
- **Context window:** 200,000 tokens; max output 64,000.
- **Modalities:** text, image, PDF in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $5.00 / 1M input, $25.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **32.3** (Estimated · #89/128)
- Terminal-Bench 2.0: **59.3%** (Anthropic system card)
- OSWorld-Verified: **66.3%** (Anthropic system card)
- OSWorld: **66.3%** (Anthropic system card)
- Claw-Eval: **59.6%** (Qwen3.6-Plus comparison)
- QwenClawBench: **52.3%** (Qwen3.6-Plus comparison)
- τ³-bench: **70.2%** (Qwen3.6-Plus comparison)
- VITA-Bench: **23.3%** (BenchLM)
- DeepPlanning: **26.4%** (BenchLM)
- Toolathlon: **43.5%** (BenchLM)
- BrowseComp: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **78.3** (Unranked · 4 rankable rows)
- GPQA: **87%** (Anthropic)
- HLE: not reported
- MMLU-Pro: **89.5%** (Anthropic, via BenchLM comparison)
- ARC-AGI-2: not reported for 4.5
- AA Intelligence Index: not reported
- LongBench v2: **64.4%** (BenchLM)
- AI-Needle: **74%** (BenchLM)

Coding:

- Coding public-lane (BenchLM): **40.3** (Estimated · #64/150)
- SWE-bench Verified: **80.9%** (Anthropic)
- LiveCodeBench v6: **84.8%** (BenchLM)
- SWE-bench Pro: not reported
- Terminal-Bench 2.0: **59.3%** (Anthropic)

Long context:

- 200K window; LongBench v2 **64.4%** (BenchLM); AI-Needle **74%** (BenchLM); MRCR not reported.

Multimodal:

- Multimodal public-lane (BenchLM): **51.1** (Estimated · #77/184)
- Text/image/PDF in; no verified multimodal benchmarks from sources.

### Normalized scores (1–100)

- **Tool use: 68/100.** Agentic lane #89/128 (32.3), Terminal-Bench 2.0 59.3%, OSWorld 66.3%, τ³-bench 70.2%, VITA-Bench 23.3%, DeepPlanning 26.4%, Toolathlon 43.5%; caps at VITA-Bench 23.3%.
- **Reasoning: 70/100.** GPQA 87%, MMLU-Pro 89.5%, LongBench v2 64.4%, AI-Needle 74%; caps at no published HLE/AA Intelligence.
- **Context window: 64/100.** 200K window; LongBench v2 64.4%, AI-Needle 74%; caps at no published MRCR.
- **Multimodal: 66/100.** Text/image/PDF in; caps at no verified multimodal benchmarks.
- **Coding: 66/100.** SWE-bench 80.9%, LiveCodeBench 84.8%, Terminal-Bench 2.0 59.3%, coding lane #64/150 (40.3); caps at no published SWE-bench Pro/SciCode.
- **Cost efficiency: 78/100.** Expensive $5.00/$25.00 per 1M.
- **Overall Score: 66.8/100.** Mean of five quality dims (BenchLM 54.04); best-fit for premium coding at high cost. (Superseded by Opus 4.6/4.7/4.8/5/5.5.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Anthropic official, BenchLM, AWS Bedrock, pricepertoken); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Claude Opus 4.5 is superseded by Opus 4.6 (Feb 5, 2026), 4.7, 4.8, 5, 5.5. Knowledge cutoff Mar 2025. $5/$25 per 1M.<|end|>>2>