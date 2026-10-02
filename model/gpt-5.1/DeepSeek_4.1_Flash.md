# GPT 5.1 — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5.1 (`openai/gpt-5.1`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.1
- **Short description:** The primary full-capability successor to GPT-5 — adaptive reasoning with improved instruction adherence, longer-context performance and a more natural conversational style, aimed at broad math, coding and structured-analysis coverage.
- **Provider / access:** OpenAI API, plus OpenRouter and Vercel AI Gateway; OpenAI Flex tier available. Not open weights.
- **Release / knowledge:** Released 2025-11-13; knowledge cutoff not separately published for this ID.
- **IDs:** `gpt-5.1` (OpenAI/OpenRouter); OpenCode Zen tracks it as `opencode/gpt-5.1`. No Zen Free ID.
- **Context window:** 400K tokens total (OpenRouter); max output not separately published.
- **Modalities:** text and image in; text out. Adaptive reasoning (non-reasoning / medium / high effort), tool use, structured outputs.
- **Pricing (as of 2026-10-01):** **$1.25 / $10 per 1M** in/out (OpenRouter/OpenAI); Flex tier lower.
- **Architecture:** proprietary decoder-only; adaptive-reasoning frontier model. Not released.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **81.9%** (high); Terminal-Bench Hard: **45.5%** (high) — (Artificial Analysis via OpenRouter)
- IFBench: **72.9%** (high), 43.2% (non-reasoning); GDPval-AA: **15.6%** (high)
- AA-Omniscience Accuracy **37.7%** / Non-Hallucination **48.1%** (high)
- Claw-Eval / Toolathlon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87.3%** (high), 64.3% (non-reasoning)
- HLE: **28.5%** (high), 5.3% (non-reasoning)
- AA-LCR: **80.0%** (high); CritPt: **4.9%** (high)
- Artificial Analysis Intelligence Index: not published on the OpenRouter row — **no verified public value found for this ID**

Coding:

- Artificial Analysis Coding Index: **49.4** (high); Terminal-Bench Hard **45.5%** (high)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / SciCode / DeepSWE: **no verified public score found**

Long context:

- 400K-token window documented; AA-LCR **80.0%** is the only long-context figure found; **no MRCR/RULER/GraphWalks retrieval score** — **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-Bench Telecom 81.9% is strong and IFBench 72.9% is good, but Terminal-Bench Hard 45.5% is mid and GDPval-AA 15.6% is weak; no Claw-Eval/Toolathon.
- **Reasoning: 84/100.** GPQA 87.3% and AA-LCR 80.0% are near-frontier; HLE 28.5% and CritPt 4.9% are the weak spots that cap the band.
- **Context window: 80/100.** 400K tokens sits in the 200K–500K band (200K = 70, 500K = 85).
- **Multimodal: 68/100.** Text and image input, text output (+image band = 60–70); no audio/video documented.
- **Coding: 76/100.** Coding Index 49.4 and Terminal-Bench Hard 45.5% are solid mid-tier; no SWE-bench number exists to lift it.
- **Cost efficiency: 76/100.** $1.25 / $10 per 1M is mid-frontier pricing (below the $1.25/$4.25 reference, above $3/$15).
- **Overall Score: 77/100.** (78 + 84 + 80 + 68 + 76) / 5 = 77.2 → 77. Best fit: reliable general-purpose agentic and analysis work at moderate cost.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-01
- Method: public internet research (OpenRouter model page incl. its full per-effort Artificial Analysis table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.