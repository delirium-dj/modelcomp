# GPT-5.5 Pro — findings by Beam

- Source: OpenAI/GPT-5.5 Pro, `openai/gpt-5.5-pro`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's Pro variant of GPT-5.5 (Apr 24, 2026) for demanding research and complex professional tasks; fully retrained base model; stronger than GPT-5.4 Pro on business/legal/education/data science. Stricter cyber/bio safeguards.
- **Provider / access:** OpenAI API `gpt-5.5-pro` (ChatGPT Pro/Business/Enterprise; API Apr 24, 2026); Azure.
- **Release / knowledge:** Released 2026-04-23 (ChatGPT), API 2026-04-24; knowledge cutoff not stated.
- **IDs:** `openai/gpt-5.5-pro`
- **Context window:** 1,000,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $30.00 / 1M input, $180.00 / 1M output (AIMLAPI $39/$234); paid. (BenchLM lists $30/$180.)
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **90.1%**
- Agentic lane: not individually reported (BenchLM overall 73.35)
- Terminal-Bench 2.0: not reported for Pro
- OSWorld: not reported for Pro

Reasoning / knowledge:

- ARC-AGI-1: **95.00%**
- ARC-AGI-2: **84.2%**
- CritPt: **30.6%**
- HLE: **57.2%**
- HLE w/o tools: **43.1%**
- FrontierMath (legacy): **52.4%**
- FrontierMath v2 (Tiers 1-3): **87.719%**
- FrontierMath v2 (Tier 4): **78.049%**
- MRCR v2 64K-128K / 128K-256K: not reported for Pro
- AA Intelligence Index: not reported

Coding:

- No coding benchmarks reported for Pro in sources (BenchLM overall 73.35, coding lane not reported)

Long context:

- 1M window; MRCR: not reported for Pro.

Multimodal:

- No multimodal benchmarks reported for Pro in sources.

### Normalized scores (1–100)

- **Tool use: 78/100.** BrowseComp 90.1%; caps at no published agentic benchmarks for Pro variant.
- **Reasoning: 86/100.** ARC-AGI-1 95.0%, ARC-AGI-2 84.2%, HLE 57.2%, FrontierMath Tier4 78.049%, CritPt 30.6%; reasoning lane (unranked 3 rows) 78.8.
- **Context window: 80/100.** 1M window; caps at no published MRCR retrieval.
- **Multimodal: 75/100.** No multimodal benchmarks reported for Pro; caps pending verification.
- **Coding: 70/100.** No coding benchmarks reported for Pro; caps pending verification.
- **Cost efficiency: 50/100.** Very expensive $30/$180 per 1M.
- **Overall Score: 78/100.** Mean of five quality dims (BenchLM aggregate 73.35); best-fit for demanding research at very high cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (OpenAI announcement, BenchLM, AIMLAPI, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.