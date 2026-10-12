# GPT-5.4 — findings by GLM 5.3

- Source: OpenAI (`gpt-5.4`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's March 2026 GPT-5.4 reasoning model — "our most capable and efficient frontier model for professional work" (official launch), the first general-purpose model with **native computer use** and **tool search** (reducing tokens ~47% on tool-heavy flows), 1M context. Second-pass trackers: BenchLeader **64.2, #51 of 760 at xhigh** (full 7-setting ladder measured; trend 55→68 rising; last measured 29 Sept), BenchLM 67.03 with the agentic category at 50.2 (#45/123).
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/responses` (OpenAI Responses API, `@ai-sdk/openai`); OpenAI API (official model docs; >272K prompts at 2x input / 1.5x output; regional +10%). Still served on Zen.
- **Release / knowledge:** **2026-03-05** (official launch + Thinking system card — resolves the first-pass "early 2026, exact date not verified"; baselined against GPT-5.2 Thinking, no 5.3 Thinking exists). Knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/gpt-5.4` (Zen; no Free ID — paid only)
- **Context window:** 1.05M tokens total (official model docs; BenchLeader 1.1M).
- **Modalities:** text/image in; text out; reasoning yes (effort levels; a `gpt-5.4-thinking` sibling is the safety-card subject); tool calls (native computer use); JSON mode.
- **Pricing (as of 2026-10-12):** Zen $2.50 in / $15.00 out per 1M ≤272K ($5.00/$22.50 above 272K; cached read $0.25); BenchLeader blended $5.63/M — among the most expensive; 91 tok/s, **~155 s first answer at xhigh** (the latency cost of the best config).
- **Architecture:** proprietary; parameter count undisclosed; co-designed for NVIDIA GB200/GB300 serving; official factuality claims: individual claims 33% less likely false vs GPT-5.2, responses 18% less likely to contain any error.

### Raw benchmarks found

> First-pass rows were BenchLM listings. Second pass adds full rank reveals and gap fills (BenchLeader data as of 2026-10-12; xhigh effort unless noted).

Agent / tool use:

- **Terminal-Bench (public tbench.ai board): 81.8% #2** (effort not stated — the board's runner-up); Terminal-Bench 2.0: **75.1%** official / **58.4% #10** (Vals); Terminal-Bench 2.1: **78.3% #52** (AA); **Terminal-Bench Hard: 57.6% #11** (AA, xhigh)
- **METR Time Horizons: 74.3% #7**; OSWorld-Verified **75.0%** (official — the then-SOTA computer-use score above the 72.4% human baseline; GPT-5.2 was 47.3% per Wikipedia)
- τ²-Bench Telecom: **87.1% #80** (AA, xhigh; 98.9% BenchLM row retained); **τ³-Banking: 39.6% #31** (AA, xhigh — gap filled; mid); **GDPval-AA: 37.4% #105 normalized** (AA, xhigh — gap filled; weak)
- MCP-Atlas **70.6% #19** (Scale SEAL); Toolathlon 54.6%; BrowseComp 82.7%; Claw-Eval 60.3%; CyberGym 79.0%; DeepSearchQA **63.7% #3** (Kaggle/Google); APEX-Agents (AA) **33.3% #9**; APEX-Agents (Mercor) 52.4% #25; SkillsBench 51.7% #19; LiveBench Agentic 53.8% #35; DeepResearch Bench 35.1% #39 (low); Harvey HLAB **0.0%** #53; HiL-Bench 9.7% #15; LMArena Agent 1.2 #26; GBAEval 45.1% #10; Vending-Bench 6144.2 #19; Gert Labs 64.89%

Reasoning / knowledge:

- GPQA Diamond: **93.3% #18** (Epoch, xhigh) / **92.0% #41** (AA) / **91.7% #18** (Vals) — top-20
- HLE: **43.7% #51** (AA, xhigh) / **36.2% #8** (Scale board) / official 39.8% w/o tools, 52.1% w/ tools
- ARC-AGI-1: 93.7% #43; ARC-AGI-2: **74.0% #47** (xhigh); ARC-AGI-3: 0.2% #46 (high)
- CritPt: **23.4% #46** (AA, xhigh — mid rank, resolving the first-pass "soft spot" framing); **CL-bench: 27.9% #1** (Epoch, xhigh); CL-bench Life 21.7% #2; Chess 44.0% #18; Mystery Game 37.0% #16; LMCA 52.0% #43; DTBench 94.4% #44; LiveBench Reasoning 88.1% #23; LMArena Hard Prompts 1497 #38 (high); Kagi 63.8% #40; ForecastBench 59.5% #40
- Math cluster: **AIME 2026 99.2% #3, HMMT Feb 2026 97.7% #2**, AIME (Vals) 96.7% #5, MathArena Apex **54.2% #6**, FrontierMath Tiers 1-3 **78.6% #17** / Tier 4 **49.0% #24**, OTIS 95.3% #47, ProofBench 56.0% #22, LiveBench Mathematics 94.2% #19
- AA-LCR **82.0%**; AA-IFBench 73.9%; AA Intelligence Index 39 (BenchLM listing); FrontierMath v2 Tier 4 27.1% (BenchLM legacy row, retained)
- Knowledge: MMLU-Pro 87.5% #27; LegalBench **86.0% #14**; TaxEval 74.0% #42; CorpFin 65.3% #32; CaseLaw 63.8% #16; MedQA **96.1% #5**; MultiNRC 58.3% #7; LiveBench Data Analysis 79.3% #14; MedScribe 77.5% #64; MedCode 41.3% #52; SimpleQA Verified 45.1% #37; EBR 25.4% #12; PRBench Finance 45.6% #19 / Legal 44.4% #19 (high); HealthBench Hard 40.1%
- **Omniscience: accuracy 50.9% #59, non-hallucination 8.3% #449 (xhigh) — the 91.7% hallucination rate is CONFIRMED as real** and among the worst measured. CONFLICT retained: OpenAI's internal claims (33% fewer false claims vs GPT-5.2) and ZDNET's hands-on "low tendency to hallucinate" describe different (benign-workload) behavior than AA's adversarial knowledge eval — both framings kept, flagging that on ungrounded knowledge the model confabulates.

Coding:

- **SWE-bench Verified (Epoch): 76.9% #8** (high effort — gap filled); SWE-bench (Vals): **78.2% #30**; **SWE-Bench Pro: 59.1% #2** (Scale SEAL, xhigh — gap filled; #2 on the public board at the time)
- LiveCodeBench: **84.1% #39** (Vals; LCB Pro 87.5% BenchLM row retained); SciCode **56.6% #30** (xhigh — clears the 55% reference, gap filled); WeirdML **77.7% #24**; LiveBench Coding 77.5% #36; LMArena Coding 1521 #33 / WebDev 1465 #64
- **DeepSWE v1.1: 51.8% #46** (Epoch — gap filled; below the 74% reference); SWE Atlas Refactoring **44.3% #8** / Test Writing **44.4% #8**; GSO-Bench 31.4% #12; ALE-Bench **1607 #13**; Code Migration 35.0% #31; Vibe Code 67.4% #35; ProgramBench 0%; MirrorCode 15.6% #7; React Native Evals 85.3%; AlgoTune 1.9 #3

Long context:

- 1.05M window; AA-LCR 82.0% good; family MRCR 512K-1M only 36.6% (official) and GraphWalks 1M 9.4% — retrieval degrades in the upper half; no MRCR/RULER independent row for this ID.

Multimodal (grounding):

- MMMU-Pro **81.2%** (AA 78.4%); CharXiv 82.8%; **ScreenSpot Pro 85.4%** (top document-vision); MedXpertQA-MM 77.1% — text+image band, unchanged.

### Normalized scores (1–100)

- **Tool use: 82/100.** Raised from 78: the gap fills landed strong — Terminal-Bench public **81.8% #2**, METR #7, TB Hard 57.6% #11, OSWorld-Verified 75.0% (above human), MCP Atlas 70.6% #19, τ² 87.1%, τ³ 39.6% #31, DeepSearchQA #3, APEX-AA 33.3% #9, Skills 51.7% #19 — capped by GDPval 37.4% #105 (weak), Harvey HLAB 0.0%, HiL 9.7%, and the Vals TB2.0 harness spread (58.4% #10 vs 75.1% official).
- **Reasoning: 84/100.** Raised from 82: GPQA 93.3% #18 is top-20, HLE 36.2% #8 on the Scale board, ARC-AGI-2 74.0% #47, FrontierMath T4 49.0% #24, an elite competition-math cluster (AIME #3, HMMT #2, Apex #6), CL-bench #1, and CritPt 23.4% is rank #46 (mid, not the weakness the first pass assumed). The cap is unchanged and severe: the 91.7% AA hallucination rate (non-hallucination 8.3% #449) on ungrounded knowledge.
- **Context window: 95/100.** Held: 1.05M total (≥1M tier); family retrieval degrades in the upper half (MRCR-1M 36.6%) so no move to 100.
- **Multimodal: 70/100.** Held: text+image in, text out — top of the image-in band (MMMU-Pro 81.2%, ScreenSpot Pro 85.4%).
- **Coding: 82/100.** Raised from 75: the three gaps all filled high — SWE-bench Verified 76.9% #8 (Epoch), SWE-Bench Pro 59.1% #2 (Scale), SciCode 56.6% #30 — plus WeirdML 77.7% #24, SWE Atlas #8×2, ALE #13. Capped by DeepSWE 51.8% #46, Code Migration 35.0% #31, ProgramBench 0%, Vibe 67.4% #35, and WebDev #64.
- **Cost efficiency: 68/100.** Held: $2.50/$15 (≤272K; doubling above) between the ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60) anchors, pulled down by the $5.63 blended reality, ~155 s first answers at xhigh, and successors at better value.
- **Overall Score: 82.6/100.** (82 + 84 + 95 + 70 + 82) / 5 = 82.6, up from 80.0 via the Tool and Coding gap fills. Best-fit: a dependable tool-caller and computer-use pioneer with an elite math/reasoning core and a genuinely strong Scale-SEAL coding profile — but treat ungrounded knowledge as unreliable (91.7% hallucination) and prefer GPT-5.5+ for new deployments at equal or better price.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (OpenAI's official GPT-5.4 launch post, Thinking system card (openai.com + deploymentsafety.openai.com + PDF mirrors), and API model docs — release date, >272K pricing, regional uplift, the official evals tables carried in the GPT-5.5 announcement, Artificial Analysis model benchmarks with rank reveals — filling the SWE-bench Verified/SWE-Pro/SciCode/τ³/GDPval/DeepSWE gaps, BenchLeader data as of 2026-10-12 with the 7-setting ladder, Epoch AI Benchmarking Hub, ARC Prize, Scale SEAL, Vals AI, LiveBench, LMArena, METR, Mercor APEX, MathArena, Kaggle/Google; three successful web searches; reviews: aitoolbriefing, buildfastwithai, nerdleveltech, aimagazine, digitalapplied, Wikipedia, interestingengineering, umesh-malik, aitoolland, apiyi, layerlens, roborhythms, ai-herald, developmentstoday); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
