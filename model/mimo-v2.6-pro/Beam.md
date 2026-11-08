# MiMo V2.6 Pro — findings by Beam

- Source: Xiaomi/MiMo V2.6 Pro, `xiaomi/mimo-v2.6-pro`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship open-weight MoE (Sep 21, 2026): 1.02T params (42B active), 1M context, strong agentic/coding/cyber at very low cost; AA Intelligence Index 46, surpassing Kimi K3 and Qwen3.8 Max among open-source.
- **Provider / access:** Xiaomi MiMo API; OpenRouter; Puter. Batch tier.
- **Release / knowledge:** Released 2026-09-21; knowledge cutoff not stated.
- **IDs:** `xiaomi/mimo-v2.6-pro`
- **Context window:** 1,000,000 tokens; max output 131,000.
- **Modalities:** text, image in (V2.6 series multimodal); text out; reasoning yes; tool calling yes. Open weights.
- **Pricing (as of 2026-11-08):** $0.435 / 1M input, $0.87 / 1M output; paid. UltraSpeed variant 10x price.
- **Architecture:** 1.02T total / 42B active params, MoE, open weights.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agentic public-lane (BenchLM): **67.8** (estimated #13/128)
- Terminal-Bench 2.1: **89.9%**
- Terminal-Bench 4.0: **34.90%**
- Toolathlon-Verified: **76.9%**
- AutomationBench: **53.1%**
- Agents' Last Exam: **31.6%**
- OSWorld-Verified: **82%**
- JobBench: **62.0%**
- CyberGym: **94.0%**
- ExploitGym: **17.8%**
- MiMo Cyber Bench: **81.7%**
- GDPval-AA: **59.2%** normalized (Artificial Analysis)
- AA Briefcase: **1512** (Artificial Analysis)
- AA AutomationBench: **58.6%** (Artificial Analysis)
- GDP.pdf: **19.2%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **34.8%** (Artificial Analysis)
- AA-AnalystAgent: **37.5%** (Artificial Analysis)
- AA Cyber Index: **56.1%** (Artificial Analysis)
- CWE-Bench-AA: **63.3%** (Artificial Analysis)
- DeepsecBench-AA: **26.2%** (Artificial Analysis)
- CyberGym-E2E-AA: **78.6%** (Artificial Analysis)

Reasoning / knowledge:

- STEMBench: **2.17**
- AA Intelligence Index: **46.3%** (measured, updated 2026-11-07)
- ARC-AGI / GPQA / HLE: no verified public score found
- AA-HLE: **49.4%** (Artificial Analysis)
- AA-Omniscience Index: **-4.5%**
- AA-Omniscience Accuracy: **34.8%**
- AA-Omniscience Hallucination Rate: **60.2%**
- AA-LCR: **86.3%** (Artificial Analysis)
- CritPt: **26.6%** (Artificial Analysis)
- MLCR-AA: **12.8%** (Artificial Analysis)

Coding:

- Coding public-lane (BenchLM): **63.3** (#13/150)
- DeepSWE: **71.9%**
- ProgramBench: **26.5%**
- Terminal-Bench 2.1: **89.9%**
- SWE-bench Verified/Pro: no verified public score found
- AA-SciCode: **60.9%** (Artificial Analysis)
- Bug Hunt Bench: **22.7 fixes** (Bug Hunt Bench)

Long context:

- 1M window; MRCR: no verified public score found.
- AA-LCR: **86.3%** (Artificial Analysis)

Multimodal:

- V2.6 Pro multimodal lane not separately reported in sources; V2.5 scored CharXiv RQ 81.0, MMMU-Pro 77.9, Video-MME 87.7 (sibling, not Pro). Pro multimodal: no verified public score found.
- AA-MMMU-Pro: **73.1%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 84/100.** Agentic lane #13/128 (67.8), Terminal-Bench 2.1 89.9%, CyberGym 94.0%, OSWorld 82%, AutomationBench 53.1%; caps at Agents' Last Exam 31.6%. Enrichment (2026-11-08): added GDPval-AA 59.2% normalized, AA Briefcase 1512, AA AutomationBench 58.6%, GDP.pdf 19.2%, AA Terminal-Bench 4.0 34.8%, AA-AnalystAgent 37.5%, AA Cyber 56.1%, CWE-Bench-AA 63.3%, DeepsecBench 26.2%, CyberGym-E2E 78.6%, AA Intelligence 46.3%, AA-HLE 49.4%, AA-Omniscience -4.5%/34.8%/60.2%, AA-LCR 86.3%, CritPt 26.6%, MLCR 12.8%, AA-SciCode 60.9%, Bug Hunt 22.7 fixes. Corroborates band; no change.
- **Reasoning: 82/100.** STEMBench 2.17, AA Intelligence 46.3; caps at no published ARC-AGI/GPQA/HLE. Enrichment adds AA-HLE 49.4%, AA-Omniscience -4.5%/34.8%/60.2%, AA-LCR 86.3%, CritPt 26.6%, MLCR 12.8%. Corroborates band; no change.
- **Context window: 85/100.** 1M window; caps at no published MRCR retrieval. Enrichment adds AA-LCR 86.3%. Corroborates band; no change.
- **Multimodal: 75/100.** Text/image in (Pro multimodal not separately benchmarked); caps pending verified Pro multimodal numbers. Enrichment adds AA-MMMU-Pro 73.1%. Corroborates band; no change.
- **Coding: 78/100.** DeepSWE 71.9%, coding lane #13/150 (63.3), Terminal-Bench 2.1 89.9%; caps at unverified SWE-bench. Enrichment adds AA-SciCode 60.9%, Bug Hunt 22.7 fixes. Corroborates band; no change.
- **Cost efficiency: 95/100.** Very cheap $0.435/$0.87 per 1M; best value among peers.
- **Overall Score: 81/100.** Mean of five quality dims (BenchLM aggregate 73.55); best-fit for cost-efficient agentic + coding + cyber. Enrichment (2026-11-08) added new verified rows (GDPval-AA 59.2% normalized; AA Briefcase 1512; AA AutomationBench 58.6%; GDP.pdf 19.2%; AA Terminal-Bench 4.0 34.8%; AA-AnalystAgent 37.5%; AA Cyber 56.1%; CWE-Bench-AA 63.3%; DeepsecBench 26.2%; CyberGym-E2E 78.6%; AA Intelligence 46.3%; AA-HLE 49.4%; AA-Omniscience -4.5%/34.8%/60.2%; AA-LCR 86.3%; CritPt 26.6%; MLCR 12.8%; AA-SciCode 60.9%; Bug Hunt 22.7 fixes; AA-MMMU-Pro 73.1%). No dimension band moved; Overall unchanged at 81.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — MiMo V2.6 Pro](https://benchlm.ai/models/mimo-v2-6-pro)
  - [Artificial Analysis — MiMo V2.6 Pro](https://artificialanalysis.ai/models/mimo-v2-6-pro)
  - [Xiaomi MiMo V2.6 technical report](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL/blob/main/MiMo_V2_6_technical_report.pdf)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).