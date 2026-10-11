# Grok 4 — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's July 2025 reasoning model with tool calling and image understanding, the base non-reasoning variant of the Grok 4 family. It is a mid-tier reasoning model that supports text and image input with a 256K context window. The reasoning version is the tracked variant.
- **Provider / access:** xAI API (`grok-4`), OpenRouter; via OpenAI-compatible API at `https://api.x.ai/v1`. No free tier.
- **Release / knowledge:** Released July 10, 2025. Knowledge cutoff not disclosed.
- **IDs:** `xai/grok-4` (API ID `grok-4`)
- **Context window:** 260,000 tokens (≈256K) (verified via Artificial Analysis — ≥200K tier; context window 260k per AA). Higher context tiers available via Grok 4.20.
- **Modalities:** Text and image input; text output (verified via AA — +image in = 60-70 tier). Reasoning yes (this is the reasoning variant); tool/function calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $3.00 in / $15.00 out per 1M tokens (AA confirmed); cached read $0.75/M (75% discount); 128K+ context surcharge applies. Batch pricing not disclosed. No Free tier.
- **Architecture:** Proprietary transformer (xAI). Parameters not disclosed. This is the base Grok 4; xAI has since released Grok 4.5, 4.6, 4.7 as upgraded variants.

### Raw benchmarks found

