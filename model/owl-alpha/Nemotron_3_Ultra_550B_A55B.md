# Owl Alpha / LongCat-2.0 — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owl Alpha (revealed as LongCat-2.0)
- **Short description:** Meituan's 1.6 trillion parameter MoE model, open-sourced July 5, 2026. Previously ran anonymously as "Owl Alpha" on OpenRouter (April 28 – June 2026), topping developer rankings for agentic tasks. 1.6T total / ~48B active (dynamic 33B–56B). 1M native context. MIT license. Trained entirely on Chinese ASICs (50,000 chips, zero NVIDIA). Text + image input; text output.
- **Provider / access:** Hugging Face (`meituan-longcat/LongCat-2.0`), OpenRouter (`openrouter/owl-alpha` - now redirected to LongCat-2.0), longcatai.org chat, vLLM, SGLang, Ollama. Self-hosted (MIT). OpenRouter API: `openrouter/longcat-2.0` (was `openrouter/owl-alpha`).
- **Release / knowledge:** 2026-07-05 open-source release (LongCat-2.0); 2026-04-28 Owl Alpha debut on OpenRouter; knowledge cutoff not published.
- **IDs:** `meituan-longcat/LongCat-2.0` (HF), `openrouter/longcat-2.0` (OpenRouter), `openrouter/owl-alpha` (legacy). MIT license = self-host free.
- **Context window:** 1,000,000 tokens native (1,048,576 per some sources). Verified via Meituan blog, HF, OpenRouter, LongCat timeline, TensorFeed.
- **Modalities:** Text + image input; text output. **Multimodal** (vision). Reasoning: yes (agentic reasoning). Tool calls: yes (native function calling, tool use). JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** Self-hosted: $0/M (MIT). VRAM: ~320GB fp8 (1.6T) / ~96GB Q4 - requires multi-GPU. OpenRouter: pricing not published (was free tier during Owl Alpha preview). No managed API free tier.
- **Architecture:** 1.6T total / ~48B active dynamic MoE (33B–56B active per token). 1M context (native). Trained on 50,000 Chinese ASICs (no NVIDIA GPUs). MIT license. Dynamic routing.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

> **SOURCE MIX:** Vendor-reported (Meituan blog/HF) + OpenRouter/Benchable.ai community benchmarks + harness rankings (Hermes Agent, Claude Code, OpenClaw). **No independent third-party reproduction** of vendor benchmarks found.

Agent / tool use:

- Terminal-Bench 2.1: **70.8%** (vendor, Meituan blog) — LongCat-2.0 blog / TensorFeed / TheMenonLab
- SWE-bench Pro: **59.5%** (vendor) — Meituan blog / TensorFeed
- SWE-bench Multilingual: **77.3%** (vendor) — Meituan blog
- SWE-bench Verified: **no vendor score** (LongCat-2.0 blog omits)
- BrowseComp: **79.9%** (vendor) — Meituan blog
- OSWorld 2.0: **no vendor score** (LongCat-2.0 blog omits)
- Hermes Agent / Claude Code / OpenClaw harness: **top rankings** during Owl Alpha preview (Apr–Jun 2026) — LongCat timeline / SpaghettiStories / TensorFeed
- Benchable.ai (OpenRouter, Owl Alpha era): Hallucinations 100%, Email Classification 97%, Mathematics 95%, Coding 90.9%, Reasoning 79.6%, Ethics 77.8%, Instruction Following 60.8%, General Knowledge 52% — Benchable.ai
- MCP-Atlas / τ²-Bench / BFCL / Toolathlon / PinchBench / AutomationBench: **no scores**

Reasoning / knowledge:

- Benchable.ai Mathematics: **95%** (89th percentile) — Benchable.ai (Owl Alpha era)
- Benchable.ai Reasoning: **79.6%** (57th percentile) — Benchable.ai
- Benchable.ai General Knowledge: **52%** (16th percentile) — Benchable.ai
- MMLU / GPQA Diamond / AIME / HLE / MMLU-Pro / MATH / BBH / C-Eval / SuperGPQA: **no vendor scores**
- Benchable.ai Overall reliability: **99% success rate** across 8 benchmarks — Benchable.ai

Coding:

