# Xiaomi MiMo V2.5 Pro — findings by GLM 5.3

- Source: Xiaomi (`mimo-v2.5-pro`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xiaomi MiMo V2.5 Pro
- **Short description:** Xiaomi's flagship open-weights MoE (1.02T total / 42B active; released **2026-04-27** per Xiaomi's own page — BenchLeader records 2026-04-23 for the HF/early listing; both flagged) for long-horizon agentic work — the vendor's demos (8,192 lines / 1,868 tool calls / 11.5 hours; ~1,000-call coherence) remain genuinely impressive narratives. Second pass adds the settled ladder (thinking best **57.1 #175/760**) and it cuts both ways: **IFBench 79.9% #9 and honesty 75.3% #21 are elite**, τ² 94.2% #34 and LMArena preference ranks hold — but the **vendor-era τ³ 72.9% claim collapsed to the AA-measured 9.9% #141**, with GDPval 31.0% #130, APEX-AA 2.4% #31, LMArena Agent −7.8 #44, and TB 4.0 0.0%. Superseded by **MiMo-V2.6-Pro (2026-09-21, 65.4 #37 — this repo's own batch-3 dossier)**. Top use case: instruction-following-critical, honesty-critical text agents at near-floor prices — not the 2026-suite agent the marketing implied.
- **Provider / access:** Xiaomi MiMo Open Platform ($0.435/$0.870 fp8); **five OpenRouter providers — GMICloud bf16 $0.304/$0.609 (floor, 1.1M)**, NovitaAI $0.480/$0.961, StreamLake $0.522/$1.04, AtlasCloud fp8, DigitalOcean; open weights `XiaomiMiMo/MiMo-V2.5-Pro` (permissive, FP8 E4M3).
- **Release / knowledge:** **2026-04-27** (Xiaomi blog) / 2026-04-23 (HF/BL listing); knowledge cutoff not stated publicly.
- **IDs:** `xiaomi/mimo-v2-5-pro` (no Zen Free ID; paid).
- **Context window:** **1M tokens** (instruct checkpoint; the Base ships 256K) — confirmed.
- **Modalities:** text in / text out (text-focused Pro; the omni V2.5 sibling carries vision/audio); reasoning (thinking is the best config — by ~8 index points over no-reasoning); tool calls (Claude Code / OpenCode / Kiro harness support); JSON mode not separately verified.
- **Pricing (as of 2026-10-13):** Xiaomi $0.435 in / $0.870 out per 1M; **OpenRouter floor $0.304/$0.609 (GMICloud bf16)**; blended $0.548/M — mid-priced; **$0.054 per Intelligence Index run**; the catches: **37 tok/s (slowest quarter) and 56 s first answer at thinking**.
- **Architecture:** 1.02T MoE / 42B active; hybrid SWA:GA 6:1 attention (~7× KV-cache cut); native MTP (~3× throughput — yet the measured serving is still slowest-quarter); 27T-token FP8 pretraining at native 32K extended to 1M; MOPD three-stage post-training.

### Raw benchmarks found

