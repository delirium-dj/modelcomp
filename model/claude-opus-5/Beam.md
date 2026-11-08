# Claude Opus 5 — findings by Beam

- Source: Anthropic/Claude Opus 5, `anthropic/claude-opus-5`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-22)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's daily-driver Opus (Jul 24, 2026): close to Fable 5 frontier intelligence at half the price; SOTA on Frontier-Bench and GDPval-AA; efficient multi-step agent. Default on Claude Max, strongest on Claude Pro.
- **Provider / access:** Anthropic API `claude-opus-5`; OpenRouter; AWS Bedrock.
- **Release / knowledge:** Released 2026-07-24; knowledge cutoff not stated.
- **IDs:** `anthropic/claude-opus-5`
- **Context window:** not published in sources (BenchLM lists null); max output not stated. (Treat as 200K-class pending verification.)
- **Modalities:** text, image, file in; text out; reasoning yes (adaptive thinking); tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** $5.00 / 1M input, $25.00 / 1M output; paid. Fast mode 2.5x speed at 2x price.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agentic public-lane (BenchLM): **78.5** (#3/128)
- Terminal-Bench 2.1 (Vals): **84.6%**
- OSWorld 2.0: **70.6%**
- BrowseComp: **90.8%**; DeepSearchQA: **95.0%**
- MCP Atlas: **85.8%**; MCP-Atlas claim coverage: **89.1%**
- Toolathlon-Verified: **80.6%**; Pass@3 87.0%; Pass³ 73.1%; avg turns 23.5
- AutomationBench: **26.0%**
- ApprenticeBench: **36%**; MazeBench: **12%**
- GDPval-AA: **1708 Elo** (Opus 5.5 cites Opus 5 1708); normalized **61.1%**
- Terminal-Bench 3.0: **42.7%** (Terminal-Bench 3.0 leaderboard)
- DRACO: **88.6%** (Anthropic)
- BrowseComp (10-agent, prerelease): **93.6%** (Anthropic)
- OSWorld 2.0: **70.6%** (Anthropic)
- MCP Atlas: **85.8%** (Anthropic)
- MCP-Atlas claim coverage: **89.1%** (Anthropic)
- LAB all-pass (Anthropic harness): **23.58%**; LAB criterion-pass (Anthropic harness): **93.74%**
- LAB all-pass (Harvey held-out): **11.7%**; LAB criterion-pass (Harvey held-out): **94.1%**
- Toolathlon-Verified: **80.6%** (Anthropic)
- Toolathlon Verified Pass@3: **87.0%**; Pass³: **73.1%**; avg turns: **23.5** (Anthropic)
- AutomationBench: **26.0%** (Anthropic)
- GDPval-AA: **1708 Elo** (Anthropic); normalized **61.1%** (Artificial Analysis)
- AA Briefcase: **1720** (Anthropic)
- AA Harvey LAB v1.0: **93.5%** (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **84.6%** (Vals AI)
- AA Agentic Index: **56.2%** (Artificial Analysis)
- AA-AnalystAgent: **53.8%** (Artificial Analysis)
- ApprenticeBench: **36%** (NeoCognition)
- MazeBench: **12%** (MazeBench)
- AA EnterpriseOps-Gym: **47.5%** (Artificial Analysis)
- aaTerminalBench21: **89.1%** (Artificial Analysis)
- OSWorld 2.1: **74.0%** (Anthropic)
- DeepsecBench-AA: **25.9%** (Artificial Analysis)

Reasoning / knowledge:

- HLE w/ tools: **64.7%**
- FrontierMath v2 (Tiers 1-3): **85.614%**; Tier 4: **73.171%**
- MMLU-Pro (Vals): **91.6%**
- ARC-AGI / GPQA: no verified public score found
- Artificial Analysis Intelligence Index: **50.8%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **93.2%** (Artificial Analysis)
- AA-HLE: **54.9%** (Artificial Analysis)
- AA-SciCode: **56.4%** (measured)
- HLE **64.7%** (measured); HLE w/ tools **64.7%** (measured); HLE w/o tools **56.3%** (measured)
- GPQA Diamond **94.0%** (est.); GPQA **94.0%** (est.)
- ARC-AGI-1 **97.5%** (measured); ARC-AGI-2 **90.4%** (measured); ARC-AGI-3 **30.2%** (measured)
- MMLU-Pro **86.0%** (est.); MMLU **90.3%** (est.)
- AA-MMMU-Pro **84.7%** (measured); CharXiv **88.1%** (est.)
- MRCRv2 **85.7%** (est.); AA-LCR **79.3%** (measured)
- GDPval-AA **61.1%** (measured); AA Coding Index **78.0%** (measured); AA Agentic Index **56.2%** (measured)
- CritPt: **29.1%** (Artificial Analysis)
- AA-LCR: **79.3%** (Artificial Analysis)
- HLE-Verified: **54.4%** (Google)
- LABBench2: **84.2%** (Google)
- HealthBench (raw): 67.1%; (length-adjusted): 57.8%; Professional: 59.8%; Professional (raw): 73.4%
- BioMysteryBench (human-solvable): 90.1%; (human-difficult): 49.4%
- SpatialBench Verified: 72.5%; SingleCellBench: 60.6%; ProteinGym Hard: 47.7%; Protein Design: 42.5%; Organic chemistry V2: 61.6%; Protocols (troubleshooting): 61.1%; Protocols (understanding): 78.4%
- AA-Omniscience Index: **37.1%**
- AA-Omniscience Accuracy: **60.9%**
- AA-Omniscience Hallucination Rate: **60.8%**
- GPQA Diamond (Vals): **93.4%** (Vals AI)
- MMLU-Pro (Vals): **91.6%** (Vals AI)

Coding:

- SWE-bench Verified: **96%**
- SWE-bench Pro: **79.2%**
- CursorBench 3.2: **70.0%**
- LiveCodeBench (Vals): **89.0%**
- Vibe Code Bench: not individually reported (coding lane 70.7)
- Bug Hunt Bench: **27.0 fixes**
- ScarfBench: **69.8%** (Kaggle)
- Bug Hunt Bench: **27.0 fixes** (Bug Hunt Bench)
- SWE-bench Verified: **96%** (Anthropic)
- SWE-bench Pro: **79.2%** (Anthropic)
- SWE Multilingual: **89.5%** (Anthropic)
- SWE Multimodal: **59.4%** (Anthropic)
- DeepSWE: **68.8%** (Anthropic)
- FrontierCode 1.1 Main: **53.4%** (Anthropic)
- FrontierCode 1.1 Extended: **63.6%** (Anthropic)
- FrontierSWE v2: **52.0%** (Proximal)
- ProgramBench: **93.0%** (Anthropic)
- CursorBench 3.2: **70.0%** (Cursor)
- VulcanBench v3: **87.0%** (VulcanBench)
- AA Coding Index: **78.0%** (Anthropic)
- AA-SciCode: **56.4%** (Artificial Analysis)
- VulcanBench CII v1: **96.4%** (VulcanBench)
- LiveCodeBench (Vals): **89.0%** (Vals AI)
- SWE-bench (Vals): **97.0%** (Vals AI)
- CursorBench 4.0: **46.6%** (Cursor)
- PostTrainBench v1.1: **35.0%** (PostTrainBench)
- FrontierCode 2.0: **26.7%** (Cognition)

Long context:

- Context window not published in sources; MRCR: no verified public score found.
- MRCRv2 **85.7%** (est.); AA-LCR **79.3%** (measured).

Multimodal:

- AA-MMMU-Pro **84.7%** (measured); CharXiv **88.1%** (est.).
- Chartography (no tools): **29.6%**; (tools): **83.0%** (Anthropic)
- BenchCAD Vision2Code (no tools): **0.366**; (tools): **0.821** (Anthropic)
- GDP.pdf (no tools): **83.4%**; (tools): **85.5%** (Anthropic)
- OfficeQA: **78.1%**; OfficeQA Pro: **66.9%** (Anthropic)
- AA-MMMU-Pro: **84.7%** (Artificial Analysis)
- Design Arena Website: **1307** (OpenRouter)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 90/100.** Agentic lane #3/128 (78.5), BrowseComp 90.8%, DeepSearchQA 95%, MCP Atlas 85.8%, Terminal-Bench 2.1 Vals 84.6%, Toolathlon-Verified 80.6%; caps at AutomationBench 26% and ApprenticeBench 36%. Enrichment (2026-11-08): added Terminal-Bench 3.0 42.7%, DRACO 88.6%, BrowseComp (10-agent) 93.6%, OSWorld 2.0 70.6%, MCP Atlas 85.8%, MCP-Atlas claim coverage 89.1%, LAB all-pass 23.58%, LAB criterion-pass 93.74%, LAB all-pass Harvey held-out 11.7%, LAB criterion-pass Harvey held-out 94.1%, Toolathlon Verified Pass@3 87.0%, Pass³ 73.1%, avg turns 23.5, AutomationBench 26.0%, GDPval-AA 61.1% normalized/1708 Elo, AA Briefcase 1720, AA Harvey LAB 93.5%, Terminal-Bench 2.1 Vals 84.6%, AA Agentic Index 56.2%, AA-AnalystAgent 53.8%, ApprenticeBench 36%, MazeBench 12%, AA EnterpriseOps-Gym 47.5%, aaTerminalBench21 89.1%, OSWorld 2.1 74.0%, DeepsecBench 25.9%. Corroborates band; no change.
- **Reasoning: 90/100.** HLE 64.7%, ARC-AGI-2 90.4%, FrontierMath Tier4 73.2%, MMLU-Pro 86.0%; (GPQA 94.0% est.); caps at no published GPQA Diamond official. Enrichment adds CritPt 29.1%, AA-LCR 79.3%, HLE-Verified 54.4%, LABBench2 84.2%, HealthBench rows, BioMysteryBench rows, SpatialBench 72.5%, SingleCellBench 60.6%, ProteinGym Hard 47.7%, Protein Design 42.5%, Organic chemistry 61.6%, Protocols rows, AA Intelligence 50.8%, AA-GPQA 93.2%, AA-HLE 54.9%, AA-Omniscience 37.1%/60.9%/60.8%, GPQA Diamond Vals 93.4%, MMLU-Pro Vals 91.6%. Corroborates band; no change.
- **Context window: 80/100.** Context size not published in sources; MRCRv2 85.7% (est.), AA-LCR 79.3% (measured).
- **Multimodal: 86/100.** Text/image/file in; AA-MMMU-Pro 84.7% (measured), CharXiv 88.1% (est.). Enrichment adds Chartography (no tools) 29.6%/(tools) 83.0%, BenchCAD 0.366/0.821, GDP.pdf (no tools) 83.4%/(tools) 85.5%, OfficeQA 78.1%, OfficeQA Pro 66.9%, AA-MMMU-Pro 84.7%, Design Arena 1307. Corroborates band; no change.
- **Coding: 88/100.** SWE-bench Verified 96%, SWE-bench Pro 79.2%, LiveCodeBench Vals 89.0%, CursorBench 70.0%; coding lane #9/150 (70.7). Enrichment adds ScarfBench 69.8%, Bug Hunt 27.0 fixes, SWE-bench Verified 96%, SWE-bench Pro 79.2%, SWE Multilingual 89.5%, SWE Multimodal 59.4%, DeepSWE 68.8%, FrontierCode 1.1 Main 53.4%, Extended 63.6%, FrontierSWE v2 52.0%, ProgramBench 93.0%, CursorBench 3.2 70.0%, VulcanBench v3 87.0%, AA Coding Index 78.0%, AA-SciCode 56.4%, VulcanBench CII v1 96.4%, LiveCodeBench Vals 89.0%, SWE-bench Vals 97.0%, CursorBench 4.0 46.6%, PostTrainBench 35.0%, FrontierCode 2.0 26.7%. Corroborates band; no change.
- **Cost efficiency: 75/100.** Paid at $5/$25 per 1M.
- **Overall Score: 86.8/100.** Mean of five quality dims (BenchLM aggregate 79.61); best-fit for daily agentic coding + knowledge work. Enrichment (2026-11-08) added new verified rows (Terminal-Bench 3.0 42.7%; DRACO 88.6%; BrowseComp (10-agent) 93.6%; OSWorld 2.0 70.6%; MCP Atlas 85.8%; MCP-Atlas claim coverage 89.1%; LAB all-pass 23.58%; LAB criterion-pass 93.74%; LAB all-pass Harvey held-out 11.7%; LAB criterion-pass Harvey held-out 94.1%; Toolathlon Verified Pass@3 87.0%; Pass³ 73.1%; avg turns 23.5; AutomationBench 26.0%; GDPval-AA 61.1% normalized/1708 Elo; AA Briefcase 1720; AA Harvey LAB 93.5%; Terminal-Bench 2.1 Vals 84.6%; AA Agentic Index 56.2%; AA-AnalystAgent 53.8%; ApprenticeBench 36%; MazeBench 12%; AA EnterpriseOps-Gym 47.5%; aaTerminalBench21 89.1%; OSWorld 2.1 74.0%; DeepsecBench 25.9%; CritPt 29.1%; AA-LCR 79.3%; HLE-Verified 54.4%; LABBench2 84.2%; HealthBench rows; BioMysteryBench rows; SpatialBench 72.5%; SingleCellBench 60.6%; ProteinGym Hard 47.7%; Protein Design 42.5%; Organic chemistry 61.6%; Protocols rows; AA Intelligence 50.8%; AA-GPQA 93.2%; AA-HLE 54.9%; AA-Omniscience 37.1%/60.9%/60.8%; GPQA Diamond Vals 93.4%; MMLU-Pro Vals 91.6%; ScarfBench 69.8%; Bug Hunt 27.0 fixes; SWE-bench Verified 96%; SWE-bench Pro 79.2%; SWE Multilingual 89.5%; SWE Multimodal 59.4%; DeepSWE 68.8%; FrontierCode 1.1 Main 53.4%; Extended 63.6%; FrontierSWE v2 52.0%; ProgramBench 93.0%; CursorBench 3.2 70.0%; VulcanBench v3 87.0%; AA Coding Index 78.0%; AA-SciCode 56.4%; VulcanBench CII v1 96.4%; LiveCodeBench Vals 89.0%; SWE-bench Vals 97.0%; CursorBench 4.0 46.6%; PostTrainBench 35.0%; FrontierCode 2.0 26.7%; Chartography (no tools) 29.6%/(tools) 83.0%; BenchCAD 0.366/0.821; GDP.pdf (no tools) 83.4%/(tools) 85.5%; OfficeQA 78.1%; OfficeQA Pro 66.9%; AA-MMMU-Pro 84.7%; Design Arena 1307). No dimension band moved; Overall unchanged at 86.8.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-22 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Claude Opus 5](https://benchlm.ai/models/claude-opus-5)
  - [Artificial Analysis — Claude Opus 5](https://artificialanalysis.ai/models/claude-opus-5)
  - [Anthropic — Claude Opus 5](https://www.anthropic.com/news/claude-opus-5)
  - [Claude Opus 5 system card](https://www-cdn.anthropic.com/c5fbac3f0b1280a933ebd26d3cb8bb9f5bdeaf48/Claude%20Opus%205%20System%20Card.pdf)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).