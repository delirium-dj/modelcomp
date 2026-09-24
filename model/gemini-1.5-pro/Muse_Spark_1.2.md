# Gemini 1.5 Pro — findings by Muse Spark 1.2

- Source: Google/Gemini 1.5 Pro, e.g. Meta (`muse-spark-1.2-contributor-free`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's May 2024 2M-context multimodal flagship (1.5 generation), legacy status now superseded; pioneered near-perfect long-context retrieval across text/video/audio.
- **Provider / access:** Google via https://generativelanguage.googleapis.com/v1beta (model `gemini-1.5-pro`), Vertex AI; Chat Completions-style with function calling
- **Release / knowledge:** 2024-02 initial, May 2024 update (0207); knowledge cutoff 2024-11 (approx, per Google)
- **IDs:** `google/gemini-1.5-pro` (no Zen Free ID — legacy paid only)
- **Context window:** 2,097,152 tokens (2M) total — verified via LLM Stats, Gemini 1.5 technical report (up to 10M internal, 2M via API)
- **Modalities:** text, image, audio, video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-25):** paid ~$1.25 in / $5.00 out per 1M ( >128K tokens $2.50/$10.00); legacy pricing per Google; no Free ID
- **Architecture:** proprietary dense Transformer (MoE not disclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **46.2%** (Gemini 1.5 technical report Table 10, vs 41.5% Feb version)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- MATH: **58.5% → 67.7%** (technical report: 1.5 Pro improvement); MMLU approx near 1.0 Ultra -1.8% (report)

Coding:

- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index: no verified public score found

Long context:

- MRCR cumulative similarity: **near-perfect recall up to 10M tokens** vs GPT-4 Turbo falling to ~60% at 128K (Gemini 1.5 report Fig 11, 2000 MRCR instances)

### Normalized scores (1–100)

- **Tool use: 55/100.** No verified tool-eval numbers found; legacy model predates current Tau/Terminal suites, capped accordingly despite function-calling support.
- **Reasoning: 72/100.** GPQA 46.2% and MATH 67.7% solid for 2024 generation, plus strong MMLU near Ultra; capped by missing modern HLE/LCR/CritPt and lower than current frontier (~90%).
- **Context window: 95/100.** 2M API window with demonstrated 10M experimental recall and state-of-art long-document/video QA; loses 5 pts to larger 1M-default modern but historically top-tier.
- **Multimodal: 85/100.** Full text/image/audio/video in covers all input types; text-only out; vision win-rate 77% vs Gemini 1.0 family, audio 60% (report).
- **Coding: 60/100.** Report cites +8.9% coding uplift over 1.0 Pro and 29/33 benchmark win-rate, but no public SWE/LCB numeric to push higher.
- **Cost efficiency: 65/100.** Paid $1.25/$5.00 per 1M is mid-cost for legacy 2M model; no free tier, cheaper than 2.5-pro but expensive vs modern Flash distill.
- **Overall Score: 73/100.** Mean of five quality dims (55+72+95+85+60)/5=73.4→73; best fit as legacy long-context multimodal archive when 2M video/audio context is needed.

---

## Signature

- Provided by: **Muse Spark 1.2 (meta/muse-spark-1.2-contributor-free)** — 2026-09-25
- Method: public internet research (Gemini 1.5 technical report arXiv:2403.05530, BenchGecko, LLM Stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
