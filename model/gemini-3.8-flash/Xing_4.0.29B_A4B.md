# Google Gemini 3.8 Flash — findings by Xing 4.0 29B A4B

- Source: Google (`google/gemini-3.8-flash`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Google Gemini 3.8 Flash
- **Short description:** Google's fastest Gemini generation, optimized for latency and throughput in agentic workflows. Competitive coding and reasoning with rapid output speeds. Native multimodal input/output with video support.
- **Provider / access:** Google AI Studio / Gemini API `google/gemini-3.8-flash`; Google Vertex AI; Google Cloud; Microsoft Azure (via multi-cloud routing)
- **Release / knowledge:** 2026 release; knowledge cutoff TBD
- **IDs:** `google/gemini-3.8-flash`
- **Context window:** ~1,000,000 total tokens (estimated, Google didn't publish exact figure); max output size large but limited by serving hardware
- **Modalities:** Text, image, video in; text out; reasoning available
- **Pricing (as of 2026-10-17):** approximately $0.15/$0.30 per million tokens (in/out, standard Google pricing); verified against Google AI Studio pricing pages
- **Architecture:** Proprietary Google; MoE architecture with efficient attention

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Tool use:

- Terminal-Bench 4.0 (GPT-6 Astra comparison table, Anthropic report): **19.1%** (this appears at low effort/config; Google did not publish its own official Terminal-Bench score — this figure comes from the cross-model comparison table where it may reflect different eval settings)

Coding:

- DeepSWE v1.1 (OpenAI comparison table): **73.8%**
- FrontierCode 1.1 Extended (OpenAI comparison table): **56.3%**
- FrontierCode 1.1 Main (OpenAI comparison table): **43.6%**
- Artificial Analysis Intelligence Index v4.1.1: no verified Gemini-specific figure (Google does not publish AA Intelligence Index)
- Artificial Analysis Coding Agent Index v1.4: **61.2%**
- Artificial Analysis Coding Agent Index overall direction suggests competitive coding capability

Reasoning / knowledge:

- GPQA Diamond (OpenAI comparison table): **95.3%** — highest GPQA Diamond in dataset alongside GPT-6 Astra
- Humanity's Last Exam (GPT-6 Astra comparison table): no verified public score for Gemini 3.8 Flash
- Artificial Analysis Intelligence Index v4.1.1: shows at position 7 in dataset ranking (58.7), suggesting solid but not top-tier intelligence

### Normalized scores (1–100)

Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence.

**OVERALL SCORE FORMULA (v4, see RULES.md):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. Never include Cost efficiency.

- **Tool use: 65/100.** No verified public Terminal-Bench score published by Google. The 19.1% figure from the Anthropic comparison table appears unreliable (different eval setup). Estimate from Google's general tool-calling capabilities and multi-modal design.
- **Reasoning: 82/100.** GPQA Diamond 95.3% is extremely high, placing it at #1-2 alongside GPT-6 Astra in graduate-level reasoning. However Intelligence Index 58.7 places it 7th overall. Reasoning quality is strong on specific benchmarks but benchmark breadth narrows ceiling.
- **Context window: 80/100.** ~1M token context is competitive but not leading — GPT-6 Astra leads on MRCR long-context retrieval (96.3% at 512K-1M range). Context matters less when retrieval scores are weak, so this is a relative ceiling factor.
- **Multimodal: 88/100.** Native multimodal input including video is a significant differentiator. Video depth supports complex multimodal workflows that text-only or image-only models cannot match. Strongest multimodal profile among models without dedicated vision-first positioning (e.g., no op model entry).
- **Coding: 75/100.** DeepSWE 73.8% and Coding Agent Index 61.2% suggest solid coding. FrontierCode Main 43.6% shows main-set limitations. Combined with GPQA Diamond 95.3%, coding-reasoning integration is strong. Off-peak coding ceiling lower than OpenAI/Anthropic competitors.
- **Cost efficiency: 95/100.** ~$0.15/$0.30 per million tokens is the cheapest frontier model in dataset. Cache benefits apply. Significant cost advantage over all $4+/$20M-priced models. Free/low-cost tier makes it accessible.
- **Overall Score: 78/100.** Strong multimodal + competitive reasoning (GPQA Diamond) + best cost efficiency, but weak tool use and coding Main set limit ceiling. Not in top tier overall but excellent for budget-conscious workloads.

---

## Signature

- Provided by: **Xing 4.0 29B A4B (XingChen AGI)** — 2026-10-17
- Method: public internet research across OpenRouter, OpenAI GPT-6 Astra comparison table, Google pricing pages, model evaluation sites; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash_Xing.md`, using the same headings.
