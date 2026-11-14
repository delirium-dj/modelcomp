# Muse Wonder Full — findings by DeepSeek 4.1 Flash 1017

- Source: Meta/`muse-wonder-full`
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full (Max)
- **Short description:** Meta's flagship proprietary reasoning model for heavy multimodal knowledge work, able to take text, images, speech and video and reason over up to a million tokens in one request.
- **Provider / access:** Meta (proprietary). Artificial Analysis lists **no publicly available API** and no providers for this model at the time of fetching; there is also no public price.
- **Release / knowledge:** Released 2026-10-12; knowledge cutoff not stated on the fetched page.
- **IDs:** `meta/muse-wonder-full` (no first-party API id published; not listed on any fetched provider endpoint)
- **Context window:** 1M tokens (stated in the Artificial Analysis technical-specification table and FAQ).
- **Modalities:** text + image + speech + video input; text output; reasoning yes (extended thinking/chain-of-thought); tool calls not documented on the fetched page.
- **Pricing (as of 2026-11-14):** no public price — Artificial Analysis shows `In -` / `Out -` and "No publicly available API".
- **Architecture:** proprietary; parameter count and MoE structure undisclosed by Meta.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **50 / #24 of 128** (AA Intelligence Index v5.0.1, which aggregates AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode-AA 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 Hard Subset, Terminal-Bench-Science 0.1)
- Terminal-Bench 4.0 / GDPval-AA / AutomationBench-AA: no verified public score found (per-eval values are only rendered in charts on the fetched page)
- Time per Intelligence Index task: N/A (no public API, so AA could not measure; Performance rated "Unknown")

Reasoning / knowledge:

- AA-Omniscience Accuracy / Non-Hallucination Rate: no verified public score found
- HLE-Diamond: no verified public score found
- CritPt v2 (Hard Subset): no verified public score found

Coding:

- FrontierCode-AA 2.0 / Terminal-Bench 4.0: no verified public score found
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- 1M-token context window (verified on the AA specification table); no long-context retrieval figure reported.

### Normalized scores (1–100)

- **Tool use: 82/100.** Intelligence Index 50 sits in the strong band (45–59), and the index is heavily agentic (Briefcase, AutomationBench, Terminal-Bench, FrontierCode), but per-eval agentic numbers are unpublished and there is no reachable API to test tool loops, capping it below frontier.
- **Reasoning: 84/100.** Index 50 maps to the 80–90 reasoning band, with reasoning mode confirmed and only 112M index output tokens (mildly verbose); missing HLE-Diamond/CritPt/Omniscience values cap it.
- **Context window: 96/100.** 1M tokens verified, which lands in the ≥1M tier (95–100); no retrieval-stress number to justify 100.
- **Multimodal: 92/100.** Full non-text input coverage — image, speech and video in, text out — which is the top multimodal tier; text-only output keeps it off 100.
- **Coding: 78/100.** Coding is part of the 50-point composite index (FrontierCode-AA 2.0, Terminal-Bench 4.0, Terminal-Bench-Science 0.1) but no standalone coding score is published, so it is held at the bottom of the strong band.
- **Cost efficiency: 40/100.** No public price and no publicly available API — cost cannot be verified, so this is scored as an unpurchasable/opaque price point rather than as cheap.
- **Overall Score: 86/100.** Mean of 82, 84, 96, 92, 78 = 86.4 → 86; best fit for teams with private Meta access that need video/speech-aware long-context reasoning rather than cheap API inference.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash 1017 (deepseek/deepseek-v4.1-flash-1017)** — 2026-11-14
- Method: public internet research via direct `webfetch` of the Artificial Analysis model page (web search returned HTTP 402, so the direct-fetch fallback was used); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources)
  - [Muse Wonder Full: Intelligence, Performance & Price Analysis](https://artificialanalysis.ai/models/muse-wonder-full)
