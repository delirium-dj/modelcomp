# North Mini Code — findings by MiniMax M3.1 Flash

- Source: Cohere Labs (North Mini Code 1.0), `CohereLabs/North-Mini-Code-1.0`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code (1.0)
- **Short description:** Cohere Labs' June 2026 open-weight (Apache 2.0) code model — 30B total / 3B active, 256K context, trained with SFT then RLVR (CISPO), reporting 61.0% SWE-bench Verified pass@1 with mini-SWE-Agent and an AA Coding Index of 33.4 at launch. It is also the model behind OpenCode's retired "North Mini Code Free" slot.
- **Provider / access:** Hugging Face `CohereLabs/North-Mini-Code-1.0` (Apache 2.0; FP8/Eagle/GGUF/AWQ/NVFP4 community quants incl. unsloth's 230k-download GGUF), OpenRouter `cohere/north-mini-code:free`, Cohere's own API (listed $0/$0 in models.dev), and the retired OpenCode slot `north-mini-code-free` (`canonical_model_id: cohere/north-mini-code-1-0`, now `status: deprecated` and gone from the Zen free roster).
- **Release / knowledge:** **2026-06-09** (Cohere Labs Hugging Face blog). Knowledge cutoff recorded as **2026-09-23** in models.dev.
- **IDs:** `CohereLabs/North-Mini-Code-1.0` (HF), `cohere/north-mini-code-1-0` (canonical), `cohere/north-mini-code` (OpenRouter).
- **Context window:** **256,000** input, **64,000** output; 128K rollout window during RL training.
- **Modalities:** text in / text out only; decoder-only sparse MoE (128 experts, 8 active), interleaved sliding-window RoPE + global NoPE attention 3:1, SwiGLU.
- **Pricing (as of 2026-10-20):** **$0 / $0** on the OpenRouter free route and the Cohere API row; self-host $0 (Apache 2.0).
- **Architecture:** 30B total / 3B active.

### Raw benchmarks found

> Cohere's launch blog (with the chart-only rows) plus the Artificial Analysis
> independent evaluation — the two differ sharply on the agentic axes.

Coding:

- SWE-bench Verified: **61.0% pass@1** with mini-SWE-Agent (Cohere, RL checkpoint) · **80.2% pass@10** for the SFT checkpoint · RL adds **+3.0 points** absolute over SFT
- Terminal-Bench v2: **55.1% pass@10** (SFT checkpoint) · RL adds **+7.9 points** absolute pass@1 over SFT
- SWE-bench Pro / SciCode / LiveCodeBench v6: published only as chart images — no citable text values from Cohere
- Internal human pairwise win rate vs the SFT checkpoint: **66.1%** over 85 samples on code-editing subsets

Agent / tool use:

- Tau2-bench: **37.43%** (AA) · Tau-banking: **6.39%** (AA) · Terminal-Bench 2.1: **35.58%** (AA) · Terminal-Bench Hard: **31.06%** (AA) · Terminal-Bench 4.0: **0.51%** (AA)
- GDPval-AA: **311.53 Elo / 0% normalized** (AA) · AutomationBench: **1.49%** (AA) · IFBench: **57.55%** (AA)

Reasoning / knowledge:

- GPQA Diamond: **75.66%** (AA) · HLE: **11.08%** (AA) · SciCode: **38.77%** (AA) · AA-LCR: **37.33%** (AA) · CritPt: **0.29%** (AA) · Artificial Analysis Intelligence Index: **9.91** (#35/64 for speed, 76.27 tok/s median, TTFT 0.45 s)
- Omniscience Accuracy / Hallucination Rate: **18.9% / 83.2%** (AA) · MLCR: **4.4%** (AA)
- Cohere's launch claim: **AA Coding Index 33.4** (the current AA page re-evaluates it lower, with an OpenRouter mirror showing coding_index 36.5 / agentic_index 1.1 — both cited)
- BenchLM: tracked but **not publicly ranked** ("0 source-displayable benchmark rows"), 256K context, released Jun 9 2026

### Normalized scores (1–100)

- **Tool use: 40/100.** τ²-bench 37.4%, Terminal-Bench 2.1 35.6% and τ-banking 6.4% are low, with GDPval-AA at 311 Elo and AutomationBench 1.5% confirming a thin agentic profile.
- **Reasoning: 55/100.** GPQA 75.7% is respectable, but HLE 11.1%, AA-LCR 37.3%, CritPt 0.29% and an Intelligence Index of 9.9 keep it mid.
- **Context window: 70/100.** 256,000 tokens with 64,000 max output is the 200K–500K tier; no long-context retrieval test is published.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 70/100.** SWE-bench Verified 61.0% pass@1, Terminal-Bench v2 55.1% and the 66.1% human win rate are solid mid-band coding results for a 3B-active model, with the AA Coding Index (33.4 at launch) as the best summary.
- **Cost efficiency: 100/100.** **$0 / $0** on the free API routes, plus Apache 2.0 weights you can self-host — the cheapest way to run a real coding model.
- **Overall Score: 50/100.** Mean of the five quality dims = (40 + 55 + 70 + 15 + 70) / 5 = 50.0 → **50**. Best fit: free local coding research and RL experiments — a strong coding model whose agentic and reasoning ceilings are low.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (Cohere Labs Hugging Face blog and model card, Artificial Analysis, BenchLM, models.dev, OpenRouter API, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `North_Small_Translate.md`, using the same headings.
