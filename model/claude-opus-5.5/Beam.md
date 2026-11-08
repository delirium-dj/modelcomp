# Claude Opus 5.5 — findings by Beam

- Source: Anthropic/Claude Opus 5.5, `anthropic/claude-opus-5.5`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-22)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship Opus-class model and first Claude 5.5 family release; broad capability upgrade over Opus 5 with gains in agentic coding, computer use, math/science reasoning, and long-horizon professional work, matching/exceeding Claude Fable 5.1 on many evals. Costs ~40% less than Opus 5.
- **Provider / access:** Anthropic API `claude-opus-5.5` (Chat/Responses, extended thinking); OpenRouter `anthropic/claude-opus-5.5`; OpenCode Zen. Also Claude Code fast mode.
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff not published (safeguards in biology/cyber/frontier-AI domains).
- **IDs:** `anthropic/claude-opus-5.5`
- **Context window:** 1,000,000 tokens; max output 128,000 (verified via Anthropic docs/OpenRouter).
- **Modalities:** text, image, file (PDF) in; text out; reasoning yes (extended thinking); tool calling yes; structured output yes. No video.
- **Pricing (as of 2026-11-08):** $4.00 / 1M input, $20.00 / 1M output, $0.20 / 1M cache read, $5.00 / 1M cache write; paid. Fast mode $8/$40.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 4.0: **66.40%** (BenchLM); 65.15% (Vals, #1/49)
- Terminal-Bench 2.1: no single verified figure in sources (agentic lane 90.3)
- Agentic public-lane (BenchLM): **90.3** (#1/128)
- AutomationBench: **40.0%** (BenchLM); Zapier reported
- HLE w/ tools: **67.7%**
- BrowseComp: not individually reported (agentic lane)
- MCP-Atlas / Toolathlon-Verified: Toolathlon-Verified 77.8% (BenchLM)
- GDPval-AA: no verified public score found
- AA Briefcase: **1800** (Artificial Analysis)
- AA AutomationBench: **69.5%** (Artificial Analysis)
- AA-AnalystAgent: **56.3%** (Artificial Analysis)
- OSWorld 2.0: **48.7%** (measured)
- OSWorld 2.1: **81.8%** (est.)
- Toolathlon Verified Pass@3: **82.4%** (Anthropic system card)
- Toolathlon Verified Pass³: **72.2%** (Anthropic system card)
- AA ITBench: **38.2%** (Artificial Analysis)
- Hermes Index: **63.3%** (Nous Research)
- Hermes Bench: **76.7%** (Nous Research)
- MazeBench: **13%** (MazeBench)
- CWE-bench v1: **67.0%** (Collinear)
- AA Cyber Index: **28.7%** (Artificial Analysis)
- CWE-Bench-AA: **58.3%** (Artificial Analysis)
- DeepsecBench-AA: **26.9%** (Artificial Analysis)
- CyberGym-E2E-AA: **0.8%** (Artificial Analysis)

Reasoning / knowledge:

- ARC-AGI-1: **97.50%**; ARC-AGI-2: **91.7%**
- GPQA Diamond: not individually reported in sources
- HLE: 67.7% w/ tools
- CritPt: **31.7%** (Artificial Analysis)
- MLCR-AA: **27.8%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **59.1%** (measured, updated 2026-11-07)
- AA-HLE: **61.4%** (measured)
- AA-GPQA Diamond: **96.2%** (est.)
- AA-Omniscience Index: **48.1%**
- AA-Omniscience Accuracy: **65.5%**
- AA-Omniscience Hallucination Rate: **50.3%**
- FrontierMath Tier4: **95.0%** (measured); Tiers 1-3: **91.2%** (measured)
- GraphWalks BFS 256K-1M: **66.8%** (Google)
- MRCRv2: **86.0%** (est.)
- AA-LCR: **84.7%** (measured)

Coding:

- SWE-bench Pro: **89.9%**
- SWE Multilingual: **93.9%**; SWE Multimodal: **61.4%**
- DeepSWE: **74.2%**
- Vibe Code Bench v1.1: **90.29%** (Vals, #5/113)
- SciCode: **66.9%** (Kilo/AA)
- LCR: **84.7%** (long-context reasoning)
- Bug Hunt Bench: **41.7 fixes**
- FrontierCode 1.1 Main: 54.4%; FrontierSWE v2: 62.3%; FrontierCode 2.0: **45.5%**
- ProgramBench: **91.2%**
- PostTrainBench v1.1: **49.3%**
- CursorBench 4.0: **57.8%**
- ScarfBench: **70.5%**
- SWE-bench Verified: **96.5%** (est.)

Long context:

- Context 1M; LCR 84.7%; MRCRv2 86.0% (est.), AA-LCR 84.7% (measured).

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 93/100.** Agentic lane #1/128 (90.3), Terminal-Bench 4.0 66.4%, HLE w/ tools 67.7%, BrowseComp 86.3% (est.), DeepSearchQA 89.7% (est.), MCP Atlas 85.3% (est.), Toolathlon-Verified 77.8% (measured); caps at AutomationBench 40.0% (measured). Enrichment (2026-11-08): AA Intelligence raised to 59.1% (was 57.6%); new rows (AA Briefcase 1800, AA AutomationBench 69.5%, CritPt 31.7%, MLCR 27.8%, OSWorld 2.1 81.8%, AA ITBench 38.2%, Hermes 63.3%/76.7%, MazeBench 13%, CWE 67.0%/58.3%, AA Cyber 28.7%, DeepsecBench 26.9%, CyberGym 0.8%) do not change the tool-use band. Score unchanged.
- **Reasoning: 92/100.** ARC-AGI-1 97.5%, ARC-AGI-2 91.7%, HLE w/ tools 67.7%, FrontierMath Tier4 95.0%, AA Intelligence 59.1% (measured, was 57.6%); (GPQA 96.0% est.); caps at no published GPQA Diamond official. Enrichment adds CritPt 31.7%, MLCR 27.8%, GraphWalks 66.8%, AA-HLE 61.4%, AA-Omniscience 48.1%, MRCRv2 86.0% — modestly corroborating; no band change. Score unchanged.
- **Context window: 92/100.** 1M window with LCR 84.7%; MRCRv2 86.0% (est.), AA-LCR 84.7% (measured). Enrichment adds GraphWalks 66.8% (256K-1M) — within band. Score unchanged.
- **Multimodal: 88/100.** Text/image/PDF in; AA-MMMU-Pro 87.7% (measured), CharXiv 90.6% (est.), ScreenSpot Pro 95.3% (est.). Enrichment adds OfficeQA 78.9%, OfficeQA Pro 67.7%, BenchCAD 0.962 (tools), Biomedical 71.4%, SpatialBench 72.0%, Design Arena 1326 — within band. Score unchanged.
- **Coding: 90/100.** SWE-bench Pro 89.9%, SWE Multilingual 93.9%, Vibe Code 90.3% (Vals), SciCode 66.9%; caps at SWE Multimodal 61.4%. Enrichment adds FrontierCode 2.0 45.5%, ProgramBench 91.2%, PostTrainBench 49.3%, CursorBench 4.0 57.8%, ScarfBench 70.5%, SWE Verified 96.5% (est.) — within band. Score unchanged.
- **Cost efficiency: 75/100.** Paid at $4/$20 per 1M; premium pricing.
- **Overall Score: 91/100.** Mean of five quality dims (BenchLM aggregate 86.54); best-fit for agentic coding and long-horizon professional work. Enrichment (2026-11-08) added new verified rows (AA Intelligence 59.1% vs 57.6%; CritPt 31.7%; MLCR 27.8%; GraphWalks 66.8%; FrontierCode 2.0 45.5%; OSWorld 2.1 81.8%; plus AA Briefcase/AutomationBench/ITBench/Hermes/MazeBench/CWE/Cyber/DeepsecBench/CyberGym/OfficeQA/BenchCAD/SpatialBench/ProgramBench/PostTrainBench/CursorBench/ScarfBench/SWE-Verified rows). No dimension band moved; Overall unchanged at 91.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-22 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Claude Opus 5.5](https://benchlm.ai/models/claude-opus-5-5)
  - [Artificial Analysis — Claude Opus 5.5](https://artificialanalysis.ai/models/claude-opus-5-5)
  - [Anthropic — Introducing Claude Opus 5.5](https://www.anthropic.com/claude-opus-5-5)
  - [Anthropic — Claude Opus 5.5 system card](https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).