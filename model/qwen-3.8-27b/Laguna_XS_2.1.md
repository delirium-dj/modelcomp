# Qwen 3.8-27B — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8-27B
- **Short description:** Alibaba's dense 27B open-weights model native vision-language for coding, agentic workflows, and office automation.
- **Provider / access:** Open weights on HuggingFace + ModelScope (Apache-2.0); Alibaba Cloud Model Studio; self-hosted via vLLM/SGLang/llama.cpp.
- **Release / knowledge:** Released 2026-08-14; knowledge cutoff undisclosed.
- **IDs:** `Qwen/Qwen3.8-27B` (self-host / third-party API; no first-party metered API).
- **Context window:** 262,144 tokens native (extendable to 1M via YaRN); 131K recommended for agentic workloads.
- **Modalities:** Text, image, video in; text out; thinking-mode toggle; tool calls; JSON mode.
- **Pricing:** Apache-2.0 open weights; self-hosting free; third-party API pricing under $2/$6 tier.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.0%**
- OSWorld-Verified: **84.3%**
- WebArena-Verified: **64.8%**
- AndroidWorld: **81.9%**
- Agents' Last Exam Pass@1: **20.4%**

Reasoning / knowledge:

- GPQA Diamond: **89.2%**
- HLE (no tools): **30.8%**
- IFBench: **79.5%**
- MathVision with code: **94.6%**
- OmniDocBench: **91.1%**
- CharXiv-R: **90.2%**

Coding:

- SWE-bench Pro: **61.7%** (amended set)
- LiveCodeBench v6: **90.3%**
- DeepSWE 1.1: **42.2%**
- NL2Repo-Bench: **42.3%**

Long context:

- No verified MRCR/RULER scores; 262K native + 1M YaRN extension.

Multimodal:

- Native text/image/video input; strong vision-language.

### Normalized scores (1-100)

Derived from benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 80/100.** OSWorld 84.3% + AndroidWorld 81.9% + TB 73.0%; strong computer/mobile agency; capped by HLE 30.8% trailing Opus.
- **Reasoning: 79/100.** GPQA 89.2% + MathVision 94.6% + OmniDoc 91.1%; good science reasoning; capped by HLE 30.8% mid-tier.
- **Context window: 80/100.** 262K native/1M YaRN; no verified retrieval curves; good extension window.
- **Multimodal: 85/100.** Native video input with MathVision 94.6%; text-only output caps at 80-85 tier.
- **Coding: 84/100.** LiveCode 90.3% + SWE-Pro 61.7%; strong open-weight coding; DeepSWE 42.2% caps higher tier.
- **Cost efficiency: 80/100.** Apache-2.0 open weights free; single-GPU hosting; third-party APIs cheap vs premium paid models.
- **Overall Score: 82/100.** Mean of (80+79+80+85+84)/5 = 81.6 → 82. Best fit: self-hosted coding/computer-use agent where open weights matter.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (Alibaba docs, BenchLM, llm-stats); scores normalized 1-100 interpretations. Reference: Muse Spark 1.3 authoritative report.
- Future sources: add a new file next to this one, e.g. `Qwen_4.0.md`, using the same headings.