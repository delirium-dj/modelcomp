# GLM 5.3 Flash — findings by GLM 5.3 Flash

- Source: Z.AI / Zhipu AI (`glm-5.3-flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-11-05 (prior passes 2026-09-17→10-06, 2026-10-16): AA's v5.0.1 rows add
> weaker knowledge signals (HLE-Diamond 18%, AA-Omniscience index 1, Index rebased
> 57→42→28 across versions) and Vals adds mixed coding rows (Vibe v1.1 30.8% weak vs
> SWE-bench 92.0% strong) — Reasoning 85→83, Coding 90→88. A missed vendor OSWorld 2.0
> 59.1% row is recovered and Vals MMMU-Pro 86.0% added. Overall holds at 90 (89.6).

## Model card

- **Name:** GLM-5.3-Flash (marketed "GLM 5.3 Flash"; no Free-tier suffix on Zen)
- **Short description:** Z.ai's cost-efficient, first natively multimodal GLM-5 model — a 320B-total/18B-active open-weights MoE (MIT) aimed at coding agents, long-horizon tool work, and document/chart/video understanding. Revealed 2026-08-26 as the resolved identity of the anonymous stealth model "Ox Alpha". Same-weights high-speed sibling GLM-5.3-FlashX (`glm-5.3-flashx`, ~200 tok/s) tracked separately.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-flash` (Chat Completions); Z.ai API platform; OpenRouter `z-ai/glm-5.3-flash` (dynamic pricing — see below); **24 providers on LiteLLM** (Baseten, Databricks, Fireworks, Nebius, Together, Perplexity, GMI, FriendliAI…, input $0.06–$0.272). Self-host day-one via SGLang, vLLM, TokenSpeed, KTransformers, Transformers, Unsloth.
- **Release / knowledge:** 2026-08-26 public release (HF repo 2026-08-25; ran anonymously as "Ox Alpha" ~6 days; Z.ai confirmed to Bloomberg 2026-08-26). Knowledge cutoff not stated in sources consulted. GLM-5 technical report: arXiv 2602.15763.
- **IDs:** `opencode/glm-5.3-flash` (Zen, paid), `opencode/glm-5.3-flash-free` (Zen free route, present 2026-10-16; existence not re-verified this pass — flag), `zhipuai/glm-5.3-flash` (models.dev), `z-ai/glm-5.3-flash` (OpenRouter), `zai-org/GLM-5.3-Flash` (HF).
- **Context window:** 1,048,576 tokens total; 131,072 max output (models.dev/LLMReference; LiteLLM reads 128,000 — minor variance noted); AA lists 1M. Stealth-window needle tests held retrieval to ~934K (CellCog); Z.ai's NL2Repo runs under full 1M (HF footnote).
- **Modalities:** text + image + video (+ document/file) in, text out (HF `image-text-to-text`; AA lists text+image). Reasoning: hybrid thinking, `reasoning_effort` low/high/max (default max). Tool calls, structured output, prompt caching: yes. No verified audio input; no image/audio/video generation.
- **Pricing (as of 2026-11-05):** Z.ai list **$0.15 in / $0.50 out / $0.03 cached** per 1M — stable and confirmed by AA and LiteLLM this pass. **OpenRouter's route is dynamically repriced and highly volatile**: daily swings from $0.0052 to $0.15 input and $0.10 to $0.90 output between Oct 16 and Nov 4 (gpudiff/ModelBank logs; taskcents logged a "+57% output increase" on Nov 1 against its own blended read) — budget on the Z.ai list, not aggregator snapshots. AA cost per Index task $0.58 (10th cheapest of 24). Free-route caveat from the prior pass stands unverified.
- **Architecture:** open weights, MIT (HF `zai-org/GLM-5.3-Flash`, ungated). 320B total / 18B active MoE; 288 routed + 1 shared expert, top-8 routing, 45 layers; hybrid sparse + linear attention (KDA-style) cutting attention compute ~3.01x and KV cache ~4.44x vs GLM-5.3; mHC on top of routing; 30T-token multimodal pretrain.

### Raw benchmarks found

> Z.ai chart rows are vendor-reported (harnesses footnoted in the launch post); independent rows carry their sources. Serving profile: AA measures 60–71 tok/s output, TTFT 1.55s, but **24.7 minutes per Index task** (#19/21 — slow) and 124M output tokens across the Index (verbose; 134K output tokens/task, 103K reasoning tokens/task).

Agent / tool use:

- Terminal-Bench 2.1 (Claude Code 2.1.207, max effort): **84.3%** (Z.ai chart; AA independent run matches at 84.3%) — CONFLICT: **Vals AI 62.9%** (#14/20) — heavy harness sensitivity, both cited
- Terminal-Bench 4.0: **32.8%** (AA) / **37.4%** (Vals — NEW, higher)
- Toolathlon-Verified (official service, pass@1 avg of 3): **78.4%** (Z.ai — leads its comparison set)
- AutomationBench v1.0.6: **48.8%** (Z.ai) / AA AutomationBench-AA: **60%** (newer harness, both cited)
- OSWorld 2.0: **59.1%** (Z.ai launch table — RECOVERED this pass; vs Gemini 3.7 Flash 47.9, Opus 4.8 54.8)
- Agents' Last Exam (official protocol, Claude Code, 1M ctx): **26.3%**
- GDPval-AA v2: **1773 Elo** (Z.ai via AA; LLMLearner legacy-harness reading 1655 — discrepancy documented)
- AA-Briefcase v1.1: **1451 Elo**; AA ITBench **51.2%**; AA-AnalystAgent 25.0%; Hermes Bench **68.9%** / Hermes Index **35.0%**; MazeBench ASCII **0%**
- Cyber (NEW, AA measured): CyberGym-E2E **74.0%**, AA Cyber Index **49.9%**, CWE-Bench-AA **55.8%**, DeepsecBench-AA **19.9%**
- Vals (NEW): HLAB-Vals-1.1 **10.4%** (very weak), SkillsBench 40.2%, SRE Bench 0.8%, ProgramBench 0.0%, Tax Agent 31.6%, Finance Agent v2.1 60.6%
- Tau2-Bench / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (LLMLearner, thinking) / **86.4%** (Vals) / 75.2% (llm-stats non-thinking) — three-reading bracket stands
- HLE: **55.3% with tools** (Z.ai full set, GPT-5.6-luna judge) / AA-HLE 39.9% (no tools) / **AA HLE-Diamond 18%** (v5.0.1 — NEW, much harder subset)
- **AA-Omniscience v1.1 index: 1** (v5.0.1 — NEW, near-zero knowledge/abstention score)
- MMLU-Pro (Vals): **86.1%**; AA-LCR v1.1 **80.0%**; MLCR-AA 51.1%; CritPt 15.4% / CritPt v2 hard 25%; FrontierMath v2 **55.8%** / T4 **17.1%**; SimpleBench 55.1%
- Artificial Analysis Intelligence Index version chain: **57** (v4.1.1 launch, Pareto frontier at $0.045/task) → **42** (v4.3, #3/113 open-weight) → **28** (v5.0.1, above the 23 median) — rescalings, not capability changes; the v5 chain is now the live scale
- BenchLM overall: **58.26, #56 of 1008** (2026-11-04 — drifts down from 66/#33/232 as the board recomposes); LLMBenchmark Index **#44 of 112**; Vals Index **50.9%**; Domain: Vals MedScribe **88.9%** (#7/106)

Coding:

- DeepSWE v1.1 (mini-swe-agent, 400K ctx): **63.4%** (Z.ai; beats Opus 4.8's 58.0)
- SWE-bench Verified: **59.2%** (llm-stats) — CONFLICT: **Vals 92.0%**; LiveCodeBench (Vals) **80.5%** — the 33-point SWE spread is scaffold/effort variance, both cited
- Vibe Code Bench v1.1 (Vals): **30.8%** (NEW — weak; frontier peers run 76–90); Code Migration v1.1 (Vals): **51.6%**; IOI (Vals): **52.5%**; ProofBench (Vals): **21.0%**
- FrontierSWE v2: **18.1%** (Proximal, weak); FrontierCode 2.0 (AA): 18%; OpenHarmony **57.3%**; Bug Hunt **17.7 fixes**; NL2Repo (1M ctx, 64K gen): **56.3%**; Z.ai Code Bench v1.0: **29.0%** (≈ Opus 29.5)
- SWE-Pro: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no verified public score found; Context Arena **79.5** (rank 22/49); ~934K needle retention (CellCog) + 1M-context NL2Repo runs corroborate usable depth

Multimodal:

- OfficeQA Pro **62.4** (leads its set); CharXiv **89.4** w/ tools; Chartography **78.0**; MMVU **80.5**; MVbench **77.8**; Vision2Web **77.8** (NEW); **MMMU-Pro (Vals) 86.0%** (NEW — strong); BabyVision **53.4** (last in its set); GDP.pdf (AA v5) 15%

### Normalized scores (1–100)

- **Tool use: 92/100.** Unchanged — TB2.1 84.3% (double-confirmed), Toolathlon 78.4 (#1/11), GDPval 1773, and the recovered OSWorld 2.0 59.1% hold the band; new TB4.0 33–37% is mid-tier; capped by Agents' Last Exam 26.3, HLAB 10.4%, and the 24.7-min/task serving profile.
- **Reasoning: 83/100.** CHANGED from 85 — the v5.0.1 rows are materially weaker than what the prior score assumed: HLE-Diamond 18% (vs the 39.9% standard-set HLE), AA-Omniscience index 1, and the Index rebase chain 57→42→28; GPQA 86.4–91.2 and MMLU-Pro 86.1 keep it upper-mid rather than frontier-adjacent.
- **Context window: 100/100.** Unchanged — native 1,048,576 window (1M tier → 100) with 131,072 max output, hybrid attention built for cheap 1M serving, ~934K needle retention and full-1M NL2Repo runs.
- **Multimodal: 85/100.** Unchanged — first natively multimodal GLM-5; the new Vals MMMU-Pro 86.0% and Vision2Web 77.8% strengthen the evidence behind the existing band; capped by BabyVision 53.4, no audio, text-only output.
- **Coding: 88/100.** CHANGED from 90 — Vals Vibe Code Bench v1.1 30.8% is the first measured weak row in the suite (frontier peers 76–90), joining FrontierSWE v2 18.1%; balanced against Vals SWE-bench 92.0%, LiveCodeBench 80.5%, DeepSWE 63.4% and TB2.1 84.3%, the band drops but stays high.
- **Cost efficiency: 100/100.** Unchanged — the Zen free route (fetched 2026-10-16) has not been observed disappearing, and the paid list ($0.15/$0.50/$0.03) is stable across Z.ai, AA and LiteLLM; OpenRouter's dynamic repricing is documented as an aggregator artifact, not a list change. Free-tier caveats (training use, no ZDR, limited-time by precedent) stand.
- **Overall Score: 90/100.** (92 + 83 + 100 + 85 + 88) / 5 = 448/5 = 89.6 → 90 (unchanged; mean dips 90.4→89.6). Best fit: still the default open-weights workhorse for long-horizon coding/agentic and document-heavy multimodal pipelines at budget pricing — with the honest caveat that the v5-era knowledge rows (Omniscience 1, HLE-Diamond 18) and Vibe 30.8% show where the Flash tier trades depth for cost; escalate to GLM-5.3 flagship or Muse Spark 1.3 for frontier peaks, FlashX for serving speed.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research (3 web searches: Z.ai launch post + footnoted harnesses, AA model/comparison pages (v5.0.1 rows, serving profile, provider economics), OpenRouter + LiteLLM 24-provider + gpudiff/ModelBank/taskcents price-volatility logs, BenchLM 2026-11-04 refresh, Vals AI suite (Vibe, TB4.0, IOI, MMMU-Pro, Vals Index), LLMBenchmark Index, benchgap measured-vs-estimated screen, Inferama scrutiny piece); index-version chain documented rather than averaged; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
