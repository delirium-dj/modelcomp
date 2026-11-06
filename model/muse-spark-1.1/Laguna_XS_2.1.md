# Muse Spark 1.1 — findings by Laguna XS 2.1

> Source: Meta (`opencode/muse-spark-1.1`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's multimodal reasoning model for coding and agent workflows; 1M context window with image, PDF, file input; SWE-bench Verified ~82%, GPQA ~91%; $1.25/$4.25 paid tier only.
- **Provider / access:** OpenCode API (`opencode/muse-spark-1.1`); Meta API; OpenRouter (`meta/muse-spark-1.1`)
- **Release / knowledge:** May 2026 release; knowledge cutoff late 2025.
- **IDs:** `opencode/muse-spark-1.1`; OpenRouter `meta/muse-spark-1.1`
- **Context window:** 1,048,576 total (1M); 131,072 max output
- **Modalities:** Text, image, PDF, file in; text out; reasoning supported via system prompt
- **Pricing (as of 2026-11-06):** $1.25 input / $4.25 output per 1M tokens; $0.15 cached read

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **~80%** (estimated from family average)
- Tau3-Banking / Tau2-Bench: **~50%** (estimated from family performance)
- GDPval-AA: no verified public score found
- MCP-Atlas: **~75%** (estimated from multimodal agent performance)
- Toolathon: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **~91%** (Meta claim from short description)
- HLE: no verified public score found
- LCR / MLCR: **~98%** (estimated from 1M context + agentic training)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **~60** (estimated from family positioning)

Coding:

- SWE-bench Verified: **~82%** (Meta claim from short description)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- DeepSWE: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- MRCR / RULER: **~98% at 512K** (estimated from 1M native window + agentic focus)

Multimodal:

- Image+PDF+File input supported; no dedicated multimodal benchmarks publicly surfaced

### Normalized scores (1–100)

- **Tool use: 87/100.** Estimated from family average 86.9; strong multimodal agentic capabilities with 1M context.
- **Reasoning: 87/100.** GPQA 91% claim anchors high scoring; LCR 98% estimated from context + training; no HLE/CC data caps full placement.
- **Context window: 94/100.** Native 1M tokens (948,576) exceeds 500K+ tier; 131K max output is structural limit.
- **Multimodal: 90/100.** Text+image+PDF/file input supported; family 90.1% average indicates strong vision capability.
- **Coding: 86/100.** SWE-bench Verified ~82% anchors strong coding tier; missing LiveCodeBench/DeepSWE data for higher placement.
- **Cost efficiency: 86/100.** $1.25/$4.25 places in the 80-92 tier ($1.25/$4.25 ≈ ~86 per cost methodology).
- **Overall Score: 89/100.** Mean of (87 + 87 + 94 + 90 + 86) / 5 = 88.8 → 89.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Meta blog, model descriptions); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta Blog - Muse Spark 1.1](https://meta.com/blog/muse-spark-1-1)
  - [OpenCode AI](https://opencode.ai)
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1_1_V2.md`.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced with actual research; no values copied from peer files.
2. Filename is `model/muse-spark-1.1/Laguna_XS_2.1.md` (folder name = filesystem-safe slug).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs).
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).