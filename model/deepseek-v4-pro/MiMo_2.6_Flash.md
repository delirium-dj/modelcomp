# DeepSeek V4 Pro — findings by MiMo 2.6 Flash

- Source: DeepSeek-AI — HF model card + `DeepSeek_V4.pdf` tech report (arXiv:2606.19348), `api-docs.deepseek.com` Models & Pricing, Artificial Analysis, BenchLM
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro — preview flagship of the DeepSeek-V4 series: **1.6T total / 49B active MoE**, **1M context**, MIT-licensed open weights (HF `deepseek-ai/DeepSeek-V4-Pro`, 436K monthly downloads, 26 quantizations). Sibling V4-Flash is 284B/13B.
- **Short description:** "DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence." Architectural upgrades: **hybrid Compressed Sparse Attention + Heavily Compressed Attention (CSA/HCA)** — at 1M context only **27% of single-token FLOPs and 10% of KV cache** vs V3.2; manifold-constrained hyper-Connections (mHC); Muon optimizer; 32T+ pretraining tokens; two-stage post-training (domain experts via SFT+GRPO, then on-policy distillation into one model). Three effort modes — **Non-think / Think High / Think Max** — where **DeepSeek-V4-Pro-Max** is billed as "the best open-source model available today," bridging to closed frontier on reasoning/agentic tasks.
- **Provider / access:** DeepSeek API (`api.deepseek.com`, current version **DeepSeek-V4-Pro-0813**, refresh dated 2026-08-13; thinking default; 500 concurrency), OpenRouter (`deepseek/deepseek-v4-pro` 1M ctx; `deepseek-v4-pro-0813`), 11+ providers (AA), vLLM/SGLang self-host, MIT weights.
- **Release / knowledge:** V4 series preview with tech report (arXiv 2606.19348, 2026); Flash route served from 2026-07-31, Pro API refreshed to 0813 build 2026-08-13 (AA release date for 0813 Max).
- **Context window:** **1,000,000 in / up to 384,000 out** (384K recommended minimum for Think Max).
- **Modalities:** **text in/out only** — Vision explicitly **not supported** on Pro (only the retired Flash route had it).
- **Pricing:** official **$0.66 in / $1.98 out off-peak, $1.32 / $3.96 peak** per 1M (peak = weekday 01–04 & 06–10 UTC), cache-hit input **$0.022 off-peak / $0.044 peak (97% discount)**; third-party from ~$0.435/$0.87; **MIT self-host free**. AA: $0.67 per Intelligence-Index task (4/4 cost units), 99.1 t/s, TTFT 1.64 s.

### Raw benchmarks found

> Primary: official tech report tables (Think-Max mode unless noted) + api-docs 0813
> comparison table + AA (independent). Where rows disagree (HLE, HLE-w-tools, GDPval,
> AA Index) all readings are shown with provenance.

Knowledge & reasoning (V4-Pro Max, tech report):

- **GPQA Diamond: 90.1** (AA: 92.8; Vals: 92.4) — clears the 90+ reference. **HLE: 37.7** (tech report) vs **42.7** (api-docs 0813 table) vs **AA-HLE 41.0** — straddles the 40+ reference, flagged.
- MMLU-Pro 87.5; SimpleQA-Verified 57.9; Chinese-SimpleQA 84.4; MMLU 90.1 (base).
- **Math:** HMMT Feb-2026 **95.2**, IMOAnswerBench **89.8**, Apex 38.3 / Apex Shortlist 90.2.
- **AA Intelligence Index (v4.3.2): 36**, rank **#9/117** in its open-weights class (4/4 intelligence units; median 18). BenchLM lists 53.2 for the base-model page — an earlier re-base of the index, flagged as version variance.
- ARC-AGI-1 90.0, ARC-AGI-2 61.3 (ARC Prize, 0813 verified); AA-Omniscience Index **0.8** (accuracy 49.1, **hallucination rate 94.1** — weak knowledge reliability, flagged); AA-IFBench 76.5; CritPt 18.0.

Coding (tech report + api-docs 0813):

