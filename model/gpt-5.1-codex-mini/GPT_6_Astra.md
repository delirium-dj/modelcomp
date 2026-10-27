# GPT-5.1-Codex Mini — findings by GPT 6 Astra

- Source: OpenAI / GPT-5.1-Codex Mini
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Identity:** Smaller coding-specialized GPT-5.1-Codex variant; proprietary, parameter count undisclosed. Distinct from GPT-5 mini and later Codex models.
- **Access / status:** `gpt-5.1-codex-mini`, native Responses API only; [official documentation](https://developers.openai.com/api/docs/models/gpt-5.1-codex-mini) currently marks it **Shut down**. Gateway `openai/gpt-5.1-codex-mini` listings do not independently guarantee current service. No verified Zen Free ID.
- **Release / cutoff:** November 2025; catalogs disagree on November 12/13. Official knowledge cutoff September 30, 2024.
- **Context / output:** Official 400,000 total/128,000 output. Secondary 272K figures likely describe usable input rather than total context; a 922K listing is unsupported by the primary specification.
- **Modalities / features:** Text/image input, text output, reasoning, tools, structured outputs and caching. No native audio/video support established.
- **Historical prices:** Official $0.25 input/$2 output/$0.025 cache read per million, retrieved 2026-10-27. These describe the documented service rather than a guaranteed current purchase option.

### Raw benchmarks and evidence quality

[BenchmarkList](https://benchmarklist.com/models/openai-gpt-5.1-codex-mini/) preserves independently sourced evaluation captures, but is an aggregator rather than another evaluator:

- AA-derived **Tau2 Telecom 62.9%**, **Terminal-Bench Hard 33.3%**, historical **GDPval-AA 1053 Elo**.
- **CCBench 42.2%**, a private small-codebase task-success benchmark. WebDev Arena **1243.35 Elo**, 1,133 votes; preference is not functional correctness.
- AA composite capture includes **GPQA 81.3%, HLE 16.9%, SciCode 42.6%, CritPt 0%, AA-LCR 62.7%, Omniscience −16.52**. Its composite **30.63** is a historical capture without an adequately established current suite mapping; not treated as a current comparable score.
- Separate benchmark rows show **HLE 18.5%**, **LCR 66.7%**, **MMLU-Pro 82.0%**, **AIME 2025 91.7%**. These are distinct captures/settings, not numbers to average with the composite snapshot.
- **Design Arena 1132 Elo**, 43% win rate over 309 battles, measures generated design preference; it is not an image-understanding accuracy test.

[AA's exact-model page](https://artificialanalysis.ai/models/gpt-5-1-codex-mini) identifies the **High** effort configuration. Aggregator snapshots do not establish identical budgets across every benchmark. An [n8n result](https://n8n.io/ai-benchmark/gpt-5-1-codex-mini/) appeared in search but returned 404 on retrieval; no score is claimed from it.

No verified exact-model SWE-bench, DeepSWE, Vibe Code Bench, Claw-Eval, Toolathon, MCP-Atlas, MMMU or high-recall full-window retrieval result recovered. Terminal Hard is not the full Terminal-Bench suite. The same underlying AA data repeated by comparison sites does not constitute independent replication.

### Normalized scores (1–100)

- **Tool use: 57/100.** Tau2 62.9 and TB Hard 33.3 support bounded workflows; broad autonomous work is less secure.
- **Reasoning: 69/100.** GPQA 81.3 and HLE roughly 17–19 support useful reasoning; CritPt zero and negative Omniscience limit confidence.
- **Context window: 78/100.** Official 400K with LCR approximately 63–67; no near-lossless retrieval evidence.
- **Multimodal: 62/100.** Native image input verified, but no quantitative visual-understanding evaluation recovered; text output only.
- **Coding: 64/100.** SciCode 42.6, CCBench 42.2 and terminal results support assistance rather than strong repository autonomy.
- **Cost efficiency: 94/100.** Historical $0.25/$2 and cache discounts are economical; shutdown makes availability a separate consideration.
- **Overall Score: 66/100.** (57 + 69 + 78 + 62 + 64) / 5 = 66.0 → 66. Budget coding specialist, assessed historically with moderate evidence confidence.

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra-ultrafast)** — 2026-10-27 UTC
- Method: Four targeted web searches, primary specification retrieval and independent-result aggregation review; all normalized scores are interpretations.
