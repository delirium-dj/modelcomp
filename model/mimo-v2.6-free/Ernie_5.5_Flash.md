# MiMo-V2.6 (Free) — findings by Ernie 5.5 Flash

- Source: Xiaomi/MiMo-V2.6 Free (`mimo-v2.6-free`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6 (Free)
- **Short description:** The free access lane of Xiaomi's MiMo-V2.6 (released 2026-09-22) — same weights as the metered MiMo-V2.6 tiers, offered at $0 through Xiaomi's MiMo Open Platform and partner free routes (rate-limited, e.g. 5 req/min, 100 req/day, 1M tokens/day on AIHubMix).
- **Provider / access:** Xiaomi MiMo Open Platform (`mimo-v2.6`), OpenCode Zen free lane, AIHubMix `xiaomi-mimo-v2.6-flash-free`, Puter.js (free unlimited demo), plus gateway `:free` routes.
- **Release / knowledge:** 2026-09-22 (models.dev); knowledge cutoff not published.
- **IDs:** `mimo-v2.6-free`, `xiaomi/mimo-v2.6-flash` (the metered sibling whose weights the free lane serves), `XiaomiMiMo/MiMo-V2.6-Flash`.
- **Context window:** 1,048,576 tokens (1M); max output 131,072.
- **Modalities:** text, image, audio and video in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.00 on the free lane (rate-limited: 5 requests/min, 100 requests/day, 1M tokens/day per account on AIHubMix). Metered equivalent: $0.14 / $0.28 per 1M ($0.435/$0.87 for the Pro tier).
- **Architecture:** open-weight sparse MoE (Xiaomi MiMo; 309B total / 15B active for the Flash tier per OpenRouter).

### Raw benchmarks found

> No public benchmark table exists for the free lane as an ID; the figures below are the MiMo-V2.6 family rows, cited labelled with the measured ID (free lanes serve the same weights).

Agent / tool use:

- CyberGym: **95.1%**; OSWorld-Verified: **80.8%**; Toolathlon-Verified: **73.6%**
- AutomationBench: **52.3%**; Terminal-Bench 2.1: **87.6%**; Terminal-Bench 4.0: **28.80%**
- JobBench: **61.2%**; Agents' Last Exam: **27.6%**; ExploitGym: **6.0%**; ExploitBench v8-bench: **25%**

Reasoning / knowledge:

- StealthMark Intelligence Benchmarks: **49.3**
- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- DeepSWE: **67.9%**; Terminal-Bench 2.1: **87.6%** (self-reported)
- ProgramBench: **26.0%**; Terminal-Bench 4.0: **28.8%**; SEC-Bench Pro: **47.5%**
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: no verified public rows published

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 80/100.** OSWorld-Verified 80.8%, Toolathlon 73.6% and AutomationBench 52.3% are respectable for a free tier, CyberGym 95.1% is elite; Terminal-Bench 4.0 28.8% and ExploitGym 6.0% cap it.
- **Reasoning: 68/100.** StealthMark 49.3 is the only verified reasoning row and it is mid-pack; no GPQA/HLE/ARC publication exists.
- **Context window: 100/100.** 1,048,576 tokens with 131,072 max output.
- **Multimodal: 85/100.** Text, image, audio and video in — the broadest input set among free tiers — though no public multimodal benchmark rows were published.
- **Coding: 75/100.** DeepSWE 67.9% is decent for the price, but ProgramBench 26.0%, SEC-Bench Pro 47.5% and Terminal-Bench 4.0 28.8% are weak and no SWE-bench row exists.
- **Cost efficiency: 100/100.** $0.00 on the free lane (rate-limited) — the cheapest route to 1M-context multimodal inference in this dataset.
- **Overall Score: 81.6/100.** Best fit for prototyping, cost-zero batch multimodal work and cyber triage; the rate limits and missing benchmark coverage make it unsuitable for production coding agents.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Xiaomi MiMo platform and model card, BenchLM MiMo-V2.6-Flash profile, AIHubMix free-tier limits, OpenRouter Xiaomi catalog, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [MiMo-V2.6 — Xiaomi MiMo Open Platform](https://mimo.xiaomi.com/mimo-v2-6)
  - [MiMo-V2.6-Flash benchmarks & sources — BenchLM](https://benchlm.ai/models/mimo-v2-6-flash)
  - [Xiaomi MiMo V2.6 Flash (free) API limits — AIHubMix](https://aihubmix.com/model/xiaomi-mimo-v2.6-flash-free)
  - [Xiaomi models — OpenRouter](https://openrouter.ai/xiaomi)
- Future sources: add a new file next to this one, e.g. `MiMo_V2.6_Free_v2.md`, using the same headings.