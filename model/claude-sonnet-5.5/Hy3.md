# Claude Sonnet 5.5 — findings by Hy3

- Source: Anthropic, Claude Sonnet 5.5 (Claude 5.5 family)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's balanced-performance model in the Claude 5.5 family (after Opus 5.5, before Haiku 5.5). Released 2026-09-29, runs >30% faster than Sonnet 5; Anthropic states it *outperforms Opus 5.5 on agentic coding* thanks to cheaper multi-agent orchestration. Strong cybersecurity posture.
- **Provider / access:** Anthropic API (`claude-sonnet-5-5`), Amazon Bedrock, Google Vertex AI, Microsoft Foundry. Chat Completions / Messages API; tool use; vision.
- **Release / knowledge:** Released 2026-09-29; knowledge cutoff updated for 5.5 family.
- **IDs:** `claude-sonnet-5-5` (Anthropic / Bedrock / Vertex).
- **Context window:** 1M tokens (Claude 5.5 family tier).
- **Modalities:** Text + image in / text out; vision (high-res); tool/function calling; JSON mode; effort controls.
- **Pricing (as of 2026-11-14):** ~$3–5 in / ~$15 out per 1M (Sonnet-tier, estimated; confirm at source).
- **Architecture:** Anthropic proprietary transformer; proprietary size.

### Raw benchmarks found

Agent / tool use:

- Agentic coding: Anthropic reports Sonnet 5.5 **outperforms Opus 5.5** on agentic-coding tasks (multi-agent orchestration at lower cost). No exact TAU/Terminal-Bench number published for Sonnet 5.5 specifically this pass.

Reasoning / knowledge:

- No standalone GPQA/HLE number published for Sonnet 5.5 this pass; positioned just below Opus 5.5 / Fable tier.

Coding:

- Agentic coding benchmark-leading per Anthropic (multi-agent); exact SWE-bench Verified not separately published for Sonnet 5.5 this pass.

Long context:

- 1M context supported; no MRCR/RULER number found for Sonnet 5.5 specifically.

### Normalized scores (1–100)

- **Tool use: 93/100.** Best-in-class agentic tool use; Anthropic explicitly rates it above Opus 5.5 for agentic coding via cheap multi-agent orchestration.
- **Reasoning: 93/100.** Near-frontier reasoning within the Claude 5.5 family.
- **Context window: 92/100.** 1M-token window → top tier.
- **Multimodal: 90/100.** Strong vision (high-res image understanding) plus text.
- **Coding: 95/100.** Agentic-coding-leading; the headline strength of this release.
- **Cost efficiency: 70/100.** Sonnet-tier pricing (~$3–5/$15) — capable but not cheap.
- **Overall Score: 93/100.** Mean of five non-cost dims = (93+93+92+90+95)/5 = 463/5 = 92.6 → 93. Best fit: high-throughput agentic coding and general assistant where speed + tool use matter more than raw Opus depth.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: Independent web research; no peer model/*/*.md read during research.
- Reference URLs:
  - [Claude 5.5 系列 — Baidu Baike](https://baike.baidu.com/item/Claude%205.5%E7%B3%BB%E5%88%97/69133358)
  - [Sonnet 5.5 — Baidu Baike](https://baike.baidu.com/item/Sonnet%205.5/69205696)
  - [Anthropic 发布 Sonnet 5.5 — Baidu Baijiahao](https://baijiahao.baidu.com/s?id=1877628084870883051)
