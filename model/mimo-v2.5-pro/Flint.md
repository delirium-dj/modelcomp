# MiMo-V2.5-Pro — findings by Flint

- Source: Xiaomi (MiMo) / Hugging Face / Vals AI / Artificial Analysis / BenchLM / The Aggregate / LMArena / LLM Reference
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.5-Pro
- **Short description:** Xiaobi's most capable model to date — open-weight MoE (1.02T params / 42B active, hybrid attention + MTP, 27T tokens FP8 pre-training) tuned for demanding agentic, complex software engineering, and long-horizon tasks; context extended to 1M tokens.
- **Provider / access:** Open weights (MIT) on Hugging Face (`XiaomiMiMo/MiMo-V2.5-Pro`); API via Xiaomi / OpenRouter / DeepInfra / GMI / Zyphra; LMArena, Vals, AA provider routes.
- **Release / knowledge:** Released 2026-11-06/23; knowledge cutoff not verified in sources found.
- **IDs:** `XiaomiMiMo/MiMo-V2.5-Pro`; API tag `mimo-v2.5-pro`.
- **Context window:** **1M** tokens (per Xiaomi, Vals, BenchLM, AA); max output 128k.
- **Modalities:** Text in; image in (not supported per Vals); video not supported; file not supported.
- **Pricing (as of 2026-11-06):** $0.43 input / $0.87 output per 1M (Vals, LLM Reference); AA: $0.2 input / $1.02 output; MiMo-V2.5-Pro-UltraSpeed ~3x cost of base, ~10x speed (1000 TPS).
- **Architecture:** 1.02T MoE / 42B active; hybrid SWA+GA attention (6:1, 128-token window), learnable attention-sink bias; MTP module tripling output throughput; FP8 pre-training at native 32K, context to 1M.

### Raw benchmarks found

Official (Xiaomi / MiMo / HF):

- MiMo-V2.5-Pro released 2026-11-06/23; open-weight; hybrid attention; MTP; 1M ctx; 27T tokens.
- MiMo Coding Bench (in-house, Claude Code agentic suites).

Independent (Xiaomi-internal, Vals, AA, BenchLM, Aggregate, LMArena, LLM Reference):

- BenchLM: **55.12/100**, rank **#74/1004**; ctx 1M; coverage 33/724 (partial → conservative).
- Agentic: Claw-Eval **63.8%**; GDPval-AA **1265** (Elo); τ³-bench **72.9%**; Terminal-Bench 2.0 **68.4%**; AA Agentic Index **22.7**; AA ITBench **38.2**; terminalBenchHard **43.2**; Gert Labs **62.70%**.
- Coding: SWE-bench Pro **57.2%**; Terminal-Bench 2.0 **68.4%** (Xiaomi); AA-SciCode **50.6%**; LiveCodeBench (Vals) **81.4%**; SWE-bench (Vals) **74.0%**; AA Coding Index **60.2%**.
- Reasoning: AA-LCR **79.7%**; CritPt **4.0%**; AA-GPQA Diamond **86.6%**; AA Intelligence Index **26.0**; HLE **48%**; HLE w/o tools **34%**; MMLU **89.4%**.
- Knowledge: MMLU Pro **68.5%**; Google-Proof Q&A (GPQA-D) **66.7%**.
- Aggregate: rating **1719 ± 5**, rank #162/1656; SWE-bench Verified **74.0%** (Mini-SWE-agent); strong FinCUABench, RideWay.

### Cross-source comparison

- OpenAI/AA/Vals/BenchLM conflict on scale: BenchLM 55.12 vs AA Intelligence 26.0 vs Aggregate 1719 Elo — different constructions.
- Coding: Xiaomi-reported SWE-bench Pro 57.2 vs Vals SWE-bench 74.0 — different benchmarks, not directly comparable.

### Normalized scores (1–100)

- **Tool use: 65/100.** Agentic: Claw-Eval **63.8%**, τ³-bench **72.9%**, TB **68.4%**; GDPval-AA **1265** Elo.
- **Reasoning: 75/100.** AA-GPQA **86.6%**; AA-LCR **79.7%**; HLE **48%**; MMLU **89.4%**.
- **Context window: 90/100.** **1M** tokens.
- **Multimodal: 55/100.** Design Arena **1266**; text+image only.
- **Coding: 70/100.** LiveCodeBench **81.4%**; SWE-bench (Vals) **74.0%**; SWE-bench Pro **57.2%**.
- **Cost efficiency: 80/100.** Open weights (MIT); hosted $0.43/$0.87 per 1M.

- **Overall Score: 71/100.** Mean of the five quality dims (65 + 75 + 90 + 55 + 70) / 5 = **71**; Cost efficiency excluded.

## Signature

- Provided by: **Flint** — 2026-11-06
- Method: public web research prioritizing official model card/docs (Xiaomi MiMo blog, Hugging Face `XiaomiMiMo/MiMo-V2.5-Pro`) plus independent benchmarks/reviews (Vals AI, BenchLM, Artificial Analysis, The Aggregate, LMArena, LLM Reference) — three independent web searches.
- Reference URLs:
  - [MiMo-V2.5-Pro | Xiaomi](https://mimo.xiaomi.com/mimo-v2-5-pro)
  - [XiaomiMiMo/MiMo-V2.5-Pro · Hugging Face](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)
  - [MiMo V2.5 Pro Benchmarks, Cost and Capabilities | Vals AI](https://www.vals.ai/models/xiaomi_mimo-v2.5-pro)
  - [MiMo-V2.5-Pro Benchmark Results — The Aggregate](https://theaggregate.ai/model?slug=mimo-v2.5-pro)
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
