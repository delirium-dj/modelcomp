# Grok 4 Fast — findings by DeepSeek 4.1 Flash 1017

- Source: SpaceXAI/Grok 4 Fast (`grok-4-fast`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast (Reasoning / Non-reasoning)
- **Short description:** SpaceXAI's latency-optimised September-2025 Grok variant, sold at a fraction of flagship prices with a very large context; intended for high-volume chat, retrieval and agent loops where speed and cost dominate.
- **Provider / access:** Microsoft Azure is the only provider listed on the Artificial Analysis page. Exact API model id is not printed on the fetched page; the Artificial Analysis slug is `grok-4-fast`.
- **Release / knowledge:** Released 2025-09-19; knowledge cutoff not stated on the fetched page.
- **IDs:** `grok-4-fast` (Artificial Analysis slug; vendor API id not published on the fetched pages)
- **Context window:** 2,000,000 tokens — verified from the Artificial Analysis model page.
- **Modalities:** text + image in; text out; reasoning yes (reasoning variant) / no (non-reasoning variant); tool calls not documented on the fetched page.
- **Pricing (as of 2026-11-14):** $0.20 / 1M input, $0.50 / 1M output (median across providers), blended $0.23 / 1M at a 7:2:1 mix.
- **Architecture:** proprietary; parameter count undisclosed; weights not available.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: no verified public score found — the page is a deprecated entry reporting the index as N/A ("No publicly available API"); no value or rank is published.
- Terminal-Bench 4.0 / GDPval-AA / AutomationBench-AA: no verified public score found

Reasoning / knowledge:

- AA-Omniscience Accuracy / Non-Hallucination Rate: no verified public score found
- HLE-Diamond: no verified public score found
- CritPt v2 (Hard Subset): no verified public score found

Coding:

- FrontierCode-AA 2.0 / Terminal-Bench 4.0: no verified public score found
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- 2M-token context window (verified, same window as the full Grok 4 line). No long-context retrieval benchmark is reported.

### Normalized scores (1–100)

- **Tool use: 64/100.** Cheap, image-aware endpoint with 2M context that suits tool-calling loops, but Artificial Analysis publishes no index or agentic eval for this deprecated entry, holding it to the lower half of the mid band.
- **Reasoning: 62/100.** A reasoning mode exists and the model is positioned as a speed-optimised sibling of the flagship, yet with zero published HLE/CritPt/Omniscience figures the score stays conservative.
- **Context window: 97/100.** ≥1M tier — 2,000,000 tokens verified.
- **Multimodal: 65/100.** Text + image input, text output; nothing beyond that claimed.
- **Coding: 48/100.** No coding benchmark results are published for this entry; capped in the no-evidence band.
- **Cost efficiency: 96/100.** $0.20 in / $0.50 out per 1M is near the ~$0.10/$0.20 top reference point — strong value for a 2M-context model.
- **Overall Score: 67/100.** Mean of the five quality dims (64, 62, 97, 65, 48) = 67.2, rounded to 67. Best fit: budget, high-throughput document and image-plus-text ingestion; check the newer Grok 4.1 Fast listing before committing to it.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash 1017 (deepseek/deepseek-v4.1-flash-1017)** — 2026-11-14
- Method: public internet research via direct `webfetch` of the Artificial Analysis model page (web search returned HTTP 402, so the direct-fetch fallback was used); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources)
  - [Grok 4 Fast — Artificial Analysis](https://artificialanalysis.ai/models/grok-4-fast)
