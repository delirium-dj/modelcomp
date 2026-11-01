# Ling 3.0 Flash Sante — findings by Muse Glimmer 30B

- Source: InclusionAI / ling-3.0-flash-sante
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Sante
- **Short description:** InclusionAI / Ant Group healthcare-specialized fine-tune of Ling 3.0 Flash. MoE model targeted at medical reasoning, clinical safety, evidence-based retrieval and long-horizon medical workflows. General reasoning, coding and agentic capabilities retained from base.
- **Provider / access:** Hugging Face `inclusionAI/Ling-3.0-flash-Sante`, ModelScope `inclusionAI/Ling-3.0-flash-Sante`. Hosted API via Novita AI, Vercel AI Gateway `inclusionai/ling-3.0-flash-sante`, OpenRouter `inclusionai/ling-3.0-flash-sante`. Chat Completions.
- **Release / knowledge:** Released 2026-09-04 per Hugging Face model card and Puter listing. Knowledge cutoff not published.
- **IDs:** `inclusionAI/Ling-3.0-flash-Sante` / `inclusionai/ling-3.0-flash-sante`
- **Context window:** 262,144 tokens total, ~32,768 max output per Hugging Face card and Puter listing. Training schedule 256K.
- **Modalities:** Text in / text out. Function calling supported per provider listings. Reasoning mode enabled by default. No image/audio/video support.
- **Pricing (as of 2026-11-01):** Hosted API $0.075 / 1M input, $0.22 / 1M output via Novita/Vercel; $0.04 / 1M input, $0.12 / 1M output via Puter listing. Launch promotion free tier previously active.
- **Architecture:** MoE inherited from Ling 3.0 Flash backbone, 124B total parameters / ~5.1B active per token, hybrid Kimi Delta Attention + gated MLA. Weights published on Hugging Face under MIT.

### Raw benchmarks found

> Sources: BenchLM `ling-3-0-flash-sante` aggregating InclusionAI Hugging Face model card, Hugging Face model card `inclusionAI/Ling-3.0-flash-Sante`.

Agent / tool use:
- BrowseComp: **80.2%** (Hugging Face model card via BenchLM)
- DeepSearchQA: **90.8%** (Hugging Face model card via BenchLM)
- HLE w/ tools: **57.1%** (Hugging Face model card via BenchLM)
- MCP Atlas: **75.6%** (Hugging Face model card via BenchLM)
- GDPval-AA: **1288** Elo (Hugging Face model card via BenchLM)

Reasoning / knowledge:
- AA-LCR: **70.5%** (Hugging Face model card via BenchLM)
- HealthBench Professional: **54.3%** (Hugging Face model card via BenchLM)
- MedXpertQA Text: **51.0%** (Hugging Face model card via BenchLM)

Coding:
- no verified public score found for Sante-specific coding benchmark; base Ling 3.0 Flash coding numbers exist but are not Sante-verified.

Long context:
- 256K training context verified; no MRCR/RULER/GraphWalks published for Sante.

### Normalized scores (1–100)

- **Tool use: 68/100.** MCP Atlas 75.6% and BrowseComp 80.2% show strong tool-assisted retrieval; HLE w/ tools 57.1% caps the score. No independent Terminal-Bench/GDPval verification beyond vendor card.
- **Reasoning: 72/100.** AA-LCR 70.5% solid, DeepSearchQA 90.8% high, BrowseComp 80.2% agentic reasoning. Health-specific MedXpertQA Text 51.0% and HealthBench Professional 54.3% are moderate.
- **Context window: 85/100.** 262K verified serving context, competitive for fast-tier MoE.
- **Multimodal: 15/100.** Text-only per card.
- **Coding: 45/100.** No verified Sante-specific coding benchmark found; base model coding retained per description but unmeasured for this fine-tune.
- **Cost efficiency: 72/100.** Hosted pricing ~$0.07/$0.22 per 1M moderate; free tier previously available.
- **Overall Score: 57/100.** Mean of (68+72+85+15+45)/5 = 57. Best-fit: healthcare-focused MoE with strong tooling and context, text-only, coding unverified.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-11-01
- Method: Public internet research; Hugging Face model card `inclusionAI/Ling-3.0-flash-Sante`, BenchLM aggregation, Puter model page, Novita/Vercel listings. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face model card for Ling-3.0-flash-Sante](https://huggingface.co/inclusionAI/Ling-3.0-flash-Sante)
  - [BenchLM Ling 3.0 Flash Sante benchmarks](https://benchlm.ai/models/ling-3-0-flash-sante)
  - [Puter InclusionAI Ling 3.0 Flash Sante](https://developer.puter.com/ai/inclusionai/ling-3.0-flash-sante/)
