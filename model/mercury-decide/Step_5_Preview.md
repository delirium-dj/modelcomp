# Mercury Decide — findings by Step 5 Preview

- Source: Inception Labs / `mercury-decide` (Inception Decisions API; `inception/mercury-decide` on OpenRouter)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury Decide
- **Short description:** Inception's System One decision model — it reads a `state` and answers typed questions (yes/no probability, categorical choice, ordinal score, field extraction) with calibrated probabilities and writes no prose. Built for routing, classification, triage, moderation, agent step-selection and evaluation loops, where your code — not the model — takes the action. It is Inception's entry in the decision-model class alongside Jev.
- **Provider / access:** Inception API (`POST https://api.inceptionlabs.ai/v1/decisions`, model `mercury-decide`, `INCEPTION_API_KEY`) and OpenRouter (`inception/mercury-decide` paid; `inception/mercury-decide:free` free early-access tier, snapshot `inception/mercury-decide-20260930`). The endpoint is NOT OpenAI-compatible and does not support `/v1/chat/completions`, streaming or tool calling. No OpenCode Console/Zen route — verified absent from the live catalog (Console's System One entry is Jev only).
- **Release / knowledge:** announced and opened 2026-09-30 (snapshot `-20260930`); generally available, no beta label in Inception's docs. Knowledge cutoff not applicable/disclosed.
- **IDs:** `mercury-decide` (Inception), `inception/mercury-decide` / `inception/mercury-decide:free` (OpenRouter). A Free ID exists on OpenRouter; none on Inception's own API.
- **Context window:** 65,536 tokens total (OpenRouter listing for both endpoints as of 2026-10-09; it listed 32,768 on 2026-10-01, and Inception's own docs publish no window figure), with a 58,982-token maximum completion. The state budget — how much of that window the application state may use — is not documented.
- **Modalities:** state/instructions/criteria as strings, JSON objects or arrays, or images (base64 data URLs in PNG/JPEG/WebP/GIF, up to 10 MiB each, up to 16 per request, 20 MiB body limit); output is typed answers — `noul` probability, `choice` + probabilities + confidence, `score` (probability-weighted, fractional) or `extract` spans with offsets. No text generation at all.
- **Pricing (as of 2026-11-10):** $0.02 per 1M input tokens on Inception (50% off the regular $0.04) and on OpenRouter; output tokens are reported but never charged. Artificial Analysis measured $15 per 1M tasks at list prices. Free tier on OpenRouter.
- **Architecture:** Inception builds diffusion LLMs (parallel rather than sequential token generation); no weights published and no architecture details beyond that in the launch materials.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Decision Index v1.0: **52.7** (independent run, 2026-10-13) — 5th of the 11 decision models at launch, 10th of 17 as of 2026-10-23 (Jev 57.5 at launch; Liquid's d1-ultra now leads at 65). The AA suite covers knowledge, reasoning, tool-calling and safety tests.
- When2Call (when to call a tool/model): **79.3** (AA sub-score)
- WildGuardTest F1 (safety/guardrail classification): **88.0** (AA sub-score)
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas / OSWorld: no verified public score found — the model cannot call tools at all (documented limitation).
- JevBench 1.7.4 hosted API board (Benchmark Heaven, independent, 2026-10-07): Capability Score **73.6** (Intelligence 65.9, Calibration 81.3) vs Jev 1.14's 75.0. Vendor claim of "most intelligent decision model on OpenRouter (JevBench v1.4)" and "up to 14 decisions per second" is vendor-run and not independently reproduced.

Reasoning / knowledge:

- HLE-MultiChoice (Humanity's Last Exam reasoning questions, AA): **10.1%** — second lowest of the 17 decision models
- Omniscience accuracy (AA): **35.0**; non-hallucination rate **32.0** (7th best of 17 — rewards "I don't know" over a wrong answer)
- JevBench Intelligence sub-score: **65.9** (see tool use section)
- Expected calibration error: **0.211** — the worst of the 17 models on AA's published bins (computed by systemonemodels.org; lower is better), and median time per task **500 ms** — the slowest of the 17
- GPQA Diamond / CritPt: no verified public score found

Coding:

- No verified public score found on any coding benchmark — by design the model writes no text and cannot generate code (it can only read code inside `state` and answer typed questions about it).

Long context:

- 65,536-token total context (OpenRouter listing); no MRCR / RULER / GraphWalks retrieval figure reported at any window length.

### Normalized scores (1–100)

- **Tool use: 58/100.** Routing-relevant decision benchmarks are its strength — AA Decision Index 52.7 (10th of 17), When2Call 79.3, WildGuardTest F1 88.0, JevBench capability 73.6 — but the model cannot call tools itself (documented limitation: no tool calling, no chat completions), and every agentic-execution row (Terminal-Bench, Tau3, GDPval-AA, Claw-Eval, Toolathon, OSWorld) is unreported. Mid band.
- **Reasoning: 52/100.** Weakest evidence in the set: HLE-MultiChoice 10.1% is the second-lowest of the 17 decision models, Omniscience accuracy 35.0, with only JevBench's Intelligence 65.9 and the non-hallucination 32.0 as positive signals. Below the mid-band reference anchors (GPQA 60–80%), which are in any case unpublished for this model.
- **Context window: 32/100.** 65,536 total tokens with a 58,982-token maximum completion sits in the rubric's <100K band (10–49); the state budget is undocumented and the window must hold the state, all criteria and question instructions, so effective room for application context is smaller still.
- **Multimodal: 62/100.** Text, JSON and image input (base64 PNG/JPEG/WebP/GIF, up to 16 images per request) with typed-decision output — image input puts it in the +image-in band (60–70); it sits at the bottom of that band because no visual benchmark (MMMU-Pro or equivalent) has been measured for this model.
- **Coding: 20/100.** No verified public score found on any coding benchmark, and by design the model generates no prose and cannot write code — it only answers typed questions over code supplied in the state. Scored at the text-generation floor with nothing invented.
- **Cost efficiency: 99/100.** $0.02 per 1M input tokens with output never charged (and a free tier on OpenRouter) lands at the rubric's ~$0.10/$0.20 anchor; AA measured $15 per 1M tasks. Held just below 100 because paid access still costs money and the free tier is early-access.
- **Overall Score: 45/100.** Mean of Tool use 58, Reasoning 52, Context window 32, Multimodal 62, Coding 20. Best fit: high-volume structured triage — ticket routing, moderation gating, agent step selection, rubric scoring — where a fixed answer set plus a probability is what you need and $0.02/1M input with free output makes the volume cheap. Not for anything that needs prose, code generation or calibrated thresholds you have not tested yourself (its 0.211 ECE is the worst of the 17 models Artificial Analysis ran).

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-10
- Method: public internet research (Inception's official Decisions API docs, systemonemodels.org's independent aggregation of Artificial Analysis Decision Index, Benchmark Heaven's JevBench board and OpenRouter endpoint data, and the OpenCode Console catalog check); scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores. Unreported benchmarks are marked "no verified public score found" rather than estimated.
- Reference URLs:
  - [Inception docs — Decisions (question types, images, pricing and limits)](https://docs.inceptionlabs.ai/capabilities/decisions)
  - [System One Models — Mercury Decide (benchmarks, specs, versions, calibration analysis)](https://systemonemodels.org/models/mercury-decide/)
  - [OpenRouter — Mercury Decide (paid and free endpoints, pricing)](https://openrouter.ai/inception/mercury-decide)
  - [Inception API docs — models and pricing](https://docs.inceptionlabs.ai/get-started/models.md)
  - [OpenCode Console docs — model catalog (no Mercury Decide route)](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
