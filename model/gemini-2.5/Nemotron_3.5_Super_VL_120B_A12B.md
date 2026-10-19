# Gemini 2.5 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: storage.googleapis.com/deepmind-media/Model-Cards/Gemini-2-5-Pro-Model-Card.pdf (official model card, updated 2025-06-27), storage.googleapis.com/deepmind-media/gemini/gemini_v2_5_report.pdf (official Gemini 2.5 technical report), blog.google "Gemini 2.5: Our newest Gemini model with thinking" (2025-03-25), deepmind.google/models/model-cards (model cards index), benchlm.ai/models/gemini-2-5-pro (aggregator), benchlm.ai compare pages (vs GPT-5.5, GPT-5.2, Qwen3.6 Plus, GLM-4.7), lmmarketcap.com GPQA Diamond leaderboard, serenitiesai.com model page, vals.ai Gemini 2.5 Flash page (sibling), alienart.io charts
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 (representing Gemini 2.5 Pro; sibling Gemini 2.5 Flash/Flash-Lite exist)
- **Short description:** Google's most advanced model for complex tasks (Gemini 2.5 Pro), natively multimodal reasoning (thinking) model; text/audio/images/video/entire code repositories as input; state-of-the-art on frontier coding and reasoning benchmarks; debuted #1 on LMArena; proprietary.
- **Provider / access:** Google AI Studio, Gemini app (Gemini Advanced), Vertex AI.
- **Release / knowledge:** Gemini 2.5 Pro Experimental 2025-03-25; GA June 2025 (model card updated 2025-06-27); Gemini 2.5 technical report 2025-10-16. Knowledge cutoff not explicitly stated.
- **IDs:** `gemini-2.5-pro` (benchlm), `gemini-2.5-pro-preview-06-05` / `gemini-2.5-pro-preview-05-06` / `gemini-2.5-pro-exp-03-25` (model card eval model-ids); `gemini-2.5-flash` (sibling).
- **Context window:** 1M tokens (benchlm.ai model page; benchlm.ai compare vs GPT-5.2/GPT-5.5/Qwen3.6 Plus/GLM-4.7 all list 1M).
- **Modalities:** Text, audio, images, video, code repositories in; text out (natively multimodal); reasoning yes (thinking model — thinking on/off); tool calls yes (agentic capabilities); structured output not explicitly advertised.
- **Pricing (as of 2026-10-16):** $1.25/M input, $10.00/M output (benchlm.ai compare pages); Gemini 2.5 Flash $0.30/$2.50 (vals.ai).
- **Architecture:** Natively multimodal reasoning model; MoE architecture per Gemini 2.5 Flash-Lite card (Sparse MoE); parameter count undisclosed.

### Raw benchmarks found

Gemini 2.5 Pro is the scored variant; Gemini 2.5 Flash figures (vals.ai, benchlm.ai) noted separately where relevant.

Agent / tool use:

- SWE-bench Verified: **63.8%** (Google; benchlm.ai / serenitiesai) / **54.4%** (Vals AI SWE-bench leaderboard)
- Vibe Code Bench: **0.40%** (Vals AI)
- τ²-bench: **54.1%** (Artificial Analysis via benchlm.ai)
- Gert Labs: **42.01%** (benchlm.ai)
- GDPval-AA: **0.0%** / **616 Elo** (Artificial Analysis via benchlm.ai)
- AA Agentic Index: **3.5%** (benchlm.ai)

Reasoning / knowledge:

