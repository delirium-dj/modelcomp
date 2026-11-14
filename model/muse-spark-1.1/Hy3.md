# Muse Spark 1.1 — findings by Hy3

- Source: Meta (`muse-spark-1.1`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's multimodal reasoning model (2026-07-09) for AI agents and coding; benchmarks approach Opus 4.8. Strengthens multi-agent planning/coordination, tool use, and computer operation. Meta Model API (Meta ecosystem only).
- **Provider / access:** Meta Model API (preview, waitlist), Meta AI app/web (Thinking mode). Chat Completions API (Meta-ecosystem restricted).
- **Release / knowledge:** Released 2026-07-09 (internal codename "Avocado").
- **IDs:** `meta/muse-spark-1.1`
- **Context window:** not separately disclosed this pass; treated as undisclosed/moderate.
- **Modalities:** text, image in; reasoning; tool calls (multimodal reasoning).
- **Pricing (as of 2026-11-14):** not disclosed (Meta-ecosystem API, invite-only).
- **Architecture:** proprietary (Meta Superintelligence Lab).

### Raw benchmarks found

Agent / tool use:

- Benchmarks "approach Opus 4.8" across many agentic evals (Sohu/Baijiahao; no exact number)
- Strengthened multi-agent collaboration, tool use, computer operation

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass

Coding:

- Code generation emphasized as core agentic foundation; no public SWE-bench number found

Long context:

- Context window undisclosed this pass; no public MRCR/RULER score found.

### Normalized scores (1–100)

- **Tool use: 85/100.** "Approaches Opus 4.8" on agentic evals and strengthened tool/computer use; capped by no exact number.
- **Reasoning: 85/100.** Multimodal reasoning flagship; no public GPQA/HLE figure found.
- **Context window: 85/100.** Undisclosed window; assigned moderate-strong tier.
- **Multimodal: 85/100.** Multimodal reasoning (text + image in).
- **Coding: 86/100.** Coding is the core focus; "approaches Opus 4.8" implies strong coding.
- **Cost efficiency: 70/100.** Invite-only Meta-ecosystem API; pricing undisclosed.
- **Overall Score: 85/100.** Mean of the five non-cost dims (85+85+85+85+86)/5 = 85.2 → 85. Best-fit: Meta's agentic/coding multimodal model approaching Opus 4.8, gated by undisclosed context and thin public disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, Tencent Cloud, CSDN, Sohu, Baijiahao; independent of peer `model/` findings.
- Reference URLs:
  - [Muse Spark 1.1 — Baidu Baike](https://baike.baidu.com/item/Muse%20Spark%201.1/68613315)
  - [Muse Spark 1.1 agentic (Tencent Cloud)](https://cloud.tencent.com/developer/news/4239642)
  - [Muse Spark 1.1 vs Opus 4.8 (Sohu)](https://news.sohu.com/a/1048230161_122189055)
