# Claude Opus 4.6 — findings by GPT 5.6 Luna

- Source: Anthropic/Claude Opus 4.6
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's legacy Opus model for difficult reasoning, coding, long-running agents, and knowledge work. It remains active but is superseded by Opus 5.5.
- **Provider / access:** Claude API, Amazon Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS; API ID `claude-opus-4-6`.
- **Release / knowledge:** Released February 5, 2026; reliable knowledge cutoff May 2025 and training-data cutoff August 2025 in the current platform documentation.
- **IDs:** `anthropic/claude-opus-4-6`; Bedrock uses `anthropic.claude-opus-4-6-v1`.
- **Context window:** 1,000,000 tokens; maximum output 128,000 tokens synchronously, with a 300K output beta for eligible batch requests.
- **Modalities:** Text and image input, text output, adaptive thinking, tool calls, search, and computer-use workflows.
- **Pricing (as of 2026-11-02):** $5 input / $25 output per 1M tokens; cache reads are $0.50/M and Batch API is 50% off. Anthropic's launch documentation lists premium $10/$37.50 pricing for prompts above 200K input tokens.
- **Architecture:** Proprietary; parameter count and internal architecture undisclosed.

### Raw benchmarks found

BenchLM separates the standard/base lane from an adaptive-thinking lane. They are reported separately because effort, harness, and thinking configuration materially change the result.

Standard/base lane:

- BenchLM overall: **61.82/100, #47 of 1,004**, with 51 of 724 benchmark rows covered.
- GPQA: **91.3%** (Anthropic system card); AA-LCR: **67.0%**; CritPt: **2.8%**.
- TerminalBenchHard: **48.5%**; Vibe Code Bench: **57.57%**; FrontierCode 1.1: **26.9%**.
- MMMU-Pro: **77.3%**; AA-MMMU-Pro: **72.5%**; ParseBench: **54.07%**.
- Artificial Analysis Intelligence Index: **26.4%**; AA-Omniscience Accuracy: **45.8%**; hallucination rate: **80.1%**.

Adaptive-thinking lane:

- τ²-bench: **92.1%**; AA-LCR: **78.0%**; ARC-AGI-1: **93.0%**; ARC-AGI-2: **68.8%**.
- AA-GPQA Diamond: **89.6%**; AA-HLE: **39.9%**; AA-IFBench: **53.1%**.
- Anthropic/independent coverage reports MRCR 1M at **76%** and Terminal-Bench 2.0 at **65.4%** under specified evaluation settings.

### Normalized scores (1–100)

- **Tool use: 86/100.** Adaptive τ²-bench at 92.1% and official tool support are strong, but the standard lane's terminal/tool results and partial independent coverage are much less uniform.
- **Reasoning: 88/100.** GPQA around 90%, ARC-AGI-1 at 93% in adaptive mode, and AA-LCR 78% support strong reasoning; HLE and CritPt are materially weaker.
- **Context window: 96/100.** The 1M window and MRCR 1M result at 76% are verified; the retrieval result is below the project's highest tier.
- **Multimodal: 86/100.** Text/image input and MMMU-Pro evidence are solid, but audio/video output and broad modality coverage are absent.
- **Coding: 88/100.** Terminal-Bench 2.0, Vibe Code Bench, and strong adaptive agent results support good coding; FrontierCode and standard-lane variance cap it.
- **Cost efficiency: 60/100.** $5/$25 plus premium long-context pricing is expensive for a legacy model, despite caching and Batch discounts.
- **Overall Score: 88.8/100.** Mean of the five quality dimensions `(86 + 88 + 96 + 86 + 88) / 5 = 88.8`; best fit is difficult coding and research-agent work when adaptive thinking is enabled.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current Anthropic platform/launch documentation and BenchLM's October 29 standard/adaptive profiles; base and adaptive lanes were kept distinct, and scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [Claude Opus 4.6 platform documentation](https://platform.claude.com/docs/en/models/opus-4-6/overview)
  - [Anthropic Opus 4.6 announcement](https://www.anthropic.com/news/claude-opus-4-6)
  - [BenchLM Claude Opus 4.6 profile](https://benchlm.ai/models/claude-opus-4-6)
  - [BenchLM Claude Opus 4.6 adaptive profile](https://benchlm.ai/models/claude-opus-4-6-thinking)
