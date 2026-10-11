# Muse Spark 1.2 Free — findings by Laguna S 2.1

> Source: Meta / OpenCode (`opencode/muse-spark-1.2-contributor-free`)
> Date: 2026-10-10 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free
- **Short description:** Meta's prior-gen coding/agent model co-trained with Muse Code for terminal coding, MCP tool use, and whole-repo generation. Free Zen tier with training-data consent; superseded by Muse Spark 1.3.
- **Provider / access:** Meta / OpenCode Zen (`opencode/muse-spark-1.2-contributor-free`); also Meta first-party API. Free Contributor-tier access via OpenCode Zen (training-data consent agreement). Standard tier $1.25 in / $4.25 out per 1M; cached input $0.15/MTok.
- **Release / knowledge:** Released August 5, 2026 (Meta). Knowledge cutoff circa June 2026.
- **IDs:** `opencode/muse-spark-1.2-contributor-free` (Free Zen tier available).
- **Context window:** 1,048,576 (1M) — verified via Meta model page and `meta.json`.
- **Modalities:** Text, image, audio, video, PDF in; text out.
- **Pricing (as of 2026-10-10):** Free Zen tier (training-data consent). Paid tiers: Contributor $0.10/$0.20, Standard $1.25/$4.25 per 1M. Cached input $0.15/MTok. Cost per task ~$0.40 (AA).
- **Architecture:** Proprietary Meta Muse-series model.

### Raw benchmarks found

> Sources: BenchLM.ai model page (Overall 66.48/100, #28/889), Artificial Analysis (Intelligence Index 54), BenchGen, Meta model page. Verified 2026-10-10.

Agent / tool use:

- Terminal-Bench v2.1: **80%** (Artificial Analysis; up 2 pts from Muse 1.1)
- τ²-bench: **94.2%** (BenchLM model page)
- GDPval-AA: **61.7%** (BenchLM model page)
- GDPval-AA (Elo): **1631** (Artificial Analysis)
- μCanvas: **87.9%** (BenchLM model page)
- MCP Atlas: **90.3%** (BenchGen via BenchLM)
- Claw-Eval: no verified public score found
- τ³-Banking: **27%** (Artificial Analysis)
- JobBench: **57.9%** (BenchLM model page — up from 11.4% in prior file)
- GDP.pdf: **22.1%** (BenchLM model page)

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (BenchLM model page)
- HLE: **45.5%** (BenchLM model page)
- AA Intelligence Index: **54** (Artificial Analysis; BenchLM confirms)
- BenchLM overall: **66.48** (rank 28/889)
- AA-LCR: no verified public score found
- AA-HLE: **44.1%** (BenchLM model page)
- AA-MMLU-Pro: **90.6%** (BenchLM model page)
- AA Global-MMLU-Lite: **91.2%** (BenchLM model page)
- AA-IFBench: **64.5%** (BenchLM model page)
- AA-Omniscience Accuracy: **59.7%** (BenchLM model page)
- CritPt: **18** (Artificial Analysis; up 3 pts from Muse 1.1)
- Humanity's Last Exam: **44%** (Artificial Analysis)

Coding:

- DeepSWE 1.1: **59.3%** Pass@1 (BenchLM model page)
- LiveCodeBench: **91.8%** (BenchLM model page — revised up from "no verified score")
- SciCode: **56%** (Artificial Analysis)
- MCP Atlas: **90.3%** (BenchGen)
- SWE-bench Verified: **87.5%** (BenchLM model page — revised up from "no verified score")
- AA Coding Index: **80.1%** (BenchLM model page — revised up from 76.5%)
- AA-SciCode: **58.3%** (BenchLM model page)
- SWE Marathon: **no verified public score found** for this exact ID

Multimodal:

- AAA-MMMU-Pro: **88.1%** (BenchLM model page — revised up from prior file)
- Design Arena Website: **1318** (OpenRouter)
- V*: **88.5%** (BenchLM model page)
- MathVision: **87.3%** (BenchLM model page)

Long context:

- MRCR / RULER / GraphWalks: no verified long-context retrieval reported
- Context window: 1,048,576 tokens

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (overall 66.48, #28/889) as of 2026-10-10.

- **Tool use: 90/100.** GDPval-AA Elo 1631 (#5 all-time), TB2.1 80%, τ²-bench 94.2% (near ≥90 frontier), μCanvas 87.9%, MCP Atlas 90.3%, GDP.pdf 22.1%. Capped by τ³-Banking 27% below 50% frontier ref, JobBench 57.9%.
- **Reasoning: 88/100.** GPQA Diamond 90.4%, HLE 45.5% (above 40% frontier), AA Intelligence Index 54, AA-MMLU-Pro 90.6%, AA Global-MMLU-Lite 91.2%, AA-LCR no data, CritPt 18%. Omniscience Accuracy 59.7%, AA-IFBench 64.5%. Capped by τ³-Banking, no AA-LCR data.
- **Context window: 95/100.** 1M (1,048,576) verified via Meta model page and meta.json. Caps: no AA-LCR or RULER retrieval data at 512K+ for perfect 100.
- **Multimodal: 92/100.** Text, image, audio, video, PDF in; text out — full omni input. AAA-MMMU-Pro 88.1%, MathVision 87.3%, V* 88.5%, Design Arena 1318. Caps: text-only output prevents 95+ tier, no video input benchmark above threshold.
- **Coding: 88/100.** DeepSWE 59.3% (below 74% frontier but above 55-60 range), SWE-bench Verified 87.5% (revised up — strong), LiveCodeBench 91.8% (at frontier), MCP Atlas 90.3%, AA Coding Index 80.1%, AA-SciCode 58.3%, SciCode 56%. Capped by DeepSWE 59.3% below 74% threshold.
- **Cost efficiency: 100/100.** Free Zen tier ($0). Caps: free tier requires training-data consent; time-limited; data-sharing caveat.
- **Overall Score: 91/100.** Half-up mean: (90+88+95+92+88)/5 = 453/5 = 90.6 → 91. **Best-fit:** strong prior-gen agent model: top-5 GDPval (1631), 1M omni context, free tier, excellent LiveCodeBench (91.8%) and SWE-bench (87.5%); behind Muse Spark 1.3; use when 1.3 Free unavailable.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public internet research (BenchLM `https://benchlm.ai/models/muse-spark-1.2-contributor-free` for overall rank/score (#28/889, 66.48) and full benchmark tables; AA model page for Intelligence Index 54, GPQA 90.4%, CritPt 18, GDPval Elo 1631; BenchGen for MCP Atlas; Meta model page for context/modality verification). Scores are normalized 1–100 interpretations per model-comparison.md v4.
- Sources: BenchLM.ai model page (Overall 66.48/100, rank #28/889); AA model page (Intelligence Index 54, GDPval Elo 1631, CritPt 18); BenchGen (MCP Atlas 90.3%); Meta model page.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.

---
