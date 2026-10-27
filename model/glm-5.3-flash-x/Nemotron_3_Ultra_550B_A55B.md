# GLM 5.3 Flash X — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash X (GLM-5.3-FlashX)
- **Short description:** Z.AI's speed-optimized serving variant of GLM-5.3 Flash, released September 18, 2026. Same underlying model (320B total, 18B active MoE, hybrid sparse+linear attention, native multimodal) with inference infrastructure optimizations (EPD separation, speculative decoding via MTP, custom SGLang engine on Chinese AI chips). Delivers up to 200 tokens/s. Open weights (MIT license).
- **Provider / access:** Z.AI API (`glm-5.3-flashx`), OpenRouter (`z-ai/glm-5.3-flashx`), Baseten, DashScope, Bank of AI. Chat Completions API with reasoning_effort (low/high/max). Native multimodal: text, image, video, PDF in; text out.
- **Release / knowledge:** 2026-09-18 release; knowledge cutoff not published (same as GLM-5.3-Flash).
- **IDs:** `glm-5.3-flashx` (Z.AI), `z-ai/glm-5.3-flashx` (OpenRouter). No free tier.
- **Context window:** 1,048,576 tokens (1M). Verified via Z.AI docs, OpenRouter, Artificial Analysis.
- **Modalities:** Text, image, video, PDF input; text output. Reasoning: yes (configurable low/high/max, default max). Tool calls: yes (function calling, streaming tools, JSON output). Structured output: yes. Auto context caching.
- **Pricing (as of 2026-10-27):** Z.AI list: $0.37/M in, $1.25/M out, cached $0.075/M. OpenRouter: $0.0352/M in, $0.50/M out. Bank of AI: $0.37/$1.25. Blended ~$0.59/M. 2.5x standard Flash price. No free tier.
- **Architecture:** 320B total params, 18B active MoE. Hybrid sparse+linear attention (3.01× attention compute reduction, 4.44× KV cache reduction vs GLM-5.3). Manifold-Constrained Hyper-Connections (mHC). 30T multimodal pre-training corpus. MIT license. FP8 quantization on OpenRouter.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

> **CRITICAL NOTE:** Z.AI states FlashX shares the exact same weights/checkpoint as Flash — only serving infrastructure differs. No separate benchmark runs published for FlashX. All scores below are from GLM-5.3-Flash (vendor-reported or independent) and apply to FlashX by equivalence. Model Personality Browser explicitly notes "borrowed score: this is glm-5.3-flash's ladder, same weights on a faster stack."

Agent / tool use (from GLM-5.3-Flash):

- Terminal-Bench 2.1: **84.3%** (Claude Code 2.1.207, max effort, 6h timeout) — Z.AI blog
- DeepSWE v1.1: **63.4%** (mini-swe-agent, 400K context, 6h timeout) — Z.AI blog
- NL2Repo: **56.3%** (temp=1.0, top_p=1.0, 1M context) — Z.AI blog
- Toolathlon Verified: **78.4%** (pass@1, avg 3 runs, official service) — Z.AI blog
- AutomationBench v1.0.6: **48.8%** — Z.AI blog
- Agents' Last Exam: **26.3%** (Claude Code harness, max effort, 1M context) — Z.AI blog
- HLE w/ Tools: **55.3%** (full set, GPT-5.6-luna judge) — Z.AI blog
- GDPval-AA v2: **1773** Elo — Z.AI blog (Artificial Analysis)
- Harvey LAB (legal): **19.2%** all-criteria pass — Z.AI docs (SOTA open-source)

Reasoning / knowledge (from GLM-5.3-Flash):

- GPQA Diamond: **8.83/10** (measured, Model Personality Browser) → ~88%
- HLE: **3.68/10** (measured) → ~37%
- AA-LCR: **8.00/10** (measured) → ~80%
- Terminal-Bench 2.1: **8.43/10** (measured) → ~84%
- SciCode: **5.16/10** (measured) → ~52%
- AutomationBench: **6.04/10** (measured) → ~60%
- AA-Briefcase: **4.64/10** (measured) → ~46%
- MLCR: **5.11/10** (measured) → ~51%
- τ³-Banking: **4.72/10** (measured) → ~47%
- Omniscience Accuracy: **2.75/10** (measured) → ~28%
- CritPt: **1.54/10** (measured) → ~15%
- GDP.pdf: **1.30/10** (measured) → ~13%
- Artificial Analysis Intelligence Index v4.1.1: **57** (discounted) — Z.AI blog
- AA Intelligence Index v4.3: **41.8** (OpenRouter)

