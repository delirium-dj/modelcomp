# Gemma 4 31B — findings by Muse Spark 1.2

- Source: Google (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google's flagship open-weight dense model (2026-04-02) with 30.7B params; Apache 2.0, reasoning-capable, native image/video, token-efficient.
- **Provider / access:** Google AI Studio `gemma-4-31b` via OpenCode Zen `google/gemma-4-31b` (Chat Completions via adapter) and HuggingFace weights
- **Release / knowledge:** 2026-04-02; knowledge cutoff not disclosed
- **IDs:** `google/gemma-4-31b` (Reasoning) and `google/gemma-4-31b-non-reasoning` — Free tier $0 via Google AI Studio
- **Context window:** 262,144 total (256K in / ~32K out) — verified via Artificial Analysis (256K) and Google model card (256K, 128K E2B/E4B)
- **Modalities:** Text, image, video in; text out; reasoning yes (Reasoning vs Non-reasoning); tool calls yes; JSON mode yes — no audio in 31B (E2B/E4B have audio)
- **Pricing (as of 2026-09-24):** $0.00 in / $0.00 out via Google AI Studio (Reasoning); $0.15/$0.40 via third parties; DeepInfra $0.08 blended — cheapest open-weight
- **Architecture:** Dense 30.7B, Apache 2.0 open-weights

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench v2.1 / v4.0: **0% (v4.0, AA)** (Artificial Analysis, Gemma 4 31B Reasoning — vs SciCode 45%)
- Tau2-Bench: **76.9% avg (3 runs)** (Google model card — vs Gemma 4 26B A4B 68.2%, E4B 42.2%)
- AutomationBench-AA: **5%** (Artificial Analysis, Reasoning — vs Non-reasoning no score)
- Tau3-Banking / Tau2-Bench AA: **no verified public score found** (Tau2 above is vendor Tau2 average)
- GDPval-AA v2: **606** (Artificial Analysis, Reasoning) vs **755** vs GPT-5 1015 comparison
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **84.3%** (Google card — vs Gemma 3 27B 42.4%, vs Qwen3.5 27B 86%)
- HLE: **19.5% no tools / 26.5% with search** (Google card) / **24%** (Artificial Analysis)
- LCR / MLCR: **AA-LCR 70%** (Artificial Analysis, Reasoning) / MRCR v2 128k 8-needle **66.4% avg** (Google card)
- CritPt: **1%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **30 (Reasoning, v4.3.2)** (Artificial Analysis — vs 39 reported in 2026-04-06 article on v4.1.1; Non-reasoning 14–22) — rank #13/140
- MMLU Pro: **85.2%** (Google)
- AIME 2026 no tools: **89.2%** (Google)
- BigBench Extra Hard: **74.4%** (Google)
- Omniscience Accuracy / Hallucination Rate: **AA-Omniscience -48** (Artificial Analysis, hallucination-heavy)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (not published for Gemma 4)
- LiveCodeBench v6: **80.0%** (Google card — vs Gemma 3 27B 29.1%, vs Gemma 4 26B A4B 77.1%)
- Codeforces ELO: **2150** (Google — vs 26B A4B 1718)
- SciCode: **45%** (Artificial Analysis, Reasoning) / **43%** SciCode vs Qwen 40% (per AA article)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found** but AA article notes TerminalBench Hard 36% vs Qwen 33%

Long context:

- MRCR v2 66.4% at 128K 8-needle average (Google card); 256K total window verified; AA-LCR 70%

### Normalized scores (1–100)

- **Tool use: 58/100.** Tau2 76.9% strong vendor but AA Automation 5% + TB v4.0 0% reveal weak independent agentic; capped by no GDPval/Claw and dependency on search for HLE lift.
- **Reasoning: 72/100.** GPQA 84.3% + MMLU Pro 85.2% + AIME 89.2% strong but HLE 19.5% (26.5% with search) + AA Index 30 + CritPt 1% + Omniscience -48 cap; token-efficient (38M vs 48M median).
- **Context window: 72/100.** 262,144 total verified (256K); tier ~72 for 256K per methodology but capped by MRCR 66.4% at 128K (not 90%+) and AA-LCR 70% vs 1M peers.
- **Multimodal: 70/100.** Text/image/video in → text out; MMMU Pro 76.9% + MATH-Vision 85.6% + OmniDoc 0.131; capped by 31B lacking audio (E2B/E4B only) and no audio/PDF output.
- **Coding: 78/100.** LCB v6 80.0% + Codeforces 2150 + SciCode 45% leading Qwen 40%; capped by SciCode 45% mid-tier and no SWE-bench Verified vs 80.6% Pro leaders.
- **Cost efficiency: 100/100.** $0.00 Free via Google AI Studio (Apache 2.0 self-host free); 38M tokens vs 98M Qwen makes effective cost even lower.
- **Overall Score: 70/100.** Mean of five non-cost dims (58+72+72+70+78)/5=70.0 → 70; best-fit token-efficient open-weight all-rounder.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-24
- Method: public internet research (Artificial Analysis 2026-04-02/2026-09, Google AI Dev model card 4, artificialanalysis.ai articles 2026-04-06, ai.google.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
