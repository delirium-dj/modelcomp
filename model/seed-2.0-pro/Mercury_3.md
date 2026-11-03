# Seed 2.0 Pro — findings by Mercury 3

- Source: ByteDance Seed/Seed 2.0 Pro
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro
- **Short description:** ByteDance Seed's flagship closed model (released 2026-02-14) for complex multimodal reasoning and long-horizon agent workflows: 256K context, 128K output, available via Volcengine Ark (`doubao-seed-2-0-pro`) and ~11 providers; superseded by Seed 2.1 Pro/Turbo.
- **Provider / access:** Volcengine Ark (`doubao-seed-2-0-pro-260215`), DeepInfra, 11 providers per models.dev; closed weights.
- **Release / knowledge:** Released 2026-02-14; knowledge cutoff not published.
- **IDs:** `bytedance-seed/seed-2.0-pro` (canonical; `doubao-seed-2-0-pro` API; reasoning/tool call support).
- **Context window:** 256,000 tokens total; max output 128,000.
- **Modalities:** text + image + video input (multimodal per vendor positioning), text output; reasoning; tool calls; structured outputs.
- **Pricing (as of 2026-11-03):** ~$0.45–$0.50 input / $2.24–$3.00 output per 1M tokens (Volcengine ~$0.475/$2.375).
- **Architecture:** closed weights; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- No verified public benchmark rows found in sources reviewed (AA/BenchLM list no page; models.dev lists specs only)
- Vendor-positioned for complex multimodal reasoning and long-horizon agent workflows

Reasoning / knowledge:

- No verified public benchmark rows found in sources reviewed (sparse coverage — flagged)

Coding:

- No verified public benchmark rows found in sources reviewed (vendor claims only)

Long context:

- 256K context with 128K output; no verified retrieval figure.

Multimodal:

- text/image/video in (vendor), text out; no verified video benchmark row found.

### Normalized scores (1–100)

- **Tool use: 71/100.** Vendor-positioned for agent workflows; zero verified public agentic benchmarks — capped by missing evidence.
- **Reasoning: 73/100.** No verified GPQA/HLE/ARC rows — capped by missing evidence.
- **Context window: 72/100.** 256K (below the 1M class); no verified retrieval figure.
- **Multimodal: 85/100.** Image + video input per vendor; text-only output; no verified multimodal benchmark rows.
- **Coding: 73/100.** Vendor-positioned for coding; no verified SWE/TB rows — capped by missing evidence.
- **Cost efficiency: 84/100.** ~$0.45–0.50/$2.24–3.00 — fair for a 256K closed flagship.
- **Overall Score: 75/100.** Mean of (71+73+72+85+73)/5 = 74.8 → 75. A capable 2026 Seed flagship with thin verified public evidence — flag for re-verification when third-party evals surface.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (models.dev registry, vendor model descriptions); scores are normalized 1–100 interpretations, not official vendor scores. No verified third-party benchmark rows found (AA/BenchLM do not list this model) — most evidence is registry/vendor-published; flagged.
- Reference URLs:
  - [Seed 2.0 Pro — models.dev registry (11 providers, 256K, closed)](https://models.dev/models/bytedance-seed/seed-2.0-pro)
  - [Seed models — ByteDance](https://team.doubao.com/)
