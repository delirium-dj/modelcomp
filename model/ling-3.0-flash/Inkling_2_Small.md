# Ling 3.0 Flash — findings by Fledge Alpha

- Source: inclusionAI / Ant Group (`inclusionai/Ling-3.0-flash`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash
- **Short description:** InclusionAI's August 2026 native hybrid-reasoning MoE — merges Ring-series reasoning into the Flash line's speed. Matches or beats the previous 1T-class flagship Ring-2.6-1T at ~12% of its total and ~8% of its active parameters.
- **Provider / access:** Hugging Face weights (`inclusionAI/Ling-3.0-flash`, BF16/FP8/INT4), OpenRouter, DeepInfra, Novita, Opper gateway (`deepinfra/inclusionAI/Ling-3.0-flash`); works in Claude Code, Kilo Code, Qwen Code, Hermes Agent, OpenClaw. Chat Completions; thinking mode on by default.
- **Release / knowledge:** 2026-08-04 (Opper; HF model card).
- **IDs:** `inclusionai/ling-3.0-flash` (also `opencode/ling-3.0-flash`)
- **Context window:** 262K tokens (training schedule 8K → 32K → 256K); max output 32–33K; SGLang HiCache + Mooncake caching cuts TTFT 60–80% on long inputs.
- **Modalities:** text in; text out; native hybrid reasoning (thinking default); tool calling. No vision (see `ling-3.0-flash-vl` sibling).
- **Pricing (as of 2026-10-08):** official Ant Ling API $0.021 in / $0.063 out per 1M (cache $0.0042); third-party $0.06/$0.18, cache $0.01 (DeepInfra/Novita via Opper). Open weights free.
- **Architecture:** 124B total / 5.1B active BailingMoeV3 — 512 routed experts (8 fire + 1 shared), 5:1 KDA/MLA hybrid linear attention, native multi-token-prediction head.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **72.2%** (BenchLM; vs DeepSeek V4 Flash 73.2%)
- Tau3-banking-AA, MCP-Atlas, SkillsBench: strong results claimed (HF model card; no exact values)
- BenchLM agentic public lane: **33.2** (#73/117)

Reasoning / knowledge:

- AA Intelligence Index: **38** (Opper launch citation) / **20.1** (later AA snapshot via Opper) — index version drift, both cited
- BenchLM reasoning public lane: **72.5** (2 rankable rows)
- BenchLM independent overall: **45.36**

Coding:

- SWE-bench Pro: **56.6%** (HF model card via BenchLM; beats DeepSeek V4 Flash 0731's 52.6%)
- SWE-bench Multilingual: **72.4%** (BenchLM)
- SWE-bench (Vals): **65.2%** (BenchLM)
- LiveCodeBench v5: **82.8%** (BenchLM)
- SciCode: **41.2%** (BenchLM)
- AA Coding Index: **50.6**; output speed 329 tok/s, TTFT 1.79s (Opper/AA)

Long context:

- 262K window (HF card); no MRCR/RULER public number found.

### Normalized scores (1–100)

- **Tool use: 68/100.** BrowseComp 72.2% plus MCP-Atlas/SkillsBench strength and broad harness support; mid-pack BenchLM agentic lane caps it.
- **Reasoning: 68/100.** Native hybrid reasoning at AA 38 (launch) — strong for 5.1B active; no published GPQA/HLE rows.
- **Context window: 60/100.** 262K window with deep cache optimizations; no long-context retrieval score published.
- **Multimodal: 15/100.** Text-only (vision lives in the VL sibling).
- **Coding: 74/100.** SWE-bench Pro 56.6% (above DS-V4-Flash), LCB 82.8%, Coding Index 50.6 at 329 tok/s.
- **Cost efficiency: 92/100.** Open weights plus $0.02–0.06/$0.06–0.18 pricing — extreme value.
- **Overall Score: 57/100.** Mean of (68, 68, 60, 15, 74) = 57.0 → 57. Best fit: production agent loops (coding, deep research) needing reasoning + speed + open weights at minimal cost.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (Hugging Face model card, BenchLM, Opper, Zeplik, frangelbarrera eval notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
