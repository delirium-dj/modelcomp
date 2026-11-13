# Mistral Large 3 — findings by Ernie 5.5 Flash

- Source: Mistral AI (`mistral-large-3`, v25.12 / 675B Instruct 2512)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 3 (Mistral Large 3 2512 / 675B Instruct 2512)
- **Short description:** Mistral AI's open-weight frontier-scale sparse MoE — 675B total / 41B active, trained from scratch, text + image input, released as the flagship of the December 2025 Mistral lineup alongside the Ministral 3 models.
- **Provider / access:** Mistral AI API (`mistral-large-latest` / `mistral-large-3`), Azure AI Foundry, OpenRouter and other gateways; open weights under Apache 2.0 (HF `mistralai/Mistral-Large-3-675B-Instruct-2512`).
- **Release / knowledge:** 2025-12-02 (v25.12; an earlier 2509 build was released 2025-09); knowledge cutoff not published.
- **IDs:** `mistral-large-latest`, `mistralai/Mistral-Large-3-675B-Instruct-2512`
- **Context window:** 256,000 tokens (Mistral lineup max; LLM-Stats/AI.info); BenchLM's catalog record lists 128K, so the vendor figure is 256K.
- **Modalities:** text + image input; text output. Function calling and JSON mode; non-reasoning (no extended thinking mode).
- **Pricing (as of 2026-11-12):** $0.50 / 1M input, $1.50 / 1M output (Mistral AI list price, via CloudPrice / LLM Cost Hub).
- **Architecture:** sparse Mixture-of-Experts, 675B total / 41B active, trained on ~3,000 H200s; Apache 2.0 open weights.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **24.6%** (Artificial Analysis)
- GDPval-AA: **588 Elo** (Artificial Analysis) · AA Agentic Index: **2.4**
- Terminal-Bench 2.1 / Tau3-Banking: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **68.0%** (AA-GPQA Diamond)
- HLE: **4.2%** (AA-HLE)
- AA-LCR: **36.0%** (long-context reasoning)
- CritPt: **0.0%** (AA run)
- Artificial Analysis Intelligence Index: **9.3** (as carried by BenchLM; low single-digit on AA's scale)
- AA-Omniscience: accuracy **25.0%**, hallucination rate **86.0%**, index **−39.6** — the standout weakness
- AA-IFBench: **36.2%**

Coding:

- AA-SciCode: **36.6%** · AA Coding Index: **20.1**
- SWE-bench Verified / SWE-Pro / LiveCodeBench / DeepSWE: **no verified public score found** in the AA-derived set

Multimodal:

- AA-MMMU-Pro: **55.7%** (independent run)

Long context:

- AA-LCR 36.0% at the 256K window — weak retrieval; no MRCR/RULER figures.

### Normalized scores (1–100)

- **Tool use: 35/100.** τ²-bench 24.6%, GDPval-AA 588 Elo and an AA Agentic Index of 2.4 describe a model that is poor at multi-step tool use; no terminal or MCP benchmarks exist.
- **Reasoning: 48/100.** GPQA Diamond 68.0% is passable, but HLE 4.2%, CritPt 0.0%, AA-LCR 36.0% and an 86% hallucination rate (Omniscience accuracy 25%) are well below the mid-band; non-reasoning design is the root cause.
- **Context window: 72/100.** 256,000 tokens is a 200K–500K-band window, but AA-LCR 36.0% means long-context use is unreliable, so it sits at the bottom of the band.
- **Multimodal: 65/100.** Text + image input with MMMU-Pro 55.7% — the "image in" band, no video/PDF/audio and no non-text output.
- **Coding: 40/100.** AA-SciCode 36.6% and AA Coding Index 20.1 are weak for a flagship; no SWE-bench Verified figure exists.
- **Cost efficiency: 90/100.** $0.50/$1.50 per 1M with Apache-2.0 weights is cheap for a 675B model (self-hosting is free); not counted toward Overall.
- **Overall Score: 52/100.** Mean of tool use 35, reasoning 48, context 72, multimodal 65, coding 40. Best fit: cost-sensitive European-hosted general text/multimodal work with light reasoning; the 86% hallucination rate rules it out for unsupervised agentic or factual workloads.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12 UTC
- Method: public internet research (Mistral model listing, BenchLM's Artificial Analysis-sourced rows, CloudPrice/LLM Cost Hub pricing, LLMLearner specs); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Mistral Large 3 (AA-sourced benchmark rows)](https://benchlm.ai/models/mistral-large-3)
  - [Artificial Analysis — Mistral Large 3](https://artificialanalysis.ai/models/mistral-large-3)
  - [LLM-Stats — Mistral Large 3 (675B Instruct 2512, 262K, $0.50/$1.50)](https://llm-stats.com/models/mistral-large-latest)
  - [LLMLearner — Mistral Large 3 (Apache 2.0, 675B/41B, 256K)](https://llmlearner.com/models/mistral-large-3-25-12)
  - [CloudPrice — Mistral Large 3 pricing](https://cloudprice.net/models/mistral-large-3)