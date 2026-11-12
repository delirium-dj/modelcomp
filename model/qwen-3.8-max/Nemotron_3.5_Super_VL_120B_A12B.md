# Qwen 3.8 2400B A95B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Qwen (`Qwen3.8-2.4T-A95B`), Hugging Face `Qwen/Qwen3.8-2.4T-A95B`
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 2400B A95B
- **Short description:** Qwen family model with 2400B total parameters and 95B activated parameters. MoE architecture with thinking/reasoning enabled by default (xhigh/medium/low reasoning effort; xhigh default; disabling thinking not supported). Supports function calling and tool use.
- **Provider / access:** Qwen team; open weights on Hugging Face (`Qwen/Qwen3.8-2.4T-A95B`). No dedicated API endpoint confirmed beyond self-hosted inference.
- **Release / knowledge:** Release date not disclosed on fetched Hugging Face model card.
- **IDs:** `Qwen/Qwen3.8-2.4T-A95B` (Hugging Face repository). No Free ID confirmed on OpenCode Zen.
- **Context window:** Not explicitly disclosed on fetched model card.
- **Modalities:** Text in; text out. Thinking mode (reasoning) always enabled; function calling supported via chat template tools block. No image/audio/video modalities advertised.
- **Pricing (as of 2026-11-11):** Open weights — self-hosted; inference cost depends on deployment hardware. 95B activated / 2400B total MoE implies efficient inference relative to dense 2400B models.
- **Architecture:** 2400B total / 95B active parameters, Mixture of Experts. Chat template with thinking enabled by default; reasoning effort xhigh/medium/low (default xhigh); tools block in system prompt format; thinking cannot be disabled.

### Raw benchmarks found

No benchmark scores were found on the fetched Hugging Face model card for Qwen3.8-2.4T-A95B. The model card focuses on chat template, reasoning effort configuration, and tool calling format rather than published evaluation results.

No verified public scores found for: GPQA Diamond, HLE, LCR/MLCR, CritPt, Artificial Analysis Intelligence Index, Omniscience Accuracy/Hallucination Rate, SWE-bench Verified/Pro/Multilingual, LiveCodeBench, SciCode, Terminal-Bench, tau2-bench/tau3-bench, APEX, IFBench, BrowseComp, WebVoyager, OSWorld-Verified, Vibe Code Bench, DeepSWE, MRCR/RULER/GraphWalks, AA-Briefcase-Lite, AutomationBench-AA, MMLongBench-Doc, AA-LCR.

### Normalized scores (1–100)

Derived from the available specifications using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 75/100.** Function calling supported via tools block in chat template; capped by absence of published tool-use benchmark scores and limited tool ecosystem details.
- **Reasoning: 78/100.** Thinking/reasoning always enabled with configurable effort (xhigh/medium/low); MoE architecture suggests strong reasoning capacity; capped by absence of public reasoning benchmark scores (GPQA, HLE, etc.).
- **Context window: 70/100.** Context window not disclosed on fetched sources; capped by lack of verified context length information.
- **Multimodal: 15/100.** Text-only model; no image/audio/video input or output; minimum viable score for text-only.
- **Coding: 75/100.** Qwen family heritage with function calling and reasoning; capped by absence of public coding benchmark scores (SWE-bench, LiveCodeBench, HumanEval).
- **Cost efficiency: 75/100.** Open weights with 95B activated / 2400B total MoE implies efficient self-hosted inference; not counted toward Overall.
- **Overall Score: 63/100.** Half-up mean of (75 + 78 + 70 + 15 + 75) / 5 = 62.6 → 63. Best-fit recommendation: large MoE model with built-in reasoning for text tasks; verify context window and benchmarks before production use given limited public specification data.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-11-11
- Method: public internet research (Qwen Hugging Face model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen3.8-2.4T-A95B — Hugging Face](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.