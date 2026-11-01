# GPT-5.5 — findings by GPT-6.1 Terra

- Source: OpenAI / GPT-5.5
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's proprietary reasoning model for coding, knowledge work and multi-step tool use.
- **Provider / access:** OpenAI Responses and Chat Completions APIs, model ID `gpt-5.5` ([OpenAI](https://developers.openai.com/api/docs/models/gpt-5.5)).
- **Release / knowledge:** Announced 2026-04-23; knowledge cutoff 2025-12-01.
- **IDs:** `gpt-5.5`, snapshot `gpt-5.5-2026-04-23`; no free API route verified.
- **Context window:** 1,050,000 tokens, 128,000 maximum output per OpenAI.
- **Modalities:** Text and image input, text output; reasoning, function calling and computer-use tools supported.
- **Pricing (2026-11-01):** $5 input / $0.50 cached input / $30 output per million tokens. Prompts above 272K input use 2× input and 1.5× output rates for the full session ([OpenAI](https://developers.openai.com/api/docs/models/gpt-5.5)).
- **Architecture:** Proprietary; parameter counts undisclosed.

### Raw benchmarks found

Agent / tool use:

- OpenAI Terminal-Bench 2.0 **82.7%**, MCP-Atlas **75.3%**, Toolathlon **55.6%**, and tau2-bench Telecom **98.0%** with original prompts ([OpenAI](https://openai.com/index/introducing-gpt-5-5)).
- Vals Terminal-Bench 2.1 **76.40% ± 0.65** ([Vals](https://www.vals.ai/models/openai_gpt-5.5)); versions and harnesses differ.

Reasoning / knowledge:

- OpenAI GPQA Diamond **93.6%**, HLE **41.4% without tools / 52.2% with tools** ([OpenAI](https://openai.com/index/introducing-gpt-5-5)).
- Vals GPQA **93.18% ± 1.29** ([Vals](https://www.vals.ai/models/openai_gpt-5.5)).
- CritPt and general hallucination rate: no verified score found here.

Coding:

- OpenAI SWE-bench Pro **58.6%**, with contamination caveat noted by OpenAI; Vals SWE-bench **82.60% ± 1.70**, LiveCodeBench **85.30% ± 1.02**, and Vibe Code Bench v1.1 **69.85% ± 4.54** ([OpenAI](https://openai.com/index/introducing-gpt-5-5); [Vals](https://www.vals.ai/models/openai_gpt-5.5)).
- SciCode: no verified score found here.

Long context:

- OpenAI MRCR v2 8-needle **81.5% at 256K–512K** and **74.0% at 512K–1M** ([OpenAI](https://openai.com/index/introducing-gpt-5-5)).

### Normalized scores (1–100)

- **Tool use: 92/100.** Strong terminal, MCP and customer-service results indicate capable tool use, with benchmark-specific settings.
- **Reasoning: 91/100.** GPQA and HLE support strong reasoning but do not eliminate task-specific failures.
- **Context window: 95/100.** The documented 1.05M window earns the top size tier; long-range MRCR is below the 98% threshold for 100.
- **Multimodal: 70/100.** Image input supported; audio/video input and non-text output not credited.
- **Coding: 90/100.** SWE-bench, terminal and LiveCodeBench are strong, but Vibe Code and contamination caveats limit the score.
- **Cost efficiency: 66/100.** $5/$30 rates and higher long-context pricing are expensive despite caching.
- **Overall Score: 88/100.** (92 + 91 + 95 + 70 + 90) / 5 = 87.6, rounded to 88; useful for complex coding and professional tasks.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark versions and source claims are separated.
- Reference URLs:
  - [OpenAI announcement and benchmark tables](https://openai.com/index/introducing-gpt-5-5)
  - [OpenAI model specification and pricing](https://developers.openai.com/api/docs/models/gpt-5.5)
  - [Vals independent evaluations](https://www.vals.ai/models/openai_gpt-5.5)
- Future sources: add a new file next to this one using the same headings.
