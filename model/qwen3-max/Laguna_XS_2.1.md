# Qwen3 Max — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-30 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3 Max
- **Short description:** Alibaba's December 2025 trillion-parameter flagship model, available as Qwen3 Max Instruct with exceptional coding and reasoning capabilities, plus a Thinking variant for step-by-step reasoning with tool use.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3-max`), OpenAI-compatible API; Qwen3-Max-Thinking variant for reasoning chains.
- **Release / knowledge:** September 24, 2025 (Max Instruct); January 26, 2026 (Max-Thinking).
- **Context window:** 256,000 tokens (1T parameters optimized for long contexts).
- **Modalities:** Text in; text out; Thinking variant supports tool-calling and extended reasoning.
- **Architecture:** 1 trillion parameters, trained on 36 trillion tokens; global-batch load balancing loss optimization.

### Raw benchmarks found

**Agent / tool use:**

- Terminal-Bench Hard: **24.2%** (71st percentile, rank 94/326)
- τ²-Bench Telecom: **83.6%** (77th percentile, rank 78/332)
- τ²-Bench: **82.1%** (60th percentile)
- Terminal-Bench 2.0: **20.2%** (58/67)

**Reasoning / knowledge:**

- MMLU-Pro: **84.98%** (79th percentile, rank 60/138)
- GPQA Diamond: **84.85%** (51/138)
- AIME 2025: **82.3%**
- HLE: **28.0%** (84th percentile)
- Humanity's Last Exam: **28%**

**Coding:**

- SWE-bench Verified: **69.6%**
- LiveCodeBench: **76.7%** (26/251)
- Terminal-Bench 2.0: **20.2%**

**Long context:**

- Long-context reasoning: **50.0%**
- IFBench: **44.1%**

### Normalized scores (1–100)

- **Tool use: 68/100.** TB Hard 24.2% middling; τ²-Bench 74.8-83.6% shows strong telecom agentic performance; competitive on specialized agent tasks but not SOTA on general coding benchmarks.
- **Reasoning: 82/100.** MMLU-Pro 84.98%, GPQA 84.85%, AIME 82.3%; top-tier reasoning, matches Claude Opus 5 on MMLU but behind on some benchmarks.
- **Context window: 75/100.** 256K window is excellent; performance varies on benchmarks (50% on LCR); good for long document tasks.
- **Multimodal: 50/100.** Text-only model; no multimodal capabilities reported.
- **Coding: 72/100.** SWE Verified 69.6%, LiveCodeBench 76.7%; strong open-weight performance but behind dedicated coding models like Claude Opus 5.5 and Kimi K3.1 Pro.
- **Cost efficiency: 75/100.** $1.20/$6.00 per 1M tokens; competitive for trillion-parameter model; Thinking variant expensive on long tasks.
- **Overall Score: 69/100.** Mean of (68+82+75+50+72)/5 = 69.4 → 69 — Alibaba's top-tier model, excellent reasoning, competitive coding.

---

## Cross-source verification

### Source 1: Alibaba Official Blog

- [Qwen3-Max Announcement](https://qwen.ai/blog?id=87dc93fc8a590dc718c77e1f6e84c07b474f6c5a)
- Released: September 24, 2025
- Claims: Matches/surpasses Claude Opus 4, DeepSeek V3.1, Grok 4, GPT-5 Pro
- SWE Verified 69.6%, Tau2-Bench 74.8%

### Source 2: Vals AI

- [Qwen 3 Max Thinking | Vals AI](https://www.vals.ai/models/alibaba_qwen3-max-2026-01-23)
- Vals Index: Strong performance on Finance/Telecom agents
- Pricing: $1.20 in / $6.00 out per 1M tokens

### Source 3: Opper AI / Artificial Analysis

- [Qwen3-Max-Thinking](https://opper.ai/alibaba/qwen3-max-thinking)
- Intelligence Index: 21.3 (Thinking), 15.6 (standard)
- GPQA Diamond: 86%, MMLU-Pro: 82.4%, AIME: 82.3%

### Source 4: BenchmarkList

- [Qwen3 Max | BenchmarkList](https://benchmarklist.com/models/qwen-qwen3-max-thinking)
- Terminal-Bench Hard: 24.2% (rank 94/326)
- GDPval-AA: 1139 Elo (79th percentile)
- HLE: 28% (84th percentile)

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-10-30
- Method: public internet research (Alibaba blog, Vals AI, Opper AI, BenchmarkList, SCMP); scores are normalized 1–100 interpretations, not official vendor scores.