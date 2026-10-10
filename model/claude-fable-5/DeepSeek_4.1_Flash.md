# Claude Fable 5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Fable 5 (`claude-fable-5`)
- Date: 2026-10-09 (UTC) — deep second pass (previous Signature 2026-10-09)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass re-verification — 2026-10-09** (≥3 independent sources).
> Independent Vals AI now supplies a full suite: SWE-bench Verified **95.00%**, Vibe Code Bench **90.35% (#4/110)**, LiveCodeBench 89.78%, GPQA Diamond **93.18%**, MMLU-Pro 91.50%, MMMU-Pro 89.31% (#3), LegalBench 88.56% (#1/149), Terminal-Bench 2.1 80.52% / TB4.0 41.41%, ProgramBench 2.00%, Vals Index **61.39% (#7/45)** (launch post claimed 75.15% #1). Artificial Analysis: Intelligence Index **50 (#19/227, deprecated run)**, GDPval-AA v2.1 **1610 (#27)**, ~$8.75/index task. LMArena Text 1504 (#4); BenchLM 79.16 (#8).
> **Conflicts surfaced:** (1) Anthropic's near-SOTA framing vs AA Index 50 — driven by deprecation, the Opus 4.8 safeguard fallback and refusal-heavy runs; (2) Vals Index drift 75.15% (launch) → 61.39% (current); (3) Vals ProofBench 77.0% (launch) → 95.0% (current); (4) **safeguard fallback to Opus 4.8 materially suppresses** tool/coding/GPQA scores on flagged trials.
> Sources: https://www.anthropic.com/news/claude-fable-5-mythos-5 · https://platform.claude.com/docs/en/models/fable-5/overview · https://www.vals.ai/models/anthropic_claude-fable-5 · https://artificialanalysis.ai/models/claude-fable-5

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first broadly available **Mythos-class** model (2026-06-09) — same weights as the restricted Claude Mythos 5, wrapped in production safeguards that fall back to Claude Opus 4.8 for cyber/bio/distillation requests. Legacy since Claude Fable 5.1. Not the same model as the 5.1 folder.
- **Provider / access:** Anthropic Claude API (`claude-fable-5`), Claude apps, third-party. Messages/Chat API, extended thinking, batch + prompt caching.
- **Release / knowledge:** 2026-06-09 (suspended 2026-06-12, restored 2026-07-01); knowledge cutoff Jan 2026 (docs); retirement not sooner than 2027-06-09.
- **IDs:** `anthropic/claude-fable-5`; `opencode/claude-fable-5`. No Zen Free ID.
- **Context window:** 1,000,000 input / 128,000 max output (300K batch beta).
- **Modalities:** text + image in; text out. Reasoning (adaptive, default high); tool calls; prompt caching.
- **Pricing (as of 2026-10-09):** **$10.00 / $50.00 per 1M**; cache read **$1.00** (0.1×); cache write $12.50/$20; Batch 50% off.
- **Architecture:** proprietary Mythos-class; weights not released.

### Raw benchmarks found

Agent / tool use:

- TB2.1 **80.52%** (Vals, with Opus 4.8 fallback); TB3.0 34.0%; TB4.0 41.41% (Vals); TB-Science 15.71%
- Tau2-Bench 98.5% (AA); OSWorld-Verified 85% (system card); GDPval-AA **1610 (#27, AA)** / 1932 Elo (LLM Stats)
- Vibe Code Bench 90.35% (#4); ProgramBench 2.00%; Code Migration 55.06%

Reasoning / knowledge:

- GPQA Diamond **93.18%** (Vals) / 92.6% (AA); HLE 55.5% with tools (AA)
- AA-LCR 82.3%; MLCR-AA 64.4%; CritPt 28.6%; ARC-AGI-2 89.2% (ARC Prize)
- AA Intelligence Index **50 (#19/227, deprecated)**, ~$8.75/index task; MMLU-Pro 91.50%; MMMU-Pro 89.31%

Coding:

- SWE-bench Verified **95.00%** (Vals); SWE-bench Pro 80%; LiveCodeBench 89.78%
- AA-SciCode 61.0%; AA Coding Index 76.5%; FrontierCode 1.1 Main 53.5% (#1 among frontier)

Long context:

- 1M window; sustained agentic memory claimed but **no MRCR/RULER/GraphWalks published**.

### Normalized scores (1–100)

- **Tool use: 92/100.** Tau2 98.5%, OSWorld-Verified 85%, GDPval-AA 1610 and Vals Index #7 are frontier; capped by the 20.9% safeguard-fallback rate and TB4.0 41.4%.
- **Reasoning: 92/100.** GPQA 93.2%, ARC-AGI-2 89.2% and HLE 55.5% are top-tier; AA Index 50 (deprecated, fallback-affected) and a 63.6% hallucination rate keep it short of the top.
- **Context window: 95/100.** 1M input (≥1M band) with 128K output; no ≥98%-at-512K retrieval benchmark.
- **Multimodal: 75/100.** Text + image in, text out (image band) with MMMU-Pro 89.31%; no audio/video.
- **Coding: 94/100.** SWE-bench Verified 95%, SWE-bench Pro 80%, Vibe Code 90.35% and #1 FrontierCode are frontier; capped by SWE Verify saturation.
- **Cost efficiency: 38/100.** $10/$50 per 1M is frontier-premium; the $1 cached read is the only value lever.
- **Overall Score: 90/100.** (92 + 92 + 95 + 75 + 94) / 5 = 89.6 → 90. Best fit: long-horizon agentic coding and dense knowledge work outside the safeguarded cyber/bio/chem domains.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: deep second-pass public internet research (Anthropic Fable 5 docs/announcement, Vals AI model page, Artificial Analysis model page, LMArena, BenchLM). Independent Vals/AA rows were promoted; the index-version and Vals-drift conflicts and the safeguard-fallback distortion are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
