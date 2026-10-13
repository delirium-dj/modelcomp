# Grok 4.6 — findings by GPT 6 Sol

- Source: SpaceXAI/xAI (`grok-4.6`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** August 2026 upgrade to Grok 4.5 for long-running agents, interactive development and professional work; not the later Grok 4.7 snapshot ([xAI launch](https://x.ai/news/grok-4-6)).
- **Provider / access:** xAI API ID `grok-4.6`, Cursor/Grok Build and model gateways ([launch](https://x.ai/news/grok-4-6), [model spec](https://docs.x.ai/developers/models/grok-4.6)). The project `xai/grok-4.6` label is not proof of a free Zen tier. xAI's newer developer overview URL now redirects to Grok 4.7; use the pinned [4.6 model detail](https://docs.x.ai/developers/models/grok-4.6) for pricing/specs.
- **Release / knowledge:** August 12, 2026 ([xAI](https://x.ai/news/grok-4-6)); exact 4.6 training-data cutoff **not verified** in the reviewed 4.6 model spec.
- **IDs:** `grok-4.6` xAI; [Vals](https://www.vals.ai/models/grok_grok-4.6) `grok/grok-4.6`. `grok-4.6-fast` is a different serving-speed/billing configuration and should not be confused with a model capability change.
- **Context window:** [xAI](https://docs.x.ai/developers/models/grok-4.6) **500,000 tokens**; Vals lists 500K as max output but the actual per-request output allowance must be verified, rather than assume all 500K can be generated.
- **Modalities:** Text/image input → text output, reasoning low/medium/high/xhigh, function calls and structured output ([xAI](https://docs.x.ai/developers/models/grok-4.6)); no native audio/video I/O.
- **Pricing (as of 2026-10-13):** [xAI](https://docs.x.ai/developers/models/grok-4.6) **$2 input / $0.50 cached input / $6 output per 1M** for <200K prompts; **$4 / $1 / $12** when prompt reaches 200K, applied to **all request tokens**. Batch not supported; consumer free Grok Build promotion is not a free API route.
- **Architecture:** Proprietary; parameter count not disclosed ([AA](https://artificialanalysis.ai/models/grok-4-6)).

### Raw benchmarks found

Compared xAI's [high-effort launch table](https://x.ai/news/grok-4-6) with independent [Vals high](https://www.vals.ai/models/grok_grok-4.6), [AA high](https://artificialanalysis.ai/models/grok-4-6) and attributable [BenchLM](https://benchlm.ai/models/grok-4-6). xAI's launch index **61** reflects its contemporary AA index version; AA's current v4.3.2 index **44** is not a directly comparable drop in capability.

Agent / tool use:

- [xAI APEX-Agents **57.5%**, GDPval-AA v2 **1753 Elo**, Terminal-Bench v3.0 **26%**, AA-Briefcase **1577 Elo**](https://x.ai/news/grok-4-6). [Vals Terminal-Bench 2.1 **78.3%**, Finance Agent v2 **53.68% ±0.67**, Code Migration **44.57% ±4.48**, Harvey Legal Agent **15.83% ±2.65**, TB4.0 **17.17% ±1.34**](https://www.vals.ai/models/grok_grok-4.6).
- [AA Tau3 Banking **50.7%**, AutomationBench-AA **66.7%**](https://benchlm.ai/models/grok-4-6) (AA-attributed); TB2.1, TB3 and TB4 are **different** suites.

Reasoning / knowledge:

- [Vals GPQA Diamond **94.70% ±1.13**, MMLU Pro **89.40% ±0.30**, BioMysteryBench **72.22%**](https://www.vals.ai/models/grok_grok-4.6); [AA GPQA **94.9%**, HLE **42.9%**, CritPt **17.1%**, current Intelligence Index **44**](https://benchlm.ai/models/grok-4-6).
- [ARC Prize Grok 4.6 ARC-AGI-1 **87.0%**, ARC-AGI-2 **67.1%**, ARC-AGI-3 **2.1%**](https://arcprize.org/results/xai-grok-4-6) as attributed in [BenchLM](https://benchlm.ai/models/grok-4-6); version and effort must remain attached.

Coding:

- [xAI DeepSWE v1.1 **65.9%**, FrontierCode 1.1 Extended **61.3%**, CursorBench 3.2 **69.9%**](https://x.ai/news/grok-4-6); [Vals SWE-bench **95.60% ±0.92**, LiveCodeBench **88.22% ±0.94**, Vibe Code Bench v1.1 **76.24% ±3.82**, ProgramBench **1.00% ±0.70**](https://www.vals.ai/models/grok_grok-4.6). SWE-bench here must not be called SWE-bench Pro.

Long context / vision:

- [xAI 500K context](https://docs.x.ai/developers/models/grok-4.6); [AA-LCR **80.3%**](https://benchlm.ai/models/grok-4-6). A 500K-specific MRCR needle-retrieval percentage **not found** in reviewed sources; >200K token cost doubles.
- Image input confirmed by [xAI](https://docs.x.ai/developers/models/grok-4.6), but an independent 4.6-specific MMMU-Pro or video/audio score **no verified public score found**; text/image only.

### Normalized scores (1–100)

- **Tool use: 81/100.** TB2.1 78.3%, APEX 57.5% and professional work 1753 Elo support agents; TB4 17.2% and banking 50.7% cap harder use.
- **Reasoning: 87/100.** GPQA ~95%, HLE 42.9%, ARC-AGI-2 67.1% and AA Index 44 are strong, tempered by CritPt 17.1%.
- **Context window: 88/100.** 500K capacity and AA-LCR 80.3%, but no window-specific retrieval verification and ≥200K requests incur 2× cost.
- **Multimodal: 66/100.** Text/image input and text output without native audio/video; visual-specific benchmark sparse.
- **Coding: 87/100.** DeepSWE 65.9%, Vals LiveCodeBench 88.2% and Vibe Code 76.2%, moderated by TB4 17.2% and ProgramBench 1%.
- **Cost efficiency: 69/100.** $2/$6 with $0.50 cache read is moderate, but all-token long-prompt uplift doubles API spend.
- **Overall Score: 82/100.** (81 + 87 + 88 + 66 + 87) / 5 = 81.8, half-up 82; suited to visual coding and research agents under 200K prompts when harder terminal tasks are checked.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-13
- Method: Fresh xAI model detail/launch compared with independent Vals, AA and attributable ARC results; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
