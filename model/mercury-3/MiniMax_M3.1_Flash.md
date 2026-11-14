# Mercury 3 — findings by MiniMax M3.1 Flash

- Source: Inception (`mercury-3`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 3
- **Short description:** Inception's flagship general-purpose diffusion LLM, designed to generate and revise many tokens in parallel rather than decode them one at a time. It combines reasoning, tool calling, structured outputs, a 1M-token context window, and unusually high generation speed, although independent long-horizon agent evaluations are substantially weaker than the vendor's headline chart.
- **Provider / access:** Inception's OpenAI-compatible Chat Completions API at `https://api.inceptionlabs.ai/v1/chat/completions`, model ID `mercury-3`; the launch post also lists OpenRouter, Baseten, and Vercel availability. No OpenCode Console/Zen ID is listed in the current OpenCode model catalogue.
- **Release / knowledge:** Released 2026-10-19; knowledge cutoff not publicly disclosed. Inception has announced that the Mercury API and platform will wind down after 2026-12-28.
- **IDs:** `mercury-3` on the Inception API. OpenCode Console currently has no Mercury 3 model ID.
- **Context window:** 1,000,000-token chat context; 131,072 maximum output tokens, verified in Inception's current models documentation and Vals AI's model record.
- **Modalities:** Text in / text out only; no image, audio, video, or PDF input is listed. Reasoning is supported at `instant`, `low`, `medium`, and `high` effort, defaulting to `low`; temperature is adjustable from 0.5 to 1.0. OpenAI-compatible tool calling includes parallel calls, and structured outputs are supported.
- **Pricing (as of 2026-11-14):** Current launch discount: $0.10/M input tokens, $0.01/M cached input, and $0.35/M output tokens. Regular list price is $0.20/M input, $0.02/M cached input, and $0.70/M output. New Inception API keys include 100M free tokens; the service is scheduled to end after 2026-12-28.
- **Architecture:** Proprietary diffusion LLM with parallel token generation. Inception says Mercury 3 has more than 40x Mercury 1's total parameters, but does not disclose the absolute parameter count.

### Raw benchmarks found

Agent / tool use:

- GDPval Elo: **1,237.2** (Inception's Mercury 3 medium-reasoning launch chart; vendor-reported)
- τ³-bench Banking: **30.24%** (Inception's launch chart; vendor-reported)
- BrowseComp+: **55.18%** (Inception's launch chart; vendor-reported)
- DeepSearchQA: **71.33%** (Inception's launch chart; vendor-reported)
- Mind2Web navigation: **50/50 tasks completed (100%)** in a 50-task live web-agent test (TinyFish AI partner report reproduced in Inception's launch post)
- Terminal-Bench 4.0: **3.03% ± 0.00** (**independent**, Vals AI; rank 56/64)

Reasoning / knowledge:

- GPQA Diamond: **89.23%** (Inception's launch chart; vendor-reported)
- AA-Omniscience-Public Accuracy: **46.44%** (Inception's launch chart; vendor-reported)
- IFBench: **76.84%** (Inception's launch chart; vendor-reported)
- MultiChallenge: **60.35%** (Inception's launch chart; vendor-reported)
- AA-LCR v1.1: **77.67%** (Inception's launch chart; vendor-reported)
- Vals Index composite: **43.66% ± 1.23** (**independent**, Vals AI; rank 33/37)
- HLAB-Vals-1.1: **5.00% ± 1.61** (**independent**, Vals AI; rank 30/38)
- Legal Research Bench: **28.85% ± 3.15** (**independent**, Vals AI; rank 61/94)

Coding:

- SWE-Bench Atlas: **51.08** (Inception's launch chart; the vendor does not specify the metric scale or task split)
- DeepSWE v1: **46.31%** (Inception's launch chart; vendor-reported)
- Vibe Code Bench v1.1: **60.93% ± 5.38** (**independent**, Vals AI; rank 63/128)
- Code Migration v1.1: **39.26% ± 3.17** (**independent**, Vals AI; rank 22/30)

Long context:

- MRCR v2: **75.50%** (Inception's launch chart; vendor-reported, tested window length not disclosed)
- Context window: **1,000,000 tokens**, with **131,072 max output** (Inception documentation; independently corroborated by Vals AI)

Speed:

- Output throughput: **1,068 tokens/s** on NVIDIA GPUs (Inception-reported launch measurement; no independent throughput result was found)

### Normalized scores (1–100)

- **Tool use: 58/100.** Vendor τ³-bench Banking 30.24%, BrowseComp+ 55.18%, DeepSearchQA 71.33%, and a partner's 50/50 Mind2Web completion show real agentic ability, supported by native parallel tool calling; the independent Terminal-Bench 4.0 result of 3.03% and missing long-horizon public results cap the score.
- **Reasoning: 72/100.** GPQA Diamond 89.23%, IFBench 76.84%, AA-LCR 77.67%, and MultiChallenge 60.35% are strong short- and medium-form results, but independent Vals Index 43.66%, HLAB-Vals 5.00%, Legal Research Bench 28.85%, and Omniscience-Public 46.44% reveal major weakness on sustained, rubric-heavy work.
- **Context window: 96/100.** The verified 1M-token context and 131,072-token output maximum place Mercury 3 in the top tier; MRCR v2 75.50% is vendor-reported without a disclosed window length, so it does not support a perfect score.
- **Multimodal: 15/100.** Inception's model table lists text as the only supported format, so this is a text-only model.
- **Coding: 56/100.** DeepSWE 46.31%, independent Vibe Code Bench 60.93%, and Code Migration 39.26% show mid-tier application and migration ability, while Terminal-Bench 4.0 at 3.03% and the absence of SWE-bench Verified or SWE-bench Pro results cap repository-level performance.
- **Cost efficiency: 97/100.** The discounted $0.10/M input and $0.35/M output rates, with $0.01/M cached input, are exceptionally cheap; the temporary 50% discount, 100M-token signup grant, and announced API wind-down prevent a perfect score.
- **Overall Score: 59.4/100.** A very fast, low-cost general reasoning model with a huge context and capable short-form tools, best suited to latency-sensitive work rather than long-horizon autonomous agents or coding.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimaxai/minimax-m3.1-flash)** — 2026-11-14
- Method: Fresh public-web research using direct `webfetch` of Inception's official launch post, model and pricing pages, API capability documentation, reasoning and tool-use documentation, and service wind-down notice, plus independent Vals AI and BenchLM records after web search was unavailable (HTTP 402). Vendor launch-chart values are explicitly labelled as vendor-reported; independent long-horizon and coding results are kept separate and used as score caps. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Diffusion at Scale: Introducing Mercury 3 — Inception](https://inceptionlabs.ai/blog/introducing-mercury-3)
  - [Inception model catalogue and pricing](https://inceptionlabs.ai/models)
  - [Models & Pricing — Inception API documentation](https://docs.inceptionlabs.ai/get-started/models.md)
  - [Reasoning Efforts — Inception API documentation](https://docs.inceptionlabs.ai/capabilities/reasoning-efforts.md)
  - [Tool Use — Inception API documentation](https://docs.inceptionlabs.ai/capabilities/tool-use.md)
  - [Mercury API wind-down — Inception documentation](https://docs.inceptionlabs.ai/support/wind-down.md)
  - [Mercury 3 model record and independent benchmarks — Vals AI](https://www.vals.ai/models/inception_mercury-3)
  - [Mercury 3 benchmark ledger — BenchLM](https://benchlm.ai/models/mercury-3)
  - [OpenCode Console model catalogue](https://opencode.ai/docs/zen)
