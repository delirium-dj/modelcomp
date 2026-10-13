# Ling-3.0-flash — findings by MiMo 2.6_Flash

- Source: InclusionAI / Ant Group (`ling-3.0-flash`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-flash
- **Short description:** Next-generation native hybrid reasoning model from InclusionAI (Ant Group), 124B total / 5.1B active parameters — ~12% of Ring-2.6-1T's total params yet matching or beating it on key benchmarks. Built for speed, compute efficiency, and production agent deployment (Claude Code, Kilo Code, Qwen Code, Hermes Agent, OpenClaw integrations). Thinking mode on by default.
- **Provider / access:** InclusionAI API; Hugging Face / ModelScope open weights; OpenRouter `inclusionai/ling-3.0-flash` (was free-tier launch promo); DeepInfra, Novita, SGLang-native serving. SGLang HiCache + Mooncake hierarchical caching for long-horizon TTFT reduction.
- **Release / knowledge:** Released 2026-07-23 (Vals); HF card 2026-08-02. Knowledge cutoff not disclosed.
- **IDs:** `inclusionAI/Ling-3.0-flash` (HF); `inclusionai/ling-3.0-flash` (OpenRouter).
- **Context window:** 262,144 tokens (262K; context training 8K→32K→256K); max output 131,072 tokens (131K).
- **Modalities:** text in; text out; reasoning (thinking default); function calling; tool use.
- **Pricing (as of 2026-10-13):** OpenRouter $0.021 / 1M input, $0.063 / 1M output; DeepInfra / Novita $0.06 / $0.18; open weights for self-host. Among the cheapest capable reasoning models tracked.
- **Architecture:** 124B total, 5.1B active (MoE); dense intermediate 6144; vocab 157184; hybrid linear attention; MTP; HiCache hierarchical caching.

### Raw benchmarks found

Agent / tool use (vendor):

- SWE-Bench Pro: **56.6%** (top of 128B-class tier; OpenHands harness, 256K ctx)
- SWE-Bench Multilingual: **72.4%**
- Tau3-banking-AA, MCP-Atlas, SkillsBench: strong (named; exact figures partial)

Independent:

- Terminal-Bench v2.1: **55.4%** (computeprices/AA) / **50.19%** (Vals)
- τ-bench Banking: **27.2%** (AA)
- Vals Finance Agent v2: 30.31%; SkillsBench 27.95%

Reasoning / knowledge:

- AIME 2026 (MathArena): **93.2** (vendor)
- HMMT Feb 2026: **87** (vendor)
- HLE: **22.7** (vendor) / **23.7** (AA)
- GPQA Diamond: **85.5%** (AA) / **84.85%** (Vals) / **84%** (BenchLM)
- MMLU Pro: **82.01%** (Vals)

Coding:

- LiveCodeBench (Vals): **83.99%**
- SWE-bench (Vals): **65.20%**
- SciCode: **42.0%** (AA) / **40.4%** (BenchLM FP8)
- Vibe Code Bench v1.1: 2.91% (Vals; weak)

Long context:

- 262K native; Long-Context Reasoning **73.0%** (AA); HiCache for long-horizon efficiency.

### Normalized scores (1–100)

- **Tool use: 72/100.** SWE-Pro 56.6 at top of 128B-class + Multilingual 72.4 + native agent-harness integrations (Claude Code/OpenClaw) + Terminal-Bench ~50–55 independent. Capped by weak τ-banking 27% and SkillsBench ~28%.
- **Reasoning: 80/100.** AIME26 93.2 / HMMT 87 (vendor) with independent GPQA-D 84–85.5 and MMLU-Pro 82 is elite for 5.1B-active. Capped by mid HLE ~23%.
- **Context window: 80/100.** 262K native with 73% long-context reasoning and HiCache efficiency. Capped by no 1M tier and mid LongBench-class figures.
- **Multimodal: 15/100.** Text-only model — no image/audio/video input. Capped at text-only floor.
- **Coding: 72/100.** LCB 84 + SWE-V 65 + SWE-Pro 56.6 is strong open-weight coding at flash-tier cost. Capped by weak Vibe Code Bench and no frontier SWE-V 80+ figures.
- **Cost efficiency: 95/100.** $0.021/$0.063 (OpenRouter) + open weights + 5.1B active = best-in-class cost/performance for capable reasoning. Among cheapest in roster.
- **Overall Score: 64/100.** Mean of (72 + 80 + 80 + 15 + 72) / 5 = 63.8 → **64**. Best-fit recommendation: default open-weight pick when you need near-flagship STEM/coding agent capability at flash-tier latency and price — prefer Ring-2.6-1T for deeper xhigh reasoning ceilings.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-13
- Method: fresh public internet research (HF inclusionAI/Ling-3.0-flash, aimodeling.com analysis, computeprices.com, benchlm.ai, vals.ai, pricepertoken.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
