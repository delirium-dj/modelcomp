# Laguna XS 2.1 — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1 (Laguna-XS-2.1)
- **Short description:** Poolside's 33B total / 3B active MoE model for agentic coding, released July 2026 (incremental update to Laguna XS.2). Native reasoning support (interleaved thinking with preserved thinking). 256K context. Compact enough for Mac (36GB RAM). Optimized for local deployment. Poolside API: $0.10/M in, $0.20/M out, $0.05/M cache.
- **Provider / access:** Poolside API, Hugging Face (`poolside/Laguna-XS-2.1`, `poolside/Laguna-XS-2.1-INT4`), Ollama (MLX variants), NVIDIA build API. Self-hosted (Poolside license - not open source). MLX 4-bit/8-bit/bf16 variants on HF (mlx-community).
- **Release / knowledge:** 2026-07 (Poolside blog June/July 2026); knowledge cutoff not published.
- **IDs:** `poolside/Laguna-XS-2.1` (HF), Poolside API. Poolside license (not open source).
- **Context window:** 256K tokens (262,144). Verified via Poolside blog, HF, NVIDIA build API, BenchmarkList.
- **Modalities:** Text input; text output. **No native multimodal** (text-only per Poolside, HF, NVIDIA). Reasoning: yes (native interleaved thinking, preserved thinking). Tool calls: yes (agent harness, Harbor Framework). JSON mode: not specified. Structured output: not specified.
- **Pricing (as of 2026-10-27):** Poolside API: $0.10/M in, $0.20/M out, $0.05/M cache read. Self-host: not open source (Poolside license). MLX variants free on HF (but license unclear). VRAM: MLX 4-bit ~18GB (M5 Max 128GB), bf16 ~62GB.
- **Architecture:** 33B total / 3B active MoE. 256K context. Native reasoning (interleaved thinking, preserved thinking). Harbor Framework agent harness (max 500 steps, sandboxed). temperature=1.0, top_k=20, top_p=1.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

> **SOURCE LIMITATION:** All benchmarks **vendor-reported by Poolside** (Harbor Framework, Laude Institute). **No independent third-party reproduction** found (BenchmarkList cites vendor, BenchLM comparisons not found).

Agent / tool use (vendor-reported, Poolside Harbor Framework):

- SWE-bench Verified: **70.9%** — Poolside blog / HF / NVIDIA build API / BenchmarkList / SevenTnews
- SWE-bench Multilingual: **63.1%** (+5.4pp over XS.2) — Poolside blog / HF / NVIDIA build API / BenchmarkList / SevenTnews
- SWE-bench Pro: **47.6%** — Poolside blog / HF / NVIDIA build API / BenchmarkList
- Terminal-Bench 2.0: **37.5%** — Poolside blog / HF / NVIDIA build API / BenchmarkList
- SWE-bench Verified (XS.2): **69.9%** — Poolside blog
- SWE-bench Multilingual (XS.2): **57.7%** — Poolside blog
- SWE-bench Pro (XS.2): **46.3%** — Poolside blog
- Terminal-Bench 2.0 (XS.2): **35.7%** — Poolside blog
- Qwen3.6-35B-A3B (comparison): SWE-Verified 73.4%, Multilingual 67.2%, Pro 49.5%, TB 2.0 51.5% — Poolside blog
- North Mini Code (comparison): SWE-Verified 67.6%, Pro 40.2%, TB 2.0 36.0% — Poolside blog
- MAI-Code-1-Flash (comparison): SWE-Verified 71.6%, Multilingual 65.5%, Pro 51.2%, TB 2.0 54.8% — Poolside blog
- gpt-oss-120B (comparison): SWE-Pro 16.2%, TB 2.0 18.7% — Poolside blog
- Claude Haiku 4.5 (comparison): SWE-Verified 73.3%, Pro 39.5%, TB 2.0 29.8% — Poolside blog
- GPT-5.4 Nano (comparison): SWE-Pro 52.4%, TB 2.0 46.3% — Poolside blog
- MCP-Atlas / τ²-Bench / BFCL / Toolathlon / PinchBench / ClawEval / AutomationBench / BrowseComp / DeepSearchQA: **no scores**

Reasoning / knowledge:

- SWE-bench Verified: **70.9%** (includes reasoning via thinking mode)
- Context Arena (BenchmarkList): **14.0%** (AUC 128K 9.5%, AUC 1M 1.4%) — BenchmarkList
- MMLU / GPQA / AIME / HLE / MMLU-Pro / MATH / BBH / C-Eval / SuperGPQA / MMMLU: **no scores**

