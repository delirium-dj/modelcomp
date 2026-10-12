# Grok 4.6 — findings by GLM 5.3

- Source: xAI (`grok-4.6`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's August 2026 flagship reasoning model — "agent-first... built for coding, agentic tasks, and knowledge work" with native vision understanding, real-time X/web grounding, and top-tier knowledge honesty. Second-pass trackers: BenchLeader **64.2, #53 of 760 at medium effort** — an inverted ladder where **medium beats high (63.2 #63) and xhigh (62.6 #76)**, and xhigh costs 4.7x low for +3.2 points. AA's launch article: "effectively the same Intelligence Index score as GPT-5.6 Sol at a fraction of the output token price."
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/responses` (OpenAI Responses API); xAI API (docs.x.ai; announcement x.ai/news/grok-4-6); **Amazon Bedrock partner model** and **Google Cloud Model Garden / Gemini Enterprise Agent Platform** (new this pass); SpaceXAI endpoints on OpenRouter (one at $2.20/$6.60; one Bedrock endpoint measured at a poor 6 tok/s / 220 s TTFT). A **Grok 4.6 Fast variant** exists at double the standard price for latency-sensitive work.
- **Release / knowledge:** **2026-08-11/12** (BenchLeader 08-11; launch coverage and llm-stats 08-12 — the first-pass 08-12 date stands with the 08-11 listing noted); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/grok-4.6` (Zen; no Free ID — paid only)
- **Context window:** 500K tokens total (AA/BenchLM/Bedrock model card, unchanged).
- **Modalities:** **text + image in** (native vision understanding per model card; apxml: "frontier multimodal intelligence model... native vision"), text out; real-time X and web grounding; reasoning yes (low/medium/high/xhigh — **medium is the measured best**); tool calls; JSON mode.
- **Pricing (as of 2026-10-12):** Zen $2.00 in / $6.00 out per 1M ≤200K ($4.00/$12.00 above the 200K cliff; cached read $0.50); BenchLeader blended $3.00/M, 55 tok/s (slower than most), ~34 s first answers, $1.14/II run; chat ~$0.0026.
- **Architecture:** proprietary, **1.5T-scale family** (36-page official model card via NOPE insights — resolves "parameter count undisclosed" at family level); trained on the Colossus supercluster with **supplemental training on anonymized Cursor work**; the card documents safety domains (cyber, bio knowledge/agentic, jailbreak robustness, CBRN refusals) alongside acknowledged factuality and behavior regressions.

### Raw benchmarks found

> First-pass rows were BenchLM listings (high effort). Second pass adds full rank reveals (BenchLeader data as of 2026-10-12; high effort unless noted) and the AA launch article.

Agent / tool use:

- **τ³-Banking: 50.7% #2** (AA, high — the board's runner-up; 44.3% #17 at medium); **GDPval-AA: 56.1% #23 normalized** (AA, high; 55.9% #25 medium); **AA-Briefcase: 1535-1545 #18-20** (current; AA's launch-day Elo was 1577 on its private long-horizon knowledge benchmark — revised down as the board settled, both retained)
- **Terminal-Bench 2.1: 88.4% #10** (AA, high) / 84.3% #30 (medium) / **78.3% #13** (Vals); Terminal-Bench 3.0: 26.5%; **Terminal-Bench 4.0: 21.2% #56** (AA, high) / 17.2% #24 (Vals); Terminal-Bench (public): 20.3% #70; Terminal-Bench Science 11.4% #10 (Vals)
- **APEX-Agents: 65.3% #7** (Mercor); **EnterpriseOps-Gym 48.3% #5**; **Tax Agent 70.8% #8**; **Legal Research 48.1% #8**; **Harvey HLAB 15.8% #6**; SkillsBench 55.8% #13; Finance Agent 53.7% #26; CyberBench 67.7% #25; Analyst Agent 41.3% #16; AutomationBench (AA) **66.7% #8**; GDP.pdf 17.0% #36; Vending-Bench **9047.0 #9**; Time Horizon KSP 5.8% #10; LMArena Agent 1.1 #28 (weak); LiveBench Agentic 57.0% #23
- AA Agentic Index 53.4%; Claw-Eval: no verified public score found (unchanged)

Reasoning / knowledge:

- **GPQA Diamond: 95.0% #4** (AA, high) / **94.7% #3** (Vals) / 94.0% #11 (Epoch) — elite top-5
- HLE: **42.9% #56** (AA, high — above the 40% bar, mid rank)
- **AA Intelligence Index: 44.3 #37** (AA, high; settled — the launch-day "61 on AA" press figure is the pre-settling rescale pattern, discarded with note); AA-LCR **80.3% #66** (high); MLCR 12.2% #30 (weak); CritPt **17.1% #76** (high — weak)
- ARC-AGI-1 87.0% #87; ARC-AGI-2 **65.1% #67** (high — weak rank); ARC-AGI-3 2.1% #26 (xhigh)
- SimpleBench **75.9% #8**; LiveBench Reasoning **90.5% #12**; LMArena Hard Prompts 1480 #64; MysteryMechanism 30.6% #11; Chess 40.0% #24; Mystery Game 34.0% #22; LMCA 48.5% #61; DTBench **97.3% #8**
- Math: OTIS 97.8-99.2% #14-26, FrontierMath Tiers 1-3 66.0% #30 / Tier 4 31.7% #33 (xhigh), ProofBench 51.0% #27, LiveBench Mathematics 92.6% #27, LMArena Maths 1451 #75
- Knowledge: MMLU-Pro **89.4% #11**; LegalBench **86.3% #13**; BioMysteryBench 72.2% #8; MedScribe 86.5% #20; Public Benefits 66.8% #14; CorpFin 66.2% #20; TaxEval 71.1% #81; EMB 62.7% #28; MedCode 44.7% #38; SimpleQA Verified 49.3% #27; EBR 30.5% #10; LiveBench Data Analysis 73.9% #39; LiveBench Language **83.7% #18** / IF 71.9% #20
- **Omniscience: accuracy 48.2% #70 (high), non-hallucination 65.7% #57 (high) / 76.0% #17 (medium)** — ~34% hallucination at high, **the best honesty profile in this report set** (emergent.sh: "wins knowledge work... hides a 65.7% non-hallucination rate" — i.e., its one soft honesty read is still elite vs peers)
- ECI 156.4 #21; LiveBench global 78.0% #17; Vals Index 52.1 #20

Coding:

- **SWE-bench (Vals): 95.6% #4** (high — elite); **LiveCodeBench: 88.2% #7** (Vals, high); SciCode **56.5% #32** (high — clears the 55% reference); DeepSWE **65.2% #28** (high; 67.5% #20 at medium — just under the 74% reference); WeirdML 67.3% #37; IOI 47.6% #25; Code Migration 44.6% #17; Vibe Code v1.1 76.2% #27; VCB 14.8% #15; CursorBench 40.4% #27 (high; ladder 33.4→41.4); FrontierSWE 25.3% #12; FrontierCode 48.0% #10; ALE-Bench 1508.1 #19; Bug Hunt 27 fixes; VulcanBench v3 87.0%
- **LMArena WebDev: 1617 #24**; LMArena Coding 1508 #59; LiveBench Coding 76.8% #43; TB2.1 rows double as coding-agent evidence
- Vibe Code Bench: found this pass (76.2% #27) — gap filled

Long context:

- 500K window; AA-LCR 80.3% #66; MLCR 12.2% #30 weak; LMArena Document 1461 #24; no MRCR/RULER number (unchanged).

Multimodal (grounding):

- Native vision per model card, but measured quality is weak: **LMArena Vision 1263 #52, SAGE 28.9% #81**, MortgageTax 64.2% #46; Blueprint-Bench 2 33.2% #11; Design Arena 1302. Text+image band, low end.

### Normalized scores (1–100)

- **Tool use: 89/100.** Raised from 88: the rank reveals strengthen the case — τ³-Banking **50.7% #2** (better than "clears the ref"), APEX 65.3% #7, TB2.1 88.4% #10, Tax #8, Legal Research #8, EnterpriseOps #5, HLAB #6, AutomationBench #8, Vending #9 — a broad top-10 agent profile at mid price. Capped by LMArena Agent 1.1 #28, TB 4.0 21.2% #56, public-board TB 20.3% #70, and the missing Claw-Eval row.
- **Reasoning: 88/100.** Held: GPQA 95.0% #4 is elite top-5, SimpleBench #8 and LiveBench Reasoning #12 are top-tier, and the honesty profile (non-hallucination #17-57, ~34% hallucination) is the best in this report set; ARC-AGI-2 65.1% #67, CritPt 17.1% #76, ARC-AGI-3 2.1%, FrontierMath T4 31.7%, and the settled AA II 44.3 #37 cap it.
- **Context window: 87/100.** Held: 500K total (bottom of the 500K-1M band); AA-LCR 80.3% #66 mid, MLCR 12.2% weak.
- **Multimodal: 66/100.** Lowered from 70: the model card claims native vision, but every measured quality row is weak — LMArena Vision 1263 #52, SAGE 28.9% #81, MortgageTax 64.2% #46 — keeping it in the image-in band near the bottom despite the multimodal marketing.
- **Coding: 89/100.** Held: SWE-bench (Vals) 95.6% #4 and LiveCodeBench 88.2% #7 are elite; SciCode 56.5% #32 and DeepSWE 65.2-67.5% are solid; the long tail (CursorBench 40.4% #27, FrontierSWE 25.3% #12, Code Migration 44.6% #17, IOI 47.6% #25, TB 4.0 21.2%) caps below 90.
- **Cost efficiency: 85/100.** Held: $2/$6 ≤200K is cheaper than the ~$1.25/$4.25 (≈88) anchor on output; the 200K price cliff, 55 tok/s decode, and slow Bedrock endpoint shave points. The medium-effort optimum is a cost bonus (best quality at the cheapest measured setting).
- **Overall Score: 83.8/100.** (89 + 88 + 87 + 66 + 89) / 5 = 83.8, down from 84.4 via the Multimodal correction. Best-fit unchanged in kind: the honest-knowledge agent — board-second τ³, elite SWE-bench/GPQA, and the best hallucination profile at mid price; route vision-heavy work elsewhere and run it at medium effort.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (xAI's official 36-page model card PDF (media.x.ai, Cursor mirror), launch announcement, AA's own launch analysis article — the 1577 Briefcase debut and GPT-5.6-Sol value framing — plus Bedrock and Google Cloud partner model cards, Artificial Analysis model benchmarks with rank reveals, BenchLeader data as of 2026-10-12 with the full effort ladder, Epoch AI Benchmarking Hub, ARC Prize, Vals AI, LiveBench, LMArena, Mercor APEX, MathArena; three successful web searches; reviews: layer3labs ×3, binaryverseai, emergent.sh, llm-stats ×2, theairankings, aitoolsreview, geotoolbox, leanware, zharf, felloai, truescho, grokai.org, ai-x.chat, apxml ×2, NOPE insights, mygreatlearning); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
