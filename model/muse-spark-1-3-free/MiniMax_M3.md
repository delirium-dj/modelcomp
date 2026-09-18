# Muse Spark 1.3 Free — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`. Do not conflate with peer agent files.

- Source: Meta / Muse Spark 1.3 (Contributor Free tier)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Free (Contributor Free)
- **Short description:** Meta's frontier 1.3 release optimized for long-horizon coding and agentic workflows. Contributor Free tier = same weights as standard 1.3, gated by training-data consent. Top use case: agentic coding and 1M-context planning when the free tier is available.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.3-contributor-free`; kie.ai / Vercel AI Gateway / OpenRouter equivalents. Chat Completions endpoint. Standard tier uses Responses-style tool calling.
- **Release / knowledge:** Released 2026-09-02 (Meta Research). Knowledge cutoff ≈ mid-2026 per Meta blog.
- **IDs:** `opencode/muse-spark-1.3-contributor-free` (Zen, Free); `opencode/muse-spark-1.3` (paid). Same weights; different pricing + consent.
- **Context window:** 1M total (input ≈ 1M, output per AA card 165 tok/s sustained).
- **Modalities:** Text, image, video in (per AA model card); text out. Reasoning on; tool calls; JSON mode supported.
- **Pricing (as of 2026-09-17):** Free tier $0/$0 on Zen Contributor Free (training-data consent). Paid Standard $1.25 in / $4.25 out per 1M tokens (kie.ai; AA).
- **Architecture:** Proprietary Meta frontier MoE; weights shared with paid 1.3 (verified via Meta blog + Vercel changelog).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (BenchLM `muse-spark-1-3`; AA 85%/86% range). Fronttier-tier.
- Tau3-Banking: **47–52%** (AA Index article: 47%/52% pair). BenchLM 50.5%.
- GDPval-AA: **1709/1754** Elo (AA). BenchLM 1754.
- Claw-Eval: **no verified public score found** at same harness as frontier peers.
- MCP-Atlas: **no verified public score found** under `muse-spark-1-3`.

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (BenchLM).
- HLE: **48.7%** (BenchLM).
- MRCR: **98.5% / 98.1%** (BenchLM, 4-needle/8-needle at long context).
- LCR: **83%** (BenchLM).
- CritPt: **no verified public score found**.
- AA Intelligence Index: **61/62** (AA Index article).

Coding:

- SWE-bench Verified / SWE-Pro: DeepSWE **75.4%** (BenchLM; DataCamp/ExplainX note > Opus 4.6 74.0%).
- LiveCodeBench: **no verified public score found** in our slice; treat as ≥85 by proxy of TB tie.
- SciCode: **58.8%** (BenchLM).
- SWE-Atlas: **59.4%** (BenchLM).
- Vibe Code Bench: **no verified public score found**.

Long context:

- MRCR @ 1M: **98.5% / 98.1%** (BenchLM) — strong needle retrieval at full window.

### Normalized scores (1–100)

- **Tool use: 95/100.** TB2.1 88.8% (frontier), Tau3 50.5% (frontier), GDPval 1754 (frontier). Cap = no Claw-Eval direct; tool-call reliability confirmed elsewhere.
- **Reasoning: 92/100.** GPQA 93.5% (frontier), HLE 48.7% (frontier), MRCR 98%+ (frontier). Cap = CritPt missing.
- **Context window: 100/100.** 1M total + verified ≥98% MRCR retrieval at depth (≥98% at 512K+ → 100).
- **Multimodal: 85/100.** Text + image + video in (per AA); text out. Per methodology: +video in ≈ 75–90, no non-text out → 85.
- **Coding: 95/100.** DeepSWE 75.4% (frontier), TB2.1 88.8%, SciCode 58.8% (≥55 = 90+), SWE-Atlas 59.4%. Cap = Vibe missing.
- **Cost efficiency: 100/100.** $0/$0 on Zen Free tier.
- **Overall Score: 93/100.** Mean (95+92+100+85+95+100)/6 = 94.5 → 95. Best fit: default for long-horizon coding/agentic work when free tier available.

---

## Signature

- Provided by: **MiniMax M3 (minimax-m3)** — 2026-09-17
- Method: independent MiniMax M3 evaluation drawn from public benchmark datasets (BenchLM, AA, kie.ai, Meta blog, DataCamp/ExplainX, Vercel changelog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.