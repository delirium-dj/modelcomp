# Mercury Decide — findings by MiniMax M3.1 Flash

- Source: Inception (mercury-decide)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury Decide
- **Short description:** Inception Labs' diffusion-based **decision model** for typed classification, scoring and extraction: you send a shared state plus a set of typed questions and it returns a calibrated probability for each allowed answer instead of generating prose. Built for high-volume routing and triage (support desk, compliance, agent escalation) rather than for conversation — it has no chat endpoint, no streaming and no tool calling.
- **Provider / access:** Inception API, `POST https://api.inceptionlabs.ai/v1/decisions` with model id `mercury-decide`; OpenRouter serves the same model on its System One endpoint using the identical `/v1/systemone` schema as TypeSafe's Jev. Not available through EU in-region routing on OpenRouter. No OpenCode Zen route exists — the OpenCode Console catalog lists no Mercury model.
- **Release / knowledge:** 2026-09-30 (OpenRouter and Vals AI release dates). Knowledge cutoff not disclosed.
- **IDs:** `inception/mercury-decide` (OpenRouter), `mercury-decide` (Inception API). No free Zen ID exists.
- **Context window:** 65,536 tokens (OpenRouter); Artificial Analysis reports 66k. Vals AI also records 66k. Max output tokens: 0 — the endpoint returns typed values and probabilities, and output tokens are reported in `usage` but never charged.
- **Modalities:** text **and image** in; structured JSON (or text) out. Question types: `noul` (probability of a positive answer), `choice` (1–255 options with per-option probabilities and a confidence), `score` (an ordered 1–10 scale, returning the probability-weighted average of the level indices plus a legend and confidence) and `extract` (1–26 fields, returning exact text spans with character offsets and confidence). Images must be base64 data URLs (PNG, JPEG, WebP or GIF), up to 10 MiB each and 16 per request, inside a 20 MiB gateway body limit; images are not allowed inside criteria. No streaming, no chat completions, no tool calling.
- **Pricing (as of 2026-11-12):** $0.02 per 1M **input** tokens at the 50%-off launch price (the regular price is $0.04), cached input $0, output $0. Only input tokens are billed. Artificial Analysis notes the $70-per-million-tasks cost reflects the temporary launch price and would double at the standard price.
- **Architecture:** proprietary diffusion model adapted to decision output — the diffusion decoder produces typed, calibrated answers directly rather than sampled text, which is what makes output tokens free and decisions fast.

### Raw benchmarks found

