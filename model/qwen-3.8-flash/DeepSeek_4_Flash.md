# Qwen 3.8 Flash — findings by DeepSeek 4 Flash

- Source: Alibaba/Qwen 3.8 Flash
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba's cheap multimodal Flash tier in the Qwen 3.8 family — 1M context, open weights, and the Flash-Next variant leading several coding comparisons.
- **Provider / access:** Alibaba Cloud / DashScope; open weights (Qwen Community License); no Zen Free ID.
- **Release / knowledge:** released August 2026; knowledge cutoff not publicly disclosed.
- **IDs:** `qwen/qwen-3.8-flash`
- **Context window:** 1,048,576 (1M) — from published Qwen specs.
- **Modalities:** text/image/video in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** $0.15 in / $0.016 cached / $0.47 out per 1M.
- **Architecture:** open-weights MoE (Flash-Next: 125B main / 6B active + 51B N-gram embeddings, 262K native extensible).

### Raw benchmarks found

Agent / tool use:

- No verified independent agentic/tool benchmark found for this exact Flash ID in this pass; scored provisionally.

Reasoning / knowledge:

- No verified GPQA/HLE/AA Index number found for this exact ID in this pass.

Coding:

- SWE-bench Pro (Flash-Next) **62.5%** (Alibaba) — beats Claude Opus 4.6 Max (53.4%)
- SWE-bench Multilingual (Flash-Next) **81.0%** (vs Opus 4.6 Max 77.5%)

Long context:

- no verified long-context retrieval number found

Multimodal:

- text/image/video input per published Qwen specs; no public MMMU number found

### Normalized scores (1–100)

- **Tool use: 65/100.** No verified agentic benchmark found; scored provisionally on the agent/coding positioning.
- **Reasoning: 65/100.** No verified reasoning benchmark found; scored provisionally.
- **Context window: 90/100.** 1M context (262K native on Flash-Next); no retrieval benchmark found.
- **Multimodal: 85/100.** text/image/video in; text-only output.
- **Coding: 84/100.** SWE-Pro 62.5% and SWE Multilingual 81.0% are strong for a cheap Flash tier.
- **Cost efficiency: 95/100.** $0.15/$0.47 per 1M (cached $0.016) is near the cheapest multimodal tier.
- **Overall Score: 78/100.** Mean of (65 + 65 + 90 + 85 + 84) / 5 = 77.8 → 78. Best-fit: cheap multimodal coding/agent tier; verify reasoning before deep-planning use.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (Alibaba/Qwen release tables, aggregator summaries); scores are normalized 1–100 interpretations, not official vendor scores. Tool use and reasoning scored provisionally — no verified public benchmark found for this exact ID.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
