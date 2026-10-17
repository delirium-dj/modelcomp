# MiMo V2.6 Pro — findings by GLM 5.3

- Source: Xiaomi (`xiaomi/mimo-v2.6-pro`)
- Date: 2026-10-11 (UTC) — second-pass re-research of the 2026-09-28 report (plus its 2026-09-29 re-verification addendum, now folded in)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro (open-weights checkpoint `MiMo-V2.6-Pro-RL`)
- **Short description:** Xiaomi's flagship MIT-licensed omnimodal sparse-MoE (1.02T total / 42B active, Sept 2026) — the capability-leading sibling of MiMo V2.6 Flash and the #1 large open-weights model on the AA Intelligence Index (#1 of 117 in its class, median 18); built on the same "You Only RL Once" mixed-RL recipe for long-horizon agentic work. Second-pass composite trackers: BenchLeader Index 64.8 ±5.1, #44 of 760 (still settling upward: 57→63→70 since 23 Sept); BenchLM 74.15, #11 of 889 (was 74.71 #9 of 512 at the 2026-09-29 addendum — bigger cohort, same tier).
- **Provider / access:** Xiaomi MiMo Open Platform API (`https://platform.xiaomimimo.com`, OpenAI-compatible), now **5 API providers total** per Artificial Analysis (up from 3 at first pass): Xiaomi (fp8), GMICloud (bf16, 1.1M context), DeepInfra ($0.430), NovitaAI, plus OpenRouter and self-host (SGLang/vLLM recipes in the official card). Chat Completions; reasoning + tool-call parsers (`mimo`) built into serving recipes.
- **Release / knowledge:** 2026-09-21 (per Artificial Analysis FAQ); knowledge cutoff not publicly stated.
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Pro-RL` (Hugging Face); `xiaomi/mimo-v2.6-pro` (site slug ID). No Zen Free ID for this slug.
- **Context window:** 1M total (official card + AA); 128K max output (platform spec).
- **Modalities:** text / image / video / audio (speech) in, text out — omni input independently verified by AA ("supports text, image, speech, and video input, outputs text"); reasoning yes; tool calls yes; JSON mode not documented.
- **Pricing (as of 2026-10-11):** $0.435 in / $0.87 out per 1M (Xiaomi API); cached input $0.0036 (99% discount); ~$0.13 per AA Intelligence-Index task; blended ~$0.18/1M (AA) — BenchLeader blended $0.548/M, "mid-priced". AA reads input as slightly above its class median in one cohort view and below in another; output is clearly competitive (median $1.94). Price history: unchanged since Sept 26. 43-51 tok/s output (BenchLeader/AA — slowest quarter; class median 65.8), TTFT ~3.1 s (high end), first answer ~51 s. Paid only.
- **Architecture:** Sparse MoE, 1.02T total / 42B active; hybrid SWA backbone, MTP speculative decoder, dedicated ViT + audio encoders; open weights, MIT license. AA Openness Index 52.8 (#26 of 324, top-10%).

### Raw benchmarks found

> Vendor = Xiaomi official HF model card / technical report (Sept 2026); AA = Artificial Analysis independent measurement; BenchLeader data as of 2026-10-11. Contemporaries from the vendor table: Claude Opus 5, GPT-5.6 Sol, Claude Fable 5.

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (vendor; vs Opus 5 89.1, GPT-5.6 Sol 88.8) — **CONFLICT**: Vals' common-harness run measures **67.8% #32** (vs Opus 5.5's 87.6% #1, Muse Spark 1.3 max 79.0% #11); a 22-point vendor-vs-independent gap — the single biggest second-pass finding, both values retained
- Terminal-Bench 4.0: **34.9%** vendor / **34.8% #32** (AA) / **31.3% #13** (Vals) — consistent, weak
- Terminal-Bench-Science 0.1: **2.9% #23** (Vals — weak; no vendor claim for Pro)
- GDPval-AA: **1673 Elo** vendor / **59.2-59.3% #12 normalized** (AA — mid-elite; muse 59.0% #13, Opus 5.5 68.3% #1)
- AA Briefcase v1.1: **1516 #22** (AA — mid-field)
- OSWorld-Verified: **82.0%** (vendor; Opus 5 83.4)
- Toolathlon-Verified: **76.9%** (vendor; vs Opus 5 80.6)
- AutomationBench: **53.1%** vendor / **58.6% #24** (AA)
- JobBench: **62.0%** (vendor); Agents' Last Exam: **31.6%** (vendor; ties Opus 5)
- APEX-Agents (Mercor): **59.5% #14**; LMArena Agent: **3.5 #18**
- Vals professional agents: CyberBench **72.9% #11**, Tax Agent **64.9% #18**, Finance Agent v2 **57.3% #13**, Legal Research **47.1% #12**, MedScribe **88.3% #11**, Public Benefits **68.9% #6**, EMB **62.9% #27** — solid mid-elite cluster, no top-5 finishes; weak spots: SREBench **3.0%**, Harvey HLAB **10.8% #12**, GDP.pdf **19.2% #30**
- CyberGym: **94.0%** / ExploitGym: **17.8%** / ExploitBench: **47.9%** / SEC Bench Pro: **66.3%** (vendor, cybersecurity harnesses)
- Tau3-Banking / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found (unchanged)
- BenchLeader category read: Agents & tools **57 — the model's LOWEST category** (0.5 SD above the 50-average model), corroborating the independent tempering

Reasoning / knowledge:

- GPQA Diamond: no verified public score found (unchanged)
- HLE: **49.4% #26** (AA — above the 40% frontier reference, mid-field rank)
- AA-LCR: **86.3% — #3 of 529** (AA; the model's one top-3 finish, elite long-context reasoning)
- MLCR: **18.3% #21** (AA — medical long-context reasoning is weak); CritPt: **26.6% #35** (AA)
- LMArena: Hard Prompts **1506 #23**, Maths **1483 #34**, Instruction Following **1474 #29**, Text **1480 #26**, Longer Queries **1495 #22**, Creative **1448 #43**, Multi-turn **1456 #79**
- ProofBench: **70.0% #14** (Vals); MysteryMechanism: **15.3% #20** (Vals)
- Artificial Analysis Intelligence Index: **46 — #1 of 117 in the large open-weights class** (median 18; AA direct page confirms the class crown) / #31 of 610 overall configurations (BenchLeader) — both views retained
- Omniscience: accuracy **34.9% #147**, non-hallucination **59.4% #76** (40.6% hallucination rate), index **8.4 #93** (AA — knowledge reliability remains the weak spot)
- Vals Index: **55.2 #12**

Coding:

- DeepSWE v1.1: **71.9%** (vendor; vs Opus 5 74.0, GPT-5.6 Sol 73.0 — near-frontier)
- LMArena Coding: **1539 #11**; LMArena WebDev: **1629 #18** (new this pass)
- Vibe Code Bench v1.1: **85.2% #12** (Vals)
- SciCode: **60.9% #7** (AA — above the 55% frontier reference)
- IOI: **39.3% #30**; Code Migration: **43.0% #22**; ALE-Bench: **1158.1 #41** (Vals — all mid-to-weak)
- ProgramBench: **26.5%** (vendor) vs **0.5% #13** (Vals) — harness/convention conflict, both retained and flagged
- Bug Hunt Bench: **22.7 fixes** (vs Opus 5.5's 41.7)
- SWE-bench Verified / LiveCodeBench: no verified public score found (unchanged)

Long context:

- No public MRCR / RULER / GraphWalks number at 1M. Closest proxies: AA-LCR **86.3% #3** (the strongest LCR in this report set) and MLCR 18.3% #21. 1M limit verified architecturally.

Multimodal (grounded):

- LMArena Vision: **1264 #50** (new this pass — mid-field); SAGE: **45.0% #40** (Vals — weak)
- MiMo VisualCoding: **72.3%** (vendor; vs GPT-5.6 Sol 73.4)
- Design Arena Website: **1314** (OpenRouter via BenchLM — revised down from 1325)

### Normalized scores (1–100)

- **Tool use: 83/100.** Lowered from 87: the vendor's frontier-band TB2.1 89.9% fails independent replication — Vals' common-harness run reads **67.8% #32** (22 points lower; Muse Spark max 79.0% #11 and Opus 5.5 87.6% #1 both clear it), and BenchLeader scores Agents & tools 57, the model's lowest category. Retained strengths: GDPval 1673 / 59.2% #12, OSWorld-Verified 82.0%, Toolathlon 76.9%, the Vals professional cluster (CyberBench #11, MedScribe #11, Public Benefits #6, Tax #18, Finance #13), and CyberGym 94.0%. Caps: TB4.0 ~34% across three harnesses, TB-Science 2.9% #23, SREBench 3.0%, GDP.pdf 19.2% #30, Briefcase #22, and the still-missing Tau3/Claw rows.
- **Reasoning: 76/100.** Held: HLE 49.4% #26 clears the 40% reference, AA-LCR 86.3% is #3 overall (elite), ProofBench 70% #14, LMArena Hard Prompts #23, and the AA Intelligence Index crowns the large open-weights class at #1/117 — but CritPt 26.6% #35, MLCR 18.3% #21, MysteryMechanism 15.3% #20, the 40.6% hallucination rate (index 8.4 #93), and the still-missing GPQA cap it far below the proprietary frontier (muse 90, Argon 85).
- **Context window: 95/100.** Native 1M with 128K max output (≥1M tier); AA-LCR 86.3% #3 is the best long-context reasoning score in this report set, but no public ≥512K retrieval benchmark (MRCR/RULER) to justify 100. Held.
- **Multimodal: 88/100.** Lowered from 90: AA-verified omnimodal input (text/image/speech/video) keeps it in the omni band above video-only models, but the new quality rows are mid-field — LMArena Vision 1264 #50, SAGE 45.0% #40 — and Design Arena revised down to 1314; text-only output caps it there.
- **Coding: 82/100.** Held: the new LMArena Coding #11 / WebDev #18 / Vibe Code #12 rows offset the weak Vals IOI #30, Code Migration #22, ALE #41 and the ProgramBench vendor-Vals conflict; DeepSWE 71.9% (vendor, near-frontier) and SciCode 60.9% #7 anchor the top end; SWE-bench Verified and LiveCodeBench remain unpublished.
- **Cost efficiency: 93/100.** Held: $0.435/$0.87 with the 99% cache discount, ~$0.13/II task, and ~$0.18/M blended beats the $0.60/$2.20 (~92) reference; input sits slightly above one class median per AA, speed (43-51 tok/s, TTFT ~3.1 s) is the price you pay, keeping it below the 97+ ultra-budget band.
- **Overall Score: 85/100.** (83 + 76 + 95 + 88 + 82) / 5 = 84.8 → 85, down from 86: the second pass found the independent agent-board picture materially weaker than the vendor scorecard (TB2.1 -22 pts, agents the lowest BenchLeader category) while everything else held. Best-fit recommendation unchanged in kind: the strongest open-weights agent buy at MIT-license prices with elite long-context reasoning — but treat the vendor agentic numbers as ceilings, pair with a faster endpoint when latency matters, and verify knowledge-reliability tasks given the 40.6% hallucination rate.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/glm-5.3)** — 2026-10-11
- Method: public internet research, second pass over the 2026-09-28 report and its 2026-09-29 addendum (Xiaomi official HF technical report carried over, Artificial Analysis model page fetched direct 2026-10-11, BenchLeader data as of 2026-10-11, BenchLM updated 2026-10-10, plus Vals AI, LMArena, Mercor APEX and Epoch-hub rows surfaced through them; three search-engine queries were attempted for this model — DuckDuckGo blocked two with a bot challenge and Bing returned irrelevant results — so the independent-source requirement was met via three direct source fetches instead); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
