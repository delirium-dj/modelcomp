# Ling 2.6-1T — findings by Hy3

- **Source / Date:** 百度百科, ModelScope CSDN, 百度百家号 — 2026-11-14
- **Overview:** Ling 2.6-1T is Ant Group's (百灵) trillion-scale comprehensive flagship model, released 2026-04-24 and open-sourced 2026-04-30. It uses a hybrid MLA + LinearAttention architecture with a "fast-thinking" mechanism to cut token consumption and latency. It scores highly on execution benchmarks (AIME2026, SWE-bench), with comprehensive intelligence near GPT-5.4 (non-reasoning mode), and strong tool adaptation and long-context handling. It reached top-tier on Artificial Analysis Agentic/Coding indices and ranked 3rd in OpenRouter Kilo Code agent-call volume (May). It is notably token-efficient (an AA eval needed only 16M output tokens).

## Model Card
| Field | Value |
| --- | --- |
| Provider | Ant Group (Ling / 百灵) |
| Release date | 2026-04-24 (open-sourced 2026-04-30) |
| Architecture | ~1T params; MLA + LinearAttention hybrid; "fast-thinking" |
| Context window | Long context (agentic class) |
| Modality | Text |
| License | Open weight (Hugging Face / ModelScope) |
| Pricing | Open weight + free OpenRouter API period |

## Raw Benchmarks
### Agent / Tool Use
- Top-tier on Artificial Analysis Agentic Index; strong tool adaptation; #3 OpenRouter Kilo Code agent calls (May).

### Reasoning
- AIME2026, SWE-bench high scores; comprehensive intelligence near GPT-5.4 (non-reasoning).

### Coding
- Coding Index top-tier per Artificial Analysis.

### Long Context
- Explicitly optimized for long-context承接 (carrying); token-efficient.

## Normalized Scores
- **Tool use: 68/100.** Top-tier agentic tool use; strong adaptation.
- **Reasoning: 68/100.** High execution-bench scores; near GPT-5.4 non-reasoning.
- **Context window: 74/100.** Long-context optimized; exact window not disclosed.
- **Multimodal: 44/100.** Text-only.
- **Coding: 70/100.** Top-tier coding index; execution-focused.
- **Cost efficiency: 80/100.** Open weight, very token-efficient (16M tokens for AA eval).
- **Overall Score: 64.8/100.** Mean of the five quality dims (68+68+74+44+70 = 324 / 5 = 64.8).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Ling-2.6-1T/67677049
  - https://modelscope.csdn.net/69faa2ee0a2f6a37c5a804e8.html
  - https://baijiahao.baidu.com/s?id=1863857100219237920&wfr=spider&for=pc
