# Claude Opus 4.8 — findings by Hy3

- Source: Anthropic (`claude-opus-4.8`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's Opus-tier iteration (2026-05-29); improved agentic coding, multi-domain reasoning, and knowledge work, with lower mismatch/deception behavior and +37% factual accuracy vs prior.
- **Provider / access:** Anthropic API, AWS Bedrock, Google Cloud, Microsoft Azure (`claude-opus-4-8`). Messages / Chat Completions API.
- **Release / knowledge:** Released 2026-05-29.
- **IDs:** `anthropic/claude-opus-4-8`
- **Context window:** 1,000,000 tokens (Claude 5-series class; figure not separately re-confirmed this pass).
- **Modalities:** text in/out; image in; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** Opus tier (est. ~$5/$25 per 1M, matching Opus 4.7/5 line); Fast mode 2.5× speed at ~1/3 cost.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.6%** (Anthropic; vs GPT-5.5 78.2%)

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass
- Factual-accuracy test: **+37%** vs prior generation (vendor claim)

Coding:

- SWE-bench Pro: **69.2%** (Anthropic; vs GPT-5.5 58.6%, Gemini 3.1 Pro lower)

Long context:

- 1,000,000-token window assumed (Claude class); no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 74.6% is solid agentic skill; below GPT-5.5's 78.2%.
- **Reasoning: 86/100.** Multi-domain reasoning implied by gains; no public GPQA/HLE figure found.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 75/100.** Text + image in; no verified native audio/video.
- **Coding: 86/100.** SWE-bench Pro 69.2% is strong (beats GPT-5.5 base); held below elite by single-data-point base.
- **Cost efficiency: 58/100.** Opus-tier premium pricing (~$5/$25); Fast mode improves value.
- **Overall Score: 86/100.** Mean of the five non-cost dims (85+86+99+75+86)/5 = 86.2 → 86. Best-fit: reliable Opus-tier agentic-coding model with strong factual accuracy, gated by mid multimodal and premium cost.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, Baijiahao, CSDN, Bilibili; independent of peer `model/` findings.
- Reference URLs:
  - [Claude Opus 4.8 — Baidu Baike](https://baike.baidu.com/item/Claude%20Opus%204.8/67863154)
  - [Opus 4.8 launch (Baijiahao)](https://baijiahao.baidu.com/s?id=1866479569487868685)
  - [Opus 4.8 engineering practice (CSDN)](https://blog.csdn.net/hdheh554694/article/details/161507048)
