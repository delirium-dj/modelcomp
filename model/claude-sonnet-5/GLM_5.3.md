# Claude Sonnet 5 — findings by GLM 5.3

- Source: Anthropic (`claude-sonnet-5`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's June 2026 Sonnet-class reasoning model — "the most agentic Sonnet ever shipped" and the default model for every Free and Pro claude.ai user from launch day (2026-06-30). Second-pass succession fact: **Sonnet 5.5 (2026-09-28) is a clear upgrade — 30%+ faster, up to 30% cheaper** — leaving Sonnet 5 the legacy tier. Top use case: everyday agentic coding and computer-use at Sonnet pricing.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/messages` (Anthropic Messages API, `@ai-sdk/anthropic`); Anthropic API and cloud partners (AWS, Google Cloud, Azure); Claude Code. Composite trackers: BenchLeader **60.5, #102 of 760 at high effort** — an inverted ladder where **high beats xhigh (58.6 #138) and max (58.7 #135)**; trend 49→64 rising; last measured 9 Oct 2026. BenchLM 65.9 #33 (26 rows).
- **Release / knowledge:** 2026-06-30; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/claude-sonnet-5` (Zen; no Free ID — paid only)
- **Context window:** 1M tokens total (AA/BenchLM).
- **Modalities:** text/image in; text out; reasoning yes (adaptive, none→max; high is the best-measured setting); tool calls; JSON mode.
- **Pricing (as of 2026-10-12, CORRECTED):** **$2/$10 was introductory and expired 2026-08-31 — standard pricing is $3.00 in / $15.00 out per 1M** (cached read $0.20-0.60). Compounding factor: Sonnet 5 ships the new Opus-4.7-family **tokenizer, mapping the same text to ~27-42% more tokens than Sonnet 4.6** (~130 tokens per 100; up to 41% more for prose — byteiota, synthorai, getbind, magica), so "same price" is effectively 0-17%+ more expensive per character before verbosity. BenchLeader blended $4.00/M, 62 tok/s, first answer ~12 s at high but **204 s at max**, $1.79/II run, and **max effort costs 10x low ($0.509 → $5.09 per task)** — the verbosity/tokenizer catch is the defining cost fact.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (vendor) / **80.5% #42** (AA, max) / **74.5% #18** (Vals); Terminal-Bench (public): **12.4% #78** (max — weak); Terminal-Bench 3.0: 14.6%; Terminal-Bench 4.0: ladder 2.0%→**14.1% #69** (AA, max) / 9.6% #30 (Vals); Terminal-Bench Science: 2.9% #23
- BrowseComp **84.7%**; OSWorld-Verified **81.2%** (vendor); HLE w/ tools 57.4%
- GDPval-AA: **1603 Elo** vendor / normalized ladder 35.7%→**48.3% #53** (AA, max — mid-field, correcting the first-pass "just under the frontier bars"); AA Agentic Index 44.3%; AA-AnalystAgent **46.3% #11**
- τ³-Banking: **37.3% #41** (AA, max — found this pass; mid-weak); APEX-Agents **54.5% #21**; LMArena Agent 4.9 #13; LiveBench Agentic Coding **59.4% #16** (xhigh); GBAEval **65.3% #5**; Vending-Bench 6377.7 #17
- Vals professional agents (effort not stated): CyberBench 61.9% #29, Tax Agent 62.3% #27, Finance Agent 53.9% #24, Legal Research 41.8% #19, SkillsBench 46.5% #25, Harvey HLAB 5.0% #30
- Claw-Eval / Toolathlon / MCP-Atlas: no verified public score found (unchanged)

Reasoning / knowledge:

- GPQA Diamond: **91.1% #50** (AA, max) / **90.5% #40** (Epoch, xhigh) / 80.3% #120 (max, Epoch — effort-sensitive) / **88.9% #31** (Vals)
- HLE (AA): ladder 19.1%→**41.3% #72** (max) — above the 40% reference at max effort only
- CritPt: ladder 1.1%→**16.9% #77** (AA, max — weak); Mystery Game Puzzles 35.0% #20 (xhigh); Chess 35.0% #40 (xhigh); LMCA ~49-50% #49-58; DTBench ladder 73.6%→92.5% #54 (max); SimpleBench 60.6% #29; BTF-3 14.2% #4 (xhigh); ForecastBench 61.1% #15
- Math: FrontierMath 65.6% #32 / 29.3% #36 (max), OTIS 94.7% #48 (xhigh), **ProofBench 77.0% #12** (max), LiveBench Mathematics 92.9% #24 (xhigh), LMArena Maths 1473 #48 (high)
- LiveBench Reasoning **88.7% #19** (xhigh); LiveBench global (via composite 65); LMArena Hard Prompts 1490 #47 (high)
- Knowledge: MMLU-Pro 87.5% #26; LegalBench 83.9% #44; CorpFin **67.0% #14**; TaxEval **75.6% #14**; EMB 66.3% #19; Public Benefits 66.0% #16; MedCode 47.5% #31; MedScribe 76.0% #73; DrugDiscovery 50.0% #6 (max); EQ-Bench 4 **1236 #10** — but SimpleQA Verified **33.7% #53** (weak factual precision) and Omniscience accuracy 40.0% #118 (weak breadth)
- Omniscience (effort-dependent honesty): at max the index is 16.4 #74 with non-hallucination **60.6% #69** (~39% hallucination — decent); at low effort it collapses (non-hallucination 27.2% #222, index −8.2) — the first-pass "relatively low hallucination" holds only at high/max effort
- AA Intelligence Index: **38** (max-era listing, #54/211 cohort; current rank ~#72 on HLE-analogous AA boards); AA-LCR **82.0%**; MLCR-AA 55.0%

Coding:

- SWE-bench Verified: **85.2%** (vendor) / **79.6% #25** (Vals); LiveCodeBench (Vals): 82.4% **#51**; LiveBench Coding **80.7% #18** (xhigh); Vibe Code Bench v1.1 **81.3% #19**; WeirdML 68.8% #35; ALE-Bench 1463.1 #20
- **DeepSWE v1.1: 53.9% #41** (Epoch, max — found this pass; effort ladder 30.5% low → 53.9% max; well under the 74% frontier reference)
- SciCode **54.3% #56** (just under the 55% reference); AA Coding Index 71.5%; SWE-bench Pro 63.2%; SWE Multilingual 78.3% / Multimodal 28.1%; VulcanBench CII 89.2%; Code Migration 44.4% #19; IOI 45.0% #26; GSO 37.3% #10; FrontierCode 42.7% #17; CursorBench 34.1% #39 (max); ProgramBench 0.0%; VCB 13.8% #16
- LMArena Coding 1519 #36 / WebDev 1541 #42 (high) — mid

Long context:

- 1M window; AA-LCR 82.0% (strong); no MRCR/RULER retrieval number published (unchanged).

Multimodal (grounding):

- MMMU-Pro 77.3% #79 (AA, max) / **83.0% #35** (Vals); CharXiv **88.3%** (w/o tools 77%); LMArena Vision 1274 #41; Design Arena 1286 — text+image band.

### Normalized scores (1–100)

- **Tool use: 82/100.** Lowered from 85: the normalized/rank data corrects the first-pass read — GDPval 48.3% #53 (mid-field, not near-frontier), τ³ 37.3% #41, public Terminal-Bench 12.4% #78, TB 4.0 14.1% #69, TB Science 2.9%, HLAB 5.0%. Retained strengths: OSWorld-Verified 81.2%, BrowseComp 84.7%, TB2.1 80.5% #42, APEX 54.5% #21, LiveBench Agentic 59.4% #16, GBAEval #5, Analyst #11.
- **Reasoning: 83/100.** Lowered from 85: GPQA 91.1% #50, LiveBench Reasoning 88.7% #19, ProofBench 77% #12, and the strong math cluster hold the top end, but CritPt 16.9% #77, HLE 41.3% #72 (max-only), SimpleQA 33.7% #53, Omniscience accuracy 40.0% #118, and the effort-dependent honesty collapse at low settings place it a notch below the first-pass estimate.
- **Context window: 95/100.** Held: 1M total with AA-LCR 82.0%; no ≥512K retrieval bar met.
- **Multimodal: 70/100.** Held: text+image in, text out; CharXiv 88.3% and Vals MMMU-Pro 83.0% #35 keep the top of the image-in band; Vision #41 is mid.
- **Coding: 80/100.** Lowered from 82: the newly found DeepSWE 53.9% #41 (well under the 74% reference), SciCode 54.3% below the bar, LiveCodeBench #51, CursorBench 34.1% #39, TB 4.0 14.1%, and SWE Multimodal 28.1% offset SWE-bench V 85.2%/79.6% #25, LiveBench Coding #18, and Vibe Code #19.
- **Cost efficiency: 55/100.** Lowered from 60: the second pass found the pricing fine print — the $2/$10 rate the first pass scored was an expired introductory tier; the standard **$3/$15** sits at the ~60 anchor itself, and the new tokenizer's ~27-42% token inflation plus max-effort's 10x cost ladder ($5.09/task, 204 s first answers) push effective cost clearly below it.
- **Overall Score: 82/100.** (82 + 83 + 95 + 70 + 80) / 5 = 82.0 → 82, down from 83.4 on 2026-09-24: revealed ranks (GDPval #53, DeepSWE #41, CritPt #77), the pricing reversion, and the tokenizer catch all temper the first-pass read. Best-fit: a dependable everyday agentic coder near Opus-4.8 quality at Sonnet prices — run it at high (not max) effort, budget for the tokenizer, and note Sonnet 5.5 now delivers the same role 30% faster and cheaper.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (Anthropic's Sonnet 5 launch materials and the Sonnet 5.5 announcement, Artificial Analysis model benchmarks with the full effort ladder, BenchLeader data as of 2026-10-12, BenchLM composite via its October snapshot, Vals AI, LiveBench, LMArena, Epoch hub, Scale SEAL, Mercor APEX, EQ-Bench; two successful web searches plus the tokenizer-coverage batch — mr.technology, getbind, medux, magica, umesh-malik, vinoth12940, synthorai, byteiota, ai-girls, reapi, danilchenko, codersera, theairankings, buildfastwithai); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
