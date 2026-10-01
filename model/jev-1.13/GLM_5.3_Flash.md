# Jev 1.13 — findings by GLM 5.3 Flash

- Source: TypeSafe AI (`jev-1.13.0`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Jev 1.13
- **Short description:** TypeSafe's flagship "System One" model — the first of its kind. It does not generate text: it evaluates typed questions (Choice / Score / Noul) against a `state` and returns calibrated structured decisions with probabilities and confidence, for code to branch on. Flagged as a distinct model class, not a chat/agent LLM.
- **Provider / access:** OpenCode Zen `opencode/jev-1.13` via `https://opencode.ai/zen/v1/systemone`; direct TypeSafe endpoint `POST https://api.typesafe.ai/v1/systemone`. A free `jev-1.13-free` twin exists on Zen (limited time).
- **Release / knowledge:** Versioned ID `jev-1.13.0` (release date exposed via `GET /v1/models`; exact date not stated in docs). Knowledge cutoff: not applicable/not published — a decision model, not a knowledge model.
- **IDs:** `opencode/jev-1.13` (Zen); `jev-1.13.0` (versioned); aliases `jev-latest` and `jev-preview` both currently point to `jev-1.13.0` (no preview build available)
- **Context window:** 64K tokens per request (state + all questions combined); 32K tokens for the state plus the single longest question — verified via official TypeSafe Models page. NOTE: the folder `meta.json` says "128K total", which does not match the vendor's 64K — flagged for meta correction.
- **Modalities:** Text in only (string, JSON object, or array of text values; pre-process images/audio/video to text) — text out only in the sense of typed structured results, no prose generation; reasoning: calibrated atomic judgments, no multi-hop ("System Two") reasoning; parallel question evaluation; no JSON/prose generation
- **Pricing (as of 2026-10-01):** Paid — $0.042 / 1M input tokens, output free ($42 / Btok input). Zen `jev-1.13`: $0.042 in / Free out. Free `jev-1.13-free` tier on Zen (limited time). Rate limits 100K tokens/sec, 40 req/sec (dynamic, adjusting).
- **Architecture:** Proprietary, trained with RLCD (calibrated decisions, not generated text); same weights for every account — no per-customer fine-tuning/LoRA. Parameter count not disclosed.

### Raw benchmarks found

> Jev is a System One decision model — standard generative-LLM benchmarks do not apply, and the vendor publishes no Terminal-Bench/GPQA/etc. numbers. Rows below record that honestly.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found (model does not act as an agent)
- Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found
- Vendor-documented cookbook results (pipeline-level, not model capability scores): CLERC legal re-ranking lifts top-1 from 5% to 18% and top-10 from 38% to 62% over BM25 shortlists; 13-question regulatory briefing batched in one call is 12.2x cheaper and 10.0x faster (docs.typesafe.ai cookbooks)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found
- Vendor-documented limits (jaggedness page, last reviewed 2026-09-17): struggles with indirection, counting, math/numeric calibration, date ordering, adversarial content; best at atomic common-sense judgments; Noul/Choice outputs can violate structural invariance (e.g. refund Noul 0.22 vs Choice yes 0.01/no 0.99 on the same ticket)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found (model is not trained to generate text)
- LiveCodeBench: no verified public score found
- SciCode / other: no verified public score found

Long context:

- no long-context retrieval reported (bounded 64K/32K windows; vendor documents context rot — accuracy falls as unrelated state detail grows)

## Normalized scores (1–100)

- **Tool use: 18/100.** No verified public scores on any agent benchmark (Terminal-Bench, Tau2, GDPval, Claw-Eval) and the model by design cannot act as an agent or invoke tools — it is a decision primitive consumed by code. Cookbook pipeline results (CLERC re-ranking, intent routing) show usefulness inside agent stacks but are not tool-use capability.
- **Reasoning: 30/100.** No verified public GPQA/HLE/LCR/Index scores. Vendor documents calibrated common-sense judgment as the strength but explicit struggles with indirection, counting, numeric precision, and date ordering; multi-hop reasoning is out of scope by design. Low-mid score reflecting a narrow, well-calibrated judgment capability.
- **Context window: 46/100.** 64K tokens per request (32K for state + longest question) falls in the <100K band (scales down to 10–49); near the top of it, but vendor-documented context rot on large states further caps effective usable context.
- **Multimodal: 15/100.** Text-only input, no text generation — per methodology, text-only = 10–20.
- **Coding: 10/100.** The model is not trained to generate text; SWE-bench/LiveCodeBench/SciCode are not applicable and no verified public scores exist. Minimum score reflecting a deliberate non-coding design.
- **Cost efficiency: 99/100.** $0.042 / 1M input with free output — far cheaper than the ~$0.10/$0.20 = 97–99 reference; essentially the cheapest tier in the dataset, short of $0 = 100. Rate limits (40 req/sec) are the practical constraint, not price.
- **Overall Score: 23.8/100.** Mean of the five quality dims (18+30+46+15+10)/5 = 23.8 → 23. Best fit: not a coding/agent competitor — use it as a fast, calibrated decision primitive inside agent pipelines (routing, guardrails, verification, classification), not for generation, math, or multi-step reasoning.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-01
- Method: public internet research (official TypeSafe AI docs — Models, jaggedness, cookbooks; OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
