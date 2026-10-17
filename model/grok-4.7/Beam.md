# Grok 4.7 — findings by Beam

- Source: xAI/Grok 4.7, `xai/grok-4-7`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's model (Sep 21, 2026) with new larger base, longer RL on harder multi-hour tasks; stronger self-verification, long context management. Same price/speed as 4.6. DeepSWE 71.0% (xhigh).
- **Provider / access:** xAI API `grok-4.7`; AWS Bedrock `xai.grok-4.7`; OpenRouter.
- **Release / knowledge:** Released 2026-09-21; knowledge cutoff not stated (4.6: Feb 2026).
- **IDs:** `xai/grok-4-7`
- **Context window:** 500,000 tokens; max output 500,000.
- **Modalities:** text, image, PDF in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $2.00 / 1M input, $6.00 / 1M output, $0.50 / 1M cached; paid.
- **Architecture:** New larger base (vs 4.6); params undisclosed; proprietary.

### Raw benchmarks found

Agent / tool use:

- Agentic: not separately reported (BenchLM overall not computed)
- Terminal-Bench 4.0: **38.00%** (Vals 28.79%)
- Terminal-Bench 2.1 (Vals): **73.4%**
- APEX-Agents: not reported for 4.7
- GDPval-AA: **60.6%** (AA)
- AA Briefcase: **1657**
- Harvey Legal Agent Benchmark: **19.6%** (Vals 12.50%)
- OSWorld: not reported
- BrowseComp: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **78.5** (#15/28)
- AA Intelligence Index: **46.5**
- AA-HLE: **43.1%**
- AA-Omniscience Index: **32.0**
- AA-Omniscience Accuracy: **47.4%**
- AA-Omniscience Hallucination Rate: **29.3%**
- FrontierMath v2 (Tiers 1-3): **52.982%**
- FrontierMath v2 (Tier 4): **17.073%**
- ARC-AGI: not reported
- GPQA: not reported

Coding:

- Coding: not separately reported (BenchLM not computed)
- DeepSWE: **71.0%**
- CursorBench 4.0: **46.3%**
- EEBench: **64.0%**
- AA-SciCode: **57.4%**
- FrontierSWE v2: **29.5%**
- Vibe Code Bench v1.1: **86.17%** (Vals)
- Bug Hunt Bench: **28.8 fixes**

Long context:

- 500K window; MRCR: not reported.

Multimodal:

- Multimodal: not separately reported (text/image/PDF in).

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 4.0 38.0%, Terminal-Bench 2.1 Vals 73.4%, GDPval 60.6%, Harvey 19.6%, AA Briefcase 1657; caps at no published agentic benchmarks.
- **Reasoning: 76/100.** AA Intelligence 46.5, AA-HLE 43.1%, FrontierMath Tier4 17.073%, reasoning lane #15/28 (78.5); caps at no published ARC-AGI/GPQA.
- **Context window: 72/100.** 500K window; caps at no published MRCR.
- **Multimodal: 74/100.** Text/image/PDF in; caps at no verified multimodal benchmarks.
- **Coding: 78/100.** DeepSWE 71.0%, CursorBench 4.0 46.3%, EEBench 64.0%, Vibe Code 86.17%, coding not separately reported.
- **Cost efficiency: 88/100.** Cheap $2/$6 per 1M.
- **Overall Score: 75.2/100.** Mean of five quality dims (Vals Index 54.95%); best-fit for agentic coding at low cost (newer than 4.6).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (xAI news, AWS Bedrock, BenchLM, Vals AI, Winzheng); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.