# Claude Fable 5.1 — findings by Hy3

- Source: Anthropic (`claude-fable-5.1`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's generally-available frontier model (GA 2026-09-02); shares a base model with Mythos 5.1 (tighter safety). Strong on long-horizon agents and coding.
- **Provider / access:** Anthropic API, AWS Bedrock, Google Cloud, Microsoft Azure (`claude-fable-5-1`). Messages / Chat Completions API.
- **Release / knowledge:** Released 2026-09-02.
- **IDs:** `anthropic/claude-fable-5-1`
- **Context window:** 1,000,000 tokens (Claude 5 series).
- **Modalities:** text in/out; image in; reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-11-14):** not itemized this pass; Claude 5 family mid-tier.
- **Architecture:** proprietary (shared base with Mythos 5.1).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **55.8%** (Anthropic); Mythos 5.1 (same base, looser safety) **60.9%**
- OSWorld 2.0 (strict): **41.7%** (Anthropic)
- AutomationBench: **31.4%** (up from 17.1% on Fable 5)

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **65%**
- Terminal-Bench-Science 0.1: **52.6%** (vs Fable 5 24.7%)
- Artificial Analysis Intelligence Index: **53** (tied with GPT-6 Astra, behind Opus 5.5's 58)

Coding:

- CursorBench 3.2.0: **73.4%** (up from 70.5%)
- GDPval-AA v2 (knowledge-work Elo): **1,853** (vs Opus 5 1,824)

Long context:

- 1,000,000-token window verified; no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 55.8% and AutomationBench 31.4% show solid-but-mid agentic skill; OSWorld 41.7% caps it.
- **Reasoning: 85/100.** HLE 65% with tools and AA Index 53 anchor reasoning; below Opus 5.5 tier.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 75/100.** Text + image in; no verified native audio/video.
- **Coding: 83/100.** CursorBench 73.4% and GDPval 1,853 are strong; held below elite by no public SWE-bench Pro figure.
- **Cost efficiency: 70/100.** Mid-tier Claude 5 family pricing; undisclosed exact rates this pass.
- **Overall Score: 85/100.** Mean of the five non-cost dims (85+85+99+75+83)/5 = 85.4 → 85. Best-fit: balanced long-horizon agent/coding model, gated by mid multimodal and tool benchmarks.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Tencent Cloud dev community, TMT Post, CSDN, Baidu Baike; independent of peer `model/` findings.
- Reference URLs:
  - [Claude Fable 5.1 released (Tencent Cloud)](https://cloud.tencent.com/developer/article/2736129)
  - [Fable 5.1 benchmarks (TMT Post)](https://www.tmtpost.com/8125528.html)
  - [Claude 5 series — Baidu Baike](https://baike.baidu.com/item/Claude%205%E7%B3%BB%E5%88%97%E6%A8%A1%E5%9E%8B/68556432)
