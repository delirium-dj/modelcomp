# Mercury 2 — findings by Muse Glimmer 30B

- Source: Inception / mercury-2
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Mercury 2
- **Short description:** Inception Labs' first reasoning diffusion LLM released early 2026, positioned as an ultra-fast reasoning model for agentic loops and real-time applications with >1,000 tokens/sec throughput.
- **Provider / access:** Inception API Platform `inception/mercury-2`; OpenRouter/OpenAI-compatible. Chat Completions API.
- **Release / knowledge:** 2026-02-24; knowledge cutoff not published.
- **IDs:** `inception/mercury-2`
- **Context window:** 128,000 tokens input; max output ~8.2K tokens reported by LLM Stats, up to 50,000 completion tokens per OpenRouter. Verified via Inception blog and OpenRouter.
- **Modalities:** Text input / text output; tool calling yes, structured outputs yes, reasoning tunable. No multimodal input confirmed.
- **Pricing (as of 2026-11-04):** $0.25 / 1M input, $0.75 / 1M output; cached input $0.025 / 1M. Deprecated for new users after Mercury 3 launch.
- **Architecture:** Proprietary diffusion-based LLM (dLLM). Parameter count undisclosed.

### Raw benchmarks found

> Sources: Artificial Analysis Mercury 2 page, OpenRouter benchmark table, Pricepertoken pricing & benchmark page, LLM Stats.

Agent / tool use:

- τ-Bench Banking: **9.5%** (OpenRouter / Artificial Analysis)
- τ²-Bench Telecom: **70.8%** (OpenRouter / Artificial Analysis)
- IFBench: **69.8%** (OpenRouter / Artificial Analysis)
- Terminal-Bench 2.1: **27.3%** (OpenRouter / Artificial Analysis)
- Terminal-Bench Hard: **26.5%** (OpenRouter / Artificial Analysis)
- Terminal-Bench 4.0: **0.0%** (OpenRouter / Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: **77.0%** (Pricepertoken / Artificial Analysis; Artificial Analysis leaderboard shows 77.0%)
- HLE: **17.1%** (OpenRouter / Artificial Analysis)
- AA-LCR: **43.7%** (OpenRouter / Artificial Analysis)
- Artificial Analysis Intelligence Index: **14** (Artificial Analysis)

Coding:

- Coding Index: **31.1** (Pricepertoken / Artificial Analysis Mercury 2 Coding Index)
- SciCode: **37.7%** (OpenRouter / Artificial Analysis)
- SWE-bench Verified / Pro: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks numbers published for Mercury 2.

### Normalized scores (1–100)

- **Tool use: 45/100.** τ²-Bench Telecom 70.8% and IFBench 69.8% show decent instruction following, but τ-Bench Banking 9.5% and Terminal-Bench ~27% cap sustained tool workflows.
- **Reasoning: 60/100.** GPQA Diamond 77.0% is solid for speed tier; HLE 17.1% and Intelligence Index 14 limit ceiling.
- **Context window: 70/100.** 128K input verified; output limit ~8-50K.
- **Multimodal: 15/100.** Text-only per API listings.
- **Coding: 45/100.** Coding Index 31.1 and SciCode 37.7% indicate modest coding ability for a speed-optimized diffusion model; no SWE-bench Verified row found.
- **Cost efficiency: 78/100.** $0.25/$0.75 is moderately priced for >1,000 tok/s throughput.
- **Overall Score: 47.0/100.** Mean of Tool 45 + Reasoning 60 + Context 70 + Multimodal 15 + Coding 45 = 47.0. Best-fit for low-latency text generation and sub-agent work where speed outweighs deep reasoning/coding.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-11-04
- Method: public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Mercury 2 – Inception](https://www.inceptionlabs.ai/blog/introducing-mercury-2)
  - [Mercury 2 - Intelligence, Performance & Price Analysis | Artificial Analysis](https://artificialanalysis.ai/models/mercury-2)
  - [Mercury 2 - API Pricing & Benchmarks | OpenRouter](https://openrouter.ai/inception/mercury-2)
  - [Mercury 2 API Pricing 2026 - Costs, Performance & Providers | Pricepertoken](https://pricepertoken.com/pricing-page/model/inception-mercury-2)
  - [Mercury 2 Benchmarks, Pricing & Context Window | LLM Stats](https://llm-stats.com/models/mercury-2)

---
