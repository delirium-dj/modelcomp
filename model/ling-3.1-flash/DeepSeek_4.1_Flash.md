# Ling 3.1 Flash — findings by DeepSeek 4.1 Flash

- Source: InclusionAI / Ant Group — Ling-3.1-flash (`opencode/ling-3.1-flash`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-03)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources). Re-checked beyond Ant's launch table against Artificial Analysis (Intelligence Index 41, #5/175; https://artificialanalysis.ai/models/ling-3-1-flash), BenchLM (60.62/100, #50/891; https://benchlm.ai/models/ling-3-1-flash), BenchmarkList (13 rows; https://benchmarklist.com/models/inclusionai-ling-3.1-flash/), AgentBreaking (68/100, #24/177; https://agentbreaking.com/models/inclusionai--ling-3.1-flash/), Benchable (reliability 93%; https://benchable.ai/models/inclusionai/ling-3.1-flash-20261002) and LLM-Stats (LLM Stats Score 51.0, #15; https://llm-stats.com/models/ling-3.1-flash). The official Hugging Face card is still not public (HTTP 401 — weights/API-only at launch). Independent numbers land below Ant's launch table, so the quality dims are trimmed from the launch-only pass. Conflicts surfaced: (1) Terminal-Bench 4.0 **40.4%** (Ant, via BenchmarkList) vs **33.3%** (AA-derived, via AgentBreaking); (2) context **1M** (AA, LLM-Stats) vs **262,144** served (OpenRouter, Benchable, AgentBreaking); (3) three composite scales disagree — BenchLM 60.62, AgentBreaking 68, LLM-Stats 51.0; (4) pricing **$0** promo (OpenRouter) vs **$0.30/$0.90** eventual first-party (AA); (5) HealthBench Professional 65.3% was measured inside Ant's AQ health app, not on the API model.

## Model card

