# Qwen 3.5 35B A3B — findings by DeepSeek 4.1 Flash

- Source: Alibaba/Qwen3.5-35B-A3B (`Qwen/Qwen3.5-35B-A3B`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 35B A3B
- **Short description:** Alibaba's February 2026 open-weight MoE (36B total / 3B active, Apache 2.0) for cheap multimodal agents, with 262K native context and coding scores well above its active-parameter budget.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-35B-A3B`); hosted via OpenRouter (`qwen/qwen3.5-35b-a3b`) and Alibaba Model Studio (OpenAI-compatible Chat Completions). No OpenCode Zen Free ID.
- **Release / knowledge:** February 2026 per vendor card and hosted catalogues; knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.5-35B-A3B` (catalogue alias `qwen3.5-35b-a3b`); Apache 2.0.
- **Context window:** 262,144 native (extensible to ~1,010,000 via YaRN); 65,536 max output — Hugging Face card.
- **Modalities:** text, image and video in; text out; reasoning mode; tool calling and structured outputs.
- **Pricing (as of 2026-10-23):** $0.14/$1.00 per 1M in/out (OpenRouter); $0.25/$2.00 (Model Studio). Self-host free under Apache 2.0.
- **Architecture:** sparse MoE, ~36B total / ~3B active, Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **40.5%** (huggingface.co/Qwen/Qwen3.5-35B-A3B)
- OSWorld-Verified / Tau2-Bench / GDPval-AA / Claw-Eval / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **84.2%** (huggingface.co/Qwen/Qwen3.5-35B-A3B)
- HMMT Feb 25: **89.0%**; HMMT Nov 25: **89.2%**; HLE w/ CoT: **22.4%** (Hugging Face card)
- Artificial Analysis Intelligence Index: **no verified public score found** for this exact ID

Coding:

- SWE-bench Verified: **69.2%**; LiveCodeBench v6: **74.6%**; OJBench: **36.0%**; CodeForces: **2028** (huggingface.co/Qwen/Qwen3.5-35B-A3B)
- DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:

- AA-LCR: **58.5%**; LongBench v2: **59.0%** (Hugging Face card). MRCR/RULER: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 66/100.** Terminal-Bench 2.0 40.5% is decent for 3B active, but no agentic-suite numbers were published (huggingface.co/Qwen/Qwen3.5-35B-A3B).
- **Reasoning: 79/100.** GPQA 84.2% and HMMT ~89% are strong for the active budget; HLE 22.4% caps it (Hugging Face card).
- **Context window: 76/100.** 262K native with AA-LCR 58.5 and LongBench v2 59.0 (Hugging Face card).
- **Multimodal: 76/100.** Native text+image+video input; no MMMU-class measurement for this ID, so coverage-only credit.
- **Coding: 71/100.** SWE-bench Verified 69.2% and LiveCodeBench v6 74.6% are excellent per active parameter, capped by Terminal-Bench 2.0 40.5% (Hugging Face card).
- **Cost efficiency: 93/100.** $0.14/$1.00 hosted, free self-hosting, and only 3B active parameters make always-on agents affordable (openrouter.ai/qwen/qwen3.5-35b-a3b).
- **Overall Score: 74/100.** Mean of the five quality dims (66+79+76+76+71)/5 = 73.6 → 74. Best-fit: high-volume multimodal agents and cheap coding assistance where breadth matters more than frontier depth.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-23
- Method: public internet research (official Hugging Face card `Qwen/Qwen3.5-35B-A3B`, OpenRouter and Alibaba Model Studio listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
