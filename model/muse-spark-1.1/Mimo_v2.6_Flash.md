# Muse Spark 1.1 — findings by Mimo V2.6 Flash

- Source: Meta/`muse-spark-1.1`
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta Superintelligence Labs' July 2026 Muse Spark refresh — +8 AA Intelligence Index points over Muse Spark 1.0 in three months, driven by agentic knowledge work (GDPval +232 Elo), coding (SciCode #3 overall), and HLE; 1M context (up from 262K), native multimodal perception, proprietary weights. Superseded in-market by Muse Spark 1.2 (AA notes deprecation toward 1.2) but still served.
- **Provider / access:** Meta AI app/web (Thinking mode), Meta Model API public preview (U.S. developers), gateways; site meta `opencode/muse-spark-1.1`. Proprietary — no open weights.
- **Release / knowledge:** 2026-07-09 (Meta evaluation report / LLMLearner / AA article); knowledge cutoff not published.
- **IDs:** `muse-spark-1-1` / `muse-spark-1-1-xhigh` (AA/eval harnesses); API via Meta Model API.
- **Context window:** 1,000,000 tokens in (AA / Meta — up from 262K on 1.0); max output not published in rows reviewed.
- **Modalities:** text, image, speech (audio), video in; text out; Thinking mode; reasoning up to xhigh (eval config). Docsbot: also document perception (native multimodal across images/videos/documents).
- **Pricing (as of 2026-09-23):** $1.25 / $4.25 per 1M in/out; cache hits $0.15/1M (AA / Meta API). Paid; public-preview API for U.S. developers.
- **Architecture:** proprietary closed weights (Facebook AI Research / Meta Superintelligence Labs).

### Raw benchmarks found

> Measured numbers with (source / rank / harness). AA independent runs marked; Meta first-party marked. Note: AA Intelligence Index reported as **51** at launch article (2026-07-10, Index v4.x era) vs **34** on the current AA model page (2026-09, possible Index-version recalibration) and **50.6** on Docsbot (v4.1.1) — all three cited; score calibrated primarily on launch-era 51 + component benches.

Agent / tool use:

- Terminal-Bench 2.1: **80.0%** thinking w/ tools (LLMLearner / Meta table; rank 26/110); AA independent **77.9%** e2e / **76.2%** verified mini-SWE-agent (Lumina)
- Cybench (unguided): **92.9%** pass@1 / **97.0%** pass@10 (Meta evaluation report — near saturation; Muse 1.0 was 65.4/79.0)
- GDPval-AA v2: **1376** Elo (+232 vs 1.0's 1144) (AA article); Lumina lists **43.66%** win-style row
- AA Coding Agents composite: **54.9** ($1.44/task, 55.5 steps) (Lumina/AA)
- AA-Briefcase / AutomationBench / OSWorld / MCP Atlas: **no verified public score found** in rows reviewed
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **89.8%** (LLMLearner / AA independent 89.798% no tools xhigh)
- HLE: **45%** no tools (AA article — within a point of Opus 4.8 max 46) / **62.1%** with tools thinking (LLMLearner, rank 6/218)
- AA Intelligence Index: **51** at launch (AA article 2026-07-10 — tied GLM-5.2 max, GPT-5.4 xhigh, GPT-5.6 Luna max; behind Grok 4.5 54, Fable 5 60); current model page **34** (Index v4.3.2 recalibration); Docsbot **50.6** (v4.1.1)
- AA Coding Index: **71** (+12 vs 1.0's 59) (AA article)
- CritPt: **15.1** no tools (LLMLearner, rank 28/118)
- AA-LCR: **81.33%** (Lumina/AA independent)
- AA-Omniscience: accuracy **18** (+14 vs 1.0) (AA article)
- CharXiv Reasoning: **88.4%** (Meta table via Docsbot)
- ProtocolQA: **88.0** (Meta eval report snippet)
- LCR (MLCR) / Omniscience non-hallucination rate: **no verified public score found** as separate rows

Coding:

- SWE-bench Pro: **61.5%** thinking w/ tools (Meta/LLMLearner, rank 14/56)
- DeepSWE 1.1: **53.3%** mini-swe-agent (Meta/LLMLearner)
- SciCode: **58%** no tools xhigh (AA — **#3 all models** behind Fable 5 60, Gemini 3.1 Pro 59); LLMLearner 58.8 rank 8/83
- SWE-bench Verified / LiveCodeBench / Vibe: **no verified public score found** in rows reviewed
- Terminal-Bench 4.0: **6.1** with tools xhigh (LLMLearner — early TB4 numbers very low field-wide)

Long context:

- 1M window (up from 262K); AA-LCR **81.33%** verifies long-context reasoning at depth (not a pure MRCR % — noted as proxy-adjacent but measured)
- MRCR / RULER: **no verified public score found**

Multimodal:

- Text/image/speech/video in confirmed (AA model page / LLMLearner); text out.
- MMMU / video suites: **no verified public score found** in rows reviewed (native coverage without extracted %).

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 77.9–80, Cybench 92.9 near-ceiling, GDPval-AA 1376 (+232 gen-over-gen), AA Coding Agents 54.9 — strong agentic stack; capped by no public Tau3/OSWorld/MCP/Claw rows and TB4.0 still single-digit (field-wide immature harness).
- **Reasoning: 90/100.** GPQA 89.8, HLE 45/62.1-tools (near Opus 4.8), launch Index 51 (frontier-tied cluster) — top-tier profile; capped by current-page Index 34 recalibration ambiguity and CritPt 15.1 still mid-pack.
- **Context window: 96/100.** Full 1M (≥1M tier) with AA-LCR 81.3% proving long-context reasoning quality; no classic MRCR % row for the perfect-100 bar.
- **Multimodal: 92/100.** Text/image/speech/video in (audio input → 90–100 band); text-only out; no extracted MMMU % keeps it shy of 95+.
- **Coding: 87/100.** SciCode #3 (58–58.8), SWE-Pro 61.5, DeepSWE 53.3, TB2.1 ~78–80 — high coding for the price tier; capped by no public SWE-V row and DeepSWE still behind Fable-class 70.
- **Cost efficiency: 89/100.** $1.25/$4.25 matches the ~$1.25/$4.25≈88 anchor exactly, with ~$0.26/AA-task and 94M-token Index efficiency beating GPT-5.4/GLM-5.2 on cost-per-intelligence; $0.15 cache reads help agentic loops.
- **Overall Score: 90/100.** Mean of Tool 86 + Reasoning 90 + Context 96 + Multimodal 92 + Coding 87 = 451/5 = 90.2 → **90** (best-fit: best-value frontier-adjacent multimodal agent at $1.25/$4.25 when 1M context + speech/video input matter; accept Index-version noise and watch 1.2 succession).

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-09-23
- Method: public internet research (Artificial Analysis model page + launch article, Meta Muse Spark 1.1 Evaluation Report, LLMLearner, Lumina, Docsbot); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
