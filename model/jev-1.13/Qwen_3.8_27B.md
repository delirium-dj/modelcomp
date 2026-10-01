# Jev 1.13 — findings by Qwen 3.8 27B

- Source: TypeSafe AI (`typesafe/jev-1.13`), alias `jev-latest`
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Jev 1.13
- **Short description:** TypeSafe AI's first "System One" decision model (Sept 2026): takes a piece of state (email, log line, ticket, JSON) plus typed questions and returns typed answers — a Choice from a supplied list, a Score on a rubric, or a Noul yes/no probability — each with calibrated confidences, in 70–500ms. No prose, no code, no chat. Targets high-volume classification/routing, guardrail and per-turn verification passes, and latency-critical decisions.
- **Provider / access:** TypeSafe first-party API (`POST /v1/systemone`, non-streaming; not the chat-completions shape) plus browser playground. Listed on OrcaRouter as `typesafe/jev-1.13` (catalogued 2026-09-24, 0% markup) and in OpenCode usage data as `jev-1.13`. GA since 2026-09-21 (waitlist removed; new accounts get $5 credit ≈ 120M input tokens at list price). No OpenCode Zen Free ID found in this pass.
- **Release / knowledge:** Launched 2026-09-15 (TypeSafe exited stealth with a $40M raise led by DCVC at a reported ~$200M valuation); GA 2026-09-21; knowledge cutoff not disclosed.
- **IDs:** `typesafe/jev-1.13` (OrcaRouter catalogue; OpenCode data peer list); alias `jev-latest`. No Zen Free ID.
- **Context window:** ~64,000-token request budget, of which ~32,000 covers the state plus the single longest question; 65,536-token context on the OrcaRouter endpoint. TypeSafe docs note accuracy shifts as state grows (verified via OrcaRouter report + docs capture).
- **Modalities:** Text in only (state: email, logs, tickets, JSON blobs); typed structured out (Choice ≤255 options / Score rubric / Noul yes-no, each with per-candidate probabilities + confidence); no image or audio input at launch; no free-text output at all; reasoning = calibrated-decision training (RLCD), not free-form reasoning.
- **Pricing (as of 2026-10-01):** $0.042 input / $0.00 output per 1M tokens (TypeSafe list price, carried at provider rate by OrcaRouter). Output is free by construction — there is no autoregressive decoding to meter.
- **Architecture:** Not disclosed — no paper, no parameter count, no training-compute disclosure, no weights ("close to the chest for now", per TypeSafe). Trained with RLCD (Reinforcement Learning for Calibrated Decisions): optimises calibration (a model that says 70% should be right ~70% of the time) rather than preference or verifiable correctness.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found (cannot run agentic tool loops — documented limitation)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Tool-call format errors: **0%** by construction (every possible answer is pre-enumerated and typed before the model runs, so a malformed tool call cannot be produced — vendor-claimed structural property, not measured agent performance)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found (typed-decision interface only; not a chat model)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Vendor internal dashboard (TypeSafe; 711 cases across 4 tasks; reference answers = average judgment of GPT-6 Astra + Claude Fable 5.1, not ground truth; dashboard notes possible harness bias): overall **67.8%** vs **74.1%** best comparator — security incidents 61.7% vs 66.2%, agent-trace observability 71.6% vs 76.6%, invoice processing 61.8% vs 79.1%, customer service 76.0% vs 78.3% (via OrcaRouter, 2026-09-16)
- Pre-registered independent eval (published 2026-09-20; 21 experiments, 50 predictions fixed before 5,721 calls): **95.9%** zero-shot on a 400-item reference set vs 77.2% for hand-written keyword rules and 66.0% for a supervised TF-IDF baseline; when the criteria descriptions in the questions were wrong, accuracy collapsed to **16.7%** (below the 25% random floor for that task) (via OrcaRouter)
- Out-of-distribution calibration study (published 2026-09-19; 900 rule-generated support tickets whose labels depend on a hidden internal policy + 3,721 public-benchmark items): expected calibration error **0.107** on the synthetic arm vs a 0.024 noise floor for a perfectly calibrated model (~4.4× the floor); public-benchmark ECE 0.024–0.032; Score primitive weakest at **44.7%** accuracy with mean stated probability 0.74 (via OrcaRouter)
- Every (first independent test, 2026-09-15/16): 777 judgments across 37 documents in <0.7s for ~$0.0025; 12-passage defect test (6 clean / 6 with planted defects) caught **6 of 7** planted defects (Claude Fable 5.1 caught 7/7) at median 0.35s/passage vs 8.83s (~25× faster, ~1/580th the cost); separate pre-registered run found **0 of 30** out-of-scope messages flagged as out-of-scope, each returned at 0.99 confidence (via OrcaRouter)
- OrcaRouter 7-day serving stats (traffic since 2026-09-24): p50 **151ms**, p95 247ms, **0.49%** error rate across 76.2M tokens

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found (cannot generate code — documented limitation)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No long-context retrieval (MRCR/RULER) numbers reported; ~64K request budget with documented accuracy degradation as state grows (TypeSafe docs, via OrcaRouter)

### Normalized scores (1–100)

- **Tool use: 10/100.** No agentic tool-execution capability at all (no TB2.1/Tau3/GDPval surface; documented "cannot hold a conversation, cannot write code"); the 0% tool-call *format* error rate is a structural output property, not demonstrated agent performance — caps the score at the floor.
- **Reasoning: 35/100.** Verified judgment quality is solid in-domain (95.9% zero-shot on the pre-registered 400-item set; 67.8% on the vendor 4-task dashboard vs 74.1% best comparator ≈ good mid-tier) but collapses when criteria are misdescribed (16.7% < 25% random floor), has no out-of-scope escape (0/30 flagged at 0.99 confidence), and OOD ECE is ~4.4× the noise floor — typed-decision interface only, no open-ended reasoning.
- **Context window: 30/100.** ~64K request budget (32K state + longest question; 65,536-token endpoint context) — below the 100K tier (10–49 band); no retrieval measurement at the limit.
- **Multimodal: 15/100.** Text-only input (no image/audio/PDF in); typed structured output only (no non-text out either).
- **Coding: 10/100.** Cannot generate code of any kind (documented limitation); zero coding-benchmark surface — floor.
- **Cost efficiency: 100/100.** $0.042/M input, $0.00 output — cheaper than the ~$0.10/$0.20 = 97–99 anchor; output free by construction (no decoding to meter).
- **Overall Score: 20/100.** (10 + 35 + 30 + 15 + 10) / 5 = 20.0 → 20. Best-fit recommendation: not a general-purpose model — use as a per-turn typed-decision/verification component inside agent loops, not as a chat or coding model.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-10-01
- Method: public internet research (orcarouter.ai/blog/jev-typesafe-system-one-what-we-know, quantaailabs.com/blog/jev-zero-hallucination, temperaturezero.com/2026-09-16/jev-doesnt-hallucinate-it-decides-wrong, aipulse.it launch coverage, magicshot.ai launch coverage, opencode.ai data peer list; retrieved 2026-10-01); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
