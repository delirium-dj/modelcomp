# GLM 5.1 Coding — findings by Big Pickle

- Source: Big Pickle (`opencode/big-pickle`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Note: requested as "GLM 5.1 Coding Free" — no `glm-5.1-free` ID exists on Zen. Only `glm-5-free` / `glm-4.7-free` are free GLM IDs. Scored on paid pricing.

## Model card

- **Name:** GLM-5.1 (GLM 5.1 Coding on OpenCode)
- **Short description:** Z.AI's (ex-Zhipu) post-training flagship for long-horizon agentic engineering — sustained optimization over hundreds of rounds/thousands of tool calls, "up to 8h autonomous". "The longer it runs, the better the result" (vendor).
- **Provider / access:** OpenCode Zen paid (`opencode/glm-5.1`) at `https://opencode.ai/zen/v1/chat/completions`; weights `zai-org/GLM-5.1` (HF) / ModelScope, MIT; api.z.ai, BigModel.cn, Ollama Cloud, NVIDIA NIM, OpenRouter, DeepInfra.
- **Release / knowledge:** API/Coding-Plan access 2026-03-26/27; open weights 2026-04-07; NIM 2026-04-15; knowledge cutoff 2025-11 (or Dec 2025 per Benchgen).
- **IDs:** paid `opencode/glm-5.1`; free doesn't exist for 5.1.
- **Context window:** 200K (202,752 arch / 204,800 modeled); max output 128K–131K.
- **Modalities:** text → text only (no vision input). Reasoning and non-reasoning variants.
- **Pricing (as of 2026-09-17):** Z.AI official **$1.40 in / $0.26 cached / $4.40 out**; Zen $1.40/$4.40; OpenRouter/DeepInfra $1.05/$3.50. Coding Plans $48.60–$432/quarter. No free API tier.
- **Architecture:** 754B total (HF/NVIDIA) vs 744B (AA/Lambda) — unflagged discrepancy; ~40B active per token, MoE (DSA/MLA + sparse attention + MTP); MIT.

### Raw benchmarks found

Agent / tool use:

- SWE-Bench Pro: **58.4** (Z.AI self-reported #1; vs GPT-5.4 57.7, Opus 4.6 57.3)
- Terminal-Bench 2.0: **63.5** Terminus-2 / **69.0** best harness (Claude Code); TB 2.1 56.9 (Vals); TB (AA) 61.8
- NL2Repo **42.7**; CyberGym **68.7**; BrowseComp **68.0 (79.3 w/ context mgmt)**; MCP-Atlas public **71.8**; Tool-Decathlon **40.7**; Tau3 **70.6**; Vending Bench 2 **$5,634.41**
- Claw-Eval **62.3** (BenchLM); ClawEval v2 **83.6%** (1020/1220, rank #13 open-weight); ClawProBench **62.93** (rank #6/57)

Reasoning / knowledge:

- HLE (no tools) **31.0** (w/ tools **52.3**); GPQA **86.2**; AIME 2026 **95.3** (independent Stratix 93.3); IMOAnswerBench 83.8 (actual IMO: no score)
- AA Intelligence Index **26** (v4.3.2, re-confirmed 2026-10-01 at #22/117); earlier releases reported 41, then 32 — cite version
- AA-LCR **68.0**; BenchGecko avg 70.4 (#49), coding 65.4 (#30), reasoning 62.1 (#45); OTIS 92.2

Coding:

- SWE-bench Verified: **77.8%** (found 2026-10-01) — GLM-5.1 technical paper arXiv:2602.15763 + HF card, via secondary review; behind DeepSeek V4 80.6% and Claude Opus 4.7 87.6%. Vals separately reports 76.4% "SWE-bench (Vals)"; BenchLM also lists SWE-Rebench 62.7%, LiveCodeBench (Vals) 81.4%, OpenHarmony 52.3
- LiveBench overall **69.7** (Coding 75.4); AA Coding Index **55.8**; Arena Code Elo **1530** (#3 global, top open-weight); Vibe Code Bench 31.46; SciCode 43.8; JudgeBench Coding 97.6

Long context:

- AA-LCR 68.0 (long-context reasoning); vendor claims 8h / 6,000+ tool-call endurance; no dedicated LHTB leaderboard score.

### Normalized scores (1–100)

- **Tool use: 80/100.** Tau3 70.6, MCP-Atlas 71.8, ClawEval v2 83.6; long-horizon breadth.
- **Reasoning: 78/100.** GPQA 86.2, HLE-tools 52.3, AIME 95.3; base HLE 31 caps.
- **Context window: 70/100.** 200K tier, 128K out.
- **Multimodal: 15/100.** Text-only.
- **Coding: 86/100.** SWE-bench Verified 77.8% added 2026-10-01, on top of SWE-Pro 58.4 (self-reported) + Arena 1530 + LLB 75.4 coding — top-tier open coding; Vibe Code Bench 31.5 and SWE-Rebench 62.7 are the soft spots.
- **Cost efficiency: 70/100.** Paid $1.40/$4.40 (no free ID). Would be 100 at a $0 promo.
- **Overall Score: 66/100.** (80 + 78 + 70 + 15 + 86) / 5 = 65.8. Top paid open long-horizon coding; weights are free (MIT) for self-hosting. Re-derived 2026-10-01 after re-verification — Coding +1 nets to an unchanged Overall.

## Re-verification — 2026-10-01 (14 days after original)

Original research date 2026-09-17. Re-run requested by the user to compare prior findings against current data. Original findings above are preserved; corrections are marked inline.

| Dimension | 2026-09-17 | 2026-10-01 | Change |
| --- | --- | --- | --- |
| Tool use | 80 | 80 | — (corroborated) |
| Reasoning | 78 | 78 | — (corroborated) |
| Context window | 70 | 70 | — (re-confirmed 200k) |
| Multimodal | 15 | 15 | — (re-confirmed text-only) |
| Coding | 85 | 86 | **+1** (SWE-bench Verified 77.8% found) |
| Cost efficiency | 70 | 70 | — (held; cheaper provider median offset by slowness + deprecation) |
| **Overall** | **66** | **66** | **—** |

**The one gap in the original report is now closed.** SWE-bench Verified was recorded as "no verified public score found"; the figure is **77.8%**, published in the GLM-5.1 technical paper (arXiv:2602.15763) and the HF model card, and surfaced via secondary review. That is a strong top-tier open-weight result — behind DeepSeek V4 (80.6%) and Claude Opus 4.7 (87.6%) — and it is the evidence behind the Coding bump to 86. Corroborating agentic numbers also newly catalogued: SWE-Rebench **62.7%**, LiveCodeBench (Vals) **81.4%**, OpenHarmony **52.3%**, AA-SciCode 43.8%.

**The model is deprecated.** AA now carries: "This model is deprecated. We only continue performance benchmarking for the default 10k input token workload. Results for other workloads are historical and no longer updated," and points to **GLM-5.2**. NVIDIA's developer forum carries a matching "GLM5.1 was deprecated" thread. This has a direct scoring consequence to note: AA's own benchmark table for this model is now partly frozen, so future Index movement on this page should be read as historical, not as regression.

**Index held, and a stale-figure trap confirmed.** AA Intelligence Index is still **26**, now **#22/117** at v4.3.2. Worth recording: cached AA search results still render **32** for this model, which is the legacy figure the original report already suspected. The live model page reads 26. The original report's instinct to distrust the higher number was correct.

**New measured performance — and it is a genuine weakness:** **44.0 output tok/s (#53/117)** with TTFT **1.71s**. AA classes it as "notably slow" against a 68.9 tok/s class median, the weakest unit of the four it grades (Intelligence 4/4, Cost 4/4, Verbosity 3/4, Speed 1/4). It is also verbose at **140M output tokens (#23/117)**. For an agentic model sold on 8-hour autonomous runs, that throughput is the practical bottleneck, and it is the main reason Cost efficiency was not raised despite cheaper pricing.

**Cost, measured and list:** AA's provider-median is **$1.28 in / $4.07 out** with an **80% cache discount**, **$1.02 per Intelligence Index task (#31/117)**, blended $0.85/M. Z.AI list pricing is unchanged at **$1.40 / $0.26 cached / $4.40 out**. Ollama Cloud is cheaper still at $1.00 in / $0.20 cached / $3.20 out. Cost efficiency therefore stays at 70: the API is genuinely cheaper than originally scored, but there is no free tier, and a deprecated and slow model is a poor long-run spend.

**What held up unchanged:** AA re-confirms **text-only** ("Is GLM-5.1 multimodal? No. It only supports text input"), so Multimodal stays at the methodology floor; **200k** context, so Context stays at 70; **MIT** license; 6 API providers. The parameter discrepancy the original report flagged is now explained rather than merely noted: AA records **744B total / 40B active**, which is the source of the 744B figure, against 754B on the HF/NVIDIA/vendor side. One caveat: `opencode/glm-5.1` does **not** appear on OpenCode Zen's published deprecation-date table (which lists GLM 5, 4.7 and 4.6), so the paid Zen ID appears to remain available — upstream deprecation has not yet propagated to Zen.

**Net assessment:** a strong report that needed almost no walking-back. The single placeholder gap is filled with a top-tier number, every other score held, and the previously unmeasured weakness (throughput) is now documented. What genuinely changes the recommendation is lifecycle: with Z.AI steering users to GLM-5.2, the honest framing shifts from "top paid open long-horizon coding" to "still-strong, MIT-licensed and cheap to self-host, but deprecated upstream and slow — prefer GLM-5.2 for new work."

## Re-verification — 2026-11-05 (49 days after original)

Second re-run requested by the user (the first was 2026-10-01). Original and first-pass findings above are preserved; this section records what changed on 2026-11-05.

| Dimension | 2026-09-17 | 2026-10-01 | 2026-11-05 | Change |
| --- | --- | --- | --- | --- |
| Tool use | 80 | 80 | 80 | — |
| Reasoning | 78 | 78 | 78 | — |
| Context window | 70 | 70 | 70 | — |
| Multimodal | 15 | 15 | 15 | — |
| Coding | 85 | 86 | 85 | **−1** |
| Cost efficiency | 70 | 70 | 70 | — |
| **Overall** | **66** | **66** | **66** | **—** |

**Newly measured (absent from both earlier passes):**

- **BenchLM composite: 56.09/100, #65 of 1014** — the first third-party overall for this model in this file, built from 44 of 739 benchmark rows (BenchLM flags the coverage as partial/conservative).
- Agentic: **τ²-bench 97.7%** (AA), **AA Agentic Index 25.2%**, **GDPval-AA 1181 Elo**, **AA ITBench 40.3%**, **Gert Labs 60.11%**, **ResearchClawBench 18.2%**. τ² is high but narrow; GDPval-AA 1181 and ResearchClawBench 18.2 are the honest ceiling markers.
- Reasoning/knowledge: **AA-LCR 73.7%** (up from 68.0), **CritPt 4.6%**, **AA-HLE 30.1%**, **AA-GPQA 86.8%**, **AA-IFBench 76.3%**, **AA-Omniscience 23.7% accuracy / 29.9% hallucination / 0.9% index**, **FrontierMath v2 (Tiers 1–3) 36.842%**, **HMMT Nov 2025 94.0 / Feb 2026 82.6**.
- Vals verticals, measured here for the first time: **Vals Index accuracy 56.33%**, Code Migration **25.77%** (48/79), Finance Agent v2 **44.79%** (58/81), Legal Research **27.89%** (60/90), MedCode **41.60%** (52/107), MedScribe **72.27%** (89/109), Public Benefits v1.1 **61.84%** (29/50), TaxEval v2 **71.19%** (82/145), LegalBench **84.39%** (33/151), **ProgramBench 0.00%** (47/64), MMLU-Pro **86.90%** (37/138), GPQA **84.52%** (52/138).
- Other: Design Arena Website **1290** (OpenRouter); AA-SciCode **44.8%** (was 43.8).

**Why Coding moved 86 → 85.** The 77.8% SWE-bench Verified figure that justified the October bump still stands (Vals re-confirms **76.40%** on its own harness), but two new hard-task results land well below it: **ProgramBench 0.00% ±0.00 (47/64)** — a from-scratch synthesis benchmark the model fails outright — and **Code Migration 25.77% (48/79)**. Vibe Code Bench is unchanged at 31.46% (81/124). The model is strong at in-repo edits and weak at greenfield construction, so 85 is the honest band; the Overall is unaffected.

**Corrections and stale figures.**

- **Claw-Eval 62.3 is corroborated, not revised.** BenchLM now sources the figure from the Claw-Eval leaderboard directly rather than as a secondary aggregation, so the original 62.3 stands.
- **The AA Intelligence Index is now a legacy figure.** AA's live page for this model reports **N/A** — deprecated models are re-benchmarked every 18 hours instead of every 6, and the page exposes "No publicly available API" for the index. BenchLM still surfaces **26.1** from AA. Treat 26.1 as the last v4.x reading, not a live v5.0.1 score: v5.0.1 uses a different nine-eval composition (AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 Hard, Terminal-Bench-Science 0.1).
- **Speed/latency readings are not comparable across passes.** AA now reports **27.06 s to first answer token** and **91 tok/s** (Performance v3, median across 5 providers, 5-day average); October's 1.71 s / 44 tok/s used a different metric and provider mix. Neither direction of change should be read as a regression or an improvement.

**Pricing.** AA provider median **$1.19 in / $3.74 out**, 78% cache discount, blended $0.79/M; Vals bills **$1.00/$3.20** on its harness; Zen list is unchanged at **$1.40/$4.40 with $0.26 cached**. Cost stays 70: cheaper than the October median, but there is still no free tier and the line is deprecated.

**Lifecycle.** Deprecated upstream (AA banner points to GLM-5.2) but **still served on Zen**: `glm-5.1` is present in the live `/v1/models` response and absent from Zen's deprecation table, at the same $1.40/$4.40. AA now counts **5 serving providers** (the original pass said 6). The successor ladder widened since October — BenchLM scores **GLM-5.2 at 60.23** and **GLM-5.3 at 61.28**, both on Zen at identical pricing — so GLM-5.1 is now the third-best GLM on its own vendor's shelf.

**Still missing.** No GraphWalks, MRCRv2 or RULER curve is published; long-context evidence remains AA-LCR (73.7%) only. Tool-Decathlon 40.7 and Vending Bench 2 ($5,634.41) from the original pass were not re-published and remain 2026-09 figures.

**Net assessment.** Same conclusion, sharper edges: a still-good, MIT-licensed agentic-edit specialist that is now clearly superseded on its own vendor's shelf, with a newly documented weakness at greenfield program synthesis and a knowledge profile (23.7% accuracy / 29.9% hallucination) that argues against using it as a factual oracle.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-17
- Re-verified by: **Big Pickle (opencode/big-pickle)** — 2026-10-01, 2026-11-05
- Method: public web research (Z.AI/HF model card, Z.AI docs, Artificial Analysis, Vals, BenchLM, Gate News, The Batch); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Z.AI — GLM-5.1: Towards Long-Horizon Tasks](https://z.ai/blog/glm-5.1)
  - [Hugging Face — zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)
  - [Artificial Analysis — GLM-5.1](https://artificialanalysis.ai/models/glm-5-1)
  - [Vals AI — GLM 5.1](https://www.vals.ai/models/zai_glm-5.1)
  - [BenchLM — GLM-5.1](https://benchlm.ai/models/glm-5-1)
  - [OpenCode Zen — models and pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GLM_5.1_2.md`, using the same headings.