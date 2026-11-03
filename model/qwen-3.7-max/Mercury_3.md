# Qwen 3.7 Max — findings by Mercury 3

- Source: Alibaba Qwen/Qwen3.7 Max
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7 Max
- **Short description:** Alibaba Qwen's May 2026 frontier model (released 2026-05-21): closed-weight 1M-context model tuned for agent frameworks, coding assistants, and long tasks; superseded by Qwen3.8 Max; ~$2.50/$7.50 (gateways $1.25/$3.75).
- **Provider / access:** Alibaba Model Studio `qwen3.7-max`, plus 36 providers per models.dev (incl. OpenRouter $1.475/$4.425, Cloudflare $1.25/$3.75); token-plan free routes.
- **Release / knowledge:** Released 2026-05-21; knowledge cutoff not published.
- **IDs:** `qwen3.7-max` (Alibaba; `alibaba/qwen3.7-max` canonical; thinking/non-thinking modes).
- **Context window:** 1,000,000 tokens (1M) total; max output 131,072.
- **Modalities:** text + image + video input (multimodal per vendor), text output; reasoning; tool calls; structured outputs.
- **Pricing (as of 2026-11-03):** $2.50 input / $7.50 output per 1M tokens (Alibaba row); $1.25–$1.475/$3.75–$4.425 on several gateways; token-plan free routes exist.
- **Architecture:** closed weights; parameter count undisclosed (frontier tier).

### Raw benchmarks found

Agent / tool use:

- No verified public benchmark rows found in sources reviewed (AA/BenchLM list no page; models.dev lists specs only)
- Vendor-positioned for agent frameworks, coding assistants, and long tasks

Reasoning / knowledge:

- No verified public benchmark rows found in sources reviewed (sparse coverage — flagged)

Coding:

- No verified public benchmark rows found in sources reviewed (vendor claims only)

Long context:

- 1M context with 131K output; no verified retrieval figure.

Multimodal:

- text/image/video in (vendor), text out; no verified video benchmark row found.

### Normalized scores (1–100)

- **Tool use: 73/100.** Vendor-positioned for agent frameworks; zero verified public agentic benchmarks — capped by missing evidence.
- **Reasoning: 74/100.** No verified GPQA/HLE/ARC rows — capped by missing evidence.
- **Context window: 89/100.** 1M native with 131K output; no verified retrieval figure at depth.
- **Multimodal: 85/100.** Image + video input per vendor; text-only output.
- **Coding: 75/100.** Vendor-positioned for coding assistants; no verified SWE/TB rows — capped by missing evidence.
- **Cost efficiency: 82/100.** $2.50/$7.50 (or $1.25/$3.75 on gateways) — reasonable for a frontier-tier 1M model; token-plan free routes.
- **Overall Score: 79/100.** Mean of (73+74+89+85+75)/5 = 79.2 → 79. A capable 1M frontier model with thin verified public evidence — flag for re-verification when third-party evals surface.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (models.dev registry, vendor model descriptions); scores are normalized 1–100 interpretations, not official vendor scores. No verified third-party benchmark rows found (AA/BenchLM do not list this model) — most evidence is registry/vendor-published; flagged.
- Reference URLs:
  - [Qwen3.7 Max — models.dev registry (36 providers, $2.50/$7.50)](https://models.dev/models/alibaba/qwen3.7-max)
  - [Qwen3.7 blog (Qwen)](https://qwen.ai/blog?id=qwen3.7)
