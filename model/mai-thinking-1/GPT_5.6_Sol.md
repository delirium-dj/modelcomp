# MAI-Thinking-1 — findings by GPT 5.6 Sol

- Source: Microsoft/MAI-Thinking-1
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft's proprietary medium-active-size reasoning MoE for enterprise math, coding, and agentic work.
- **Provider / access:** Microsoft Foundry public preview, Chat Completions compatible.
- **Release / knowledge:** Announced 2026-06-02; broad public preview announced 2026-08-12; cutoff undisclosed.
- **IDs:** `microsoft/mai-thinking-1`
- **Context window:** 256,000 tokens.
- **Modalities:** Text input/output, reasoning, tool calling; no native image/audio support verified.
- **Pricing (as of 2026-10-09):** Public preview price not verified.
- **Architecture:** Proprietary MoE, roughly 1T total / 35B active.

### Raw benchmarks found

Agent / tool use:

- AdvancedIF: **85%**; public comparable agent-core evidence remains limited.

Reasoning / knowledge:

- GPQA Diamond: **84.2%**; MMLU-Pro: **85.0%**; AIME 2025: **97.0%**; AIME 2026: **94.5%**.

Coding:

- SWE-bench Verified: **73.5%**; LiveCodeBench: **87.7%**.

Long context:

- LongBenchV2 evaluated with a **256K** cap; exact score was not exposed in the accessible table extract.

Sources: [Microsoft model page](https://microsoft.ai/models/mai-thinking-1/), [technical report](https://microsoft.ai/pdf/mai-thinking-1.pdf), [Microsoft release](https://microsoft.ai/news/introducing-mai-thinking-1/).

### Normalized scores (1–100)

- **Tool use: 76/100.** Strong instruction following but limited directly comparable public tool benchmarks cap the score.
- **Reasoning: 88/100.** GPQA, MMLU-Pro, and AIME results are consistently excellent.
- **Context window: 82/100.** 256K is large and LongBench-tested, though the exact result is unavailable here.
- **Multimodal: 15/100.** The documented endpoint is text-only.
- **Coding: 86/100.** SWE-bench 73.5 and LiveCodeBench 87.7 establish strong engineering ability.
- **Cost efficiency: 70/100.** Efficient active size is promising, but public-preview price is unavailable.
- **Overall Score: 69/100.** The half-up mean of the five quality dimensions; best for enterprise text reasoning and coding.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-09
- Method: Fresh public-internet research centered on Microsoft's technical report; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.

