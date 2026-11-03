# Qwen 3.7 — findings by Qwen 3.8 Flash

- Source: Alibaba / Qwen (`qwen-3.7`; curated id `opencode/qwen-3.7`), cross-checked against the Qwen blog "Qwen3.7: The Agent Frontier" (qwen.ai/blog?id=qwen3.7), OpenRouter `qwen/qwen3.7-max` API/benchmark rows, together.ai and yottalabs/overchat teardowns
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7
- **Short description:** The base/flagship release of Alibaba's **Qwen 3.7 "Agent Frontier"** generation (2026-05-19) — a large MoE reasoning model specialized for real-world agentic coding and tool use, with a 1M-token context window and vision understanding across the series. This entry is the **Qwen3.7 series model**; the served specializations `qwen-3.7-max`, `qwen-3.7-plus`, and `qwen-3.7-flash` are distinct queue entries and are not conflated here.
- **Variant flag:** Alibaba's **open-weights line skipped 3.7** (the 3.7 generation shipped as hosted/API tiers); a pending 1M-context open qwen3.7 release was reported but not finalized at research time. Scores are therefore grounded in the Qwen3.7 series/agent-frontier evidence, and Max-tier-only absolutes are labelled as such rather than silently re-attributed.
- **Provider / access:** Alibaba Cloud Model Studio (hosted), OpenRouter (`qwen/qwen3.7-*`), together.ai; explicit prompt caching for repeated context.
- **Release / knowledge:** 2026-05-19 (Qwen3.7 series; launched at the Alibaba Cloud Summit).
- **IDs:** `qwen/qwen3.7` (base series); served tiers `qwen3.7-max`, `qwen3.7-plus`, `qwen3.7-flash`.
- **Context window:** **1M tokens** (native 262K, extensible to 1M per OpenRouter; series default 1M).
- **Modalities:** text/code + **image** in (vision understanding across the series) / text out; reasoning yes; tool calls yes; JSON mode yes. Audio/video not confirmed for the base tier.
- **Pricing (as of 2026-11-03):** series-dependent — Plus ~$0.40/M, Max ~$2.50/M (openrouter/together/yottalabs); the base 3.7 is priced mid-series, not the cheapest flash tier.
- **Architecture:** proprietary/large MoE (the 3.7 flagship scales toward the ~2.4T-max lineage); reasoning + agentic post-training.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **leading its release window** (together.ai "leading Terminal-Bench"); agentic tool loops are the headline of the "Agent Frontier" positioning.

Reasoning / knowledge:

- Vals AI eval (OpenRouter `qwen3.7-max` row): **90.2%** — strong general/agent knowledge for the series.
- GPQA Diamond / HLE absolutes specific to the *base* 3.7: **no isolated base-tier row published**; series reasoning is high frontier-lite.

Coding:

- SWE-bench Verified: **~80.4%** (Qwen3.7-Max, together.ai) — series flagship agentic-coding figure; the base 3.7 sits a notch under Max.
- SWE-bench Multilingual: **~78.3%** (Max); SWE-Pro within ~2 pts Plus-vs-Max (ofox.ai).

Long context:

- 1M window (native 262K); prompt caching for efficient repeated context; no MRCR/RULER retrieval absolutes published for the base ID.

### Normalized scores (1–100)

- **Tool use: 83/100.** "Agent Frontier" is the model's explicit design goal, evidenced by Terminal-Bench leadership at launch and 90.2% on Vals AI agent evals; among the stronger agentic tool users of its window, just below the very top frontier agents.
- **Reasoning: 80/100.** High series reasoning (Vals AI 90.2%, frontier-lite GPQA band) but capped below the absolute 94–96% GPQA leaders; base-tier general-knowledge absolutes are not separately published, so it's scored as very-strong rather than record-setting.
- **Context window: 80/100.** 1M extensible (native 262K) with prompt caching is a top-tier working window; scored below maximal because no long-context retrieval benchmark is published for this exact ID and the native (non-extended) window is 262K.
- **Multimodal: 55/100.** Vision (image) understanding across the series and document processing are real, but audio/video are unconfirmed for the base tier and no independent vision eval row exists; solid but not omni-frontier.
- **Coding: 84/100.** Series SWE-bench Verified ~80.4% / Multilingual ~78.3% put it in the top agentic-coding tier of mid-2026; the base 3.7 is scored a hair under the Max row since the flagship number is a Max-tier figure.
- **Cost efficiency: 65/100.** Mid-series pricing (Plus ~$0.40 cheap, Max ~$2.50 premium) — good value for agentic work, not a budget floor.
- **Overall Score: 76.4/100.** Half-up mean of the five quality dims (83+80+80+55+84)/5 = 76.4. Best fit: production agentic coding and tool-use workloads needing a 1M-context, vision-capable, cost-aware frontier workhorse; slightly under the dedicated Max flagship.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03
- Method: public internet research — Qwen blog "Qwen3.7: The Agent Frontier" (qwen.ai/blog?id=qwen3.7, 2026-05-19), OpenRouter `qwen/qwen3.7-max` (Vals AI 90.2%, native 262K extensible to 1M, prompt caching), together.ai (SWE-bench Verified 80.4% / Multilingual 78.3%, Terminal-Bench lead), yottalabs + overchat + ofox (Plus $0.40 vs Max $2.50, open line skipped 3.7, vision on Plus). Scores are normalized 1–100 interpretations, not official vendor scores. Max-tier-only absolutes are labelled as series/flagship references and not silently re-attributed to the base ID; the open-weights ambiguity is flagged.
- Revisit trigger: an Artificial Analysis / BenchLM Intelligence Index row under the exact base `qwen3.7` ID, or confirmation/finalization of the pending open-weights qwen3.7 release with its own benchmark table.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
