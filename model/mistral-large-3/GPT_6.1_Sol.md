# Mistral Large 3 — findings by GPT-6.1 Sol

- Source: Mistral AI / `mistralai/Mistral-Large-3-675B-Instruct-2512`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md); current Overall contract in `../../RULES.md`
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Mistral Large 3
- **Short description:** Mistral's open-weight, image-aware instruct MoE for assistants and enterprise workflows. The publisher explicitly says it is not a dedicated reasoning model; Large 4 successor results and speculative-decoding helpers are not substituted for this checkpoint.
- **Provider / access:** Downloadable weights for vLLM/on-premises inference and current OpenRouter `mistralai/mistral-large-2512` OpenAI-compatible access. AA marks the model deprecated in favor of Large 4 Preview, but the gateway still lists this exact older route; that is not proof of native first-party shutdown or successful authenticated inference.
- **Release / knowledge:** AA dates release to 2025-12-02; exact knowledge cutoff not verified.
- **IDs:** Weights `mistralai/Mistral-Large-3-675B-Instruct-2512`; gateway `mistralai/mistral-large-2512`. No Zen Free ID verified; no rolling `latest` alias used for identity.
- **Context window:** Official 256K and vLLM example 262,144; gateway 262,144 context / 209,715 maximum completion. AA metadata evaluates a 256,000 configuration. No measured maximum-window retrieval established.
- **Modalities:** Text/image inputs; gateway also advertises file input; text output, functions, JSON and system prompts. No native audio/video or non-text output verified. Publisher says it can lag vision-first models.
- **Pricing (as of 2026-11-10):** Gateway $0.50 input / $1.50 output / $0.05 cache read per 1M ([live claimant](https://openrouter.ai/api/v1/models)); no verified current free lane. Apache-licensed weights do not make large-scale self-host inference free.
- **Architecture:** Publisher headline 675B total / 41B active; component breakdown 673B/39B language MoE plus a 2.5B vision encoder. Main card is FP8; BF16/NVFP4 are other formats of the same intended model. Apache 2.0; substantial multi-GPU serving footprint.

### Raw benchmarks found

The [independent AA page](https://artificialanalysis.ai/models/mistral-large-3) publicly delivers a model record with exact `slug=mistral-large-3`, ID `4928e950-7f37-4475-b0dc-c5bad781a321`, and `isReasoning=false`. This run selected that record using JSON-only decoding; results were not copied from comparison models. Legacy benchmark settings/versions not identified in the record remain explicitly unresolved.

Agent / tool use:

- Tau2 **24.56%**; GDPval-AA **427.62 Elo**; Terminal-Bench **2.1: 11.99%** (AA exact data).
- Terminal-Bench **4.0: 0.0%**; AutomationBench partial-score **1.50%**. These fields are present measurements, not missing values or all-pass success.
- Tau3-Banking version-specific result, Claw-Eval/ClawProBench, Toolathon, MCP-Atlas, and SWE Atlas QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond **67.98%**; HLE-Diamond **4.5%**; AIME25 field **38.0%**, exact effort/harness not identified in the extracted record.
- Legacy HLE field **4.17%**, setting not identified; no no-tools claim made. Original CritPt field **0.0%**; the newer hard-subset field is absent, not zero.
- AA Intelligence Index **N/A/null**, not an invented zero; Omniscience also absent in the exact record. The page's current v5.0.1 methodology must not turn missing index coverage into a measured score.

Coding:

- LiveCodeBench **46.46%**, version not identified in the extracted record; SciCode **36.57%**; TB2.1 **11.99%** (AA).
- SWE-bench Verified/SWE-Pro, Vibe Code Bench, DeepSWE, and FrontierCode 2.0: no verified exact-model result found; absent fields are not scored as zero.

Long context:

- AA LCR **36.0%**, MLCR **1.11%**, without an established window length in this extraction. These are task-level long-context reasoning fields, not MRCR/RULER retrieval at 256K.
- No verified MRCR/RULER/GraphWalks result found.

Multimodal/performance:

- AA MMMU-Pro **55.66%**; GDP.pdf all-pass **1.2%**.
- AA headline **84.03 output tokens/s**, **2.88 seconds to first answer token**, workload/endpoint-dependent rather than a guaranteed service level.
- The [official weights card](https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512/raw/main/README.md) contains publisher comparison images, but their coordinates are not invented or used as independent replication of AA's numbers.

### Normalized scores (1–100)

- **Tool use: 35/100.** Exact Tau2 24.56%, TB2.1 11.99%, low GDPval-AA, and weak newer workflows indicate limited measured agent reliability despite native functions.
- **Reasoning: 58/100.** GPQA 67.98% supports useful knowledge/reasoning, while low HLE-Diamond and modest AIME results limit hard-frontier claims; missing index/Omniscience coverage is not treated as a measured zero.
- **Context window: 70/100.** Verified roughly 256K capacity reaches the middle context tier, but weak LCR/MLCR and absent maximum-window retrieval limit confidence.
- **Multimodal: 67/100.** Verified image/file input and MMMU-Pro 55.66% support the image tier; audio/video/non-text output are absent and document all-pass performance is low.
- **Coding: 55/100.** LiveCodeBench 46.46% and SciCode 36.57% support constrained assistance, but weak terminal performance and missing repository-repair evidence cap autonomy.
- **Cost efficiency: 93/100.** $0.50/$1.50 with inexpensive cache reads offers low paid token costs, but retries and the large self-host footprint prevent a free-inference claim.
- **Overall Score: 57/100.** Half-up mean: (35 + 58 + 70 + 67 + 55) / 5 = 57; cost excluded. Best suited to constrained, low-cost image-aware instruction tasks rather than difficult autonomous agents.

---

## Signature

- Provided by: **GPT 6.1 Sol (agentrouter/gpt-6.1-sol)** — 2026-11-10
- Method: Fresh public-source research, official checkpoint verification, exact gateway lookup, and JSON-only extraction of the independent AA record. No peer findings read. Measured zero, absent coverage, benchmark-version uncertainty, and evaluator deprecation versus gateway availability are separated. Scores are interpretations; configured search returned HTTP 402, so direct sources and Bing were used.
- Reference URLs:
  - [Official checkpoint, architecture, license, and limitations](https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512/raw/main/README.md)
  - [Independent AA exact-model page/data](https://artificialanalysis.ai/models/mistral-large-3)
  - [Live OpenRouter exact route, limits, and pricing](https://openrouter.ai/api/v1/models)
- Future sources: Preserve this report and add separately signed evidence without importing successor scores.
