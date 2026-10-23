# Claude Fable 5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Fable 5 (`claude-fable-5`)
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-09); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`claude-fable-5`, 25 rows) computes an overall **81.25/100 (#7 of 228)** and re-confirms the prior pass. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources).
> Independently re-sourced this pass: Vals AI SWE-bench Verified **95.00%**, SWE-bench Pro **80%**, Vibe Code Bench **90.35% (#4/110)**, LiveCodeBench 89.78%, GPQA Diamond **93.18%**, MMLU-Pro 91.50%, MMMU-Pro 89.31% (#3), LegalBench 88.56% (#1/149), Terminal-Bench 2.1 **80.52%** (Opus 4.8 fallback) / TB2.0 84.3% / TB3.0 34.0% / TB4.0 **41.41%**, TB-Science 15.71%, ProgramBench 2.00%, Code Migration 55.06%, Vals Index **61.39% (#7/45)** (launch post claimed 75.15% #1; some snapshots read 66.04%). Anthropic launch: SWE-bench Pro **80.3%** vs Opus 4.8 69.2% / GPT-5.5 58.6% / Gemini 3.1 Pro 54.2%; FrontierCode (#1), Replit ViBench, Hebbia Finance (#1), ARC-AGI-2 89.2% / ARC-AGI-1 98.5%. Artificial Analysis (Max, Opus 4.8 fallback): Intelligence Index **50 (#19/227, deprecated run)** vs launch **64.9 (#1, Index v4.2)**; GDPval-AA v2.1 **1613** (BenchLM 1747), AA-Briefcase 1543, AutomationBench 54%, AA-LCR 82.3%, HLE 55.5% w/tools, ~$8.75/index task. BenchLM 79.16–81.76 (#4–8); LMArena Text 1504 (#4).
> **Conflicts surfaced:** (1) **AA Index 64.9 (launch, v4.2) vs 50 (current, v4.3.2 + Opus 4.8 fallback)** — not comparable across index versions. (2) **Vals Index drift 75.15% (launch) → 61.39% (current)**; Vals ProofBench 77.0% → 95.0%. (3) **Safeguard fallback to Opus 4.8** occurs in ≤5% (vendor) vs ~8% (AA) of tasks, routed mostly from GPQA/AA-Omniscience/HLE — materially suppressing flagged tool/coding/science rows. (4) TB2.1 80.52% (Vals) vs 84.3% (BenchLM TB2.0) version gap. (5) AR/AA-Omniscience hallucination-tilted score despite leading accuracy.
> Sources: https://www.anthropic.com/news/claude-fable-5-mythos-5 · https://platform.claude.com/docs/en/models/fable-5/overview · https://artificialanalysis.ai/models/claude-fable-5 · https://artificialanalysis.ai/articles/claude-fable-5-mythos-intelligence-index · https://www.vals.ai/models/anthropic_claude-fable-5 · https://benchlm.ai/md/models/claude-fable.md · https://claude5.ai/en/news/claude-fable-5-benchmarks-swe-bench-pro-80-percent

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first broadly available **Mythos-class** model (2026-06-09) — same weights as the restricted Claude Mythos 5, wrapped in production safeguards that fall back to Claude Opus 4.8 for cyber/bio/chem/distillation requests. Legacy since Claude Fable 5.1. Not the same model as the 5.1 folder.
- **Provider / access:** Anthropic Claude API (`claude-fable-5`), Claude apps, Bedrock/Vertex/Azure/Databricks/OpenRouter (11 providers). Messages/Chat API, extended thinking, batch + prompt caching.
- **Release / knowledge:** 2026-06-09 (suspended 2026-06-12, restored 2026-07-01); knowledge cutoff Jan 2026 (docs); deprecation not before 2027-06-08.
- **IDs:** `anthropic/claude-fable-5`; `opencode/claude-fable-5`. No Zen Free ID.
- **Context window:** 1,000,000 input / 128,000 max output (300K batch beta).
- **Modalities:** text + image in; text out. Reasoning (adaptive, default high); tool calls; prompt caching.
- **Pricing (as of 2026-10-16):** **$10.00 / $50.00 per 1M**; cache read **$1.00** (0.1×); cache write $12.50/$20; Batch 50% off; US-only inference 1.1×.
- **Architecture:** proprietary Mythos-class; weights not released.

### Raw benchmarks found

Agent / tool use:

- TB2.1 **80.52%** (Vals, with Opus 4.8 fallback) / TB2.0 84.3% / TB3.0 34.0% / TB4.0 **41.41%** (Vals); TB-Science 15.71%
- Tau2-Bench 98.5% (AA); OSWorld-Verified 85% (system card); GDPval-AA **1613 (AA) / 1747 (BenchLM)**; AA-Briefcase 1543; AutomationBench 54%; ApprenticeBench 34%
- Vibe Code Bench 90.35% (#4); ProgramBench 2.00%; Code Migration 55.06%

Reasoning / knowledge:

- GPQA Diamond **93.18%** (Vals) / 90% (AA); HLE 55.5% with tools (AA)
- AA-LCR 82.3%; MLCR-AA 64.4%; CritPt 28.6%; ARC-AGI-2 89.2% / ARC-AGI-1 98.5% (ARC Prize)
- AA Intelligence Index **50 (#19/227, deprecated)** vs **64.9 (#1, launch v4.2)**, ~$8.75/index task; MMLU-Pro 91.50%; MMMU-Pro 89.31%; AA-Omniscience 40 (leading accuracy)

Coding:

- SWE-bench Verified **95.00%** (Vals); SWE-bench Pro **80.0–80.3%**; LiveCodeBench 89.78%
- AA-SciCode 61.0%; AA Coding Index 76.5%; FrontierCode 1.1 Main 53.5% (#1); cursorBench31 70.6%; cursorBench32 70.5%; VulcanBench v3 89.5%

Long context:

- 1M window; sustained agentic memory claimed (Slay the Spire ×3 vs Opus 4.8) but **no MRCR/RULER/GraphWalks published**.

### Normalized scores (1–100)

- **Tool use: 92/100.** Tau2 98.5%, OSWorld-Verified 85%, GDPval-AA 1613–1747 and Vals Index #7 are frontier; capped by the ~8% safeguard-fallback rate and TB4.0 41.4%.
- **Reasoning: 92/100.** GPQA 93.2%, ARC-AGI-2 89.2% and HLE 55.5% are top-tier; the deprecated AA Index 50 (fallback-affected) and a hallucination-tilted AA-Omniscience keep it short of the top.
- **Context window: 95/100.** 1M input (≥1M band) with 128K output; no ≥98%-at-512K retrieval benchmark.
- **Multimodal: 75/100.** Text + image in, text out (image band) with MMMU-Pro 89.31%; no audio/video.
- **Coding: 94/100.** SWE-bench Verified 95%, SWE-bench Pro 80%, Vibe Code 90.35% and #1 FrontierCode are frontier; capped by SWE Verify saturation.
- **Cost efficiency: 38/100.** $10/$50 per 1M is frontier-premium; the $1 cached read is the only value lever.
- **Overall Score: 90/100.** (92 + 92 + 95 + 75 + 94) / 5 = 89.6 → 90. Best fit: long-horizon agentic coding and dense knowledge work outside the safeguarded cyber/bio/chem domains.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: rewrite-pass public internet research (Anthropic Fable 5 docs/announcement, Vals AI model page and comparison snapshots, Artificial Analysis model page + launch article, BenchLM/BenchAlign, claude5.ai). The index-version, Vals-drift and safeguard-fallback distortions are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
