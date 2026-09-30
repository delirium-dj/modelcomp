# Kimi K3 — findings by Muse Glimmer 30B

- Source: MoonshotAI / Kimi K3 (moonshotai/Kimi-K3)
- Date: 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** 2.8T-parameter Mixture-of-Experts flagship from Moonshot AI released July 2026. Open-weights frontier model with native vision, 1M-token context, targeting long-horizon coding, knowledge work and reasoning. Not a variant/alias.
- **Provider / access:** Moonshot AI Platform `platform.kimi.ai` API ID `kimi-k3`; also available via DeepInfra, Fireworks, Together, Novita. Chat Completions API.
- **Release / knowledge:** 2026-07-16 release. Knowledge cutoff not published.
- **IDs:** `moonshotai/kimi-k3` Hugging Face; `kimi-k3` on platform.kimi.ai
- **Context window:** 1.0M tokens input, 1.0M tokens output. Verified by official blog and LLM Stats.
- **Modalities:** Input text, image, video; Output text; reasoning yes; tool calls yes; JSON mode supported.
- **Pricing (as of 2026-09-24):** Official API $3.00/M input, $0.30/M cached input, $15.00/M output. Provider low $2.85/M input, $0.285/M cached, $14.25/M output via DeepInfra. Paid.
- **Architecture:** 2.8T total parameters, 896 experts, 16 active per token MoE. Stable LatentMoE with Kimi Delta Attention. Open weights under Kimi K3 License.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** task success (verified, evals.report Jul 16 2026)
- SWE-Marathon: **42.0%** resolution rate pass@1 (verified, evals.report Jul 16 2026)
- BrowseComp: **91.2%** accuracy (verified, evals.report Jul 16 2026)
- FrontierCode: **44.2%** weighted score Main (official, evals.report Jul 16 2026)

Reasoning / knowledge:

- ARC-AGI-1: **94.5%** accuracy (official, evals.report Jul 16 2026)
- ARC-AGI-2: **60.42%** accuracy (official, evals.report Jul 16 2026)
- AA-Omniscience: Knowledge and Hallucination Benchmark: **20** AA-Omniscience Index (official, evals.report Jul 16 2026)
- Artificial Analysis Intelligence Index: **44** #3/115 (Artificial Analysis, updated 2026-07-16)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found

Coding:

- DeepSWE: **67.5%** % resolved (verified, evals.report Jul 16 2026)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- SWE-bench Verified / SWE-Pro: no verified public score found

Long context:

- MRCR / RULER / GraphWalks value at window length: no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 89/100.** Terminal-Bench 2.1 88.3% sits at the 88%+ frontier threshold; BrowseComp 91.2% supports strong agentic tool use. Capped just below 90 by SWE-Marathon 42.0%.
- **Reasoning: 78/100.** ARC-AGI-1 94.5% is strong; ARC-AGI-2 60.4% mid-range; AA-Omniscience Index 20 moderate. No public GPQA/HLE limits score.
- **Context window: 100/100.** 1M tokens verified, tier ≥1M with native 1M support.
- **Multimodal: 70/100.** Text + image + video input, text output. Image-in tier 60-70 per methodology.
- **Coding: 73/100.** DeepSWE 67.5% below 74% frontier; FrontierCode 44.2% moderate. Balanced with agent coding strength.
- **Cost efficiency: 60/100.** $3/$15 pricing per official API; ~60 per methodology $3/$15 band.
- **Overall Score: 82/100.** Mean of Tool 89 + Reasoning 78 + Context 100 + Multimodal 70 + Coding 73 = 82. Best-fit for long-context multimodal agentic coding at premium price.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-24
- Method: public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
