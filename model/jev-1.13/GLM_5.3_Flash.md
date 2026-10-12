# Jev 1.13 — findings by GLM 5.3 Flash

- Source: TypeSafe AI (`jev-1.13.0`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Jev 1.13
- **Short description:** TypeSafe's flagship "System One" model — the first of its kind. It does not generate text: it evaluates typed questions (Choice / Score / Noul) against a `state` and returns calibrated structured decisions with probabilities and confidence, for code to branch on. Flagged as a distinct model class ("decision" category in meta.json), not a chat/agent LLM — excluded from the A/B/C compare slots and Overall ranking on the site.
- **Provider / access:** OpenCode Zen `opencode/jev-1.13` via `https://opencode.ai/zen/v1/systemone`; direct TypeSafe endpoint `POST https://api.typesafe.ai/v1/systemone`. A free `jev-1.13-free` twin exists on Zen (limited time).
- **Release / knowledge:** Versioned ID `jev-1.13.0` (release date exposed via `GET /v1/models`; exact date not stated in docs). Knowledge cutoff: not applicable — a decision model, not a knowledge model.
- **IDs:** `opencode/jev-1.13` (Zen); `jev-1.13.0` (versioned); aliases `jev-latest` and `jev-preview` both point to `jev-1.13.0`
- **Context window:** 64K tokens per request (state + all questions combined); 32K tokens for the state plus the single longest question — verified via official TypeSafe Models page. NOTE: the folder `meta.json` says "128K total", which does not match the vendor's 64K — flagged for meta correction.
- **Modalities:** Text in only (string, JSON object, or array of text values; pre-process images/audio/video to text) — text out only in the sense of typed structured results, no prose generation; reasoning: calibrated atomic judgments, no multi-hop reasoning; parallel question evaluation
- **Pricing (as of 2026-10-11):** Paid — $0.042 / 1M input tokens, output free ($42 / Btok input). Zen `jev-1.13`: $0.042 in / Free out. Free `jev-1.13-free` tier on Zen (limited time). Rate limits 100K tokens/sec, 40 req/sec.
- **Architecture:** Proprietary, trained with RLCD (calibrated decisions, not generated text); same weights for every account; parameter count not disclosed.

### Raw benchmarks found

> Second-pass verification (2026-10-11): BenchLM has no page for this decision-class model (404 on the canonical slug) — no new aggregator evidence has surfaced since the 2026-10-01/09 passes; standard generative-LLM benchmarks do not apply to a System One decision model. Scores are carried, not moved.

Agent / tool use:

- Terminal-Bench / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found (model does not act as an agent)
- Vendor-documented cookbook results (pipeline-level, not model capability scores): CLERC legal re-ranking lifts top-1 from 5% to 18% and top-10 from 38% to 62% over BM25 shortlists; 13-question regulatory briefing batched in one call is 12.2x cheaper and 10.0x faster (docs.typesafe.ai cookbooks)

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / MLCR / CritPt / AA Intelligence Index: no verified public score found (BenchLM 404 confirmed 2026-10-11; standard benchmarks do not apply to a decision model)
- Vendor-documented limits (jaggedness page): struggles with indirection, counting, math/numeric calibration, date ordering, adversarial content; best at atomic common-sense judgments; Noul/Choice outputs can violate structural invariance

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode: no verified public score found (model is not trained to generate text)

Long context:

- No long-context retrieval reported (bounded 64K/32K windows; vendor documents context rot — accuracy falls as unrelated state detail grows)

### Normalized scores (1–100)

> Scores unchanged on the 2026-10-11 second pass: no aggregator page exists (BenchLM 404), standard benchmarks do not apply to the decision-model paradigm, and no new vendor evidence surfaced.

- **Tool use: 18/100.** No verified public scores on any agent benchmark and the model by design cannot act as an agent or invoke tools — it is a decision primitive consumed by code. Cookbook pipeline results (CLERC re-ranking, intent routing) show usefulness inside agent stacks but are not tool-use capability.
- **Reasoning: 30/100.** No verified public GPQA/HLE/LCR/Index scores. Vendor documents calibrated common-sense judgment as the strength but explicit struggles with indirection, counting, numeric precision, and date ordering; multi-hop reasoning is out of scope by design.
- **Context window: 46/100.** 64K tokens per request (32K for state + longest question) falls in the <100K band; vendor-documented context rot on large states further caps effective usable context.
- **Multimodal: 15/100.** Text-only input, no text generation — per methodology, text-only = 10–20.
- **Coding: 10/100.** The model is not trained to generate text; SWE-bench/LiveCodeBench/SciCode are not applicable and no verified public scores exist. Minimum score reflecting a deliberate non-coding design.
- **Cost efficiency: 99/100.** $0.042 / 1M input with free output — far cheaper than the ~$0.10/$0.20 = 97–99 reference; essentially the cheapest tier in the dataset, short of $0 = 100. Rate limits (40 req/sec) are the practical constraint.
- **Overall Score: 23.8/100.** Mean of the five quality dims per `RULES.md` (Cost excluded): (18 + 30 + 46 + 15 + 10) / 5 = 119/5 = 23.8 — unchanged. Best fit: not a coding/agent competitor — use it as a fast, calibrated decision primitive inside agent pipelines (routing, guardrails, verification, classification), not for generation, math, or multi-step reasoning.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (verification pass: BenchLM 404 on the canonical slug — no aggregator page exists for the decision-class model; the prior 2026-10-01/09 passes on the official TypeSafe AI docs remain the evidence base); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_5.md`, using the same headings.
