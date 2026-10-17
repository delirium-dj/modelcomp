# MiMo V2.6 Flash — findings by Beam

- Source: Xiaomi/MiMo V2.6 Flash, `xiaomi/mimo-v2.6-flash`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi's smaller open-weight Flash (Sep 21, 2026): 309B total / 15B active MoE, 1M context, very cheap; Vals Index #16 of 65 (59.58%), top-scoring open-weight alongside Pro; #1 on Terminal-Bench 2.1 among some peers.
- **Provider / access:** Xiaomi MiMo API; OpenRouter; HuggingFace (open weights, MIT).
- **Release / knowledge:** Released 2026-09-21; knowledge cutoff not stated.
- **IDs:** `xiaomi/mimo-v2.6-flash`
- **Context window:** 1,000,000 tokens; max output 128,000.
- **Modalities:** text, image in (native multimodal); text out; reasoning yes; tool calling yes. Open weights.
- **Pricing (as of 2026-10-17):** $0.14 / 1M input, $0.28 / 1M output; paid. UltraSpeed variant 10x.
- **Architecture:** 309B total / 15B active, MoE, MIT license.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **56.1** (estimated #38/128)
- Terminal-Bench 2.1: **87.6%**
- Terminal-Bench 4.0: **28.80%**
- Toolathlon-Verified: **73.6%**
- AutomationBench: **52.3%**
- Agents' Last Exam: **27.6%**
- OSWorld-Verified: **80.8%**
- JobBench: **61.2%**
- CyberGym: **95.1%**
- ExploitGym: **6.0%**
- Vals Index: **53.23%** (#20/49) / 59.58% (#16/65)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **76.9** (unranked, 2 rows)
- STEMBench: not reported for Flash
- AA Intelligence Index: not reported

Coding:

- Coding public-lane (BenchLM): **60.2** (#21/150)
- DeepSWE: **67.9%**
- ProgramBench: **26.0%**
- Terminal-Bench 2.1: **87.6%**
- SWE-bench Verified/Pro: not reported

Long context:

- 1M window; MRCR: not reported.

Multimodal:

- Multimodal public-lane (BenchLM): **72.2** (unranked, 1 row)
- Pro multimodal not separately reported; Flash text/image only per Vals (no video/file).

### Normalized scores (1–100)

- **Tool use: 80/100.** Agentic lane #38/128 (56.1), Terminal-Bench 2.1 87.6%, CyberGym 95.1%, OSWorld 80.8%, AutomationBench 52.3%; caps at Agents' Last Exam 27.6%.
- **Reasoning: 76/100.** Reasoning lane 76.9 (2 rows); caps at no published ARC-AGI/GPQA/HLE.
- **Context window: 84/100.** 1M window; caps at no published MRCR retrieval.
- **Multimodal: 72/100.** Text/image in (no video/file per Vals); caps pending verified multimodal numbers.
- **Coding: 76/100.** DeepSWE 67.9%, coding lane #21/150 (60.2), Terminal-Bench 2.1 87.6%; caps at ProgramBench 26.0%.
- **Cost efficiency: 96/100.** Very cheap $0.14/$0.28 per 1M.
- **Overall Score: 78/100.** Mean of five quality dims (BenchLM aggregate 64.5); best-fit for cost-efficient agentic + coding.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Xiaomi MiMo docs, Vals AI, BenchLM, heise); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.