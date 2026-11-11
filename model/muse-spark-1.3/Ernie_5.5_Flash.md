# Muse Spark 1.3 — findings by Ernie 5.5 Flash

- Source: Meta/Muse Spark 1.3 (`muse-spark-1.3`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta Superintelligence Labs' multimodal reasoning model for long-horizon agentic work, multi-agent collaboration and coding. One model across every Muse Spark 1.3 tier (Contributor / Free / Standard / Max) — only price and training-data consent differ.
- **Provider / access:** Meta Model API (`muse-spark-1.3`), OpenRouter (`meta/muse-spark-1.3`), OpenCode Zen (`opencode/muse-spark-1.3` + `-contributor-free` / `-free` tiers), plus gateways (LLM Gateway, Vercel AI Gateway, AI/ML API, Prime, Empirio Labs).
- **Release / knowledge:** 2026-09-02 (models.dev); knowledge cutoff not published.
- **IDs:** `muse-spark-1.3`, `meta/muse-spark-1.3`, `opencode/muse-spark-1.3-contributor-free`, `opencode/muse-spark-1.3-free`.
- **Context window:** 1,048,576 tokens total; 131,072 max output (Meta route).
- **Modalities:** text, image, video, PDF and audio in; text out; reasoning (thinking) and tool calls supported.
- **Pricing (as of 2026-11-11):** $1.25 / $4.25 per 1M input/output, cache read $0.15 (Meta/OpenRouter). Zen Contributor-Free and Free tiers serve the same weights at $0 with training-data consent differences.
- **Architecture:** proprietary multimodal MoE (Meta does not publish parameter counts).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta launch scorecard, self-reported); Vals AI independent run: **72.3%**
- Terminal-Bench 4.1: **14.90%** (Terminal-Bench 4.1 leaderboard via BenchLM) — the newer harness is a sharp outlier
- DeepSWE: **75.4%**; FrontierSWE v2: **25.8%**
- SWE-Atlas Codebase QnA: **59.4%**; CursorBench 4.0: **41.6%**; JobBench: **64.9%**
- OSWorld 2.0: **66.9%**; ApprenticeBench (accounts-payable computer use): **19%**
- AutomationBench: **49.4%**; DeepSearchQA: **89.4%**; Bug Hunt Bench: **32.2 fixes**
- Toolathon / MCP-Atlas: no verified public score found
- Artificial Analysis Intelligence Index: not ranked publicly (BenchLM withholds a rank for this model)

Reasoning / knowledge:

- FrontierMath v2 Tiers 1–3: **74.035%**; Tier 4: **46.341%**
- MRCR v2 8-needle 256K–512K: **98.5%**; 512K–1M: **98.1%** (near-perfect long-range retrieval)
- NYT Connections (extended): **85.1%**; BabaIsBench (pass@1): **46%**; Chess Puzzles (Epoch AI): **37.0%**; Mystery Game Puzzles: **25.0%**
- Gray Swan indirect prompt injection: **15.9%** attack success (weaker than Gemini 4 Argon's 0.7%)
- GPQA Diamond / HLE / CritPt: no verified public score found
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- DeepSWE: **75.4%** (best verified coding row for this model)
- SWE-Atlas Codebase QnA: **59.4%**; CursorBench 4.0: **41.6%**
- SWE-bench Verified / SWE-bench Pro: no verified public score found (Meta published no Verified row for 1.3)
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- MRCR v2 8-needle: **98.5%** (256K–512K) and **98.1%** (512K–1M) — the strongest verified long-context retrieval in this comparison
- RULER / GraphWalks: no verified public score found for this model

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 2.1 at 88.8% (Meta) and 72.3% (Vals AI) is competitive, DeepSWE 75.4% is strong, but Terminal-Bench 4.1 (14.9%), CursorBench 41.6% and ApprenticeBench 19% cap the score.
- **Reasoning: 85/100.** MRCR 98%+ at 1M is best-in-class retrieval, FrontierMath T1–3 74.0% is solid but behind Gemini 4 Argon (86.0%); no HLE/GPQA publication.
- **Context window: 100/100.** 1,048,576 tokens with 131,072 max output.
- **Multimodal: 85/100.** Text, image, video, PDF and audio input; Meta documents no native audio *output*, and public video/audio evaluations are absent (LVBench not reported).
- **Coding: 85/100.** DeepSWE 75.4% and SWE-Atlas 59.4% are good without being frontier; no SWE-bench Verified/Pro row published, and CursorBench 41.6% is mid-pack.
- **Cost efficiency: 90/100.** $1.25/$4.25 per 1M undercuts every frontier rival, and the Contributor/Free Zen tiers drop it to $0.
- **Overall Score: 88.4/100.** Best fit for very-long-context agentic work, multi-agent research pipelines and cost-sensitive high-volume coding; verify on Terminal-Bench 4.x before trusting it on the newest harness.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Meta Muse Spark 1.3 launch scorecard, BenchLM model profile, Meta Model API model page, Artificial Analysis, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Spark 1.3 — Meta Model API](https://dev.meta.ai/models/muse-spark)
  - [Muse Spark 1.3 benchmarks & sources — BenchLM](https://benchlm.ai/models/muse-spark-1-3)
  - [Muse Spark 1.3 launch scorecard — Meta AI Research](https://ai.meta.com/research/)
  - [Muse Spark 1.3 intelligence & price analysis — Artificial Analysis](https://artificialanalysis.ai/models/muse-spark-1-3)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3_v2.md`, using the same headings.