Agent / tool use (routing, classification and escalation — the model's actual job):

| Benchmark | Value | Who ran it | Note / source |
|---|---|---|---|
| ClaimBench | 99.08% ± 0.22 | **Independent** (Vals AI) | #4 of 20; 400 claim-verification items |
| Claim-verification accuracy | 0.978 (Jev 1.13.0: 0.975) | **Independent** (Vals AI) | Paired difference vs Jev runs from -0.017 to +0.021 — statistically indistinguishable |
| Router test at a 1% error budget | 94% of held-out cases automated at 0.8% error | **Independent** (Vals AI) | Within budget; Jev automated 95% at 1.6% error, over budget |
| When2Call | 79.3 | **Independent** (LMSpeed, from Benchize) | #8 of 12 on the Decision Index v1.0 view |
| AA-Omniscience-Decision accuracy | 35.0 | **Independent** (LMSpeed, from Benchize) | #6 of 12 |
| AA-Omniscience-Decision non-hallucination rate | 32.0 | **Independent** (LMSpeed, from Benchize) | #6 of 12 |
| Artificial Analysis Decision Index | 62 (#12 of 19) | **Independent** (Artificial Analysis) | Below the 66 median among decision models |
| Decision cost | $70 per 1M tasks (#4 of 19) | **Independent** (Artificial Analysis) | At the temporary launch price; double at standard pricing |
| Decision latency | 245 ms per task (#13 of 19) | **Independent** (Artificial Analysis) | Slower than the 206 ms decision-model median |
| Throughput | up to 14 decisions per second | Reported by Inception / OpenRouter | OpenRouter model description |
| Median latency, 1 judgment / 64 judgments | 0.16 s / 0.40 s | **Independent** (Vals AI) | Jev stays near 0.1 s; every LLM tested ran 3.7 s to 65 s at 64 judgments |
| Tool calling | not supported | Vendor | Inception decisions doc: the endpoint supports no tool calling |
| Terminal-Bench / Tau / GDPval / Claw-Eval | no verified public score found | — | No general agent harness applies to a decisions-only endpoint |

Reasoning / knowledge:

| Benchmark | Value | Who ran it | Note / source |
|---|---|---|---|
| LegalBench accuracy | 0.869 (Jev 1.13.0: 0.740) | **Independent** (Vals AI) | Class-balanced 0.821 vs 0.730 for Jev |
| LegalBench contract entailment subtasks | 0.970 and 0.970 | **Independent** (Vals AI) | On contract_nli_permissible_copy and contract_nli_confidentiality_of_agreement, against 0.485 and 0.576 for Jev |
| LegalBench weakest subtask | 0.70 (international_citizenship_questions) | **Independent** (Vals AI) | Jev scores 0.82 there; best other system 0.93 |
| Expected calibration error | 0.011 on claims, 0.058 on LegalBench | **Independent** (Vals AI) | Jev: 0.011 and 0.108 |
| HLE-MultiChoice (Decision Index) | 10.1 | **Independent** (LMSpeed, from Benchize) | #11 of 12 |
| WildGuardTest (Decision Index) | 88.0 | **Independent** (LMSpeed, from Benchize) | #11 of 12 |
| AA-Symmetry v1.1 | no verified public score found | — | Component of the Decision Index; the standalone value was not published on the model page |
| Artificial Analysis Decision Index v1.0 | 52.7 (#8 of 12) | **Independent** (LMSpeed, from Benchize) | The earlier index version, before the v2.1 update |
| GPQA Diamond / HLE / CritPt / LCR | no verified public score found | — | Not published for this model |

Coding:

| Benchmark | Value | Who ran it | Note / source |
|---|---|---|---|
| SWE-bench / LiveCodeBench / SciCode / Vibe Code Bench | no verified public score found | — | The model is not a code generator; no coding benchmark applies |
| Span-extraction capability | supported by the `extract` question type | Vendor | Returns exact text spans with character offsets and a confidence, plus a not-stated flag — the closest analogue to a precision metric here |

Long context:

| Benchmark | Value | Who ran it | Note / source |
|---|---|---|---|
| MRCR / RULER / GraphWalks | no long-context retrieval reported | — | No long-context benchmark published |
| Context window | 65,536 tokens (66k per Artificial Analysis and Vals AI) | Vendor + independent | OpenRouter; AA; Vals AI |
| Long-input behaviour | billed input grows from about 1,700 tokens for one judgment to about 106,000 for 64 judgments on one document | **Independent** (Vals AI) | Cost per call $0.0022 at the launch price, versus $0.00016 for Jev |

### Conflicting evidence (vendor vs independent) and how it was resolved

- **Index version.** Artificial Analysis's live Decision Index page reports **62** for Mercury Decide (#12 of 19), while LMSpeed's Benchize-derived snapshot from 2026-11-07 reports the older **v1.0** index at **52.7** (#8 of 12) — the index was revised (now v2.1), so the two numbers describe different scales and different model pools. Resolution: the current Artificial Analysis v2.1 figure (62) is used as the headline, with the v1.0 value quoted only as the earlier snapshot and with the per-evaluation rows taken from the LMSpeed/Benchize view that publishes them individually.
- **"Outperforms Jev on JevBench and LegalBench".** Inception's own launch post makes this claim. Vals AI's independent run supports it on LegalBench (0.869 accuracy and 0.821 class-balanced, against 0.740 and 0.730 for Jev 1.13.0) but explicitly finds the two models **indistinguishable on claim verification** (0.978 versus 0.975, paired difference from -0.017 to +0.021). Resolution: the LegalBench lead is accepted as verified; the claim-verification parity is reported as parity, not as a win.
- **Image input.** Inception's decisions documentation and OpenRouter both document image input (base64 data URLs, including a Multimodal Decisions guide), while the Vals AI model record lists image input as not supported. The Vals evaluation was run on 2026-10-08 and used text-only item sets, so the capability flag most likely reflects what was exercised. Resolution: the vendor documentation plus OpenRouter are taken as authoritative for image support, and the Multimodal score is based on that, with the caveat recorded here.
- **Speed.** Artificial Analysis measures 245 ms per task and calls the model slower than the decision-model median (206 ms), while OpenRouter and Inception advertise up to 14 decisions per second. Resolution: both are kept — the 14/s figure is the best-case parallel decision rate, the 245 ms is the measured per-task latency, and the slower median is what the Tool-use and latency evidence is anchored on.

### Notes on identity

- Mercury Decide is a **typed decision model**: it answers yes/no, categorical, ordinal-scoring and span-extraction questions over a shared state with calibrated probabilities, and it is deliberately not a conversational model — no chat completions, no streaming, no tool calling.
- It is **not** the general-purpose Mercury 2 or Mercury 3 diffusion LLMs, which are OpenAI-compatible chat models with tool calling, structured outputs and selectable reasoning effort, and whose published benchmark suites (GPQA, τ³-bench, DeepSWE, MRCR) belong to those models.
- It is **not** Mercury Edit 2, the narrow fill-in-the-middle / next-edit prediction model for in-editor code completion.
- It shares a response **shape** with TypeSafe's Jev — the same System One schema, the same `noul` / `choice` / `score` question types, and an OpenRouter route that mirrors Jev's `/v1/systemone` endpoint — but it is a distinct Inception model with its own weights, its own pricing and its own image capability.
- Identity split used in this report: the "up to 14 decisions per second" figure is vendor-reported; every score in the tables is attributed to Vals AI, Artificial Analysis or LMSpeed/Benchize as the actual runner.

### Normalized scores (1–100)

- **Tool use: 62/100.** Judged as routing and classification quality, the model's actual agent-facing job: ClaimBench 99.08% (#4 of 20), 97.8% claim-verification accuracy, a router test that automated 94% of held-out cases at 0.8% error inside a 1% budget, and a documented 14-decisions-per-second ceiling; capped by the endpoint having no tool calling at all, by the Artificial Analysis Decision Index of 62 sitting below the 66 median (#12 of 19), and by 245 ms per task being slower than the decision-model median.
- **Reasoning: 55/100.** Strong on legal and claim reasoning (LegalBench 0.869 accuracy, 0.821 class-balanced, ECE 0.058 versus Jev's 0.108) but weak on hard knowledge tasks (HLE-MultiChoice 10.1%, AA-Omniscience-Decision accuracy 35.0% and non-hallucination 32.0%), with no GPQA, HLE, CritPt or LCR figure and a below-median Decision Index.
- **Context window: 40/100.** A verified 65,536-token window sits below the 100K tier, which scales down into the 10–49 band; Vals AI shows the usable cost grows quickly when many judgments share one long document (about 106,000 billed input tokens for 64 judgments).
- **Multimodal: 65/100.** Image input is supported and documented by Inception (base64 data URLs, up to 10 MiB each and 16 per request) and by OpenRouter, with structured JSON decision output — the image-input tier of the rubric; capped below the top band because audio, video and PDF input are absent and the Vals AI model card still flags text-only input.
- **Coding: 12/100.** Not a code generator: no coding model, no code benchmark, no SWE-bench or LiveCodeBench result exists; the only adjacent capability is precise span extraction with character offsets.
- **Cost efficiency: 99/100.** $0.02 per 1M input tokens with output billed at $0 is effectively free for the generated decision, and Artificial Analysis prices it as the fourth-most economical decision model at $70 per 1M tasks; scored just below 100 because input is not literally $0 and Artificial Analysis notes the price is a temporary launch rate that doubles at the standard $0.04.
- **Overall Score: 46.8/100.** Mean of the five quality dimensions (62 + 55 + 40 + 65 + 12) / 5 = 46.8; best fit is a cheap, well-calibrated classifier or router in front of a larger model, not a model asked to do the thinking itself.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: Fresh public web research (Inception decisions API docs, Inception models-and-pricing doc, OpenRouter model pages, Artificial Analysis Decision Index page for decision models, Vals AI's independent Mercury Decide evaluation and model record, LMSpeed benchmark view, BenchLM and Benchize catalogue checks); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [An Evaluation of Inception's Mercury Decide — Vals AI](https://www.vals.ai/blogs/evaluation-of-mercury-decide)
  - [Mercury Decide: Release, Decision Index Score, Performance & Price — Artificial Analysis](https://artificialanalysis.ai/decision-models/mercury-decide)
  - [Decisions — Inception API docs](https://docs.inceptionlabs.ai/capabilities/decisions)
  - [Mercury Decide — OpenRouter model page](https://openrouter.ai/inception/mercury-decide)
  - [Models & Pricing — Inception API docs](https://docs.inceptionlabs.ai/get-started/models)
  - [Mercury Decide — Vals AI model record](https://www.vals.ai/models/decision_mercury-decide)
