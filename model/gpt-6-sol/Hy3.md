# GPT-6 Sol — findings by Hy3

- Source: OpenAI (`gpt-6-sol`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's lower-cost GPT-6 tier (2026-09-22/23), paired with GPT-6 Luna. Brings GPT-6 Astra's professional-work, factuality, coding, computer-use, and alignment methods down to a cheaper, faster tier (~6× faster than Astra per one source).
- **Provider / access:** OpenAI API, Azure OpenAI, ChatGPT (Work & Codex). Chat Completions / Responses API.
- **Release / knowledge:** Released 2026-09-22/23.
- **IDs:** `openai/gpt-6-sol`
- **Context window:** 1,500,000 tokens (GPT-6 series standard; figure not separately re-confirmed this pass).
- **Modalities:** text in/out; image in; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** ~half of GPT-6 Astra (tier pricing); exact rate not itemized this pass.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench / τ²-Bench figure found this pass

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass

Coding:

- No verified public SWE-bench / LiveCodeBench figure found this pass; "coding and computer use inherited from Astra"

Long context:

- 1,500,000-token window (series standard); no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 89/100.** Astra-grade computer-use/agentic at lower cost tier; capped by no public agentic benchmark number.
- **Reasoning: 89/100.** Astra-class reasoning at cheaper tier; no public GPQA/HLE figure found.
- **Context window: 100/100.** 1,500,000-token context (highest in cohort).
- **Multimodal: 85/100.** Native multimodal per series; no verified audio/video generation.
- **Coding: 88/100.** Coding/computer-use inherited from Astra; no public SWE-bench number found.
- **Cost efficiency: 75/100.** ~Half of Astra — good value, still above Flash tiers.
- **Overall Score: 90/100.** Mean of the five non-cost dims (89+89+100+85+88)/5 = 90.2 → 90. Best-fit: best-value GPT-6 tier with top context and Astra-grade capabilities, gated by limited public numeric disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — CSDN, Zhihu, OpenAI Help Center, Baijiahao; independent of peer `model/` findings.
- Reference URLs:
  - [GPT-6 Sol & Luna release (CSDN)](https://blog.csdn.net/qq_48717745/article/details/166482306)
  - [GPT-6 Sol vs Luna (Zhihu)](https://www.zhihu.com/question/2085927666914432329)
  - [GPT-6 Sol/Luna launch (Baijiahao)](https://baijiahao.baidu.com/s?id=1877207026305175614)
