# Pareto 26.10 Preview — findings by Step 5 Preview

- Source: Unbiased (`unbiased/pareto-26.10-preview`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview (Unbiased; the stable predecessor is Pareto 26.9)
- **Short description:** A **composite** model rather than a single checkpoint — Unbiased's architecture "engages multiple LLMs in parallel on every request, and their results are synthesized dynamically based on the task" (unbiased.ai/how). The lab (Circuit & Chisel, the ex-Stripe team behind the ATTP agentic-payments protocol, repositioned as Unbiased AI) previously ran this exact model family as the stealth "Union Alpha" on OpenRouter/OpenCode/Cloudflare for ~33 hours in September 2026 before being named. The 26.10 preview itself launched openly on 2026-10-01 with a full zero-data-retention tier on OpenRouter/Cloudflare, 1M context, image input, and $0.80/$3.20 pricing — and OpenRouter explicitly labels it a preview that "may change without notice; use pareto-26.9 for stable behaviour."
- **Provider / access:** Unbiased API, OpenRouter (`unbiased/pareto-26.10-preview`), Kilo, nano-gpt, Cloudflare AI Gateway; closed weights, single host; commercial/production use requires a separate written agreement per Unbiased's docs.
- **Release:** 2026-10-01.
- **Context window:** 1,048,576 tokens; max output 131,072.
- **Modalities:** Text and image in → text out.
- **Pricing (as of 2026-10-09):** $0.80/M input, $3.20/M output, $0.03/M cached input (Pareto 26.9 stable: $2.50/$7.50/$0.25 at 262K context).
- **Status:** preview — "These are preliminary numbers from a serving stack that's still settling."

### Raw benchmarks found

Vendor (Unbiased blog + model card, October 1, 2026 runs — explicitly preliminary, no independent validation):

- GPQA-Diamond: **92.4%** ($0.004/task)
- Humanity's Last Exam (text-only): **49.9%** ($0.008/task)
- DeepSWE v1.1: **69.9%** ($0.24/task)
- Terminal-Bench 4.0: **50.8%** ($0.48/task)

Transcribed comparators (from a September 21, 2026 comparison — not independently validated; DeepSWE comparators use a 30-task slice, not the full set):

- Fable 5 (Aug 15): DeepSWE 70.0% @ $13.50/task; Pareto 26.9 (Sep 20): 70.0% @ $0.29/task
- Terminal-Bench 4.0: GPT-6 Astra 58, Fable 5.1 56 (both above 50.8)
- DeepSWE v1.1: GLM-5.3 and Kimi K3 each listed at 69.0 (below 69.9)

Independent evaluations: **none exist** — Artificial Analysis has no page for Pareto, SWE-bench plain has no score, and no third party (SMF Clearinghouse, AI BENCHY, stealthmodels) has run the model. benchlm.ai displays only the three vendor rows; lmmarketcap's "40/100 composite" is a scoring artifact, not an eval.

### Normalized scores (1–100)

- **Tool use: 72/100.** DeepSWE v1.1 69.9% and Terminal-Bench 4.0 50.8% (vendor runs) are upper-mid-band agentic results at $0.24–0.48/task — 28–56× cheaper per task than the transcribed comparators; held below the frontier band because every number is vendor-run, preliminary, and partially on sliced benchmarks.
- **Reasoning: 80/100.** GPQA-Diamond 92.4% and HLE 49.9% would be frontier-band on any independent harness — both are at or above the transcribed Fable 5 / Astra numbers — but Unbiased itself labels them preliminary, "from a serving stack that's still settling," and no third party has reproduced anything.
- **Context window: 88/100.** A 1M-token window is the ≥1M band (95–100); docked because no MRCR/RULER/needle-retrieval result is published and a composite architecture means retrieval quality may vary by which underlying models the router engages.
- **Multimodal: 62/100.** Text + image in → text out is the 60–70 band; image input is confirmed by the API catalog but no vision benchmark (MMMU, OCRBench) exists.
- **Coding: 72/100.** DeepSWE v1.1 69.9% (vendor; comparators GLM-5.3/Kimi K3 at 69.0, Fable 5 at 70.0 on a 30-task slice) is competitive frontier coding — but again vendor-run, and no SWE-bench Verified/Pro or LiveCodeBench figure exists.
- **Cost efficiency: 90/100.** $0.80/$3.20 with $0.03 cache reads and measured per-task costs of $0.004–0.48 — the methodology's ~$0.6/$2.2 ≈ 92 range with a genuine cost-per-completed-task story (Pareto 26.9's DeepSWE at $0.29/task vs Fable 5's $13.50); the preview's instability and evaluation-only access terms are the dock.
- **Overall Score: 75/100.** Best-fit recommendation: a cheap 1M-context composite with frontier-adjacent vendor numbers — GPQA 92.4% and HLE 49.9% at $0.004–0.008/task — worth an evaluation now, not a production dependency yet: every benchmark is Unbiased's own preliminary run, and the preview "may change without notice."

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Unbiased launch blog + model card + how-it-works page, OpenRouter model/endpoints API, models.dev catalog, OrcaRouter and benchlm analyses, Union Alpha/Pareto identity coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Pareto_26_11.md`, using the same headings.
