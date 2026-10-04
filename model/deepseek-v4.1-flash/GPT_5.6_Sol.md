# DeepSeek V4.1 Flash — Independent Research Report

## Summary and evidence

DeepSeek V4.1 Flash is a September 2026 open-weight, native multimodal MoE model with **552B backbone parameters**, only **8B active during input** and **16B during generation**, and a **one-million-token context window**. Its Causal Encoder-Decoder architecture cuts global KV cache to 890 bytes per token. Reasoning effort is continuously selectable from 1 to 100.

At maximum effort, DeepSeek reports **90.9% GPQA Diamond**, **90.6% Terminal-Bench 2.1**, **74.2% DeepSWE 1.1**, **64.0 NL2Repo-Bench**, and **63.9% HLE with tools**. Its multimodal base results include **56.5 MMMU-Pro**, **77.9 CVBench**, and **95.6 DocVQA**.

Sources: [DeepSeek release announcement](https://deepseek.com/news/deepseek-v4-1-flash/), [official model card and evaluations](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)

## Cost, strengths, and limitations

The official API uses peak/off-peak pricing: off-peak costs **$0.15 per million uncached input tokens**, **$0.003 cached input**, and **$0.60 output**, with peak rates twice those amounts. It is exceptionally economical and supports text, images, tool calls, and very long generations. Local deployment is demanding—DeepSeek explicitly targets large clusters—and HLE without tools (36.8%) trails its strongest frontier peers.

Source: [DeepSeek API pricing](https://api-docs.deepseek.com/quick_start/pricing/)

## Scores

- **Tool use: 95/100.** Excellent terminal, automation, cyber, and tool-augmented results demonstrate broad agent competence.
- **Reasoning: 92/100.** GPQA and Codeforces are excellent, while unaided HLE remains a meaningful weakness.
- **Context window: 96/100.** Native one-million-token context plus radical KV-cache compression is outstanding.
- **Multimodal: 92/100.** Native image processing and strong document/visual scores support serious multimodal work.
- **Coding: 95/100.** 90.6 Terminal-Bench and 74.2 DeepSWE place it among the strongest coding models.
- **Cost efficiency: 99/100.** Extremely low API prices and sparse activation offer exceptional performance per dollar.
- **Overall Score: 94/100.** Half-up rounded mean: (95 + 92 + 96 + 92 + 95) / 5 = 94.0.

## Bottom line

DeepSeek V4.1 Flash combines frontier-grade coding agents, million-token multimodality, and unusually low serving cost; the main tradeoffs are heavy self-hosting requirements and uneven knowledge-heavy reasoning.
