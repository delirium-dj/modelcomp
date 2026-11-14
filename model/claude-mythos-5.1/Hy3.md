# Claude Mythos 5.1 — findings by Hy3

- Source: Anthropic (`claude-mythos-5.1`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's Mythos-class model (2026-09-01); shares the Fable 5.1 base with looser safety restrictions, distributed via Project Glasswing to vetted cybersecurity and life-sciences institutions.
- **Provider / access:** Anthropic API via Project Glasswing (vetted orgs), AWS, Google Cloud, Microsoft Azure (`claude-mythos-5-1`). Messages / Chat Completions API.
- **Release / knowledge:** Released 2026-09-01.
- **IDs:** `anthropic/claude-mythos-5-1`
- **Context window:** 1,000,000 tokens (Claude 5 series).
- **Modalities:** text in/out; image in; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** institution-gated; not separately disclosed.
- **Architecture:** proprietary (shared base with Fable 5.1).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (Anthropic, looser safety than Fable 5.1's 55.8%)

Reasoning / knowledge:

- No verified public GPQA/HLE figure found for Mythos 5.1 specifically this pass

Coding:

- No verified public SWE-bench figure found for Mythos 5.1 specifically this pass (shared Fable 5.1 base implies strong coding)

Long context:

- 1,000,000-token window verified; no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 4.0 60.9% (highest of the Fable/Mythos 5.1 pair) signals strong agentic skill under looser safety.
- **Reasoning: 85/100.** Mythos-class reasoning implied by shared base; no public GPQA/HLE figure found.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 75/100.** Text + image in; no verified native audio/video.
- **Coding: 84/100.** Shared Fable 5.1 base implies strong coding; no public SWE-bench number found to confirm higher.
- **Cost efficiency: 65/100.** Institution-gated, pricing undisclosed; expected premium.
- **Overall Score: 86/100.** Mean of the five non-cost dims (87+85+99+75+84)/5 = 86.0 → 86. Best-fit: high-capability institution-gated model with top-pair agentic score, gated by limited public disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, CSDN; independent of peer `model/` findings.
- Reference URLs:
  - [Claude Mythos 5.1 — Baidu Baike](https://baike.baidu.com/item/Claude%20Mythos%205.1/68841887)
  - [Fable 5.1 & Mythos 5.1 dual release (CSDN)](https://blog.csdn.net/weixin_29138345/article/details/170701396)
