# Qwen 3.5 4B — findings by DeepSeek 4.1 Flash

- Source: Alibaba/Qwen3.5-4B (`Qwen/Qwen3.5-4B`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 4B
- **Short description:** Alibaba's dense 4B multimodal Qwen 3.5 (Apache 2.0) with 262K native context (1M via YaRN), a Gated DeltaNet hybrid aimed at light tools/coding and local assistants.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-4B`), GGUF/Ollama quants; free hosted lane on SiliconFlow. No OpenCode Zen Free ID.
- **Release / knowledge:** 2026-03-02 per LLM-Stats; knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.5-4B`; Apache 2.0.
- **Context window:** 262,144 native, extensible to 1,010,000 via YaRN; 81,920 max output per provider rows.
- **Modalities:** text, image and video in; text out; reasoning mode; tool calling.
- **Pricing (as of 2026-10-23):** free Apache-2.0 weights; verified free hosted lane (SiliconFlow).
- **Architecture:** dense 4B vision-language model, Gated DeltaNet hybrid with a 3:1 linear-to-softmax attention ratio; Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- BFCL: **50.3%**; tau2-bench: **79.9%** (benchmarklist.com/models/qwen-qwen3.5-4b)
- Claw-Eval / MCP-Atlas / Terminal-Bench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **77.1%** (Epoch harness); GPQA: **76.2%**; MMLU-Pro: **79.1%**; MMLU-Redux: **88.8%**; C-Eval: **85.1%** (benchmarklist.com; llm-stats.com)
- IFEval: **89.8%** (benchmarklist.com)
- ALL Bench LLM composite: **35.1%** (60th percentile)

Coding:

- LiveCodeBench: **55.8%** (benchmarklist.com)
- SWE-bench Verified: **no verified public score found** (the tracker lists 0.0 = not run)
- DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:

- No MRCR/RULER/AA-LCR figure published for the exact ID; the 262K window is catalogue/HF-card stated only.

### Normalized scores (1–100)

- **Tool use: 55/100.** BFCL 50.3% and tau2-bench 79.9% show good function calling for 4B, but agentic terminal/desktop suites are absent (benchmarklist.com).
- **Reasoning: 70/100.** GPQA Diamond 77.1%, MMLU-Pro 79.1% and C-Eval 85.1% are strong at 4B, capped by the modest ALL Bench composite 35.1 (benchmarklist.com; llm-stats.com).
- **Context window: 62/100.** 262K native (1M via YaRN) earns mid-band credit; the absence of any retrieval benchmark keeps it from scoring higher (Hugging Face card).
- **Multimodal: 62/100.** Text+image+video input in open weights; no MMMU-class number was found for the exact ID.
- **Coding: 50/100.** LiveCodeBench 55.8% is solid, but SWE-bench Verified was not reported, which caps confidence (benchmarklist.com).
- **Cost efficiency: 98/100.** Apache-2.0 weights plus a verified free hosted lane — near the price floor.
- **Overall Score: 60/100.** Mean of the five quality dims (55+70+62+62+50)/5 = 59.8 → 60. Best-fit: local coding autocomplete, document Q&A and small tool-using assistants.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-23
- Method: public internet research (BenchmarkList model page, LLM-Stats model page, Hugging Face card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
