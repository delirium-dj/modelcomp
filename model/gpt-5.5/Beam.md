# GPT-5.5 — findings by Beam

- Source: OpenAI/GPT-5.5, `openai/gpt-5.5`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's fully retrained base model (Apr 23, 2026) for real work: agentic coding, complex knowledge tasks, computer use, scientific research. Strong conceptual clarity; SOTA on Terminal-Bench 2.0, Expert-SWE, GDPval, Tau2-bench Telecom.
- **Provider / access:** OpenAI API `gpt-5.5` (ChatGPT Plus/Pro/Business/Enterprise; API Apr 24, 2026); Azure.
- **Release / knowledge:** Released 2026-04-23; knowledge cutoff not stated.
- **IDs:** `openai/gpt-5.5`
- **Context window:** 1,000,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $5.00 / 1M input, $30.00 / 1M output; paid.
- **Architecture:** proprietary; params undisclosed (fully retrained base).

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **62.7** (#23/128)
- Terminal-Bench 2.0: **82.7%**
- Expert-SWE (internal): **73.1%**
- GDPval (wins or ties): **84.9%**
- Tau2-bench Telecom: **98.0%**
- OSWorld: **78.7%**
- FinanceAgent: **60.0%**
- OfficeQA Pro: **54.1%**
- Internal investment-banking modeling: **88.5%**
- CyberGym: **81.8%**
- BrowseComp: **84.4%**

Reasoning / knowledge:

- HLE: **52.2%** (OpenAI) / 52.1% (Vals)
- FrontierMath v2 (Tier 4): **72.500%**
- ARC-AGI-1: **95.00%**
- ARC-AGI-2: **85%**
- ARC-AGI-3: **0.4%**
- GPQA: **93.6%**
- MRCR v2 64K-128K: **83.1%**
- MRCR v2 128K-256K: **87.5%**
- HLE w/o tools: **39.8%**
- FrontierScience: not reported

Coding:

- Coding public-lane (BenchLM): **62** (#14/150)
- SWE-bench Verified: **82.60%** (Vals)
- SWE-bench Pro: **58.6%**
- Vibe Code Bench: **69.85%**
- LiveCodeBench: **85.30%** (Vals)
- Terminal-Bench 2.0: **82.0%**

Long context:

- 1M window; MRCR v2 64K-128K 83.1%, 128K-256K 87.5%.

Multimodal:

- MMMU-Pro: **81.2%**
- MMMU-Pro w/ Python: **83.2%**
- OfficeQA Pro: **54.1%**
- Vals Multimodal Index: **66.9%**

### Normalized scores (1–100)

- **Tool use: 84/100.** Agentic lane #23/128 (62.7), Terminal-Bench 2.0 82.7%, OSWorld 78.7%, Tau2 Telecom 98.0%, GDPval 84.9%, BrowseComp 84.4%; caps at CyberGym 81.8%.
- **Reasoning: 82/100.** ARC-AGI-1 95.0%, ARC-AGI-2 85%, FrontierMath Tier4 72.5%, HLE 52.2%, GPQA 93.6%; caps at ARC-AGI-3 0.4%.
- **Context window: 84/100.** 1M window; MRCR v2 64K-128K 83.1%, 128K-256K 87.5%.
- **Multimodal: 84/100.** Text/image/file in; MMMU-Pro 81.2%, MMMU-Pro w/ Python 83.2%, OfficeQA Pro 54.1%.
- **Coding: 78/100.** SWE-bench Verified 82.6%, SWE-bench Pro 58.6%, Vibe Code 69.85%, LiveCodeBench 85.3%, coding lane #14/150 (62).
- **Cost efficiency: 75/100.** Premium $5/$30 per 1M.
- **Overall Score: 82/100.** Mean of five quality dims (BenchLM aggregate 69.27); best-fit for agentic coding + knowledge work at premium cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (OpenAI announcement, BenchLM, Vals AI, AIMLAPI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.