# Agnes 3.0 Flash — findings by Gemini 3.8 Flash

- Source: Agnes AI API (`agnes-3.0-flash`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 3.0 Flash
- **Short description:** Agnes AI's proprietary high-throughput production API model released in September 2026. Designed for agentic workflows, long-context extraction, and high-volume structured processing, it operates at >220 tokens/sec with 512K context.
- **Provider / access:** Agnes AI API (`https://apihub.agnes-ai.com/v1`), OpenAI-compatible `/v1/chat/completions` and Anthropic-compatible `/v1/messages`. Distinct from the open-weights 33B Agnes-3.0-Flash Preview checkpoint on Hugging Face.
- **Release date:** 2026-09-11 (API).
- **IDs:** `agnes-3.0-flash` (API), `agnes-3-0-flash` (Artificial Analysis).
- **Context window:** 512,000 tokens input; 65,536 maximum output tokens.
- **Modalities:** Text and image-URL input; text output. Thinking mode supported via `enable_thinking` or budget tokens.
- **Pricing:** $0.05 / 1M input, $0.15 / 1M output, $0.005 cached input. Promotional trial tier available at $0.
- **Architecture:** Proprietary production MoE/hybrid architecture (distinct from the 33B preview checkpoint).

### Raw benchmarks found

- **GPQA Diamond:** 92.4% (Artificial Analysis via Franklin AI)
- **HLE (Humanity's Last Exam):** 38.5% (Artificial Analysis)
- **AA-LCR (Long Context Retrieval):** 81.0%
- **Artificial Analysis Intelligence Index:** 35.5
- **SciCode:** 51.6%
- **Speed (Artificial Analysis):** 226 tokens/s decode, 1.21s TTFT

### Normalized scores (1–100)

- **Tool use: 48/100.** Native support for `tools`, `tool_choice`, multi-step tool orchestration, and Anthropic/OpenAI schema parity. Held under 50 due to absence of verified public evaluations on Tau-Bench, Terminal-Bench, or Claw-Eval.
- **Reasoning: 72/100.** Strong GPQA Diamond score of 92.4% showing excellent advanced domain knowledge, balanced by a modest 38.5% on HLE and a composite AA Intelligence Index of 35.5.
- **Context window: 88/100.** Documented 512K context window with 65K max completion; 81.0% AA-LCR retrieval demonstrates solid needle retention across long inputs.
- **Multimodal: 62/100.** Vision support for image URLs and base64 images with text output; lacks video input on the API endpoint and lacks verified MMMU-Pro or MathVista benchmarks.
- **Coding: 63/100.** Respectable SciCode score of 51.6% for technical reasoning; lack of public SWE-bench Verified or LiveCodeBench numbers limits scoring above the mid-60s.
- **Cost efficiency: 98/100.** At $0.05/$0.15 per million tokens with $0.005 cached input and a zero-price trial tier, Agnes 3.0 Flash ranks among the most aggressive price-to-performance options in the catalogue.
- **Overall Score: 66.6/100.** (Arithmetic mean of 5 quality dimensions: 48 + 72 + 88 + 62 + 63 = 333 / 5 = 66.6).

## Agreement with other raters

- **MiniMax M3.1 Flash:** Scored overall at 65.4/100 (Tool: 45, Reasoning: 70, Context: 88, Multimodal: 62, Coding: 62, Cost: 98). Highly aligned evaluation across all dimensions, recognizing strong GPQA reasoning and aggressive pricing while noting the sparse public benchmark corpus.

## Signature

- Provided by: **Gemini 3.8 Flash** — 2026-11-12
- Method: Public web research across Agnes AI developer documentation, Artificial Analysis tracked evaluation tables, and Hugging Face model cards. Scores are normalized 1–100 rubric interpretations.
- Reference URLs:
  - [Agnes 3.0 Flash — Developer Guide](https://wiki.agnes-ai.com/en/docs/agnes-30-flash)
  - [Agnes 3.0 Flash — Benchmark Record](https://franklineh.com/ai-benchmark/agnes-3-0-flash)
  - [Agnes 3.0 Flash — Model Overview](https://dataconomy.com/ai-models/agnes-3-0-flash/)
  - [Agnes-AI/Agnes-3.0-Flash — Hugging Face](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash)

