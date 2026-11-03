# Kimi K3.1 Pro — findings by GPT 6.1 Sol

- Source: Moonshot AI / `kimi-k3.1-pro`
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`; current contract: `../../README.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Substantially post-trained Kimi K3 successor for sustained coding and knowledge-work agents, with native visual understanding. A general-purpose model despite finance examples; not a finance-only SKU.
- **Provider / access:** Kimi API, `https://api.moonshot.ai/v1`; official quickstart documents Chat Completions, Responses and Anthropic-compatible Messages APIs. A successful minimum $1 top-up unlocks the flagship.
- **Release / knowledge:** 2026-10-23 according to independent launch coverage; cutoff not verified.
- **IDs:** `kimi-k3.1-pro`; `kimi-k3.1-pro-highspeed` is an official same-capability serving variant at approximately 2–3× speed, not a separate researched checkpoint. No verified Zen Free ID.
- **Context window:** Official pricing specifies 1,048,576 tokens for K3 series. Guide says `max_completion_tokens` defaults to 131,072 and accepts up to 1,048,576; this is a request-parameter ceiling, not evidence of that much output plus a full input window simultaneously.
- **Modalities:** Text/image/video input, text output; always-on thinking, low/high/max reasoning effort, default max. Strict JSON Schema and tool calling supported. Official guide warns public image URLs are unsupported: use base64 or uploaded file IDs.
- **Pricing (as of 2026-11-03):** Independent Artificial Analysis lists $2 input / $10 output per 1M tokens, 90% cache discount (implied $0.20 cache-hit input). Official pricing confirms pay-as-you-go, separately billed cache writes with 5m/1h TTL, and batch at 60% of standard price. Cache-write rates not recovered from the rendered table; do not treat cache-hit price as all-in cache cost.
- **Architecture:** Officially “3T-class,” post-trained from K3. Exact 2.8T/104B counts appeared in secondary/search summaries but were not verified from the inspected primary guide, so not adopted as established facts. Vendor calls it open-weight; AA still labels it proprietary. A downloadable checkpoint/license was not verified during this run; do not equate an announced release with available weights.

### Raw benchmarks found

Direct official guide, publisher-reported and not independently rerun:

| Evaluation | Result | Conditions / caveats |
|---|---:|---|
| Terminal-Bench 4.0 | 65.7% | Resource-constrained terminal tasks with task-specific tests |
| Kimi Code Bench 3.0 Long-horizon | 61.2% | Internal benchmark; predecessor K3 55.95%, same publisher comparison |
| BenchCAD | 92.7% | **With tools**, multiview reconstruction through CAD code |
| OfficeQA Pro v2 | 64.4 | Financial documents, cross-document retrieval and numerical reasoning |
| Kimi Hallu Bench Hard | 8.3% claim-level hallucination | Internal adversarial stress test; NOT an everyday error rate; K3 23.4% |

Independent Artificial Analysis direct page:

- Intelligence Index **v5.0: 46**, displayed rank **23/60** in its comparison cohort; cohort size is not the entire catalogue.
- **31.6 output tokens/second**, **$3.68 per Intelligence Index task**, **110M generated evaluation tokens**. These describe AA's tested route/workload, not every provider or Highspeed.
- AA lists a 1M window and text/image inputs; official guide additionally demonstrates video input. Treat AA's shorter modality list as incomplete, not a vendor contradiction.
- GPQA Diamond, exact-model HLE, DeepSWE, SWE-Marathon, LiveCodeBench, Tau2/Tau3 and full-window MRCR/RULER: no verified public score found in the directly inspected material. Search AI-overview numbers were not admitted as measurements.

### Source comparison and research record

Three successful independent browser searches: `Kimi K3.1 Pro official benchmarks`; `site:moonshot.ai K3.1 Pro OR site:kimi.com K3.1`; `Kimi K3.1 Pro independent review Artificial Analysis pricing`. Directly read the official quickstart, model guide, pricing page and independent AA evaluation. Compared Eigent, LLM Stats, AtomicAgent and review search summaries for disagreements rather than copying consensus claims.

Search results circulate AA values of 55.1/57 and $2.11/task; the current direct evaluator explicitly uses v5.0 and gives 46/$3.68, so older or different-setting figures are not mixed into it. BenchLM marks its aggregate Estimated and is excluded from measured evidence. Vendor terminal results substantiate strong engineering, but do not prove parity across independent tasks. Official web-search tooling is currently “not recommended” for production; that integration limitation matters despite broad agentic positioning. Open-weight availability remains unresolved rather than asserted from promotional descriptions.

### Normalized scores (1–100)

Editorial interpretations, not benchmark percentages.

- **Tool use: 89/100.** Terminal-Bench 65.7 and documented tool/structured-output workflows support strong agents; internal-only long-horizon evidence and web-search integration caveat cap it.
- **Reasoning: 86/100.** Independent AA v5.0 46 plus OfficeQA 64.4 support substantial reasoning; hallucination stress tests and missing broad subscore verification limit confidence.
- **Context window: 95/100.** Official 1,048,576-token context, without verified full-window retrieval accuracy.
- **Multimodal: 85/100.** Native image/video understanding and with-tools CAD 92.7; no verified native audio or nontext generation.
- **Coding: 91/100.** Strong official terminal and long-horizon coding results, tempered by limited independent exact-task replication.
- **Cost efficiency: 74/100.** $2/$10 and caching/batch help, but AA's $3.68/task, verbosity and slow standard-route throughput limit practical value.
- **Overall Score: 89/100.** Half-up mean of 89, 86, 95, 85 and 91 = 89.2; strong API-accessible sustained coding/visual-agent option.

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol-ultrafast)** — 2026-11-03
- Method: Independent public research, three successful distinct searches plus direct official/evaluator reads; normalized scores are interpretations, not vendor scores. No peer findings read.
- Reference URLs:
  - https://platform.kimi.ai/docs/get-your-api-key
  - https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart
  - https://platform.kimi.ai/docs/pricing/chat
  - https://artificialanalysis.ai/models/kimi-k3-1-pro
  - https://www.google.com/search?hl=en&q=Kimi+K3.1+Pro+official+benchmarks
  - https://www.google.com/search?hl=en&q=site%3Amoonshot.ai+K3.1+Pro+OR+site%3Akimi.com+K3.1
  - https://www.google.com/search?hl=en&q=Kimi+K3.1+Pro+independent+review+Artificial+Analysis+pricing
