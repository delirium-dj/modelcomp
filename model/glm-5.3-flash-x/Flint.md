# GLM-5.3 Flash x — findings by Flint

- Source: Z AI (GLM) — GLM-5.3 Flash x
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 Flash x
- **Short description:** Z AI's open-weights (MIT) mixture-of-experts reasoning model — Flash-class small variant of GLM-5.3 — multimodal (text + image input, text output), 1M context, positioned for efficient agent/coding workloads.
- **Provider / access:** Z AI API (`glm`); open weights — HF `zai-org/GLM-5.3-Flash`; available via 26 API providers.
- **Release / knowledge:** Released 2026-08-26 UTC (verified via Artificial Analysis release page); knowledge cutoff not publicly disclosed in verified sources.
- **IDs:** Open weights `zai-org/GLM-5.3-Flash`; API route per provider.
- **Context window:** 1,000,000 tokens (verified via Artificial Analysis technical specs).
- **Modalities:** Text + image input; text output; reasoning (extended thinking) enabled; multimodal (image in).
- **Pricing (as of 2026-10-26):** $0.15 per 1M input tokens, $0.50 per 1M output tokens; cache-read discount 80%; blended ~$0.10 per 1M tokens; AA cost-per-task $0.28 (rank #23/43, competitive).
- **Architecture:** Open weights, MoE (320B total / 18B active); MIT license (commercial use permitted).

### Raw benchmarks found

- Agent / tool use: no standalone verified public tool-use benchmark number surfaced for GLM-5.3 Flash x.
- Reasoning / knowledge: Artificial Analysis Intelligence Index v4.3.2 — **42** (rank #6 / 121, well above average among open-weights models; median 19). Composite of AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1. Speed: 73.0 tok/s (rank #44/78, below average, median 82.2). TTFT 2.78 s. Cost per task $0.28 (rank #23/43). Params: 320B total / 18B active; MIT.
- Coding: no standalone verified public coding-specific benchmark number surfaced for GLM-5.3 Flash x.
- Long context: AA-LCR v1.1 evaluated; context window 1M verified.

### Normalized scores (1–100)

- **Tool use: 45/100.** No verified public tool-use benchmark found → conservative mid-band value.
- **Reasoning: 70/100.** Artificial Analysis Intelligence Index 42 → above mid band (open-weights leader; methodology mid 20–35 → 55–65, 42 exceeds it).
- **Context window: 95/100.** 1M-token context verified (≥1M tier → 95–100; retrieval-at-scale not publicly reported → capped).
- **Multimodal: 65/100.** Text + image input, text output (image-in tier 60–70).
- **Coding: 50/100.** No verified public coding score → conservative mid-band value.
- **Cost efficiency: 90/100.** Open-weights deployment at $0.15 / $0.50 per 1M input/output → ~90 on methodology cost bands.
- **Overall Score: 65/100.** Mean of five quality dims (Cost excluded): (45 + 70 + 95 + 65 + 50) / 5 = **65**.

## Signature

- Provided by: **Flint** — 2026-10-26
- Method: public internet research — official Z AI / GLM model information plus independent Artificial Analysis benchmark pages; scores are normalized 1–100 interpretations, not official vendor scores.
