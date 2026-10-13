# Gemma 4 31B — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Gemma 4 31B
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B (31B Dense)
- **Short description:** Google DeepMind's largest dense open-weight Gemma 4 — natively multimodal (text+image), built-in thinking mode, positioned as frontier-level intelligence-per-parameter for local/self-hosted deployment; #3 open model on the Arena Text leaderboard at release.
- **Provider / access:** Google DeepMind — Apache 2.0 open weights (Hugging Face `google/gemma-4-31B`), Google AI Studio / Edge Gallery, self-host or community hosting. No first-party hosted API fee.
- **Release / knowledge:** Released 2026-04-02 (Google blog); technical report arXiv 2607.02770; Arena table as of 2026-06-19. Knowledge cutoff disputed: January 2025 (theexpertranking) vs January 2026 (AA comparison page).
- **IDs:** `google/gemma-4-31b-it` (repo meta.json); `google/gemma-4-31B` (Hugging Face).
- **Context window:** 256K tokens for 31B (128K only for the E2B/E4B edge sizes). Repo meta.json's "128K context" is stale.
- **Modalities:** Text, image in; text out. No audio on 31B (audio only on E2B/E4B/12B). ~550M-parameter vision encoder; supports document/PDF parsing, screen/UI understanding, chart comprehension, multilingual OCR, handwriting, pointing, variable aspect ratios/resolutions. Built-in thinking mode generates reasoning traces.
- **Pricing (as of 2026-10):** Free open weights (Apache 2.0) — $0 to self-host; paid third-party hosting applies (repo meta.json: "Free open weights / standard hosting").
- **Architecture:** 30.7B params dense, 60 layers, 1024-token sliding window, 5:1 local:global attention, pp-RoPE (p=0.25 global), KV-cache reuse (−37.5% global KV footprint); BF16 69.9GB / SFP8 34.9GB / Q4_0 17.5GB; 140+ languages.

### Raw benchmarks found

All figures from Google's official model card / technical report (instruction-tuned, thinking mode unless stated):

Agent / tool use:

- τ²-Bench (average over 3): **76.9%** — Retail **86.4%**, Airline **75.0%**, Telecom **69.3%**.
- Terminal-Bench Hard: **36.0%** (AA independent: 30.3% no-reasoning / 36.4% thinking).
- Second-pass agentic rows (2026-10-12): AA Agentic Index: **6.7%** (measured — severe cap); MCP Atlas: **54.2%** (Meta's published Muse Glimmer comparison; benchgap est 64.6% ±7.8) vs Glimmer's 75.5% and Qwen3.6-27B's 62.5%; MCP-Tasks: **88.6%** (est, low confidence); DeepSearchQA: **61.7%** (Meta's published) / 63.9% (benchgap est) vs Glimmer's 74.6%; GAIA2: **36.4%** (Meta's table); WildClawBench: **37.6%** (rank 25/34); τ²-Bench Telecom (AA independent): **59.9%** thinking / 65.5% no-reasoning — below the vendor's 69.3%; τ³-Banking: **15.1%** (Meta's table) / 8.9–14.8% (AA); GDPval-AA v2.1: **2.5%** / 6.2% thinking (AA Elo 619); AutomationBench-AA: **5%**; ITBench SRE (AA): **37.3%** (rank 25); Terminal-Bench 2.0 (Vals, Terminus 2 high): **39.3%** (rank 35); Terminal-Bench 2.1: **46.8%** (Mercor, Terminus 2, 1000 steps) / **43.4%** (Meta's table) / 43.5% thinking (AA, rank 129) / 29.2% no-reasoning (AA, rank 159); BFCL v4: **64.1%** (benchgap est, high confidence); BionicBench v0.1 (LM Studio): **77.7%** (Glimmer 83.3%); Surface Evolver Bench: 30.6% (rank 24); CyberGym 50.7% (est); Model Pareto Agents: #93/178 at 30.2±4.2; BenchLeader Agents & tools: 45–50 by effort. Safety (Meta's table): lowest CI-Memories violation rate and lowest Siren AgentDojo attack success rate of the three compared models.

