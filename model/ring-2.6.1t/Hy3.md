# Ring 2.6-1T — findings by Hy3

- **Source / Date:** 百度百科, 百度百家号, PHP中文网, CSDN — 2026-11-14
- **Overview:** Ring 2.6-1T is Ant Group's Ling (蚂蚁百灵) trillion-parameter flagship "thinking" model, released 2026-05-09 and open-sourced 2026-05-15 (weights on Hugging Face and ModelScope). It targets Agent workflows, engineering development and research analysis, and introduces an adjustable Reasoning Effort mechanism (high for frequent Agent flows; xhigh for math competition / extreme logic) built on an asynchronous RL architecture with the IcePop algorithm.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Ant Group (Ling / 百灵) |
| Release date | 2026-05-09 (open-sourced 2026-05-15) |
| Architecture | MoE, ~1T parameters (trillion-scale) |
| Context window | Not officially disclosed (est. 128K–256K; agentic class) |
| Modality | Text |
| License | Open weight |
| Pricing | Open weight (self-host) |

## Raw Benchmarks
### Agent / Tool Use
- high mode — PinchBench: 87.60 (surpasses GPT-5.4 xHigh, Gemini-3.1-Pro high)
- ClawEval: 63.82
- Tau2-Bench Telecom: 95.32 (complex business execution)

### Reasoning
- xhigh mode — ARC-AGI-V2: 77.78
- AIME 26: 95.83
- GPQA Diamond: 88.27

### Coding
- Engineering-development capable; specific SWE-bench number not disclosed in launch coverage.

### Long Context
- No explicit long-context benchmark disclosed; positioned for long-horizon agentic tasks.

## Normalized Scores
- **Tool use: 74/100.** Strong agentic execution (Tau2-Bench Telecom 95.32, PinchBench 87.60) but not top-of-pack on every agentic axis.
- **Reasoning: 74/100.** Excellent on hard math/logic (AIME 95.83, GPQA 88.27, ARC-AGI-V2 77.78) with adjustable effort.
- **Context window: 76/100.** Large but not officially benchmarked; assumed agentic-class.
- **Multimodal: 46/100.** Text-only.
- **Coding: 72/100.** Engineering-capable; lacks a headline public code-gen score.
- **Cost efficiency: 82/100.** Open-weight trillion-parameter MoE; serving cost scales with active experts.
- **Overall Score: 68.4/100.** Mean of the five quality dims (74+74+76+46+72 = 342 / 5 = 68.4).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Ring-2.6-1T/67763936
  - https://baijiahao.baidu.com/s?id=1864673891576897914&wfr=spider&for=pc
  - https://www.php.cn/faq/2445108.html
  - https://baijiahao.baidu.com/s?id=1864675066602082326&wfr=spider&for=pc
