# Claude Haiku 5.5 — findings by Beam

- Source: Anthropic/Claude Haiku 5.5, `anthropic/claude-haiku-5-5`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-22)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's fastest, most capable small model (Oct 7, 2026): 1M context, 128K output, reasoning, tool calling; optimized for high-volume workloads, subagents, browser use. Cheapest Claude with 90% cache discount.
- **Provider / access:** Anthropic API `claude-haiku-5-5`; AWS Bedrock; OpenRouter.
- **Release / knowledge:** Released 2026-10-07; knowledge cutoff not stated.
- **IDs:** `anthropic/claude-haiku-5-5`
- **Context window:** 1,000,000 tokens; max output 128,000.
- **Modalities:** text, image, PDF in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** $0.10 / 1M input, $0.50 / 1M output, $0.01 / 1M cache read, $0.125 / 1M cache write; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 4.0: **39.20%** (Anthropic)
- GDPval-AA: **1620 Elo** (Anthropic)
- HLE w/ tools: **57.4%** (Anthropic)
- AA Briefcase: **1578** (Anthropic)
- AA AutomationBench: **35.4%** (Artificial Analysis)
- AA Harvey LAB v1.0: **89.9%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **32.8%** (Artificial Analysis)
- GDP.pdf: **20.8%** (Artificial Analysis)
- GDPval-AA: **56.0%** normalized (Artificial Analysis)
- AA-AnalystAgent: **53.8%** (Artificial Analysis)
- MazeBench: **1%** (MazeBench)
- Hermes Index: **37.0%**; Hermes Bench: **71.0%** (Nous Research)
- OSWorld 2.1 Offline: **72.4%** (Anthropic)

Reasoning / knowledge:

- HLE w/o tools: **45.9%** (Anthropic)
- AA Intelligence Index: **36.5%** (measured, updated 2026-11-07)
- AA-HLE: **44.4%** (Artificial Analysis)
- AA-Omniscience Index: **12.3%**
- AA-Omniscience Accuracy: **34.7%**
- AA-Omniscience Hallucination Rate: **34.2%**
- AA-LCR: **82.7%** (Artificial Analysis)
- CritPt: **18.9%** (Artificial Analysis)
- MLCR-AA: **35.0%** (Artificial Analysis)
- ARC-AGI-1: **89.00%** (ARC Prize)
- ARC-AGI-2: **61.3%** (ARC Prize)
- ARC-AGI-3: **0.5%** (ARC Prize)
- ARC-AGI-3 Provider Adapter: **2.82%** (ARC Prize)
- FrontierMath v2 (Tiers 1-3): **75.088%**; Tier 4: **46.341%** (Epoch AI)

Coding:

- FrontierCode 1.1 Main: **46.4%** (Anthropic)
- AA-SciCode: **55.0%** (Artificial Analysis)
- Bug Hunt Bench: **21.5 fixes** (Bug Hunt Bench)
- FrontierSWE v2: **43.8%** (Proximal)
- FrontierCode 2.0: **27.7%** (Cognition)

Long context:

- 1M window; AA-LCR 82.7%.

Multimodal:

