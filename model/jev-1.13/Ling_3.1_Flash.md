# Jev 1.13 — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Jev 1.13
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **DESIGN NOTE:** Jev is a **"System One" model** (TypeSafe AI): it writes no text. Each call returns a typed decision — one option from a list, a level on an ordered scale, or the probability that a statement is true — in a single fast pass. The API exposes no effort, temperature, or seed setting (one column). It is scored as what it is: a judgment engine, not a generative chat or agent model.

## Model card

- **Name:** Jev 1.13 (pinned `jev-1.13.0`; OpenRouter slug `typesafe/jev-1.13`)
- **Short description:** TypeSafe AI's text-free structured-decision model — returns typed decisions (choice / scale level / probability) at frontier-grade calibration and ~0.3s latency, priced for per-question API workloads.
- **Provider / access:** TypeSafe AI — System One API (pinned `jev-1.13.0`, not `jev-latest`); OpenRouter `typesafe/jev-1.13`.
- **Release / knowledge:** 2026-09-18 (AI BENCHY). Knowledge cutoff not captured.
- **IDs:** `jev-1.13`; folder `jev-1.13`.
- **Context window:** Not documented (single-pass decision model; no long-context evidence captured).
- **Modalities:** Text in; structured decision out (no prose).
- **Pricing (as of 2026-10):** $0.042 / $0.00 per 1M input/output (OpenRouter); ≈$0.12 per 1,000 questions; $0.08 for 2,823 medical items; $0.000025 per schema-constrained claim.
- **Architecture:** Not disclosed; proprietary ("Jev (TypeSafe, closed)").

### Raw benchmarks found

