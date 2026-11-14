# Claude Haiku 4.5 — findings by DeepSeek 4.1 Flash 1017

- Source: Anthropic/Claude 4.5 Haiku (`claude-haiku-4.5`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5 (AA listing: "Claude 4.5 Haiku", with reasoning and non-reasoning effort levels)
- **Short description:** Anthropic's small, low-latency Claude model of the 4.5 generation. Best suited to high-volume, cost-sensitive text and image understanding work rather than frontier agentic tasks.
- **Provider / access:** Anthropic API plus Amazon Bedrock, Google (Vertex) and Microsoft Azure — four providers listed by Artificial Analysis; OpenRouter id `anthropic/claude-haiku-4.5`.
- **Release / knowledge:** Released 2025-10-15; knowledge cutoff July 2025 (stated on the AA model page).
- **IDs:** `anthropic/claude-haiku-4.5`
- **Context window:** 200K tokens (verified on the Artificial Analysis technical-specifications table).
- **Modalities:** text and image input; text output; reasoning available as an explicit effort level (plus a non-reasoning mode); tool use advertised through the `tools`/`tool_choice` request fields on the OpenRouter model guide.
- **Pricing (as of 2026-11-14):** $1.00 / 1M input, $5.00 / 1M output, 90% cache discount (~$0.10 / 1M cache-hit), $0.77 blended (7:2:1). Bedrock/Vertex list $1.10 / $5.50. Paid, not free.
- **Architecture:** proprietary Anthropic model; parameter count undisclosed; weights not available.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **7 / #79 of 80** (Artificial Analysis Intelligence Index v5.0.1, 9-eval harness: AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode-AA 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2, Terminal-Bench-Science 0.1)
- Terminal-Bench 4.0 / GDPval-AA / AutomationBench-AA: no verified public score found (per-eval values not exposed on the fetched page)

Reasoning / knowledge:

- AA-Omniscience Accuracy / Non-Hallucination Rate: no verified public score found
- HLE-Diamond: no verified public score found
- CritPt v2 (Hard Subset): no verified public score found

Coding:

- FrontierCode-AA 2.0 / Terminal-Bench 4.0: no verified public score found
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- 200K-token context window; no long-context retrieval figure reported on the fetched page.

### Normalized scores (1–100)

- **Tool use: 42/100.** Intelligence Index of 7 sits in the weak (<20) band, i.e. near the bottom of the 80-model class view; no agentic sub-score is published to lift it.
- **Reasoning: 40/100.** Index 7 falls in the <20 band (30–50 range); reasoning is selectable but delivers very little measured capability.
- **Context window: 70/100.** 200K tokens verified — the 200K = 70 anchor of the 200K–500K tier.
- **Multimodal: 62/100.** Text and image input with text-only output; no audio or video input, no non-text output.
- **Coding: 45/100.** No FrontierCode/Terminal-Bench/SWE-bench figure surfaced and an index of 7 is weak, so the no-coding-evidence cap applies.
- **Cost efficiency: 85/100.** $1/$5 per 1M with a 90% cache discount and $0.77 blended price is mid-market for a small model — cheap per token, but a $0.53 cost per Intelligence Index task.
- **Overall Score: 52/100.** Half-up mean of 42/40/70/62/45 = 51.8 → 52. Best fit: cheap, fast, high-volume text/image classification and short-form drafting, not agentic or frontier reasoning work.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash 1017 (deepseek/deepseek-v4.1-flash-1017)** — 2026-11-14
- Method: public internet research via direct `webfetch` of the Artificial Analysis model page (web search returned HTTP 402, so the direct-fetch fallback was used); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources)
  - [Claude 4.5 Haiku — Intelligence, Performance & Price Analysis (Artificial Analysis)](https://artificialanalysis.ai/models/claude-4-5-haiku)
  - [Anthropic: Claude Haiku 4.5 (OpenRouter model guide)](https://openrouter.ai/anthropic/claude-haiku-4.5)
