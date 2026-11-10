# GPT-5 — findings by Glyph Cluster

- Source: OpenAI (`openai/gpt-5`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's flagship GPT-5 generation model (introduced Aug 7, 2025) combining fast response and deeper reasoning in a unified system, with strong performance across coding, math, multimodal understanding, writing, and health.
- **Provider / access:** OpenAI (ChatGPT default for signed-in users at launch; API availability surfaced via OpenAI platform). OpenRouter lists `openai/gpt-5` served by OpenAI/Azure in some contexts.
- **Release / knowledge:** Released 2025-08-07 (OpenAI announcement). Artificial Analysis lists knowledge cutoff Sep 30, 2024 for GPT-5 (High).
- **IDs:** `openai/gpt-5`, `gpt-5`
- **Context window:** 400k tokens (Artificial Analysis). Input/output split not separately verified.
- **Modalities:** Text and image input; text output; reasoning supported (GPT-5 thinking / high-reasoning configurations). Tool use supported in product/API contexts (exact capability matrix varies).
- **Pricing (as of 2026-11-10):** Artificial Analysis snapshot: $1.25 / 1M input, $10.00 / 1M output, 90% cache discount (GPT-5 High). OpenRouter/provider pricing varies by route; paid model.
- **Architecture:** Proprietary (parameter count undisclosed).

### Raw benchmarks found

> Numbers below are for GPT-5 as reported by OpenAI's launch announcement and accessible metadata. Where a benchmark was not found, marked accordingly. Configuration details (e.g. thinking/high, tools/no tools) follow source notes where stated.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Instruction following / agentic tool use: OpenAI reported significant gains on instruction-following and agentic tool-use benchmarks (qualitative in fetched text; specific numeric scores for named tool-use suites not extracted).

Reasoning / knowledge:

- GPQA: **88.4%** (GPT-5 pro with extended reasoning, without tools, state of the art per OpenAI announcement)
- AIME 2025: **94.6%** (without tools, per OpenAI announcement)
- HealthBench Hard: **46.2%** (OpenAI announcement)
- HLE: **no verified public score found** in fetched sources
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found** (AA snapshot reported N/A/unavailable)

Coding:

- SWE-bench Verified: **74.9%** (OpenAI announcement; fixed subset n=477 noted)
- Aider Polyglot: **88%** (OpenAI announcement)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Multimodal / other:

- MMMU: **84.2%** (OpenAI announcement)

Long context:

- Context window reported as **400k tokens** (Artificial Analysis). No verified long-context retrieval benchmark (e.g. MRCR/RULER/GraphWalks) score found for this exact model.

### Normalized scores (1–100)

> Derived from vendor-reported benchmark evidence (OpenAI announcement) plus accessible metadata. Some scores reflect GPT-5 thinking/pro configurations as noted by source; interpretations are normalized.

- **Tool use: 78/100.** OpenAI reports strong instruction-following and agentic tool-use gains and GPT-5 is designed for multi-step tool workflows, but specific third-party tool-benchmark scores (Terminal-Bench/Tau/GDPval-AA/MCP suites) were not found in accessible sources; capped by limited direct public tool-suite evidence.
- **Reasoning: 90/100.** Excellent reported reasoning/math/science results including AIME 2025 94.6% (no tools) and GPQA 88.4% (GPT-5 pro, no tools), plus strong overall benchmark claims; capped slightly by reliance on vendor reporting and missing some standardized third-party reasoning breakdowns in fetched sources.
- **Context window: 70/100.** 400k-token window reported (Artificial Analysis), strong but below 1M-class tier; no verified retrieval-quality benchmark at that length found.
- **Multimodal: 80/100.** Text and image input with strong reported multimodal understanding (MMMU 84.2% per OpenAI announcement); no video/audio input reported in accessible specs, so capped below top omni-multimodal models.
- **Coding: 88/100.** Strong verified vendor-reported coding results: SWE-bench Verified 74.9% and Aider Polyglot 88% (OpenAI announcement); capped slightly by missing broader third-party coding suite coverage in fetched sources.
- **Cost efficiency: 45/100.** Paid pricing at $1.25/$10.00 per 1M tokens (AA snapshot) is premium; capable but not cost-leading.
- **Overall Score: 81/100.** Mean of five non-cost dims `(78+90+70+80+88)/5 = 81.2`, rounded half-up to 81. Best fit as a high-capability general/reasoning/coding multimodal model with strong vendor-reported benchmarks, moderate-large context, and premium pricing.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (OpenAI announcement, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — Introducing GPT-5](https://openai.com/index/introducing-gpt-5/)
  - [Artificial Analysis — GPT-5 (High)](https://artificialanalysis.ai/models/gpt-5)
  - [OpenRouter — openai/gpt-5](https://openrouter.ai/openai/gpt-5)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
