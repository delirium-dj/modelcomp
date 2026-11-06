# Claude Fable 5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Fable 5 (`claude-fable-5`)
- Date: 2026-10-16 (UTC) — rewrite; re-verified 2026-10-18; enriched 2026-10-24; re-researched 2026-11-05
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-research pass — 2026-11-05** (second pass, user-requested). Fresh sources this pass: BenchLM (`claude-fable-5`, **47 rows**, **80.81/100, #8 of 1015** — was 45 rows, 81.16, #7 of 992), Anthropic Fable 5 & Mythos 5 system card, Artificial Analysis, Vals AI, Epoch AI.
> **Newly captured rows:** AA Tau3-Banking **38.1%**; **AA Terminal-Bench 2.1 84.6%** (and the system-card row reads **84.3%** — confirming the higher TB2.1 band over the earlier 80.52% Vals reading); Blueprint-Bench 2 **38.6%**; ParseBench 69.79% (Nov 5 snapshot); Design Arena 1294.
> **Re-verified unchanged:** AA Index 49.6, AA-GPQA 92.6%, AA-HLE 55.5%, Omniscience 43.3 / 65.4% / 63.6%, AA-LCR 82.3%, FrontierMath 87.018 / 90.200, GDPval-AA 1747 Elo / 55.5%, Harvey LAB 93.6%, EnterpriseOps-Gym 51.1%, TB4.0 41.41% (Vals), SWE-bench Verified 95%.
> **No score change:** evidence confirms the frontier agentic/coding profile; scores held at 90.
> Sources this pass: https://benchlm.ai/models/claude-fable · https://artificialanalysis.ai/models/claude-fable-5 · https://www.vals.ai/models/anthropic_claude-fable-5 · https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf

> **Enrichment pass — 2026-10-24** (second pass, user-approved). BenchLM (`claude-fable-5`) re-read on 2026-10-23 carried **45 source-displayable rows** (was 25 on 2026-10-18) and computed **81.16/100, #7 of 992** (was #7 of 228). Newly captured then: AA Harvey LAB v1.0 93.6%, AA EnterpriseOps-Gym 51.1%, TerminalBench-Hard 62.9%, AA Agentic Index 51.0%, AA-AnalystAgent 48.8%, GDPval-AA 1747 Elo / 55.5%, ApprenticeBench 34%, MazeBench 11%, FrontierMath v2 T1–3 87.018% / Tier-4 90.200% (Epoch AI), AA-LCR 82.3%, CritPt 28.6%, AA Intelligence Index 49.6%, AA-GPQA 92.6%, AA-HLE 55.5%, AA-Omniscience 43.3 / 65.4% / 63.6%, AA-IFBench 63.5%, FrontierSWE v2 47.0%, ParseBench 70.78%, OfficeQA Pro 57.9%, Design Arena 1296. GDPval-AA reads 1747 (system card) over the earlier 1613 (AA); the ~8% Opus-4.8 safeguard fallback and AA-Index-version caveats stand.

> **Re-verified 2026-10-18.** BenchLM (`claude-fable-5`, 25 rows) computed an overall **81.25/100 (#7 of 228)**. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources). Independently re-sourced: Vals SWE-bench Verified 95.00%, SWE-bench Pro 80%, Vibe Code Bench 90.35% (#4/110), LiveCodeBench 89.78%, GPQA 93.18%, MMLU-Pro 91.50%, MMMU-Pro 89.31% (#3), LegalBench 88.56% (#1/149), Terminal-Bench 2.1 80.52% (Opus 4.8 fallback) / TB3.0 34.0% / TB4.0 41.41%, TB-Science 15.71%, ProgramBench 2.00%, Code Migration 55.06%, Vals Index 61.39% (#7/45) vs launch 75.15% #1. Anthropic launch: SWE-bench Pro 80.3% vs Opus 4.8 69.2%; FrontierCode (#1); ARC-AGI-2 89.2% / ARC-AGI-1 98.5%. AA (Max, Opus 4.8 fallback): Intelligence Index 50 (#19/227, deprecated) vs launch 64.9 (#1, Index v4.2); GDPval-AA v2.1 1613; AA-Briefcase 1543. Conflicts surfaced: AA Index version rebase; Vals Index drift; ≤5–8% safeguard fallback (GPQA/Omniscience/HLE routed away); TB2.1 version gap; hallucination-tilted Omniscience.

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first broadly available **Mythos-class** model (2026-06-09) — same weights as the restricted Claude Mythos 5, wrapped in production safeguards that fall back to Claude Opus 4.8 for cyber/bio/chem/distillation requests. Legacy since Claude Fable 5.1. Not the same model as the 5.1 folder.
- **Provider / access:** Anthropic Claude API (`claude-fable-5`), Claude apps, Bedrock/Vertex/Azure/Databricks/OpenRouter. Messages/Chat API, extended thinking, batch + prompt caching.
- **Release / knowledge:** 2026-06-09 (suspended 2026-06-12, restored 2026-07-01); knowledge cutoff Jan 2026; deprecation not before 2027-06-08.
- **IDs:** `anthropic/claude-fable-5`; `opencode/claude-fable-5`. No Zen Free ID.
- **Context window:** 1,000,000 input / 128,000 max output (300K batch beta).
- **Modalities:** text + image in; text out. Reasoning (adaptive, default high); tool calls; prompt caching.
- **Pricing (as of 2026-11-05):** **$10.00 / $50.00 per 1M**; cache read **$1.00** (0.1×); cache write $12.50/$20; Batch 50% off; US-only inference 1.1×.
- **Architecture:** proprietary Mythos-class; weights not released.

### Raw benchmarks found

Agent / tool use:

- TB2.1 **84.3% (system card) / 84.6% (AA) / 80.52% (Vals)**; TB3.0 34.0% / TB4.0 **41.41%** (Vals); TB-Science 15.71%
- Tau2-Bench 98.5% (AA); τ³-Banking **38.1%**; OSWorld-Verified 85%; GDPval-AA **1747 Elo** / 55.5%; AA-Briefcase 1543; AutomationBench 54%; ApprenticeBench 34%; MazeBench 11%
- AA Harvey LAB 93.6%; AA EnterpriseOps-Gym 51.1%; Vibe Code Bench 90.35% (#4); Code Migration 55.06%

Reasoning / knowledge:

- GPQA Diamond **93.18% (Vals) / 92.6% (AA)**; HLE 55.5% w/ tools; AA-LCR 82.3%; MLCR-AA 64.4%; CritPt 28.6%
- ARC-AGI-1 98.5% / ARC-AGI-2 89.2% (ARC Prize); FrontierMath v2 T1–3 87.018% / Tier-4 90.200%
- AA Intelligence Index **49.6 (current)** vs **64.9 (#1, launch v4.2)**; MMLU-Pro 91.5%; MMMU-Pro 89.31%; AA-Omniscience 43.3 / 65.4% acc / 63.6% hallu; AA-IFBench 63.5%

Coding:

- SWE-bench Verified **95.0%**; SWE-bench Pro **80.0–80.3%**; LiveCodeBench 89.8%; AA-SciCode 61.0%; AA Coding Index 76.5%
- FrontierCode 1.1 Main 53.5%; cursorBench3.1 70.6% / 3.2 70.5%; VulcanBench v3 89.5%; FrontierSWE v2 47.0%

Multimodal / long context:

- ParseBench 69.79%; Blueprint-Bench 2 38.6%; OfficeQA Pro 57.9%; Design Arena 1294
- 1M window; no MRCR/RULER/GraphWalks published.

### Normalized scores (1–100)

- **Tool use: 92/100.** Tau2 98.5%, OSWorld-Verified 85%, GDPval-AA 1747 and TB2.1 80.5–84.6% are frontier; capped by the ≤5–8% safeguard-fallback rate and TB4.0 41.4%.
- **Reasoning: 92/100.** GPQA 92.6–93.2%, ARC-AGI-2 89.2% and HLE 55.5% are top-tier; the deprecated/fallback-affected AA Index 49.6 and a hallucination-tilted Omniscience keep it short of the top.
- **Context window: 95/100.** 1M input (≥1M band) with 128K output; no ≥98%-at-512K retrieval benchmark.
- **Multimodal: 75/100.** Text + image in, text out (image band) with MMMU-Pro 89.31%; no audio/video.
- **Coding: 94/100.** SWE-bench Verified 95%, SWE-bench Pro 80%, Vibe Code 90.35% and #1-class FrontierCode are frontier; capped by SWE-Verify saturation.
- **Cost efficiency: 38/100.** $10/$50 per 1M is frontier-premium; the $1 cached read is the only value lever.
- **Overall Score: 90/100.** (92 + 92 + 95 + 75 + 94) / 5 = 89.6 → 90. Best fit: long-horizon agentic coding and dense knowledge work outside the safeguarded cyber/bio/chem domains.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-05
- Method: re-research pass (user-requested second pass) over public internet research (Anthropic system card, BenchLM re-read 2026-11-05, Artificial Analysis, Vals AI, Epoch AI). New Tau3/AA-TB2.1/Blueprint-Bench rows captured; TB2.1 band resolved upward; scores held. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Fable 5 and Claude Mythos 5 system card](https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf)
  - [BenchLM — Claude Fable 5 benchmark scores](https://benchlm.ai/models/claude-fable)
  - [Artificial Analysis — Claude Fable 5](https://artificialanalysis.ai/models/claude-fable-5)
  - [Vals AI — Claude Fable 5](https://www.vals.ai/models/anthropic_claude-fable-5)
  - [ARC Prize — Claude Fable 5 results](https://arcprize.org/results/anthropic-claude-fable-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
