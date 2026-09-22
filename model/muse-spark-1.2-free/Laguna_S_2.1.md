# Muse Spark 1.2 Free — findings by Laguna S 2.1

- Source: Meta / OpenCode (`opencode/muse-spark-1.2-contributor-free`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free
- **Short description:** Meta's prior-gen coding/agent model co-trained with Muse Code for terminal coding, MCP tool use, and whole-repo generation. Free Zen tier with training-data consent; superseded by Muse Spark 1.3.
- **Provider / access:** Meta / OpenCode Zen (`opencode/muse-spark-1.2-contributor-free`); also Meta first-party API. Free Contributor-tier access via OpenCode Zen (training-data consent agreement). Standard tier $1.25 in / $4.25 out per 1M; cached input $0.15/MTok.
- **Release / knowledge:** Released August 5, 2026 (Meta). Knowledge cutoff circa June 2026.
- **IDs:** `opencode/muse-spark-1.2-contributor-free` (Free Zen tier available).
- **Context window:** 1,048,576 (1M) — verified via Meta model page and `meta.json`.
- **Modalities:** Text, image, audio, video, PDF in; text out.
- **Pricing (as of 2026-09-22):** Free Zen tier (training-data consent). Paid tiers: Contributor $0.10/$0.20, Standard $1.25/$4.25 per 1M. Cached input $0.15/MTok. Cost per task ~$0.40 (AA).
- **Architecture:** Proprietary Meta Muse-series model.

### Raw benchmarks found

> From independent evaluators (Artificial Analysis, BenchLM, BenchGen). Sources verified 2026-09-22.

Agent / tool use:

- Terminal-Bench v2.1: **80%** (Artificial Analysis; up 2 pts from Muse 1.1). BenchmarkList reports 82.9% on harder subset.
- GDPval-AA v2: **1,631 Elo** (Artificial Analysis, rank 5/340+, 100th pct)
- τ³-Banking: **27%** (Artificial Analysis, up 2 pts from 1.1)
- MCP Atlas: **90.3%** (BenchGen)
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (BenchLM)
- HLE: **45.5%** (BenchLM)
- CritPt: **18%** (Artificial Analysis, up 3 pts from 1.1)
- AA Intelligence Index: **54** (Artificial Analysis, tied 3rd among US labs)
- BenchLM overall: **71.88** (rank 11/233)
- Humanity's Last Exam: **44%** (Artificial Analysis, down 1 pt from 1.1)
- LCR / MLCR: no verified public score found

Coding:

- DeepSWE 1.1: **59.3%** Pass@1 (BenchLM)
- SciCode: **56%** (Artificial Analysis, down 2 pts from 1.1)
- MCP Atlas: **90.3%** (BenchGen)
- SWE-bench: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no verified long-context retrieval reported

### Normalized scores (1–100)

> Per `../../model-comparison.md`. Overall = mean of 5 quality dims; Cost excluded.

- **Tool use: 86/100.** GDPval-AA 1,631 (#5 all-time), TB2.1 80%, MCP Atlas 90.3%. Caps: Tau3-Banking 27% below 50% frontier ref.
- **Reasoning: 90/100.** GPQA Diamond 90.4%, HLE 45.5%, CritPt 18%, BenchLM 71.88 (#11). Caps: AA Index 54 below 60 frontier ref.
- **Context window: 95/100.** 1M (1,048,576) verified via Meta page and meta.json. Caps: no AA-LCR or RULER retrieval data at 512K+ for perfect 100.
- **Multimodal: 92/100.** Text, image, audio, video, PDF in; text out — full omni input. Caps: text-only output prevents 95+ tier.
- **Coding: 86/100.** DeepSWE 59.3%, SciCode 56%, MCP Atlas 90.3%. Caps: DeepSWE below 74% frontier; no SWE-bench/LiveCodeBench data.
- **Cost efficiency: 100/100.** Free Zen tier ($0). Caps: free tier requires training-data consent; time-limited; data-sharing caveat.
- **Overall Score: 89.8/100.** Mean of five quality dimensions (86+90+95+92+86)/5 = 89.8. Strong prior-gen agent model: top-5 GDPval, 1M omni context, free tier. Behind Fable 5.1 and 1.3; use when 1.3 Free unavailable.

---

## Signature

- Provided by: **Laguna S 2.1** (laguna/laguna-s-2.1) — 2026-09-22
- Method: public internet research (Artificial Analysis, BenchLM, BenchGen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.1.md`, using the same headings.