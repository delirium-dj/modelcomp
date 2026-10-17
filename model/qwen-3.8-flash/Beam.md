# Qwen 3.8 Flash — findings by Beam

- Source: Alibaba/Qwen 3.8 Flash, `alibaba/qwen-3.8-flash`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba's hosted Flash (Aug 26, 2026) based on Qwen3.8-Flash-Next: 1M context, cheap, multimodal, production-grade. BenchLM overall 62.8 (Flash-Next).
- **Provider / access:** Alibaba Cloud Model Studio `qwen3.8-flash`; B.AI.
- **Release / knowledge:** Released 2026-08-26; knowledge cutoff not stated.
- **IDs:** `alibaba/qwen-3.8-flash`
- **Context window:** 1,000,000 tokens; max output 131,072 (hosted cap 8,192).
- **Modalities:** text, image, video in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $0.16 / 1M input, $0.47 / 1M output (B.AI standard); promotional 10-30% of standard. Very cheap.
- **Architecture:** Hosted production model based on Qwen3.8-Flash-Next (open-weight, Gated DeltaNet, Qwen Sparse Attention, Gated Residual, N-gram Embedding). Parameter count not published for hosted endpoint.

### Raw benchmarks found

- Published Flash-Next evaluation (inherited, not hosted-endpoint guarantees):
  - SWE-bench Pro: **62.5%**
  - DeepSWE 1.1: **58.7%**
  - CoWorkBench: **73.9%**
  - Toolathlon Verified: **73.5%**
- BenchLM Flash-Next overall: **62.8** (#2 Alibaba).
- Vals: no separate hosted endpoint page found.

### Normalized scores (1–100)

- **Tool use: 74/100.** Inherited Flash-Next (Toolathlon Verified 73.5%, CoWorkBench 73.9%); caps at no published agentic benchmarks for hosted endpoint.
- **Reasoning: 70/100.** No verified reasoning benchmarks for hosted endpoint; provisional based on Flash-Next.
- **Context window: 85/100.** 1M window; caps at no published MRCR.
- **Multimodal: 78/100.** Text/image/video in; caps at no verified hosted multimodal numbers.
- **Coding: 72/100.** Inherited Flash-Next (SWE-bench Pro 62.5%, DeepSWE 58.7%).
- **Cost efficiency: 97/100.** Very cheap $0.16/$0.47 per 1M.
- **Overall Score: 75.8/100.** Provisional mean of five quality dims (BenchLM Flash-Next 62.8); low-confidence (hosted endpoint not separately benchmarked).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (B.AI docs, Alibaba Cloud, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores. Hosted endpoint not separately benchmarked; scores inherited from Flash-Next.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.