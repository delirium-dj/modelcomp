# Gemini 3.5 Flash — findings by Muse Spark 1.2

- Source: Meta (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's GA Flash workhorse (2026-05-19) for sustained frontier agentic execution and coding at Flash speed/cost, natively multimodal with thinking levels.
- **Provider / access:** Google AI Studio `google/gemini-3.5-flash`, Vertex AI, and OpenCode Zen `google/gemini-3.5-flash` (Chat Completions via adapter)
- **Release / knowledge:** 2026-05-19; knowledge cutoff 2025-01 (per developer guide; search grounding recommended for newer info)
- **IDs:** `google/gemini-3.5-flash` (Free tier via Google AI Studio rate limits; no distinct Zen Free suffix)
- **Context window:** 1,048,576 total (1M in / 65,536 out) — verified via Google model card and API docs
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes (thinking levels low/medium/high); tool calls yes (function calling, code execution, grounding, computer use preview); JSON mode yes (structured outputs)
- **Pricing (as of 2026-09-23):** Paid tier $1.50 / $9.00 per 1M in/out ($0.15 cached; $14/1K web search); Free tier $0 via Google AI Studio; intro Flex $0.75/$4.50
- **Architecture:** Proprietary (Gemini 3 series, DeepMind)

### Raw benchmarks found

Agent / tool use:

- MCP Atlas (multi-step MCP workflows): **83.6%** (Google model card — vs Gemini 3.1 Pro 78.2%, GPT-5.5 75.3%)
- Terminal-Bench 2.1: **76.2%** (Google model card, Terminus-2 harness — vs Gemini 3 Flash 58.0%, GPT-5.5 78.2%)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1656 Elo** (Google model card — vs Gemini 3.1 Pro 1314, Gemini 3 Flash 1204; GDPval-AA v2 1349)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon (real-world tool use): **56.5%** (Google model card — vs Gemini 3 Flash 49.4%, GPT-5.5 55.6%; best in tracker)
- OSWorld-Verified (computer use): **78.4%** (Google model card — vs Claude Opus 4.7 78.0%, GPT-5.5 78.7%)
- Finance Agent v2: **57.9%** (Google model card — vs Gemini 3.1 Pro 43.0%, best in tracker)
- Gray Swan IPI k=1/k=10: **14.1% / 54.2%** (aireleasetracker aggregate)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE (Humanity's Last Exam, full text+MM, no tools): **40.2%** (Google model card — vs Gemini 3 Flash 33.7%, GPT-5.5 41.4%)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (blog cites top-right quadrant landing but no numeric Index published at release)
- ARC-AGI-2: **72.1%** (Google model card / aireleasetracker — vs Gemini 3 Flash 33.6%, GPT-5.5 84.6%)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **55.1% SWE-Pro (single attempt)** (Google model card — vs Gemini 3 Flash 49.6%, GPT-5.5 58.6%; no separate Verified disclosed)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE 1.1: **37%** (aireleasetracker aggregate; Google card shows 3.5 Flash below GPT-5.5 on this axis)
- CursorBench v3.2 / v3.1: **48.8% / 49.8%** (aireleasetracker)
- MLE-Bench: **49.7%** (aireleasetracker)
- Arena Elo Text/Code: **1476 / 1509** (aireleasetracker)

Long context:

- MRCR v2 (8-needle): **77.3% at 128K average, 26.6% at 1M pointwise** (Google model card); RULER/GraphWalks: no verified public score found

### Normalized scores (1–100)

- **Tool use: 87/100.** MCP Atlas 83.6% #1 + Toolathlon 56.5% #1 + GDPval 1656 + OSWorld 78.4% near GPT-5.5; capped by no Tau3/Claw public numbers and Terminal 76.2% trailing GPT-5.5 78.2%.
- **Reasoning: 85/100.** HLE 40.2% + ARC-AGI-2 72.1% doubling predecessor + GDPval 1656; capped by no GPQA Diamond and no AA Intelligence Index numeric.
- **Context window: 90/100.** 1,048,576 total; tier 95-100 for ≥1M but MRCR v2 drops to 26.6% at 1M pointwise vs 77.3% at 128K, so capped below 96 without sustained 1M retrieval proof.
- **Multimodal: 90/100.** Text/image/audio/video/PDF in → text out; CharXiv Reasoning 84.2% (#1) + MMMU-Pro 83.6% frontier; capped below 93 by Blueprint-Bench 2 spatial 33.6%.
- **Coding: 86/100.** Terminal-Bench 2.1 76.2% + SWE-Pro 55.1% strong vs 3.1 Pro 54.2%, trailing GPT-5.5 78.2%/58.6%; DeepSWE 37% weak caps below 88.
- **Cost efficiency: 80/100.** Paid $1.50/$9.00 ($0.15 cached) 2× Gemini 3.8 Flash intro; Free tier mitigates but paid rate prices above Flash-lite.
- **Overall Score: 88/100.** Mean of five non-cost dims (87+85+90+90+86)/5=87.6 → 88; best-fit for rapid agentic loops and iterative coding at Flash latency with near-Pro intelligence.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (Google DeepMind model card 2026-05-19, Google blog 2026-05-19, Gemini API docs, aireleasetracker, OpenRouter pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
