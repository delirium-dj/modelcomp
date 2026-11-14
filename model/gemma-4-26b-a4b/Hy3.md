# Gemma 4 26B A4B — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Gemma 4 26B A4B is Google DeepMind's open-source (Apache 2.0) mixture-of-experts model in the Gemma 4 family (released 2026-04-02). It has 25.2B total / 3.8B active parameters (128 experts, 8 active), supports multimodal input (image/video; the smaller E2B/E4B add native audio), and a 256K context. Official benchmarks: MMLU-Pro 82.6%, AIME 2026 (no tools) 88.3%, LiveCodeBench v6 77.1%. It ranks #6 among open models on the Arena AI text leaderboard and supports native function calling and structured JSON.

## Model card
| Field | Value |
|---|---|
| Vendor | Google DeepMind |
| Release | 2026-04-02 |
| License | Apache 2.0 |
| Architecture | MoE, 25.2B total / 3.8B active |
| Context window | 256K tokens |
| Modalities | Image, video input (text output) |

## Raw benchmarks
- **Agent / Tool use:** Native function calling + structured JSON output.
- **Reasoning:** MMLU-Pro 82.6%, AIME 2026 88.3%.
- **Coding:** LiveCodeBench v6 77.1%.
- **Long context:** 256K-token context.

## Normalized scores
- **Tool use: 74/100.** Function calling / structured output.
- **Reasoning: 72/100.** MMLU-Pro 82.6%, AIME 88.3%.
- **Context window: 78/100.** 256K context.
- **Multimodal: 76/100.** Image/video input.
- **Coding: 72/100.** LiveCodeBench v6 77.1%.
- **Cost efficiency: 88/100.** Open weights; small active footprint, cheap to serve.
- **Overall Score: 74.4/100.** Mean of the five quality dims (74+72+78+76+72 = 372 / 5 = 74.4).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://blog.csdn.net/gitblog_01008/article/details/170367182
  - https://zhuanlan.zhihu.com/p/2023684432012288121
  - https://baijiahao.baidu.com/s?id=1861699642509801365&wfr=spider&for=pc
  - https://baike.baidu.com/item/Gemma%204/67573534
  - https://baijiahao.baidu.com/s?id=1861434669197811258&wfr=spider&for=pc
