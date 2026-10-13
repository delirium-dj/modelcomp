# Claude Sonnet 4 — findings by GLM 5.3

- Source: Anthropic/Claude Sonnet 4 (`claude-sonnet-4-20250514`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-27 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's high-performance Claude 4-generation model (released **2025-05-22** alongside Opus 4), the SWE-bench Verified state-of-the-art at its release. **Retired on Anthropic's API 2026-06-15 — but Amazon Bedrock keeps serving it until 2026-10-14, one day after this report** (beri.net deprecation-window analysis; the two live Bedrock rows on OpenRouter explain its continued measurement — last measured 2026-10-09). Second pass replaces the announcement-only picture with a year of measurement: era-elites (**SWE-V any-scaffold 74.8% #5, Cybench 35% #8, TheAgentCompany 33.1% #3, Mask 95.3% #3, HELM-era top-10s**) against 2026 floors (**τ³ 16.7% #106, GDPval 9.5% #194, TB 2.1 36.3% #142, HLE 7.8-10.7%, CritPt 0.3%**). Historical entry — the model disappears from its last rail tomorrow.
- **Provider / access (at retirement):** Anthropic Claude API (retired 2026-06-15); **Amazon Bedrock (`anthropic.claude-sonnet-4-20250514-v1:0`) until 2026-10-14** — two live rows at $3/$15, 28-45 tok/s; Google Cloud Vertex (deprecated alongside). Powered GitHub Copilot's coding agent at launch.
- **Release / knowledge:** **2025-05-22** (confirmed); training data cutoff Mar 2025.
- **IDs:** `claude-sonnet-4-20250514` (alias `claude-sonnet-4-0`). Deprecated 2026-04-14, API-retired 2026-06-15, Bedrock-end 2026-10-14; official replacement `claude-sonnet-4-6`.
- **Context window:** 200K tokens / 64K max output (confirmed).
- **Modalities:** text + image in; text out; extended thinking (the thinking config measures best); parallel tool calls; JSON mode; prompt caching (up to 1h).
- **Pricing (at retirement):** $3 in / $15 out per MTok (confirmed — blended $6.00/M, "among the most expensive ranked"); 5m cache write $3.75, 1h $6, cache hit $0.30; 47 tok/s (slowest quarter).
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

> Second pass adds the BenchLeader ladder (best = thinking **53.3 #274/760**, last measured 2026-10-09 — via the still-live Bedrock route). Category scores (thinking): **Maths 61 (best)**, Human preference 58, Knowledge 57, IF 54, Long context 60, Coding 50, Agents & tools 50, Multimodal 50, **Reasoning 46 (worst)**.

Agent / tool use:

- **Cybench: 35.0% #8**; **TheAgentCompany: 33.1% #3** (era-elite rank); **METR Time Horizons: 62.0% #19**; **DeepResearch: 46.6% #27**; **BrowseComp-Plus: 14.7% #14** — the era-elite agent rows
- **τ³-Banking: 16.7% #106** (weak); **GDPval-AA: 9.5% #194** (dreadful); **TB 2.1 (AA): 36.3% #142** (weak); TB Hard 27.3-31.1% #107-126; τ² 52.3-64.6% #170-193 (weak); BrowseComp 0.6% #23; OSWorld 42.2% (launch-era SOTA, retained); the "65% less reward hacking" and parallel-tools launch rows retained

Reasoning / knowledge:

- GPQA Diamond: Epoch 79.2% #125 / AA 77.7% #213 (thinking) / Vals 69.4-75.0% #78-91 / HELM 70.6% #10 — below the bar on every harness (the launch's 70.0% no-thinking appendix row consistent)
- HLE: Scale-CAIS **7.8% #35** / AA 10.7% #301 — dreadful; **CritPt: 0.3-1.1% #211-259** (dreadful); ARC-AGI-2 1.3-5.9% #152-192; ARC-AGI-1 23.8-40% #167-189; SimpleBench 45.5% #56; **Kagi 73.0% #20** (thinking — good)
- Math: **MATH 500: 93.8% #15; MGSM: 93.0% #11** (thinking); AIME (Vals) 76.3% #51 (thinking) / 38.5% (not stated); OTIS 71.1% #130; MATH L5 84.4% #28; ForecastBench 60.2% #30
- **Honesty good: non-hallucination 70.9% #37 (thinking)**; accuracy 22.7% #257 (honest, knows little); Omniscience 0.2 #130; MultiNRC 18.4% #35
- **AA II 18.9 #236 (thinking)**; ECI 141.7 #102; **HELM era-elites: GPQA #10, MMLU-Pro 84.3% #10, IFEval 84.0% #25, WildBench 83.8% #16, Omni-MATH 60.2% #10, HELM mean 76.6% #11**; MMLU-Pro (Vals) 83.9% #67; **MedQA 92.7% #27**; LegalBench 82.1-83.0% #60-72; TaxEval 69.6-72.0% #67-93; MedCode 33.9-35.0% #73-77 (weak)

Coding:

- **SWE-bench Verified board: any-scaffold 74.8% #5 / bash-only 64.9% #20** — the scaffold spread explains the 72.7% launch figure; **SWE-Bench Pro: 42.7% #9**; **Aider Polyglot: 61.3% #13**; the 80.2% high-compute launch row retained
- Weak: LCB (Vals) 59.7-62.4% #99-102; SciCode 40.0% #153; WeirdML 46.1% #80; GSO 4.9% #25; ALE 655.4 #84; LMArena Coding 1474 #110

Long context:

- 200K/64K; AA-LCR 44.0-70.3% #204-328 (mid-weak); Fiction.LiveBench 36.4% #29 (weak); no MRCR/RULER rows (unchanged).

Multimodal:

- MMMU 74.4% #16; MMMU-Pro: Vals 72.4-74.9% #55-62 / AA 61.8-62.4% #191-201; LMArena Vision 1175-1191 #96-104 (weak); VISTA 43.2-45.5% #24-34; SAGE 32-35% #67-72 (weak); VTB 4.4% #17-18 (weak); **MindCube 44.8% #3** (niche elite); GeoBench 37% #25. Text+image in, text out.

Preference/IF/safety:

- Preference weak ranks (Text 1391-1402 #146-157, Creative 1388-1396 #109-121, Multi-turn 1410-1421 #123-137) — the arena moved past it; **Lech Mazur Creative Writing 81.4% #14** retains value; IFBench 45.4-54.7% #147-203 (weak); MultiChallenge 57.1% #17
- Safety: **Mask 95.3% #3**; FORTRESS 18.1% #43 (weak); PropensityBench 12.2% #13

### Normalized scores (1–100)

- **Tool use: 58/100.** Lowered from 70: era-elites (Cybench #8, TheAgentCompany #3, METR #19, DeepResearch #27) hold, but the 2026 suites are merciless — τ³ 16.7% #106, GDPval 9.5% #194, TB 2.1 36.3% #142, TB Hard ~31%, τ² 52-65% — and Agents & tools 50 sits at the category average.
- **Reasoning: 58/100.** Lowered from 68: GPQA 69-79% below the bar everywhere, HLE ~8-11%, CritPt 0.3%, ARC-AGI-2 ~1-6%, AA II 18.9 #236 — offset by Kagi #20, MATH 500 93.8% #15, MGSM #11, good honesty (70.9% #37), and HELM-era top-10s.
- **Context window: 70/100.** Held: 200K/64K anchor tier; measured retrieval mid-weak (AA-LCR 44-70%).
- **Multimodal: 56/100.** Lowered from 65: MMMU 74.4% #16 and MMMU-Pro ~75% #55 are decent, but Vision 1175-1191 (bottom-tier), SAGE ~33%, VTB 4.4%, and category 50 measure the era's floor.
- **Coding: 62/100.** Lowered from 76: the SWE-V scaffold spread (64.9-74.8%) and SWE-Pro 42.7% #9 / Aider 61.3% #13 remain respectable history — but LCB ~60% #99-102, SciCode 40%, TB 2.1 36.3%, GSO 4.9%, and ALE #84 are bottom-band by 2026 standards.
- **Cost efficiency: 60/100.** Held: $3/$15 (blended $6/M "among the most expensive") with slowest-quarter decode — historical rates for a model with one day of Bedrock life left.
- **Overall Score: 61/100.** (58 + 58 + 70 + 56 + 62) / 5 = 60.8 → 61, down from 70. Best-fit (historical): the May-2025 SWE-bench king whose era-elites (any-scaffold #5, Cybench #8, TheAgentCompany #3) and genuinely good honesty (70.9% #37, Mask 95.3% #3) survive in the record — but its reasoning, 2026 agent suites, and multimodal all measured at the floor, it retired from Anthropic's API in June, and **its last rail (Bedrock) ends 2026-10-14, tomorrow**. Migrated replacements: Sonnet 4.6+ at the same price.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-27 report (BenchLeader ladder as of 2026-10-09 via the live Bedrock route, aggregating Epoch AI Benchmarking Hub incl. SWE-bench Verified and Cybench, Artificial Analysis, Vals AI, Scale AI SEAL incl. SWE-Pro/FORTRESS/Mask, HELM Capabilities, MathArena, METR, TheAgentCompany, Aider leaderboard, Fiction.live, Lech Mazur; DDG-lite searches surfacing the benchr/aimodelwatch retirement confirmations and **beri.net's Bedrock-window analysis — Anthropic API retired 2026-06-15, Bedrock serves until 2026-10-14** — plus the Sonnet 4.5 → 5.5 (2026-11-30) deprecation-wave context; first-pass announcement rows retained where not contradicted); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
