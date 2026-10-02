# GPT 5.4 Mini — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5.4 mini (`openai/gpt-5.4-mini`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.4 Mini
- **Short description:** The faster, cheaper mid-tier of the GPT-5.4 family — text and image input with strong reasoning, coding and tool use at reduced latency and cost, built for high-throughput chat, coding assistants and agent workflows at scale.
- **Provider / access:** OpenAI API, OpenRouter, Vercel AI Gateway (multi-provider). Not open weights.
- **Release / knowledge:** Released 2026-03-17; knowledge cutoff August 2025.
- **IDs:** `gpt-5.4-mini` (OpenAI/OpenRouter); OpenCode Zen tracks it as `opencode/gpt-5.4-mini`. No Zen Free ID.
- **Context window:** 400K tokens (OpenRouter); max output not separately published.
- **Modalities:** text and image in; text out. Reasoning yes (incl. xhigh effort), tool use, structured outputs.
- **Pricing (as of 2026-10-01):** **$0.75 / $4.50 per 1M** in/out.
- **Architecture:** proprietary decoder-only, mid-tier. Not released.

### Raw benchmarks found

Agent / tool use (Artificial Analysis via OpenRouter):

- IFBench: **73.3%** (xhigh), 38.8% (non-reasoning); Agentic Index: **17.9** (xhigh)
- Terminal-Bench Hard: **18.2%** (non-reasoning); τ²-Bench Telecom: **23.4%** (non-reasoning); GDPval-AA: **3.8%** (non-reasoning)
- GDPval-AA / τ²-Bench Telecom at xhigh effort: **not captured**; Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87.5%** (xhigh), 60.6% (non-reasoning); HLE: **28.1%** (xhigh), 5.9% (non-reasoning)
- Artificial Analysis Intelligence Index: **24.1** (xhigh); CritPt: **0.0%** (non-reasoning)
- AA-Omniscience Accuracy **25.7%** / Non-Hallucination **4.4%** (non-reasoning)

Coding:

- Artificial Analysis Coding Index: **56.1** (xhigh)
- SWE-bench Verified / SciCode / LiveCodeBench / DeepSWE: **no verified public score found**

Long context:

- 400K-token window documented; AA-LCR **37.0%** (non-reasoning) — the only long-context figure found; **no MRCR/RULER/GraphWalks retrieval score** — **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 62/100.** IFBench 73.3% is good, but the Agentic Index (17.9) is low and the captured τ²-Bench/GDPval figures are non-reasoning-mode only; no xhigh tool-use figures are public.
- **Reasoning: 78/100.** GPQA Diamond 87.5% (xhigh) is strong; HLE 28.1% and an Intelligence Index of 24.1 keep it well below the frontier band.
- **Context window: 80/100.** 400K tokens sits in the 200K–500K band (200K = 70, 500K = 85).
- **Multimodal: 68/100.** Text and image input, text output (+image band = 60–70); no audio/video documented.
- **Coding: 76/100.** Coding Index 56.1 is solid mid-tier; no SWE-bench/SciCode number exists.
- **Cost efficiency: 87/100.** $0.75 / $4.50 per 1M is close to the $1.25/$4.25 (~88) reference and well under $3/$15 (~60).
- **Overall Score: 73/100.** (62 + 78 + 80 + 68 + 76) / 5 = 72.8 → 73. Best fit: high-volume production chat, coding assistance and sub-agents where cost and latency matter.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-01
- Method: public internet research (OpenRouter model page with its Artificial Analysis per-effort table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.