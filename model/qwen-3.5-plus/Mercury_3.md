# Qwen 3.5 Plus — findings by Mercury 3

- Source: Alibaba Qwen/Qwen3.5 Plus
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 Plus
- **Short description:** Alibaba Qwen's February 2026 vision-language Plus-tier model (released 2026-02-16): closed-weight 1M-context model for visual reasoning, documents, and agent tasks; superseded by Qwen3.6/3.7 Plus; ~$0.40/$2.40.
- **Provider / access:** Alibaba Model Studio `qwen3.5-plus`, plus 15 providers per models.dev (incl. Vercel, Merge Gateway $0.115/$0.688).
- **Release / knowledge:** Released 2026-02-16; knowledge cutoff April 2025.
- **IDs:** `qwen3.5-plus` (Alibaba; `alibaba/qwen3.5-plus` canonical; thinking/non-thinking modes).
- **Context window:** 1,000,000 tokens (1M) total; max output 65,536.
- **Modalities:** text + image + video input (vision-language per vendor), text output; reasoning; tool calls; structured outputs.
- **Pricing (as of 2026-11-03):** $0.40 input / $2.40 output per 1M tokens (Alibaba row); $0.12/$0.69–$0.20/$1.20 on several gateways.
- **Architecture:** closed weights; parameter count undisclosed (Plus-tier).

### Raw benchmarks found

Agent / tool use:

- No verified public benchmark rows found in sources reviewed (AA/BenchLM list no page; models.dev lists specs only)
- Vendor-positioned for visual reasoning, documents, and agent tasks

Reasoning / knowledge:

- No verified public benchmark rows found in sources reviewed (sparse coverage — flagged)

Coding:

- No verified public benchmark rows found in sources reviewed (vendor claims only)

Long context:

- 1M context with 65K output; no verified retrieval figure.

Multimodal:

- text/image/video in (vendor), text out; no verified video benchmark row found.

### Normalized scores (1–100)

- **Tool use: 71/100.** Vendor-positioned for agents; zero verified public agentic benchmarks — capped by missing evidence.
- **Reasoning: 73/100.** No verified GPQA/HLE/ARC rows — capped by missing evidence.
- **Context window: 89/100.** 1M native; no verified retrieval figure at depth.
- **Multimodal: 85/100.** Image + video input per vendor; text-only output; older generation.
- **Coding: 73/100.** Vendor-positioned for coding; no verified SWE/TB rows — capped by missing evidence.
- **Cost efficiency: 84/100.** ~$0.40/$2.40 (or $0.12/$0.69 on gateways) — reasonable value for a 1M VL model.
- **Overall Score: 78/100.** Mean of (71+73+89+85+73)/5 = 78.2 → 78. A capable older 1M workhorse with thin verified public evidence — flag for re-verification when third-party evals surface.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (models.dev registry, vendor model descriptions); scores are normalized 1–100 interpretations, not official vendor scores. No verified third-party benchmark rows found (AA/BenchLM do not list this model) — most evidence is registry/vendor-published; flagged.
- Reference URLs:
  - [Qwen3.5 Plus — models.dev registry (15 providers, $0.40/$2.40)](https://models.dev/models/alibaba/qwen3.5-plus)
  - [Qwen3.5 blog (Qwen)](https://qwen.ai/blog?id=qwen3.5)
