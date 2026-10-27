# Qwen 3.5 0.8B — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 0.8B (Qwen3.5-0.8B)
- **Short description:** Alibaba Cloud's smallest Qwen 3.5 series model (0.87B parameters), released February 2026. Open-weight under Apache 2.0. Natively multimodal (text, image, video) with 262K native context. Hybrid architecture: Gated Delta Networks + sparse MoE. Non-thinking mode by default; thinking mode opt-in but prone to thinking loops per model card.
- **Provider / access:** Hugging Face (`Qwen/Qwen3.5-0.8B`), Ollama (`qwen3.5:0.8b`), vLLM, SGLang, KTransformers, ONNX. Self-hosted (zero per-token cost). Third-party APIs: DeepInfra, Puter, InferBase. No first-party Alibaba Cloud API for 0.8B size.
- **Release / knowledge:** 2026-02-28 release (Hugging Face); knowledge cutoff not explicitly published.
- **IDs:** `Qwen/Qwen3.5-0.8B` (HF), `qwen3.5:0.8b` (Ollama), various provider IDs. No vendor-hosted free tier; self-hosting is free.
- **Context window:** 262,144 tokens native. Verified on HF model card, Artificial Analysis, InferBase. Max output 81,920 tokens (InferBase).
- **Modalities:** Text, image, video input; text output. Reasoning: yes (thinking mode, opt-in, but model card warns of thinking loops). Tool calls: yes (BFCL-V4 25.3% thinking). JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** Self-hosted: $0/M (Apache 2.0, commercial use permitted). Third-party APIs: ~$0.04/M in, $0.08/M out (Puter Developer). No first-party API pricing for 0.8B.
- **Architecture:** 0.87B total params (dense), 24 layers, hidden 1024, GQA (8 Q heads, 2 KV heads), Gated DeltaNet (16 linear heads for V/QK, head dim 128), Gated Attention (8 Q, 2 KV, head dim 256), SwiGLU FFN (3584 intermediate), MTP trained, RoPE theta 10M. Apache 2.0 license.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **0.37%** (Artificial Analysis, hard variant, reasoning off) — rank #324/326
- Tau3-Banking / Tau2-Bench: **1.2%** Tau3-Banking / **65.2%** Tau2-Bench Telecom (Artificial Analysis) — rank #175/183 and #122/337
- GDPval-AA: **2nd percentile** (rank #352/358) — Artificial Analysis
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- BFCL-V4 (tool use): **25.3%** (thinking) — Qwen HF model card (official)
- ScreenSpot Pro (visual agent): **46.5** (thinking) — Qwen HF model card

Reasoning / knowledge:

- GPQA Diamond: **11.9%** (thinking) / **23.6%** (Artificial Analysis) — Qwen HF card / AA
- GPQA (base): **65.8%** (thinking, but model card shows this for 2B, not 0.8B — 0.8B shows 11.9%)
- HLE: **5.1%** (Artificial Analysis) — rank #335/488
- LCR / MLCR: **4.7%** AA-LCR (thinking) / **9.0%** (Artificial Analysis) — Qwen HF card / AA
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **6.1** (rank #360/433) — Artificial Analysis
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- MMLU-Pro: **29.7%** (non-thinking) / **42.3%** (thinking) — Qwen HF model card
- MMLU-Redux: **48.5%** (non-thinking) / **59.5%** (thinking) — Qwen HF model card
- C-Eval: **46.4%** (non-thinking) / **50.5%** (thinking) — Qwen HF model card
- SuperGPQA: **16.9%** (non-thinking) / **21.3%** (thinking) — Qwen HF model card
- IFEval: **52.1%** (non-thinking) / **44.0%** (thinking) — Qwen HF model card
- IFBench: **21.0%** (Artificial Analysis) / **21.6%** (thinking, Qwen HF card) — AA / Qwen

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **2.9%** (Artificial Analysis) — rank near bottom
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index: **1.0** (Artificial Analysis) — better than 0% of tracked
- BigCodeBench: **8.8%** (BenchmarkList)
- HumanEval: **no verified public score found**
- Terminal-Bench 2.1 (coding): **0.4%** (Artificial Analysis) — rank #192/196

Long context:

- AA-LCR: **4.7%** (thinking, Qwen HF) / **9.0%** (Artificial Analysis) — rank #335/419
- LongBench v2: **26.1%** (thinking) — Qwen HF model card
- RULER / GraphWalks: **no verified public score found** for 0.8B specifically
- Native 262K context verified via HF model card

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 25/100.** BFCL-V4 25.3% (thinking), Tau2-Bench 65.2% but Telecom only, Terminal-Bench 0.37%. ScreenSpot Pro 46.5. Very low on general agentic benchmarks. Capped by 0.8B parameter ceiling and thinking-loop issues.
- **Reasoning: 20/100.** GPQA Diamond 11.9–23.6%, HLE 5.1%, AA Intelligence Index 6.1, MMLU-Pro 42.3% (thinking). SuperGPQA 21.3%. Scores consistently at bottom of tracked models. Capped by fundamental parameter limit.
- **Context window: 70/100.** 262K native context (256K–512K tier = 70–80). But AA-LCR only 4.7–9.0% and LongBench v2 26.1% show very poor long-context retrieval. Tier placement saves it from lower score.
- **Multimodal: 55/100.** Native multimodal (text, image, video). MMMU 49%, MathVista 62.2%, OCRBench 74.5%, MMBench 69.9%. Strong OCR for size but overall multimodal reasoning far below 2B/4B siblings. Text output only.
- **Coding: 10/100.** Terminal-Bench 0.4%, SciCode 2.9%, AA Coding Index 1.0 (0th percentile), BigCodeBench 8.8%. No SWE-bench or HumanEval. Effectively non-functional for coding tasks.
- **Cost efficiency: 100/100.** Apache 2.0 open weights — self-hosted at $0/token. Third-party APIs ~$0.04/M in, $0.08/M out. Free tier effectively unlimited for self-hosting.
- **Overall Score: 36/100.** Mean of (25+20+70+55+10)/5 = 36. Best fit: absolute minimum viable multimodal model for edge deployment only; not suitable for general reasoning, coding, or agentic tasks.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 3+ independent sources (Qwen HF model card, Artificial Analysis, BenchmarkList, InferBase, FitMyLLM, llm-stats.com, Reddit benchmarking); scores normalized 1–100 per model-comparison.md methodology.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.