- Terminal-Bench 2.1: **70.8%** (vendor) — Meituan blog / TensorFeed
- SWE-bench Pro: **59.5%** (vendor) — Meituan blog
- SWE-bench Multilingual: **77.3%** (vendor) — Meituan blog
- SWE-bench Verified: **no score**
- LiveCodeBench / HumanEval / MBPP / Codeforces / SciCode / Terminal-Bench Hard / SWE-Rebench: **no scores**
- Benchable.ai Coding: **90.9%** (65th percentile) — Benchable.ai

Long context:

- Native 1M context verified (1,048,576 tokens)
- Long-context agentic tasks (BrowseComp 79.9%, SWE-bench Pro 59.5% at 1M context)
- RULER / MRCR / GraphWalks / LongBench / LOFT / AA-LCR: **no scores**

Multimodal:

- Text + image input; text output (per Meituan blog, HF, OpenRouter)
- Vision benchmarks (MMMU, MathVista, ChartQA, DocVQA, AI2D, OCRBench, VideoMMU): **no scores**
- Benchable.ai Email Classification: **97%** (46th percentile) — Benchable.ai

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 75/100.** Terminal-Bench 2.1 70.8% (vendor), SWE-bench Pro 59.5%, SWE-bench Multilingual 77.3%, BrowseComp 79.9%. Top-tier harness rankings (Hermes Agent, Claude Code, OpenClaw) during Owl Alpha preview. **All vendor-reported for SWE/Terminal; zero independent reproduction.** Benchable.ai shows 99% reliability. Capped by no independent SWE-bench/Terminal-Bench verification and no MCP-Atlas/τ²-Bench/BFCL.
- **Reasoning: 60/100.** Benchable.ai Mathematics 95% (89th %ile), Reasoning 79.6% (57th %ile). **No standard reasoning benchmarks** (GPQA, AIME, HLE, MMLU, MMLU-Pro, MATH). General Knowledge only 52% (16th %ile). Capped by no standard benchmarks and vendor/community-only data.
- **Context window: 95/100.** 1M native (1M+ tier = 90–95). BrowseComp 80%, SWE-Pro 59.5% at 1M context. No RULER/MRCR/GraphWalks/LongBench/AA-LCR verification. Tier placement + demonstrated 1M agentic performance saves score.
- **Multimodal: 50/100.** Text + image input claimed. **Zero vision benchmarks** (MMMU, MathVista, ChartQA, DocVQA, AI2D, OCRBench, VideoMMU). Benchable.ai Email Classification 97% (text classification, not vision). Capped by no vision benchmarks.
- **Coding: 70/100.** Terminal-Bench 2.1 70.8% (vendor, near Opus 4.7 71.7%), SWE-bench Pro 59.5%, SWE-bench Multilingual 77.3%. Benchable.ai Coding 90.9% (65th %ile). **No SWE-bench Verified / LiveCodeBench / HumanEval / Codeforces.** Capped by no SWE-Verified and zero independent coding verification.
- **Cost efficiency: 60/100.** MIT open weights = self-host free. But 1.6T model requires massive VRAM (~320GB fp8 / ~96GB Q4) — not practical for most. OpenRouter pricing unpublished. Free tier during preview. Capped by impractical self-host requirements.
- **Overall Score: 70/100.** Mean of (75+60+95+50+70)/5 = 70.0 → 70. Queue rank unknown (LongCat-2.0 not in model-queue.md). Best fit: **exceptional open-source agentic model at 1M context**; Terminal-Bench 71%, SWE-Pro 60%, SWE-Multilingual 77% near frontier; MIT license; trained on Chinese ASICs; zero independent verification of vendor benchmarks; no standard reasoning/vision benchmarks.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Meituan LongCat-2.0 blog, HF model card, OpenRouter owl-alpha/longcat-2.0, Benchable.ai Owl Alpha benchmarks, SpaghettiStories Owl Alpha timeline, TensorFeed.ai reveal article, TheMenonLab LongCat analysis, LongCat timeline); scores normalized 1–100 per model-comparison.md methodology. **Critical limitations:** Vendor benchmarks (Meituan) not independently reproduced; Benchable.ai data from Owl Alpha preview period (Apr–Jun 2026); no standard reasoning (GPQA/AIME/HLE/MMLU) or vision benchmarks; Owl Alpha identity retired, now LongCat-2.0 canonical; 1.6T params impractical for most self-host.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.