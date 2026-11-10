# Grok 4 — findings by Iceman

- Source: xAI/Grok 4
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI’s Grok 4 is a reasoning model with native tool use and real-time search integration (X/web), released as xAI’s frontier model in July 2025 and later superseded/deprecated by newer Grok lines.
- **Provider / access:** xAI (SuperGrok/Premium+/API at launch; deprecated per local metadata). Local metadata lists `xai/grok-4` and `noFreeId`.
- **Release / knowledge:** Announced July 9, 2025 (xAI news). Knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `grok-4`.
- **Context window:** 256,000 tokens (256K) per local metadata.
- **Modalities:** Text, image, and PDF input; text output (local metadata).
- **Pricing (as of 2026-11-10):** Paid $3 / 1M input, $15 / 1M output, $0.75 cached input per local metadata (base tier; higher above 128K tokens noted). Current availability/pricing may vary due to deprecation.
- **Architecture:** Proprietary xAI model; architecture/parameter count not publicly disclosed. Trained with large-scale reinforcement learning and native tool use (xAI announcement).

### Raw benchmarks found

> Verified figures below are from xAI’s “Grok 4” announcement unless noted. Some headline results in the announcement refer to Grok 4 Heavy; those are not attributed to base Grok 4.

Agent / tool use:

- Vending-Bench (agentic): **$4694.15 net worth** and **4569 units sold** (averages across 5 runs, attributed to Grok 4 in announcement text)
- Native tool use (code interpreter, web browsing, X search) and real-time search integration emphasized
- Terminal-Bench / Tau2-Bench / GDPval-AA / Toolathon / MCP-Atlas: **no verified public score found** in extracted text

Reasoning / knowledge:

- ARC-AGI V2: **15.9%** (stated as new state-of-the-art for closed models at announcement)
- Humanity’s Last Exam (HLE): Grok 4 Heavy scored **50.7%** on text-only subset (first to score 50% per announcement); base Grok 4 HLE score not clearly extracted as text
- USAMO 2025: Grok 4 Heavy leads with **61.9%** (not base Grok 4)
- GPQA Diamond / AIME 2025: benchmark charts referenced; numeric values for base Grok 4 not clearly extractable from announcement text

Coding:

- LiveCodeBench: chart referenced; numeric value for base Grok 4 not clearly extractable from announcement text
- SWE-bench Verified / SWE-Pro: **no verified public score found**

Long context:

- 256K context window (local metadata); no standalone MRCR/RULER/GraphWalks numeric retrieval benchmark score extracted.

Multimodal:

- Text/image/PDF input supported per metadata; no multimodal benchmark scores extracted.

### Normalized scores (1–100)

> Derived from limited verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Scores are conservative due to limited extractable standardized benchmark numerics for base Grok 4 in this pass.

- **Tool use: 86/100.** Native tool use, real-time web/X search integration, and strong Vending-Bench agentic results ($4694.15 net worth, 4569 units sold averages) indicate high agent/tool capability.
- **Reasoning: 84/100.** ARC-AGI V2 15.9% and frontier-reasoning positioning support strong reasoning, but broader standardized reasoning numerics for base Grok 4 were not clearly extractable in this pass.
- **Context window: 84/100.** 256K context is solid but below 1M/2M-class leaders.
- **Multimodal: 80/100.** Image/PDF input support and voice/vision product features are noted, but multimodal benchmark evidence is limited.
- **Coding: 82/100.** Coding capability is implied by frontier positioning and tool/code-interpreter use, but standardized coding benchmark numerics were not clearly extracted for base Grok 4.
- **Cost efficiency: 70/100.** $3/$15 pricing was premium at release and the model is deprecated/superseded by newer Grok lines.
- **Overall Score: 83/100.** Mean of the five non-cost dims (86, 84, 84, 80, 82) = 83.2 → 83. Best fit historically for tool-augmented research/reasoning with real-time search; now superseded.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to xAI announcement; scores are conservative normalized 1–100 interpretations from verified/reported figures extractable in text, not official vendor scores.
- Reference URLs:
  - [Grok 4 announcement (xAI)](https://x.ai/news/grok-4)
  - Local repository metadata consulted: `model/grok-4/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
