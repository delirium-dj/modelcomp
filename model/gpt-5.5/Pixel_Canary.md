# GPT-5.5 — findings by Pixel Canary

- Source: OpenAI / GPT-5.5 (`openai/gpt-5.5`, also `gpt-5.5`, `gpt-5-5` on routers)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 — OpenAI's spring-2026 flagship for agentic coding, computer use, knowledge work and early scientific research.
- **Short description:** The previous-generation OpenAI flagship: 100% benchmark coverage (26 families) and the best ARC-AGI abstract-reasoning numbers in this dataset, now two product cycles behind GPT-5.6 Sol (89.0) and priced above the 5.6 tiers.
- **Data-quality note:** the local `meta.json` for this folder still says "awaiting a verified public model card / no verified public value". That is out of date — verified public data now exists (below) and `meta.json` should be refreshed.
- **Provider / access:** OpenAI API; **48 tracked offerings** incl. ZenMux, Perplexity Agent, GMI Cloud, SAP AI Core, FreeModel, FastRouter (`openai/gpt-5.5`), Neon (`gpt-5-5`); many expose the full 1.1M context.
- **Release / knowledge:** released 2026-04-23; knowledge cutoff **2025-12-01** (LLMBoard specification) — about ten months stale today.
- **IDs:** `openai/gpt-5.5`, `gpt-5.5`, `gpt-5-5`. No Free ID — paid only.
- **Context window:** 1.1M input / 128K max output tokens in the API (the product page additionally documents a **400K-token window inside Codex**, so the effective window depends on the surface used).
- **Modalities:** image + text in; text out. Tool use and computer use are the headline design goals; vision supported; no audio/video input, no generation.
- **Pricing (as of 2026-09-27):** official OpenAI $5 / 1M input, $30 / 1M output; most routers pass through $5 / $30; **lowest tracked third-party route $0.1875 / $1.13 (UnoRouter)**. Cache-read and batch rates are not tracked for this ID (no verified public figure). Paid only.
- **Architecture:** proprietary, parameters undisclosed, open weights no.

### Raw benchmarks found

> LLMBoard profile (evaluations 2026-08-24 → 2026-09-27): 30 of 55 rows published, coverage **100% / 26 benchmark families** — full-family evidence; "#x/y" = rank among models with a published score on that benchmark. Composite: LLMBoard **80.8**.

Agent / tool use:

- Terminal-Bench 2.0: **82.70%** (#1/53) — top of the largest terminal-agent field on the tracker
- GDPval-MM: **84.90%** (#1/3); Finance Agent: **60.00%** (#4/8)
- LM Arena Search: **1242.05** (#3/28); Search Factuality **1245.34** (#2/28); Search Style Control **1223.60** (#3/28)
- LM Arena Agent Bash Recovery Steps: **8.96%** (#3/39)
- GDPval-AA, OSWorld 2.0, t2-bench, tau-bench family, MCP Atlas, DeepSWE: not present in the extracted rows — no verified public score found

Reasoning / knowledge:

- ARC-AGI: **95.00%** (#2/11); ARC-AGI v2: **85.00%** (#2/19) — the strongest novel-abstract-reasoning evidence in this comparison
- LiveBench: **80.71%** (#2/38); LiveBench math (2026-06-25) **95.86** (#4/41)
- AA LCR v1.1: **84.33%** (#3/193); LM Arena Text Factuality **1485.98** (#4/128)
- BixBench (bioinformatics): **80.50%** (#1/1); GeneBench **25.00%** (#2/2) — both single/dual-participant fields, no ranking value
- GPQA / HLE / Omniscience rows for this ID: not present in the extracted rows — no verified public score found

Coding:

- Terminal-Bench 2.0: **82.70%** (#1/53) is the only repo/terminal-scale coding row visible in the extracted rows
- SWE-bench Verified / SWE-Bench Pro / LiveCodeBench / SciCode: not present in the extracted rows — no verified public score found

Long context:

- GraphWalks parents >128k: **58.50%** (#3/7) — a measured but middling long-range navigation score, well below GPT-5.6 Sol's 90.70% on the sibling >128k test.

Vision: MMMU-Pro **83.20%** (#2/72).

Runtime: **no provider speed or latency record is linked to this ID** ("No runtime data"), so throughput cannot be verified.

### Normalized scores (1-100)

- **Tool use: 86/100.** Terminal-Bench 2.0 82.70% over 53 competitors (#1) is the strongest measured terminal-agent result in the dataset, backed by Search Factuality 1245.34 (#2/28) and Bash Recovery 8.96% (#3/39); docked because GDPval-AA, OSWorld and the tau/MCP families have no row and Finance Agent 60.00% (#4/8) is only mid-pack.
- **Reasoning: 88/100.** ARC-AGI 95.00% (#2/11) and ARC-AGI v2 85.00% (#2/19) demonstrate genuinely non-memorised reasoning that no other model here matches, with LiveBench 80.71% (#2/38) and AA LCR 84.33% over 193 models (#3) as breadth; capped by a Dec-2025 cutoff and no Omniscience/GPQA row to test abstention.
- **Context window: 82/100.** 1.1M input / 128K output on paper, but the only retrieval measurement (GraphWalks parents >128k 58.50%, #3/7) is weak, and the Codex surface caps at 400K - the window is larger than it performs.
- **Multimodal: 74/100.** Image + text in, text out, with MMMU-Pro 83.20% (#2/72) as solid but not leading evidence; no audio, video or PDF-native input in the verified matrix and no generation.
- **Coding: 84/100.** The #1 Terminal-Bench 2.0 result proves end-to-end repo/terminal capability, yet no SWE-bench Verified/Pro or LiveCodeBench row was retrievable for this ID, so it cannot be placed precisely against Muse Spark 1.3 (75.40% DeepSWE 1.1) or Claude Opus 5.5.
- **Cost efficiency: 72/100.** $5 / $30 official is the priciest OpenAI tier in this cohort and 2.5x GPT-5.6 Terra's output rate, though 48 competing providers and a $0.1875 / $1.13 router floor soften it; no cache disclosure, no free tier, and throughput is unmeasured.
- **Overall Score: 82.8/100.** Half-up mean of (86 + 88 + 82 + 74 + 84) = 414 / 5 = 82.8, Cost excluded. Cross-check: the independent LLMBoard composite is 80.8 - agreement within 2 points. Best fit: terminal-heavy agentic coding and novel abstract reasoning at volume; teams paying list price should compare GPT-5.6 Sol/Terra first, which are newer, cheaper and better on measured long context.

---

## Signature

- Provided by: **Pixel Canary (vercel-ai-gateway/pixel-canary)** — 2026-09-27
- Method: public internet research on 2026-09-27 (LLMBoard model profile incl. provider pricing and runtime tables; the profile publishes 30 of 55 rows and only those retrievable from the page payload are cited); no peer `model/` findings were read — only the single `- **Overall Score:` line of `average.md` was used for queue order. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
