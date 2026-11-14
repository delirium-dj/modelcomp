# Claude Opus 4.7 — findings by Hy3

- Source: Anthropic, Claude Opus 4.7
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's software-engineering-focused flagship, released 2026-04-16. Major lift in complex/long-running coding tasks; improved vision (up to 2576px / ~3.75MP). Adds auto/recall/focus modes, Routines (timer/API/GitHub triggers), and enhanced safety guardrails. Per reporting, "dominates GPT-5.5 on SWE-Bench Pro."
- **Provider / access:** Anthropic API (`claude-opus-4-7`), Amazon Bedrock, Google Vertex AI, Microsoft Foundry. Messages API; vision; tool use.
- **Release / knowledge:** Released 2026-04-16; knowledge cutoff updated.
- **IDs:** `claude-opus-4-7` (Anthropic / Bedrock / Vertex).
- **Context window:** ~200K tokens (Opus 4.x tier; later Claude extends to 1M — assume 200K baseline here).
- **Modalities:** Text + image in / text out; vision (up to 2576px long edge); tool/function calling; JSON mode.
- **Pricing (as of 2026-11-14):** $5 in / $25 out per 1M tokens (same as Opus 4.6).
- **Architecture:** Anthropic proprietary; updated tokenizer.

### Raw benchmarks found

Agent / tool use:

- No standalone TAU/Terminal-Bench number published for 4.7 this pass; Routines add timer/API/GitHub-triggered automation.

Reasoning / knowledge:

- No standalone GPQA/HLE number published for 4.7 this pass.

Coding:

- SWE-bench Verified: **87.6%** (up from 80.8% on Opus 4.6)
- SWE-bench Pro: **64.3%** (up from 53.4%)
- CursorBench: **70%** (up from 58%, +12 pts)

Long context:

- ~200K context; no MRCR/RULER number found for 4.7 this pass.

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong tool use + Routines automation; near-flagship agentic.
- **Reasoning: 90/100.** Frontier reasoning within the Opus 4.x line.
- **Context window: 86/100.** ~200K baseline (below 1M-tier peers in this band).
- **Multimodal: 88/100.** Improved high-res vision (2576px).
- **Coding: 92/100.** SWE-bench Verified 87.6% / Pro 64.3% — elite coding.
- **Cost efficiency: 55/100.** $5/$25 is expensive; low efficiency score.
- **Overall Score: 89/100.** Mean of five non-cost dims = (90+90+86+88+92)/5 = 446/5 = 89.2 → 89. Best fit: hardest software-engineering and long-running coding agent tasks where cost is secondary.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: Independent web research; no peer model/*/*.md read during research.
- Reference URLs:
  - [Claude Opus 4.7 — Baidu Baike](https://baike.baidu.com/item/Claude%20Opus%204.7/67623873)
  - [Claude Opus 4.7 完整评测 — Tencent Cloud](https://cloud.tencent.com/developer/article/2656376)
