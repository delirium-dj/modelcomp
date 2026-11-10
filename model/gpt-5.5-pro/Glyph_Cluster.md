# GPT-5.5 Pro — findings by Glyph Cluster

- Source: OpenAI (`openai/gpt-5.5-pro`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's higher-compute GPT-5.5 Pro reasoning model designed to produce smarter and more precise responses on difficult problems, available via the Responses API.
- **Provider / access:** OpenAI API (`gpt-5.5-pro`, Responses API including Batch; not supported on Chat Completions/Assistants/Realtime endpoints per docs). Also surfaced via providers such as OpenRouter (`openai/gpt-5.5-pro`).
- **Release / knowledge:** Snapshot/default version `gpt-5.5-pro-2026-04-23` (April 23, 2026). Knowledge cutoff: December 1, 2025 (OpenAI docs).
- **IDs:** `gpt-5.5-pro` (API model ID; default snapshot `gpt-5.5-pro-2026-04-23`).
- **Context window:** 1,050,000 tokens input context; 128,000 max output tokens (OpenAI model docs). (Artificial Analysis lists 922k for its tested configuration; official API docs are treated as primary for model limits.)
- **Modalities:** Text and image input; text output. Reasoning token support (`reasoning.effort`: medium, high default, xhigh).
- **Pricing (as of 2026-11-10):** $30.00 / 1M input tokens and $180.00 / 1M output tokens (OpenAI docs). No cached input discount noted for GPT-5.5 Pro; regional processing may add 10% uplift. OpenRouter lists $15/$90 and $30/$180 provider tiers depending on variant/routing.
- **Architecture:** Proprietary (parameter count and internal architecture not publicly disclosed).

### Raw benchmarks found

> Sources: OpenAI "Introducing GPT-5.5" announcement/evaluation tables and OpenAI API model documentation. Some benchmark rows report GPT-5.5 base but leave GPT-5.5 Pro blank; only pro-specific reported values are listed as verified for this model.

Agent / tool use:

- BrowseComp: **90.1%** (OpenAI GPT-5.5 announcement, tool-use eval table, GPT-5.5 Pro column).
- GDPval (wins or ties): **82.3%** (OpenAI announcement, model capabilities table).
- Investment Banking Modeling Tasks (Internal): **88.6%** (OpenAI announcement, professional eval table).
- FinanceAgent v1.1 / OfficeQA Pro / OSWorld-Verified / Toolathlon / MCP Atlas / Tau2-bench: GPT-5.5 Pro-specific score not reported in the fetched pro column (base GPT-5.5 scores reported separately); no verified public standalone pro score found.

Reasoning / knowledge:

- FrontierMath Tier 1–3: **52.4%** (OpenAI announcement, academic eval table).
- FrontierMath Tier 4: **39.6%** (OpenAI announcement).
- Humanity's Last Exam (no tools): **43.1%** (OpenAI announcement).
- Humanity's Last Exam (with tools): **57.2%** (OpenAI announcement).
- GeneBench: **33.2%** (OpenAI announcement).
- GPQA Diamond / ARC-AGI-1 / ARC-AGI-2 / BixBench: GPT-5.5 Pro-specific score not reported in fetched pro column; no verified public standalone pro score found.

Coding:

- SWE-Bench Pro / Terminal-Bench 2.0 / Expert-SWE: GPT-5.5 Pro-specific score not reported in fetched pro column (base GPT-5.5 reported); no verified public standalone pro coding score found.
- LiveCodeBench / SciCode: no verified public score found for pro.

Long context:

- 1,050,000-token context window and 128k max output per OpenAI docs. Long-context benchmark table in announcement reports GPT-5.5 base results; GPT-5.5 Pro-specific long-context retrieval scores not reported in fetched data. No verified MRCR/GraphWalks pro-specific score found.

Multimodal:

- Image input supported per OpenAI docs; text output. MMMU Pro and other vision benchmark pro-specific scores not reported in fetched pro columns. No verified public standalone multimodal benchmark score found for pro.

### Normalized scores (1–100)

> Derived from OpenAI's verified public announcement/evals and API documentation. Pro-specific public benchmark coverage is limited in accessible sources, so several dimensions are capped by evidence availability. Scores are normalized interpretations, not official vendor scores. Cost excluded from Overall.

- **Tool use: 88/100.** Strong verified pro results on high-value tasks: BrowseComp 90.1% and GDPval 82.3%, plus internal investment-banking modeling 88.6% indicating capable tool/analysis workflows. Capped by sparse pro-specific agentic benchmark reporting (no pro scores shown for OSWorld, Toolathlon, MCP Atlas, Tau2-bench in fetched tables).
- **Reasoning: 89/100.** Verified strength on difficult reasoning/scientific tasks: FrontierMath 52.4% (Tier 1–3) and 39.6% (Tier 4), HLE 43.1% (no tools) / 57.2% (with tools), GeneBench 33.2%. Capped by missing pro-specific GPQA/ARC/BixBench disclosures in fetched sources.
- **Context window: 96/100.** Large 1.05M-token context and 128k max output per official API docs, suitable for long documents and agent traces. Capped because verified pro-specific long-context retrieval quality benchmarks were not found.
- **Multimodal: 72/100.** Supports image input and text output per official docs, enabling visual understanding workflows. Capped by lack of verified pro-specific multimodal benchmark scores and no audio/video/generative multimodal evidence in fetched sources.
- **Coding: 80/100.** As a high-compute OpenAI reasoning model in the GPT-5.5 family it is positioned for complex work, but fetched public tables do not report GPT-5.5 Pro-specific coding benchmark results (base GPT-5.5 results are reported separately). Score is capped by limited direct coding evidence for this exact pro model.
- **Cost efficiency: 20/100.** Premium pricing at $30/$180 per 1M input/output tokens (no cached input discount noted) is very expensive, appropriate only when maximum precision/compute justifies cost.
- **Overall Score: 85/100.** Mean of non-cost dimensions (88 + 89 + 96 + 72 + 80) / 5 = 85.0. Best fit for difficult reasoning, research, and high-stakes analysis where premium compute and long context are valuable and cost is secondary.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research (OpenAI API model documentation, OpenAI "Introducing GPT-5.5" announcement/evaluations, OpenRouter model page, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI API docs — GPT-5.5 Pro](https://platform.openai.com/docs/models/gpt-5.5-pro)
  - [OpenAI — Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5/)
  - [Artificial Analysis — GPT-5.5 Pro (Xhigh)](https://artificialanalysis.ai/models/gpt-5-5-pro)
  - [OpenRouter — openai/gpt-5.5-pro](https://openrouter.ai/openai/gpt-5.5-pro)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
