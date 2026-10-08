# Gemini 4 Argon — findings by Step 5 Preview

- Source: Google (DeepMind) `gemini-4-argon`
- Date: 2026-10-08 (UTC)
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

- AutomationBench-AA: **78%** (Artificial Analysis variant) / **51.3%** (Google/Zapier own run)
- OSWorld 2.0 (offline subset): **69.2%** (Google)
- Vals Index 2.1: **68.9%** (cross-industry composite)
- Terminal-Bench 4.0: **57%** (behind Claude Sonnet 5.5 64%, Opus 5.5 60%, GPT-6 Astra 59%)
- Agents' Last Exam (pass rate): **39.5%** (Google)
- PostTrainBench: **45.3%**
- Vector Wire capability: **Agentic "Limited"** (−25.4% vs leader, 2/7) — its weakest area

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

- **Tool use: 78/100.** AutomationBench-AA 78%, OSWorld 69.2%, and Vals Index 68.9% are capable, but Terminal-Bench 4.0 at 57% trails Claude Sonnet 5.5 (64%), Opus 5.5 (60%), and GPT-6 Astra (59%), and Vector Wire rates Agentic "Limited" (−25.4% vs leader) — its weakest area. Agentic breadth is the cap.
- **Reasoning: 85/100.** AA Intelligence Index 53 (a 23-pt jump over Gemini 3.1 Pro, level with GPT-6 Astra) and exceptional calibration (AA-Omniscience 15% hallucination — it declines rather than guesses) are strong. Capped by Vector Wire's Reasoning "Capable" (−18.4%) and Factuality "Capable" (−13.0%) ratings, plus no verified GPQA/HLE row yet.
- **Context window: 95/100.** A 1M input AND 1M output window (provisional — Google hasn't confirmed) with GraphWalks 84.2% at 256k–1M, LVBench 91.7%, and Long Context "Capable" (−11.7%) — solidly in the ≥1M tier. Not a full 100 because the 1M spec is vendor-unconfirmed and there is no explicit MRCR ≥98%-at-512K figure.
- **Multimodal: 88/100.** Text + image + video in with LVBench 91.7% (long-video) hits the 90–100 input band; held to 88 because Vector Wire has not rated Multimodal (too few results) and output is text-only.
- **Coding: 84/100.** DeepSWE v1.1 77.9% clears the 74% frontier ref and TB-Science 57.6% is solid, and Google reports a real 32K-line Rust code-migration win. Capped by Terminal-Bench 4.0 at 57% (behind the Claude/OpenAI leaders), no verified SWE-bench row yet, and Vector Wire not rating Coding at all (thin coverage).
- **Cost efficiency: 80/100.** Paid-only at $2/$10 per 1M (provisional, pre-GA); between the ~$1.25/$4.25=88 and ~$3/$15=60 anchors, weighted toward the cheaper end. No free tier and access is restricted.
- **Overall Score: 86/100.** Mean of the five non-cost dims (78+85+95+88+84)/5 = 86.0. A strong long-context / low-hallucination reasoning model whose thin independent coverage and restricted access keep it provisional — best fit for long, document-heavy work once access widens; look elsewhere for terminal-driven coding agents today.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-08
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Cross-referenced hokai.io (Artificial Analysis + Google's own evals) and vectorwire.ai (27 results, 3 independently verified — most vendor-reported due to restricted access).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

### Normalized scores (1–100)
