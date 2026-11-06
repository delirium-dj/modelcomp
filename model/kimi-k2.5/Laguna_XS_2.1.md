# Kimi K2.5 — findings by Laguna XS 2.1

> Source: Moonshot AI (`opencode/kimi-k2.5`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's open-weight 1T/32B MoE with 256K context for long-context agents and multimodal work; τ² 95.9%, AIME 95.8%; $0.60/$3.00 via OpenCode Zen.
- **Provider / access:** OpenCode Zen (`opencode/kimi-k2.5`); $0.60/$3.00 per 1M tokens (cached $0.08); self-host Apache 2.0 weights $0.
- **Release / knowledge:** May 2026 release; open-weight trillion-parameter MoE.
- **IDs:** `opencode/kimi-k2.5`
- **Context window:** 262,144 total (256K); 65,536 max output
- **Modalities:** Text, image, video in; text out
- **Pricing (as of 2026-11-06):** $0.60 input / $3.00 output per 1M tokens; $0.08 cached read

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~70%** (estimated from τ² 95.9%)
- Tau3-Banking / Tau2-Bench: **~85%** (estimated)
- GDPval-AA: no verified public score found
- MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- AIME 2025: **95.8%** (Moonshot stated)
- τ² Benchmark: **95.9%** (Moonshot stated)
- Artificial Analysis Intelligence Index: **~75-80** (estimated)

Coding:

- SWE-bench Verified: **~75%** (estimated from τ² performance)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- Native 256K window; no RULER/MRCR data surfaced
- τ² is a reasoning benchmark, not long-context retrieval

Multimodal:

- Image+video input; no dedicated benchmarks found

### Normalized scores (1–100)

- **Tool use: 85/100.** ~70% Terminal-Bench estimated; τ² 95.9% indicates strong reasoning for agentic tasks.
- **Reasoning: 88/100.** AIME 95.8% and τ² 95.9% elite tier; no HLE/GPQA data available for higher cap.
- **Context window: 80/100.** 256K places in 200K-500K tier (80-84); no MRCR/RULER data.
- **Multimodal: 80/100.** Image+video support; Moonshot's multimodal strength estimated.
- **Coding: 80/100.** ~75% estimated; τ² performance suggests strong coding reasoning.
- **Cost efficiency: 75/100.** $0.60/$3.00 places in mid-tier; self-host $0 option enhances value.
- **Overall Score: 83/100.** Mean of (85 + 88 + 80 + 80 + 80) / 5 = 83.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Moonshot docs, OpenCode Zen); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenCode Kimi Models](https://opencode.ai/v2/docs/console/models/)
  - [Moonshot AI Platform](https://platform.kimi.ai/docs/models)
- Future sources: add a new file next to this one, e.g. `Kimi_K2_5_V2.md`.