# Claude Opus 4.8 — findings by GPT-6.1 Terra

- Source: Anthropic / Claude Opus 4.8
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's previous-generation model for coding, reasoning and agentic work; Anthropic lists it as active legacy.
- **Provider / access:** Anthropic Messages API and supported cloud platforms; ID `claude-opus-4-8` ([Anthropic](https://platform.claude.com/docs/en/models/opus-4-8/overview)).
- **Release / knowledge:** Released 2026-05-28; knowledge cutoff January 2026 per Anthropic.
- **IDs:** Anthropic `claude-opus-4-8`; no free API route verified.
- **Context window:** 1M tokens and 128K synchronous maximum output per Anthropic.
- **Modalities:** Text and image input, text output; adaptive thinking and tools supported.
- **Pricing (2026-11-01):** $5 input / $0.50 cache read / $25 output per million tokens; cache writes and batch are separately priced ([Anthropic](https://platform.claude.com/docs/en/models/opus-4-8/overview)).
- **Architecture:** Proprietary; parameter counts undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 2 **70.04%** and Terminal-Bench 4.0 **23.23% ± 1.34** ([Vals](https://www.vals.ai/models/anthropic_claude-opus-4-8)); versions and harnesses differ.
- Anthropic's launch quotes a partner's Online-Mind2Web **84%** ([Anthropic](https://www.anthropic.com/news/claude-opus-4-8)).
- Tau2-Bench, Claw-Eval and MCP-Atlas: no exact-model score verified in this research.

Reasoning / knowledge:

- Vals GPQA Diamond **92.42% ± 1.98**; OpenAI comparative HLE **57.9% with tools** ([Vals](https://www.vals.ai/models/anthropic_claude-opus-4-8); [OpenAI](https://openai.com/index/gpt-5-6)).
- CritPt and hallucination rate: no verified exact-model result found here.

Coding:

- Vals SWE-bench **88.60% ± 1.42**, LiveCodeBench **87.82% ± 0.95**, Vibe Code Bench v1.1 **82.72% ± 3.08** and Code Migration **47.25% ± 4.18** ([Vals](https://www.vals.ai/models/anthropic_claude-opus-4-8)).
- SciCode: no verified score found in this research.

Long context:

- Anthropic documents 1M tokens; no exact-model MRCR or RULER long-range retrieval percentage verified here.

### Normalized scores (1–100)

- **Tool use: 88/100.** Older terminal and browser results are strong, but the independent newer terminal score is lower.
- **Reasoning: 91/100.** GPQA and HLE with tools support a strong rating; vendor and independent settings differ.
- **Context window: 95/100.** A documented 1M window enters the top size tier; no 98%+ long-range retrieval result verified.
- **Multimodal: 75/100.** Image and document input supported; no audio/video input or non-text output credited.
- **Coding: 90/100.** Independent SWE-bench and Vibe Code are strong, moderated by migration and harder terminal results.
- **Cost efficiency: 68/100.** $5/$25 rates remain expensive for a legacy model.
- **Overall Score: 88/100.** (88 + 91 + 95 + 75 + 90) / 5 = 87.8, rounded to 88; suitable for established workflows where its cost is acceptable.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark versions and third-party evaluations are distinguished.
- Reference URLs:
  - [Anthropic model specifications and pricing](https://platform.claude.com/docs/en/models/opus-4-8/overview)
  - [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-8)
  - [Vals independent evaluations](https://www.vals.ai/models/anthropic_claude-opus-4-8)
  - [OpenAI comparative evaluation](https://openai.com/index/gpt-5-6)
- Future sources: add a new file next to this one using the same headings.
