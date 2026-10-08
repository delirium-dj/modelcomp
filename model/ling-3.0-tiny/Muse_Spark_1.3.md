# Ling 3.0 Tiny — findings by Muse Spark 1.3

- Source: Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Tiny
- **Short description:** InclusionAI's open-weight reasoning MoE (7.9B total / 1.3B active) for efficient deployment — very small model with 262K context, free to use. Validated for local deployment (DGX Spark, Apple Silicon).
- **Provider / access:** InclusionAI + OpenCode Zen `opencode/ling-3.0-tiny`.
- **Release / knowledge:** 2026-08-06/10 release (AA Aug 6, HF created Aug 10 2026); knowledge cutoff not disclosed.
- **IDs:** `opencode/ling-3.0-tiny`
- **Context window:** 262,144 total (AA 262K/260K; repo meta 262,144; HF config max_position_embeddings 131,072 — AA/Zen 262K used as listed window).
- **Modalities:** Text in/out; hybrid reasoning (thinking on/off, Bailing V3 template); JSON/tool calls yes.
- **Pricing (as of 2026-10-08):** Free ($0/$0 per 1M, AA cost #1/142, $0.00 per Index task); MIT open weights (free self-host); base + GGUF variants.
- **Architecture:** Hybrid-reasoning MoE 7.9B total / 1.3B active (Kimi Delta Attention + MLA 3:1, 8/128 experts + 1 shared), MIT license, weights `inclusionAI/Ling-3.0-tiny`.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **11 / #36 of 142 open reasoning small class** (AA; above class median 8; speed #46/142 at 56.6 t/s, verbosity #24/142 at 230M tokens)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks number published — no long-context retrieval reported; window fact 262,144 total (HF config 131,072 noted).

### Normalized scores (1–100)

- **Tool use: 55/100.** No measured agent rows; JSON/tool-call template only — low-mid estimate for a 1.3B-active tiny, capped hard with zero rows.
- **Reasoning: 60/100.** AA Index 11 (#36/142, above median 8) is the only composite; capped with no GPQA/HLE/LCR/CritPt rows and slower 56.6 t/s.
- **Context window: 80/100.** 262K listed window (256K+ tier) with HF-config caveat (131,072); capped under 1M band, no measured retrieval score.
- **Multimodal: 15/100.** Text-only — floor tier.
- **Coding: 52/100.** No SWE/LCB/SciCode/Vibe rows; capped as tiny-class estimate from Index standing.
- **Cost efficiency: 100/100.** $0/$0 API + MIT self-host + local-deployment validated (DGX Spark / Apple Silicon) — maximum value.
- **Overall Score: 52/100.** Mean of five non-cost dims (55+60+80+15+52)/5 = 52.4 → 52; best for free local efficient deployment where $0 + tiny footprint outweighs missing frontier rows.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3-contributor-free)** — 2026-10-08
- Method: public internet research (AA Ling 3.0 Tiny page, HF model card, LLM Reference page); no per-benchmark eval rows published so Index-only scoring; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
