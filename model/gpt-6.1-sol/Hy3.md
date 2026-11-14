# GPT-6.1 Sol — findings by Hy3

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's upgraded GPT-6 Sol (2026-09-30); ~1/5 the price of GPT-6 Astra with near-Astra intelligence. Strong on agentic coding, computer use, and knowledge work.
- **Provider / access:** OpenAI API, Azure OpenAI, ChatGPT (Pro first, then Plus/Business/Enterprise/Edu). Chat Completions / Responses API.
- **Release / knowledge:** Released 2026-09-30.
- **IDs:** `openai/gpt-6.1-sol`
- **Context window:** 1,500,000 tokens (GPT-6 series standard; figure not separately re-confirmed this pass).
- **Modalities:** text in/out; image in; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** In $2.00 / Out $10.00 / Cached $0.10 per 1M tokens (Baijiahao) — ~1/5 of Astra.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench figure found this pass

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass

Coding:

- DeepSWE v1.1: **matches GPT-6 Astra** (vendor claim, no exact number)

Long context:

- 1,500,000-token window (series standard); no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 90/100.** Agentic coding / computer-use flagship positioning; capped by no public agentic benchmark number.
- **Reasoning: 90/100.** Near-Astra intelligence claim; no public GPQA/HLE figure to confirm higher.
- **Context window: 100/100.** 1,500,000-token context (highest in cohort).
- **Multimodal: 85/100.** Native multimodal per series; no verified audio/video generation detail.
- **Coding: 90/100.** DeepSWE v1.1 matching Astra implies elite coding; no exact number found.
- **Cost efficiency: 88/100.** $2/$10 per 1M is ~1/5 of Astra — exceptional value for near-flagship intelligence.
- **Overall Score: 91/100.** Mean of the five non-cost dims (90+90+100+85+90)/5 = 91.0 → 91. Best-fit: best-value near-flagship with top context and coding, gated by limited public numeric disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — OpenAI Help Center, Baijiahao (KuaiTech), Bilibili; independent of peer `model/` findings.
- Reference URLs:
  - [GPT-6.1 Sol release notes (OpenAI Help)](https://help.openai.com/zh-hans-cn/articles/10128477-chatgpt-enterprise-edu-release-notes)
  - [GPT-6.1 Sol: near-Astra at 1/5 price (Baijiahao)](https://baijiahao.baidu.com/s?id=1877711800010850768)
  - [GPT-6.1 Sol DevDay coverage (Baijiahao)](https://baijiahao.baidu.com/s?id=1877708595079141958)
