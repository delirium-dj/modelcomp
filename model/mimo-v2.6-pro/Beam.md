# MiMo V2.6 Pro — findings by Beam

- Source: Xiaomi/MiMo V2.6 Pro, `xiaomi/mimo-v2.6-pro`
- Date: 2026-10-17 (UTC)
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
- **Pricing (as of 2026-10-17):** $0.435 / 1M input, $0.87 / 1M output; paid. UltraSpeed variant 10x price.
- **Architecture:** 1.02T total / 42B active params, MoE, open weights.

### Raw benchmarks found

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

Reasoning / knowledge:

- STEMBench: **2.17**
- AA Intelligence Index: **46**
- ARC-AGI / GPQA / HLE: no verified public score found

Coding:

- Coding public-lane (BenchLM): **63.3** (#13/150)
- DeepSWE: **71.9%**
- ProgramBench: **26.5%**
- Terminal-Bench 2.1: **89.9%**
- SWE-bench Verified/Pro: no verified public score found

Long context:

- 1M window; MRCR: no verified public score found.

Multimodal:

- V2.6 Pro multimodal lane not separately reported in sources; V2.5 scored CharXiv RQ 81.0, MMMU-Pro 77.9, Video-MME 87.7 (sibling, not Pro). Pro multimodal: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 84/100.** Agentic lane #13/128 (67.8), Terminal-Bench 2.1 89.9%, CyberGym 94.0%, OSWorld 82%, AutomationBench 53.1%; caps at Agents' Last Exam 31.6%.
- **Reasoning: 82/100.** STEMBench 2.17, AA Intelligence 46; caps at no published ARC-AGI/GPQA/HLE.
- **Context window: 85/100.** 1M window; caps at no published MRCR retrieval.
- **Multimodal: 75/100.** Text/image in (Pro multimodal not separately benchmarked); caps pending verified Pro multimodal numbers.
- **Coding: 78/100.** DeepSWE 71.9%, coding lane #13/150 (63.3), Terminal-Bench 2.1 89.9%; caps at unverified SWE-bench.
- **Cost efficiency: 95/100.** Very cheap $0.435/$0.87 per 1M; best value among peers.
- **Overall Score: 81/100.** Mean of five quality dims (BenchLM aggregate 73.55); best-fit for cost-efficient agentic + coding + cyber.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Xiaomi MiMo docs, BenchLM, Vals AI, Puter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.