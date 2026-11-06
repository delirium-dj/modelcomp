# Ling 3.0 Flash VL — findings by Mercury 3

- Source: InclusionAI (Ling 3.0 Flash VL)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** InclusionAI's open-weight multimodal Flash model (released 2026-09-10), building on Ling 3.0 Flash (124B total / 5.5B active MoE) with added native visual perception and advanced visual-agent capabilities. Hybrid instant/reasoning model with tool calling.
- **Provider / access:** Open weights; hosted via DeepInfra/OpenRouter and other providers (~3).
- **Release / knowledge:** Released 2026-09-10; knowledge cutoff not published.
- **IDs:** `inclusionai/ling-3.0-flash-vl`.
- **Context window:** 262,144 tokens (131K per some earlier listings — treat 262K as the current served window).
- **Modalities:** text + image (visual) input; text output; hybrid instant/reasoning; tool calling; Apache-compatible open weights (license terms per inclusionAI).
- **Pricing (as of 2026-11):** $0.06 in / $0.18 out per 1M (DeepInfra via OpenRouter; cached $0.012), adjusted ~$0.04/task; some listings from $0.03.
- **Architecture:** MoE, 124B total / 5.5B active (Flash base) + visual capability.

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond: **86.2%** (AA)
- HLE (text-only): **22.0%** (AA)
- AA Intelligence (est.): **12.4**; AA-Omniscience: **-4.5**

Coding:

- AA Coding Index v4.x: **57.0** (AA)
- SciCode (AA subproblems): **44.2%**; Terminal-Bench 2.1: **64.4%**; Terminal-Bench 4.0: **0.0%**
- LLMPodium score 40.5 (#428/751)

Agent / tool use:

- AA Agentic Index: **30.0**; AutomationBench-AA: **15.7%**; τ³-Banking: **34.4%**
- AA-Briefcase ~986 Elo; GDPval-AA v2 1225 Elo

Long context / multimodal:

- AA-LCR v1.1: **78.3%**; GDP.pdf: **66.4%**; MMMU Pro: **79.0%**; CritPt: 2.0%

### Normalized scores (1–100)

- **Tool use: 74/100.** Terminal-Bench 2.1 64.4% is solid but TB 4.0 = 0.0% and AutomationBench-AA 15.7% flag weak agentic terminal/SaaS coverage.
- **Reasoning: 80/100.** GPQA Diamond 86.2% is excellent for the class; HLE 22.0% and AA Intelligence est. 12.4 cap upside.
- **Context window: 80/100.** 262K verified.
- **Multimodal: 82/100.** Native visual perception with MMMU Pro 79.0%, plus hybrid reasoning/instant modes.
- **Coding: 78/100.** AA Coding Index 57.0 with SciCode 44.2%; TB4 = 0.0% is a hard cap.
- **Cost efficiency: 92/100.** $0.06/$0.18 with ~$0.04/task adjusted — exceptional value.
- **Overall Score: 79/100.** Mean of the five non-cost dims (74+80+80+82+78)/5 = 78.8 → 79. Best-fit: a very cheap open-weight multimodal workhorse with strong GPQA/MMMU; avoid for terminal-heavy agentic work.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenRouter: inclusionai/ling-3.0-flash-vl](https://openrouter.ai/inclusionai/ling-3.0-flash-vl)
  - [Benchmark Heaven: Ling-3.0-flash-VL (AA-sourced benchmarks/cost)](https://benchmarkheaven.com/models/ling-3.0-flash-vl::default)
  - [llm-stats: Ling 3.0 Flash](https://llm-stats.com/models/ling-3.0-flash)
  - [CloudPrice: Ling 3.0 Flash VL](https://cloudprice.net/models/inclusionai-ling-3-flash-vl)
  - [CompareLLM: Ling 3.0 Flash VL](https://comparellm.ai/models/ling-3-0-flash-vl)
  - [LLMPodium: Ling 3.0 Flash VL](https://llmpodium.com/models/ling-3-0-flash-vl)
- Future sources: add a new file next to this one using the same headings.
