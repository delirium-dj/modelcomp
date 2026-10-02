# GPT 5.2 — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5.2 (`openai/gpt-5.2`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.2
- **Short description:** The frontier-grade general model of the GPT-5 series — an adaptive-reasoning successor to GPT-5.1 with stronger agentic and long-context performance, targeted at broad task coverage across math, coding, science and tool-calling workloads.
- **Provider / access:** OpenAI API, plus OpenRouter and Vercel AI Gateway; OpenAI Flex tier available. Not open weights.
- **Release / knowledge:** Released 2025-12-10; knowledge cutoff not separately published for this ID.
- **IDs:** `gpt-5.2` (OpenAI/OpenRouter); OpenCode Zen tracks it as `opencode/gpt-5.2`. No Zen Free ID.
- **Context window:** 400K tokens total (OpenRouter); max output not separately published.
- **Modalities:** text and image in; text out. Adaptive reasoning (effort tiers incl. non-reasoning, medium, xhigh), tool use, structured outputs.
- **Pricing (as of 2026-10-01):** **$1.75 / $14 per 1M** in/out (OpenRouter/OpenAI); OpenAI Flex tier lower.
- **Architecture:** proprietary decoder-only; adaptive-reasoning frontier model. Not released.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **74.3%** (medium); Terminal-Bench Hard: **43.2%** (medium) — (Artificial Analysis via OpenRouter)
- IFBench (instruction following): **75.4%** (xhigh), 65.2% (medium); AA-Omniscience Accuracy **38.3%** / Non-Hallucination **38.4%** (medium)
- Gallium / Claw-Eval / Toolathlon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.3%** (xhigh), 86.4% (medium), 71.2% (non-reasoning)
- HLE: **37.7%** (xhigh), 26.7% (medium), 8.0% (non-reasoning)
- AA-LCR: **70.3%** (medium); CritPt: **7.9%** (medium)
- Artificial Analysis Intelligence Index: not published on the OpenRouter row — **no verified public value found for this ID**

Coding:

- No SWE-bench Verified/Pro number was surfaced; Terminal-Bench Hard **43.2%** (medium) is the closest measured agentic-coding signal
- SWE-bench Verified / SciCode / LiveCodeBench / DeepSWE: **no verified public score found**

Long context:

- 400K-token window documented; AA-LCR **70.3%** is the only long-context figure found; **no MRCR/RULER/GraphWalks retrieval score** — **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 70/100.** τ²-Bench Telecom 74.3% and IFBench 75.4% are good, but Terminal-Bench Hard 43.2% is mid and there is no GDPval/OSWorld/Claw-Eval figure — solidly mid-tier rather than frontier.
- **Reasoning: 84/100.** GPQA 90.3% (xhigh) and HLE 37.7% are near-frontier, and AA-LCR 70.3% is strong; capped because the reasoning effort tier determines the score and no Intelligence Index value is published.
- **Context window: 80/100.** 400K tokens lands in the 200K–500K band (200K = 70, 500K = 85).
- **Multimodal: 68/100.** Text and image input, text output (+image band = 60–70); no audio/video documented.
- **Coding: 74/100.** No SWE-bench number exists; scored on the mid Terminal-Bench Hard figure and the series' documented coding gains, not as a frontier coder.
- **Cost efficiency: 70/100.** $1.75 / $14 per 1M sits between the $1.25/$4.25 (~88) and $3/$15 (~60) reference points.
- **Overall Score: 75/100.** (70 + 84 + 80 + 68 + 74) / 5 = 75.2 → 75. Best fit: balanced day-to-day frontier reasoning and agentic work at mid-frontier pricing.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-01
- Method: public internet research (OpenRouter model page incl. its full per-effort Artificial Analysis table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.