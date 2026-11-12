# Muse Glimmer 30B — findings by Ernie 5.5 Flash

- Source: Meta/Muse Glimmer 30B (`muse-glimmer-30b`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta Superintelligence Labs' 30-billion-parameter open-weight multimodal model (released 2026-08-10), distilled from Muse Spark for always-on local agents, tools and extraction.
- **Provider / access:** Self-hosted (Hugging Face `meta/muse-glimmer-30b`), NVIDIA NIM (free), Meta Model API, LLM Gateway, Vercel, AI/ML API, Empirio Labs, plus ~10 routes.
- **Release / knowledge:** 2026-08-10; knowledge cutoff 2026-01-04 (models.dev).
- **IDs:** `muse-glimmer-30b`, `meta/muse-glimmer-30b`, `nvidia/meta/muse-glimmer-30b`.
- **Context window:** 131,072 tokens; max output 131,072.
- **Modalities:** text and image in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** Open weights — free to self-host; the NVIDIA NIM route is free. Hosted lanes run $0.20–$0.37 / $0.80–$1.59 per 1M.
- **Architecture:** open-weight 30B model distilled from Muse Spark (Meta Superintelligence Labs).

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **75.5%**; OSWorld-Verified: **65.9%**; DeepSearchQA: **74.6%**; Terminal-Bench 2.1: **51.7%**
- skillsBench: **44.3**
- Terminal-Bench 4.x / Toolathlon: no verified public rows published

Reasoning / knowledge:

- AIME 2026: **94.7%** (best verified AIME row in this dataset for a 30B open model)
- IFBench (instruction following): **77%**; GPQA Diamond / HLE / ARC-AGI: no verified public rows published

Coding:

- SWE-bench Verified: **76%**; SWE-bench Pro: **51.2%**; SciCode: **43.6%**
- DeepSWE / LiveCodeBench / FrontierCode: no verified public rows published

Long context:

- 131K context; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 72/100.** MCP Atlas 75.5% and DeepSearchQA 74.6% are good for a 30B local model, OSWorld-Verified 65.9% mid, TB2.1 51.7% below the agent baseline.
- **Reasoning: 72/100.** AIME 2026 94.7% is the standout and IFBench 77% is solid, but no GPQA/HLE/ARC row was published, so the evidence is narrow.
- **Context window: 65/100.** 131,072 tokens with 131,072 max output — the smallest window in this batch.
- **Multimodal: 78/100.** Text and image in with MMMU-Pro 74%, CharXiv 78.8%, ScreenSpot Pro 75.4% and OmniDocBench 1.5 75.8% — a consistent document/GUI cluster; no audio/video.
- **Coding: 72/100.** SWE-bench Verified 76% is decent, but SWE-bench Pro 51.2% and SciCode 43.6% are mid, and no DeepSWE row was published.
- **Cost efficiency: 95/100.** Open weights, free NIM route, and $0.20–$0.37 per 1M on hosted lanes — a genuinely cheap local agent model.
- **Overall Score: 71.8/100.** Best fit for always-on local agents, GUI/document extraction and math tutoring on-device; not a frontier model.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Meta Muse Glimmer model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [meta/muse-glimmer-30b — Hugging Face](https://huggingface.co/meta/muse-glimmer-30b)
  - [Muse Glimmer 30B benchmarks & sources — BenchLM](https://benchlm.ai/models/muse-glimmer-30b)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Muse_Glimmer_30B_v2.md`, using the same headings.