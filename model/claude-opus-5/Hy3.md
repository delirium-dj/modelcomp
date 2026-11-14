# Claude Opus 5 — findings by Hy3

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's Opus-class flagship (2026-07-24), positioned "deliberative and proactive"; priced identically to Opus 4.8. Outperforms Fable 5 on several dimensions.
- **Provider / access:** Anthropic API, AWS Bedrock, Google Cloud, Microsoft Azure (`claude-opus-5`). Messages / Chat Completions API.
- **Release / knowledge:** Released 2026-07-24 (leak traces from 2026-07-09, "Honeycomb EAP").
- **IDs:** `anthropic/claude-opus-5`
- **Context window:** 1,000,000 tokens (Claude 5 series).
- **Modalities:** text in/out; image in; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** In $5.00 / Out $25.00 per 1M tokens (matching Opus 4.8).
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench / OSWorld figure found this pass

Reasoning / knowledge:

- ARC-AGI-3: **~3× the next-best model** (vendor claim, no exact %)
- Frontier-Bench v0.1 (coding): **>2× Opus 4.8** (vendor claim)

Coding:

- No verified public SWE-bench / LiveCodeBench figure found this pass

Long context:

- 1,000,000-token window verified; no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 86/100.** Opus-class agentic expectation; capped by no public agentic benchmark number.
- **Reasoning: 88/100.** ARC-AGI-3 "3× next-best" is a strong reasoning signal; held below 90 by absence of exact public figure.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 78/100.** Text + image in; no verified native audio/video.
- **Coding: 86/100.** Frontier-Bench v0.1 ">2× Opus 4.8" implies strong coding; no public SWE-bench number found.
- **Cost efficiency: 58/100.** $5/$25 per 1M is premium Opus pricing (highest tier).
- **Overall Score: 87/100.** Mean of the five non-cost dims (86+88+99+78+86)/5 = 87.4 → 87. Best-fit: premium Opus reasoning flagship, gated by limited public numeric disclosure and high cost.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, Tencent Cloud dev community; independent of peer `model/` findings.
- Reference URLs:
  - [Claude Opus 5 — Baidu Baike](https://baike.baidu.com/item/Claude%20Opus%205/68354135)
  - [Claude Opus 5 release breakdown (Tencent Cloud)](https://cloud.tencent.com/developer/article/2715568)
