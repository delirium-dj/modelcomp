# Jev 1.13 — findings by Mimo v2.6 Flash

- Source: TypeSafe AI (`typesafe/jev-1.13`, pinned build `jev-1.13.0`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Jev 1.13 (TypeSafe "System One" model — first public release, named after economist W. Stanley Jevons)
- **Short description:** A non-generative structured-decision model: unstructured `state` + typed questions in, calibrated `choice`/`score`/`noul` probabilities out, all fields sampled in one parallel pass. Cannot emit text, code, or rationales at all — a "frontier-intelligence function call" built for classify/route/score/extract/branch automation, not chat. Standalone model, not a variant of another tracked entry.
- **Provider / access:** TypeSafe AI (San Francisco; founded by ex-OpenAI researcher Diogo Almeida after 2 years in stealth). First-party API `POST https://api.typesafe.ai/v1/systemone` (`/v1/models` lists routes) plus Python/JS SDKs and browser console. Gateways: OpenRouter `typesafe/jev-1.13` (dedicated `POST /api/alpha/decisions` — chat/completions rejects it), Vercel AI Gateway, and OpenCode Zen (`jev-1.13` paid, `jev-1.13-free` limited-time free at `opencode.ai/zen/v1/systemone`). Not open weights.
- **Release / knowledge:** early access 2026-09-15 behind waitlist (DataCamp, TypeSafe launch post); GA ~2026-09-21 (waitlist lifted; Chosun launch coverage 2026-09-21). `jev-1.13.0` is the only published version; aliases `jev-latest` and `jev-preview` both resolve to it. Training data / knowledge cutoff not disclosed.
- **IDs:** `jev-1.13.0` (TypeSafe), `typesafe/jev-1.13` (OpenRouter, dated builds e.g. `typesafe/jev-1.13-20260917`), `jev-1.13` / `jev-1.13-free` (OpenCode Zen), OpenCode usage data `jev-1.13`.
- **Context window:** 64K tokens per request (state + all questions combined); 32K for state + single longest question; OpenRouter and aile.sh publish 32K. Max output is not applicable — responses are typed answer objects, not generated text.
- **Modalities:** text in only (string, JSON object, or array of text values; images/audio/video must be pre-processed into text by the caller); decision-typed out (no text, no images).
- **Pricing (as of 2026-10-01):** $0.042 per 1M input tokens ($42/Btok), **output tokens free** ("too cheap to meter"); ≈$0.0004 per decision case in vendor evals. Rate limits currently dynamic (docs show 100K–250K tokens/s and 40 rps / 1,200 rpm tiers, adjustable without notice). Zen `jev-1.13-free` = $0/$0 for a limited time.
- **Architecture:** proprietary; parallel sampler emits every field in a single forward pass (vs autoregressive token-by-token), trained with TypeSafe's Reinforcement Learning for Calibrated Decisions (RLCD); parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Structured-output error rate: **0%**, tool-call error rate: **0%** (TypeSafe structured-output test; same harness: OpenAI luna/terra 0.58%, Claude Opus 5 5.73%, Claude Haiku 4.5 45.5%; worst tool-call error GPT-5.6 Sol 17.0%) — vendor-run
- Terminal-Bench 2.1 / Tau3 / GDPval-AA / OSWorld / Claw-Eval: **N/A — model cannot invoke tools or generate text**; it sits beside agents as judge/router instead
- Vendor home-page claim: 193.6x faster and 444.6x cheaper than LLM reference on their workflows (self-reported, admitted "higher end of real-world gains")

Reasoning / knowledge:

- TypeSafe 4-workflow decision eval (security incident response, agent-trace observability, invoice processing, customer service; reference = average of GPT-6 Astra + Fable 5.1): **Jev 67.8% mean agreement** (61.7–76.0% per workflow), $0.0004/case, 0.4s — vs GPT-5.6 Terra 67.9% ($0.0304, 10.1s), GPT-5.6 Sol 74.1% ($0.0836, 23.3s), Claude Opus 5 73.1% ($0.1761, 37.8s) — vendor-run, no independent large-scale reproduction yet
- GPQA / HLE / MRCR / LCR / Intelligence Index: no score exists (no public text-generation path to run them)
- Official documented failure modes (`docs.typesafe.ai/model-jaggedness/jev-1.13`, reviewed 2026-09-16/17): literal reading of instructions, **not a calculator** (no counting, no date ordering, no numeric precision), weak on multi-hop indirection, context rot on large irrelevant state, steerable by adversarial content, English-primary (CJK weaker)

Coding:

- SWE-bench / DeepSWE / LiveCodeBench / SciCode / Terminal-Bench: no score — model cannot write code or strings
- Independent reproduction (`github.com/rorshopping/jev-on-a-laptop`): reimplemented Jev-style parallel constrained decoding on stock 1.5B–8B models — schema validity 100% by construction, but values still wrong sometimes and local "confidence" was raw softmax (not trained calibration); confirms the decoupling of *type safety* from *accuracy*

Multimodal: none — text-only in, typed decisions out.

### Normalized scores (1–100)

- **Tool use: 30/100.** Cannot call tools or run agentic benchmarks (all standard harnesses N/A); credit for the pipeline role it does fill — 0% tool-call/structured-output errors by construction (vs Sol 17%, Haiku 4.5 45.5% output errors) and low-latency routing/judging inside agents (jeval, hermes-jev integrations).
- **Reasoning: 45/100.** 67.8% agreement with a frontier-consensus reference, essentially tying GPT-5.6 Terra — respectable common-sense judgment; dragged down by zero evidence on any standard reasoning suite (GPQA/HLE/MRCR inapplicable) and vendor-documented inability to handle math, counting, dates, negation nuance, and multi-hop indirection.
- **Context window: 40/100.** 64K per request (32K effective for state + longest question) falls in the <100K tier (10–49); documented context rot further discounts usable depth.
- **Multimodal: 10/100.** Below even the text-only band: no image/audio/video input *and* no text output — only decision objects.
- **Coding: 10/100.** Structurally incapable of generating code or any string; no coding benchmark could ever apply.
- **Cost efficiency: 100/100.** $0.042/M in and free output beats the $0.10/$0.20 = 97–99 anchor by ~3x even paid; plus a verified $0/$0 Zen tier (`jev-1.13-free`) — flag: limited-time, and free-tier usage consents to training per repo convention.
- **Overall Score: 27/100.** (30 + 45 + 40 + 10 + 10) / 5 = 27.0 (v4: mean of the five quality dimensions, cost excluded). Best fit: pair-it niche judge — route structured decisions/guardrails to Jev for speed and calibrated confidence, and hand anything requiring prose, code, math, or multi-hop reasoning to a generative model.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-01
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Accuracy numbers are TypeSafe-vendor-run pending independent reproduction.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
