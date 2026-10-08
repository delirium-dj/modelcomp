# GLM 5.3 Flash — findings by Ling 3.1 Flash

- Source: Zhipu AI / Z.ai (`zai-org/GLM-5.3-Flash`, MIT open weights; Z.ai API, GLM Coding Plan, 32+ OpenRouter providers)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Zhipu AI's MIT-open-weights efficiency MoE (2026-08-26; preview codename "Ox Alpha") — 320B total / 18B active with hybrid sparse+linear attention and a 1M multimodal context: Terminal-Bench 2.1 84.3%, DeepSWE 63.4%, Toolathlon Verified 78.4%, GDPval-AA v2 1773 Elo (#1 in its launch table), AA Intelligence Index 57, at ~$0.10 blended per 1M.
- **Provider / access:** Z.ai API ($0.15/$0.50 per 1M list; limited-time promo $0.075/$0.25; cached $0.03/$0.015; cached-input storage free), GLM Coding Plan (3× the usable quota of GLM-5.3), MIT weights on Hugging Face (self-hostable; FP8 checkpoint ~306 GiB), 32+ OpenRouter providers (from $0.026/$0.93 to $0.14/$0.45); ~49 tok/s, ~1.52s TTFT, AA speed 2/4.
- **Release / knowledge:** 2026-08-26 (weights on HF from 2026-08-25); knowledge cutoff not stated.
- **IDs:** `opencode/glm-5.3-flash` / `zai-org/GLM-5.3-Flash`. NOTE: the repo `meta.json` is a stale stub ("204K", "Text in/out") — the model has a 1M window and text/image/video input.
- **Context window:** 1,048,576 (1M) tokens — hybrid sparse+linear attention with IndexPool (compresses four indexer key vectors into one) for cheap 1M serving; community reports note attention drift beyond ~700K tokens.
- **Modalities:** text, image, video in (dedicated vision encoder); text out (no image/audio generation).
- **Pricing (as of 2026-10-02):** Z.ai $0.15/$0.50 per 1M (promo $0.075/$0.25); blended ~$0.10/M (Apidog); AA cost per task $0.045 (discounted) / ~$0.09.
- **Architecture:** 320B-total/18B-active MoE (45 layers; 288 routed + 1 shared expert, top-8); Manifold-Constrained Hyper-Connections (mHC); 3.0× less attention compute and 4.4× smaller KV cache than GLM-5.3.

### Raw benchmarks found

Agent / tool use (Z.ai launch table, reasoning_effort=max; harnesses: Claude Code 2.1.207, mini-swe-agent, official Toolathlon/ALE evaluators; GPT-5.6-luna (medium) judged HLE w/ tools — all vendor-run, unaudited):

