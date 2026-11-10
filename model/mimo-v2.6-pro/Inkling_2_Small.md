# MiMo-V2.6-Pro — findings by Fledge Alpha

- Source: Xiaomi (`mimo-v2.6-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi's flagship open-weights agentic/reasoning model (Sept 2026), MoE, positioned for long-horizon agent tasks with native omnimodality.
- **Provider / access:** Xiaomi mimo.mi.com console, OpenRouter (`xiaomi/mimo-v2.6-pro`), DeepInfra, GMICloud; Chat Completions-compatible APIs.
- **Release / knowledge:** released 2026-09-21; knowledge cutoff not officially stated.
- **IDs:** `xiaomi/mimo-v2.6-pro`; OpenRouter `xiaomi/mimo-v2.6-pro`
- **Context window:** 1,048,576 tokens (~1M); max output 131,072 (per HokAI/llm-stats citing model card).
- **Modalities:** text/image/audio/video in; text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-02):** $0.435/M input, $0.0036/M cached input, $0.87/M output (OpenRouter/Xiaomi); UltraSpeed variant ~10x.
- **Architecture:** ~1.02T total / 42B active parameters, sparse MoE, MIT license, open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (Xiaomi technical report via BenchLM/ia-top)
- Terminal-Bench 4.0: **34.9%** (ia-top / AA comparison)
- OSWorld-Verified: **82.0%** (Xiaomi-reported)
- AutomationBench: **53.1%** (Xiaomi-reported)
- GDPval-AA: **58.9%** (Artificial Analysis)
- Agents Arena Webapps Elo: **1284** (Design Arena)

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (ia-top, citing technical report)
- HLE: **49.4%** (Artificial Analysis)
- AA-LCR: **86.3%** (Artificial Analysis)
- CritPt: **26.6%** (Artificial Analysis)
- AA Intelligence Index: **46.3 / rank ~#12 of 68 scored** (Artificial Analysis)
- AA-Omniscience Accuracy: **34.8%**, Non-Hallucination **59.4%** (Artificial Analysis)
- SciCode: **60.9%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **78%** (ia-top, citing technical report)
- SWE-bench Pro: **57.9%** (ia-top)
- DeepSWE v1.1: **71.9%** (Xiaomi-reported)
- AutomationBench agentic coding subset, ProgramBench: **26.5%** (BenchLM)

Long context:

- AA-LCR at 1M-class window: **86.3%**; no dedicated MRCR/RULER number published.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 89.9% and OSWorld 82% are top-tier; Terminal-Bench 4.0 drops to 34.9%, capping the score.
- **Reasoning: 78/100.** GPQA Diamond 90.4% and HLE 49.4% are strong; CritPt 26.6% and Omniscience 34.8% show uneven advanced-reasoning reliability.
- **Context window: 95/100.** Native 1,048,576-token window with 131,072 max output, verified across multiple listings.
- **Multimodal: 90/100.** Native text/image/audio/video input with reasoning and tools; output is text-only.
- **Coding: 75/100.** DeepSWE 71.9% and SWE-bench Verified 78% are competitive open-weights results, but SWE-Pro 57.9% trails closed frontier.
- **Cost efficiency: 95/100.** $0.435/$0.87 per 1M is roughly an order of magnitude below closed flagships with near-frontier agent scores.
- **Overall Score: 85/100.** Mean of the five quality dims; best fit for cost-sensitive long-horizon agentic coding with open weights.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (vendor launch materials, Artificial Analysis, OpenRouter, independent bench aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
