# Qwen3.5 397B — findings by Ernie 5.5 Flash

- Source: Alibaba Cloud/Qwen3.5 397B (`qwen-3.5-397b`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 397B (Qwen3.5-397B-A17B)
- **Short description:** Alibaba's open-weight multimodal MoE flagship (released 2026-02-15): 397B total / 17B active parameters across 512 experts, with a 256K native context and text/image/video input.
- **Provider / access:** Self-hosted (Hugging Face `Qwen/Qwen3.5-397B-A17B`, Apache 2.0), Venice (`qwen3-5-397b-a17b`), OpenRouter, DeepInfra, plus gateway routes. Open weights.
- **Release / knowledge:** 2026-02-15; knowledge cutoff not published.
- **IDs:** `qwen-3.5-397b`, `Qwen/Qwen3.5-397B-A17B`, `qwen/qwen3.5-397b-a17b` (per RULES.md, the 397B suffix is a parameter count, never a version — never create a second folder).
- **Context window:** 128,000 on the Venice route (262,144 on most others; 256K native); max output 32,768 on Venice.
- **Modalities:** text, image and video in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.75 / $4.50 per 1M on Venice; other listings $0.45–$0.60 / $3.00–$3.60. Open weights are free to self-host.
- **Architecture:** open-weight MoE, 397B total / 17B active, 512 experts (Qwen); Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- τ³-Bench: **68.4**; MCP-Tasks: **74.2**; Claw-Eval: **56.8%**; QwenClawBench: **51.8**
- OSWorld-Verified: **62.2%**; BrowseComp: **69%**; Terminal-Bench 2.0: **52.5%**
- MCP Atlas: **46.1%**; Toolathlon: **36.3%**; DeepPlanning: **37.6%**; VITA-Bench: **43.7**

Reasoning / knowledge:

- GPQA Diamond: **88.4%**; MMLU-Pro: **87.8%** (apxml/Benchgen aggregations)
- HLE: **28.7%** (Benchgen aggregation)
- ARC-AGI / FrontierMath / CritPt: no verified public rows found

Coding:

- LiveCodeBench v6: **83.6%**; SWE-bench Verified: **76.2%**
- SWE-bench Pro: **50.9%**; SWE Multilingual: **69.3%**; NL2Repo: **32.2%**
- DeepSWE / FrontierCode: no verified public rows found

Long context:

- 256K native context; no MRCR / RULER / GraphWalks row found

### Normalized scores (1–100)

- **Tool use: 65/100.** τ³ 68.4 and MCP-Tasks 74.2 are mid, OSWorld-Verified 62.2% below the agent baseline; MCP Atlas 46.1%, Toolathlon 36.3% and DeepPlanning 37.6% are weak.
- **Reasoning: 80/100.** GPQA Diamond 88.4% and MMLU-Pro 87.8% are strong for an open model, but HLE 28.7% is low and no ARC-AGI/FrontierMath row was found.
- **Context window: 85/100.** 256K native (128K on the Venice route) — below the 1M open flagship tier.
- **Multimodal: 78/100.** Text, image and video in — the model is explicitly multimodal — but no public image/video benchmark rows were reached.
- **Coding: 72/100.** LiveCodeBench v6 83.6% and SWE-bench Verified 76.2% are decent for an open model, but SWE-bench Pro 50.9% and NL2Repo 32.2% are weak.
- **Cost efficiency: 88/100.** $0.75/$4.50 per 1M with Apache-2.0 weights for self-hosting.
- **Overall Score: 76.0/100.** Best fit for self-hosted multimodal work where open weights and Apache 2.0 matter; superseded by Qwen3.8 for capability at a similar price.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Qwen3.5-397B-A17B model card, BenchLM model profile, apxml/Benchgen aggregations, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen/Qwen3.5-397B-A17B — Hugging Face](https://huggingface.co/Qwen/Qwen3.5-397B-A17B)
  - [Qwen3.5 397B benchmarks & sources — BenchLM](https://benchlm.ai/models/qwen3-5-397b)
  - [Qwen3.5-397B-A17B specs & benchmarks — apxml](https://apxml.com/models/qwen35-397b-a17b)
- Future sources: add a new file next to this one, e.g. `Qwen_3.5_397B_v2.md`, using the same headings.