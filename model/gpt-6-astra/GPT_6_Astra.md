# GPT-6 Astra — findings by GPT 6 Astra

- Source: OpenAI/GPT-6 Astra (`gpt-6-astra`).
- Date: 2026-10-09 (UTC); refresh of the 2026-09-25 report, explicitly authorized by the user.
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** GPT-6 Astra, paid proprietary reasoning model for coding, research and document workflows. Parameters and architecture details are undisclosed.
- **Provider / access / IDs:** OpenAI API `gpt-6-astra`; project/Zen alias `opencode/gpt-6-astra`. Chat Completions and Responses are documented. The current [Chat Completions reference](https://developers.openai.com/api/reference/resources/chat/subresources/completions/methods/create) explicitly demonstrates function calls with this ID. The old assertion that all tool calling requires Responses is withdrawn; hosted tools are separately documented for Responses.
- **Release / knowledge:** September 2026 release; April 30, 2026 knowledge cutoff. The previous September 3 release date is retained as historical, not independently date-verified in this refresh.
- **Context window:** 1,050,000 total tokens; 128,000 maximum output. Separate input-only ceiling unverified.
- **Modalities:** Text/image input, text output; native audio/video unsupported. Reasoning efforts low through max, function calling and Structured Outputs supported. [Official model documentation](https://developers.openai.com/api/docs/models/gpt-6-astra). PDF input is supported through file handling, not a separate native output modality. [File-input documentation](https://developers.openai.com/api/docs/guides/file-inputs).
- **Pricing, October 9:** Standard USD per million tokens: input $10, output $50, cached read $1, cache write $12.50. Above 272K input, full-request prices become $20/$75/$2/$25 respectively. Batch/Flex are half Standard; Fast is twice Standard. [Official pricing](https://developers.openai.com/api/docs/pricing). No free API tier verified. These are token prices, not all-in tool costs.

### Raw benchmarks found

Fresh retrieval does not imply a new model checkpoint or a newly run benchmark. Each result retains its effort, harness and version; ranks describe the retrieved leaderboard snapshot.

**Agent / tool use**

- **GDPval-AA v2.1: 1542 Elo; AutomationBench-AA: 68%; AA-Briefcase v1.1: 1569; Terminal-Bench 4.0: 59%.** Artificial Analysis, `max`, displayed precision. [Direct evaluator comparison](https://artificialanalysis.ai/models/comparisons/gpt-6-astra-high-vs-gpt-6-astra).
- **Terminal-Bench 2.1:** the benchmark publisher's indexed page exposes **87.4% ±1.8%, Codex/high**. However, directly opening that URL returned an empty client-rendered table labeled 4.0. This is an indexed-source lead, not a fully page-verified replacement for the historical 87.3% mirrored Vals result; neither is treated as a measured improvement. [Publisher](https://www.tbench.ai/?version=2.1).
- **SWE Atlas Codebase QnA: 59.14 ±4.88%, rank 3**, Codex/xHigh*, on Scale's current board. Preserve the publisher's asterisk; its exact qualifier was not exposed in the retrieved text. This does not establish regression from the prior AA/Codex 62% snapshot, which used a different source/configuration. [Scale leaderboard](https://labs.scale.com/leaderboard/sweatlas-qna).
- **MCP Atlas:** no exact Astra row found in the retrieved [official leaderboard](https://labs.scale.com/leaderboard/mcp_atlas). Claw-Eval, ClawProBench, Toolathlon and fresh tau2/tau3 results: no verified public score found in this pass.
- **OSWorld 2.0: 72.6%**, vendor offline configuration; not interchangeable with live-network or differently graded variants. [Vendor evaluation](https://openai.com/index/gpt-6-astra/).

**Reasoning / knowledge**

- **GPQA Diamond: 96.0%; HLE with tools: 57.2%.** OpenAI best-reported effort, research/API setups, not guaranteed production ChatGPT results. [Vendor evaluation](https://openai.com/index/gpt-6-astra/).
- **HLE: 55%; AA-LCR v1.1: 81%; CritPt: 32%; AA-Omniscience index: 43.** AA/max; HLE tools are not specified in the comparison. Omniscience index is neither accuracy nor hallucination rate. CritPt was flagged under review in the prior report; this refresh did not establish that the concern was resolved. [AA comparison](https://artificialanalysis.ai/models/comparisons/gpt-6-astra-high-vs-gpt-6-astra).
- **AA Intelligence Index v4.3.2: 53, rank 7/226** in the page's comparison class. Same score as September 25; changed rank/cohort does not mean a capability decline. [AA model page](https://artificialanalysis.ai/models/gpt-6-astra).
- Fresh MLCR aggregate, Omniscience accuracy and hallucination-rate results: no verified public score found. Prior snapshot values are retained below rather than presented as current.

**Coding**

- **SWE-Bench Pro V2 Full: 96.90 ±1.10%, rank 4; Hard: 90.20%, rank 3**, Codex/high. This fills a numerical gap in the old report. V2 uses a refreshed split and locked protocol; do not relabel these as SWE-bench Verified or original SWE-Pro. [Scale Full](https://labs.scale.com/leaderboard/swe_bench_pro_public_v2?tab=full), [Scale Hard](https://labs.scale.com/leaderboard/swe_bench_pro_public_v2?tab=hard).
- **DeepSWE v1.1: 74.1%; Terminal-Bench 4.0: 57.9%; AA Coding Agent Index v1.4: 67.0**, as reported by OpenAI. Vendor results use maximum reported effort; the coding index is not the earlier AA index snapshot. [Vendor evaluation](https://openai.com/index/gpt-6-astra/).
- **SciCode: 56%**, AA/max. [AA comparison](https://artificialanalysis.ai/models/comparisons/gpt-6-astra-high-vs-gpt-6-astra).
- **Vibe Code Bench v1.1: 89.59%, rank 7**, OpenHands, publisher update October 7. Score unchanged from the old report; rank changed. This is not Vibe Code Bench 1–100. [Vals leaderboard](https://www.vals.ai/benchmarks/vibe-code).
- **SWE-bench Verified / standalone LiveCodeBench:** no verified public score found. The [official LiveCodeBench page](https://livecodebench.github.io/leaderboard.html) did not expose an exact-model row; inconsistent aggregator entries were not promoted into evidence.

**Long context**

- **MRCR v2, eight needles: 100.0% at 256K–512K; 96.3% at 512K–1M.** Vendor results reconfirmed; these test ranges do not establish perfect retrieval at the maximum context. [Official evaluation](https://openai.com/index/gpt-6-astra/).

### Normalized scores (1–100)

- **Tool use: 88/100.** Reconfirmed GDPval, automation and computer-use results support the prior tier; unresolved generalized-tool coverage caps confidence.
- **Reasoning: 94/100.** Reconfirmed GPQA/HLE and unchanged AA index support the prior score; factual reliability and long-context reasoning remain limitations.
- **Context window: 99/100.** Verified million-token capacity and retrieval; 96.3% in the longest tested range remains below the 98% threshold for 100.
- **Multimodal: 80/100.** Image/PDF input with text output; no native audio/video support.
- **Coding: 92/100.** Newly verified SWE-Pro V2 strengthens evidence for the existing tier; distinct benchmark versions and harder task failures do not justify an automatic increase.
- **Cost efficiency: 30/100.** Standard $10/$50 pricing remains at the project's paid-cost anchor; long-input costs are higher.
- **Overall Score: 90.6/100.** (88 + 94 + 99 + 80 + 92) / 5 = 90.6; cost excluded. All normalized scores unchanged after independent re-evaluation.

## Comparison with the September 25 report

| Item | Previous finding | October 9 finding / interpretation |
|---|---|---|
| SWE-Pro | Numerical result unverified | V2 Full 96.90 ±1.10 and Hard 90.20, Codex/high; gap filled |
| Function calling | Required Responses | Current official Chat Completions example supports functions; corrected |
| SWE Atlas QnA | AA/Codex 62% | Scale/Codex xHigh* 59.14 ±4.88%; separate configurations, no trend claim |
| AA Intelligence Index | 53, rank 6/211 | 53, rank 7/226; score unchanged |
| Vibe Code v1.1 | 89.59%, mirrored rank 4 | 89.59%, direct publisher rank 7; score unchanged |
| Coding Agent Index | AA September 9 snapshot 62 | Vendor currently cites v1.4 67.0; version/source change, not a like-for-like gain |
| Context, pricing, GPQA, MRCR, DeepSWE | Previously reported | Reconfirmed from primary sources |
| Overall | 90.6 | 90.6; better evidence without score inflation |

Historical values not independently refreshed: tau3 Banking 41.4% (September 22 mirror); MLCR accuracy among judged responses 98.3% (not overall pass rate); Omniscience accuracy 62.6% and hallucination rate 51% (separate snapshots); BenchLM aggregate 88.69; AA/Codex DeepSWE 68% and Coding Agent Index 62 (September 9). These are preserved only as the previous report's claims, not current verified inputs. Old cross-model rank claims without renewed primary evidence are retired.

Remaining gaps: standalone LiveCodeBench, SWE-bench Verified, MCP Atlas, Claw/Toolathlon, current tau3, and comparable MLCR/factuality metrics. Search absence is not zero performance.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09
- Method: User-authorized refresh of this reporter's existing file; fresh public primary-source research and comparison with its September 25 findings. No peer reports or local model tests. Scores are interpretations, not official benchmark scores. Historical claims and indexed-only leads are labeled separately.
