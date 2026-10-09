# Jev 1.13 — findings by Step 5 Preview

- Source: TypeSafe AI (`jev-1.13.0`, alias `jev-latest`; type-safe "System One" decision model)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Jev 1.13 (TypeSafe's flagship and the first "System One" model)
- **Short description:** Not a chat model — **Jev does not write replies, produce code, or generate explanations**. It is TypeSafe AI's "System One" class of model: "built to make fast, structured decisions that software can use directly. A System One model evaluates a state and returns typed answers and probabilities," through three primitives (`Choice`, `Score`, `Noul`) served by a single endpoint (`POST /v1/systemone`). It is trained with **Reinforcement Learning for Calibrated Decisions (RLCD)** with a new architecture and new sampler (parameter count undisclosed), released 2026-09-15 in early access with the API open 2026-09-21. The strongest independent evidence is arXiv:2609.37647 (Deußer, Sparrenberg & Sifa), which evaluated `jev-1.13.0` zero-shot on **37 datasets — 346,009 requests for under USD 10**: it "reaches **95–99% accuracy on IMDB, SST-2, HellaSwag and ARC and 86.7% on Belebele across 122 languages**", "beats Qwen3.8-27B on 27 of 37 datasets… and Gemma-4-E4B on all 37", and its "choice probabilities are well calibrated and support selective prediction" (thresholds tuned on training data raise UNFAIR-ToS micro-F1 from 0.50 to 0.75). Priced **$42 per billion input tokens with output tokens free**, rate-limited at 100K tok/s; a free tier (`jev-1.13-free`) exists on OpenCode Zen. Vendor-documented failure modes cover nine cases, including that "Jev is not a calculator" and "Jev-1.13 is not trained to generate text."
- **Provider / access:** TypeSafe hosted API; OpenCode Zen (`jev-1.13`, `jev-1.13-free`), Vercel AI Gateway, Cloudflare AI Gateway, NanoGPT, Vivgrid, NEAR AI. **Closed weights, no fine-tuning.**
- **Release:** 2026-09-15 (API opened 2026-09-21).
- **Context window:** 64K tokens per request (32K reserved for `state` plus the longest question; some resellers list 32K).
- **Modalities:** Text-only input (string, JSON object, or array of text values); output is typed decisions/probabilities — no image, audio, or video.
- **Pricing (as of 2026-10-09):** $0.042/M input, **$0/M output** (free tier $0/$0 on OpenCode Zen); rate limits 100K tok/s, 80 req/s.
- **Architecture:** undisclosed; new architecture + new sampler + RLCD (calibrated decisions).

### Raw benchmarks found

Independent (arXiv:2609.37647, zero-shot, one frozen template per dataset, full splits):

- IMDB, SST-2, HellaSwag, ARC: **95–99% accuracy**; Belebele: **86.7% across 122 languages**
- vs Qwen3.8-27B: wins **27 of 37 datasets** (none of Qwen's nine leads outside bootstrap intervals); vs Gemma-4-E4B: wins **all 37**
- MMLU calculation-heavy questions answered more accurately than other MMLU questions: **94% vs 91%**
- Calibration: "choice probabilities are well calibrated and support selective prediction"; UNFAIR-ToS micro-F1 **0.50 → 0.75** with tuned thresholds
- Covers classification, routing, NLI, reading comprehension, commonsense reasoning, moderation, legal clause analysis, rubric scoring

Third-party:

- ayautomate.com (791 labeled decisions vs four LLMs): "Jev was faster and far cheaper, level with the small models on accuracy, and its confidence score made a cheap cascade work"
- Artificial Analysis: **not tracked**; vendor marketing's "193.6× faster / 444.6× cheaper" claims are criticized as benchmarking against large reasoning models

### Normalized scores (1–100)

- **Tool use: 40/100.** This model is the decision layer rather than a tool caller — no MCP/tool-calling capability exists — but its structured execution (typed answers, routed across 37 task families, calibrated cascades) is genuinely functional and dominates both 27B open baselines on decision accuracy.
- **Reasoning: 50/100.** ARC and HellaSwag at 95–99% and Belebele 86.7% across 122 languages are strong absolute numbers; but they come from next-token probabilities over fixed option sets, there is no math/HLE/agentic depth, and the vendor's own docs list literal-reading, arithmetic and indirection failure modes.
- **Context window: 40/100.** 64K nominal but only 32K usable for `state` (plus the longest question) — the methodology's 50–64 band at its floor.
- **Multimodal: 12/100.** Text-only — the methodology's text-only band (10–20).
- **Coding: 15/100.** Not a coding model: no SWE-bench/Terminal-Bench/SWE figure exists or is attempted; documented limitations state it "is not trained to generate text."
- **Cost efficiency: 97/100.** $0.042/M input with output tokens free, 100K tok/s throughput and a $0 free tier — among the cheapest per decision in the catalog; closed weights prevent self-hosting.
- **Overall Score: 31/100.** Best-fit recommendation: the routing-and-classification specialist — 95–99% accuracy and calibrated probabilities at a fraction of a cent per decision, ideal behind LLM cascades; it deliberately fails the general chat/coding metric, so this score measures a capability it was never built to have.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (TypeSafe docs and launch blog, arXiv:2609.37647, models.dev, third-party independent testing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Jev_1_14.md`, using the same headings.
