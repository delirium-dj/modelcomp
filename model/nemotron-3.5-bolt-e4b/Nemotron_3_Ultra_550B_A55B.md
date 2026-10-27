# Nemotron 3.5 Bolt E4B — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt E4B (Nemotron-3.5-Bolt-E4B)
- **Short description:** NVIDIA's compact 8B parameter model for local conversational agents, game characters, and robots. Released October 23, 2026. Optimized for fast conversational agents with 40% higher average quality than Nemotron 3 Nano 4B. BF16 and Q4_K_M (4GB) variants. Apache-2.0 license. 64K context window. Trained with NeMo-Gym RL on agentic benchmarks.
- **Provider / access:** Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16`, `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB-DFlash`), NVIDIA NGC, NVIDIA build API. Self-hosted (Apache-2.0). Runs on GeForce RTX, Jetson, RTX Spark, DGX Spark. No managed API.
- **Release / knowledge:** 2026-10-23 release; knowledge cutoff not published.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-BF16` (HF), `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB-DFlash` (HF DFlash drafter). Apache-2.0.
- **Context window:** 64K tokens (per NVIDIA technical report, BenchLM). Verified via NVIDIA research page, technical report, build.nvidia.com.
- **Modalities:** Text input; text output. **No native multimodal** (text-only per NVIDIA). Reasoning: yes (reasoning mode enabled). Tool calls: yes (BFCL-v3, RelyToolBench, SysBench). JSON mode: not specified. Structured output: not specified.
- **Pricing (as of 2026-10-27):** Self-hosted: $0/M (Apache-2.0). VRAM: Q4_K_M 3.1–4.3 GB (RTX), BF16 ~16GB. No managed API pricing. Free on NVIDIA build API (rate limited).
- **Architecture:** 8B total parameters (not MoE - dense). Derived from Nemotron 3 Nano 4B with RL post-training. 64K context. Q4_K_M quantization for 4GB VRAM. DFlash drafter for speculative decoding (272.6 tok/s on RTX 5070). Apache-2.0.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

> **SOURCE LIMITATION:** All benchmarks vendor-reported by NVIDIA (NeMo-Gym harness). No independent third-party reproduction found (BenchLM shows 0 shared benchmarks with o3-mini, Qwen3.5 Flash).

Agent / tool use (vendor-reported, NVIDIA NeMo-Gym):

- BFCL-v3: **not numerically published** (included in 21-benchmark suite) — NVIDIA technical report
- RelyToolBench: **not numerically published** — NVIDIA technical report
- SysBench: **not numerically published** — NVIDIA technical report
- Tau2-Bench (core, avg accuracy): **55.1%** (BF16 reasoning) — NVIDIA technical report / research page
  - Gemma 4 E4B-it: 42.1% / Qwen3.5 4B: 49% / Nemotron 3 Nano 4B: 38.5% / Q4_K_M: 53.1%
- MultiChallenge: **59.32%** (BF16 reasoning) — NVIDIA technical report / build.nvidia.com
  - Gemma 4 E4B-it: 42.1% / Qwen3.5 4B: 49% / Nemotron 3 Nano 4B: 35.3% / Q4_K_M: 55.6%
