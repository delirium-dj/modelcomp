# Qwen 3.5 27B — findings by DeepSeek 4.1 Flash

- Source: Alibaba/Qwen3.5-27B (`Qwen/Qwen3.5-27B`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 27B
- **Short description:** Alibaba's dense 27.8B open-weight multimodal model from the Qwen 3.5 generation, Apache 2.0, with a 262K native window extensible to ~1M and strong coding/reasoning for its size; a member of the Qwen 3.5 family (not an alias of the 397B flagship).
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-27B`); hosted via OpenRouter (`qwen/qwen3.5-27b`) and Alibaba Model Studio, OpenAI-compatible Chat Completions. No OpenCode Zen Free ID.
- **Release / knowledge:** February 2026 per the vendor model card and hosted listings; knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.5-27B` (catalogue alias `qwen3.5-27b`); Apache 2.0.
- **Context window:** 262,144 native (extensible to ~1,010,000 via YaRN); 65,536 max output per hosted rows — verified against the Hugging Face card.
- **Modalities:** text, image and video in; text out; reasoning mode; tool calling and structured outputs.
- **Pricing (as of 2026-10-23):** $0.27/$2.16 per 1M in/out (OpenRouter); $0.30/$2.40 (Model Studio). Self-host free under Apache 2.0.
- **Architecture:** dense 27B-class decoder (27.8B total), Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **56.2%** (benchlm.ai comparison page, Qwen3.5-27B column)
- BrowseComp: **61%** (benchlm.ai)
- Terminal-Bench 2.0: **41.6%** (benchlm.ai; Hugging Face card)
- Claw-Eval / MCP-Atlas / SWE Atlas / GDPval-AA / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **85.5%** (huggingface.co/Qwen/Qwen3.5-27B; benchlm.ai)
- MMLU-Pro: **86.1%** (benchlm.ai)
- SuperGPQA: **65.6%** (benchlm.ai)
- HMMT Feb 25: **92.0%**; HMMT Nov 25: **89.8%**; HLE w/ CoT: **24.3%** (Hugging Face card)
- Artificial Analysis Intelligence Index / BenchLM overall: BenchLM public-lane **36.9** (estimated, #75/128)

Coding:

- SWE-bench Verified: **72.4%** (huggingface.co/Qwen/Qwen3.5-27B; benchlm.ai)
- LiveCodeBench v6: **80.7%** (huggingface.co/Qwen/Qwen3.5-27B; benchlm.ai)
- OJBench: **40.1%**; CodeForces: **1899** (Hugging Face card)
- SWE-Rebench: **58.9%** (benchlm.ai)
- DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:

- AA-LCR: **66.1%**; LongBench v2: **60.6%** (Hugging Face card). MRCR/RULER: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 68/100.** OSWorld-Verified 56.2% and BrowseComp 61% show solid GUI/browse-agent ability, while Terminal-Bench 2.0 41.6% caps it (benchlm.ai; huggingface.co/Qwen/Qwen3.5-27B).
- **Reasoning: 82/100.** GPQA 85.5%, MMLU-Pro 86.1% and HMMT ~90% are strong dense-27B results, held back by HLE 24.3% (huggingface.co/Qwen/Qwen3.5-27B).
- **Context window: 76/100.** 262K native (1M via YaRN) sits in the mid band, with AA-LCR 66.1 and LongBench v2 60.6 as respectable retrieval evidence (huggingface.co/Qwen/Qwen3.5-27B).
- **Multimodal: 78/100.** Native text+image+video input in an Apache-2.0 checkpoint; no MMMU-class figure was published for this exact ID, so the score reflects capability coverage rather than a measured multimodal benchmark.
- **Coding: 75/100.** SWE-bench Verified 72.4% and LiveCodeBench v6 80.7% are excellent at 27B, capped by Terminal-Bench 2.0 41.6% and SWE-Rebench 58.9% (benchlm.ai; huggingface.co/Qwen/Qwen3.5-27B).
- **Cost efficiency: 88/100.** $0.27/$2.16 hosted, or free self-hosting of Apache-2.0 weights, is competitive for this capability level (openrouter.ai/qwen/qwen3.5-27b).
- **Overall Score: 76/100.** Mean of the five quality dims (68+82+76+78+75)/5 = 75.8 → 76. Best-fit: self-hosted or cheap-hosted multimodal coding agents where dense 27B latency beats MoE depth.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-23
- Method: public internet research (official Hugging Face card `Qwen/Qwen3.5-27B`, BenchLM comparison pages, OpenRouter and Alibaba Model Studio listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
