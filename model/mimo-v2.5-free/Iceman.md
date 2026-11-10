# MiMo V2.5 Free — findings by Iceman

- Source: Xiaomi/MiMo V2.5 (Free/Zen tier context)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 (Free tier / base model context)
- **Short description:** Xiaomi’s MiMo-V2.5 is a 310B-parameter Sparse MoE model (15B active) with native visual and audio understanding, agentic capabilities, and up to 1M context. Local metadata targets the free Zen-served tier (base, not Pro) with reduced served limits.
- **Provider / access:** Xiaomi MiMo platform/API and open weights for MiMo-V2.5 family on Hugging Face (`XiaomiMiMo/MiMo-V2.5`, `XiaomiMiMo/MiMo-V2.5-Base`). Local metadata lists `opencode/mimo-v2.5-free` with free Zen tier (limited time; data may be used to improve model).
- **Release / knowledge:** Announced April 22, 2026 (Xiaomi MiMo page). Knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `MiMo-V2.5`, `XiaomiMiMo/MiMo-V2.5`, `mimo-v2.5-free` (Zen/local metadata identifier).
- **Context window:** Native up to 1,000,000 tokens supported by MiMo-V2.5 (Xiaomi announcement). Local metadata notes Zen free tier caps 200,000 total / 32,768 max output.
- **Modalities:** Text, image, and audio input with multimodal reasoning (native visual/audio encoders); text output (Xiaomi announcement/local metadata states text/image/audio/video in; text out).
- **Pricing (as of 2026-11-10):** Free Zen tier available for a limited period (with possible training-data usage per metadata). Native/hosted pricing from ~$0.14/$0.28 per 1M in/out (local metadata/Xiaomi token plan context varies).
- **Architecture:** Sparse MoE, 310B total / 15B active parameters, trained on 48T tokens; hybrid sliding-window attention language backbone with dedicated visual and audio encoders (Xiaomi announcement).

### Raw benchmarks found

> Verified/reported figures below are from Xiaomi’s MiMo-V2.5 announcement unless noted. Some results are presented as chart/comparison claims; only clearly stated numeric results are used.

Agent / tool use:

- Claw-Eval (general subset): **62.3** (Xiaomi announcement states MiMo-V2.5 achieves 62.3 on the general subset)
- Internal MiMo Coding Bench: strong everyday coding results reported (comparative claim; no standardized public numeric table extracted)
- Terminal-Bench / Tau2-Bench / GDPval-AA / Toolathon / MCP-Atlas: **no verified public score found** in reviewed sources

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- AIME 2025: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- Internal coding comparisons reported; no standardized public coding benchmark numerics extracted

Long context:

- Up to 1M token context supported (native); no standalone MRCR/RULER/GraphWalks numeric retrieval benchmark score extracted.

Multimodal:

- Native visual and audio understanding; broad multimodal capability claims across image/video/document understanding, but no standardized multimodal benchmark numerics extracted from announcement text.

### Normalized scores (1–100)

> Derived from limited verified/reported evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Scores are conservative due to sparse standardized benchmark disclosure for this exact free-tier identity.

- **Tool use: 80/100.** Reported Claw-Eval 62.3 (general subset) and strong agentic positioning indicate capable agent/tool behavior, but standardized agent benchmark coverage is limited.
- **Reasoning: 78/100.** Agentic/multimodal reasoning claims are strong, but canonical reasoning benchmark numerics (GPQA/HLE/AIME/AA Index) were not extracted.
- **Context window: 97/100.** Native 1M context support is excellent for long-horizon tasks (Zen free tier serves reduced limits in practice).
- **Multimodal: 90/100.** Native image/audio understanding and multimodal architecture are strong differentiators; lack of extracted standardized multimodal benchmark numerics tempers confidence.
- **Coding: 80/100.** Strong coding/agentic claims (including internal coding bench and Claw-Eval context) suggest good capability, but standardized coding benchmark numbers were not extracted.
- **Cost efficiency: 95/100.** Free Zen access (time/usage-limited, with data-use caveat) and low native pricing make experimentation very cost-efficient.
- **Overall Score: 85/100.** Mean of the five non-cost dims (80, 78, 97, 90, 80) = 85.0 → 85. Best fit for multimodal agentic experimentation and long-context workflows, with uncertainty due to limited standardized public benchmark reporting for the exact served/free identity.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Xiaomi MiMo announcement; scores are conservative normalized 1–100 interpretations from limited reported evidence, not official vendor scores.
- Reference URLs:
  - [Xiaomi MiMo-V2.5 announcement](https://mimo.xiaomi.com/mimo-v2-5)
  - Local repository metadata consulted: `model/mimo-v2.5-free/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
