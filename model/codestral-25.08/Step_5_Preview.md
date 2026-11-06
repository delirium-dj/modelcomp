# Codestral 25.08 — findings by Step 5 Preview

- Source: Mistral AI (`codestral-25.08`, model ID `codestral-2508`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral 25.08 (`codestral-2508`)
- **Short description:** The dated 2025 release of Mistral's Codestral code model line — a low-latency, FIM-first completion model announced July 30, 2025 as part of Mistral's enterprise coding stack (Codestral 25.08 + Codestral Embed + Devstral + the Mistral Code IDE plugin). It supersedes Codestral 25.01 (retired 2025-11-30) and the original 22B Codestral (retired 2025-06-16). Variant/alias note: the dataset also tracks the undated product entry `codestral` — same live weights, one product; this file scores the dated SKU. Codestral Embed is a separate embedding model and is not covered here.
- **Provider / access:** Mistral API (`codestral-2508`; Chat Completions `/v1/chat/completions` and FIM `/v1/fim/completions`), inline completion via the Mistral Code plugin (JetBrains/VS Code) and Le Chat/Vibe, OpenRouter (`mistralai/codestral-2508`; EU in-region routing $0.33/$0.99). "Premier" commercial tier: no open-weights release on Hugging Face (repo fetch 401), with cloud/VPC/on-prem enterprise self-deployment offered. Verified 2026-11-06: **Codestral is absent from the OpenCode Zen console catalog** — the scaffolded `meta.json` id `opencode/codestral-25.08` does not resolve in the live Zen model list or pricing table; there is no Free ID.
- **Release / knowledge:** announced **2025-07-30** (docs: "released end of July 2025"; OpenRouter listing Aug 1, 2025). Knowledge cutoff not published.
- **IDs:** `codestral-2508` (Mistral API), `mistralai/codestral-2508` (OpenRouter). No Free ID exists on Zen.
- **Context window:** **128K tokens** (docs model page, verified 2026-11-06).
- **Modalities:** Text in → text out; function calling, structured outputs, predicted outputs, prefix/predicted-output caching, batching, Document QnA, FIM completions.
- **Pricing (as of 2026-11-06):** **$0.30/M input, $0.90/M output** (Mistral API and OpenRouter standard route; EU in-region $0.33/$0.99). No free tier.
- **Architecture:** proprietary; parameter count, MoE topology and training data not published.

### Raw benchmarks found

Independent evals (BenchmarkList, sampled Oct 29, 2026):

- ALE-Bench (coding, AtCoder heuristic contests): **137.78** performance (Self-Refine x1), rank **83/83** (0th percentile); Self-Refine x16: **340.65**, rank 81 — field leader `gpt-5.3-codex-xhigh` 1655.22
- TeXFix-Bench (document/markup repair): **77.5**, rank **2/78** (83rd percentile) — field leader `grok-4.3` 84.2
- ObviousBench (intelligence, answer pass³): **41.0%** (format pass³ 100%), rank 258/275 (6th percentile) — field leader Claude Opus 5.5 100%
- Design Arena (design/web-app Elo): **1065**, win rate 45.4% (202W/243L, 445 battles), 16th percentile
- LisanBench (reasoning, word-chain): path length 44, difficulty-weighted **13.15**, validity 3.6% (9th percentile)

ORCFLO Index (2026-05-10 cohort, 32 models; text-only real-world business tasks — code, multimodal and agentic workloads explicitly not tested):

- Overall quality **71.09** — **#32 of 32** (dead last, -14.8 vs median)
- Analysis 52.5 (#32), Extraction 78.0 (#29), Summarization 85.5 (#24, only contender-tier category), Writing 68.2 (#32), Hallucination 72.0 (#32), Instruction Following 81.5 (#30), Refusal Calibration 56.9 (#31), Output Consistency 74.1 (#31)
- Speed **2.4 s** average response — **#1 of 32** (fastest in cohort); cost $0.0006/case (#8)

Speed (llm-benchmarks.com, via OpenRouter, 2 runs, updated 2026-11-03): **40.30 tok/s** average (29.9–50.7), TTFT 850 ms.

Vendor-reported, relative improvements only (Mistral launch blog 2025-07-30; "validated in live IDE usage across production codebases"): **+30% accepted completions, +10% retained code after suggestion, 50% fewer runaway generations**, plus improved academic FIM benchmarks; chat mode +5% on IF eval v8 and +5% average MultiplE. No absolute values published for those harnesses.

Not found (no verified public score): Terminal-Bench (any version), Tau2/Tau3-Bench, GDPval-AA, Claw-Eval, Toolathon/MCP-Atlas, GPQA Diamond, HLE, LCR/MLCR, CritPt, Artificial Analysis Intelligence Index (AA has no Codestral page — 404 on every spelling tried), SWE-bench Verified/Pro, LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE, MRCR/RULER, Omniscience.

Lineage figures (cited with the ID actually measured, never merged into 25.08 scores): the original 22B Codestral (2024-05-29, 32K, MNPL) was cited by JetBrains at **Kotlin-HumanEval 73.75** @T=0.2 vs GPT-4-Turbo 72.05, and claimed the lead on RepoBench long-range completion (figure only, no number).

### Normalized scores (1–100)

- **Tool use: 35/100.** Function calling, structured outputs and a dedicated FIM endpoint are documented, but zero verified agentic/tool benchmarks exist (Terminal-Bench, Tau2/3, GDPval, Claw-Eval, MCP-Atlas: all no verified public score found) — the methodology's missing-data penalty applies; ORCFLO Instruction Following 81.5 sits in trailing tier (#30/32).
- **Reasoning: 40/100.** Below the mid band: ORCFLO Analysis 52.5 is dead last in a 32-model cohort, ObviousBench pass³ 41.0% is 6th percentile, LisanBench validity 3.6%; GPQA/HLE/Index all unverified. A completion-specialist, not a reasoner.
- **Context window: 56/100.** 128K total is inside the 100K–200K band (50–64), interpolated to 56 — a quarter of the 1M frontier norm, and below the retired 25.01 generation's 256K.
- **Multimodal: 15/100.** Text-only in and out; no image/audio/video input (Design Arena 1065 Elo is design/coding output, not multimodal input capability).
- **Coding: 50/100.** Genuinely split evidence: TeXFix-Bench 77.5 (#2/78) is excellent at structured document repair, but ALE-Bench 137.78 ranks 83/83 (last) and Design Arena win rate is 45.4%; no SWE-bench/LiveCode/SciCode/DeepSWE/Terminal-Bench number exists for this ID, and the vendor's +30% FIM acceptance gains are production telemetry, not a public benchmark.
- **Cost efficiency: 92/100.** $0.30/$0.90 per 1M sits between the ~$0.10/$0.20 (97–99) and ~$0.60/$2.20 (~92) anchors of the methodology — near-bottom-of-market API pricing for a commercial model, with no free tier.
- **Overall Score: 39/100.** Mean of the five non-cost dims (35+40+56+15+50)/5 = 39.2. Best-fit recommendation: a cheap, extremely fast (2.4 s, #1/32) inline-completion and summarization utility for high-volume, human-reviewed IDE flows — not a reasoning, agentic or benchmark-grade coding model; escalate anything analytical or autonomous.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: public internet research (Mistral docs model page + models overview + launch blog + original 2024 Codestral blog, Hugging Face model card, OpenRouter model page and the full OpenCode Zen console catalog, BenchmarkList, ORCFLO Index, llm-benchmarks.com; Artificial Analysis checked and untracked); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral Docs — Codestral (`codestral-2508`) model page](https://docs.mistral.ai/models/codestral-25-08)
  - [Mistral Blog — Announcing Codestral 25.08 and the Complete Mistral Coding Stack for Enterprise (2025-07-30)](https://mistral.ai/news/codestral-25-08/)
  - [Mistral Docs — Models Overview (live lineup + full deprecation table)](https://docs.mistral.ai/getting-started/models/models_overview/)
  - [Mistral Blog — Codestral, the original 22B model (2024-05-29)](https://mistral.ai/news/codestral/)
  - [Hugging Face — Codestral-22B-v0.1 model card (MNL license)](https://huggingface.co/mistralai/Codestral-22B-v0.1)
  - [OpenRouter — mistralai/codestral-2508](https://openrouter.ai/mistralai/codestral-2508)
  - [BenchmarkList — Mistral: Codestral 2508](https://benchmarklist.com/models/mistralai-codestral-2508)
  - [ORCFLO Index — Codestral (2508), 2026-05-10 cohort](https://orcflo.com/orcflo-index/benchmarks/codestral-2026-05-10)
  - [llm-benchmarks.com — Codestral 2508 throughput](https://llm-benchmarks.com/models/mistral/mistralaicodestral2508)
  - [OpenCode Console models + pricing (Codestral absent — no Zen route)](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `North_Mini_Code.md`, using the same headings.
