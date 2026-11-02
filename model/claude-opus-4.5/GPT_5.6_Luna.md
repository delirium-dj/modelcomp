# Claude Opus 4.5 — findings by GPT 5.6 Luna

- Source: Anthropic / Claude Opus 4.5
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's earlier flagship for coding, reasoning, computer use, and agentic work. It is a legacy model distinct from Opus 4.8 and Opus 5.5.
- **Provider / access:** Claude API, Amazon Bedrock, Google Cloud, Microsoft Foundry, and other Anthropic cloud integrations; extended thinking and tools are supported.
- **Release / knowledge:** Released 2025-11-24; reliable knowledge cutoff May 2025. Anthropic's current documentation marks it legacy and says retirement is not sooner than 2026-11-24.
- **IDs:** API snapshot `anthropic/claude-opus-4-5-20251101` / `claude-opus-4-5-20251101`; API alias `claude-opus-4-5`.
- **Context window:** 200K tokens; maximum output 64K tokens (Anthropic model documentation).
- **Modalities:** Text and image input, text output, extended thinking, and tool use.
- **Pricing (as of 2026-11-02):** $5 input / $25 output per 1M tokens; $0.50 per 1M cached-read tokens, with 50% Batch API discounts.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

> Anthropic's system-card results use a 200K context, five-trial evaluation, and a 64K thinking budget except where noted. BenchLM's 2026-10-29 profile adds independent and comparison-table rows; it is partial coverage and is not treated as an official composite.

Agent / tool use:

- Terminal-Bench 2.0: **59.3%**; OSWorld-Verified: **66.3%** (Anthropic system card).
- tau2-bench: **86.3%** (Artificial Analysis); tau3-bench: **70.2%**; Claw-Eval: **59.6%**; Toolathlon: **43.5%**; MCP Atlas: **42.3%** (BenchLM profile and cited independent/comparison sources).
- BenchLM reports only partial coverage: its composite is **53.35/100**, rank **#88/1004**, across 73/724 tracked benchmarks.

Reasoning / knowledge:

- GPQA: **87.0%** (system card); HLE: **30.8%**; LongBench v2: **64.4%**; AA-LCR: **70.7%**; CritPt: **0.3%** (BenchLM and cited source tables).
- Artificial Analysis Intelligence Index: **23.7**; AA-HLE: **13.2%**; AA omniscience accuracy / hallucination rate: **40.9% / 76.2%** (BenchLM/Artificial Analysis).

Coding:

- SWE-bench Verified: **80.9%**; Terminal-Bench 2.0: **59.3%** (Anthropic system card).
- LiveCodeBench v6: **84.8%**; SWE-bench Pro: **57.1%**; SWE Multilingual: **77.5%** (BenchLM comparison profile; harnesses are not the system-card harness).

Multimodal:

- MMMU-Pro: **70.6%**; OmniDocBench 1.5: **87.7%**; Video-MME: **77.6% with subtitles / 81.4% without**; MathVision: **74.3%** (BenchLM comparison profile).
- The exact model supports image input and text output; no audio input or non-text output was verified.

Long context:

- Official capacity is **200K**. AA-LCR is **70.7%**, but no exact MRCR/RULER full-window curve was found.

### Normalized scores (1–100)

- **Tool use: 84/100.** OSWorld 66.3%, Terminal-Bench 59.3%, and strong tau2-bench performance support capable agents, while MCP Atlas 42.3% and partial coverage cap the score.
- **Reasoning: 83/100.** GPQA 87%, broad math/knowledge evidence, and HLE 30.8% are strong; the low independent index, CritPt, and hallucination result prevent a frontier score.
- **Context window: 70/100.** The verified 200K window is useful but is the methodology's baseline 200K tier, below current 1M systems and without a full-window retrieval curve.
- **Multimodal: 80/100.** Image input plus useful document, video, and MMMU-Pro results earn a high image/multimodal score; output remains text-only and benchmark coverage is mixed.
- **Coding: 88/100.** SWE-bench Verified 80.9%, LiveCodeBench 84.8%, and strong multilingual coding support a high score; SWE-Pro 57.1% and Terminal-Bench 59.3% cap it.
- **Cost efficiency: 68/100.** $5/$25 is materially cheaper than the original Opus pricing but remains expensive against current high-throughput models.
- **Overall Score: 81.0/100.** `(84 + 83 + 70 + 80 + 88) / 5 = 81.0`; best fit is established Anthropic coding and agent workflows that value compatibility over context size or price.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current Anthropic model documentation and launch material, the official system-card link, and BenchLM's October 29 partial profile. Exact-model rows were separated from comparison tables and successor models; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Opus 4.5 model documentation](https://platform.claude.com/docs/en/models/opus-4-5/overview)
  - [Anthropic Claude Opus 4.5 announcement](https://www.anthropic.com/news/claude-opus-4-5)
  - [Claude Opus 4.5 system card](https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf)
  - [BenchLM Claude Opus 4.5 profile](https://benchlm.ai/models/claude-opus-4-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
