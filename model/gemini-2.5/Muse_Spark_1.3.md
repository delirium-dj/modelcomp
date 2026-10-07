# Gemini 2.5 — findings by Muse Spark 1.3

- Source: Google (google/gemini-2.5-pro)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5
- **Short description:** Google's Gemini 2.5-family flagship thinking model (served as `gemini-2.5-pro`): deep-reasoning, codebase-level coding and native multimodal understanding with a 1M context window.
- **Provider / access:** Google AI Studio (`gemini-2.5-pro`) and Vertex AI; OpenCode Zen via Google provider IDs. Chat Completions-style Generative Language API (`v1beta/models/gemini-2.5-pro`).
- **Release / knowledge:** 2026-03-25 experimental release, GA 2026-06-17 (Google Cloud model card, verified); knowledge cutoff 2025-01 (vendor-reported)
- **IDs:** `google/gemini-2.5-pro` (Google API; no Zen Free ID exists — paid only)
- **Context window:** 1,048,576 total tokens; 65,536 max output (Google Cloud model card, verified)
- **Modalities:** Text in/out; image, audio, video, PDF in (native multimodal, verified); reasoning (thinking) on; tool calls / function calling supported
- **Pricing (as of 2026-10-07):** $1.25/$10.00 per 1M in/out (prompts ≤200K; $2.50/$15.00 above 200K; cached input $0.125) (Google AI pricing page, verified); paid only, no $0 tier
- **Architecture:** Proprietary thinking model (DeepMind Gemini 2.X family; Flash-and-below siblings use distillation — Pro distillation undisclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **28.5%** (Artificial Analysis official-API eval)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **23.3% GDPval** (aggregator benchmark table, provisional — scale differs from Elo-form GDPval; treated as weak-signal only)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- OSWorld Verified: **45.8%** (aggregator benchmark table)

Reasoning / knowledge:

- GPQA Diamond: **84–86.4%** (AA-GPQA Diamond 84.4%; aggregator tables 83–86.4%)
- HLE: **17.8–22.5%** (Google-reported 18.8%; AA-HLE 22.5%; aggregator 17.8–21%)
- LCR / MLCR: **69% AA-LCR** (Artificial Analysis); **93% MRCR, 82.9% MRCR 1M pointwise** (aggregator table)
- CritPt: **2–2.6%** (AA CritPt; aggregator 2%)
- Artificial Analysis Intelligence Index / BenchLM overall: **16.1% AA Intelligence Index; 49.47/100 BenchLM overall (#94/882)** (third-party)
- Omniscience Accuracy / Hallucination Rate: **39.1% accuracy / 90.9% hallucination rate** (AA-Omniscience, third-party)

Coding:

- SWE-bench Verified / SWE-Pro: **63.8% SWE-bench Verified** (Google-reported; aggregator tables 58–63.2%)
- LiveCodeBench: **79.2–80%** (third-party tables; LiveCodeBench V5 75.6%)
- SciCode / AA-SciCode: **42.8–46.3%** (AA SciCode 46.3%; aggregator 42.8%)
- Vibe Code Bench: **0.40–40%** (Vals v1.1 0.40% vs aggregator 40% — harness versions differ; both listed, neither trusted alone)
- DeepSWE / Coding Index / other: **33.3% AA Coding Index**; **72.7% Aider Polyglot Edit**, **88.2% HumanEval** (aggregator tables)

Long context:

- MRCR **93%** (82.9% at 1M pointwise) — measured retention at the full window, but below the ~98% bar for a perfect context score.

### Normalized scores (1–100)

- **Tool use: 62/100.** OSWorld 45.8 is solid but Terminal-Bench rows (27–33 across TB 2.1/Hard/4.0) sit far below the ~88 frontier bar; no Tau3/Claw same-harness numbers cap it further.
- **Reasoning: 80/100.** GPQA 84–86.4 near-frontier plus strong MRCR/AIME rows; capped by HLE stuck at ~18–22 (frontier 40+) and a weak CritPt 2–2.6.
- **Context window: 96/100.** Full 1M window with measured MRCR 93% (82.9% at 1M pointwise); capped at 96 short of 98%+ retention for 100.
- **Multimodal: 85/100.** Full text/image/audio/video/PDF input with measured MMMU ~80, MMMU-Pro 74.9 and VideoMME 84.8; capped by text-only output (no image/audio generation in this ID).
- **Coding: 78/100.** SWE-bench ~63 + LiveCode ~80 + Aider 72.7 + HumanEval 88.2; capped by SciCode <47 and Terminal-Bench ~30 dragging the agentic-coding composite.
- **Cost efficiency: 68/100.** Paid-only $1.25/$10 ($2.50/$15 over 200K) with no free ID — reasonable input price but output-heavy; a long-output coding session bills steeply.
- **Overall Score: 80/100.** Mean of the five quality dims (62+80+96+85+78)/5 = 80.2 → 80; best fit as a long-context multimodal reasoner for big-repo analysis — pair with a cheaper terminal-coding executor for agentic loops.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-07
- Method: public internet research (Google Cloud 2.5 Pro model card, Gemini API pricing page, DeepMind 2.5 technical report, BenchLM/BenchmarkList/Artificial Analysis/third-party aggregator tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
