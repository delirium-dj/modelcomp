# Muse Spark 1.2 — findings by Hy3

- Source: Meta Platforms, Muse Spark 1.2
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's coding-agent foundation model (underlying the Muse Code agent), released 2026-08-05. 1M-token context with active compression/retrieval; tuned for goal-setting, context compression, tool calling, and sub-agent coordination. Demonstrated optimizing a Kimi Delta Attention kernel. Meta open-sourced ~30B Muse Glimmer and promised to release Spark 1.2 weights.
- **Provider / access:** Meta developer platform (API key, application required); planned open weights. Chat + tool/agent API.
- **Release / knowledge:** Released 2026-08-05; knowledge cutoff not separately published.
- **IDs:** `meta/muse-spark-1.2` (developer-platform slug).
- **Context window:** 1M tokens (with active compression + history retrieval).
- **Modalities:** Text + (reported) visual input understanding; text out; tool/agent calls; sub-agent orchestration.
- **Pricing (as of 2026-11-14):** Two tiers (standard + contributor); exact per-token not published.
- **Architecture:** Meta proprietary; ~30B Muse Glimmer open-sourced as a smaller sibling; Spark 1.2 weights promised open.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%**
- DeepSWE 1.1: **59.3%**
- Explicitly optimized for tool calling + sub-agent coordination.

Reasoning / knowledge:

- No standalone GPQA/HLE number published for 1.2 this pass.

Coding:

- TerminalBench2.1 **82.9%**, DeepSWE1.1 **59.3%** (official Meta demo figures).

Long context:

- 1M-token window with active compression/retrieval; no MRCR/RULER number found.

### Normalized scores (1–100)

- **Tool use: 94/100.** Purpose-built for tool calling and sub-agent coordination; Terminal-Bench 2.1 82.9% is strong.
- **Reasoning: 88/100.** Solid reasoning within a coding-agent focus; not a general-reasoning flagship.
- **Context window: 96/100.** 1M tokens with active compression/retrieval → top tier.
- **Multimodal: 80/100.** Reported visual-input understanding (embodied/code fusion) but primarily text/code.
- **Coding: 90/100.** Strong agentic coding (Terminal-Bench 82.9%) but DeepSWE 59.3% caps the top end.
- **Cost efficiency: 75/100.** API tiers + planned open weights; moderate.
- **Overall Score: 90/100.** Mean of five non-cost dims = (94+88+96+80+90)/5 = 448/5 = 89.6 → 90. Best fit: long-horizon coding agent / codebase-scale software engineering.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: Independent web research; no peer model/*/*.md read during research.
- Reference URLs:
  - [Muse Spark 1.2 — Baidu Baike](https://baike.baidu.com/item/Muse%20Spark%201.2/68635101)
  - [Meta Muse Spark 1.2 本地部署与实战 — CSDN](https://blog.csdn.net/weixin_29038345/article/details/163629525)
