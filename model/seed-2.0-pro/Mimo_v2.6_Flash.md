# Seed 2.0 Pro — findings by Mimo v2.6 Flash

- Source: ByteDance Seed/Seed 2.0 Pro (`Doubao-Seed-2.0-pro` / `seed-2-0-pro-260328`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro (Doubao-Seed-2.0-pro)
- **Short description:** ByteDance Seed team's flagship reasoning/agent model in the Seed 2.0 series (launched 2026-02-14, snapshot updated 2026-03-28); powers Doubao and TRAE workloads with competition-math and long-horizon agent strength. Distinct from Seed 2.0 Lite/Mini/Code.
- **Provider / access:** Volcano Engine Ark (`Doubao-Seed-2.0-pro`, model id `seed-2-0-pro-260328`) — OpenAI-compatible Chat Completions; also surfaced via BytePlus/APIYI aggregates.
- **Release / knowledge:** 2026-02-14 series launch (Pro 0215 snapshot; 260328 update); knowledge cutoff listed as January 2024 on some provider rows (APIYI) — treat as early-2024 cutoff with post-training through 2026.
- **IDs:** `bytedance/seed-2.0-pro` (logical); Volcano `Doubao-Seed-2.0-pro`; no OpenCode Zen Free ID found — paid API.
- **Context window:** 256K tokens (Volcengine rounded tier via Benchmark Atlas / LLM Reference).
- **Modalities:** text/image/video in; text out; deep thinking toggle; tool calls/function calling; no audio out.
- **Pricing (as of 2026-09-24):** ~$0.47 / $2.37 per 1M in/out on cheapest tracked route (LLM Reference); APIYI notes ~1/3.7 input and ~1/5.9 output cost of GPT-5.2 — paid, strong value.
- **Architecture:** proprietary MoE-class flagship (params not disclosed in gathered sources); closed weights.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.0: **55.8%** (ByteDance Seed launch / APIYI digest)
- BrowseComp: **77.3%** (Seed model card)
- τ²-Bench Retail / Telecom: **90.4% / 94.2%** (Seed / APIYI)
- WideSearch: **74.7%** (Seed)
- GDPval-AA / OSWorld: **no verified public score found** (GDPval-Diamond mentioned qualitatively in launch post without absolute Elo in gathered rows)
- Toolathon / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (Seed model card)
- AIME 2025 / 2026: **98.3 / 94.2** (Seed)
- HMMT Feb 2025: **97.3**; MathArena Apex: **18.2** (shortlist 80.1)
- MMLU-Pro: **87.0**; SuperGPQA: **67.9** (Seed tables — competitive with GPT-5.2/Gemini-3-Pro)
- HLE (no tool, text only): **72.1** appears in Seed table extract (row alignment ambiguous in OCR-style scrape — treat as vendor table value, cross-check before heavy citation); HLE-Verified **73.6** via APIYI digest
- ARC-AGI-2: **37.5** (Seed table); IMO/ICPC/CMO **gold-medal level** (launch post)
- SimpleQA Verified: **36.8**; HealthBench: **42.0** (Seed)

Coding:

- SWE-bench Verified: **76.5%** (Seed/APIYI/LLM Reference)
- LiveCodeBench v6: **87.8%** (Seed)
- Codeforces Elo (no tool): **3020** (Seed)
- AetherCode: **60.6** (Seed table)
- SciCode / DeepSWE / SWE-Pro: **no verified public score found** in gathered rows

Long context:

- 256K window; MRCR v2 (8-needle): **47.1** (Seed table, in-house tokenization caveat); Graphwalks BFS (<128k): **80.5**; LongBench v2 (128k): **84.5**

Multimodal:

- MMMU: **85.4**; MMMU-Pro: **78.2**; VideoMME: **89.5**; MotionBench: **75.2**; TempCompass: **89.6** (Seed/APIYI)
- MathVision **88.8**, LogicVista **81.4**, VisuLogic **47.4** (Seed model card — SOTA claims on several vision suites)

### Normalized scores (1–100)

- **Tool use: 86/100.** τ²-Bench 90+/94 and BrowseComp 77.3% are frontier-band; TB2.0 55.8% and missing GDPval/Toolathon public rows cap mid-80s.
- **Reasoning: 90/100.** GPQA 88.9%, AIME 98.3, IMO gold, SuperGPQA competitive with GPT-5.2/Gemini-3-Pro — top-tier; capped below mid-90s by ARC-AGI-2 37.5 and weaker SimpleQA/HealthBench honesty metrics.
- **Context window: 75/100.** 256K lands in the 200K–500K tier (65–84); solid but well below 1M flagships.
- **Multimodal: 88/100.** Native image+video in with MMMU 85.4, VideoMME 89.5, and multiple vision-SOTA claims; capped by text-only output and no audio.
- **Coding: 84/100.** SWE-V 76.5%, LCB 87.8, Codeforces 3020 are elite; TB2.0 55.8% and no SWE-Pro/DeepSWE rows keep it mid-80s.
- **Cost efficiency: 93/100.** ~$0.47/$2.37 tracks the ~$0.60/$2.20 (~92) anchor with a slight input edge — strong frontier-value ratio.
- **Overall Score: 84.6/100.** Mean of Tool 86 + Reasoning 90 + Context 75 + Multimodal 88 + Coding 84 = 423/5 = 84.6 — best-fit for cost-efficient multimodal reasoning, competitive math, and agentic search/coding on 256K context.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-24
- Method: public internet research (ByteDance Seed model card PDF + seed.bytedance.com launch, APIYI digests, LLM Reference, Benchmark Atlas); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
