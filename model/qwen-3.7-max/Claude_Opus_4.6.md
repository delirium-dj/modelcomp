# Qwen 3.7 Max — findings by Claude Opus 4.6

- Source: Alibaba Cloud (`qwen-3.7-max`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Max
- **Short description:** Alibaba's proprietary flagship model released May 19–20, 2026, designed for agentic workflows with sustained autonomous execution (up to 35 hours) and thousands of tool calls. Succeeded by Qwen 3.8 series.
- **Provider / access:** Alibaba Cloud Model Studio (closed-weight), third-party AI gateways.
- **Release / knowledge:** 2026-05-19 release; knowledge cutoff not publicly confirmed.
- **IDs:** `alibaba/qwen-3.7-max`
- **Context window:** 1,000,000 tokens total; max output 65,536 tokens.
- **Modalities:** Text in; text out; Thinking/Non-Thinking modes; tool calling (thousands of calls in autonomous sequences).
- **Pricing (as of 2026-05):** $2.50 / $7.50 per 1M tokens (input / output) via Alibaba Cloud. Third-party: ~$1.25/$3.75. Prompt caching supported.
- **Architecture:** Proprietary closed-weight; parameter count undisclosed. Optimized for long-horizon autonomy.

### Raw benchmarks found

Agent / tool use:

- Long-horizon autonomy: sustained continuous execution up to 35 hours (Alibaba).
- Thousands of tool calls per session confirmed.
- Artificial Analysis Intelligence Index: **56.6** (at launch).
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (Alibaba launch data).
- Low hallucination rate (attributed partly to higher abstention rate).
- HLE: no verified public score found.
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.

Coding:

- SWE-bench Verified: **80.4%** (Alibaba launch data).
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: no verified public score found.
- DeepSWE / Coding Index: no verified public score found.

Long context:

- 1,000,000-token window confirmed. No specific MRCR / RULER / GraphWalks retrieval score published.

### Normalized scores (1–100)

- **Tool use: 85/100.** 35-hour sustained execution with thousands of tool calls is industry-leading endurance. AA Intelligence Index 56.6 shows strong overall standing. Capped by missing Terminal-Bench/Tau data.
- **Reasoning: 88/100.** GPQA Diamond 92.4% is very strong. Low hallucination rate impressive. Capped by higher abstention rate and missing HLE.
- **Context window: 84/100.** 1M input is top-tier; 65K max output is below 128K standard of competitors. Capped by lower output ceiling.
- **Multimodal: 50/100.** Text-only input and output based on available documentation. No confirmed vision, audio, or video. Capped by apparent text-only modality.
- **Coding: 84/100.** SWE-bench Verified 80.4% was strong at May 2026 release. Surpassed by later models. Capped by age and absent SWE-bench Pro data.
- **Cost efficiency: 70/100.** $2.50/$7.50 via Alibaba is mid-to-upper tier. Third-party at $1.25/$3.75 improves value. Capped by higher direct pricing.
- **Overall Score: 78/100.** Mean of (85 + 88 + 84 + 50 + 84) / 5 = 78.2, rounded to 78. Strong reasoning and coding with exceptional agentic endurance, constrained by text-only modality.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-03
- Method: Public internet research (Alibaba Cloud, Artificial Analysis, community evaluations); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
