# Gemini 3 Pro — findings by GLM 5.3

- Source: Google (`google/gemini-3-pro`)
- Date: 2026-10-17 (UTC) — third-pass re-research of the 2026-09-25 report (second pass 2026-10-11)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro (Preview, `gemini-3-pro-preview`)
- **Short description:** Google DeepMind's Nov 2025 frontier model with dynamic thinking, native omni input and 1M context — the first model to break 1500 LMArena Elo at launch (1501, #1). Superseded within the Google line by Gemini 3.1 Pro, 3.7/3.8 Flash and Gemini 4 Argon; AA marks it deprecated.
- **Provider / access:** Google — Gemini API / Vertex AI (Generate Content API; OpenAI-compatible Chat Completions also supported). `thinking_level` parameter (low/high, medium unsupported at launch); thought signatures carry encrypted reasoning across calls; streaming function calling and multimodal function responses ship in the API. No OpenRouter providers listed on BenchLeader's current page (availability shrinking with deprecation). Google AI Studio offers free interactive sessions (10-50 RPM) but there is **no free API tier**.
- **Release / knowledge:** released 2025-11-18 (preview; GA was expected Q1 2026); knowledge cutoff **January 2025** (second-pass fact via The AI Rankings — previously "not stated"). Deep Think mode released 2025-12-04, Google AI Ultra subscribers only.
- **IDs:** `google/gemini-3-pro` / `gemini-3-pro-preview` (AA lists the high-effort reasoning variant; sibling: `gemini-3-pro-deep-think`). No OpenCode Zen Free ID found.
- **Context window:** 1M tokens standard (AA + 7 of 9 sources; output ~64K); **2M reported in developer preview** (layer3labs, citing Google — explains BenchLM's 2M listing). Same ≥1M tier either way. Community reports note context degradation in practice at 300K+ tokens.
- **Modalities:** text, image, speech (audio), video, PDF in; text out (AA; The AI Rankings: "text, images, video, audio, code, and PDFs as first-class inputs"). Reasoning yes; tool calls yes; JSON mode yes; Google Search grounding (billed from 2026-01-05).
- **Pricing (as of 2026-10-11):** $2.00 in / $12.00 out per MTok (≤200K prompts), doubling to $4.00/$18.00 above 200K; cached input $0.20 (≤200K, 90% discount); cache storage $4.50/hour; batch $1/$6 (≤200K). Blended ~$1.74/1M at short prompts.
- **Architecture:** proprietary sparse MoE transformer, trained from scratch (not fine-tuned from 2.5); parameters undisclosed. Media tokenization: images 280-1,120 tokens, video ~70 tokens/frame.

### Raw benchmarks found

> Effort caveats matter for this model: many "effort not stated" rows (Epoch/MathArena/Scale boards) reflect launch-era or Deep Think runs; AA rows are per-effort (low/high). Conflicting values retained side-by-side.

Agent / tool use:

- Terminal-Bench (public tbench.ai board): **69.4% #7** (effort not stated); Terminal-Bench 2.0: **54.2%** vendor / **55.1% #15** (Vals) — consistent; Terminal-Bench Hard (AA): **41.7% #50** (high) / 34.1% #90 (low)
- BFCL Overall (Berkeley): **72.5% #3** — a top-3 function-calling finish
- MCP Atlas (Scale SEAL): **70.3% #20**; τ²-bench (taubench.com): **82.5% #5** (high); τ²-Bench Telecom (AA): **87.1% #80** (high) / 68.1% (low)
- GDPval (OpenAI board): **40.3% #5** (of 11 — small board); Gert Labs: **63.23%**; JobBench: **11.4%** (weak, unchanged)
- METR Time Horizons: **71.0% #8**; BALROG: **58.1% #4**; DeepResearch Bench: **46.3% #28**; Remote Labor Index: **1.3% #14** (weak); Vending-Bench 2: **5478.2 #24**; Poker Agent: **1078.9 #6**
- AA-IFBench: **70.4% #67** (high); Tau3-Banking / Claw-Eval / Toolathlon: no verified public score found (unchanged)

Reasoning / knowledge:

- GPQA Diamond: **91.9%** vendor / **90.8% #55** AA (high) / **92.6% #25** Epoch / **91.7% #18** Vals — four harnesses agree above the 90% bar
- HLE: **37.5% #7** (Scale/CAIS board) / **39.7% #83** (AA, high) — very different ranks on different boards; both retained
- ARC-AGI-2: **31.1%** (DeepMind card, standard) / **45.1%** (Deep Think — The AI Rankings, ucstrategies) / **54.0% #94** (ARC Prize board, effort not stated) — three-setting conflict, all retained; ARC-AGI-1: **75.0% #118**
- SimpleBench: **76.4% #7**; Kagi LLM Benchmark: **80.1% #9**; SciPredict (Scale): **25.3% #1**; ForecastBench: **61.2% #14**; HELM GPQA 80.3% #1 (HELM's own convention)
- CritPt: **9.1% #118** (AA, high) / 0.0% (low) — genuine weakness
- FrontierMath v2: Tiers 1-3 **37.6%**, Tier 4 **18.75%** (Epoch); AIME (Vals) **96.7% #4**, MATH 500 **96.4% #1**, MGSM **93.9% #7**, AIME 2026 **91.7% #24**, HMMT Feb 2026 **86.4% #20**, OTIS **91.4% #63**, MathArena Apex **23.4% #14** (a >20x-over-competitors launch breakthrough), ProofBench **20.0% #49**
- MMLU-Pro: **90.1% #7** Vals / **89.8%** AA / **90.3% #1** HELM; MMLU **91.8%**; Global-MMLU-Lite **92.2%**; LegalBench **87.0% #6**; MedQA **96.0% #8**; MultiNRC **59.0% #6**; PRBench Finance 39.2% #26 / Legal 40.6% #28
- AA Intelligence Index v4.3.2: **28.0 #131** (high) / 22.3 #193 (low) — confirmed as a measured value (the 2026-09-25 report's "#90/211 estimate" is now #131 on the larger cohort)
- **Omniscience (resolved this pass): the previous "91.5% hallucination field = unverified quirk" is VERIFIED as real.** AA's own launch announcement had Gemini 3 Pro topping the new AA-Omniscience Index at 13 points on the strength of record accuracy — while hallucinating **88% of the time when wrong**; current AA fields read accuracy **55.8% #35**, non-hallucination **8.6% #442** (~91.4% hallucination rate — the worst in this report set), index 15.3 #76 (high). Independent corroboration: the-decoder, craftium, sparkco, and Zvi Mowshowitz's "vast intelligence with no spine" verdict — "it'll be damned before it answers 'I don't know'"
- Composites: BenchLM **61.18 #52 of 954** (updated 2026-10-17 from 59.42 #52/889 — cohort growth, same rank tier); BenchLeader **60.6 ±3.4, #100 of 760** (best = not-stated 60.6 #100; high 60.1 #106; low 53.9 #256); Epoch Capabilities Index **152.9 #42**; HELM Capabilities mean **79.9% #5**; LMArena Elo 1501 (#1 at launch — first past 1500). New this pass: the AA-Omniscience **91.5% hallucination rate** is now displayed as a BenchLM knowledge row — independent corroboration of the second pass's verified resolution; extra Qwen-table lineage vision rows (ODINW13 46.3%, ERQA 70.5%, MMLongBench-Doc 60.5%) — flagged, not double-counted.

Coding:

- SWE-bench Verified (found this pass — resolves the 2026-09-25 gap): **76.2%** vendor / **72.9% #21** (Epoch) / **74.2% #6** (any scaffold, swebench.com) / **69.6% #13** (bash-only, high) — four harnesses; Opus 4.5's 80.9% led at launch
- SWE-Bench Pro (Scale SEAL): **43.3% #8**; SWE-bench (Vals): **76.4% #35**
- LiveCodeBench: **91.7%** (AA) / **86.4% #22** (Vals); LiveCodeBench Elo 2439 at launch
- LMArena Coding **1517 #40**; LMArena WebDev **1440 #71** current (1487, #1 at launch — the board has moved past it); WeirdML **69.9% #34**; GSO-Bench **18.6% #17**; ALE-Bench **1176.8 #38**; AlgoTune **1.8 #4**; Vibe Code Bench v1.1 **14.3% #78** (weak)
- DeepSWE / Terminal-Bench 4.0 / GDPval-AA / Coding Index: no verified public score found for this ID (unchanged)

Long context:

- AA-LCR **76.0% #140** (high; 74.0% low) — long-context reasoning mid-field; no MRCR/RULER/GraphWalks row at 1M; community-reported practical degradation at 300K+.

Multimodal (grounded):

- The strongest axis, now richly corroborated: **ScreenSpot-Pro 72.7%** (vs GPT-5.1's 3.5% — the 20x screen-understanding gap), **VideoMMU 87.6%** (official), Video-MME 87.7% w/o sub / 88.4% w/ sub, MMMU-Pro **81% official #1** / 80.2% #48 (AA) / 87.5% #14 (Vals), LMArena Vision **1305 #16**, V* 88.0%, MathVision 86.6%, CharXiv 81.4%, OmniDocBench 1.5 88.5%, AI2D 94.1%, CountBench 97.3%, RefCOCO 84.1%, MLVU 83.0%, CC-OCR 79.0%, MMMU 87.2%, RealWorldQA 83.3%; AudioMC **54.6% #3** (audio), VPCT **91.0% #1**, GeoBench **84.0% #3**, VISTA 51.5% #7, MortgageTax 69.1% #7, SAGE 47.6% #31, VTB 26.9% #5, SimpleQA Verified 72.1% (vendor table; 60.3% #15 Epoch)

### Normalized scores (1–100)

- **Tool use: 85/100.** Held — the new independent rows corroborate the 2026-09-25 estimate: BFCL 72.5% #3, Terminal-Bench 69.4% #7, MCP Atlas 70.3% #20, τ²-bench 82.5% #5, METR Time Horizons 71.0% #8, BALROG #4, TB2.0 54-55% across vendor and Vals. Capped by JobBench 11.4%, Remote Labor Index 1.3%, GDPval 40.3% on an 11-entry board, Vending-Bench #24, and the still-missing Tau3/Claw-Eval/Toolathlon rows.
- **Reasoning: 82/100.** Lowered from 85: the profile is bimodal. Elite showcase reasoning — AIME 96.7% #4, MATH 500 96.4% #1, MathArena Apex 23.4% #14, SimpleBench 76.4% #7, GPQA 90.8-92.6% across four harnesses, ARC-AGI-2 up to 45.1% with Deep Think — sits against weak AA-controlled results (AA II 28.0 #131, AA-HLE 39.7% #83, CritPt 9.1% #118, AA-LCR #140) and the now-verified ~88-91% hallucination-rate-when-wrong (non-hallucination 8.6% #442, worst in this report set). Accuracy is record-high; calibration is record-poor.
- **Context window: 95/100.** Held: 1M standard (2M in developer preview — same ≥1M tier), ~64K output; AA-LCR 76.0% #140 is mid-field and community reports flag practical degradation at 300K+, keeping it at the tier floor.
- **Multimodal: 95/100.** Held and reinforced: text/image/speech/video/PDF input with best-in-class corroboration on every axis — screen understanding 72.7% (20x GPT-5.1), VideoMMU 87.6%, MMMU-Pro official #1, AudioMC #3, VPCT #1, GeoBench #3, LMArena Vision #16; text-only output caps it below 100.
- **Coding: 84/100.** Lowered from 86: the newly verified SWE-bench Verified reads 72.9-74.2% independently (vs the 76.2% vendor claim and Opus 4.5's then-leading 80.9%), LMArena Coding has slid to #40, WebDev from launch #1 to #71, Vibe Code is 14.3% #78, SWE-Pro 43.3% #8, GSO 18.6%. LiveCodeBench 91.7% (AA) remains the elite anchor. The gap the launch reviewers flagged behind Claude has widened as boards matured.
- **Cost efficiency: 70/100.** Held: $2/$12 (≤200K) sits between the ~$1.25/$4.25 (~88) and ~$3/$15 (~60) anchors, pulled down by the $4/$18 long-context surcharge that bites exactly where the 1M window is the point; $0.20 cache reads and $1/$6 batch soften it.
- **Overall Score: 88/100.** (85 + 82 + 95 + 95 + 84) / 5 = 88.2 → 88, down from 89.2 on 2026-09-25. Best-fit recommendation updated: still a strong all-round pick with the best multimodal input in its generation — but as a deprecated preview it is now strictly dominated inside Google's line (3.1 Pro, then 3.7/3.8 Flash, then 4 Argon), and its knowledge-reliability problem (record accuracy paired with a record hallucination rate) demands verification workflows on any factual output.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-17 (first researched 2026-09-25; second pass 2026-10-11; third pass 2026-10-17)
- Method: public internet research, third pass over the prior reports (Google/DeepMind launch materials carried over, BenchLM 41-row profile updated 2026-10-17 — composite 61.18 #52/954, with the 91.5% hallucination rate now an independent BenchLM-displayed row; Artificial Analysis, ARC Prize, Epoch hub, Vals AI, LiveBench, LMArena, Scale SEAL, HELM, Berkeley BFCL, METR); scores are normalized 1-100 interpretations, not official vendor scores. No dimension scores changed — all new rows confirm the existing profile.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