- RoleMRC: **77.00%** (BF16 reasoning) — NVIDIA technical report
- IHEval: **not numerically published** — NVIDIA technical report
- Synthetic Single-Step SWE Patch Selection: **not numerically published** — NVIDIA technical report
- Synthetic Natural Language Math: **not numerically published** — NVIDIA technical report
- Advanced Reasoning Benchmark (ARB): **not numerically published** — NVIDIA technical report
- TigerBot LeetCode: **not numerically published** — NVIDIA technical report
- SciBench: **not numerically published** — NVIDIA technical report
- Scale Labs MultiChallenge: **56.03%** (ranked #1 among small models) — Scale Labs / X post cited by MarkTechPost

Reasoning / knowledge (vendor-reported):

- MultiChallenge: **59.32%** (BF16) / **55.60%** (Q4_K_M) — NVIDIA
- RoleMRC: **77.00%** (BF16) / **67.05%** (Q4_K_M) — NVIDIA
- RoleBench Custom: **67.05%** (BF16) — NVIDIA (unsloth GGUF)
- Advanced Reasoning Benchmark (ARB): **not numerically published** — NVIDIA
- SciBench: **not numerically published** — NVIDIA
- MMLU / GPQA Diamond / AIME / HLE / MMLU-Pro / MATH / BBH: **no scores** in NVIDIA report
- Non-reasoning mode evaluations: Table 4 in technical report (not numerically published here)

Coding:

- Synthetic Single-Step SWE Patch Selection: **not numerically published** — NVIDIA technical report
- SWE-bench Verified / Pro / Terminal-Bench / LiveCodeBench / HumanEval / MBPP / Codeforces: **no scores**

Long context:

- Native 64K context verified
- MultiChallenge / RoleMRC / Tau2-Bench evaluated at 64K context
- RULER / MRCR / GraphWalks / LongBench / LOFT / AA-LCR: **no scores**

Multimodal:

- **No native multimodal** (text-only per NVIDIA research page, build.nvidia.com, technical report).

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 55/100.** Tau2-Bench 55.1% (BF16) leads Gemma 4 E4B (42.1%) and Qwen3.5 4B (49%). RelyToolBench, SysBench, BFCL-v3 included but not numerically published. **All vendor-reported, zero independent reproduction.** Capped by no independent verification and no SWE-bench/Terminal-Bench/MCP-Atlas.
- **Reasoning: 60/100.** MultiChallenge 59.3% (BF16) / 55.6% (Q4_K_M) leads Gemma 4 E4B (42.1%) and Qwen3.5 4B (49%). RoleMRC 77% exceptional. **No standard reasoning benchmarks** (GPQA, AIME, HLE, MMLU, MATH). Scale Labs ranked #1 small model on MultiChallenge (56.03%). Capped by no standard benchmarks and vendor-only data.
- **Context window: 50/100.** 64K native (64K tier = 45–50). No RULER/MRCR/GraphWalks/LongBench/AA-LCR. MultiChallenge/RoleMRC at 64K context. Tier placement.
- **Multimodal: 15/100.** Text-only input/output. No vision/audio/video. Floor for text-only model.
- **Coding: 30/100.** Synthetic SWE Patch Selection evaluated but not published. **No standard coding benchmarks** (SWE-bench, LiveCodeBench, HumanEval, Terminal-Bench). Capped by zero published coding benchmarks.
- **Cost efficiency: 95/100.** Apache-2.0 open weights = self-host free. Q4_K_M 3.1–4.3 GB VRAM (consumer RTX). No managed API. Best-in-class value for local agentic model.
- **Overall Score: 42/100.** Mean of (55+60+50+15+30)/5 = 42.0 → 42. Queue shows not ranked (absent from model-queue.md top 200). Best fit: **best-in-class local 8B agent model**; Tau2-Bench 55%, MultiChallenge 59%, RoleMRC 77% lead Gemma 4 E4B and Qwen3.5 4B; Apache-2.0, 4GB VRAM; zero independent verification; no standard reasoning/coding benchmarks; text-only.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (NVIDIA research page, technical report PDF, build.nvidia.com, Hugging Face unsloth GGUF, MarkTechPost, DataStudios, BenchLM comparisons); scores normalized 1–100 per model-comparison.md methodology. **Critical limitations:** All 21 benchmarks vendor-reported via NVIDIA NeMo-Gym; zero independent third-party reproduction; BenchLM shows 0 shared benchmarks with o3-mini/Qwen3.5 Flash; no standard reasoning (GPQA/AIME/HLE/MMLU) or coding (SWE-bench/HumanEval) benchmarks published; text-only; 64K context.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.