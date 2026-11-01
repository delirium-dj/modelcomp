# Ling 2.6 Flash — findings by GPT-6 Luna

- Source: InclusionAI/Ling-2.6-flash
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 Flash
- **Short description:** InclusionAI's open-weight, fast-response agent model, optimized for token efficiency and frequent tool-using workloads. It is the non-reasoning Ling 2.6 Flash checkpoint, not its deeper-reasoning Ring sibling.
- **Provider / access:** Official weights at Hugging Face `inclusionAI/Ling-2.6-flash` and ModelScope. The upstream README documents OpenAI-compatible chat-completions serving through SGLang and vLLM; the hosted API provider list is not consistently available, so no first-party hosted endpoint is asserted.
- **Release / knowledge:** The official Hugging Face repository was created April 28, 2026; the Ling/Ring 2.6 technical report was submitted June 13, 2026. No exact training-data cutoff found.
- **IDs:** `inclusionAI/Ling-2.6-flash` (official weights); self-hosted deployments choose their own served model name. Do not confuse this with `Ling-2.6-flash-base` or Ring-2.6.
- **Context window:** 262,144 tokens in the official SGLang launch example, extended from 131,072 using YaRN. Artificial Analysis also records a 262K limit. No provider-independent output-token cap was verified.
- **Modalities:** Text in/text out; supports reasoning-mode configurations, function/tool calls, and JSON-style serving. No image, audio, or video input or non-text output.
- **Pricing (as of 2026-11-01):** MIT-licensed weights are free to download and self-host, subject to infrastructure costs. Hosted prices vary by provider; no official InclusionAI API price was verified.
- **Architecture:** 104B total / 7.4B active MoE, with hybrid 1:7 MLA plus Lightning Linear attention; upgraded from the Ling 2.0 base. MIT license. The card reports up to 340 tokens/s on 4× H20, a hardware-specific vendor measurement rather than a universal speed guarantee.

### Raw benchmarks found

The scores below are for the exact **Ling-2.6-flash** checkpoint and are read from InclusionAI's official evaluation charts. Its methodology notes that PinchBench values were taken from the official leaderboard as of April 20, 2026; Claw-Eval uses the March 25, 2026 leaderboard; TAU2-Bench uses v1.0.0 with minor Retail/Telecom prompt adjustments and GPT-5.2 as the user agent. Some comparisons in the charts are vendor internal runs; only Ling's own column is transcribed here.

Agent / tool use:

- BFCL-V4: **66.81**; TAU2-Bench: **76.36** overall, with Retail **71.49**, Airline **63.00**, and Telecom **94.96**.
- PinchBench: **81.30 average score / 88.10 best score**; Claw-Eval: **64.56 average score**.

Reasoning / knowledge:

- AIME 2026: **73.85**; HMMT-Feb26: **49.29**; IMO-AnswerBench: **54.28**; C-SimpleQA: **60.23**.
- IFBench: **57.40**; Multi-IF (turn 3): **74.80**. The official card says comparison values are internal except the explicitly sourced GPT-OSS-120B-low and GPT-5.4-mini non-reasoning rows.

Coding:

- SWE-bench Verified (openhands): **61.20%**.
- LiveCodeBench (August 2024–May 2025): **62.28%**.
- No exact-model Terminal-Bench result was verified in the official card.

Long context:

- MRCR (16K–256K): **75.93**. The evaluation spans the listed range; the chart does not provide a separate score for each tested input length.

### Normalized scores (1–100)

- **Tool use: 80/100.** TAU2-Bench 76.36, BFCL-V4 66.81, PinchBench average 81.30, and Claw-Eval 64.56 support strong practical tool use; prompt edits and vendor-collected scores limit cross-lab comparability. [Official model card](https://huggingface.co/inclusionAI/Ling-2.6-flash).
- **Reasoning: 64/100.** AIME 2026 at 73.85 and IFBench at 57.40 show useful but uneven general reasoning/instruction following; no exact-model GPQA or HLE figure was verified in the official card. [Official model card](https://huggingface.co/inclusionAI/Ling-2.6-flash).
- **Context window: 72/100.** The verified 262K limit falls in the 200K–500K tier, and MRCR is 75.93 across 16K–256K; the official chart does not isolate full-window accuracy. [Official model card](https://huggingface.co/inclusionAI/Ling-2.6-flash); [Artificial Analysis model page](https://artificialanalysis.ai/models/ling-2-6-flash).
- **Multimodal: 15/100.** The exact checkpoint is text-only. [Official model card](https://huggingface.co/inclusionAI/Ling-2.6-flash).
- **Coding: 68/100.** SWE-bench Verified at 61.20% and LiveCodeBench at 62.28% indicate competent code work; there is no verified Terminal-Bench result, and the SWE figure uses the OpenHands harness. [Official model card](https://huggingface.co/inclusionAI/Ling-2.6-flash).
- **Cost efficiency: 92/100.** MIT weights are free to self-host and the model is explicitly optimized for token efficiency, but 104B total parameters require substantial hardware and there is no verified first-party hosted price. [Official model card](https://huggingface.co/inclusionAI/Ling-2.6-flash); [technical report](https://arxiv.org/abs/2606.15079).
- **Overall Score: 60/100.** Half-up mean of the five quality dimensions: (80 + 64 + 72 + 15 + 68) / 5 = 59.8 → 60. Cost is excluded. Best suited to text-only agent workloads prioritizing tool use and efficient output; it is not a multimodal model and its full-window reliability and terminal-coding performance remain unverified.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Three independent exact-model web searches, followed by direct checks of the InclusionAI Hugging Face model card and its embedded evaluation charts, the Ling/Ring technical report, and Artificial Analysis. Benchmark versions and harness caveats are retained; no scores from Ring-2.6, Ling base, or unrelated comparison models are transferred. Normalized scores are independent interpretations, not vendor scores.
- Reference URLs:
  - [Official InclusionAI Ling-2.6-flash checkpoint and model card](https://huggingface.co/inclusionAI/Ling-2.6-flash)
  - [Ling and Ring 2.6 technical report](https://arxiv.org/abs/2606.15079)
  - [Artificial Analysis Ling 2.6 Flash page](https://artificialanalysis.ai/models/ling-2-6-flash)
  - [Hugging Face model metadata](https://huggingface.co/api/models/inclusionAI/Ling-2.6-flash)
  - [Independent hardware/benchmark reference](https://www.fitmyllm.com/model/ling-2.6-flash-104b)

---
