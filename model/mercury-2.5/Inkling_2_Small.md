# Mercury 2.5 — findings by Fledge Alpha

- Source: Inception (`mercury-2.5`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception's third-generation diffusion LLM — the fastest reasoning LLM in production (>1,100 t/s), released Sept 8, 2026.
- **Provider / access:** Inception API `mercury-2.5`, OpenRouter `inception/mercury-2.5`, Vercel AI Gateway; OpenAI-compatible Responses/Chat Completions.
- **Release / knowledge:** September 8, 2026; knowledge cutoff not published.
- **IDs:** `inception/mercury-2.5`; no Zen Free ID verified.
- **Context window:** 260K in, 65,536 max output.
- **Modalities:** text + image input per AIMLAPI docs, text out; tunable reasoning, tool use, parallel tool calls, JSON.
- **Pricing (as of 2026-10-05):** list $0.20 in / $0.75 out per 1M (OpenRouter/Vercel); launch window $0.04/$0.15 ended Sept 8.
- **Architecture:** proprietary diffusion LLM (dLLM), >1,100 tps generation, NVIDIA GPUs; Mercury Voice/Router previews alongside.

### Raw benchmarks found

Agent / tool use:

- τ³-bench: **96.0%** (BenchLM/vals)
- DeepSearchQA: **34.0%** (BenchLM)
- Terminal-Bench 2.1 (Vals): **34.1%** (BenchLM)

Reasoning / knowledge:

- GPQA-Diamond: **79.0%** (BenchLM)
- HLE: **11.8%** (Epoch AI via The Model Beat)
- IFBench: **77%** (BenchLM)
- AA Intelligence Index: **12.3–14.0** (cloudprice/AA)

Coding:

- SciCode: **38.5%** (Epoch AI)
- AA Coding Index: 16.0 (The Model Beat)
- HLE doesn't have LCB row published

Long context:

- AA-LCR: ~0.7 cloudprice percentile; 260K native — a diffusion architecture strength.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 84/100.** τ³-bench 96.0% is exceptional; TB 34.1% is weaker but verified.
- **Reasoning: 70/100.** GPQA 79.0, HLE 11.8 — solid narrow model with a hard-frontier caveat.
- **Context window: 89/100.** 260K full window; diffusion dLLM should maintain better long-form coherence.
- **Multimodal: 62/100.** Image input per AIMLAPI; no public vision benchmark rows.
- **Coding: 56/100.** SciCode 38.5 is middling; AA Coding 16 is low.
- **Cost efficiency: 88/100.** $0.20/$0.75 per 1M with >1,100 tps output — strong price/latency per point of accuracy.
- **Overall Score: 72/100.** Mean of five non-cost dims (84+70+89+62+56)/5 = 72.2 → 72; best fit: latency-sensitive parallel tool/agent workflows at ~1/10 GPT-5.6 Luna cost.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (Business Wire launch, Inception docs, BenchLM, CloudPrice, The Model Beat, Morningstar); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
