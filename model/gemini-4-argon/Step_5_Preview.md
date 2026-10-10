# Gemini 4 Argon — findings by Step 5 Preview

- Source: Google (DeepMind) `gemini-4-argon`
- Date: 2026-10-10 (UTC) — second-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon (`gemini-4-argon`; announced 2026-09-30; preview-tier, restricted access)
- **Short description:** Google DeepMind's frontier reasoning model and the first Gemini 4 announcement — Google's first proprietary model above the Flash class since Gemini 3.1 Pro (~7 months). Built for long coding, knowledge-work, and cyber-defense jobs; stands out for calibration (low hallucination). Access is staged, initially vetted security teams only.
- **Provider / access:** Google Fairwind Program (vetted security teams, guardrail-removed build) → paid Gemini API / AI Ultra subscribers (no date given). NOT generally available as of 2026-10-08. No model card or public API model ID exists yet.
- **Release / knowledge:** Announced 2026-09-30. Knowledge cutoff / training cutoff not disclosed.
- **IDs:** `gemini-4-argon` / `gemini-4-argon-high` (Artificial Analysis / Arena listing; no official public API ID yet).
- **Context window:** 1,000,000 (1M) input AND 1,000,000 (1M) max output (AA + Arena list 1M; Google has not stated one — flagged).
- **Modalities:** Text, image, video in; text out. Reasoning yes; tool calls expected.
- **Pricing (as of 2026-10-08):** $2.00/M in · $10.00/M out (Artificial Analysis listing; pre-GA, provisional).
- **Architecture:** Proprietary; architecture, parameter count, and training cutoff undisclosed.

### Raw benchmarks found

> Cross-referenced hokai.io (Artificial Analysis + Google's own evals) and vectorwire.ai (27 results/26 benchmarks, only 3 independently verified — most are vendor-reported; access is restricted so independent coverage is thin).

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
- Vector Wire capability: **Agentic "Limited"** (−25.4% vs leader, 2/7) — now contradicted by stronger independent APEX/AutomationBench runs

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **53** (high reasoning; level with GPT-6 Astra and Fable 5.1, a point ahead of GPT-6.1 Sol, below Opus 5.5's 58; a 23-pt jump over Gemini 3.1 Pro)
- AA-Omniscience: **42.35** (accuracy) with a **15% hallucination rate** — a calibration standout; it usually declines rather than guesses
- Vector Wire capability: **Reasoning "Capable"** (−18.4% vs leader, 2/6); **Factuality "Capable"** (−13.0%)
- RiemannBench: **76.0**
- GPQA Diamond / HLE exact rows: not surfaced live for Argon — treated as provisional

Coding:

- DeepSWE v1.1 (long-horizon SWE): **77.9%** (Google's own eval) — clears the 74% frontier ref
- Terminal-Bench 4.0: **57%** (see tool use) — behind the Claude/OpenAI leaders
- Terminal-Bench-Science 0.1: **57.6%**
- SWE-bench Verified / SWE-bench Pro: no verified public score found for Argon yet
- Vector Wire: Coding **not rated** (too few results)
- Internal evidence (Google's account): Argon agents replaced 32,000 lines of SIMD code in the Rust port of libgav1, producing safe Rust reported to run 2.7× faster than the prior port with identical output.

Multimodal:

- Text + image + video in; text out.
- Vector Wire: Multimodal **not rated** (too few results); LVBench (long video) **91.7%** is the multimodal signal.

Long context:

- 1M input / 1M output (provisional); GraphWalks 256k–1M (BFS F1) **84.2%**, up-to-128k **99.7%**
- LVBench (long video): **91.7%**
- Vector Wire: Long Context **"Capable"** (−11.7% vs leader, 1/3)

- **Tool use: 82/100.** Independent agentic runs are stronger than the thin vendor set first suggested: APEX-Agents 82.4% (Mercor, independent — now field-leading, above Opus 5.5's 73.5% and Fable 5.1's 68.6% at max), AutomationBench 50.1% (Zapier, independent), OSWorld 69.2%, Vals Index 68.9%. Capped below frontier by Terminal-Bench 4.0 at ~57.5% (still behind Sonnet 5.5 64%, Opus 5.5 60%, GPT-6 Astra 59%) and Vector Wire's Agentic "Limited" rating, which the independent APEX run now contradicts. Raised from 78 on the 2026-10-07 independent APEX/AutomationBench evidence.
- **Reasoning: 85/100.** AA Intelligence Index 53 (a 23-pt jump over Gemini 3.1 Pro, level with GPT-6 Astra) and exceptional calibration (AA-Omniscience 15% hallucination — it declines rather than guesses) are strong. Capped by Vector Wire's Reasoning "Capable" (−18.4%) and Factuality "Capable" (−13.0%) ratings, plus no verified GPQA/HLE row yet.
- **Context window: 95/100.** A 1M input AND 1M output window (provisional — Google hasn't confirmed) with GraphWalks 84.2% at 256k–1M, LVBench 91.7%, and Long Context "Capable" (−11.7%) — solidly in the ≥1M tier. Not a full 100 because the 1M spec is vendor-unconfirmed and there is no explicit MRCR ≥98%-at-512K figure.
- **Multimodal: 88/100.** Text + image + video in with LVBench 91.7% (long-video) hits the 90–100 input band; held to 88 because Vector Wire has not rated Multimodal (too few results) and output is text-only.
- **Coding: 84/100.** DeepSWE v1.1 77.9% clears the 74% frontier ref, TB-Science 57.6% and CWE-bench 68.0% are solid, Vibe Code Bench 1.1 91.9% (Google/Vals, Sept 2026) is strong, and Google reports a real 32K-line Rust code-migration win. Capped by Terminal-Bench 4.0 at ~57.5% (behind the Claude/OpenAI leaders), no verified SWE-bench row yet, and Vector Wire not rating Coding (thin coverage).
- **Cost efficiency: 80/100.** Paid-only at $2/$10 per 1M (provisional, pre-GA); between the ~$1.25/$4.25=88 and ~$3/$15=60 anchors, weighted toward the cheaper end. No free tier and access is restricted.
- **Overall Score: 87/100.** Mean of the five non-cost dims (82+85+95+88+84)/5 = 86.8. A strong long-context / low-hallucination reasoning model whose thin independent coverage and restricted access keep it provisional — best fit for long, document-heavy work once access widens; independent agentic evals (APEX 82.4%) are stronger than the TB4.0 terminal result alone implied.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-10
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Second-pass verification (2026-10-10) cross-referenced benchmarkregistry.org (22 primary-source results, updated 2026-10-07 — independent Mercor APEX-Agents 82.4%, Zapier AutomationBench 50.1%, Vals AI TB4.0 57.6%) and the Artificial Analysis live LLM leaderboard (Intelligence Index 53). Prior pass (2026-10-08) used hokai.io and vectorwire.ai.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

### Normalized scores (1–100)
