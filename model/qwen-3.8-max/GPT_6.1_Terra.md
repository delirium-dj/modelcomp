# Qwen3.8 Max — findings by GPT-6.1 Terra

- Source: Alibaba / Qwen3.8 Max
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Max
- **Short description:** Alibaba's proprietary multimodal reasoning model. Provider snapshots can differ; Artificial Analysis explicitly labels its result `0902`.
- **Provider / access:** OpenRouter Chat Completions `qwen/qwen3.8-max-0902` ([OpenRouter](https://openrouter.ai/qwen/qwen3.8-max)); Vals reports its Qwen 3.8 Max evaluation separately.
- **Release / knowledge:** Vals lists initial model release 2026-08-03; Artificial Analysis dates its `0902` snapshot 2026-09-02. Knowledge cutoff not verified.
- **IDs:** OpenRouter `qwen/qwen3.8-max-0902`; exact Vals snapshot is not specified on its model page.
- **Context window:** Vals lists 1M and 128K maximum output; Artificial Analysis lists 984K context for `0902`, so limits are deployment-specific.
- **Modalities:** Text and image input, text output according to [Artificial Analysis](https://artificialanalysis.ai/models/qwen3-8-max); reasoning and tool calls supported.
- **Pricing (2026-11-01):** Artificial Analysis lists Alibaba $2 input / $6 output per million tokens for `0902`; rates can vary by provider.
- **Architecture:** Proprietary, parameter counts undisclosed per Artificial Analysis.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 4.0 **34.34% ± 3.94**, CyberBench v1.1 **28.57% ± 3.31** ([Vals](https://www.vals.ai/models/alibaba_qwen3.8-max)); exact snapshot is unspecified.
- Terminal-Bench 2.1, tau2-Bench and MCP-Atlas: no exact-model score verified here.

Reasoning / knowledge:

- Vals GPQA Diamond **93.69% ± 1.22**, ProofBench v1.1 **58.00% ± 4.96** ([Vals](https://www.vals.ai/models/alibaba_qwen3.8-max)).
- Artificial Analysis Intelligence Index v5 **34** for the explicitly labeled `0902` snapshot ([Artificial Analysis](https://artificialanalysis.ai/models/qwen3-8-max)).
- HLE and CritPt: no exact percentage verified here.

Coding:

- Vals SWE-bench **85.60% ± 1.57**, LiveCodeBench **87.85% ± 0.95**, Vibe Code Bench v1.1 **64.70% ± 5.36**, and Code Migration **23.96% ± 4.31** ([Vals](https://www.vals.ai/models/alibaba_qwen3.8-max)).
- SciCode: no exact score verified here.

Long context:

- Vals lists 1M; Artificial Analysis lists 984K for `0902`. No exact-model MRCR or RULER retrieval percentage verified here.

### Normalized scores (1–100)

- **Tool use: 85/100.** Vals terminal performance supports capable agent use, tempered by low CyberBench and snapshot uncertainty.
- **Reasoning: 86/100.** Strong GPQA contrasts with more moderate proof and composite scores; sources may measure different snapshots.
- **Context window: 93/100.** The verified `0902` 984K context falls in the 500K–1M tier; Vals' round 1M figure is deployment-dependent.
- **Multimodal: 68/100.** Image input is documented; audio/video input and non-text output are not credited.
- **Coding: 85/100.** SWE-bench and LiveCodeBench are strong but Vibe Code and migration scores are substantially lower.
- **Cost efficiency: 82/100.** $2/$6 per million offers paid midrange pricing, though measured output verbosity raises task costs.
- **Overall Score: 83/100.** (85 + 86 + 93 + 68 + 85) / 5 = 83.4, rounded to 83; verify snapshot and context limits for the intended provider.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Snapshot-specific and unspecified-snapshot measurements are explicitly distinguished.
- Reference URLs:
  - [Vals independent evaluations](https://www.vals.ai/models/alibaba_qwen3.8-max)
  - [Artificial Analysis 0902 snapshot](https://artificialanalysis.ai/models/qwen3-8-max)
  - [OpenRouter 0902 route](https://openrouter.ai/qwen/qwen3.8-max)
- Future sources: add a new file next to this one using the same headings.
