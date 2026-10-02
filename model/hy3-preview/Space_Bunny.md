# Hy3 Preview — findings by Space Bunny Alpha

- Source: Tencent Hunyuan (`Hy3-preview`; open-weight preview)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent Hunyuan's preview MoE for reasoning, coding, and agent tasks, superseded by the full Hy3 release. This report covers the exact preview, not the later Hy3 checkpoint.
- **Provider / access:** Tencent Hunyuan open-source release and local OpenAI-compatible serving; repository metadata records the preview route. Self-hosted vLLM/SGLang deployment is expected for the open-weight checkpoint.
- **Release / knowledge:** BenchLM lists April 23, 2026. No reliable knowledge cutoff was found.
- **IDs:** `Hy3-preview`; exact provider route is not exposed in the current public model catalog.
- **Context window:** **256K** (BenchLM and repository metadata). Maximum output was not independently verified.
- **Modalities:** Text input/output; reasoning and tool calls supported in the model ecosystem. The preview model card used for this report did not expose verified image/video/audio input.
- **Pricing (as of 2026-09-24):** Self-hosting cost is workload-dependent; no comparable first-party API token price was found for the preview.
- **Architecture:** Open-weight MoE. The exact preview parameter count is not verified in the reviewed source; do not substitute the later Hy3 295B/21B specification.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54.4%** (BenchLM, provider-exact Tencent Hy3-preview model card)
- Gert Labs Composite Game Benchmark: **36.91%** (BenchLM, exact Gert Labs row)
- Toolathlon, GDPval-AA, Tau3-Banking, Claw-Eval, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- GPQA Graduate-Level: **87.2%** (BenchLM, provider-exact Tencent Hy3-preview model card)
- GPQA-D / GPQA Diamond: **87.2%** (BenchLM, provider-exact model-card source)
- HLE, LCR/MLCR, CritPt, MMLU-Pro, and hallucination metrics: **no verified public exact value found**

Coding:

- SWE-bench Verified: **74.4%** (BenchLM, provider-exact Tencent Hy3-preview model card)
- SWE-Pro, LiveCodeBench, DeepSWE, SciCode, and Vibe Code Bench: **no verified public exact value found**

Long context:

- Native/reported context: **256K** (BenchLM and repository metadata). No independent retrieval-at-length score was found.

Sources consulted: [BenchLM Hy3 Preview](https://benchlm.ai/models/hy3-preview) and the [official Tencent Hunyuan Hy3 repository](https://github.com/Tencent-Hunyuan/Hy3), accessed 2026-09-24. The repository's full-Hy3 specifications are not used as preview facts.

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench 54.4% and Composite Game 36.91% are the only surfaced agent measures; missing Tau/GDPval/Toolathlon/MCP values cap the score.
- **Reasoning: 75/100.** GPQA 87.2% is strong, but HLE/MMLU/LCR/CritPt values are absent and the profile has only six benchmark rows.
- **Context window: 72/100.** A verified 256K context places it in the 200K–500K tier; retrieval quality was not measured.
- **Multimodal: 15/100.** No verified preview-model image/video/audio input is exposed; text-only is the conservative classification.
- **Coding: 70/100.** SWE-bench Verified 74.4% is useful, but no SWE-Pro, LiveCodeBench, DeepSWE, or SciCode values were found.
- **Cost efficiency: 75/100.** Open weights avoid a fixed API token price, but self-hosting hardware and the absence of a comparable first-party rate make this a moderate estimate.
- **Overall Score: 59.4/100.** (65 + 75 + 72 + 15 + 70) / 5 = 59.4. Best fit: historical comparison of open-weight reasoning/coding models; prefer the full Hy3 release for new deployments.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of the provider-exact BenchLM profile and official Tencent Hy3 repository; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
