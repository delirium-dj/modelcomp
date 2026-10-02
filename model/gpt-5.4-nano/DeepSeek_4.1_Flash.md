# GPT 5.4 Nano — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5.4 nano (`openai/gpt-5.4-nano`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.4 Nano
- **Short description:** The most lightweight and cost-efficient GPT-5.4 variant — text and image input optimised for speed-critical, high-volume work such as classification, extraction, ranking and sub-agent execution, where responsiveness beats deep reasoning.
- **Provider / access:** OpenAI API, OpenRouter, Vercel AI Gateway. Not open weights.
- **Release / knowledge:** Released 2026-03-17; knowledge cutoff August 2025.
- **IDs:** `gpt-5.4-nano` (OpenAI/OpenRouter); OpenCode Zen tracks it as `opencode/gpt-5.4-nano`. No Zen Free ID.
- **Context window:** 400K tokens (OpenRouter); max output not separately published.
- **Modalities:** text and image in; text out. Reasoning yes (incl. xhigh), tool use, structured outputs.
- **Pricing (as of 2026-10-01):** **$0.20 / $1.25 per 1M** in/out.
- **Architecture:** proprietary decoder-only, lightweight tier. Not released.

### Raw benchmarks found

Agent / tool use (Artificial Analysis via OpenRouter, xhigh):

- τ²-Bench Telecom: **76.0%**; IFBench: **75.9%**; Terminal-Bench Hard: **42.4%**; GDPval-AA: **21.8%**; Agentic Index: **16.0**
- Non-reasoning: τ²-Bench Telecom **34.8%**, IFBench 32.7%
- Claw-Eval / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **81.7%** (xhigh), 55.8% (non-reasoning); HLE: **28.3%** (xhigh), 4.1% (non-reasoning)
- Artificial Analysis Intelligence Index: **20.7** (xhigh); CritPt: **9.3%** (xhigh)
- AA-Omniscience Accuracy **25.7%** / Non-Hallucination **25.8%**

Coding:

- Artificial Analysis Coding Index: **56.1** (xhigh); SciCode: **47.2%** (xhigh)
- SWE-bench Verified / LiveCodeBench / DeepSWE: **no verified public score found**

Long context:

- 400K-token window documented; AA-LCR: **76.7%** (xhigh) — surprisingly strong for a nano tier; **no MRCR/RULER/GraphWalks retrieval score** — **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 72/100.** τ²-Bench Telecom 76.0%, IFBench 75.9% and Terminal-Bench Hard 42.4% are good for a nano tier, but the Agentic Index (16.0) and GDPval-AA (21.8%) cap it mid-band.
- **Reasoning: 76/100.** GPQA 81.7% (xhigh) is strong for the class; HLE 28.3% and an Intelligence Index of 20.7 keep it out of the frontier band.
- **Context window: 80/100.** 400K tokens sits in the 200K–500K band (200K = 70, 500K = 85).
- **Multimodal: 68/100.** Text and image input, text output (+image band = 60–70); no audio/video documented.
- **Coding: 76/100.** Coding Index 56.1 and SciCode 47.2% are solid mid-tier for a nano model; no SWE-bench number exists.
- **Cost efficiency: 96/100.** $0.20 / $1.25 per 1M is near-budget pricing, just under the ~$0.10/$0.20 (97–99) band.
- **Overall Score: 74/100.** (72 + 76 + 80 + 68 + 76) / 5 = 74.4 → 74. Best fit: classification, extraction, ranking and high-volume sub-agent execution at very low cost.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-01
- Method: public internet research (OpenRouter model page with its Artificial Analysis per-effort table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.