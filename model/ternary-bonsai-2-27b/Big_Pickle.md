# Ternary Bonsai 2 27B — findings by Big Pickle

- Source: PrismML/Ternary Bonsai 2 27B
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 2 27B
- **Short description:** PrismML's 27B open-weights reasoning model derived from Qwen3.8-27B, with ternary (1.58-bit) language weights. Two GGUF packings are published — PTQ1_0 at 1.76 bpw (5.93 GB) and PQ2_0 at 2.16 bpw (7.25 GB) — so a 27B-class model fits consumer hardware at near-full capability.
- **Provider / access:** Open weights on Hugging Face (Apache 2.0) plus hosted APIs on OpenRouter (`prism-ml/ternary-bonsai-2-27b`), nano-gpt and Kilo.
- **Release / knowledge:** Released 2026-09-18 (models.dev/OpenRouter catalog); knowledge cutoff not published.
- **IDs:** `prismml/ternary-bonsai-2-27b`; no Zen Free ID.
- **Context window:** 262,144 total / 32,768 max output (models.dev + OpenRouter).
- **Modalities:** text + image in; text out; reasoning yes; tool calls yes; JSON/structured output yes.
- **Pricing (as of 2026-11-11):** $0.075 / $0.50 per 1M in/out; cached input $0.0375. Self-hosting the Apache-2.0 weights is $0.
- **Architecture:** 27B-parameter dense model (Qwen3.8-27B base) with ternary-quantized language weights; Apache 2.0. Requires ternary-aware kernels (specialized llama.cpp/BitNet backends) for best throughput.

### Raw benchmarks found

All rows are provider-reported and carried by BenchLM's ledger (21 source-linked rows, #83 of 214 at 53.56/100).

Agent / tool use:

- Terminal-Bench 2.1: **52.8%**
- Tau2-Bench: **80.2%**
- BFCL v3 (function calling): **74.9%**
- Terminal-Bench 4.0 / Tau3 / GDPval-AA / OSWorld / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **85.8%**
- MMLU-Redux: **89.1%**
- AIME 2026: **95.8%**
- AIME 2025: **95%**
- MATH-500: **98.8%**
- GSM8K: **96.7%**
- IFBench: **74%**
- IFEval: **91.3%**
- HLE / LCR / CritPt / AA Intelligence Index: no verified public score found.
- BenchLM overall: **53.56 / #83 of 214**

Coding:

- SWE-bench Verified: **60.8%**
- LiveCodeBench v6: **90.1%**
- BigCodeBench: **58.1%**
- SWE-bench Pro / DeepSWE / SciCode: no verified public score found.

Multimodal:

- CharXiv (chart QA): **80.0%**
- OmniDocBench: **89.1%**
- A-OKVQA: **86.8%**
- RealWorldQA: **80.1%**
- OCRBench v2: **56.9%**

Long context:

- No MRCR / RULER / GraphWalks retrieval result reported for the 262K window.

### Normalized scores (1–100)

- **Tool use: 70/100.** Tau2 80.2% and BFCL v3 74.9% are strong for a quantized 27B model, but TB 2.1 52.8% and the absence of TB 4.0/OSWorld/GDPval rows cap the agentic score.
- **Reasoning: 78/100.** GPQA 85.8%, AIME26 95.8%, MATH-500 98.8% and MMLU-Redux 89.1% are excellent math/knowledge numbers; no HLE, LCR or AA Index exists to confirm frontier-level depth.
- **Context window: 72/100.** 262K total lands mid-way through the 200K–500K band (200K = 70), with 32K max output a real caveat for long generations.
- **Multimodal: 66/100.** Image input only (no audio/video/PDF), but chart/document vision is strong: CharXiv 80.0%, OmniDocBench 89.1%, RealWorldQA 80.1%.
- **Coding: 72/100.** SWE-bench Verified 60.8%, LiveCodeBench v6 90.1% and BigCodeBench 58.1% are solid mid-tier coding; no SWE-Pro or DeepSWE number to justify more.
- **Cost efficiency: 92/100.** $0.075/$0.50 per 1M hosted is very cheap on input, and the Apache-2.0 weights make self-hosting effectively free; the $0.50 output rate keeps it out of the 97–99 band.
- **Overall Score: 72/100.** (70 + 78 + 72 + 66 + 72) / 5 = 71.6 → 72. Best fit: cheap local/edge reasoning and coding where a 6–8 GB footprint matters more than frontier agentic reliability.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-11-11
- Method: public web research (BenchLM public ledger, models.dev/OpenRouter catalog metadata, PrismML model card via OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Ternary Bonsai 2 27B](https://benchlm.ai/models/ternary-bonsai-2-27b)
  - [OpenRouter — prism-ml/ternary-bonsai-2-27b](https://openrouter.ai/prism-ml/ternary-bonsai-2-27b)
  - [models.dev — Ternary Bonsai 2 27B](https://models.dev/)
- Future sources: add a new file next to this one, e.g. `Ternary_Bonsai_2_27B_Update.md`, using the same headings.
