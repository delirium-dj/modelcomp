# Mercury Decide — findings by DeepSeek 4.1 Flash

- Source: Inception Labs — `inception/mercury-decide`
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Decision paradigm.** Mercury Decide is a System One / typed-decision model, not a text generator: it answers named questions with probabilities instead of prose. Per `../../model/README.md` § Model categories it stays in `model/<slug>/` and is separated at render time (own shelf, excluded from A/B/C compare and from generative Overall ranking). The numeric scores below are the decision-domain analogue of the standard rubric and should not be ranked against generative models.

## Model card

- **Name:** Mercury Decide
- **Short description:** Inception Labs' System One decision model — send a state plus typed questions and get calibrated choice / score / yes-no answers (or exact extraction spans) with probabilities straight from the model, no generated prose to parse; built for triage, routing, moderation, agent-step selection and eval loops.
- **Provider / access:** Inception Platform API — `POST https://api.inceptionlabs.ai/v1/decisions` with model `mercury-decide` (**not OpenAI-compatible**; no chat completions, streaming or tool calling). On OpenRouter: paid `inception/mercury-decide` + free `inception/mercury-decide:free`, both served solely by Inception from the `inception/mercury-decide-20260930` snapshot (called via the `/v1/systemone` route per launch-day reports). Launched free in early access; later updated to GA with zero data retention.
- **Release / knowledge:** announced and opened 2026-09-30; mid-October 2026 update doubled context, improved benchmarks and switched to GA with zero data retention; Mercury 3 launch post (2026-10-19) still lists it as a flagship portfolio product. Knowledge cutoff not disclosed.
- **IDs:** provider id `mercury-decide`; dataset route `inception/mercury-decide`.
- **Context window:** **65,536 tokens** (OpenRouter, after the Oct doubling from 32,768 at launch; max completion listed 58,982). Inception's own models table lists no window; folder metadata rounds to 64K. No state-budget or questions-per-call cap is documented.
- **Modalities (I/O shape):** text / JSON / **image** in — image parts (base64 data URLs, PNG/JPEG/WebP/GIF, ≤16 images ≤10 MiB each, total request ≤20 MiB; not allowed in criteria) can sit anywhere in `state` or a question's `instructions`; out = typed decisions: `noul` (probability 0–1), `choice` (1–255 options, + per-option probabilities + confidence), `score` (1–10 ordered levels, probability-weighted average + legend + probabilities + confidence), `extract` (exact spans with character offsets + confidence + `not_stated`).
- **Pricing (as of 2026-11-10):** **$0.02 per 1M input tokens** (50% off the regular $0.04) at Inception and on OpenRouter; **output tokens reported but never charged**; free `:free` lane on OpenRouter; input-only billing makes the effective unit "cost per decision".
- **Architecture:** proprietary System-One decision endpoint from the Mercury diffusion family; Inception's launch materials do not detail the build beyond diffusion; no weights published; no SDK or rate-limit figures published as of the update.

### Raw benchmarks found

> Vendor claims (Inception launch + Mercury 3 posts) versus independent boards (Benchmark Heaven JevBench, Artificial Analysis Decision Index, systemonemodels' ECE computation) — quarrelling sources are shown side by side.

Vendor claims:

- "The most intelligent decision model on OpenRouter (JevBench v1.4)" and "up to **14 decisions per second**" — **vendor-run, not independently reproduced** at launch; no link to the evaluation; the model was absent from the public JevBench board on 2026-10-01. The Mercury 3 launch post (2026-10-19) further claims it "outperforms Jev on benchmarks including JevBench and LegalBench"

Independent — decision-quality boards:

- **JevBench (Benchmark Heaven hosted API board), 2026-10-07: Capability Score 73.6** — Intelligence 65.9, Calibration 81.3 — **behind Jev 1.14's 75.0** on the same board
- **Artificial Analysis Decision Index v1.0, 2026-10-13: index 52.7** — 5th of 11 decision models at launch, falling to **10th of 17 by 2026-10-23**. Sub-scores: Omniscience accuracy 35.0, non-hallucination 32.0 (7th of 17), **HLE-MultiChoice 10.1% (second lowest)**, When2Call 79.3, WildGuardTest F1 88.0
- **Calibration error 0.211** (ECE computed by systemonemodels.org from AA's published bins — **worst of the 17** decision models; AA itself does not publish ECE)
- **Median 500 ms per task on AA — slowest of the 17**; AA-measured list-price cost $30 per 1M tasks (Oct 14) → **$15 per 1M tasks** (Oct 16 and 23; four rival models cost less)
- systemonemodels composite "System One Score": **83.6 from 2 of 3 boards** (AA 80.8, JevBench 86.4)

### Normalized scores (1–100) — decision-domain analogue, not generative-ranked

- **Tool use: 55/100.** Not a tool caller itself, but a measured component in agent stacks — When2Call 79.3 (when-to-call decisions) and WildGuardTest F1 88.0 (guardrails) are real routing/selection value; capped by the 500 ms median task time (slowest of 17) and the absence of any tool-calling surface.
- **Reasoning: 50/100.** Decision-head quality is mid-pack and harness-dependent: JevBench capability 73.6 vs Jev 1.14's 75.0, AA index 52.7 (10th of 17), HLE-MultiChoice 10.1% (2nd lowest) — and calibration swings from strong (JevBench 81.3) to worst-in-field on AA's bins (ECE 0.211), so verify thresholds per use case.
- **Context window: 55/100.** 65,536 tokens after the October doubling (58,982 max completion per OpenRouter) is mid-low for large-state decisions; Inception documents no window of its own.
- **Multimodal: 40/100.** Genuine image input for decision questions (≤16 base64 images, ≤10 MiB each) but decision-only output and no image support inside criteria.
- **Coding: 15/100.** Writes no code — a structured decision endpoint; the coding dimension is out of scope (floor).
- **Cost efficiency: 92/100.** Input-only billing at $0.02/1M with output free and a free OpenRouter lane is excellent for high-volume triage; AA's $15 per 1M tasks puts it mid-low among decision models on its workload mix.
- **Overall Score: 43/100.** (55 + 50 + 55 + 40 + 15) / 5 = 43.0 → 43. (Not ranked against generative models — decision paradigm.) Best fit: high-volume classification/triage/routing where a probability to gate on beats an explanation, with thresholds re-validated on your own data because of the calibration spread.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-11
- Method: public internet research (Inception decisions + models docs, Inception launch and Mercury 3 posts, OpenRouter listings, Benchmark Heaven JevBench board, Artificial Analysis Decision Index via the independent systemonemodels.org hub which also computed the ECE). Vendor claims and independent measurements are labelled separately; no independent run was performed by this agent. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Inception Docs — Decisions capability](https://docs.inceptionlabs.ai/capabilities/decisions)
  - [Inception Docs — Models & pricing](https://docs.inceptionlabs.ai/get-started/models)
  - [systemonemodels.org — Mercury Decide (independent hub, bench table)](https://systemonemodels.org/models/mercury-decide/)
  - [Artificial Analysis — Decision Index](https://artificialanalysis.ai/evaluations/artificial-analysis-decision-index)
  - [Benchmark Heaven — JevBench board](https://benchmarkheaven.com/jev-models/api)
  - [OpenRouter — inception/mercury-decide](https://openrouter.ai/inception/mercury-decide)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
