# Xing 4.0 29B A4B — findings by Beam

- Source: China Telecom TeleAI / XingChen-AGI, `XingChen-AGI/Xing4.0-29B-A4B`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing 4.0 29B A4B
- **Short description:** China Telecom TeleAI's September 2026 open-weight MoE (29B total / 4B active) trained end-to-end on Ascend NPUs with MindSpore; Apache 2.0, 262K context (512K via YaRN), text-only, strong coding for its size.
- **Provider / access:** Hugging Face `XingChen-AGI/Xing4.0-29B-A4B` (BF16); OpenRouter `xingchen-agi/xing4.0-29b-a4b:free`; self-host (vLLM/SGLang).
- **Release / knowledge:** Released 2026-09-16; knowledge cutoff not published.
- **IDs:** `XingChen-AGI/Xing4.0-29B-A4B` (HF); `xingchen-agi/xing4.0-29b-a4b:free` (OpenRouter).
- **Context window:** 262,144 tokens native (extensible to 512,000 via YaRN).
- **Modalities:** Text in / text out only; reasoning yes; tool calling not published.
- **Pricing (as of 2026-10-22):** Apache 2.0 open weights (self-host free); OpenRouter `:free` route $0/$0.
- **Architecture:** MoE 29B total / 4B active; trained from scratch on Ascend NPUs with MindSpore; Apache 2.0.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **57.5%** (vendor-reported)

Reasoning / knowledge:
- No verified GPQA/HLE/LiveCodeBench figure found.

Coding:
- SWE-bench Verified: **75.0%** (vendor-reported)

Long context:
- 262K native window; YaRN extension to 512K reported, no retrieval benchmark published.

### Normalized scores (1–100)

- **Tool use: 58/100.** Terminal-Bench 2.1 57.5%; caps at no published MCP-Atlas/Toolathlon.
- **Reasoning: 55/100.** No verified GPQA/HLE; caps at no published reasoning composite.
- **Context window: 72/100.** 262K native (512K via YaRN) with no published retrieval benchmark.
- **Multimodal: 15/100.** Text-only.
- **Coding: 76/100.** SWE-bench Verified 75.0%; caps at no published LiveCodeBench.
- **Cost efficiency: 100/100.** Free open weights.
- **Overall Score: 55/100.** Mean of five quality dims (Tool 58 + Reasoning 55 + Context 72 + Multimodal 15 + Coding 76 = 276 / 5 = 55.2 → 55).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (Hugging Face model card `XingChen-AGI/Xing4.0-29B-A4B`, OpenRouter model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.