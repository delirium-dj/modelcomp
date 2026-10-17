# Gemini 3.8 Flash — findings by GLM 5.3 Flash

- Source: Google (`gemini-3.8-flash`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash (current Flash tier; launched with the security-specialist twin Gemini 3.8 Flash Cyber)
- **Short description:** Google's September 2026 Flash: "our best reasoning & coding model yet, at the same speed and low cost of 3.7" — pointed at long-horizon software engineering, autonomous agents and enterprise workflows needing factual rigor. HLE-Verified 54.9% (vendor) and GPQA Diamond 95.3% (AA independent) headline; the AA Intelligence Index of 41 (#50/227) vs the vendor-run 59 is the key second-pass correction.
- **Provider / access:** Google — Gemini API (AI Studio) ID `gemini-3.8-flash` (4 API providers on AA); also Android Studio, Google Antigravity, Gemini Enterprise, and the Gemini app/Search for AI Pro/Ultra subscribers. `generateContent` API.
- **Release / knowledge:** GA 2026-09-02 (AA confirms Sep 2, 2026). Knowledge cutoff **March 2026**, some domains limited to January 2025 (model card).
- **IDs:** `gemini-3.8-flash` (Google). Free tier available in Google AI Studio. (Note: the 3.8 Flash **Cyber** variant is NOT generally available — vetted defenders only, via Google's Fairwind Program.)
- **Context window:** 1,000,000-token input, 64,000-token max output (Google launch data via ai-tldr; AA confirms 1M) — verified.
- **Modalities:** text, image, audio (speech), video in (AA lists all four); text out. Thinking levels low/medium/high (**minimal not supported** on this model); built-in tool suite carried over from 3.7 (function calling, structured output, code execution, computer use, search grounding).
- **Pricing (as of 2026-10-11):** $0.75 in / $3.75 out per 1M through 2026-12-31, rising to $1.50/$7.50 on 2027-01-01 (same intro schedule as 3.7 Flash; AA confirms $0.75/$3.75, cache discount 90%). Free tier in AI Studio.
- **Architecture:** proprietary, parameters undisclosed; based on Gemini 3.7 Flash per the model card (no new pretraining run described).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (Google model card); AA independent: **87.6%**; Vals independent: **81.3%**
- Terminal-Bench 4.0: **19.10%** (Google model card) / **19.7%** (AA independent, 2026-09-10 via flowtivity.ai "TB4 score crash" analysis) — vs GPT-6 Astra 59.6 and Claude Fable 5.1 55.1 on the same harness; severe harness dependence
- OSWorld-2.0: **59.0%** (Google model card)
- GDPval-AA v2: **1545 Elo** (Google model card); AA-normalized: **46.8%** (vs Claude Opus 5.5's 68.3%)
- AA Agentic Index: **41.1%** (AA, independent)
- AA-Briefcase v1.1: **1203 Elo** (AA)
- AA AutomationBench-AA: **59.9%**; AA ITBench-AA: **52.5%** (K8s RCA — better than Opus 5.5's 38.2%)
- AA Tau3-Banking: **44.9%** (AA — fills the Tau gap the 2026-10-05 pass marked missing)
- Finance Agent v2: **61.4%** (Google model card — beats Gemini 3.7 Flash per launch post)
- ApprenticeBench (GUI): **24%** (NeoCognition, independent — weak)
- GDP.pdf: **21.0%** (AA)
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **95.3%** (AA independent — fills the gap the 2026-10-05 pass marked missing); Vals: **94.4%**
- ARC-AGI-1: **98.5%**; ARC-AGI-2: **89.2%**; ARC-AGI-3: **10.4%** (ARC Prize verified results, arcprize.org/results/google-gemini-3-8-flash)
- HLE-Verified: **54.9%** (Google headline); AA independent HLE: **47.8%**
- Artificial Analysis Intelligence Index v4.3.2: **41, #50/227** (AA's own page, 2026-10-11) — **conflicts with the 59 reported in Google's model evaluation report via emergent.sh (2026-09-03)**; the independent number supersedes the vendor-run figure (same vendor-vs-independent pattern as the TB4.0 crash)
- MMLU-Pro: **90.2%** (Vals, independent)
- MLCR-AA: **21.7%**; CritPt: **18.3%** (AA — both weak)
- AA-Omniscience: **54.6% accuracy / 55.2% hallucination rate / 29.6 index** (AA)
- LABBench2: **86.2%**; BioMysteryBench: **88.8%** human-solvable / **56.5%** human-difficult (Google model card)

Coding:

- DeepSWE v1.1: **73.8%** (DeepSWE leaderboard, deepswe.datacurve.ai; Google report said 73.7%)
- LiveCodeBench: **89.5%** (Vals, independent — fills the LiveCodeBench gap)
- SWE-bench: **80.0%** (Vals, independent — fills the SWE gap)
- AA Coding Index: **76.3%** (AA)
- AA-SciCode: **56.6%** (AA)
- CursorBench 3.2: **69.2%**; CursorBench 4.0: **39.6%** (Cursor evals — weak on the newer board vs Opus 5.5's 57.8%)
- FrontierSWE v2: **19.6%** (Proximal — very weak vs Opus 5.5's 62.3%)
- SWE-Bench Pro / FrontierCode: no 3.8-specific published numbers found
- Bug Hunt Bench: **18.0 fixes**

Long context:

- Window: **1M tokens** in / 64K out (verified Google launch data + AA)
- AA-LCR v1.1 (long-context reasoning): **81.3%** (AA — first measured long-context number; fills the 2026-10-05 gap)
- MRCR/RULER at window length: no verified public score found

Multimodal:

- CharXiv (no tools): **86.2%**; LVBench (video): **87.1%** (Google model card); AA-MMMU-Pro: **85.6%** (AA) — first measured vision numbers
- Gray Swan IPI (15 attempts): **5.5%** (competitor-reported — Gemini 4 Argon launch chart; prompt-injection robustness improvement per launch post)

### Normalized scores (1–100)

- **Tool use: 87/100.** Vendor rows remain excellent (TB2.1 89.4, OSWorld-2.0 59.0, GDPval-AA 1545) and independent AA TB2.1 87.6 corroborates; ITBench 52.5% and Tau3 44.9% are respectable; but the TB4.0 19.7% independent crash, GDPval normalized 46.8% and ApprenticeBench 24% confirm harness dependence — unchanged from the 2026-10-05 corrective.
- **Reasoning: 86/100.** Was 91 on 2026-10-05; lowered by the independent evidence. GPQA 95.3% (AA) and ARC-AGI-2 89.2% (ARC Prize verified) are elite, but AA's own Intelligence Index of 41 (#50/227) supersedes the vendor-run 59 my 2026-10-05 pass cited, AA-HLE 47.8% is well below the vendor 54.9%, and MLCR 21.7%/CritPt 18.3% are weak — the independent evidence moves the score down.
- **Context window: 98/100.** 1M input / 64K output at the top tier of this repo; AA-LCR 81.3% is the first measured long-context number (solid but below Opus 5.5's 84.7%); no MRCR at window length.
- **Multimodal: 88/100.** Text + image + audio + video in (AA confirms all four); text-only output; measured vision now backs the claim (CharXiv 86.2, LVBench 87.1, MMMU-Pro 85.6).
- **Coding: 88/100.** Was 92 on 2026-10-05; lowered by the newer-harness weakness. Vals LiveCodeBench 89.5% and SWE-bench 80.0% fill prior gaps and AA-SciCode 56.6% is solid, but FrontierSWE v2 19.6% and CursorBench 4.0 39.6% are far below Opus 5.5 (62.3/57.8) and DeepSWE settled at 73.8% (below the 74%+ frontier ref) — the newer-harness weakness caps it down from 92.
- **Cost efficiency: 88/100.** Free tier in AI Studio plus $0.75/$3.75 intro — the cheapest frontier-class rate measured here ($1.24/AA task, 90% cache discount); the scheduled 2027 doubling to $1.50/$7.50 is the cap; 170M-token verbosity (≈2× median) partially erodes it.
- **Overall Score: 89.4/100.** Was 91.2 on 2026-10-05; lowered because independent sources (AA's own 41 index vs the vendor 59, FrontierSWE/CursorBench 4.0 weakness) contradict the vendor-run figures the prior scores leaned on. Mean of the five quality dims per `RULES.md` (Cost excluded): (87 + 86 + 98 + 88 + 88) / 5 = 447/5 = 89.4. Best fit: still the best-value Flash — elite GPQA/ARC reasoning and 1M context at Flash price through 2026 — but buy it for vendor-harness and classic-benchmark workloads, not independent TB4.0/FrontierSWE-style sweeps; budget for the 2027 price doubling.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥4 independent sources: artificialanalysis.ai model page, benchlm.ai updated 2026-10-10 citing the Google DeepMind model card, ARC Prize verified results, Vals AI and Cursor/Proximal leaderboards via benchlm.ai; 2026-10-16 re-check: BenchLM fetch transport-errored (temporary; the 2026-10-10 data stands as most recent) — no new evidence, scores unchanged); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
