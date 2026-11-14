# Qwen3.8-Max — findings by Hy3

- Source: Alibaba (`qwen-3.8-max`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max
- **Short description:** Alibaba's flagship (2026-08-03, preview 2026-07-19); 2.4T total / 95B active sparse MoE with vision understanding. First Max-level Qwen open-sourced. Can autonomously deliver real projects from an empty folder.
- **Provider / access:** Qwen AI Platform, Qcoder, QcoderWork, "Qianwen Office" agent. Chat Completions API; open weights.
- **Release / knowledge:** Released 2026-08-03 (preview 2026-07-19); weights open-sourced ~2026-08-10.
- **IDs:** `qwen/qwen-3.8-max`
- **Context window:** 1,000,000 tokens (verified).
- **Modalities:** text in/out; image/vision in; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** competitive API; open weights available (strong value).
- **Architecture:** sparse MoE (2.4T total / 95B active), hybrid attention.

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench / τ²-Bench figure found this pass

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass

Coding:

- CodeArena front-end coding: **1,691 Elo (#1, +22 pts after 2026-09-02 update)** (Baike)
- Vision Arena: **rank #2** (Baike)

Long context:

- 1,000,000-token window verified; no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 86/100.** Autonomous project-delivery positioning; capped by no public agentic benchmark number.
- **Reasoning: 88/100.** Flagship reasoning implied; no public GPQA/HLE figure found.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 88/100.** Vision understanding with Vision Arena #2; image in, text out.
- **Coding: 88/100.** CodeArena front-end #1 (1,691 Elo) is elite coding signal.
- **Cost efficiency: 85/100.** Open weights + competitive API — strong value.
- **Overall Score: 90/100.** Mean of the five non-cost dims (86+88+99+88+88)/5 = 89.8 → 90. Best-fit: leading open-weight coding/vision flagship with #1 front-end CodeArena, gated by thin public agentic disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, Alibaba Cloud dev community, Tencent Cloud, CSDN; independent of peer `model/` findings.
- Reference URLs:
  - [Qwen3.8-Max — Baidu Baike](https://baike.baidu.com/item/Qwen3.8-Max/68312211)
  - [Qwen3.8-Max breakdown (Aliyun)](https://developer.aliyun.com/article/1761653)
  - [Qwen3.8-Max highlights (Tencent Cloud)](https://cloud.tencent.com/developer/article/2722958)
