# Qwen 3.7 Max — findings by GPT 5.6 Luna

- Source: Alibaba Cloud / Qwen3.7 Max
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Max
- **Short description:** Alibaba's proprietary agent model for coding, office automation, MCP, and long-horizon execution. The unqualified serving ID in this entry is the May 20 text-only snapshot.
- **Provider / access:** Alibaba Cloud Model Studio; API ID `qwen3.7-max`. The current documentation says this ID is functionally equivalent to `qwen3.7-max-2026-05-20`.
- **Release / knowledge:** May 20, 2026 snapshot/announcement; knowledge cutoff was not published.
- **IDs:** `qwen3.7-max` / `qwen3.7-max-2026-05-20` for this text-only entry. `qwen3.7-max-2026-06-08` is a separate vision snapshot and is not merged here.
- **Context window:** 1,000,000 tokens; maximum input 991,808 and maximum output 131,072, with a 983,616 maximum input in thinking mode.
- **Modalities:** May 20 snapshot: text input and text output, function calling, structured outputs, web search, and long-horizon agent workflows. The June 8 snapshot separately adds image and video input; those capabilities are excluded from this entry.
- **Pricing (as of 2026-11-02):** Alibaba's original list prices are $1.65 input / $4.951 output per 1M tokens in several regions, and $2.50 / $7.50 in Singapore international/US scopes; cache pricing and regional availability differ. These are the Model Studio rates for the documented ID.
- **Architecture:** Proprietary; parameter count and internal architecture were not published.

### Raw benchmarks found

> Qwen's benchmark announcement and the current unqualified Model Studio ID describe the May 20 text-only identity. The June 8 vision snapshot is documented below only as a separate identity, never as extra multimodal evidence for the May 20 entry.

Agent / tool use:

- Terminal-Bench 2.0-Terminus: **69.7%**; QwenClawBench **64.3%**; QwenWebBench **1568**; Claw-Eval **65.2%**; BFCL v4 **75.0%**; MCP Atlas **76.4%**; HLE with tools **53.5%** (Qwen announcement/BenchLM).
- τ²-Bench **94.7%**, Gert Labs **64.27%**, Terminal-Bench 2.1 (Vals) **61.0%**, and terminalBenchHard **50.8%** (independent/provider rows).
- BenchLM composite: **62.32/100**, rank **#45/1004**, with 62/724 benchmarks covered; coverage is explicitly partial.

Reasoning / knowledge:

- MRCRv2 **90.4%**, CritPt **13.4%**, and AA-LCR **79.0%**.
- GPQA / GPQA Diamond **92.4%**, HLE **41.4%**, MMLU-Pro **89.6%**, MMLU-Redux **95%**, and SuperGPQA **73.6%** (Qwen/BenchLM rows).

Coding:

- SWE-bench Verified **80.4%**, SWE-bench Pro **60.6%**, SWE Multilingual **78.3%**, NL2Repo **47.2%**, LiveCodeBench v6 **91.6%**, and Terminal-Bench 2.0 **69.7%** (Qwen announcement/BenchLM).
- SpreadSheetBench-v1: **87**; Qwen reports an autonomous kernel-optimization run lasting **35 hours** and exceeding **1,000 tool calls**. These are workflow demonstrations, not standardized capability scores.

Multimodal and snapshot distinction:

- The May 20 `qwen3.7-max-2026-05-20` documentation is text-only. The separate `qwen3.7-max-2026-06-08` snapshot supports text, image, and video input with text output; no June 8 visual benchmark is merged into this report.
- BenchLM's base profile exposes Design Arena Website **1274**, but it does not identify that row as a June 8 visual snapshot, so it is not used to override the exact API modality distinction.

Long context:

- Model Studio documents a **1M-token** window and Qwen reports MRCRv2 **90.4%**. The strong result supports long-horizon retrieval, though it does not establish multimodality for the May snapshot.

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.0 69.7%, MCP Atlas 76.4%, τ²-Bench 94.7%, and the 1,000+ tool-call workflow support excellent agent use; ResearchClawBench 18.7% and terminalBenchHard 50.8% cap robustness.
- **Reasoning: 88/100.** GPQA-D 92.4%, MRCRv2 90.4%, HLE 41.4%, and MMLU-Pro 89.6% are strong, while AA Intelligence Index 29.5%, CritPt 13.4%, and FrontierMath variation prevent a frontier score.
- **Context window: 95/100.** The 1M limit, 991,808 input allowance, and MRCRv2 90.4% are directly documented; no full-window failure analysis was found.
- **Multimodal: 15/100.** The exact May 20 serving ID is text-only. The June 8 vision snapshot is a distinct model version and cannot be used to raise this entry's multimodal score.
- **Coding: 90/100.** SWE-bench Verified 80.4%, LiveCodeBench v6 91.6%, SWE Multilingual 78.3%, and Terminal-Bench 69.7% show excellent coding-agent capability, with lower NL2Repo and AA coding rows as counterweights.
- **Cost efficiency: 70/100.** The $1.65/$4.951 regional list rate, or $2.50/$7.50 in Singapore, is reasonable for a 1M proprietary agent model but not unusually cheap.
- **Overall Score: 75.6/100.** Mean of the five quality dimensions `(90 + 88 + 95 + 15 + 90) / 5 = 75.6`; best fit is text-only long-horizon coding and office automation on the May snapshot, while vision workloads should select the separately documented June 8 version.

## Evidence notes

- `qwen3.7-max-2026-05-20` and `qwen3.7-max-2026-06-08` remain separate snapshots: the former is text-only, while the latter adds image/video input. The unqualified Model Studio ID is documented as the May 20 snapshot.
- BenchLM's 62.32 composite may represent the base family listing and has partial coverage; it is retained for context but does not override the snapshot-specific modality score.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current Alibaba Cloud Model Studio documentation, Qwen's Qwen3.7 announcement, BenchLM's October 29 profile, and labelled independent benchmark rows. The May 20 text-only and June 8 vision snapshots, API alias, regions, and benchmark versions were kept distinct; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Alibaba Cloud Qwen3.7 Max documentation](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-max)
  - [Qwen3.7 Max announcement](https://qwen.ai/blog?id=qwen3.7)
  - [BenchLM Qwen3.7 Max profile](https://benchlm.ai/models/qwen3-7-max)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
