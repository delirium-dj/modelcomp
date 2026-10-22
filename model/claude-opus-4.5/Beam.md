# Claude Opus 4.5 — findings by Beam

- Source: Anthropic/Claude Opus 4.5, `anthropic/claude-opus-4.5`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's flagship (Nov 24, 2025): 200K context, 64K output. BenchLM 54.04 (#77 of 954). SWE-bench Verified 80.9%. Terminal-Bench 2.0 59.3%. OSWorld-Verified 66.3%. GPQA Diamond 87% (Anthropic). AA Intelligence Index 23.7 (non-reasoning, measured). $5.00/$25.00 per 1M.
- **Provider / access:** Anthropic API `claude-opus-4-5`; AWS Bedrock; OpenRouter.
- **Release / knowledge:** Released 2025-11-24; knowledge cutoff Aug 2025 (per Artificial Analysis).
- **IDs:** `anthropic/claude-opus-4-5`
- **Context window:** 200,000 tokens; max output 64,000.
- **Modalities:** text, image, PDF in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-22):** $5.00 / 1M input, $25.00 / 1M output; cache read 90% discount; paid.
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
- HLE: **30.8%** (measured, no tools) / **50.0%** (estimated, with tools)
- AA Intelligence Index: **23.7** (measured, non-reasoning)
- ARC-AGI-2: **33.6%** (estimated)
- FrontierMath v2 (Tiers 1-3): **34.4%** (measured)
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

- 200K window; LongBench v2 **64.4%** (BenchLM); AI-Needle **74%** (BenchLM); MRCRv2 **76.6%** (estimated).

Multimodal:

- Multimodal public-lane (BenchLM): **51.1** (Estimated · #77/184)
- MMMU: **80.7%** (measured); CharXiv: **68.5%** (measured); AA-MMMU-Pro: **71.2%** (measured)

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.0 59.3%, OSWorld 66.3%, τ²-bench 86.3%, τ³-bench 70.2%, WideResearch 76.4%, Toolathlon 43.5%, Claw-Eval 59.6%; caps at VITA-Bench 23.3%, DeepPlanning 26.4%.
- **Reasoning: 72/100.** GPQA 87%, MMLU-Pro 89.5%, HLE 30.8/50.0, ARC-AGI-2 33.6%, FrontierMath 34.4%, AA Intelligence 23.7; caps at no published SOTA.
- **Context window: 66/100.** 200K window; LongBench v2 64.4%, AI-Needle 74%, MRCRv2 76.6%; caps at no published MRCR official.
- **Multimodal: 68/100.** Text/image/PDF in; MMMU 80.7%, CharXiv 68.5%, AA-MMMU-Pro 71.2%, MMMLU 85.4%; caps at no audio.
- **Coding: 68/100.** SWE-bench Verified 80.9%, LiveCodeBench 84.8%, SWE-bench Pro 57.1%, Terminal-Bench 2.0 59.3%, CursorBench 3.2 53.9%; caps at DeepSWE 40.7%, FrontierSWE 10.0%.
- **Cost efficiency: 78/100.** Expensive $5.00/$25.00 per 1M (cache 90% off).
- **Overall Score: 68.8/100.** Mean of five quality dims; best-fit for premium coding/reasoning at high cost. (Superseded by Opus 4.6/4.7/4.8/5/5.5.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (Anthropic official, Artificial Analysis, BenchLM/benchgap, AWS Bedrock, pricepertoken); scores are normalized 1–100 interpretations, not official vendor scores. New measured data added from benchgap (2026-10-21) and Artificial Analysis; knowledge cutoff corrected to Aug 2025.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Claude Opus 4.5 is superseded by Opus 4.6 (Feb 5, 2026), 4.7, 4.8, 5, 5.5. Knowledge cutoff Aug 2025. $5/$25 per 1M.<|end|>>2>