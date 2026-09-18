# Muse Spark 1.2 Free — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Meta / Muse Spark 1.2 Free (Contributor Free tier)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free (Contributor Free, prior free tier)
- **Short description:** Meta's prior-generation Muse Spark 1.2, hosted free on Zen as the Contributor Free tier. Current Zen page spotlights 1.3 Free; 1.2 Free is the prior free tier — same weights as standard 1.2 with training-data consent.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.2-contributor-free`; kie.ai/Vercel/OpenRouter. Chat Completions.
- **Release / knowledge:** 1.2 released 2026 (pre-1.3); knowledge cutoff ≈ early-2026.
- **IDs:** `opencode/muse-spark-1.2-contributor-free` (Zen Free). Standard `muse-spark-1.2`.
- **Context window:** 1M total (BenchLM `muse-spark-1-2` confirmed 1M).
- **Modalities:** Text/image/video in; text out. Reasoning on; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0/$0 Zen Contributor Free.
- **Architecture:** Proprietary Meta MoE; same weights as standard 1.2.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (BenchLM `muse-spark-1-2`).
- Tau3-Banking: **no verified public score found** for 1.2 (AA reports +2 vs 1.3).
- GDPval-AA: **1631** Elo (BenchLM).
- AA article: GDPval +260 vs prior; TB +2; Tau3 +2 vs 1.3.
- Claw-Eval: **no verified public score found**.
- MCP-Atlas: **90.3%** (Benchgen `meta/muse-spark-1-2`).

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (BenchLM).
- HLE: **45.5%** (BenchLM).
- LCR / MRCR: **no verified public score found** at 1M.
- CritPt: **no verified public score found**.
- AA Intelligence Index: **no verified public score found** for 1.2.

Coding:

- DeepSWE: **59.3%** (BenchLM).
- SWE-bench Verified / SWE-Pro: **no verified public score found**.
- LiveCodeBench: **no verified public score found**.
- SciCode: **no verified public score found**.

Long context:

- 1M declared; no MRCR public.

### Normalized scores (1–100)

- **Tool use: 90/100.** TB 82.9% (frontier), GDPval 1631 (frontier), MCP-Atlas 90.3% (frontier). Cap = no Claw-Eval direct.
- **Reasoning: 88/100.** GPQA 90.4% (frontier), HLE 45.5% (frontier). Cap = no MRCR @ 1M.
- **Context window: 100/100.** 1M declared. No MRCR ≥98% at 512K verified → provisional 95–100; choose 100 by AA/BenchLM presence.
- **Multimodal: 90/100.** Text + image + video in; no non-text out → 90.
- **Coding: 88/100.** DeepSWE 59.3% (mid-frontier), TB 82.9% lifts. Cap = no SciCode/SWE-bench Verified direct.
- **Cost efficiency: 100/100.** $0/$0 Zen Free.
- **Overall Score: 93/100.** Mean (90+88+100+90+88+100)/6 = 92.7 → 93. Best fit: near-frontier free fallback when 1.3 Free unavailable.

---

## Signature

- Provided by: **MiniMax M3 (minimax-m3)** — 2026-09-17
- Method: independent MiniMax M3 evaluation drawn from public benchmark datasets (BenchLM `muse-spark-1-2`, AA Muse Spark 1.2 article, Benchgen `meta/muse-spark-1-2`); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.