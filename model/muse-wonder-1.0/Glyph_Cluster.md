# Muse Wonder 1.0 — findings by Glyph Cluster

- Source: Meta (`meta/muse-wonder-1.0`, served as Muse Wonder / `meta/muse-wonder`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0 (Muse Wonder, Max variant evaluated on Artificial Analysis)
- **Short description:** Meta's proprietary Muse Wonder reasoning model (API SKU `muse-wonder-1.0`), a multimodal-input assistant positioned for general agentic and knowledge-work tasks with 1M-token context.
- **Provider / access:** Meta and hosted providers (e.g. Meta, Google Vertex) via OpenRouter as `meta/muse-wonder`. Project alias guidance indicates Muse Wonder 1.0 corresponds to the Muse Wonder product/API SKU.
- **Release / knowledge:** Released October 2026 (Artificial Analysis: 2026-10-12). Knowledge cutoff not found in verified public sources reviewed.
- **IDs:** `muse-wonder-1.0` (product/API SKU), `meta/muse-wonder` (OpenRouter/provider routing).
- **Context window:** 1,000,000 tokens (1M) per Artificial Analysis.
- **Modalities:** Text, image, speech, and video input; text output. Reasoning model. Tool/function calling supported per OpenRouter capabilities.
- **Pricing (as of 2026-11-10):** ~$4.00 / 1M input and ~$20.00 / 1M output tokens per Artificial Analysis and OpenRouter (provider/variant surcharges may apply).
- **Architecture:** Proprietary (parameter count and internal architecture not publicly disclosed).

### Raw benchmarks found

> Primary accessible verified sources: Artificial Analysis Muse Wonder page and OpenRouter model page. Granular standalone benchmark breakdowns beyond AA aggregates were not publicly available from fetched sources.

Agent / tool use:

- Artificial Analysis Intelligence Index v5.0.1: **44** (above average in comparable price-tier class; AA). Composite includes AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 (Hard Subset), Terminal-Bench-Science 0.1.
- Standalone agent/tool benchmarks (GDPval-AA, Toolathlon, MCP-Atlas, Tau2, etc.): no verified public standalone scores found for this exact model.

Reasoning / knowledge:

- GPQA Diamond / HLE / CritPt / Omniscience / GDP.pdf components: included in AA aggregate where applicable; no verified standalone public scores found.

Coding:

- Terminal-Bench 4.0 / FrontierCode 2.0 / coding components: included in AA aggregate; no verified standalone public scores found.
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode: no verified public score found.

Long context:

- 1M-token context window reported by Artificial Analysis. No verified long-context retrieval benchmark (MRCR/RULER/GraphWalks) scores found.

Efficiency/performance signals (AA):

- Cost per Intelligence Index task: **$6.95** (AA).
- Time per Intelligence Index task: **12.9 minutes** (AA; near/slightly slower than class median).
- Output tokens from Intelligence Index: **113M** (somewhat verbose vs class median per AA).
- Time to first answer token: **21.57s**; output speed: **124 tok/s** (AA summary).

### Normalized scores (1–100)

> Scores are normalized interpretations from available third-party evidence (Artificial Analysis/OpenRouter). Limited granular public benchmarks cap confidence; Cost excluded from Overall.

- **Tool use: 82/100.** AA Intelligence Index 44 indicates above-average agentic/task performance in AA's composite (including briefcase, automation, and terminal evaluations). Capped by lack of verified standalone tool-use benchmark results.
- **Reasoning: 82/100.** Above-average composite intelligence suggests competent reasoning and knowledge performance, but without published standalone difficult-reasoning scores for this exact model. Capped by limited granular evidence.
- **Context window: 95/100.** 1M-token context window supports large inputs and long workflows. Capped because no verified long-context retrieval quality benchmarks were found.
- **Multimodal: 85/100.** Supports text, image, speech, and video inputs with text output, providing broad multimodal intake. Capped by text-only output and absence of verified public multimodal benchmark scores.
- **Coding: 82/100.** AA composite includes terminal/coding evaluations and model performs above class median overall, indicating solid coding ability. Capped by no verified standalone coding benchmark results.
- **Cost efficiency: 55/100.** ~$4/$20 per 1M tokens and $6.95 per AA task are somewhat expensive for the observed intelligence tier.
- **Overall Score: 85/100.** Mean of non-cost dimensions (82 + 82 + 95 + 85 + 82) / 5 = 85.2, rounded to 85. Best fit for multimodal-input general assistant and knowledge-work tasks needing 1M context, where moderate cost and above-average capability are acceptable.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research (Artificial Analysis, OpenRouter model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Muse Wonder (Max)](https://artificialanalysis.ai/models/muse-wonder)
  - [OpenRouter — meta/muse-wonder](https://openrouter.ai/meta/muse-wonder)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
