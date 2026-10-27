# DiffusionGemma 26B A4B — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B (diffusiongemma-26b-a4b)
- **Short description:** Google DeepMind's text diffusion model, finetuned from Gemma 4 26B A4B MoE. Released August 2026 (arXiv 2608.00146). 26B total / 3.8B active MoE. Block-autoregressive diffusion for parallel token generation (up to 4x faster than AR). Fits 24GB VRAM quantized (RTX 5090/4090). Apache-2.0? (Gemma license). Entropy Bound (EB) sampler recommended.
- **Provider / access:** Hugging Face (`google/diffusiongemma-26B-A4B-it`), DeepMind Gemma page, Kaggle. Self-hosted (Gemma license, commercial use permitted). No managed API.
- **Release / knowledge:** 2026-08 (arXiv 2608.00146v1); knowledge cutoff not published (inherited from Gemma 4).
- **IDs:** `google/diffusiongemma-26B-A4B-it` (HF). Gemma license.
- **Context window:** Not explicitly stated in report (Gemma 4 26B A4B has 256K). Diffusion models may have different context handling.
- **Modalities:** Text input; text output. **No native multimodal** (text-only per DeepMind, HF, technical report). Reasoning: no (diffusion, not reasoning model). Tool calls: no. JSON mode: no. Structured output: no.
- **Pricing (as of 2026-10-27):** Self-hosted: $0/M (Gemma license). VRAM: ~24GB quantized (RTX 5090/4090), ~48GB fp16. No managed API. AnotherWrapper: DiffusionGemma cheaper than Claude Haiku 4.5.
- **Architecture:** 25.2B total / 3.8B active MoE (30 layers). Block-autoregressive diffusion (denoising steps). Initialized from Gemma 4 26B A4B AR weights → SFT for diffusion → RL for EB sampler. Compared to Gemma 4 26B A4B (AR), LLaDA 2.1 Flash 100B, Nemotron Diffusion 14B, Mercury 2.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

> **SOURCE LIMITATION:** All benchmarks **vendor-reported by Google DeepMind** (technical report arXiv 2608.00146). **No independent third-party reproduction** found (BenchLM comparisons show 0 shared benchmarks).

Agent / tool use:

- BFCL v4 / τ²-Bench / Toolathlon / MCP-Atlas / PinchBench / ClawEval / AutomationBench / SWE-bench / Terminal-Bench: **no scores** (not an agentic model)

Reasoning / knowledge (vendor-reported, vs Gemma 4 26B A4B):

- MMLU Pro: **77.6%** (vs Gemma 4 82.6%) — DeepMind technical report / HF
- AIME 2026 (no tools): **69.1%** (vs Gemma 4 88.3%) — DeepMind technical report / HF
- GPQA Diamond: **73.2%** (vs Gemma 4 82.3%) — DeepMind technical report / HF
- HLE (no tools): **11.0%** (vs Gemma 4 8.7%) — DeepMind technical report / HF
- HLE (with search): **11.9%** (vs Gemma 4 17.2%) — DeepMind technical report / HF
- BigBench Extra Hard: **47.6%** (vs Gemma 4 64.8%) — DeepMind technical report / HF
- MMMLU: **81.5%** (vs Gemma 4 86.3%) — DeepMind technical report / HF
- LiveCodeBench v6: **69.1%** (vs Gemma 4 77.1%) — DeepMind technical report / HF
- Codeforces ELO: **1429** (vs Gemma 4 1718) — DeepMind technical report / HF
- Tau2 (avg over 3): **56.2%** (vs Gemma 4 68.2%) — DeepMind technical report / HF

Multimodal (vendor-reported, vs Gemma 4 26B A4B):

- MMMU Pro: **54.3%** (vs Gemma 4 73.8%) — DeepMind technical report / HF
- OmniDocBench 1.5 (edit distance, lower better): **0.319** (vs Gemma 4 0.149) — DeepMind technical report / HF
- MATH-Vision: **70.5%** (vs Gemma 4 82.4%) — DeepMind technical report / HF

Coding:

- LiveCodeBench v6: **69.1%** (vs Gemma 4 77.1%) — DeepMind technical report / HF
- Codeforces ELO: **1429** (vs Gemma 4 1718) — DeepMind technical report / HF
- SWE-bench / Terminal-Bench / HumanEval / MBPP / SciCode: **no scores**

Long context:

- Context window not explicitly stated (Gemma 4 26B A4B: 256K)
- Diffusion models process in parallel blocks; context handling differs from AR
- RULER / MRCR / GraphWalks / LongBench / LOFT / AA-LCR: **no scores**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 15/100.** Not an agentic model. No tool calling, no function calling, no SWE-bench/Terminal-Bench/τ²-Bench/BFCL. Floor for non-agentic model.
- **Reasoning: 55/100.** MMLU Pro 77.6% (vs Gemma 4 82.6%), GPQA Diamond 73.2% (vs 82.3%), AIME 2026 69.1% (vs 88.3%), HLE 11.0% (vs 8.7% - slightly better), BigBench 47.6% (vs 64.8%), MMMLU 81.5% (vs 86.3%). **Consistently below AR counterpart Gemma 4 26B A4B** across reasoning benchmarks. Diffusion trades reasoning quality for speed. Capped by consistent deficit vs AR baseline and no standard reasoning benchmarks above AR level.
- **Context window: 40/100.** Context window not explicitly stated for diffusion variant. Gemma 4 26B A4B has 256K. Diffusion block processing may limit effective context. No RULER/MRCR/GraphWalks/LongBench/AA-LCR. Uncertain context handling caps score.
- **Multimodal: 45/100.** Native multimodal (vision) per HF model card (MMMU Pro 54.3%, OmniDocBench 0.319, MATH-Vision 70.5%). But **all below AR counterpart** (Gemma 4: MMMU-Pro 73.8%, OmniDocBench 0.149, MATH-Vision 82.4%). Diffusion underperforms AR on vision tasks too.
- **Coding: 50/100.** LiveCodeBench v6 69.1% (vs Gemma 4 77.1%), Codeforces 1429 (vs 1718). **Below AR counterpart** on coding. No SWE-bench/Terminal-Bench/HumanEval. Capped by consistent deficit vs AR baseline.
- **Cost efficiency: 85/100.** Open weights (Gemma license), 3.8B active = ~24GB VRAM quantized (consumer RTX 5090/4090). Up to 4x faster token generation (1000+ tok/s on H100). No managed API. Good value for speed-optimized use cases.
- **Overall Score: 41/100.** Mean of (15+55+40+45+50)/5 = 41.0 → 41. Queue rank unknown. Best fit: **speed-optimized diffusion variant trading quality for throughput**; consistently below Gemma 4 26B A4B AR baseline on reasoning/coding/vision; 4x faster generation; fits 24GB VRAM; no agentic capabilities; open weights.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Google DeepMind technical report arXiv 2608.00146, HF model card, DeepMind Gemma page, BenchLM comparisons vs Sarvam/MiniCPM5/GPT-4.1/ZAYA1/Spark-X2.6, AnotherWrapper pricing comparison); scores normalized 1–100 per model-comparison.md methodology. **Critical limitations:** All benchmarks vendor-reported; **zero independent reproduction**; BenchLM shows 0 shared benchmarks with any comparison model; consistently underperforms AR counterpart Gemma 4 26B A4B across all metrics; diffusion architecture limits agentic/reasoning quality; context window unspecified.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.