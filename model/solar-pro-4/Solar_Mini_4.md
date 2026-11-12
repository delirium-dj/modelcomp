# Solar Pro 4 — findings by Solar_Mini_4

- Source: Upstage (Upstage Console API `solar-pro4`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage's closed commercial flagship — agent-first, built to carry long multi-step work to the finish (terminal tasks, multi-turn tool use, long-document reasoning) with an explicit refusal-to-fabricate posture (stops and says so when evidence runs out). Text-only.
- **Provider / access:** Upstage Console API (OpenAI-compatible, `solar-pro4`), OpenRouter, Hermes Agent, Upstage Studio, dedicated/on-prem by contract. Paid.
- **Release / knowledge:** Released 2026-08-06 (announcement 2026-08-11/20); training data cutoff February 2026.
- **IDs:** `solar-pro4` (Upstage API), `opencode/solar-pro-4` (curated).
- **Context window:** 524,288 tokens total / 131,072 max output (vendor docs + HokAI); Artificial Analysis lists 384K input / 256K output (conflicting — see research report).
- **Modalities:** Text in → text out; reasoning ON by default with configurable `reasoning_effort` (high/low); tool calling, structured/JSON outputs, streaming.
- **Pricing (as of 2026-09-10 promo end):** $0.30 input / $0.06 cached input / $1.20 output per 1M tokens (Upstage list); 90% launch promo through Sep 10, 2026 (Console + OpenRouter); OpenRouter list $0.15/$0.60 (Upstage blog); HokAI reads OpenRouter promo $0.09/$0.36.
- **Architecture:** proprietary, parameter count undisclosed; reasoning on by default; SOC 2 + ISO 27001 certified operations.

### Raw benchmarks found

**Vendor / launch post (Upstage, as of Aug 2026):**
- Terminal-Bench v2.1: **57.0%** (12) — vs Solar Pro 3's 12 (4.8×); vs open-weight sibling Solar Open 2 43.2 (Δ+13.8).
- τ³-Banking: **23.0%** (9%) — vs Solar Pro 3's 9 (2.5–2.6×).
- AA-LCR: **71.0%** (31%) — multi-document long-context reasoning.
- GDPval-AA v2: **1277 Elo** (498; human baseline 1000) — past the human baseline.
- BrowseComp: **49.2%** (37.3); MCP-Atlas: **61.4%** (58.2); APEX-Agents: 18.7% (16.6).
- SWE-bench Verified: **70.6%** (OpenHands scaffold; Solar Open 2 69.2); MMLU-Pro: **86.3%**; LiveCodeBench: **87.8%**; AIME 2026: **95.3%**.

**Artificial Analysis (Aug 12, 2026):**
- Intelligence Index: **42** — vs Solar Pro 3's 14 (27–28 pt gain in one generation); sits with Inkling (xhigh) 42, behind MiMo-V2.5-Pro 43; Coding Index 52.7.
- GPQA Diamond: **89.1%**; HLE: 29.2%; CritPt: 5.4%; SciCode: 44.6%; AA-LCR 74.0%; τ-Bench Banking 23.3%; TB 2.1 57.3%; TB 4.0 0.5%; AA-Omniscience 18.9% accuracy / 75.6% non-hallucination.

**Independent:**
- LMArena (Oct 2026): text 1,386 Elo (#181/413); coding 1,463 (#133/408); agent −15.9% (#50/50).

### Normalized scores (1–100)

- **Tool use: 64/100.** Terminal-Bench 57.3%, τ³-Banking 23.3%, GDPval-AA Elo 1,277 (past the human baseline) and BrowseComp 49.2% are solid upper-mid agentic results — uneven multi-turn tool reliability.
- **Reasoning: 74/100.** GPQA Diamond 89.0–89.1%, AIME 95.3%, MMLU-Pro 86.3% and LiveCodeBench 87.8% are upper-mid-band; HLE 29.2% and CritPt 5.4% keep it below the frontier tier.
- **Context window: 84/100.** 524K context with AA-LCR 71–74% (marquee strength, designed for deep-window document recall) with a 131K output ceiling; AA's 384K listing caps comparability.
- **Multimodal: 12/100.** Text-only — methodology's text-only band (10–20); no vision/audio despite Korean-lab peers.
- **Coding: 68/100.** SWE-bench Verified 70.6% (OpenHands), LiveCodeBench 87.8%, +13.8 TB lead over its open sibling; AA Coding Index 52.7, TB 4.0 0.5% mid-upper not frontier.
- **Cost efficiency: 59/100.** $0.30/$1.20 list with $0.06 cache reads — and $0.09/$0.36 on OpenRouter — lands in the methodology's ~$0.6/$2.2 ≈ 92 tier, with the enterprise math (≈$0.10 for a 300K-token document task vs ~$1 frontier) as the real selling point.
- **Overall Score: 60.4/100.** (64+74+84+12+60)/5 = 58.8 → 59. Best fit: reliable long-document agent workhorse — 524K context with genuinely usable deep-window recall and past-human-baseline GDPval at a fraction of frontier cost; text-only and mid-tier on hard reasoning.

## Signature

- Provided by: **Solar Mini 4 (solar-mini4)** — 2026-11-01
- Method: public internet research (Upstage launch blog, Artificial Analysis Aug 12 2026 article, DigitalToday Aug 14 2026, Stack Futures Aug 13 2026, HokAI Oct 13 2026, PR Newswire, Noometry); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Upstage Solar Pro 4 launch blog](https://www.upstage.ai/blog/en/solar-pro-4)
  - [Artificial Analysis — Upstage Solar Pro 4: Benchmarks and analysis (Aug 12, 2026)](https://artificialanalysis.ai/articles/upstage-solar-pro-4)
  - [DigitalToday — Upstage unveils Solar Pro 4, first Korean model on OpenRouter (Aug 14, 2026)](https://www.digitaltoday.co.kr/en/view/93216/upstage-unveils-solar-pro-4-available-on-openrouter-and-others)
  - [Stack Futures — Upstage Solar Pro 4 jumps 28 points on AA Intelligence Index (Aug 13, 2026)](https://stackfutures.com/blog/upstage-solar-pro-4-aa-index-42-terminal-bench/)
  - [HokAI — Solar Pro 4 review (Oct 13, 2026)](https://hokai.io/hub/models/solar-pro-4)
  - [PR Newswire — Upstage AI Unveils Solar Pro 4, Scoring 42 on Artificial Analysis Index](https://www.prnewswire.com/news-releases/upstage-ai-unveils-solar-pro-4-scoring-42-on-artificial-analysis-index-to-rank-among-global-frontier-models-302856434.html)
  - [Noometry — Upstage API pricing](https://noometry.com/llm-pricing/upstage)
  - [The New Stack — Save frontier models for frontier problems: Solar Pro 4 workhorse](https://thenewstack.io/upstage-solar-pro-4/)

---

---

## Archived research pass — `Solar_Mini_4.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Solar_Mini_4.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

﻿# Solar Pro 4 — findings by Solar_Mini_4

- Source: Upstage (Upstage Console API `solar-pro4`)
- Archived date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Every archived field value was identical to, or an older or vaguer duplicate of, the active card above.

## Raw benchmarks found

**Vendor / launch post (Upstage, as of Aug 2026):**
- Terminal-Bench v2.1: **57.0%** (12) — vs Solar Pro 3's 12 (4.8×); vs open-weight sibling Solar Open 2 43.2 (Δ+13.8).
- τ³-Banking: **23.0%** (9%) — vs Solar Pro 3's 9 (2.5–2.6×).
- AA-LCR: **71.0%** (31%) — multi-document long-context reasoning.
- GDPval-AA v2: **1277 Elo** (498; human baseline 1000) — past the human baseline.
- BrowseComp: **49.2%** (37.3); MCP-Atlas: **61.4%** (58.2); APEX-Agents: 18.7% (16.6).
- SWE-bench Verified: **70.6%** (OpenHands scaffold; Solar Open 2 69.2); MMLU-Pro: **86.3%**; LiveCodeBench: **87.8%**; AIME 2026: **95.3%**.

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---


**Artificial Analysis (Aug 12, 2026):**
- Intelligence Index: **42** — vs Solar Pro 3's 14 (27–28 pt gain in one generation); sits with Inkling (xhigh) 42, behind MiMo-V2.5-Pro 43; Coding Index 52.7.
- GPQA Diamond: **89.1%**; HLE: 29.2%; CritPt: 5.4%; SciCode: 44.6%; AA-LCR 74.0%; τ-Bench Banking 23.3%; TB 2.1 57.3%; TB 4.0 0.5%; AA-Omniscience 18.9% accuracy / 75.6% non-hallucination.

**Independent:**
- LMArena (Oct 2026): text 1,386 Elo (#181/413); coding 1,463 (#133/408); agent −15.9% (#50/50).
