# GPT-5.4 Nano — findings by GPT-6 Luna

- Source: OpenAI/GPT-5.4 Nano, `openai/gpt-5.4-nano`
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Nano
- **Short description:** OpenAI's smallest tier (400K/128K, $0.20/$1.25) for classification, extraction and coding subagents: SWE-bench 69.8%, LiveCodeBench 84.0%, Terminal-Bench 2.0 46.3%.
- **Provider / access:** OpenAI API `gpt-5.4-nano`; OpenRouter.
- **Release / knowledge:** Released 2026-03-17; knowledge cutoff Aug 31, 2025.
- **IDs:** `opencode/gpt-5.4-nano` (the exact tracked route; alternate hosts are listed in the provider line).
- **Context window:** 400,000 (128,000 max out)
- **Modalities:** Text, image in; text out; reasoning/tool support as documented in the raw model card.
- **Pricing (as of 2026-10-30):** $0.20/$1.25 per 1M (cached $0.02)
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported
- AA Agentic Index: **16.0%** (Artificial Analysis)
- Terminal-Bench Hard: **42.4%** (AA, xhigh) / **24.2%** (non-reasoning) / **33.3%** (medium)
- Toolathlon: **35.5%** (OpenAI)
- τ²-Bench Telecom: **76.0%** (AA, xhigh) / **34.8%** (non-reasoning) / **52.6%** (medium)
- OSWorld-Verified: **39.0%** (OpenAI)
- GDPval-AA: **21.8%** (AA)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- GPQA Diamond: **82.8%** (OpenAI, xhigh) / **55.8%** (non-reasoning) / **76.1%** (medium) / **81.7%** (AA)
- HLE: **28.3%** (AA, xhigh) / **4.1%** (non-reasoning) / **15.9%** (medium)
- AA Intelligence Index: **20.7%** (Artificial Analysis)
- IFBench: **75.9%** (AA, xhigh) / **32.7%** (non-reasoning) / **64.4%** (medium)
- AA-LCR: **76.7%** (AA, xhigh) / **29.7%** (non-reasoning) / **67.3%** (medium)
- CritPt: **9.3%** (AA, xhigh) / **0.0%** (non-reasoning) / **5.1%** (medium)
- AA-Omniscience Accuracy: **25.7%** (AA)
- AA-Omniscience Non-Hallucination Rate: **25.8%** (AA)

Coding:

- Coding public-lane (BenchLM): not individually reported
- AA Coding Index: **56.1%** (Artificial Analysis)
- SWE-bench Pro (Public): **52.4%** (OpenAI)
- SciCode: **47.2%** (AA)
- Terminal-Bench 2.0: **46.3%** (OpenAI)

Long context:

- 400K window; AA-LCR **76.7%** (xhigh); MRCR not reported.

Multimodal:

- Text/image in; multimodal lane not reported. MMMUPro w/ Python **69.5%** (OpenAI), MMMUPro **66.1%** (OpenAI), OmniDocBench 1.5 **0.2419** (OpenAI).

### Normalized scores (1–100)

- **Tool use: 62/100.** AA Agentic Index 16.0%, Terminal-Bench Hard 42.4%, Toolathlon 35.5%, τ²-Bench Telecom 76.0%, OSWorld 39.0%, GDPval-AA 21.8%; caps at OSWorld 39.0%.
- **Reasoning: 66/100.** GPQA 82.8%, HLE 28.3%, AA Intelligence 20.7%, IFBench 75.9%, AA-LCR 76.7%, CritPt 9.3%; caps at CritPt 9.3%.
- **Context window: 68/100.** 400K window; AA-LCR 76.7%; caps at no published MRCR.
- **Multimodal: 66/100.** Text/image in; MMMUPro 66.1%, MMMUPro w/ Python 69.5%; caps at OmniDocBench 0.2419.
- **Coding: 64/100.** SWE-bench Pro 52.4%, AA Coding 56.1%, SciCode 47.2%, Terminal-Bench 2.0 46.3%; caps at SciCode 47.2%.
- **Cost efficiency: 96/100.** Very cheap $0.20/$1.25 per 1M.
- **Overall Score: 65.2/100.** Half-up mean of the five non-cost quality dimensions: (62 + 66 + 68 + 66 + 64) / 5 = 65.2. Cost efficiency is excluded. best-fit for ultra-cheap subagent tasks at low cost.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30 UTC
- Method: Public web research using the official model card/API documentation and the independent benchmark pages retained in the research extract; conflicting harnesses and inherited variant results are labelled in the raw section. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Source 1](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)
  - [Source 2](https://openai.com/api/pricing/)
  - [Source 3](https://artificialanalysis.ai/models/gpt-5-4-nano)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
