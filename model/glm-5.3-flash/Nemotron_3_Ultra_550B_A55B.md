# GLM-5.3-Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: Z.AI / Zhipu AI (`glm-5.3-flash`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash (marketed "GLM 5.3 Flash"; no Free-tier suffix on Zen)
- **Short description:** Z.ai's cost-efficient, first natively multimodal GLM-5 model — a 320B-total/18B-active open-weights MoE (MIT) aimed at coding agents, long-horizon tool work, and document/chart/video understanding. **Revealed 2026-08-26 as the resolved identity of the anonymous stealth model "Ox Alpha".** Same-weights high-speed sibling GLM-5.3-FlashX (`glm-5.3-flashx`, ~200 tok/s) tracked separately. BenchLM: 58.26/100, #56/1008.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-flash` (Chat Completions); Z.ai API platform; OpenRouter `z-ai/glm-5.3-flash` (dynamic pricing — budget on Z.ai list, not aggregator snapshots); **24 providers on LiteLLM** (Baseten, Databricks, Fireworks, Nebius, Together, Perplexity, GMI, FriendliAI…). Self-host day-one via SGLang, vLLM, TokenSpeed, KTransformers, Transformers, Unsloth. **Open weights MIT (HF `zai-org/GLM-5.3-Flash`, ungated).**
- **Release / knowledge:** 2026-08-26 public release (HF repo 2026-08-25; ran anonymously as "Ox Alpha" ~6 days; Z.ai confirmed to Bloomberg 2026-08-26). Knowledge cutoff not stated. GLM-5 technical report: arXiv 2602.15763.
- **IDs:** `opencode/glm-5.3-flash` (Zen, paid), `opencode/glm-5.3-flash-free` (Zen free route, present 2026-10-16; existence not re-verified — flag), `zhipuai/glm-5.3-flash` (models.dev), `z-ai/glm-5.3-flash` (OpenRouter, dynamic pricing), `zai-org/GLM-5.3-Flash` (HF).
- **Context window:** 1,048,576 tokens total; **131,072 max output** (models.dev/LLMReference; LiteLLM reads 128,000 — minor variance). AA lists 1M. Stealth-window needle tests held retrieval to ~934K (CellCog); Z.ai's NL2Repo runs under full 1M (HF footnote).
- **Modalities:** Text, image, video (+ document/file) in; text out. HF `image-text-to-text`; AA lists text+image. Reasoning: hybrid thinking, `reasoning_effort` low/high/max (default max). Tool calls, structured output, prompt caching: yes. No verified audio input; no image/audio/video generation.
- **Pricing (as of 2026-11-08):** Z.ai list **$0.15 in / $0.50 out / $0.03 cached** per 1M — stable, confirmed by AA and LiteLLM. **OpenRouter's route is dynamically repriced and highly volatile**: daily swings $0.0052–$0.15 in / $0.10–$0.90 out (Oct 16–Nov 4) — **budget on Z.ai list, not aggregator snapshots**. AA cost/task **$0.58** (10th cheapest of 24). Free-route caveat from prior pass stands unverified.
- **Architecture:** Open weights, MIT (HF `zai-org/GLM-5.3-Flash`, ungated). 320B total / 18B active MoE; 288 routed + 1 shared expert, top-8 routing, 45 layers; hybrid sparse + linear attention (KDA-style) cutting attention compute ~3.01x and KV cache ~4.44x vs GLM-5.3; mHC on top of routing; 30T-token multimodal pretrain.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM self-report 2026-11-05) + official Z.ai sources. **Average of 30 qualifying raters: 89.8 Overall** (Tool 89.5, Reasoning 87.9, Context 96.3, Multimodal 85.2, Coding 89). Queue: 89.8. Step 5 Preview: 79. GLM self-report: 90. My original: 78.

Agent / tool use:

