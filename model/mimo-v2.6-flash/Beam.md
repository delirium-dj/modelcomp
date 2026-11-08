# MiMo V2.6 Flash — findings by Beam

- Source: Xiaomi/MiMo V2.6 Flash, `xiaomi/mimo-v2.6-flash`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi's open-weight Flash variant (Sep 21, 2026): 1.02T params (smaller active), 1M context, strong agentic/coding/cyber at very low cost; BenchLM #70/1016.
- **Provider / access:** Xiaomi MiMo API; OpenRouter; Puter. Batch tier.
- **Release / knowledge:** Released 2026-09-21; knowledge cutoff not stated.
- **IDs:** `xiaomi/mimo-v2.6-flash`
- **Context window:** 1,000,000 tokens; max output 131,000.
- **Modalities:** text, image in (V2.6 series multimodal); text out; reasoning yes; tool calling yes. Open weights.
- **Pricing (as of 2026-11-08):** paid (Xiaomi).
- **Architecture:** open-weight MoE; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Toolathlon-Verified: **73.6%**
- AutomationBench: **52.3%**
- Agents' Last Exam: **27.6%**
- Terminal-Bench 4.0: **28.80%**
- Terminal-Bench 2.1: **87.6%**
- OSWorld-Verified: **80.8%**
- JobBench: **61.2%**
- CyberGym: **95.1%**
- ExploitGym: **6.0%**
- GDPval-AA: **55.4%** normalized (Artificial Analysis)
- AA Briefcase: not individually reported
- AA AutomationBench: not individually reported
- AA Terminal-Bench 4.0: not individually reported
- GDP.pdf: not individually reported
- AA-AnalystAgent: not individually reported
- AA ITBench: not individually reported
- AA Tau3 Banking: not individually reported
- aaTerminalBench21: not individually reported
- AA Cyber Index: not individually reported
- CWE-Bench-AA: not individually reported
- DeepsecBench-AA: not individually reported
- CyberGym-E2E-AA: not individually reported
- AA Briefcase: not individually reported

Reasoning / knowledge:

- STEMBench: not individually reported
- AA Intelligence Index: **26.7%** (measured, updated 2026-11-07)
- ARC-AGI / GPQA / HLE: no verified public score found
- AA-HLE: **35.1%** (Artificial Analysis)
- AA-Omniscience Index: **-10.8%**
- AA-Omniscience Accuracy: **27.2%**
- AA-Omniscience Hallucination Rate: **52.2%**
- AA-LCR: **74.3%** (Artificial Analysis)
- CritPt: **12.0%** (Artificial Analysis)
- MLCR-AA: not individually reported
- AA-IFBench: not individually reported
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2: not individually reported

Coding:

- DeepSWE: **67.9%**
- ProgramBench: **26.0%**
- Terminal-Bench 2.1: **87.6%**
- AA-SciCode: **51.3%** (Artificial Analysis)
- Bug Hunt Bench: not individually reported
- PostTrainBench v1.1: not individually reported
- FrontierCode 2.0: not individually reported
- ScarfBench: not individually reported
- AA Coding Index: not individually reported
- CursorBench 4.0: not individually reported
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: not individually reported
- AA-MMMU-Pro: **73.1%** (Artificial Analysis)

Long context:

- 1M window; MRCR: no verified public score found.
- AA-LCR: **74.3%** (Artificial Analysis)

Multimodal:

- AA-MMMU-Pro: **73.1%** (Artificial Analysis)
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: not individually reported

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** Toolathlon-Verified 73.6%, AutomationBench 52.3%, Agents' Last Exam 27.6%, Terminal-Bench 4.0 28.80%, Terminal-Bench 2.1 87.6%, OSWorld-Verified 80.8%, JobBench 61.2%, CyberGym 95.1%, ExploitGym 6.0%, GDPval-AA 55.4% normalized. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Toolathlon-Verified 73.6%, AutomationBench 52.3%, Agents' Last Exam 27.6%, Terminal-Bench 4.0 28.80%, Terminal-Bench 2.1 87.6%, OSWorld-Verified 80.8%, JobBench 61.2%, CyberGym 95.1%, ExploitGym 6.0%, GDPval-AA 55.4% normalized, AA Intelligence 26.7%, AA-HLE 35.1%, AA-Omniscience -10.8%/27.2%/52.2%, AA-LCR 74.3%, CritPt 12.0%, AA-SciCode 51.3%, AA-MMMU-Pro 73.1%. Corroborates band; no change.
- **Reasoning: 72/100.** AA Intelligence 26.7%, AA-HLE 35.1%, AA-Omniscience -10.8%/27.2%/52.2%, AA-LCR 74.3%, CritPt 12.0%. Corroborates band; no change.
- **Context window: 80/100.** 1M window; caps at no published MRCR retrieval. Enrichment adds AA-LCR 74.3%. Corroborates band; no change.
- **Multimodal: 78/100.** Text/image in; AA-MMMU-Pro 73.1%. Enrichment adds AA-MMMU-Pro 73.1%. Corroborates band; no change.
- **Coding: 74/100.** DeepSWE 67.9%, ProgramBench 26.0%, Terminal-Bench 2.1 87.6%, AA-SciCode 51.3%. Enrichment adds DeepSWE 67.9% (already), ProgramBench 26.0% (already), Terminal-Bench 2.1 87.6% (already), AA-SciCode 51.3% (already), AA-MMMU-Pro 73.1%. Corroborates band; no change.
- **Cost efficiency: 92/100.** Very cheap open-weight.
- **Overall Score: 76/100.** Mean of five quality dims (BenchLM aggregate 55.33); best-fit for cost-efficient agentic + coding + cyber. Enrichment (2026-11-08) added new verified rows (Toolathlon-Verified 73.6%, AutomationBench 52.3%, Agents' Last Exam 27.6%, Terminal-Bench 4.0 28.80%, Terminal-Bench 2.1 87.6%, OSWorld-Verified 80.8%, JobBench 61.2%, CyberGym 95.1%, ExploitGym 6.0%, GDPval-AA 55.4% normalized, AA Intelligence 26.7%, AA-HLE 35.1%, AA-Omniscience -10.8%/27.2%/52.2%, AA-LCR 74.3%, CritPt 12.0%, DeepSWE 67.9%, ProgramBench 26.0%, Terminal-Bench 2.1 87.6%, AA-SciCode 51.3%, AA-MMMU-Pro 73.1%). No dimension band moved; Overall unchanged at 76.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — MiMo V2.6 Flash](https://benchlm.ai/models/mimo-v2-6-flash)
  - [Artificial Analysis — MiMo V2.6 Flash](https://artificialanalysis.ai/models/mimo-v2-6-flash)
  - [Xiaomi MiMo V2.6 technical report](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL/blob/main/MiMo_V2_6_technical_report.pdf)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).