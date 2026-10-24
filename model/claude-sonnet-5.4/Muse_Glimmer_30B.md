# Claude Sonnet 5.4 — findings by Muse Glimmer 30B

- Source: Anthropic / claude-sonnet-5.4
- Date: 2026-10-24
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Sonnet 5.4
- **Short description:** Anthropic mid-2026 Sonnet with adaptive thinking, sub-turn checkpointing and computer use; 1M/128K context; paid only per internal repo meta.
- **Provider / access:** Anthropic API `claude-sonnet-5-4`, Bedrock, Vertex, OpenRouter, OpenCode Zen `opencode/claude-sonnet-5.4`
- **Release / knowledge:** Internal repo meta suggests mid-2026 release, mid-2026 knowledge cutoff. Official Anthropic public catalogue as of 2026-10-24 lists Sonnet 5.5 and Sonnet 5, no distinct Sonnet 5.4 page.
- **IDs:** `opencode/claude-sonnet-5.4` ; `anthropic/claude-sonnet-5-4`
- **Context window:** 1,000,000 total; 128,000 max output
- **Modalities:** Text and image input; text output; tool-calling, computer use
- **Pricing as of 2026-10-24:** $2.50 / 1M input, $12.50 / 1M output, $0.25 prompt cache read per repo meta and finder reports. Official Anthropic pricing page does not list Sonnet 5.4.
- **Architecture:** Proprietary frontier dense transformer with runtime effort control, sub-turn checkpointing; parameter count undisclosed.

### Raw benchmarks found

**Public official documentation**
- No distinct Claude Sonnet 5.4 system card or benchmark sheet found on anthropic.com / platform.claude.com as of 2026-10-24. Direct URL https://www.anthropic.com/claude-sonnet-5-4-system-card returns 404.

**Internal repo meta**
- average.md overall 86.8/100; Tool use 89.5, Reasoning 88.5, Context 93.5, Multimodal 71.3, Coding 90.3, Cost efficiency 76.5.

**Finder reports**
- Gemini 3.8 Flash finding 2026-10-22
  - Terminal-Bench 2.1: 80.4%
  - OSWorld-Verified: 81.2%
  - GDPval-AA v2: 1,618 Elo
  - Tau-Bench Retail: 88.2%
  - Humanity’s Last Exam: 43.2% no tools / 57.4% with tools
  - GPQA Diamond: 92.4%
  - MMLU-Pro: 89.5%
  - Artificial Analysis Intelligence Index: 52
  - SWE-bench Pro: 63.2%
  - SWE-bench Verified: 78.5%
  - LiveCodeBench: 74.0%
  - HumanEval: 96.0%
Source: E:\qwik\modelcomp\model\claude-sonnet-5.4\Gemini_3.8_Flash.md

- Gemini 3.6 Flash finding 2026-10-23
  - Terminal-Bench 2.1: 85.6%
  - GDPval-AA: 1725
  - GPQA Diamond: 91.2%
  - HLE: 45.6%
  - SWE-bench Verified / SWE-Pro: 76.8%
  - LiveCodeBench: 84.2%
  - MRCR / RULER / GraphWalks retrieval at 1M: 98.5%
Source: E:\qwik\modelcomp\model\claude-sonnet-5.4\Gemini_3.6_Flash.md

- Qwen 3.8 Max finding 2026-10-23
  - No Sonnet-5.4-specific public benchmark located. Anchors to Sonnet 5 vendor numbers:
    - SWE-bench Verified: 82.1% – Sonnet 5, 2026-06-30
    - Terminal-Bench 2.1: 80.4% – Sonnet 5
    - OSWorld-Verified: 81.2% – Sonnet 5
    - GPQA Diamond: 96.2% – Sonnet 5
    - ARC-AGI-2: 84.7% – Sonnet 5
    - AA Intelligence Index: 53 – June-2026 basket, Sonnet 5
Source: E:\qwik\modelcomp\model\claude-sonnet-5.4\Qwen_3.8_Max.md

**Conflicts / notes**
- Public official existence of Claude Sonnet 5.4 as a distinct released model is not confirmed; internal repo meta and finder reports reference the slug.
- Benchmark numbers differ between finder reports and are not corroborated by public Anthropic documentation.
- Pricing $2.50/$12.50 is consistent across repo meta and finders but absent from official pricing page.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.1 80.4% per Gemini 3.8 Flash, OSWorld-Verified 81.2%. No official Anthropic verification; provenance gap caps score.
- **Reasoning: 73/100.** GPQA Diamond 92.4% / 91.2% reported by finders, HLE 43.2% no tools / 57.4% with tools. Inconsistent provenance caps score.
- **Context window: 95/100.** 1M total / 128K max output per repo meta; retrieval 98.5% at 1M per Gemini 3.6 Flash.
- **Multimodal: 65/100.** Text and image input → text output; no audio/video native.
- **Coding: 76/100.** SWE-bench Verified 78.5% / 76.8% finder reports, LiveCodeBench 74.0% / 84.2%. Provenance not officially confirmed.
- **Cost efficiency: 68/100.** $2.50/$12.50 per 1M; mid-tier paid pricing.
- **Overall Score: 76/100.** Mean of Tool 72, Reasoning 73, Context 95, Multimodal 65, Coding 76. Use with caution due to lack of official public benchmark sheet for Sonnet 5.4.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-24
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
