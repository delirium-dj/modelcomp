# GLM 5.1 Coding — findings by GLM 5.3

- Source: Z.AI (`glm-5.1`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1 Coding
- **Short description:** Z.AI's open-weights GLM-5.1 snapshot (released **2026-04-07** — resolved) — the GLM-5-family generation focused on coding and agentic tool use, between GLM-5 (Feb) and GLM-5.2 (Jun). Second pass adds the settled ladder (thinking best **56.6 #185/761**) and it cuts both ways: the **τ³ 70.6% vendor-era claim collapses to the AA-measured 13.6% #122** — the exact pattern this cycle recorded for MiMo-V2.5-Pro (72.9→9.9) and Qwen3.6-Plus (70.7→20.8) — while new elite rows surface: **SWE-bench Verified (Epoch) 74.2% #16, AIME 2026 95.8% #13, non-hallucination 70.0% #41 at thinking, IFBench 76.3% #22**, and a 12-provider hosted floor at **$0.966/$3.04**. Top use case: pinned-snapshot open-weights coding agent — GLM 5.2/5.3 supersede it at the same list price.
- **Provider / access:** OpenCode Zen `opencode/glm-5.1` (OpenAI-compatible Chat Completions, $1.40/$4.40); Z.AI API; **12 OpenRouter providers — StreamLake fp8 $0.966/$3.04 (floor), Chutes $0.980/$3.08, SiliconFlow $1.19/$3.74, AtlasCloud $1.26/$3.96**, plus Friendli/Baidu/GMI/Nebius/Novita/Phala at list; open weights `zai-org/GLM-5.1` (HF).
- **Release / knowledge:** **2026-04-07** (BenchLeader); knowledge cutoff not stated publicly.
- **IDs:** `opencode/glm-5.1` (no Free ID on Zen); `zai-org/GLM-5.1` (HF).
- **Context window:** **203K tokens** (confirmed across all 12 providers).
- **Modalities:** text in / text out (text-only; vision lives on the GLM-5V line); reasoning (thinking is the best config, by ~6 index points); tool calls; JSON mode not separately verified.
- **Pricing (as of 2026-10-13):** Zen/list $1.40 in / $4.40 out per 1M (cached read $0.26); **OpenRouter floor $0.966/$3.04**; blended $1.99/M at list ("pricier than most" — the floor undercuts it); 60 tok/s, 65 s first answer at thinking; $0.094 per agentic session.
- **Architecture:** open weights; parameters undisclosed in the sources found; GLM-5-family MoE design.

### Raw benchmarks found

> Second pass adds the settled BenchLeader ladder (best = thinking **56.6 #185/761**, trend 43→56→68 rising, last measured 2026-10-13). Category scores (thinking): **Instruction following 74 (best)**, Knowledge 62, Long context 62, Composite 59, Agents & tools 52, **Reasoning 49 (worst)**; not-stated: Reasoning 61, Coding 56, Human preference 66.

Agent / tool use:

- **τ²-Bench: 97.7% #9 (thinking — elite, confirmed)** — but **τ³-Banking: 13.6% #122 (thinking)** — **the first pass's 70.6% vendor-era claim collapses**, the third τ³ vendor-collapse this cycle (with MiMo and Qwen3.6-Plus); scored on the measured value
- **MCP Atlas: 75.6% #17** (updated from 71.8% — better); **TB Hard: 43.2% #41 (thinking)**; ITBench SRE 40.3% #19; APEX-Agents (Mercor) 40.9% #39; **Vending-Bench 2: 5634.4 #23**; ExploitBench 18.1% #7
- **GDPval-AA: 30.8% #132** (updated from 1181/30.2% — consistent weak); **HLAB: 0.0% #53**; Legal Research 27.9% #42; Finance 44.8% #48; **GBAEval: 0.0% #22**; **TB 4.0: 2.0% #111**; TB 2.1: Vals 56.9% #47 / AA 61.8% #89; Toolathlon: still unmeasured

Reasoning / knowledge:

- GPQA Diamond: Epoch **89.9% #45** (not-stated) / AA 86.8% #103 (thinking) / Vals 84.5% #50 — near-bar on Epoch, below it on AA/Vals (harness spread retained)
- HLE (AA): **30.1% #141 (thinking)** — below the 40% reference; the with-tools 52.3% vendor row retained; **CritPt: 4.6% #152** (very weak)
- Math: **AIME 2026: 95.8% #13; HMMT Feb 2026: 89.4% #14; AIME (Vals): 91.9% #21** — elite; OTIS 93.3% #54; FrontierMath T1-3 36.8% #60; ProofBench 22.2% #45 (weak); Apex 11.5% #20; SimpleBench 55.1% #39; Chess 19% #96
- **Honesty elite at thinking: AA-Omniscience non-hallucination 70.0% #41** (vs 36.4% #176 no-reasoning — effort buys honesty, the GLM-family pattern); accuracy 23.7% (honest, knows little); Omniscience 0.8 #123; SimpleQA 34.0% #52
- **AA II 26.1 #149** (confirms); ECI 149.8 #55; MMLU-Pro 86.9% #36; LegalBench 84.4% #31; CorpFin 64.5% #37; TaxEval 71.2% #78; CaseLaw 51.5% #47; MedScribe 72.3% #83; MedCode 41.6% #49
- **IFBench: 76.3% #22 (thinking)** — IF-74 is its best category

Coding:

- **SWE-bench Verified (Epoch): 74.2% #16** — elite (new); SWE-bench (Vals) **76.4% #35** (confirms); LiveCodeBench (Vals) **81.4% #60** (confirms); WeirdML 57.1% #55; **LMArena WebDev 1508 #54** / Coding 1512 #52 (decent preference)
- Caps: SciCode 43.8-44.8% #133-139 (below the 55% reference); **Vibe Code 31.5% #61** (confirms weak); **Code Migration 25.8% #39**; ProgramBench 0.0% #23; ALE 887.1 #60; TB 4.0 2.0% #111; SWE-bench Verified (official): still missing

Long context:

- 203K confirmed; **AA-LCR: 73.7% #167 (thinking)** — good measured retrieval; no MRCR/RULER rows.

Multimodal:

- Text in/out only (GLM-5 text line; vision ships separately in GLM-5V-Turbo).

Preference:

- Solid mid-good ranks: LMArena Text 1464 #56, **Multi-turn 1478 #44, Longer Queries 1479 #48**, Hard Prompts 1488 #51, Creative 1447 #46, IF 1461 #50, Maths 1476 #46.

### Normalized scores (1–100)

- **Tool use: 60/100.** Lowered from 74: the elite τ² 97.7% #9, MCP Atlas 75.6% #17, TB Hard 43.2% #41, ITBench #19, and Vending #23 hold — but the τ³ 70.6% vendor claim collapsed to 13.6% #122 (the cycle's third such collapse), GDPval 30.8% #132, HLAB 0.0% #53, GBAEval 0.0%, and TB 4.0 2.0% cap it hard.
- **Reasoning: 70/100.** Lowered from 76: GPQA 84.5-89.9% sits below/near the bar, HLE 30.1% #141, CritPt 4.6%, AA II 26.1 #149 — offset by elite competition math (AIME 2026 95.8% #13, HMMT 89.4% #14), the elite thinking-mode honesty (70.0% #41), and SimpleBench #39.
- **Context window: 70/100.** Held: 203K anchor tier; AA-LCR 73.7% #167 is good within it.
- **Multimodal: 15/100.** Held: text-only by design.
- **Coding: 68/100.** Lowered from 72: the new SWE-V Epoch 74.2% #16 is elite and LCB 81.4% #60 / WebDev 1508 #54 hold — but SciCode ~44% below the reference, Vibe 31.5% #61, Code Migration 25.8% #39, ProgramBench 0.0%, and TB 4.0 2.0% keep it under the family's 5.2/5.3 level.
- **Cost efficiency: 88/100.** Held: $1.40/$4.40 list at the ~88 anchor, with the $0.966/$3.04 OpenRouter floor and open weights adding the self-host path.
- **Overall Score: 57/100.** (60 + 70 + 70 + 15 + 68) / 5 = 56.6 → 57, down from 61. Best-fit: a pinned-snapshot open-weights coding agent — elite SWE-V-per-Epoch (#16) and AIME-2026-class math, genuinely good thinking-mode honesty (#41) and IF (#22), at a $0.97-floor price — but the τ³ vendor claim collapsed like its siblings', HLAB/GBAEval read zero, and GLM 5.2 (62.5 #76) and 5.3 (63.7 #57) strictly supersede it on the settled ladder; keep 5.1 only for pinned workloads.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-25 report (BenchLeader full 3-setting ladder as of 2026-10-13 aggregating Epoch AI Benchmarking Hub incl. SWE-bench Verified, Artificial Analysis, Vals AI, Scale AI SEAL incl. MCP Atlas, MathArena, Mercor APEX, Andon Labs, ExploitBench; 12 OpenRouter provider rows surfacing the $0.966/$3.04 floor; the τ³ 70.6%-vs-13.6% collapse documented as the cycle's third vendor-τ³ collapse alongside MiMo and Qwen3.6-Plus). Researched independently despite the shared vendor family — every number is third-party or officially published, not self-assessment.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
