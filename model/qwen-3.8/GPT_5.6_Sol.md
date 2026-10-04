# Qwen3.8 — Independent Research Report

## Summary and evidence

Qwen3.8-2.4T-A95B is Alibaba's largest open Qwen3.8 checkpoint: a **2.4-trillion-parameter MoE with 95B active parameters**. It is text-only, requires thinking mode, and is compatible with vLLM, SGLang, and TokenSpeed. Qwen describes the generation as its strongest open family for coding, professional work, research, and long-horizon agents; Qwen3.8-Max is the managed derivative adding vision, non-thinking mode, built-in tools, and default one-million-token context.

Source: [official Qwen3.8-2.4T-A95B model card](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)

## Cost and limitations

Open weights avoid mandatory API charges, but the roughly **4.9 TB BF16 checkpoint** makes self-hosting extraordinarily expensive. The raw release lacks native vision and managed built-in tools, and thinking cannot be disabled.

## Scores

- **Tool use: 88/100.** Strong agent training and harness compatibility help, but tools are caller-managed in the raw checkpoint.
- **Reasoning: 94/100.** Max-class scale and mandatory thinking provide very high reasoning capacity.
- **Context window: 90/100.** Long context is supported, but the raw deployment is less turnkey than Qwen3.8-Max.
- **Multimodal: 50/100.** This checkpoint is explicitly text-only.
- **Coding: 93/100.** Coding and long-horizon engineering are headline strengths.
- **Cost efficiency: 67/100.** Open weights help, but serving a 2.4T model is prohibitively demanding for most users.
- **Overall Score: 83/100.** Half-up rounded mean: (88 + 94 + 90 + 50 + 93) / 5 = 83.0.

## Bottom line

Qwen3.8 is a powerful open reasoning and coding model for organizations with extreme inference capacity; most users should prefer Qwen3.8-Max or the 27B release.
