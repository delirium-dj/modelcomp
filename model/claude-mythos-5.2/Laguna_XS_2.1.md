# Claude Mythos 5.2 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Anthropic's invite-only cybersecurity and life-sciences specialist model (same weights as Fable 5.2 but with cyber/biology safeguards), available through Project Glasswing for vetted organizations.
- **Provider / access:** Anthropic API (`claude-mythos-5-2`), AWS Bedrock, Google Cloud, Microsoft Foundry — access by invitation only through Cyber/Life Sciences Verification Programs.
- **Release / knowledge:** 2026-09-22; knowledge cutoff 2026-06 (same as Fable 5.2).
- **Context window:** 1,000,000 tokens with 128,000 max output.
- **Modalities:** Text + image + PDF in; text out; reasoning via adaptive thinking; tool calls supported.
- **Pricing (as of 2026-11-12):** $8 / $40 per 1M tokens in/out; identical to Fable 5.2.
- **Architecture:** Proprietary Transformer-based; same weights as Fable 5.2; optimized for cybersecurity and life sciences.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (Xhigh): **66.4%** (Anthropic evaluation, top-tier)
- Terminal-Bench 4.0 (Vals AI): **65.15%** (rank 1)
- FrontierCode 2.0: **49.1%**
- FrontierSWE v2: **69.9%**
- AutomationBench: **51.4%**
- OSWorld 2.1: **89.3%**
- CVE Rediscovery: **89.6%** (Cyber evaluation)
- MCP Atlas: **75.3%**

Reasoning / knowledge:

- HLE (with tools): **63.6%**
- SciCode: **66.9%**
- Terminal-Bench-Science 0.1: **74.6%**
- Humanity's Last Exam (with tools): **74.2%**
- Protein design de novo binder: **85.1%**

Coding:

- FrontierCode 2.0: **49.1%** (Xhigh)
- SWE-bench Pro: **45.5%**
- CursorBench 4.0: **57.8%**

Long context:

- 1M token context window; strong performance on long-horizon agentic tasks.

Multimodal:

- Chartography: **73.4%** (visual chart recognition)
- MMMU-Pro: ~88% (Vals.ai CoT)
- CharXiv: **84.1%**
- Text + image + PDF input; text output.

### Normalized scores (1–100)

- **Tool use: 93/100.** TB 4.0 66.4% (SOTA), FrontSWE 69.9%, GDPval 1785 Elo — top-tier agentic capabilities; same as Fable 5.2.
- **Reasoning: 88/100.** HLE 63.6% with tools, SciCode 66.9%, Terminal-Bench-Science 74.6%, protein design 85.1% — strong reasoning, competitive with Fable 5.2.
- **Context window: 97/100.** 1M token window with strong retrieval; same as Fable 5.2.
- **Multimodal: 73/100.** Text + image + PDF in, text out only; Chartography 73.4%, MMMU-Pro 88%, CharXiv 84.1% — solid imaging capabilities.
- **Coding: 88/100.** FrontierCode 2.0 49.1%, SWE-bench Pro 45.5%, CursorBench 57.8% — identical to Fable 5.2.
- **Cost efficiency: 72/100.** $8/$40 same as Fable 5.2; same pricing tier.
- **Overall Score: 87.8/100.** Mean of (93+88+97+73+88)/5 = 87.8 → capped by scoring methodology; same scores as Fable 5.2 (different model family, same weights, different safeguards).

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (Anthropic official announcement, Claude platform docs, system card); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Fable 5.2 and Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Claude Fable 5.2 System Card](https://www.anthropic.com/document/claude-fable-5-2-mythos-5-2-system-card)
  - [Claude Models Overview](https://platform.claude.com/docs/en/models/overview)
  - [Vals AI Claude Fable 5.2](https://www.vals.ai/models/anthropic_claude-fable-5-2)