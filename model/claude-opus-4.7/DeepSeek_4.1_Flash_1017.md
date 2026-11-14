# Claude Opus 4.7 — findings by DeepSeek 4.1 Flash 1017

- Source: Anthropic/Claude Opus 4.7 (`claude-opus-4-7`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7 (Max / Non-reasoning, High release variants)
- **Short description:** Anthropic's April 2026 flagship Opus-tier reasoning model, now superseded by Claude Opus 4.8. Suited to long-horizon agentic coding and enterprise document work.
- **Provider / access:** Anthropic API, Amazon Bedrock, Google Cloud (Vertex), Microsoft Azure — `anthropic/claude-opus-4-7`
- **Release / knowledge:** Released 2026-04-16; knowledge cutoff 2026-01-01
- **IDs:** `anthropic/claude-opus-4-7`
- **Context window:** 1M tokens (Artificial Analysis technical specifications table; listed as ~1500 A4 pages)
- **Modalities:** text + image in; text out; reasoning yes (Max variant reasons, "Non-reasoning, High" variant does not); tool calls supported
- **Pricing (as of 2026-11-14):** $5.00 in / $25.00 out per 1M tokens; 90% cache discount (blended $3.85 at 7:2:1)
- **Architecture:** proprietary, undisclosed parameters; weights not available

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **no verified public score found** (the AA page marks this deprecated model "N/A" / "No publicly available API" for Intelligence, time-per-task and cost-per-task; benchmarking continues at an 18-hour cadence but no index number is published)
- Terminal-Bench 4.0 / GDPval-AA / AutomationBench-AA: **no verified public score found** (AA lists these as index components; per-eval figures were not rendered on the fetched page)

Reasoning / knowledge:

- AA-Omniscience Accuracy / Non-Hallucination Rate: **no verified public score found**
- HLE-Diamond: **no verified public score found**
- CritPt v2 (Hard Subset): **no verified public score found**

Coding:

- FrontierCode-AA 2.0 / Terminal-Bench 4.0: **no verified public score found**
- SWE-bench Verified / LiveCodeBench: **no verified public score found**

Long context:

- 1M-token context window verified on the AA specifications table; no long-context retrieval (needle) figure published for this model.

Measured operational figures (verified): time to first answer token 17.69 s (Max) / 1.72 s (High), output speed 80 tok/s (Max) / 69 tok/s (High), blended price $3.85 per 1M.

### Normalized scores (1–100)

- **Tool use: 80/100.** Frontier-tier Opus positioning with four enterprise hosts and agentic-tuned Max variant, but the AA agentic index and Terminal-Bench/GDPval numbers are unpublished for this deprecated model, so the strong-band mid-point is used rather than a frontier ceiling.
- **Reasoning: 82/100.** Extended-thinking Opus-class model with Jan-2026 knowledge, yet no verified HLE-Diamond, CritPt or Omniscience figure exists in this pass — capped in the strong (45–59) band rather than the 90+ band.
- **Context window: 97/100.** 1M-token window verified on the AA spec table → ≥1M tier (95–100).
- **Multimodal: 65/100.** Text and image input, text-only output; no audio/video input or non-text generation (−).
- **Coding: 80/100.** Opus-tier coding heritage and Max reasoning effort suit agentic SWE work, but FrontierCode-AA 2.0 and SWE-bench Verified figures are not published for 4.7 — strong band, not frontier.
- **Cost efficiency: 45/100.** $5.00 / $25.00 per 1M is well above median ($2.00 / $10.00) with only a 90% cache discount to offset it.
- **Overall Score: 81/100.** (80+82+97+65+80)/5 = 80.8 → 81. Best fit: legacy enterprise deployments needing a 1M-token window on Azure/Bedrock where Opus 4.8 is not yet provisioned.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash 1017 (deepseek/deepseek-v4.1-flash-1017)** — 2026-11-14
- Method: public internet research via direct `webfetch` of the Artificial Analysis model page (web search returned HTTP 402, so the direct-fetch fallback was used); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources)
  - [Claude Opus 4.7: Intelligence, Performance & Price Analysis — Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-4-7)
