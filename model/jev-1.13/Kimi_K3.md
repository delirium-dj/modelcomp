# Jev 1.13 — findings by Kimi K3

- Source: TypeSafe AI (`jev-1.13.0`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Jev 1.13 (TypeSafe "System One" decision model)
- **Short description:** TypeSafe AI's first System One model — a structured decision/evaluation model, not a text generator. Requests carry a state plus typed questions (Choice / Score / Noul primitives); responses are typed answers with calibrated probabilities and confidence. Built for routing, classification, triage and scoring inside software pipelines.
- **Provider / access:** TypeSafe AI API, `POST /v1/systemone` with `jev-1.13.0` (aliases `jev-latest`, `jev-preview` currently resolve to `jev-1.13.0`); also listed on OpenRouter, OpenCode and other gateways. Not Chat Completions semantics — a dedicated decision endpoint. No Free ID on Zen (paid input) — though output tokens are billed $0.
- **Release / knowledge:** Announced 2026-09-15, "available today in early access" (TypeSafe blog); proprietary, API only, no weights.
- **IDs:** `jev-1.13.0`, `jev-latest`, `jev-preview` (TypeSafe docs); `typesafe/jev-1.13` (OpenRouter).
- **Context window:** 64K tokens total budget covering state + all questions; 32K limit applies to state + the longest single question (docs.typesafe.ai).
- **Modalities:** Text input only (string / JSON / array of text; no image, audio, video). No generated-text output — typed values with probabilities. English best-served. Rate limits: 250,000 tokens/s, 1,200 requests/min.
- **Pricing (as of 2026-10-01):** $0.042 per 1M input tokens (quoted as $42 per billion); output tokens free — "too cheap to meter" (TypeSafe pricing docs).
- **Architecture:** Proprietary, undisclosed. Vendor claims 70–500 ms end-to-end (40x–200x faster than frontier LLMs on System One tasks); independent jev-bench run measured 192 ms median from a 2-core sandbox.

### Raw benchmarks found

> Note: standard generative benchmarks (SWE-bench, Terminal-Bench, LiveCodeBench) do not apply to a non-generative decision model — none exist and none are claimed.

Agent / tool use:

- No agentic/tool benchmarks apply or exist — model has no tool-calling surface; **no verified public score found** (by design).
- Closest evidence (routing utility): large-K intent/classification configs — clinc150 **89%**, massive **81%**, banking77 **80%**, ledgar **75%** (100+ legal categories), ECE ~0.1 (jev-bench baseline, 2026-09-20).

Reasoning / knowledge (jev-bench independent baseline, run 2026-09-20, 22,773 records, 0 errors, `jev-latest` → 1.13.0):

- ARC (MCQ): **97.9%**; MMLU (MCQ): **92.3%**; NLI: **88.3%** — ECE ≤ 0.06 on all three (well-calibrated crisp tasks)
- FEVER-with-evidence: **97.2%**; BoolQ: **91.7%**; StrategyQA grounded: **95.6%** vs **78.5%** closed-book (measurable System-Two gap, as vendor's jaggedness page predicts)
- Calibration weaknesses: ChaosNLI TVD **0.33** / ECE 0.22 (overconfidence on ambiguous items, confirmed by manual audit); Measuring Hate Speech TVD **0.43**
- GoEmotions (28 classes): **32%** exact, ECE 0.35 ("confidently wrong"; ceiling from rater agreement is 0.66)
- Civil Comments: **72.9%** accuracy on a ~92%-negative set, AUROC 0.83 (threshold stricter than Jigsaw raters)
- HelpSteer2 exact-level judging: helpfulness **36%** / verbosity **34%** exact (within-one-level 0.81 / 0.84)
- GPQA / HLE / AA Intelligence Index: **no verified public score found** (not applicable / not run)

Coding:

- **No coding benchmarks exist** for this model and it makes no coding claim — no verified public score found.

Long context:

- 64K total / 32K per-question budget; no long-context retrieval evaluations exist.

### Normalized scores (1–100)

- **Tool use: 28/100.** No tool calling exists at all; what it offers an agent stack is a calibrated-typed-answer primitive usable as a router/gate (large-K routing 75–89% with ECE ~0.1 evidences that niche). Capped hard: it executes no tools itself.
- **Reasoning: 58/100.** Crisp knowledge tasks are excellent (MMLU 92.3, ARC 97.9, grounded yes/no 91.7–97.2), but closed-book StrategyQA drops to 78.5, the vendor documents "mathematical reasoning" as a failure mode, and human-disagreement calibration is poor. Fast/shallow by design.
- **Context window: 35/100.** 64K total with a 32K per-question cap is a small window by 2026 standards; sufficient for its decision-point role, nothing more.
- **Multimodal: 15/100.** Text-only input, no modalities beyond it — rubric floor.
- **Coding: 25/100.** No coding benchmarks, no coding claim, no text generation — unusable for code synthesis; only code-adjacent utility is decision gating inside pipelines.
- **Cost efficiency: 98/100.** $0.042/M input with free output at 192 ms median latency is about as cheap and fast as an evaluative call gets; only the non-zero input price keeps it from 100.
- **Overall Score: 32/100.** Half-up mean of (28+58+35+15+25)/5 = 32.2 → 32. Best fit: high-volume routing/classification/scoring decisions inside agent pipelines — not a general LLM and never a primary reasoner or coder.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-01
- Method: public internet research (typesafe.ai / docs.typesafe.ai via ai-tldr.dev, OpenRouter, Praveenrajus/jev-bench independent baseline on Hugging Face — 22,773-record run with reliability figures, defapi.org, cloudprice.net); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
