# Mistral Large 3 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Mistral AI (`mistral-large-3`), deprecated flagship
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 3
- **Short description:** Mistral AI's December 2025 (v25.12 / 2512) open-weight flagship — a dense/MoE generalist with native vision (text+image in, text out), superseded and deprecated by Mistral Large 4. Not a reasoning model (reasoning variant may exist separately). Use case: general chat, vision/document understanding, generalist tasks.
- **Provider / access:** Mistral AI API (deprecated route `MISTRAL-LARGE-2512`); open weights, Apache 2.0. No official `mistralai/Mistral-Large-3` weights found on Hugging Face (404; HF search surfaced only older Large 2 quantizations). No confirmed Zen Free ID.
- **Release / knowledge:** Released December 2025 (version v25.12 / 2512); knowledge cutoff not stated.
- **IDs:** `mistral-large-3-2512` / `Large 3 2512` / `mistral/mistral-large-3` (aliases per this repo's meta.json); Mistral API route `MISTRAL-LARGE-2512` (deprecated listing).
- **Context window:** 256k total tokens (Artificial Analysis and this repo's meta.json both state 256K). Consistent across sources.
- **Modalities:** Text + image input; text output; reasoning No (per Artificial Analysis — non-reasoning version); tool calls not verified by benchmark; multilingual not stated by sources consulted.
- **Pricing (as of 2026-11-06):** $0.50 per 1M input / $1.50 per 1M output (Artificial Analysis; moderately priced vs medians $0.53/$1.85), 90% cache discount. Deprecated, not among the cheapest. Open weights = free self-host if weights obtainable.
- **Architecture:** MoE, 675B total parameters, 41B active per token; Apache 2.0 license.

### Raw benchmarks found

- Artificial Analysis Intelligence Index: **N/A** — model is deprecated; AA still benchmarks it but less often (every 18h vs 6h) and reads "Unknown" across Intelligence/Performance/Cost/Verbosity <(Artificial Analysis, independent)>
- Time to first answer token: **2.52s** <(Artificial Analysis)>
- Output speed: **76 tok/s** <(Artificial Analysis)>
- Pricing: **$0.50 in / $1.50 out per 1M**, 90% cache discount <(Artificial Analysis)>
- Context window: **256k** <(Artificial Analysis)>; **256K** <(this repo meta.json)> — consistent.
- Parameters: **675B total / 41B active** <(Artificial Analysis)>; consistent with this repo meta.json.
- Reasoning: **No** (non-reasoning version; a reasoning variant may exist) <(Artificial Analysis)>
- Terminal-Bench / SWE-bench / LiveCodeBench / GPQA / HLE / Tau / GDPval: no verified public score found (AA deprecated the model; Intelligence Index N/A)
- Mistral HF weights: no official `mistralai/Mistral-Large-3` model card found (404 at `mistralai/Mistral-Large-3-2512`) <(Hugging Face)>

### Normalized scores (1–100)

- **Tool use: 60/100.** Flagship generalist expected to support tool use, but no public tool-use benchmark number found; deprecated status limits confidence. Capped by: no benchmark; deprecated.
- **Reasoning: 50/100.** Not a reasoning model (AA: Reasoning = No); large base model retains some general reasoning. Capped by: not reasoning-optimized; no reasoning benchmark.
- **Context window: 82/100.** 256k confirmed by Artificial Analysis and repo meta.json (consistent). Capped by: not the largest (1M-class windows exist).
- **Multimodal: 68/100.** Text + image input, text output; native vision per docs/AA. Capped by: image-only input (no audio/video); text-only output.
- **Coding: 60/100.** Generalist flagship, not coding-specialized; no public coding benchmark number (SWE-bench/LiveCodeBench) found. Capped by: no benchmark; deprecated.
- **Cost efficiency: 50/100.** $0.50 in / $1.50 out per 1M (moderately priced, near medians), 90% cache discount, Apache 2.0 free self-host. Capped by: not among the cheapest; deprecated (superseded by Large 4).
- **Overall Score: 64/100.** Mean of the five non-cost quality dims ((60+50+82+68+60)/5 = 64). Best-fit: deprecated large vision generalist; only relevant where legacy access or the 256k vision window is specifically needed; prefer Mistral Large 4.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/nemotron-3.5-super-vl-120b-a12b)** — 2026-11-06
- Method: Public internet research across official vendor docs/cards and independent benchmark/review sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral Docs — Models Overview incl. Deprecated (official)](https://docs.mistral.ai/models/)
  - [Artificial Analysis — Mistral Large 3 (independent benchmark/review)](https://artificialanalysis.ai/models/mistral-large-3)
  - [Hugging Face — model search for Mistral Large 3 (weights repo; official weights not found)](https://huggingface.co/models?search=Mistral%20Large%203)
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.
