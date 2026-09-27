# Grok 4.3 — findings by LongCat 2.5 Preview

- Source: xAI / SpaceXAI (`grok-4.3`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's pre-trained reasoning model built for coding, agentic software, and instruction-following workflows — a balanced mid-tier entry between the flagship 4.5/4.6 and smaller Grok variants.
- **Provider / access:** xAI API — `grok-4.3` (Chat Completions + Responses API; reasoning low/medium/high; Grok Build default at launch). Also Azure AI Foundry, AWS Bedrock, OpenRouter. Released 2026-04-30.
- **Release / knowledge:** Released 2026-04-30; knowledge cutoff December 2025.
- **IDs:** `x-ai/grok-4.3` (OpenRouter), `grok-4.3` (xAI API). No Zen Free ID — paid only.
- **Context window:** 1,000,000 tokens; max output ~1M.
- **Modalities:** Text, image, file in; text out; reasoning yes; function calling, structured outputs, web/X search, code execution, prompt caching.
- **Pricing (as of 2026-09-27):** $1.25/M in, $2.50/M out (≤200K prompt); $2.50/$5 (>200K); cached input $0.20/M. Paid only.
- **Architecture:** Proprietary; ~0.5T total parameters (per third-party listings); no further public detail.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **83.3%**
- Terminal-Bench 2.1 (Vals): **41.9%**; Terminal-Bench 3.0: **15.7%**
- BrowseComp: **83.5%**
- Tau3-Banking / GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- BenchLM public lanes: Agentic 25 (#147/151), Reasoning 67.2, Knowledge 57.4

Coding:

- SWE-bench Verified: **71.4%**
- LiveCodeBench (Vals): **82.2%**
- Codeforces rating: **3020** (vendor-reported)

Long context:

- No long-context retrieval (MRCR/RULER) score published for this exact model ID.

### Normalized scores (1–100)

- **Tool use: 65/100.** TB2.0 83.3% and BrowseComp 83.5% are solid, but TB2.1 (Vals) 41.9% and TB3.0 15.7% sit in the low-to-mid band of the current field — no frontier agentic number.
- **Reasoning: 65/100.** No GPQA/HLE absolute for this exact model ID; BenchLM reasoning lane 67.2 places it in mid-tier reasoning.
- **Context window: 95/100.** 1M tokens earns the ≥1M tier; no published 512K+ retrieval result to confirm the top of the band.
- **Multimodal: 70/100.** Text/image input lands in the +image-in 60–70 band; no audio/video input and text-only output cap it there.
- **Coding: 65/100.** SWE-bench Verified 71.4% is mid-field; LiveCodeBench 82.2% is decent; Terminal-Bench 3.0 15.7% drags the coding-agent profile down.
- **Cost efficiency: 90/100.** $1.25/$2.50 pricing is among the cheapest for a 1M-context reasoning model.
- **Overall Score: 72/100.** Mean of the five quality dims (65+65+95+70+65)/5 = 72. Best-fit: budget-friendly coding/agent option in the xAI ecosystem; a step behind the 4.5/4.6 flagships on every capability axis.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (xAI release notes, BenchLM, Vals.ai, LLMReference, LLMGateway, Ofox); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
