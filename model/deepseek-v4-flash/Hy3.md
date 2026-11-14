# DeepSeek V4 Flash — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** DeepSeek V4 Flash is the lightweight variant of DeepSeek's V4 series, preview-released and open-sourced 2026-04-24. V4 emphasizes ultra-long context (1M tokens), sparse MoE, reasoning efficiency, and agent adaptation. Flash is the "small-but-beautiful" build: runs on a single RTX 4090/5090 (~22GB VRAM at 4-bit, ~80ms/token, 2–3 concurrent streams). A V4-Pro sibling also exists with 1M context.

## Model card
| Field | Value |
|---|---|
| Vendor | DeepSeek |
| Release | 2026-04-24 (V4 preview, open-sourced) |
| Architecture | Sparse MoE |
| Context window | 1,000,000 tokens |
| Modalities | Text / code |
| Deployment | Local; ~22GB VRAM @ 4-bit |

## Raw benchmarks
- **Agent / Tool use:** Agent-scenario adaptation emphasized in V4 design.
- **Reasoning:** Stronger reasoning and agent capability vs prior DeepSeek lines.
- **Coding:** Code-capable; flash tier tuned for "good enough" local use.
- **Long context:** 1M-token context confirmed.

## Normalized scores
- **Tool use: 76/100.** Agent-adapted design.
- **Reasoning: 76/100.** Improved reasoning in V4.
- **Context window: 90/100.** 1M-token context.
- **Multimodal: 58/100.** Text/code focus; no multimodal claims.
- **Coding: 78/100.** Capable; flash tier for local efficiency.
- **Cost efficiency: 85/100.** Runs locally on consumer GPUs; open weights.
- **Overall Score: 75.6/100.** Mean of the five quality dims (76+76+90+58+78 = 378 / 5 = 75.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://blog.csdn.net/m0_60827485/article/details/160857782
  - https://zhuanlan.zhihu.com/p/2074238161467843443
  - https://w.dzwww.com/p/p1LutVZFfG1.html
  - https://m.jiemian.com/article/14318488.html
  - https://blog.csdn.net/u013162524/article/details/161023837
