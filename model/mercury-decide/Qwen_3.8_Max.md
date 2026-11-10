# Mercury Decide — findings by Qwen 3.8 Max

- Source: Inception Labs (`inception/mercury-decide`; diffusion "System-One" decision / judge endpoint at `POST /v1/decisions`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury Decide
- **Short description:** Inception Labs' diffusion-based **decision ("judge") model** for high-volume structured classification, confidence estimation, scoring, span extraction, and agentic routing. Instead of generating free-form text, you send a shared `state` (text/JSON, and now images) plus a map of typed questions and it returns typed answers with probabilities in a fraction of a second — a cheap "System-One" check wrapped around an expensive "System-Two" reasoner (its sibling Mercury 3). It is a narrow specialist endpoint, **not** a conversational, coding, or tool-calling model.
- **Provider / access:** Inception Labs. Served at `POST https://api.inceptionlabs.ai/v1/decisions` (model `mercury-decide`); also free on OpenRouter during its early-release window. The endpoint **does not support** `/v1/chat/completions`, streaming, or tool calling. Announced alongside Mercury 3 (Inception blog, 2026-10-19); a follow-up "Mercury Decide Update" added vision input and cut pricing.
- **Release / knowledge:** Released October 2026 (Mercury 3 launch window); knowledge cutoff not published. Built on the same text-diffusion foundation as Mercury 3 (masked-draft parallel denoising), tuned for typed decisions rather than generation.
- **IDs:** `inception/mercury-decide` (dataset id); `mercury-decide` (Inception API model slug). Distinct from Inception's general `mercury-2` / `mercury-2.5` / `mercury-3` diffusion LLMs, from `mercury-voice`, and from `mercury-edit-2`.
- **Context window:** Curated meta states **64,000 tokens total**; Inception's own models/pricing table publishes "**—**" (no fixed figure) for Decide, and max output is not published (responses are tiny structured payloads — e.g. `usage.output_tokens: 1`). The practical request limits are the gateway's **20 MiB body cap**, **≤16 images**, **≤10 MiB per image**. Design pattern: load one `state` and fire many typed questions against it in a single call.
- **Modalities:** **Text, JSON, and Image in → structured text/JSON out.** Four typed question kinds: `noul` (binary, returns P(positive) 0–1), `choice` (1–255 named options, returns top option + per-option `probabilities` + `confidence`), `score` (1–10 ordered levels, returns probability-weighted average + `legend` + `probabilities` + `confidence`), `extract` (1–26 fields, returns exact text spans + character offsets + `confidence` + `not_stated`). Images are base64 data URLs (PNG/JPEG/WebP/GIF) placed in `state` or a question's `instructions` (not in `criteria`). **No audio/video; no free-text generation; no tool calls.**
- **Pricing (as of 2026-11-10):** **$0.02 / 1M input tokens** (50% off the regular $0.04), **$0 cached input**, **$0 output** — only input tokens are billed; `output_tokens` are reported but never charged. Roughly a quarter of the per-call cost of comparable judge models. Free on OpenRouter during the early window (promotional; may end).
- **Architecture:** Proprietary diffusion LLM (dLLM) — parallel denoising over a short structured output, so inference is memory-bandwidth-bound and latency is very low. Inception's diffusion lineage (CEO Stefano Ermon is a co-inventor of key image/video diffusion techniques; team behind DPO / flash-attention work). Parameter count undisclosed.

### Raw benchmarks found

> Unlike a pure stealth slot, Mercury Decide carries **both an independent aggregate measurement and third-party domain benchmarks**, plus relative vendor claims. Numbers below are cited to source; nothing is invented.

Decision-model aggregate (independent):

- **Artificial Analysis Decision Index v1.0** (**AA**, 2026-10-13): **Mercury Decide = 32%**, ranked **3rd among all decision models** — behind **Microsoft-Decision-1 (40%)** and **Jev 1.13 (35%)**; "no other decision model reaches 17%." The index blends typed-decision accuracy with hallucination resistance (e.g. **AA-Omniscience-Decision**, 500 private 5-option questions incl. an "I don't know" option, is 25% of the index — 12.5% accuracy + 12.5% non-hallucination). MindStudio reads Decide's 32% specifically as **3rd-place hallucination resistance** (a 32% hallucination rate) — i.e. it flags uncertainty rather than confidently guessing.

Domain / third-party (independent):

- **LegalBench** (**Vals AI**, legal-reasoning tasks): **~87%** for Mercury Decide vs **~74%** for the comparison (Gemini-style) judge, at ~¼ the cost per call.
- **Claim verification** (**Vals AI**): **matched frontier / Gemini-style judge accuracy** on claim-detection tasks (ran the same suite used for TypeSafe's Jev).
- **Latency** (**Vals AI**, independent): median **~0.16 s** for a single judgment; **~0.4 s for 64 parallel judgments** against the same context — the batching efficiency that defines its best use case.

Vendor claims (Inception, relative — no absolute table published):

- Inception (Mercury 3 launch blog): Mercury Decide "**outperforms Jev on benchmarks including JevBench and LegalBench**." ("Jev" = TypeSafe's decision model, `jev-1.13`, separately in this dataset.)
- Inception ("Mercury Decide Update"): "**leads on stream decision bench** as well as accuracy on typed decisions as requested by our users."
- **JevBench** (Benchmark Heaven, `github.com/fstandhartinger/jevbench`) is the neutral harness for AI decision models (typed-decision accuracy + probability calibration); Inception claims a win there but publishes no absolute cell.

General coding / agentic / reasoning / long-context benchmarks: **NONE.** No SWE-bench Verified, DeepSWE, LiveCodeBench, SciCode, Terminal-Bench, GPQA-Diamond, HLE, Tau3, GDPval, OSWorld, or MRCR/RULER figures — the model is a typed-decision endpoint and is not evaluated on (and does not perform) open-ended generation, agentic coding, tool use, or long-context retrieval. There is **no Artificial Analysis Intelligence Index page** for `mercury-decide` (it is measured on the separate **Decision Index**, not the general Index).

### Normalized scores (1–100)

> Derived from the specs and benchmarks above via `model-comparison.md`. Overall = half-up mean of the five quality dims; Cost efficiency scored independently, never counted. This is a narrow specialist judge model, so several general dimensions are scored low for genuinely absent capability (noted N/A), never fabricated upward — the same discipline applied to its sibling `../mercury-edit-2/`.

- **Tool use: 30/100.** N/A by design — the endpoint **explicitly does not support tool calling**, chat completions, or streaming. It is the *routing/decision layer* agents call to decide escalation, team, or next step (agentic routing), so it is tool-orchestration-adjacent, but it executes no tools and publishes no Terminal-Bench / Tau3 / GDPval / OSWorld / Toolathon figures. Scored low for absent capability with an N/A note, not a hallucinated figure.
- **Reasoning: 50/100.** A "System-One" fast-judgment model with no printed chain-of-thought ("not a replacement for a reasoning model"), but genuinely competent at narrow typed judgment: **LegalBench ~87%** (legal reasoning), **claim-verification parity with frontier judges**, **3rd-place hallucination resistance** and **32% on the AA Decision Index v1.0**, with calibrated probabilities + confidence. Mid-scored: strong domain judgment, no general GPQA/HLE/CritPt/Intelligence-Index reasoning capability.
- **Context window: 40/100.** **64K** per curated meta (Inception's own table publishes "—"), placing it in the rubric's **<100K band (10–49)**, scored upper-middle for 64K. Max output is a tiny structured payload, and the real constraints are the 20 MiB body / ≤16-image limits; it is engineered to load one state and answer many questions, not for long-context retrieval (no MRCR/RULER reported).
- **Multimodal: 64/100.** **Text + JSON + Image in → structured text/JSON out.** Vision input is confirmed by Inception's docs (base64 PNG/JPEG/WebP/GIF, ≤10 MiB, ≤16 images) and the "Mercury Decide Update" / MindStudio ("now with vision support") — it judges screenshots and UI state for web agents. Rubric **image-in band (60–70)**; capped below 70 because output is text/JSON only (no image/audio/video out). **DISCREPANCY:** curated `meta.json` lists "Text in; text out" — the primary sources confirm **image input**, so the meta understates modality.
- **Coding: 24/100.** **Not a coding model** — no code generation, no FIM/next-edit, and none of the rubric's coding benchmarks (SWE-bench / LiveCodeBench / SciCode / DeepSWE / Coding Index all absent). Its `extract` (span extraction) and structured-JSON output are data-engineering-adjacent (form-filling from unstructured invoices, log/ticket classification), which earns slight credit above the floor, but it writes no code. Far below its sibling `mercury-edit-2` (Coding 78), which *is* a code-editing endpoint.
- **Cost efficiency: 99/100.** **$0.02 / 1M input, $0 cached, $0 output** (output reported but never billed) — about a quarter of comparable judge-model cost, plus a free OpenRouter early window. Excluded from Overall.
- **Overall Score: 41.6/100.** Mean of the five quality dims **(30 + 50 + 40 + 64 + 24) / 5 = 41.6**. **Divergence note (~−11.9 vs the peer cohort 53.5):** three of the five averaged dimensions are rubric-floored by genuinely absent capability — **Coding 24** (no code), **Tool use 30** (no tool calling), **Context 40** (64K) — leaving only **Multimodal 64** (image-in) and **Reasoning 50** (decision accuracy) in moderate range. The cohort 53.5 appears to weight the model's *strong decision-domain results* (AA Decision Index 3rd place, LegalBench ~87%, claim-verification parity) more heavily than the general-purpose 7-dimension rubric does; those are narrow judge-task wins, not general capability, so my independent read keeps them in Reasoning rather than inflating the floored dimensions toward the cohort. **Best fit:** high-volume, ultra-low-latency, ultra-cheap typed classification / routing / scoring / extraction (a "judge" or "System-One" gate) wrapped around a stronger reasoning model — including vision checks on screenshots/UI; **not** a chat, coding, tool-use, or long-context model.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-10
- Method: public internet research — **Inception Labs docs** (`docs.inceptionlabs.ai/capabilities/decisions`: `/v1/decisions`, the four question types `noul`/`choice`/`score`/`extract`, image-input rules, no chat/streaming/tool-calling; `get-started/models`: $0.02 input 50%-off / $0 output, "Classification · Scoring · Extraction," "Text / JSON / Image") + **Inception "Introducing Mercury 3" blog** (2026-10-19: "Mercury Decide … outperforms Jev on benchmarks including JevBench and LegalBench") + **Artificial Analysis Decision Index v1.0** (2026-10-13: Decide 32%, 3rd behind Microsoft-Decision-1 40% / Jev 1.13 35%; AA-Omniscience-Decision = 25% of index) + **MindStudio "Mercury Decide" explainer** (2026-10-21: Vals AI **LegalBench ~87% vs ~74%**, claim-verification parity, ~0.16 s single / ~0.4 s for 64 parallel, 3rd-place hallucination resistance, vision support) + **Vals AI** and **JevBench (Benchmark Heaven)**. Scores are normalized 1–100 interpretations, not official vendor scores; Tool use and Coding are N/A-by-design and scored low without fabrication; the 64K context is from curated meta (Inception's table publishes "—"). Flagged the `meta.json` "Text in; text out" **modality discrepancy** (image input is confirmed by primary sources). Verified this is a distinct specialized decision endpoint (not a duplicate of `mercury-2`/`mercury-2.5`/`mercury-3`/`mercury-voice`/`mercury-edit-2`). Researched independently; no peer findings in this folder were consulted.
- Reference URLs:
  - [Diffusion at Scale: Introducing Mercury 3 (Inception Labs — official blog; Mercury Decide vs Jev on JevBench/LegalBench)](https://www.inceptionlabs.ai/blog/introducing-mercury-3)
  - [Decisions capability (Inception Labs docs — `/v1/decisions`, question types, image input, limits)](https://docs.inceptionlabs.ai/capabilities/decisions)
  - [Models & pricing (Inception Labs docs — $0.02 input / $0 output, Classification·Scoring·Extraction, Text/JSON/Image)](https://docs.inceptionlabs.ai/get-started/models)
  - [Artificial Analysis Decision Index v1.0 (Decide 32%, 3rd of decision models)](https://artificialanalysis.ai/articles/artificial-analysis-decision-index)
  - [Mercury Decide: Inception's Fast AI Decision Model Explained (MindStudio — Vals AI LegalBench ~87% vs ~74%, latency, vision, hallucination resistance)](https://www.mindstudio.ai/blog/mercury-decide-decision-model)
  - [JevBench (Benchmark Heaven — neutral decision-model harness)](https://github.com/fstandhartinger/jevbench)
