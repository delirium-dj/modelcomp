# GPT-5.4 Pro — findings by Glyph Cluster

- Source: OpenAI (`openai/gpt-5.4-pro`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro (GPT-5.4 Pro / xhigh reasoning configuration referenced in evaluations)
- **Short description:** OpenAI's higher-compute GPT-5.4 Pro reasoning model designed for tougher problems with smarter and more precise responses, available via the Responses API.
- **Provider / access:** OpenAI API (`gpt-5.4-pro`, Responses API only per docs; not supported on Chat Completions/Assistants/Batch in fetched docs). Also surfaced via providers/aggregators in some contexts.
- **Release / knowledge:** Snapshot/default version `gpt-5.4-pro-2026-03-05` (March 5, 2026). Knowledge cutoff: August 31, 2025 (OpenAI docs).
- **IDs:** `gpt-5.4-pro` (API model ID; default snapshot `gpt-5.4-pro-2026-03-05`).
- **Context window:** 1,050,000 tokens input context; 128,000 max output tokens (OpenAI model docs).
- **Modalities:** Text and image input; text output. Reasoning token support (`reasoning.effort`: medium default, high, xhigh).
- **Pricing (as of 2026-11-10):** $30.00 / 1M input tokens and $180.00 / 1M output tokens (OpenAI docs). Prompts >272K input tokens priced at 2x input and 1.5x output for the full session (standard/batch/flex contexts noted in docs). Regional processing may add 10% uplift.
- **Architecture:** Proprietary (parameter count and internal architecture not publicly disclosed).

### Raw benchmarks found

> Sources: OpenAI API model documentation and OpenAI "Introducing GPT-5.5" comparison/evaluation tables (GPT-5.4 Pro column). Pro-specific values reported in that table are treated as verified for this exact model; rows where pro is blank are not claimed.

Agent / tool use:

- BrowseComp: **89.3%** (OpenAI GPT-5.5 announcement, tool-use table).
- GDPval (wins or ties): **82.0%** (OpenAI announcement, capabilities/professional tables).
- FinanceAgent v1.1: **61.5%** (OpenAI announcement, professional table).
- Investment Banking Modeling Tasks (Internal): **83.6%** (OpenAI announcement).
- OSWorld-Verified / Toolathlon / MCP Atlas / Tau2-bench: GPT-5.4 Pro-specific score not reported in fetched pro column; no verified public standalone pro score found.

Reasoning / knowledge:

- GPQA Diamond: **94.4%** (OpenAI announcement, academic table).
- Humanity's Last Exam (no tools): **42.7%** (OpenAI announcement).
- Humanity's Last Exam (with tools): **58.7%** (OpenAI announcement).
- FrontierMath Tier 1–3: **50.0%** (OpenAI announcement).
- FrontierMath Tier 4: **38.0%** (OpenAI announcement).
- GeneBench: **25.6%** (OpenAI announcement).
- ARC-AGI-1 (Verified): **94.5%** (OpenAI announcement, abstract reasoning table).
- ARC-AGI-2 (Verified): **83.3%** (OpenAI announcement).
- BixBench: no verified public pro-specific score found in fetched table.

Coding:

- SWE-Bench Pro / Terminal-Bench 2.0 / Expert-SWE: GPT-5.4 Pro-specific score not reported in fetched pro column (base GPT-5.4 reported separately); no verified public standalone pro coding score found.
- CyberGym / internal CTF: no verified public pro-specific score found in fetched tables.

Long context:

- 1,050,000-token context window and 128k max output per OpenAI docs. GPT-5.4 Pro-specific long-context retrieval benchmark scores (MRCR/Graphwalks) not reported in fetched tables.

Multimodal:

- Image input supported per OpenAI docs; text output. MMMU Pro pro-specific scores not reported in fetched pro column; no verified public standalone multimodal benchmark score found for pro.

### Normalized scores (1–100)

> Derived from OpenAI's verified public announcement/evals and API documentation. Pro-specific public benchmark coverage is limited in some areas; scores are normalized interpretations, not official vendor scores. Cost excluded from Overall.

- **Tool use: 87/100.** Strong verified pro results on browse/knowledge-work and finance tasks: BrowseComp 89.3%, GDPval 82.0%, FinanceAgent 61.5%, and internal investment-banking modeling 83.6%. Capped by missing pro-specific disclosures for OSWorld, Toolathlon, MCP Atlas, and Tau2-bench.
- **Reasoning: 93/100.** Excellent verified reasoning/academic performance: GPQA Diamond 94.4%, ARC-AGI-1 94.5% and ARC-AGI-2 83.3%, FrontierMath 50.0%/38.0%, HLE 42.7% (no tools) / 58.7% (with tools). Capped by moderate GeneBench (25.6%) and limited coverage on some suites.
- **Context window: 96/100.** Large 1.05M-token context and 128k max output per official docs, with long-context pricing tier signaling support for very large prompts. Capped because verified pro-specific long-context retrieval quality benchmarks were not found.
- **Multimodal: 72/100.** Supports image input and text output per official docs. Capped by lack of verified pro-specific multimodal benchmark scores and no audio/video or generative multimodal evidence in fetched sources.
- **Coding: 80/100.** High-compute reasoning model in a strong coding family, but fetched public tables do not report GPT-5.4 Pro-specific coding benchmark results (base GPT-5.4 results reported separately). Score capped by limited direct coding evidence for this exact pro model.
- **Cost efficiency: 20/100.** Premium pricing at $30/$180 per 1M input/output tokens (with higher long-context rates above 272K input) is very expensive, suitable only for highest-value tasks.
- **Overall Score: 86/100.** Mean of non-cost dimensions (87 + 93 + 96 + 72 + 80) / 5 = 85.6, rounded to 86. Best fit for difficult reasoning, research, and high-stakes analysis requiring strong abstract/math performance and long context where cost is secondary.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research (OpenAI API model documentation, OpenAI "Introducing GPT-5.5" announcement/evaluations, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI API docs — GPT-5.4 Pro](https://platform.openai.com/docs/models/gpt-5.4-pro)
  - [OpenAI — Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5/)
  - [Artificial Analysis — GPT-5.4 Pro (Xhigh)](https://artificialanalysis.ai/models/gpt-5-4-pro)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
