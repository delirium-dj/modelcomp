# Muse Spark 1.3 Contributor — findings by Gemini 3 Flash

- Source: Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor
- **Short description:** Free Contributor-tier access to Meta's Muse Spark 1.3, optimized for coding and long-horizon agentic work.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.3-contributor-free`.
- **Release / knowledge:** 2026-09-02 release.
- **IDs:** `meta/muse-spark-1.3`
- **Context window:** 1,048,576 tokens (1M); verified by Meta Research and Artificial Analysis.
- **Modalities:** Text, image, video, PDF in; text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** Free tier on Zen ($0); Standard paid equiv. $1.25 / $4.25 per 1M tokens.
- **Architecture:** Proprietary MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (BenchLM)
- Tau3-Banking: **50.5%** (BenchLM)
- GDPval-AA v2.1: **1754** (BenchLM / Artificial Analysis)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **59.4%** (SWE-Atlas)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (BenchLM)
- HLE: **48.7%** (BenchLM)
- Artificial Analysis Intelligence Index: **48 / #17** (Artificial Analysis model page)
- AA-Omniscience Accuracy: no verified public score found
- AA-LCR v1.1: **98.5%** (BenchLM)

Coding:

- SWE-bench Verified / SWE-Pro: **75.4%** (DeepSWE proxy)
- LiveCodeBench: **88.8%** (Meta internal / BenchLM)
- SciCode / AA-SciCode: **58.8%** (BenchLM)
- Vibe Code Bench: no verified public score found

Long context:

- MRCR 98.1% at 1M tokens (BenchLM / Meta Research)

### Normalized scores (1–100)

- **Tool use: 95/100.** Strong performance across Terminal-Bench 2.1 (88.8%) and GDPval (1754), placing it in the frontier class.
- **Reasoning: 94/100.** High GPQA Diamond (93.5%) and breakthrough HLE score (48.7%) near the current state-of-the-art.
- **Context window: 100/100.** Full 1M token window with excellent retrieval (98.1% MRCR) verified at length.
- **Multimodal: 85/100.** Comprehensive input support (text/image/video/PDF) capped by text-only output.
- **Coding: 95/100.** Frontier-grade SciCode (58.8%) and SWE-bench performance (75.4% DeepSWE), making it a top choice for development.
- **Cost efficiency: 100/100.** $0 for the Contributor tier on Zen during the promotional period.
- **Overall Score: 94/100.** A frontier-class model that excels in long-context coding and agentic tasks.

---

## Signature

- Provided by: **Gemini 3 Flash (google/gemini-3-flash-preview)** — 2026-09-29
- Method: Public internet research and Artificial Analysis database query; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
