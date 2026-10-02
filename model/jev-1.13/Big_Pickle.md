# Jev 1.13 — findings by Big Pickle

- Source: TypeSafe AI (`opencode/jev-1.13`, OpenRouter checkpoint `typesafe/jev-1.13`, canonical `jev-1.13.0`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Jev 1.13 (Jev 1.13.0, TypeSafe AI) — a **System One** typed-decision model
- **Short description:** Not a chat model. Jev returns *typed, calibrated decisions* rather than text — the primitives are `choice` (one of up to 255 options), `score` (an ordered 2–10 level scale) and `noul` (a calibrated yes/no from 0 to 1), each trained with RLCD so the confidence numbers are meaningful. A call is a model plus state plus a map of questions, answered **in parallel in a single round trip in roughly 70–500ms**. Released 2026-09-18; designed to replace LLM calls in classification, routing, triage and extraction pipelines where a frontier model is 100× too slow and 100× too expensive.
- **Provider / access:** TypeSafe AI System One API `POST https://api.typesafe.ai/v1/systemone`; hosted `POST https://jevtypesafeai.com/api/v1/decide` with a `jv_live_` key; OpenRouter checkpoint `typesafe/jev-1.13`; **no OpenCode Zen free ID**.
- **Release / knowledge:** released 2026-09-18; `jev-latest` is a moving pointer, `jev-1.13.0` the pinned production version (TypeSafe's own advice: pin in production, because calibrated thresholds shift between releases).
- **IDs:** `opencode/jev-1.13` (this folder); upstream `jev-1.13.0` / `typesafe/jev-1.13`.
- **Context window:** TypeSafe publishes **no** large-context figure; JevBench v1.4.2.1 runs inside the package's own **16,384-token** limit rather than truncating. The 128K value in this folder's `meta.json` is a placeholder, not a verified spec.
- **Modalities:** text in; **structured typed output only** — no free-text generation, no image or audio input documented.
- **Pricing (as of 2026-10-02):** **$0.42 per 1M input tokens, output free — roughly $0.001 per decision** on either version. No free tier.
- **Architecture:** proprietary; **TypeSafe has explicitly not published the parameter count or model size** ("treat those numbers as unknown rather than guessing"). A 421M-parameter open-weights sibling, **Laya**, exists but is a different model and much weaker (78.0% vs 91.9% on paired federal-solicitation rows).

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

- **Tool use: 32/100.** Jev has no agentic tool-use surface at all; it answers a question map in one parallel round trip. What it *does* have is unusually strong **structured** output — typed `choice` / `score` / `noul` returns with meaningful calibrated probabilities — which is a different and narrower capability than tool orchestration. The Routing task (60/60) and fan-out results (47.0% → 55.6% accuracy, calls cut ~7 → 3) show real decision-pipeline value, but nothing here can drive a multi-step coding or research agent.
- **Reasoning: 56/100.** The most interesting profile in this comparison. Jev matches a frontier reasoning LLM on research abstracts (PubMedQA 78.4% vs 78.2%) and on claim verification, then falls away as tasks get harder: MetaMedQA 74.8% vs 82.7%, DiagnosisArena-MCQ 59.8% vs 82.4%, NEJM 61.8% vs 82.4%, and 0/10 against Kimi-K2 on DimABSA. JevBench's own sealed set exposes the same cliff (74% hard → 37% sealed). Calibration excellence (ECE 0.063, 91.9% at ECE 0.049, 88.2% precision) is a genuine strength but does not convert into selective-prediction advantage (AURC 0.087 vs 0.070).
- **Context window: 40/100.** No published context figure; the evaluated package limit is 16,384 tokens, an order of magnitude below every other entry here. Long-context retrieval is simply outside its design — it consumes a document slice and returns typed decisions, so the score reflects capability absent by intent rather than failure.
- **Multimodal: 10/100.** Text in, typed structured output, no image or audio path documented and no multimodal evaluation possible. Floor score for an absent capability.
- **Coding: 14/100.** Coding is its weakest measured axis: AI BENCHY Coding **2.2** with 0 of 2 tests passed, Instructions following **1.5**, and no code benchmark of any kind exists because Jev cannot emit a patch or a program. Use it to route and triage code-related work, not to write code.
- **Cost efficiency: 92/100.** The strongest dimension by a wide margin, and the reason the model exists: $0.42 per 1M input with **output free** (~$0.001 per decision), 2,823 medical questions for $0.08, 60 routing decisions for $0.00278 against $0.019, and 5,003 judged pairs for $0.063 — 29×, 66× and 325× cheaper than GPT-5.6 Luna, DeepSeek V4.1 Flash and Gemini 3.8 Flash — with 175–700ms round trips. JevBench's own Cost axis scores it only 52.0, so the vendor also sees headroom.
- **Overall Score: 30.4/100.** Half-up mean of the five quality dims (32 + 56 + 40 + 10 + 14 = 152 / 5), Cost excluded. Read the number correctly: Jev 1.13 is not a general LLM and was never scored to be one. It is a **production classification and routing component** that beats frontier models on calibration, ties them on narrow well-specified tasks, and costs three orders of magnitude less — pair it with a generator rather than comparing it to one. Its own JevBench rank of #3 of 90 among typed-decision systems is the honest frame.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-02
- Method: public internet research (Benchmark Heaven JevBench v1.4.2.1 leaderboard and model page, jevmodel.ai author-reported benchmark reports, arXiv:2609.34024 independent medical evaluation, jev-laya-classification-bench, the Jev calibration audit repository, AI BENCHY, TypeSafe AI model documentation). No parameter count was invented — TypeSafe publishes none. No Laya, Plumb-4B or frontier-model figure was transferred to Jev 1.13 except where the same evaluation table reported both.
- Future sources: add a new file next to this one, e.g. `Laya.md`, using the same headings.

---