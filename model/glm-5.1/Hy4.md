- Source: Z.ai/GLM-5.1
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.1
- **Short description:** Z.ai's 2026-04-08 open model that first pushed open-weight coding above Claude Opus 4.6 on SWE-Bench Pro and ran **8-hour continuous tasks** (building a full Linux desktop). A distinct model; `glm-5`, `glm-5.2` and `glm-5.2-coding` are separate. Per the project identity roster the `-coding` suffix was folded into GLM-5.1 (folder renamed) and must never be re-scaffolded.
- **Provider / access:** Open-sourced on release day; Huawei Cloud (free trial, Ascend Layer-level MoE balancing, +30% throughput), Moore Threads MTT S5000, QingCloud, Alibaba Bailian, Kingsoft, Volcano Engine Coding Plan; GLM Coding Plan all users; Fast-mode API from 2026-05-22.
- **Release / knowledge:** 2026-04-08; knowledge cutoff: no verified public score found.
- **IDs:** `glm-5.1`. No free Zen ID verified.
- **Context window:** **~200,000 tokens** per a secondary GLM-series summary (GLM-5.2 later raised it to 1M, 5x — lineage, not this model); no vendor-verified figure for 5.1 in the retrieved pages — reported with provenance.
- **Modalities:** text and code in, text/code out; long-horizon task execution, coding, self-evaluation/optimisation (vector DB and ML workload self-evolution). No verified image/audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** a **+10% price rise** at launch, with Coding-scene pricing approaching Claude Sonnet; a secondary note quotes **$3/month** for the Coding Plan — labelled secondary, no full rate card.
- **Architecture:** MoE, **744B total / ~40B active** (secondary GLM-series summary), with the "Slime" asynchronous RL framework; +30% inference throughput via system-level optimisation on Ascend.

### Raw benchmarks found

Agent / tool use:

- CyberGym: **68.7** (vs GLM-5's **48.3**, +20.4) — secondary Tencent Cloud analysis
- BrowseComp (with context management): **79.3** (secondary)
- 8-hour continuous autonomous work, building a complete Linux desktop system in hours (vendor demonstration, qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- SWE-Bench Pro: set a new global best, first domestic model to surpass Claude Opus 4.6 (directional rank, no exact score in the retrieved excerpt)
- Terminal-Bench 2.0 and NL2Repo: **#3 globally / #1 domestic / #1 open** across the three code benchmarks (directional)
- Encoding performance reached **94.6% of Claude Opus 4.6** (vendor/secondary claim, relative)
- 19%–42% gains across coding/agent benchmarks (secondary, relative)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- ~200K (secondary) with 8-hour task state via context management; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 88/100.** 8-hour autonomous sessions, CyberGym 68.7, BrowseComp 79.3 and self-optimisation loops; capped by those figures being secondary and no scored agent harness.
- **Reasoning: 84/100.** Strong agent/long-horizon reasoning with Slime RL; capped by no published numeric reasoning benchmark for this exact ID.
- **Context window: 83/100.** ~200K (secondary) with 8-hour state management; capped by no vendor-verified window and no retrieval benchmark.
- **Multimodal: 68/100.** Scored at the text-only floor: no vision was documented for this model.
- **Coding: 90/100.** #1 open / #3 global across SWE-Bench Pro, Terminal-Bench 2.0 and NL2Repo, with a first-domestic win over Opus 4.6; capped by ranks being directional without exact scores.
- **Cost efficiency: 89/100.** Free open weights, 40B active params, $3/month Coding Plan (secondary) and broad domestic cloud support; capped by a +10% launch price rise. Excluded from Overall.
- **Overall Score: 83/100.** Half-up mean of 88, 84, 83, 68, 90 = 82.6 → 83. Best fit: self-hosted long-horizon coding agents on domestic hardware; superseded by GLM-5.2/5.3.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike 智谱GLM-5.1 article retrieved via public web search excerpt (release, open source, 10% price rise, 8-hour tasks, SWE-Bench Pro global-best claim, #3/#1/#1 code ranks, 94.6% of Opus 4.6, cloud adaptations), plus a secondary Tencent Cloud analysis for CyberGym 68.7 / BrowseComp 79.3 and a GLM-series summary for the ~200K context and 744B/40B MoE — all labelled secondary. GLM-5's 48.3 CyberGym is a comparison row. Identity handling follows the project's generated roster: `glm-5.1-coding` was merged by folder rename and must never be recreated; GLM-5 / 5.2 / 5.3 are separate generations. Directional ranks and relative claims are not assigned numeric scores. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [智谱GLM-5.1 — 百度百科 (retrieved via search excerpt; release, benchmarks, pricing)](https://baike.baidu.com/item/%E6%99%BA%E8%B0%B1GLM-5.1/67544623)
  - [AI 独自写了 8 小时代码 — 腾讯云 (retrieved via search excerpt; CyberGym, BrowseComp)](https://cloud.tencent.com/developer/article/2654275)