- **Name:** Ling 3.1 Flash (Ling-3.1-flash)
- **Short description:** InclusionAI's (Ant Group) hybrid-reasoning Flash model announced 2026-09-30 — ~560B total / ~25B active MoE aimed at general agents, search, office work and software development, several times larger than Ling 3.0 Flash (124B/5.1B) despite the name.
- **Provider / access:** `opencode/ling-3.1-flash`; upstream `inclusionai/ling-3.1-flash`. Free during the two-week promo (Vercel AI Gateway via Novita, OpenRouter) through 2026-10-13, then paid. Reasoning, tool use and implicit caching. Promo route is text-only agentic coding.
- **Release / knowledge:** 2026-09-30 launch coverage; trackers date it Sep 29 (buildfastwithai) / Sep 30 (Ant, BenchmarkList, LLM-Stats) to Oct 1–2, 2026 (AA, apxml, Benchable). Knowledge cutoff not published.
- **IDs:** `opencode/ling-3.1-flash`; upstream `inclusionai/ling-3.1-flash`; free promo route `inclusionai/ling-3.1-flash-free`.
- **Context window:** 1,000,000 tokens designed (https://artificialanalysis.ai/models/ling-3-1-flash); served/hosted at 262,144 (https://openrouter.ai/inclusionai/ling-3.1-flash), max output 32,768 on the Vercel/Novita route and 262,144 on OpenRouter.
- **Modalities:** Text in / text out only — AA: "does not support image input… not multimodal" (https://artificialanalysis.ai/models/ling-3-1-flash). Hybrid reasoning (thinking) + tool calls.
- **Pricing (as of 2026-10-11):** free in / out during the promo ending 2026-10-13; AA lists the eventual first-party rate at $0.30 in / $0.90 out per 1M (https://artificialanalysis.ai/models/ling-3-1-flash). The promo route does not opt prompts out of training — do not route confidential data through it.
- **Architecture:** Mixture-of-Experts, ~560B total / ~25B active per token. Proprietary (API-only; no public checkpoint/weights yet — Ant says it plans to open-source once paid service begins). Expert layout/attention design undisclosed.

### Raw benchmarks found

> Figures tagged (Ant) are Ant Group's launch table (2026-09-30); (AA) marks independently run Artificial Analysis benchmarks. Ant's numbers carry no disclosed harness/reasoning settings, so treat them as vendor claims until reproduced.

Agent / tool use:

- Terminal-Bench 4.0: **40.4%** (Ant; rank 10/29, 68th pct — https://benchmarklist.com/models/inclusionai-ling-3.1-flash/) — **conflict** 33.3% (AA-derived; https://agentbreaking.com/models/inclusionai--ling-3.1-flash/)
- GDPval-AA v2.1: **1673 Elo** (rank 19/352, 95th pct — https://benchmarklist.com/models/inclusionai-ling-3.1-flash/); GDPval normalized 55.9% (AA — https://agentbreaking.com/models/inclusionai--ling-3.1-flash/)
- MultiChallenge: **69.78%** (Ant; rank 4/41, 93rd pct — https://benchmarklist.com/models/inclusionai-ling-3.1-flash/)
- SkillsBench: **68.7%** (Ant; rank 5/22 — https://benchmarklist.com/models/inclusionai-ling-3.1-flash/)
- AutomationBench: **52.5%** (Ant — https://benchlm.ai/models/ling-3-1-flash)
- DRACO: **85.5%** (Ant; rank 7/24 — https://benchmarklist.com/models/inclusionai-ling-3.1-flash/)
- AA-Briefcase: **1,400 Elo** (AA; 81st pct — https://benchmarklist.com/models/inclusionai-ling-3.1-flash/)
- Finance Agent v2: **57.9%** (Ant; rank 12/50 — https://benchmarklist.com/models/inclusionai-ling-3.1-flash/)

Reasoning / knowledge:

- HLE: **39.4%** (AA; rank 42/478, 91st pct — https://benchmarklist.com/models/inclusionai-ling-3.1-flash/)
- AA Intelligence Index: **41.1** (AA; #5/175 — https://artificialanalysis.ai/models/ling-3-1-flash)
- AA-Omniscience: Index **2.2**, accuracy 29.1%, hallucination rate 37.9% (AA — https://benchlm.ai/models/ling-3-1-flash)
- CritPt: **18.0%** (AA — https://benchmarklist.com/models/inclusionai-ling-3.1-flash/)
- No independent GPQA Diamond score found.

Coding:

- Terminal-Bench 4.0: **40.4%** (Ant) / **33.3%** (AA-derived) — see conflict above
- SciCode: **54.1%** (AA; rank 33/296, 89th pct — https://benchmarklist.com/models/inclusionai-ling-3.1-flash/)
- SWE-Atlas Codebase QnA: **55.9%** (Ant; rank 13/37, 67th pct — https://benchmarklist.com/models/inclusionai-ling-3.1-flash/)
- SkillsBench: **68.7%** (Ant — https://benchmarklist.com/models/inclusionai-ling-3.1-flash/)
- CyberGym: **87.9%** (Ant; rank 7/43, 86th pct — https://benchmarklist.com/models/inclusionai-ling-3.1-flash/)
- AA Coding Index: **43.7** (https://agentbreaking.com/models/inclusionai--ling-3.1-flash/)
- No independent SWE-bench Verified / DeepSWE / SWE-Pro found.

Long context:

- AA-LCR v1.1: **83.0%** (AA; rank 18/408, 96th pct — https://benchmarklist.com/models/inclusionai-ling-3.1-flash/)
- No RULER/MRCR retrieval curve published; context catalogued at 1M designed / 262K served.

Multimodal:

- Text-only; AA explicitly reports no image input and "not multimodal" (https://artificialanalysis.ai/models/ling-3-1-flash).

### Normalized scores (1–100)

- **Tool use: 84/100.** GDPval-AA 1673 Elo (95th pct) and MultiChallenge 69.78% (93rd pct) are strong, but Terminal-Bench 4.0 is mid at 40.4% (68th pct) with an independent 33.3% reading and AutomationBench 52.5% — trimmed from the launch-only 86 (https://benchmarklist.com/models/inclusionai-ling-3.1-flash/).
- **Reasoning: 82/100.** HLE 39.4% sits just under the 40% frontier line and AA Intelligence Index 41.1 is 90th pct, but AA-Omniscience index 2.2 with a 37.9% hallucination rate and CritPt 18.0% cap it below the frontier band (https://artificialanalysis.ai/models/ling-3-1-flash).
- **Context window: 90/100.** 1M designed per AA (≥1M tier 95–100) but served at 262K on hosted routes and no retrieval curve published, so scored at the low end of the band (https://openrouter.ai/inclusionai/ling-3.1-flash).
- **Multimodal: 15/100.** Text in / text out only — AA confirms no image input (https://artificialanalysis.ai/models/ling-3-1-flash).
- **Coding: 80/100.** SciCode 54.1% (89th pct), SWE-Atlas Codebase QnA 55.9%, CyberGym 87.9% and AA Coding Index 43.7 are solid, but no independent SWE-bench Verified/DeepSWE and TB4.0 40.4% keep it clear of the 90+ frontier-coder band (https://benchmarklist.com/models/inclusionai-ling-3.1-flash/).
- **Cost efficiency: 100/100.** $0 in / $0 out through the promo ending 2026-10-13 (training-data caveat); the eventual paid tier ~$0.30/$0.90 would score ~90 (https://openrouter.ai/inclusionai/ling-3.1-flash).
- **Overall Score: 70/100.** (84 + 82 + 90 + 15 + 80) / 5 = 70.2 → **70**. Best-fit: free near-frontier agentic/coding flash model while the promo lasts; wait for paid-tier data terms and public weights before sensitive or long-term use.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: independent public internet research (Artificial Analysis, BenchLM, BenchmarkList, AgentBreaking, Benchable, LLM-Stats; official HF model card not public — HTTP 401). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
