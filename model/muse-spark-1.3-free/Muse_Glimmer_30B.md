# Muse Spark 1.3 Contributor — findings by Muse Glimmer 30B

> Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-25

- Source: Meta (`opencode/muse-spark-1.3-contributor-free`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor Free
- **Short description:** Meta's Muse Spark 1.3 agentic coding / long-horizon model offered via OpenCode Zen Free Contributor tier. Same weights as standard 1.3 with training-data consent in exchange for $0 access.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.3-contributor-free` — Chat Completions API
- **Release / knowledge:** 2026-09-02 release; knowledge cutoff not published
- **IDs:** `opencode/muse-spark-1.3-contributor-free`; no separate Zen Free ID beyond Contributor tier
- **Context window:** 1,048,576 total tokens (1M) verified via meta.json and Artificial Analysis model page
- **Modalities:** Text, image, video, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-25):** Free Zen tier $0/$0 with training-data consent; Contributor $0.10/$0.20 per 1M; Standard $1.25/$4.25 per 1M
- **Architecture:** Proprietary Meta weights; MoE details not disclosed

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (BenchLM muse-spark-1-3, 2026-09-24)
- Tau3-Banking / Tau2-Bench: **50.5%** (BenchLM AA Tau3 Banking, 2026-09-24); Artificial Analysis article reports 47% for xhigh / 52% max variant on same harness
- GDPval-AA: **1754 Elo** (BenchLM GDPval-AA, 2026-09-24); Artificial Analysis article reports 1709 Elo xhigh / 1754 max
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **59.4%** (BenchLM SWE-Atlas Codebase QnA, 2026-09-24)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (BenchLM AA-GPQA Diamond, 2026-09-24)
- HLE: **48.7%** (BenchLM AA-HLE, 2026-09-24)
- LCR / MLCR: **83.0%** AA-LCR (BenchLM, 2026-09-24); MLCR-AA 43.3%
- CritPt: **24.9%** (BenchLM, 2026-09-24); Artificial Analysis article notes 26% for xhigh variant
- Artificial Analysis Intelligence Index / BenchLM overall: **61** Artificial Analysis Intelligence Index for xhigh variant (Artificial Analysis article 2026-09-02)
- Omniscience Accuracy / Hallucination Rate: **43.6%** accuracy, 32.9% hallucination rate (BenchLM AA-Omniscience, 2026-09-24)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** for this exact ID
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **58.8%** (BenchLM AA-SciCode, 2026-09-24)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **75.4%** DeepSWE (BenchLM, 2026-09-24); AA Coding Index 75.8%

Long context:

- MRCR v2 256K-512K **98.5%**, 512K-1M **98.1%** (BenchLM, 2026-09-24)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 90/100.** Terminal-Bench 88.8% and Tau3 Banking 50.5% place the model in the high-agentic tier; GDPval 1754 Elo supports frontier tool use. Capped by lack of published Claw-Eval.
- **Reasoning: 92/100.** GPQA Diamond 93.5% and HLE 48.7% with CritPt 24.9% show strong reasoning; Artificial Analysis Intelligence Index 61 confirms top-tier knowledge/reasoning mix.
- **Context window: 100/100.** 1M token window with MRCR 98.5%/98.1% retrieval at 512K-1M meets the ≥1M tier with verified long-context retention.
- **Multimodal: 85/100.** Text, image, video, PDF input confirmed; no audio input reported. Score reflects strong image/video support without audio out.
- **Coding: 90/100.** DeepSWE 75.4% and AA Coding Index 75.8% with Terminal-Bench 88.8% indicate frontier coding/agentic coding performance; limited by absence of LiveCodeBench/SWE-bench Verified public numbers for this ID.
- **Cost efficiency: 100/100.** Free Zen Contributor tier $0/$0 with training-data consent.
- **Overall Score: 91/100.** Mean of five quality dims (90+92+100+85+90)/5 = 91.4 → 91 half-up. Best-fit for long-horizon agentic coding when free tier is available.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
