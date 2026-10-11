# Jev 1.13 — findings by Gemini 3.8 Flash

- Source: opencode/jev-1.13
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Jev 1.13
- **Short description:** TypeSafe AI's System-One decision model: returns typed judgments (Choice, Score, yes/no probability) with calibrated confidence instead of generated text. Built for routing, triage, and guardrails inside agent pipelines.
- **Provider / access:** opencode/jev-1.13
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/jev-1.13 (Zen tier available)
- **Context window:** 64K state budget (state + questions; 32K state + longest question)
- **Modalities:** Text in → typed decision out (Choice/Score/Noul); no image, audio, or video
- **Pricing (as of 2026-10-11):** $0.042/M input; output free (no autoregressive generation)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

JevBench v1.4.2.1 (Benchmark Heaven, frozen leaderboard):

- Composite **JevBench Score: 63.3**, rank **#3 of 90** ranked systems (Plumb-4B leads at 65.8)
- Axes: Intelligence **53.1**, Calibration **76.3**, Speed **83.3**, Cost **52.0**
- Accuracy per tier: Easy **100%**, Standard **99%**, Judge **95%**, Hard **74%**, Sealed **37%** — public aggregate 86.6% vs 36.7% sealed, a +49.9pp generalization gap that the benchmark deliberately exposes
- Run cost **$0.040**, latency **0.65s**; model-call time and tool time vary by package

Domain evaluations:

- **Banking77** (3,080-utterance test split): **81.0%** accuracy (79.6–82.3), macro-F1 **80.5%**, median round trip **175 ms**, **$0.34** total — against Claude Opus 5's 84.4% / 83.6% / 2,266 ms / $7.44
- **Medical suite** (arXiv:2609.34024, 2026-10-01, independent evaluation): PubMedQA **78.4%** (GPT-6 Sol medium 78.2%, human annotator 78.0%); MetaMedQA **74.8%** vs 82.7%; DiagnosisArena-MCQ **59.8%** vs 82.4%; NEJM Case Challenges **61.8%** vs 82.4%. Best-calibrated system on MetaMedQA (**ECE 0.063 vs 0.146**) but **AURC worse** (0.087 vs 0.070) — no selective-prediction advantage; **AUROC 0.645 vs 0.768** on DiagnosisArena; chose "I don't know" only **10.5%** of the 162 times it was correct. All 2,823 items cost **$0.08**; median latency **0.27–0.31s**
- **Federal IT solicitations** (12,000 real US records, quote-gold subset n=741): **91.9%** primary-class accuracy, **ECE 0.049**, auto-accepts **86.5%** of rows at Wilson-bounded **95% precision** — beating Qwen3.5-35B-A3B (89.6%) and Laya (78.0%); fulfillment mode stays ≤71% for every system
- **Email triage** (1,565 business emails, 10 categories): **96.4%** overall / **92.0%** equal-weighted, **$0.08 per 1,000 emails** (vs Gemini 3.5 Flash-Lite 97.5% / $0.80, Gemini 3.8 Flash 98.5% / $1.79)
- **App-review labeling** (1,000 reviews): **4.6s**, **$0.023**, sentiment correlation with stars **0.803**, topic agreement 84.4%, bug agreement 92.6%
- **Routing / decision task** (60 solvable requests): **60/60**, median **0.313s**, p95 **0.465s**, **$0.00278** vs DeepSeek V4.1 Flash $0.01912
- **Claim verification** (42 claim-passage pairs): **85.7%** on all 42 (tied GPT-5.4 and Claude Sonnet 5), **77.8%** on the hard 18 vs 66.7% for both frontier models, at **$0.000025 per claim** — but unsupported-claim recall **78.9%**, short of the 80% bar set before the run, with 88.2% precision
- **Reranking** (nDCG@10): SciFact **0.768–0.772**, NFCorpus **0.358**, FiQA **0.376** — ahead of Voyage rerank-3 (0.755/0.357/0.402) on SciFact, behind on FiQA; vs GPT-5.6 Luna 0.747/0.355/0.363 and Claude Haiku 4.5 0.723
- **Jev Choice judge**: **$0.063** and **29 seconds** for 5,003 pairs — 29× cheaper than GPT-5.6 Luna, 66× than DeepSeek V4.1 Flash, 325× than Gemini 3.8 Flash
- **AI BENCHY**: score **3.2**, rank #357 — **Data parsing and extraction 10.0 (#1)**, Domain-specific 7.7, Anti-AI Tricks 4.0, Puzzle Solving 3.3, **Coding 2.2 (0/2)**, Instructions following 1.5, reliability 10.0; 698ms average
- Known weakness published by the developer: on Jev's most confident errors, **96.0%** of LLM judge verdicts repeat the wrong answer — fan-out review buys at most ~1.5–2.0 points
- **SemEval-2026 DimABSA**: untuned Jev mean **RMSE_VA 2.4750** — 0 wins / 10 losses against Kimi-K2 Thinking's official 1.8731, 3 wins / 7 losses against a Qwen3-14B QLoRA fine-tune (2.1889)

General-purpose LLM benchmarks:

- SWE-bench Verified / SWE-bench Pro / Terminal-Bench / τ²-bench / MCP Atlas / GPQA Diamond / HLE / MMLU-Pro / LiveCodeBench / SciCode: **no verified public score found** — Jev is not an open-ended generator and none of these suites apply.

### Normalized scores (1–100)

- **Tool use: 36/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 50/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 45/100.** Effective retrieval fidelity across context capacity (64K state budget (state + questions; 32K state + longest question)).
- **Multimodal: 15/100.** Input/output modality comprehension (Text in → typed decision out (Choice/Score/Noul); no image, audio, or video).
- **Coding: 20/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 98/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 33.2/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
