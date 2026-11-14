# Claude 3.5 Haiku — findings by Iceman

- Source: Anthropic/Claude 3.5 Haiku
- Date: 2026-11-14 (UTC), deep second-pass research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Haiku
- **Short description:** Anthropic’s fast/small Claude 3.5-series model (announced 2024-10-22) optimized for low latency and cost while delivering strong coding/tool-use performance for its class; now retired.
- **Provider / access:** Anthropic API and platforms historically; retired 2026-02-19 per local metadata. Local metadata lists `anthropic/claude-3-5-haiku-20241022`, `noFreeId`.
- **Release / knowledge:** Announced October 22, 2024 (Anthropic). Knowledge cutoff July 2024 per Artificial Analysis; local metadata references Claude 3 Model Card October Addendum (PDF) for detailed evaluation notes.
- **IDs:** `claude-3-5-haiku-20241022`, `claude-3.5-haiku` (common naming).
- **Context window:** 200,000 tokens total; 8,192 max output (local metadata/common specs).
- **Modalities:** Text and image input; text output (image input followed initial text-only release per Anthropic announcement; local metadata notes text/image/PDF input support in later form).
- **Pricing (final/revised, as announced):** $0.80 / 1M input tokens, $4.00 / 1M output tokens (Anthropic update 2024-12-03); cache read $0.08/MTok noted in local metadata.
- **Architecture:** Proprietary closed model. Architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> SECOND-PASS UPDATE (converted from excluded): I reviewed Anthropic’s official announcement and independent catalog sources. The official model card October addendum PDF was not extractable as text in this pass, so some metadata-cited figures could not be independently re-extracted from that PDF here; however, Anthropic’s announcement provides directly verifiable benchmark claims for this exact model. Scores below are normalized estimates grounded primarily in verified specs and extracted benchmark claims, with gaps noted.

Agent / tool use:

- **TAU-bench (agentic tool use context):** Anthropic reported improved Claude 3.5 Sonnet results in the same announcement (retail 62.6%→69.2%, airline 36.0%→46.0%) and positioned Claude 3.5 Haiku as having “more accurate tool use” and suitability for specialized sub-agent tasks; no standalone Haiku TAU-bench numeric extracted in this pass.
- Terminal-Bench / GDPval-AA / Toolathon / MCP-Atlas: **no verified public score found**.

Reasoning / knowledge:

- Anthropic states Claude 3.5 Haiku “surpasses even Claude 3 Opus... on many intelligence benchmarks,” but specific per-benchmark numerics for this exact model were not fully extracted in this pass.
- GPQA Diamond / HLE / AIME / AA Intelligence Index: **no directly extracted verified public score found** in accessible text sources this pass (local metadata cites GPQA 41.6% from model card addendum; not independently re-extracted from PDF here).

Coding:

- **SWE-bench Verified: 40.6%** (Anthropic announcement, 2024-10-22; states it “outperform[s] many agents using publicly available state-of-the-art models—including the original Claude 3.5 Sonnet and GPT-4o”).

Long context:

- **200K context / 8K max output** documented (local metadata/AA/common specs). No standalone long-context retrieval benchmark score extracted.

Multimodal:

- **Text and image input; text output** supported (Anthropic announcement/AA). No standardized multimodal benchmark score extracted.

### Normalized scores (1–100)

> Derived from raw evidence above using the methodology in `model-comparison.md`. Scores are provisional normalized interpretations (not official vendor scores) given limited extractable per-benchmark numerics for this exact model in accessible text sources.

- **Tool use: 58/100.** Anthropic highlights improved instruction following and more accurate tool use for sub-agent tasks, but no standardized Haiku-specific tool-use benchmark numeric was extracted in this pass.
- **Reasoning: 52/100.** Positioned above Claude 3 Opus on many intelligence benchmarks per Anthropic, but limited extractable per-benchmark reasoning numerics in this pass; reflects era-appropriate small-model capability.
- **Context window: 60/100.** 200,000-token context is strong for its era, but the 8,192-token max output cap is a practical limitation for long-form/agentic outputs.
- **Multimodal: 55/100.** Verified text and image input (text output) support; capped by absence of extracted standardized multimodal benchmark numerics.
- **Coding: 62/100.** Anchored by verified **SWE-bench Verified 40.6%** (Anthropic announcement), a strong coding signal for a fast/small 2024-era model.
- **Cost efficiency: 88/100.** Low final announced pricing ($0.80/$4.00 per 1M tokens) made it cost-effective for speed/cost-oriented workloads in its era.
- **Overall Score: 57/100.** Mean of the five non-cost dimensions (Tool 58, Reasoning 52, Context 60, Multimodal 55, Coding 62) rounded to nearest integer; best fit as a low-cost/low-latency legacy small model with verified coding strength but limited by age, output cap, and sparse extractable modern benchmark coverage.

> Caution: Scores are provisional normalized estimates. The official October addendum PDF was not text-extractable in this pass; metadata-cited figures (e.g. GPQA 41.6%, tau-bench Retail 51.0%) were not independently re-verified here and are not used as scored inputs.

### Source comparison / conflicts

- **Pricing:** Anthropic revised Claude 3.5 Haiku pricing to $0.80/$4.00 (2024-12-03 update in announcement), consistent with local metadata final rate.
- **Benchmarks:** Anthropic announcement clearly provides SWE-bench Verified 40.6% for Haiku; local metadata also cites additional model-card figures not re-extracted from PDF in this pass — treated as unverified-in-this-pass rather than conflicting.
- **Status/specs:** AA lists deprecated/retired context (200K, Jul 2024 knowledge cutoff shown) consistent with historical model status.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-14
- Method: Deep second-pass independent research using alternative web access (`webfetch`, PowerShell `Invoke-WebRequest`) across Anthropic announcement/docs, Artificial Analysis, OpenRouter lookup attempt, and local metadata/prior report review; compared extracted claims and noted PDF extraction limitation.
- Research performed (>=10 successful independent web fetch/search attempts): Anthropic 3.5 models/computer-use announcement, Anthropic news/docs pages, platform docs/all-models pages, Artificial Analysis model page, AA search/fetch attempts, OpenRouter model lookup (404), platform whats-new page attempt, local `meta.json`/prior report review, plus targeted HTML snippet extractions for benchmark terms.
- Reference URLs:
  - [Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku (Anthropic)](https://www.anthropic.com/news/3-5-models-and-computer-use)
  - [Claude 3 Model Card October Addendum (PDF, not text-extracted in this pass)](https://assets.anthropic.com/m/1cd9d098ac3e6467/original/Claude-3-Model-Card-October-Addendum.pdf)
  - [Claude 3.5 Haiku on Artificial Analysis](https://artificialanalysis.ai/models/claude-3-5-haiku)
  - [Anthropic pricing](https://www.anthropic.com/pricing)
  - Local repository metadata consulted: `model/claude-haiku-3.5/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.