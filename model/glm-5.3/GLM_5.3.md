# GLM 5.3 — findings by GLM 5.3

- Source: Z.AI (`glm-5.3`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3
- **Short description:** Z.AI's flagship open-weights model (GLM-5 family) — announced **2026-08-14**, weights/API GA ~2026-08-18 (BenchLeader; both dates flagged), built by **reusing the 743-billion-parameter GLM-5.2 MoE base with zero new parameters and spending everything on post-training** (the-agent-report — correcting the first pass's 753B figure). Reviewer consensus: "the top open-weights coding model" on post-training alone. Second pass confirms most first-pass rows (they were AA-sourced and settled well) and adds: **MCP Atlas 84.2% #5, τ³-Banking 50.3% #4 of 201 (its "where it wins" row), Vibe Code 78.1% #24, TB 4.0 38.9-41.9% #10-28, SciCode 59% #14** — against a thin professional-agent tail (Harvey LAB 0.3% #19) and ProgramBench 1.5%. **A 30+-provider OpenRouter market has driven the input floor to $0.079-$0.14** (inference.net/Wafer/Makora fp4). Top use case: long-horizon agentic software engineering and tool execution.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3` (OpenAI-compatible Chat Completions, $1.40/$4.40); Z.AI API; open weights `zai-org/GLM-5.3` on HF (license `glm-5.3`, BF16/FP8); **30+ OpenRouter providers** — cheapest: inference.net $0.08/$4.40 and Wafer $0.079/$4.80 (fp4), Makora $0.14/$4.40, Inceptron $0.60/$2.20, Decart $1.02/$3.22, plus Baseten/Fireworks/Together/Crusoe/Parasail/DeepInfra/SiliconFlow/Mistral (nvfp4) at $1.40/$4.40-class; SGLang/vLLM/TokenSpeed/KTransformers/Unsloth recipes; Ascend NPU support.
- **Release / knowledge:** announced **2026-08-14**; GA/weights ~2026-08-18 (BenchLeader); technical report arXiv 2602.15763; knowledge cutoff not stated publicly.
- **IDs:** `opencode/glm-5.3` (no Free ID on the paid listing; a free promotional sibling folder exists at `glm-5.3-free`).
- **Context window:** **1M tokens** (confirmed by BenchLeader and all 30+ provider rows).
- **Modalities:** text in / text out (vision lives on the separate GLM-5V-Turbo line; the lone AA-3D 782 #18 row is text-side); reasoning (`reasoning_effort` low/high/max — **max is the best-measured config and carries nearly every strong row**); tool calls; JSON mode not separately verified.
- **Pricing (as of 2026-10-13):** Zen $1.40 in / $4.40 out per 1M (cached read $0.26); **OpenRouter floor $0.079-$0.14 input** across the 30+-provider open-weights market; blended $2.15/M at list ("pricier than most" — but the floor undercuts it); 66 tok/s at max, up to 165 tok/s on Baseten Fast fp8; $2.01 per full Intelligence Index run at max; effort economics: max costs 2.4× low for +7.9 index (6.4 pts/doubling — the steepest effort-value slope measured this cycle).
- **Architecture:** **743B-parameter MoE with sparse attention (`glm_moe_dsa`)**, same base as GLM-5.2 with all gains from post-training (the 753B first-pass figure corrected per third-party reporting); ~30% fewer output tokens per task than GLM-5.2 at higher scores (docs.z.ai: 34.5% at ~75K tokens vs 5.2's 23.4% at 96K).

### Raw benchmarks found

> Second pass adds the full BenchLeader ladder (best = max **63.7 #56/760**, trend 53→61→69 still rising, last measured 2026-10-08). Category scores (max): **Composite 80 (best)**, Reasoning 69, Human preference 67, Long context 65, Coding 62, Maths 61, Knowledge 59, **Agents & tools 58 (worst)**. "Where it wins": **τ³-Banking 50.3% #4 of 201**.

Agent / tool use:

- **τ³-Banking (AA): 50.3% #4 of 201** — top-5, clearing the ~50% frontier reference (confirmed); **MCP Atlas: 84.2% #5** — gap filled, elite; **GDPval-AA: 57.5% #17 (max)** (the 1769-Elo/57.3% vendor claim corroborated; the low-effort read is 41.1% #95)
- **Tax Agent: 73.1% #5; Legal Research: 49.0% #7; ITBench SRE: 46.1% #12; CyberBench: 72.1% #14; APEX-Agents: 56.6% #17; Vending-Bench 2: 8163.6 #11; AutomationBench: 62.2% #20; EnterpriseOps-Gym: 36.4% #12; CWE-Bench: 55.8% #8; DeepSec-Bench: 24.3% #8**
- Terminal: **TB 2.1: AA 83.9% #34 / Vals 71.5% #26** (the vendor's 88.2% not fully reproduced — spread retained); **TB 4.0: AA 41.9% #28 / Vals 38.9% #10 — strong on the newest suite**; TB public 41.8% #47; **TB Science 4.3-9.5% #17-19** (weak); Toolathlon 73.0% (retained); **Harvey LAB-AA: 0.3% #19 / HLAB 8.3% #19** — the professional-legal-agent floor; GDP.pdf 11.2% #47; Briefcase 1509 #27; LMArena Agent 2.1 #23; Claw-Eval / SWE Atlas: still unmeasured
- Cyber: vendor CyberGym **84.5%** (leads GPT-5.6 Sol's 83.6% — corroborated by buildfastwithai; 2,400+ vulnerabilities found across 269 OSS projects) vs **CyberGym e2e (AA harness): 29.0% #8** — a different harness, both retained; AA Cyber Index #10

Reasoning / knowledge:

- GPQA Diamond: Epoch **90.9% #33 (max)** / AA **91.7% #45** / Vals 88.1% #34 — clears on Epoch+AA
- **HLE (AA): 42.3% #68 (max)** — clears the 40% reference at max (36.6% #105 at low); the with-tools 62.5% vendor row retained
- **CritPt: 19.1% #63 (max)** (mid-weak); **BTF-3: 14.9% #1**; MysteryMechanism 23.0% #15; Mystery Game 33.0% #25; LMCA 55.5% #31; DTBench 87.7% #83; Chess 21.0% #79
- Math: FrontierMath T1-3 **68.8% #26** / T4 29.3% #36; OTIS 91.1% #65; **ProofBench 49.0% #31** (strong); LiveBench Math 87.9% #44; LMArena Maths 1492 #25
- **Honesty good: AA-Omniscience non-hallucination 70.5% #39 (max)** (36.0% #179 at low — effort buys honesty here, unlike most 2026 models); accuracy 33.9% #155; Omniscience 14.3 #82; SimpleQA 41.0% #42
- **AA Intelligence Index 44.8 #38 (max)**; **Vals Index 53.5 #16**; ECI 155.6 #27; AA Openness 33.3 #33; MMLU-Pro 86.8% #37; LegalBench 84.8% #27; **MedScribe 88.8% #9**; Public Benefits 68.5% #7; TaxEval 72.4% #64; EMB 56.3% #40; MedCode 42.9% #46

Coding:

- **SWE-bench (Vals): 95.4% #5** — elite, confirmed; **SciCode: 59.0% #14-16 (max)** — above the 55% reference (the low-effort read is 42.0% #143: effort buys 17 points); **Vibe Code v1.1: 78.1% #24** — gap filled, strong (a 1-100 variant reads 20.0% #8 — variant spread flagged); **IOI: 68.4% #12**; WeirdML 75.4% #29; **LMArena WebDev: 1622 #21** (strong preference); LMArena Coding 1520 #34; LCB 80.5% #65; DeepSWE 69.0% #16; FrontierCode 40.1% #14-23; ALE-Bench 1317.4 #26; Code Migration 44.2% #20; CursorBench 42.6% #20
- Weak spots: **ProgramBench 1.5% #9** (dreadful); FrontierSWE 30.2% #9; TB Science weak; **SWE-bench Verified (official): still no verified public score** (unchanged); Z.ai Code Bench +50% vs 5.2 (in-house, retained); Design Arena 1312 (retained)

Long context:

- 1M confirmed; **AA-LCR: 79.7% #85 (max)** — good; **MLCR: 48.3% #11** (medical long-context mid); vendor 1M-context long-horizon runs (ALE, NL2Repo) retained; no MRCR/RULER table.

Preference/IF/safety:

- **Human preference 67 — second-best category**: LMArena Text 1478 #27, **Hard Prompts 1504 #26**, Multi-turn 1481 #40, Longer 1485 #34, Creative 1454 #32, IF 1475 #24; LiveBench Language 79.9% #31, IF 69.3% #32; FORTRESS 28.2% #26 (weak safety balance — over-refusal profile)

### Normalized scores (1–100)

- **Tool use: 84/100.** Lowered from 93: the frontier claims held — τ³ #4, GDPval 57.5% #17, MCP Atlas #5, Tax #5, TB 4.0 ~40% #10-28 — but the professional-agent tail is thin (Harvey LAB 0.3% #19, HLAB 8.3%, Skills 47.5% #24, GDP.pdf 11.2%, LMArena Agent 2.1 #23) and Agents & tools 58 is its worst BenchLeader category.
- **Reasoning: 84/100.** Lowered from 88: GPQA 90.9-91.7% and HLE 42.3% (max) clear the bars, AA II 44.8 #38 and Vals Index #16 are strong, honesty is good (70.5% #39, effort-improving) — capped by CritPt 19.1% #63, accuracy 33.9% #155, MLCR 48.3% #11, and FrontierMath T4 29.3% #36.
- **Context window: 93/100.** Lowered from 96: 1M confirmed across 30+ providers; measured retrieval good-not-elite (AA-LCR 79.7% #85); MLCR mid.
- **Multimodal: 15/100.** Held: text-only by design (vision lives on GLM-5V-Turbo).
- **Coding: 88/100.** Lowered from 90: SWE-V Vals 95.4% #5, SciCode 59% #14, Vibe 78.1% #24, IOI #12, WebDev 1622 #21 and DeepSWE 69% #16 are the top open-weights profile measured — against ProgramBench 1.5%, FrontierSWE 30.2% #9, the TB 2.1 spread (71.5-88.2%), weak TB Science, and the still-missing official SWE-V row.
- **Cost efficiency: 92/100.** Raised from 88: the 30+-provider open-weights market has driven the input floor to **$0.079-$0.14** (fp4 tiers at 117-165 tok/s), with the $1.40/$4.40 list still standard on premium routes; ~30% fewer output tokens per task than GLM-5.2 compounds the value.
- **Overall Score: 73/100.** (84 + 84 + 93 + 15 + 88) / 5 = 72.8 → 73, down from 76.4. Best-fit: the leading open-weights agentic engineer — top-5 τ³/MCP Atlas/Tax-agent tooling, elite SWE-V (Vals #5) and SciCode, bar-clearing GPQA/HLE at max, good effort-scaling honesty, strong arena preference, and a self-host license with a $0.08-input hosted floor — but text-only I/O remains the single biggest score drag, the professional-legal-agent floor (Harvey LAB 0.3%) and ProgramBench are real gaps, and closed frontier agents still lead on TB 2.1 and GDPval. Run it at max.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-25 report (BenchLeader full effort-ladder as of 2026-10-08 aggregating Epoch AI Benchmarking Hub, Artificial Analysis incl. the Harvey LAB and Cyber Index harnesses, Vals AI, Scale AI SEAL incl. MCP Atlas, LiveBench, LMArena, Mercor APEX, Andon Labs, MathArena, ForecastBench; 30+ OpenRouter provider rows; DDG-lite searches surfacing the z.ai announcement, docs.z.ai token-efficiency figures, the-agent-report's 743B zero-new-parameters finding correcting the first pass's 753B, and buildfastwithai's CyberGym corroboration; the first-pass vendor-table rows retained where not contradicted). **Integrity note: the researcher is itself the GLM-5.3 model; every number above is sourced from third-party or officially published vendor data, not self-assessment, and the down-shifts (Tool −9, Reasoning −4, Context −3, Coding −2) are applied on the measured evidence the same as for every other model in this repo.**
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
