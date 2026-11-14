# Claude Haiku 3.5 — findings by Hy3

- **Source / Date:** CloudPrice, LMSpeed, SyncDev — 2026-11-14
- **Overview:** Claude Haiku 3.5 is Anthropic's fast, compact Claude model (released 2024-11-04, now deprecated as of 2026-07-05), balancing speed and capability with vision, PDF/file input and tool use. It is built for responsive assistance, classification and lightweight agents rather than frontier reasoning.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Anthropic |
| Release date | 2024-11-04 (deprecated 2026-07-05) |
| Architecture | Claude Haiku family (proprietary) |
| Parameters | Not disclosed |
| Context window | 200,000 tokens |
| Max output | 8,192 tokens |
| Modality | Input: text, image, PDF; Output: text |
| License | Proprietary (API) |
| Pricing | $0.80 in / $4.00 out per 1M tokens |

## Raw Benchmarks
### Agent / Tool Use
- Function calling, parallel function calling, structured outputs, prompt caching supported.

### Reasoning
- Modest absolute scores on aggregator indices (e.g. MMLU-Pro ~0.6, GPQA ~0.4 on normalized indices); a compact tier, not a reasoning flagship.

### Coding
- HumanEval 88.1 (LMSpeed); SWE-bench Verified 40.6%; LiveCodeBench 31.4% — capable for a small model but below frontier.

### Long Context
- 200K context window.

## Normalized Scores
- **Tool use: 70/100.** Solid tool/function-calling and structured-output support for its class.
- **Reasoning: 62/100.** Compact-tier reasoning; adequate for lightweight tasks.
- **Context window: 68/100.** 200K is good but not class-leading.
- **Multimodal: 74/100.** Vision + image + PDF input is a genuine strength for a small model.
- **Coding: 62/100.** HumanEval strong; SWE-bench Verified 40.6% is modest.
- **Cost efficiency: 60/100.** $0.80/$4.00 per 1M is relatively pricey for a small/fast model.
- **Overall Score: 67.2/100.** Mean of the five quality dims (70+62+68+74+62 = 336 / 5 = 67.2).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://cloudprice.net/models/anthropic-claude-3-5-haiku
  - http://lmspeed.net/model/claude-3-5-haiku
  - https://www.syncdev.com/models/anthropic-claude-3-5-haiku-20241022
