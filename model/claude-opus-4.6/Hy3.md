# Claude Opus 4.6 — findings by Hy3

- Source: Anthropic (`claude-opus-4.6`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's Opus flagship (2026-02-06); first Opus with a 1M-token context window. Strong coding, long-horizon agentic execution, and financial research; adds multi-agent collaboration and adaptive thinking.
- **Provider / access:** Anthropic API, AWS Bedrock, Google Cloud, Microsoft Azure (`claude-opus-4-6`). Messages / Chat Completions API.
- **Release / knowledge:** Released 2026-02-06.
- **IDs:** `anthropic/claude-opus-4-6`
- **Context window:** 1,000,000 tokens (first Opus to reach 1M; verified).
- **Modalities:** text in/out; image in; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** Opus tier (premium); exact rate not itemized this pass (est. ~$5/$25 per 1M).
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **refreshed historical high** (per IFeng/SMZDM; exact % not disclosed)
- Multi-agent collaboration + adaptive thinking (feature, not a score)

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass

Coding:

- Strong coding emphasized; "kills programming competitions," finds 500 day-0 vulnerabilities (vendor claims, no numeric SWE-bench)

Long context:

- 1,000,000-token window verified; no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.0 historical-high claim signals elite agentic skill; exact number undisclosed.
- **Reasoning: 87/100.** Strong professional/work reasoning implied; no public GPQA/HLE figure found.
- **Context window: 99/100.** 1,000,000-token context (top tier, first Opus at 1M).
- **Multimodal: 75/100.** Text + image in; no verified native audio/video.
- **Coding: 88/100.** Coding is the headline upgrade (vulnerability discovery, competitions); held below 95 by no public SWE-bench number.
- **Cost efficiency: 58/100.** Opus-tier premium pricing; expensive.
- **Overall Score: 87/100.** Mean of the five non-cost dims (88+87+99+75+88)/5 = 87.4 → 87. Best-fit: coding/agentic Opus flagship with 1M context, gated by mid multimodal and premium cost.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baijiahao, SMZDM, IFeng, Baike (Opus series); independent of peer `model/` findings.
- Reference URLs:
  - [Claude Opus 4.6 vs GPT-5.3-Codex (Baijiahao)](https://baijiahao.baidu.com/s?id=1856340066738763568)
  - [Claude Opus 4.6 release (SMZDM)](https://post.smzdm.com/p/a9kpl3r7/)
  - [Opus 4.6 kills coding (IFeng)](https://tech.ifeng.com/c/8qWT7lOsAg6)
  - [Opus series — Baidu Baike](https://baike.baidu.com/item/Opus/68306260)
