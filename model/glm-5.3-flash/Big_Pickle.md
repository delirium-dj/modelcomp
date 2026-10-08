# GLM-5.3-Flash — findings by Big Pickle

- Source: Zhipu AI / Z.ai (`glm-5.3-flash`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash
- **Short description:** Zhipu AI's cost-optimized, first natively multimodal model in the GLM-5 series — a 320B-total/18B-active MoE released open-weight (MIT) that outperforms the much larger GLM-5.2 on every reported benchmark at roughly one-tenth the serving cost, approaching Claude Opus 4.8 on coding and agentic work. Shipped anonymously as "Ox Alpha" the week before its August 26 reveal.
- **Provider / access:** Z.ai API, plus OpenRouter, Fireworks, Together, Deep Infra, Venice AI, Requesty; open weights on Hugging Face (`zai-org/GLM-5.3-Flash`, MIT).
- **Release / knowledge:** 2026-08-26 (Z.ai blog / HF model card); 30T-token multimodal pre-training corpus.
- **IDs:** `glm-5.3-flash` (Zhipu AI; open weights under MIT)
- **Context window:** 1M (1,048,576 tokens; some gateways list up to 1.31M); max output 128K (API 131,072).
- **Modalities:** text, image, video input; text output; natively multimodal; reasoning always on (`reasoning_effort` low/high/max, default max); tool calling, structured JSON, computer use, long-context.
- **Pricing (as of 2026-09-20):** Z.ai list $0.15 in / $0.50 out per 1M (launch promo $0.075/$0.25; cached $0.03, promo $0.015); blended usage-weighted ~$0.10/1M (Apidog via DataCamp); ~one-tenth GLM-5.3's ~$0.90.
- **Architecture:** 320B total / 18B active sparse MoE (45 layers, 288 routed + 1 shared experts, top-8), hybrid sparse + linear attention for cheap long-context serving, Manifold-Constrained Hyper-Connections (mHC), dedicated vision encoder; reviewed in GLM-5 paper (arXiv 2602.15763).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.ai; independently confirmed by Artificial Analysis at 84.27%, 15 Sept 2026)
- Terminal-Bench 4.0: **32.8%** (Artificial Analysis via LLMLearner / AI Atlas)
- Toolathlon Verified: **78.4%** (Z.ai; vs GLM-5.2 59.9, Opus 4.8 76.2)
- AutomationBench v1.0.6: **48.8%** (Z.ai; LLMLearner independent 48.8; vs 26.2 GLM-5.2, 41.0 Opus 4.8)
- Agents' Last Exam: **26.3%** (Z.ai; vs 27.0 Opus 4.8, 28.0 Gemini 3.7 Flash)
- GDPval-AA v2: **1773 Elo** (Z.ai; LLMLearner 1655)
- OSWorld 2.0: **59.1%** (Z.ai)

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (Artificial Analysis independent, Sept 2026; also LLMLearner)
- Humanity's Last Exam (w/ tools): **55.3%** (Z.ai; LLMLearner rank 17/218)
- FrontierMath v2: **55.8%**
- Artificial Analysis Intelligence Index v4.1.1: **57** at $0.045/task (discounted) — on the AA Pareto frontier

Coding:

- SWE-bench Verified: **78.2%** (RankLLMs)
- DeepSWE v1.1: **63.4%** (Z.ai; confirmed on the official DeepSWE leaderboard at ~63%, vs GLM-5.2 46.2 and Opus 4.8 58.0)
- NL2Repo: **56.3%** (rank 10/16, LLMLearner)
- SciCode: **51.6%** (LLMLearner)
- LiveCodeBench (independent): **no verified public score found** for GLM-5.3-Flash specifically

Long context:

- Context Arena (memory & persistence): **79.5** (LLMLearner, rank 22/49)
- Native 1M window; hybrid sparse+linear attention built to keep long-context serving cheap (Z.ai)

Multimodal:

