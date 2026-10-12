# Gemini 3 Flash — findings by GLM 5.3

- Source: Google (`gemini-3-flash`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash (Preview, `gemini-3-flash-preview`)
- **Short description:** Google's December 2025 Flash model — "Pro-grade reasoning at Flash-level speed and a lower cost", the **default model in the Gemini app and AI Mode in Search** from launch. The original 3-series Flash, several generations behind 3.5-3.8. Top use case: cheap, very fast multimodal processing and routine coding. Second-pass key correction: the 2026-09-24 report tracked the **non-reasoning** config (as AA/BenchLM listings did); BenchLeader's full 7-setting ladder shows **thinking is the best configuration (59.2 #122)**, well above no-reasoning (53.4 #273) — the first-pass note anticipated exactly this.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/models/gemini-3-flash` (Google AI SDK); Google AI Studio / Gemini API (official model-evaluation PDF: pass@1, default sampling, `gemini-3-flash-preview`).
- **Release / knowledge:** 2025-12-17 (preview); knowledge cutoff January 2025 (AA).
- **IDs:** `opencode/gemini-3-flash` (Zen; no Free ID — paid only)
- **Context window:** 1M tokens total (AA/BenchLM).
- **Modalities:** text/image/speech/video in; text out (AA launch article: "second highest of any model on MMMU-Pro" at release, behind only Gemini 3 Pro); effort ladder none→thinking; tool calls; JSON mode.
- **Pricing (as of 2026-10-12):** Zen $0.50 in / $3.00 out per 1M (cached read $0.05); BenchLeader blended $1.13/M, **208 tok/s (fastest quarter)**, 5.8 s first answers, chat ~$0.0011 — the speed-price combination remains its identity.
- **Architecture:** proprietary; parameter count undisclosed. Composite trackers: BenchLeader **59.2, #122 of 760 at thinking** (trend 48→67 rising; high 58.4 #141, no-reasoning 53.4 #273); BenchLM 54.46; AA II (thinking) ~36-40 territory vs the 18-class no-reasoning estimate (the launch-era press claim of "AA II 71" is pre-settling noise, discarded).

### Raw benchmarks found

> Effort labels matter: first-pass rows were the non-reasoning config; second-pass rows add the thinking/high configs. Both retained.

Agent / tool use:

- **τ²-bench: 83.5% #4** (taubench.com, high) / AA 80.4% #122 (thinking) — the tool-use headline; Tau2 non-reasoning 43.3% #215 (first-pass row, retained)
- **Terminal-Bench (public): 64.3% #12**; Terminal-Bench 2.0: **51.7% #18** (Vals, high); Terminal-Bench 2.1: 53.9% #51 (Vals, high — first-pass row confirmed); Terminal-Bench Hard: 38.6% #61 (thinking)
- MCP Atlas: **62.0% #26** (Scale SEAL); FACTS Search **80.9% #9**; DeepResearch Bench 47.9-49.8% #11-21; BALROG 48.1% #7; Poker Agent 1100.2% #3; BrowseComp 16.9% #3; Vending-Bench 3634.7 #43
- τ³-Banking: **20.8% #91** (AA, thinking variant — found this pass; weak); APEX-Agents (AA) 27.7% #16; Finance Agent 42.5% #50; Tax Agent 37.6% #47; Legal Research 18.3% #47; Harvey HLAB **0.0%** #53
- Claw-Eval 49.2%; Gert Labs 56.63%; JobBench 11.4%; GDPval-AA: no verified public score found (unchanged)

Reasoning / knowledge:

- GPQA Diamond: **89.4% #51** (Epoch, high) / **89.8% #67** (AA, thinking) / **87.9% #36** (Vals, high) / 81.2% #178 (AA, no-reasoning — the first-pass row) / 90.4% (vendor launch claim)
- HLE: **36.6% #103** (AA, thinking) vs 15.0% #241 (no-reasoning) — the config correction doubles the HLE read; still under the 40% reference
- CritPt: 8.6% #124 (thinking) / 1.4% #197 (no-reasoning) — weak at every effort
- ARC-AGI-2: ladder 3.3% (minimal) → **33.6% #112** (high); ARC-AGI-1: 84.7% #101 (high)
- Math cluster: AIME 2026 **96.7% #6**, AIME (Vals) **95.6% #8**, OTIS 95.6% #39, MGSM 93.3% #10, HMMT 89.4% #14, FrontierMath 51.2% #48 / 17.1% #51, MathArena Apex 15.6% #16, ProofBench 15.0% #57
- SimpleBench 61.1% #26; SciPredict **22.2% #4** (Scale); LMArena Hard Prompts 1493 #44 (thinking); LMCA 43.1% #81; DTBench 89.1% #77; ForecastBench 58.5% #49
- Knowledge: SimpleQA Verified **66.8% #10** (high); MMLU-Pro 88.6% #19; LegalBench **86.9% #10**; MedQA **95.8% #11**; MedCode **55.9% #5**; CorpFin 66.4% #19; TaxEval 73.9% #44; EMB 26.0% #57
- **Omniscience (the defining anomaly, fully verified): hallucination rate 91-92% across configs** (thinking: accuracy 53.4% #47, non-hallucination **7.0% #477**; no-reasoning: index −4.3, non-hallucination 7.6% #465) — the "biased genius" profile: 55% accuracy tied for first at launch, but it confabulates whenever it doesn't know (techplugged, medium, ssvex, Doist CEO flag, ain3xt's self-correcting-mid-thought analysis, AA's own successor-model article: "down from 92% in Gemini 3 Flash")
- AA-LCR 55.3%; IFBench **78.0% #14** (thinking — strong); Global-MMLU-Lite 92.7%

Coding:

- **SWE-bench Verified: 75.4% #13 (Epoch) / 75.8% #2 (bash-only, swebench.com)** (high — found this pass; vendor 78.0%); LiveCodeBench (Vals): **85.6% #29** (high); WeirdML 61.6% #45; SWE-rebench 46.7%
- SWE-Bench Pro **34.6% #15**; Vibe Code 20.2% #70; Code Migration 6.4% #58; GSO-Bench 9.8% #21; ProgramBench 0.0%; SWE Atlas Refactoring 10.0% #17 / Test Writing 30.3% #17; ALE-Bench 1367.2 #23; CursorBench: no row found
- LMArena Coding 1506 #65 / WebDev 1439 #72 (thinking) — mid-weak
- SciCode / DeepSWE: no verified public score found (unchanged)

Long context:

- 1M window; AA-LCR 55.3% (weak — the first-pass read stands); no MRCR/RULER number published.

Multimodal (grounding):

- MMMU-Pro: 79.9% #51 (AA, thinking) / **87.6% #13** (Vals, high) / 78.5-78.6% (no-reasoning rows); LMArena Vision 1285 #32 (thinking) — second-highest MMMU-Pro at launch per AA, now mid-high as boards matured.

### Normalized scores (1–100)

- **Tool use: 64/100.** Raised from 58: the thinking/high configs are materially stronger than the non-reasoning config the first pass tracked — τ²-bench 83.5% #4, Terminal-Bench 64.3% #12, TB 2.0 #18, MCP Atlas 62% #26, FACTS #9, DeepResearch #11 — the first-pass note ("expect tool scores several points higher for thinking") is confirmed quantitatively. Capped by τ³ 20.8% #91, HLAB 0.0%, Legal Research 18.3% #47, Finance 42.5% #50, JobBench 11.4%, and the still-missing GDPval row.
- **Reasoning: 64/100.** Raised from 62: the config correction doubles HLE (15%→36.6%) and lifts GPQA to 89.4-89.8% (#51-67), with a strong competition-math cluster (AIME #6-8, OTIS 95.6%, MGSM 93.3%) and good honesty-adjacent knowledge rows (SimpleQA #10, LegalBench #10, MedQA #11). The cap is unchanged and severe: 91-92% hallucination (non-hallucination #477), CritPt 8.6%, ARC-AGI-2 33.6% #112, AA-LCR 55.3%.
- **Context window: 95/100.** Held: 1M total (≥1M tier); no ≥512K retrieval bar met.
- **Multimodal: 88/100.** Held: text+image+speech+video input with MMMU-Pro up to 87.6% #13 (Vals, high) and Vision 1285 #32 — below the newer Flash generations but solidly in the omni band.
- **Coding: 68/100.** Held: the newly verified SWE-bench Verified 75.8% #2 (bash-only) and LiveCodeBench 85.6% #29 anchor; SWE-Pro 34.6%, Vibe Code 20.2% #70, Code Migration 6.4%, GSO 9.8%, SWE Atlas 10-30% cap.
- **Cost efficiency: 90/100.** Held: $0.50/$3.00 with 208 tok/s and 5.8 s first answers — still the speed-price leader of the 3-series Flash line.
- **Overall Score: 75.8/100.** (64 + 64 + 95 + 88 + 68) / 5 = 75.8, up from 74.2 via the thinking-config corrections. Best-fit updated: a very fast, very cheap "biased genius" — elite speed and τ² tool reliability with a top-6 competition-math cluster, but never trust its unaided factual claims (92% hallucination rate); the 3.5-3.8 Flash line supersedes it on measured intelligence.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (Google's official Gemini 3 Flash launch blog and model-evaluation PDF, Artificial Analysis launch article and model benchmarks across the full effort ladder, BenchLeader data as of 2026-10-12, Vals AI, LMArena, Epoch hub, ARC Prize, Scale SEAL, taubench, swebench.com, BALROG, MathArena, Kaggle/Google FACTS; three successful web searches; independent reviews: chatforest, airank, techplugged, medium/ai-engineering-trend, ssvex, ain3xt, betterstack, cybernews, binaryverseai, atlas.kevinhu, aitools4you, evals.report, llm-stats); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
