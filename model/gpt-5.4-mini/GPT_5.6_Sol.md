# GPT-5.4 Mini — Independent Research Report

## Summary and evidence

GPT-5.4 Mini is OpenAI's March 2026 efficient coding, computer-use, and subagent model. It supports five reasoning levels, text and image input, a broad hosted tool suite, **400K context**, and **128K output**. OpenAI reports **54.4% SWE-bench Pro**, **60.0% Terminal-Bench 2.0**, **93.4% Tau2 Telecom**, **88.0% GPQA Diamond**, and **72.1% OSWorld-Verified**.

Sources: [OpenAI GPT-5.4 Mini launch](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/), [model documentation](https://developers.openai.com/api/docs/models/gpt-5.4-mini)

## Cost and limitations

Pricing is **$0.75 input, $0.075 cached input, and $4.50 output per million tokens**, with Batch discounts. Long-context retrieval degrades substantially beyond 128K, and later GPT-5.6/6 efficiency tiers provide larger windows.

## Scores

- **Tool use: 90/100.** Strong telecom, computer-use, and hosted-tool results suit subagents.
- **Reasoning: 84/100.** GPQA is strong, while HLE shows the mini-tier ceiling.
- **Context window: 89/100.** 400K is useful, though effective long-context recall is uneven.
- **Multimodal: 87/100.** Vision and computer use are capable; audio/video are absent.
- **Coding: 88/100.** SWE-bench and Terminal-Bench results are strong for its size.
- **Cost efficiency: 93/100.** Low pricing and fast iteration provide excellent value.
- **Overall Score: 88/100.** Half-up rounded mean: (90 + 84 + 89 + 87 + 88) / 5 = 87.6.

## Bottom line

GPT-5.4 Mini is a strong economical coding subagent, though newer Luna-class models improve context and price.
