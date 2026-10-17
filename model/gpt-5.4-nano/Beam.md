# GPT-5.4 Nano — findings by Beam

- Source: OpenAI/GPT-5.4 Nano, `openai/gpt-5.4-nano`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Nano
- **Short description:** OpenAI's smallest 5.4 model (Mar 17, 2026): 400K context, 128K output. SWE-bench Pro 52.4%, Terminal-Bench 2.0 46.3%. AA Intelligence Index 20.7. $0.20/$1.25 per 1M.
- **Provider / access:** OpenAI API `gpt-5.4-nano`; OpenRouter.
- **Release / knowledge:** Released 2026-03-17; knowledge cutoff Aug 31, 2025.
- **IDs:** `openai/gpt-5.4-nano`
- **Context window:** 400,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $0.20 / 1M input, $1.25 / 1M output; paid.
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
- **Overall Score: 65.2/100.** Mean of five quality dims (AA Intelligence 20.7); best-fit for ultra-cheap subagent tasks at low cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (OpenAI official, Artificial Analysis via OpenRouter, DataCamp, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|>>