# GPT-5.4 Pro — findings by Beam

- Source: OpenAI/GPT-5.4 Pro, `openai/gpt-5.4-pro`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's premium GPT-5.4 variant (Mar 5, 2026) for maximum performance on complex tasks; uses more compute to think harder; SOTA on BrowseComp (89.3%), ARC-AGI-2 83.3%, ARC-AGI-1 95%, FrontierMath Tier4 59%, HLE 44%, GPQA 95%.
- **Provider / access:** OpenAI API `gpt-5.4-pro` (Responses API only); Azure; ChatGPT Pro.
- **Release / knowledge:** Released 2026-03-05; knowledge cutoff Aug 31, 2025.
- **IDs:** `openai/gpt-5.4-pro`
- **Context window:** 1,050,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes (medium/high/xhigh); tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $30.00 / 1M input, $180.00 / 1M output; paid. Prompts >272K priced 2x/1.5x.
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **89.3%**
- Agentic lane: not individually reported (BenchLM overall 68.59)
- Terminal-Bench 2.0: not reported for Pro
- OSWorld-Verified: not reported for Pro (GPT-5.4 base 75.0%)
- Toolathlon: not reported for Pro

Reasoning / knowledge:

- ARC-AGI-1: **95%**
- ARC-AGI-2: **83.3%**
- HLE: **44%**
- GPQA Diamond: **95%**
- FrontierMath Tiers 1-3: **82%**
- FrontierMath Tier 4: **59%**
- SimpleBench: **74%**
- SimpleQA Verified: **46%**
- ECI score: **159** (#13 of 260)
- AA Intelligence Index: **57** (nearly tied with Gemini 3.1 Pro 57.2)

Coding:

- No coding benchmarks reported for Pro in sources (BenchLM overall 68.59)

Long context:

- 1.05M window; MRCR: not reported.

Multimodal:

- MMMU-Pro: not reported for Pro (GPT-5.4 base 81.2%)

### Normalized scores (1–100)

- **Tool use: 82/100.** BrowseComp 89.3%; caps at no published agentic benchmarks for Pro variant.
- **Reasoning: 88/100.** ARC-AGI-1 95%, ARC-AGI-2 83.3%, HLE 44%, GPQA 95%, FrontierMath Tier4 59%, AA Intelligence 57; ECI 159.
- **Context window: 84/100.** 1.05M window; caps at no published MRCR retrieval.
- **Multimodal: 78/100.** Text/image in; caps at no verified Pro-specific multimodal numbers (base 81.2%).
- **Coding: 72/100.** No coding benchmarks reported for Pro; caps pending verification.
- **Cost efficiency: 45/100.** Very expensive $30/$180 per 1M.
- **Overall Score: 81/100.** Mean of five quality dims (BenchLM aggregate 68.59); best-fit for demanding research at very high cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (OpenAI docs, Epoch AI, DeepLearning.AI, TechCrunch, Design for Online); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.