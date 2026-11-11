# Qwen3 Max — findings by MiMo 2.6_Flash

- Source: Alibaba (`qwen3-max`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3 Max
- **Short description:** Alibaba's first trillion-parameter flagship Qwen3 model for coding agents, complex reasoning, and tool use; released ahead of Apsara Conference 2025. Superseded by the Qwen3.5/3.6/3.7/3.8 Max line; QwenCloud announced retirement of the `qwen3-max` route for 2026-10-10 (status as of this research: still widely served via OpenRouter/aggregators).
- **Provider / access:** Alibaba Cloud DashScope / Model Studio (`qwen3-max`); OpenRouter `qwen/qwen3-max`; DeepInfra `Qwen/Qwen3-Max`; 20+ gateway providers. Chat Completions with function calling, JSON, caching, web search, fine-tuning.
- **Release / knowledge:** Released 2025-09-24 (Epoch AI, SCMP); knowledge cutoff not disclosed.
- **IDs:** `qwen/qwen3-max` (OpenRouter); `qwen3-max` (Alibaba); superseded siblings `qwen3-max-2026-01-23` dated snapshots exist.
- **Context window:** 262,144 tokens (262K); max output 65,536 tokens (thinking mode: 32K output / 81K reasoning per QwenCloud).
- **Modalities:** text in; text out; thinking mode (`enable_thinking`); tool calls; JSON structured outputs; context caching; batches.
- **Pricing (as of 2026-10-13):** OpenRouter $0.78 / 1M input, $3.90 / 1M output, $0.156 cache read; Alibaba list $1.20 / $6.00 (post-Nov-2025 price cuts from initial ~$0.86/$3.44 tiers); DeepInfra $1.20/$6.00.
- **Architecture:** >1T parameters (Epoch AI: 1.0e12), closed weights, proprietary; training compute ~1.5e25 FLOP on ~3.6e13 datapoints (Epoch AI).

### Raw benchmarks found

Agent / tool use:

- Vending-Bench 2 (Epoch AI): **$72** revenue (positive; best tracked $15,515)
- Function calling / agent programming: specialized upgrades vs Preview per QwenCloud docs
- BFCL: no verified public score found for qwen3-max specifically

Reasoning / knowledge:

- MMLU-Pro: **85.7%** (lmmarketcap) / **83.8%** (pricepertoken) — sources differ; both strong
- GPQA: **76.4%** (pricepertoken)
- Epoch AI ECI: **142** (#99 of 251; was #14/163 at release)
- Intelligence Index (legacy tracker): 12.6 (53rd percentile) — older scale, not AA v4
- Chess Puzzles (Epoch): 4%; Mystery Game Puzzles: 5% (weak on agentic game puzzles)

Coding:

- Coding composite (pricepertoken): **65.1**
- LiveCodeBench: no stable public figure found for this exact model in reviewed sources
- SWE-bench Verified: no verified public score found in reviewed sources

Long context:

- 262K window; no MRCR/RULER figure published.

### Normalized scores (1–100)

- **Tool use: 70/100.** Flagship agent-coding/tool-use positioning with mature function-calling stack across 20+ providers; Vending-Bench 2 shows positive revenue generation. Capped by Epoch's weak Chess/Mystery game-puzzle scores (4%/5%) and no BFCL figure.
- **Reasoning: 78/100.** MMLU-Pro 83.8–85.7% and GPQA 76.4% are solid 2025-flagship class; Epoch ECI 142 confirmed competitive at release. Capped by aging against 2026 flagships (GPQA 85–93% class) and weak game-puzzle agentic reasoning.
- **Context window: 82/100.** 262K/65K is solid mid-2026 context but no longer frontier (1M+ class is current). Capped by no long-context retrieval measurements.
- **Multimodal: 15/100.** Text-only model — no image/audio/video input. Capped at text-only floor.
- **Coding: 72/100.** Strong agent-coding positioning for its release era; composite coding index 65.1. Capped by no SWE-bench/LiveCodeBench public figures in reviewed sources and clear supersession by Qwen3.5–3.8 Max generation.
- **Cost efficiency: 72/100.** $0.78/$3.90 (OpenRouter) is mid-range for a 1T closed model; Alibaba price cuts helped. Capped by closed weights, no self-host, and retirement pressure from cheaper/smarter Qwen3.8-Max.
- **Overall Score: 63/100.** Mean of (70 + 78 + 82 + 15 + 72) / 5 = 63.4 → **63**. Best-fit recommendation: legacy Qwen3 flagship still fine for existing integrations via OpenRouter, but new deployments should use Qwen3.5-Max or Qwen3.8-Max (2.4T, 1M context) — this route faces QwenCloud retirement.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-13
- Method: fresh public internet research (Epoch AI model page, SCMP launch/price-cut coverage, QwenCloud docs, OpenRouter/pricepertoken/lmmarketcap listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
