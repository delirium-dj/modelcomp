# Qwen 3.5 2B — findings by DeepSeek 4.1 Flash

- Source: Alibaba/Qwen3.5-2B (`Qwen/Qwen3.5-2B`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 2B
- **Short description:** Alibaba's dense 2B multimodal Qwen 3.5 (Apache 2.0) with 262K native context, positioned for single-GPU and laptop deployment; a distinct family member, not an alias of the 0.8B or 4B tiers.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-2B`), GGUF via unsloth/Ollama; free hosted lanes available. No OpenCode Zen Free ID confirmed.
- **Release / knowledge:** Qwen 3.5 generation (early 2026); exact date not published in the sources found. Knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.5-2B`; Apache 2.0.
- **Context window:** 262,144 native — Hugging Face card.
- **Modalities:** text, image and video in; text out; thinking/non-thinking modes; tool calling.
- **Pricing (as of 2026-10-23):** free Apache-2.0 weights; cheapest hosted route $0.00/$0.00.
- **Architecture:** dense ~2B Gated DeltaNet hybrid decoder; Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- BFCL-V4: **43.6%**; TAU2-Bench: **48.8%** (huggingface.co/Qwen/Qwen3.5-2B)
- TAU2-Bench Telecom: **69.0%** (Artificial Analysis via benchgecko.ai)
- Claw-Eval / MCP-Atlas / Terminal-Bench: **no verified public score found**

Reasoning / knowledge:

- MMLU-Pro: **55.3%** (non-thinking) / **66.5%** (thinking); MMLU-Redux: **69.2%**; SuperGPQA: **37.5%**; GPQA: **51.6%** (huggingface.co/Qwen/Qwen3.5-2B)
- HMMT Feb 25: **22.9%**; HMMT Nov 25: **19.6%**; AA GPQA Diamond: **45.6%**; MMMU-Pro: **43.0%** (Hugging Face card / benchgecko.ai)

Coding:

- LiveCodeBench / SWE-bench Verified: **no verified public score found** for the 2B ID

Long context:

- AA-LCR: **25.6%**; LongBench v2: **38.7%** (huggingface.co/Qwen/Qwen3.5-2B). MRCR/RULER: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 40/100.** BFCL-V4 43.6%, TAU2-Bench 48.8% and TAU2 Telecom 69.0% are usable for light function calling, but the missing agentic suites cap it (huggingface.co/Qwen/Qwen3.5-2B; benchgecko.ai).
- **Reasoning: 55/100.** GPQA 51.6% and thinking-mode MMLU-Pro 66.5% are respectable for 2B, while HMMT ~20% and SuperGPQA 37.5% show the depth limit (Hugging Face card).
- **Context window: 55/100.** 262K native, but AA-LCR 25.6% and LongBench v2 38.7% mean only moderate effective retrieval (Hugging Face card).
- **Multimodal: 52/100.** Text+image+video input with a measured MMMU-Pro 43.0 — genuine but entry-level multimodal understanding (benchgecko.ai).
- **Coding: 35/100.** No dated LiveCodeBench/SWE-bench result was published for the exact 2B ID, so the score reflects the family scaling curve and is capped by missing evidence.
- **Cost efficiency: 100/100.** Apache-2.0 weights and $0 hosted lanes make it effectively free.
- **Overall Score: 47/100.** Mean of the five quality dims (40+55+55+52+35)/5 = 47.4 → 47. Best-fit: offline/local assistants, form-filling and light tool routing.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-23
- Method: public internet research (official Hugging Face card `Qwen/Qwen3.5-2B`, BenchGecko/Artificial Analysis aggregate); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