- CharXiv Reasoning w/ tools: **89.4%** (Z.ai)
- MMVU: **80.5%**; MVbench: **77.8%**; Vision2Web: **77.8%**; OfficeQA Pro: **62.4%** (Z.ai)
- BabyVision: **53.4%** (LLMLearner rank 5/11); Chartography w/ tools: **78.0%**
- No audio input/output support; output is text-only (benchgen.com)

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.1 84.3% (independently confirmed by AA) is just under the 85% elite line, and Toolathlon 78.4% plus AA AutomationBench 60.4% are strong; Terminal-Bench 4.0 32.8% and Agents' Last Exam 26.3% keep it from top-tier (independent TB2.1 Vals 62.9% is the low outlier).
- **Reasoning: 84/100.** GPQA Diamond 91.2% (AA) / 86.4% (Vals) lands in the 90–93 → 86–88 band before moderation; HLE w/tools 55.3% (Z.ai) vs AA-HLE 39.9% independent shows a wide self-reported-vs-independent spread; a step behind the 94%+ GPQA models.
- **Context window: 86/100.** Native 1M window engineered for cheap long-context (hybrid sparse/linear attention), with Context Arena 79.5 and now independent AA-LCR 80.0; some gateways list up to 1.31M.
- **Multimodal: 76/100.** First native GLM-5 multimodal input (image+video) with strong grounded evals (CharXiv 89.4, MMVU 80.5, Design Arena Website 1278 Elo); no audio and text-only output cap it.
- **Coding: 78/100.** (Raised from 76 on 2026-10-08.) LiveCodeBench (Vals) 80.5% finally fills the missing independent number; SWE-bench (Vals) 92.0%, SWE-bench Verified 78.2%, DeepSWE 63.4% (ahead of Opus 4.8), NL2Repo 56.3%; still short of the 85%+ elite coding tier.
- **Cost efficiency: 94/100.** (Lowered from 95 on 2026-10-08.) Launch promo ended 2026-09-09; list $0.15 in / $0.50 out (cached $0.03) → blended ~$0.24 per 1M — still roughly one-tenth GLM-5.3.
- **Overall Score: 80/100.** Mean of the five quality dims (76+84+86+76+78)/5 = 80.0 → 80 (unchanged). A cheap, open, natively multimodal coding/agent powerhouse that outperforms its bigger sibling on nearly every axis.

---

## Re-verification — 2026-10-08 (18 days after original)

| Dimension | 2026-09-20 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 76 | 76 | — |
| Reasoning | 84 | 84 | — |
| Context window | 86 | 86 | — |
| Multimodal | 76 | 76 | — |
| Coding | 76 | 78 | +2 |
| Cost efficiency | 95 | 94 | −1 |
| **Overall** | **80** | **80** | **—** |

New and corrected data (all found 2026-10-08):

- **LiveCodeBench gap filled: 80.5%** (Vals AI leaderboard, via BenchLM) — old file had "no verified public score".
- **SWE-bench (Vals): 92.0%** (independent Vals harness; higher than the RankLLMs 78.2 used originally); SWE-bench Pro still unpublished for this model.
- **Tau gap partially filled: AA τ³-Banking 47.2%** (Artificial Analysis, via BenchLM); τ²-bench still unpublished.
- **AA-HLE: 39.9%** independent vs Z.ai's self-reported HLE w/tools 55.3% — both stand; use the pair as the band.
- **AA Intelligence Index re-based:** 41.8–41.9 on the current v4.3 scale (modelpricewatch, OpenTools, BenchLM) vs the old 57 on v4.1.1 — methodology version change, not a capability drop; Apidog/DataCamp's 57 was the Aug 2026 v4.1 snapshot.
- **Long context:** AA-LCR 80.0 independent (confirms the old Context Arena 79.5 band); MLCR-AA 51.1 (medical long-context); MRCR still no public score.
- **Agentic additions:** AA-Briefcase 1454 Elo, AA ITBench 51.2%, AA EnterpriseOps-Gym 33.2%, AA AutomationBench 60.4% (vs Z.ai's 48.8 on AutomationBench v1.0.6 — different harness), GDP.pdf 15.4%, Terminal-Bench 2.1 84.3% confirmed by both Z.ai and AA.
- **Coding additions:** OpenHarmony Bench 57.3%, FrontierSWE v2 18.1% (hard new eval), AA-SciCode 51.6% confirmed; GPQA Diamond (Vals) 86.4%, MMLU-Pro (Vals) 86.1%, CritPt 15.4%, AA-Omniscience 7.5.
- **Pricing correction:** the 50% launch promo ($0.075/$0.25) ended 2026-09-09 24:00 UTC+8; list **$0.15 / $0.50, cached $0.03** has been in effect since 2026-09-10 (modelpricewatch price history, OpenRouter standard tier, B.AI standard effective date). Cost score trimmed 95 → 94.
- Third-party composite: BenchLM overall 57.37 (#56/887), 38 of 623 benchmarks covered, updated 2026-10-07.
- OpenRouter reports max output 943,718 tokens on its gateway vs the API's official 131,072 — gateway variance, official spec unchanged.

Gaps still open after re-run: Claw-Eval (BenchLM shows "coming soon"), MRCR, SWE-bench Pro, Vibe Code Bench, audio modality.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-20
- Method: public web research (z.ai, huggingface.co, bloomberg/datacamp, benchgen.com, lumadock.com, rankllms.com, llmlearner.com, ai-atlas.co, openrouter.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.