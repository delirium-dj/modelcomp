# GLM 4.5 Flash — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.5 Flash (GLM-4.5-Flash)
- **Short description:** Z.ai (Zhipu AI)'s compact MoE model, released July 28, 2025. Architecture unclear: Z.ai blog announces GLM-4.5 (355B/32B MoE) and GLM-4.5-Air (106B). "Flash" appears to be the API name for GLM-4.5 or GLM-4.5-Air on Z.ai's free tier. freellm.net lists model ID `glm-4.5` with 128K context. MIT license (open weights on HF). Hybrid reasoning (thinking/non-thinking modes). Text-only.
- **Provider / access:** Z.ai API (`glm-4.5` model ID), Hugging Face (`zai-org/GLM-4.5`), OpenRouter (`z-ai/glm-4.5`), freellm.net (free tier). Self-hosted (MIT). Z.ai free tier: 1 concurrent request. No managed API free tier for "Flash" specifically.
- **Release / knowledge:** 2025-07-28 release (Z.ai blog); knowledge cutoff April 2025 (per freellm.net).
- **IDs:** `glm-4.5` (Z.ai API / freellm.net), `z-ai/glm-4.5` (OpenRouter), `zai-org/GLM-4.5` (HF). MIT license.
- **Context window:** 128K–131K tokens. Z.ai blog: 128K. freellm.net: 128K context, 96K max output. Artificial Analysis: 131.1K. Verified via multiple sources.
- **Modalities:** Text input; text output. **No native multimodal** (text-only per Z.ai blog, freellm.net, aibase.com). Reasoning: yes (hybrid thinking/non-thinking modes). Tool calls: yes (native function calling, web browsing). JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** Z.ai free tier: $0/M in, $0/M out (1 concurrent request). OpenRouter: not listed for "Flash" specifically. Self-hosted: $0/M (MIT). VRAM: 355B/32B MoE = ~64GB fp8 / ~16GB Q4 (for GLM-4.5); 106B for GLM-4.5-Air. Blended API: free on Z.ai.
- **Architecture:** **AMBIGUOUS.** Z.ai blog announces two models: GLM-4.5 (355B total / 32B active MoE) and GLM-4.5-Air (106B total). "Flash" API name maps to `glm-4.5` model ID per freellm.net. aibase.com lists "GLM 4.5 Flash" with same benchmarks as GLM-4.5 (355B). **Likely "Flash" = GLM-4.5 (355B/32B) on free tier, not a distinct smaller model.** MIT license (open weights).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

> **CRITICAL AMBIGUITY:** All benchmarks below are for **GLM-4.5 (355B/32B MoE)** per Z.ai blog/arXiv. No separate "Flash" benchmarks exist. freellm.net Artificial Analysis scores (Intelligence 12.8, Coding 26.3, Agentic 16.2) are for the free-tier API model (likely GLM-4.5).

Agent / tool use (GLM-4.5, vendor-reported Z.ai blog/arXiv):

- τ²-Bench (TAU-Bench): **70.1%** (thinking) — Z.ai blog / arXiv 2508.06471
- BFCL v3: **77.8%** (thinking) — Z.ai blog / arXiv
- BrowseComp: **26.4%** (thinking, with web browsing) — Z.ai blog / arXiv
- SWE-bench Verified: **64.2%** (OpenHands v0.34.0, temp 0.6) — Z.ai blog / arXiv
- Terminal-Bench: **37.5%** (Terminus framework) — Z.ai blog / arXiv
- Terminal-Bench Hard / 2.0/2.1 / Toolathlon / MCP-Atlas / PinchBench / ClawEval / AutomationBench / OfficeQA / JobBench: **no scores**

Reasoning / knowledge (GLM-4.5, vendor-reported Z.ai blog/arXiv):

- MMLU Pro: **84.6%** — Z.ai blog / arXiv
- AIME 2024: **91.0%** (Avg@32) — Z.ai blog / arXiv
- MATH 500: **98.2%** — Z.ai blog / arXiv
- SciCode: **41.7%** — Z.ai blog / arXiv
- GPQA: **79.1%** — Z.ai blog / arXiv
- HLE: **14.4%** (text-only, gpt-4o judge) — Z.ai blog / arXiv
- LiveCodeBench (2407-2501): **72.9%** — Z.ai blog / arXiv
- AA-Index (Estimated): **67.7** — Z.ai blog / arXiv
- GPQA Diamond: **no direct score** (GPQA 79.1% reported)
- AIME 2025 / MMLU / C-Eval / SuperGPQA / MMMLU / BBH / ZebraLogic: **no scores** for GLM-4.5 specifically

