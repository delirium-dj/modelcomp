# Qwen3.8 — findings by Hy3

- Source: Alibaba (`qwen-3.8`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8
- **Short description:** Alibaba's 2.4T open-source flagship (2026-08-03); the base of Qwen3.8-Max. Capable of autonomous 16-day full-project delivery. Strong vision reasoning and computer use.
- **Provider / access:** Qwen AI Platform, Qcoder, QcoderWork, Qianwen Office; open weights (2.4T-A95B). Chat Completions API.
- **Release / knowledge:** Released 2026-08-03.
- **IDs:** `qwen/qwen-3.8`
- **Context window:** 1,000,000 tokens (Qwen3.8 family; verified).
- **Modalities:** text in/out; image/vision in; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** competitive API; open weights available — strong value.
- **Architecture:** sparse MoE (2.4T total / 95B active).

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified (computer use): **86.1 (#1 among mainstream models)** (WeChat post)

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass

Coding:

- PaperBench: **64.8 → 93.0** (WeChat post; +28 pts on some projects)
- BabyVision (visual reasoning): **82.0** (WeChat post; ~2× many mainstream models)

Long context:

- 1,000,000-token window verified; no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 88/100.** OSWorld-Verified 86.1 (#1) signals elite computer-use/agentic skill.
- **Reasoning: 88/100.** Flagship reasoning implied by PaperBench 93.0; no public GPQA/HLE figure found.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 85/100.** Vision understanding (BabyVision 82.0); image in, text out.
- **Coding: 89/100.** PaperBench 93.0 and autonomous project delivery imply elite coding.
- **Cost efficiency: 85/100.** Open weights + competitive API — strong value.
- **Overall Score: 90/100.** Mean of the five non-cost dims (88+88+99+85+89)/5 = 89.8 → 90. Best-fit: leading open-weight flagship with #1 computer use and elite PaperBench, gated by thin public reasoning disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — CSDN, WeChat (mp), Zhihu; independent of peer `model/` findings.
- Reference URLs:
  - [Qwen3.8 interpretation (CSDN)](https://blog.csdn.net/2302_80237966/article/details/163034359)
  - [Qwen3.8 flagship release (WeChat)](https://mp.weixin.qq.com/s?__biz=MzU0MDQ1NjAzNg==&mid=2247589083&idx=1&sn=cbde10555066e0cf0b3cf1474fe660c5)
  - [Qwen3.8-27B analysis (Zhihu)](https://zhuanlan.zhihu.com/p/2072001208030704161)
  - [Qwen3.8 2.4T open-source (Zhihu)](https://zhuanlan.zhihu.com/p/2071600142508204289)
