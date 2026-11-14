# Claude Fable 5 — findings by Hy3

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first publicly released Mythos-class model with safety rails (2026-06-09/10); shares the Mythos 5 base. Core sell is agentic coding.
- **Provider / access:** Anthropic API, AWS Bedrock, Google Cloud, Microsoft Azure (`claude-fable-5`). Messages / Chat Completions API.
- **Release / knowledge:** Released 2026-06-09 (briefly pulled, re-approved 2026-07-01).
- **IDs:** `anthropic/claude-fable-5`
- **Context window:** 1,000,000 tokens (Claude 5 series).
- **Modalities:** text in/out; image in; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** not itemized this pass; Claude 5 family mid-tier.
- **Architecture:** proprietary (shared Mythos 5 base).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.0%** (36Kr, vs Opus 4.8 82.7%, GPT-5.5 Codex CLI 83.4%, Gemini CLI 70.7%)

Reasoning / knowledge:

- No verified public GPQA/HLE figure found for Fable 5 specifically this pass

Coding:

- SWE-bench Pro: **80.3%** (Anthropic / Baike; shared base with Mythos 5)
- Claimed: completes a 50M-line codebase migration in a day

Long context:

- 1,000,000-token window verified; no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.1 88.0% is elite agentic terminal skill, beating Opus 4.8 and GPT-5.5 Codex CLI.
- **Reasoning: 85/100.** Mythos-class reasoning implied by base; no public GPQA/HLE figure found.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 75/100.** Text + image in; no verified native audio/video.
- **Coding: 87/100.** SWE-bench Pro 80.3% is strong; held below elite by single-data-point base.
- **Cost efficiency: 70/100.** Claude 5 family mid-tier pricing; undisclosed exact rates this pass.
- **Overall Score: 87/100.** Mean of the five non-cost dims (90+85+99+75+87)/5 = 87.2 → 87. Best-fit: elite agentic-coding model led by Terminal-Bench 2.1, gated by mid multimodal and no public reasoning benchmarks.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, 36Kr, Tencent Cloud, Zhihu; independent of peer `model/` findings.
- Reference URLs:
  - [Fable — Baidu Baike](https://baike.baidu.com/item/Fable/68576242)
  - [Claude Fable 5 released (Tencent Cloud)](https://cloud.tencent.com/developer/article/2686760)
  - [Fable 5 Terminal-Bench 2.1 88% (36Kr)](https://36kr.com/p/3846565558401925)
