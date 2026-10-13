# DeepSeek V4 Pro — findings by GLM 5.3

- Source: DeepSeek (`deepseek-v4-pro`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro (0813)
- **Short description:** DeepSeek's flagship V4-generation reasoning model (Pro-0813 GA build, released 2026-08-13, replacing the Preview with "significantly enhanced agent capabilities" — localmodelwatch). Second pass corrects the first pass's "proprietary weights" claim: **open weights, MIT license** on Hugging Face (`deepseek-ai/DeepSeek-V4-Pro-0813`, ~998 GB for local serving). 1M context with verified long-context retrieval and elite math/competitive coding. Top use case: high-effort reasoning and coding at aggressive output pricing, with a self-host option.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/chat/completions` (openai-compatible); DeepSeek API; Azure ($1.91/$3.83); Hugging Face weights (MIT) + GGUF builds for self-hosting.
- **Release / knowledge:** V4 Pro 0813 GA build, **2026-08-13** (BenchLeader + yottalabs + theopenweights); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/deepseek-v4-pro` (Zen; no Free ID — paid only); `deepseek-ai/DeepSeek-V4-Pro-0813`.
- **Context window:** 1M tokens (confirmed); MRCR 1M 83.5% and CorpusQA 1M 62.0% verify usable retrieval.
- **Modalities:** text in; text out; reasoning (max is its best config); tool calls; JSON mode. Text-only — vision lives in the separate V4 Flash Vision model.
- **Pricing (as of 2026-10-12):** Zen $1.74 in / $3.48 out per 1M (cached read $0.145); BenchLeader blended $1.98/M ($1.32/$3.96 reference rates); Azure $1.91/$3.83; self-host MIT at $0 license. 93 tok/s, ~49 s first answer at max.
- **Architecture:** **open-weights MoE, 1.6T total / 49B active** per the technical report and SemiAnalysis (the HF GA checkpoint lists **1.7T** — a 1.6T-vs-1.7T discrepancy flagged by progressiverobot; both retained); CSA/HCA attention with mHC (deepseek-v4.io); MIT license.

### Raw benchmarks found

> Second pass adds the full BenchLeader effort ladder — 6 settings, best = max **62.8 #70/760**, trend 40→54→68 rising sharply, last measured 2026-09-29. Category scores (max): **Instruction following 74 (best)**, Composite 70, Reasoning 65, Long context 65, Agents & tools 64, Knowledge 60, Coding 58, **Maths 56 (worst category — but its raw math rows are elite; the field is just stronger)**. Major correction: AA II is **36 #80 at max** (30.1 high, 20.8 no-reasoning) — the first pass's "53" was a stale/incorrect BenchLM listing.

Agent / tool use:

- **τ²-Bench: 96.2% #15** (max — elite, confirmed); **τ³-Banking: 39.6% #31** (max — gap filled, decent)
- **Terminal-Bench 2.1 three-way spread: vendor 87.9% vs AA 78.7% #49 (max) vs Vals 54.7% #49** — and a neutral CoderSera harness measured **54.68%** ("while V4 Flash reached 67.04% under the same conditions" — aitoolsreview): the vendor claim is contradicted by two independent harnesses
- **Terminal-Bench 4.0: 14.7% #66 (AA) / 14.1% #25 (Vals)**; **TB Science 0.0% #29**; TB Hard **46.2% #30**; TB 2.0 (Vals) 56.2% #14
- **GDPval-AA: 47.5% #58** (max; updated from 1306 Elo / 54.5% — mid-band); **EnterpriseOps-Gym: 49.6% #4** (elite rank); AutomationBench 56.7% #28; CyberBench 72.9% #11; ITBench SRE 38.3% #22; Analyst Agent 18.8% #25; APEX-AA 24.3% #19 / Mercor 47.3% #31
- **HLAB 7.5% #21**; Legal Research 40.9% #22; Tax 58.7% #34; Finance 50.4% #36; Skills 53.8% #16; GDP.pdf 11.4% #42; AA-Briefcase 1257 #41; Vending-Bench 2 3284.5 #45; LiveBench Agentic 55.0% #29; LMArena Agent 1.3 #25 (weak); Toolathlon 74.1%, MCP-Atlas 73.6%, BrowseComp 83.4%, CyberGym 83.3%, HLE w/ tools 60.0% (first-pass rows retained); Claw-Eval still unmeasured

Reasoning / knowledge:

- GPQA Diamond: Epoch **91.7% #28 (max)** / AA **92.8% #28** / Vals **92.4% #16** — elite, clears the frontier bar
- HLE (AA): **41.0% #74 at max** (10.6% #300 at no-reasoning) — clears the 40% reference only at full effort; CritPt **18.0% #66** (mid-weak)
- Math elite: **FrontierMath T1-3 64.6% #33 / T4 26.8% #39; OTIS 98.6% #20; AIME 2026 96.7% #6; HMMT Feb 2026 93.9% #10; MathArena Apex 28.1% #10; LiveBench Math 95.1% #16**; ProofBench 16.0% #54 (max) / 50.0% #28 (not stated — spread)
- ARC-AGI-1 90.0% #72; **ARC-AGI-2 61.3% #75**; Chess 47.0% #14; Mystery Game 43.0% #13; DTBench 90.7% #64; Kagi 53.5% #70 (weak); ForecastBench 56.1% #68; LMCA 41.2-45.5% #71-86
- **Honesty catastrophic and effort-inverse: AA-Omniscience non-hallucination 5.9% #497 at max** (12.2% #368 no-reasoning) — more thinking makes hallucination worse; accuracy 49.1% #65, index 0.8 #122; SimpleQA 52.9% #21
- **AA Intelligence Index 36 #80 (max)** — corrected from the stale "53"; ECI 155.3 #29; **Vals Index 47.6 #30**; LiveBench global 77.4% #22; MMLU-Pro 87.3% #32; LegalBench 82.4% #69; CorpFin 65.4% #28; TaxEval 73.1% #52; CaseLaw 59.4% #27; MedScribe 80.2% #54; Public Benefits 62.9% #21; MedCode 42.5% #47; EMB 52.8% #44; IFBench **76.5% #20** (IF-74 category earned)

Coding:

- **SWE-bench Verified: Vals 96.4% #2** (extraordinary) / **Epoch 77.6% #6** / vendor 80.6% — an unusually wide 78→96% spread, all retained
- **Vibe Code v1.1: 82.3% #17 at max** (a major upgrade from the first pass's 49.93% mixed-effort read; the Vibe Code Bench 1-100 variant reads 17.5% #11 — variant spread flagged); LiveCodeBench (Vals) **87.5% #13**; Pass@1-COT 93.5%; **Codeforces 3206 Elo**; **IOI 51.6% #22**; WeirdML 66.2% #39; ALE-Bench 1403.2 #22
- Caps: SciCode 51.0% #90 (below the 55% reference); ProgramBench 0.0% #23; SWE Atlas Test Writing 27.1% #20; FrontierCode 28.6% #29 (high); Code Migration 41.5% #24; TB 4.0 ~14%; SWE-bench Pro 55.4%, SWE Multilingual 76.2%, DeepSWE 62.7%, NL2Repo 61.5% (first-pass rows retained); LMArena Coding 1501 #76 / WebDev 1447 #67

Long context:

- 1M window; **MRCR 1M 83.5%**, CorpusQA 1M 62.0% (vendor-era rows, retained); **AA-LCR 80.3% #66 (max)** — good; **MLCR 17.8% #23** — medical long-context is weak.

Multimodal:

- Text-only by design (confirmed); no vision rows exist for this ID.

### Normalized scores (1–100)

- **Tool use: 78/100.** Lowered from 84: the 87.9% TB 2.1 claim is contradicted by two neutral harnesses (AA 78.7%, Vals/CoderSera ~54.7%), and TB 4.0 ~14%, Analyst 18.8%, HLAB 7.5%, LMArena Agent 1.3 are weak — offset by elite τ² 96.2% #15, decent τ³ 39.6% #31 (gap filled), EnterpriseOps #4, CyberBench #11, TB Hard #30, and mid GDPval 47.5% #58.
- **Reasoning: 82/100.** Lowered from 85: GPQA 91.7-92.8% elite, HLE 41% only at max, FrontierMath 64.6% #33 and AIME 2026 #6 elite — but the effort-inverse honesty collapse (non-hallucination 5.9% #497 at max), CritPt 18%, Kagi 53.5% #70, and the corrected AA II 36 #80 cap the band.
- **Context window: 91/100.** Lowered from 93: 1M with good MRCR 83.5% and AA-LCR 80.3% #66, but MLCR 17.8% #23 exposes weak medical long-context.
- **Multimodal: 15/100.** Held: text-only by design.
- **Coding: 84/100.** Raised from 82: SWE-V 96.4% #2 (Vals) / 77.6% #6 (Epoch), Vibe Code 82.3% #17 at max (the open-ended weakness was an effort artifact), LCB 87.5% #13 and Codeforces 3206 are elite — capped by SciCode 51% below the reference, SWE Atlas 27.1%, ProgramBench 0%, and TB 4.0 ~14%.
- **Cost efficiency: 88/100.** Lowered from 89: $1.74/$3.48 Zen (blended ~$2/M, "pricier than most" per BenchLeader) — but the MIT open weights at $0 license restore the self-host value path; 93 tok/s is fast.
- **Overall Score: 70/100.** (78 + 82 + 91 + 15 + 84) / 5 = 70.0, down from 71.8. Best-fit: an elite MIT-licensed text reasoner/coder — SWE-V 96.4% (Vals), frontier math, real 1M context — best self-hosted at this tier; but its knowledge recall is unusable without retrieval (non-hall 5.9% #497), and its vendor TB claims don't survive neutral harnesses. Run it at max for coding, attach RAG for facts.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (BenchLeader full effort-ladder as of 2026-09-29 aggregating Epoch AI Benchmarking Hub incl. SWE-bench Verified, Artificial Analysis, Vals AI, Scale AI SEAL, MathArena, ForecastBench; DDG-lite searches surfacing the Hugging Face GA checkpoint, SemiAnalysis inferencex architecture page — 1.6T/49B CSA/HCA — the progressiverobot 1.6T-vs-1.7T discrepancy, the localmodelwatch 0813-vs-Preview note, the yottalabs/theopenweights MIT-license confirmations, and the aitoolsreview/CoderSera neutral-harness contradiction of the 87.9% TB 2.1 claim); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
