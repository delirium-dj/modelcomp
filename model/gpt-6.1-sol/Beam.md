# GPT-6.1 Sol — findings by Beam

- Source: OpenAI/GPT-6.1 Sol, `openai/gpt-6.1-sol`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's upgraded Sol (Sep 29, 2026): nearly matches GPT-6 Astra on agentic coding, computer use, and professional work at ~1/5 of Astra's price. Big gains over GPT-6 Sol on DeepSWE, GDP.pdf, AutomationBench, OSWorld 2.0, Terminal-Bench Science.
- **Provider / access:** OpenAI API `gpt-6.1-sol` (Chat/Responses, reasoning low..max, default medium); Azure; AWS Bedrock.
- **Release / knowledge:** Released 2026-09-29; knowledge cutoff April 30, 2026.
- **IDs:** `openai/gpt-6.1-sol`
- **Context window:** 1,050,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes; search grounding.
- **Pricing (as of 2026-10-17):** $2.00 / 1M input, $10.00 / 1M output, $0.10 / 1M cached input; paid.
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **76.2** (estimated #5/128)
- AutomationBench: **36.1%**
- Terminal-Bench Science 0.1: **57.0%**
- OSWorld 2.0 (offline): outperforms GPT-6 Sol by 7pp at max effort
- Failure to disclose broken search tool (max): **2.10%**
- Reviewer bypass attempts (max): **0.00%**
- Warning circumvention (max): **23.48%**
- GDP.pdf: scores higher than Opus 5.5 with fallbacks at < half cost

Reasoning / knowledge:

- ARC-AGI-1: **96.50%**; ARC-AGI-2: **94.2%**; ARC-AGI-3: **52.7%**
- STEMBench: **2.76**
- FrontierMath v2 (Tiers 1-3): **93.684%**; Tier 4: **100.000%**
- GPQA: no individually reported figure (knowledge lane 85.9)
- AA Intelligence Index v4.3.2: **52** (GIGAZINE, +4 over GPT-6 Sol, within 1 of Astra)

Coding:

- Coding public-lane (BenchLM): **70.9** (#8/150)
- DeepSWE: **71.9%**
- Bug Hunt Bench: **44.3 fixes**
- SWE-bench Verified/Pro: no verified public score found (coming soon)

Long context:

- 1.05M window; MRCR: no verified public score found.

Multimodal:

- HealthBench (raw): **56.7%**; (length-adjusted): **58.5%**
- Multimodal lane (BenchLM): **87.3** (unranked, 1 row)

### Normalized scores (1–100)

- **Tool use: 86/100.** Agentic lane #5/128 (76.2), AutomationBench 36.1%, Terminal-Bench Science 57.0%, OSWorld 2.0 +7pp; caps at broken-search disclosure 2.1%.
- **Reasoning: 93/100.** ARC-AGI-1 96.5%, ARC-AGI-2 94.2%, ARC-AGI-3 52.7%, STEMBench 2.76, FrontierMath Tier4 100%, AA Intelligence 52; reasoning lane #2/28 (90.5).
- **Context window: 90/100.** 1.05M window; caps at no published MRCR retrieval.
- **Multimodal: 85/100.** Text/image in, text out; HealthBench 56.7%; multimodal lane 87.3.
- **Coding: 84/100.** DeepSWE 71.9%, coding lane #8/150 (70.9), Bug Hunt 44.3 fixes; caps at unverified SWE-bench.
- **Cost efficiency: 85/100.** Good value $2/$10 per 1M with Astra-class capability.
- **Overall Score: 88/100.** Mean of five quality dims (BenchLM aggregate 84.06); best-fit for high-capability agentic + reasoning at mid cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (OpenAI announcement, BenchLM, GIGAZINE, ReconScribe); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.