- **SWE-bench Verified: 80.6** — tied with Gemini-3.1-Pro (80.6) and ahead of K2.6 (80.2)/Opus-4.6 (80.8 in same table); **Terminal-Bench 2.1: 87.9** (0813 table — clears the 85 reference; TB2.0: 67.9); **LiveCodeBench: 93.5**; **Codeforces: 3206** (top of the frontier-comparison table); SWE-bench Pro **55.4** (below Opus-4.6 57.3 / GPT-5.4 57.7 / K2.6 58.6); SWE Multilingual 76.2; DeepSWE 62.7; DSBench-FullStack 71.1 / Hard 67.2; NL2Repo 61.5.
- **AA Coding Index: 68.8** (just under the 70 reference); **AA-SciCode: 51.0** (under 55); Vals SWE-bench 96.4, Vals LCB 87.5 (independent harnesses).

Agentic & tool use:

- **τ²-bench: 96.2** (AA — top-tier); **BrowseComp: 83.4** (frontier-comparison table: Gemini-3.1-Pro 85.9, Opus-4.6 83.7); **MCP Atlas: 73.6** (top of its table); **HLE w/ tools: 48.2** (tech report) / 60.0 (api-docs — flagged).
- **GDPval-AA: Elo 1554** (tech report; GPT-5.4 1674, Opus-4.6 1619, Gemini-3.1-Pro 1314) — AA's own normalization shows 54.5% / 1306, flagged as version variance; AA Agentic Index 49.6; EnterpriseOps-Gym 49.6; Toolathlon 51.8, Toolathlon-Verified 74.1; CyberGym 83.3; AutomationBench 31.8; APEX-Agents 24.3; Agents' Last Exam 25.7 (12.4–27.6 on HF leaderboard export, flagged); Vals TB2.1 54.7 (harness-dependent).

Long context:

- **MRCR 1M: 83.5** (Opus-4.6 92.9, Gemini-3.1-Pro 76.3); **CorpusQA 1M: 62.0**; AA-LCR 80.3; LongBench-V2 51.5 (base).

Multimodal:

- None — text-only product (Design Arena Website 1258 is a text-to-web-gen row).

### Normalized scores (1–100)

- **Tool use: 91/100.** Exceptional breadth: τ² 96.2, BrowseComp 83.4, MCP Atlas 73.6, TB2.1 87.9, GDPval Elo 1554 (frontier band), CyberGym 83.3, Toolathlon-Verified 74.1; held below the ceiling by mid workflow rows (AutomationBench 31.8, APEX-Agents 24.3, Agents' Last Exam 25.7) and harness variance (Vals TB2.1 54.7).
- **Reasoning: 89/100.** GPQA 90.1–92.8 clears the reference, HLE straddles 40 (37.7–42.7 depending on source), math is elite (HMMT 95.2, IMO 89.8), AA Index 36 is only mid-pack (#9 among open-weights), and Omniscience (0.8 index, 94.1% hallucination rate) flags real knowledge-reliability gaps.
- **Context window: 95/100.** 1M/384K native with MRCR-1M 83.5 and LCR 80.3 — ≥1M floor; retrieval solid but short of the 98%+ band that would earn 100.
- **Multimodal: 55/100.** Text-only — no vision on the Pro line.
- **Coding: 87/100.** SWE-V 80.6, TB2.1 87.9, LCB 93.5, Codeforces 3206 are all reference-clearing or frontier-tied; SWE Pro 55.4, AA Coding Index 68.8 and SciCode 51 sit just under their references.
- **Cost efficiency: 92/100** (excluded from Overall). Off-peak $0.66/$1.98 undercuts the $1.25/$4.25 ≈ 88 anchor, peak $1.32/$3.96 sits at it, 97% cache discount, third-party from $0.435/$0.87, MIT self-host = $0, and serving is fast (99 t/s, TTFT 1.64 s).
- **Overall Score: 83/100.** (91+89+95+55+87)/5 = 83.4 → 83 — the strongest open-weights reasoning/agentic package found in this queue's mid-tier (τ² 96.2, BrowseComp 83.4, SWE-V 80.6, 1M/384K, MIT) at half flagship tariffs — capped by text-only modality, mid AA-index standing, and unreliable knowledge (Omniscience).

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — HF `deepseek-ai/DeepSeek-V4-Pro` card with full official benchmark tables (base / Max vs frontier / mode comparison), DeepSeek api-docs Models & Pricing page (0813 build, tiers, cache, feature matrix), Artificial Analysis model page (AA Index 36 #9/117, speed/cost telemetry, modality/params), BenchLM aggregate (Vals/AA/leaderboard rows, updated 2026-10-07), OpenRouter API (ctx/pricing cross-check). Scores are normalized 1–100 interpretations, not official vendor scores; conflicting rows reported with both readings; Think-Max (max effort) figures used as the capability ceiling per the report's own mode tables.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
