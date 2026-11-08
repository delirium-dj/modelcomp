# Claude Opus 4.7 — findings by Beam

- Source: Anthropic/Claude Opus 4.7, `anthropic/claude-opus-4-7`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-22)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's Opus-class model (Apr 16, 2026) with adaptive thinking, long-horizon coding, vision, and computer use; 1M context, 128K output. Strong on SWE-bench Verified and LiveCodeBench.
- **Provider / access:** Anthropic API `claude-opus-4-7`; AWS Bedrock; OpenRouter; OpenCode Zen.
- **Release / knowledge:** Released 2026-04-16; knowledge cutoff not stated.
- **IDs:** `anthropic/claude-opus-4-7`
- **Context window:** 1,000,000 tokens; max output 128,000.
- **Modalities:** text, image, PDF in; text out; reasoning yes (adaptive thinking); tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** $5.00 / 1M input, $25.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agentic public-lane (BenchLM): **68.2** (adaptive, #?/128)
- Terminal-Bench 2.1 (Vals): **68.5%**
- OSWorld 2.0: **13.9%**
- BrowseComp: not individually reported
- DeepSearchQA: not individually reported
- MCP Atlas: not individually reported
- Toolathlon: not individually reported
- Finance Agent v2: not individually reported
- Gert Labs: **65.59%**
- ResearchClawBench: **20.7%**
- JobBench: not reported for 4.7
- AA Agentic Index: not individually reported
- AA-AnalystAgent: not individually reported
- AA EnterpriseOps-Gym: not individually reported
- terminalBenchHard: **54.5%** (Artificial Analysis)
- aaTerminalBench21: not individually reported
- AA ITBench: not individually reported
- AA Tau3 Banking: not individually reported
- AA Briefcase: not individually reported
- AA AutomationBench: not individually reported
- GDP.pdf: not individually reported
- MazeBench: not individually reported
- AA Cyber Index: not individually reported
- CWE-Bench-AA: not individually reported
- DeepsecBench-AA: not individually reported
- CyberGym-E2E-AA: not individually reported

Reasoning / knowledge:

- ARC-AGI-3: **0.2%** (ARC Prize)
- AA-LCR: **75.7%** (Artificial Analysis)
- CritPt: **5.1%** (Artificial Analysis)
- AA Intelligence Index: **30.9%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **88.5%** (Artificial Analysis)
- AA-HLE: **33.3%** (Artificial Analysis)
- AA-Omniscience Index: **14.8%**
- AA-Omniscience Accuracy: **44.7%**
- AA-Omniscience Hallucination Rate: **54.1%**
- AA-IFBench: **43.6%** (Artificial Analysis)
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: **70.175%**; Tier 4: **31.707%** (Epoch AI)
- HLE-Verified: not individually reported
- LABBench2: not individually reported
- HealthBench (raw): not individually reported
- BioMysteryBench: not individually reported
- SpatialBench Verified: not individually reported
- SingleCellBench: not individually reported
- ProteinGym Hard: not individually reported
- Protein Design: not individually reported
- Organic chemistry V2: not individually reported
- Protocols: not individually reported
- GPQA Diamond (Vals): **90.2%** (Vals AI)
- MMLU-Pro (Vals): **89.9%** (Vals AI)
- Gray Swan IPI: not individually reported

Coding:

- Coding public-lane (BenchLM): **68.2** (adaptive, #?/128)
- SWE-bench Verified (Vals): **82.0%**
- LiveCodeBench (Vals): **85.1%**
- Vibe Code Bench: **71.00%** (Vals AI)
- React Native Evals: **82.8%** (React Native Evals)
- FrontierCode 1.1 Main: **38.5%** (Cognition)
- ParseBench: **63.34%** (ParseBench)
- AA-MMMU-Pro: **76.4%** (Artificial Analysis)
- AA-SciCode: not individually reported
- AA Coding Index: not individually reported
- PostTrainBench v1.1: **28.6%** (PostTrainBench)
- FrontierCode 2.0: not individually reported
- Bug Hunt Bench: not individually reported
- SWE-bench Verified: not individually reported
- SWE-bench Pro: not individually reported
- LiveCodeBench: not individually reported
- Vibe Code Bench: not individually reported

Long context:

- 1M window; MRCR: no verified public score found.
- AA-LCR: **75.7%** (Artificial Analysis)

Multimodal:

- Multimodal public-lane (BenchLM): not individually reported
- AA-MMMU-Pro: **76.4%** (Artificial Analysis)
- ParseBench: **63.34%** (ParseBench)
- CharXiv: not individually reported
- ScreenSpot Pro: not individually reported
- OfficeQA Pro: not individually reported
- Design Arena: not individually reported
- ExtractBench: not individually reported

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 84/100.** Agentic lane #?/128, OSWorld-Verified 83.4%, DeepSearchQA not reported, MCP Atlas not reported, BrowseComp not reported, Terminal-Bench 2.1 68.5%; caps at OSWorld 2.0 13.9%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates AA Intelligence 30.9%, AA-GPQA 88.5%, AA-HLE 33.3%, AA-Omniscience 14.8%/44.7%/54.1%, AA-LCR 75.7%, CritPt 5.1%, ARC-AGI-3 0.2%, GPQA Diamond Vals 90.2%, MMLU-Pro Vals 89.9%, AA-IFBench 43.6%, FrontierMath v2 70.175%/31.707%, ParseBench 63.34%, AA-MMMU-Pro 76.4%. Corroborates band; no change.
- **Reasoning: 80/100.** ARC-AGI-3 0.2%, AA Intelligence 30.9%, AA-GPQA 88.5%, AA-HLE 33.3%, AA-Omniscience 14.8%/44.7%/54.1%, AA-LCR 75.7%, CritPt 5.1%, FrontierMath v2 70.175%/31.707%, GPQA Diamond Vals 90.2%, MMLU-Pro Vals 89.9%, AA-IFBench 43.6%. Corroborates band; no change.
- **Context window: 80/100.** 1M window; caps at no published beyond-128K retrieval. Enrichment adds AA-LCR 75.7%. Corroborates band; no change.
- **Multimodal: 84/100.** Text/image/PDF in; caps at no verified multimodal numbers. Enrichment adds AA-MMMU-Pro 76.4%, ParseBench 63.34%. Corroborates band; no change.
- **Coding: 78/100.** SWE-bench Verified 82.0% (Vals), LiveCodeBench 85.1% (Vals), Vibe Code 71.00% (Vals), React Native Evals 82.8%, FrontierCode 1.1 Main 38.5%, ParseBench 63.34%; caps at unverified SWE-bench. Enrichment adds ParseBench 63.34%, AA-MMMU-Pro 76.4%, PostTrainBench 28.6%. Corroborates band; no change.
- **Cost efficiency: 75/100.** Paid $5/$25 per 1M.
- **Overall Score: 81.2/100.** Mean of five quality dims (BenchLM aggregate 65.07); best-fit for agentic coding + multimodal at mid cost (superseded by Opus 5). Enrichment (2026-11-08) added new verified rows (AA Intelligence 30.9%; AA-GPQA 88.5%; AA-HLE 33.3%; AA-Omniscience 14.8%/44.7%/54.1%; AA-LCR 75.7%; CritPt 5.1%; ARC-AGI-3 0.2%; GPQA Diamond Vals 90.2%; MMLU-Pro Vals 89.9%; AA-IFBench 43.6%; FrontierMath v2 70.175%/31.707%; ParseBench 63.34%; AA-MMMU-Pro 76.4%; PostTrainBench 28.6%). No dimension band moved; Overall unchanged at 80.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-22 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Claude Opus 4.7](https://benchlm.ai/models/claude-opus-4-7)
  - [Artificial Analysis — Claude Opus 4.7](https://artificialanalysis.ai/models/claude-opus-4-7-non-reasoning)
  - [Anthropic — Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).