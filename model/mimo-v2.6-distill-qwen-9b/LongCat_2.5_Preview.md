# MiMo-V2.6-Distill-Qwen-9B — findings by LongCat 2.5 Preview

- Source: Xiaomi MiMo (`XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Distill-Qwen-9B
- **Short description:** 9B-parameter open-weights agentic model from Xiaomi MiMo, created by supervised fine-tuning Qwen3.5-9B on MiMo-generated data; covers coding, general agent tasks, visual coding, and cybersecurity.
- **Provider / access:** Open weights on Hugging Face `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`; self-host via SGLang or vLLM (OpenAI-compatible API). No managed API identified.
- **Release / knowledge:** 2026 (MiMo-V2.6 generation); knowledge cutoff not formally disclosed.
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` (Hugging Face)
- **Context window:** not stated in model card; base Qwen3.5-9B context window unverified
- **Modalities:** image + text in; text out; reasoning yes (thinking mode); tool calls yes
- **Pricing (as of 2026-09-29):** open weights (MIT license) — self-host at hardware cost; no managed API pricing available.
- **Architecture:** 9B params, BF16; SFT of Qwen3.5-9B on 77.4B tokens (27.2B loss-bearing); MiMo v2.6 chat template

### Raw benchmarks found

Agent / tool use:

- Terminal Bench 2.1: **37.1%** (avg@1, official HF model card)
- Toolathlon-Verified: **35.2%** (avg@1, official HF model card)
- AutomationBench v1.0.6: **30.3%** (avg@1, official HF model card)
- OfficeQA: **19.5%** (avg@1, official HF model card)
- JobBench: **18.3%** (avg@1, official HF model card)
- GDPval / Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- MiMo General (mini): **62.2%** (avg@1, internal eval set)
- GPQA / HLE / AIME / AA Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **61.1%** (avg@3, official HF model card)
- SWE-bench Pro: **44.6%** (avg@3, official HF model card)
- MiMo Code (mini): **51.6%** (avg@3, internal eval set)
- Terminal Bench 2.1: **37.1%** (see tool use)

Cybersecurity:

- MiMo Cyber (mini): **31.3%** (avg@3, internal eval set)

Visual:

- MiMo Visual Coding (mini): **64.0%** (avg@1, internal eval set)

Long context:

- Context window not stated in model card; no long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 45/100.** Terminal Bench 2.1 37.1%, Toolathlon 35.2%, and AutomationBench 30.3% are all below the mid band (TB2.1 45–60%); capable but not competitive with larger agentic models.
- **Reasoning: 50/100.** No standard public reasoning benchmarks (GPQA/HLE/AIME) found; MiMo General (mini) 62.2% is internal-only; SWE-bench Verified 61.1% suggests modest reasoning for a 9B model.
- **Context window: 50/100.** Context window not stated in model card and base Qwen3.5-9B limit unverified; scored provisionally pending confirmation.
- **Multimodal: 65/100.** Image + text input with text output fits the 60–70 tier (+image in); no video or audio input.
- **Coding: 58/100.** SWE-bench Verified 61.1% and SWE-bench Pro 44.6% are respectable for a 9B open model; Terminal Bench 37.1% and lack of LiveCodeBench/SciCode scores cap the rating.
- **Cost efficiency: 90/100.** Open weights (MIT license) at 9B params enable single-GPU self-hosting; no API pricing to compare, but hardware cost is minimal.
- **Overall Score: 54/100.** Mean of (45 + 50 + 50 + 65 + 58) / 5 = 53.6 → 54. Best fit: budget self-hosted agentic coding model for single-GPU deployments; strong value for its size.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-09-29
- Method: public internet research (official Hugging Face model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
