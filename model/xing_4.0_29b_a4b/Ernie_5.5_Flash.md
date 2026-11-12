# Xing 4.0 29B-A4B — findings by Ernie 5.5 Flash

- Source: China Telecom (XingChen-AGI)/Xing 4.0 29B-A4B (`xing_4.0_29b_a4b`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing 4.0 29B-A4B (Xing4.0-29B-A4B)
- **Short description:** China Telecom AI's open agentic MoE (Xing series, formerly TeleChat): 29B total / 4B active, 256K context, Apache 2.0, trained entirely on Huawei Ascend NPUs.
- **Provider / access:** Self-hosted (Hugging Face `XingChen-AGI/Xing4.0-29B-A4B`, ModelScope), NanoGPT (`xingchen-agi/xing4.0-29b-a4b`), plus ~1 route.
- **Release / knowledge:** 2026-09-16 (open-sourced; models.dev record 2026-10-24); knowledge cutoff not published.
- **IDs:** `xing_4.0_29b_a4b`, `XingChen-AGI/Xing4.0-29B-A4B`, `xingchen-agi/xing4.0-29b-a4b`.
- **Context window:** 262,144 tokens (shared input/output); max output 262,144.
- **Modalities:** text in / text out; structured output; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $0.22 / $0.90 per 1M input/output (NanoGPT); cache read $0.011. Open weights, free to self-host.
- **Architecture:** MoE, 29B total / 4B active, MLA attention; Apache 2.0; Ascend-trained.

### Raw benchmarks found

> BenchLM has no profile (404 on `xing-4-0-29b-a4b`); the rows below are from independent coverage of the model card, labelled with their source.

Agent / tool use:

- Terminal-Bench: **reported as leading its comparison set** (threatfrontier) — no exact value in the sources reached
- Toolathlon / OSWorld / MCP-Atlas: no verified public rows found

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows found

Coding:

- SWE-bench Verified: **75.00%** (threatfrontier; Qwen3.6 76.00% for comparison)
- LiveCodeBench / DeepSWE / SWE-bench Pro: no verified public rows found

Long context:

- 262K native context; no MRCR / RULER / GraphWalks row found

### Normalized scores (1–100)

- **Tool use: 65/100.** Only a qualitative "Terminal-Bench lead" was found; no exact value, so the score is a conservative mid estimate.
- **Reasoning: 60/100.** No verified reasoning row exists; scored conservatively — low confidence.
- **Context window: 78/100.** 262,144 tokens with a 262,144 max output.
- **Multimodal: 15/100.** Text-only.
- **Coding: 75/100.** SWE-bench Verified 75.00% is decent for a 4B-active open model; no other coding row was verified.
- **Cost efficiency: 95/100.** $0.22/$0.90 per 1M with Apache-2.0 weights.
- **Overall Score: 58.6/100.** Best fit for self-hosted agentic coding on Ascend or consumer GPUs; one verified coding row means you should benchmark it yourself.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Hugging Face model card, threatfrontier/mindstudio/aicybr coverage, NanoGPT, models.dev); normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [XingChen-AGI/Xing4.0-29B-A4B — Hugging Face](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)
  - [Xing4.0-29B-A4B SWE-bench 75 coder — threatfrontier](https://threatfrontier.com/articles/xing4-0-29b-a4b-china-telecom-swe-bench-coding-model)
  - [Xing 4.0 29B A4B — NanoGPT](https://nano-gpt.com/models/text/xingchen-agi/xing4.0-29b-a4b)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add `Xing_4.0.29B_A4B_v2.md` next to this file.