> Verified public numbers sourced from BenchLM (`https://benchlm.ai/models/grok-4`, overall 51.96, rank #90/889, 15 of 625 benchmarks) and Artificial Analysis (`https://artificialanalysis.ai/models/grok-4`, Intelligence Index 22 estimated, #143/227 reasoning models). 15 benchmark rows verified across 2 independent sources.

> **Note:** This is the base Grok 4 model from July 2025. AI Index 22 (estimated, #143/227 among reasoning models) and overall BenchLM 51.96 indicate this is a mid-to-below-average performer. xAI's newer Grok 4.5/4.6/4.7 models score substantially higher (64-68 BenchLM overall).

Agent / tool use:

- τ²-bench Telecom: **74.9%** (Artificial Analysis / BenchLM — agentic telecom, solid)
- Gert Labs: **42.34%** (Gert Labs rankings / BenchLM — mid-tier)
- GDPval-AA (Elo): **no verified public score found**
- GDPval-AA (normalized): **no verified public score found**
- Terminal-Bench 2.1 (Vals): **no verified public score found**
- aaTerminalBench21: **no verified public score found**
- AA Agentic Index: **no verified public score found**
- GDP.pdf: **no verified public score found**
- OSWorld 2.0: **no verified public score found**
- ApprenticeBench: **no verified public score found**
- AA ITBench: **no verified public score found**
- AA Tau3 Banking: **no verified public score found**

Coding:

- React Native Evals: **72.6%** (React Native Evals leaderboard / BenchLM — solid coding)
- SWE-bench Verified: **no verified public score found**
- SWE-bench Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- AA-SciCode: **no verified public score found**
- AA Coding Index: **no verified public score found**
- DeepSWE: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- CursorBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- AA Intelligence Index: **22** (Artificial Analysis — estimated; #143/227 reasoning models, #90/889 overall; well below ~60 frontier)
- AA-GPQA-D: **no verified public score found**
- AA-HLE: **26.7%** (Artificial Analysis / BenchLM — below 40% frontier)
- MMLU-Pro: **no verified public score found**
- ARC-AGI-1: **no verified public score found**
- AA-LCR: **68.0%** (Artificial Analysis / BenchLM — long-context reasoning proxy)
- CritPt: **2.0%** (Artificial Analysis / BenchLM — extremely low)
- MLCR-AA: **no verified public score found**
- Omniscience Index: **no verified public score found**
- FrontierMath: **no verified public score found**

Multimodal:

- AA-MMMU-Pro: **68.8%** (Artificial Analysis / BenchLM — visual reasoning, decent)
- Design Arena Website: **no verified public score found**
- CharXiv: **no verified public score found**
- LVBench: **no verified public score found**
- Vision2Web: **no verified public score found**

Long context:

- Context window: 260,000 (≈256K) (verified via Artificial Analysis)
- MRCR / RULER: **no verified public score found**
- AA-LCR: **68.0%** (Artificial Analysis model benchmarks) — long-context reasoning proxy
- GraphWalks: **no verified public score found**

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (`https://benchlm.ai/models/grok-4`, overall 51.96, #90/889, 15 benchmarks) and Artificial Analysis (`https://artificialanalysis.ai/models/grok-4`, Intelligence Index 22 estimated, #143/227) as of 2026-10-11.
>
> **Important note:** This is the base Grok 4 model from July 2025. xAI has since released Grok 4.5 (64.22 BenchLM overall), Grok 4.6 (67.92 BenchLM overall), and Grok 4.7 with substantially improved performance. The base Grok 4 scores reflect its mid-tier position in the current landscape.

- **Tool use: 58/100.** τ²-bench Telecom 74.9% (decent agentic benchmark), Gert Labs 42.34%. No Terminal-Bench 2.1, no GDPval, no OSWorld, no aaTerminalBench21, no AA Agentic Index. Very limited tool-use benchmark coverage. Capped by low Intelligence Index 22, CritPt 2.0% (extremely low), and minimal agentic benchmark data.

- **Reasoning: 55/100.** AA Intelligence Index 22 (estimated, #143/227 reasoning models — well below ~60 frontier), AA-HLE 26.7% (below 40% frontier), AA-LCR 68.0%. No GPQA Diamond, no MMLU-Pro, no ARC-AGI, no Omniscience. Severely capped by Intelligence Index 22 (lowest tier), CritPt 2.0%, HLE 26.7%, and lack of major reasoning benchmarks (GPQA, ARC-AGI missing).

- **Context window: 79/100.** 260,000 (≈256K) token context window (≥200K tier = 65-84 per methodology, score 79). Capped by no verified MRCR/RULER/GraphWalks retrieval curve ≥98% at 128K+ published; AA-LCR 68.0% shows long-context reasoning is moderate.

- **Multimodal: 70/100.** Verified text and image input, text output (+image in = 60-70 tier per methodology, score 70). AA-MMMU-Pro 68.8%. No video/audio input verified. Capped by text-only output, no video/audio input, no CharXiv, no LVBench, no Design Arena, no AA-Video-MME.

- **Coding: 63/100.** React Native Evals 72.6% (decent coding benchmark). No SWE-bench, no LiveCodeBench, no DeepSWE, no AA-SciCode, no AA Coding Index, no CursorBench. Very limited coding benchmark coverage beyond React Native Evals. Capped by lack of major coding benchmarks.

- **Cost efficiency: 64/100.** $3.00 in / $15.00 out per 1M tokens — somewhat expensive vs median ($2.00/$10.00); $0.75 cached input (75% off). No free tier. 128K+ context surcharge likely.

- **Overall Score: 65/100.** Half-up mean: (58+55+79+70+63)/5 = 325/5 = 65.0 → 65. **Best-fit:** base Grok 4 model (July 2025) with 256K context and image input but weak reasoning (Intelligence Index 22, #143/227), minimal benchmark coverage, and premium $3/$15 pricing. Consider Grok 4.6 (78.9, #36/889) or Grok 4.5 (83.6, #16/889) for substantially better performance at similar pricing.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-11
- Method: public-internet research (BenchLM `https://benchlm.ai/models/grok-4` for overall score/rank (#90/889, 51.96) and 15 benchmark rows; Artificial Analysis `https://artificialanalysis.ai/models/grok-4` for Intelligence Index 22, context window 260K, pricing $3/$15, AA-HLE 26.7%, AA-LCR 68.0%, AA-MMMU-Pro 68.8%, CritPt 2.0%, output speed 73.6 tok/s; Gert Labs for 42.34%; React Native Evals leaderboard for coding 72.6%). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research.
- Key findings: Grok 4 is the base July 2025 model with Intelligence Index 22 (estimated, #143/227 reasoning models); BenchLM overall 51.96 (#90/889); τ²-bench Telecom 74.9%; React Native Evals 72.6%; GPQA, HLE, ARC-AGI, SWE-bench, LiveCodeBench all missing; $3/$15 per 1M tokens; 260K context; image input only. xAI's newer Grok 4.5/4.6/4.7 score substantially higher (64-68 BenchLM overall).
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.

---
