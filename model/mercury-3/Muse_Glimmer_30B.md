# Mercury 3 — findings by Muse Glimmer 30B

- Source: Inception / mercury-3
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Mercury 3
- **Short description:** Inception Labs' flagship diffusion-based large language model released October 2026, marketed for high-throughput agentic workflows, search and real-time applications with parallel token generation.
- **Provider / access:** Inception API Platform `inception/mercury-3`; OpenRouter/OpenAI-compatible. Chat Completions API.
- **Release / knowledge:** 2026-10-19; knowledge cutoff not published.
- **IDs:** `inception/mercury-3`
- **Context window:** 1,000,000 tokens input; max output reported 128K–131K tokens. Verified via Inception blog and OpenRouter listing.
- **Modalities:** Text input / text output; tool calling yes, structured outputs yes, reasoning tunable. No multimodal input confirmed.
- **Pricing (as of 2026-11-04):** Launch pricing $0.10 / 1M input, $0.35 / 1M output, cached input $0.01 / 1M. Regular list $0.20 / $0.70 per 1M.
- **Architecture:** Proprietary diffusion-based LLM (dLLM). Described as >40× larger than Mercury 1; parameter count undisclosed.

### Raw benchmarks found

> Sources: Inception launch blog, CellCog benchmark table reproduced from Inception launch chart, BenchLM.ai Mercury 3 research page, LLM Stats / OpenRouter listings.

Agent / tool use:

- GDPval-AA Elo: **1,237.2** (CellCog; Inception launch chart vs GPT-6 Luna 1,204.0, Claude Haiku 5.5 1,225.0)
- τ³-bench Banking: **30.24%** (CellCog; Inception chart)
- IFBench: **76.84%** (BenchLM.ai / CellCog; Inception launch chart)
- Terminal-Bench 2.1: no verified public score found for Mercury 3
- MCP-Atlas / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.23%** (BenchLM.ai / CellCog; Inception launch chart; provider exact medium-reasoning)
- MultiChallenge: **60.35%** (CellCog; Inception chart)
- AA-LCR v1.1: **77.67%** (CellCog; Inception chart)
- HLE: no verified public score found

Coding:

- SWE-Bench Atlas: **51.08%** (CellCog; Inception chart)
- DeepSWE v1: **46.31%** (CellCog; Inception chart; trails Claude Haiku 5.5 51.62%)
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found

Long context:

- MRCR v2: **75.50%** (CellCog; Inception chart; vs Claude Haiku 5.5 78.40%)
- No RULER / GraphWalks numbers published.

### Normalized scores (1–100)

- **Tool use: 62/100.** τ³-bench Banking 30.24% and strong IFBench 76.84% show solid instruction following and agent work, but no Terminal-Bench row to confirm sustained tool workflows.
- **Reasoning: 85/100.** GPQA Diamond 89.23% is top-tier for speed-optimized tier; MultiChallenge 60.35% and AA-LCR 77.67% support solid reasoning with high throughput.
- **Context window: 95/100.** 1M input with >128K output, verified via Inception and OpenRouter.
- **Multimodal: 15/100.** Text-only per API listings.
- **Coding: 55/100.** SWE-Bench Atlas 51.08% is strong for a speed-optimized diffusion model; DeepSWE 46.31% caps ceiling and no SWE-bench Verified row found.
- **Cost efficiency: 92/100.** $0.10/$0.35 launch pricing undercuts most frontier speed tiers.
- **Overall Score: 62.4/100.** Mean of Tool 62 + Reasoning 85 + Context 95 + Multimodal 15 + Coding 55 = 62.4. Best-fit for high-throughput agentic sub-tasks and latency-sensitive search where speed outweighs absolute coding depth.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-11-04
- Method: public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Diffusion at Scale: Introducing Mercury 3 – Inception](https://www.inceptionlabs.ai/blog/introducing-mercury-3)
  - [Inception Mercury 3: 1,068 Tokens/s, Price, Benchmarks | CellCog](https://cellcog.ai/blog/inception-mercury-3)
  - [Mercury 3: Pricing and Benchmark Results | BenchLM.ai](https://benchlm.ai/models/mercury-3)
  - [Mercury 3 - API Pricing & Benchmarks | OpenRouter](https://openrouter.ai/inception/mercury-3)
  - [Mercury 3 Benchmarks, Pricing & Context Window | LLM Stats](https://llm-stats.com/models/mercury-3)

---
