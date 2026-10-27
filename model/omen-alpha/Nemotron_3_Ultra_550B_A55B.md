# Omen Alpha — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha (omen-alpha)
- **Short description:** OpenCode's stealth coding model, added to OpenCode Go subscription on September 4, 2026. Vendor unconfirmed (community suggests possible GLM/Zhipu lineage; OpenCode usage path labels it under "zhipu" namespace). No official model card, parameter count, or architecture disclosed. 500K context window, 128K max output. Multimodal: text + image input, text output. Reasoning support. Tool calling, structured output, JSON mode, temperature control.
- **Provider / access:** OpenCode Go subscribers only (`opencode-go/omen-alpha`). $100 usage for $10 promotion. Not on OpenRouter, Hugging Face, or other public model hubs. Closed weights.
- **Release / knowledge:** 2026-09-04 release (OpenCode Go); knowledge cutoff unknown.
- **IDs:** `opencode-go/omen-alpha` (OpenCode Go). No public API outside OpenCode.
- **Context window:** 500,000 tokens input, 128,000 tokens max output. Verified via omenalpha.io, modelcompare.dev, explainx.ai, OpenCode data.
- **Modalities:** Text + image input; text output. **Multimodal** (vision input). Reasoning: yes. Tool calls: yes. JSON mode: yes. Structured output: yes. Temperature control: yes. Open weights: no.
- **Pricing (as of 2026-10-27):** OpenCode Go: $0.20/M in, $0.66/M out. $100 usage for $10 promo. No free tier. No self-host (closed weights).
- **Architecture:** Undisclosed. Parameter count unknown. Community speculation: possible GLM/Zhipu lineage (OpenCode usage path shows "zhipu" namespace). 500K context suggests large model or efficient attention.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

> **CRITICAL LIMITATION:** **Zero standard benchmarks** (MMLU, GPQA, AIME, HLE, SWE-bench, LiveCodeBench, HumanEval, etc.). Only one community-reported benchmark: OpenCode leaderboard snapshot.

Agent / tool use:

- OpenCode leaderboard (dated snapshot): **23.14 / 40** — omenalpha.io / omenalpha.io vs ox-alpha
- OpenCode usage (past 2 months): Rank #40 by tokens, 2.3T tokens, 89K unique users, 584K sessions — OpenCode data
- Average cost per session: $0.21 — OpenCode data
- Average tokens per session: 3.9M — OpenCode data
- SWE-bench / Terminal-Bench / τ²-Bench / BFCL / MCP-Atlas / Toolathlon / AutomationBench / OfficeQA / JobBench / BrowseComp / DeepSearchQA: **no scores**

Reasoning / knowledge:

- MMLU / MMLU-Pro / GPQA / GPQA Diamond / AIME / HLE / C-Eval / MATH / BBH / SuperGPQA / MMMLU / ZebraLogic / CritPt / SimpleQA / AA-LCR / AA-Omniscience / AA Intelligence Index: **no scores**

Coding:

- OpenCode leaderboard: **23.14 / 40** (dated snapshot) — omenalpha.io / omenalpha.io vs ox-alpha
- modelcompare.dev "Model fit scores" (declared capabilities, NOT benchmarks): Coding 85, Agents 91, JSON 98 — modelcompare.dev
- HumanEval / MBPP / Codeforces / LiveCodeBench / SciCode / SWE-bench Verified / Pro / Terminal-Bench / Terminal-Bench Hard / SWE-Rebench / Vibe Code Bench: **no scores**
- Community reported speed: **~189 tokens/second** — explainx.ai (unverified)

Long context:

- Native 500K context claimed
- RULER / MRCR / GraphWalks / LongBench / LOFT / AA-LCR / MMLongBench / BrowseComp / DeepSearchQA: **no scores**

Multimodal:

- Text + image input; text output (per modelcompare.dev, explainx.ai, OpenCode data)
- No vision benchmarks (MMMU, MathVista, ChartQA, DocVQA, AI2D, OCRBench, etc.)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 30/100.** OpenCode leaderboard 23/40 (58% of max). **Only one data point**, dated snapshot, no standard benchmarks (SWE-bench, Terminal-Bench, τ²-Bench, BFCL, MCP-Atlas). Capped by zero standard agentic benchmarks and single snapshot.
- **Reasoning: 15/100.** **Zero reasoning benchmarks** (GPQA, AIME, HLE, MMLU, MMLU-Pro, C-Eval, MATH, CritPt, SimpleQA). Only declared capability (reasoning: yes). Floor for no benchmarks.
- **Context window: 90/100.** 500K claimed (500K+ tier = 85–90). No RULER/MRCR/GraphWalks/LongBench/LOFT/AA-LCR/BrowseComp verification. Tier placement saves score.
- **Multimodal: 45/100.** Text + image input claimed (modelcompare.dev, explainx.ai). **Zero vision benchmarks** (MMMU, MathVista, ChartQA, DocVQA, AI2D, OCRBench, VideoMMU, etc.). Capped by zero vision benchmarks.
- **Coding: 35/100.** OpenCode leaderboard 23/40 (58%). modelcompare.dev fit score 85 (declared capabilities, not benchmark). **Zero standard coding benchmarks** (HumanEval, MBPP, LiveCodeBench, SWE-bench, Terminal-Bench, SciCode, Codeforces). Capped by zero standard coding benchmarks and single snapshot.
- **Cost efficiency: 40/100.** $0.20/$0.66 per 1M (moderate). Closed weights (no self-host). $100 for $10 promo helps. No free tier. Capped by closed weights and moderate pricing.
- **Overall Score: 43/100.** Mean of (30+15+90+45+35)/5 = 43.0 → 43. Queue shows 50.9 — gap due to zero standard benchmarks across all dimensions. Best fit: **stealth coding model with strong claimed context (500K) but zero public benchmarks**; OpenCode Go exclusive; vendor unconfirmed; only one dated OpenCode snapshot (23/40).

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (omenalpha.io, OpenCode data, modelcompare.dev, explainx.ai, buildfastwithai.com, Reddit r/opencode, OpenCode compare pages); scores normalized 1–100 per model-comparison.md methodology. **Critical limitations:** Zero standard benchmarks (MMLU, GPQA, SWE-bench, HumanEval, etc.); vendor unconfirmed (possible GLM lineage); closed weights; OpenCode Go exclusive; only one dated OpenCode leaderboard snapshot; multimodal claimed but zero vision benchmarks; 500K context unverified.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.