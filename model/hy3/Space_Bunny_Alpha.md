# Hy3 — findings by Space Bunny Alpha

- Source: Tencent Hunyuan (`tencent/hy3`; open-weight MoE)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3
- **Short description:** Tencent's open-weight Hunyuan MoE model for multimodal understanding and hybrid fast-and-slow reasoning, with a 256K context window.
- **Provider / access:** Tencent TokenHub preview and compatible inference providers; the repository metadata identifies the model as `tencent/hy3`. The reviewed public BenchLM profile has no sourced benchmark rows and no published API price.
- **Release / knowledge:** BenchLM lists July 6, 2026. No reliable knowledge cutoff was shown in the reviewed sources.
- **IDs:** `tencent/hy3`; catalog display name `Hy3`.
- **Context window:** **256,000 tokens input and 32,000 tokens output** (model metadata in `model/hy3/meta.json`; BenchLM confirms 256K context).
- **Modalities:** Text and image input; text output. Hybrid fast-and-slow thinking is documented in the curated model metadata; exact reasoning-effort controls and tool endpoints were not independently verified.
- **Pricing (as of 2026-09-24):** Curated metadata lists a TokenHub preview at approximately **$0.18/$0.59 per 1M input/output tokens** and no Zen Free ID. No independently published price row was found in BenchLM.
- **Architecture:** Open-weight MoE, approximately **295B total / 21B active** parameters; Apache-2.0 license (curated model metadata).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **no verified public score found**
- Tau3-Banking, GDPval-AA, Claw-Eval, Toolathlon, and MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA, HLE, LCR/MLCR, CritPt, and hallucination metrics: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found**

Coding:

- SWE-bench Verified, SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench, and DeepSWE: **no verified public score found**

Long context:

- Native context capacity: **256K** (BenchLM and curated model metadata); no retrieval-at-length score was found.

Sources consulted: [BenchLM Hy3 profile](https://benchlm.ai/models/hy3), [curated model metadata](../hy3/meta.json), and the current model/provider catalog. BenchLM explicitly reports **0 sourced benchmark rows** for this profile, so no benchmark numbers are inferred from the MoE description or from the separate HY-MT family.

### Normalized scores (1–100)

- **Tool use: 40/100.** Tool support is not independently documented on the reviewed profile, and no agent benchmark was found; this is a provisional low-confidence estimate rather than a measured score.
- **Reasoning: 45/100.** Hybrid fast-and-slow thinking is documented, but no GPQA/HLE/AA result is available; reasoning strength cannot be verified.
- **Context window: 78/100.** A 256K input window and 32K output limit are documented, which is useful but below the 500K+ tier; retrieval quality is unmeasured.
- **Multimodal: 55/100.** The curated metadata reports text/image input and text output, but no independent benchmark or full modality table was found.
- **Coding: 45/100.** The model is a general open-weight MoE with hybrid reasoning, but no verified coding benchmark is available.
- **Cost efficiency: 80/100.** The preview price is low, but the route is explicitly preview-oriented and no independent price table was found.
- **Overall Score: 52.6/100.** (40 + 45 + 78 + 55 + 45) / 5 = 52.6. Best fit: further evaluation or self-hosted experimentation; do not select it for a production workload without independent benchmark evidence.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of BenchLM, model metadata, and provider catalogs; scores are provisional normalized 1–100 interpretations where no verified benchmark rows exist, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
