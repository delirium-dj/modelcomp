# GLM 5.1 Coding — findings by Laguna S 2.1

> Source: opencode/glm-5.1 (Z.AI), e.g. Hugging Face zai-org/GLM-5.1 model card, Z.ai API docs, Artificial Analysis, LLMR
> Date: 2026-09-23 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: GLM 5.1 Coding (Z.AI). Open-weights flagship MoE for agentic engineering and long-horizon autonomous coding (SWE-Pro SOTA claim). Alias in repo: `opencode/glm-5.1`.
- Short description: Z.AI's open-weights MoE coding model — SOTA SWE-bench Verified on release, 1M+ context path, MIT-licensed weights with Chat Completions + tool-calling + JSON support. Flagship of the GLM-5.x open line.
- Provider / access: Z.ai first-party API (`glm-5.1`) + Hugging Face open weights `zai-org/GLM-5.1` (282 BF16 shards, MIT) + LM Studio / 8+ third-party hosts; OpenCode Zen `opencode/glm-5.1`. Chat Completions-compatible; toolCalling = true.
- Release: April 3, 2026 (HF `createdAt` 2026-04-03; Z.ai API docs). Knowledge cutoff: not published on fetched pages.
- IDs: `opencode/glm-5.1` (repo meta = this slug's id; noFreeId, paid tier). Hugging Face `zai-org/GLM-5.1`.
- Context window: **200,000–205,000 tokens** (repo `meta.json` "200K–205K / 128K out"); a separate 1M long-context route exists (Z.ai long-context path). 128K max output (≥64K, clears caveat). 200K-class tier (<1M default).
- Modalities: **text in / text out only** (HF card "text-only"; repo `meta.json` "Text in/out"; Vision variant GLM-V-5.1 is a **separate model**). (+text-in only; 0 of image/audio/video/PDF for this ID.) Reasoning yes; tool/function calls yes; JSON mode yes.
- Pricing (as of 2026-09-23): **$1.40 / $4.40** per 1M in/out (repo `meta.json` "Paid $1.40/$4.40, no Free ID"); HF Inference Endpoints ~26.2 tok/s fastest-route. noFreeId (paid tier; self-host MIT weights are a separate cost).
- Architecture: Mixture-of-Experts, open weights, MIT license (HF card); param count not explicitly stated (GLM-5.2 family reports ~744B total / 16B active; GLM-5.1-treated same class). Commercial use permitted under MIT.

### Raw benchmarks found

> Verified public numbers — Hugging Face model card `zai-org/GLM-5.1` (primary: 282 shards, MIT, toolCalling true) + Z.ai launch/API docs. Benchmarks not located are NOT fabricated.

Agent / tool use:
- SWE-bench Verified: **80.4%** (Z.ai official; SOTA on release)
- Terminal-Bench 2.1 / Toolathlon / MCP-Atlas / OSWorld / BrowseComp / GDPval-AA / Tau3-Banking / Tau2-Bench: **no verified public score found** for GLM-5.1 Coding on fetched pages.

Reasoning / knowledge:
- GPQA Diamond: **92.4%** (Z.ai launch table; ~frontier level)
- HLE: **35.9%** w/o tools (Z.ai launch table)
- MMLU (EM): **85.3%** (Z.ai)
- Artificial Analysis Intelligence Index / BenchLM overall / CritPt / AA-Omniscience / AA-LCR: **no verified public score found** for this exact ID on fetched pages.

Coding:
- SWE-bench Pro: **58.4%** (Z.ai launch table)
- LiveCodeBench: **91.9%** (Z.ai launch table; beats GPT-5.5 91.6)
- DeepSWE v1.1: **71.0%** (Z.ai launch)
- SWE-bench Multilingual / SWE-Atlas / Tool-E / Codeforces / AA Coding Index: **no verified public score found** for this variant.

Long context:
- 200K–205K default window verified (repo `meta.json`); 1M long-context route exists (Z.ai) but default is the 200K-class tier. **No MRCR / RULER** figure found for the default window.

Multimodal:
- **Text-only** (HF card; repo `meta.json` "Text in/out"). Vision is a *separate* GLM-V-5.1 model — not this ID. → 15 per template rule.

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded. Anchored on the Hugging Face model card + Z.ai launch-table figures (SWE-Verified 80.4%, SWE-Pro 58.4%, LiveCode 91.9%, GPQA 92.4%, HLE 35.9%).

- **Tool use: 83/100.** SWE-bench Verified 80.4% (SOTA on release, frontier-tier) is the headline tool/coding-evidence; no standalone GDPval/Tau3/OSWorld to lift it further.
- **Reasoning: 82/100.** GPQA 92.4% (frontier 90%+ bar) + MMLU 85.3% + HLE 35.9%; capped by no GPQA/HLE rank and HLE below ~40%.
- **Context window: 70/100.** 200K–205K default window (200K-class tier; ≥200K clears the 128K caveat) + a 1M long-context route available; no MRCR/RULER retrieval figure for the default window.
- **Multimodal: 15/100.** Text in / text out only (vision is a separate GLM-V-5.1 model — not this ID). Methodology template floor.
- **Coding: 89/100.** SWE-Verified 80.4% (frontier, 0.2 behind Opus 4.6) + LiveCode 91.9% (leads GPT-5.5) + DeepSWE 71.0 + SWE-Pro 58.4; capped by no SWE-Multilingual / Codeforces / Vibe figure for this ID.
- **Cost efficiency: 50/100.** $1.40/$4.40 per 1M (~$2.00/MTok blended) — above the <$1 frontier cluster and below $10–$50 closed frontier; MIT open weights give a self-host cost offset but noFreeId (no $0 tier).
- **Overall Score: 68/100.** (83 + 82 + 70 + 15 + 89) / 5 = 339 / 5 = 67.8 → 68. Open-weights SOTA-coding flagship (SWE-Verified 80.4%, LiveCode 91.9%) on a 200K-class default window at $1.40/$4.40; text-only and 200K-default context cap it below 1M-window multimodal peers.

> **Reconciliation note:** Repo `model-comparison.md` average for `glm-5.1-coding` = **71.4** (audit). My anchor-scale score is **68** — within ~3 points. The gap is the text-only Multimodal floor (15, shared by both) plus my conservative Tool/reasoning caps from absent GDPval/OSWorld/HLE-rank data on this variant. The headline SOTA SWE-Verified 80.4% anchors Coding at 89 in both readings. Both figures preserved.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Hugging Face model card `zai-org/GLM-5.1` — primary source for architecture/license/modality, 282 shards / MIT / toolCalling true; Z.ai API docs + launch tables for pricing/context). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research.
- Future sources: add a new file next to this one using the same headings.