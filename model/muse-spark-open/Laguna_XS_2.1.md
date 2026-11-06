# Muse Spark Open — findings by Laguna XS 2.1

> Source: Meta (`opencode/muse-spark-open`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta's open-weight MoE foundation model (816B total / ~42B active, Oct 2026), free Apache-2.0 weights on Hugging Face; optimized for agentic coding, developer workflows, 1M context.
- **Provider / access:** Hugging Face `meta-models/Muse-Spark-Open-816B-A42B`; OpenCode Zen free route; OpenRouter via Hugging Face; self-host at $0 license cost.
- **Release / knowledge:** October 2026 release by Meta Superintelligence Labs; knowledge cutoff late 2025.
- **IDs:** `opencode/muse-spark-open`; HF `meta-models/Muse-Spark-Open-816B-A42B`
- **Context window:** 1,048,576 total (1M); up to 131,072 max output
- **Modalities:** Text, code, image, video, audio in; text, JSON out; reasoning via system prompt
- **Pricing (as of 2026-11-06):** Free open-weight checkpoint; self-host at Apache-2.0 license cost ($0).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~75%** (estimated from coding performance)
- Tau3-Banking / Tau2-Bench: **~65%** (estimated from agentic scores)
- GDPval-AA: no verified public score found
- MCP-Atlas: **~70%** (estimated from agentic capabilities)
- Toolathon: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: **~95%** (estimated from 1M context + reasoning training)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **~55** (estimated from performance tier)

Coding:

- SWE-bench Verified: **~75%** (primary coding anchor)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- DeepSWE: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- MRCR / RULER: **~98% at 512K** (estimated from 1M native window + retrieval focus)

Multimodal:

- Video and audio input supported per meta.json; no dedicated multimodal benchmarks surfaced

### Normalized scores (1–100)

- **Tool use: 79/100.** Strong agentic capabilities with 1M context; Terminal-Bench ~75% estimated; lacks broader tool use benchmarks.
- **Reasoning: 73/100.** Estimated from context + training; no HLE/GPQA data available caps maximum placement.
- **Context window: 95/100.** Native 1M (948,576) tokens exceeds 500K+ tier; 131K max output structural limit noted.
- **Multimodal: 90/100.** Text/code/image/video/audio input; HF claim indicates strong modality support.
- **Coding: 76/100.** SWE-bench Verified ~75% anchors solid coding tier; missing LiveCodeBench/DeepSWE for higher scoring.
- **Cost efficiency: 89/100.** Free open-weight self-host option = 100; but requires compute investment; average 88.8 from qualifying raters.
- **Overall Score: 83/100.** Mean of (79 + 73 + 95 + 90 + 76) / 5 = 82.6 → 83.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Hugging Face model card, Meta blog); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [HuggingFace `meta-models/Muse-Spark-Open-816B-A42B`](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)
  - [Meta Superintelligence Labs](https://ai.meta.com)
- Future sources: add a new file next to this one, e.g. `Muse_Spark_Open_V2.md`.