> Second pass adds the BenchLeader ladder (best = thinking **57.1 #175/760**, trend 40→54→69 rising — settling, last measured 2026-10-09). Category scores (thinking): **Instruction following 77 (best)**, Long context 65, Knowledge 63, Composite 59, Reasoning 48, Agents & tools 49; not-stated: Reasoning 67, Coding 57, Human preference 61.

Agent / tool use:

- **τ³-Banking CONFLICT: the vendor-era 72.9% claim vs the settled AA harness 9.9% #141** — a ~63-point collapse; scored on the measured value. **τ²-Bench: 94.2% #34 (thinking — elite, confirmed)**
- **GDPval-AA: 31.0% #130** (updated from 1265/30.4% — consistent weak); **APEX-Agents (AA): 2.4% #31** (dreadful); **LMArena Agent: −7.8 #44** (dreadful)
- Terminal-Bench: 2.1 **65.2% #80 (AA) / 57.3% #43 (Vals)** (confirms); TB Hard **43.2% #41 (thinking — good)**; **TB 4.0: 0.0% #146 (AA) / 0.5% #37 (Vals)** — the 2026 suite is a wall
- ITBench SRE 38.2% #23; Analyst 20.0% #23; **HLAB 2.1% #40**; Legal Research 15.9% #49; Tax 34.8% #50; Finance 41.5% #51; Claw-Eval 64% Pass^3 (vendor, retained); Toolathlon / MCP-Atlas: still unmeasured
- The long-horizon demos (233/233 hidden tests over 672 calls; 8,192 lines / 1,868 calls / 11.5 h) retained as **vendor narrative** — not reproduced by any independent suite

Reasoning / knowledge:

- GPQA Diamond: AA **86.6% #106 (thinking)** / Vals 82.6% #59 — below the 90% bar
- HLE: AA **35.7% #110 (thinking)** — below the 40% reference; the with-tools 48% vendor row retained; **CritPt: 4.0% #158** (very weak); LMCA 29.5% #117; DTBench 84.5% #90
- **IFBench: 79.9% #9 (thinking)** — elite, and IF-77 is its best category; **Honesty elite at thinking: AA-Omniscience non-hallucination 75.3% #21** (vs 10.8% #395 no-reasoning — massive effort-dependence); accuracy 22.4% #264 (honest, knows little); Omniscience 3.3 #112
- **AA II 26.0 #151** (confirmed); Vals Index 33.8 #34; ProofBench 22.0% #46 (weak); LMArena Maths 1480 #38
- Knowledge: MMLU-Pro 84.6% #60; LegalBench 77.1% #104; TaxEval 73.8% #45; MedScribe 83.7% #39; CorpFin 61.4% #53; EMB 55.2% #42; MedCode 32.5% #83 (weak)

Coding:

- SWE-bench (Vals): **74.0% #48** (confirmed); LiveCodeBench (Vals): **81.3% #61** (confirmed); **LMArena Coding: 1522 #31** (good preference) / WebDev 1479 #61
- Caps: SciCode 50.2-50.6% #96-98 (below the 55% reference); **Vibe Code v1.1: 34.1% #59** (gap filled — weak); **Code Migration: 21.6% #42** (weak); ALE 899.8 #59; TB 4.0 0.0%; SWE-bench Pro 57.2% and AA Coding Index 60.2% (retained); SWE-bench Verified (official): still missing

Long context:

- **1M confirmed**; **AA-LCR: 79.7% #85 (thinking)** — good (confirms); the ~1,000-call coherence demos retained as vendor narrative; no MRCR/RULER table.

Multimodal:

- Text-only Pro by design (the omni V2.5 sibling covers vision/audio).

Preference:

- **Good ranks**: LMArena Text 1468 #48, **Multi-turn 1481 #38**, **Longer Queries 1488 #29**, Hard Prompts 1496 #39, Maths 1480 #38, IF 1469 #36, Creative 1435 #65; **EQ-Bench 4: 1208 #14** — Human preference 61 is solid.

### Normalized scores (1–100)

- **Tool use: 60/100.** Lowered from 85: the settled 2026 suites collapsed the story — τ³ 9.9% #141 (vs the 72.9% vendor claim), GDPval 31.0% #130, APEX-AA 2.4% #31, LMArena Agent −7.8 #44, TB 4.0 0.0% — against the genuinely elite τ² 94.2% #34, good TB Hard 43.2% #41 / TB 2.1 65.2% #80, ITBench #23, and the unreproduced long-horizon demos.
- **Reasoning: 62/100.** Lowered from 78: GPQA 82.6-86.6% below the bar, HLE 35.7% #110, CritPt 4.0% #158, AA II 26.0 #151 — offset by the elite IFBench 79.9% #9, elite thinking-mode honesty (75.3% #21), DTBench 84.5%, and good preference/Maths ranks.
- **Context window: 92/100.** Lowered from 96: 1M confirmed with good AA-LCR 79.7% #85 — the slowest-quarter serving (37 tok/s, 56 s TTFT at thinking) tempers usable long-context throughput.
- **Multimodal: 15/100.** Held: text-only by design.
- **Coding: 68/100.** Lowered from 72: SWE-V 74.0% #48, LCB 81.3% #61 and Coding-preference #31 hold — SciCode ~50.3% below the reference, Vibe 34.1% #59 (gap filled), Code Migration 21.6%, ALE #59, and TB 4.0 0.0% cap it.
- **Cost efficiency: 92/100.** Lowered from 94: the floor fell to **$0.304/$0.609 (GMICloud bf16)** with $0.054/II-run and open weights — excellent per-token — but the slowest-quarter decode and 56-second thinking TTFT eat wall-clock value.
- **Overall Score: 59/100.** (60 + 62 + 92 + 15 + 68) / 5 = 59.4 → 59, down from 69. Best-fit: an elite instruction-follower and honest thinker — IFBench #9, non-hallucination #21 at thinking, τ² #34, decent coding at $0.054/II-run — but the "long-horizon agent king" billing did not survive the 2026 suites (τ³ 9.9%, TB 4.0 0.0%, APEX 2.4%), the raw speed is the slowest quarter, and MiMo-V2.6-Pro (this repo's batch-3 dossier) now strictly supersedes it; run V2.5-Pro only where the snapshot is pinned or the IF/honesty profile matters.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-25 report (BenchLeader full 3-setting ladder as of 2026-10-09 aggregating Artificial Analysis, Vals AI, Epoch AI Benchmarking Hub, LMArena, EQ-Bench; five OpenRouter provider rows incl. the GMICloud $0.304/$0.609 floor; DDG-lite searches surfacing Xiaomi's official page (2026-04-27 release date), buildfastwithai/dayahimour/toolworthy/crafiq/tosea launch reviews corroborating the demos and 1T/42B specs; the MiMo-V2.6-Pro succession cross-referenced against this repo's own batch-3 dossier; the first-pass vendor rows retained with the τ³ 72.9%-vs-9.9% conflict flagged and scored on the measured value); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
