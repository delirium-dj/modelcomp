# Gemini 3 Pro — findings by GPT 6 Sol

- Source: Google (`gemini-3-pro-preview`, November 2025 preview)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's November 2025 multimodal, thinking-enabled flagship for reasoning and creative/agentic development. Evaluate the original Pro preview separately from the later 3.1 Pro and enhanced 3 Pro Deep Think settings ([Google launch](https://blog.google/products-and-platforms/products/gemini/gemini-3/)).
- **Provider / access:** Google AI Studio/Gemini API and Vertex AI at launch under `gemini-3-pro-preview` ([Google announcement](https://blog.google/products-and-platforms/products/gemini/gemini-3/), [Vals exact preview-ID page](https://www.vals.ai/models/google_gemini-3-pro-preview)); OpenRouter/other hosts may use vendor-qualified routes. An `opencode/gemini-3-pro` live Zen route was **not** independently confirmed in the consulted current provider catalog; do not infer availability from the dataset name.
- **Release / knowledge:** November 18, 2025 ([Google](https://blog.google/products-and-platforms/products/gemini/gemini-3/)); [AA's preview record](https://artificialanalysis.ai/models/gemini-3-pro) indicates January 2025 knowledge cutoff. Preview status and hosting should be reconfirmed before production use.
- **IDs:** `gemini-3-pro-preview` is the exact model evaluated by Vals/AA; `google/gemini-3-pro` is this dataset's display/provider alias, not proof of an additional standalone API route or Deep Think run.
- **Context window:** Google launch states **1M**; [Vals](https://www.vals.ai/models/google_gemini-3-pro-preview) and [AA](https://artificialanalysis.ai/models/gemini-3-pro) agree on 1M / **65,536** output at the tested preview. A third-party 2M family claim is not substantiated for this specific route and is not used for scoring.
- **Modalities:** Text, image, audio, video and PDF input with text output on Google's model family ([Google announcement](https://blog.google/products-and-platforms/products/gemini/gemini-3/), [AA preview record](https://artificialanalysis.ai/models/gemini-3-pro)); reasoning/tool use, function calling and code execution via supported Google products. Gateway-specific inputs may be narrower.
- **Pricing (as of 2026-10-12):** [Vals](https://www.vals.ai/models/google_gemini-3-pro-preview) and [AA](https://artificialanalysis.ai/models/gemini-3-pro) list **$2 input / $12 output per 1M** for their evaluated hosted preview; provider and long-context tier may vary. No verified free Zen ID for this exact legacy preview; cost uses documented paid route.
- **Architecture:** Proprietary; parameter count undisclosed ([AA](https://artificialanalysis.ai/models/gemini-3-pro)).

### Raw benchmarks found

Cross-checked [Google's original Pro-vs-Deep Think launch](https://blog.google/products-and-platforms/products/gemini/gemini-3/) and the explicitly labeled later [Google 3.1 Pro comparison table](https://deepmind.google/models/gemini/pro/) with independent [Vals November preview evaluation](https://www.vals.ai/models/google_gemini-3-pro-preview), [AA's preview page](https://artificialanalysis.ai/models/gemini-3-pro) and [BenchLM's attributed table](https://benchlm.ai/models/gemini-3-pro). Only 3 Pro, not Deep Think/3.1, feeds scores.

Agent / tool use:

- [Google launch Terminal-Bench 2.0 **54.2%**](https://blog.google/products-and-platforms/products/gemini/gemini-3/) while [Vals independent Terminus-2 TB2.0 **55.06% ±5.30**](https://www.vals.ai/models/google_gemini-3-pro-preview); Google's [later same-harness comparison **56.9%**](https://deepmind.google/models/gemini/pro/) reflects an updated snapshot/harness and is not TB2.1.
- [Google 3.1-vs-3 Pro table](https://deepmind.google/models/gemini/pro/) lists original Pro **τ² Retail 85.3%**, **Telecom 98.0%**, **MCP Atlas 54.1%**, **APEX-Agents 18.4%**, **BrowseComp 59.2%**, **GDPval-AA 1195 Elo**. Distinct tests and future retrospective table; [BenchLM AA τ² **87.1%**](https://benchlm.ai/models/gemini-3-pro) is a separate AA aggregate.
- [Vals Vibe Code Bench v1.1 **14.30%**](https://www.vals.ai/models/google_gemini-3-pro-preview), underscoring that a strong science score does not imply robust autonomous app-building. Direct Terminal-Bench 4.0 / Tau3 Banking / Claw-Eval: no verified public exact-preview score found.

Reasoning / knowledge:

- [Google launch GPQA Diamond **91.9%**, HLE **37.5% without tools**](https://blog.google/products-and-platforms/products/gemini/gemini-3/); [Google later comparison ARC-AGI-2 **31.1%** original Pro, versus Deep Think **45.1%** in the launch](https://deepmind.google/models/gemini/pro/). Those are different configurations.
- [AA GPQA **90.8%**, HLE **39.7%**, CritPt **9.1%**, *estimated* Index **28**](https://benchlm.ai/models/gemini-3-pro) ([AA flags composite as an estimate](https://artificialanalysis.ai/models/gemini-3-pro)); independent [Vals GPQA **91.67%**, MMLU Pro **90.10%**](https://www.vals.ai/models/google_gemini-3-pro-preview).

Coding:

- [Google original SWE-bench Verified **76.2%**, TB2.0 **54.2%**](https://blog.google/products-and-platforms/products/gemini/gemini-3/); [Vals SWE-bench **76.40%**, LiveCodeBench **86.41%**, Vibe Code **14.30%**](https://www.vals.ai/models/google_gemini-3-pro-preview), showing large harness/task variance.
- [AA LiveCodeBench **91.7%**](https://benchlm.ai/models/gemini-3-pro) (separate harness), and Google's later table labels original Pro **SWE-Pro 43.3%**, **SciCode 56%** ([Google comparison](https://deepmind.google/models/gemini/pro/)); no verified exact original DeepSWE score found.

Long context / multimodal:

- Google's later comparison reports **MRCR v2 8-needle 77.0% at 128K**, **26.3% pointwise at 1M** for Gemini 3 Pro ([table with explicit original Pro column](https://deepmind.google/models/gemini/pro/)); [AA-LCR **76.0%**](https://benchlm.ai/models/gemini-3-pro)). Large native capacity does not imply reliable million-token recall.
- [Google launch MMMU-Pro **81.0%**, Video-MMMU **87.6%**](https://blog.google/products-and-platforms/products/gemini/gemini-3/); independent [Vals MMMU Pro **87.51%**](https://www.vals.ai/models/google_gemini-3-pro-preview), [AA MMMU-Pro **80.2%**](https://benchlm.ai/models/gemini-3-pro)). These are separate vision/video evaluation protocols.

### Normalized scores (1–100)

- **Tool use: 78/100.** TB2.0 ~54–57% and strong τ² Telecom 98% support tool use; MCP Atlas 54.1%, APEX 18.4% and Vibe Code 14.3% limit complex autonomy.
- **Reasoning: 86/100.** GPQA ~91%, HLE ~38–40% and MMLU 90% are strong, but ARC-AGI-2 31.1%, CritPt 9.1% and estimated AA Index 28 curb frontier breadth.
- **Context window: 95/100.** Native 1M context earns the top capacity band; MRCR pointwise 26.3% at 1M prevents a near-perfect retrieval score.
- **Multimodal: 95/100.** Google supports audio/video/image/PDF inputs and Video-MMMU 87.6%; text-only output and uncertain legacy host modality caps restrain 100.
- **Coding: 80/100.** SWE Verified ~76% and LiveCodeBench ~86% are useful, but SWE-Pro 43.3% and independent Vibe Code 14.3% flag less dependable multi-step builds.
- **Cost efficiency: 63/100.** Tested paid preview $2/$12 is serviceable for broad multimodality but high versus newer economical models; no verified $0 Zen route.
- **Overall Score: 87/100.** (78 + 86 + 95 + 95 + 80) / 5 = 86.8, half-up 87; best for multimodal analysis at its original preview capability, with newer model/Deep Think scores kept separate.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-12
- Method: Fresh Google launch and explicitly labeled comparative results cross-checked against Vals, AA and benchmark provenance; scores are normalized interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
