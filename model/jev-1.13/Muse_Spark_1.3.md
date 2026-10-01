# Jev 1.13 — findings by Muse Spark 1.3

- Source: TypeSafe AI/Jev 1.13 (`jev-1.13.0`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Jev 1.13
- **Short description:** TypeSafe AI's first System One model (2026-09-15 early access). Not a chat/coding model: answers typed questions (choice / score / noul) about a text state with calibrated probabilities; built for routing, ranking, verification, and structured decisions.
- **Provider / access:** TypeSafe API `POST https://api.typesafe.ai/v1/systemone` (Decisions API, synchronous JSON, no streaming); OpenRouter `typesafe/jev-1.13` (Decisions endpoint `/api/alpha/decisions`); Vercel AI Gateway `typesafe-ai/jev`; Cloudflare Workers AI `typesafe/jev`. Decisions API only (not Chat Completions / Messages).
- **Release / knowledge:** Public launch 2026-09-15 early access (`jev-1.13.0`; aliases `jev-latest` / `jev-preview` resolve to it; OpenRouter dated build `jev-1.13-20260917`). Knowledge cutoff unknown — no verified cutoff found.
- **IDs:** `jev-1.13.0` (versioned vendor ID, pin for stable thresholds); `jev-latest` / `jev-preview` (moving aliases); `typesafe/jev-1.13` (OpenRouter); `opencode/jev-1.13` (Zen catalogue / meta.json)
- **Context window:** 64,000 tokens per request with 32,000-token cap on state plus longest question — verified via Infron API reference and Jev cheatsheet (sourced from TypeSafe docs 2026-09-28); OpenRouter lists 32K. Meta.json 128K is stale — vendor 64K used here.
- **Modalities:** Text / structured-text in only (string, JSON object, array of text; English strongest); no image/audio/video input; no text/code out — typed answers only (label choice, ordered score, yes/no probability + confidence). No reasoning trace, no tool calls, no JSON-mode prose.
- **Pricing (as of 2026-10-01):** $0.042 per 1M input tokens, output tokens free (TypeSafe + OpenRouter + Opper listings agree; $42 per billion in). No cache/batch schedule published. Rate limits ~1,200 RPM / 250K tokens/sec per cheatsheet (early-access, may change).
- **Architecture:** Proprietary closed System One decision model (no parameters, weights, license, or technical report published)

### Raw benchmarks found

Agent / tool use:

- JevBench v1.4.1 composite: **63.3/100** rank #1 of 77 (stackness.dev 2026-09-24: Intelligence 53.1 / Calibration 76.3 / Speed 83.3 / Cost 52.0; harmonic mean over 534 public + 308 sealed decisions; $0.040 per 1k, p50 0.65s)
- JevBench v1.5 official option A: **72.13** (benchlm.ai JevBench-1-5 page: 904 open + 720 sealed items; Choice/Noul/Score decision types; composite index, not percent accuracy)
- Intent routing 8-way / 77-way / prompt-injection: **83.8% / 78.8% / 87.0%** (ayautomate.com independent test 2026-09-19, n=160/231/400, OpenRouter metered; median latency 0.33s, $0.0151/$0.0400/$0.0136 per 1k; level with small LLMs, trailing GPT-5.6 Terra by ~5pts on routing)
- Banking77 intents: **81.0%** accuracy, 80.5% macro-F1 (jevmodel.ai compendium citing OpenRouter run: 3,080 utterances; Claude Opus 5 84.4%/83.6% alongside; median round trip 175ms vs 2,266ms; billed $0.34 vs $7.44)
- BEIR rerank nDCG@10 (BM25 top-30): **SciFact 0.768-0.772 / NFCorpus 0.358 / FiQA 0.376** (jevmodel.ai compendium citing hev RESULTS.md 2026-09-17; vs Voyage rerank-3 0.755/0.357/0.402; SciFact run cost $0.18-0.28)
- Terminal-Bench 2.1: **no verified public score found** (not a terminal/code-execution model)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Calibration (Bespoke 13-subset suite): **median ECE 0.071** as shipped, best of measured set (dev.to AWS-Builders review 2026-09-23, re-scored third-party; companion: fitted temperature on 50 labels fixes most error)
- Calibration (social-science 7,977-item suite): **median ECE 0.157** beating 16 of 19 LLMs unfitted; 15 of 19 beat it after one fitted temperature (arXiv 2609.24574 via dev.to review)
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (no AA entry; BenchLM hosts its JevBench tables, not a Jev intelligence score)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** ("zero hallucinations" is a vendor confidence-estimate claim, not a measured rate; OrcaRouter live traffic 0.49% error rate 7d ending 2026-09-30)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (writes no code or prose by design)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No verified MRCR / RULER / GraphWalks score found; 64K-per-request ceiling only, 32K state cap unmeasured for retention

### Normalized scores (1–100)

- **Tool use: 40/100.** Fast calibrated routing/rerank decisions (Banking77 81%, 8-way 83.8%, JevBench composite 63.3-72.13, 0.33s median); capped hard by no bash/edit, no computer use, no MCP/tool-call agency — a router, not an agent.
- **Reasoning: 45/100.** Best-in-class out-of-box calibration on familiar English tasks (ECE 0.071) with mid-LLM accuracy (level with Kimi K3/MiniMax M3/DeepSeek Flash, 6.5-11.5 behind frontier); capped by zero GPQA/HLE/LCR/CritPt/Index coverage and fitted-temperature fragility off-distribution.
- **Context window: 45/100.** 64K per-request ceiling (32K state cap) verified via vendor docs; below the 100K tier floor, unmeasured for retention — small-state decisions only.
- **Multimodal: 10/100.** Text/structured-text in only, typed labels out; no image/audio/video in, no text out — below the text-only band floor.
- **Coding: 15/100.** Writes no code or prose by design; zero SWE/LiveCode/SciCode/Vibe/DeepSWE; rerank nDCG is retrieval, not generation.
- **Cost efficiency: 99/100.** $0.042 per 1M in / $0 out is near-zero; ~25-50x cheaper per decision than Haiku 4.5 and ~40-49x cheaper than GPT-5.6 Terra in metered independent runs.
- **Overall Score: 31/100.** Mean of the five quality dims (40+45+45+10+15)/5 = 31.0; best fit as cheap calibrated pre-filter/router in front of a frontier model, never as planner or coder.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-10-01
- Method: public internet research (TypeSafe launch post 2026-09-15, stackness.dev JevBench analysis 2026-09-24, benchmarkheaven + benchlm.ai JevBench tables, jevmodel.ai benchmark compendium, ayautomate.com independent 791-decision test 2026-09-19, orcarouter.ai model explainer 2026-09-30, dev.to eight-day independent review 2026-09-23, openrouter.ai + infron.ai + opper.ai API/pricing pages, jev-cheatsheet 2026-09-28); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
