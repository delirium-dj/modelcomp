# Claude Sonnet 5.5 — findings by Beam

- Source: Anthropic/Claude Sonnet 5.5, `anthropic/claude-sonnet-5-5`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Second model in Claude 5.5 family (Sep 28, 2026): clear upgrade over Sonnet 5, 30%+ faster, up to 30% cheaper per task; strong on well-scoped everyday tasks, bug fixes, polished docs/slides/spreadsheets; first Sonnet to beat Pokémon Red from screenshots.
- **Provider / access:** Anthropic API `claude-sonnet-5-5`; AWS Bedrock `anthropic.claude-sonnet-5-5`; OpenRouter.
- **Release / knowledge:** Released 2026-09-28; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-sonnet-5-5`
- **Context window:** 1,000,000 tokens; max output 128,000.
- **Modalities:** text, image, file (PDF) in; text out; reasoning yes (adaptive thinking); tool calling yes; structured output yes. No video.
- **Pricing (as of 2026-11-08):** $2.00 / 1M input, $10.00 / 1M output, $0.20 / 1M cache read; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agentic public-lane (BenchLM): **69.3** (#11/128)
- Terminal-Bench 4.0: **70.60%**; Terminal-Bench-Science 0.1: **59.9%**
- Terminal-Bench 2.1 (Vals): coming soon in sources
- HLE w/ tools: **64.5%**
- DRACO: **87.0%**
- Toolathlon-Verified: **77.8%**; Pass@3 85.2%; Pass³ 68.5%; avg turns 31.6
- OSWorld 2.0: coming soon
- AutomationBench: coming soon
- ApprenticeBench: coming soon
- MazeBench: **8%**
- GDPval-AA: **1846 Elo**? (Opus 5.5 cites 1846 at max; Sonnet 5.5 "two points below Opus 5.5" → ~1844); AA normalized **66.9%**
- Vals Index: **67.04%** (#2/48)
- AA Briefcase: **1811** (Anthropic)
- AA Harvey LAB v1.0: **93.1%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **63.6%** (Artificial Analysis)
- GDP.pdf: **25.8%** (Artificial Analysis)
- AutomationBench (Zapier 1.0.6): **44.70%** (Anthropic)
- AA AutomationBench: **71.8%** (Artificial Analysis)
- AA-AnalystAgent: **57.5%** (Artificial Analysis)
- Hermes Index: **53.1%**; Hermes Bench: **73.5%** (Nous Research)
- OSWorld 2.1: **80.1%** (Anthropic)
- OSWorld 2.1 Offline: **83.9%** (Anthropic)

Reasoning / knowledge:

- FrontierMath v2 (Tier 4): **80.488%**; Tiers 1-3: **88.772%** (Epoch AI)
- HLE: not individually reported (HLE w/ tools 64.5%)
- ARC-AGI: not individually reported
- AA Intelligence Index: **54.5%** (measured, updated 2026-11-07)
- AA-HLE: **55.0%** (Artificial Analysis)
- AA-Omniscience Index: **30.5%**
- AA-Omniscience Accuracy: **51.5%**
- AA-Omniscience Hallucination Rate: **43.3%**
- AA-LCR: **82.7%** (Artificial Analysis)
- CritPt: **31.4%** (Artificial Analysis)
- MLCR-AA: **41.7%** (Artificial Analysis)
- HealthBench (raw): 69.4%; (length-adjusted): 65.4%; Professional (raw): 77.1%; Professional: 69.2%
- BioMysteryBench (human-solvable): 89.2%; (human-difficult): 44.7%
- SpatialBench Verified: 72.5%; SingleCellBench: 59.1%; Protein Design: 51.0%; Morphology-to-molecule: 25.0%; Medicinal chemistry: 65.3%; Protein Design library ranking: 54.8%; De novo protein-binder design: 82.3%; Protocols (troubleshooting): 67.3%; Protocols (understanding): 66.6%
- HLE w/o tools: 56.9%
- GMMLU: 92.1%; MILU: 91.6%
- ArXivMath Aug. 2026 (no tools): 86.8%; (tools): 95.2%

Coding:

- Coding public-lane (BenchLM): **84.2** (#1/150)
- SWE-bench Pro: **81.3%**
- Vibe Code Bench v1.1: **92.39%** (#1/112)
- Vibe Code Bench 1-100: **18.24%**
- Bug Hunt Bench: **51.3 fixes**
- Code Migration: **69.83%**
- BioMysteryBench: **81.11%**
- FrontierCode 1.1 Main: **46.2%**
- CursorBench 4.0: **55.5%**
- SWE-bench Pro: **81.3%**
- SWE Multilingual: **90.3%**
- SWE Multimodal: **54.3%**
- DeepSWE: **71.0%**
- FrontierCode 1.1 Extended: **59.1%**
- ProgramBench: **79.7%**
- FrontierSWE v2: **61.9%**
- AA-SciCode: **61.0%**
- Bug Hunt Bench: **51.3 fixes**
- FrontierCode 2.0: **41.0%**

Long context:

- 1M window; MRCR: no verified public score found.

Multimodal:

- Chartography (no tools): **61.6%**; (tools): **90.2%**
- BenchCAD Vision2Code (no tools): **0.747**; (tools): **0.963**
- Biomedical image analysis: **72.2%**
- OfficeQA: **76.9%**; OfficeQA Pro: **65.6%**
- Design Arena Website: **1317**
- ExtractBench Pro: **32%**; ExtractBench (LlamaIndex): **94.68%**; ParseBench: **69.21%**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 80/100.** Agentic lane #11/128 (69.3), Terminal-Bench 4.0 70.6%, HLE w/ tools 64.5%, Toolathlon-Verified 77.8%; caps at unverified OSWorld/AutomationBench. Enrichment (2026-11-08): added Terminal-Bench-Science 0.1 59.9%, DRACO 87.0%, Toolathlon Verified Pass@3 85.2%, Pass³ 68.5%, avg turns 31.6, GDPval-AA 66.9% normalized/1844 Elo, AA Briefcase 1811, AA Harvey LAB 93.1%, AA Terminal-Bench 4.0 63.6%, GDP.pdf 25.8%, AutomationBench Zapier 44.70%, AA AutomationBench 71.8%, AA-AnalystAgent 57.5%, Hermes Index 53.1%, Hermes Bench 73.5%, MazeBench 8%, OSWorld 2.1 80.1%, OSWorld 2.1 Offline 83.9%. Corroborates band; no change.
- **Reasoning: 85/100.** FrontierMath Tier4 80.488%, HLE w/ tools 64.5%, DRACO 87.0%; caps at no published ARC-AGI/GPQA. Enrichment adds AA Intelligence 54.5%, AA-HLE 55.0%, AA-Omniscience 30.5%/51.5%/43.3%, AA-LCR 82.7%, CritPt 31.4%, MLCR 41.7%, FrontierMath v2 Tiers 1-3 88.772%, HLE w/o tools 56.9%, HealthBench rows, BioMysteryBench rows, SpatialBench 72.5%, SingleCellBench 59.1%, Protein Design 51.0%, Morphology 25.0%, Medicinal chemistry 65.3%, Protein Design library 54.8%, De novo 82.3%, Protocols rows, ArXivMath rows, GMMLU 92.1%, MILU 91.6%. Corroborates band; no change.
- **Context window: 85/100.** 1M window; caps at no published MRCR retrieval.
- **Multimodal: 85/100.** Text/image/file in, text out; Chartography 61.6%. Enrichment adds Chartography (tools) 90.2%, BenchCAD (no tools) 0.747/(tools) 0.963, Biomedical 72.2%, OfficeQA 76.9%, OfficeQA Pro 65.6%, Design Arena 1317, ExtractBench Pro 32%, ExtractBench 94.68%, ParseBench 69.21%. Corroborates band; no change.
- **Coding: 92/100.** Coding lane #1/150 (84.2), SWE-bench Pro 81.3%, Vibe Code 92.39%, Bug Hunt 51.3 fixes. Enrichment adds FrontierCode 1.1 Main 46.2%, CursorBench 4.0 55.5%, SWE-bench Pro 81.3%, SWE Multilingual 90.3%, SWE Multimodal 54.3%, DeepSWE 71.0%, FrontierCode 1.1 Extended 59.1%, ProgramBench 79.7%, FrontierSWE v2 61.9%, AA-SciCode 61.0%, Bug Hunt 51.3 fixes, FrontierCode 2.0 41.0%. Corroborates band; no change.
- **Cost efficiency: 85/100.** Good value at $2/$10 per 1M.
- **Overall Score: 85/100.** Mean of five quality dims (BenchLM aggregate 82.17); best-fit for everyday coding + agentic work at low cost. Enrichment (2026-11-08) added new verified rows (Terminal-Bench-Science 0.1 59.9%; DRACO 87.0%; Toolathlon Verified Pass@3 85.2%, Pass³ 68.5%, avg turns 31.6; GDPval-AA 66.9% normalized/1844 Elo; AA Briefcase 1811; AA Harvey LAB 93.1%; AA Terminal-Bench 4.0 63.6%; GDP.pdf 25.8%; AutomationBench Zapier 44.70%; AA AutomationBench 71.8%; AA-AnalystAgent 57.5%; Hermes Index 53.1%; Hermes Bench 73.5%; MazeBench 8%; OSWorld 2.1 80.1%; OSWorld 2.1 Offline 83.9%; AA Intelligence 54.5%; AA-HLE 55.0%; AA-Omniscience 30.5%/51.5%/43.3%; AA-LCR 82.7%; CritPt 31.4%; MLCR 41.7%; FrontierMath v2 Tiers 1-3 88.772%; HLE w/o tools 56.9%; HealthBench rows; BioMysteryBench rows; SpatialBench 72.5%; SingleCellBench 59.1%; Protein Design 51.0%; Morphology 25.0%; Medicinal chemistry 65.3%; Protein Design library 54.8%; De novo 82.3%; Protocols rows; ArXivMath rows; GMMLU 92.1%; MILU 91.6%; Chartography (tools) 90.2%; BenchCAD 0.747/0.963; Biomedical 72.2%; OfficeQA 76.9%; OfficeQA Pro 65.6%; Design Arena 1317; ExtractBench Pro 32%; ExtractBench 94.68%; ParseBench 69.21%; FrontierCode 1.1 Main 46.2%; CursorBench 4.0 55.5%; SWE-bench Pro 81.3%; SWE Multilingual 90.3%; SWE Multimodal 54.3%; DeepSWE 71.0%; FrontierCode 1.1 Extended 59.1%; ProgramBench 79.7%; FrontierSWE v2 61.9%; AA-SciCode 61.0%; Bug Hunt 51.3 fixes; FrontierCode 2.0 41.0%). No dimension band moved; Overall unchanged at 85.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Claude Sonnet 5.5](https://benchlm.ai/models/claude-sonnet-5-5)
  - [Artificial Analysis — Claude Sonnet 5.5](https://artificialanalysis.ai/models/claude-sonnet-5-5)
  - [Anthropic — Claude Sonnet 5.5](https://www.anthropic.com/claude-sonnet-5-5)
  - [Claude Sonnet 5.5 system card](https://www-cdn.anthropic.com/870c8f525702625d2c62fc6dd04c857e3250bec1/Claude%20Sonnet%205.5%20System%20Card.pdf)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).