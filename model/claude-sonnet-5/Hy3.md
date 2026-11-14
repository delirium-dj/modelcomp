# Claude Sonnet 5 — findings by Hy3

- Source: Anthropic (`claude-sonnet-5`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's mid-tier "do-real-work-at-sustainable-cost" model (2026-06-30); default for all Claude users. Strong agentic planning, browser/terminal use, and multi-step task execution with lower hallucination and sycophancy.
- **Provider / access:** Anthropic API, AWS Bedrock, Google Cloud Vertex AI (`claude-sonnet-5`). Messages / Chat Completions API.
- **Release / knowledge:** Released 2026-06-30 (internal codename "Fennec").
- **IDs:** `anthropic/claude-sonnet-5`
- **Context window:** 1,000,000 tokens (Claude 5 series).
- **Modalities:** text in/out; image in; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** mid-tier (lower than Opus); exact rate not itemized this pass.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2 (knowledge work): **1,618** Elo (Baike)
- CursorBench v3.1: **57%** (Baike)

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **57.4%** (Baike)

Coding:

- SWE-bench Pro: **63.2%** (Baike)

Long context:

- 1,000,000-token window verified; no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 85/100.** GDPval-AA 1,618 and CursorBench 57% show solid agentic/knowledge-work skill; capped by no public Terminal-Bench number.
- **Reasoning: 85/100.** HLE 57.4% with tools is mid; lower than Opus tier.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 75/100.** Text + image in; no verified native audio/video.
- **Coding: 85/100.** SWE-bench Pro 63.2% is strong for mid-tier; held below elite by single-data-point base.
- **Cost efficiency: 72/100.** Mid-tier pricing — good value vs Opus.
- **Overall Score: 86/100.** Mean of the five non-cost dims (85+85+99+75+85)/5 = 85.8 → 86. Best-fit: balanced cost/performance agentic model with strong SWE and knowledge-work, gated by mid multimodal.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike (Sonnet 5 / Claude Sonnet), Tencent Cloud, CSDN, Zhihu; independent of peer `model/` findings.
- Reference URLs:
  - [Sonnet 5 — Baidu Baike](https://baike.baidu.com/item/Sonnet%205/68127739)
  - [Claude Sonnet — Baidu Baike](https://baike.baidu.com/item/Claude%20Sonnet/67552827)
  - [Sonnet 5 launch (Tencent Cloud)](https://cloud.tencent.com/developer/article/2708632)