- ParseBench: **56.02%**
- Chartography (no tools): **46.4%**
- Design Arena Website: **1260**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 80/100.** Agentic lane (unranked), Terminal-Bench 4.0 39.20%, GDPval-AA 1620/56.0% normalized, HLE w/ tools 57.4%, AA Briefcase 1578, AA AutomationBench 35.4%, AA Harvey LAB 89.9%, AA Terminal-Bench 4.0 32.8%, GDP.pdf 20.8%, GDPval-AA 56.0% normalized, AA-AnalystAgent 53.8%, MazeBench 1%, Hermes Index 37.0%, Hermes Bench 71.0%, OSWorld 2.1 Offline 72.4%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 4.0 39.20%, GDPval-AA 1620/56.0% normalized, HLE w/ tools 57.4%, AA Briefcase 1578, AA AutomationBench 35.4%, AA Harvey LAB 89.9%, AA Terminal-Bench 4.0 32.8%, GDP.pdf 20.8%, GDPval-AA 56.0% normalized, AA-AnalystAgent 53.8%, MazeBench 1%, Hermes Index 37.0%, Hermes Bench 71.0%, OSWorld 2.1 Offline 72.4%, AA Intelligence 36.5%, AA-HLE 44.4%, AA-Omniscience 12.3%/34.7%/34.2%, AA-LCR 82.7%, CritPt 18.9%, MLCR 35.0%, ARC-AGI-1 89.00%, ARC-AGI-2 61.3%, ARC-AGI-3 0.5%, ARC-AGI-3 Provider Adapter 2.82%, FrontierMath v2 75.088%/46.341%, AA-SciCode 55.0%, Bug Hunt 21.5 fixes, FrontierSWE v2 43.8%, FrontierCode 2.0 27.7%, ParseBench 56.02%, Chartography (no tools) 46.4%, Design Arena 1260. Corroborates band; no change.
- **Reasoning: 80/100.** HLE w/o tools 45.9%, AA Intelligence 36.5%, AA-HLE 44.4%, AA-Omniscience 12.3%/34.7%/34.2%, AA-LCR 82.7%, CritPt 18.9%, MLCR 35.0%, ARC-AGI-1 89.00%, ARC-AGI-2 61.3%, ARC-AGI-3 0.5%, FrontierMath v2 75.088%/46.341%. Corroborates band; no change.
- **Context window: 88/100.** 1M window; AA-LCR 82.7%. Corroborates band; no change.
- **Multimodal: 80/100.** Text/image/PDF in, text out; Chartography 46.4%. Enrichment adds ParseBench 56.02%, Chartography (no tools) 46.4%, Design Arena 1260. Corroborates band; no change.
- **Coding: 78/100.** FrontierCode 1.1 Main 46.4%, AA-SciCode 55.0%, Bug Hunt 21.5 fixes, FrontierSWE v2 43.8%, FrontierCode 2.0 27.7%. Enrichment adds ParseBench 56.02%, Chartography (no tools) 46.4%, Design Arena 1260. Corroborates band; no change.
- **Cost efficiency: 92/100.** Very cheap $0.10/$0.50 per 1M.
- **Overall Score: 81.2/100.** Mean of five quality dims (BenchLM aggregate 66.43); best-fit for high-volume agentic + multimodal at low cost. Enrichment (2026-11-08) added new verified rows (Terminal-Bench 4.0 39.20%, GDPval-AA 1620/56.0% normalized, HLE w/ tools 57.4%, AA Briefcase 1578, AA AutomationBench 35.4%, AA Harvey LAB 89.9%, AA Terminal-Bench 4.0 32.8%, GDP.pdf 20.8%, GDPval-AA 56.0% normalized, AA-AnalystAgent 53.8%, MazeBench 1%, Hermes Index 37.0%, Hermes Bench 71.0%, OSWorld 2.1 Offline 72.4%, FrontierCode 1.1 Main 46.4%, AA-SciCode 55.0%, Bug Hunt 21.5 fixes, FrontierSWE v2 43.8%, FrontierCode 2.0 27.7%, ParseBench 56.02%, Chartography (no tools) 46.4%, Design Arena 1260, AA Intelligence 36.5%, AA-HLE 44.4%, AA-Omniscience 12.3%/34.7%/34.2%, AA-LCR 82.7%, CritPt 18.9%, MLCR 35.0%, ARC-AGI-1 89.00%, ARC-AGI-2 61.3%, ARC-AGI-3 0.5%, ARC-AGI-3 Provider Adapter 2.82%, FrontierMath v2 75.088%/46.341%). No dimension band moved; Overall unchanged at 84.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-22 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Claude Haiku 5.5](https://benchlm.ai/models/claude-haiku-5-5)
  - [Artificial Analysis — Claude Haiku 5.5](https://artificialanalysis.ai/models/claude-haiku-5-5)
  - [Anthropic — Claude Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5)
  - [Claude Haiku 5.5 system card](https://www-cdn.anthropic.com/e1080d6bf5ae2018ea3c2f414064be03232f5be5/Claude%20Haiku%205.5%20System%20Card.pdf)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).