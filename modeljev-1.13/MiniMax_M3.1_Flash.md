# Jev 1.13 — findings by MiniMax M3.1 Flash

- Source: TypeSafe AI (Jev, "System One" typed-decision model), `jev-1.13`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Jev 1.13 (Jev 1.13.0)
- **Short description:** TypeSafe AI's first **System One** model — not a text generator but a calibrated *decision* engine: you submit a state plus typed questions and it returns typed values with probability distributions (yes/no, choice, score), in ~600 ms and with **output tokens charged at $0**. JevBench 1.5.4 puts it at **72.13** (#3) with a 0.380 Brier score on typed-decision accuracy.
- **Provider / access:** TypeSafe API (`POST https://api.typesafe.ai/v1/systemone`), OpenCode Zen `jev-1.13` (**$0.042/M input, output free**) and the free slot `jev-1.13-free` (endpoint `https://opencode.ai/inference/systemone/v1/systemone` — no AI SDK package, custom endpoint). Canonical ids: `jev-1.13.0` and `jev-1.14.0`, with `jev-latest` → 1.13.0 and `jev-preview` → 1.14.0 (available from 2026-10-14).
- **Release / knowledge:** the OpenAPI example records `release_date: 2026-09-15` for `jev-latest` (1.13.0); TypeSafe's Python SDK v0.5.7 shipped its initial public release 2026-09-14. Knowledge cutoff not published.
- **IDs:** `jev-1.13` (Zen), `jev-1.13.0` (TypeSafe), `jev-1.13-free` (Zen free slot).
- **Context window:** **64K per request** (32K state + the longest question); a `TypeSafe-Danger-Zone-Long-Context: true` header raises both to 262K (slower, less accurate).
- **Modalities:** text / JSON / array state input; **typed decision output** (noul 0–1, choice + probabilities + confidence, score + probabilities + confidence, box edges as fractions) — no text generation, no image/audio/video.
- **Pricing (as of 2026-10-20):** **$0.042 per 1M input tokens; output is free** (Zen table: Input $0.042, Output Free). JevBench measures ~**950 input tokens per decision** → ≈$0.028–0.04 per decision.
- **Architecture:** proprietary, closed weights; trained with RLCD (calibrated decision training) on the same weights for every account (no customer fine-tuning).

### Raw benchmarks found

> Jev is not a text LLM, so the usual LLM suites do not apply. The evidence base is
> the JevBench decision suites and BenchLM's decision-model board.

Reasoning / knowledge (decision accuracy):

- JevBench v1.5.4: **72.13** (Jev 1.13.0, #3 on the board) · JevBench v1.4.2.2: **63.29** (#4)
- BenchLM decision board, open core: **81.21** · sealed: **80.99** · sealed skill: **73.23** (95% CI 72.02–73.99), estimated cost **0.02806** per decision, operator-API latency **p50 0.616 s / p95 0.67 s**
- Celeris head-to-head on 3,210 jev-bench items: accuracy **73.1%** for Jev 1.13.0 (Mercury Decide 75.3%, Decider v1.1 27B 79.0%, Celeris-1 Decision 80.0%, GPT-6 Luna 69.0%); Brier score **0.380** (lower is better — Celeris 0.272, Decider 0.288, Mercury Decide 0.372, GPT-6 Luna 0.455)
- Typed-decision accuracy (400 states x 5 question types): **73.6%** for Jev 1.13.0 (Celeris 76.5%, Decider 73.8%, Mercury Decide 71.5%, GPT-6 Luna 71.8%)
- MMLU / HumanEval / SWE-bench / GPQA / HLE: **not applicable** — Jev does not generate text

Agent / tool use:

- No tool-calling benchmark exists; the model's role in agent stacks is routing, confidence gating, guardrails, RAG passage filtering, re-ranking and function-call mapping (documented usage patterns)
- Terminal-Bench / Tau2 / Tau3 / GDPval-AA / OSWorld / AutomationBench / MCP-Atlas: not applicable / no verified public score found

Coding:

- No code-generation benchmark exists for Jev; the closest published measure is typed-decision accuracy on code-adjacent tasks (73.6%)

Long context:

- 64K request budget (32K state + 32K question), 262K opt-in with the danger-zone header; no MRCR / RULER measurement (not a text model)

### Normalized scores (1–100)

- **Tool use: 60/100.** As a router/decision component Jev is the point of the model — 73.1% jev-bench accuracy and a 0.380 Brier score are solid for single-shot typed judgement, but it cannot drive a tool loop itself, so it cannot be scored like an agentic model.
- **Reasoning: 58/100.** Calibrated single-step judgement (noul/choice/score) with probabilities optimised against outcomes; the ceiling is structural — it is a System 1 model by design, and multi-hop indirection is explicitly out of scope.
- **Context window: 55/100.** A 64K request budget (32K state + 32K question), with 262K only behind the "danger zone" header that is slower and less accurate.
- **Multimodal: 15/100.** Text/JSON/array state in, typed values out — no image, audio or video.
- **Coding: 30/100.** Jev generates no code, so coding capability is limited to typed-decision accuracy (73.6%); scored low on the coding axis by construction.
- **Cost efficiency: 95/100.** $0.042/M input with **output free** and ~950 tokens per decision → about $0.028–0.04 per decision, which is far cheaper than asking a frontier LLM the same question.
- **Overall Score: 44/100.** Mean of the five quality dims = (60 + 58 + 55 + 15 + 30) / 5 = 43.6 → **44**. Best fit: cheap, calibrated routing and triage in front of a bigger model — a component, not a general-purpose model, and the dimensions only partly apply.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (TypeSafe AI docs — System One, models, API, primitives, jaggedness and patterns pages, the JevBench result sets on GitHub and benchmarkheaven, BenchLM's decision-model board, OpenCode Zen docs and models endpoint); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Mercury_Decide.md`, using the same headings.
