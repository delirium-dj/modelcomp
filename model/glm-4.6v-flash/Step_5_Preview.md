# GLM-4.6V-Flash — findings by Step 5 Preview

- Source: Zhipu AI / Z.ai (`glm-4.6v-flash`)
- Date: 2026-10-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.6V-Flash
- **Short description:** Zhipu AI's open-weights 9B lightweight vision-language model for local deployment — the small sibling of the 106B GLM-4.6V — with a 128K context window and MIT license.
- **Provider / access:** self-hostable, MIT-licensed weights at `huggingface.co/zai-org/GLM-4.6V-Flash`; models.dev records 7 providers at $0.00/$0.00. **Not listed on OpenRouter** and not in the OpenCode Console/Zen catalog. Recommended serving: vLLM or SGLang (HF snippets provided); quantization trees exist for llama.cpp, Ollama, LM Studio and Jan.
- **Release / knowledge:** released **2025-12-08** (models.dev, both release and updated dates). Knowledge cutoff not disclosed.
- **IDs:** `zai-org/GLM-4.6V-Flash` (Hugging Face); `zhipuai/glm-4.6v-flash` (models.dev).
- **Context window:** **128,000 tokens** (models.dev and the HF card, which says "128k tokens (in training)"). Max output 32,768. The upstream extraction harness was run with a 64K output budget.
- **Modalities:** **image in, text out** — HF pipeline tag `image-text-to-text`, architecture `glm4v`, BF16 tensors, MIT license. Reasoning model; tool calling and structured output both supported per models.dev.
- **Pricing (as of 2026-10-24):** **$0.00 / $0.00** per 1M across every provider models.dev lists, because the weights are open and self-hostable. Cost scored on self-hosting economics rather than a metered rate.
- **Architecture:** open weights, MIT license, ~9B parameters. **Conflicting size:** the HF model card calls it **9B** while the HF sidebar's "Model size" field says **10B params**. The sibling GLM-4.6V is **106B** per the card and README but **108B** per its HF sidebar — the same small discrepancy pattern, so the card's 9B figure is used and the sidebar's is recorded.

### Raw benchmarks found

Vision / multimodal:

- **llamaindex/ExtractBench (official HF eval results, vLLM, 64K output budget): Mean 45.19, Short 47.28, Medium 44.52.** This is the only benchmark with verified numbers for this exact model.
- Decoding parameters used for those results: `top_p` 0.6, `top_k` 2, `temperature` 0.8, `repetition_penalty` 1.1, `max_generate_tokens` 16K (HF eval-results metadata).
- MMMU / MMMU-Pro / OCRBench / MathVista / DocVQA / ChartQA: **no verified public score found as text.** Zhipu's own benchmark table for GLM-4.6V exists only as a JPEG (`resources/bench_46v.jpeg`) on GitHub and Hugging Face — the numbers are real but not machine-readable, and per the no-hallucination rule none is transcribed here. The README makes SoTA claims alongside that image without publishable figures.
- Roboflow / other independent vision evals: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public score found.
- HLE: no verified public score found.
- Artificial Analysis Intelligence Index: **no verified public score found** — AA has no page (404) and does not list this model.
- LCR / MLCR / CritPt: no verified public score found.

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found.
- LiveCodeBench: no verified public score found.
- SciCode / DeepSWE / Vibe Code Bench: no verified public score found.

Agent / tool use:

- Terminal-Bench (any version): no verified public score found.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA Elo: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas: no verified public score found.

Long context:

- MRCR / RULER / GraphWalks: no verified public score found. The 128K window is documented; no retrieval figure at any length was published.

Adoption signal (not a capability score):

- 80,952 downloads last month and 631 likes on the HF repo; the upstream `zai-org/GLM-V` repository has been unmaintained since 2026-09-02.

### Conflicts recorded (not silently resolved)

1. **Parameter count:** HF card says **9B**, HF sidebar says **10B**. The sibling GLM-4.6V shows the same pattern (card 106B vs sidebar 108B), so this looks like a systematic HF-sidebar rounding rather than two models. The card figure is used.
2. **Vendor benchmark table is image-only:** Zhipu's GLM-4.6V comparison chart is published solely as a JPEG, so MMMU/OCRBench and the rest cannot be verified as numbers. This is the single largest evidence gap in this file and is why the vision score is derived only from ExtractBench.
3. **Context window:** 128,000 in both models.dev and the HF card — no conflict, but note the extraction harness used only a 64K output budget, so the 128K figure is documented rather than exercised.

### Normalized scores (1–100)

- **Tool use: 45/100.** No verified public score found for Terminal-Bench, Tau3, GDPval-AA, the Coding Agents Index, Claw-Eval or Toolathon. Function calling and structured output are both supported per models.dev, and the HF extraction harness shows real tool-mediated document work, but at 9B scale nothing here supports a mid-band score. Provisional, capped low by missing evidence rather than by measured failure.
- **Reasoning: 45/100.** No verified public score found for GPQA, HLE, LCR, MLCR, CritPt or the AA Intelligence Index. The only measured signal is ExtractBench's Mean 45.19 (Short 47.28, Medium 44.52), a document-extraction benchmark rather than a reasoning benchmark, so it is used as a weak proxy and the reasoning score is pinned near it rather than extrapolated.
- **Context window: 62/100.** 128,000 tokens total with 32,768 max output sits in the methodology's 100K-200K band (50-64). No MRCR/RULER retrieval figure was published to test durability at that depth, so the score is mid-band rather than at the top.
- **Multimodal: 65/100.** Image in, text out, confirmed by the HF pipeline tag and architecture. That is the methodology's "+image in" band (60-70), and the score is placed in it without adjustment because Zhipu's own vision benchmark numbers (MMMU, OCRBench et al.) exist only as an unreadable JPEG. ExtractBench Mean 45.19 is the sole measured vision-adjacent figure and is neither strong enough to lift this nor weak enough to lower it below the modality floor.
- **Coding: 40/100.** No verified public score found for SWE-bench, LiveCodeBench, SciCode, DeepSWE, Vibe Code Bench or Terminal-Bench. This is the weakest evidence position in this file: for a 9B local model with zero published coding benchmarks, no defensible score above the bottom band is available, so it is placed just above it and flagged as provisional.
- **Cost efficiency: 100/100.** $0.00/$0.00 on every provider models.dev lists, with MIT-licensed weights so true self-hosting at zero license cost is possible. The methodology's rule is "$0 = 100", and the only discount against a full 100 is that self-hosting an 9B vision model still costs real GPU time — which is a compute cost, not a price, and therefore not scored here.
- **Overall Score: 51/100.** Mean of the five quality dims (45 + 45 + 62 + 65 + 40 = 257 ÷ 5 = 51.4, half-up → 51). Best fit: free, MIT-licensed, single-GPU-or-lower local document extraction and basic image-Q&A where a 128K window and $0 price matter more than measured quality. Worst fit: any task where a published benchmark exists for a competitor — for this model almost none do.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-24
- Method: public internet research across three independent source families (Zhipu's Hugging Face model card and its official eval-results block, models.dev's Zhipu catalog, and the zai-org/GLM-V GitHub README), with Artificial Analysis and OpenRouter both checked and found to carry no data; scores are normalized 1-100 interpretations, not official vendor scores.
- Research note: this is the thinnest evidence base of any model researched in this pass — exactly one benchmark (ExtractBench) has verified numbers, and Zhipu's own vision table exists only as a JPEG, so four of the five quality dimensions rest on "no verified public score found" rather than on measurements. Treat the Overall as provisional and re-rate as soon as machine-readable vision benchmarks appear.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
