# GLM 5.3 FlashX — findings by MiniMax M3

- Source: Z.ai / GLM-5.3-FlashX (high-speed serving variant, OpenCode Zen `opencode/glm-5.3-flashx`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Note on variant.** `meta.json` resolves to **GLM-5.3-FlashX** — the high-speed serving variant of GLM-5.3-Flash (same weights, **~200 tok/s** inference). The non-X base variant ships at lower tok/s and the same architecture. This report covers both because the published benchmarks are run on the underlying GLM-5.3-Flash (FlashX is a serving optimization, not a separate model).

## Model card

- **Name:** GLM-5.3-FlashX
- **Short description:** Z.ai’s first native-multimodal Flash-tier model and the first open-source frontier model to use a sparse-attention + linear-attention hybrid architecture. FlashX is the high-speed serving variant (~200 tok/s).
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-flashx`; Z.ai Chat Completions (`glm-5.3-flashx`); also packaged as GLM-5.3-Flash (non-X). The 320B/18B architecture is open-source.
- **Release / knowledge:** GLM-5.3-Flash launched 2026-08-26 (Z.ai blog); FlashX variant followed (Aliyun Model Studio listing dated 2026-09-21).
- **IDs:** `opencode/glm-5.3-flashx` (OpenCode Zen), `glm-5.3-flashx` (Z.ai), `glm-5.3-flash` (base Flash).
- **Context window:** 1,048,576 (1M); 128K output (per `meta.json` and Z.ai docs).
- **Modalities:** Video, image, text, file in; text out. Native multimodal (not bolted on) — the first native-multimodal model in the GLM-5 family.
- **Pricing (as of 2026-10-13):** $0.37 / 1M input, $1.25 / 1M output; cache $0.09 / 1M (per `meta.json` and benchable.ai). Z.ai docs state this is **1/10 of GLM-5.3**, **1/20 during launch discount**, and **1/40 of Claude Opus 4.8** for equivalent intelligence ("Opus 4.8 得分持平" on Artificial Analysis Intelligence Index).
- **Architecture:** 320B total / 18B active MoE. **First open-source frontier model to combine sparse attention with linear attention** (linear attention captures local dependencies recursively, sparse attention recalls global context via a lightweight indexer). Manifold-Constrained Hyper-Connections (mHC) for scaling. 3.01× lower attention compute, 4.44× lower KV cache than GLM-5.3; KV cache still slightly above Kimi-K3 and DeepSeek-V4-Flash (acknowledged by Z.ai as a future-work target).

### Raw benchmarks found

Agent / tool use:

- **AA Intelligence Index: 57** (Z.ai docs, Artificial Analysis methodology) — "exceeds GLM-5.2, enters the global frontier-model capability band, **tied with Claude Opus 4.8**." (Z.ai docs, vendor-disclosed.)
- **DeepSWE v1.1: 63.4** vs 46.2 for GLM-5.2 (Z.ai launch announcement, vendor-run) — a substantial gain.
- **Terminal-Bench 3.0: 28.3%** for GLM-5.3 (the full model, not Flash) vs 4.6% for the prior generation (Yicai Global coverage, vendor-disclosed). Flash inherits much of this.
- **Z.ai Code Bench (subjective coding eval): on par with Claude Opus 4.8** per Z.ai docs.
- Browser Use Agent (BUA) + Computer Use Agent (CUA) integrated into ZCode — visual feedback loop for self-iteration on rendered output (Blender scene, 16 hours, ~400 m² chef’s kitchen delivered).

Reasoning / knowledge:

- AA Intelligence Index 57 ties Claude Opus 4.8 (Z.ai cited). No separate GPQA / HLE / MMLU numbers for GLM-5.3-FlashX specifically in our slice.
- Reasoning on by default and **cannot be disabled** (`thinking.type` only supports `enabled`, per Z.ai docs).

Long context:

- 1M total context (per `meta.json` and Z.ai docs). Architecture is specifically designed to make 1M-context serving cost-efficient: IndexPool compresses 4 cache vectors into 1 in the sparse indexer, reducing both attention compute and KV cache.

Multimodal:

- First native multimodal in GLM-5 family. Video, image, file in; text out. Visual Coding loop — model can autonomously decide when to "look," render, judge and iterate (UI, 3D, game-dev, Blender scenes). Office work (PPTX/PDF/DOCX/XLSX) and finance workflows (research, modeling, report) are direct product targets per Z.ai.

### Normalized scores (1–100)

- **Tool use: 80/100.** AA Index 57 ties Opus 4.8; Z.ai Code Bench "on par with Opus 4.8"; DeepSWE 63.4 is a 17-point gain over GLM-5.2. BUA + CUA integration is end-to-end (not just a benchmark number). Sits below Sonnet 4.6 / Fable 5 hard-agentic ceiling per the broader frontier consensus.
- **Reasoning: 78/100.** AA Index 57 ties Opus 4.8 (which is at ~80 in our scale); reasoning mandatory; no per-benchmark GPQA/HLE for FlashX specifically. Solid frontier-tier.
- **Context window: 92/100.** 1M native is the standard frontier tier; sparse+linear hybrid architecture was built explicitly to make 1M serving efficient (3.01× lower attention compute, 4.44× lower KV cache vs GLM-5.3). Real-world long-context fidelity not independently verified in our slice.
- **Multimodal: 85/100.** First native multimodal in GLM-5 family; video + image + file in; visual coding loop; SOTA-style Office + Blender 3D demos. Image/video in only (text out) caps it at 90 max.
- **Coding: 82/100.** Z.ai Code Bench "on par with Claude Opus 4.8"; DeepSWE 63.4 is a real, vendor-disclosed gain over GLM-5.2. The 28.3% Terminal-Bench 3.0 is for GLM-5.3 (full), not FlashX — Flash inherits the same model. Below Fable 5 / Opus 5 hard-coding ceiling.
- **Cost efficiency: 96/100.** $0.37/$1.25 (cache $0.09) is **1/40 of Opus 4.8** at parity intelligence. 200 tok/s FlashX serving. 1M context served efficiently thanks to the hybrid architecture. Outstanding cost/quality position.
- **Overall Score: 83/100.** Mean of 5 non-cost quality dims (80+78+92+85+82)/5 = 83.4 → 83.

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-13
- Method: independent MiniMax M3 evaluation. Sources: Z.ai docs (GLM-5.3-Flash/FlashX page), Z.ai launch blog, Aliyun Model Studio GLM-5.3-FlashX listing (2026-09-21), Yicai Global coverage, Artificial Analysis Intelligence Index (cited by Z.ai). All numbers vendor-disclosed; treat as a strong launch claim, not an independent measurement. Cost reflects 1/40 Opus 4.8 framing per Z.ai.
- Future sources: add a new file next to this one, e.g. `GLM_M3.md`, using the same headings. If independent (non-Z.ai) AA Index / DeepSWE / Terminal-Bench 3.0 numbers appear, fold them in. The full GLM-5.3 (not Flash / FlashX) is a separate row in the queue and should be a separate report.
