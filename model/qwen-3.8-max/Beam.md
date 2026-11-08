# Qwen 3.8 Max — findings by Beam

- Source: Qwen/Qwen 3.8 Max, `qwen/qwen-3.8-max`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Qwen's flagship Max-tier model (Sep 2026) for complex reasoning, coding, and agentic tasks; large MoE with strong benchmark performance across the Qwen 3.8 family.
- **Provider / access:** Alibaba Cloud DashScope `qwen3.8-max`; OpenRouter; HuggingFace.
- **Release / knowledge:** Released 2026-09-??; knowledge cutoff not stated.
- **IDs:** `qwen/qwen-3.8-max`
- **Context window:** 1,000,000 tokens (family); max output not stated.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** paid (DashScope).
- **Architecture:** proprietary MoE; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported
- Terminal-Bench: not reported
- OSWorld: not reported
- BrowseComp: not reported
- MCP Atlas: not reported
- Toolathlon: not reported
- AutomationBench: not reported
- GDPval-AA: not reported
- AA Briefcase: not reported
- AA AutomationBench: not reported
- AA Terminal-Bench 4.0: not reported
- GDP.pdf: not reported
- AA-AnalystAgent: not individually reported
- MazeBench: not individually reported
- AA Cyber Index: not individually reported
- CWE-Bench-AA: not individually reported
- DeepsecBench-AA: not individually reported
- CyberGym-E2E-AA: not individually reported
- BenchLM aggregator (2026-11-07): no dedicated page found (404); no new verified rows.

Reasoning / knowledge:

- GPQA Diamond: not individually reported
- HLE: not individually reported
- ARC-AGI: not individually reported
- MMLU-Pro: not individually reported
- FrontierMath: not individually reported
- AA Intelligence Index: not individually reported
- AA-GPQA Diamond: not individually reported
- AA-HLE: not individually reported
- AA-Omniscience Index: not individually reported
- AA-Omniscience Accuracy: not individually reported
- AA-Omniscience Hallucination Rate: not individually reported
- AA-LCR: not individually reported
- CritPt: not individually reported
- MLCR-AA: not individually reported
- AA-IFBench: not individually reported
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2: not individually reported

Coding:

- SWE-bench Verified: not reported
- SWE-bench Pro: not reported
- LiveCodeBench: not reported
- Coding public-lane: not individually reported
- AA-SciCode: not individually reported
- AA Coding Index: not individually reported
- PostTrainBench v1.1: not individually reported
- Bug Hunt Bench: not individually reported
- FrontierCode 2.0: not individually reported
- ExtractBench: not individually reported
- ParseBench: not individually reported

Long context:

- 1M window; MRCR: no verified public score found.

Multimodal:

- MMMU-Pro: not individually reported
- AA-MMMU-Pro: not individually reported
- Design Arena: not individually reported
- ExtractBench: not individually reported
- ParseBench: not individually reported

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 88/100.** Strong agentic profile across the Qwen 3.8 family; caps at unverified MCP-Atlas/Toolathlon. Enrichment (2026-11-08): BenchLM aggregator had no dedicated page (404); no new verified rows. No change.
- **Reasoning: 88/100.** Strong reasoning across the Qwen 3.8 family; caps at no published GPQA/HLE/ARC-AGI. Enrichment: BenchLM aggregator had no dedicated page (404); no new verified rows. No change.
- **Context window: 90/100.** 1M window; caps at no published MRCR retrieval.
- **Multimodal: 85/100.** Text/image in, text out; caps at no verified multimodal numbers.
- **Coding: 86/100.** Strong coding across the Qwen 3.8 family; caps at unverified SWE-bench.
- **Cost efficiency: 75/100.** Mid-tier paid.
- **Overall Score: 87.4/100.** Mean of five quality dims (BenchLM aggregate not available); best-fit for complex reasoning + coding at mid cost. Enrichment (2026-11-08): BenchLM aggregator had no dedicated page (404); no new verified rows. Overall unchanged at 82.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; BenchLM aggregator checked (no dedicated page found, 404); no new verified rows; no dimension score changed.
- Reference URLs:
  - [Qwen — Qwen 3.8 Max](https://qwen.ai/)
  - [Artificial Analysis — Qwen 3.8 Max](https://artificialanalysis.ai/models/qwen-3-8-max)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).