# MiMo V2.6 Flash — findings by GLM 5.3

- Source: Xiaomi (`xiaomi/mimo-v2.6-flash`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-28 report (folding in its 2026-09-29 addendum)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash (open-weights checkpoint `MiMo-V2.6-Flash-RL`)
- **Short description:** Xiaomi's MIT-licensed omnimodal sparse-MoE efficiency checkpoint (309B total / 15B active), built on the "You Only RL Once" mixed-RL recipe; independent verdict: "matching the flagship Pro on agent and coding tasks at roughly one-third of the API price" (cruciblemark). The efficiency-balanced sibling of MiMo V2.6 Pro.
- **Provider / access:** Xiaomi MiMo Open Platform API (`https://platform.xiaomimimo.com`, OpenAI-compatible; mimo.mi.com portal); OpenRouter (7 providers — io.net to 127 tok/s, Darkbloom floor $0.10/$0.28); self-host (SGLang/vLLM; GGUF ~141 GB). Second-pass pricing fact: **Token Plans ($6 Lite to $100 Max/mo) cover Pro + Flash + the V2.5 suite** (agentplans.fyi; mimo.mi.com); the V2.6 series keeps V2.5 pay-as-you-go pricing, and MiMo-V2.5-Pro deprecates 2026-10-21. Composite trackers: BenchLeader **59.7, #116 of 760** (trend 56→64 settling; last measured 9 Oct 2026), BenchLM 66.03, AA II 37.9 #75, **Vals Index 53.2 #17**.
- **Release / knowledge:** 2026-09-21; knowledge cutoff not publicly stated.
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Flash-RL` (HF; Dell Enterprise Hub mirror); `xiaomi/mimo-v2.6-flash` (site slug ID). No Zen Free ID for this slug — the Zen free tier lives in `mimo-v2.6-free/`.
- **Context window:** 1M tokens total (official architecture table + AA). Max output split not published.
- **Modalities:** text / image / video / audio in, text out (native omnimodal: 681M MiMo ViT vision encoder + 308M AudioTokenizer + 127M audio patch encoder, per the official card); reasoning yes; tool calls yes; JSON mode not documented.
- **Pricing (as of 2026-10-12):** $0.14 in / $0.28 out per 1M (Xiaomi API; unchanged); cache hit $0.0028 (98% discount); BenchLeader blended $0.175/M — cheapest fifth of ranked models; ~$0.062 per AA Intelligence-Index run; 58 tok/s, ~38 s first answer.
- **Architecture:** Sparse MoE, 309B total / 15B active (256 routed experts / 8 activated, 48 layers: 39 SWA + 9 global attention), 5-layer MTP speculative decoder; open weights, MIT license; RL-scaled toward self-improvement (scaling RL compute, environment diversity, and grader compute together).

### Raw benchmarks found

> Vendor = Xiaomi official HF model card / mimo.xiaomi.com (Sept 2026); AA = Artificial Analysis; BenchLeader data as of 2026-10-12.

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (vendor; HF eval-results) / **76.4% #16** (Vals, common harness — an 11-point vendor-vs-independent gap, both retained)
- Terminal-Bench 4.0: **28.8%** (vendor = AA 28.8%) / Vals **24.2% #16**; AA **22.7% #53** (current listing)
- Toolathlon-Verified: **73.6%**; AutomationBench **52.3%**; OSWorld-Verified **80.8%**; JobBench **61.2%**; Agents' Last Exam **27.6%** (vendor)
- GDPval-AA: **55.5% #29 normalized** (AA — near-frontier for the class)
- **LMArena Agent: 0.4 #31** (near-zero — the second pass's most striking negative)
- Vals professional agents: **CyberBench 75.4% #5**, **Harvey HLAB 11.3% #9**, Finance Agent **56.3% #17**, Tax Agent 59.9% #32, Legal Research 38.0% #30, SREBench **4.2% #10**, Terminal-Bench Science 4.3% #17
- Tau3-Banking / Tau2 / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas: no verified public score found (unchanged)
- CyberGym **95.1%** / ExploitGym **6.0%** (vendor cyber harnesses)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found (unchanged)
- HLE: **35.1% #112** (AA); CritPt: **12.0% #100** (AA — weak); AA-LCR: **74.3% #154**; MysteryMechanism: 21.6% #16 (Vals); ProofBench: **63.0% #17** (Vals)
- AA Intelligence Index v4.3.2: **37.9 #75** (#8/116 in the large open-weights class at launch, median 18 — both views retained)
- Omniscience: index **−12.7 #202** (negative), accuracy **27.0% #196**, non-hallucination 45.6% #136 — **54.4% hallucination with near-bottom knowledge breadth**; BioMysteryBench 69.3% #11, Public Benefits 67.6% #11, EMB 65.5% #21, MedScribe 85.3% #27, MedCode 41.1% #54 (Vals)
- LMArena: Text 1451 #74, Hard Prompts 1484 #57, Maths 1462 #61, Instruction Following 1451 #62, Creative Writing 1387 #123, Multi-turn 1452 #85

Coding:

- DeepSWE v1.1: **67.9%** (vendor; near-frontier — Pro 71.9, Opus 5 74.0); MiMo Code Bench 61.2%; ProgramBench 26.0% vendor / **0.5% #13** (Vals convention — conflict retained)
- **LMArena WebDev: 1637 #16**; LMArena Coding 1514 #45; **Vibe Code Bench v1.1: 79.0% #22** (Vals); IOI 47.7% #24; Code Migration 40.9% #25
- SciCode / AA-SciCode: **51.3% #88-92** (below the 55% reference)
- SWE-bench Verified / LiveCodeBench: no verified public score found (unchanged)

Long context:

- 1M limit verified architecturally; AA-LCR 74.3% #154 is the only proxy; no MRCR/RULER/GraphWalks number (unchanged).

Multimodal (grounding):

- Native omni input (text/image/video/audio) with measured quality mid-field: MMMU-Pro **73.1% #122** (AA), LMArena Vision **1259 #56**, SAGE 43.5% #48 (Vals), MiMo VisualCoding 71.5% (vendor); text-only output.

### Normalized scores (1–100)

- **Tool use: 83/100.** Held: the second pass nets evenly — Vals TB2.1 76.4% #16 and TB4 24.2% #16 sit 11 points under the vendor's TB2.1 87.6% (harness gap flagged), CyberBench #5, HLAB #9, Finance #17, GDPval 55.5% #29, OSWorld 80.8%, Toolathlon 73.6% against LMArena Agent 0.4 (near-zero), SREBench 4.2%, TB Science 4.3%, Agents' Last Exam 27.6%, and still-missing Tau3/Claw rows.
- **Reasoning: 68/100.** Held: HLE 35.1% #112, CritPt 12.0% #100, a negative Omniscience index (−12.7 #202) with 54.4% hallucination and 27.0% accuracy #196 keep knowledge reliability bottom-tier even as ProofBench 63% #17, MysteryMechanism 21.6% #16, and the Vals Index 53.2 #17 show task-reasoning competence; GPQA still missing.
- **Context window: 95/100.** Held: native 1M (≥1M tier); AA-LCR 74.3% #154, no ≥512K retrieval bar met.
- **Multimodal: 86/100.** Lowered from 90: the native text/image/video/audio input keeps it in the omni band, but every measured quality row is mid-field — MMMU-Pro 73.1% #122, LMArena Vision 1259 #56, SAGE 43.5% #48 — and text-only output caps it; the band floor, not the ceiling.
- **Coding: 78/100.** Held: DeepSWE 67.9% (vendor, near-frontier) plus the new WebDev 1637 #16, Vibe Code 79.0% #22, IOI #24, Code Migration #25 offset SciCode below the 55% reference, ProgramBench 0.5% (Vals), TB 4.0 ~23-29%, and still no SWE-bench Verified/LiveCodeBench rows.
- **Cost efficiency: 95/100.** Held: $0.14/$0.28 with 98% cache, $0.062/II-run, $0.0018 per report summary, and subscription plans from $6/mo covering the family — the value case is intact; slow 58 tok/s output is the trade.
- **Overall Score: 82/100.** (83 + 68 + 95 + 86 + 78) / 5 = 82.0 → 82, down from 82.8→83 on 2026-09-28 via the Multimodal correction. Best-fit: unchanged in kind — the strongest cheap omni-agent buy (Pro-level agent/coding at one-third the price), now with a measured-quality caveat on its multimodal band and a bottom-tier knowledge-reliability warning: ground everything.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-28 report and its 2026-09-29 addendum (Xiaomi's official HF model card, mimo.xiaomi.com series page, mimo.mi.com portal and pricing docs, Artificial Analysis model page and leaderboards, BenchLeader data as of 2026-10-12, BenchLM composite, Vals AI, LMArena, Epoch hub; three successful web searches; independent reviews: cruciblemark ×2, llm-stats, ai-tldr, localmodelwatch, eesel, ofox, agentplans.fyi, aihackers, tabbit, spectrumailab, cloudprice); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
