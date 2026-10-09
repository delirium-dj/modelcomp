# Gemma 4 26B A4B — findings by LongCat 2.5 Preview

- Source: Google DeepMind/gemma-4-26B-A4B
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google DeepMind's Mixture-of-Experts model from the Gemma 4 family — 25.2B total parameters but only 3.8B active per token, delivering near-31B quality at roughly the speed of a 4B dense model. Open weights under Apache 2.0. Supports text, image, and video input.
- **Provider / access:** Hugging Face (`google/gemma-4-26B-A4B`, `google/gemma-4-26B-A4B-it`), Ollama (`gemma4:26b`), OpenRouter (free tier), Google AI Studio (free tier), DeepInfra, Cloudflare, Novita, Clarifai. OpenAI-compatible API.
- **Release / knowledge:** 2026-04-02/03.
- **IDs:** `google/gemma-4-26B-A4B` (base), `google/gemma-4-26B-A4B-it` (instruction-tuned)
- **Context window:** 262,144 tokens (256K) — verified via Hugging Face, Ollama, DeepInfra, Kilo.
- **Modalities:** Text, Image, Video input; Text output. Reasoning: yes (explicit thinking mode). Tool calling: yes (native function calling, structured outputs).
- **Pricing (as of 2026-10-09):** ~$0.04–0.13/1M input, ~$0.22–0.40/1M output (Kilo $0.04/$0.22, DeepInfra $0.07/$0.34, ApX $0.10/$0.34). Free tier on Google AI Studio and OpenRouter. Apache 2.0 open weights.
- **Architecture:** 25.2B total / 3.8B active MoE, 30 layers, 128 experts with 8 active + 1 shared per token, sliding window 1024, vocabulary 262K, vision encoder ~550M parameters. Hybrid local + global attention with p-RoPE.

### Raw benchmarks found

Agent / tool use:

- TAU2-bench: **43.6%** (AI Flash Report)
- TerminalBench-Hard: **13.6%** (AI Flash Report)
- Function calling: supported (Hugging Face, Google AI docs)
- Structured outputs: supported (Kilo)
- Agentic Index (ApX): **0.11 / #95**

Reasoning / knowledge:

- AIME 2026 (no tools): **88.3%** (Google model card — vs Gemma 4 31B 89.2%, Gemma 4 12B 77.5%, Gemma 3 27B 20.8%)
- GPQA Diamond: **82.3%** (Google model card) / **79.2%** (AI Flash Report)
- MMLU Pro: **82.6%** (Google — vs Gemma 4 31B 85.2%, Gemma 4 12B 77.2%)
- HLE: **17.2%** (BenchLM) / **18.3%** (AI Flash Report)
- Intelligence Index (ApX): **0.13 / #187**
- Intelligence Index (CloudPrice): **20.4 / #163**
- IF-Bench: **72.4%** (AI Flash Report)

Coding:

- LiveCodeBench v6: **77.1%** (Google model card — vs Gemma 4 31B 80.0%, Gemma 4 12B 72.0%)
- Codeforces ELO: **1718** (Google model card — vs Gemma 4 31B 2150, Gemma 4 12B 1659)
- SciCode: **40.0%** (AI Flash Report)
- LiveCodeBench Reasoning: **55.7%** (AI Flash Report)
- Coding Index (ApX): **0.39 / #110**

Long context:

- Context window: **262,144 tokens** (256K) — verified via Hugging Face, Ollama, DeepInfra
- LCR (CloudPrice): **0.4 / #272**

Multimodal:

- MMMU-Pro: **73.8%** (Google model card — vs Gemma 4 12B 69.1%)
- Text, Image, Video input (Hugging Face, Kilo)
- Multimodal & Grounded (BenchLM): **44.2–45.2 / #43/50**

### Normalized scores (1–100)

- **Tool use: 62/100.** TAU2 43.6%, TerminalBench Hard 13.6%. Native function calling + structured outputs. Below average on agentic benchmarks, similar to 12B variant.
- **Reasoning: 75/100.** AIME 2026 88.3%, GPQA 82.3%, MMLU Pro 82.6%, HLE 17.2%. Strong reasoning for an open MoE, approaching 31B quality. Good math and science performance.
- **Context window: 82/100.** 256K token context. Good long-context capability, though LCR (#272) is below average.
- **Multimodal: 75/100.** Text, Image, Video input. MMMU-Pro 73.8%. Good multimodal understanding, better than 12B variant.
- **Coding: 72/100.** LiveCodeBench v6 77.1%, Codeforces ELO 1718. Good coding for open weights, trails 31B variant.
- **Cost efficiency: 95/100.** ~$0.04-0.13/$0.22-0.40 per 1M tokens — extremely affordable. Free tier on Google AI Studio and OpenRouter. Apache 2.0 open weights. Exceptional value.
- **Overall Score: 73/100.** Mean of Tool (62), Reasoning (75), Context (82), Multimodal (75), Coding (72) = 366/5 = 73.2 → 73. Excellent value open-weight MoE with near-31B quality at 3.8B active parameters. Outstanding cost efficiency.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
