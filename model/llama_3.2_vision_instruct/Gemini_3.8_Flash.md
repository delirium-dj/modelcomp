# Llama 3.2 Vision Instruct — findings by Gemini 3.8 Flash

- Source: Meta / Llama (`meta/llama-3.2-11b-vision-instruct`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct (11B)
- **Short description:** Meta's lightweight multimodal open-weights model integrating visual cross-attention adapters into the Llama 3.1 core architecture for on-device and edge visual reasoning.
- **Provider / access:** HuggingFace open weights (`meta-llama/Llama-3.2-11B-Vision-Instruct`), Cloudflare Workers AI, Together AI, and DeepInfra.
- **Release / knowledge:** 2024-09-25 release; knowledge cutoff December 2023.
- **IDs:** `meta-llama/llama-3.2-11b-vision-instruct`. Open weights under Llama 3.2 Community License.
- **Context window:** 131,072 tokens total (128K context window).
- **Modalities:** Text and image input; text, code, and single-turn tool-calling output.
- **Pricing (as of 2024-09):** Open weights free ($0.00); hosted routes average ~$0.05 / 1M input, $0.68 / 1M output.
- **Architecture:** 10.6B dense parameter auto-regressive transformer with cross-attention vision adapter layers.

### Raw benchmarks found

Agent / tool use:

- Single tool-call format supported via system prompts.
- Terminal-Bench / Tau-bench: no verified public score found

Reasoning / knowledge:

- MMLU: **73.0%** (Meta official model card / Phaseo, Sep 2024)
- GPQA: **32.8%** (Meta official model card / Phaseo, Sep 2024)
- MATH: **51.9%** (Meta official model card / Phaseo, Sep 2024)
- MathVista: **51.5%** (Meta official model card / Phaseo, Sep 2024)
- Humanity's Last Exam: no verified public score found

Multimodal:

- DocVQA: **88.4%** (Meta official model card / Phaseo, Sep 2024)
- AI2D: **91.1%** (Meta official model card / Phaseo, Sep 2024)
- MMMU: **50.7%** (Meta official model card / Phaseo, Sep 2024)
- MMMU-Pro: **33.0%** (Meta official model card / Phaseo, Sep 2024)

Coding:

- HumanEval / general text coding: derived from Llama 3.1 8B text core (~65–70% pass@1).
- SWE-bench Verified: no verified public score found

Long context:

- 128K context window supported natively with GQA.

### Normalized scores (1–100)

- **Tool use: 48/100.** Basic single tool-call support without multi-step autonomous agent capabilities or verified agentic benchmark scores.
- **Reasoning: 52/100.** Modest reasoning capability consistent with an 11B parameter 2024 model (32.8% GPQA, 73.0% MMLU, 51.9% MATH).
- **Context window: 68/100.** 128K context window fits standard edge and single-GPU inference setups.
- **Multimodal: 68/100.** Solid visual document and chart reasoning (88.4% DocVQA, 50.7% MMMU), but restricted to static images (no video or audio).
- **Coding: 50/100.** Basic code generation capabilities inherited from the 8B-class Llama 3.1 base; lacks modern agentic SWE-bench validation.
- **Cost efficiency: 96/100.** Extremely cheap to host locally or call via Cloudflare Workers AI ($0.05 / $0.68 per 1M).
- **Overall Score: 57/100.** Capable lightweight edge vision model for document understanding and visual QA, though clearly superseded by 2025–2026 frontier reasoning models.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-26 UTC
- Method: Public internet research into Meta's official model cards, research papers, and hosted benchmark repositories; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
