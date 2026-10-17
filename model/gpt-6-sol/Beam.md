# GPT-6 Sol — findings by Beam

- Source: OpenAI/GPT-6 Sol, `openai/gpt-6-sol`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's balanced tier in GPT-6 family (Sep 22, 2026): demanding development work, multi-step tools/apps, 1.05M context. Better than GPT-5.6 Sol; FrontierCode 1.1 Main comparable to Fable 5.1 at lower cost.
- **Provider / access:** OpenAI API `gpt-6-sol`; AWS Bedrock `openai.gpt-6-sol`; Azure.
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff April 20, 2026.
- **IDs:** `openai/gpt-6-sol`
- **Context window:** 1,050,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $2.00 / 1M input, $10.00 / 1M output; paid.
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **58.2** (#34/128)
- Terminal-Bench 2.1: not reported for 6 Sol (GPT-5.6 Sol 91.9%)
- OSWorld 2.0: **60.5%**
- AutomationBench: **33.2%** (xhigh effort)
- CyberBench v1.1: **77.98%**
- ExploitGym: **22.1%**
- Hermes Index: **44.1%**
- Hermes Bench: **73.5%**
- MazeBench: **7%**
- Gray Swan IPI (15 attempts): **10.1%**

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **73.1** (#18/28)
- ARC-AGI-1: **95.50%**
- ARC-AGI-2: **89.6%**
- ARC-AGI-3: **4.6%**
- FrontierMath v2 (Tiers 1-3): not reported
- FrontierMath v2 (Tier 4): **90.000%**
- GPQA: not reported
- HLE: not reported
- STEMBench: not reported

Coding:

- Coding public-lane (BenchLM): **66.4** (#12/150)
- DeepSWE: **68.8%**
- FrontierCode 1.1 Main: comparable to Fable 5.1 at lower cost
- SWE-bench Pro: not reported
- LiveCodeBench: not reported
- Vibe Code Bench v1.1: **87.82%**
- Bug Hunt Bench: not reported

Long context:

- 1.05M window; MRCR: not reported.

Multimodal:

- Multimodal public-lane (BenchLM): **86.6** (unranked, 1 row)
- HealthBench (raw): **47.1%**
- HealthBench (length-adjusted): **53.2%**
- HealthBench Professional: **60.8%**
- MMMU-Pro: not reported

### Normalized scores (1–100)

- **Tool use: 78/100.** Agentic lane #34/128 (58.2), OSWorld 2.0 60.5%, AutomationBench 33.2%, CyberBench 77.98%; caps at MazeBench 7%.
- **Reasoning: 84/100.** ARC-AGI-1 95.5%, ARC-AGI-2 89.6%, FrontierMath Tier4 90.0%; caps at ARC-AGI-3 4.6%.
- **Context window: 86/100.** 1.05M window; caps at no published MRCR retrieval.
- **Multimodal: 82/100.** Text/image in; HealthBench 47.1-60.8%; multimodal lane 86.6.
- **Coding: 76/100.** DeepSWE 68.8%, coding lane #12/150 (66.4), Vibe Code 87.82%; caps at no SWE-bench Pro.
- **Cost efficiency: 85/100.** Mid-low $2/$10 per 1M.
- **Overall Score: 81/100.** Mean of five quality dims (BenchLM aggregate 78.46); best-fit for agentic coding at mid cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (OpenAI announcement, BenchLM, Vals AI, Propakistani, Kilo); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|>