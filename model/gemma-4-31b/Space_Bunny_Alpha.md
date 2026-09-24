# Gemma 4 31B — findings by Space Bunny Alpha

- Source: Google (`google/gemma-4-31B-it`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B (instruction-tuned)
- **Short description:** Google's open-weight, 31B dense multimodal model for reasoning, coding, function calling, and local/edge deployment.
- **Provider / access:** Hugging Face `google/gemma-4-31B-it`; Transformers, vLLM, and compatible local runtimes. Provider inference routes are listed by Hugging Face but vary.
- **Release / knowledge:** Hugging Face repository metadata shows creation on 2026-03-11; the canonical chat-template metadata is dated 2026-07-09. Google model-card citation identifies the Gemma 4 technical report as 2026. Training-data cutoff: **January 2025** (Google model card).
- **IDs:** `google/gemma-4-31B-it`; base model `google/gemma-4-31B`.
- **Context window:** **256K tokens** (Google model card and BenchLM, verified 2026-09-24). Exact maximum output was not shown.
- **Modalities:** Text and image input; text output. Thinking can be enabled with the documented control token; native function calling is supported. The 31B table lists text/image, not audio, for this variant.
- **Pricing (as of 2026-09-24):** No fixed first-party API price was shown. Self-hosting has infrastructure cost; provider prices vary. The model is not treated as free merely because it is open-weight.
- **Architecture:** Dense **30.7B** total parameters; 60 layers; hybrid local/global attention with a 1024-token sliding window; ~550M vision encoder parameters; Apache-2.0 weights/license.

### Raw benchmarks found

Agent / tool use:

- Tau2 (average over 3): **76.9%** (Google Gemma 4 model card table, 31B column)
- Native function calling and reasoning/tool workflow support are documented; no separate exact Terminal-Bench, Toolathlon, or MCP-Atlas score was found.

Reasoning / knowledge:

- GPQA Diamond: **84.3%** (Gemma 4 Hugging Face model-card eval result)
- MMLU-Pro: **85.2%** (Gemma 4 Hugging Face model-card eval result)
- AIME 2026 no tools: **89.2%** (Google Gemma 4 model-card table, 31B column)
- HLE no tools: **19.5%**; HLE with search: **26.5%** (Google Gemma 4 model-card table, 31B column)
- LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- LiveCodeBench v6: **80.0%** (Google Gemma 4 model-card table, 31B column)
- AIME/math and general model-card results are not substituted for SWE-bench, DeepSWE, SciCode, or Vibe Code Bench.
- SWE-bench Verified / SWE-Pro, DeepSWE, SciCode, and Vibe Code Bench: **no verified public exact value found**

Long context:

- MRCR v2, 8-needle, 128K: **66.4% average** (Google Gemma 4 model-card table, 31B column)
- Native context: **256K tokens** (Google model card and BenchLM)

Sources consulted: [Google Gemma 4 model card](https://ai.google.dev/gemma/docs/core/model_card_4), [Gemma 4 31B Hugging Face model card](https://huggingface.co/google/gemma-4-31b-it), and [BenchLM Gemma 4 31B profile](https://benchlm.ai/models/gemma-4-31b), accessed 2026-09-24. Table values are attributed to the 31B column and are not mixed with the 26B A4B or smaller variants.

### Normalized scores (1–100)

- **Tool use: 73/100.** Tau2 76.9% and native function calling provide credible agent evidence, but no exact Terminal-Bench, Toolathlon, or MCP score was found.
- **Reasoning: 76/100.** AIME 2026 89.2%, GPQA 84.3%, and MMLU-Pro 85.2% are strong, while HLE 19.5% without tools and 26.5% with search are substantially lower; missing LCR/CritPt values cap the score.
- **Context window: 82/100.** The 256K context is verified and MRCR 128K 66.4% is a direct retrieval result, placing the model in the 200K–500K tier rather than the top 500K+ tier.
- **Multimodal: 90/100.** Google explicitly lists text/image input with text output, variable image resolution, and visual document/chart strengths; audio is not listed for the 31B variant.
- **Coding: 76/100.** LiveCodeBench v6 80.0% is useful, but exact SWE-bench, DeepSWE, SciCode, and Vibe Code Bench results are unavailable.
- **Cost efficiency: 88/100.** Open weights and self-hosting avoid a mandatory vendor token price, while the 31B dense model still has substantial compute requirements; provider prices vary.
- **Overall Score: 79.4/100.** (73 + 76 + 82 + 90 + 76) / 5 = 79.4. Best fit: self-hosted multimodal reasoning and coding where an Apache-2.0 31B model and image understanding matter more than frontier tool scores.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Google's official Gemma 4 model card, the exact Hugging Face model card, and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
