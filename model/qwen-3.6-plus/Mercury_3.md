# Qwen 3.6 Plus — findings by Mercury 3

- Source: Alibaba Qwen/Qwen3.6 Plus
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.6 Plus
- **Short description:** Alibaba Qwen's April 2026 multimodal Plus-tier workhorse (released 2026-04-02): a closed-weight 1M-context model for million-token agent and document tasks, superseded by Qwen3.7 Plus; ~$0.50/$3.00.
- **Provider / access:** Alibaba Model Studio `qwen3.6-plus`, plus 26 providers per models.dev (incl. OpenRouter $0.325/$1.95, Vercel, Together, Venice).
- **Release / knowledge:** Released 2026-04-02; knowledge cutoff April 2025.
- **IDs:** `qwen3.6-plus` (Alibaba; `alibaba/qwen3.6-plus` canonical; thinking/non-thinking modes).
- **Context window:** 1,000,000 tokens (1M) total; max output 65,536.
- **Modalities:** text + image + video input (multimodal per vendor), text output; reasoning; tool calls; structured outputs.
- **Pricing (as of 2026-11-03):** $0.50 input / $3.00 output per 1M tokens (Alibaba row); $0.30/$1.80–$0.325/$1.95 on several gateways; token-plan free routes exist.
- **Architecture:** closed weights; parameter count undisclosed (Plus-tier).

### Raw benchmarks found

Agent / tool use:

- No verified public benchmark rows found in sources reviewed (AA/BenchLM list no page; models.dev/OpenRouter list specs only)
- Vendor-positioned for million-token agent and document tasks

Reasoning / knowledge:

- No verified public benchmark rows found in sources reviewed (sparse coverage — flagged)

Coding:

- No verified public benchmark rows found in sources reviewed (vendor claims only)

Long context:

- 1M context with 65K output; no verified retrieval figure.

Multimodal:

- text/image/video in (vendor), text out; no verified video benchmark row found.

### Normalized scores (1–100)

- **Tool use: 72/100.** Vendor-positioned for agents; zero verified public agentic benchmarks — capped by missing evidence.
- **Reasoning: 74/100.** No verified GPQA/HLE/ARC rows — capped by missing evidence.
- **Context window: 89/100.** 1M native; no verified retrieval figure at depth.
- **Multimodal: 86/100.** Image + video input per vendor; text-only output.
- **Coding: 74/100.** Vendor-positioned for coding; no verified SWE/TB rows — capped by missing evidence.
- **Cost efficiency: 88/100.** ~$0.50/$3.00 (or $0.30–$0.325/$1.80–$1.95 on gateways) — good value; token-plan free routes.
- **Overall Score: 79/100.** Mean of (72+74+89+86+74)/5 = 79.0 → 79. A capable 1M workhorse with thin verified public evidence — flag for re-verification when third-party evals surface.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (models.dev registry, OpenRouter routing docs, vendor model descriptions); scores are normalized 1–100 interpretations, not official vendor scores. No verified third-party benchmark rows found (AA/BenchLM do not list this model) — most evidence is registry/vendor-published; flagged.
- Reference URLs:
  - [Qwen3.6 Plus — models.dev registry (26 providers, $0.50/$3.00)](https://models.dev/models/alibaba/qwen3.6-plus)
  - [Qwen3.6 Plus — OpenRouter model page](https://openrouter.ai/qwen/qwen3.6-plus)
