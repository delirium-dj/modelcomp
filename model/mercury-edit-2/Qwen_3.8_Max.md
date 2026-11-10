- Source: Inception Labs (`mercury-edit-2`; diffusion next-edit-prediction / FIM code-autocomplete endpoint)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury Edit 2
- **Short description:** Inception Labs' purpose-built diffusion LLM (dLLM) for next-edit prediction — the most latency-sensitive part of a coding workflow. Using recent snippets, the current file's editable region, and a time-ordered edit-diff history, it predicts the developer's next change and generates tokens in parallel (diffusion) so suggestions arrive fast enough to feel like part of the developer's own thinking ("just Tab to accept"). It upgrades Inception's prior next-edit model and complements its auto-complete endpoint. It is a specialized FIM/edit endpoint, **not** an open-ended conversational or agentic coding model.
- **Provider / access:** Inception Labs. Available on the Inception Platform (`/v1/edit/completions`, model `mercury-edit-2`, Python/TS SDKs `inceptionai`), and integrated in Zed (provider-agnostic edit prediction) and ProxyAI. Announced 2026-10-29.
- **Release / knowledge:** Released 2026-10-29; knowledge cutoff not published. Trained on a curated multi-language edit dataset, then aligned with KTO (Kahneman-Tversky Optimization), an unpaired RL method, on a human-preference dataset of explicit accept/reject feedback.
- **IDs:** `inception/mercury-edit-2` (dataset id); `mercury-edit-2` (Inception API model slug). Distinct from Inception's general `mercury-2` / `mercury-2.5` diffusion LLMs and from `mercury-decide`.
- **Context window:** 32,000 tokens total; 8,192 max output. Designed for small, fast windows — docs recommend 3–5 recently-viewed snippets (~20 lines each), the current file, the last 3–5 edits, and an editable region of 10–25 lines (~100–250 tokens) which "dominates latency."
- **Modalities:** Text (code) in → text (code) out. No image/audio/video. Structured next-edit request format: `<|recently_viewed_code_snippets|>`, `<|current_file_content|>` with `<|code_to_edit|>`, and `<|edit_diff_history|>` (unidiff).
- **Pricing (as of 2026-11-10):** $0.25 / 1M input, $0.75 / 1M output, $0.025 / 1M cached input. Every new Inception API account gets 10M free tokens; Zed users get 1 free month of Mercury Edit 2 suggestions.
- **Architecture:** Diffusion LLM (parallel denoising generates multi-line code diffs simultaneously for low-latency Tab completions); ~1,000 tokens/second decoding. KTO-aligned to human accept/reject preferences to curb overzealous edit frequency/length.

### Raw benchmarks found

> Inception's official launch blog (2026-10-29) describes the evaluation suite and reports relative gains; the absolute per-benchmark numbers are published as image charts that were not machine-readable at research time, so no numeric table is reproduced here (nothing fabricated).

- **Benchmark suite (quality):** three open-source next-edit benchmarks — **Instinct** (continuedev/instinct-data), **Fill-in-the-middle (FIM)** (openai/human-eval-infilling; validates edits by running test cases against the modified code), and **Next-edit Prediction (NEP)** (lurf21/NextEditPrediction) — plus **one internal** next-edit benchmark. Instinct/NEP/internal use LLM-as-a-judge on similarity to a human gold-standard edit; the final quality figure is the average of the four. Covers line completion, variable renaming, refactoring, feature implementation, etc.
- **Reported result (vendor):** "Mercury Edit 2 offers both **superior quality and speed** to alternatives," benchmarked against several custom next-edit models and speed-optimized frontier models. Speed = end-to-end latency on representative requests.
- **KTO alignment gains (vendor, quantitative):** edits are **accepted 48% more often** than the prior next-edit model, and it is **27% more selective** in the edits it displays (more targeted, less distracting).
- **Speed:** ~1,000 tokens/second parallel diffusion decoding; latency tuned by editable-region size (10–25 lines practical).
- **General coding / agentic / reasoning / tool-use benchmarks: NONE.** No SWE-bench Verified, DeepSWE, LiveCodeBench, SciCode, SWE-Atlas, Terminal-Bench, GPQA-Diamond, HLE, Tau3, GDPval, or OSWorld figures — the model is an autocomplete/edit endpoint and is not evaluated on (and does not perform) open-ended agentic coding, tool use, or deliberate reasoning. No Artificial Analysis Intelligence Index page exists for `mercury-edit-2`.

### Normalized scores (1–100)

