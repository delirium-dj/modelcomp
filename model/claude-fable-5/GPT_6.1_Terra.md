# Claude Fable 5 — findings by GPT-6.1 Terra

- Source: Anthropic / Claude Fable 5
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's general-access, safeguarded model for complex coding and knowledge work. It is now a legacy model; some evaluations use Opus 4.8 fallback.
- **Provider / access:** Anthropic Claude Messages API and supported cloud providers, under model ID `claude-fable-5` ([Anthropic](https://platform.claude.com/docs/en/models/fable-5/overview)).
- **Release / knowledge:** Released 2026-06-09; knowledge cutoff January 2026 ([Anthropic](https://platform.claude.com/docs/en/models/fable-5/overview)).
- **IDs:** Anthropic `claude-fable-5`; OpenRouter `anthropic/claude-fable-5`. No free API route verified.
- **Context window:** 1M tokens and 128K maximum output ([Anthropic docs](https://platform.claude.com/docs/en/models/fable-5/overview)).
- **Modalities:** Text and image input, text output; adaptive thinking and tools supported.
- **Pricing (2026-11-01):** Anthropic $10 input / $1 cache read / $50 output per million tokens; cache writes and batch have separate rates ([Anthropic docs](https://platform.claude.com/docs/en/models/fable-5/overview)).
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 **42.0%**, Anthropic comparison ([Anthropic](https://www.anthropic.com/claude-fable-and-mythos-5-1)).
- Vals Terminal-Bench 4.0 **41.41% ± 1.34**; Terminal-Bench 2.1 **80.52%** in Vals' release run, where some refusals fell back to Opus 4.8 ([Vals](https://www.vals.ai/models/anthropic_claude-fable-5)). Versions are not interchangeable.
- Tau2-Bench, Claw-Eval and MCP-Atlas: no verified exact-model score found in this research.

Reasoning / knowledge:

- Vals GPQA Diamond **93.18% ± 1.94**, with fallback possible, and ProofBench v1.1 **95.00% ± 2.19** ([Vals](https://www.vals.ai/models/anthropic_claude-fable-5)).
- HLE **63.8% with tools**, OpenAI comparative evaluation ([OpenAI](https://openai.com/index/gpt-6-astra)); conditions can differ from Anthropic's runs.
- CritPt and general hallucination rate: no verified public score found in this research.

Coding:

- Vals SWE-bench Verified **95.00% ± 0.98**, Vibe Code Bench v1.1 **90.35% ± 2.10**, LiveCodeBench **89.78% ± 0.89**, and Code Migration **55.06% ± 4.61** ([Vals](https://www.vals.ai/models/anthropic_claude-fable-5)).
- SciCode: no verified public score found in this research.

Long context:

- Anthropic documents a 1M-token window; no exact-deployment MRCR or RULER retrieval score verified in this research.

### Normalized scores (1–100)

- **Tool use: 92/100.** Good independently evaluated terminal results are qualified by the lower newer-benchmark result and fallback policy.
- **Reasoning: 93/100.** GPQA, HLE with tools and ProofBench are strong, but provider and fallback settings limit direct attribution.
- **Context window: 95/100.** The documented 1M window enters the top size tier; no 98%+ long-context retrieval result was verified.
- **Multimodal: 75/100.** Image and document input supported; no audio/video input or non-text output is credited.
- **Coding: 94/100.** Strong independent SWE-bench and Vibe Code scores are moderated by code migration and fallback caveats.
- **Cost efficiency: 58/100.** $10/$50 pricing is expensive and the model is now legacy.
- **Overall Score: 90/100.** (92 + 93 + 95 + 75 + 94) / 5 = 89.8, rounded to 90; useful for demanding tasks when its pricing and safeguards fit.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Fallback-assisted results are not assumed to be pure Fable inference.
- Reference URLs:
  - [Anthropic model specifications and pricing](https://platform.claude.com/docs/en/models/fable-5/overview)
  - [Anthropic later benchmark comparison](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [Vals independent evaluations and fallback notes](https://www.vals.ai/models/anthropic_claude-fable-5)
  - [OpenAI comparative evaluations](https://openai.com/index/gpt-6-astra)
- Future sources: add a new file next to this one using the same headings.
