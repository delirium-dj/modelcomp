# Qwen 3.7 — findings by Space Bunny Alpha

- Source: Alibaba/Qwen (`qwen3.7-max`; Qwen 3.7 Max route)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Max
- **Short description:** Alibaba's proprietary reasoning model for professional work, coding, tool use, and multilingual tasks, now superseded by Qwen 3.8. The repository slug `qwen-3.7` is treated as this exact Max model because the available model-card evidence is for Qwen3.7-Max.
- **Provider / access:** Alibaba Cloud Model Studio; independent route/provider ID `qwen3.7-max` / `Qwen3.7-Max`. The reviewed exact-model sources do not expose an OpenCode Zen free alias.
- **Release / knowledge:** BenchLM lists May 16, 2026; Vals lists May 20, 2026. No reliable knowledge cutoff was shown.
- **IDs:** `qwen3.7-max`; source labels `Qwen3.7-Max`.
- **Context window:** 984K context and 66K maximum output (Vals); BenchLM reports 1M. Exact official output limit was not independently confirmed.
- **Modalities:** Text input and text output; reasoning and tool use supported. Vals explicitly reports no image, video, or file input for the evaluated model.
- **Pricing (as of 2026-09-24):** Vals reports $2.50 per 1M input and $7.50 per 1M output tokens; BenchLM says no comparable first-party rate is published. Pricing is source-specific and may reflect provider evaluation conditions.
- **Architecture:** Proprietary; parameter count not disclosed in the reviewed sources.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **69.7%** (BenchLM, provider-exact Qwen source)
- Terminal-Bench 2.1 (Vals AI): **61.0%** (BenchLM, Vals AI leaderboard)
- MCP Atlas: **76.4%** (BenchLM, provider-exact Qwen source)
- BFCL v4: **75.0%** (BenchLM, provider-exact Qwen source)
- Claw-Eval: **65.2%**; QwenClawBench: **64.3%** (BenchLM, provider-exact Qwen source)
- GDPval-AA, Tau3-Banking, Toolathon, and ClawProBench: **no verified public exact value found**

Reasoning / knowledge:

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

Sources consulted: [Vals Qwen 3.7 Max](https://vals.ai/models/alibaba_qwen3.7-max), [BenchLM Qwen3.7 Max](https://benchlm.ai/models/qwen3-7-max), accessed 2026-09-24. Provider-exact, Vals AI, and official Qwen rows are labeled separately; no peer findings were used.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 69.7%, MCP Atlas 76.4%, BFCL v4 75.0%, and Claw-Eval 65.2% provide strong tool evidence; missing GDPval/Tau3/Toolathon rows cap certainty.
- **Reasoning: 91/100.** GPQA 92.4%, MMLU-Pro 89.3–89.6%, SuperGPQA 73.6%, and HLE-with-tools 53.5% support strong reasoning; missing LCR/CritPt values prevent a higher score.
- **Context window: 95/100.** The model has a reported 984K–1M context, but no measured retrieval-at-length score was found.
- **Multimodal: 15/100.** Vals explicitly reports text-only input for this exact model.
- **Coding: 89/100.** SWE-bench Verified 80.4%, SWE-Pro 60.6%, LiveCodeBench 91.6%, and SciCode 53.5% provide strong coding evidence; harness and subset differences are substantial.
- **Cost efficiency: 82/100.** The reported $2.50/$7.50 rate is below the largest frontier models but above newer Flash/GLM routes; no first-party price was independently confirmed.
- **Overall Score: 75.6/100.** (88 + 91 + 95 + 15 + 89) / 5 = 75.6. Best fit: text-only professional, coding, and multilingual agent workloads where 1M-class context matters.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Vals and BenchLM model profiles; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
