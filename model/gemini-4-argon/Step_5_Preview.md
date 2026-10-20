# Gemini 4 Argon — findings by Step 5 Preview

- Source: Google (DeepMind) `gemini-4-argon`
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon (`gemini-4-argon`; announced 2026-09-30; preview-tier, restricted access)
- **Short description:** Google DeepMind's frontier reasoning model and the first Gemini 4 announcement — Google's first proprietary model above the Flash class since Gemini 3.1 Pro (~7 months). Built for long coding, knowledge-work, and cyber-defense jobs; stands out for calibration (low hallucination). Access is staged, initially vetted security teams only.
- **Provider / access:** Google Fairwind Program (vetted security teams, guardrail-removed build) → paid Gemini API / AI Ultra subscribers. As of 2026-10-19 Artificial Analysis tracks it at Google's API price across **4 providers** (no longer provisional); an official evaluation-methodology page now exists on deepmind.google, though no full model card has been published.
- **Release / knowledge:** Announced 2026-09-30. Knowledge cutoff / training cutoff not disclosed.
- **IDs:** `gemini-4-argon` / `gemini-4-argon-high` (Artificial Analysis / Arena listing; no official public API ID yet).
- **Context window:** 1,000,000 (1M) input (AA); the 1M output spec is still unconfirmed — AA lists only the 1M context.
- **Modalities:** Text, image in; text out (AA's official row lists text+image only — the video claim rests on Google's own LVBench 91.7% long-video eval; conflict noted). Reasoning yes; tool calls expected.
- **Pricing (as of 2026-10-19):** $2.00/M in · $10.00/M out — confirmed at Google's API (AA; 95% cache discount, blended $1.47/M, $1.99 per Index task), no longer provisional.
- **Architecture:** Proprietary; architecture, parameter count, and training cutoff undisclosed.

### Raw benchmarks found

