# Ling 3.0 Flash Santé — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Santé (Ling-3.0-flash-Sante)
- **Short description:** InclusionAI (Ant Group)'s healthcare-specialized MoE model, released September 5, 2026. 124B total / 5.1B active MoE. Built on Ling-3.0-flash with medical domain tuning. MIT license. Text-only (no image input). 256K context. Designed for medical reasoning, clinical safety, evidence-based retrieval, deep research, multi-agent collaboration.
- **Provider / access:** Hugging Face (`inclusionAI/Ling-3.0-flash-Sante`), ModelScope, OpenRouter (`inclusionai/ling-3.0-flash-sante`), Novita AI. Self-hosted (MIT license). OpenRouter free tier: 200 req/day. No managed free tier from InclusionAI.
- **Release / knowledge:** 2026-09-05 release; knowledge cutoff not published.
- **IDs:** `inclusionAI/Ling-3.0-flash-Sante` (HF/ModelScope), `inclusionai/ling-3.0-flash-sante` (OpenRouter/Novita). MIT license = self-host free.
- **Context window:** 262,144 tokens (256K tier). Verified via HF model card, BenchLM, OpenRouter, Novita AI, InclusionAI blog.
- **Modalities:** Text input; text output. **No native multimodal** (text-only per HF card, BenchLM, OrcaRouter, Goremy.ai review). Reasoning: yes (highest tier reasoning effort). Tool calls: yes (web search, terminal, multi-agent). JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** Self-hosted: $0/M (MIT). OpenRouter: $0.042/M in, $0.1232/M out. Novita AI: not published. Blended API ~$0.04–0.12/M. Free on OpenRouter (200 req/day). MIT license.
- **Architecture:** 124B total / 5.1B active MoE. 256K context. Fine-tuned from Ling-3.0-flash on medical data. MIT license.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

> **CRITICAL LIMITATION:** All benchmarks vendor-reported by InclusionAI (Ant Group). **Zero independent third-party reproduction** found (OrcaRouter, Goremy.ai, BenchLM all cite vendor numbers). Model weights **not publicly downloadable** as of 2026-10-27 (HF page exists but no weights uploaded per OrcaRouter).

Agent / tool use (vendor-reported):

- BrowseComp: **80.2%** (single-agent, 256K ctx, temp 1.0, up to 1000 turns) — HF card / BenchLM / InclusionAI blog
- DeepSearchQA: **90.8%** — HF card / BenchLM / InclusionAI blog
- HLE w/ tools: **57.1%** (256K ctx, temp 1.0) — HF card / BenchLM / InclusionAI blog
- GDPval-AA: **1288** — HF card / BenchLM / InclusionAI blog
- MCP Atlas: **75.6%** — HF card / BenchLM / InclusionAI blog
- AFUMED-Drug: **not numerically published** (claimed leading) — InclusionAI blog / OrcaRouter
- AFUSAFE-MedSCE: **78.6%** (internal) — OrcaRouter / InclusionAI blog
- MedEthicAlign: **82.1%** — OrcaRouter / InclusionAI blog
- BrowseComp multi-agent: **not numerically published** (claimed strong) — Goremy.ai review (64 sub-agents, in-house harness)

Reasoning / knowledge:

- AA-LCR: **70.5%** — HF card / BenchLM / InclusionAI blog
- HealthBench Professional: **54.3%** — HF card / BenchLM / InclusionAI blog
- MedXpertQA (Text): **51.0%** (HF card / BenchLM) vs **53.9%** (OrcaRouter) — **CONFLICT: 51.0% vs 53.9%**
- DiagnosisArena-MCQ: **83.8%** (claimed vs GPT-5.6 Sol 81.9, Kimi K3 78.4, Gemini 3.6 Flash 76.2) — InclusionAI blog / OrcaRouter / Goremy.ai
- GPQA Diamond / AIME / MMLU / MMLU-Pro / HLE (no tools) / SuperGPQA: **no scores** for Santé specifically
- Ling-3.0-flash base: AA Intelligence Index **38** (median 9), ~380 tok/s — Artificial Analysis (independent, for base model only)

Coding:

- SWE-bench Verified / Pro / Terminal-Bench / LiveCodeBench / HumanEval / MBPP / Codeforces: **no scores** for Santé specifically

Long context:

- Native 256K context verified (262,144)
- BrowseComp: 256K ctx, up to 1000 turns, single-agent discard-all at 40% usage
- DeepSearchQA / HLE w/ tools: 256K ctx, no context management
- RULER / MRCR / GraphWalks / LongBench / LOFT: **no scores**

Multimodal:

- **No native multimodal** (text-only per HF card, BenchLM, OrcaRouter, Goremy.ai). **No image input** — confirmed by Goremy.ai hands-on review. Major limitation for medical use (radiology, pathology, dermatology, scanned reports).

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 65/100.** BrowseComp 80%, DeepSearchQA 91%, HLE w/ tools 57%, MCP Atlas 76%, GDPval-AA 1288. Strong deep research/agentic scores but **ALL vendor-reported, zero independent verification**. Weights not downloadable = cannot reproduce. Capped by zero independent reproduction and no standard agentic benchmarks (SWE-bench, Terminal-Bench, Toolathlon, τ²-Bench).
- **Reasoning: 55/100.** AA-LCR 71%, HealthBench Pro 54%, MedXpertQA 51–54% (conflict), DiagnosisArena-MCQ 84% (vendor). No GPQA/AIME/MMLU/HLE (no tools). Base model (Ling-3.0-flash) AA Index 38 (independent). Capped by no standard reasoning benchmarks, MedXpertQA conflict (51% vs 54%), zero independent Santé evals.
- **Context window: 85/100.** 256K native (256K tier = 80–85). BrowseComp/DeepSearchQA/HLE run at 256K with multi-turn. No RULER/MRCR/GraphWalks/LOFT. Tier placement saves score.
- **Multimodal: 15/100.** Text-only. **No image input** confirmed by Goremy.ai review. Major gap for medical model (no radiology, pathology, dermatology, scanned reports). Floor for text-only.
- **Coding: 15/100.** **No coding benchmarks** published for Santé. Base model Ling-3.0-flash has no published coding scores either. Floor for non-coding specialist.
- **Cost efficiency: 95/100.** MIT open weights (when released) = self-host free. OpenRouter $0.04/$0.12 (very cheap). Free tier 200 req/day. But weights not downloadable yet.
- **Overall Score: 47/100.** Mean of (65+55+85+15+15)/5 = 47.0 → 47. Queue shows 59.5 — gap due to zero independent verification, no coding, text-only, no standard reasoning benchmarks. Best fit: **promising medical specialist but entirely unverified**; vendor claims strong (DiagnosisArena 84%, MCP Atlas 76%) but zero independent reproduction, weights not downloadable, text-only limits clinical utility.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (InclusionAI HF model card, InclusionAI blog, BenchLM, OrcaRouter (2 articles), Goremy.ai hands-on review, OpenRouter, Novita AI, freellm.net); scores normalized 1–100 per model-comparison.md methodology. **Critical limitations:** All benchmarks vendor-reported; zero independent reproduction; weights not downloadable; MedXpertQA conflict (51% vs 54%); text-only (no image input); no coding/standard reasoning benchmarks. Base model Ling-3.0-flash has independent AA Index 38.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.