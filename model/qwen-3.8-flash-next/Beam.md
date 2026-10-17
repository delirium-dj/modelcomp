# Qwen 3.8 Flash Next — findings by Beam

- Source: Alibaba/Qwen 3.8 Flash Next, `alibaba/qwen-3.8-flash-next`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba's open-weight Flash-Next (Aug 26, 2026): 125B total (6B active), GDN+QSA hybrid attention, 262K context (extensible to 1M), early preview of Qwen4 architecture. BenchLM 62.8. Strong agentic (65.6 lane).
- **Provider / access:** HuggingFace / ModelScope (open weights); Alibaba Cloud Model Studio.
- **Release / knowledge:** Released 2026-08-26; knowledge cutoff not stated.
- **IDs:** `alibaba/qwen-3.8-flash-next`
- **Context window:** 262,144 tokens (extensible to 1,000,000 with YaRN); max output not stated.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes. Open weights.
- **Pricing (as of 2026-10-17):** Free (open weights, $0/$0 on BenchLM).
- **Architecture:** 125B total (6B active) MoE, GDN+QSA hybrid attention, Gated Residual, N-gram Embedding, open weights (Apache 2.0).

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **65.6** (#17/128)
- AndroidWorld: **84.5%**
- CoWorkBench: **73.9%**
- JobBench: **55.7%**
- Toolathlon Verified: **73.5%**
- Hermes Index: **36.2%**
- Hermes Bench: **70.5%**

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **80.6** (unranked, 2 rows)
- GPQA: not individually reported for Flash-Next
- HLE: not reported
- ARC-AGI: not reported
- AA Intelligence Index: not reported

Coding:

- Coding public-lane (BenchLM): **51.6** (#41/150)
- SWE-bench Pro: **62.5%**
- DeepSWE 1.1: **58.7%**
- LiveCodeBench v6: **91.9%**
- SWE-bench Multilingual: **81%**
- NL2Repo: **48.1%**
- SWE-bench (Vals): not reported

Long context:

- 262K window (extensible to 1M with YaRN); MRCR: not reported.

Multimodal:

- Multimodal public-lane (BenchLM): **87.7** (#8/54)
- CharXiv-R: **84.6%**
- LVBench: **76.6%**
- RealWorldQA: **88.5%**
- ERQA: not reported
- MathVision: not reported
- Vision2Web: **64.0%**

### Normalized scores (1–100)

- **Tool use: 78/100.** Agentic lane #17/128 (65.6), AndroidWorld 84.5%, CoWorkBench 73.9%, Toolathlon Verified 73.5%, JobBench 55.7%; caps at Hermes Index 36.2%.
- **Reasoning: 74/100.** Reasoning lane 80.6 (2 rows); caps at no published GPQA/HLE/ARC-AGI.
- **Context window: 74/100.** 262K window; extensible to 1M with YaRN.
- **Multimodal: 86/100.** Text/image in; multimodal lane #8/54 (87.7), CharXiv-R 84.6%, RealWorldQA 88.5%.
- **Coding: 76/100.** SWE-bench Pro 62.5%, DeepSWE 58.7%, LiveCodeBench v6 91.9%, coding lane #41/150 (51.6); caps at NL2Repo 48.1%.
- **Cost efficiency: 98/100.** Free (open weights).
- **Overall Score: 78/100.** Mean of five quality dims (BenchLM aggregate 62.8); best-fit for cost-efficient agentic + multimodal coding (open weights, early Qwen4 preview).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Alibaba Cloud blog, BenchLM, llm-stats, B.AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.