# Ling 3.1 Flash — findings by DeepSeek 4.1 Flash

- Source: InclusionAI / Ant Group — Ling-3.1-flash (`opencode/ling-3.1-flash`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-03); re-verified 2026-10-18; **enriched 2026-11-10 — second pass, user-approved**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Enrichment pass — 2026-11-10** (second pass, user-approved). New evidence: the **model card is now public on Hugging Face** (`inclusionAI/Ling-3.1-flash` — formerly HTTP 401) and trackers now list the model as **Open Weight**; the earlier "proprietary / no public checkpoint" line is superseded. Current hosted pricing (OpenRouter): **$0.075 in / $0.225 out / $0.015 cached per 1M** plus an `:free` variant; the first-party two-week $0 promo ended 2026-10-13. Updated rows from the now-public card: **Terminal-Bench 4.0 46.0%** (also recorded: 40.4% earlier Ant table, 33.3% AA-derived), **SWE-Atlas Codebase QnA 64.5%** (was 55.9%), τ³-bench 47.8%, WideResearch 83.3%, HLE 37.4% (vendor; AA 39.4% stands), HealthBench Pro 65.3%.
> **Adjusted dimension:** Cost efficiency **100 → 97** (standing lanes: $0.075/$0.225 paid + `:free` variant + self-hostable open weights — near-max value, no longer literally $0). All other dimensions held; **Overall unchanged at 70**.
> Sources this pass: https://huggingface.co/inclusionAI/Ling-3.1-flash · https://benchlm.ai/models/ling-3-1-flash · https://openrouter.ai/inclusionai/ling-3.1-flash

> **Re-verified 2026-10-18.** BenchLM (`ling-3-1-flash`, 27 rows) computes an overall **68.08/100 (#24 of 972)** and confirms the deep pass: Terminal-Bench 2.1 81.2%, MCP Atlas 83%, CyberGym 87.9%, BrowseComp 91.7%, skillsBench 68.7%, SWE-bench Pro 68.7%, SWE Multilingual 88.5%, DeepSWE 59.7%, AA-LCR 83.0%, AA-HLE 39.4%, AA-SciCode 54.1%, GDPval-AA 1673 / 55.9%, AA Intelligence Index 41.1%. **No score change** at that time.

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources). Re-checked beyond Ant's launch table against Artificial Analysis (Intelligence Index 41, #5/175), BenchLM (60.62/100, #50/891), BenchmarkList (13 rows), AgentBreaking (68/100, #24/177), Benchable (reliability 93%) and LLM-Stats (LLM Stats Score 51.0, #15). Independent numbers land below Ant's launch table, so the quality dims were trimmed from the launch-only pass. Conflicts surfaced: (1) Terminal-Bench 4.0 40.4% (Ant) vs 33.3% (AA-derived); (2) context 1M designed vs 262,144 served; (3) three composite scales disagree; (4) pricing free-promo vs eventual paid; (5) HealthBench Professional measured inside Ant's AQ health app, not the API model.

## Model card

- **Name:** Ling 3.1 Flash (Ling-3.1-flash)
- **Short description:** InclusionAI's (Ant Group) hybrid-reasoning Flash model announced 2026-09-30 — ~560B total / ~25B active MoE aimed at general agents, search, office work and software development, several times larger than Ling 3.0 Flash (124B/5.1B) despite the name. **Weights are now public on Hugging Face.**
- **Provider / access:** `opencode/ling-3.1-flash`; upstream `inclusionai/ling-3.1-flash`; **open weights on Hugging Face (`inclusionAI/Ling-3.1-flash`)**; paid hosted routes plus an OpenRouter `:free` variant; the two-week first-party $0 promo ended 2026-10-13. Reasoning, tool use and implicit caching.
- **Release / knowledge:** 2026-09-30 launch coverage; trackers date it Sep 29–Oct 2, 2026. Knowledge cutoff not published.
- **IDs:** `opencode/ling-3.1-flash`; upstream `inclusionai/ling-3.1-flash`; free variant `inclusionai/ling-3.1-flash:free`.
- **Context window:** 1,000,000 tokens designed (AA/OpenRouter listing); served/hosted at 262,144 (BenchLM now catalogs 262K); max output 32,768 on the Vercel/Novita route and 262,144 on OpenRouter.
- **Modalities:** Text in / text out only — AA: "does not support image input… not multimodal". Hybrid reasoning (thinking) + tool calls.
- **Pricing (as of 2026-11-10):** **$0.075 in / $0.225 out / $0.015 cached per 1M** (OpenRouter current paid rate); an OpenRouter `:free` variant exists (limited); the first-party promo ($0) ended 2026-10-13; open weights allow self-hosting.
- **Architecture:** Mixture-of-Experts, ~560B total / ~25B active per token; **weights public (HF card live — licence as stated on the card)**; expert layout/attention design undisclosed.