> Derived from the specs and vendor evidence above via `model-comparison.md`. Overall = half-up mean of the five quality dims; Cost efficiency scored independently, never counted. This is a narrow specialist, so several general dimensions are scored low for genuinely absent capability (noted N/A), never fabricated upward.

- **Tool use: 32/100.** N/A by design — Mercury Edit 2 is a next-edit/FIM completion endpoint that consumes codebase context and edit history but performs **no tool calls and no multi-step agentic workflows**; it publishes no tool-use benchmarks (Terminal-Bench / Tau3 / GDPval / OSWorld / AutomationBench all absent). Scored low for absent capability with an N/A note, not a hallucinated figure.
- **Reasoning: 40/100.** No deliberate chain-of-thought reasoning and no GPQA/HLE/CritPt/Intelligence-Index data (N/A). It does apply implicit code- and edit-intent understanding over recent snippets + unidiff history (KTO-aligned to accept/reject), which is genuine but narrow; scored low-mid accordingly.
- **Context window: 28/100.** 32K total / 8,192 max output — the rubric's <100K band (10–49), scored low for 32K. It is explicitly engineered for small, fast windows (recommended editable region 10–25 lines / ~100–250 tokens), not long-context work.
- **Multimodal: 15/100.** Text (code) in → text out only; no image, audio, or video. Rubric text-only floor.
- **Coding: 78/100.** Its entire purpose and genuine strength — state-of-the-art next-edit prediction / FIM with "superior quality and speed to alternatives" (including speed-optimized frontier models) across Instinct, test-validated FIM, NEP, and an internal benchmark; KTO alignment lifts edit acceptance +48% and selectivity +27% at ~1,000 tok/s, and it is shipped in Zed/ProxyAI. Capped well below the frontier band because it is a narrow autocomplete/edit endpoint — no repo-level agentic coding and none of the rubric's general coding benchmarks (SWE-bench/DeepSWE/LiveCodeBench/SciCode/Terminal-Bench), and the absolute numeric table was not machine-readable (scored on qualitative vendor claims + relative gains, not invented numbers).
- **Cost efficiency: 94/100.** $0.25/$0.75 per MTok ($0.025 cached) plus 10M free tokens for new accounts and a free month of Zed suggestions — very cheap for a high-throughput (~1,000 tok/s) specialist that runs on every keystroke. Excluded from Overall.
- **Overall Score: 38.6/100.** Mean of the five quality dims (32+40+28+15+78)/5 = 38.6. **Large divergence note (~−30 vs the peer cohort 69):** the peer average is close to the *mathematical ceiling* for a text-only (Multimodal ≈15), 32K-context (Context ≈28) model — reaching 69 would require Tool use, Reasoning, and Coding all near 100, which the evidence does not support for a narrow next-edit autocomplete endpoint with no general agentic-coding, tool-use, or reasoning benchmarks. My independent, rubric-faithful read weights the spec-driven floors (text-only, 32K) and the model's genuinely narrow scope, crediting its elite next-edit/FIM specialty in Coding (78) and its low cost (94) while scoring the absent general capabilities honestly rather than inflating them toward the cohort. Best fit: ultra-low-latency inline code autocomplete / next-edit suggestion inside editors (Zed, ProxyAI); not a general chat, reasoning, agentic-coding, or long-context model.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-10
- Method: public internet research (official Inception Labs "Introducing Mercury Edit 2" launch blog — training/KTO, benchmark suite [Instinct, FIM, NEP + internal], +48% acceptance / +27% selectivity, "superior quality and speed," $0.25/$0.75 pricing; Inception next-edit API documentation — request format, ~1,000 tok/s, editable-region/latency guidance, Zed/ProxyAI integration; dataset meta.json — 32K/8,192 context, text in/out). The absolute per-benchmark numeric table is published as image charts and was not machine-readable, so Coding is scored on qualitative vendor claims and relative gains — no numbers invented. Verified this is a distinct specialized endpoint (not a duplicate of `mercury-2`/`mercury-2.5`/`mercury-decide`). Scores are normalized 1–100 interpretations, not official vendor scores; Tool use and Reasoning are N/A-by-design and scored low without fabrication. Researched independently of the peer findings in this folder.
- Reference URLs:
  - [Introducing Mercury Edit 2 (Inception Labs — official launch blog)](https://www.inceptionlabs.ai/blog/introducing-mercury-edit-2)
  - [Next Edit endpoint documentation (Inception Labs — request format, latency guidance)](https://docs.inceptionlabs.ai/capabilities/next-edit)
  - [Inception Labs models & pricing](https://docs.inceptionlabs.ai/get-started/models)
