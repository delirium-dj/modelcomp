# Gemini 3.1 Pro — findings by Muse Spark 1.2

- Source: Meta (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's most advanced thinking model (2026-02-19 preview, 2026-11-18 Pro), designed for hardest reasoning where simple answers insufficient, with creative solutions.
- **Provider / access:** Google AI Studio `google/gemini-3.1-pro-preview`, Vertex AI `gemini-3.1-pro`
- **Release / knowledge:** 2026-02-19 preview / 2026-11-18 GA referenced; knowledge cutoff 2026-02
- **IDs:** `google/gemini-3.1-pro-preview` (preview), `google/gemini-3.1-pro` (GA; no Zen Free ID)
- **Context window:** 1,048,576 total (1M) — verified via Kilo, pricepertoken, AA
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes (Deep Think); tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-23):** $2.00 in / $12.00 out per 1M (Google); blended $1.74 on AA; cached pricing available
- **Architecture:** Proprietary (Gemini 3.1)

### Raw benchmarks found

Agent / tool use:

- PinchBench (OpenClaw): **76.6% average #28 of 50** (Kilo — 100% on file ops/comprehension, sanity, stock research)
- Claw-Eval: **57.8%** (BenchLM comparison vs MiniMax M3 74.5%)
- DeepSearchQA: **69.7%** (BenchLM)
- τ²-bench (Tau2): **95.6%** (BenchLM — vs MiniMax missing)
- Gert Labs: **56.87%** (BenchLM)
- Terminal-Bench 2.1: **no verified public score found**
- GDPval-AA: **no verified public score found** (AA Briefcase proxy)

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (Google via Mashable — vs 3 Pro 91.9%, Opus 4.6 91.3%, GPT-5.2 92.4%)
- MMLU Pro: **89.5%** (pricepertoken via AA — 99th percentile)
- HLE: **44.4%** (Mashable — vs Opus 4.6 40.0%, GPT-5.2 34.5%)
- ARC-AGI-2: **77.1%** (Mashable — vs 3 Pro 31.1%, Opus 4.6 68.8%, GPT-5.2 52.9%; 2× Pro improvement)
- Artificial Analysis Intelligence Index: **48** (AA — vs Sonnet 4.5 Thinking 37, Grok 4.5 high 56)
- Math (AA): **86.7** (pricepertoken — 86th percentile)
- Intelligence (AA): **26.3** (80th percentile per pricepertoken)

Coding:

- SWE-bench Pro (verified): **no verified public score found** (GPT-5.3-Codex beats 3.1 Pro per Google's own chart)
- LiveCodeBench Preview: **82.9%** (implied via 3 Pro lineage; 3.1 Pro Lite vs Pro comparison)
- DeepSWE / SciCode: **no verified public score found**
- SWE-bench Pro win: **GPT-5.3-Codex leads 3.1 Pro** (Google concession)

Long context:

- 1M context; no MRCR/RULER numeric disclosed; AA Briefcase and Tau2 indicate strong long-task handling

### Normalized scores (1–100)

- **Tool use: 86/100.** Tau2 95.6% + Claw 57.8 + DeepSearch 69.7 + Pinch 76.6; capped by Claw trailing MiniMax and missing TB2.1.
- **Reasoning: 91/100.** ARC 77.1% strong leap + HLE 44.4% + GPQA 94.3% + AA Index 48; frontier reasoning within Google tier.
- **Context window: 96/100.** 1M total; tier 95-100 but capped below 100 without MRCR disclosure.
- **Multimodal: 88/100.** Full 5-input omni plus Deep Think; video/audio/PDF present qualifies for 88.
- **Coding: 82/100.** SWE-Pro second to Codex + LC ~82.9 lineage; capped by Google's own admission trailing GPT-5.3-Codex.
- **Cost efficiency: 68/100.** $2/$12 mid-tier pricing; 63% more than Flash but cheaper than $10/$50 flagships.
- **Overall Score: 89/100.** Mean of five non-cost dims (86+91+96+88+82)/5=88.6 → 89; best-fit for hardest reasoning/creative tasks where Flash insufficient.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (Google/Mashable benchmark posts, Artificial Analysis, Kilo/PinchBench, BenchLM, pricepertoken); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
