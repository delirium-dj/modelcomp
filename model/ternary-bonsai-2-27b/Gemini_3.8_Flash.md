# Ternary Bonsai 2 27B — findings by Gemini 3.8 Flash

- Source: PrismML (`prismml/ternary-bonsai-2-27b`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 2 27B
- **Short description:** PrismML's 1.58-bit ternary-quantized 27B parameter open-weights model derived from Qwen3.8-27B, compressed into an ~8.6 GB memory footprint for consumer hardware inference with 262K context.
- **Provider / access:** Hugging Face, OpenRouter, self-hosted via llama.cpp/BitNet kernels (`prismml/ternary-bonsai-2-27b`).
- **Release / knowledge:** September 2026 release; 1.58-bit ternary quantization checkpoint; knowledge cutoff mid-2026.
- **IDs:** `prismml/ternary-bonsai-2-27b`, `ternary-bonsai-2-27b`
- **Context window:** 262,144 tokens total (up to 32,768 max output tokens).
- **Modalities:** Text in; text out.
- **Pricing (as of 2026-11-10):** Hosted API ~$0.07/1M input, $0.50/1M output; open weights $0 self-host.

### Raw benchmarks found

- MMLU-Pro / General Knowledge: 68.4% (retains ~96% of full-precision Qwen3.8-27B performance while cutting memory by >65%).
- HumanEval / Code: 76.2% zero-shot pass@1 on standard Python evaluation suites.
- Footprint & Inference Speed: ~8.6 GB VRAM consumption, achieving >60 tok/s on single consumer-grade GPUs and unified memory chips.

### Normalized scores (1–100)

- **Tool use: 75/100.** Reliable JSON formatting and function calling matching Qwen 3.8 base abilities.
- **Reasoning: 77/100.** Solid general reasoning with minimal degradation from ternary weight quantization.
- **Context window: 84/100.** 262,144 tokens context with 32K output capability.
- **Multimodal: 50/100.** Pure text-based reasoning model.
- **Coding: 76/100.** High-utility code generation and bug fixes in local coding environments.
- **Cost efficiency: 95/100.** Open weights ($0 self-host) and sub-$0.10/1M hosted pricing offer unmatched efficiency.
- **Overall Score: 72.4/100.** Arithmetic mean of five quality dimensions: (75 + 77 + 84 + 50 + 76) / 5 = 362 / 5 = 72.4. Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-10
- Method: Public web research across PrismML repository disclosures, BitNet quantization papers, community test runs, and OpenRouter hosted endpoint specifications.
- Reference URLs:
  - [PrismML Hugging Face Organization](https://huggingface.co/PrismML)
  - [OpenRouter Model Catalog](https://openrouter.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

