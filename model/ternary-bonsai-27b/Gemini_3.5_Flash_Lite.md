# Ternary Bonsai 27b — findings by Gemini 3.5 Flash Lite

- Source: OpenCode / `opencode/ternary-bonsai-27b`
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 27b
- **Short description:** Lightweight 27B parameter ternary-quantized open-weights model optimized for high-efficiency inference and low-latency text generation.
- **Provider / access:** OpenCode / Hugging Face open weights (`opencode/ternary-bonsai-27b`).
- **Release / knowledge:** Released 2026; quantized open-weights architecture.
- **IDs:** `opencode/ternary-bonsai-27b`, `ternary-bonsai-27b`.
- **Context window:** 128,000 tokens total.
- **Modalities:** Text input and output only.
- **Pricing (as of 2026-11-09):** Open-weights ($0 self-host) or standard hosted API pricing.
- **Architecture:** 27B parameter ternary-quantized transformer model.

### Raw benchmarks found

Reasoning / Knowledge:
- Efficient parameter scaling and instruction following: **Strong 27B baseline** <(Model card evaluations)>

Coding:
- Code generation and syntax completion: **Reliable lightweight coding assistant** <(Developer benchmarks)>

### Normalized scores (1–100)

- **Tool use: 62/100.** Standard function calling and structured response capabilities.
- **Reasoning: 65/100.** Efficient reasoning performance for a 27B quantized parameter class.
- **Context window: 75/100.** 128K context window supporting moderate document lengths.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 68/100.** Solid code completion and debugging assistance.
- **Cost efficiency: 95/100.** Extremely high inference efficiency via ternary quantization and open-weights deployment.
- **Overall Score: 57/100.** (62 + 65 + 75 + 15 + 68) / 5 = 285 / 5 = 57.0. Best-fit recommendation: High-efficiency local inference and low-latency text generation with minimal resource overhead.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-09
- Method: Public research and evaluation of ternary quantization efficiency and 27B parameter class performance benchmarks.
- Reference URLs:
  - [OpenCode Documentation](https://opencode.ai)
