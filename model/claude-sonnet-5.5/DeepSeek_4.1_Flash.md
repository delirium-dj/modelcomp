# Claude Sonnet 5.5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic (`anthropic/claude-sonnet-5.5`)
- Date: 2026-10-16 (UTC) — rewrite; re-verified 2026-10-18; re-researched 2026-11-04
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-research pass — 2026-11-04** (second pass, user-requested). Fresh sources this pass: BenchLM (`claude-sonnet-5-5`, **77 rows**, **81.84/100, #6 of 1008** — was 56 rows, 82.19, #6 of 228), Anthropic Sonnet 5.5 system card, Artificial Analysis model page, Vals AI, Epoch AI, LlamaIndex snapshots.
> **Resolved:** the cache-read conflict — **$0.10 per 1M confirmed** (the Oct 7, 2026 Haiku 5.5 announcement cut Sonnet 5.5 cache reads 50% from $0.20; current docs list $0.10). 1M context included at standard pricing.
> **Refreshed:** AA Intelligence Index **54.2** (was 56, Max); OSWorld 2.1 partial **80.1%** (strict 43.5% stands); TB4.0 rows re-confirmed (70.6% Anthropic / 63.6% AA / 64.14% Vals #2/45).
> **Newly captured rows:** AA AutomationBench **71.8%**; AA-AnalystAgent **57.5%**; AA-LCR **82.7%**; AA-HLE 55.0%; AA-Omniscience **30.5 / accuracy 51.5% / hallucination 43.3%**; FrontierMath v2 **88.772% T1–3 / 80.488% Tier-4** (Epoch AI); **FrontierCode 2.0 41.0%** (Cognition); ExtractBench **94.68% / Pro 32% / ParseBench 69.26%**; Biomed image 72.2%; BioMysteryBench 89.2/44.7; SpatialBench Verified 72.5%; Toolathlon Pass³ 68.5% / 31.6 turns; Hermes Index 53.1 / Bench 73.5; GDP.pdf 25.8%; OSWorld 2.1 Offline 83.9%; Design Arena 1323; GMMLU 92.1 / MILU 91.6; biology suite rows (protein design 51.0, binder 82.3); AA Harvey LAB 93.1%.
> **No score change:** the added rows confirm the workhorse profile (elite agentic coding at mid pricing, image-only multimodal); scores held at 89.
> Sources this pass: https://benchlm.ai/models/claude-sonnet-5-5 · https://artificialanalysis.ai/models/claude-sonnet-5-5 · https://www.vals.ai/models/anthropic_claude-sonnet-5-5 · https://platform.claude.com/docs/en/about-claude/pricing · https://cognition.com/blog/frontier-code-2.0

> **Re-verified 2026-10-18.** BenchLM (`claude-sonnet-5-5`, 56 rows) computed an overall **82.19/100 (#6 of 228)** and re-confirmed the prior pass. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources). Independently re-sourced: Terminal-Bench 4.0 70.6% (Anthropic) / 64.14% (Vals), Terminal-Bench 2.1 83.15% (Vals), Terminal-Bench-Science 0.1 59.9%; SWE-bench Pro 81.3%, SWE Multilingual 90.3%, SWE Multimodal 54.3%, DeepSWE 71.0%, FrontierSWE v2 61.9%, ProgramBench 79.7%, CursorBench 4.0 55.5%, FrontierCode 1.1 Main 46.2% Max / 52.1% xhigh; HLE 64.5% w/ tools / 56.9% w/o; GDPval-AA v2.1 1844 Elo / AA-Briefcase 1811; OSWorld 2.1 43.5% strict / 80.1% partial; AutomationBench 44.7%; Toolathlon-Verified 77.8% Pass@1 / 85.2% Pass@3; Vibe Code Bench 92.39% (#1); Code Migration 69.83%; BioMysteryBench 81.11%; Chartography 61.6%/90.2%; BenchCAD tools 0.963; Vals Index 67.04%; BenchLM overall 83.92. Conflicts surfaced: TB4.0 harness/effort split; OSWorld partial vs strict; cache-read $0.20 vs $0.10; GPQA/SWE-bench Verified unpublished; effort-sensitivity of the AA Index; text-only output.

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** The second model in Anthropic's Claude 5.5 family — a faster, lower-cost complement to Opus 5.5 for well-scoped everyday tasks, bug fixes and polished documents/slides/spreadsheets. Anthropic's "best combination of speed and intelligence"; runs 30%+ faster than Sonnet 5.
- **Provider / access:** Claude Platform (`claude-sonnet-5-5`), Bedrock, Google Cloud, Microsoft Foundry, OpenCode Zen (paid). ZDR available.
- **Release / knowledge:** 2026-09-28; knowledge cutoff June 2026; retirement not sooner than 2027-09-28.
- **IDs:** `claude-sonnet-5-5`. No Free ID; no Zen Free ID.
- **Context window:** 1,000,000 tokens; 128,000 max output.
- **Modalities:** text + image in, text out; tool use; adaptive thinking on by default (effort low/medium/high/xhigh/max, default high).
- **Pricing (as of 2026-11-04):** **$2 in / $10 out** per 1M; **cache reads $0.10** (confirmed; 50% cut), 5m write $2.50 / 1h $4; Batch $1/$5; US-only inference 1.1×.
- **Architecture:** proprietary/undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 **70.6%** (Anthropic) / **63.6% (AA)** / **64.14%** (Vals, #2/45); Terminal-Bench 2.1 83.15% (Vals)
- GDPval-AA v2.1 **1844 Elo** (Anthropic) / 1838 (AA) / normalized **66.9%**; AA-Briefcase 1811; AA Harvey LAB **93.1%**
- OSWorld 2.1 **43.5% strict / 80.1% partial** / Offline 83.9%; AutomationBench 44.7% (Zapier) / **AA 71.8%**; Terminal-Bench-Science 0.1 59.9%
- Toolathlon-Verified 77.8% Pass@1 / 85.2% Pass@3 / **68.5% Pass³, 31.6 turns**; DRACO 87.0%; AA-AnalystAgent **57.5%**; GDP.pdf 25.8%
- Hermes Index 53.1 / Hermes Bench 73.5; MazeBench 8%
- MCP Atlas / Claw-Eval / Tau3: **no verified public score found**

Reasoning / knowledge:

- HLE **64.5%** w/ tools / 56.9% w/o (AA-HLE 55.0%); ProofBench 100% (Vals); BioMysteryBench 89.2 human-solvable / 44.7 human-difficult
- ArXivMath 86.8% no-tools / 95.2% tools; HealthBench Professional 69.2% (raw 77.1); FrontierMath v2 **88.772% T1–3 / 80.488% Tier-4** (Epoch AI)
- Artificial Analysis Intelligence Index **54.2**; AA-LCR **82.7%**; MLCR-AA 41.7%; CritPt 31.4%
- AA-Omniscience **index 30.5 / accuracy 51.5% / hallucination 43.3%**; GMMLU 92.1 / MILU 91.6
- GPQA Diamond: **no verified public score found**

Coding:

- SWE-bench Pro **81.3%**; SWE Multilingual 90.3%; SWE Multimodal 54.3%; SWE-bench Verified: **not published**
- Vibe Code Bench **92.39% (#1/110)**; Code Migration **69.83% (#1/75)**; DeepSWE 71.0%; FrontierSWE v2 61.9%
- ProgramBench 79.7%; CursorBench 4.0 55.5%; FrontierCode 1.1 Main 46.2% Max / 52.1% xhigh / Extended 59.1%; **FrontierCode 2.0 41.0%**; Bug Hunt Bench 51.3 fixes

Long context / multimodal:

- 1M window / 128K output; Chartography 61.6% no-tools / 90.2% tools; OfficeQA 76.9% / Pro 65.6%; BenchCAD Vision2Code 0.747 / 0.963 tools; Biomed image 72.2%
- ExtractBench **94.68%** / Pro 32% / ParseBench 69.26%; SpatialBench Verified 72.5%; SingleCellBench 59.1%; Design Arena 1323; AA-LCR 82.7%

### Normalized scores (1–100)

- **Tool use: 93/100.** GDPval-AA 1838–1844 (#2), TB4.0 63.6–70.6% and TB2.1 83.15% clear the frontier refs; capped by OSWorld 2.1 strict pass 43.5% and the fallback-collapse effect on cyber/SRE.
- **Reasoning: 90/100.** HLE 64.5% with tools, ProofBench 100% and BioMystery #1 are frontier; AA Index 54.2 (<60) and no GPQA hold it below 95.
- **Context window: 96/100.** 1M input with 128K output (≥1M band) included at standard pricing; no ≥98%-at-512K retrieval benchmark.
- **Multimodal: 72/100.** Text + image in, text out (strong charts at 90.2% with tools / BenchCAD 0.963); no audio/video, no non-text output.
- **Coding: 93/100.** SWE-bench Pro 81.3%, Vibe Code #1 (92.39%) and Code Migration #1 (69.83%) are elite; capped by the FrontierCode Max-effort gap and the absence of SWE-bench Verified.
- **Cost efficiency: 74/100.** $2/$10 per 1M with a now-confirmed $0.10 cache read sits between the ~88 ($1.25/$4.25) and ~60 ($3/$15) anchors; high token efficiency improves per-task cost.
- **Overall Score: 89/100.** (93 + 90 + 96 + 72 + 93) / 5 = 88.8 → 89. Best fit: the default paid workhorse for well-scoped agentic coding and knowledge-work automation.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-04
- Method: re-research pass (user-requested second pass) over public internet research (Anthropic Sonnet 5.5 system card + pricing docs, BenchLM re-read 2026-11-04 with 77 rows, Artificial Analysis, Vals AI, Epoch AI, Cognition, LlamaIndex snapshots). Resolved the cache-read conflict, refreshed AA rows, captured the new FrontierCode 2.0 / AA-LCR / AutomationBench-AA / FrontierMath / biology-suite rows; scores held. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Introducing Claude Sonnet 5.5](https://www.anthropic.com/claude-sonnet-5-5)
  - [Claude Sonnet 5.5 system card](https://www-cdn.anthropic.com/870c8f525702625d2c62fc6dd04c857e3250bec1/Claude%20Sonnet%205.5%20System%20Card.pdf)
  - [BenchLM — Claude Sonnet 5.5 benchmark scores](https://benchlm.ai/models/claude-sonnet-5-5)
  - [Artificial Analysis — Claude Sonnet 5.5](https://artificialanalysis.ai/models/claude-sonnet-5-5)
  - [Vals AI — Claude Sonnet 5.5](https://www.vals.ai/models/anthropic_claude-sonnet-5-5)
  - [Claude API pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
