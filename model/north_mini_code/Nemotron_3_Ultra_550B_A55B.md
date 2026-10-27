# North Mini Code — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code (North-Mini-Code-1.0)
- **Short description:** Cohere's first open-source model for agentic coding, released June 9, 2026. 30B total / 3B active MoE. Apache-2.0 license. Trained with SFT + RLVR (reinforcement learning from verifiable rewards) across SWE-Agent, Terminal-Bench, OpenCode harnesses. 256K context. Optimized for local deployment, speed, and cross-harness generalization.
- **Provider / access:** Hugging Face (`CohereLabs/North-Mini-Code-1.0-w4a16`, `CohereLabs/North-Mini-Code-1.0`), Cohere API (North platform), Ollama, llama.cpp, vLLM, SGLang. Self-hosted (Apache-2.0). No managed free tier.
- **Release / knowledge:** 2026-06-09 release; knowledge cutoff not published.
- **IDs:** `CohereLabs/North-Mini-Code-1.0` (HF), `north-mini-code` (Cohere/Ollama). Apache-2.0 license.
- **Context window:** 256K tokens (262,144). Verified via HF model card, Cohere docs, Artificial Analysis, Sebastian Raschka blog, Cohere blog.
- **Modalities:** Text input; text output. **No native multimodal** (text-only per Cohere, HF, Artificial Analysis, all reviews). Reasoning: yes (RLVR-trained, thinking enabled). Tool calls: yes (terminal, SWE-Agent, OpenCode, ReAct harness). JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** Self-hosted: $0/M (Apache-2.0). VRAM: ~8GB fp16 / ~4GB Q4 (3B active). Cohere API: not published (North platform). OpenRouter: not listed. Artificial Analysis: $0.00/M (self-host only). Blended API: N/A.
- **Architecture:** 30B total / 3B active MoE. 256K context. w4a16 quantization available on HF. SFT + RLVR (joint training across SWE-Bench + Terminal-Bench). 80.2% pass@10 SWE-Bench Verified (SFT), 55.1% pass@10 Terminal-Bench v2 (SFT). RLVR adds +7.9% TB v2, +3.0% SWE-Bench pass@1. Apache-2.0.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

> **SOURCE MIX NOTE:** Cohere release benchmarks use **mixed sources** — public reports, Artificial Analysis, and internal runs (marked *). Gemma 4 agentic scores attributed to Qwen team. Harness versions, tool schemas, prompts, inference settings, timeouts, hardware limits vary. Not one uniform evaluation run (per Sebastian Raschka blog, Cohere blog footnotes).

Agent / tool use (Cohere release table, temp 1.0, top-p 0.95, 3 seeds avg):

