# Muse Spark 1.3 — findings by Iceman

- Source: Meta (`meta/muse-spark-1.3`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Muse Spark 1.3 is a proprietary multimodal reasoning model from Meta (Meta Superintelligence Labs) designed for complex agentic and coding workflows, multi-agent orchestration, and tool/computer-use tasks. Per `model-aliases.generated.md`, this folder covers the Muse Spark 1.3 model family/tier names (one model, tiered access/pricing) rather than a separate tier-suffixed model.
- **Provider / access:** Available via Meta Model API (OpenRouter listing: `meta/muse-spark-1.3`, providers shown as Meta and Google Vertex; Chat Completions-style endpoint documented). Supports streaming, tool/function calling, structured output, and configurable reasoning controls per provider docs; exact first-party API shape not fully verified beyond aggregated listings.
- **Release / knowledge:** Released 2026-09-02 (LLM Stats); OpenRouter permaslug indicates 2026-09-03 artifact. Knowledge cutoff not publicly verified from accessible primary sources.
- **IDs:** `meta/muse-spark-1.3` (OpenRouter/provider ID). No verified OpenCode Zen Free ID found.
- **Context window:** 1,048,576 tokens (1M) total context (OpenRouter/LLM Stats). Maximum output limit not verified from accessible primary sources.
- **Modalities:** Input: text, images, video, and PDF documents (OpenRouter description); output: text. Reasoning supported (reasoning/reasoning_effort parameters exposed via OpenRouter). Tool calls/function calling and structured output supported (OpenRouter capability fields).
- **Pricing (as of 2026-11-13):** Standard listing ~$1.25 / 1M input tokens, ~$4.25 / 1M output tokens, ~$0.15 / 1M cached input tokens, plus web-search/tool charges where applicable (OpenRouter/LLM Stats, provider-dependent). Paid model (not free); contributor-tier variants exist under the same model family but pricing/data-use terms differ by tier.
- **Architecture:** Proprietary (LLM Stats license: Proprietary). Parameter count/active parameters, training data, and detailed architecture not publicly verified from accessible sources.

### Raw benchmarks found

> Benchmarks below are limited to figures found in accessible public aggregator/model pages during this pass; many common leaderboards were not directly accessible via working search in this environment. No values invented.

Agent / tool use:

- OSWorld 2.0: **66.9%** (LLM Stats benchmark table for Muse Spark 1.3, rank 7 among listed models) — computer-use/agentic desktop benchmark.
- MRCR v2 (8-needle): **98.5%** (LLM Stats benchmark table, rank 1 among listed models) — long-context retrieval/needle tracking signal relevant to agent memory over long inputs.
- Terminal-Bench 2.1: **88.8%** (LLM Stats benchmark table, rank 6/tied among listed models) — terminal/agentic coding environment performance.
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found** (MRCR v2 8-needle 98.5% reported separately above, not the same benchmark)
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found** (Terminal-Bench 2.1 88.8% reported above as agentic terminal coding signal)

Long context:

- MRCR v2 (8-needle): **98.5%** at 1M-class context model (LLM Stats). No other verified RULER/GraphWalks figures found.

### Normalized scores (1–100)

> Derived from limited accessible evidence using `model-comparison.md` methodology. Sparse public benchmark coverage caps confidence; scores are provisional interpretations, not official vendor scores.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 86/100.** Strong agentic/tool-use signals from OSWorld 2.0 (66.9%, rank 7) and Terminal-Bench 2.1 (88.8%, rank 6/tied), plus provider-exposed tool calling/structured output/reasoning controls and multi-agent positioning (OpenRouter/LLM Stats). Capped by lack of verified Tau-bench, GDPval-AA, MCP-Atlas/Toolathon, and broader tool-reliability benchmarks.
- **Reasoning: 78/100.** Marketed as a multimodal reasoning model for complex agentic tasks (OpenRouter/LLM Stats), but no verified GPQA Diamond, HLE, LCR/MLCR, CritPt, or intelligence-index numbers were found in accessible sources. Score is a conservative provisional estimate anchored to strong agentic benchmark performance rather than direct reasoning-benchmark evidence.
- **Context window: 94/100.** 1,048,576-token (1M) context window with strong measured long-context retrieval signal (MRCR v2 8-needle 98.5%, rank 1 on LLM Stats). Capped slightly by unverified max-output details and absence of broader long-context suite (RULER/GraphWalks) in accessible evidence.
- **Multimodal: 78/100.** Accepts text, images, video, and PDF inputs with text output (OpenRouter description); multimodal evaluation methodology referenced by LLM Stats FAQ. Capped because verified image/audio/video benchmark scores and output-side generation modalities are not evidenced here.
- **Coding: 84/100.** Terminal-Bench 2.1 at 88.8% (rank 6/tied) indicates strong terminal/agentic coding capability, consistent with vendor positioning for coding workflows. Capped by missing verified SWE-bench Verified/Pro, LiveCodeBench, SciCode, and other dedicated coding benchmark scores.
- **Cost efficiency: 82/100.** Paid pricing around $1.25/$4.25 per 1M input/output tokens with cached-input discount (OpenRouter/LLM Stats) is competitive for a frontier multimodal agentic model but not free/open-weight; value depends on provider/tier terms.
- **Overall Score: 84/100.** Mean of the five quality dimensions (86 + 78 + 94 + 78 + 84) / 5 = 84.0 (half-up). Best fit: long-context multimodal agentic/coding workflows and tool-using assistants where 1M context and terminal/computer-use performance matter; verify reasoning/coding depth on task-specific benchmarks before high-stakes use due to limited public eval coverage in accessible sources.

---

## Signature

- Provided by: **Iceman (iceman/unknown)** — 2026-11-13
- Method: Fresh public-source review using accessible web pages fetched via `curl`/web retrieval in this environment (no peer model findings files read; no `websearch` tool results available due to HTTP 402); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenRouter — Meta: Muse Spark 1.3](https://openrouter.ai/meta/muse-spark-1.3)
  - [LLM Stats — Muse Spark 1.3 by Meta](https://llm-stats.com/models/muse-spark-1.3)
  - [Meta Research — Muse Spark 1.3 Multimodal Evaluation Methodology](https://research.meta.ai/static/muse-spark-1-3-multimodal-evaluation-methodology)
