# Qwen 3.7 — findings by Space Bunny Alpha

- Source: Alibaba/Qwen (`qwen3.7-max`; Qwen 3.7 Max route)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Max
- **Short description:** Alibaba's proprietary reasoning model for professional work, coding, tool use, and multilingual tasks. **Deprecated:** Artificial Analysis now flags Qwen3.7 Max as deprecated and superseded by **Qwen3.8 Max** (released August 2, 2026, AA Intelligence Index 47–58 depending on the index build). The repository slug `qwen-3.7` is treated as this exact Max model because the available model-card evidence is for Qwen3.7-Max.
- **Provider / access:** Alibaba Cloud Model Studio; independent route/provider ID `qwen3.7-max` / `Qwen3.7-Max`. The reviewed exact-model sources do not expose an OpenCode Zen free alias.
- **Release / knowledge:** BenchLM lists May 16, 2026; Vals lists May 20, 2026; AA reports a **56.6** Intelligence Index score at release (on the index version current at that time). **Knowledge cutoff: 2026-01** (previously reported as July).
- **IDs:** `qwen3.7-max`; source labels `Qwen3.7-Max`.
- **Context window:** 984K context and 66K maximum output (Vals); BenchLM reports 1M. Exact official output limit was not independently confirmed.
- **Modalities:** Text input and text output; reasoning and tool use supported. Vals explicitly reports no image, video, or file input for the evaluated model.
- **Pricing (as of 2026-09-29):** **$2.50 per 1M input, $0.50 per 1M cache read, and $7.50 per 1M output tokens** (Artificial Analysis; the $0.50 cache-read rate is confirmed by the Qwen3.8 launch reporting that Qwen3.7 Max's cache-hit price was $0.50 before being cut to $0.25 for 3.8). AA reports a blended 7:2:1 rate of ~$0.53 per 1M tokens and ~$0.53–$0.54 cost per Intelligence Index task. BenchLM says no comparable first-party rate is published.
- **Architecture:** Proprietary; parameter count not disclosed in the reviewed sources.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **69.7%** (BenchLM, provider-exact Qwen source)
- Terminal-Bench 2.1 (Vals AI): **61.0%** (BenchLM, Vals AI leaderboard)
- MCP Atlas: **76.4%** (BenchLM, provider-exact Qwen source)
- BFCL v4: **75.0%** (BenchLM, provider-exact Qwen source)
- Claw-Eval: **65.2%**; QwenClawBench: **64.3%** (BenchLM, provider-exact Qwen source)
- GDPval-AA, Tau3-Banking, Toolathon, and ClawProBench: **no verified public exact value found**
- Throughput / latency (AA, Alibaba Cloud first-party): output **205.2 tokens/s**; time to first answer token **2.31 s** (Artificial Analysis, accessed 2026-09-29)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **46**, rank **#52** of the models tracked on that view (Artificial Analysis, accessed 2026-09-29). The index version is now v4.3.2; the release-era figure of 56.6 was on an earlier build and is not comparable.
- GPQA Graduate-Level: **92.4%** (BenchLM, provider-exact Qwen source)
- GPQA-D: **89.3%** (BenchLM, Vals AI leaderboard)
- MMLU-Pro: **89.6%** provider-exact; **89.3%** Vals AI (BenchLM)
- HLE: **41.4%** no-tools; HLE with tools: **53.5%** (BenchLM, provider-exact Qwen source)
- SuperGPQA: **73.6%** (BenchLM, provider-exact Qwen source)
- LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- SWE-bench Pro: **60.6%** (BenchLM, provider-exact Qwen source)
- SWE-bench Verified: **80.4%** (BenchLM, provider-exact Qwen source)
- SWE-bench (Vals AI): **68.8%** (Vals AI, independent leaderboard)
- LiveCodeBench: **91.6%** provider-exact; **87.1%** Vals AI (BenchLM)
- SciCode: **53.5%** (BenchLM, provider-exact Qwen source)
- Vibe Code Bench: **52.9%** (Vals AI, Vals Index subset)
- NL2Repo: **47.2%** (BenchLM, provider-exact Qwen source)
- DeepSWE: **no verified public exact value found**

Long context:

- Native/reported context: **984K (Vals) / 1M (BenchLM)**. No independent MRCR/RULER retrieval-at-length result was found.

Sources consulted: [Artificial Analysis Qwen3.8 vs Qwen3.7 reporting](https://the-decoder.com/qwen3-8-max-catches-claude-opus-4-8-but-kimi-k3-still-scores-higher-for-25-percent-less/), [Artificial Analysis Qwen3.8 Max model pages and comparisons](https://artificialanalysis.ai/models/comparisons/qwen3-8-max-vs-qwen3-6-max), [Vals Qwen 3.7 Max](https://vals.ai/models/alibaba_qwen3.7-max), [BenchLM Qwen3.7 Max](https://benchlm.ai/models/qwen3-7-max), and [The Batch on Qwen3.8-Max](https://www.deeplearning.ai/the-batch/qwen3-8-max-lands-with-a-bang), accessed 2026-09-29. Provider-exact, Vals AI, and official Qwen rows are labeled separately; no peer findings were used.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 69.7%, MCP Atlas 76.4%, BFCL v4 75.0%, and Claw-Eval 65.2% provide strong tool evidence; missing GDPval/Tau3/Toolathon rows cap certainty.
- **Reasoning: 91/100.** GPQA 92.4%, MMLU-Pro 89.3–89.6%, SuperGPQA 73.6%, and HLE-with-tools 53.5% support strong reasoning; missing LCR/CritPt values prevent a higher score.
- **Context window: 95/100.** The model has a reported 984K–1M context, but no measured retrieval-at-length score was found.
- **Multimodal: 15/100.** Vals explicitly reports text-only input for this exact model, so the methodology's text-only floor applies.
- **Coding: 89/100.** SWE-bench Verified 80.4%, SWE-Pro 60.6%, LiveCodeBench 91.6%, and SciCode 53.5% provide strong coding evidence; harness and subset differences are substantial.
- **Cost efficiency: 82/100.** The $2.50 / $0.50 cache-read / $7.50 rate is below the largest frontier models and the ~$0.53 blended 7:2:1 rate is among the cheapest at its index level, but it is well above newer Flash/GLM routes and above the successor Qwen3.8 Max ($2.00 / $0.25 / $6.00).
- **Overall Score: 75.6/100.** (88 + 91 + 95 + 15 + 89) / 5 = 378 / 5 = 75.6. Best fit: text-only professional, coding, and multilingual agent workloads where 1M-class context matters; prefer the successor Qwen3.8 Max for new work, since Qwen3.7 Max is deprecated.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Artificial Analysis model and comparison pages, Vals and BenchLM model profiles, and contemporaneous launch reporting; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
