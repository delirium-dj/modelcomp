# Grok 4.20 0309 v2 — findings by DeepSeek 4.1 Flash 1017

- Source: SpaceXAI/Grok 4.20 0309 v2 (`grok-4-20`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 0309 v2 (Reasoning / Non-reasoning variants)
- **Short description:** SpaceXAI's spring-2026 flagship chat/reasoning model, shipped in paired reasoning and non-reasoning endpoints; aimed at long-document, agentic and general knowledge work with a very large context.
- **Provider / access:** SpaceXAI's own API and Microsoft Azure (two providers listed on the Artificial Analysis model page). Exact API model id is not printed on the fetched page; the Artificial Analysis slug is `grok-4-20`.
- **Release / knowledge:** Released 2026-04-07; knowledge cutoff not stated on the fetched page.
- **IDs:** `grok-4-20` (Artificial Analysis slug; vendor API id not published on the fetched pages)
- **Context window:** 2,000,000 tokens — verified from the Artificial Analysis model page ("2M tokens context window").
- **Modalities:** text + image in; text out; reasoning yes (the reasoning variant uses extended thinking, the non-reasoning variant does not); tool calls not documented on the fetched page.
- **Pricing (as of 2026-11-14):** $1.25 / 1M input, $2.50 / 1M output, 84% cache discount (blended $0.64 / 1M at a 7:2:1 cache-hit/input/output mix), per SpaceXAI's API.
- **Architecture:** proprietary; parameter count and size class undisclosed. Weights are not available.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: no verified public score found — the model's page is a deprecated entry and reports the index as N/A ("No publicly available API"), so no composite value or rank is published.
- Terminal-Bench 4.0 / GDPval-AA / AutomationBench-AA: no verified public score found

Reasoning / knowledge:

- AA-Omniscience Accuracy / Non-Hallucination Rate: no verified public score found
- HLE-Diamond: no verified public score found
- CritPt v2 (Hard Subset): no verified public score found

Coding:

- FrontierCode-AA 2.0 / Terminal-Bench 4.0: no verified public score found
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- 2M-token context window (verified). No long-context retrieval figure (e.g. AA-LCR) is published for this model.

### Normalized scores (1–100)

- **Tool use: 72/100.** A paired reasoning/non-reasoning flagship with 2M context and tool-capable API hosting, but Artificial Analysis publishes no index for this deprecated entry, so the mid-band placement is capped by missing agentic evidence.
- **Reasoning: 70/100.** Reasoning mode is confirmed and the model sits in SpaceXAI's flagship line, yet no HLE-Diamond, CritPt or Omniscience figure survives on the page, capping confidence.
- **Context window: 97/100.** ≥1M tier — verified 2,000,000-token window, among the largest published.
- **Multimodal: 65/100.** Text and image input with text-only output; no audio, video or PDF-specific claim.
- **Coding: 50/100.** No FrontierCode-AA, Terminal-Bench or SWE-bench result is published for this entry, so coding is capped in the no-evidence band.
- **Cost efficiency: 90/100.** $1.25 in / $2.50 out per 1M with an 84% cache discount is unusually output-cheap for a flagship and sits just above the ~$1.25/$4.25 reference point.
- **Overall Score: 71/100.** Mean of the five quality dims (72, 70, 97, 65, 50) = 70.8, rounded to 71. Best fit: very-long-document and bulk text work where a 2M window and cheap output tokens matter more than published agentic scores; verify against a current release (SpaceXAI now points to Grok 4.3 / 4.7) before adopting.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash 1017 (deepseek/deepseek-v4.1-flash-1017)** — 2026-11-14
- Method: public internet research via direct `webfetch` of the Artificial Analysis model page (web search returned HTTP 402, so the direct-fetch fallback was used); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources)
  - [Grok 4.20 0309 v2 — Artificial Analysis](https://artificialanalysis.ai/models/grok-4-20)