Reasoning / knowledge:

- GPQA Diamond: **84.3%**.
- AIME 2026 (no tools): **89.2%**.
- HLE: **19.5%** no tools; **26.5%** with search.
- MMLU-Pro: **85.2%**; MMMLU: **88.4%**; BigBench Extra Hard: **74.4%**; IFBench: **76.0%**; IFEval: **98.9%**.
- Arena Text Elo: **1451±8** — #3 open model (as of 2026-06-19), leading dense open model; Google claims it outcompetes models 20× its size.
- Second-pass reasoning rows (2026-10-12): GPQA Diamond cluster: **85.7%** (AA measured; also Meta's comparison-table read) / 84.3% (vendor); AA-HLE: **23.6%** (measured) / **24%** (AA comparison page) / 11.8% (AA non-reasoning, rank 293/655) / 15.3% (benchgap HLE-Verified est) — an effort-dependent spread; MMLU-Redux: **93.2%** (est, high confidence); MMLU: **89.7%** (est); MMLU-Pro cluster: **85.2%** (vendor) / 85.8% (Mercor single-shot) / 80.6% (Vals est); SimpleQA: **56.6%** (est, low confidence); AA Intelligence Index: **15** (AA current, Oct 2026; 14.7 BenchLM / 15.4 HokAI Sept / 19 older reads) — the rebase-era read for this model; AA-Omniscience: **−48** (accuracy 20.0%, hallucination rate 85.0% — a very high-hallucination profile); CritPt: **1%**; GDP.pdf: 6%; BioMysteryBench: 27.1% (est, human-difficult); BenchLeader composite: 52.2 ±7.7 (#307/760) — maths 66 (highest), knowledge 25 (lowest), reasoning 41–61 by effort.

Coding:

- LiveCodeBench v6: **80.0%**.
- Codeforces Elo: **2150**.
- SciCode: **43.0%** (AA-SciCode independent: 45.5%; Meta's table: 43.4%).
- Second-pass coding rows (2026-10-12): SWE-bench Verified — **46.1%** (Mercor, mini-swe-agent, 1000 steps) / **46.7%** (SWE-rebench, bash-only mini-SWE-agent) / **52.0%** (Vector Wire) / **66.6%** (Meta's comparison table) / ~**75.0%** (Model Pareto est, #10/14) / **76.2%** (Vals est) / **78.1%** (benchgap est) / **80.9%** (RankedAGI) — a 35-point harness gap: minimal/bash-only configs land at 46–47% (the apples-to-apples LM-direct read per swebench.com's own methodology), vendor-style runs at 66.6%, and scaffolded/estimated reads at 75–81%; SWE-bench Pro: **36.9%** (Meta's table) / **47.7%** (benchgap est) — conflict kept; SWE-bench Multilingual: **51.7%** (Vector Wire); SWE-Rebench (contamination-free): **41.6%**; AA Coding Index: **43.4%** (measured); LiveCodeBench v6 (Vals): **80.5%** (confirms the vendor's 80.0%); React Native Evals: **75.2%**; Gert Labs: **35.3%** (measured); WeirdML: 52.3% (rank 66); LMArena Coding: 1503 (rank 70/409); BenchLeader coding: 48.

Long context:

- MRCR v2 8-needle at 128K: **66.4%** (average).
- Second-pass long-context rows (2026-10-12): AA-LCR v1.1: **70%** (AA — mid-band independent retrieval read); LMArena Longer Queries: 1470 (rank 60); LMArena Multi-turn: 1466 (rank 69). Deployment note (Models at Work): full 256K context needs ~48GB — a hosting constraint, not a quality signal.

Multimodal:

- MMMU-Pro: **76.9%** (Meta's table read: 73.0% — conflict kept); MATH-Vision: **85.6%**; OmniDocBench 1.5: **0.131** average edit distance (lower is better); MedXPertQA-MM: **61.3%**.
- Second-pass multimodal rows (2026-10-12): CharXiv Reasoning: **77.7%** (Meta's table); MLVU (M-Avg): **85.5%** (benchgap est, medium confidence — strong video-understanding read, likely frame-sampled); BenchLeader multimodal: 53–62 by effort. Open conflict on video input: AA's spec table and awesomeagents list 31B as text+image+**video** in, while HokAI and theexpertranking state text+image only — unresolved; the model card section keeps text+image in.

### Normalized scores (1–100)

- **Tool use: 67/100.** τ²-Bench average 76.9% (Retail 86.4% strong; AA's independent Telecom read of 59.9–65.5% sits below the vendor's 69.3%), BFCL v4 64.1% (est), MCP-Tasks 88.6% (est) and BionicBench 77.7% are the strong rows, with MCP Atlas 54.2%, DeepSearchQA 61.7–63.9% and ITBench SRE 37.3% (rank 25) mid-field; but the second-pass agentic evidence caps hard: AA Agentic Index 6.7% (measured), τ³-Banking 8.9–15.1%, GDPval-AA v2.1 2.5–6.2%, AutomationBench-AA 5%, GAIA2 36.4%, WildClawBench 37.6% (rank 25/34) and Terminal-Bench 2.0/2.1 29.2–46.8%. Revised 69→67 on the AA Agentic-Index/τ³/GDPval-AA/GAIA2 caps.
- **Reasoning: 71/100.** AIME 2026 89.2% (no tools), GPQA 84.3% (independently confirmed at 85.7% by AA and Meta's table) and BigBench Extra Hard 74.4% are good, with MMLU-Redux 93.2% (est) a strong new fill; capped by the HLE cluster (11.8–24%, effort-dependent), CritPt 1%, the AA Intelligence Index rebase-era read (15) and AA-Omniscience −48 (85.0% hallucination rate). Unchanged.
- **Context window: 74/100.** 256K (meta.json's 128K is stale) sits between the 200K=70 and 1M=95 anchors; MRCR v2 66.4% at 128K is moderate retrieval evidence.
- **Multimodal: 70/100.** Text+image input with a 550M vision encoder; MMMU-Pro 76.9% (73.0% in Meta's run), MATH-Vision 85.6%, OmniDocBench 0.131, CharXiv Reasoning 77.7% and the new MLVU 85.5% video-understanding read form a strong vision suite; no audio on this size (video-input support disputed — see open conflict). Revised 69→70 on the CharXiv/MLVU fills.
- **Coding: 71/100.** LiveCodeBench v6 80.0–80.5% (Vals-confirmed) and Codeforces 2150 Elo are strong, and React Native Evals 75.2% is a solid niche fill; but the first SWE-bench evidence lands weak-to-mid on apples-to-apples configs (46.1–46.7% bash-only mini-SWE-agent, 52.0% Vector Wire, 66.6% Meta's run; 75–81% only under stronger scaffolds or estimates — a 35-point harness gap, kept as a conflict), and SWE-bench Pro 36.9–47.7%, SWE-Rebench 41.6% (contamination-free), AA Coding Index 43.4%, AA-SciCode 45.5%, SciCode 43.0–43.4% and Gert Labs 35.3% cap it. Revised 73→71 on the SWE-bench/Coding-Index caps.
- **Cost efficiency: 97/100.** Apache 2.0 weights are $0 to self-host; only paid third-party hosting costs apply.
- **Overall Score: 70.6/100.** Mean of the five quality dimensions (67+71+74+70+71)/5 = 70.6; an excellent open-weight value — near-frontier math/vision for 31B — held below the frontier by HLE, the agentic-composite caps and a weak apples-to-apples SWE-bench read. Revised from 71.2 (Tool −2, Coding −2, Multimodal +1).

---

## Update 2026-10-12 (deep second pass, 6 independent searches)

- **Score changes:** Tool 69→67 (AA Agentic Index 6.7% measured, τ³-Banking 8.9–15.1%, GDPval-AA v2.1 2.5–6.2%, GAIA2 36.4%, WildClawBench 37.6% caps), Multimodal 69→70 (CharXiv Reasoning 77.7%, MLVU 85.5% fills), Coding 73→71 (SWE-bench bash-only 46.1–46.7%, SWE-Rebench 41.6%, AA Coding Index 43.4% caps). Reasoning 71, Context 74, Cost 97 stand; Overall 71.2→70.6.
- **SWE-bench Verified conflict (kept, not averaged):** 46.1% (Mercor mini-swe-agent) / 46.7% (SWE-rebench bash-only) / 52.0% (Vector Wire) / 66.6% (Meta's table) / ~75.0% (Model Pareto est) / 76.2% (Vals est) / 78.1% (benchgap est) / 80.9% (RankedAGI) — minimal scaffolds land at 46–47% (the apples-to-apples LM-direct read per swebench.com's own methodology); vendor-style and scaffolded runs reach 66.6–80.9%.
- **Key fills:** agentic — MCP Atlas 54.2% (Meta's published; Glimmer 75.5%, Qwen3.6-27B 62.5%), DeepSearchQA 61.7% (Meta's; Glimmer 74.6%), MCP-Tasks 88.6% (est), ITBench SRE 37.3% (rank 25), BFCL v4 64.1% (est), BionicBench 77.7% (LM Studio), Terminal-Bench 2.0 39.3% (Vals), Terminal-Bench 2.1 29.2–46.8%, τ²-Bench Telecom AA-independent 59.9–65.5% (below vendor 69.3%); reasoning — GPQA 85.7% (AA + Meta's table, above vendor 84.3%), AA-HLE 23.6%/24% (11.8% non-reasoning), MMLU-Redux 93.2% (est), SimpleQA 56.6%, AA Intelligence Index 15 (current), AA-Omniscience −48 (85.0% hallucination), CritPt 1%; coding — SWE-bench Multilingual 51.7%, SWE-bench Pro 36.9% (Meta's) / 47.7% (est), LiveCodeBench v6 80.5% (Vals), React Native Evals 75.2%, Gert Labs 35.3%; multimodal — CharXiv Reasoning 77.7%, MLVU 85.5% (est), MMMU-Pro 73.0% (Meta's read vs vendor 76.9%); context — AA-LCR v1.1 70%.
- **Rankings (Oct 2026):** LMArena Text 1452 (rank 72–75/379–414; Coding 1503 #70, Math 1470 #54, Expert 1498 #46, Creative Writing 1418 #85, Multi-turn 1466 #69, Longer Queries 1470 #60, Non-English 1437 #26); ModelCap Index 71.1 (#34/344, interval 65.7–76.5); BenchLeader 52.2 ±7.7 (#307/760); Models at Work 58/100 (#22/26, "the new baseline"); Model Pareto Agents #93/178 (30.2±4.2).
- **Competitive position:** Meta's own table (2026-08-10) has Muse Glimmer ahead on 19 of 24 rows (agentic/search), with Gemma 4 31B ahead only on GPQA Diamond (85.7 vs 83.5), HLE and safety (CI-Memories violations, Siren AgentDojo attack rate); Qwen3.6-27B ahead on SWE-bench Verified (77.2), OSWorld-Verified and Terminal-Bench 2.1. All vendor-run with untuned rival setups — directional, not verified. AA's current field: Qwen3.6-27B Index 46, Gemma 4 31B Index 15, Muse Glimmer 17.
- **Still open:** video-input support (AA + awesomeagents: text/image/video in; HokAI + theexpertranking: text/image only); knowledge cutoff (January 2025 per theexpertranking vs January 2026 per AA); a Terminal-Bench 2.1 run on a strong scaffold; the "1M context" claim on Harness RL (contradicted by the 256K card); MCP-Atlas/DeepSearchQA independent reproductions (only Meta's runs exist).

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03 (updated 2026-10-12)
- Method: public internet research (Exa web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
