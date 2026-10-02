# GPT 5.3 Codex — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5.3-Codex (`openai/gpt-5.3-codex`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.3 Codex
- **Short description:** OpenAI's most advanced agentic coding model — GPT-5.2-Codex's software-engineering ability combined with GPT-5.2's broader reasoning and professional knowledge, with state-of-the-art SWE-bench Pro, strong Terminal-Bench 2.0 and OSWorld-Verified, and enhanced cybersecurity awareness. ~25% faster and more token-efficient than prior Codex models.
- **Provider / access:** OpenAI API plus OpenRouter and Vercel AI Gateway; codex CLI/cloud workflows. Not open weights.
- **Release / knowledge:** Released 2026-02-24; knowledge cutoff not separately published for this ID.
- **IDs:** `gpt-5.3-codex` (OpenAI/OpenRouter); OpenCode Zen tracks it as `opencode/gpt-5.3-codex`. No Zen Free ID.
- **Context window:** 400K tokens (OpenRouter); max output not separately published.
- **Modalities:** text and image in; text out. Reasoning yes (effort tiers incl. xhigh), tool use, structured outputs, interactive steering during long-running execution.
- **Pricing (as of 2026-10-01):** **$1.75 / $14 per 1M** in/out (OpenRouter/OpenAI).
- **Architecture:** proprietary decoder-only, coding-specialised. Not released.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench Hard: **53.0%** (xhigh); τ²-Bench Telecom: **86.0%** (xhigh); IFBench: **75.4%** (xhigh) — (Artificial Analysis via OpenRouter)
- OSWorld-Verified and Terminal-Bench 2.0: vendor-claimed strong (state-of-the-art-ranked) but **no exact public percentage found in the fetched sources**
- GDPval: vendor-claimed strong for document/spreadsheet/slide knowledge work — **no exact public value found**
- AA-Omniscience: accuracy/non-hallucination rows present but **values not captured**; Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.5%** (xhigh); HLE: **42.5%** (xhigh); AA-LCR: **83.3%** (xhigh); CritPt: **16.9%** (xhigh)

Coding:

- SWE-bench Pro: vendor states **state-of-the-art** (exact percentage not shown in fetched sources); Terminal-Bench 2.0 and OSWorld-Verified: vendor states strong/exact figures not captured
- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE: **no verified public score found in the fetched sources**

Long context:

- 400K-token window documented; AA-LCR **83.3%** is the only long-context figure found; **no MRCR/RULER/GraphWalks retrieval score** — **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 86/100.** τ²-Bench Telecom 86.0%, Terminal-Bench Hard 53.0% and IFBench 75.4% plus vendor-claimed SOTA OSWorld/TB 2.0 put it high; capped below 90 because the OSWorld/TB 2.0 percentages were not captured from a public table.
- **Reasoning: 90/100.** GPQA 91.5%, HLE 42.5% and AA-LCR 83.3% are frontier-class knowledge/reasoning results.
- **Context window: 80/100.** 400K tokens sits in the 200K–500K band (200K = 70, 500K = 85).
- **Multimodal: 68/100.** Text and image input, text output (+image band = 60–70); no audio/video documented.
- **Coding: 88/100.** The model is explicitly positioned as SOTA on SWE-bench Pro with strong TB 2.0/OSWorld and ~25% better token efficiency; held below 90 because the exact SWE-bench Pro / TB 2.0 numbers were not captured in a public table.
- **Cost efficiency: 70/100.** $1.75 / $14 per 1M is mid-frontier pricing (between the $1.25/$4.25 (~88) and $3/$15 (~60) references), partly offset by its token efficiency.
- **Overall Score: 82/100.** (86 + 90 + 80 + 68 + 88) / 5 = 82.4 → 82. Best fit: professional long-horizon agentic coding, debugging and deployment.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-01
- Method: public internet research (OpenRouter model page incl. its Artificial Analysis table with exact values); several vendor-claimed SOTA rows (SWE-bench Pro, TB 2.0, OSWorld) lacked a captured public number and are flagged as such rather than invented. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.3_Codex_Spark.md`, using the same headings.