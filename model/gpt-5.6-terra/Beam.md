# GPT-5.6 Terra — findings by Beam

- Source: OpenAI/GPT-5.6 Terra, `openai/gpt-5.6-terra`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's balanced tier in GPT-5.6 family (Jul 9, 2026): 1.05M context, strong instruction following, multimodal at mid cost. Slightly beats Claude Opus 4.8 overall (70.19 vs 69.99).
- **Provider / access:** OpenAI API `gpt-5.6-terra`; Azure; AWS Bedrock.
- **Release / knowledge:** Released 2026-07-09; knowledge cutoff not stated.
- **IDs:** `openai/gpt-5.6-terra`
- **Context window:** 1,050,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $2.00 / 1M input, $12.00 / 1M output; paid.
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **60.4** (#26/128)
- Terminal-Bench 2.1: **87.4%**
- Terminal-Bench 3.0: **20.8%**
- BrowseComp: **87.5%**
- OSWorld 2.0: **50.2%**
- OSWorld-Verified: not reported for Terra (83% for 3.6 Flash)
- Toolathlon: **53.1%**
- CyberGym: **81.8%**
- ExploitGym: not reported for Terra
- JobBench: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **69.1** (#22/28)
- ARC-AGI-1: **96.50%**
- ARC-AGI-2: **83.9%**
- ARC-AGI-3: **0.8%**
- FrontierMath v2 (Tiers 1-3): **84.900%**
- FrontierMath v2 (Tier 4): **68.300%**
- HLE: not reported for Terra
- GPQA: not reported for Terra
- CritPt: not reported

Coding:

- Coding public-lane (BenchLM): **61.9** (#15/150)
- SWE-bench Pro: **63.4%**
- DeepSWE: **69.6%**
- Terminal-Bench 2.1: **87.4%**
- LiveCodeBench: not reported
- SWE-bench Verified: not reported

Long context:

- 1.05M window; MRCR: not reported.

Multimodal:

- Multimodal public-lane (BenchLM): **84.5** (#11/54)
- MMMU-Pro: **80.7%**
- MMMU-Pro w/ Python: **82%**

### Normalized scores (1–100)

- **Tool use: 78/100.** Agentic lane #26/128 (60.4), Terminal-Bench 2.1 87.4%, BrowseComp 87.5%, OSWorld 2.0 50.2%, CyberGym 81.8%; caps at Terminal-Bench 3.0 20.8%.
- **Reasoning: 84/100.** ARC-AGI-1 96.5%, ARC-AGI-2 83.9%, FrontierMath Tier4 68.3%, reasoning lane #22/28 (69.1); caps at ARC-AGI-3 0.8%.
- **Context window: 86/100.** 1.05M window; caps at no published MRCR retrieval.
- **Multimodal: 84/100.** Text/image in; MMMU-Pro 80.7%, MMMU-Pro w/ Python 82%.
- **Coding: 76/100.** SWE-bench Pro 63.4%, DeepSWE 69.6%, Terminal-Bench 2.1 87.4%, coding lane #15/150 (61.9); caps at no SWE-bench Verified.
- **Cost efficiency: 85/100.** Mid-low $2/$12 per 1M.
- **Overall Score: 82/100.** Mean of five quality dims (BenchLM aggregate 70.19); best-fit for balanced daily work at mid cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (BenchLM, Tech Insider, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.