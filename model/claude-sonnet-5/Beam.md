# Claude Sonnet 5 — findings by Beam

- Source: Anthropic/Claude Sonnet 5, `anthropic/claude-sonnet-5`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's most agentic Sonnet (Jun 30, 2026): plans, uses tools (browsers/terminals), runs autonomously at levels previously requiring larger models. Default for Free/Pro plans. $2/$10 per 1M.
- **Provider / access:** Anthropic API `claude-sonnet-5`; AWS Bedrock; OpenRouter; Puter.
- **Release / knowledge:** Released 2026-06-30; knowledge cutoff January 2026.
- **IDs:** `anthropic/claude-sonnet-5`
- **Context window:** 1,000,000 tokens; max output 128,000.
- **Modalities:** text, image, PDF in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $2.00 / 1M input, $10.00 / 1M output; paid. (Introductory $3/$15 through Aug 31, 2026; standard $2/$10.)
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **66.3** (#15/128)
- Terminal-Bench 2.1: **80.4%**
- Terminal-Bench 2.1 (Vals): **74.5%**
- Terminal-Bench 3.0: **14.6%**
- BrowseComp: **84.7%**
- HLE w/ tools: **57.4%**
- OSWorld-Verified: **81.2%**
- ApprenticeBench: **16%**
- MazeBench: **0%**
- OSWorld 2.0: not reported for Sonnet 5 (8.3% for Sonnet 4.6)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **82.2** (unranked, 2 rows)
- FrontierMath v2 (Tiers 1-3): **65.614%**
- FrontierMath v2 (Tier 4): **29.268%**
- HLE: not reported (HLE w/tools 57.4%)
- ARC-AGI: not reported for Sonnet 5
- GPQA Diamond: **91.1%** (Puter/AA)
- HLE: **41.3%** (Puter/AA)
- SciCode: **54.3%** (Puter/AA)
- LCR: **82.0%** (Puter/AA)
- AA Intelligence Index: **38.2** (Puter/AA)

Coding:

- Coding public-lane (BenchLM): **57.5** (#25/150)
- SWE-bench Verified: **85.2%**
- SWE-bench Pro: **63.2%**
- LiveCodeBench (Vals): **82.4%**
- SWE-bench (Vals): **79.6%**
- SWE Multilingual: **78.3%**
- SWE Multimodal: **28.1%**
- Vibe Code Bench: **48.68%** (Puter? no, 4.6 51.48)
- FrontierCode 1.1 Main: **42.7%**
- VulcanBench CII v1: **89.2%**
- CursorBench 4.0: **34.1%**

Long context:

- 1M window; MRCR: not reported.

Multimodal:

- Multimodal public-lane (BenchLM): **82** (#15/54)
- CharXiv: **88.3%**
- CharXiv w/o tools: **77%**

### Normalized scores (1–100)

- **Tool use: 80/100.** Agentic lane #15/128 (66.3), Terminal-Bench 2.1 80.4%, BrowseComp 84.7%, OSWorld 81.2%, HLE w/tools 57.4%; caps at Terminal-Bench 3.0 14.6%.
- **Reasoning: 80/100.** AA Intelligence 38.2, GPQA 91.1%, HLE 41.3%, FrontierMath Tier4 29.268%, LCR 82.0%; caps at no published ARC-AGI.
- **Context window: 82/100.** 1M window; caps at no published MRCR retrieval.
- **Multimodal: 84/100.** Text/image/PDF in; CharXiv 88.3%, CharXiv w/o tools 77%.
- **Coding: 78/100.** SWE-bench Verified 85.2%, SWE-bench Pro 63.2%, LiveCodeBench Vals 82.4%, coding lane #25/150 (57.5); caps at SWE Multimodal 28.1%.
- **Cost efficiency: 88/100.** Good value $2/$10 per 1M.
- **Overall Score: 80.8/100.** Mean of five quality dims (BenchLM aggregate 64.83); best-fit for agentic coding at low cost (superseded by Sonnet 5.5).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Anthropic news/system card, Puter, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.