# MiniMax-M3.1-Flash — findings by GPT 6 Sol

- Source: MiniMax (`MiniMax-M3.1-Flash`; weights `MiniMaxAI/MiniMax-M3.1-Flash`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax-M3.1-Flash. The folder's historical `-preview` suffix is not evidence for an additional checkpoint: the [vendor API](https://platform.minimax.io/docs/guides/text-generation) and [weights](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) use the unsuffixed M3.1-Flash ID. Do not rate the former stealth serving name or reasoning-effort levels separately.
- **Provider / access:** MiniMax first-party API, open [Community License weights](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash/blob/main/LICENSE) (commercial conditions apply). Released October 2026. Thinking is mandatory; `low` through `max` are effort settings of the same checkpoint, with `max` the API default ([MiniMax](https://platform.minimax.io/docs/guides/text-generation)).
- **Context and modalities:** Up to **1,000,000 tokens**; text, image and video **input**, text output ([official card](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash), [API docs](https://platform.minimax.io/docs/guides/text-generation)). [Vals](https://www.vals.ai/models/minimax_MiniMax-M3.1-flash) lists 524K max output metadata but actually tested at **262K** output budget; do not claim a near-1M retrieval proof from the window size.
- **Pricing (2026-11-01):** MiniMax API **$0.15 input / $0.60 output / $0.015 cached read per million tokens**, plus hosting costs for the freely downloadable weights ([vendor price table](https://platform.minimax.io/docs/guides/pricing)). Long thinking can make per-task expense much greater than the token rate suggests.
- **Architecture and parameter-count reconciliation:** MiniMax's [official model card](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) explicitly specifies **approximately 428B logical parameters / 23B active** with sparse MoE attention, quantization-aware training and an included speculative decoding head. Hugging Face's same-repository sidebar says **220B params**; the released [config](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash/resolve/main/config.json) declares mixed **MXFP8/NVFP4 packed** quantization, and other converted listings show ~426–427B. The sidebar is an automated count of packed stored tensors, not a separate 220B dense checkpoint or the vendor's logical parameter count. No independently audited exact count was established.

### Raw benchmarks found

- **Agents and tools:** The [vendor card](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) reports BankerToolBench **76.2**, Automation-Bench v1.0.6 **62.8**, Agents' Last Exam Overall **29.6** and OSWorld 2.0 **61.7** under its specified harnesses. Independent [Vals](https://www.vals.ai/models/minimax_MiniMax-M3.1-flash), running the *first-party API at `max`*, reports Finance Agent v2.1 **58.83% ±2.07**, Tax Agent **32.14% ±3.34**, and HLAB-Vals-1.1 **7.50% ±2.27**. These evaluate different tasks; the low HLAB score cautions against extrapolating the vendor's long-horizon result.
- **Reasoning:** Vendor [HLE without tools **43.4%**](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) is its *text-only subset of 2,158 items*, not a full-HLE number. Independent [Artificial Analysis Intelligence Index v5 **29**](https://artificialanalysis.ai/models/minimax-m3-1-flash) is an index, **not** 29% accuracy; [Vals Index **53.78% ±1.07**](https://www.vals.ai/models/minimax_MiniMax-M3.1-flash) uses its own task mix. Both support strong but uneven broad capability.
- **Coding:** Vendor [DeepSWE v1.1 **73.7%**, NL2Repo **61.2%**, SWE Refactor Bench **23.0**, Terminal-Bench 4.0 **38.1%**](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) use separately disclosed agent scaffolds. Independent [Vals Vibe Code Bench v1.1 **73.94% ±4.25** and Terminal-Bench 4.0 **25.25% ±1.01**](https://www.vals.ai/models/minimax_MiniMax-M3.1-flash), also at `max`, do **not** reproduce the vendor's TB4 figure; different harness, task selection, and budget may matter, but no verified single cause resolves that **12.85-point** gap. Preserve both measurements with attribution rather than choosing the higher one.
- **Long context / vision:** Vendor [LOCA-Bench 256K **60.3**, BabyVision with tools **91.0**, CharXiv RQ **82.5**](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) support some long-input and image tasks, but LOCA evaluates 256K, not 1M; BabyVision permits tools. [Artificial Analysis](https://artificialanalysis.ai/models/minimax-m3-1-flash) tested text/image input and 1M listed context, while the first-party card additionally documents video input; do not mistake AA's narrower tested inputs for a vendor assertion that video is unsupported.

### Normalized scores (1–100)

- **Tool use: 74/100.** Strong vendor automation and OSWorld results, tempered by independently lower HLAB and finance-agent outcomes.
- **Reasoning: 78/100.** HLE text subset, AA Index 29 and independent Vals Index 53.78; incompatible scales remain distinct.
- **Context window: 82/100.** 1M supported with 256K LOCA result, but no independently established 1M retrieval reliability.
- **Multimodal: 76/100.** Image/video input with vendor visual benchmarks; text-only output and limited independent video testing.
- **Coding: 78/100.** DeepSWE 73.7 and Vals Vibe Code 73.94, discounted for the unresolved TB4 harness gap and weak refactoring score.
- **Cost efficiency: 85/100.** Low first-party tariff and open weights, offset by a 428B-class serving footprint and unusually high verbosity ([AA](https://artificialanalysis.ai/models/minimax-m3-1-flash) reports 160M output tokens in its Index run).
- **Overall Score: 78/100.** Half-up mean (74 + 78 + 82 + 76 + 78) / 5 = 77.6; cost excluded.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Separate model/dataset/space web searches, direct official model-card/config/API/pricing review and independent Vals and Artificial Analysis evaluations. Resolved the 220B versus 428B display discrepancy as packed-storage versus logical MoE capacity without assigning a fictitious second checkpoint; kept benchmark harness disagreements explicit.
- Reference URLs:
  - [MiniMax official model card, benchmarks and architecture](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash)
  - [Official quantized model config](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash/resolve/main/config.json)
  - [MiniMax model invocation and modalities](https://platform.minimax.io/docs/guides/text-generation)
  - [MiniMax first-party pricing](https://platform.minimax.io/docs/guides/pricing)
  - [Vals M3.1-Flash independent evaluation](https://www.vals.ai/models/minimax_MiniMax-M3.1-flash)
  - [Artificial Analysis M3.1-Flash profile](https://artificialanalysis.ai/models/minimax-m3-1-flash)
- Future sources: add a new file next to this one using the same headings.
