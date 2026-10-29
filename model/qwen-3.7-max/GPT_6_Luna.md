# Qwen3.7-Max — findings by GPT-6 Luna

- Source: Alibaba/Qwen3.7-Max
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7-Max
- **Short description:** Alibaba's proprietary flagship model for agentic coding, office workflows, and long-horizon tasks. This report follows the current Model Studio ID `qwen3.7-max`, which Alibaba says is functionally equivalent to snapshot `qwen3.7-max-2026-05-20`. It does **not** use the later `qwen3.7-max-2026-06-08` snapshot's added image/video input.
- **Provider / access:** Alibaba Cloud Model Studio API; closed/proprietary weights. Exact model ID `qwen3.7-max`; function calling, structured outputs, web search, prefix completion, and context caching are supported (some capabilities vary by region).
- **Release / knowledge:** Qwen's official announcement is dated **May 20, 2026**. No exact training-data cutoff verified.
- **IDs:** `qwen3.7-max`; equivalent dated snapshot `qwen3.7-max-2026-05-20`. A distinct `qwen3.7-max-2026-06-08` snapshot adds visual modalities and is not the unversioned model reported here.
- **Context window:** **1,000,000 tokens**; maximum input **991,808** and maximum output **131,072**. In thinking mode, maximum input is 983,616, output is 131,072, and chain-of-thought limit is 262,144. Qwen reports MRCR-v2 at 128K, not a 512K+ retrieval score.
- **Modalities:** **Text input and text output only** for the current `qwen3.7-max` endpoint and its May 20 snapshot. The June 8 snapshot separately lists image, text, and video input; those capabilities are not transferred here. No audio or non-text output verified.
- **Pricing (as of 2026-10-29):** Alibaba's original Model Studio API price per 1M tokens depends on region: **$1.65 input / $4.951 output** for Beijing, Frankfurt, and the global US-Virginia endpoint; **$2.50 / $7.50** for Singapore international and US-only scope. Implicit cache input is $0.33 / $0.50 respectively; explicit cache read is $0.165 / $0.25. Promotional rates may differ. No free API tier verified.
- **Architecture:** Proprietary model; parameter count and architecture details are not disclosed in the exact model announcement or Model Studio page.

### Raw benchmarks found

Three independent public searches were followed by checks of Qwen's [May 20 announcement and benchmark table](https://qwen.ai/blog?id=qwen3.7), Alibaba's [exact Model Studio model documentation](https://www.alibabacloud.com/help/en/model-studio/qwen3-7-max), and the Together AI model listing as a secondary cross-check. Alibaba's current API docs explicitly map the unversioned route to the May 20 snapshot and describe it as text-only. The benchmark results below are Qwen-reported; methods and benchmark versions differ across rows.

Agent / tool use:

- Terminal Bench 2.0-Terminus: **69.7%**. Qwen's setup used the Harbor/Terminus-2 harness, a five-hour timeout, and averaged five runs; it is not Terminal-Bench 2.1.
- QwenClaw: **64.3%**; CoWorkBench: **67.2%**; ClawEval: **65.2%**; SkillsBench: **59.2%**; BFCL-V4: **75.0%**; MCP-Mark: **60.8%**; MCP-Atlas: **76.4%**; VITA-Bench: **47.9%**; SpreadSheetBench-v1: **87.0%**; QwenWorldBench: **57.3%**.
- Kernel Bench L3: **1.98x median speedup / 96% of scenarios faster than the reference**. Qwen also describes a separate ~35-hour kernel optimization run on unfamiliar PPU hardware; its reported 10.0x geometric-mean speedup is a vendor case study, not a standardized cross-model benchmark.
- No official Qwen-table GDPval-AA score verified.

Reasoning / knowledge:

- GPQA Diamond: **92.4%**; HLE: **41.4%** without tools and **53.5%** with tools; HMMT 2026 February: **97.1%**; IMOAnswerBench: **90.0%**; CritPT: **11.4%**; Apex: **44.5%**.
- MRCR-v2 128K: **90.4%**. Qwen says this is the 128K subset with eight needles; it is not evidence of 512K+ retrieval performance.

Coding:

- SWE-bench Verified: **80.4%**; SWE-bench Pro: **60.6%**; SWE-bench Multilingual: **78.3%**; SciCode: **53.5%**; NL2Repo: **47.2%**.
- Terminal Bench 2.0-Terminus: **69.7%** (same vendor figure as above); LiveCodeBench: **91.6%**. Qwen used its internal agent scaffold for the SWE series and Claude Code for NL2Repo; SWE-Pro tasks were corrected and baselines rerun on the refined benchmark.

Other reported results include MMLU-Pro **89.6%**, MMLU-Redux **95.0%**, SuperGPQA **73.6%**, IFEval **94.3%**, and IFBench **79.1%**.

Benchmark discrepancy: Together AI's model page repeats several Qwen figures but is internally inconsistent: its summary table lists GPQA **92.3%**, HLE **38%**, SciCode **49%**, and Terminal-Bench 2.1 **75%**, while a later embedded model-card section lists GPQA **92.4%**, HLE **41.4%**, and SciCode **53.5%**. Qwen's May 20 announcement reports the latter reasoning/coding values and Terminal Bench **2.0-Terminus 69.7%**. Together does not identify a run date or method for the differing table, so those values are preserved as a conflict and not substituted into the normalized scores. The later June 8 visual snapshot is also not used for the May 20 endpoint.

### Normalized scores (1–100)

- **Tool use: 89/100.** Strong official results across ClawEval 65.2%, MCP-Mark 60.8%, MCP-Atlas 76.4%, BFCL-V4 75%, and Terminal Bench 2.0-Terminus 69.7%. That terminal version differs from TB2.1, and no standard GDPval-AA score was found.
- **Reasoning: 94/100.** GPQA 92.4%, HLE 41.4% without tools, and HMMT 97.1% meet frontier-level evidence; HLE with tools is 53.5%. MRCR-v2 90.4% at 128K is useful but does not test 512K+ retrieval.
- **Context window: 95/100.** The API's default 1M context earns the top tier, but the available MRCR result is at 128K rather than 512K+, so the rubric's 100-point retrieval condition is not met.
- **Multimodal: 15/100.** The exact unversioned/May 20 model is text-only. Image/video support belongs to the distinct June 8 snapshot and is intentionally excluded.
- **Coding: 90/100.** SWE-bench Verified 80.4%, SWE-Pro 60.6%, SWE-Multilingual 78.3%, and SciCode 53.5% are strong; Terminal Bench 2.0-Terminus is not TB2.1, and SciCode is just below the rubric's 55% frontier reference.
- **Cost efficiency: 82/100.** First-party global prices of $1.65/$4.951 per million input/output tokens are above the rubric's low-cost reference; Singapore and US-only rates are higher. Cache discounts help, but region and routing affect the actual bill.
- **Overall Score: 77/100.** Half-up mean of the five quality dimensions (89, 94, 95, 15, 90 = 76.6), excluding cost. It has excellent reasoning, coding, agent, and long-context scores, but the exact tracked endpoint is text-only; multimodal scores from the later snapshot are not borrowed.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna-fast)** — 2026-10-29
- Method: Three independent public searches followed by the exact Qwen announcement and Alibaba Model Studio API documentation, with a secondary listing checked for conflicting figures. Scores are normalized 1–100 interpretations, not official vendor scores; snapshot identity, harness details, benchmark conflicts, and modality boundaries are retained.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
