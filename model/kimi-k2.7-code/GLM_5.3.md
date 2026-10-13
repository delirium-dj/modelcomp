# Kimi K2.7 Code — findings by GLM 5.3

- Source: Moonshot AI (`kimi-k2.7-code`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's first officially "coding-named" open-weights model — released **2026-06-12** (resolved) as a post-trained variant of the K2.6 base: **1T-parameter MoE, 32B active, modified MIT**, 262K context, a coding-first recipe with **~30% fewer thinking tokens than K2.6**, and MCP tool use as its calling card (it beat Claude Opus 4.8 on MCP Mark Verified at launch — "the benchmark closest to how real agent work happens" — aiautomationglobal). Second pass fills the gaps (τ³, GDPval normalized, DeepSWE, Vibe) and they landed weak; the open-weights price war also cut its floor. Top use case: MCP-driven coding agents at near-floor prices.
- **Provider / access:** OpenCode Zen `opencode/kimi-k2.7-code` (OpenAI-compatible Chat Completions); **12 OpenRouter providers** — Inceptron int4 **$0.671/$3.35**, CoreWeave int4 $0.71/$3.50 (143 tok/s), Nebius fp4 $0.95/$4.00 (160 tok/s), Moonshot AI, Alibaba, Cloudflare, SiliconFlow, NovitaAI, StreamLake, Venice, GMICloud; Hugging Face `moonshotai/Kimi-K2.7-Code`.
- **Release / knowledge:** **2026-06-12**; knowledge cutoff not stated publicly.
- **IDs:** `opencode/kimi-k2.7-code`; no Free ID on Zen (paid tier).
- **Context window:** **262K tokens** (confirmed across all 12 providers; two serve 256K).
- **Modalities:** text in / text out only; reasoning yes; tool calls (MCP-oriented); JSON mode per provider docs.
- **Pricing (as of 2026-10-13):** Zen $0.95 in / $4.00 out (cached read $0.19); **OpenRouter floor now $0.671/$3.35** (price history shows the summer cut); blended $1.71/M ("pricier than most" at list, but the floor undercuts); 74 tok/s reference, up to 160 tok/s on Nebius; $0.073 per agentic session.
- **Architecture:** 1T total / 32B active MoE (K2.6 base, post-trained); modified MIT; open weights.

### Raw benchmarks found

> Second pass adds the BenchLeader profile (best = not-stated **54.5 #231/760**, trend 45→53→61 rising, last measured 2026-10-08). Category scores: **Long context 65 (best)**, IF 63, Reasoning 59, Coding 53, Maths 53, Knowledge 52, Agents & tools 52, **Composite 45 (worst)**.

Agent / tool use:

- **τ²-Bench: 90.1% #66** (confirmed) — but **τ³-Banking: 20.2% #95** (gap filled; weak — the 2026 banking suite breaks the τ² story again)
- Terminal-Bench: 2.1 **67.0% #36 (Vals) / 67.4% #76 (AA)** (confirmed); TB Hard **44.7% #36** (good); **TB 4.0 (AA): 1.0% #121** (floor on the newest suite)
- **GDPval-AA: 26.9% #147** (updated from 1114 Elo / 26.3% — bottom-half, consistent)
- MCP Atlas 76%; **MCP Mark Verified 81.1%** (retained — the launch headline that beat Opus 4.8); Kimi Claw 24/7 46.9%; AA Agentic Index 22.5% (retained)
- **Vending-Bench 2: 5082.9 #30** (good); SkillsBench 50.0% #22; APEX-Agents 37.6% #42; GBAEval 0.8% #18; LiveBench Agentic 45.7% #53; Claw-Eval / Toolathlon: still unmeasured

Reasoning / knowledge:

- GPQA Diamond: Epoch 87.9% #61 / AA 89.6% #70 — below the 90% bar on both (confirmed)
- HLE: **35.0% #115** (below the 40% reference, confirmed); CritPt **10.0% #113** (weak, confirmed); SimpleBench 57.9% #34; LiveBench Reasoning 82.8% #45; Chess 21.0% #79
- Math: **OTIS 95.6% #39**; FrontierMath T1-3 54.0% #46 / **T4 12.2% #57** (weak); LiveBench Math 79.6% #62
- **Honesty poor: AA-Omniscience non-hallucination 17.6% #306** (accuracy 39.6% #123; index −10.2 #187 — confirms the 82.4% hallucination field); SimpleQA 36.5% #46
- AA Intelligence Index **25.8 #152** (confirmed); ECI 150.0 #54; LiveBench global 68.4% #58; DrugDiscoveryBench 35.3% #12

Coding:

- SWE-bench (Vals) **78.2% #30**; LiveCodeBench (Vals) **82.0% #56** (both confirmed); **Vibe Code v1.1: 47.2% #54** (gap filled; mid); LiveBench Coding 74.0% #54; WeirdML 54.1% #61; Surface Evolver 48.8% #19; Kimi Code Bench v2 62.0% (retained)
- New weak rows: **DeepSWE v1.1: 30.5% #62**; SciCode 47.5-47.8% #113-121 (below the 55% reference); Code Migration 25.4% #40; ProgramBench 0.0% #23; ALE-Bench 886.2 #61; FrontierCode 30.1% #28; TB 4.0 1.0% #121; LMArena WebDev 1473 #62
- **SWE-bench Verified (official): still no verified public score** (unchanged gap)

Long context:

- 262K window; **AA-LCR 79.3% #94** — good measured retrieval, and Long context 65 is its best BenchLeader category; no MRCR/RULER rows.

Multimodal:

- Text in/out only — no image, audio, or video rows exist (confirmed).

Instruction following:

- IFBench 63.1% #114; LiveBench Language 77.9% #40; LiveBench IF 56.3% #63.

### Normalized scores (1–100)

- **Tool use: 68/100.** Lowered from 78: the gaps filled in weak — τ³ 20.2% #95, GDPval 26.9% #147, GBAEval 0.8%, AA Agentic Index 22.5%, TB 4.0 1.0% — against the genuinely elite MCP credentials (Mark Verified 81.1%, Atlas 76%), τ² 90.1% #66, TB 2.1 67% #36, TB Hard #36, and Vending #30. The MCP-first pitch holds; the broader 2026 agent suites do not.
- **Reasoning: 68/100.** Lowered from 72: GPQA 87.9-89.6% sits below the bar, HLE 35.0% #115 and CritPt 10.0% miss the references, non-hallucination 17.6% #306 is poor, and FrontierMath T4 12.2% is weak — offset by OTIS 95.6% #39, SimpleBench #34, LiveBench Reasoning 82.8% #45, and good AA-LCR.
- **Context window: 73/100.** Raised from 72: 262K confirmed across 12 providers, with good measured retrieval (AA-LCR 79.3% #94) and Long context as its best category.
- **Multimodal: 15/100.** Held: text-only by design.
- **Cost efficiency: 90/100.** Raised from 88: the OpenRouter floor fell to **$0.671/$3.35** (Inceptron) with CoreWeave at $0.71/$3.50 and 143-160 tok/s available; ~30% fewer thinking tokens than K2.6 stretches the per-task dollar; open weights (modified MIT) for self-host.
- **Coding: 68/100.** Lowered from 74: SWE-V Vals 78.2% #30 and LCB 82.0% #56 hold and Vibe 47.2% #54 fills the open-ended gap at mid — but DeepSWE 30.5% #62 (new), SciCode ~47.5%, Code Migration 25.4%, ProgramBench 0%, ALE #61, and TB 4.0 1.0% cap it well below the open-weights frontier, and the official SWE-bench Verified row still doesn't exist.
- **Overall Score: 58/100.** (68 + 68 + 73 + 15 + 68) / 5 = 58.4 → 58, down from 62. Best-fit: a cheap MCP-specialist coding agent — elite MCP tool-use credentials (the Opus-4.8-beating Mark Verified row), good terminal-2.1 and 262K long-context at a $0.671/$3.35 floor — but its general reasoning, honesty, and 2026 agent suites (τ³, GDPval, TB 4.0, DeepSWE) measured bottom-tier. Route real MCP workloads to it; escalate everything else.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-25 report (BenchLeader profile as of 2026-10-08 aggregating Epoch AI Benchmarking Hub, Artificial Analysis, Vals AI, LiveBench, Mercor APEX, Andon Labs; 12 OpenRouter provider rows and price history to the $0.671/$3.35 floor; DDG-lite searches surfacing buildfastwithai/codersera/aiautomationglobal/aiunpacker/zharf/aitoolsreview launch coverage — the 2026-06-12 release date, 1T/32B K2.6-base architecture, ~30% thinking-token reduction, and the MCP Mark Verified win over Opus 4.8; first-pass rows retained where not contradicted); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
