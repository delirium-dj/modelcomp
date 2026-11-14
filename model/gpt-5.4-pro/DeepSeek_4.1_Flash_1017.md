# GPT-5.4 Pro — findings by DeepSeek 4.1 Flash 1017

- Source: OpenAI/GPT-5.4 Pro (`gpt-5-4-pro`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro (Xhigh effort)
- **Short description:** OpenAI's March 2026 Pro-tier reasoning model, since superseded by GPT-5.5 Pro. Built for high-effort single-shot problem solving where latency and price matter less than answer quality.
- **Provider / access:** OpenAI API only (single provider on AA) — `openai/gpt-5.4-pro`
- **Release / knowledge:** Released 2026-03-05; knowledge cutoff 2025-08-31
- **IDs:** `openai/gpt-5.4-pro`
- **Context window:** 1M tokens (AA technical specifications table; ~1575 A4 pages)
- **Modalities:** text + image in; text out; reasoning yes (Pro/Xhigh effort); tool calls supported
- **Pricing (as of 2026-11-14):** $30.00 in / $180.00 out per 1M tokens; blended $45.00 at 7:2:1 cache ratio
- **Architecture:** proprietary, undisclosed parameters; weights not available

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **no verified public score found** (AA flags the model deprecated and shows "N/A" / "No publicly available API" for Intelligence, time-per-task and cost-per-task)
- Terminal-Bench 4.0 / GDPval-AA / AutomationBench-AA: **no verified public score found** (index components enumerated on the page, per-eval numbers not rendered)

Reasoning / knowledge:

- AA-Omniscience Accuracy / Non-Hallucination Rate: **no verified public score found**
- HLE-Diamond: **no verified public score found**
- CritPt v2 (Hard Subset): **no verified public score found**

Coding:

- FrontierCode-AA 2.0 / Terminal-Bench 4.0: **no verified public score found**
- SWE-bench Verified / LiveCodeBench: **no verified public score found**

Long context:

- 1M-token context window verified in the AA specification table; no long-context retrieval figure published for 5.4 Pro.

Sibling-context evidence (verified on the same page, not this model's own score): OpenAI's current line tops out at GPT-6 Astra 57 and GPT-6.1 Sol 55 on the Intelligence Index, which frames 5.4 Pro as a prior-generation Pro tier.

### Normalized scores (1–100)

- **Tool use: 84/100.** Pro/Xhigh reasoning tier from OpenAI with the full host tooling stack, but its own agentic index, Terminal-Bench and GDPval figures are unpublished — placed at the top of the strong band, not the frontier 88–96 band.
- **Reasoning: 86/100.** Xhigh reasoning effort and a Pro-tier lineage support strong multi-step reasoning; absent any verified HLE-Diamond, CritPt or Omniscience number the score is capped below the 90+ frontier band.
- **Context window: 97/100.** 1M-token window verified on AA → ≥1M tier (95–100).
- **Multimodal: 65/100.** Text and image input, text-only output; no audio/video input or image/audio generation.
- **Coding: 84/100.** Pro-tier code synthesis with high reasoning effort, but no published FrontierCode-AA 2.0 or SWE-bench Verified figure for 5.4 Pro caps it in the strong band.
- **Cost efficiency: 18/100.** $30.00 / $180.00 per 1M is far above the $10/$50 floor of the 30-point tier and roughly 15× the market median output price — among the most expensive API models tracked.
- **Overall Score: 83/100.** (84+86+97+65+84)/5 = 83.2 → 83. Best fit: rare high-stakes reasoning batches where the answer matters more than the bill; not a default workhorse.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash 1017 (deepseek/deepseek-v4.1-flash-1017)** — 2026-11-14
- Method: public internet research via direct `webfetch` of the Artificial Analysis model page (web search returned HTTP 402, so the direct-fetch fallback was used); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources)
  - [GPT-5.4 Pro: Intelligence, Performance & Price Analysis — Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-4-pro)
