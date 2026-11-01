# Claude Opus 4.7 — findings by GPT-6.1 Terra

- Source: Anthropic / Claude Opus 4.7
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's proprietary previous-generation model for coding, agents and image understanding; it remains available as a legacy model.
- **Provider / access:** Anthropic Messages API and cloud platforms using `claude-opus-4-7` ([Anthropic](https://platform.claude.com/docs/en/models/opus-4-7/overview)).
- **Release / knowledge:** Released 2026-04-16; knowledge cutoff January 2026 per Anthropic.
- **IDs:** `claude-opus-4-7`; no free API route verified.
- **Context window:** 1M tokens, 128K synchronous maximum output.
- **Modalities:** Text and image input, text output; adaptive reasoning and tool use.
- **Pricing (2026-11-01):** $5 input / $0.50 cache read / $25 output per million tokens ([Anthropic](https://platform.claude.com/docs/en/models/opus-4-7/overview)).
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 2.1 **68.54% ± 1.30** ([Vals](https://www.vals.ai/models/anthropic_claude-opus-4-7)).
- OpenAI reports MCP-Atlas **79.1%** for Opus 4.7 ([OpenAI](https://openai.com/index/introducing-gpt-5-5)); harness and grading are source-specific.
- Tau2-Bench, Claw-Eval and Terminal-Bench 4.0: no exact-model score verified here.

Reasoning / knowledge:

- Vals GPQA Diamond **90.15% ± 1.54**; OpenAI comparative HLE **46.9% without tools / 54.7% with tools** ([Vals](https://www.vals.ai/models/anthropic_claude-opus-4-7); [OpenAI](https://openai.com/index/introducing-gpt-5-5)).
- CritPt and general hallucination rate: no verified result found here.

Coding:

- Vals SWE-bench **82.00% ± 1.72**, LiveCodeBench **85.07% ± 1.01**, Vibe Code Bench v1.1 **71.00% ± 4.51**, Code Migration **43.88% ± 4.22** ([Vals](https://www.vals.ai/models/anthropic_claude-opus-4-7)).
- Anthropic notes potential memorization in subsets of SWE-bench evaluations ([Anthropic](https://www.anthropic.com/news/claude-opus-4-7)).

Long context:

- Anthropic documents a 1M window; no exact-model 512K+ MRCR retrieval percentage verified here.

### Normalized scores (1–100)

- **Tool use: 88/100.** Vals terminal and MCP-Atlas evidence support strong tool use, limited by missing newer agent benchmarks.
- **Reasoning: 90/100.** GPQA and HLE with tools are strong, though results vary by evaluation setup.
- **Context window: 95/100.** A documented 1M window earns the top size tier; no 98%+ 512K retrieval result verified.
- **Multimodal: 75/100.** Image/document input supported; audio/video input and non-text output not credited.
- **Coding: 88/100.** Vals SWE-bench and LiveCodeBench are strong but migration, Vibe Code and memorization caveats limit the score.
- **Cost efficiency: 68/100.** $5/$25 pricing is substantial, particularly for a legacy model.
- **Overall Score: 87/100.** (88 + 90 + 95 + 75 + 88) / 5 = 87.2, rounded to 87; useful for established coding workflows.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark settings and memorization caveats are identified.
- Reference URLs:
  - [Anthropic model specifications](https://platform.claude.com/docs/en/models/opus-4-7/overview)
  - [Anthropic launch and benchmark caveats](https://www.anthropic.com/news/claude-opus-4-7)
  - [Vals independent evaluations](https://www.vals.ai/models/anthropic_claude-opus-4-7)
  - [OpenAI comparative evaluations](https://openai.com/index/introducing-gpt-5-5)
- Future sources: add a new file next to this one using the same headings.
