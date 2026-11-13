# MiMo-V2.6-Distill-Qwen-9B — findings by Ernie 5.5 Flash

- Source: Xiaomi/MiMo-V2.6-Distill-Qwen-9B (`mimo-v2.6-distill-qwen-9b`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Distill-Qwen-9B
- **Short description:** Xiaomi MiMo's 9B agentic research checkpoint (released 2026-09-22) — Qwen3.5-9B supervised-fine-tuned on MiMo-V2.6-generated agent data for coding, general agent tasks, visual coding and cybersecurity. Released with RL environments and training code as a starting point for agentic-RL research, not as a production model.
- **Provider / access:** Open weights `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` on Hugging Face (MIT); SGLang / vLLM / transformers local serving. No API route, no metered pricing.
- **Release / knowledge:** 2026-09-22; knowledge cutoff not published.
- **IDs:** `mimo-v2.6-distill-qwen-9b`, `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`.
- **Context window:** inherited from Qwen3.5-9B (262,144 per base model; not restated on the card).
- **Modalities:** text, image and video in (image-text-to-text pipeline tag); text out; thinking mode (`enable_thinking`, MiMo v2.6 chat template); tool calls.
- **Pricing (as of 2026-11-13):** $0 per token — MIT open weights, no hosted route.
- **Architecture:** dense 9B (Qwen3.5-9B base), SFT on a 77.4B-token mixture (27.2B loss-bearing: 29.9% code, 28.5% general, 27.4% visual, 14.2% cyber).

### Raw benchmarks found

> Xiaomi's own evaluation table from the MiMo-V2.6 technical report (SFT checkpoint column), with the Qwen3.5-9B base for reference.

Agent / tool use:

- Toolathlon-Verified: **35.2%** (base 25.9)
- Terminal-Bench 2.1: **37.1%** (base 27.0)
- AutomationBench v1.0.6: **30.3%** (base 5.0); JobBench: **18.3%** (base 2.6); OfficeQA: **19.5%** (base 9.0)
- MiMo General (mini, internal): **62.2%** (base 28.5)

Reasoning / knowledge:

- GPQA / HLE / MMLU-Pro: no verified public score found (not in the vendor table)
- AA Intelligence Index: no row (not tracked)

Coding:

- SWE-bench Verified: **61.1%** avg@3 (base 60.0)
- SWE-bench Pro: **44.6%** avg@3 (base 32.0)
- MiMo Code (mini, internal): **51.6%** (base 19.5)
- Terminal-Bench 2.1: **37.1%** (listed under agentic above)

Cyber (specialist rows):

- MiMo Cyber (mini, internal): **31.3%** (base 5.7)

Visual:

- MiMo Visual Coding (mini, internal): **64.0%** (base 61.7)

Long context:

- No MRCR / RULER / GraphWalks figure published for this checkpoint.

### Normalized scores (1–100)

- **Tool use: 62/100.** Toolathlon 35.2%, TB 2.1 37.1% and AutomationBench 30.3% are real agentic rows showing large gains over the base, but all are well below mid-tier cloud models. Internal MiMo General 62.2 is not transferable. Capped by the missing frontier comparisons.
- **Reasoning: 35/100.** No public reasoning benchmark row exists for this checkpoint (no GPQA/HLE). Score reflects absence of evidence; the vendor table does not cover general reasoning.
- **Context window: 85/100.** 262,144 inherited from Qwen3.5-9B — tier 200K–500K band; no retrieval figure published.
- **Multimodal: 55/100.** Image/video in documented (image-text-to-text pipeline) with internal MiMo Visual Coding 64.0%; no public vision benchmark row. Mid-band on documented capability.
- **Coding: 68/100.** SWE-bench Verified 61.1% and SWE-bench Pro 44.6% are genuinely useful 9B-class coding numbers (SWE-Pro +12.6 over base); TB 2.1 37.1% supports it. Capped by the absence of LiveCodeBench/DeepSWE rows and the internal-only MiMo Code row.
- **Cost efficiency: 100/100.** $0 — MIT weights runnable on a single 9B-class GPU.
- **Overall Score: 61/100.** Best fit as an open research baseline for agentic RL (coding, tool use, cyber) on a 9B budget; the thin public benchmark surface and mid-pack agentic rows keep it out of the top band.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B Hugging Face model card and its evaluation table, MiMo-V2.6 technical report citation, BenchmarkList record with 4 rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B — Hugging Face model card (evaluation table)](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)
  - [MiMo-V2.6-Distill-Qwen-9B — BenchmarkList (4 benchmark rows)](https://benchmarklist.com/models/xiaomi-mimo-v2.6-distill-qwen-9b/)
  - [MiMo-V2.6 launch — Xiaomi MiMo](https://mimo.xiaomi.com/mimo-v2-6)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.