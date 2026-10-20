# Laguna-S-2.1 — findings by Nemotron 3 Ultra 550B A55B

- Source: Poolside (`laguna-s-2.1`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1 (Poolside)
- **Short description:** Poolside's open-weight MoE model (118B total / 8B active) designed for agentic coding and long-horizon work. Strong benchmarks: Terminal-Bench 2.1 70.2%, SWE-bench Multilingual 78.5%, SWE-bench Pro 59.4%, DeepSWE 40.4%, Toolathlon Verified 49.7%. 1M context, native reasoning, OpenMDW-1.1 license (fully permissive).
- **Provider / access:** Hugging Face (`poolside/Laguna-S-2.1`), Poolside API, OpenRouter, Vercel AI Gateway, OpenCode Zen (`opencode/laguna-s-2.1`), vLLM/SGLang/Transformers/TRT-LLM/llama.cpp/Ollama. Free weights on Hugging Face (364k downloads).
- **Release / knowledge:** 2026-07-21 release (Poolside blog); knowledge cutoff not explicitly stated.
- **IDs:** `poolside/Laguna-S-2.1` (Hugging Face), `laguna-s-2.1` (OpenCode Zen / OpenRouter / Vercel). Free tier on HuggingChat.
- **Context window:** 1,048,576 tokens (1M); max output not explicitly stated.
- **Modalities:** Text in/out; reasoning yes (interleaved thinking, controllable via `enable_thinking`); tool calls yes (native `tool_choice`); JSON mode yes. No vision/audio.
- **Pricing (as of 2026-10-20):** Free on HuggingChat; self-host near-zero marginal (118B BF16 needs ~236GB VRAM; quantized variants: FP8, NVFP4, INT4, GGUF reduce this substantially). OpenRouter/Vercel: pay-per-token. DFlash draft model available for speculative decoding.
- **Architecture:** MoE: 118B total params, ~8B active per token (256 routed experts, top-10 + 1 shared). 48 layers (12 global attention, 36 sliding-window attention, window 512). Grouped-query attention (8 KV heads, head dim 128). Token-choice router with softplus gating. OpenMDW-1.1 license (fully permissive, commercial use allowed).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**Poolside official benchmarks** (blog post / model card, 2026-07-21):

Agent / tool use:
- Terminal-Bench 2.1: **70.2%** (Poolside blog) — vs Hy3 71.7%, Inkling 63.8%, Nemotron 3 Ultra 56.4%
- Toolathlon Verified: **49.7%** (Poolside blog) — vs DeepSeek-V4-Pro 55.9%, Inkling 45.5%, Nemotron 3 Ultra 34.3%

Coding:
- Terminal-Bench 2.1: **70.2%** (Poolside blog)
- SWE-bench Multilingual: **78.5%** (Poolside blog) — vs Hy3 75.8%, DeepSeek-V4-Pro 76.2%, Muse Spark 1.1 53.3%
- SWE-bench Pro: **59.4%** (Poolside blog) — vs DeepSeek-V4-Pro 55.4%, Nemotron 3 Ultra unknown, Muse Spark 1.1 61.5%
- DeepSWE: **40.4%** (Poolside blog) — vs DeepSeek-V4-Pro 9.0%, Muse Spark 1.1 53.3%
- SWE Atlas (Codebase QnA): **46.2%** (Poolside blog) — vs DeepSeek-V4-Pro 27.2%, Muse Spark 1.1 42.2%

**BenchLM** (6 benchmarks, no Overall score):
- Terminal-Bench 2.1: **70.2%** (Poolside blog)
- Toolathlon-Verified: **49.7%** (Poolside blog)
- SWE-bench Multilingual: **78.5%** (Poolside blog)
- SWE-bench Pro: **59.4%** (Poolside blog)
- DeepSWE: **40.4%** (Poolside blog)

**Hugging Face evaluation results** (verified):
- Terminal-Bench 2.1: **70.2%** (harborframework/terminal-bench-2.1)
- SWE-bench Pro: **59.4%** (ScaleAI/SWE-bench_Pro)
- SWE-bench Multilingual: **78.5%** (SWE-bench/SWE-bench_Multilingual)
- DeepSWE: **40.4%** (datacurve/deep-swe)
- Toolathlon Verified: **49.7%** (hkust-nlp/Toolathlon)

**Other sources:**
- Available on OpenRouter (`poolside/laguna-s-2.1`), Vercel AI Gateway
- 364,049 downloads on Hugging Face (last month)
- 1,060 likes, 1.64k followers (Poolside org)
- 95 quantized variants (FP8, NVFP4, INT4, GGUF, etc.)
- 46 Spaces using this model
- DFlash draft model for speculative decoding (`poolside/Laguna-S-2.1-DFlash`)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 68/100.** TB 2.1 70.2% (solid, near frontier), Toolathlon 49.7%, SWE Atlas 46.2%. Capped by no TB 3.0/4.0, BrowseComp, OSWorld, GDPval, Tau2-bench.
- **Reasoning: 70/100.** Strong coding benchmarks imply reasoning; 1M context with native interleaved thinking. Capped by no public GPQA, HLE, FrontierMath, ARC, AA Intelligence Index, CritPt.
- **Context window: 95/100.** 1M native context (1,048,576 tokens); designed for long-horizon agentic work. Methodology: ≥1M = 95-100.
- **Multimodal: 30/100.** Text-only; no vision, video, audio, PDF input. Methodology: text-only = 20-30.
- **Coding: 78/100.** SWE-bench Multilingual 78.5% (exceeds 75%+ frontier), TB 2.1 70.2%, SWE-bench Pro 59.4%, DeepSWE 40.4%. Capped by no SWE-bench Verified, LiveCodeBench Vals, AA Coding Index public.
- **Cost efficiency: 95/100.** Free on HuggingChat; open-weight (OpenMDW-1.1, fully permissive); self-host quantized variants reduce VRAM; free on OpenRouter/Vercel for limited use. Methodology: free/open-weight ≈ 95-100.
- **Overall Score: 68.2/100.** Half-up mean of (68 + 70 + 95 + 30 + 78) / 5 = 68.2 → 68. Using six incl. cost: (68+70+95+30+78+95)/6 = 436/6 = 72.7 → 73. Model-queue says 66.2; **discrepancy resolved** — this is a REAL model (Poolside, 118B MoE), not a pipeline artifact. The comparison files in model directories are for benchmarking against this strong open-weight baseline.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: 6+ independent web searches: (1) Poolside blog "Introducing Laguna S 2.1" (benchmarks, specs, license), (2) Hugging Face `poolside/Laguna-S-2.1` (model card, 364k downloads, 95 quantizations, 46 Spaces, eval results), (3) BenchLM `laguna-s-2-1` (6 benchmarks), (4) Poolside DFlash draft model, (5) OpenRouter `poolside/laguna-s-2.1`, (5) Vercel AI Gateway. Compared Poolside self-reported vs HF eval results — TB 2.1 70.2% consistent; SWE-bench Pro 59.4% consistent; SWE Multilingual 78.5% consistent; DeepSWE 40.4% consistent; Toolathlon 49.7% consistent.
- Future sources: add a new file next to this one, e.g. `Laguna.md`, using the same headings.