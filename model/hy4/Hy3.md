# Hy4 — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Hy4 is Tencent Hunyuan's flagship model, officially released 2026-11-04 (preceded by an August 2026 Preview). It is a 770B-parameter MoE (49B active) with a ~1M-token context. The official release adds visual understanding (fine-grained image/chart/math-vision), computer use via CLI + GUI (with CAD/Blender specialization), and long-horizon agent execution. On Tencent's launch benchmarks it scores SWE-bench Multilingual 82.9, Terminal-Bench 2.1 85.4, MCP-Atlas 83.7, BioMysteryBench 71.3, and GPQA Diamond 92.3. On the Artificial Analysis Intelligence Index v5.0.1 it scores 35 (global ~#12) — strong in domestic open-source tier, behind top closed models. Pricing ¥6/M input, ¥18/M output (50% off on Tencent Cloud through year-end).

## Model card
| Field | Value |
|---|---|
| Vendor | Tencent Hunyuan |
| Release | 2026-11-04 |
| Architecture | MoE, 770B total / 49B active |
| Context window | ~1,050,000 tokens |
| Modalities | Text + image input; computer use (CLI/GUI) |
| Pricing | ¥6/M input, ¥18/M output |

## Raw benchmarks
- **Agent / Tool use:** Computer-use (CLI + GUI), CAD/Blender optimization; MCP-Atlas 83.7.
- **Reasoning:** GPQA Diamond 92.3; strong reasoning tier.
- **Coding:** SWE-bench Multilingual 82.9; Terminal-Bench 2.1 85.4.
- **Long context:** ~1M-token context.

## Normalized scores
- **Tool use: 72/100.** Computer-use + agent execution; strong in Tencent scenarios.
- **Reasoning: 72/100.** GPQA 92.3 but Intelligence Index #12 globally.
- **Context window: 84/100.** ~1M-token context.
- **Multimodal: 70/100.** New visual understanding; image input.
- **Coding: 72/100.** SWE-bench Multilingual 82.9.
- **Cost efficiency: 70/100.** ¥6/¥18 per M; mid-tier pricing.
- **Overall Score: 74.0/100.** Mean of the five quality dims (72+72+84+70+72 = 370 / 5 = 74.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://hy4ai.com/hy4-benchmarks.html
  - https://kjj.gz.gov.cn/xydt/content/post_11090394.html
  - https://www.wlcbnews.com/kjyw/202611/336.html
  - https://lmspeed.net/model/hy4-preview
  - https://aimlapi.com/blog/tencent-hy4-review