> Cross-referenced hokai.io (Artificial Analysis + Google's own evals) and vectorwire.ai (27 results/26 benchmarks, only 3 independently verified — most are vendor-reported; access is restricted so independent coverage is thin).

- BenchLM composite (2026-10-19): **82.93/100** overall, **#5 of 956 models**, 42 of 644 benchmarks covered (partial coverage — conservative)
- Artificial Analysis today (2026-10-19): Intelligence Index **53** (#8/217, 4/4 intelligence units — matches the prior pass), 84.2 tok/s (#97/186 — slow), TTFT 47.97s, 110M Index tokens, $1.99 per Index task, 1M context, 4 providers, released 2026-09-30 — NOT deprecated

Agent / tool use:

- AutomationBench-AA: **78%** (Artificial Analysis variant) / **51.3%** (Google/Zapier own run) / **50.1%** (Zapier independent, medium)
- APEX-Agents Original: **82.4%** (Mercor, independent, high — reported 2026-10-07)
- OSWorld 2.0 (offline subset): **69.2%** (Google)
- Vals Index 2.1: **68.9%** (cross-industry composite)
- Terminal-Bench 4.0: **57.4%** (Google, max) / **57.6%** (Vals AI mini-swe-agent, independent — reported 2026-10-06) — behind Claude Sonnet 5.5 64%, Opus 5.5 60%, GPT-6 Astra 59%
- Agents' Last Exam (pass rate): **39.5%** (Google)
- PostTrainBench: **45.3%**
- Chartography (no tools): **71.6%** (Surge AI via Google, Sept 2026)
- CWE-bench 1 (cyber): **68.0%** (Collinear AI via Google)
- New AA/Google rows (2026-10-19): GDPval-AA **Elo 1,624** / **56.2% normalized** (AA), AA Briefcase **Elo 1,486**, AA AutomationBench **77.5%** (AA's own harness — above the Zapier 50.1% read), Finance Agent v2 **65.4%** (Google), AA TB4.0 **57.1%** (corroborates the independent 57.6%), AA-AnalystAgent **48.8%**, GDP.pdf **21.8%** (AA — weak), MazeBench **12%**
- Vector Wire capability: **Agentic "Limited"** (−25.4% vs leader, 2/7) — now contradicted by stronger independent APEX/AutomationBench runs

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **53** (high reasoning; level with GPT-6 Astra and Fable 5.1, a point ahead of GPT-6.1 Sol, below Opus 5.5's 58; a 23-pt jump over Gemini 3.1 Pro)
- AA-Omniscience: **42.35** (accuracy) with a **15% hallucination rate** — a calibration standout; it usually declines rather than guesses
- Vector Wire capability: **Reasoning "Capable"** (−18.4% vs leader, 2/6); **Factuality "Capable"** (−13.0%)
- RiemannBench: **76.0**
- GPQA / HLE gap now filled (2026-10-19): AA-HLE **57.1%** — frontier-class, far above the 40% bar; CritPt **27.1%** (AA); ARC-AGI-1 **98.5%**, ARC-AGI-2 **91.3%** (ARC Prize semi-private — among the field's best), ARC-AGI-3 **46.3%** (+97.3% via the Provider Adapter); LABBench2 **88.8%**; AA-Omniscience accuracy **49.9%** / index **42.4%** / hallucination-rate metric **15.1%** — the calibration standout, confirmed; STEMBench **2.44** (Ulam audit)
- FrontierMath v2 (Epoch AI, 2026-10-19): Tiers 1–3 **85.965%** / Tier 4 **78.049%** — the strongest math result in this comparison

Coding:

- DeepSWE v1.1 (long-horizon SWE): **77.9%** (Google's own eval) — clears the 74% frontier ref
- Terminal-Bench 4.0: **57%** (see tool use) — behind the Claude/OpenAI leaders
- Terminal-Bench-Science 0.1: **57.6%**
- SWE-bench Verified / SWE-bench Pro: no verified public score found for Argon yet
- Vector Wire: Coding **not rated** (too few results)
- Internal evidence (Google's account): Argon agents replaced 32,000 lines of SIMD code in the Rust port of libgav1, producing safe Rust reported to run 2.7× faster than the prior port with identical output.
- New coding rows (2026-10-19): FrontierSWE v2 **55.0%** (Proximal — far ahead of 3.8 Flash's 19.6%), AA-SciCode **61.8%**, Bug Hunt Bench **40.7 fixes** (leads the field); Gray Swan IPI **0.7%** (best-in-class safety, vs 3.8 Flash's 5.5%)

Multimodal:

- Text + image + video in; text out.
- Vector Wire: Multimodal **not rated** (too few results); LVBench (long video) **91.7%** is the multimodal signal.

Long context:

- 1M input / 1M output (provisional); GraphWalks 256k–1M (BFS F1) **84.2%**, up-to-128k **99.7%**
- LVBench (long video): **91.7%**
- Vector Wire: Long Context **"Capable"** (−11.7% vs leader, 1/3)
- AA-LCR: **79.7%** (Artificial Analysis long-context reasoning, 2026-10-19)

- **Tool use: 82/100.** Independent agentic runs are stronger than the thin vendor set first suggested: APEX-Agents 82.4% (Mercor, independent — now field-leading, above Opus 5.5's 73.5% and Fable 5.1's 68.6% at max), AutomationBench 50.1% (Zapier, independent), OSWorld 69.2%, Vals Index 68.9%. Capped below frontier by Terminal-Bench 4.0 at ~57.5% (still behind Sonnet 5.5 64%, Opus 5.5 60%, GPT-6 Astra 59%) and Vector Wire's Agentic "Limited" rating, which the independent APEX run now contradicts. Raised from 78 on the 2026-10-07 independent APEX/AutomationBench evidence.
- **Reasoning: 88/100.** AA Intelligence Index 53 (#8/217, a 23-pt jump over Gemini 3.1 Pro, level with GPT-6 Astra), exceptional calibration (AA-Omniscience 15.1% hallucination — it declines rather than guesses), and the third pass filling the GPQA/HLE gap: AA-HLE **57.1%** (frontier-class), ARC-AGI-2 **91.3%** (ARC Prize — among the field's best), Epoch FrontierMath v2 T1–3 **86.0%** / T4 **78.0%** (the strongest math result in this comparison), CritPt 27.1%. Raised from 85 on that verified independent evidence; still below the absolute top on Vector Wire's Reasoning "Capable" (−18.4%) and thin coverage.
- **Context window: 95/100.** A 1M input AND 1M output window (provisional — Google hasn't confirmed) with GraphWalks 84.2% at 256k–1M, LVBench 91.7%, and Long Context "Capable" (−11.7%) — solidly in the ≥1M tier. Not a full 100 because the 1M spec is vendor-unconfirmed and there is no explicit MRCR ≥98%-at-512K figure.
- **Multimodal: 88/100.** Text + image + video in with LVBench 91.7% (long-video) hits the 90–100 input band; held to 88 because Vector Wire has not rated Multimodal (too few results) and output is text-only.
- **Coding: 84/100.** DeepSWE v1.1 77.9% clears the 74% frontier ref, TB-Science 57.6% and CWE-bench 68.0% are solid, Vibe Code Bench 1.1 91.9% (Google/Vals, Sept 2026) is strong, and Google reports a real 32K-line Rust code-migration win. Capped by Terminal-Bench 4.0 at ~57.5% (behind the Claude/OpenAI leaders), no verified SWE-bench row yet, and Vector Wire not rating Coding (thin coverage).
- **Cost efficiency: 80/100.** Paid-only at $2/$10 per 1M (provisional, pre-GA); between the ~$1.25/$4.25=88 and ~$3/$15=60 anchors, weighted toward the cheaper end. No free tier and access is restricted.
- **Overall Score: 87/100.** Mean of the five non-cost dims (82+88+95+88+84)/5 = 87.4. A strong long-context / low-hallucination reasoning model whose thin independent coverage and restricted access keep it provisional — best fit for long, document-heavy work once access widens; independent agentic evals (APEX 82.4%) are stronger than the TB4.0 terminal result alone implied. (Reasoning raised 85→88 on the third-pass AA-HLE 57.1% / ARC-AGI-2 91.3% / FrontierMath fills; Overall unchanged.)

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19) re-ran Artificial Analysis and BenchLM: AA Index 53 unchanged (#8/217, 4/4 units), 84.2 tok/s, TTFT 47.97s, not deprecated, 4 providers at Google's API price ($2/$10 confirmed — no longer provisional; AA lists text+image only, so the video claim rests on Google's own LVBench); BenchLM composite 82.93/100 (#5/956, 42/644 benchmarks) filling the prior GPQA/HLE gap — AA-HLE 57.1%, ARC-AGI-2 91.3% / ARC-AGI-3 46.3% (ARC Prize), Epoch FrontierMath v2 T1–3 86.0%/T4 78.0%, GDPval-AA Elo 1,624 / 56.2% normalized, AA AutomationBench 77.5%, FrontierSWE v2 55.0%, AA-Omniscience hallucination 15.1% (calibration confirmed) — Reasoning raised 85→88 on that verified independent evidence (Overall unchanged at 87). Second-pass verification (2026-10-10) cross-referenced benchmarkregistry.org (22 primary-source results, updated 2026-10-07 — independent Mercor APEX-Agents 82.4%, Zapier AutomationBench 50.1%, Vals AI TB4.0 57.6%) and the Artificial Analysis live LLM leaderboard (Intelligence Index 53). Prior pass (2026-10-08) used hokai.io and vectorwire.ai.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

### Normalized scores (1–100)
