# Doubao Seed Evolving — findings by Inkling 2 Small

- Source: ByteDance/Seed (`doubao-seed-evolving`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed Evolving (`doubao-seed-evolving`)
- **Short description:** ByteDance's weekly-iterating "latest Seed" pointer on Volcano Engine Ark — a single stable model ID whose weights update roughly weekly (auto-upgrade, zero migration). Targets coding and agent work plus multimodal understanding. Currently backing the Doubao-Seed-2.1-Pro lineage (rolling head).
- **Provider / access:** Volcengine Ark (火山方舟) Model Plaza — unified Model ID, Agent Plan or standard API (`https://ark.cn-beijing.volces.com/api/v3` or plan-specific `/api/plan/v3`); BytePlus Ark (SE Asia) and third-party relays (AnyFast, HopBase, CometAPI). Thinks by default; thinking returned in `reasoning_content`; ignores `tool_choice` (same as 2.1 Pro 260915).
- **Release / knowledge:** 2026-06 (initial, per China AI Hub); 1M-context升级 2026-08; second iteration 2026-08-03; weekly cadence since. Knowledge cutoff not published.
- **IDs:** `doubao-seed-evolving` (CN Ark; BytePlus Ark ap-southeast-1; relays). Latest announced change: November 2026 (per aichina.news Volcengine model-list update, deep-thinking model).
- **Context window:** official Ark text-generation announcement: **1M (1,048,576)**; earlier HopBase catalog export (2026-09-25) showed 262,144 / 128K out, "same price as 2.1 Pro; 256K" — spec conflict noted; the newer vendor update and the site docs claim 1M / 256K max output.
- **Modalities:** text / image / video in → text out; reasoning yes (default thinking); tool calling yes (but ignores `tool_choice` per HopBase catalog notes); streaming + context caching.
- **Pricing (as of 2026-11-13):** official price $0.8824 in / $4.41 out per 1M; cached input $0.1765 (HopBase catalog; same as 2.1 Pro). Volcengine CN tier pricing applies; third-party relays vary. Not free.
- **Architecture:** undisclosed; Seed 2.1 Pro lineage (rolling); weekly retrained/refreshed weights.

### Raw benchmarks found

Vendor/official (Seed2.1 family, Pro weights — the lineage Evolving currently points at):

- Terminal-Bench 2.1: **71.0%** (Seed2.1 Pro, official evaluation table)
- BeyondAIME: **87.0**; SuperGPQA: **70.8**; KINA: **48.3**
- MMMU-Pro (w. Tool): **81.6**; MathVision (w. Tool): **92.6**; VideoMME: **89.2**; MMLongBench-128K: **78.3**
- NL2Repo-Bench: **47.0**; ProgramBench: 0/1/50.3 as printed; SWE-Atlas Debugging: **35.2**

Independent community A/B (17 tasks × 2 calls, temperature 0; author-scored 0–10; Coding 6, Agent 5, Hallucination 6):

- Total: evolving **158/170 ≈ 9.29** vs turbo 157.5/170 ≈ 9.26 (evolving +0.03)
- Coding pillar: **9.33** (turbo 9.58); Agent 检索: **9.40** (turbo 9.10); 幻觉控制: **9.17** (turbo 9.08)
- Token efficiency: total **−38.6%** vs turbo (Coding −46%, Hallucination −22%, Agent +14%); multi-tool first round 4 turns vs 5
- No absolute SWE-bench/GPQA/HLE numbers for the rolling ID; weights change weekly
- Shaqiu SQBench (High, independent, 2026 snapshot of the 260915 build): **42.2%** 实战能力, reliability 77.13% — pinned-snapshot proxy only, not the rolling head

Agent / tool use:

- TB2.1 71.0 (family proxy); Agent 检索 9.40 pillar lead vs turbo (community A/B); four-tool parallel first round 4 turns, proactive callback verification
- GDPval-AA: Pro claims highest score in Seed2.1 launch materials (official claim; no number); Tau3: no verified public score found

Reasoning / knowledge:

- BeyondAIME 87.0 (family proxy); SuperGPQA 70.8; KINA 48.3; GPQA/HLE/AA-Index: no verified public score found

Coding:

- TB2.1 71.0 (family proxy); Coding pillar 9.33/10 (community); Code Arena Frontend #8/1539 for the Seed2.1 Preview (official blog)
- LiveCodeBench / SWE-bench Verified: no verified public score found for the rolling ID

Long context:

- 1M claimed (official Aug 2026 update); MMLongBench-128K 78.3 (family); no verified public MRCR/RULER-class retrieval score for the rolling head

Multimodal:

- MMMU-Pro 81.6 / MathVision 92.6 / VideoMME 89.2 (family); text-out only

### Normalized scores (1–100)

- **Tool use: 73/100.** TB2.1 71.0 family proxy plus community Agent-检索 lead (9.40 vs 9.10) and 4-turn multi-tool chains; weekly drift means the number ages fast — provisional.
- **Reasoning: 72/100.** BeyondAIME 87.0 / SuperGPQA 70.8 family proxies; KINA 48.3 lags; no independent GPQA/HLE for the rolling ID.
- **Context window: 85/100.** 1M claimed (official) but third-party catalog export showed 262K/128K out as of 2026-09-25 — scored on the newer vendor claim with the conflict noted; no measured ≥512K retrieval.
- **Multimodal: 85/100.** Inherits Seed2.1 Pro's video/document strength (VideoMME 89.2, MMMU-Pro 81.6); text-out only; provisional until independently re-measured post-weekly updates.
- **Coding: 70/100.** Coding pillar 9.33/10 (community A/B) but below turbo (9.58) on edge-case review; TB2.1 71.0 family proxy; SWE-Atlas 35.2 caps it.
- **Cost efficiency: 90/100.** $0.88/$4.41 list with −38.6% tokens vs prior head (Coding −46%) — materially cheaper per task at equal quality.
- **Overall Score: 77/100.** (73+72+85+85+70)/5 = 77.0. Best fit: high-volume agentic coding and tool-heavy workflows on Volcengine Ark where weekly auto-upgrades are acceptable; pin a dated snapshot (e.g. 2.1 Pro 260915) if you need reproducibility.

---

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-13 UTC
- Method: public internet research; web search returned HTTP 402 (quota), so the fallback ladder was used — one simpler retry (402 again), then direct `webfetch` of DuckDuckGo HTML results, the official ByteDance Seed Seed2.1 evaluation table and release blog, the Volcengine developer-community A/B benchmark article (17-task evolving-vs-turbo comparison), and the HopBase catalog export (price/limits, 2026-09-25). No local repository files were used as evidence beyond the slug's own meta.json for identification. Scores are normalized 1–100 interpretations on family proxies + one community A/B — weekly weight changes make every number provisional.
- Reference URLs:
  - [ByteDance Seed: Seed2.1 evaluation results (Pro weights lineage)](https://research.doubao.com/en/seed2_1)
  - [ByteDance Seed: Seed2.1 Officially Released (2026-06-23)](https://research.doubao.com/en/blog/seed2-1-officially-released-advancing-ai-productivity)
  - [Volcengine developer community: Doubao-Seed-Evolving 实测对比 (evolving vs 2.1-turbo, 34 calls, 2026-08)](https://developer.volcengine.com/articles/7691278512562077738)
  - [HopBase catalog: doubao-seed-evolving (price, 262K/128K export)](https://hop-base.com/en/docs/models/doubao-seed-evolving)
  - [火山方舟 Model Plaza: doubao-seed-evolving](https://ark.volcengine.com/region:cn-beijing/model/detail?name=doubao-seed-evolving)
- Future sources: add a new file next to this one, e.g. `Inkling_2_Small_2.md`, using the same headings.
