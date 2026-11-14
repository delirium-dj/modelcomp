# GPT-5.4 — findings by Hy3

- Source: OpenAI (`gpt-5.4`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's professional-work frontier model (2026-03-05); integrates native computer use (vision + simulated keyboard/mouse for complex workflows). Ships standard, "Thinking" (enhanced reasoning), and Pro variants, plus mini/nano small models.
- **Provider / access:** OpenAI API, ChatGPT, Codex, GitHub Copilot. Chat Completions / Responses API.
- **Release / knowledge:** Released 2026-03-05.
- **IDs:** `openai/gpt-5.4`
- **Context window:** 1,000,000 tokens (verified; Copilot integration confirms up to 1M).
- **Modalities:** text in/out; image in; reasoning; native computer use; tool calls.
- **Pricing (as of 2026-11-14):** frontier tier (premium); exact rate not itemized this pass (Pro variant pricier).
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Native computer use: vision-based screen understanding + simulated mouse/keyboard (vendor feature)
- No verified public Terminal-Bench / τ²-Bench figure found this pass

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass
- OmniDocBench error **0.109** without reasoning (Tencent Cloud)

Coding:

- No verified public SWE-bench / LiveCodeBench figure found this pass

Long context:

- 1,000,000-token window verified; no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 87/100.** Native computer use is a strong agentic differentiator; capped by no public agentic benchmark number.
- **Reasoning: 86/100.** Thinking-mode reasoning flagship; no public GPQA/HLE figure found.
- **Context window: 100/100.** 1,000,000-token context (top tier).
- **Multimodal: 85/100.** Text + image in, native computer use; no verified audio/video generation.
- **Coding: 86/100.** Coding-focused professional model; no public SWE-bench number found to push higher.
- **Cost efficiency: 60/100.** Frontier-tier premium pricing; expensive.
- **Overall Score: 89/100.** Mean of the five non-cost dims (87+86+100+85+86)/5 = 88.8 → 89. Best-fit: computer-use-capable professional frontier model with top context, gated by premium cost and limited public disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, CSDN, OpenAI Help Center, Tencent Cloud, GeeksforGeeks; independent of peer `model/` findings.
- Reference URLs:
  - [GPT-5.4 — Baidu Baike](https://baike.baidu.com/item/GPT-5.4/67448260)
  - [GPT-5.4 Copilot context (CSDN)](https://blog.csdn.net/weixin_41736460/article/details/159043042)
  - [OpenAI model release notes](https://help.openai.com/zh-hans-cn/articles/9624314-model-release-notes)
  - [GPT-5.4 features (Tencent Cloud)](https://cloud.tencent.com/developer/article/2637076)
