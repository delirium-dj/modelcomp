# Muse Glimmer-30B — findings by Mercury 3

- Source: Meta (Muse Glimmer-30B)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer-30B
- **Short description:** Meta Superintelligence Labs' dense open-weight multimodal agent model (released 2026-08-09/10), distilled from Muse Spark 1.2 and explicitly optimized for autonomous agents on consumer hardware (single 24GB GPU with Q4 quant under 20GB). Apache 2.0.
- **Provider / access:** Open weights on Hugging Face (`meta-models/Muse-Glimmer-30B`, Apache 2.0); hosted via several providers (6+), OpenRouter, etc.
- **Release / knowledge:** Released 2026-08-09/10; knowledge cutoff 2026-01-04 (per userightai).
- **IDs:** `meta/muse-glimmer-30b`; HF `meta-models/Muse-Glimmer-30B`.
- **Context window:** 131K tokens (131,072).
- **Modalities:** interleaved text + image input; text output; agent-loop tuned (plan, call tools, check results, recover from failure); multilingual 100+ languages.
- **Pricing (as of 2026-11):** $0.30–0.35 in / $1.20–1.50 out per 1M (cached $0.04); open weights free.
- **Architecture:** dense ~30B, distilled from Muse Spark 1.2; speculative-decoding drafter; perception encoder; Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Agent-loop tuned (tool use, failure recovery) per vendor; no standalone agentic index number captured

Reasoning / knowledge:

- GPQA Diamond: **83.5%** (lounge.ai)
- HLE: **22%** (lounge.ai)
- AIME: **94.7%** (lounge.ai)

Coding:

- SWE-bench: **76%** (lounge.ai) — strong for a 30B dense open-weight model
- BenchLM composite: 31.68/100 (#177/216, estimated); highest ranked category per LM Market Cap: Coding (40/100)

Long context:

- 131K verified; no independent long-context retrieval benchmark captured

Multimodal:

- Interleaved text+image input, text output; vision encoder included

### Normalized scores (1–100)

- **Tool use: 76/100.** Purpose-built for the agent loop with reliable tool use and failure recovery (vendor); no independent agentic benchmark captured.
- **Reasoning: 80/100.** GPQA Diamond 83.5% and AIME 94.7% are strong for a local 30B; HLE 22% caps upside.
- **Context window: 70/100.** 131K verified — adequate, below the 256K+ class.
- **Multimodal: 74/100.** Interleaved text+image input with text output; no video/audio input confirmed.
- **Coding: 84/100.** SWE-bench 76% — excellent for its weight class and licence.
- **Cost efficiency: 85/100.** $0.30–0.35/$1.20–1.50 plus free Apache 2.0 weights that fit a 24GB consumer GPU — outstanding value for local agents.
- **Overall Score: 77/100.** Mean of the five non-cost dims (76+80+70+74+84)/5 = 76.8 → 77. Best-fit: the best open-weight local-agent model of its size — strong coding/reasoning per dollar with a consumer-hardware footprint.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face: meta-models/Muse-Glimmer-30B (official)](https://huggingface.co/meta-models/Muse-Glimmer-30B)
  - [llm-stats: Muse Glimmer-30B](https://llm-stats.com/models/muse-glimmer-30b)
  - [OpenRouter: meta/muse-glimmer-30b](https://openrouter.ai/meta/muse-glimmer-30b)
  - [Lounge.ai: Muse Glimmer 30B benchmarks](https://lounge.ai/benchmarks/muse-glimmer-30b)
  - [Model Beats: Muse Glimmer-30B benchmarks/pricing/hardware](https://modelbeats.com/models/muse-glimmer-30b)
  - [AI Models Navi: Muse Glimmer specs](https://aimodelsnavi.com/en/models/muse-glimmer-by-meta-superintelligence-labs)
  - [Useright AI: Muse Glimmer-30B pricing/context](https://www.userightai.com/models/muse-glimmer-30b)
- Future sources: add a new file next to this one using the same headings.
