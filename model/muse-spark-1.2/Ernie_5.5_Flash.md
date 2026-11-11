# Muse Spark 1.2 — findings by Ernie 5.5 Flash

- Source: Meta/Muse Spark 1.2 (`muse-spark-1.2`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's coding-focused Muse Spark update (released 2026-08-05) with improvements in code generation, complex debugging, codebase understanding and end-to-end development. Superseded by 1.3 in September 2026.
- **Provider / access:** Meta Model API (`muse-spark-1.2`), OpenRouter, OpenCode Zen (`opencode/muse-spark-1.2` + Contributor/Free tiers), plus gateways (LLM Gateway, Vercel, AI/ML API, Empirio Labs).
- **Release / knowledge:** 2026-08-05 (models.dev); knowledge cutoff not published.
- **IDs:** `muse-spark-1.2`, `meta/muse-spark-1.2`, `opencode/muse-spark-1.2-contributor-free`.
- **Context window:** 1,048,576 tokens total; 131,072 max output.
- **Modalities:** text, image, video, PDF and audio in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $1.25 / $4.25 per 1M input/output; cache read $0.15. Contributor/Free Zen tiers serve the same weights at $0.
- **Architecture:** proprietary multimodal MoE (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (Vals AI run **69.7%**)
- Toolathlon / MCP-Atlas / OSWorld: no verified public rows published for 1.2
- Terminal-Bench 3.0/4.x: no verified public rows published

Reasoning / knowledge:

- MMLU-Pro (Vals AI): **88.3%**
- NYT Connections (extended): **79.2%**
- Chess Puzzles (Epoch AI): **27.0%**; MazeBench: **0%**
- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published

Coding:

- SWE-bench (Vals AI): **86.6%**; VulcanBench v3: **87.0%**
- DeepSWE: **59.3%**; FrontierSWE v2: **12.0%**; MaxxBench (mutated DeepSWE tasks): **38.8%**
- SWE-bench Pro / LiveCodeBench / FrontierCode: no verified public rows published

Long context:

- 1M context documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 at 82.9% (69.7% on the Vals harness) is the only verified agentic row; with no OSWorld/Toolathlon publication and no modern-harness score, the evidence is thin.
- **Reasoning: 80/100.** MMLU-Pro 88.3% is solid and NYT Connections 79.2% respectable; Chess Puzzles 27.0% and MazeBench 0% show the reasoning ceiling, and no HLE/GPQA row exists.
- **Context window: 100/100.** 1,048,576 tokens with 131,072 max output.
- **Multimodal: 85/100.** Text, image, video, PDF and audio in — full coverage — but no public multimodal benchmark rows for 1.2.
- **Coding: 78/100.** SWE-bench (Vals) 86.6% and VulcanBench v3 87.0% are good, DeepSWE 59.3% mid, FrontierSWE v2 12.0% and MaxxBench 38.8% weak.
- **Cost efficiency: 90/100.** $1.25/$4.25 per 1M with a free Contributor tier — the same price as 1.3, which beats it everywhere.
- **Overall Score: 84.2/100.** Best fit for cheap long-context multimodal coding with the Contributor free tier; choose 1.3 instead unless a 1.2-specific behaviour is required.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Meta Muse Spark model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Spark 1.2 — Meta Model API](https://dev.meta.ai/models/muse-spark)
  - [Muse Spark 1.2 benchmarks & sources — BenchLM](https://benchlm.ai/models/muse-spark-1-2)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.2_v2.md`, using the same headings.