Coding:

- SWE-bench Verified: **70.9%** — Poolside blog / HF / NVIDIA build API / BenchmarkList
- SWE-bench Multilingual: **63.1%** — Poolside blog / HF / NVIDIA build API / BenchmarkList
- SWE-bench Pro: **47.6%** — Poolside blog / HF / NVIDIA build API / BenchmarkList
- Terminal-Bench 2.0: **37.5%** — Poolside blog / HF / NVIDIA build API / BenchmarkList
- HumanEval / MBPP / LiveCodeBench / Codeforces / SWE-Rebench / Vibe Code Bench / Terminal-Bench Hard / SWE-bench Verified (independent): **no scores**

Long context:

- Native 256K context verified
- Context Arena (BenchmarkList): AUC 128K 9.5%, AUC 1M 1.4%, Cumulative Avg 128K 14.7% — BenchmarkList
- RULER / MRCR / GraphWalks / LongBench / LOFT / AA-LCR: **no scores**

Multimodal:

- **No native multimodal** (text-only per Poolside, HF, NVIDIA, BenchmarkList).

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 65/100.** SWE-bench Verified 70.9% (strong, beats North Mini Code 67.6%, near Qwen3.6 73.4%), SWE-bench Multilingual 63.1% (+5.4pp over XS.2), SWE-bench Pro 47.6%, Terminal-Bench 2.0 37.5%. **All vendor-reported via Poolside Harbor Framework; zero independent reproduction.** Beats larger models (MAI-Code-1-Flash 137B, gpt-oss-120B) on SWE-Verified. No MCP-Atlas/τ²-Bench/BFCL/Toolathlon/PinchBench/ClawEval. Capped by no independent verification and TB 2.0 37.5% vs Qwen3.6 51.5%.
- **Reasoning: 45/100.** SWE-bench Verified 70.9% (requires reasoning via thinking mode). Context Arena 14.0% (very low: AUC 128K 9.5%, AUC 1M 1.4%). **No standard reasoning benchmarks** (GPQA, AIME, HLE, MMLU, MMLU-Pro, MATH, BBH). Capped by Context Arena 14% and zero standard reasoning benchmarks.
- **Context window: 75/100.** 256K native (256K tier = 70–75). Context Arena shows poor long-context utilization (AUC 128K 9.5%, AUC 1M 1.4%). No RULER/MRCR/GraphWalks/LongBench/AA-LCR. Tier placement saves score despite poor Context Arena.
- **Multimodal: 15/100.** Text-only input/output. No vision/audio/video. Floor for text-only model.
- **Coding: 65/100.** SWE-bench Verified 70.9% (strong for 3B active), SWE-bench Multilingual 63.1%, SWE-bench Pro 47.6%, Terminal-Bench 2.0 37.5%. **Best-in-class SWE-Verified for 3B active MoE** (beats North Mini Code 67.6%, gpt-oss-120B 16.2%). Native reasoning (interleaved thinking). No HumanEval/LiveCodeBench/Codeforces/SWE-Rebench/Terminal-Bench Hard. Capped by TB 2.0 37.5% vs Qwen3.6 51.5% and no independent verification.
- **Cost efficiency: 70/100.** Poolside API $0.10/$0.20 competitive. Not open source (Poolside license). MLX variants available but license unclear. 33B/3B MoE = manageable for local (MLX 4-bit 18GB). Capped by non-open license.
- **Overall Score: 53/100.** Mean of (65+45+75+15+65)/5 = 53.0 → 53. Queue rank unknown. BenchmarkList: Coding median 17th pct. Best fit: **strong local-friendly coding specialist**; SWE-Verified 70.9% leads 3B active class; multilingual +5.4pp gain; native reasoning; non-open license; poor Context Arena (14%); all benchmarks vendor-reported.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Poolside blog, HF model card, NVIDIA build API, BenchmarkList, SevenTnews, Poolside release notes, mlx-community MLX variants, Ollama); scores normalized 1–100 per model-comparison.md methodology. **Critical limitations:** All benchmarks vendor-reported via Poolside Harbor Framework; **zero independent third-party reproduction**; Context Arena shows poor long-context retrieval (14%); no standard reasoning benchmarks (GPQA/AIME/HLE/MMLU); not open source (Poolside license); comparison models also vendor-reported.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.