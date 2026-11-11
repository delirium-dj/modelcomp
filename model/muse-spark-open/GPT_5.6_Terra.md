# Muse Spark Open — findings by GPT-5.6 Terra

- Source: Meta (`muse-spark-open`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta's open-weight, safety-post-trained version of Muse Spark for multimodal coding and agentic work, intended for API use or self-hosting on high-memory hardware.
- **Provider / access:** Meta Model API and launch hosts including Baseten, Fireworks AI, Groq, Modal, Nebius, OpenRouter, and Together AI; downloadable weights are available through major model repositories and cloud model gardens.
- **Release / knowledge:** Released 2026-10-15; Meta's public launch materials do not state a verified knowledge cutoff.
- **IDs:** `meta/muse-spark-open` (provider aliases vary).
- **Context window:** 1M tokens (Meta); Cloudflare documents 1,040,000 tokens for its hosted route.
- **Modalities:** Natively multimodal; Meta describes image/audio/video capability, while public model/API documentation supports agent and tool workflows. Output is primarily text in the documented API route.
- **Pricing (as of 2026-11-11):** Open weights can be self-hosted. ARC Prize records a hosted configuration at $1.25/M input and $4.25/M output; actual price and availability vary by host.
- **Architecture:** Open-weight MoE, 816B total parameters and 42B active; Meta positions it for two Apple M5 Ultra Mac Studios, underscoring substantial local-hardware requirements.

### Raw benchmarks found

Agent / tool use:

- JobBench: **61.8** and MCP-Atlas: **89.2** (Meta model-card results, xhigh).
- Terminal-Bench 2.1 (Terminus 2 agent): **76.4%** (Meta model-card result).

Reasoning / knowledge:

- GDPval-AA v2: **1,401**, HLE-Diamond (no tools): **26.1%**, SciCode: **58.5%**, and AA-Omniscience: **25** (Meta model-card results, xhigh).
- ARC-AGI results are publicly listed by ARC Prize for five harness configurations; hosted evaluation used $1.25/M input and $4.25/M output.

Coding:

- Terminal-Bench 2.1: **76.4%** (Meta model-card result).
- DeepSWE 1.1: **60** (Meta model-card result; best-available/self-reported harness label, so not directly comparable with other agents).
- SWE Atlas Codebase QnA: **58.0%** (independent benchmark catalogue, x-high).

Long context:

- 1M-token context is documented by Meta; no exact-model public long-context retrieval score was found.

Multimodal:

- ZeroBench: **50.0**, BabyVision: **80.2**, and SimpleVQA: **73.6** (Meta model-card results). Meta describes the model as natively multimodal.

### Normalized scores (1–100)

- **Tool use: 91/100.** MCP-Atlas at 89.2 and JobBench at 61.8 indicate strong tool and agent capability, while the scores remain vendor-reported and JobBench is materially lower.
- **Reasoning: 83/100.** GDPval-AA v2 at 1,401 and SciCode at 58.5 show useful complex-work ability, but HLE-Diamond at 26.1 and AA-Omniscience at 25 constrain the general-reasoning score.
- **Context window: 99/100.** Meta documents 1M context and an independent host documents 1.04M; missing public retrieval replication prevents a perfect score.
- **Multimodal: 89/100.** Native image/audio/video capability plus BabyVision 80.2 and SimpleVQA 73.6 support broad multimodal strength; the public API output path is still principally text and the scores are vendor-run.
- **Coding: 94/100.** Terminal-Bench 2.1 at 76.4 and independent SWE Atlas QnA at 58.0 demonstrate strong agentic coding; DeepSWE's harness-specific 60 is treated cautiously.
- **Cost efficiency: 86/100.** Hosted pricing is competitive and weights are open, but 816B parameters and roughly terabyte-class local memory requirements sharply limit practical self-hosting economy.
- **Overall Score: 91/100.** Half-up mean of the five quality dimensions: (91 + 83 + 99 + 89 + 94) / 5 = 91.2. Best for teams needing open weights, long context, and multimodal agents with ample inference hardware.

---

## Signature

- Provided by: **GPT-5.6 Terra (OpenAI/gpt-5.6-terra)** — 2026-11-11 UTC
- Method: Public web research across Meta's model materials, independent benchmark catalogues, and ARC Prize records; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta Muse Spark Open model card](https://dev.meta.ai/models/muse-spark-open)
  - [Meta open-weight release announcement](https://research.meta.ai/blog/muse-spark-open)
  - [ARC Prize Muse Spark Open results](https://arcprize.org/results/meta-muse-spark-open)
  - [BenchmarkList SWE Atlas record](https://benchmarklist.com/models/meta-muse-spark-open/)
  - [Independent Muse Spark Open review](https://www.eesel.ai/blog/meta-muse-spark-open-review)
