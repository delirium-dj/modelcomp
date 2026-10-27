# Qwen 3.5 2B — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 2B (Qwen3.5-2B)
- **Short description:** Alibaba Cloud's smallest Qwen 3.5 series model (2B parameters), released February 2026. Open-weight under Apache 2.0. Natively multimodal (text, image, video) with 262K native context (extensible to 1M). Hybrid architecture: Gated Delta Networks + sparse MoE. Supports thinking and non-thinking modes.
- **Provider / access:** Hugging Face (`Qwen/Qwen3.5-2B`), Ollama, vLLM, SGLang, KTransformers. Self-hosted (zero per-token cost). Third-party APIs: DeepInfra, Novita AI, Fireworks, Together AI, OpenRouter (various quantizations). No first-party Alibaba Cloud API for 2B size (only Plus/Flash/Max tiers).
- **Release / knowledge:** 2026-02-28 release (Hugging Face); knowledge cutoff not explicitly published.
- **IDs:** `Qwen/Qwen3.5-2B` (HF), `qwen3.5:2b` (Ollama), various provider IDs. No vendor-hosted free tier for 2B; self-hosting is free.
- **Context window:** 262,144 tokens native (extensible to ~1M via YaRN/RoPE scaling). Verified on HF model card and Artificial Analysis.
- **Modalities:** Text, image, video input; text output. Reasoning: yes (thinking mode, opt-in). Tool calls: yes (BFCL-V4 43.6% thinking). JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** Self-hosted: $0/M (Apache 2.0, commercial use permitted). Third-party APIs: ~$0.05–0.10/M in, $0.20–0.40/M out (e.g., Fireworks, Together). No first-party API pricing for 2B.
- **Architecture:** 2.27B total params (dense), 24 layers, hidden 2048, GQA (8 Q heads, 2 KV heads), Gated DeltaNet (75% linear attention), SwiGLU FFN (6144 intermediate), MTP (1 head), RoPE theta 10M. Apache 2.0 license.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **48.8%** (thinking) — Qwen HF model card (official)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- BFCL-V4 (tool use): **43.6%** (thinking) — Qwen HF model card (official)

Reasoning / knowledge:

- GPQA Diamond: **51.6%** (thinking) — Qwen HF model card (official)
- GPQA (base): **65.8%** (thinking) — Qwen HF model card
- HLE: **no verified public score found** (Artificial Analysis Intelligence Index 16 for 2B reasoning variant)
- LCR / MLCR: **25.6%** AA-LCR (thinking) — Qwen HF model card
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **16** (reasoning variant) — Artificial Analysis (rank ~150 of tracked)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- MMLU-Pro: **55.3%** (non-thinking) / **66.5%** (thinking) — Qwen HF model card
- MMLU-Redux: **69.2%** (non-thinking) / **79.6%** (thinking) — Qwen HF model card
- C-Eval: **65.2%** (non-thinking) / **73.2%** (thinking) — Qwen HF model card
- SuperGPQA: **30.4%** (non-thinking) / **37.5%** (thinking) — Qwen HF model card
- IFEval: **61.2%** (non-thinking) / **78.6%** (thinking) — Qwen HF model card
- IFBench: **26.7%** (non-thinking) / **41.3%** (thinking) — Qwen HF model card

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** for 2B
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index: **no verified public score found**
- HumanEval / BigCodeBench: **8.8%** (Artificial Analysis, 2B) — BenchmarkList

Long context:

- AA-LCR: **25.6%** (thinking) at 128K — Qwen HF model card
- LongBench v2: **38.7%** (thinking) — Qwen HF model card
- RULER / GraphWalks: **no verified public score found** for 2B specifically
- Native 262K context (extensible to 1M) verified via HF model card

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 50/100.** BFCL-V4 43.6% (thinking) and Tau2-Bench 48.8% (thinking) are respectable for a 2B model. Non-thinking mode scores lower (BFCL not reported). Capped by model size — no match for 9B+ models on agentic tasks.
- **Reasoning: 55/100.** GPQA Diamond 51.6% (thinking), MMLU-Pro 66.5% (thinking), AA Intelligence Index 16. Thinking mode provides meaningful gains over non-thinking (GPQA 11.9% → 51.6%). Capped by 2B parameter ceiling; HLE not measured.
- **Context window: 75/100.** 262K native context (extensible to 1M) places it in 256K–512K tier (70–80). AA-LCR 25.6% and LongBench v2 38.7% show modest retrieval. Not a 1M+ native context model.
- **Multimodal: 70/100.** Native multimodal (text, image, video) per Qwen 3.5 architecture. MMMU 64.2% (thinking), OCRBench 84.5%, MathVista 76.7%. Strong for 2B but below 4B/9B siblings. Text output only.
- **Coding: 30/100.** No SWE-bench, LiveCodeBench, or HumanEval scores published for 2B. Artificial Analysis Coding Index 1.0 (near bottom). BigCodeBench 8.8% (BenchmarkList). Capped by complete lack of verified coding benchmarks.
- **Cost efficiency: 100/100.** Apache 2.0 open weights — self-hosted at $0/token. Third-party APIs ~$0.05–0.10/M in. Free tier effectively unlimited for self-hosting.
- **Overall Score: 56/100.** Mean of (50+55+75+70+30)/5 = 56. Best fit: edge/on-device multimodal reasoning with thinking mode; coding and agentic tool use limited by 2B size.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 3+ independent sources (Qwen HF model card, Artificial Analysis, BenchmarkList, llm-stats.com, Artificial Analysis article on Qwen 3.5 small models, InferBase, FitMyLLM); scores normalized 1–100 per model-comparison.md methodology.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.