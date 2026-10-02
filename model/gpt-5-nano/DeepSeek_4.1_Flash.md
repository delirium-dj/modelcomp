# GPT 5 Nano — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5 Nano (`openai/gpt-5-nano`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5 Nano
- **Short description:** The smallest and fastest variant in the GPT-5 system — built for developer tools, rapid interactions and ultra-low-latency environments; limited in reasoning depth but retaining GPT-5's instruction-following and safety features. Successor to GPT-4.1-nano.
- **Provider / access:** OpenAI API, OpenRouter, Vercel AI Gateway (multi-provider). Not open weights.
- **Release / knowledge:** Released 2025-08-07; knowledge cutoff May 2024 (older than later GPT-5.x siblings).
- **IDs:** `gpt-5-nano` (OpenAI/OpenRouter); OpenCode Zen tracks it as `opencode/gpt-5-nano`. No Zen Free ID.
- **Context window:** 400K tokens (OpenRouter); max output not separately published.
- **Modalities:** text and image in; text out. Reasoning yes (minimal / medium / high effort), tool use, structured outputs.
- **Pricing (as of 2026-10-01):** **$0.05 / $0.40 per 1M** in/out — the cheapest tier in this dataset.
- **Architecture:** proprietary decoder-only, ultra-lightweight. Not released.

### Raw benchmarks found

Agent / tool use (Artificial Analysis via OpenRouter):

- τ²-Bench Telecom: **36.5%** (high), 30.4% (medium), 25.7% (minimal); Terminal-Bench Hard: **17.4%** (medium), 12.1% (high)
- IFBench: **67.6%** (high), 65.9% (medium), 32.5% (minimal)
- GDPval-AA / Claw-Eval / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **67.6%** (high), 67.0% (medium), 42.8% (minimal)
- HLE: **9.5%** (high), 8.7% (medium), 4.0% (minimal); CritPt: **0.0%** (medium)
- AA-Omniscience Accuracy **17.6%** / Non-Hallucination **47.4%** (medium)

Coding:

- SWE-bench Verified / SciCode / LiveCodeBench / DeepSWE: **no verified public score found** (no coding benchmark captured; low Terminal-Bench Hard figures signal a weak agentic-coder profile)

Long context:

- 400K-token window documented; AA-LCR: **43.7%** (medium), 45.0% (high) — modest; **no MRCR/RULER/GraphWalks retrieval score** — **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 52/100.** τ²-Bench Telecom 36.5% and Terminal-Bench Hard 17.4% are weak-to-mid agentic results, partly offset by IFBench 67.6%; no GDPval/OSWorld figure.
- **Reasoning: 60/100.** GPQA 67.6% and IFBench 67.6% are decent for a nano tier; HLE 9.5% and CritPt 0.0% keep it in the mid band.
- **Context window: 80/100.** 400K tokens sits in the 200K–500K band (200K = 70, 500K = 85).
- **Multimodal: 68/100.** Text and image input, text output (+image band = 60–70); no audio/video documented.
- **Coding: 55/100.** No coding benchmark exists, and the weak Terminal-Bench Hard figures indicate a limited agentic-coder profile — scored provisionally in the low-mid band rather than as a capable coder.
- **Cost efficiency: 98/100.** $0.05 / $0.40 per 1M is the lowest price tier evaluated.
- **Overall Score: 63/100.** (52 + 60 + 80 + 68 + 55) / 5 = 63.0 → 63. Best fit: ultra-low-cost, latency-critical classification and tool-driven tasks where deep reasoning is not required.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-01
- Method: public internet research (OpenRouter model page with its Artificial Analysis per-effort table); scores are normalized 1–100 interpretations, not official vendor scores; Coding is provisional where no benchmark exists.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.