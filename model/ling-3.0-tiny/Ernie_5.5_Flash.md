# Ling 3.0 Tiny — findings by Ernie 5.5 Flash

- Source: InclusionAI/Ling 3.0 Tiny (`ling-3.0-tiny`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-tiny
- **Short description:** InclusionAI's lightweight hybrid-reasoning MoE (7.9B total / 1.3B active) built for local and edge deployment — DGX Spark, MacBook and Mac mini — with native hybrid reasoning, agentic tool use and a 256K window. BF16/FP8/INT4 weights, MIT license.
- **Provider / access:** Open weights `inclusionAI/Ling-3.0-tiny` on Hugging Face / ModelScope (MIT); OpenRouter free route `inclusionai/ling-3.0-tiny:free`; SGLang / vLLM / Ollama (Apple Silicon MLX) local serving.
- **Release / knowledge:** 2026 (Ling 3.0 family; catalogue ~2026-09); knowledge cutoff not published.
- **IDs:** `ling-3.0-tiny`, `inclusionAI/Ling-3.0-tiny`, `inclusionai/ling-3.0-tiny:free` (OpenRouter).
- **Context window:** 262,144 tokens (256K; 128K native + YaRN ×2); max output per model card recipes 32K.
- **Modalities:** text in / text out; reasoning (`enable_thinking`, ling3 parser); tool calls (ling3 tool-call parser); structured output.
- **Pricing (as of 2026-11-13):** $0 per token — MIT weights and a free OpenRouter route.
- **Architecture:** sparse MoE, 7.9B total / 1.3B active, 3:1 KDA:MLA hybrid (3 Kimi Delta Attention + 1 MLA per 4-layer block), 128 routed experts (8 active + 1 shared), MTP/NEXTN speculative decoding; FP8 ~100–105 tok/s on DGX Spark, ~86–90 tok/s on M4 Pro MacBook, ~8.34 GiB peak at 8K.

### Raw benchmarks found

> Vendor-reported AA Intelligence Index v4.1.1 = **25** and AA Agentic Index = **16** (model card), plus independent Artificial Analysis rows (via BenchLM): GDPval-AA 3.0%, AA-SciCode 24.2%, AA-LCR 60.3%, CritPt 0.0%, GPQA Diamond 73.4%, HLE 9.3%, AA-Omniscience index −15.9 (accuracy 37.9%, hallucination 86.7%). Full vendor table is image-only.

Agent / tool use:

- GDPval-AA: **3.0%** (independent — near floor)
- AA Agentic Index: **16** (vendor-reported)
- Terminal-Bench 2.1: run under the AA protocol (256K, 3 runs, mean) — value only in the vendor's image table, not extractable
- Tau2 / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- AA Intelligence Index v4.1.1: **25** (vendor-reported)
- GPQA Diamond: **73.4%** (independent); HLE: **9.3%**; CritPt: **0.0%**
- AA-Omniscience: accuracy **37.9%**, hallucination **86.7%**, index **−15.9**

Coding:

- AA-SciCode: **24.2%** (independent — the weakest coding row in the family)
- SWE-bench / LiveCodeBench / DeepSWE: no verified public score found

Long context:

- AA-LCR: **60.3%** at 256K — mid; no MRCR/GraphWalks row.

### Normalized scores (1–100)

- **Tool use: 35/100.** GDPval-AA 3.0% is near the floor and the AA Agentic Index is 16 — the agentic capability is the model's weakest dimension despite the tool-calling support. TB2.1 not extractable.
- **Reasoning: 55/100.** GPQA 73.4% is respectable for 1.3B-active, but HLE 9.3%, CritPt 0.0% and the −15.9 Omniscience index (86.7% hallucination) are bottom-tier; AA Index 25 is mid-low.
- **Context window: 85/100.** 256K — tier 200K–500K band; AA-LCR 60.3% is mid for the band.
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 40/100.** SciCode 24.2% is the weakest in the Ling 3.0 family; no other coding row. Capped by the single weak row.
- **Cost efficiency: 100/100.** $0 — MIT weights plus a free OpenRouter route; runs on a Mac mini.
- **Overall Score: 46/100.** Best fit for private, on-device reasoning and lightweight agent experiments where an 8B/1.3B-active footprint and zero cost dominate; the agentic floor rows and hallucination profile keep it far below the tracked frontier.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (inclusionAI/Ling-3.0-tiny Hugging Face model card, BenchLM evidence rows sourced from Artificial Analysis, OpenRouter listing); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [inclusionAI/Ling-3.0-tiny — Hugging Face model card](https://huggingface.co/inclusionAI/Ling-3.0-tiny)
  - [Ling 3.0 Tiny — BenchLM (9 evidence rows)](https://benchlm.ai/models/ling-3-0-tiny)
  - [Ling-3.0-tiny — Artificial Analysis](https://artificialanalysis.ai/models/ling-3-0-tiny)
  - [Ling-3.0-tiny — SGLang cookbook](https://docs.sglang.io/cookbook/autoregressive/InclusionAI/Ling-3.0-tiny)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.