# Muse Spark 1.3 — findings by Flint

- Source: Meta Superintelligence (Meta) / Muse Spark 1.3
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 (Contributor / Free tier scored; same weights)
- **Short description:** Meta Superintelligence Labs' Muse Spark, tuned for long-horizon agentic coding, coding and agentic work; reasoning model with tool use and MCP support.
- **Provider / access:** Meta Model API (`meta/muse-spark-1.3`), Muse Code; OpenRouter (`muse-spark-1.3`, `muse-spark-1.3-contributor`); Vercel AI Gateway; Together AI; Fireworks AI; GroqCloud; OpenCode Zen `opencode/muse-spark-1.3` (Contributor/Free tier).
- **Release / knowledge:** Released 2026-09-02 (Meta Model API / Muse Code); Muse Spark Open open-weight release 2026-10-15 (816B total / 42B active MoE, 1M context, multimodal); knowledge cutoff not verified in sources found.
- **IDs:** `meta/muse-spark-1.3` (Meta Model API); `muse-spark-1.3` / `muse-spark-1.3-contributor` (OpenRouter); OpenCode Zen `opencode/muse-spark-1.3` / `opencode/muse-spark-1.3-contributor-free`.
- **Context window:** 1,048,576 tokens (1M) via Meta API / Muse Code; max output 131K; Muse Spark Open 1M context.
- **Modalities:** Text, image, video (and audio for Open) input; text output; reasoning; tool use (MCP); multimodal.
- **Pricing (as of 2026-10-22):** Standard $1.25/$4.25 per 1M (cache $0.15); Contributor/Free $0.10/$0.20 per 1M; Free scored 100.

- **Architecture:** Proprietary; Muse Spark Open (2026-10-15) is a sparse mixture of experts, 816B total / 42B active, multimodal, 1M context, open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85%** (Artificial Analysis / Meta; Muse Spark 1.3 xhigh)

Coding:

- DeepSWE: **75.4%** (Meta; via The New Stack)
- Terminal-Bench 2.1: **85%** (Artificial Analysis / Meta; Muse Spark 1.3 xhigh)
- GDPval-AA: **1754 Elo** (Artificial Analysis; Muse Spark 1.3 xhigh)

Long context:

- MRCR: **98.1%** (Meta; via The New Stack; 512K-1M)
- AA-LCR: **83%** (Artificial Analysis; Muse Spark 1.3 xhigh)

### Cross-source comparison

- Muse Spark 1.3 (xhigh) Artificial Intelligence Index **61** vs (max) **62** (limited preview); tied with GPT-5.6 Sol (max), Grok 4.6 (high), Claude Opus 5 (high); behind Claude Fable 5.1 (max, 66) / Claude Opus 5 (max, 63) — frontier.
- Muse Spark 1.3 (xhigh) cost per Intelligence Index task **$0.55** — lowest of any model at 59+, Pareto frontier vs intelligence (Artificial Analysis).
- Version split: Muse Spark 1.3 (proprietary, 2026-09-02) vs Muse Spark Open (open-weight, 2026-10-15, 816B/42B) vs Muse Spark 1.3 via Gemini Enterprise (Preview, release 2026-09-24).

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.1 **85%** → frontier-adjacent (~90); agentic tool use + MCP support.
- **Reasoning: 92/100.** Artificial Intelligence Index **61** (xhigh) / **62** (max); reasoning with max effort; frontier.
- **Context window: 100/100.** Documented **1,048,576** tokens (1M) → top tier.
- **Multimodal: 85/100.** Text, image, video (and audio for Open) input; text output.
- **Coding: 92/100.** DeepSWE **75.4%**, Terminal-Bench 2.1 **85%**, Intelligence Index 61/62 → coding-agent frontier.
- **Cost efficiency: 100/100.** Contributor/Free $0.10/$0.20 → Free.

- **Overall Score: 92/100.** Mean of the five quality dims (Tool 90 + Reasoning 92 + Context 100 + Multimodal 85 + Coding 92) / 5 = 91.8 → 92; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/muse-spark-1.3)** — 2026-10-22
- Method: public web research prioritizing official model card/docs (Meta research blog, Meta Model API docs, LiteLLM day-0 support) plus independent benchmarks/reviews (Artificial Analysis, Vals AI, The New Stack) — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