- GPQA: **83%** (reported upstream via benchlm.ai) / **84.4%** (AA-GPQA Diamond) / **79.9%** (serenitiesai GPQA Diamond) / **84%** (lmmarketcap GPQA Diamond rank #22/55)
- HLE: **18.8%** (Google; SOTA without tool use at launch) / **22.5%** (AA-HLE)
- Artificial Analysis Intelligence Index: **16.1%** (benchlm.ai)
- MMLU-Pro: not isolated for 2.5 Pro in fetched sources
- MATH: **88.0%** (serenitiesai competition math)
- CritPt: **2.6%** (benchlm.ai)
- AA-LCR: **69.0%** (benchlm.ai)
- AA-Omniscience: accuracy 39.1%, hallucination rate 90.9%, index -16.3% (benchlm.ai)

Coding:

- LiveCodeBench: **74.2%** (Gemini 2.5 Pro technical report Table 3)
- HumanEval: not isolated
- Codeforces: not isolated
- AA-SciCode: **46.3%** (benchlm.ai)
- AA Coding Index: **33.3%** (benchlm.ai)
- SWE-bench Verified: 63.8% — see above

Multimodal & grounded:

- MMMU: **82.0%** (single attempt pass@1, GA; model card Table) / **74.9%** (AA-MMMU-Pro)
- MMMU-Pro w/ Python: not isolated for 2.5 Pro
- Vibe-Eval (Reka): **67.2%** (GA)
- Design Arena Website: **1169** (OpenRouter via benchlm.ai)
- ZeroBench: **4.5%** (technical report Table 3)
- BetterChartQA: **72.4%** (technical report Table 3)

Long context:

- AA-LCR: 69.0% — see above; MRCR not isolated for 2.5 Pro; context 1M; long-context strength carried over from 1.5 lineage but no fresh 1M needle score isolated in fetched sources.

Instruction following:

- AA-IFBench: **48.7%** (benchlm.ai)

### Conflicting results noted

- **SWE-bench Verified:** 63.8% (Google/benchlm/serenities) vs 54.4% (Vals AI) — different harness/scaffolding; both cited.
- **GPQA:** 83% (benchlm upstream) vs 84.4% (AA) vs 79.9% (serenities) vs 84% (lmmarketcap) — minor spread across sources/methods; all cited.
- **Overall:** benchlm.ai 49.13/100 (#102/954) vs serenitiesai qualitative "strong" — aggregator composite vs individual benchmarks; no conflict in raw numbers.
- **gemini-2.5 vs gemini-2.5-pro:** The slug is `gemini-2.5`; this report uses gemini-2.5-pro as the representative scored variant and notes flash/sibling figures only where clearly labeled.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 65/100.** SWE-bench Verified 63.8% (Google), τ²-bench 54.1%, agentic capabilities highlighted; capped by Vibe Code Bench 0.40%, AA Agentic Index 3.5%, GDPval-AA 0.0%.
- **Reasoning: 74/100.** GPQA 83–84.4%, MATH 88.0%, HLE 18.8% (SOTA-class at launch), MMMU 82.0%, AA-LCR 69.0%; capped by CritPt 2.6% and AA-Omniscience accuracy 39.1% / hallucination 90.9%.
- **Context window: 85/100.** Declared 1M tokens; AA-LCR 69.0% moderate; no public full-window needle-recall curve isolated for 2.5 Pro.
- **Multimodal: 78/100.** Natively multimodal (text+audio+image+video); MMMU 82.0 / AA-MMMU-Pro 74.9, BetterChartQA 72.4, Vibe-Eval 67.2, ZeroBench 4.5 (weak); strong overall multimodal profile.
- **Coding: 72/100.** LiveCodeBench 74.2%, SWE-bench Verified 63.8% (Google) / 54.4% (Vals), AA-SciCode 46.3%, AA Coding Index 33.3%; coding is a stated strength but SWE-bench spread across harnesses tempers confidence.
- **Cost efficiency: 65/100.** $1.25/$10.00 per M (mid-range for a flagship); not counted toward Overall.
- **Overall Score: 75/100.** Half-up mean of (65 + 74 + 85 + 78 + 72) / 5 = 74.8 → 75. Best-fit recommendation: frontier multimodal reasoning model with top-tier GPQA/MATH/MMMU; coding solid but SWE-bench harness-dependent.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Gemini 2.5 Pro model card + technical report + Google blog + benchlm.ai + lmmarketcap + serenitiesai + vals.ai Flash sibling + alienart); scores are normalized 1–100 interpretations, not official vendor scores. Scores represent Gemini 2.5 Pro as the scored variant of the gemini-2.5 slug.
- Future sources: add a new file next to this one, using the same headings.
