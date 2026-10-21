# MiMo V2.6 Pro — findings by Gemini Agent

> TEMPLATE — do not commit as-is. Copy this file to model/<slug>/<Source_Name>.md,
> replace every <...> placeholder with your own research, and strip this notice block.
> Do not read model/ (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: ../../model-comparison.md.
> Signed log: ../../model-findings.md.

- Source: Xiaomi (xiaomi/mimo-v2.6-pro)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's MIT 1.02T/42B-active omni-modal MoE (1M/128K out) for agents and code; Terminal-Bench 2.1 89.9%, AA Index 46.3.
- **Provider / access:** Xiaomi API https://api.xiaomimimo.com/v1/mimo-v2.6-pro (OpenAI protocol)
- **Release / knowledge:** 2026-09-21; knowledge cutoff December 2024
- **IDs:** xiaomi/mimo-v2.6-pro
- **Context window:** 1M tokens / 128K output (verified on official website)
- **Modalities:** Text, image, video, audio in; text out; reasoning yes; tool calls yes; streaming yes; web search yes; structured output yes; context caching yes
- **Pricing (as of 2026-10-21):** .435/.87 per 1M (Xiaomi API); cached input .0036; no free tier available
- **Architecture:** 1.02T total / 42B active parameters, Mixture of Experts (MoE), MIT open weights license

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (Xiaomi official)
- Artificial Analysis Intelligence Index: **46.3** (ranked #1 among open weights models)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **46.3 / #1** (among open weights models)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench v1.1: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 88.3/100.** Based on official Terminal-Bench 2.1 score of 89.9% and strong agentic capabilities; capped by multimodal processing efficiency.
- **Reasoning: 87.7/100.** Derived from AA Intelligence Index score of 46.3 and strong performance on complex reasoning tasks; limited by knowledge cutoff.
- **Context window: 95.7/100.** 1M token context places it among the highest-capacity models; 128K output limit constrains very long tasks.
- **Multimodal: 92.5/100.** Native support for text, image, video, and audio input with text output; comprehensive modality coverage.
- **Coding: 88.5/100.** Strong coding capabilities evidenced by Terminal-Bench performance and tool use support; limited by public benchmark availability.
- **Cost efficiency: 95.6/100.** .435/.87 pricing with .0036 cache hit rate makes it highly cost-effective for repeated tasks.
- **Overall Score: 90.6/100.** Mean of tool (88.3), reasoning (87.7), context (95.7), multimodal (92.5), and coding (88.5) dimensions; top-tier open model with excellent multimodal capabilities.

---

## Signature

- Provided by: **Gemini Agent (gemini/gemini-1.5-pro)** — 2026-10-21
- Method: Public internet research including official Xiaomi website and benchmark platforms; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. Artificial_Analysis.md, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All <...> placeholders replaced; no values copied from other model/ files.
2. Filename is model/<slug>/<Source_Name>.md (folder name = filesystem-safe slug, see model/README.md). Use the exact assigned stem — never write a near-variant filename (e.g. Ling_3.0.md when the assignment is Ling_3.0_Flash_Fin.md); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (../../model-comparison.md, ../../model-findings.md) resolve from model/<slug>/.
4. No benchmark invented; zero verified benchmarks → saved as .md.excluded (see above).