Coding (GLM-4.5, vendor-reported):

- SWE-bench Verified: **64.2%** — Z.ai blog / arXiv
- Terminal-Bench: **37.5%** — Z.ai blog / arXiv
- LiveCodeBench: **72.9%** — Z.ai blog / arXiv
- SciCode: **41.7%** — Z.ai blog / arXiv
- HumanEval / MBPP / Codeforces / SWE-bench Pro / Terminal-Bench 2.0/2.1 / SWE-Rebench: **no scores**

Long context:

- Native 128K context verified
- AA-LCR / RULER / MRCR / GraphWalks / LongBench / LOFT / MMLongBench: **no scores** for GLM-4.5/Flash specifically

Multimodal:

- **No native multimodal** (text-only per Z.ai blog, freellm.net, aibase.com). GLM-4.6V/4.5V are vision variants.

**Independent scores (freellm.net / Artificial Analysis, for API model `glm-4.5`):**

- Intelligence: **12.8/100** — freellm.net (Artificial Analysis)
- Coding: **26.3/100** — freellm.net (Artificial Analysis)
- Agentic: **16.2/100** — freellm.net (Artificial Analysis)
- SciCode: **34.8%** — freellm.net (Artificial Analysis, 2026-03-11)
- Terminal-Bench Hard: **22%** — freellm.net (Artificial Analysis, 2026-03-11)
- AA Coding Index: **26.3** — freellm.net

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 60/100.** τ²-Bench 70% (vendor), BFCL v3 78% (vendor), BrowseComp 26% (vendor), SWE-bench Verified 64% (vendor). Strong vendor scores but **all vendor-reported, zero independent reproduction** for agentic benchmarks. freellm.net Agentic 16.2 (AA) much lower. Capped by zero independent agentic evals and BrowseComp 26% modest.
- **Reasoning: 65/100.** MMLU Pro 85%, AIME 24 91%, MATH 500 98%, GPQA 79%, HLE 14%, LiveCodeBench 73%, SciCode 42% (vendor). AA estimates: Intelligence 12.8, SciCode 35%, TB Hard 22%. Strong math (AIME 91%, MATH 98%) but HLE low (14%). Capped by HLE 14% and zero independent reasoning benchmarks (all vendor).
- **Context window: 80/100.** 128K–131K native (128K tier = 75–80). No AA-LCR/RULER/MRCR/GraphWalks/LongBench/LOFT. Tier placement saves score.
- **Multimodal: 15/100.** Text-only input/output. No vision/audio/video. Floor for text-only model.
- **Coding: 55/100.** SWE-bench Verified 64% (vendor), Terminal-Bench 38% (vendor), LiveCodeBench 73% (vendor), SciCode 42% (vendor) / 35% (AA). Strong vendor scores but **AA independent: SciCode 35%, TB Hard 22%, Coding Index 26.3**. Capped by AA independent scores (22–35%) vs vendor (38–73%).
- **Cost efficiency: 95/100.** Z.ai free tier ($0/M, 1 concurrent). MIT open weights = self-host free. 355B/32B MoE = ~64GB fp8. Best-in-class value if free tier sufficient.
- **Overall Score: 55/100.** Mean of (60+65+80+15+55)/5 = 55.0 → 55. Queue shows 55.1 — match. freellm.net composite much lower (Intel 12.8, Coding 26.3, Agentic 16.2). Best fit: **strong vendor claims but zero independent agentic/reasoning verification**; free tier on Z.ai; text-only; "Flash" identity ambiguous (likely GLM-4.5 355B on free tier).

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Z.ai blog, arXiv 2508.06471, HF model card, freellm.net/Artificial Analysis, aibase.com, OpenRouter, AnotherWrapper); scores normalized 1–100 per model-comparison.md methodology. **Critical ambiguity:** "GLM-4.5-Flash" identity — all benchmarks from GLM-4.5 (355B/32B) vendor reports; no distinct "Flash" benchmarks; freellm.net AA scores for `glm-4.5` API model much lower than vendor claims. **Zero independent reproduction** of vendor agentic/reasoning benchmarks. Text-only confirmed.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.