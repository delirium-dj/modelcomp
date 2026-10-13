# Qwen 3.7 — findings by GLM 5.3

- Source: Alibaba/Qwen (`Qwen 3.7`, Max tier)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 (Qwen3.7-Max)
- **Short description:** Alibaba's Qwen3.7-generation flagship Max tier — launched **2026-05-20 at the Alibaba Cloud Summit in Hangzhou** (BenchLeader records 19 May — the preview deployment; the 20th was the summit launch), purpose-built for "long-horizon agentic workflows — coding, MCP tool orchestration, and multi-hour autonomous task execution" (buildfastwithai). Second pass makes a major identity correction: the first pass scored this folder against the **Plus** tier as a proxy because "no public SKU named Qwen 3.7 exists" — **the Max tier itself is now fully measured** (BenchLeader `qwen3-7-max`, AA `qwen3-7-max`), and its pricing ($2.50/$7.50, not the Plus's $0.40/$1.60) changes the cost picture completely.
- **Provider / access:** Alibaba Cloud / Qwen API; OpenRouter (Alibaba Cloud Int. — **$1.48/$4.42**, down from $2.00/$6.00; list $2.50/$7.50); OpenCode Zen `opencode/qwen3.7-max` and sibling `opencode/qwen3.7-plus`.
- **Release / knowledge:** preview 2026-05-19, launch **2026-05-20** (summit); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/qwen3.7-max` (Zen); `qwen3.7-max` (AA/BenchLeader).
- **Context window:** 1M tokens (confirmed).
- **Modalities:** text/image/video in; text out; reasoning (max effort is the only fully-measured config and the best); tool calls; JSON mode.
- **Pricing (as of 2026-10-12):** list **$2.50 in / $7.50 out per 1M** (blended $3.75/M — "among the most expensive ranked"); OpenRouter **$1.48/$4.42** (price-cut over the summer); Zen carries the SKU; cached read ~$0.50; 197 tok/s (fastest quarter), 14.5 s first answer; $1.15 per Intelligence Index run.
- **Architecture:** proprietary API weights (no open weights for Max); a gated open-weights `Qwen/Qwen3.7` HF repo exists without public benchmarks.

### Raw benchmarks found

> Second pass replaces the Plus-proxy rows with the **Max tier's own measurements** (BenchLeader best = max effort **59.9 #110/760**, trend 51→58→65 rising, last measured 2026-10-08). Category scores (max): **Instruction following 78 (best)**, Reasoning 66, Knowledge 63, Long context 65, Maths 59, Coding 60, Human preference 57, Composite 54, **Agents & tools 48 (worst)**. **Launch-claim caveat: the launch-week AA II was 56.6 (#5 that week, "highest-ranked Chinese model to date" — felloai); the settled v4.3.2 value is 29.5 #121** — the largest launch-to-settled collapse observed this cycle; all scores use settled values.

Agent / tool use:

- **τ²-Bench: 94.7% #30** (elite) — but **τ³-Banking: 11.8% #133** (dreadful; the 2026 successor suite breaks the τ² story again)
- Terminal-Bench: 2.1 **74.5% #64 (AA) / 61.0% #39 (Vals)**; **TB 2.0 (Vals): 59.2% #9** (good rank); **TB Hard: 50.8% #22** (good); **TB 4.0 (AA): 1.5% #115** (wall)
- **GDPval-AA: 31.4% #125** (weak — better than the Plus's 24.6% but still bottom-half); ITBench SRE **42.5% #15** (good rank); Analyst 18.8% #26; **HLAB 1.7% #41**; Legal Research 25.5% #43; Tax 47.4% #41; Finance 47.8% #44; **GBAEval 0.4% #20**; LiveBench Agentic 43.6% #55; **LMArena Agent: −5.5 #40** (dreadful — the arena agent board actively dislikes it)
- Launch claims retained as vendor narrative: 10× kernel speedup in a 35-hour autonomous run, benchmark parity with Claude Opus 4.6 (chinabizinsider); MCP orchestration focus (buildfastwithai)
- Plus-tier rows retained for family reference: Claw-Eval 62.7%, MCP-Atlas 73.2%, OSWorld 73.3%, AndroidWorld 81.0%, BFCL 72.9%

Reasoning / knowledge:

- GPQA Diamond: Epoch **90.9% #33** / AA **92.3% #36** / Vals **90.2% #25** — **clears the 90% bar on all three harnesses** (vendor 92.4; better than the Plus proxy's reads)
- **HLE (AA): 40.5% #80 (max)** — clears the 40% reference (the Plus read was ~35%); **SimpleBench 70.4% #13** (strong); LiveBench Reasoning 83.3% #42; CritPt 13.4% #96 (weak)
- Math: **FrontierMath T1-3 64.6% #33 / T4 34.1% #32** (strong); OTIS 95.6% #39; LiveBench Math 85.3% #53; LMArena Maths 1486 #31; ProofBench 26.0% #43 (weak); HMMT Feb 2026 92.9% (Plus-era row retained)
- **Honesty good: AA-Omniscience non-hallucination 74.4% #24** (accuracy 31.1% #167 — honest, knows little; index 13.5 #86); SimpleQA 55.8% #19
- **AA Intelligence Index 29.5 #121 (settled)** — vs the launch-week 56.6 claim; ECI 153.7 #39; LiveBench global 73.1% #46; **MMLU-Pro 89.3% #12** (elite); LegalBench 84.9% #26; TaxEval 75.3% #19; CorpFin 63.7% #41; EMB 57.0% #36; MedScribe 79.4% #58; MedCode 38.8% #64; EBR 9.5% #19

Coding:

- **SWE-bench Verified: Epoch 77.3% #7** (elite rank) / Vals 68.8% #66 — a wide harness spread, both retained; **SWE-bench Pro 60.6%** ("highest among proprietary models" at launch — vendor, corroborated by openllm.wavise)
- **LiveCodeBench (Vals): 87.1% #18**; **LMArena Coding 1524 #28** (strong preference) / WebDev 1515 #51; LiveBench Coding 74.2% #52; **Vibe Code v1.1: 47.7% #52** (gap filled — mid, far better than the Plus's 25.6%); ALE-Bench 1189.4 #36
- Caps: SciCode 48.8-49.5% #108-111 (below the 55% reference); **Code Migration 13.1% #50** (weak); TB 4.0 1.5% #115; SWE Multilingual 75.8% (Plus-era row retained); DeepSWE: still unmeasured for Max

Long context:

- 1M window confirmed; **AA-LCR 79.0% #102**; MRCR v2 91.7% (generation-era row retained); no per-length breakdown.

Multimodal:

- **No Max-tier vision rows exist** — the generation's vision evidence remains the Plus-tier set (MMMU-Pro 79-80.5%, MathVision 90.3%, Video-MME 88.0%, VideoMMMU 85.4%, OmniDocBench 91.4%); text+image+video in, text out; scored on family evidence with the caveat.

Instruction following / preference:

- **IFBench 80.5% #7** (elite — the IF-78 category is earned); LiveBench IF 74.0% #14; Language 79.7% #32; LMArena Text 1475 #36, Multi-turn 1483 #35, **Longer Queries 1491 #26**, Hard Prompts 1496 #40, Creative 1440 #57, EQ-Bench 1110 #22

### Normalized scores (1–100)

- **Tool use: 62/100.** Lowered from 72: the Max tier's own agent rows split hard — elite τ² 94.7% #30, good TB Hard #22 / TB 2.0 #9 / ITBench #15, against dreadful τ³ 11.8% #133, GDPval 31.4% #125, HLAB 1.7% #41, GBAEval 0.4%, and LMArena Agent −5.5 #40. Agents & tools 48 is its worst category; the "long-horizon agent" positioning did not survive the 2026 suites.
- **Reasoning: 79/100.** Raised from 76: the Max tier clears both bars — GPQA 90.2-92.3% on all three harnesses and HLE 40.5% #80 — with strong math (FrontierMath 64.6% #33, T4 34.1% #32, OTIS 95.6% #39), SimpleBench #13, and good honesty (74.4% #24); capped by CritPt 13.4%, ProofBench 26%, and low Omniscience accuracy.
- **Context window: 93/100.** Held: 1M confirmed with good measured retrieval (AA-LCR 79.0% #102, MRCR 91.7%).
- **Multimodal: 82/100.** Lowered from 88: the Max tier has no direct vision rows; the family's Plus-tier evidence is strong but indirect — scored with the identity caveat.
- **Cost efficiency: 68/100.** Lowered from 95 — the biggest correction of this pass: the first pass priced the Plus tier ($0.40/$1.60); the Max tier lists at **$2.50/$7.50** (blended $3.75/M, "among the most expensive"), with the OpenRouter floor at $1.48/$4.42 and $1.15 per II-run. The capability per dollar is still reasonable, but this is a flagship-priced model.
- **Coding: 74/100.** Raised from 70: SWE-V Epoch 77.3% #7 (elite rank), SWE-Pro 60.6% (launch SOTA claim), LCB 87.1% #18, LMArena Coding #28, and Vibe 47.7% (far above the Plus's 25.6%) — capped by SciCode ~49% below the reference, Code Migration 13.1%, and TB 4.0 1.5%.
- **Overall Score: 78/100.** (62 + 79 + 93 + 82 + 74) / 5 = 78.0, down from 79.8. Best-fit: the strongest Qwen reasoner measured — frontier-clearing GPQA/HLE, elite IF and SWE-V (Epoch #7), honest, 1M context — but flagship-priced and broken on the 2026 agent suites (τ³, GDPval, HLAB); its launch-week "top-5 AA" standing settled to #121, so buy it for coding and instruction following at the OpenRouter floor, not for the agentic marketing.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (BenchLeader Max-tier ladder as of 2026-10-08 aggregating Epoch AI Benchmarking Hub incl. SWE-bench Verified, Artificial Analysis, Vals AI, LiveBench, LMArena, Mercor APEX, Scale AI SEAL; Alibaba Cloud Int. OpenRouter rows and price history; DDG-lite searches surfacing buildfastwithai's launch review and preview-vs-Plus distinction, felloai's launch AA II 56.6 claim — flagged against the settled 29.5 #121 — chinabizinsider's summit coverage and 35-hour-autonomy claims, openllm.wavise's SWE-bench Pro 60.6% note, and DataCamp's launch coverage; first-pass Plus-tier rows retained only where marked as family reference); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
