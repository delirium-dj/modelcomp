# Claude Fable 5.2 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's September 2026 model for demanding technical work, strong at coding (FrontierCode 2.0), cybersecurity (CVE rediscovery), and scientific research (black hole physics, protein folding). Same weights as Mythos 5.2 with additional cyber/biology safeguards.
- **Provider / access:** Anthropic API (`claude-fable-5-2`) via Claude API, AWS Bedrock, Azure, Google Cloud, Microsoft Foundry; also available on Claude.ai.
- **Release / knowledge:** 2026-09-22; knowledge cutoff 2026-06.
- **Context window:** 1,000,000 tokens with 128,000 max output.
- **Modalities:** Text + image + PDF in; text out; reasoning via adaptive thinking; tool calls supported.
- **Pricing (as of 2026-11-12):** $8 / $40 per 1M tokens in/out; prompt cache reads 2.5% of input; batch API 50% discount.
- **Architecture:** Proprietary Transformer-based; optimized for reasoning and agentic tasks; same weights as Mythos 5.2.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 (Xhigh effort): **66.4%** (Anthropic evaluation)
- Terminal-Bench 4.0 (Vals AI): **65.15%** (rank 1 on Vals Index)
- FrontierCode 2.0 (Xhigh): **49.1%**
- FrontierSWE v2: **69.9%**
- AutomationBench: **51.4%**
- OSWorld 2.1: **89.3%**
- MCP Atlas: **75.3%**
- GDPval: **1785 Elo**

Reasoning / knowledge:

- HLE (with tools): **63.6%**
- SciCode: **66.9%**
- Terminal-Bench-Science 0.1: **74.6%**
- Humanity's Last Exam (with tools): **74.2%**
- GPQA Diamond: estimated ~67% (contextual)
- ArXivMath: ~76.5% (contextual)

Coding:

- FrontierCode 2.0: **49.1%** (Xhigh)
- SWE-bench Pro: **45.5%**
- SWE-bench Multilingual: **~65%** (contextual)
- CursorBench 4.0: **57.8%**
- DeepSWE 1.0: **~64%** (contextual)
- HumanEval: **~94%** (contextual)

Long context:

- 1M token context tested at MRCR v2 (8-needle), 128K output; strong performance on long-horizon agentic tasks.

Multimodal:

- Chartography: **73.4%** (visual chart recognition)
- MMMU-Pro: ~88% (Vals.ai CoT)
- CharXiv: **84.1%**
- Text + image + PDF input; text output.

### Normalized scores (1–100)

- **Tool use: 93/100.** TB 4.0 66.4% (SOTA among Claude models), FrontSWE 69.9%, GDPval 1785 Elo (SOTA for knowledge work) — top-tier agentic capabilities; capped by AutomationBench 51.4% and MCP Atlas 75.3%.
- **Reasoning: 88/100.** HLE 63.6% with tools, SciCode 66.9%, Terminal-Bench-Science 74.6%, HLLE 74.2% with tools — strong reasoning but behind Opus 5.5 on some metrics.
- **Context window: 97/100.** 1M token window with strong retrieval performance; capped by output ceiling (128K) and the "≥98% at 512K+" benchmark threshold.
- **Multimodal: 73/100.** Text + image + PDF input, text output; Chartography 73.4%, MMMU-Pro 88%, CharXiv 84.1% — solid image-in capabilities but text-out only.
- **Coding: 88/100.** FrontierCode 2.0 49.1%, SWE-bench Pro 45.5%, CursorBench 57.8% — excellent for frontier agentic coding; comparable to Opus 5.5's 45.5% at lower cost.
- **Cost efficiency: 72/100.** $8/$40 maps to mid-tier pricing; more expensive than Opus 5.5 ($4/$20) but delivers competitive coding/reasoning; cheaper than Fable 5.1 ($10/$50).
- **Overall Score: 87.8/100.** Mean of (93+88+97+73+88)/5 = 87.8 → capped by scoring methodology; strong all-around for demanding technical work.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (Anthropic official announcement, Claude platform docs, system card); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Fable 5.2 and Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Claude Fable 5.2 System Card](https://www.anthropic.com/document/claude-fable-5-2-mythos-5-2-system-card)
  - [Claude Models Overview](https://platform.claude.com/docs/en/models/overview)
  - [Terminal-Bench 4.0](https://benchmarklist.com/benchmarks/terminal-bench-4)
  - [Vals AI Claude Fable 5.2](https://www.vals.ai/models/anthropic_claude-fable-5-2)