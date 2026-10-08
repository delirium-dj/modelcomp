# Solar Mini 4 — findings by Fledge Alpha

- Source: Upstage (`upstage/solar-mini4`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage's compact agent-optimized model — 35B total / 3B active MoE pretrained from the ground up for high-volume repetitive agent work (retrieval, structured output, tool use) at minimal cost. Best-in-class intelligence among 3B-active models.
- **Provider / access:** Upstage Console API (`solar-mini4`, snapshot `solar-mini4-260922`), Solar Chat, OpenRouter `upstage/solar-mini4`, on-premises; free on Hermes Agent for a limited time from 2026-10-05. Chat Completions.
- **Release / knowledge:** 2026-09-22 (ai-tldr; Console GA 2026-10-01 announcement); knowledge cutoff February 2026.
- **IDs:** `upstage/solar-mini4` (no Free ID on Zen found)
- **Context window:** 524,288 (512K) tokens; max output 131,072 (128K).
- **Modalities:** text in; text out; reasoning; tool calling + parallel tool calling; JSON mode / JSON Schema structured outputs. Fluent Korean, strong English/Japanese.
- **Pricing (as of 2026-10-08):** $0.10 input / $0.40 output per 1M; cached input $0.01; 50% launch promo ($0.05/$0.20) through 2026-10-22 UTC. Excludes 10% VAT.
- **Architecture:** 35B total / 3B active MoE; proprietary (API + on-prem only, no weights).

### Raw benchmarks found

Agent / tool use:

- τ³-Banking: **47.2** (Upstage launch blog — policy application + tool use across multi-turn interactions)
- Internal cost-per-task test: $1.25 per 1,000 three-task sets vs MiMo-V2.5 $2.20 (~43% cheaper), all quality checkpoints passed (Upstage internal — treat as directional)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **24.1** — highest among 3B-active models (ahead of Qwen3.6 35B A3B 18, Nemotron 3.5 Lightning 13) (Upstage launch blog)
- GPQA / HLE: no verified public score found

Coding:

- No verified public coding score found (LMMarketCap composite 40/100, #245 — aggregator composite, not a task benchmark)

Long context:

- 524K window (multiple providers); no MRCR/RULER public number found.

### Normalized scores (1–100)

- **Tool use: 55/100.** τ³-Banking 47.2 with parallel tool calling and schema-locked outputs — purpose-built for agents; no Terminal-Bench coverage.
- **Reasoning: 40/100.** AA Intelligence 24.1 leads the 3B-active class but is far below frontier models in absolute terms.
- **Context window: 70/100.** 524K window with 128K output — generous for a mini model; retrieval unmeasured.
- **Multimodal: 15/100.** Text-only.
- **Coding: 40/100.** No published coding benchmarks; positioned for agent plumbing, not code generation.
- **Cost efficiency: 88/100.** $0.10/$0.40 with $0.01 cache reads and a 50% promo — among the cheapest agent-capable models available.
- **Overall Score: 44/100.** Mean of (55, 40, 70, 15, 40) = 44.0 → 44. Best fit: high-volume routing, extraction, and structured-output agent steps where per-call cost dominates.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (Upstage launch blog, ai-tldr, themodelbeat, LMMarketCap, yepapi docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
