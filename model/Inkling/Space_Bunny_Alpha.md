# Inkling — findings by Space Bunny Alpha

- Source: Thinking Machines / Inkling
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines' open-weight multimodal MoE model for agentic applications, coding assistants, tool use, retrieval, and general text/image/audio conversation.
- **Provider / access:** Hugging Face `thinkingmachines/Inkling`; Tinker Playground/API; local SGLang, vLLM, TokenSpeed, Unsloth, and Hugging Face deployment.
- **Release / knowledge:** Model card comparisons were generated 2026-07-14; no verified exact release date or knowledge cutoff was found.
- **IDs:** `thinkingmachines/Inkling`; quantized variants include `thinkingmachines/Inkling-NVFP4`.
- **Context window:** The official model card does not state a single context limit in the reviewed text; no verified exact number is claimed here.
- **Modalities:** Text, image, and audio input; text output; image/video are encoded through a hierarchical patch encoder and audio through discrete token encoding. Native tool declarations and reasoning effort are supported by the model template.
- **Pricing (as of 2026-09-25):** Open weights are released under Apache 2.0; hosted Tinker/third-party prices were not verified in the reviewed sources.
- **Architecture:** Multimodal autoregressive transformer with 66 decoder layers, sparse MoE routing to 6 of 256 experts plus 2 shared experts, hybrid local/global attention, and 975B total / 41B active parameters; BF16 and NVFP4 are supported.

### Raw benchmarks found

> The official Thinking Machines model card reports Inkling at reasoning effort 0.99. All values below are the Inkling column from that table.

Agent / tool use:

- MCP Atlas: **74.1%**; Tau3 Banking: **23.7%**; Terminal-Bench 2.1 (best harness): **63.8** (official model card).
- SWE-bench Verified: **77.6%**; SWE-bench Pro public: **54.3%** (official model card).
- IFBench: **79.8%** (official model card).

Reasoning / knowledge:

- AIME 2026: **97.1%**; GPQA Diamond: **87.2%**; HLE text-only / with tools: **29.7% / 46.0%** (official model card).
- Global-MMLU-Lite: **88.7%**; BrowseComp with context: **77.1%** (official model card).
- SimpleQA Verified: **43.9%**; AA Omniscience: **1.0%** (official model card; the latter is a reported factuality metric, not a general knowledge score).

Coding:

- SWE-bench Verified: **77.6%**; SWE-bench Pro: **54.3%**; Terminal-Bench 2.1: **63.8** (official model card).
- No exact public LiveCodeBench, SciCode, or Aider result was found.

Long context:

- No exact-model long-context retrieval benchmark or verified context limit was found. The model's native multimodal processing and tool-oriented design do not substitute for a measured long-context result.

Multimodal:

- MMMU-Pro Standard 10: **73.5%**; CharXiv RQ: **78.1%**; CharXiv RQ with Python: **82.0%** (official model card).
- Audio MC: **56.6%**; MMAU: **77.2%**; VoiceBench: **91.4%** (official model card).

### Normalized scores (1–100)

- **Tool use: 86/100.** MCP Atlas at 74.1%, SWE-bench Verified at 77.6%, and Terminal-Bench at 63.8 show strong agent/coding execution; Tau3 Banking at 23.7% and missing broader tool benchmarks cap the score.
- **Reasoning: 87/100.** AIME 2026 at 97.1%, GPQA at 87.2%, and Global-MMLU-Lite at 88.7% are excellent; HLE and low AA Omniscience result reduce confidence in hard knowledge/factuality.
- **Context window: 50/100.** No verified exact context length or retrieval-at-length score was found, so the score reflects missing evidence rather than a measured short window.
- **Multimodal: 87/100.** Strong MMMU-Pro, CharXiv, audio, and voice results across text, image, and audio inputs demonstrate unusually broad multimodal capability.
- **Coding: 87/100.** SWE-bench Verified at 77.6%, SWE-bench Pro at 54.3%, and Terminal-Bench at 63.8 are strong; the lack of additional coding benchmarks prevents a top score.
- **Cost efficiency: 82/100.** Apache-2.0 weights and BF16/NVFP4 deployment options support flexible cost control, but the 975B model is hardware-intensive and hosted pricing was not verified.
- **Overall Score: 79/100.** A powerful open-weight multimodal agent/coding model with excellent contest reasoning and broad modalities; best for organizations able to operate large MoE infrastructure, with long-context evidence still incomplete.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-25
- Method: official Thinking Machines Hugging Face model card and model template; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Thinking_Machines_Inkling.md`, using the same headings.
