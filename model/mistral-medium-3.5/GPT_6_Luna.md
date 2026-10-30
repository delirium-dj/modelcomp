# Mistral Medium 3.5 — findings by GPT-6 Luna

- Source: Mistral/Mistral Medium 3.5 (`mistralai/mistral-medium-3-5`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral's dense 128B open-weight merged model for instruction-following, reasoning, coding and telecom agents; the exact model card records a 256K-class context and multimodal image input.
- **Provider / access:** Mistral API/model route `mistralai/mistral-medium-3-5`; Hugging Face `mistralai/Mistral-Medium-3.5-128B`; OpenRouter and Puter gateways. Chat Completions support is documented; no OpenCode Zen Free ID is verified.
- **Release / knowledge:** Released 2026-10-06; knowledge cutoff not published in the reviewed sources.
- **IDs:** `mistralai/mistral-medium-3-5` and `mistralai/Mistral-Medium-3.5-128B`.
- **Context window:** 256,000 tokens (some hosted listings round this to 256K; one benchmark source reports 128K); maximum output is reported as 256K by the collected model metadata.
- **Modalities:** Text and image input; text output; reasoning and tool calling supported; structured output documented by hosted routes.
- **Pricing (as of 2026-10-30):** $1.50 / 1M input, $7.50 / 1M output, $0.15 cached input; batch $0.75/$3.75; no verified Zen Free route. Self-hosting is available under the reported Modified MIT weights.
- **Architecture:** Dense 128B open-weight merged model; exact training lineage is described as a merge in the curated metadata.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis GDPval-AA: **760.86 Elo**; Tau2: **94.15%**; Tau3-Banking: **15.05%**; Terminal-Bench 2.1: **50.56%**; AutomationBench partial: **6.30%** (Artificial Analysis exact-model page).
- No verified exact-model Claw-Eval, Toolathlon or MCP-Atlas result was located.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **14**; GPQA: **74.85%**; HLE: **13.76%**; AA-LCR: **69.33%**; IFBench: **68.78%**; CritPt: **0%** (Artificial Analysis exact-model page).
- Omniscience Accuracy / Hallucination Rate: **24.67% / 81.59%** (Artificial Analysis).

Coding:

- SWE-bench Verified: **77.6%** (Mistral model card); AA-SciCode: **40.16%**; Terminal-Bench 2.1: **50.56%** (Artificial Analysis).
- No exact-model LiveCodeBench result was verified.

Long context:

- 256K-class advertised window; AA-LCR **69.33%**. No MRCR/RULER curve was verified.

Multimodal:

- MMMU-Pro: **64.86%** (Artificial Analysis); text and image input, text output.

### Normalized scores (1–100)

- **Tool use: 62/100.** Tau2 is high, but the 15.05% Tau3-Banking, 6.30% AutomationBench and 760.86 GDPval results cap general tool use.
- **Reasoning: 62/100.** The exact-model AA index 14, HLE 13.76% and CritPt 0% outweigh the useful 74.85% GPQA and 69.33% LCR.
- **Context window: 70/100.** A 256K-class window reaches the 200K-to-500K tier, but the 69.33% LCR and absent MRCR/RULER result prevent a higher placement.
- **Multimodal: 70/100.** Image input is verified and MMMU-Pro is 64.86%; there is no verified audio/video input or output benchmark.
- **Coding: 68/100.** Mistral reports 77.6% SWE-bench Verified, while AA SciCode 40.16% and Terminal-Bench 50.56% keep this in the mid band.
- **Cost efficiency: 86/100.** $1.50/$7.50 is mid-to-high paid pricing; batch and self-host options improve value but do not make the hosted route cheap.
- **Overall Score: 66.4/100.** Half-up mean of the five non-cost quality dimensions: (62 + 62 + 70 + 70 + 68) / 5 = 66.4. Cost efficiency is excluded. Best fit is multimodal instruction and telecom work, not frontier agentic coding.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30 UTC
- Method: Public web research using Mistral model documentation, the exact Hugging Face card and Artificial Analysis exact-model measurements; scores remain normalized interpretations. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Source 1](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)
  - [Source 2](https://mistral.ai/pricing)
  - [Source 3](https://docs.mistral.ai/models/model-cards/mistral-medium-3-5-26-04)
  - [Source 4](https://artificialanalysis.ai/models/mistral-medium-3-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
