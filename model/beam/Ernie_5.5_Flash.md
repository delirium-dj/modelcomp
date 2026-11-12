# Beam 1.0 501B-A23B — findings by Ernie 5.5 Flash

- Source: Reflection AI/Beam 1.0 501B-A23B (`beam`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam 1.0 501B-A23B
- **Short description:** Reflection AI's first open-weight model (released 2026-10-05): a 501B-total / 23B-active sparse MoE for coding, reasoning and agentic workloads, with a 1M context and Apache-2.0 weights. `cat-jam` is the revealed stealth alias of this model — never a second folder.
- **Provider / access:** Self-hosted (Hugging Face `reflection-ai/Beam-1.0-501B-A23B`, Apache 2.0), OpenRouter (`reflection/beam-1.0-501b-a23b`), Vercel, DigitalOcean, AI/ML API, plus ~3 routes. FP8 and NVFP4 variants released alongside.
- **Release / knowledge:** 2026-10-05; knowledge cutoff 2026-06-30 (models.dev).
- **IDs:** `beam`, `reflection/beam-1.0-501b-a23b`, `reflection-ai/Beam-1.0-501B-A23B`, `cat-jam` (retired stealth alias, never a folder).
- **Context window:** 1,048,576 tokens (1.05M on AI/ML API); max output 131,072.
- **Modalities:** text in / text out only; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** Open weights — free to self-host; hosted lanes ~$0.2645/$1.06 per 1M (AI/ML API) or ~$0.40/$1.20 (DigitalOcean); models.dev lists $0/$0 for the Vercel route.
- **Architecture:** sparse MoE, 501B total / 23B active (Reflection AI); Apache 2.0; BF16/FP8/NVFP4 checkpoints.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **80.8%**; DeepSearchQA: **80.5%**; Terminal-Bench 2.1: **80.1%**
- BrowseComp: **76.8%**; τ³-Bench: **36.1%** (weak on the tool-agent-user loop)

Reasoning / knowledge:

- GPQA Diamond: **90.6%** (best verified GPQA row for an open model here)
- HLE with tools: **51.1%**, without tools **36%**; CritPt: **16.3%** (weak)
- LongBench v2: **67.5%** (long-context quality)

Coding:

- SWE-bench Verified: **81.6%** (vendor-reported in BF16; LLMLearner lists 80.9% on the mini-SWE-agent harness)
- SWE-bench Pro: **66.1%**; SWE Multilingual: **78.3%**; SciCode: **49.2%**; DeepSWE: **43.3%**
- SWE-Atlas Codebase QnA: **31.8%** (weak)

Long context:

- 1M context with LongBench v2 67.5%; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 78/100.** MCP Atlas 80.8% and DeepSearchQA 80.5% are strong, TB2.1 80.1% good; τ³ 36.1% and SWE-Atlas 31.8% are the weak rows.
- **Reasoning: 78/100.** GPQA Diamond 90.6% is the best verified open-model GPQA figure here and LongBench v2 67.5% is solid, but HLE 51.1% and CritPt 16.3% cap it.
- **Context window: 100/100.** 1,048,576 tokens with 131,072 max output.
- **Multimodal: 15/100.** Text-only (models.dev: text in / text out).
- **Coding: 78/100.** SWE-bench Verified 81.6%, SWE-bench Pro 66.1% and SWE Multilingual 78.3% form a strong open-weight cluster, but DeepSWE 43.3% and SciCode 49.2% are mid.
- **Cost efficiency: 95/100.** Open weights (Apache 2.0) with $0.26–$0.40 per 1M hosted lanes — 501B-class capability at a small-model price.
- **Overall Score: 69.8/100.** Best fit for self-hosted reasoning and repo-level coding at 1M context; the text-only modality is the main limitation.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Reflection AI "Introducing Beam" post and model card, BenchLM model profile, LLMLearner/OpenRouter, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Beam: Reflection's 501B open-weight model](https://reflection.ai/blog/introducing-beam)
  - [Beam 1.0 501B-A23B benchmarks & sources — BenchLM](https://benchlm.ai/models/reflection-beam)
  - [Beam 1.0 501B-A23B — OpenRouter](https://openrouter.ai/reflection/beam-1.0-501b-a23b)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Beam_1.0_v2.md`, using the same headings.