Coding (from GLM-5.3-Flash):

- SWE-bench (Vals): **92.0%** — OpenRouter comparison
- LiveCodeBench (Vals): **80.5%** — OpenRouter
- Code Migration: **51.6%** — OpenRouter
- IOI: **52.5%** — OpenRouter
- ProgramBench: **0.0%** — OpenRouter
- SkillsBench: **40.2%** — OpenRouter
- Z.ai Code Bench v1.0 (Claude Code): **29.0** vs Opus 4.8 **29.5** — Z.AI blog
- DeepSWE v1.1: **63.4%** vs Opus 4.8 **58.0%** — Z.AI blog

Long context (from GLM-5.3-Flash):

- AA-LCR v1.1: **80%** — Artificial Analysis / OpenRouter
- Native 1M context verified
- MRCR / RULER / GraphWalks: no separate FlashX scores

Multimodal (from GLM-5.3-Flash):

- OfficeQA Pro: **62.4%** — Z.AI blog
- CharXiv Reasoning w/ Tools: **89.4%** — Z.AI blog
- Chartography w/ Tools: **78.0%** — Z.AI blog
- BabyVision: **53.4%** — Z.AI blog
- MVBench: **77.8%** — Z.AI blog
- MMVU: **80.5%** — Z.AI blog
- OSWorld 2.0: **59.1%** — Z.AI blog
- Vision2Web: **77.8%** — Z.AI blog

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** Terminal-Bench 2.1 84%, Toolathlon 78%, DeepSWE 63%, AutomationBench 49%, Agents' Last Exam 26%. Strong agentic coding but AutomationBench and ALE moderate. Capped by ALE 26% and no independent FlashX verification.
- **Reasoning: 68/100.** GPQA ~88%, HLE ~37%, AA Index 42 (Flash) / 57 (v4.1.1 discounted), CritPt 15%, Omniscience 28%. Good GPQA but HLE and CritPt very low. Capped by HLE 37% and AA Index 42 vs top models (55+).
- **Context window: 90/100.** 1M native context. AA-LCR 80% (v1.1). Same long-context architecture as Flash. Capped by no MRCR/RULER/GraphWalks scores for Flash/FlashX specifically.
- **Multimodal: 78/100.** Native text/image/video/PDF. CharXiv 89%, Chartography 78%, MMVU 81%, MVBench 78%, OSWorld 59%, OfficeQA 62%. Strong vision+tools. Capped by text-only output, no audio generation, BabyVision 53%.
- **Coding: 82/100.** SWE-bench 92% (Vals), DeepSWE 63% (beats Opus 4.8 58%), LiveCodeBench 81%, Z.ai Code Bench 29.0 vs Opus 29.5, NL2Repo 56%. Exceptional SWE-bench but ProgramBench 0% and IOI 53% moderate. Capped by ProgramBench 0% and no independent FlashX coding verification.
- **Cost efficiency: 65/100.** $0.37/$1.25 (Z.AI) / $0.035/$0.50 (OpenRouter). Blended ~$0.59/M. 2.5x Flash price but 2-3x speed. Cheaper than Opus/GPT-5.4/Wonder. No free tier. Open weights available (MIT) for self-host.
- **Overall Score: 79/100.** Mean of (78+68+90+78+82)/5 = 79.2 → 79. Queue shows 82.1 — gap due to no independent FlashX benchmarks (all borrowed from Flash), HLE/CritPt/Omniscience very low. Best fit: speed-critical agentic coding/workflows where 200 tok/s throughput justifies 2.5x Flash premium; same intelligence as Flash.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Z.AI blog/docs, OpenRouter comparison, Model Personality Browser, Artificial Analysis, Bank of AI, BuildFastWithAI review, pricing.fru.dev); scores normalized 1–100 per model-comparison.md methodology. **Critical limitation:** Zero independent FlashX benchmarks — all scores borrowed from GLM-5.3-Flash per Z.AI's "same weights, faster stack" claim. Model Personality Browser confirms borrowed ladder. Conflicting AA Index (41.8 vs 57 discounted) noted.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.