# Muse Spark 1.2 — findings by GLM 5.3

- Source: Meta (`meta/muse-spark-1.2`)
- Date: 2026-10-17 (UTC) — third-pass re-research of the 2026-09-24 report (second pass 2026-10-11)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 (covers the Contributor Free tier — same weights)
- **Short description:** Meta's coding-focused point release of Muse Spark 1.1 (Aug 2026), co-trained with the Muse Code terminal agent — same 1M window, closed weights; the line's value pick before 1.3 shipped. Per the tier-identity rule this file covers every 1.2 tier name (Contributor, Free, Standard); 1.3 has since superseded it on most axes.
- **Provider / access:** Meta Model API (dev.meta.ai, OpenAI-SDK compatible; OpenRouter); OpenCode Zen `https://opencode.ai/zen/v1/responses` (`opencode/muse-spark-1.2`, openai-responses API). Second-pass availability fact: the **limited-time Zen Contributor Free tier for 1.2 has been superseded — Zen docs (2026-10-11) now feature "Muse Spark 1.3 Contributor Free" as the free Meta tier, and OpenCode's own data page names `muse-spark-1.3-contributor` the most-used Meta model**; a GitHub issue (2026-08-25) documents transient 1.2-free outages even before that.
- **Release / knowledge:** 2026-08-05 (with Muse Code); knowledge cutoff not publicly disclosed.
- **IDs:** Zen `opencode/muse-spark-1.2` (paid); the prior `opencode/muse-spark-1.2-contributor-free` Zen free tier appears retired/superseded; standard Meta ID `muse-spark-1.2`; Meta first-party budget ID `muse-spark-1.2-contributor` ($0.10/$0.20, data-consent tier).
- **Context window:** 1M tokens total (AA/BenchLM; Zen endpoint listing: 1,048,576 context / **131,072 max output** — second-pass spec).
- **Modalities:** text/image/speech/video in; text out (AA technical specs; designforonline's 2026-10-08 profile concurs: "text, image, file, audio, and video input"); reasoning yes (xhigh); tool calls; JSON mode. Conflict flagged: the Zen endpoint listing exposes **text+image input only** — the serving endpoint may not carry the full omni input set.
- **Pricing (as of 2026-10-11):** standard $1.25 in / $4.25 out per 1M, cached $0.15 (Meta first-party; llm-releases confirms); `muse-spark-1.2-contributor` $0.10/$0.20 (prompts/completions may train future Meta models — not for confidential code). AA's launch article: "improved agentic performance at **higher cost per task**" than 1.1; BenchLeader blended $2.00/M, 325 tok/s (fastest quarter), first answer ~18 s, $0.975 per Intelligence-Index run.
- **Architecture:** proprietary; parameter count undisclosed; co-trained with Muse Code for long repository-scale work.

### Raw benchmarks found

> Vendor = Meta 1.2 model page / launch scorecard (also carried as the 1.2 column of the current 1.3 model page); AA = Artificial Analysis; BenchLeader data as of 2026-10-12.

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (vendor, with Muse Code) vs Vals common-harness **69.7% #28** and AA **80.2% #44** — the vendor number was already flagged at launch as unlisted on public boards; the two independent reads bracket it lower
- Terminal-Bench 4.0: **6.1% #32** (Vals) / **7.1% #88** (AA) — a very weak spot, far below 1.3's 16.7-33.3%
- GDPval-AA: **1631 Elo** vendor / **48.9% #50 normalized** (AA — mid-field; the 2026-09-24 report's "just under the frontier bars" read is corrected by the revealed rank)
- AA Agentic Index: **44.0%**; APEX-Agents: **36.4% #43** (Mercor); τ³-Banking: **34.9% #48** (AA — versus 1.3's 50.5% #3); GDP.pdf: **12.0-16.0% #34**
- MCP-Atlas: **90.3%** (vendor/Benchgen at launch)
- Vals professional agents (the elite cluster): Harvey HLAB **25.4% #1**, Finance Agent v2 **60.6% #3**, CorpFin **70.9% #5**, MedScribe **90.1% #5**, Public Benefits **68.5% #8**, SkillsBench 53.0% #17, Legal Research 43.8% #17, Tax Agent 56.9% #36, CyberBench 69.5% #20
- LiveBench Agentic Coding: **57.6% #19**; LMArena Agent: **-3.7 #38**; MazeBench (ASCII, no tools) **0%** (new this pass — near-floor); GDPval normalized updated **48.6%** (from 48.9%)
- Claw-Eval / ClawProBench / Toolathlon: no verified public score found for this ID (unchanged)

Reasoning / knowledge:

- GPQA Diamond: **90.4% — #61** (AA; above the 90% bar but mid-field rank on a saturated board)
- HLE: **45.5% #46** (AA — above the 40% reference, mid-field)
- AA Intelligence Index: **39.6 #63** current v4.3.2 (AA) — CONFLICT with AA's own launch article (2026-08-05), which reported **54 (xhigh)** on the then-current index version and "Meta next to SpaceXAI in a tie for third place amongst US labs"; same index-rescale pattern as 1.3's 61-62 → 48.1, both retained
- CritPt: **17.7% — #69** (AA — genuinely weak this time; 1.3's 24.9% sits at #42)
- AA-LCR: **79.0% #100** (AA — the rank reveals long-context reasoning as weaker than the raw number suggested); LMCA **48.4% #62**; DTBench **94.7% #40**
- LiveBench: Reasoning **90.0% #13**, global **78.0% #19**, Mathematics **91.2% #30**, Data Analysis **76.5% #32**, Instruction Following **74.3% #11**, Language **78.6% #37**
- LMArena: Hard Prompts **1508 #18**, Text **1492 #11**, Multi-turn **1506 #7**, Maths **1481 #37**, IF **1471 #35**, Creative **1454 #34**, Longer Queries **1489 #28**
- SimpleBench: **74.5% #9** (Epoch hub); SimpleQA Verified: **60.3% #15**; ProofBench: **43.0% #34**; WeirdML: **60.3% #50**
- MMLU-Pro: **88.3% #20** (Vals); LegalBench **85.3% #21**; TaxEval **80.4% #1**; BioMysteryBench 64.8% #14; EMB 57.0% #37; MedCode 49.4% #21
- Omniscience: index **27.2 #41**, accuracy **45.4% #88**, non-hallucination **66.7% #54** (33.3% hallucination rate — reasonable honesty, mid knowledge)
- Composites: BenchLM **66.48 #28 of 889** (22 of 625 rows); BenchLeader **62.7 ±4.4, #72 of 760** (xhigh; trend 56→69 rising; Reasoning 70 its best category); Epoch Capabilities Index **154.9 #32**; Vals Index **49.3 #27**
- Independent hands-on: goldiebench 50 one-shot tasks — **7.55/10** average, 0 gold / 3 silver / 4 bronze (decent, no podium); glbgpt 3/3 coding tests passed

Coding:

- SWE-bench (Vals): **86.6% #13** — the strongest coding row
- DeepSWE: **59.3%** vendor / **54.9% #38** (Epoch — both retained; well under the 74% frontier bar either way)
- SciCode: **56.4% #35** (SciCode board) / **57.4% #24** (AA); AA Coding Index **72.2%**; WeirdML 60.3% #50
- FrontierSWE v2: **12.0% #17** (Proximal — weak); Terminal-Bench 4.0 (see agent rows — weak); IOI **21.8% #34**; Code Migration **29.9% #35**; Vibe Code Bench v1.1 **79.1% #21** (Vals)
- LiveBench Coding **77.5% #36**; LMArena Coding **1531 #19**; LMArena WebDev **1533 #46**; VulcanBench v3 **87.0%** (effort study)
- LiveCodeBench: no verified public score found for this ID (unchanged)
- BenchLeader category: Coding **55 — the model's lowest**

Long context:

- 1M window; second-pass fill of a 2026-09-24 gap: Meta's current 1.3-page comparison table now publishes 1.2's MRCR v2 rows — **66.3% (256K-512K)** and **55.5% (512K-1M)** (official) — well below the 98% full-credit bar; AA-LCR 79.0% #100.

Multimodal (grounding):

- Vals Multimodal Index: **69.8% #6** (elite, corroborates the omni-input band); MMMU-Pro (Vals) **86.1% #22**; LMArena Vision **1305 #17**; SAGE 47.7% #30; MortgageTax 65.4% #42; Design Arena Website **1315** (OpenRouter via BenchLM — drifted from 1319)

### Normalized scores (1–100)

- **Tool use: 82/100.** Lowered from 85: the revealed independent ranks correct the 2026-09-24 read — GDPval normalized 48.9% is #50 (mid-field, not "just under the frontier bars"), TB2.1 reads 69.7% #28 / 80.2% #44 against the vendor's 82.9%, TB 4.0 is 6-7% (very weak), APEX-Agents #43, τ³-Banking #48. Held up by a genuinely elite finance/legal professional cluster: Harvey HLAB #1, Finance Agent #3, CorpFin #5, MedScribe #5, Public Benefits #8, plus MCP-Atlas 90.3% and SkillsBench #17 — a specialist, not a generalist, agent.
- **Reasoning: 80/100.** Lowered from 85: GPQA 90.4% is only #61, HLE 45.5% #46, AA II 39.6 #63 on the current index version, CritPt 17.7% #69 (a true weakness, unlike 1.3's), AA-LCR 79.0% #100. The saving graces — LiveBench Reasoning 90.0% #13, SimpleBench 74.5% #9, LMArena Hard Prompts 1508 #18, MMLU-Pro 88.3% #20, Multi-turn 1506 #7 — keep it mid-high, clearly a notch below 1.3 (90) and Gemini 4 Argon (85).
- **Context window: 95/100.** Held: 1M total (≥1M tier) with 131K max output now documented; the newly published official MRCR rows (66.3%/55.5%) and AA-LCR #100 confirm bottom-of-tier retrieval — no change to the window tier.
- **Multimodal: 90/100.** Held: AA-verified text/image/speech/video input with the Vals Multimodal Index at #6 (elite), MMMU-Pro 86.1% #22, and LMArena Vision 1305 #17; capped by text-only output and the flagged Zen-endpoint listing that exposes only text+image.
- **Coding: 80/100.** Lowered from 82: BenchLeader scores Coding 55 (the model's lowest category) and the new ranks are mid-field across the board — LiveBench Coding #36, WebDev #46, IOI #34, Code Migration #35, DeepSWE #38, FrontierSWE 12.0% #17, TB 4.0 6-7% — with SWE-bench V 86.6% #13, LMArena Coding #19, Vibe Code #21, and VulcanBench 87.0% the counterweights.
- **Cost efficiency: 88/100.** Lowered from 100: the limited-time Zen Contributor Free tier ($0) has been superseded by 1.3 Contributor Free — the live pricing is the standard $1.25/$4.25 (≈88 per the methodology anchors), with Meta's $0.10/$0.20 contributor tier as the data-consent alternative and AA's "higher cost per task than 1.1" as the efficiency caveat; 325 tok/s (fastest quarter) partially offsets.
- **Overall Score: 85/100.** (82 + 80 + 95 + 90 + 80) / 5 = 85.4 → 85, down from 87.4 on 2026-09-24: the second pass revealed mid-field ranks on most general benches (the free-tier assumption also lapsed). Best-fit: a fast, cheap specialist for finance/legal/tax agent work and long-context coding with full omni input — but 1.3 supersedes it at the same price on nearly every axis, so choose 1.2 for endpoint stability or while 1.3 access is constrained.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-17 (first researched 2026-09-24; second pass 2026-10-11; third pass 2026-10-17)
- Method: public internet research, third pass over the prior reports (Meta's 1.2 launch scorecard and the 1.2 column of the 1.3 model page, BenchLM 23-row profile updated 2026-10-17 — composite 65.84 #34/954 (from 66.48 #28/889, cohort growth), added MazeBench 0%, Design Arena drifted 1319→1315; Artificial Analysis, BenchLeader, Vals, LiveBench, LMArena, Epoch hub, OpenCode Zen docs); scores are normalized 1-100 interpretations, not official vendor scores. No dimension scores changed.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
