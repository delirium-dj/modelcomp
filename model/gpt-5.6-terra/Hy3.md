# GPT-5.6 Terra — findings by Hy3

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's balanced/value model in the GPT-5.6 series (public 2026-07-09); ~half the cost of GPT-5.5 with near-GPT-5.5 performance. Targets enterprise office and daily development.
- **Provider / access:** OpenAI API, Azure OpenAI, ChatGPT. Chat Completions / Responses API.
- **Release / knowledge:** Public release 2026-07-09 (preview 2026-06-26).
- **IDs:** `openai/gpt-5.6-terra`
- **Context window:** 1,500,000 tokens (GPT-5.6 series standard).
- **Modalities:** text in/out; image in; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** ~$2.50 / $15.00 per 1M tokens (CSDN); further −20% on 2026-07-30.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench / τ²-Bench figure found this pass
- Improved cybersecurity on ExploitGym (vendor claim, no number)

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass

Coding:

- No verified public SWE-bench / LiveCodeBench figure found this pass

Long context:

- 1,500,000-token window verified (series standard); no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 86/100.** Value-tier agentic positioning; capped by no public agentic benchmark number.
- **Reasoning: 86/100.** Near-GPT-5.5 reasoning claim; no public GPQA/HLE figure found.
- **Context window: 100/100.** 1,500,000-token context (highest in cohort).
- **Multimodal: 85/100.** Native multimodal per series; no verified audio/video generation.
- **Coding: 85/100.** Coding-focused value tier; no public SWE-bench number found to push higher.
- **Cost efficiency: 82/100.** ~$2.50/$15 per 1M after −20% — strong value, above Flash but below cheapest.
- **Overall Score: 88/100.** Mean of the five non-cost dims (86+86+100+85+85)/5 = 88.4 → 88. Best-fit: best-value balanced model with top context, gated by limited public numeric disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, OSChina, CSDN, Tencent Cloud; independent of peer `model/` findings.
- Reference URLs:
  - [GPT-5.6 Terra — Baidu Baike](https://baike.baidu.com/item/GPT-5.6%20Terra/68076486)
  - [GPT-5.6 series (OpenAI Baike)](https://baike.baidu.com/item/OpenAI%20GPT-5.6/68624189)
  - [GPT-5.6 Sol/Terra/Luna pricing (CSDN)](https://blog.csdn.net/lzj781210/article/details/162405994)