- Terminal-Bench v2: **36.0%** (SWE-Agent harness) — Cohere blog / HF card / Raschka blog / Artificial Analysis (33.4 Coding Index)
- Terminal-Bench Hard: **31.1%** (Terminus-2 harness, AA methodology) — Cohere blog / HF card / Raschka blog
- SWE-bench Verified: **67.6%** (SWE-Agent harness v1.1.0) — Cohere blog / HF card / Raschka blog / Artificial Analysis
- SWE-bench Pro: **40.2%** (SWE-Agent harness) — Cohere blog / HF card / Raschka blog
- SWE-bench Verified pass@10: **80.2%** (SFT) → **+3.0% pass@1 from RLVR** — Cohere blog / HF card
- Terminal-Bench v2 pass@10: **55.1%** (SFT) → **+7.9% pass@1 from RLVR** — Cohere blog / HF card
- OpenCode harness SWE-Bench Verified: **10% gain** from cross-harness data (6% of SFT mix) — Cohere blog / HF card
- Internal human eval (85 samples): **66.1% aggregate win rate** vs SFT (code editing strongest) — Cohere blog / HF card

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **10** (rank #41/141, 3/4 units) — Artificial Analysis
- MMLU / MMLU-Pro / GPQA Diamond / AIME / HLE / C-Eval / SuperGPQA / MATH / BBH: **no direct scores** (components of Intelligence Index)
- AA-LCR / AA-Briefcase / GDPval-AA / AutomationBench-AA / Terminal-Bench 4.0 / CritPt / AA-Omniscience / SciCode: **no scores** for North Mini Code specifically on Artificial Analysis

Coding:

- SWE-bench Verified: **67.6%** (measured, SWE-Agent harness) — Cohere blog / HF card / Raschka blog / Artificial Analysis (Coding Index 33.4)
- SWE-bench Pro: **40.2%** (measured, SWE-Agent harness) — Cohere blog / HF card / Raschka blog
- Terminal-Bench v2: **36.0%** (measured, SWE-Agent harness) — Cohere blog / HF card / Raschka blog
- Terminal-Bench Hard: **31.1%** (measured, Terminus-2 harness) — Cohere blog / HF card / Raschka blog
- SciCode: **38.2%** (measured) — Cohere blog / HF card / Raschka blog
- LiveCodeBench v6: **70.3%** (measured) — Cohere blog / HF card / Raschka blog
- HumanEval / MBPP / Codeforces / Terminal-Bench 2.0/2.1 / SWE-Rebench / Vibe Code Bench: **no scores**

Long context:

- Native 256K context verified
- RULER / MRCR / GraphWalks / LongBench / LOFT / AA-LCR / BrowseComp / DeepSearchQA: **no scores**

Multimodal:

- **No native multimodal** (text-only per Cohere, HF, Artificial Analysis, all reviews).

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 70/100.** SWE-bench Verified 67.6% (SWE-Agent), SWE-bench Pro 40.2%, Terminal-Bench v2 36.0%, Terminal-Bench Hard 31.1%. Strong SWE-Verified (67.6% beats GLM-4.7-Flash 59.2%, gpt-oss-120b 49–53%) and cross-harness generalization (OpenCode +10%). Capped by mixed evaluation sources (not uniform), no MCP-Atlas/PinchBench/ClawEval/Toolathlon/τ²-Bench/BrowseComp, TB Hard 31% vs frontier.
- **Reasoning: 40/100.** AA Intelligence Index 10 (rank #41/141, above median 8). **No standard reasoning benchmarks** (GPQA/AIME/HLE/MMLU/MMLU-Pro/C-Eval) published. SciCode 38% requires reasoning but is coding-focused. Capped by complete absence of standard reasoning benchmarks.
- **Context window: 80/100.** 256K native (256K tier = 75–80). No RULER/MRCR/GraphWalks/LongBench/LOFT/AA-LCR scores. Tier placement saves score.
- **Multimodal: 15/100.** Text-only input/output. No vision/audio/video. Floor for text-only model.
- **Coding: 75/100.** SWE-bench Verified 67.6% (exceptional for 3B active), SWE-bench Pro 40.2%, Terminal-Bench v2 36.0%, Terminal-Bench Hard 31.1%, LiveCodeBench 70.3%, SciCode 38.2%. **Best-in-class SWE-Verified for 3B active MoE** (beats GLM-4.7-Flash 59.2%, gpt-oss-20b 34%, Qwen3-30B-A3B 22%). RLVR-trained (+7.9% TB v2, +3.0% SWE pass@1). Cross-harness generalization (OpenCode +10%). Capped by no HumanEval/Codeforces/Terminal-Bench 2.0/2.1, TB Hard 31% vs frontier.
- **Cost efficiency: 98/100.** Apache-2.0 open weights = self-host free. 30B/3B MoE = ~8GB fp16 / ~4GB Q4 (consumer hardware). 2.8x throughput vs Devstral Small 2. Best-in-class value for agentic coding at this size.
- **Overall Score: 56/100.** Mean of (70+40+80+15+75)/5 = 56.0 → 56. Queue shows 57.4 — very close. Artificial Analysis Coding Index 33.4 (competitive for size). Best fit: **open-source SOTA agentic coding model at 3B active params**; SWE-Verified 67.6% leads size class; RLVR-trained for agentic robustness; text-only, no standard reasoning benchmarks, mixed evaluation sources limit generalist score.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Cohere blog/HF card/docs, HF blog, Sebastian Raschka blog, Artificial Analysis, OpenRouter (not listed), oMLX community benchmarks, llama.cpp discussions); scores normalized 1–100 per model-comparison.md methodology. **Critical limitations:** Mixed evaluation sources (public + AA + internal); Gemma 4 scores attributed to Qwen team; no standard reasoning benchmarks (GPQA/AIME/HLE/MMLU); text-only; no independent third-party reproduction of agentic benchmarks (all from Cohere release). Apache-2.0 enables verification.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.