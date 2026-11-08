# Claude Opus 4.8 — findings by Beam

- Source: Anthropic/Claude Opus 4.8, `anthropic/claude-opus-4-8`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-22)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's Opus upgrade (May 28, 2026) over 4.7 with improvements across benchmarks and more effective collaboration; same price. Dynamic workflows in Claude Code; fast mode 2.5x at 3x cheaper.
- **Provider / access:** Anthropic API `claude-opus-4-8`; AWS Bedrock; OpenRouter; OpenCode Zen.
- **Release / knowledge:** Released 2026-05-28; knowledge cutoff January 2026.
- **IDs:** `anthropic/claude-opus-4-8`
- **Context window:** 1,000,000 tokens; max output 128,000.
- **Modalities:** text, image, PDF in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** $5.00 / 1M input, $25.00 / 1M output, $0.50 / 1M cache read, $6.25 / 1M cache write; paid. Fast mode $10/$50.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agentic public-lane (BenchLM): **63.4** (#19/128)
- Terminal-Bench 2.1: **74.6%**
- Terminal-Bench 3.0: **21.1%**
- OSWorld-Verified: **83.4%**
- OSWorld 2.0: **20.6%**
- BrowseComp: **84.3%**
- DeepSearchQA: **93.1%**
- MCP Atlas: **82.2%**
- Toolathlon: **59.9%**
- Finance Agent v2: **53.9%**
- Gert Labs: **72.97%**
- ResearchClawBench: **21.1%**
- JobBench: not reported for 4.8
- AA Agentic Index: **42.6%** (Artificial Analysis)
- AA-AnalystAgent: **45.0%** (Artificial Analysis)
- AA EnterpriseOps-Gym: **44.0%** (Artificial Analysis)
- terminalBenchHard: **58.3%** (Artificial Analysis)
- aaTerminalBench21: **84.6%** (Artificial Analysis)
- AA ITBench: not individually reported
- AA Tau3 Banking: not individually reported
- AA Briefcase: not individually reported
- AA AutomationBench: not individually reported
- GDP.pdf: not individually reported
- MazeBench: **0%** (MazeBench)
- AA Cyber Index: not individually reported
- CWE-Bench-AA: not individually reported
- DeepsecBench-AA: not individually reported
- CyberGym-E2E-AA: not individually reported
- AA Briefcase: not individually reported

Reasoning / knowledge:

- ARC-AGI-1: **92.50%**
- ARC-AGI-2: **72.1%**
- ARC-AGI-3: **1.5%**
- FrontierMath v2 (Tiers 1-3): **80.000%**
- FrontierMath v2 (Tier 4): **56.098%**
- USAMO 2026: **96.7%**
- HLE / GPQA: not individually reported
- AA Intelligence Index: **41.8%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **92.0%** (Artificial Analysis)
- AA-HLE: **48.7%** (Artificial Analysis)
- AA-SciCode: **54.4%** (measured)
- HLE **57.9%** (measured); GPQA Diamond **93.6%** (measured); GPQA **93.6%** (measured)
- ARC-AGI-1 **92.5%** (measured); ARC-AGI-2 **72.1%** (measured); ARC-AGI-3 **1.5%** (measured)
- FrontierMath Tier4 **56.1%** (measured); FrontierMath Tiers 1-3 **80.0%** (measured)
- SWE-bench Verified **88.6%** (measured); SWE-bench Pro **69.2%** (measured); LiveCodeBench Vals **87.8%** (measured)
- Terminal-Bench 2.1 **74.6%** (measured); Terminal-Bench 3.0 **21.1%** (measured); OSWorld-Verified **83.4%** (measured); OSWorld 2.0 **20.6%** (measured); BrowseComp **84.3%** (measured); DeepSearchQA **93.1%** (measured); MCP Atlas **82.2%** (measured); Toolathlon **59.9%** (measured)
- MMMU-Pro **74.4%** (est.); CharXiv **89.9%** (measured); ScreenSpot Pro **87.9%** (measured); OfficeQA Pro **66.2%** (measured)
- MRCRv2 **85.4%** (est.); AA-LCR **77.7%** (measured)
- AA-Omniscience Index: **28.8%**
- AA-Omniscience Accuracy: **48.8%**
- AA-Omniscience Hallucination Rate: **39.3%**
- CritPt: **20.9%** (Artificial Analysis)
- AA-LCR: **77.7%** (Artificial Analysis)
- HLE-Verified: not individually reported
- LABBench2: not individually reported
- HealthBench (raw): **67.1%**; (length-adjusted): **57.8%**; Professional: **59.8%**; Professional (raw): **73.4%**
- BioMysteryBench (human-solvable): **90.1%**; (human-difficult): **49.4%**
- SpatialBench Verified: **72.5%**; SingleCellBench: **60.6%**; ProteinGym Hard: **47.7%**; Protein Design: **42.5%**; Organic chemistry V2: **61.6%**; Protocols (troubleshooting): **61.1%**; Protocols (understanding): **78.4%**
- AA-IFBench: **62.2%** (Artificial Analysis)
- INCLUDE: **87.6%** (Anthropic)
- USAMO 2026: **96.7%** (Anthropic)
- FrontierMath v2 (Tiers 1-3): **80.000%**; Tier 4: **56.098%** (Epoch AI)
- ExtractBench (LlamaIndex): **86.84%** (LlamaIndex)
- ParseBench: **62.27%** (LlamaIndex)

Coding:

- Coding public-lane (BenchLM): **60.7** (#19/150)
- SWE-bench Verified: **88.6%**
- SWE-bench Pro: **69.2%**
- LiveCodeBench (Vals): **87.8%**
- Coding lane: #19/150 (60.7)
- AA-SciCode: **54.4%** (Artificial Analysis)
- AA Coding Index: not individually reported
- PostTrainBench v1.1: **32.9%** (PostTrainBench)
- FrontierCode 2.0: **14.7%** (Cognition)

Long context:

- 1M window; MRCR v2 128K-256K: not reported for 4.8 (MRCR v2 128K-256K coming soon).
- MRCRv2 **85.4%** (est.); AA-LCR **77.7%** (measured).

Multimodal:

- Multimodal public-lane (BenchLM): **91.2** (#5/54)
- CharXiv: **89.9%**
- OfficeQA Pro: **66.2%**
- ExtractBench (LlamaIndex): **86.84%**
- ParseBench: **62.27%**
- ScreenSpot Pro: **87.9%**
- CharXiv w/o tools: **80.5%**
- Design Arena Website: **1256** (OpenRouter)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 84/100.** Agentic lane #19/128 (63.4), OSWorld-Verified 83.4%, DeepSearchQA 93.1%, MCP Atlas 82.2%, BrowseComp 84.3%, Terminal-Bench 2.1 74.6%; caps at OSWorld 2.0 20.6%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates AA Intelligence 41.8%, AA-GPQA 92.0%, AA-HLE 48.7%, AA-SciCode 54.4%, CritPt 20.9%, AA-LCR 77.7%, ARC-AGI 92.5%/72.1%/1.5%, GPQA 93.6%, HLE 57.9%, FrontierMath 80.0%/56.1%, SWE-bench Verified 88.6%, SWE-bench Pro 69.2%, LiveCodeBench Vals 87.8%, Terminal-Bench 2.1 74.6%, Terminal-Bench 3.0 21.1%, OSWorld-Verified 83.4%, OSWorld 2.0 20.6%, BrowseComp 84.3%, DeepSearchQA 93.1%, MCP Atlas 82.2%, Toolathlon 59.9%, MMMU-Pro 74.4% (est.), CharXiv 89.9%, ScreenSpot Pro 87.9%, OfficeQA Pro 66.2%, MRCRv2 85.4% (est.), AA-LCR 77.7%, AA-Omniscience 28.8%/48.8%/39.3%, AA-IFBench 62.2%, INCLUDE 87.6%, USAMO 96.7%, FrontierMath v2 80.000%/56.098%, ExtractBench 86.84%, ParseBench 62.27%. Corroborates band; no change.
- **Reasoning: 80/100.** ARC-AGI-1 92.5%, ARC-AGI-2 72.1%, HLE 57.9%, GPQA 93.6%, FrontierMath Tier4 56.1%; caps at ARC-AGI-3 1.5%. Enrichment adds AA Intelligence 41.8%, AA-GPQA 92.0%, AA-HLE 48.7%, AA-SciCode 54.4%, CritPt 20.9%, AA-LCR 77.7%, ARC-AGI 92.5%/72.1%/1.5%, GPQA 93.6%, HLE 57.9%, FrontierMath 80.0%/56.1%, AA-Omniscience 28.8%/48.8%/39.3%, AA-IFBench 62.2%, INCLUDE 87.6%, USAMO 96.7%, FrontierMath v2 80.000%/56.098%. Corroborates band; no change.
- **Context window: 87/100.** 1M window; MRCRv2 85.4% (est.), AA-LCR 77.7% (measured).
- **Multimodal: 90/100.** Text/image/PDF in; multimodal lane #5/54 (91.2), CharXiv 89.9%, ScreenSpot Pro 87.9%, OfficeQA Pro 66.2%. Enrichment adds ExtractBench 86.84%, ParseBench 62.27%, ScreenSpot Pro 87.9%, CharXiv 89.9%, CharXiv w/o tools 80.5%, Design Arena 1256. Corroborates band; no change.
- **Coding: 80/100.** SWE-bench Verified 88.6%, SWE-bench Pro 69.2%, LiveCodeBench Vals 87.8%, coding lane #19/150 (60.7). Enrichment adds AA-SciCode 54.4%, AA Coding Index not individually reported, PostTrainBench 32.9%, FrontierCode 2.0 14.7%, ExtractBench 86.84%, ParseBench 62.27%. Corroborates band; no change.
- **Cost efficiency: 75/100.** Paid $5/$25 per 1M.
- **Overall Score: 84.2/100.** Mean of five quality dims (BenchLM aggregate 69.99); best-fit for agentic coding + multimodal at mid cost (superseded by Opus 5). Enrichment (2026-11-08) added new verified rows (AA Intelligence 41.8%; AA-GPQA 92.0%; AA-HLE 48.7%; AA-SciCode 54.4%; CritPt 20.9%; AA-LCR 77.7%; ARC-AGI 92.5%/72.1%/1.5%; GPQA 93.6%; HLE 57.9%; FrontierMath 80.0%/56.1%; SWE-bench Verified 88.6%; SWE-bench Pro 69.2%; LiveCodeBench Vals 87.8%; Terminal-Bench 2.1 74.6%; Terminal-Bench 3.0 21.1%; OSWorld-Verified 83.4%; OSWorld 2.0 20.6%; BrowseComp 84.3%; DeepSearchQA 93.1%; MCP Atlas 82.2%; Toolathlon 59.9%; MMMU-Pro 74.4% (est.); CharXiv 89.9%; ScreenSpot Pro 87.9%; OfficeQA Pro 66.2%; MRCRv2 85.4% (est.); AA-LCR 77.7%; AA-Omniscience 28.8%/48.8%/39.3%; AA-IFBench 62.2%; INCLUDE 87.6%; USAMO 96.7%; FrontierMath v2 80.000%/56.098%; ExtractBench 86.84%; ParseBench 62.27%). No dimension band moved; Overall unchanged at 84.2.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-22 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Claude Opus 4.8](https://benchlm.ai/models/claude-opus-4-8)
  - [Artificial Analysis — Claude Opus 4.8](https://artificialanalysis.ai/models/claude-opus-4-8)
  - [Anthropic — Claude Opus 4.8](https://www.anthropic.com/news/claude-opus-4-8)
  - [Claude Opus 4.8 system card](https://cdn.sanity.io/files/4zrzovbb/website/c886650a2e96fc0925c805a1a7ca77314ccbf4a6.pdf)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).