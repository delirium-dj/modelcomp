# Muse Ember — findings by DeepSeek 4.1 Flash 1017

- Source: Meta/Muse Ember (`muse-ember`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Ember (Max / Xhigh effort levels)
- **Short description:** Meta's compact, fast reasoning model released November 2026, positioned as the cheap-and-quick member of the Muse family; best suited to high-volume reasoning, retrieval and light agentic work where latency and price matter.
- **Provider / access:** Meta's own API is the only provider listed on Artificial Analysis. Exact API model id is not printed on the fetched page; the Artificial Analysis slug is `muse-ember`.
- **Release / knowledge:** Released 2026-11-09; knowledge cutoff not stated on the fetched page.
- **IDs:** `muse-ember` (Artificial Analysis slug; vendor API id not published on the fetched page)
- **Context window:** 1,000,000 tokens — verified from the Artificial Analysis model page.
- **Modalities:** text + image in; text out; reasoning yes (two effort levels: max, xhigh); tool calls not documented on the fetched page.
- **Pricing (as of 2026-11-14):** $0.10 / 1M input, $0.50 / 1M output, 96% cache discount, blended $0.0728 / 1M at a 7:2:1 mix (Meta API).
- **Architecture:** proprietary; parameters undisclosed; weights not available.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **36 / #2 of 36** in its comparable-model class (max effort; xhigh scores 34), Artificial Analysis Intelligence Index v5.0.1 — median for the class is 24.
- Terminal-Bench 4.0 / GDPval-AA / AutomationBench-AA: no verified public score found (only the composite index is published)

Reasoning / knowledge:

- AA-Omniscience Accuracy / Non-Hallucination Rate: no verified public score found
- HLE-Diamond: no verified public score found
- CritPt v2 (Hard Subset): no verified public score found

Coding:

- FrontierCode-AA 2.0 / Terminal-Bench 4.0: no verified public score found (both feed the composite index but no individual figure is shown)
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- 1M-token context window (verified). No long-context retrieval benchmark is reported on the page.

### Normalized scores (1–100)

- **Tool use: 76/100.** Index 36 places it #2 of 36 in its price class, top of the mid band, but no individual agentic eval (Terminal-Bench, AutomationBench) is published, which caps it below the frontier band.
- **Reasoning: 78/100.** Composite of 36 (median 24) with a reasoning-mode max/xhigh split is strong for the class, short of a published HLE-Diamond or CritPt figure.
- **Context window: 95/100.** ≥1M tier — 1,000,000 tokens verified.
- **Multimodal: 65/100.** Text and image input, text-only output; no audio/video/PDF-specific support claimed.
- **Coding: 60/100.** Coding and software-engineering evals are baked into the 36 index, so capability is real but undocumented individually — held near the lower edge of the mid band.
- **Cost efficiency: 97/100.** $0.10 in / $0.50 out per 1M with a 96% cache discount is among the cheapest reasoning-capable rates available.
- **Overall Score: 75/100.** Mean of the five quality dims (76, 78, 95, 65, 60) = 74.8, rounded to 75. Best fit: cheap, low-latency reasoning over large documents and image inputs at high volume.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash 1017 (deepseek/deepseek-v4.1-flash-1017)** — 2026-11-14
- Method: public internet research via direct `webfetch` of the Artificial Analysis model page (web search returned HTTP 402, so the direct-fetch fallback was used); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources)
  - [Muse Ember — Artificial Analysis](https://artificialanalysis.ai/models/muse-ember)
