# DeepSeek V4.1 Flash — findings by Beam

- Source: DeepSeek/DeepSeek V4.1 Flash, `deepseek-ai/deepseek-v4.1-flash`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's smallest new-arch model (Sep 10, 2026): 552B MoE (8B active input / 16B active output), causal encoder-decoder, native multimodal (text+image), 1M context, KV cache 1/4 HBM. Outperforms V4-Pro on benchmarks. Open weights (MIT).
- **Provider / access:** DeepSeek API `deepseek-flash`; OpenRouter; HuggingFace; NVIDIA NIM; QwenCloud.
- **Release / knowledge:** Released 2026-09-10; knowledge cutoff not stated.
- **IDs:** `deepseek-ai/deepseek-v4.1-flash`
- **Context window:** 1,000,000 tokens; max output 384,000.
- **Modalities:** text, image in; text out; reasoning yes (controllable effort); tool calling yes; structured output yes. Open weights.
- **Pricing (as of 2026-10-17):** $0.30 / 1M input (peak), $0.15 off-peak; $1.20 / 1M output (peak), $0.60 off-peak; paid. Cache-hit charges discounted.
- **Architecture:** 552B total MoE, 8B active input / 16B active output, causal encoder-decoder, CSA2, FP4 KV cache, MIT license.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **61.9** (#24/128)
- Terminal-Bench 2.1: **90.6%**
- Terminal-Bench 3.0: **30.0%**
- Terminal-Bench 4.0: **31.20%**
- CyberGym: **88.1%**
- ExploitGym: **15.3%**
- HLE w/ tools: **63.9%**
- AutomationBench: **54.8%**
- Agents' Last Exam: **31.8%**
- HLE w/o tools: **39.1%** (†)

Reasoning / knowledge:

- GPQA Diamond: **90.9%**
- HLE: **36.8%** (39.1†)
- Codeforces: **3471** rating
- MathArena Apex: **65.6%**
- STEMBench: **2.49**
- MMLU-Pro (base): **74.1%**
- SuperGPQA (base): **53.1%**
- AA Intelligence Index: not reported

Coding:

- Coding public-lane (BenchLM): **60.7** (#18/150)
- DeepSWE v1.1: **74.2%**
- Codeforces: **3471** rating
- HumanEval Pass@1: **79.4%**
- Terminal-Bench 2.1: **90.6%**

Long context:

- 1M window; MRCR: not reported.

Multimodal:

- Multimodal public-lane (BenchLM): **77.9** (unranked, 1 row)
- Chartography (tools): **78.9%**
- RefCOCO-avg (base): **86.0%**

### Normalized scores (1–100)

- **Tool use: 82/100.** Agentic lane #24/128 (61.9), Terminal-Bench 2.1 90.6%, CyberGym 88.1%, HLE w/tools 63.9%, AutomationBench 54.8%; caps at Agents' Last Exam 31.8%.
- **Reasoning: 80/100.** GPQA 90.9%, HLE 36.8%, MathArena Apex 65.6%, STEMBench 2.49; caps at HLE w/o tools 39.1%.
- **Context window: 84/100.** 1M window; caps at no published MRCR retrieval.
- **Multimodal: 82/100.** Text/image in; Chartography 78.9%, multimodal lane 77.9.
- **Coding: 82/100.** DeepSWE 74.2%, Terminal-Bench 2.1 90.6%, Codeforces 3471, HumanEval 79.4%, coding lane #18/150 (60.7).
- **Cost efficiency: 96/100.** Very cheap $0.15-$0.30 / 1M input.
- **Overall Score: 82/100.** Mean of five quality dims (BenchLM aggregate 65.59); best-fit for cost-efficient agentic coding + multimodal.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (DeepSeek announcement/docs, NVIDIA NIM, Lambda, BenchLM, QwenCloud); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.