# GPT-5.5 — findings by DeepSeek 4.1 Flash 1017

- Source: OpenAI/GPT-5.5 (`gpt-5-5`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 (Xhigh / High / Medium / Low / Non-reasoning)
- **Short description:** OpenAI's April 2026 general-purpose reasoning family, superseded by GPT-5.6 Sol. Ships five selectable reasoning-effort levels so one model id covers cheap chat through heavy agentic work.
- **Provider / access:** OpenAI API, Amazon Bedrock, Microsoft Azure — `openai/gpt-5.5`
- **Release / knowledge:** Released 2026-04-23; no knowledge cutoff stated on the fetched page
- **IDs:** `openai/gpt-5.5`
- **Context window:** 922k tokens (AA technical specifications table; ~1383 A4 pages) — note this is below the full 1M tier
- **Modalities:** text + image in; text out; reasoning yes on xhigh/high/medium/low, non-reasoning variant available; tool calls supported
- **Pricing (as of 2026-11-14):** $5.00 in / $30.00 out per 1M tokens; 90% cache discount; blended $4.35 at 7:2:1
- **Architecture:** proprietary, undisclosed parameters; weights not available

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **no verified public score found** (model is deprecated on AA; the Intelligence panel reads "N/A" and "No publicly available API")
- Terminal-Bench 4.0 / GDPval-AA / AutomationBench-AA: **no verified public score found** (all are listed as evaluations run against GPT-5.5, but per-benchmark values are chart-only and did not render as text)

Reasoning / knowledge:

- AA-Omniscience Accuracy / Non-Hallucination Rate: **no verified public score found**
- HLE-Diamond: **no verified public score found**
- CritPt v2 (Hard Subset): **no verified public score found**

Coding:

- FrontierCode-AA 2.0 / Terminal-Bench 4.0: **no verified public score found**
- SWE-bench Verified / LiveCodeBench: **no verified public score found**

Long context:

- 922k-token window verified on AA; no long-context retrieval figure published for GPT-5.5.

Operational figures (verified): time to first answer token 39.55 s (xhigh), 21.77 s (high), 11.22 s (medium), 2.77 s (low), 1.68 s (non-reasoning); output speed 61–73 tok/s across effort levels. Sibling framing from the same page: OpenAI's newer line tops out at GPT-6 Astra 57 and GPT-6.1 Terra 51.

### Normalized scores (1–100)

- **Tool use: 86/100.** Broad host coverage (OpenAI, Bedrock, Azure) and five effort levels including a fast non-reasoning mode make it a practical agent driver; no published agentic index value stops short of the frontier 88–96 band.
- **Reasoning: 88/100.** Xhigh effort with a 39.55 s thinking latency indicates deep deliberate reasoning, but unverified HLE-Diamond / CritPt / Omniscience figures cap it just below 90.
- **Context window: 93/100.** 922k verified tokens → 500K–1M tier (85–94); narrowly misses the 1M band.
- **Multimodal: 65/100.** Text and image input, text-only output; no audio or video ingestion.
- **Coding: 86/100.** AA runs Terminal-Bench 4.0 and FrontierCode-AA 2.0 against this model, and the xhigh tier is aimed at agentic coding; missing published per-benchmark numbers keep it in the strong band.
- **Cost efficiency: 42/100.** $5.00 / $30.00 per 1M sits between the $4/$20 (50) and $10/$50 (30) reference points, tempered slightly by the 90% cache discount.
- **Overall Score: 84/100.** (86+88+93+65+86)/5 = 83.6 → 84. Best fit: teams standardising on one OpenAI id that must scale from cheap bulk calls to heavy agentic runs.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash 1017 (deepseek/deepseek-v4.1-flash-1017)** — 2026-11-14
- Method: public internet research via direct `webfetch` of the Artificial Analysis model page (web search returned HTTP 402, so the direct-fetch fallback was used); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources)
  - [GPT-5.5: Intelligence, Performance & Price Analysis — Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-5)
