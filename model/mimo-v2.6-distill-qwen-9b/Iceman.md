# MiMo V2.6 Distill Qwen 9B — findings by Iceman

- Source: XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Distill-Qwen-9B
- **Short description:** Xiaomi’s MiMo-V2.6-Distill-Qwen-9B is an MIT-licensed 9.41B dense SFT of Qwen3.5-9B released as an agentic-RL research baseline for coding, general agent tasks, visual coding, and cybersecurity.
- **Provider / access:** Open weights on Hugging Face (`XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`, MIT license), self-host only. Local metadata lists `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`, `noFreeId`, and no hosted route.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `MiMo-V2.6-Distill-Qwen-9B`, `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`.
- **Context window:** 262,144 tokens.
- **Modalities:** Text, image, and video input; text output.
- **Pricing (as of 2026-11-10):** $0 self-host (MIT open weights, ~18.85 GB BF16); no hosted route per local metadata.
- **Architecture:** Dense 9.41B multimodal model (SFT distillation of Qwen3.5-9B), agentic/research-oriented checkpoint (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card evaluation table for `MiMo-V2.6-Distill-Qwen-9B` (SFT checkpoint, vendor/internal evaluation as reported).

Agent / tool use:

- Terminal Bench 2.1: **37.1%** (avg@1)
- Toolathlon-Verified: **35.2%** (avg@1)
- AutomationBench v1.0.6: **30.3%** (avg@1)
- OfficeQA: **19.5%** (avg@1)
- JobBench: **18.3%** (avg@1)
- MiMo General (mini, internal): **62.2%** (avg@1)

Reasoning / knowledge:

- No standard GPQA/HLE/AIME benchmarks reported in reviewed table (internal/general mini sets reported instead).

Coding:

- SWE-bench Verified: **61.1%** (avg@3)
- SWE-bench Pro: **44.6%** (avg@3)
- MiMo Code (mini, internal): **51.6%** (avg@3)

Long context:

- 262K context supported. No standalone MRCR/RULER/AA-LCR numeric benchmark reported.

Multimodal:

- MiMo Visual Coding (mini, internal): **64.0%** (avg@1)
- Image/video input supported (inherited/base capability), but limited standardized multimodal benchmark numerics reported.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Vendor/internal benchmark mix; interpreted cautiously.

- **Tool use: 72/100.** Moderate agentic/tool-use results (Terminal Bench 2.1 37.1%, Toolathlon-Verified 35.2%, AutomationBench 30.3%) with stronger internal general-agent performance.
- **Reasoning: 68/100.** Limited standardized reasoning benchmark evidence published; internal evaluations suggest capability but not directly comparable.
- **Context window: 84/100.** 262K context support for long tasks.
- **Multimodal: 74/100.** Multimodal input support with reported internal visual-coding performance (64.0%), but limited standardized multimodal benchmark coverage.
- **Coding: 76/100.** Solid coding results for a 9B model (SWE-bench Verified 61.1%, SWE-bench Pro 44.6%) plus internal coding set results.
- **Cost efficiency: 97/100.** MIT open weights, self-host only, small dense footprint (~9.4B) suitable for low-cost local deployment.
- **Overall Score: 75/100.** Mean of the five non-cost dims (72, 68, 84, 74, 76) = 74.8 → 75. Best fit as a low-cost, self-hosted multimodal research baseline for agentic/coding RL experimentation.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from vendor/internal benchmark figures and should be interpreted cautiously.
- Reference URLs:
  - [MiMo-V2.6-Distill-Qwen-9B model card (Hugging Face)](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)
  - Local repository metadata consulted: `model/mimo-v2.6-distill-qwen-9b/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