**VulcanBench Verdict v2 (2026-09-25; independent; 4,774 items, 20 families in 8 areas; each answer checked against a program's real output, a type checker, a hidden test suite, a merged fix, or the question generator; skill = 100×(accuracy−floor)/(1−floor), floor = best of always-most-common, guessing, and every surface shortcut):**
- **Verdict Index 45.9** (95% interval 43.1–48.4; 0 = best dumb strategy, 100 = perfect). Reference: GPT-6 Astra high effort 91.7 (90.1–93.1).
- Software sub-index (12 families) **49.6** (45.5–53.1; reference 86.2); General sub-index (8 families) **40.4** (36.8–43.9; reference 100.0).
- Calibration Index (Brier skill) **0.33** (0.30–0.35; reference 0.87) — best on type checking (0.83), incidents (0.73), bug location (0.68); near-uninformative on code output (0.10), vulnerable versions (0.09), failing tests (0.06).
- Family highlights: "which of two snippets type-checks" skill 87.2 (ranking 0.99); "does the conclusion follow" 75.4 (0.95); patch minor/major version bump 63.3 (0.91); which file the fix touches 56.8; weakest: "which listed test does this patch fail" **0.6** (no better than choosing the longest test; reference 70), "which version is vulnerable" 22.9 (vs best shortcut 20.0).
- Median **0.29s** per answer (p95 0.42s) vs reference 7.2s (p95 17.8s); $0.58 for all 4,774 answers.
- History: Verdict v1 (2026-09-22) could not separate Jev from guessing on patch-pass prediction (62.8% vs 62.7% floor); v2's floor normalization fixed it.

**Author-reported workloads (jevmodel.ai; not rerun):** email classification 96.4% overall / 92.0% equal-weight at $0.08 per 1,000 emails (vs Gemini 3.5 Flash-Lite 97.5%/94.6%/$0.80); sentiment: 4.6s whole-run, $0.023, correlation 0.803; schema-constrained claims 85.7% all-42 / 77.8% hard-18 (GPT-5.4 85.7/66.7/61.1; Claude Sonnet 5 85.7/66.7/44.4); LLM-as-judge: RewardBench 92.2%, JudgeBench 78.6%, HaluEval 87.5%, 1312/1312 valid; judgment panel 81.0% accuracy, Macro-F1 80.5%, median 175ms, $0.34 billed (vs Claude Opus 5 reasoning-off 84.4%/83.6%/2,266ms/$7.44); classification MMLU 91.8% / Banking77 79.7%; reranking SciFact 0.768–0.772 / NFCorpus 0.358 / FiQA 0.376 at $0.18–0.28; Open-Jev (231 public tasks): 200/231 correct, 81/111 hard, P50 291.3ms hosted (vs Open-Jev 2B 150 / 9B 179 / 27B 197; GPT-6 Luna none 206/89; GPT-6 Astra low 231/111).

**Independent third-party (arXiv 2609.34024, medical study, 2026-10-01):** MetaMedQA 74.8% (vs GPT-6 Sol medium 82.7%, −7.9pp); PubMedQA 78.4% (vs 78.2%, +0.2pp — similar); DiagnosisArena-MCQ 59.8% (vs 82.4%, −22.6pp); NEJM Case Challenges 61.8% (vs 82.4%, −20.6pp); best calibrated on MetaMedQA (ECE 0.063 vs 0.146); AUROC 0.845 on MetaMedQA but 0.645 on DiagnosisArena; rarely selects "I don't know" (10.5% when the correct answer was unanswerable vs GPT-6 Sol 8.6%); median latency 0.27–0.31s; all 2,823 items cost $0.08. Conclusion: fast, inexpensive, similar to a frontier LLM on research abstracts, lower on exam questions, much lower on complex diagnostics; not a stand-alone diagnostic tool.

**JevBench v1.4.2.2 (Benchmark Heaven):** score 63.3, #4 of 91 (4.1 behind Imajev-4B's 67.4); axes 53.1/76.3/83.3/52.0. **AI BENCHY:** 3.2, #357; reliability 10.0, pass rate 27.3%; Data parsing and extraction #1 (10.0); Coding 2.2 (0/2); Tool Calling 0.0 (unsupported by adapters); Instructions following 1.5; 698ms avg response. OpenCode usage: #35 by tokens (5.7B).

## Scores

- **Tool use: 36/100.** Parallel typed decisions and schema-aligned output are the design, but AI BENCHY tool calling is 0.0 (unsupported by adapters) and no standard tool-use suite applies; VulcanBench's tool-adjacent families (type checking 87.2, patch-version bump 63.3) partially compensate.
- **Reasoning: 46/100.** Verdict Index 45.9 (software 49.6 / general 40.4) and JevBench 63.3 (#4 of 91) are the anchors; the independent medical study shows frontier-similar abstract QA (PubMedQA 78.4%) but large deficits on diagnostics (DiagnosisArena 59.8%, NEJM 61.8%, −20–23pp); author-reported MMLU 91.8% is unverified.
- **Context window: 52/100.** Not documented; single-pass decision architecture with no long-context evidence — scored on absence, not on a measured failure.
- **Multimodal: 15/100.** Text in, structured decision out; no multimodal evidence.
- **Coding: 44/100.** Software sub-index 49.6 with excellent type-checking judgment (87.2 skill) but near-zero failing-test prediction (0.6 skill) and AI BENCHY coding 2.2 (0/2) — a code *judge*, not a code *writer*.
- **Cost efficiency: 97/100.** $0.042/M input, $0/M output; ≈$0.12 per 1,000 questions at 0.29s median — the cheapest per-decision pricing captured, with full auditability (pinned version, one query per item).
- **Overall Score: 38.6/100.** Mean of Tool use 36, Reasoning 46, Context window 52, Multimodal 15, Coding 44 = 38.6.

> **Gap vs folder average (39.5): −0.9.** Effectively on the peer set. The Verdict Index 45.9 is the honest center of gravity: a model that beats every shortcut on 20 judgment families yet writes no prose, cannot run standard agent suites, and loses 20–23pp to frontier models on complex diagnostics. The floor-normalized v2 methodology (post-v1's patch-pass flaw) is the most credible judgment benchmark captured for this model.

## Notes

- Verification trail: TypeSafe "Verdict v2" report (methodology; indices; family table; latency/cost; v1 flaw disclosure), jevmodel.ai workload pages (author-reported comparisons), arXiv 2609.34024 (independent medical study), OpenRouter (pricing, slug, release date), Benchmark Heaven (JevBench score/rank), AI BENCHY (axis scores), OpenCode usage leaderboard.
- Known conflicts: author-reported MMLU 91.8% (jevmodel.ai) vs no independent MMLU row; AI BENCHY pass rate 27.3% vs JevBench #4 of 91 — different harnesses for a text-free decision API; vendor-style comparisons (email classification, judgment panel) are author-reported, not rerun.
- Open questions: context window and provider-side rate limits; independent replication of Verdict v2; whether a text interface exists at all; hallucination behavior on unanswerable items (it rarely says "I don't know").

Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03

Future sources: independent Verdict v2 replications, context-window disclosure, modality confirmation.
