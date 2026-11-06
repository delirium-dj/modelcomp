# GPT-5.1-Codex — findings by Mercury 3

- Source: OpenAI (GPT-5.1-Codex)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex
- **Short description:** OpenAI's specialized version of GPT-5.1 (released November 2025) optimized for agentic coding in Codex and similar environments — more steerable, instruction-adherent, and cleaner-output than the base model, built for interactive development and long independent engineering runs.
- **Provider / access:** OpenAI API (`gpt-5.1-codex`, Responses API), Codex; also via Azure and third-party routers.
- **Release / knowledge:** Released November 2025; knowledge cutoff not published in fetched sources.
- **IDs:** `openai/gpt-5.1-codex`.
- **Context window:** 400K tokens.
- **Modalities:** multimodal input (text/image); text output; configurable reasoning effort (`reasoning.effort`).
- **Pricing (as of 2025-11+):** $1.25 in / $10.00 out per 1M (batch variant $0.63 in).
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- LiveBench Agentic Coding: **53.3%** (BenchGecko)
- Coding category: 62.6 (#37 globally, BenchGecko)

Reasoning / knowledge:

- LiveBench Reasoning: **82.0%**; LiveBench Mathematics: **79.6%**; LiveBench Data Analysis: 60.8%
- Reasoning category 71.4 (#53); knowledge 68.6 (#24); math 79.6 (#32)

Coding:

- LiveBench Coding: **71.8%**
- BenchGecko composite: **77.7** (rank #26/325; 8 benchmarks)

Long context:

- 400K verified; no independent long-context retrieval benchmark captured

Multimodal:

- Multimodal input with text output

### Normalized scores (1–100)

- **Tool use: 78/100.** LiveBench Agentic Coding 53.3% is solid; the Codex-targeted design supports long independent engineering runs (vendor).
- **Reasoning: 84/100.** LiveBench Reasoning 82.0% and Math 79.6% — high for the class.
- **Context window: 85/100.** 400K verified.
- **Multimodal: 72/100.** Multimodal input, text output only.
- **Coding: 85/100.** LiveBench Coding 71.8% plus strong steerability/quality reports; agentic coding trails the top coding-agent models.
- **Cost efficiency: 68/100.** $1.25/$10 with batch $0.63 — mid-premium for the coding tier.
- **Overall Score: 81/100.** Mean of the five non-cost dims (78+84+85+72+85)/5 = 80.8 → 81. Best-fit: a strong dedicated coding model of its generation; superseded by GPT-5.3/5.4-era Codex families.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI API docs: gpt-5.1-codex model page](https://developers.openai.com/api/docs/models/gpt-5.1-codex)
  - [BenchGecko: GPT-5.1-Codex page](https://benchgecko.ai/model/gpt-5-1-codex)
  - [llm-stats: GPT-5.1-Codex](https://llm-stats.com/models/gpt-5.1-codex)
  - [OpenRouter: openai/gpt-5.1-codex](https://openrouter.ai/openai/gpt-5.1-codex)
  - [CloudPrice: GPT-5.1 Codex](https://cloudprice.net/models/openai-gpt-5-1-codex)
  - [BenchLM: GPT-5.1 (family)](https://benchlm.ai/models/gpt-5-1)
- Future sources: add a new file next to this one using the same headings.
