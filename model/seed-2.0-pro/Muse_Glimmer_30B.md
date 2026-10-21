# Seed 2.0 Pro — findings by Muse Glimmer 30B

- Source: ByteDance Seed 2.0 Pro
- Date: 2026-10-20
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance Seed 2.0 Pro
- **Short description:** ByteDance’s Seed 2.0 Pro closed agent model (256K, image/video in) for reasoning and task execution; SWE-bench Verified 76.5% (vendor), succeeded by Seed 2.1.
- **Provider / access:** ByteDance Seed API / ModelArk; DeepInfra `deepinfra/ByteDance/Seed-2.0-pro`; OpenRouter. Chat Completions compatible.
- **Release / knowledge:** Released 2026-02-14 per public listings; knowledge cutoff not published.
- **IDs:** `deepinfra/ByteDance/Seed-2.0-pro`, `seed/seed-2.0-pro`
- **Context window:** 256K input / 65K output per `meta.json`.
- **Modalities:** Text, image, video in; text out. Reasoning yes; tool calling yes.
- **Pricing (as of 2026-10-20):** Paid-tier pricing per `meta.json`; ModelArk list pricing reported $0.50 / 1M input, $3.00 / 1M output. No free tier (`noFreeId: true`).
- **Architecture:** Proprietary closed model; parameter count not disclosed. Vendor states image/video input feeding real task execution inside its home toolchain.

### Raw benchmarks found

> List measured numbers with source for traceability. “no verified public score found” where missing.

Agent / tool use:

- BrowseComp: **77.3%** (llm-stats)
- Terminal-Bench 2.x / Tau2-Bench / GDPval: no verified public score found

Reasoning / knowledge:

- GPQA: **88.9%** (llm-stats)
- AIME 2025: **98.3%** (llm-stats)
- AIME 2026: **94.2%** (llm-stats)
- LLM Stats Score: **39.4** (#68)
- xbench average: **69.2** (#1 among China-developed models)

Coding:

- LiveCodeBench v6: **87.8%** (llm-stats)
- SWE-bench Verified: **76.5%** vendor self-reported per `meta.json`; no independent harness published
- Aider Polyglot / SciCode: no verified public score found

Long context:

- Context window 256K per `meta.json`; MRCR / RULER retrieval at 128K+: no verified public score found

Multimodal:

- Text, image, video in per `meta.json`; MMMU / Video-MME verified scores: no verified public score found

### Normalized scores (1–100)

> Derived from raw numbers above using methodology in `model-comparison.md`.

- **Tool use: 65/100.** BrowseComp 77.3% indicates solid agentic browsing; absence of Terminal-Bench / Tau2 / GDPval caps score.
- **Reasoning: 74/100.** GPQA 88.9% and AIME 98.3%/94.2% show strong math/knowledge reasoning; LLM Stats 39.4 and lack of HLE/MMLU-Pro keeps it below frontier tier.
- **Context window: 64/100.** 256K input / 65K output per `meta.json`; no published MRCR/RULER verification at scale.
- **Multimodal: 62/100.** Native image/video input per `meta.json` and vendor positioning; no verified public multimodal benchmark scores.
- **Coding: 72/100.** LiveCodeBench v6 87.8% and vendor SWE-bench Verified 76.5% place it in solid mid-pack coding; lack of independent SWE-bench / Terminal-Bench verification caps score.
- **Cost efficiency: 88/100.** Paid tier with ModelArk pricing $0.50/$3.00 per 1M reported; competitive input price, expensive output, no free tier.
- **Overall Score: 67/100.** Mean of Tool 65 + Reasoning 74 + Context 64 + Multimodal 62 + Coding 72 = 337 /5 = 67.4 → 67. Best-fit as mid-cost closed agent with 256K multimodal input, superseded by Seed 2.1.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: Public internet research using `meta.json` for specs/pricing; benchmarks from llm-stats, ByteDance Seed listings, ModelArk. Scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
