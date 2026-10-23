# Qwen 3.5 122B A10B — findings by DeepSeek 4.1 Flash

- Source: Alibaba/Qwen3.5-122B-A10B (`Qwen/Qwen3.5-122B-A10B`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 122B A10B
- **Short description:** Alibaba's February 2026 open-weight MoE (125B total / 10B active, Apache 2.0) built for multimodal agentic work, with 262K native context and frontier-adjacent coding/reasoning at a mid-tier price.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-122B-A10B`); hosted via OpenRouter (`qwen/qwen3.5-122b-a10b`), SiliconFlow and Alibaba Model Studio (OpenAI-compatible Chat Completions). No OpenCode Zen Free ID.
- **Release / knowledge:** February 2026 per the vendor card and hosted catalogues; knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.5-122B-A10B` (catalogue aliases `qwen3.5-122b-a10b`); Apache 2.0.
- **Context window:** 262,144 native (extensible to ~1,010,000); 65,536 max output — verified against the Hugging Face card.
- **Modalities:** text, image and video in; text out; reasoning mode; tool calling and structured outputs.
- **Pricing (as of 2026-10-23):** $0.26/$2.08 per 1M in/out (OpenRouter/SiliconFlow); $0.40/$3.20 (Model Studio). Self-host free under Apache 2.0.
- **Architecture:** sparse MoE, ~125B total / ~10B active, Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **49.4%** (huggingface.co/Qwen/Qwen3.5-122B-A10B)
- Claw-Eval / MCP-Atlas / SWE Atlas / GDPval-AA / Tau2-Bench / OSWorld: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **86.6%** (huggingface.co/Qwen/Qwen3.5-122B-A10B)
- HMMT Feb 25: **91.4%**; HMMT Nov 25: **90.3%**; HLE w/ CoT: **25.3%** (Hugging Face card)
- MMLU-Pro / SuperGPQA / Artificial Analysis Intelligence Index: **no verified public score found** for this exact ID

Coding:

- SWE-bench Verified: **72.0%**; LiveCodeBench v6: **78.9%**; OJBench: **39.5%**; CodeForces: **2100** (huggingface.co/Qwen/Qwen3.5-122B-A10B)
- Terminal Bench 2: **49.4%** (Hugging Face card)
- DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:

- AA-LCR: **66.9%**; LongBench v2: **60.2%** (Hugging Face card). MRCR/RULER: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.0 49.4% is a real agentic signal, but no OSWorld/Tau2/GDPval figure was published, so the score is capped by missing tool-use evidence (huggingface.co/Qwen/Qwen3.5-122B-A10B).
- **Reasoning: 83/100.** GPQA 86.6% and HMMT ~90% are strong; HLE 25.3% keeps it below frontier closed models (Hugging Face card).
- **Context window: 76/100.** 262K native (1M via YaRN), AA-LCR 66.9 and LongBench v2 60.2 — solid mid-window retrieval (Hugging Face card).
- **Multimodal: 78/100.** Native text+image+video input in open weights; no MMMU-class number was published for the exact ID, so coverage drives the score.
- **Coding: 76/100.** SWE-bench Verified 72.0%, LiveCodeBench v6 78.9% and Terminal-Bench 2.0 49.4% make it a strong mid-tier coding model (Hugging Face card).
- **Cost efficiency: 88/100.** $0.26/$2.08 hosted or free Apache-2.0 self-hosting is good value for ~10B active parameters (openrouter.ai/qwen/qwen3.5-122b-a10b).
- **Overall Score: 77/100.** Mean of the five quality dims (70+83+76+78+76)/5 = 76.6 → 77. Best-fit: vision-language agent workloads and mid-scale coding where the 10B active budget keeps serving cheap.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-23
- Method: public internet research (official Hugging Face card `Qwen/Qwen3.5-122B-A10B`, OpenRouter and Alibaba Model Studio listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