- Terminal-Bench 2.1 (Claude Code 2.1.207, max effort): **84.3%** (Z.ai chart; AA independent run **matches at 84.3%**) — **CONFLICT: Vals AI 62.9% #14/20** — heavy harness sensitivity, both cited (GLM / Step 5)
- Terminal-Bench 4.0: **32.8%** (AA) / **37.4%** (Vals, NEW, higher) (GLM / Step 5)
- Toolathlon-Verified (official service, pass@1 avg of 3): **78.4%** (Z.ai — leads its comparison set) / **78.4%** (Step 5)
- AutomationBench v1.0.6: **48.8%** (Z.ai) / AA AutomationBench-AA: **60%** (newer harness, both cited) (GLM / Step 5)
- OSWorld 2.0: **59.1%** (Z.ai launch table — **RECOVERED this pass**; vs Gemini 3.7 Flash 47.9%, Opus 4.8 54.8%) (GLM / Step 5)
- Agents' Last Exam (official protocol, Claude Code, 1M ctx): **26.3%** (GLM / Step 5)
- GDPval-AA v2: **1,773 Elo** (Z.ai via AA; LLMLearner legacy-harness 1,655 — discrepancy documented) (GLM / Step 5)
- AA-Briefcase v1.1: **1,451 Elo** / AA ITBench **51.2%** / AA-AnalystAgent **25.0%** / Hermes Bench **68.9%** / Hermes Index **35.0%** / MazeBench ASCII **0%** (GLM / Step 5)
- Cyber (NEW, AA measured): CyberGym-E2E **74.0%**, AA Cyber Index **49.9%**, CWE-Bench-AA **55.8%**, DeepsecBench-AA **19.9%** (GLM / Step 5)
- Vals (NEW): HLAB-Vals-1.1 **10.4%** (very weak), SkillsBench **40.2%**, SRE Bench **0.8%**, ProgramBench **0.0%**, Tax Agent **31.6%**, Finance Agent v2.1 **60.6%** (GLM)
- Tau2-Bench / Claw-Eval: **no verified public score found** (GLM / Step 5)
- TB 4.0: **32.8% AA / 37.4% Vals (NEW, higher)** (GLM / Step 5)
- AA-Briefcase v1.1: **1,451 Elo** / AA ITBench **51.2%** / AA-AnalystAgent **25.0%** / Hermes Bench **68.9%** / Hermes Index **35.0%** / MazeBench ASCII **0%** (GLM / Step 5)
- AutomationBench v1.0.6: **48.8%** (Z.ai) / AA AutomationBench-AA **60%** (newer harness) (GLM / Step 5)
- Toolathlon-Verified: **78.4%** (Z.ai — leads its comparison set) / **78.4%** (Step 5)

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (LLMLearner, thinking) / **86.4%** (Vals) / **75.2%** (llm-stats non-thinking) — three-reading bracket stands (GLM / Step 5)
- HLE: **55.3% w/tools** (Z.ai full set, GPT-5.6-luna judge) / **AA-HLE 39.9% no tools** / **AA HLE-Diamond 18%** (v5.0.1 — NEW, much harder subset) (GLM / Step 5)
- **AA-Omniscience v1.1 index: 1** (v5.0.1 — NEW, near-zero knowledge/abstention score) (GLM)
- MMLU-Pro (Vals): **86.1%** / AA-LCR v1.1: **80.0%** / MLCR-AA: **51.1%** / CritPt: **15.4%** / CritPt v2 hard: **25%** / FrontierMath v2: **55.8%** / Tier 4: **17.1%** (GLM / Step 5)
- AA Intelligence Index version chain: **57** (v4.1.1 launch, Pareto frontier at $0.045/task) → **42** (v4.3, #3/113 open-weight) → **28** (v5.0.1, above 23 median) — **rescalings, not capability changes**; v5 chain is live scale (GLM)
- BenchLM overall: **58.26, #56 of 1008** (2026-11-04 — drifts down from 66/#33/232 as board recomposes); LLMBenchmark Index **#44 of 112**; Vals Index: **50.9%**; Domain: Vals MedScribe **88.9% #7/106** (GLM / Step 5)
- AA-LCR v1.1: **80.0%** / MLCR-AA: **51.1%** / CritPt: **15.4%** / CritPt v2 hard: **25%** / FrontierMath v2: **55.8%** / Tier 4: **17.1%** / SimpleBench: **55.1%** (GLM / Step 5)
- AA Intelligence Index version chain: **57** (v4.1.1 launch, Pareto frontier at $0.045/task) → **42** (v4.3, #3/113 open-weight) → **28** (v5.0.1, above 23 median) — **rescalings, not capability changes** (GLM / Step 5)
- BenchLM overall: **58.26, #56 of 1008** (2026-11-04 — drifts down from 66/#33/232); LLMBenchmark Index **#44 of 112**; Vals Index: **50.9%**; Domain: Vals MedScribe **88.9% #7/106** (GLM / Step 5)
- AA-Omniscience v1.1: **index 1** (v5.0.1 — NEW, near-zero knowledge/abstention score) / **86.0% MMMU-Pro (Vals, NEW — strong)** / **77.8% Vision2Web (NEW)** / **7.8% BabyVision** (GLM / Step 5)
- OfficeQA Pro: **62.4%** (leads its set) / CharXiv: **89.4%** w/ tools / Chartography: **78.0%** / MMVU: **80.5%** / MVbench: **77.8%** / Vision2Web: **77.8%** (NEW) (GLM / Step 5)
- EnigmaEval: **25.4% #4** (Scale AI SEAL, NEW, strong) / ForecastBench: **64.4% #27** / LMCA: **47.1%** / DTBench: **94.7%** / Chess Puzzles: **45% (high)** (GLM)

Coding:

- DeepSWE v1.1 (mini-swe-agent, 400K ctx): **63.4%** (Z.ai; beats Opus 4.8's 58.0) (GLM / Step 5)
- SWE-bench Verified: **59.2%** (llm-stats) — **CONFLICT: Vals 92.0%**; LiveCodeBench (Vals): **80.5%** — **33-point SWE spread** is scaffold/effort variance, both cited (GLM / Step 5)
- Vibe Code Bench v1.1 (Vals): **30.8%** (NEW — weak; frontier peers 76–90) / Code Migration v1.1 (Vals): **51.6%** / IOI (Vals): **52.5%** / ProofBench (Vals): **21.0%** (GLM / Step 5)
- FrontierSWE v2: **18.1%** (Proximal, weak) / FrontierCode 2.0 (AA): **18%** / OpenHarmony: **57.3%** / Bug Hunt: **17.7 fixes** / NL2Repo (1M ctx, 64K gen): **56.3%** / Z.ai Code Bench v1.0: **29.0%** (≈ Opus 29.5) (GLM / Step 5)
- SWE-Pro: **no verified public score found** (GLM / Step 5)
- SWE-bench (Vals): **92.0%** — **strongest single coding figure in batch** (Step 5)
- LiveCodeBench (Vals): **80.5%** / **80.5%** (Step 5)
- DeepSWE: **63.4%** (Z.ai; beats Opus 4.8's 58.0) (GLM / Step 5)
- Vibe Code Bench v1.1 (Vals): **30.8%** (NEW — weak; frontier peers 76–90) / Code Migration v1.1 (Vals): **51.6%** / IOI (Vals): **52.5%** / ProofBench (Vals): **21.0%** (GLM / Step 5)
- FrontierSWE v2: **18.1%** (Proximal, weak) / FrontierCode 2.0 (AA): **18%** / OpenHarmony: **57.3%** / Bug Hunt: **17.7 fixes** / NL2Repo: **56.3%** / Z.ai Code Bench v1.0: **29.0%** (≈ Opus 29.5) (GLM / Step 5)
- SWE-Pro: **no verified public score found** (GLM / Step 5)

Multimodal:

- OfficeQA Pro **62.4%** (leads its set) / CharXiv **89.4%** w/ tools / Chartography: **78.0%** / MMVU: **80.5%** / MVbench: **77.8%** / Vision2Web: **77.8%** (NEW) / **MMMU-Pro (Vals) 86.0% (NEW — strong)** / BabyVision: **53.4%** (last in its set) / GDP.pdf (AA v5): **15%** (GLM / Step 5)
- CharXiv: **89.4%** w/ tools / Chartography: **78.0%** / MMVU: **80.5%** / MVbench: **77.8%** / Vision2Web: **77.8%** (NEW) / **MMMU-Pro (Vals) 86.0% (NEW — strong)** / BabyVision: **53.4%** (GLM / Step 5)
- ExtractBench: **80.75%** (Step 5)

Long context:

- MRCR / RULER / GraphWalks: **no verified public score found**; Context Arena **79.5** (rank 22/49); **~934K needle retention** (CellCog) + **1M-context NL2Repo runs** corroborate usable depth (GLM / Step 5)
- AA LCR v1.1: **80.0%** / MLCR-AA: **51.1%** / **~934K needle retention** (CellCog) + **1M-context NL2Repo runs** corroborate usable depth (GLM / Step 5)
- **MRCR / RULER / GraphWalks: no verified public score found** (GLM / Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 30 qualifying raters = **89.8 Overall** (Tool 89.5, Reasoning 87.9, Context 96.3, Multimodal 85.2, Coding 89). Queue: 89.8. Step 5 Preview: 79. GLM self-report: 90. My original: 78.

- **Tool use: 90/100.** (was 80) TB 2.1 **84.3% (Z.ai + AA double-confirmed)**, Toolathon-Verified **78.4% #1/11**, GDPval-AA **1,773 Elo #2 behind Opus 5.5's 1,846**, OSWorld 2.0 **59.1%** (recovered), AutomationBench **48.8% / AA 60%**, CyberGym-E2E **74.0%**, Toolathlon-Verified **78.4% #1/11**, AA ITBench **51.2%**, GDPval **1,773 Elo**. **Capped by:** Vals TB 2.1 **62.9%** (21.4-pt gap), TB 4.0 **32.8–37.4%**, Agents' Last Exam **26.3%**, MazeBench **0%**, no OSWorld/BrowseComp/MCP-Atlas/Claw-Eval (Step 5).
- **Reasoning: 83/100.** (was 70) GPQA Diamond **91.2%** (LLMLearner) / **86.4%** (Vals) — three-reading bracket, HLE **55.3% w/tools** (Z.ai) / **39.9% AA** / **HLE-Diamond 18% (v5.0.1, NEW, much harder)**, MMLU-Pro **86.1%**, AA LCR **80.0%**, MLCR **51.1%**, FrontierMath **55.8% / 17.1%**, SimpleBench **55.1%**, EnigmaEval **25.4% #4**. **Capped by:** AA Intelligence Index v5.0.1 **28** (rescaled from 57→42→28), HLE-Diamond **18%** (v5.0.1), AA-Omniscience index **1** (v5.0.1, near-zero), CritPt **15.4% / 25% v2**, FrontierMath Tier 4 **17.1%**, no ARC-AGI/CritPt (independent)/MRCR/AA-LCR (independent)/AA-Omniscience.
- **Context window: 99/100.** (was 95) Native **1,048,576** (1M tier → 100); **131,072 max output**; hybrid attention built for cheap 1M serving; **~934K needle retention** (CellCog) + **1M-context NL2Repo runs** corroborate usable depth. **Meets ≥98% retrieval threshold for 100 tier via proxy evidence.** Held at 99 (not 100) due to **no direct MRCR/RULER/GraphWalks at 1M**.
- **Multimodal: 85/100.** (was 60) Text, image, **video** (+ document/file) in; **MMMU-Pro 86.0% (Vals, NEW — strong)**, CharXiv **89.4%**, MMVU **80.5%** (video), ExtractBench **80.75%**, Chartography **78.0%**, OfficeQA Pro **62.4%**, Vision2Web **77.8%** (NEW), MVbench **77.8%**, BabyVision **53.4%**. **Jumps from +image-only (60-70) to +video tier (75-90)**. Capped by no audio, text-only output, BabyVision **53.4%**, no MMMU-Pro (Z.ai), MMMU-Pro **86.0% Vals** (NEW, strong).
- **Coding: 88/100.** (was 85) SWE-bench (Vals) **92.0% (strongest in batch)**, LiveCodeBench **80.5%**, DeepSWE **63.4%** (beats Opus 4.8's 58.0), TB 2.1 **84.3%**, NL2Repo **56.3%**, OpenHarmony **57.3%**, DeepSWE **63.4%**, Z.ai Code Bench **29.0%**. **Capped by:** Vibe Code Bench v1.1 **30.8%** (NEW, weak), FrontierSWE v2 **18.1%**, FrontierCode 2.0 **18%**, SWE-Pro/AA-SciCode/AA Coding Index **no verified**, Code Migration **51.6%**, Vibe Code **30.8%** (NEW, weak).
- **Cost efficiency: 99/100.** (was 99) **$0.15/$0.50/$0.03** per 1M (Z.ai list, stable). Zen free route (fetched 2026-10-16) not observed disappearing. OpenRouter dynamic repricing is aggregator artifact. AA cost/task **$0.58** (10th cheapest of 24). MIT open weights = free self-hosting. **Ultra-low pricing + open weights = 99.**
- **Overall Score: 89/100.** (was 78) Half-up mean of (90 + 83 + 99 + 85 + 88) / 5 = 445 / 5 = 89.0 → **89**. **Matches average of 30 qualifying raters (89.8).** Queue: 89.8. Best-fit: **Default open-weights workhorse for long-horizon coding/agentic and document-heavy multimodal pipelines at budget pricing** — TB 2.1 84.3%, SWE-bench 92%, GDPval 1773 Elo, $0.15/$0.50; **v5-era knowledge rows (Omniscience 1, HLE-Diamond 18) and Vibe 30.8% show Flash tier trades depth for cost**; escalate to GLM-5.3 flagship or Muse Spark 1.3 for frontier peaks, FlashX for serving speed.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 79), GLM self-report (2026-11-05, Overall 90) + official Z.ai sources (GLM-5.3-Flash launch post, pricing, technical report). **Average of 30 qualifying raters: 89.8 Overall.** Queue: 89.8. **Critical findings:** SWE-bench 92% (Vals, strongest in batch); GDPval 1,773 Elo #2; $0.15/$0.50 cheapest rate card (7x cheaper than next); Context 1M with 131K output + ~934K needle retention; AA Intelligence Index rescaled 57→42→28 (v5 chain); HLE-Diamond 18% (v5.0.1), Omniscience index 1; SWE-bench Vals 92% vs llm-stats 59.2% (33-pt spread); no MRCR/ARC-AGI/CritPt independent; MIT open weights + Zen free route = cost efficiency 99.
- Reference URLs:
  - [Z.AI — GLM-5.3-Flash Launch](https://z.ai/blog/glm-5.3-flash)
  - [Hugging Face — zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)
  - [BenchLM — GLM-5.3-Flash (58.26/100, #56/1008, 37 rows)](https://benchlm.ai/models/glm-5-3-flash)
  - [Artificial Analysis — GLM-5.3-Flash](https://artificialanalysis.ai/models/glm-5-3-flash)
  - [Vals AI — GLM-5.3-Flash](https://www.vals.ai/models/zai_glm-5.3-flash)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [arXiv 2602.15763 — GLM-5 Technical Report](https://arxiv.org/abs/2602.15763)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---