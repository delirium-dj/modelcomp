# Muse Wonder — findings by DeepSeek 4.1 Flash

- Source: Meta/Muse Wonder (`meta/muse-wonder-1.0`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder
- **Short description:** Meta Superintelligence Labs' frontier agentic model (released 2026-10-12) for long-horizon coding, personal/professional agents and computer use, with a 1M-token context and text/image/video/audio/PDF input. It is the API-available half of the launch pair; the stronger Muse Wonder Full ships only inside Muse Code subscriptions.
- **Provider / access:** Meta Model API (`https://api.meta.ai/v1`, OpenAI-compatible chat API) as `meta/muse-wonder-1.0`; also on Muse Code (pay-as-you-go and every plan; Standard mode only) and via third-party routes (OpenRouter, Vercel AI Gateway, Cursor docs). In preview as of research date.
- **Release / knowledge:** Released 2026-10-12; knowledge cutoff not disclosed.
- **IDs:** `meta/muse-wonder-1.0` (Meta Model API). Sibling `muse-wonder-full-1.0` is subscription-only (no published per-token API rate). No Free lane: no `-free` ID and Contributor mode is not offered for Muse Wonder on the API.
- **Context window:** 1,048,576 (1M) tokens total; 131,072 max output per response (LiteLLM listing). One catalogue route declares a 944K route output cap. No long-context price multiplier.
- **Modalities:** text, image, video, audio, PDF in; text out. Reasoning (effort levels minimal → max), parallel tool calls, structured output/JSON mode, web-search grounding ($2.50 per 1K searches).
- **Pricing (as of 2026-11-01):** $4.00 input / $0.20 cached input / $20.00 output per 1M tokens; paid only.
- **Architecture:** proprietary; parameter count and MoE layout not disclosed (Meta says a larger base model than Muse Spark, plus additional RL).

### Raw benchmarks found

Agent / tool use:

- JobBench (professional tool use): **70.5%** mean reward (Meta model card, max effort)
- OSWorld V2.1 (computer use): **72.6%** partial / **34.3%** binary completion (Meta model card, max effort)
- AutomationBench (E2E business workflows): **39.1%** strict pass@1 (Meta model card; Artificial Analysis run)
- Harvey LAB-AA (legal agent work): **10.0%** all-pass (Meta model card)
- Finance Agent v2 (Vals): **56.6%** accuracy (Meta model card)
- GDP.pdf (professional work): **30.8** score (Meta model card)
- Terminal-Bench 4.0-AA (agentic terminal coding): **52.0%** (Meta model card)
- Personal Superintelligence Index (Meta internal composite, personal/knowledge work): **54.3** (Meta model card)
- MemoryBench (internal; recall across 64K–100K multi-turn conversations): **85.6%** (Meta model card)
- Tau3-Banking / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- HLE: **50.1%** (Wikipedia HLE results table, Muse Wonder row)
- HealthBench Professional: **60.5%** (Meta model card)
- Artificial Analysis Intelligence Index (max): **52** at launch (Meta model card cites Artificial Analysis); AA's own model page later shows **43** (#23/52) for Muse Wonder (max)
- BullshitBench v2 (nonsense-prompt pushback): **57%** (AI Release Tracker)
- GPQA Diamond / LCR / CritPt: no verified public score found
- Independent indices (own normalizations, not raw benchmarks): BenchLM independent public score **71.42** (knowledge lane 74.4, #12/187); ModelCap Index **85.6** (#4); LMArena text Arena score **1508.7** (#3, 95% CI 1500.6–1516.8, 6001 votes)

Coding:

- DeepSWE 1.1: **78.8%** pass@1 (Meta model card)
- SWE-Marathon v1.1: **53.1%** pass@1 (Meta model card)
- ProgramBench: **50.0%** (share of rollouts passing ≥95% of tests; BenchLM / Meta model card)
- CursorBench 4.0: **50.4%** max / 48.2% extra-high / 46.1% high / 45.2% medium / 41.7% low / 34.2% minimal (CursorBench public leaderboard)
- CursorBench at default effort: **46.1%** ("highest of any Muse model" per Cursor announcement)
- SWE-bench Verified: **96.7%** — independent *estimate* (±4.6 pp, medium confidence; benchgap, not a measured run)
- Bug Hunt Bench: **31.7 fixes**; FrontierCode 2.0: **24.3%** (BenchLM)
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found
- LMArena coding Arena: **1545**

Long context:

- No MRCR/RULER figure published for Muse Wonder itself; 1M-token window is declared (model card, docs) with MemoryBench 85.6 at 64K–100K as the only published long-context-scale signal. Cursor serves 300K by default and 1M in Max Mode at the same per-token rates.

### Normalized scores (1–100)

- **Tool use: 89/100.** Frontier-class professional tool use: JobBench 70.5, OSWorld V2.1 72.6 partial, AutomationBench 39.1, Terminal-Bench 4.0-AA 52.0, plus a 85.6 MemoryBench for agent memory. Capped below 90s by the low absolute Harvey LAB-AA 10.0 and the absence of TB2.1/Tau3/GDPval numbers.
- **Reasoning: 88/100.** HLE 50.1 clears the 40%+ frontier anchor; AA Intelligence Index 52 at launch sits mid-frontier (AA's later re-run reads 43). Capped by no published GPQA Diamond and the sub-60 index readings.
- **Context window: 96/100.** 1M tokens declared → the ≥1M tier (95–100). Not 100 because no ≥98% retrieval result (MRCR/RULER) at 512K+ was published; max output 131K is fine for the tier.
- **Multimodal: 90/100.** Text, image, video, audio and PDF input with text output lands in the 90–100 band; kept at the floor because Meta itself flags audio use cases as needing confirmation on the release surface and output is text-only.
- **Coding: 91/100.** DeepSWE 1.1 78.8 is above the 74%+ frontier reference; SWE-bench Verified ~96.7 (independent estimate), SWE-Marathon 53.1, ProgramBench 50.0. Capped by mid-board CursorBench max (50.4) and FrontierCode 2.0 24.3.
- **Cost efficiency: 55/100.** $4.00/$20.00 per 1M — premium pricing between the $3/$15 ≈ 60 and $10/$50 ≈ 30 anchors; cached input at $0.20 and no long-context multiplier are the bright spots. Paid only, no Free/Contributor lane.
- **Overall Score: 91/100.** Mean of the five quality dims (89+88+96+90+91)/5 = 90.8 → 91. Best fit for long-running agentic coding and computer-use workloads that can pay frontier token rates; the Full sibling (subscription-only) remains the stronger variant on Meta's own benchmarks.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-01
- Method: public internet research (vendor pages, model card, independent leaderboards); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Wonder — Meta (model page, pricing, access)](https://dev.meta.ai/models/muse-wonder)
  - [Muse Wonder Model Card — Meta (research.meta.ai)](https://research.meta.ai/static/muse-wonder-model-card)
  - [Muse Wonder: A Frontier Model For Personal & Professional AI Agents — Meta research blog](https://research.meta.ai/blog/muse-wonder)
  - [Meta Model API — models & availability docs](https://dev.meta.ai/docs/models)
  - [Meta's new Muse Wonder and Muse Wonder Full models — VentureBeat](https://venturebeat.com/technology/metas-new-muse-wonder-and-muse-wonder-full-models-achieve-frontier-performance-but-only-the-weaker-one-is-available-via-api)
  - [Muse Wonder (max) — Artificial Analysis](https://artificialanalysis.ai/models/muse-wonder)
  - [Muse Wonder — Cursor docs (effort levels, context, pricing)](https://cursor.com/docs/models/muse-wonder)
  - [CursorBench leaderboard — Cursor](https://cursor.com/cursorbench)
  - [Muse Spark 1.3 vs Muse Wonder — BenchLM](https://benchlm.ai/compare/muse-spark-1-3-vs-muse-wonder)
  - [Muse Wonder — ModelCap (index, providers, route caps)](https://modelcap.ai/model/meta-muse-wonder)
  - [Muse Wonder 1.0 API pricing — LiteLLM](https://models.litellm.ai/models/muse-wonder-1.0)
  - [Muse Wonder — LLM Reference (LMArena scores, routes)](https://www.llmreference.com/model/muse-wonder)
  - [SWE-bench Verified leaderboard (estimates) — benchgap](https://benchgap.net/b/swe-bench-verified/current)
  - [Humanity's Last Exam results — Wikipedia](https://en.wikipedia.org/wiki/Humanity%27s_Last_Exam)
- Future sources: add a new file next to this one, using the same headings.
