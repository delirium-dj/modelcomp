# Muse Wonder 1.0 — findings by Mercury 3

- Source: Meta/Muse Wonder 1.0
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0 (API SKU `muse-wonder-1.0`; also cited as `meta/muse-wonder`)
- **Short description:** Meta's API-accessible Muse Wonder flagship (released 2026-10-12): a frontier multimodal reasoning model for personal/professional agents, long-horizon coding, and computer use, with Active Memory/Active Focus mechanisms. This is the API SKU — the subscription-only Muse Wonder Full is the separate `muse-wonder-full` folder.
- **Provider / access:** Meta Model API (`muse-wonder-1.0`) + 9 providers tracked by models.dev (Cloudflare AI Gateway, Vercel AI Gateway, OpenCode, CommandCode, Eden AI, Requesty, LLM Gateway, DevPass, Meta); 2 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-10-12; knowledge cutoff not published.
- **IDs:** `meta/muse-wonder-1.0` (canonical; `muse-wonder-1.0` on Meta — OpenCode).
- **Context window:** 1,048,576 tokens (1M) total; max output 131,072 (943,718–1,048,576 on some gateways).
- **Modalities:** text + image + speech + video input, text output; reasoning (extended thinking, max effort); tool calls; structured outputs (most gateways).
- **Pricing (as of 2026-11-03):** $4.00 input / $20.00 output per 1M tokens, 95% cache discount (AA).
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1: **1770 Elo** (AA leaderboard; normalized 63.5%); AA-Briefcase Elo: **1659**
- JobBench: **70.5%**; OSWorld 2.1: **72.6%**; Finance Agent v2: **56.6%**; AA AutomationBench: **39.1%**; AA Terminal-Bench 4.0: **52.0%** (Meta model card/AA)
- Harvey LAB-AA v1.1: 10.0% (all-pass variant); MazeBench ASCII: 0%; GDP.pdf: 30.6%

Reasoning / knowledge:

- HLE: **50.1%** (AA); Artificial Analysis Intelligence Index: **43**, #25 of 60 (AA); CritPt: **28.3%**; AA-LCR: **80.7%**; MLCR-AA: 22.2%
- HealthBench Professional: **60.5%**; AA-Omniscience: accuracy 38.0%, hallucination rate **20.9%** (excellent)
- No GPQA/ARC-AGI figure verified in sources reviewed

Coding:

- DeepSWE: **78.8%**; sweMarathon: **53.1%**; ProgramBench: **50.0%** (Meta model card); AA-SciCode: **60.3%**; FrontierCode 2.0: **24.3%**; Bug Hunt: 31.7 fixes

Long context:

- 1M window; AA-LCR 80.7%; MLCR-AA 22.2%.

Multimodal:

- text/image/speech/video in; Design Arena 1366 Elo; no verified video/audio benchmark rows found; text-only output.

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval 1770, JobBench 70.5%, OSWorld 2.1 72.6%, TB4.0-AA 52% — strong agentic; capped by Harvey LAB all-pass 10% and MazeBench 0%.
- **Reasoning: 89/100.** II 43 (#25/60), HLE 50.1%, CritPt 28.3%, LCR 80.7%, hallucination rate 20.9% — good balance; no GPQA/ARC published.
- **Context window: 91/100.** 1M with strong LCR 80.7%; no ≥98%-retrieval figure at depth.
- **Multimodal: 91/100.** Full omni input (text/image/speech/video); text-only output caps it.
- **Coding: 88/100.** DeepSWE 78.8% and sweMarathon 53.1% are strong; capped by ProgramBench 50% and FrontierCode 2.0 24.3%.
- **Cost efficiency: 76/100.** $4/$20 with 95% cache discount — mid-premium; very fast (195.9 t/s).
- **Overall Score: 89/100.** Mean of (88+89+91+91+88)/5 = 89.4 → 89. A strong API-accessible Meta flagship just below the Full tier; the best Muse Wonder value for API users.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Meta Muse Wonder model card via BenchLM, Artificial Analysis model page/leaderboards, models.dev); scores are normalized 1–100 interpretations, not official vendor scores. Identity note: API SKU vs the subscription-only Full variant (separate folder); sparse GPQA/ARC coverage flagged.
- Reference URLs:
  - [Muse Wonder model card (Meta, 2026-10-12)](https://research.meta.ai/static/muse-wonder-model-card)
  - [Muse Wonder — Artificial Analysis model page (II 43, $4/$20, 1M, omni, 195.9 t/s)](https://artificialanalysis.ai/models/muse-wonder)
  - [Muse Wonder — BenchLM benchmark aggregation](https://benchlm.ai/models/muse-wonder)
  - [Muse Wonder 1.0 — models.dev registry (9 providers, $4/$20)](https://models.dev/models/meta/muse-wonder-1.0)