### Raw benchmarks found

> Figures tagged (Ant) are Ant Group's launch table; (card) = the now-public Hugging Face model card; (AA) marks independently run Artificial Analysis benchmarks.

Agent / tool use:

- Terminal-Bench 4.0: **46.0%** (HF card) / **40.4%** (earlier Ant table) / **33.3%** (AA-derived) — harness/version spread
- Terminal-Bench 2.1: **81.2%** (card/BenchLM); MCP Atlas **83%**; skillsBench **68.7%**; τ³-bench **47.8%**; WideResearch **83.3%**; BrowseComp **91.7%**
- GDPval-AA v2.1: **1673 Elo**; normalized **55.9%** (AA); AA-Briefcase **1,400 Elo**
- MultiChallenge: **69.78%** (Ant); DRACO: **85.5%** (Ant); AutomationBench: **52.5%** (Ant); Finance Agent v2: **57.9%** (Ant)

Reasoning / knowledge:

- HLE: **39.4%** (AA) / **37.4%** (card); AA Intelligence Index: **41.1** (#5/175)
- AA-Omniscience: Index **2.2**, accuracy 29.1%, hallucination rate 37.9% (AA); CritPt: **18.0%** (AA)
- HealthBench Professional: **65.3%** (card; measured inside Ant's AQ health app); no independent GPQA Diamond score found

Coding:

- SWE-Atlas Codebase QnA: **64.5%** (card; was 55.9%); SWE Multilingual **88.5%**; SWE-bench Pro **68.7%**; DeepSWE **59.7%**
- SciCode: **54.1%** (AA); CyberGym: **87.9%** (card); AA Coding Index: **43.7**
- No independent SWE-bench Verified found

Long context:

- AA-LCR v1.1: **83.0%** (AA; rank 18/408, 96th pct); no RULER/MRCR retrieval curve published; context 1M designed / 262K served

Multimodal:

- Text-only; AA explicitly reports no image input and "not multimodal"

### Normalized scores (1–100)

- **Tool use: 84/100.** GDPval-AA 1673 Elo (95th pct) and MultiChallenge 69.78% (93rd pct) are strong, with TB2.1 81.2%, MCP Atlas 83% and BrowseComp 91.7%; capped by the TB4.0 spread (33–46%) and AutomationBench 52.5%.
- **Reasoning: 82/100.** HLE 39.4% sits just under the 40% frontier line and AA Intelligence Index 41.1 is 90th pct, but AA-Omniscience index 2.2 with a 37.9% hallucination rate and CritPt 18.0% cap it below the frontier band.
- **Context window: 90/100.** 1M designed per AA (≥1M tier 95–100) but served at 262K on hosted routes and no retrieval curve published, so scored at the low end of the band.
- **Multimodal: 15/100.** Text in / text out only — AA confirms no image input (template floor for text-only models).
- **Coding: 80/100.** SciCode 54.1% (89th pct), SWE-Atlas Codebase QnA 64.5%, SWE Multilingual 88.5%, CyberGym 87.9% and AA Coding Index 43.7 are solid; no independent SWE-bench Verified/DeepSWE keeps it clear of the 90+ frontier-coder band.
- **Cost efficiency: 97/100.** $0.075/$0.225 per 1M with $0.015 cached (OpenRouter) plus a `:free` variant and self-hostable open weights — near-max value; no longer literally $0 now that the first-party promo (ended 2026-10-13) is over.
- **Overall Score: 70/100.** (84 + 82 + 90 + 15 + 80) / 5 = 70.2 → 70. Best-fit: very cheap near-frontier agentic/coding work with a 262K served window (1M designed) and a self-host lane now that the weights are public.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-10
- Method: enrichment second pass (user-approved) over independent public internet research (now-public Hugging Face model card `inclusionAI/Ling-3.1-flash`, BenchLM re-read 2026-11-10, OpenRouter pricing, plus the earlier Artificial Analysis / BenchmarkList / AgentBreaking / Benchable / LLM-Stats evidence set). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — InclusionAI Ling-3.1-flash (now public)](https://huggingface.co/inclusionAI/Ling-3.1-flash)
  - [BenchLM — Ling 3.1 Flash (Open Weight; rows)](https://benchlm.ai/models/ling-3-1-flash)
  - [OpenRouter — inclusionai/ling-3.1-flash (pricing)](https://openrouter.ai/inclusionai/ling-3.1-flash)
  - [Artificial Analysis — Ling 3.1 Flash](https://artificialanalysis.ai/models/ling-3-1-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
