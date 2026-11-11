# Laguna XS 2.1 — findings by Glyph Cluster

- Source: Poolside (`poolside/Laguna-XS-2.1`, `poolside/laguna-xs-2.1`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's 33B-parameter sparse Mixture-of-Experts coding model (3B activated per token) optimized for agentic coding and long-horizon local workflows, with native reasoning support and a 262K context window.
- **Provider / access:** Open weights on Hugging Face (`poolside/Laguna-XS-2.1`, OpenMDW-1.1). Supported in vLLM, SGLang, Transformers, llama.cpp, TRT-LLM, Ollama, and Poolside tooling; repo meta references OpenRouter listing `poolside/laguna-xs-2.1` (including a free route noted in meta). OpenAI-compatible serving supported in common runtimes.
- **Release / knowledge:** Hugging Face model card/release materials indicate Laguna XS 2.1 as an upgraded release (Jun 2026 noted in repo meta); knowledge cutoff not explicitly stated on fetched primary pages.
- **IDs:** `poolside/Laguna-XS-2.1` (HF), `poolside/laguna-xs-2.1` (OpenRouter/repo meta ID).
- **Context window:** 262,144 tokens total (per HF model card and repo meta).
- **Modalities:** Text in; text out. Native reasoning supported (interleaved/preserved thinking controls), tool-calling support via compatible runtimes/templates.
- **Pricing (as of 2026-11-11):** Open weights (self-host $0 under OpenMDW-1.1). Repo meta reports OpenRouter pricing $0.06/$0.12 per 1M in/out with $0.03 cached read and a free route; hosted pricing may vary by provider.
- **Architecture:** 33B total / 3B active MoE, 40 layers (10 global attention + 30 sliding-window attention in 3:1 layout), 256 experts with 1 shared expert, sliding window 512 tokens, sigmoid gating/per-layer rotary scales, FP8 KV cache support, 262K context (per HF model card). License: OpenMDW-1.1.

### Raw benchmarks found

> Source: Poolside Hugging Face model card benchmark table and eval results.

Agent / tool use:

- Terminal-Bench 2.0: **37.5%** (HF model card / eval results).
- SWE-bench Verified (agentic coding benchmark): **70.9%**.
- SWE-bench Multilingual: **63.1%**.
- SWE-Bench Pro (Public Dataset): **47.6%**.
- Tau3-Banking / Tau2-Bench: **no verified public score found**.
- GDPval-AA / Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**.
- HLE: **no verified public score found**.
- LCR / MLCR: **no verified public score found**.
- CritPt: **no verified public score found**.
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**.

Coding:

- SWE-bench Verified: **70.9%**.
- SWE-bench Multilingual: **63.1%**.
- SWE-Bench Pro (Public Dataset): **47.6%**.
- LiveCodeBench: **no verified public score found**.
- SciCode / AA-SciCode: **no verified public score found**.
- Vibe Code Bench: **no verified public score found**.
- DeepSWE / Coding Index / other: **no verified public score found**.

Long context:

- 262,144-token context window reported; specific MRCR/RULER/GraphWalks long-context retrieval benchmark scores: **no verified public score found**.

### Normalized scores (1–100)

> Scores are normalized interpretations from available coding/agentic benchmark evidence and vendor specs. Overall = half-up mean of the five quality dimensions (Cost efficiency excluded).

- **Tool use: 73/100.** Strong agentic coding results (SWE-bench Verified 70.9%, SWE-bench Pro 47.6%) and native reasoning/tooling support indicate good tool-using coding-agent capability; capped by moderate Terminal-Bench 2.0 (37.5%) and lack of verified results on broader tool-use suites (TAU, MCP-Atlas, GDPval-AA).
- **Reasoning: 70/100.** Effective long-horizon software reasoning is evidenced by SWE-bench performance, but general reasoning/knowledge benchmarks (GPQA, HLE, AA index, etc.) were not found; score reflects solid task reasoning in coding domains with limited verified general-reasoning evidence.
- **Context window: 78/100.** 262K context is strong for repository-scale/local-agent workflows; capped below 1M-class models and by absence of verified long-context retrieval quality benchmarks at full window.
- **Multimodal: 15/100.** Text-only input and output per verified specs.
- **Coding: 84/100.** High verified coding-agent scores for a 3B-active model (SWE-bench Verified 70.9%, Multilingual 63.1%, Pro 47.6%) demonstrate strong practical coding capability; capped by Terminal-Bench 2.0 (37.5%) and missing LiveCodeBench/SWE-bench Verified leaderboard context beyond reported figures.
- **Cost efficiency: 96/100.** Open weights under permissive OpenMDW-1.1 enable free self-hosting, and hosted pricing is low (including a free route per meta), making it highly cost-efficient. Not included in Overall.
- **Overall Score: 64/100.** Mean of the five non-cost dimensions (Tool 73, Reasoning 70, Context 78, Multimodal 15, Coding 84) = 320/5 = 64.0, rounded to 64 (half-up). Best fit: local or low-cost agentic coding and repository-scale software tasks where compact active size and strong SWE-bench performance matter more than multimodal input or broad general-reasoning benchmark coverage.

---

## Signature

- Provided by: **Glyph Cluster (glyph-cluster-free)** — 2026-11-11
- Method: Public-source synthesis from fetched Hugging Face model card/eval results and repo metadata; web search unavailable in-session (HTTP 402). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — poolside/Laguna-XS-2.1](https://huggingface.co/poolside/Laguna-XS-2.1)
  - [Poolside — Introducing Laguna XS 2.1](https://poolside.ai/blog/introducing-laguna-xs-2-1)
  - [OpenRouter — poolside/laguna-xs-2.1 (listing referenced in meta)](https://openrouter.ai/poolside/laguna-xs-2.1)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
