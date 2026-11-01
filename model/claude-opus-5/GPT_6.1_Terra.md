# Claude Opus 5 — findings by GPT-6.1 Terra

- Source: Anthropic / Claude Opus 5
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's proprietary reasoning model for coding, agentic and knowledge tasks. Anthropic now marks it legacy but still available.
- **Provider / access:** Anthropic Claude Messages API and cloud providers; model ID `claude-opus-5` ([Anthropic](https://docs.anthropic.com/en/docs/about-claude/models/whats-new-opus-5)).
- **Release / knowledge:** Vals lists release 2026-07-22; Anthropic documents a May 2026 knowledge cutoff.
- **IDs:** `claude-opus-5` on Anthropic; `anthropic/claude-opus-5` on OpenRouter. No free API route verified.
- **Context window:** 1M context and 128K maximum output ([Anthropic docs](https://docs.anthropic.com/en/docs/about-claude/models/whats-new-opus-5)).
- **Modalities:** Text and image input, text output; adaptive reasoning and tools supported.
- **Pricing (2026-11-01):** Anthropic $5 input / $0.50 cache read / $25 output per million tokens; cache writes and batch processing have separate rates ([Anthropic docs](https://docs.anthropic.com/en/docs/about-claude/models/whats-new-opus-5)).
- **Architecture:** Proprietary; parameter counts undisclosed.

### Raw benchmarks found

Agent / tool use:

- Anthropic Terminal-Bench 4.0 **52.3%** and GDPval-AA v2.1 **1708 Elo** ([Anthropic](https://www.anthropic.com/claude-opus-5-5)).
- Vals Terminal-Bench 4.0 **53.53% ± 1.34**; Terminal-Bench 2.1 **84.64%** with fallback versus **81.27%** counting fallback-assisted results as failures ([Vals](https://www.vals.ai/models/anthropic_claude-opus-5)). Different versions and settings are not directly comparable.
- Tau2-Bench, Claw-Eval and MCP-Atlas: no verified exact-model score found in this research.

Reasoning / knowledge:

- Anthropic HLE **63.6% with tools** ([Anthropic](https://www.anthropic.com/claude-opus-5-5)).
- Vals GPQA Diamond **93.43% ± 1.24** and ProofBench v1.1 **99.00% ± 1.00** ([Vals](https://www.vals.ai/models/anthropic_claude-opus-5)).
- CritPt and general hallucination rate: no verified public score found in this research.

Coding:

- Vals SWE-bench Verified **97.00% ± 0.76**, LiveCodeBench **89.03% ± 0.91**, and Vibe Code Bench v1.1 **88.40% ± 3.00** ([Vals](https://www.vals.ai/models/anthropic_claude-opus-5)); some Vals evaluations use Opus 4.8 fallback.
- Anthropic FrontierCode v1.1 Main **48.0%** ([Anthropic](https://www.anthropic.com/claude-opus-5-5)).
- SciCode: no verified public score found in this research.

Long context:

- The 1M context is documented by Anthropic; no exact-model MRCR or RULER retrieval score verified in this research.

### Normalized scores (1–100)

- **Tool use: 94/100.** Strong terminal and knowledge-work evaluations support a high score, moderated by fallback and harness differences.
- **Reasoning: 94/100.** HLE with tools, GPQA and ProofBench are strong, but benchmark performance does not guarantee reliability.
- **Context window: 95/100.** A documented 1M window earns the top size tier; no 98%+ long-range retrieval result verified.
- **Multimodal: 75/100.** Image and document input are supported; audio/video input and non-text output are not credited.
- **Coding: 95/100.** Strong Vals software and coding results are moderated by the lower FrontierCode figure and fallback caveat.
- **Cost efficiency: 68/100.** $5/$25 API rates are expensive despite discounted cache reads.
- **Overall Score: 91/100.** (94 + 94 + 95 + 75 + 95) / 5 = 90.6, rounded to 91; suitable for complex coding if its cost and legacy status fit.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark fallback and settings are distinguished above.
- Reference URLs:
  - [Anthropic model documentation](https://docs.anthropic.com/en/docs/about-claude/models/whats-new-opus-5)
  - [Anthropic benchmark comparison](https://www.anthropic.com/claude-opus-5-5)
  - [Vals independent evaluations and fallback notes](https://www.vals.ai/models/anthropic_claude-opus-5)
- Future sources: add a new file next to this one using the same headings.
