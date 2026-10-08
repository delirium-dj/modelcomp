# MiMo V2.6 Pro — findings by Step 5 Preview

- Source: Xiaomi `mimo-v2.6-pro`
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro (`mimo-v2.6-pro`; Xiaomi's flagship MiMo reasoning/agent model)
- **Short description:** Xiaomi's flagship open-weights model — a 1.02T-parameter sparse MoE (42B active) built as an open alternative to closed frontier labs, with a 1M-token context and omni-modal input. MIT-licensed and self-hostable. Top open-weights mark on the AA Intelligence Index at release.
- **Provider / access:** Xiaomi's mimo.mi.com console, OpenRouter, DeepInfra, Novita; plus self-hosted local inference from the Hugging Face / GitHub weights (BF16/FP32/FP8/INT8). MIT license. No published data-retention/training-on-inputs policy for the hosted API.
- **Release / knowledge:** Released 2026-09-21/22. No published system card, named red-team partners, refusal-rate benchmark, or training-data cutoff date.
- **IDs:** `mimo-v2.6-pro` (OpenRouter) / `XiaomiMiMo/MiMo-V2.6-Pro` (HF). MIT open weights = free self-host; hosted API is cheap.
- **Context window:** 1,048,576 (1M) input; 131,072 max completion. 5-layer speculative decoder for multi-token prediction.
- **Modalities:** Text, image, video, audio in; text out (no native audio/image generation). Omni-modal input via a 681M-param vision encoder + ~435M params of audio encoders. Reasoning yes (include_reasoning param for visible CoT); tool calls yes; JSON yes.
- **Pricing (as of 2026-10-08):** $0.435/M in · $0.87/M out · ~$0.0036/M cached in (99% off) — roughly an order of magnitude below proprietary flagships. UltraSpeed variant (same checkpoint) costs 10× more. MIT self-host = hardware only.
- **Architecture:** Sparse MoE, 1.02T total / 42B active, 70 layers (60 sliding-window + 10 global-attention), hidden 6144, 384 routed experts (8 active/token), 5-layer speculative decoder.

### Raw benchmarks found

> Cross-referenced hokai.io (Xiaomi's own evals + Artificial Analysis) and vectorwire.ai (24 results/23 benchmarks, 4 independent, capability profile). Xiaomi's own numbers are vendor-reported and HokAI has not independently verified the "on par with GPT-5.6 Sol / Claude Opus 5" claim.

Agent / tool use:

- OSWorld-Verified (computer use): **82.0** (Xiaomi vendor-reported)
- Toolathlon Verified: **76.9%** (vendor-reported)
- GDPval-AA 2.1 (Elo): **1,673** (vendor-reported) — clears the ~1750-adjacent professional-work range
- Terminal-Bench 4.0: **34.9%** (vendor-reported) — mid on the hardest terminal bench
- ProgramBench: **26.5%** (vendor-reported)
- Agents' Last Exam: **31.6%** (vendor-reported)
- JobBench: **62.0** (vendor-reported)
- Vector Wire capability: **Agentic "Capable"** (−22.1% vs leader, 3/7)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46** (top open-weights mark at release; ~$0.13/task) — well below frontier 57–61
- AA-Omniscience: **8.38** (low factuality/calibration — a weakness)
- Vector Wire capability: **Reasoning "Capable"** (−19.0% vs leader, 2/6); **Factuality "Capable"** (−20.4%)
- GPQA Diamond / HLE exact rows: not surfaced live for MiMo V2.6 Pro — treated as provisional

Coding:

- DeepSWE v1.1 (agentic coding): **71.9** (Xiaomi vendor-reported) — just under the 74% frontier ref
- MiMo VisualCoding: **72.3** (Xiaomi vendor-reported)
- Terminal-Bench 4.0: **34.9%** (see tool use)
- CyberGym (cybersecurity): **94.0** (Xiaomi vendor-reported) — a standout
- SWE-bench Verified / SWE-bench Pro: no verified public score found for MiMo V2.6 Pro
- Vector Wire capability: **Coding "Limited"** (−25.7% vs leader, 3/10) — its weakest measured area

Multimodal:

- Text + image + video + audio in; text out. 681M vision encoder + ~435M audio encoders.
- LMArena · Vision: **1,263.52** (independent, HF dataset)
- Vector Wire: Multimodal **not rated** (too few results)

Long context:

- 1M input / 131K output. Vector Wire: Long Context **"Strong"** (−4.2% vs leader, 1/3) — a top-tier long-context model. No explicit MRCR ≥98%-at-512K figure published.

### Normalized scores (1–100)
- **Tool use: 82/100.** OSWorld 82.0 (computer use), Toolathlon 76.9%, and GDPval-AA 1,673 Elo are solid. Capped by Terminal-Bench 4.0 at 34.9%, ProgramBench 26.5%, Agents' Last Exam 31.6%, and Vector Wire's Agentic "Capable" (−22.1%) — plus the numbers are almost entirely Xiaomi self-reported (HokAI has not verified the "on par with GPT-5.6 Sol / Opus 5" claim).
- **Reasoning: 80/100.** AA Intelligence Index 46 (top open-weights at release) with Reasoning "Capable" (−19.0%). Capped hard by AA-Omniscience 8.38 (weak factuality/calibration), the index being well below frontier 57–61, and no verified GPQA/HLE row — a mid-tier reasoner among open models, not a frontier one.
- **Context window: 95/100.** 1M input / 131K output with Vector Wire Long Context "Strong" (−4.2%, 1/3) — a top-tier long-context model, and the 131K output is the largest of the models reviewed here. Held from 100 by no explicit MRCR ≥98%-at-512K figure.
- **Multimodal: 88/100.** Omni-modal input (text/image/video/audio) via dedicated 681M vision + 435M audio encoders, with LMArena·Vision 1,263.52 (independent) — hits the 90–100 input band; held to 88 by text-only output and Vector Wire not rating Multimodal (too few results).
- **Coding: 78/100.** DeepSWE 71.9, MiMo VisualCoding 72.3, and CyberGym 94.0 are solid, but Terminal-Bench 4.0 34.9% is weak, there is no verified SWE-bench Verified/Pro row, and Vector Wire rates Coding "Limited" (−25.7%, 3/10) — coding is its weakest measured area despite the vendor claims.
- **Cost efficiency: 96/100.** Hosted API $0.435/$0.87 per 1M (rubric ~$0.10–$0.60 in = 97–99, roughly an order of magnitude below proprietary flagships), cached input ~$0.0036/M (99% off), AND MIT open weights for free self-hosting (BF16/FP8/INT8). The best value in the top tier reviewed here.
- **Overall Score: 85/100.** Mean of the five non-cost dims (82+80+95+88+78)/5 = 84.6. Best fit as a self-hostable, MIT-licensed, top-value open-weights option for long-context and agentic/computer-use workloads at a fraction of proprietary pricing; teams needing audited safety docs, named red-team partners, or enterprise compliance should look elsewhere (Xiaomi has published none).

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-08
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Cross-referenced Xiaomi's own evals + Artificial Analysis (via hokai.io) and vectorwire.ai (24 results, 4 independently verified, capability profile). Most headline numbers are Xiaomi self-reported.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

