# MiMo V2.6 Distill Qwen 9B — findings by Laguna S 2.1

- Source: Hugging Face model card (`https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`), MiMo-V2.6 technical report
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Distill-Qwen-9B
- **Short description:** A 9.4B dense agentic SFT checkpoint by Xiaomi MiMo, distilled from Qwen3.5-9B on MiMo-generated data covering coding, general agent tasks, visual coding, and cybersecurity. Released September 2026. MIT-licensed open weights, 18.8 GB BF16. 262K context window (hybrid linear/full attention). Supports text, image, and video input. Self-hosted only — no hosted API route on Zen, OpenRouter, or HF Inference.
  > Note: the repo `meta.json` lists 128K context and text-only modality; HuggingFace confirms 262,144 context and image-text-to-text (text+image in, text out). This file documents the full model per verified external sources.
- **Provider / access:** Self-hosted only (HuggingFace: `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`); no hosted API route on Zen, OpenRouter, or HF Inference as of 2026-09-30
- **Release / knowledge:** September 2026 (HF listing updated 10 days ago ≈ late Sept 2026); knowledge cutoff not disclosed
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` (HuggingFace); `opencode/mimo-v2.6-distill-qwen-9b` (project ID)
- **Context window:** 262,144 tokens (HF model card and technical report; 128K in repo `meta.json`)
- **Modalities:** Text and image input, text output; tool calls yes; reasoning yes (chain-of-thought via `--reasoning-parser mimo`); video input supported per technical report
- **Pricing (as of 2026-10-02):** $0 — MIT open weights, self-hosted only (no hosted route)
- **Architecture:** 9.4B dense parameters, distilled from Qwen3.5-9B via supervised fine-tuning on 77.4B tokens (27.2B loss-bearing); MIT license
- **Training data:** 77.4B token SFT mixture: Code 29.9% (7.3B loss-bearing), Cyber 14.2% (4.8B), General 28.5% (5.7B), Visual 27.4% (9.4B)

### Raw benchmarks found

> Sources: HuggingFace model card evaluation results table and the MiMo-V2.6 technical report (referenced on the model card). Benchmarks marked † are internal evaluation sets from the technical report. Standard public benchmarks (non-†) are citable from the HF model card.

Agent / tool use:

- Terminal-Bench 2.1: **37.1%** — (HF model card evaluation results; HarborFramework dataset)
- Toolathlon-Verified: **35.2%** — (HF model card evaluation results; HKUST-NLP dataset)
- AutomationBench v1.0.6: **30.3%** — (MiMo-V2.6 technical report)
- Terminal-Bench Hard / 4.0: **no verified public score found**
- τ²-bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- OSWorld-Verified: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR / CritPt: **no verified public score found**
- AA Intelligence Index: **no verified public score found** (model not on AA; returns 404)
- BenchLM overall: **no verified public score found** (model not on BenchLM; returns 404)
- AA-Omniscience: **no verified public score found**
- MiMo General (mini)†: **62.2%** — (internal eval set, MiMo-V2.6 technical report)

Coding:

- SWE-bench Verified (avg@3): **61.1%** — (HF model card evaluation results; Swe-bench/SWE-bench Verified dataset)
- SWE-bench Pro (avg@3): **44.6%** — (HF model card evaluation results; ScaleAI/SWE-bench Pro dataset)
- MiMo Code (mini)†: **51.6%** — (internal eval set, MiMo-V2.6 technical report)

Multimodal:

- MiMo Visual Coding (mini)†: **64.0%** — (internal eval set, MiMo-V2.6 technical report)
- MMMU-Pro: **no verified public score found**
- Design Arena / ImageBench: **no verified public score found**
- No verified multimodal benchmark on AA, BenchLM, or OpenRouter

Long context:

- 262,144 token context window per HF model card and technical report; no MRCR / RULER / GraphWalks retrieval score reported

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.

- **Tool use: 35/100.** Terminal-Bench 2.1 at 37.1% is below the ~44% frontier threshold. Toolathlon-Verified at 35.2% is moderate for agentic eval. AutomationBench at 30.3% is weak. No τ²-bench, GDPval-AA, OSWorld, or Claw-Eval data found. The model shows basic agentic capability but lags behind 2026 frontier coding agents significantly. For a 9.4B open-weights model, this is respectable but not strong.

- **Reasoning: 30/100.** No verified reasoning benchmarks found (GPQA, HLE, LCR, CritPt, Intelligence Index, Omniscience all "no verified public score found"). The only reasoning-related signal is the internal MiMo General (mini) at 62.2%, which is from the technical report and not an independently verified public benchmark. The model is not on AA or BenchLM leaderboards. Scored in the bottom-third provisional band.

- **Context window: 72/100.** 262,144 tokens per HF model card and technical report — falls in the 200K–500K tier (58–84 band), interpolated to ~72. The repo `meta.json` lists 128K (lower tier), but verified external sources (HF, technical report) confirm 262K. No retrieval-at-length benchmark (MRCR/RULER/GraphWalks) found.

- **Multimodal: 25/100.** Text and image input, text output per HF model card (Image-Text-to-Text pipeline). No verified multimodal benchmarks (MMMU-Pro, Design Arena, ImageBench all "no verified public score found"). The internal MiMo Visual Coding (mini) at 64.0% is from the technical report and not independently verified. Scored in the text+image low band (25–40), near the bottom since no public multimodal score exists.

- **Coding: 65/100.** SWE-bench Verified at 61.1% (avg@3) is genuinely strong for a 9.4B parameter open-weights model — comparable to much larger models. SWE-bench Pro at 44.6% is moderate. The internal MiMo Code (mini) at 51.6% supports coding capability. However, these are the only coding results and the model is absent from standard coding leaderboards (LiveCodeBench, DeepSWE, SciCode, AA-Coding Index all "no verified public score found"). The 61.1% on SWE-bench Verified is a real, citable, public benchmark result, lifting the score into the mid band.

- **Cost efficiency: 95/100.** No metered API cost — $0 MIT weights, 18.8 GB BF16 laptop-runnable local weights; capped below 100 as self-host compute is non-zero and no hosted free route exists.

- **Overall Score: 45/100.** Mean of five quality dims: (35 + 30 + 72 + 25 + 65) / 5 = 227 / 5 = 45.4 → 45. MiMo V2.6 Distill Qwen 9B is a capable 9.4B open-weights distilled model — its SWE-bench Verified at 61.1% is genuinely impressive for its size, but the model lacks breadth across standard benchmarks (absent from AA, BenchLM, OpenRouter leaderboards; no GPQA/HLE/TB2.1-standard-scores on public leaderboards). Best fit: self-hosted coding assistance where the 262K context and image+video input are useful and the 18.8 GB BF16 footprint is acceptable.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-02
- Method: public internet research via HuggingFace model card evaluation results table, MiMo-V2.6 technical report referenced on the model card, and Artificial Analysis / BenchLM model page checks (both returned 404); scores are normalized 1–100 interpretations, not official vendor scores.
- Sources cited: `https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`, `https://artificialanalysis.ai/models/mimo-v2.6-distill-qwen-9b` (404 — not found), `https://benchlm.ai/models/mimo-v2.6-distill-qwen-9b` (404 — not found)
- Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `MiMo_V2.6_Distill_Qwen_9B.md`, using the same headings.

---
