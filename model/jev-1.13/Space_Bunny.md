# Jev 1.13 — findings by Space Bunny Alpha

- Source: TypeSafe AI (`jev-1.13.0`; aliases `jev-latest`, `jev-preview`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Read the interface before the scores.** Jev is not a general-purpose LLM and
> cannot be compared to one on most of this dataset's five quality dimensions. It
> accepts a block of text state plus typed questions (`Noul` yes/no probability,
> `Choice` from up to 255 options, `Score`) and returns **typed probabilistic
> answers with calibrated confidences**. It **gives up string generation entirely** —
> no free-form text, no code, no explanation of a decision. Three of the five quality
> dimensions below therefore score near the dataset floor not because the model is
> weak but because the capability is structurally absent from the interface.

## Model card

- **Name:** Jev 1.13 (Jev 1.13.0)
- **Short description:** TypeSafe AI's first "System One" model, released after two years in stealth with a $40M seed round led by DCVC. It is a **decision engine**, not a chat model: state in, typed probabilistic decisions out. Marketed for high-frequency software judgements — routing, gating, classification, rubric scoring, claim verification, reranking — where waiting for a generated paragraph is unacceptable. TypeSafe's own framing: "a frontier-intelligence function call: unstructured state in, typed probabilistic decisions out." Not a variant or alias of another entry in this dataset.
- **Provider / access:** **TypeSafe AI only** — a single endpoint, `POST https://api.typesafe.ai/v1/systemone`, at `https://console.typesafe.ai/`. Early access opened 2026-09-15 off a waitlist; generally available to everyone with no waitlist as of 2026-09-20. Resellers exist (OpenRouter, AI/ML API at `typesafe/jev`) but list it as a pass-through of the same hosted model. No self-hosted option.
- **Release / knowledge:** announced **2026-09-15** (TypeSafe launch post, dated Sep 14). Knowledge cutoff not published.
- **IDs:** versioned `jev-1.13.0`; aliases `jev-latest` (SDK default) and `jev-preview`, both resolving to it as of 2026-10-01. TypeSafe explicitly warns aliases can move to a newer release, changing answers with no code change — pin `jev-1.13.0` and log the resolved model. Third-party IDs: `typesafe/jev` (AI/ML API).
- **Context window:** **64,000 tokens per request** covering state plus every question together, with a tighter **32,000-token limit on state plus the single longest question** (TypeSafe models docs, `docs.typesafe.ai/models`; corroborated by LLM Reference and modelpricewatch). Some third-party pages state 32K flat — the 64K-total / 32K-sub-limit split is the first-party figure and is what is used here. TypeSafe warns that **irrelevant long state lowers accuracy**, so hitting the ceiling is explicitly not a quality target. Max output is not applicable: output is unmetered and unmeterable in the usual sense.
- **Modalities:** **text in only** — a string, a JSON object, or an array of text values. **No image, audio, video or PDF input.** Output is typed scalars and calibrated probabilities, never prose. Reasoning: yes, but as a **calibrated decision process** rather than a visible chain of thought — TypeSafe states it "can't hallucinate" and that type-schema mismatch is mathematically impossible. Independent questions inside one request run in parallel, so adding questions barely changes response time.
- **Pricing (as of 2026-10-01):** **$0.042 per 1M input tokens** ($42 per billion — the unit TypeSafe's own rate card leads with). **Output tokens are free**, printed as such by the maker, not a missing figure; LiteLLM's `typesafe/jev-1.13.0` entry independently records `input_cost_per_token 4.2e-08` and `output_cost_per_token 0.0`. Blended rate at 3:1 input:output: **$0.032 / MTok**. Published rate limits: **250,000 tokens/s** and **1,200 requests/min**, flagged by TypeSafe as adjusting dynamically. **Caveat:** TypeSafe itself says "we can't prove it isn't subsidized."
- **Architecture:** **proprietary, closed.** No weights, no weights repository on the TypeSafe GitHub organisation (eleven public repos, all tooling/SDKs/workflows), no parameter count, no training compute, no architecture description beyond "a new model architecture." Trained with **Reinforcement Learning for Calibrated Decisions (RLCD)** plus parallel sampling — that is the only published training detail. Claims online that it is built on a LaDA-style diffusion decoder from a vLLM fork are **not** vendor-confirmed; orcarouter flags this as a tempting misreading.

### Raw benchmarks found

Agent / tool use:

- **Tool calling / function calling: not supported.** Jev has no tool-use interface at all — it cannot invoke a function, run a tool, or emit an action. It returns typed answers to typed questions. This is a structural absence, not a low score.
- Banking77 intent classification, full 3,080-utterance test split, via **OpenRouter** (**OpenRouter's own measurement**): **81.0% accuracy** (95% CI 79.6–82.3), **80.5% macro-F1**, **175 ms median round trip**, **$0.34 billed total** — against Claude Opus 5 (reasoning off) at 84.4% / 83.6% / 2,266 ms / $7.44 on the same split
- Email-triage workload (jevmodel.ai, **vendor-published**): **96.4% overall accuracy**, **92.0% equal-weight category accuracy**, $0.08 per 1,000 emails; Gemini 3.5 Flash-Lite 97.5% / 94.6%, Gemini 3.8 Flash 98.5% / 96.9%. 20 reviews per request at concurrency 8.
- Routing and guard-rail family accuracy, JevBench v1.4.2.1 current question set: **Routing 100%**, Trap/adversarial 83%, Safety judge 38%, Judge 54%, Multi-hop 64%, Trade-off 55%, Paraphrase 64%, Long policy 44%, Temporal/numeric 28%, Ambiguous/abstain 43%. Sealed-set variant: Routing 100%, Paraphrase 64%, Multi-hop 45%, Ambiguous/abstain 30%, Judge 34%, Long policy 28%.
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **not applicable — none of these harnesses can be run against a model that emits no tool calls or text.** No verified public score found for any of them.

Reasoning / knowledge:

- **JevBench v1.4.2.1 composite: 63.3, rank #3 of 90 ranked systems** (Benchmark Heaven). Four equal-weight axes: **Intelligence 53.1**, **Calibration 76.3**, **Speed 83.3**, **Cost 52.0**. On the Intelligence axis Jev is the **highest-ranked system on the entire board** — ahead of decider-4b v2 (49.4) and Plumb-4B (53.0). Speed and cost are where it loses.
- JevBench public task set: **200/231 correct = 86.58%** (of 534 total tasks; 303 private/judge tasks unavailable). Easy 48/48 (100%), Standard 99%, Judge 95%, Hard 81/111 (73%), Sealed 37%.
- JevBench original set: **71/72 correct**
- JF100: **232/300 rotations correct**
- `LocalLLaMA/typed-decisions` (400 cases / 2,000 typed decisions), measured **by the benchmark's authors** through TypeSafe's API on 2026-09-18, not by TypeSafe: **72.7% accuracy, ECE 0.144, KL to gold 1.44, Brier 0.148, 710 ms/case**. A **stock Qwen3.6-27B, zero-shot and untrained for this task, scored 73.7%** with ECE 0.020 and KL 0.27 on the same scorer. The benchmark's own card warns that a score above 0.75 means a model has learned the teacher's quirks rather than the task.
- SemEval-2026 DimABSA subtask 1, all ten test sets (Eastwood): untuned Jev 1.13.0 mean **RMSE_VA 2.4750** — **0 wins and 10 losses** against Kimi-K2 Thinking's official one-shot 1.8731, and 3 wins / 7 losses against a Qwen3-14B QLoRA fine-tune at 2.1889. Mean error **32.1% higher than Kimi's**.
- Retrieval/reranking, BM25 top-30 shortlists: **nDCG@10 0.768 SciFact / 0.358 NFCorpus / 0.376 FiQA** at $0.18 list price for 30 Nouls in one call; 0.772 / 0.358 / 0.376 one Noul per document at $0.28. Comparators: Voyage rerank-3 0.755 / 0.357 / 0.402, Cohere rerank-v3.5 0.745 / 0.339 / 0.374, GPT-5.6 Luna 0.747 / 0.355 / 0.363, Claude Haiku 4.5 0.723, Claude Opus 5 (low effort) 0.756.
- Claim-and-passage verification (jevmodel.ai): **85.7%** on all 42 pairs, **77.8%** on the hard 18, **$0.000025** per claim; GPT-5.4 and Claude Sonnet 5 both 85.7% overall but 66.7% on the hard 18 (GPT-5.4 61.1% with scratchpad). Unsupported-claim recall 78.9%, short of the 80% bar set before the run. McNemar p-values on the hard-18 change are 1.000 / 0.219 / 1.000 — not significant.
- GPQA Diamond / HLE / CritPt / LCR / MLCR / Artificial Analysis Intelligence Index: **not applicable and not published** — Jev produces typed decisions, not answers to science or knowledge benchmarks. **Jev is absent from Artificial Analysis's index entirely.**
- Hallucination: TypeSafe claims Jev "can't hallucinate" and that schema mismatch is mathematically impossible. No independent hallucination-rate measurement exists.

Coding:

- **No verified public coding benchmark exists for Jev, and none can exist in the usual form** — the model emits no strings and therefore cannot emit code. SWE-bench Verified, SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE, AA Coding Index: **no verified public score found, structurally not applicable.**

Long context:

- **No long-context retrieval benchmark exists.** The 64K total / 32K state-plus-longest-question budget is a documented spec with **no MRCR, RULER, or GraphWalks measurement**. TypeSafe's own guidance runs the other way — *"hitting the maximum is rarely a quality target… irrelevant long state lowers Jev accuracy"* — and recommends filtering and structuring state around the decision. JevBench's "Long policy" family is the nearest thing: **44% current / 28% sealed**, i.e. weak on long-policy questions rather than strong.

Speed / cost / latency (measured):

- Latency, OrcaRouter's own production traffic over the seven days ending 2026-09-30: **median TTFT 151 ms, p95 247 ms, ~349 tokens/s output, 0.49% error rate, 76.2M tokens served**; daily p50 across the window 175 / 170 / 163 / 161 / 170 / 147 / 143 ms, with a genuine 2,448 ms p95 single-day outlier on 09-28.
- Latency, Open-Jev independent replay: **p50 291.3 ms / p95 353.7 ms** (GPT-5.6 Luna 953.8 / 1307.5 ms; GPT-6 Astra 2206.4 / 3581.6 ms).
- Cost per JevBench task: **$0.040** (Benchmark Heaven board). Cost per 1,000 emails: $0.08. AI/ML API measured **$19–$98 per 1M decisions**, 84–85× cheaper than Claude Opus 5.5 on classification and 150× cheaper on answer rating, but roughly **the same as cheap LLMs** like GPT-5.6 Luna and DeepSeek V4 Flash.
- Vendor claims, **first-party, unreplicated, and restricted by their own footnotes to "workflows for System One tasks"**: **193.6× faster, 444.6× cheaper**, a worked example of TypeSafe AI at $0.000081 in 0.114 s versus LLMs at $0.013880 in 8.566 s, and a 238× comparison against Claude Fable 5.1. TypeSafe's own launch post concedes the multipliers are "likely sitting on the higher end of real world gains" and that the side-by-side demo used a "highly simplified" query with vendor-chosen human-readable keys to "paint our model in an advantageous light." TypeSafe's own benchmark card is still marked **pending**.

### Normalized scores (1–100)

- **Tool use: 48/100.** Scored on the agentic-decision work Jev actually does, because the tool-calling harnesses this dimension is built on cannot be run against it at all — there is no function-calling interface to score. On that narrower remit the evidence is strong and fast: 81.0% accuracy / 80.5% macro-F1 on the full 3,080-utterance Banking77 split at 175 ms median, 96.4% email triage, 100% routing-family accuracy, nDCG@10 0.768 on SciFact ahead of Voyage rerank-3 and Cohere rerank-v3.5. Hard-capped well below mid-tier because it cannot invoke a tool, drive a terminal, or run a multi-step agent chain at all.
- **Reasoning: 50/100.** JevBench **Intelligence 53.1 is the highest score on that axis of all 90 ranked systems**, and Calibration 76.3 with 86.58% on the public task set and 232/300 on JF100 is genuinely well-calibrated structured reasoning. Capped near the middle because that intelligence is **domain-narrow**: Jev scores 86.58% on JevBench and then loses **10 of 10** SemEval DimABSA test sets to Kimi-K2 Thinking, with mean error 32.1% higher, and is beaten on `typed-decisions` by a stock, untrained Qwen3.6-27B (72.7% vs 73.7%). No GPQA, HLE, CritPt or Intelligence Index figure exists, and it is absent from Artificial Analysis entirely — its reasoning ceiling outside typed decisions is simply unknown.
- **Context window: 45/100.** **64,000 tokens per request**, with a 32,000-token sub-limit on state plus the longest single question. That lands in the methodology's "<100K scales down to 10–49" band, and the vendor's own guidance argues against using the ceiling — irrelevant long state measurably lowers accuracy, and the nearest available probe, JevBench's Long-policy family, is weak at 44% current / 28% sealed. No MRCR, RULER or GraphWalks figure exists.
- **Multimodal: 15/100.** **Text in only** — a string, a JSON object, or an array of text values; no image, audio, video or PDF input is supported. Output is typed scalars and probabilities, which is structured data rather than a non-text modality, so it does not lift the score into the "+image in" band. Dataset floor for a text-only model.
- **Coding: 15/100.** **Structurally cannot code.** Jev gives up string generation entirely, so no patch, no file, no function body can be emitted; SWE-bench, LiveCodeBench, SciCode and DeepSWE are not merely unreported but unrunnable. Its nearest work — 85.7% claim-and-passage verification and nDCG@10 reranking — is reading and judging, not writing. Dataset floor, by capability absence rather than by weakness.
- **Cost efficiency: 99/100.** **$0.042 per 1M input tokens with output tokens free** — cheaper than the methodology's ~$0.10/$0.20 ≈ 97–99 anchor, and the $0 output is the maker's own printed rate rather than a missing figure. Independently corroborated by LiteLLM's `input_cost_per_token 4.2e-08` / `output_cost_per_token 0.0`. Measured $0.040 per JevBench task, 84–85× cheaper than Claude Opus 5.5 per classification decision, 175 ms median round trip on a 3,080-utterance split for $0.34 total. Held at 99 rather than 100 for three stated reasons: TypeSafe's own admission that the price "can't be proven… isn't subsidized"; the 32.1% mean-error gap that means retries are not free; and AI/ML API's finding that against cheap general LLMs the cost advantage largely disappears.
- **Overall Score: 35/100.** (48 + 50 + 45 + 15 + 15) / 5 = 34.6 → **35**. Best fit: drop-in routing, gating, triage, claim-checking and reranking inside production software where a 175 ms typed answer with a calibrated probability beats a 2.3 s paragraph by three orders of magnitude on cost — and pin `jev-1.13.0`, not `jev-latest`. Not a substitute for a general model on any task requiring generated text, code, tool invocation, vision, or reasoning beyond its typed-decision remit.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-10-01
- Method: public internet research — TypeSafe AI's launch post (`typesafe.ai/blog/introducing-system-one-models-and-jev`) and models documentation (`docs.typesafe.ai/models`), Benchmark Heaven's JevBench v1.4.2.1 board and its open-source-alternatives analysis, the Open-Jev benchmark consolidation (`zefan-cai.github.io/open-jev/benchmarks/`), the `ikermoel/open-alternative-jev` repository's third-party `typed-decisions` measurement, jevmodel.ai's vendor-published workload tables, OpenRouter's Banking77 measurement, orcarouter.ai's serving telemetry, and LiteLLM / modelpricewatch / LLM Reference price records. Scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores; every first-party multiplier is labelled as such and none is treated as an independent result.
- Future sources: add a new file next to this one, e.g. `Jev_1.14.md`, using the same headings.