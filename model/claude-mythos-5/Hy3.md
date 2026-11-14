# Claude Mythos 5 — findings by Hy3

- Source: Anthropic (`claude-mythos-5`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Anthropic's "Mythos-class" model (released alongside Fable 5, 2026-06-10); shares the Fable 5 base model with looser safety restrictions, distributed via Project Glasswing to vetted institutions.
- **Provider / access:** Anthropic API via Project Glasswing (vetted orgs only), AWS Bedrock, Google Cloud, Microsoft Azure (`claude-mythos-5`). Messages / Chat Completions API.
- **Release / knowledge:** Released 2026-06-10.
- **IDs:** `anthropic/claude-mythos-5`
- **Context window:** 1,000,000 tokens (Claude 5 series).
- **Modalities:** text in/out; image in; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** not separately disclosed (institution-gated).
- **Architecture:** proprietary (shared base with Fable 5).

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench / OSWorld figure found for Mythos 5 specifically this pass

Reasoning / knowledge:

- No verified public GPQA/HLE figure found for Mythos 5 specifically this pass

Coding:

- SWE-bench Pro: **80.3%** (Anthropic / third-party, shared base with Fable 5)
- Claimed able to migrate a codebase in one day that previously took a team two months

Long context:

- 1,000,000-token window verified; no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 83/100.** Institution-gated agentic use; no public agentic benchmark number found (inferred from Fable 5 base).
- **Reasoning: 84/100.** Mythos-class reasoning implied by base; no public GPQA/HLE figure found.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 72/100.** Text + image in; no verified native audio/video.
- **Coding: 85/100.** SWE-bench Pro 80.3% is strong; held below elite by single-data-point base.
- **Cost efficiency: 65/100.** Institution-gated, pricing undisclosed; expected premium.
- **Overall Score: 85/100.** Mean of the five non-cost dims (83+84+99+72+85)/5 = 84.6 → 85. Best-fit: high-capability institution-gated model sharing Fable 5's strong coding base, gated by limited public disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, Tencent Cloud dev community, CSDN; independent of peer `model/` findings.
- Reference URLs:
  - [Claude Fable 5 & Mythos 5 — Baidu Baike](https://baike.baidu.com/item/Claude%20Fable%205%E4%B8%8EMythos%205/68959590)
  - [Anthropic releases Fable 5 & Mythos 5 (Tencent Cloud)](https://cloud.tencent.com/developer/article/2686832)
  - [SWE-bench Pro 80.3% analysis (CSDN)](https://blog.csdn.net/weixin_35756624/article/details/170284340)
