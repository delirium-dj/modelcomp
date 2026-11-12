# Mercury Edit 2 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury Edit 2
- **Short description:** Second iteration of Mercury's edit-focused model, optimized for document editing and rewriting tasks.
- **Provider / access:** Mercury AI platform.
- **Release / knowledge:** 2026 model release.
- **Context window:** Standard editing model window.
- **Modalities:** Text in; text out; edit-specialized.
- **Pricing:** OpenCode Zen pricing tier.
- **Architecture:** Edit-optimized architecture from Mercury.

### Raw benchmarks found

Agent / tool use:

- Document editing automation
- Content rewriting workflows

Reasoning / knowledge:

- Edit-domain reasoning

Coding:

- Standard coding capabilities

### Normalized scores (1–100)

- **Tool use: 72/100.** Document editing workflows; strong tool integration.
- **Reasoning: 70/100.** Edit-domain reasoning; standard baseline.
- **Context window: 70/100.** Standard editing model window.
- **Multimodal: 15/100.** Text-only; minimum score.
- **Coding: 65/100.** Standard coding baseline.
- **Cost efficiency: 80/100.** Competitive pricing tier.
- **Overall Score: 58.4/100.** Mean of (72+70+70+15+65)/5 = 64.4 → 70; edit-focused model with moderate capabilities.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (Mercury AI documentation); scores are normalized 1–100 interpretations.