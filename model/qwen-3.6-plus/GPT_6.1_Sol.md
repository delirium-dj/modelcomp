# Qwen3.6 Plus — findings by GPT 6.1 Sol

- Source: Alibaba / `qwen3.6-plus`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Qwen3.6 Plus
- **Short description:** Hosted native image/video Plus model for coding/tools; preview-free and uncensored third-party routes not assumed identical [S1].
- **Provider / access:** Qwen Cloud/Model Studio OpenAI-compatible Chat Completions/Responses plus Anthropic-compatible tools; functions, structured output, cache, batch and search [S1].
- **Release / knowledge:** April2,2026 per Vals; cutoff unverified [S2].
- **IDs:** `qwen3.6-plus`; no verified current free production route.
- **Context window:** Primary1M total, rounded991K input/983K thinking input,65K output. Vals984K context likely input/convention, not evidence primary total is wrong [S1,S2].
- **Modalities:** Text/image/video input, text output; reasoning and protocol-specific tools. Native audio unverified [S1].
- **Pricing (2026-10-17):** <=256K input$0.50/$3 per million in/out, explicit read$0.05/create$0.625; above-tier rate not inspected [S1].
- **Architecture:** Proprietary; size/weights not verified.

### Raw benchmarks found
Agent / tool use:
- Vals Alibaba/temp0.7/65,536 default: TB2.1 **53.18% ±1.63**, financev2 **40.85% ±0.13**, legal research **14.90% ±2.48**, legal-agent **1.25% ±0.83**, tax-agent **7.68% ±1.81** [S2]. Effort not displayed; overrides possible. Tau3/Tau2/GDPval/Claw/MCP exact results not verified.
Reasoning / knowledge:
- Vals GPQA **87.37% ±1.67**, MMLU **87.67% ±0.32**, LegalBench **84.23% ±0.42** [S2]. Profile accuracy49.36% lacks current ranked Index; dated April Index58.8%/#17 is separate. HLE/CritPt/AA Index/Omniscience/LCR/MLCR exact numbers not verified in inspected sources.
Coding:
- Vals SWE **73.40% ±1.98**, LiveCode **85.95% ±0.98**, Vibe1.1 **25.57% ±3.91**, migration **11.10% ±1.31**, ProgramBench **0%** [S2]. Exact SWE-Pro/DeepSWE/SciCode not verified.
Long context / multimodal:
- Primary1M capacity, no full-window MRCR/RULER accuracy verified [S1]. Vals MMMU **84.16% ±0.88**, text-only output despite native video input [S1,S2].

### Evidence comparison and research trail
Three successful DuckDuckGo searches: `"Qwen3.6-Plus" official model`, `"Qwen3.6-Plus" independent benchmarks`, `"Qwen3.6-Plus" review pricing limitations`. Direct exact primary product and independent Vals read. Sparse independent search results do not justify treating a third-party preview review as production evidence. Provider's frontier-equivalence wording contrasts with weak legal/app/migration tasks; academic/competitive coding scores do not establish complete-agent reliability. Vals historical finance54.6% is old Finance Agent, not currentv2 40.85; historical Vibe25.9 versus current25.57 and changing index coverage retained. Its11m02s profile latency is suite-specific. Old free-preview snippets do not establish current$0 production. Initial evidence-derived report; no prior own score changed.

### Normalized scores (1–100)
- **Tool use: 70/100.** Useful terminal and functions, weak legal/finance/tax completion [S1,S2].
- **Reasoning: 81/100.** GPQA/MMLU useful, hard-suite/calibration coverage incomplete [S2].
- **Context window: 95/100.** Primary1M total, no perfect-retrieval bonus [S1].
- **Multimodal: 88/100.** Native image/video and measured visual reasoning, no audio/media output [S1,S2].
- **Coding: 75/100.** Good LiveCode/useful SWE, capped by Vibe/migration/ProgramBench [S2].
- **Cost efficiency: 91/100.** Cheap<=256K production tier, explicit cache costs and unverified long-tier rates retained [S1].
- **Overall Score: 82/100.** (70+81+95+88+75)/5=81.8 →82; inexpensive supervised multimodal/scoped coding. Cost excluded.

### Sources
- [S1] https://www.qwencloud.com/models/qwen3.6-plus — exact primary protocols/specs/rates.
- [S2] https://www.vals.ai/models/alibaba_qwen3.6-plus — independent current configuration and historical April results.

---
## Signature
- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-17
- Method: Independent web research, three searches and direct primary/evaluator comparison; preview, price tiers and old/current metrics separated. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
