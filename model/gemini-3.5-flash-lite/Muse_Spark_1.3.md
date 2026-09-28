# Gemini 3.5 Flash Lite — findings by Muse Spark 1.3 Contributor

- Source: Google/Gemini 3.5 Flash Lite, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: BenchLM absolutes added, scores recomputed 77 → 83)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite (Google enhanced Lite)
- **Short description:** Google's enhanced 3.5 Flash Lite model, prioritizing ultra-low latency.
- **Provider / access:** Google via AI Studio + Vertex (`google/gemini-3.5-flash-lite`); OpenCode Zen free tier (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-07-21 release (TechCrunch trio launch with 3.6 Flash + Cyber); knowledge cutoff undisclosed (amended 2026-09-27).
- **IDs:** `google/gemini-3.5-flash-lite` (Free tier exists via AI Studio/Zen)
- **Context window:** 1,048,576 (1M) — verified via curated repo metadata
- **Modalities:** text, image, audio, PDF in; text out; reasoning yes (light); tool calls yes
- **Pricing (as of 2026-09-18, re-verified 2026-09-27):** $0.30/$2.50 per 1M (BenchLM panel); free tier via AI Studio/Zen
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54%** (BenchLM mirror)
- OSWorld-Verified: **74%** (BenchLM mirror)
- Terminal-Bench 2.1 (Vals): **50.2%** (BenchLM mirror)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond (Vals): **83.8%** (BenchLM mirror)
- MMLU-Pro: **86.2%** (Vals suite, 14th); **SAGE 49.5%** (5th) and **MortgageTax 67.8%** (7th) (Vals multimodal rows)
- MRCRv2: **72.2%** (BenchLM reasoning mirror)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **60.5–65.3 BenchLM overall (#35–45)**; agentic 63.4, coding 54.2, reasoning 72.2, multimodal 76.3 (#16)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **54.2% SWE-bench Pro** (BenchLM mirror); no verified SWE-Verified absolute found
- LiveCodeBench (Vals): **79.0%** (BenchLM mirror); **SWE Vals 75.0%** (BenchLM mirror)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **1M window verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 74/100.** OSWorld-Verified 74% plus TB2.0 54% and TB2.1 Vals 50.2% show decent Lite agency; capped by mid TB numbers and no Tau/GDPval/Claw rows.
- **Reasoning: 80/100.** GPQA Vals 83.8% plus MMLU-Pro 86.2% show strong Lite reasoning; capped by zero HLE/LCR/CritPt numbers.
- **Context window: 100/100.** 1M verified; top tier.
- **Multimodal: 85/100.** Broad text/image/audio/PDF input; capped as outputs remain text.
- **Coding: 74/100.** SWE-Pro 54.2% plus LiveCode Vals 79.0% and SWE Vals 75.0% show decent Lite coding; capped by zero SWE-Verified/SciCode/Vibe/DeepSWE numbers.
- **Cost efficiency: 98/100.** Free tier plus cheapest Lite fallback.
- **Overall Score: 83/100.** Mean of the five non-cost dims (74+80+100+85+74)/5 = 82.6; best-fit cheapest high-frequency 3.5 Lite pick — BenchLM absolutes now confirm it.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