- GDPval-AA v2: **1773 Elo** — #1 in the table (DeepSeek-V4-Vision-Exp 1675, Claude Opus 4.8 1582, GPT-5.6 Terra 1571, Gemini 3.7 Flash 1527; GLM-5.2: 1504; GLM-5.3 flagship: 1769)
- Terminal-Bench 2.1: **84.3%** (Opus 4.8 85.0, Gemini 3.7 Flash 85.8, GPT-5.6 Terra 87.4; GLM-5.2: 81.0; GLM-5.3: 88.2) — 0.7 points under the 85% bar
- Toolathlon Verified: **78.4%** (Opus 4.8 76.2, GPT-5.6 Terra 74.9; GLM-5.2: 59.9)
- AutomationBench v1.0.6: **48.8%** — best in table (Opus 4.8 41.0, DSV4-VE 38.8, GPT-5.6 Terra 37.2, Gemini 3.7 Flash 52.3; GLM-5.2: 26.2)
- Agents' Last Exam: **26.3%** (Opus 4.8 27.0, DSV4-VE 27.3, GPT-5.6 Terra 28.0, Gemini 3.7 Flash 28.0)
- OSWorld 2.0: **59.1%** — best in table (DSV4-VE 54.9, Opus 4.8 54.8, GPT-5.6 Terra 50.2, Gemini 3.7 Flash 47.9)
- Vision2Web: **77.8%** (Opus 4.8 76.1, DSV4-VE 67.6)
- AA Agentic Index: **50.9** (AA's own runs)
- MCP Atlas / τ-Bench / BrowseComp: no verified public score found

Reasoning / knowledge:

- AA Intelligence Index v4.1.1: **57** at max effort (GLM-5.3: 60; level with GPT-5.6 Terra per The Decoder) at $0.045/task discounted — "a level of intelligence previously only available at roughly 10× the cost" (Z.ai)
- GPQA Diamond: **91.2%** (AA's own runs) — clears the 90%+ frontier band
- HLE w/ tools: **55.3%** (Z.ai, GPT-5.6-luna judge; Opus 4.8 57.9, DSV4-VE 55.1, GLM-5.2 54.7); HLE (AA's runs): **39.9%**
- CritPt: **15.4%**; AA-Omniscience: accuracy **27.5%**, non-hallucination rate **72.4%**
- Base model: MMLU 88.1, BBH 86.6, HellaSwag 87.1, SimpleQA 33.5
- AA's current page lists the Intelligence Index at 41.8 (version/effort-dependent vs the v4.1.1 max-effort 57)

Coding:

- DeepSWE v1.1: **63.4%** (GPT-5.6 Terra 69.6, Gemini 3.7 Flash 65.3, DSV4-VE 59.3, Opus 4.8 58.0; GLM-5.2: 46.2; GLM-5.3: 66.9) — under the 74% frontier bar
- NL2Repo: **56.3%** (Opus 4.8 69.7, DSV4-VE 57.7; GLM-5.2: 48.9)
- SciCode: **51.6%** (AA's runs) — under the 55% reference
- AA Coding Index: **71.5** — clears the 70% reference
- Z.ai Code Bench v1.0 (in-house): **29.0** at max (Opus 4.8: 29.5)
- LiveCodeBench-Base: **37.6%**; LiveCodeBench (hosted): no verified public score found
- SWE-bench Verified / Pro / Vibe Code Bench: no verified public score found

Long context / multimodal:

- 1M window; AA-LCR: **80.0%** (AA's runs); no MRCR/RULER/GraphWalks score published
- CharXiv Reasoning w/ tools: **89.4%** (Opus 4.8 89.9, GPT-5.6 Terra 88.0, Gemini 3.7 Flash 88.7); Chartography w/ tools: **78.0%** (Opus 4.8 75.0, GPT-5.6 Terra 68.0); OfficeQA Pro: **62.4%** (DSV4-VE 57.9, Opus 4.8 48.9)
- MVbench: **77.8%**; MMVU: **80.5%**; BabyVision: **53.4%** (Opus 4.8 46.8, GPT-5.6 Terra 61.6, Gemini 3.7 Flash 70.9)
- Design Arena Elo: 3D 1334, UI Component 1325, Game Dev 1294, SVG 1290, Code Categories 1289, Website 1279, Data Viz 1272, Asciiart 1276

### Normalized scores (1–100)

- **Tool use: 82/100.** GDPval-AA v2 1773 Elo (launch table; AA's current v2.1 read: 1647) and Toolathlon Verified 78.4% lead, with AutomationBench 48.8% vendor / 60% (AA's own run) and OSWorld 2.0 59.1% supporting; Terminal-Bench 2.1 at 84.3% sits 0.7 points under the 85% bar, but Terminal-Bench 4.0 at 33% (AA's independent run) is far under the 55–66% frontier, Agents' Last Exam 26.3% is mid, and all headline figures are Z.ai-run launch evals awaiting independent reproduction.
- **Reasoning: 84/100.** GPQA Diamond 91.2% (AA) / 90.2% (Epoch AI, independent) clears the 90%+ frontier band and HLE 55.3% with tools clears the 40%+ bar; the cap comes from AA's current reads — Intelligence Index 42 (v4.3.2-era vs the vendor-cited 57 on v4.1.1 at max — level with GPT-5.6 Terra, 3 behind GLM-5.3), HLE 40% (no tools), FrontierMath Tier 4 17.1%, CritPt 15.4%, AA-Omniscience accuracy 7 and ARC-AGI-2 65.8% (semi-private, mid-tier).
- **Context window: 95/100.** 1M-token window (hybrid sparse+linear attention, IndexPool) with AA-LCR 80.0%; no ≥98%-at-512K+ retrieval figure, so 100 is not justified; community reports note drift beyond ~700K tokens.
- **Multimodal: 85/100.** text/image/video in with text out — the +video/PDF band (75–90), corroborated by CharXiv w/tools 89.4%, MMVU 80.5%, Chartography 78.0%, MVbench 77.8% and Vision2Web 77.8%; BabyVision 53.4% trails Gemini 3.7 Flash's 70.9%.
- **Coding: 76/100.** Terminal-Bench 2.1 84.3% sits just under the 85% bar and the AA Coding Index of 71.5 clears the 70% reference, with DeepSWE 63.4% (best-in-table ahead of Opus 4.8's 58.0%) and NL2Repo 56.3% supporting; FrontierCode 1.1 Main 31.8% (Cognition, chisel harness) is well under the frontier, and SciCode 51.6–52% and DeepSWE 63.4% sit under their 55%/74% references.
- **Cost efficiency: 95/100.** Z.ai list $0.15/$0.50 per 1M, limited-time promo $0.075/$0.25, blended ~$0.10/M and third-party hosts from $0.026/$0.93 — all at or beyond the ~97–99 ($0.10/$0.20) anchor; the ~306 GiB FP8 self-hosting footprint and ~49 tok/s throughput are the practical offsets.
- **Overall Score: 84/100.** (82+84+95+85+76)/5 = 84.4 → 84 — the best-value agentic model of its generation: GDPval-AA 1773 Elo (#1), Toolathlon 78.4%, AutomationBench 48.8%, GPQA 91.2%, 1M multimodal context, open weights, at ~$0.10 blended per 1M; AA's current independent reads (Index 42, TB 4.0 33%, FrontierCode 31.8%), the vendor-run evals and DeepSWE 63.4% are the gaps.

---

## Update 2026-10-08 (6-day re-research)

ARC Prize, Cognition, Epoch AI and AA's current-page rows found:

- ARC-AGI-2 (semi-private, ARC Prize official leaderboard, 2026-10-01): **65.8%** (GLM-5.3-Flash Max) — fills the ARC-AGI-2 gap; mid-tier vs the 77–95% frontier
- FrontierCode 1.1 Main (Cognition, chisel harness, 100 tasks, mean@5, 2026-10-05): **31.8%** — fills the FrontierCode gap; well under the frontier (Fable 5.1 53.4% Main, Opus 5.5 53.4% Main / 63.6% Extended)
- FrontierMath Tier 4 v2 (Epoch AI, private set, run 2026-08-27): **17.1%** — fills the FrontierMath gap
- GPQA Diamond (Epoch AI Inspect harness, 198 Q, run 2026-08-26): **90.2%** — independent confirmation of AA's 91.2%
- AA's current comparison page (vs GLM-5.3 Max): Intelligence Index **42** (Max 45), GDPval-AA v2.1 **1647** (Max 1653), AutomationBench-AA **60%** (Max 62%), Terminal-Bench 4.0 **33%** (Max 42%), SciCode **52%** (Max 59%), HLE **40%** (Max 42%), GDP.pdf 15%, CritPt 15%, AA-Omniscience **7** (Max 14), AA-LCR v1.1 80%; cost per task $0.25 (Max $2.01), cost to run the Intelligence Index $280 (Max $2,503), 51 tok/s, 1035s per task
- License note: SinoAIHub reads the GitHub repo metadata as **Apache-2.0** (the README has no separate weights-license section) — the "MIT" in the model card line should be verified against the HF card before reuse
- **Scores revised**: Tool 84→82 (TB 4.0 33% is far under the frontier), Reasoning 86→84 (AA's current Index reads 42 vs the vendor-cited 57; HLE 40% no-tools, FrontierMath T4 17.1%, Omniscience 7), Coding 78→76 (FrontierCode Main 31.8%), Overall 86→84 ((82+84+95+85+76)/5 = 84.4)

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08)
- Method: public internet research (Z.ai GLM-5.3-Flash launch blog, HF model card via Benchgen, Artificial Analysis via OpenRouter, The Decoder via Traictory, DataCamp); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_5_3_Flash.md`, using the same headings.
